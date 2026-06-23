const fs = require("node:fs");
const path = require("node:path");
const jsonld = require("jsonld");

const root = path.resolve(__dirname, "..");
const reportDir = path.join(root, "tool-reports");
fs.mkdirSync(reportDir, { recursive: true });

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    if (entry.name === ".git" || entry.name === "node_modules" || entry.name === ".pnpm-store" || entry.name === "tool-reports") return [];
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

async function run() {
  const htmlFiles = walk(root).filter(file => file.endsWith(".html"));
  const report = [];

  for (const file of htmlFiles) {
    const rel = path.relative(root, file).replaceAll("\\", "/");
    const html = fs.readFileSync(file, "utf8");
    const blocks = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
    for (let index = 0; index < blocks.length; index += 1) {
      const raw = blocks[index][1].trim();
      const item = { file: rel, block: index + 1, validJson: false, validJsonLd: false, types: [] };
      try {
        const parsed = JSON.parse(raw);
        item.validJson = true;
        const expanded = await jsonld.expand(parsed);
        item.validJsonLd = true;
        item.types = expanded.flatMap(node => node["@type"] || []);
      } catch (error) {
        item.error = error.message;
      }
      report.push(item);
    }
  }

  fs.writeFileSync(path.join(reportDir, "schema-jsonld.json"), JSON.stringify(report, null, 2));
  const invalid = report.filter(item => !item.validJson || !item.validJsonLd);
  console.log(`HTML pages scanned: ${htmlFiles.length}`);
  console.log(`JSON-LD blocks found: ${report.length}`);
  console.log(`Invalid JSON-LD blocks: ${invalid.length}`);
}

run().catch(error => {
  console.error(error);
  process.exit(1);
});
