# Tooling Status

Updated: 2026-06-23

This project now has free/open-source QA and optimization tooling for the static Rubinox
Metal and Alloys website. The tools are configured to audit the local website without changing
website content, layout, design, or original image assets.

Generated reports are written to `tool-reports/`, which is ignored by Git.

## Installed Tools

| Area | Tool | Package | Purpose |
| --- | --- | --- | --- |
| Sitemap analysis | fast-xml-parser | `fast-xml-parser` | Parses `sitemap.xml` and compares sitemap URLs with local HTML files. |
| Website crawling | Linkinator | `linkinator` | Crawls the local static site and checks internal pages, fragments, and assets. |
| External link checking | Linkinator | `linkinator` | Checks external and production URLs discovered from the local crawl. |
| Accessibility testing | Axe for Playwright | `@axe-core/playwright` | Runs Axe accessibility checks in Chromium on representative pages. |
| Image optimization | Sharp | `sharp` | Analyzes images and creates optimized preview copies without touching originals. |
| Schema validation | jsonld | `jsonld` | Parses and expands JSON-LD schema blocks to verify JSON-LD validity. |
| HTML validation | html-validate | `html-validate` | Runs offline HTML validation/linting across all HTML pages. |

## NPM Scripts

Run these with the bundled package manager, for example:

```powershell
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd run qa:sitemap
```

Available scripts:

- `qa:sitemap` - analyze `sitemap.xml` against local HTML files.
- `qa:crawl` - crawl the local static website and check internal links/fragments/assets.
- `qa:external-links` - crawl and check external/production links.
- `qa:accessibility` - run Axe accessibility checks on representative local pages.
- `qa:images` - analyze image optimization opportunities and create ignored preview assets.
- `qa:schema` - validate JSON-LD blocks.
- `qa:html` - validate HTML markup.
- `qa:all` - run all QA scripts in sequence.

Existing scripts remain available:

- `test:navigation` - Playwright local navigation smoke test.
- `test:lighthouse` - Lighthouse homepage audit.
- `mcp:playwright` - start Playwright MCP server.
- `mcp:lighthouse` - start Lighthouse MCP server.

## Verification Results

Each tool was run against the local website after installation.

### 1. Sitemap Analysis

Command:

```powershell
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe scripts\qa-sitemap.cjs
```

Result:

- Sitemap URLs: 75.
- Local HTML pages: 75.
- Missing from sitemap: 0.
- Sitemap URLs without local file: 0.
- Duplicate sitemap URLs: 0.

Report:

- `tool-reports/sitemap-analysis.json`

### 2. Website Crawling

Command:

```powershell
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe scripts\qa-crawl.cjs
```

Result:

- Linkinator successfully crawled the local website.
- Scanned links reported by Linkinator: 148.
- Broken local links found by this run: 0.

Notes:

- The script starts a local server at `http://127.0.0.1:4181`.
- External URLs are skipped in this internal crawl so it focuses on local website health.

### 3. External Link Checking

Command:

```powershell
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe scripts\qa-external-links.cjs
```

Result:

- Linkinator completed the external/production link check.
- Checked local URLs plus external and production URLs discovered in the pages.
- Observed status for checked external/production links: 200 OK in this run.

Examples checked:

- `https://wa.me/919363193755`
- `https://www.instagram.com/rubinox_metal/`
- `https://www.facebook.com/profile.php?id=61590518053054`
- `https://www.linkedin.com/company/rubinox-metal-and-alloys`
- `https://www.indiamart.com/rubinox-metal-and-alloys`
- `https://www.google.com/maps/...`
- `https://rubinoxmetal.com/...`

Report:

- `tool-reports/external-links.csv`

### 4. Accessibility Testing

Command:

```powershell
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe scripts\qa-accessibility.cjs
```

Result:

- Pages checked: 5.
- Total Axe violations found: 5.
- The tool worked successfully and produced an accessibility report.

Representative findings:

- `/` - `frame-title`, serious, 1 node.
- `/quotation.html` - `color-contrast`, serious, 4 nodes.
- `/industries.html` - `color-contrast`, serious, 3 nodes.
- `/materials/stainless-steel.html` - `region`, moderate, 1 node.
- `/materials/ss-304-supplier-india.html` - `region`, moderate, 1 node.

Report:

- `tool-reports/accessibility-axe.json`

### 5. Image Optimization

Command:

```powershell
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe scripts\qa-images.cjs
```

Result:

- Images analyzed: 75.
- Original total: 7411.3 KB.
- Optimized preview total: 6811.3 KB.
- Potential savings preview: 600.1 KB.
- Original website images were not modified.

Top savings opportunities from the preview run:

- `assets/rubinox-social-preview-2026.jpg` - about 142.6 KB potential savings.
- `apple-touch-icon.png` - about 30.3 KB potential savings.
- `favicon-192x192.png` - about 30.3 KB potential savings.
- Several existing WebP grade/product images show smaller potential savings.

Reports:

- `tool-reports/image-optimization.json`
- `tool-reports/optimized-assets-preview/`

### 6. Schema Validation

Command:

```powershell
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe scripts\qa-schema.cjs
```

Result:

- HTML pages scanned: 75.
- JSON-LD blocks found: 149.
- Invalid JSON-LD blocks: 0.

Report:

- `tool-reports/schema-jsonld.json`

### 7. HTML Validation

Command:

```powershell
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe scripts\qa-html.cjs
```

Result:

- HTML pages checked: 75.
- Invalid pages reported by `html-validate`: 75.
- This documents existing markup issues only; no website HTML was changed.

Common rule findings:

- `doctype-style` - 75 occurrences.
- `prefer-native-element` - 163 occurrences.
- `no-implicit-button-type` - 73 occurrences.
- `no-raw-characters` - 22 occurrences.
- `no-trailing-whitespace` - 19 occurrences.
- `tel-non-breaking` - 3 occurrences.
- `aria-label-misuse` - 3 occurrences.
- `element-required-attributes` - 1 occurrence.
- `attribute-allowed-values` - 1 occurrence.

Report:

- `tool-reports/html-validate.json`

## Important Notes

- No website content or design files were edited by these checks.
- Original assets were not overwritten by image optimization tooling.
- `tool-reports/` contains generated output and is intentionally ignored.
- HTML and accessibility tools found existing issues; these should be fixed in a separate,
  explicitly requested implementation pass.
- External link results can vary due to network, bot protection, login walls, or rate limits.

## Recommended Next Steps

1. Commit the tooling if the setup looks good.
2. Run `qa:all` before future releases.
3. Fix accessibility issues in a separate task.
4. Fix HTML validation issues in a separate task.
5. Review optimized image previews before replacing any production assets.
