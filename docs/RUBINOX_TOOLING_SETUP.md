# Rubinox Tooling Setup

Date: 2026-06-29
Scope: professional local SEO and QA tooling setup. Public website pages were not changed in this batch.

## Current Local Tooling

The repo is a static HTML site with local Node QA scripts. The dependency layout is currently pnpm-managed (`pnpm-lock.yaml` and `node_modules/.pnpm`). Existing scripts use the bundled Codex Node runtime path.

| Script | Current role | Status |
| --- | --- | --- |
| `npm.cmd run qa:sitemap` | Checks sitemap/local HTML parity | Active |
| `npm.cmd run qa:crawl` | Crawls local internal links/assets with Linkinator | Active |
| `npm.cmd run qa:schema` | Validates JSON-LD parseability | Active |
| `npm.cmd run qa:accessibility` | Axe checks on representative pages | Active |
| `npm.cmd run test:navigation` | Navigation verification | Active |
| `npm.cmd run qa:html` | HTML validation baseline | Active for cleanup batches |
| `npm.cmd run qa:images` | Existing image optimization preview helper under `tool-reports/` | Active |
| `npm.cmd run qa:external-links` | External link check helper | Active, network-dependent |
| `npm.cmd run test:lighthouse` | Existing Lighthouse homepage helper | Active |

## Scripts Added In This Batch

| Script | Purpose | Notes |
| --- | --- | --- |
| `npm.cmd run qa:full` | Runs the representative full local QA suite | Includes existing checks plus Pa11y, Lighthouse, image audit, and forbidden-claim scan |
| `npm.cmd run qa:lighthouse` | Runs a local Lighthouse baseline on representative URLs | Writes `reports/lighthouse-baseline.json` and `.md`; no score thresholds yet |
| `npm.cmd run qa:lighthouse:home` | Alias for the existing homepage Lighthouse helper | Keeps the existing helper discoverable |
| `npm.cmd run qa:pa11y` | Runs Pa11y CI on representative local URLs | Uses Playwright Chromium via environment variables, no extra browser binary committed; initial threshold 7 preserves the current contrast baseline while still reporting findings |
| `npm.cmd run qa:html:legacy` | Alias for the existing HTML validation baseline | Supports cleanup planning language |
| `npm.cmd run qa:links` | Alias for the existing local crawl/link check | Keeps `qa:crawl` intact |
| `npm.cmd run qa:images:audit` | Runs the new non-mutating image audit | Writes `reports/image-audit.json` and `reports/image-audit.md` |
| `npm.cmd run qa:forbidden-claims` | Flags risky business/SEO claims for review | Writes `reports/forbidden-claims.json` and `reports/forbidden-claims.md`; does not rewrite files |

`qa:design:smoke` was not added because there is no dedicated render/screenshot smoke-test workflow in the current repo.

## Dev Dependencies

Already present before this batch:

- `@axe-core/playwright`
- `@danielsogl/lighthouse-mcp`
- `@playwright/mcp`
- `chrome-launcher`
- `fast-xml-parser`
- `html-validate`
- `jsonld`
- `lighthouse`
- `linkinator`
- `playwright`
- `sharp`

Installed in this batch:

- `@lhci/cli`
- `pa11y`
- `pa11y-ci`

Installation note: the requested `npm.cmd install --save-dev @lhci/cli pa11y pa11y-ci` failed twice on this machine with npm 11.13.0 / Node 24.17.0: `Cannot read properties of null (reading 'matches')`. The existing repo uses pnpm layout, so the packages were installed locally with `pnpm.cmd add -D @lhci/cli pa11y pa11y-ci --ignore-scripts` and `PUPPETEER_SKIP_DOWNLOAD=true`. This avoided a second browser download and updated `pnpm-lock.yaml`.

## Config Files Added

- `lighthouserc.js`: representative URL Lighthouse CI config using local Python static server on `127.0.0.1:4185`, Playwright Chromium, filesystem upload, and no initial score-failing assertions.
- `.pa11yci`: representative URL Pa11y CI config using local static server on `127.0.0.1:4184`, WCAG2AA, CLI and JSON reporters.

Representative URLs currently include home, quotation, technical resources, company profile, SS 316L, Inconel 625, API 5L Grade B Pipe, blog, and contact.

## Missing Or Deferred Free Tools

- Google Search Console MCP: deferred until owner provides verified property access and credential strategy.
- Bing Webmaster/Search Console workflow: deferred until owner confirms account access.
- PageSpeed Insights API workflow: deferred until owner approves API key handling outside the repo.
- Full 261-page Pa11y checks: deferred to avoid heavy duplicate accessibility runs until representative baseline is stable.
- Render/design smoke screenshots: deferred until a dedicated screenshot workflow is intentionally added.

## Batch 11A Tracking And Measurement Readiness

Date: 2026-07-01

Batch 11A was planning and documentation only. No public pages, assets, sitemap, robots file, schema, metadata or tracking scripts were changed.

Current audit status:

- GA4 page tracking is already partially present in public HTML, but owner property confirmation is still required before any implementation cleanup.
- Existing GA4 coverage appears on 195 of 261 HTML pages.
- Existing `generate_lead` event/helper coverage appears on 177 HTML pages, with `trackLeadAndGo` found 211 times.
- 66 HTML pages do not include the current GA4 snippet.
- Google Search Console verification is not present in the repo.
- Bing Webmaster Tools verification is not present in the repo.
- `robots.txt` already references `https://rubinoxmetal.com/sitemap.xml`.
- Local sitemap QA confirms 261 sitemap URLs and 261 local HTML pages.

Batch 11A files:

- `docs/tracking-measurement-audit-batch-11a.md`
- `docs/tracking-measurement-implementation-plan.md`
- `data/tracking-event-map.csv`
- `docs/search-console-bing-setup-guide.md`
- `docs/monthly-seo-measurement-report-template.md`

Deferred until owner data is available:

- GA4 property confirmation and key-event setup.
- Search Console verification and sitemap submission.
- Bing Webmaster Tools verification or GSC import.
- Looker Studio or monthly dashboard setup.
- Any public tracking-code standardization.

Security and privacy rules:

- Do not commit placeholder verification files, fake analytics IDs, API keys, OAuth secrets, service-account JSON or owner credentials.
- Do not store buyer RFQ details in analytics event parameters.
- Do not add Google Ads conversion tags unless a paid campaign batch is separately approved.

## Google Search Console MCP Plan

Do not install or configure Search Console tooling until the owner provides credentials.

Required decisions:

1. Confirm the verified Google Search Console property for `https://rubinoxmetal.com/`.
2. Choose OAuth or service account access.
3. Store credentials outside the Rubinox repo and outside committed files.
4. Use Search Console data only after the property has accumulated useful query/page data.
5. Use data to prioritize existing page improvements before any new SEO page expansion.

Potential candidates for later review:

- `ncosentino/google-search-console-mcp`
- `houtini-ai/better-search-console`
- Search Console MCP variants that can also connect Bing or GA4, if needed later

## Paid Or Credit-Based Tools Not Installed

| Tool | Use case | Expected benefit | Dependency | Security note |
| --- | --- | --- | --- | --- |
| On-Page.ai MCP | Page-level semantic and topical audits | Helpful for focused optimization reviews | Paid/credit access | Do not connect until owner approves account and data sharing |
| Semrush MCP/plugin | Competitor, backlink, keyword, and SERP research | Useful for market research and prioritization | Paid subscription/API | Keep tokens outside repo |
| DataForSEO MCP | SERP, keyword, and competitor data | Scalable SEO research | Paid API credits | Do not store API keys in Rubinox repo |
| Firecrawl paid API | Large-scale extraction/crawl research | Useful for external SERP/content research | Paid API key/credits | Avoid crawling sensitive or irrelevant targets |
| Gemini/nanobanana image workflows | AI-assisted image generation or review | Potential future visual workflow | Paid/credentialed API | Do not add API keys or generated assets without review |

## Recommended Operating Workflow

Before website changes:

1. `git status --short`
2. `git branch`
3. `git pull origin main`
4. `npm.cmd run qa:sitemap`
5. `npm.cmd run qa:crawl`
6. `npm.cmd run qa:schema`
7. `npm.cmd run qa:accessibility`
8. `npm.cmd run test:navigation`
9. `git diff --check`

After tooling or content batches:

1. Run the relevant targeted checks.
2. Run `npm.cmd run qa:full` when a complete local confidence pass is appropriate.
3. Review generated files under `reports/` before staging any report outputs.
4. Never commit credentials, `.codex` files, `node_modules`, plugin caches, or large Lighthouse report bundles.

## Guardrails

- No public HTML, metadata, schema, navigation, footer, sitemap, or assets should be changed by tooling setup alone.
- No third-party tool should automatically rewrite public pages.
- No paid API or owner credential was configured in this batch.
- Forbidden-claim scan results are review flags only; safe FAQ/contextual mentions can be valid.
