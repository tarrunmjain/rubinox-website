const fs = require("node:fs");
const path = require("node:path");
const { spawn } = require("node:child_process");
const { chromium } = require("playwright");
const { startStaticServer } = require("./lib/static-server.cjs");

const root = path.resolve(__dirname, "..");
const reportDir = path.join(root, "reports");
const pa11yCi = path.join(root, "node_modules", "pa11y-ci", "bin", "pa11y-ci.js");

async function run() {
  fs.mkdirSync(reportDir, { recursive: true });
  const server = await startStaticServer({ root, port: 4184 });
  const browserPath = chromium.executablePath();

  try {
    const code = await new Promise(resolve => {
      const child = spawn(process.execPath, [pa11yCi, "--config", ".pa11yci", "--threshold", "7"], {
        cwd: root,
        stdio: "inherit",
        windowsHide: true,
        env: {
          ...process.env,
          CHROME_PATH: browserPath,
          PUPPETEER_EXECUTABLE_PATH: browserPath,
          PUPPETEER_SKIP_DOWNLOAD: "true"
        }
      });
      child.on("exit", resolve);
    });

    process.exitCode = code || 0;
  } finally {
    await server.close();
  }
}

run().catch(error => {
  console.error(error);
  process.exit(1);
});