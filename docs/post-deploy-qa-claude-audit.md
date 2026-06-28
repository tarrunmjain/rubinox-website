# Post-Deployment QA - Claude Audit Implementation

Date: 2026-06-29
Live site: https://rubinoxmetal.com
Local folder: C:\Users\Dell\OneDrive\Documents\rubinox-website-live

## Deployment Status

GitHub Pages deployment is live. The latest Claude audit implementation pages are reflected on production: the new technical/documentation pages return 200, the new material/spec pages sampled return 200, and the live sitemap contains 238 URLs with the latest batch URLs present.

Live `robots.txt` points to `https://rubinoxmetal.com/sitemap.xml`.

## Live Pages Checked

Core pages:

- https://rubinoxmetal.com/
- https://rubinoxmetal.com/about-us.html
- https://rubinoxmetal.com/quotation.html
- https://rubinoxmetal.com/grades.html
- https://rubinoxmetal.com/technical-resources.html
- https://rubinoxmetal.com/quality-documentation-support.html
- https://rubinoxmetal.com/registrations-compliance.html

Material/spec pages visually checked from the latest batch:

- https://rubinoxmetal.com/materials/copper-nickel-90-10-c70600-supplier-india.html
- https://rubinoxmetal.com/materials/astm-a335-p91-pipe-supplier-india.html
- https://rubinoxmetal.com/materials/api-5l-x65-pipe-supplier-india.html
- https://rubinoxmetal.com/materials/is-2062-steel-supplier-india.html
- https://rubinoxmetal.com/materials/inconel-601-supplier-india.html

Index files checked:

- https://rubinoxmetal.com/sitemap.xml
- https://rubinoxmetal.com/robots.txt

## Screens And Resolutions Checked

- Desktop viewport: 1366 x 768
- Mobile viewport: 390 x 844
- Local post-fix mobile recheck for `technical-resources.html`: 390 x 844

## Visual And Functional Results

- Header, logo, top rail and footer were visible and consistent on the checked live pages.
- Breadcrumbs were visible on checked inner pages. Home does not use a breadcrumb, which is expected.
- Each checked page had exactly one H1.
- No broken live product/hero images were found. Footer platform icons initially appeared unloaded until the footer entered view because they are lazy-loaded; direct asset checks returned 200 and the icons loaded after scrolling.
- WhatsApp CTAs use `https://wa.me/919363193755`.
- Email/RFQ links point to `tarun@rubinoxmetal.com`; quotation-page RFQ mailto includes prefilled subject/body context.
- New material/spec pages sampled had substantial body content and did not feel thin.
- Raw claim scanning found `manufacturer` only in deliberate negative FAQ wording such as "not as a manufacturer" / "should not be described as a manufacturer". No accidental manufacturer, factory, stock, pricing or certification claims were found on the checked new pages.
- Live JSON-LD blocks on checked pages parsed successfully.
- All 17 latest material/spec pages are present in `sitemap.xml` and linked from `grades.html` or relevant material hubs.

## Issues Found

1. `technical-resources.html` had mobile horizontal overflow at 390px on the live deployment. The overflow came from the comparison/resource card grid around wide technical tables, while the tables themselves were already in horizontal scrollers.
2. `npm run qa:html` still reports 59 invalid legacy pages. The changed/new Claude audit pages checked in this pass validate, including `technical-resources.html`, `quality-documentation-support.html`, and `registrations-compliance.html`.
3. Running `npm run ...` directly in PowerShell is blocked by local execution policy for `npm.ps1`; the equivalent `npm.cmd run ...` commands were used.

## Fixes Applied

- Added a small mobile-only CSS constraint to `technical-resources.html` so card grids and link grids do not expand past the mobile viewport while preserving internal table scrolling.
- No new pages were created.
- No broad design, layout or content changes were made.

Post-fix local mobile check for `technical-resources.html` at 390px:

- `documentElement.clientWidth`: 375
- `documentElement.scrollWidth`: 375
- Technical tables remain scrollable inside their wrappers.

## QA Results

Commands were run from `C:\Users\Dell\OneDrive\Documents\rubinox-website-live` using `npm.cmd run ...`.

| Command | Result |
| --- | --- |
| `npm run qa:sitemap` | Pass - 238 sitemap URLs, 238 local HTML pages, no missing/extra/duplicate sitemap URLs |
| `npm run qa:crawl` | Pass - 370 links scanned successfully |
| `npm run qa:schema` | Pass - 238 pages scanned, 652 JSON-LD blocks, 0 invalid blocks |
| `npm run qa:accessibility` | Pass - 5 scripted pages checked, 0 violations |
| `npm run qa:html` | Baseline warnings remain - 238 pages checked, 59 invalid legacy pages reported; changed audit pages checked here validate |
| `npm run test:navigation` | Pass - navigation verification passed |

## Remaining Known Baseline Issues

- The HTML validation backlog remains at 59 invalid legacy pages. This is larger than a small post-deploy QA fix and should be handled as a separate cleanup batch.
- The live `technical-resources.html` mobile overflow fix will appear after the QA commit is pushed and GitHub Pages redeploys.
