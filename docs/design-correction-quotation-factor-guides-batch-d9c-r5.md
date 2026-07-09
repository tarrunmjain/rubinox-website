# Rubinox Design Batch D9C-R5 - Quotation Factor Guides Alignment Correction

Date: 2026-07-09
Project: Rubinox Metal and Alloys website
Batch: D9C-R5 - Quotation Factor Guides alignment correction
Status: Implemented, pending live owner review before D9D

## Purpose

The owner reviewed the live Request A Quote / Quotation page after D9C-R4 and identified one remaining alignment issue in `quotation.html`.

Problem area:

- Page: `quotation.html`
- Section: `Quotation Factor Guides`
- Content: section heading, explanatory paragraph and guide-link chips

The guide-link chips did not feel aligned with the approved card system. Wrapped chips looked uneven, and the section needed a cleaner internal rail and spacing before D9D. D9D final sitewide design lock was not created in this batch.

## Root Cause

The section used a generic `.card` with a generic `.linkGrid` link bank. The D9C stylesheet had spacing rules for `.linkGrid`, but the container still computed as `display:block` in this page context. Because the chips were inline-flex links inside a block container, the chip row did not behave like a controlled wrapping chip bank.

The card also inherited the sitewide top accent, but the compressed HTML/card treatment left the heading too close to the accent line and did not define a dedicated content rail for the heading, paragraph and chips.

## Fix Applied

A focused class was added only to the quotation factor-guide card and its link bank:

- `quotationFactorGuides`
- `quotationFactorGuideLinks`

The correction is implemented in the shared D9C stylesheet with those scoped selectors.

Final layout behavior:

- White card base with existing D9C/Card Accent top line.
- Clean internal padding below the accent line.
- Heading, paragraph and guide chips align to the same content rail.
- Guide links use `display:flex`, `flex-wrap:wrap`, equal gaps and left-aligned rows.
- Chips stay contained inside the card at desktop and mobile widths.
- Hover/focus uses the approved subtle gold border, slight lift and soft shadow.
- No filled gold chip background, thick border, heavy outline or layout shift was introduced.

## Links Preserved

All existing link text and URLs were preserved:

- `Stainless Steel Price Factors` -> `/stainless-steel-price-factors-india.html`
- `Stainless Steel Pipe Factors` -> `/stainless-steel-pipe-price-factors-india.html`
- `SS 304 Factors` -> `/ss-304-price-factors-india.html`
- `SS 316L Factors` -> `/ss-316l-price-factors-india.html`
- `Inconel 625 Factors` -> `/inconel-625-price-factors-india.html`
- `Duplex 2205 Factors` -> `/duplex-2205-price-factors-india.html`
- `Company Profile` -> `/company-profile.html`

The paragraph remains unchanged:

`These pages explain what details affect quote review without publishing fixed public prices.`

## Files Changed

- `quotation.html`
- `assets/css/rubinox-sitewide-design-v1.css`
- `docs/design-correction-quotation-factor-guides-batch-d9c-r5.md`
- `docs/design-sitewide-standardization-batch-d9c.md`
- `docs/design-system/RUBINOX_DESIGN_FINGERPRINT.md`

No quotation form behavior, SEO metadata, canonical URL, JSON-LD meaning, sitemap, GA4 tracking, header, top bar, footer, images or PDFs were changed.

## Visual QA Artifacts

All visual QA output was saved on D drive only.

- Before screenshots: `D:\Websites\Rubinox\visual-qa\d9c-r5-quotation-factor-guides-fix\before`
- After screenshots: `D:\Websites\Rubinox\visual-qa\d9c-r5-quotation-factor-guides-fix\after`
- Hover/focus screenshots: `D:\Websites\Rubinox\visual-qa\d9c-r5-quotation-factor-guides-fix\hover-focus`
- Zoom/reflow screenshots: `D:\Websites\Rubinox\visual-qa\d9c-r5-quotation-factor-guides-fix\zoom-reflow`
- Non-quotation screenshots: `D:\Websites\Rubinox\visual-qa\d9c-r5-quotation-factor-guides-fix\non-quotation-check`
- Audit files: `D:\Websites\Rubinox\visual-qa\d9c-r5-quotation-factor-guides-fix\audit`

Computed after-state audit:

- Factor guide card class: `card quotationFactorGuides`
- Link bank class: `linkGrid quotationFactorGuideLinks`
- Link bank display: `flex`
- Link bank gap: `10px` desktop, `9px` mobile
- Link count: 7
- Horizontal overflow: none
- Link text and URLs preserved: yes

## Hover and Focus Results

Screenshots were captured for desktop and mobile widths.

Result:

- Hover uses a subtle Rubinox gold border.
- Focus-visible remains available.
- Chips keep a white background.
- No filled gold background, thick border or heavy frame appears.
- No layout shift was detected.

## Zoom and Reflow Results

Browser-style zoom/reflow simulation was run at:

- 100%
- 110%
- 125%

Widths checked:

- 1366
- 1280
- 390
- 360

Result:

- Total checks: 12
- Failures: 0
- Guide chips stay inside the card.
- No chip text overflow was detected.
- Chips wrap cleanly with aligned row starts.
- No horizontal scroll was introduced by this section.

## Sitewide Search Result

Searches were run across public HTML pages for:

- `Quotation Factor Guides`
- `Factor Guides`
- `Related Guides`
- `Guide`
- `guideLink`
- `linkChip`
- `resourceLinks`
- `factor`
- `guide`
- `formChipRow`
- `linkGrid`

Summary:

- `Quotation Factor Guides`: 1 file
- `Factor Guides`: 2 files
- `Related Guides`: 43 files
- `guideLink`, `linkChip`, `resourceLinks`: 0 files
- `linkGrid`: 261 files

The exact affected `Quotation Factor Guides` section exists only on `quotation.html`. Other guide/link-grid occurrences are ordinary page hubs, card links, or related-link sections and were not changed.

Audit files:

- `D:\Websites\Rubinox\visual-qa\d9c-r5-quotation-factor-guides-fix\audit\sitewide-guide-chip-search.txt`
- `D:\Websites\Rubinox\visual-qa\d9c-r5-quotation-factor-guides-fix\audit\sitewide-guide-chip-search-summary.txt`

## Non-Quotation Check

Screenshots and computed overflow checks were captured for:

- `industries.html` at 1366 and 390
- `contact.html` at 1366 and 390
- `materials/stainless-steel.html` at 1366 and 390
- `blog.html` at 1366 and 390

Result:

- Total checks: 8
- Failures: 0
- These pages do not use `.quotationFactorGuides`.
- No visual damage or horizontal overflow was detected from the scoped correction.

## QA Results

Baseline checks before the correction:

- `npm run qa:sitemap`: passed, 261 sitemap URLs, 261 local HTML pages
- `npm run qa:crawl`: passed, 402 links scanned
- `npm run qa:schema`: passed, 261 pages, 866 JSON-LD blocks, 0 invalid
- `npm run qa:accessibility`: passed, 5 pages checked, 0 violations
- `npm run test:navigation`: passed
- `npm run qa:html`: passed, 261 pages, 0 invalid
- `npm run qa:links`: passed, 402 links scanned
- `npm run qa:pa11y`: passed, 9/9 URLs, 0 errors
- `npm run qa:forbidden-claims`: completed, no files rewritten
- `git diff --check`: passed

Final checks after the correction:

- `npm run qa:sitemap`: passed, 261 sitemap URLs, 261 local HTML pages
- `npm run qa:crawl`: passed, 402 links scanned
- `npm run qa:schema`: passed, 261 pages, 866 JSON-LD blocks, 0 invalid
- `npm run qa:accessibility`: passed, 5 pages checked, 0 violations
- `npm run test:navigation`: passed
- `npm run qa:html`: passed, 261 pages, 0 invalid
- `npm run qa:links`: passed, 402 links scanned
- `npm run qa:pa11y`: passed, 9/9 URLs, 0 errors
- `npm run qa:forbidden-claims`: completed, 390 files scanned, 672 matches flagged for review, no files rewritten
- `npm run qa:images:audit`: completed, 184 image files, 3951 referenced image URLs, 0 missing image files, original website images not modified
- `git diff --check`: passed, with Git line-ending notices only

## D9D Gate

D9D final sitewide design lock was not created in this batch. Owner should review the live `quotation.html` factor guide correction before D9D begins.

