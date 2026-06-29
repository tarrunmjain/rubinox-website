const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const reportDir = path.join(root, "reports");
const extensions = new Set([".html", ".js", ".css", ".md"]);
const riskyPhrases = [
  "manufacturer",
  "manufacturing",
  "factory",
  "mill",
  "plant",
  "ready stock",
  "immediate delivery",
  "guaranteed stock",
  "ISO certified",
  "PED certified",
  "NORSOK",
  "IBR approved",
  "EIL approved",
  "DNV approved",
  "Lloyds approved",
  "lowest price",
  "live price",
  "price list",
  "aggregateRating",
  "reviewCount"
];

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

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function phrasePattern(phrase) {
  const escaped = escapeRegExp(phrase).replace(/\s+/g, "\\s+");
  return new RegExp(`\\b${escaped}\\b`, "gi");
}

function contextLine(text, index) {
  const before = text.lastIndexOf("\n", index) + 1;
  const afterIndex = text.indexOf("\n", index);
  const after = afterIndex === -1 ? text.length : afterIndex;
  return text.slice(before, after).trim().replace(/\s+/g, " ");
}

function lineNumber(text, index) {
  return text.slice(0, index).split(/\r\n|\r|\n/).length;
}

function reviewNote(phrase, context) {
  const normalized = context.toLowerCase();
  if (phrase.toLowerCase() === "manufacturer" && (normalized.includes("not a manufacturer") || normalized.includes("is rubinox a manufacturer"))) {
    return "Possible safe clarification context; review only.";
  }
  return "Review for unsupported claim risk; no automatic rewrite applied.";
}

function markdownReport(report) {
  const lines = [
    "# Rubinox Forbidden Claim Scan",
    "",
    `Generated: ${report.generatedAt}`,
    "",
    "## Summary",
    "",
    `- Files scanned: ${report.summary.filesScanned}`,
    `- Phrases checked: ${report.summary.phrasesChecked}`,
    `- Matches flagged for review: ${report.summary.matches}`,
    "",
    "These matches are review flags only. Some terms can be valid in safe FAQ, policy, or tooling context.",
    "",
    "## Matches",
    ""
  ];

  if (report.matches.length === 0) {
    lines.push("None detected.");
  } else {
    for (const item of report.matches.slice(0, 200)) {
      lines.push(`- ${item.file}:${item.line} - ${item.phrase} - ${item.note}`);
      lines.push(`  Context: ${item.context}`);
    }
  }

  lines.push("", "Full machine-readable details are in reports/forbidden-claims.json.", "");
  return lines.join("\n");
}

function run() {
  fs.mkdirSync(reportDir, { recursive: true });
  const files = walk(root).filter(file => extensions.has(path.extname(file).toLowerCase()));
  const matches = [];

  for (const file of files) {
    const rel = toRel(file);
    const text = fs.readFileSync(file, "utf8");
    for (const phrase of riskyPhrases) {
      const pattern = phrasePattern(phrase);
      for (const match of text.matchAll(pattern)) {
        const context = contextLine(text, match.index);
        matches.push({
          file: rel,
          line: lineNumber(text, match.index),
          phrase,
          context,
          note: reviewNote(phrase, context)
        });
      }
    }
  }

  const report = {
    generatedAt: new Date().toISOString(),
    phrases: riskyPhrases,
    summary: {
      filesScanned: files.length,
      phrasesChecked: riskyPhrases.length,
      matches: matches.length
    },
    matches
  };

  fs.writeFileSync(path.join(reportDir, "forbidden-claims.json"), JSON.stringify(report, null, 2));
  fs.writeFileSync(path.join(reportDir, "forbidden-claims.md"), markdownReport(report));

  console.log(`Files scanned: ${report.summary.filesScanned}`);
  console.log(`Matches flagged for review: ${report.summary.matches}`);
  console.log("No files were rewritten.");

  if (process.env.STRICT_FORBIDDEN_CLAIMS === "1" && matches.length > 0) {
    process.exit(1);
  }
}

run();