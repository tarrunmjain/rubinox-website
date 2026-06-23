const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

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

function serveFile(root, host, port, req, res) {
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

async function startStaticServer({ root, host = "127.0.0.1", port }) {
  const server = http.createServer((req, res) => serveFile(root, host, port, req, res));
  await new Promise(resolve => server.listen(port, host, resolve));
  return {
    origin: `http://${host}:${port}`,
    async close() {
      if (typeof server.closeAllConnections === "function") {
        server.closeAllConnections();
      }
      await Promise.race([
        new Promise(resolve => server.close(resolve)),
        new Promise(resolve => setTimeout(resolve, 3000))
      ]);
    }
  };
}

module.exports = { startStaticServer };
