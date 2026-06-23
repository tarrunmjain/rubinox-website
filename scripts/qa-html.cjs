const fs = require("node:fs");
const path = require("node:path");
const { HtmlValidate } = require("html-validate");

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
  const htmlvalidate = new HtmlValidate({
    extends: ["html-validate:recommended"],
    rules: {
      "no-inline-style": "off",
      "require-sri": "off",
      "void-style": "off"
    }
  });

  const results = [];
  for (const file of htmlFiles) {
    const rel = path.relative(root, file).replaceAll("\\", "/");
    const html = fs.readFileSync(file, "utf8");
    const result = await htmlvalidate.validateString(html, rel);
    results.push({
      file: rel,
      valid: result.valid,
      errorCount: result.errorCount,
      warningCount: result.warningCount,
      messages: result.results.flatMap(fileResult => fileResult.messages).slice(0, 50)
    });
    console.log(`${rel}: ${result.valid ? "valid" : `${result.errorCount} errors, ${result.warningCount} warnings`}`);
  }

  fs.writeFileSync(path.join(reportDir, "html-validate.json"), JSON.stringify(results, null, 2));
  const invalid = results.filter(result => !result.valid);
  console.log(`HTML pages checked: ${results.length}`);
  console.log(`Invalid pages: ${invalid.length}`);
}

run().catch(error => {
  console.error(error);
  process.exit(1);
});
