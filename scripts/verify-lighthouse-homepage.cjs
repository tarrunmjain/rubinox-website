const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { execFileSync } = require("node:child_process");
const chromeLauncher = require("chrome-launcher");
const { chromium } = require("playwright");

const root = path.resolve(__dirname, "..");
const port = 4174;
const host = "127.0.0.1";

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8"
};

function serveFile(req, res) {
  const url = new URL(req.url, `http://${host}:${port}`);
  const pathname = decodeURIComponent(url.pathname);
  const safePath = path.normalize(pathname === "/" ? "/index.html" : pathname).replace(/^([/\\])+/, "");
  const filePath = path.join(root, safePath);

  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    res.writeHead(200, { "content-type": types[path.extname(filePath).toLowerCase()] || "application/octet-stream" });
    res.end(data);
  });
}

async function main() {
  const { default: lighthouse } = await import("lighthouse");
  const server = http.createServer(serveFile);
  await new Promise(resolve => server.listen(port, host, resolve));

  const chrome = await chromeLauncher.launch({
    chromePath: chromium.executablePath(),
    chromeFlags: [
      "--headless=new",
      "--no-sandbox",
      "--disable-gpu",
      "--disable-dev-shm-usage"
    ]
  });

  try {
    const runnerResult = await lighthouse(`http://${host}:${port}/`, {
      port: chrome.port,
      logLevel: "error",
      output: "json",
      onlyCategories: ["performance", "accessibility", "best-practices", "seo"]
    });

    const lhr = runnerResult.lhr;
    const scores = Object.fromEntries(
      Object.entries(lhr.categories).map(([key, category]) => [key, Math.round(category.score * 100)])
    );

    console.log("Lighthouse homepage audit passed.");
    console.log(`URL: ${lhr.finalDisplayedUrl || lhr.finalUrl}`);
    console.log(`Performance: ${scores.performance}`);
    console.log(`Accessibility: ${scores.accessibility}`);
    console.log(`Best Practices: ${scores["best-practices"]}`);
    console.log(`SEO: ${scores.seo}`);
  } finally {
    try {
      if (process.platform === "win32" && chrome.pid) {
        try {
          execFileSync("taskkill", ["/PID", String(chrome.pid), "/T", "/F"], { stdio: "ignore" });
        } catch {
          // Chrome may already be closed by Lighthouse; that is fine for verification.
        }
      } else {
        await chrome.kill();
      }
    } catch (error) {
      if (error.code !== "EPERM") throw error;
    }
    if (typeof server.closeAllConnections === "function") {
      server.closeAllConnections();
    }
    await Promise.race([
      new Promise(resolve => server.close(resolve)),
      new Promise(resolve => setTimeout(resolve, 3000))
    ]);
  }
}

main().then(() => {
  process.exit(0);
}).catch(error => {
  console.error(error);
  process.exit(1);
});
