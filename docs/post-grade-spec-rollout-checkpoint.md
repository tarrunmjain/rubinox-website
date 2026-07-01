# Post Grade / Specification Rollout Checkpoint

Date: 2026-07-01

## Latest Commit Checked

- Local and remote `main`: `9078dd68d096b70e1ce08c086e211a0e8dee61c1`
- Short hash: `9078dd6`
- Commit subject: `content: complete grade specification page polish rollout`

## Local Sync Status

- Branch checked: `main`
- `git pull origin main`: already up to date
- Working tree status before checkpoint docs: clean except the two protected untracked files:
  - `CARD_ACCENT_STYLE_AUDIT.md`
  - `RUBINOX_MASTER_PROJECT_STATUS.md`

## Local QA Results

| Check | Result |
| --- | --- |
| `npm.cmd run qa:sitemap` | PASS: 261 sitemap URLs, 261 local HTML pages, 0 missing, 0 extra, 0 duplicates |
| `npm.cmd run qa:crawl` | PASS: 394 links scanned |
| `npm.cmd run qa:schema` | PASS: 261 HTML pages, 866 JSON-LD blocks, 0 invalid |
| `npm.cmd run qa:accessibility` | PASS: 5 pages checked, 0 violations |
| `npm.cmd run test:navigation` | PASS |
| `npm.cmd run qa:html` | PASS: 261 pages checked, 0 invalid |
| `npm.cmd run qa:links` | PASS: 394 links scanned |
| `npm.cmd run qa:pa11y` | PASS: 9/9 URLs within threshold; quotation 5 and contact 2 remain known threshold findings |
| `npm.cmd run qa:images:audit` | PASS for missing assets: 179 image files, 4208 referenced image URLs, 0 missing; existing audit notes remain 54 non-WebP, 2 oversized and 3399 missing/empty alt instances |
| `npm.cmd run qa:forbidden-claims` | PASS review workflow: 339 files scanned, 514 matches flagged for review, no files rewritten |
| `git diff --check` | PASS |
| `npm.cmd run qa:full` | PASS; included sitemap, crawl, pa11y, Lighthouse, image audit and forbidden-claims review |

## Live URL Checks

All representative live URLs returned HTTP 200.

| URL | Status | Notes |
| --- | ---: | --- |
| https://rubinoxmetal.com/ | 200 | Live |
| https://rubinoxmetal.com/grades.html | 200 | Live |
| https://rubinoxmetal.com/materials.html | 200 | Live |
| https://rubinoxmetal.com/technical-resources.html | 200 | Live |
| https://rubinoxmetal.com/quotation.html | 200 | Live |
| https://rubinoxmetal.com/materials/ss-304-supplier-india.html | 200 | Batch 10A gate marker present |
| https://rubinoxmetal.com/materials/ss-316l-supplier-india.html | 200 | Batch 1 pilot page; gate marker absence expected |
| https://rubinoxmetal.com/materials/ss-904l-supplier-india.html | 200 | Batch 10A gate marker present |
| https://rubinoxmetal.com/materials/super-duplex-2507-supplier-india.html | 200 | Batch 10A gate marker present |
| https://rubinoxmetal.com/materials/monel-400-supplier-india.html | 200 | Batch 10A gate marker present |
| https://rubinoxmetal.com/materials/hastelloy-c-276-supplier-india.html | 200 | Batch 10A gate marker present |
| https://rubinoxmetal.com/materials/api-5l-x52-pipe-supplier-india.html | 200 | Batch 10A gate marker present |
| https://rubinoxmetal.com/materials/copper-nickel-90-10-c70600-supplier-india.html | 200 | Batch 10A gate marker present |
| https://rubinoxmetal.com/materials/titanium-grade-5-supplier-india.html | 200 | Batch 10A gate marker present |

## Representative Visual Review

Screenshot folder:

`C:\Users\Dell\AppData\Local\Temp\rubinox-batch10e-live-checkpoint-20260701`

Contact sheets:

- `contact-1366-viewport.png`
- `contact-1280-viewport.png`
- `contact-768-viewport.png`
- `contact-390-viewport.png`
- `contact-360-viewport.png`

Representative pages reviewed:

1. SS 304
2. SS 316L
3. SS 904L
4. Super Duplex 2507
5. Monel 400
6. Hastelloy C-276
7. API 5L X52
8. ASTM A106 Grade B
9. IS 2062
10. Copper Nickel 90/10
11. Titanium Grade 5
12. Incoloy 800H
13. EN 10216 seamless pipe
14. Seamless pipe
15. Schedule 40 pipe

Viewports checked:

- 1366px
- 1280px
- 768px
- 390px
- 360px

Automated visual/layout result:

- Screenshots captured: 75
- Layout failures: 0
- HTTP failures: 0
- Unexpected missing gate markers: 0
- Horizontal overflow: 0
- H1 count issues: 0
- Sticky header issues: 0
- Top rail signal issues: 0
- White footer issues: 0
- Visible broken image issues: 0
- CTA signal issues: 0

Manual contact-sheet result:

- Premium feel: pass
- No narrow or cramped desktop layout: pass
- No chip walls or SEO-directory feel: pass
- Mobile readability: pass
- Hero/media fit: pass
- FAQ padding and section rhythm: pass
- Table containment: pass
- CTA visibility: pass

## Issues Found

- No blocking issues found.
- The live SS 316L page is an earlier Batch 1 pilot page, so it does not include the later Batch 10A-D gate marker. This is expected and not a deployment issue.
- Automated keyword review noted generic `review` text on live pages; this is treated as a review prompt for claim safety, not a layout failure. The dedicated forbidden-claims workflow completed without rewriting files, and this checkpoint did not change public page content.

## Rollout Completion Decision

The grade/specification rollout is approved as complete for the existing in-scope page set.

- Total existing grade/specification pages: 110
- Batch 1: 5 pages
- Batch 10A: 10 pages
- Batch 10B: 35 pages
- Batch 10C: 30 pages
- Batch 10D: 30 pages
- Existing pages still deferred: 0
- New public grade/specification pages created in the rollout: 0

## Safe To Move To Tracking / Measurement Setup

Yes. It is safe to move to tracking and measurement setup next, provided that work remains scoped to owner-approved analytics and conversion measurement.

Recommended next measurement items:

- Confirm Google Search Console and Bing Webmaster Tools access.
- Submit `https://rubinoxmetal.com/sitemap.xml` in verified search consoles.
- Confirm GA4 property access and current measurement ID ownership.
- Plan WhatsApp, email, phone, RFQ and PDF-download conversion events without changing CTA text or public SEO intent.

## Remaining Recommendations

- Add richer verified images later, using real product, office, documentation or owner-approved assets only.
- Monitor Search Console query/page performance before adding new grade, city, country or product-location URLs.
- Add GA4 conversion tracking after property access is confirmed.
- Add exact composition/property enrichment only where values are verified and maintainable.
- Avoid more broad grade/specification redesign unless performance data shows a need.

## Preservation Confirmations

- No public website pages were changed in this checkpoint.
- No public SEO URLs, H1 text/intent, title/meta/canonical targets, schema meaning, sitemap URLs or broad internal-link strategy were changed.
- FAQ schema was not changed in this checkpoint.
- No manufacturer, factory, stock, price, certification, client, project, rating, review or delivery guarantee claims were introduced.
- The two protected untracked files remained untouched and untracked:
  - `CARD_ACCENT_STYLE_AUDIT.md`
  - `RUBINOX_MASTER_PROJECT_STATUS.md`
