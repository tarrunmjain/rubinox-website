const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require("playwright");

const root = path.resolve(__dirname, "..");
const port = 4173;
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

async function expectText(locator, expected) {
  const text = await locator.textContent();
  if (!text || !text.includes(expected)) {
    throw new Error(`Expected text "${expected}", received "${text || ""}"`);
  }
}

async function main() {
  const server = http.createServer(serveFile);
  await new Promise(resolve => server.listen(port, host, resolve));

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.route("**/*", route => {
      const requestUrl = route.request().url();
      if (requestUrl.startsWith(`http://${host}:${port}`)) return route.continue();
      return route.abort();
    });

    await page.goto(`http://${host}:${port}/`, { waitUntil: "domcontentloaded" });
    if (!/Stainless Steel Supplier in Mumbai, India/i.test(await page.title())) {
      throw new Error(`Unexpected home page title: ${await page.title()}`);
    }
    await expectText(page.getByRole("heading", { level: 1 }), "Stainless Steel Supplier");

    await page.goto(`http://${host}:${port}/quotation.html`, { waitUntil: "domcontentloaded" });
    await expectText(page.getByRole("heading", { level: 1 }), "Request a Fast Quotation");

    await page.goto(`http://${host}:${port}/industries.html`, { waitUntil: "domcontentloaded" });
    await expectText(page.getByRole("heading", { level: 1 }), "Industries We Serve");

    await page.goto(`http://${host}:${port}/materials/stainless-steel.html`, { waitUntil: "domcontentloaded" });
    await expectText(page.getByRole("heading", { level: 1 }), "Stainless Steel Supplier in India");

    await page.getByRole("link", { name: "304", exact: true }).click();
    await page.waitForURL("**/materials/ss-304-supplier-india.html");
    await expectText(page.getByRole("heading", { level: 1 }), "SS 304 Supplier in India");

    console.log("Navigation verification passed.");
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
