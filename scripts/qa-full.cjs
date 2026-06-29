const path = require("node:path");
const { spawnSync } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const node = process.execPath;

const checks = [
  ["qa:sitemap", [path.join(__dirname, "qa-sitemap.cjs")]],
  ["qa:crawl", [path.join(__dirname, "qa-crawl.cjs")]],
  ["qa:schema", [path.join(__dirname, "qa-schema.cjs")]],
  ["qa:accessibility", [path.join(__dirname, "qa-accessibility.cjs")]],
  ["test:navigation", [path.join(__dirname, "verify-navigation.cjs")]],
  ["qa:html", [path.join(__dirname, "qa-html.cjs")]],
  ["qa:links", [path.join(__dirname, "qa-crawl.cjs")]],
  ["qa:pa11y", [path.join(__dirname, "qa-pa11y.cjs")]],
  ["qa:lighthouse", [path.join(__dirname, "qa-lighthouse.cjs")]],
  ["qa:images:audit", [path.join(__dirname, "audit-images.js")]],
  ["qa:forbidden-claims", [path.join(__dirname, "check-forbidden-claims.js")]]
];

for (const [label, args] of checks) {
  console.log(`\n> ${label}`);
  const result = spawnSync(node, args, {
    cwd: root,
    stdio: "inherit",
    windowsHide: true
  });

  if (result.error) {
    console.error(result.error);
    process.exit(1);
  }

  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
}