const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require("playwright");
const AxeBuilder = require("@axe-core/playwright").default;
const { startStaticServer } = require("./lib/static-server.cjs");

const root = path.resolve(__dirname, "..");
const reportDir = path.join(root, "tool-reports");
fs.mkdirSync(reportDir, { recursive: true });

const pages = [
  "/",
  "/quotation.html",
  "/industries.html",
  "/materials/stainless-steel.html",
  "/materials/ss-304-supplier-india.html"
];

async function run() {
  const server = await startStaticServer({ root, port: 4183 });
  const browser = await chromium.launch({ headless: true });
  const results = [];

  try {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.route("**/*", route => {
      const url = route.request().url();
      return url.startsWith(server.origin) ? route.continue() : route.abort();
    });

    for (const urlPath of pages) {
      await page.goto(`${server.origin}${urlPath}`, { waitUntil: "domcontentloaded" });
      const result = await new AxeBuilder({ page }).analyze();
      results.push({
        page: urlPath,
        violations: result.violations.map(violation => ({
          id: violation.id,
          impact: violation.impact,
          description: violation.description,
          nodes: violation.nodes.length
        }))
      });
      console.log(`${urlPath}: ${result.violations.length} accessibility violations`);
    }
  } finally {
    await browser.close();
    await server.close();
  }

  fs.writeFileSync(path.join(reportDir, "accessibility-axe.json"), JSON.stringify(results, null, 2));
  const totalViolations = results.reduce((sum, item) => sum + item.violations.length, 0);
  console.log(`Accessibility pages checked: ${results.length}`);
  console.log(`Total violations: ${totalViolations}`);
}

run().catch(error => {
  console.error(error);
  process.exit(1);
});
