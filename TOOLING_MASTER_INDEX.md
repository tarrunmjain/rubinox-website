# Tooling Master Index

Created: 2026-06-23

This document summarizes the installed Rubinox website tooling. It is an index only and does not change website content, design, HTML, CSS, JavaScript, or images.

Run npm scripts with the bundled package manager:

```powershell
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd run <script-name>
```

## 1. Git Baseline

Command:

```powershell
git status --short
git log --oneline --max-count=10
```

What it checks:

- Current working tree state.
- Tracked, modified, staged, and untracked files.
- Recent project commit history.

When to use:

- Before and after every tooling, QA, content, or website change.
- Before committing.
- Before handing the project to another developer or agent.

Changes website files:

- No. Git status and log are read-only reporting commands.

## 2. Playwright Navigation Testing

Command:

```powershell
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd run test:navigation
```

Related MCP command:

```powershell
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd run mcp:playwright
```

What it checks:

- Local static pages open in Chromium.
- Main navigation links and key local routes work.
- The website can be exercised in a browser-like environment.

When to use:

- After navigation, header, link, or route changes.
- After broad HTML edits.
- Before deployment.

Changes website files:

- No. It only runs browser checks and reports pass/fail behavior.

## 3. Lighthouse Audit

Command:

```powershell
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd run test:lighthouse
```

Related MCP command:

```powershell
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd run mcp:lighthouse
```

What it checks:

- Homepage Lighthouse audit signals.
- Performance, accessibility, best practices, and SEO-style audit data for the local homepage.

When to use:

- Before release.
- After image, CSS, script, layout, or above-the-fold changes.
- When investigating performance or technical SEO risk.

Changes website files:

- No. It audits and reports only.

## 4. Sitemap Analysis

Command:

```powershell
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd run qa:sitemap
```

What it checks:

- `sitemap.xml` URL count.
- Local HTML page count.
- Pages missing from the sitemap.
- Sitemap URLs without matching local files.
- Duplicate sitemap URLs.

When to use:

- After adding, removing, or renaming pages.
- Before deployment.
- During SEO QA.

Changes website files:

- No. It writes a report to `tool-reports/sitemap-analysis.json`.

## 5. Local Crawling

Command:

```powershell
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd run qa:crawl
```

What it checks:

- Local internal page availability.
- Local assets and fragments discovered by the crawler.
- Internal crawl health through a local server.

When to use:

- After link, navigation, asset, or page changes.
- Before deployment.
- After broad HTML updates.

Changes website files:

- No. It starts a temporary local server and reports crawl results only.

## 6. External Link Checking

Command:

```powershell
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd run qa:external-links
```

What it checks:

- External URLs discovered from local pages.
- Production Rubinox URLs referenced in the site.
- Social, WhatsApp, Google Maps, IndiaMART, and analytics script URLs.
- HTTP status and non-OK link states.

When to use:

- Before deployment.
- During monthly link monitoring.
- After editing contact, social, canonical, schema, or external resource links.

Changes website files:

- No. It writes `tool-reports/external-links.csv`.

## 7. Accessibility Testing

Command:

```powershell
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd run qa:accessibility
```

What it checks:

- Axe accessibility violations on representative pages.
- Issues such as missing iframe titles, color contrast, and landmark regions.

When to use:

- After UI, layout, navigation, form, color, or semantic HTML changes.
- Before deployment.
- Before and after accessibility fix passes.

Changes website files:

- No. It writes `tool-reports/accessibility-axe.json`.

## 8. Image Optimization Preview

Command:

```powershell
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd run qa:images
```

What it checks:

- Image file sizes.
- Potential optimized preview sizes.
- Estimated savings opportunities.

When to use:

- Before image optimization work.
- After adding new assets.
- During performance review.

Changes website files:

- No production website images are changed.
- It writes reports and preview files under `tool-reports/`.

## 9. Schema Validation

Command:

```powershell
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd run qa:schema
```

What it checks:

- JSON-LD blocks in HTML pages.
- JSON validity.
- JSON-LD expansion validity.
- Schema block counts by page.

When to use:

- After schema, SEO, page template, or structured data edits.
- Before deployment.
- During SEO QA.

Changes website files:

- No. It writes `tool-reports/schema-jsonld.json`.

## 10. HTML Validation

Command:

```powershell
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd run qa:html
```

What it checks:

- HTML validation and linting across all `.html` pages.
- Markup rules such as native elements, ARIA usage, required attributes, raw characters, and document formatting.

When to use:

- After HTML edits.
- Before deployment.
- Before and after technical QA fix passes.

Changes website files:

- No. It writes `tool-reports/html-validate.json`.

## 11. Competitor Research Crawler

Command:

```powershell
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd run research:crawl -- --url https://example-competitor.com --limit 10 --depth 1
```

Single-page example:

```powershell
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd run research:crawl -- --url https://example-competitor.com/product-page.html --limit 1 --depth 0
```

What it checks or extracts:

- Competitor page titles and meta descriptions.
- Canonicals and robots meta values.
- Open Graph fields.
- H1, H2, and H3 headings.
- Approximate word count and first visible page text.
- Navigation text and CTA-like labels.
- Image sources, alt text, and dimensions.
- Form actions, methods, and labels.
- JSON-LD schema types.
- Same-origin and external links.

When to use:

- Competitor SEO research.
- GEO, AEO, UI, and UX research.
- Content gap analysis.
- Comparing buyer journeys and RFQ flows.

Changes website files:

- No. It is for external competitor/content research only.
- It refuses localhost and `rubinoxmetal.com` targets.
- It writes reports to `tool-reports/`.

## 12. Figma MCP

Verification:

- Figma integration installed and verified with `whoami`.
- Verified account: `Tarrun M Jain`.
- Verified access: Figma starter plan with view seat.

What it can do:

- Generate editable UI mockups and design concepts in Figma when requested.
- Create Figma screens, components, diagrams, and design exploration artifacts.
- Read Figma design context when a valid Figma file and node are provided.

When to use:

- Before redesign planning.
- For UI concept exploration.
- For wireframes, mockups, and stakeholder presentation designs.
- For design-to-code context when a Figma design file is available.

Changes website files:

- No. Figma MCP works in Figma, not in the website source, unless a later task explicitly asks to implement a chosen design.

## All-In-One QA Runner

Command:

```powershell
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd run qa:all
```

What it runs:

- `qa:sitemap`
- `qa:crawl`
- `qa:external-links`
- `qa:accessibility`
- `qa:images`
- `qa:schema`
- `qa:html`

When to use:

- Before deployment.
- After a completed QA fix pass.
- Before committing broad website changes.

Changes website files:

- No. It only runs the reporting tools above.
