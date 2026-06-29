
# Rubinox Tooling Setup

Date: 2026-06-29
Scope: documentation only. No tools were installed in this batch.

## Current Local Tooling

The repo already has a package.json with local QA scripts powered by the bundled Node runtime:

| Script | Current role | Status |
| --- | --- | --- |
| npm.cmd run qa:sitemap | Checks sitemap/local HTML parity | Active |
| npm.cmd run qa:crawl | Crawls local internal links/assets | Active |
| npm.cmd run qa:schema | Validates JSON-LD parseability | Active |
| npm.cmd run qa:accessibility | Axe checks on configured sample pages | Active |
| npm.cmd run test:navigation | Navigation verification | Active |
| npm.cmd run qa:html | HTML validation baseline | Active for cleanup batches |
| npm.cmd run qa:images | Image audit helper | Available |
| npm.cmd run qa:external-links | External link checks | Available |
| npm.cmd run test:lighthouse | Homepage Lighthouse helper | Available |

## Safe Installation Order

1. Do not install anything until Search Console, GA4 and Bing ownership are clarified.
2. Keep existing npm QA scripts as the baseline.
3. Add or configure HTML validation workflow for the 58 legacy issue cleanup.
4. Add Lighthouse/Lighthouse CI only after baseline QA remains stable.
5. Add PageSpeed Insights API only after API access is approved.
6. Add broader Pa11y checks only if accessibility coverage needs to expand beyond current samples.
7. Add external SEO/MCP tools only after owner approves accounts, costs and data access.

## Candidate Tooling Notes

- Codex SEO skill suite candidate: useful for guided audits, but should not replace local QA.
- Google Search Console MCP candidate: useful after verified property access.
- Better Search Console candidate: optional for query grouping and content planning.
- Lighthouse / Lighthouse CI: recommended for home, quotation, technical resources, one grade, one city, one export and one blog page.
- PageSpeed Insights API: useful for deployed Core Web Vitals/PageSpeed checks.
- Pa11y: optional accessibility expansion.
- Link checker: existing qa:crawl covers internal links; external link checks can be scheduled.
- HTML validator: use for legacy validation cleanup before broad design edits.
- Schema/Rich Results workflow: run local qa:schema plus Google tests on representative templates.
- Image audit helper: add before new visual asset batches.
- llms.txt workflow: maintain after AEO/LLMO plan approval.
- On-Page.ai MCP: optional paid/credit-based targeted scans.
- Semrush plugin/MCP: optional paid/subscription-based competitor and keyword scans.

## Tooling Guardrails

- Do not let third-party tools rewrite public pages automatically.
- Do not bulk-generate city/product pages from keyword exports.
- Do not add scripts that require secrets in the static repo.
- Do not commit tool output reports unless they are intentionally reviewed and useful.
