const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");

const root = path.resolve(__dirname, "..");
const reportDir = path.join(root, "reports");
const imageExtensions = new Set([".webp", ".jpg", ".jpeg", ".png", ".gif", ".svg", ".ico"]);
const oversizedThresholdBytes = Number(process.env.IMAGE_AUDIT_MAX_BYTES || 250 * 1024);

function toRel(file) {
  return path.relative(root, file).replaceAll("\\", "/");
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    if ([".git", "node_modules", ".pnpm-store", "tool-reports", "reports"].includes(entry.name)) return [];
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function getAttribute(tag, name) {
  const pattern = new RegExp(`\\b${name}\\s*=\\s*("([^"]*)"|'([^']*)'|([^\\s>]+))`, "i");
  const match = tag.match(pattern);
  return match ? (match[2] ?? match[3] ?? match[4] ?? "").trim() : null;
}

function lineNumber(text, index) {
  return text.slice(0, index).split(/\r\n|\r|\n/).length;
}

function splitSrcset(value) {
  return value.split(",").map(part => part.trim().split(/\s+/)[0]).filter(Boolean);
}

function resolveLocalReference(ref, fromFile) {
  if (!ref) return null;
  const trimmed = ref.trim();
  if (!trimmed || /^(?:[a-z]+:|#)/i.test(trimmed)) return null;
  const clean = trimmed.split("#")[0].split("?")[0];
  if (!clean) return null;
  const resolved = clean.startsWith("/")
    ? path.join(root, clean.replace(/^[/\\]+/, ""))
    : path.resolve(path.dirname(fromFile), clean);
  return resolved.startsWith(root) ? resolved : null;
}

function readHtmlReferences(htmlFiles) {
  const references = [];
  const missingAltText = [];

  for (const file of htmlFiles) {
    const relFile = toRel(file);
    const html = fs.readFileSync(file, "utf8");

    for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
      const tag = match[0];
      const src = getAttribute(tag, "src");
      const alt = getAttribute(tag, "alt");
      const resolved = resolveLocalReference(src, file);

      if (resolved) {
        references.push({ file: relFile, line: lineNumber(html, match.index), attribute: "src", value: src, resolved });
      }

      if (alt === null || alt.trim() === "") {
        missingAltText.push({ file: relFile, line: lineNumber(html, match.index), src: src || "", reason: alt === null ? "missing alt" : "empty alt" });
      }
    }

    for (const match of html.matchAll(/<(?:source|img)\b[^>]*\bsrcset\s*=\s*("([^"]*)"|'([^']*)'|([^\s>]+))[^>]*>/gi)) {
      const srcset = match[2] ?? match[3] ?? match[4] ?? "";
      for (const candidate of splitSrcset(srcset)) {
        const resolved = resolveLocalReference(candidate, file);
        if (resolved) {
          references.push({ file: relFile, line: lineNumber(html, match.index), attribute: "srcset", value: candidate, resolved });
        }
      }
    }
  }

  return { references, missingAltText };
}

async function getImageMetadata(file) {
  const stat = fs.statSync(file);
  const item = {
    file: toRel(file),
    bytes: stat.size,
    extension: path.extname(file).toLowerCase(),
    isWebP: path.extname(file).toLowerCase() === ".webp",
    oversized: stat.size > oversizedThresholdBytes
  };

  try {
    const metadata = await sharp(file).metadata();
    item.format = metadata.format || null;
    item.width = metadata.width || null;
    item.height = metadata.height || null;
  } catch (error) {
    item.metadataError = error.message;
  }

  return item;
}

function repeatedReferences(references) {
  const byImage = new Map();
  for (const ref of references) {
    const rel = toRel(ref.resolved);
    if (!byImage.has(rel)) byImage.set(rel, []);
    byImage.get(rel).push({ file: ref.file, line: ref.line, attribute: ref.attribute });
  }

  return [...byImage.entries()]
    .filter(([, refs]) => refs.length > 1)
    .map(([file, refs]) => ({ file, count: refs.length, references: refs }));
}

function duplicateFiles(imageFiles) {
  const byHash = new Map();
  for (const file of imageFiles) {
    const hash = crypto.createHash("sha1").update(fs.readFileSync(file)).digest("hex");
    if (!byHash.has(hash)) byHash.set(hash, []);
    byHash.get(hash).push(toRel(file));
  }

  return [...byHash.values()].filter(files => files.length > 1).map(files => ({ count: files.length, files }));
}

function markdownReport(report) {
  const lines = [
    "# Rubinox Image Audit",
    "",
    `Generated: ${report.generatedAt}`,
    `Oversized threshold: ${Math.round(report.oversizedThresholdBytes / 1024)} KB`,
    "",
    "## Summary",
    "",
    `- Image files found: ${report.summary.imageFiles}`,
    `- Referenced image URLs found in HTML: ${report.summary.references}`,
    `- Missing image files: ${report.summary.missingFiles}`,
    `- Non-WebP image files: ${report.summary.nonWebP}`,
    `- Oversized image files: ${report.summary.oversized}`,
    `- Repeated image references: ${report.summary.repeatedReferences}`,
    `- Duplicate image file groups: ${report.summary.duplicateFileGroups}`,
    `- Missing or empty alt text instances: ${report.summary.missingAltText}`,
    "",
    "## Missing Files",
    ""
  ];

  if (report.missingFiles.length === 0) {
    lines.push("None detected.");
  } else {
    for (const item of report.missingFiles.slice(0, 100)) {
      lines.push(`- ${item.file}:${item.line} references ${item.value}`);
    }
  }

  lines.push("", "## Oversized Images", "");
  if (report.oversizedImages.length === 0) {
    lines.push("None over the current threshold.");
  } else {
    for (const item of report.oversizedImages.slice(0, 100)) {
      lines.push(`- ${item.file}: ${(item.bytes / 1024).toFixed(1)} KB${item.width && item.height ? `, ${item.width}x${item.height}` : ""}`);
    }
  }

  lines.push("", "## Missing Or Empty Alt Text", "");
  if (report.missingAltText.length === 0) {
    lines.push("None detected.");
  } else {
    for (const item of report.missingAltText.slice(0, 100)) {
      lines.push(`- ${item.file}:${item.line} - ${item.reason}${item.src ? ` (${item.src})` : ""}`);
    }
  }

  lines.push("", "Full machine-readable details are in reports/image-audit.json.", "");
  return lines.join("\n");
}

async function run() {
  fs.mkdirSync(reportDir, { recursive: true });
  const allFiles = walk(root);
  const htmlFiles = allFiles.filter(file => file.endsWith(".html"));
  const imageFiles = allFiles.filter(file => imageExtensions.has(path.extname(file).toLowerCase()));
  const { references, missingAltText } = readHtmlReferences(htmlFiles);
  const missingFiles = references
    .filter(ref => !fs.existsSync(ref.resolved))
    .map(ref => ({ file: ref.file, line: ref.line, attribute: ref.attribute, value: ref.value }));
  const metadata = await Promise.all(imageFiles.map(getImageMetadata));
  const nonWebPImages = metadata.filter(item => !item.isWebP);
  const oversizedImages = metadata.filter(item => item.oversized).sort((a, b) => b.bytes - a.bytes);
  const repeatRefs = repeatedReferences(references);
  const duplicateFileGroups = duplicateFiles(imageFiles);

  const report = {
    generatedAt: new Date().toISOString(),
    oversizedThresholdBytes,
    summary: {
      imageFiles: imageFiles.length,
      references: references.length,
      missingFiles: missingFiles.length,
      nonWebP: nonWebPImages.length,
      oversized: oversizedImages.length,
      repeatedReferences: repeatRefs.length,
      duplicateFileGroups: duplicateFileGroups.length,
      missingAltText: missingAltText.length
    },
    missingFiles,
    nonWebPImages,
    oversizedImages,
    repeatedReferences: repeatRefs,
    duplicateFileGroups,
    missingAltText,
    images: metadata
  };

  fs.writeFileSync(path.join(reportDir, "image-audit.json"), JSON.stringify(report, null, 2));
  fs.writeFileSync(path.join(reportDir, "image-audit.md"), markdownReport(report));

  console.log(`Image files found: ${report.summary.imageFiles}`);
  console.log(`Referenced image URLs found in HTML: ${report.summary.references}`);
  console.log(`Missing image files: ${report.summary.missingFiles}`);
  console.log(`Non-WebP image files: ${report.summary.nonWebP}`);
  console.log(`Oversized image files: ${report.summary.oversized}`);
  console.log(`Missing or empty alt text instances: ${report.summary.missingAltText}`);
  console.log("Original website images were not modified.");
}

run().catch(error => {
  console.error(error);
  process.exit(1);
});