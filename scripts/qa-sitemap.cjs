const fs = require("node:fs");
const path = require("node:path");
const { XMLParser } = require("fast-xml-parser");

const root = path.resolve(__dirname, "..");
const reportDir = path.join(root, "tool-reports");
fs.mkdirSync(reportDir, { recursive: true });

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    if ([".git", "node_modules", ".pnpm-store", "tool-reports", "reports", ".lighthouseci"].includes(entry.name)) return [];
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const sitemapPath = path.join(root, "sitemap.xml");
const xml = fs.readFileSync(sitemapPath, "utf8");
const parsed = new XMLParser().parse(xml);
const urls = (parsed.urlset.url || []).map(item => typeof item.loc === "string" ? item.loc : "");
const localHtml = walk(root)
  .filter(file => file.endsWith(".html"))
  .map(file => path.relative(root, file).replaceAll("\\", "/"))
  .sort();

const sitemapLocal = urls.map(url => {
  const parsedUrl = new URL(url);
  return decodeURIComponent(parsedUrl.pathname.replace(/^\//, "") || "index.html");
}).sort();

const missingFromSitemap = localHtml.filter(file => !sitemapLocal.includes(file));
const missingLocalFiles = sitemapLocal.filter(file => !localHtml.includes(file));
const duplicateUrls = urls.filter((url, index) => urls.indexOf(url) !== index);

const report = {
  tool: "fast-xml-parser",
  sitemap: "sitemap.xml",
  sitemapUrlCount: urls.length,
  localHtmlCount: localHtml.length,
  missingFromSitemap,
  missingLocalFiles,
  duplicateUrls
};

fs.writeFileSync(path.join(reportDir, "sitemap-analysis.json"), JSON.stringify(report, null, 2));

console.log(`Sitemap URLs: ${urls.length}`);
console.log(`Local HTML pages: ${localHtml.length}`);
console.log(`Missing from sitemap: ${missingFromSitemap.length}`);
console.log(`Sitemap URLs without local file: ${missingLocalFiles.length}`);
console.log(`Duplicate sitemap URLs: ${duplicateUrls.length}`);
