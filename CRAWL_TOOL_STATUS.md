# Crawl Tool Status

Created: 2026-06-23

## 1. Tool Installed

Installed as a free local crawling workflow using the project's existing open-source Playwright dependency.

Tooling added:

- `scripts/research-crawl.cjs`
- `scripts/research-crawl.ps1`
- `package.json` script: `research:crawl`

This is an equivalent local workflow to Crawl4AI for competitor and content research. It does not add a new paid service, cloud dependency, or website runtime dependency.

Verification completed:

- `research:crawl -- --help` runs successfully through `pnpm`.
- A safety check against `https://rubinoxmetal.com` is blocked by design.
- A neutral external smoke test against `https://example.com` completed and wrote `tool-reports/research-crawl-example.json`.

Important usage rule:

- Use this crawler only for competitor/content research.
- Do not use it for Rubinox website QA; use the existing QA scripts for Rubinox.
- The script refuses `localhost`, `127.0.0.1`, and `rubinoxmetal.com` targets to keep the workflow separated from website QA.

## 2. How To Run It

Run a small competitor crawl:

```powershell
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd run research:crawl -- --url https://example-competitor.com --limit 10 --depth 1
```

Run a single-page crawl:

```powershell
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd run research:crawl -- --url https://example-competitor.com/product-page.html --limit 1 --depth 0
```

Write to a custom report file:

```powershell
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd run research:crawl -- --url https://example-competitor.com --limit 20 --depth 2 --output tool-reports/competitor-example.json
```

Default output:

- `tool-reports/research-crawl.json`

## 3. What It Can Extract

The crawler extracts competitor research signals from each crawled page:

- HTTP status
- Page title
- Meta description
- Canonical URL
- Robots meta value
- Open Graph title, description, and image
- H1, H2, and H3 headings
- Approximate word count
- First visible page text
- Header/navigation link text
- CTA-like text such as quote, contact, call, WhatsApp, RFQ, enquiry, download, and similar actions
- Image source, alt text, and rendered dimensions
- Form action, method, and labels
- JSON-LD schema types
- Same-origin links for crawl discovery
- External links for partnership, marketplace, social, and trust-signal review

## 4. How Rubinox Should Use It

### SEO Research

Use the crawler to compare competitor landing pages, material pages, and product-form pages.

Recommended review points:

- Page title patterns.
- Meta description length and buyer intent.
- H1/H2 topic coverage.
- Internal linking depth.
- Product-grade combinations competitors target.
- Schema types used on ranking pages.
- Image alt text and product terminology.

### GEO Research

Use it to study how competitors structure location intent.

Recommended review points:

- Mumbai, India, export, and region-specific copy patterns.
- City or industrial-area landing pages.
- LocalBusiness schema usage.
- Contact and address prominence.
- Location phrases in headings and CTAs.

### AEO Research

Use it to identify answer-ready content that can support AI search, snippets, and buyer questions.

Recommended review points:

- FAQ-style headings.
- Short answer blocks after headings.
- Grade comparison sections.
- Specification and standard explanations.
- Application/industry Q&A.
- Clear RFQ requirement lists.

### UI Research

Use extracted navigation, CTA, form, and first-viewport text to compare page structure without copying design.

Recommended review points:

- Above-the-fold message clarity.
- CTA labels and placement patterns.
- Navigation terminology.
- Form field expectations.
- Trust signals such as certification, testing, documents, and export support.

### UX Research

Use the report to spot friction and buyer-support ideas.

Recommended review points:

- How quickly a buyer can find grade, form, size, and contact information.
- Whether competitors provide RFQ checklists.
- Whether inquiry flows support WhatsApp, email, and phone.
- Whether product pages explain equivalents, standards, and applications clearly.
- Whether page structure helps scanning by purchase teams.

This workflow is for research synthesis only. Do not copy competitor text, design, images, schema, or brand assets into Rubinox pages.
