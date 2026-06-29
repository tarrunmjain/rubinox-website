const fs = require("node:fs");
const path = require("node:path");
const { execFileSync } = require("node:child_process");
const chromeLauncher = require("chrome-launcher");
const { chromium } = require("playwright");
const { startStaticServer } = require("./lib/static-server.cjs");

const root = path.resolve(__dirname, "..");
const reportDir = path.join(root, "reports");
const pages = [
  "/",
  "/quotation.html",
  "/technical-resources.html",
  "/company-profile.html",
  "/materials/ss-316l-supplier-india.html",
  "/materials/inconel-625-supplier-india.html",
  "/materials/api-5l-grade-b-pipe-supplier-india.html",
  "/blog.html",
  "/contact.html"
];

function score(category) {
  return category && typeof category.score === "number" ? Math.round(category.score * 100) : null;
}

function writeMarkdown(report) {
  const lines = [
    "# Rubinox Lighthouse Baseline",
    "",
    `Generated: ${report.generatedAt}`,
    "",
    "No score thresholds are enforced in this baseline runner.",
    "",
    "| URL | Performance | Accessibility | Best Practices | SEO |",
    "| --- | ---: | ---: | ---: | ---: |"
  ];

  for (const page of report.pages) {
    if (page.error) {
      lines.push(`| ${page.path} | error | error | error | error |`);
    } else {
      lines.push(`| ${page.path} | ${page.scores.performance} | ${page.scores.accessibility} | ${page.scores.bestPractices} | ${page.scores.seo} |`);
    }
  }

  lines.push("", "Full machine-readable details are in reports/lighthouse-baseline.json.", "");
  return lines.join("\n");
}

async function run() {
  fs.mkdirSync(reportDir, { recursive: true });
  const { default: lighthouse } = await import("lighthouse");
  const server = await startStaticServer({ root, port: 4186 });
  const chrome = await chromeLauncher.launch({
    chromePath: chromium.executablePath(),
    chromeFlags: [
      "--headless=new",
      "--no-sandbox",
      "--disable-gpu",
      "--disable-dev-shm-usage"
    ]
  });

  const results = [];

  try {
    for (const pagePath of pages) {
      const url = `${server.origin}${pagePath}`;
      const runnerResult = await lighthouse(url, {
        port: chrome.port,
        logLevel: "error",
        output: "json",
        onlyCategories: ["performance", "accessibility", "best-practices", "seo"]
      });

      const lhr = runnerResult.lhr;
      const scores = {
        performance: score(lhr.categories.performance),
        accessibility: score(lhr.categories.accessibility),
        bestPractices: score(lhr.categories["best-practices"]),
        seo: score(lhr.categories.seo)
      };

      results.push({
        path: pagePath,
        finalUrl: lhr.finalDisplayedUrl || lhr.finalUrl,
        scores,
        fetchTime: lhr.fetchTime
      });

      console.log(`${pagePath}: performance ${scores.performance}, accessibility ${scores.accessibility}, best practices ${scores.bestPractices}, SEO ${scores.seo}`);
    }
  } finally {
    try {
      if (process.platform === "win32" && chrome.pid) {
        try {
          execFileSync("taskkill", ["/PID", String(chrome.pid), "/T", "/F"], { stdio: "ignore" });
        } catch {
          // Chrome may already be closed by Lighthouse; that is fine for baseline collection.
        }
      } else {
        await chrome.kill();
      }
    } catch (error) {
      if (error.code !== "EPERM") throw error;
    }
    await server.close();
  }

  const report = {
    generatedAt: new Date().toISOString(),
    pages: results
  };

  fs.writeFileSync(path.join(reportDir, "lighthouse-baseline.json"), JSON.stringify(report, null, 2));
  fs.writeFileSync(path.join(reportDir, "lighthouse-baseline.md"), writeMarkdown(report));
}

run().catch(error => {
  console.error(error);
  process.exit(1);
});