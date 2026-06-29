const { chromium } = require("playwright");

const host = "127.0.0.1";
const port = 4185;
const origin = `http://${host}:${port}`;
const node = "C:\\Users\\Dell\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\bin\\node.exe";

module.exports = {
  ci: {
    collect: {
      chromePath: chromium.executablePath(),
      numberOfRuns: 1,
      startServerCommand: `"${node}" scripts/serve-static.cjs ${port}`,
      startServerReadyPattern: "Serving HTTP",
      startServerReadyTimeout: 15000,
      url: [
        `${origin}/`,
        `${origin}/quotation.html`,
        `${origin}/technical-resources.html`,
        `${origin}/company-profile.html`,
        `${origin}/materials/ss-316l-supplier-india.html`,
        `${origin}/materials/inconel-625-supplier-india.html`,
        `${origin}/materials/api-5l-grade-b-pipe-supplier-india.html`,
        `${origin}/blog.html`,
        `${origin}/contact.html`
      ],
      settings: {
        chromeFlags: "--headless=new --no-sandbox --disable-gpu --disable-dev-shm-usage",
        onlyCategories: ["performance", "accessibility", "best-practices", "seo"]
      }
    },
    assert: {
      assertions: {}
    },
    upload: {
      target: "filesystem",
      outputDir: "./reports/lighthouse"
    }
  }
};