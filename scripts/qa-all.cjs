const { spawnSync } = require("node:child_process");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

const qaScripts = [
  "qa-sitemap.cjs",
  "qa-crawl.cjs",
  "qa-external-links.cjs",
  "qa-accessibility.cjs",
  "qa-images.cjs",
  "qa-schema.cjs",
  "qa-html.cjs"
];

for (const script of qaScripts) {
  const scriptPath = path.join(__dirname, script);
  console.log(`\n> ${script}`);
  const result = spawnSync(process.execPath, [scriptPath], {
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
