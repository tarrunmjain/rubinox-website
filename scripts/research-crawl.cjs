const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require("playwright");

const root = path.resolve(__dirname, "..");
const reportDir = path.join(root, "tool-reports");

const args = process.argv.slice(2);

function valueFor(name, fallback = undefined) {
  const index = args.indexOf(name);
  if (index === -1) return fallback;
  return args[index + 1] || fallback;
}

function has(name) {
  return args.includes(name);
}

function integerOption(name, fallback) {
  const raw = valueFor(name);
  if (raw === undefined) return fallback;
  const parsed = Number.parseInt(raw, 10);
  return Number.isNaN(parsed) ? fallback : parsed;
}

function showHelp() {
  console.log(`Competitor/content research crawler

Usage:
  pnpm run research:crawl -- --url https://example.com --limit 10 --depth 1

Options:
  --url <url>       Required. Competitor or research URL to crawl.
  --limit <number>  Maximum pages to crawl on the same origin. Default: 10.
  --depth <number>  Link depth from the start URL. Default: 1.
  --output <file>   Output JSON file. Default: tool-reports/research-crawl.json.
  --help            Show this help.

This workflow is for competitor/content research only. It refuses localhost and rubinoxmetal.com targets.`);
}

function normalizeUrl(rawUrl, baseUrl) {
  try {
    const url = new URL(rawUrl, baseUrl);
    url.hash = "";
    return url;
  } catch {
    return null;
  }
}

function assertResearchTarget(url) {
  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error("Only http and https URLs are supported.");
  }

  const host = url.hostname.toLowerCase();
  const blockedHosts = new Set(["localhost", "127.0.0.1", "::1"]);
  if (blockedHosts.has(host) || host.endsWith(".local")) {
    throw new Error("Local website targets are blocked. Use this crawler only for competitor/content research.");
  }

  if (host === "rubinoxmetal.com" || host.endsWith(".rubinoxmetal.com")) {
    throw new Error("Rubinox website targets are blocked. Use existing QA tools for Rubinox and this crawler for research.");
  }
}

async function extractPage(page, currentUrl, origin) {
  return page.evaluate(({ currentUrl, origin }) => {
    const text = element => (element?.textContent || "").replace(/\s+/g, " ").trim();
    const attr = (selector, name) => document.querySelector(selector)?.getAttribute(name) || "";
    const all = selector => Array.from(document.querySelectorAll(selector));
    const words = text(document.body).split(/\s+/).filter(Boolean);
    const sameOriginLinks = [];
    const externalLinks = [];

    for (const anchor of all("a[href]")) {
      try {
        const url = new URL(anchor.href);
        const item = { text: text(anchor).slice(0, 160), href: url.href };
        if (url.origin === origin) sameOriginLinks.push(item);
        else externalLinks.push(item);
      } catch {
        continue;
      }
    }

    const schemaTypes = all('script[type="application/ld+json"]').flatMap(script => {
      try {
        const parsed = JSON.parse(script.textContent);
        const blocks = Array.isArray(parsed) ? parsed : [parsed];
        return blocks.flatMap(block => {
          if (Array.isArray(block["@graph"])) return block["@graph"].map(node => node["@type"]).flat();
          return [block["@type"]].flat();
        }).filter(Boolean);
      } catch {
        return [];
      }
    });

    return {
      url: currentUrl,
      title: document.title,
      metaDescription: attr('meta[name="description"]', "content"),
      canonical: attr('link[rel="canonical"]', "href"),
      robots: attr('meta[name="robots"]', "content"),
      openGraph: {
        title: attr('meta[property="og:title"]', "content"),
        description: attr('meta[property="og:description"]', "content"),
        image: attr('meta[property="og:image"]', "content")
      },
      headings: {
        h1: all("h1").map(text),
        h2: all("h2").map(text),
        h3: all("h3").map(text)
      },
      wordCount: words.length,
      firstViewportText: text(document.body).slice(0, 1200),
      navigationText: all("nav a, header a").map(text).filter(Boolean).slice(0, 80),
      ctas: all('a, button, input[type="submit"]').map(el => text(el) || el.value || el.getAttribute("aria-label") || "").filter(Boolean).filter(label => /quote|contact|call|whatsapp|email|rfq|enquir|buy|download|learn|get/i.test(label)).slice(0, 80),
      images: all("img").map(img => ({
        src: img.currentSrc || img.src,
        alt: img.getAttribute("alt") || "",
        width: img.naturalWidth || img.width || null,
        height: img.naturalHeight || img.height || null
      })).slice(0, 120),
      forms: all("form").map(form => ({
        action: form.getAttribute("action") || "",
        method: form.getAttribute("method") || "get",
        labels: Array.from(form.querySelectorAll("label")).map(text)
      })),
      schemaTypes: [...new Set(schemaTypes)],
      sameOriginLinks,
      externalLinks: externalLinks.slice(0, 120)
    };
  }, { currentUrl, origin });
}

async function run() {
  if (has("--help") || args.length === 0) {
    showHelp();
    return;
  }

  const startRaw = valueFor("--url");
  if (!startRaw) throw new Error("Missing required --url argument.");

  const startUrl = normalizeUrl(startRaw);
  if (!startUrl) throw new Error(`Invalid URL: ${startRaw}`);
  assertResearchTarget(startUrl);

  const limit = Math.max(1, integerOption("--limit", 10));
  const maxDepth = Math.max(0, integerOption("--depth", 1));
  const output = path.resolve(root, valueFor("--output", "tool-reports/research-crawl.json"));

  fs.mkdirSync(path.dirname(output), { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const queue = [{ url: startUrl.href, depth: 0 }];
  const seen = new Set();
  const pages = [];

  try {
    while (queue.length && pages.length < limit) {
      const next = queue.shift();
      if (seen.has(next.url) || next.depth > maxDepth) continue;
      seen.add(next.url);

      console.log(`[crawl] ${next.url}`);
      const response = await page.goto(next.url, { waitUntil: "domcontentloaded", timeout: 30000 }).catch(error => ({ error }));
      if (response?.error) {
        pages.push({ url: next.url, error: response.error.message });
        continue;
      }

      const status = typeof response?.status === "function" ? response.status() : null;
      const data = await extractPage(page, page.url(), startUrl.origin);
      data.status = status;
      data.depth = next.depth;
      pages.push(data);

      if (next.depth < maxDepth) {
        for (const link of data.sameOriginLinks) {
          const normalized = normalizeUrl(link.href, page.url());
          if (!normalized || normalized.origin !== startUrl.origin) continue;
          if (!seen.has(normalized.href) && queue.length + pages.length < limit * 4) {
            queue.push({ url: normalized.href, depth: next.depth + 1 });
          }
        }
      }
    }
  } finally {
    await browser.close();
  }

  const report = {
    tool: "local-playwright-research-crawler",
    intendedUse: "Competitor/content research only. Do not use for Rubinox QA or production scraping.",
    startedAt: new Date().toISOString(),
    startUrl: startUrl.href,
    limit,
    maxDepth,
    pagesCrawled: pages.length,
    pages
  };

  fs.writeFileSync(output, JSON.stringify(report, null, 2));
  console.log(`Research crawl complete: ${pages.length} pages`);
  console.log(`Report written: ${path.relative(root, output)}`);
}

run().catch(error => {
  console.error(error.message || error);
  process.exit(1);
});
