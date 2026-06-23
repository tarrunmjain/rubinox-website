const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");

const root = path.resolve(__dirname, "..");
const reportDir = path.join(root, "tool-reports");
const outputDir = path.join(reportDir, "optimized-assets-preview");
fs.mkdirSync(outputDir, { recursive: true });

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    if (entry.name === ".git" || entry.name === "node_modules" || entry.name === ".pnpm-store" || entry.name === "tool-reports") return [];
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

async function run() {
  const images = walk(root).filter(file => /\.(png|jpe?g|webp)$/i.test(file));
  const report = [];

  for (const file of images) {
    const rel = path.relative(root, file).replaceAll("\\", "/");
    const originalBytes = fs.statSync(file).size;
    const metadata = await sharp(file).metadata();
    const previewPath = path.join(outputDir, rel.replace(/[\\/]/g, "__").replace(/\.(png|jpe?g|webp)$/i, ".webp"));
    await sharp(file).webp({ quality: 78 }).toFile(previewPath);
    const previewBytes = fs.statSync(previewPath).size;
    report.push({
      file: rel,
      format: metadata.format,
      width: metadata.width,
      height: metadata.height,
      originalBytes,
      optimizedPreviewBytes: previewBytes,
      potentialSavingsBytes: Math.max(0, originalBytes - previewBytes)
    });
  }

  report.sort((a, b) => b.potentialSavingsBytes - a.potentialSavingsBytes);
  fs.writeFileSync(path.join(reportDir, "image-optimization.json"), JSON.stringify(report, null, 2));

  const totalOriginal = report.reduce((sum, item) => sum + item.originalBytes, 0);
  const totalPreview = report.reduce((sum, item) => sum + item.optimizedPreviewBytes, 0);
  console.log(`Images analyzed: ${report.length}`);
  console.log(`Original total: ${(totalOriginal / 1024).toFixed(1)} KB`);
  console.log(`Optimized preview total: ${(totalPreview / 1024).toFixed(1)} KB`);
  console.log(`Potential savings preview: ${((totalOriginal - totalPreview) / 1024).toFixed(1)} KB`);
  console.log("Original website images were not modified.");
}

run().catch(error => {
  console.error(error);
  process.exit(1);
});
