# Design Correction: Header + Top Bar Alignment Batch D2D

## Owner-Reported Issue

The homepage header and top bar looked correct, but some pages appeared slightly shifted to the right. The Mission & Vision page was the clearest example: its top bar text and logo began farther from the left edge than the homepage.

This was treated as a sitewide rail alignment correction, not a redesign.

## Root Cause

The shared Header Lock V1 stylesheet set the locked header/topbar max width and padding, but did not explicitly set `width`.

Some page families have inline layout CSS that sets `.wrap` to a `1140px` width for content alignment. Because the header and top bar also use `.wrap`, those page-level rules narrowed the header/topbar rail on Mission & Vision, Company Profile, Registrations & Compliance, Knowledge Hub and similar pages.

The homepage and several material/product pages remained on the intended `1180px` rail. That created the visible cross-page offset.

## Fix

The shared header lock stylesheet now makes the locked rail explicit:

- `width:100%!important`
- `max-width:1180px`
- `margin-left:auto`
- `margin-right:auto`
- desktop padding: `20px`
- tablet padding: `20px`
- mobile padding: `14px`
- `box-sizing:border-box`

This preserves the homepage-approved rail and prevents page-level `.wrap` rules from narrowing the header or top bar.

## Files Changed

- `assets/css/header-lock-v1.css`
- `docs/design-system/RUBINOX_HEADER_TOPBAR_ALIGNMENT_LOCK_V1.md`
- `docs/design-system/RUBINOX_TOPBAR_LOCK_V1.md`
- `docs/design-system/RUBINOX_HEADER_LOCK_V1.md`
- `docs/design-system/RUBINOX_DESIGN_FINGERPRINT.md`
- `docs/design-correction-header-topbar-alignment-batch-d2d.md`

No public HTML, sitemap, schema, hero, content, footer, image, PDF or analytics file was changed.

## CSS Classes Changed

Changed shared rail rule:

- `header.header-lock-v1 .wrap`

Inherited locked patterns:

- Top bar inner rail: `header .topRail.topbar-lock-v1 > .wrap`
- Header inner rail: `header.header-lock-v1 > .wrap`

## Pages Compared

- `index.html`
- `company-profile.html`
- `mission-vision.html`
- `registrations-compliance.html`
- `materials/stainless-steel.html`
- `materials/ss-316-supplier-india.html`
- `materials/stainless-steel-pipes-supplier-india.html`
- `industries.html`
- `blog.html`
- `contact.html`
- `quotation.html`

## Before Measurement Summary

| Page | Viewport | Topbar text X | Logo X | Header W | Topbar W |
| --- | ---: | ---: | ---: | ---: | ---: |
| Home | 1366 | 113 | 113 | 1180 | 1180 |
| Company Profile | 1366 | 133 | 133 | 1140 | 1140 |
| Mission and Vision | 1366 | 133 | 133 | 1140 | 1140 |
| Registrations Compliance | 1366 | 133 | 133 | 1140 | 1140 |
| Knowledge Hub | 1366 | 133 | 133 | 1140 | 1140 |
| Material Family | 1366 | 113 | 113 | 1180 | 1180 |
| Grade Spec | 1366 | 113 | 113 | 1180 | 1180 |
| Product Form | 1366 | 113 | 113 | 1180 | 1180 |
| Home | 1280 | 70 | 70 | 1180 | 1180 |
| Mission and Vision | 1280 | 90 | 90 | 1140 | 1140 |

Before result: affected pages were shifted right by `20px` against the homepage at 1366px and 1280px.

## After Measurement Summary

| Page | Viewport | Topbar text X | Logo X | Header W | Topbar W |
| --- | ---: | ---: | ---: | ---: | ---: |
| Home | 1366 | 113 | 113 | 1180 | 1180 |
| Company Profile | 1366 | 113 | 113 | 1180 | 1180 |
| Mission and Vision | 1366 | 113 | 113 | 1180 | 1180 |
| Registrations Compliance | 1366 | 113 | 113 | 1180 | 1180 |
| Knowledge Hub | 1366 | 113 | 113 | 1180 | 1180 |
| Material Family | 1366 | 113 | 113 | 1180 | 1180 |
| Grade Spec | 1366 | 113 | 113 | 1180 | 1180 |
| Product Form | 1366 | 113 | 113 | 1180 | 1180 |
| Industries | 1366 | 113 | 113 | 1180 | 1180 |
| Contact | 1366 | 113 | 113 | 1180 | 1180 |
| Request Quote | 1366 | 113 | 113 | 1180 | 1180 |
| Home | 1280 | 70 | 70 | 1180 | 1180 |
| Mission and Vision | 1280 | 70 | 70 | 1180 | 1180 |
| Home | 390 | 39.34 | 14 | 390 | 390 |
| Mission and Vision | 390 | 39.34 | 14 | 390 | 390 |

After result: homepage and Mission & Vision match within `0px` tolerance. All tested pages match the homepage rail within the required `0px` to `2px` tolerance.

## Screenshot Folders

Before:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-d2d-alignment-before`

After:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-d2d-alignment-after`

## Visual QA Notes

- Homepage still uses the approved top bar and header look.
- Mission & Vision now aligns with homepage.
- Company Profile now aligns with homepage.
- The top bar text starts from the same rail on tested desktop pages.
- The logo starts from the same rail on tested desktop pages.
- Desktop nav remains visible at 1366px and 1280px.
- Mobile remains clean at 390px.
- Mobile menu still includes `Home` first.
- Logo filter remains `none`.
- Topbar center remains empty.
- Desktop WhatsApp RFQ button was not added.
- Hero, body, CTA, footer and content sections were not changed.

## Technical QA Results

- `npm run qa:sitemap`: passed, 261 sitemap URLs, 261 local HTML pages, 0 missing, 0 unmatched, 0 duplicates.
- `npm run qa:crawl`: passed, 400 links scanned.
- `npm run qa:schema`: passed, 261 HTML pages, 866 JSON-LD blocks, 0 invalid.
- `npm run qa:accessibility`: passed, 5 pages, 0 accessibility violations.
- `npm run test:navigation`: passed.
- `npm run qa:html`: passed, 261 pages, 0 invalid.
- `npm run qa:links`: passed, 400 links scanned.
- `npm run qa:pa11y`: passed, 9/9 URLs; quotation page remains at 5 known errors within threshold 7.
- `npm run qa:forbidden-claims`: passed as review-only, 367 files scanned, 608 matches flagged for review, no rewrites.
- `npm run qa:images:audit`: passed as audit-only, 184 image files, 3951 referenced image URLs, 0 missing, 55 non-WebP, 2 oversized, 3140 missing/empty alt instances, no image modifications.
- `git diff --check`: passed with line-ending warnings only for touched CSS/docs files.

## Additional Verification

- `sitemap.xml` unchanged.
- Public HTML keeps approved GA4 tracking.
- Old accidental GA4 ID remains absent from public HTML.
- No unsafe business claims were introduced.
- Protected untracked files remained untouched and untracked.
- No `Stockiest` typo was introduced in public HTML.
- Header/nav order and labels were not changed.
- Top Bar Lock V1 visual design was not redesigned.
- Header Lock V1 visual design was not redesigned.
- Sitewide alignment correction was performed through the shared lock rail only.

## Final Confirmation

D2D sitewide header/topbar alignment correction preserved the approved top bar and header designs. Only the shared alignment rail was corrected.
