# Rubinox Design Batch D9C-R4 - Quotation Before You Send Alignment Correction

Date: 2026-07-09
Project: Rubinox Metal and Alloys website
Batch: D9C-R4 - Quotation Before You Send bullet alignment correction
Status: Implemented, pending live owner review before D9D

## Purpose

The owner reviewed the live Request A Quote / Quotation page after D9C-R3 and identified one remaining readability issue in `quotation.html`.

Problem area:

- Page: `quotation.html`
- Section: `Before You Send` helper card
- Item: fourth bullet with links to technical resources and quality documentation guidance

The bullet sentence was breaking into scattered words and short fragments. D9D final sitewide design lock was not created in this batch.

## Root Cause

The page-level quotation CSS set `.rfqHelpList li` to `display:flex`. The fourth bullet contains text nodes plus two inline links. In a flex list item, the text nodes and anchor elements can behave like separate flex children instead of one continuous sentence.

The shared D9C CSS had already corrected alignment and word spacing, but the two anchors still computed as block-level link boxes in this context. Combined with the flex list item and aggressive wrapping, the sentence fractured into multiple visual columns/fragments on narrow widths.

## Fix Applied

The correction is scoped to the shared D9C stylesheet and the existing `.rfqHelpList` selector family.

- `.rfqHelpList li` now uses normal block text flow under `body.sitewideDesignV1 main`.
- The bullet marker remains aligned through an absolutely positioned `::before` dot.
- Inline links inside `.rfqHelpList li` are forced back to `display:inline`.
- Word wrapping is restored to normal sentence behavior.
- The existing links and wording are preserved.

Final visible sentence:

`Use technical resources and quality documentation guides for schedule, MTC, PMI and inspection notes.`

Preserved links:

- `/technical-resources.html`
- `/quality-documentation-support.html`

## Files Changed

- `assets/css/rubinox-sitewide-design-v1.css`
- `docs/design-correction-quotation-before-send-batch-d9c-r4.md`
- `docs/design-sitewide-standardization-batch-d9c.md`
- `docs/design-system/RUBINOX_DESIGN_FINGERPRINT.md`

No HTML files were changed. The quotation form behavior, page content, SEO metadata, canonical URL, JSON-LD meaning, sitemap, GA4 tracking, header, top bar, footer, images and PDFs were not changed.

## Visual QA Artifacts

All visual QA output was saved on D drive only.

- Before screenshots: `D:\Websites\Rubinox\visual-qa\d9c-r4-quotation-before-send-fix\before`
- After screenshots: `D:\Websites\Rubinox\visual-qa\d9c-r4-quotation-before-send-fix\after`
- Zoom/reflow screenshots: `D:\Websites\Rubinox\visual-qa\d9c-r4-quotation-before-send-fix\zoom-reflow`
- Non-quotation screenshots: `D:\Websites\Rubinox\visual-qa\d9c-r4-quotation-before-send-fix\non-quotation-check`
- Audit files: `D:\Websites\Rubinox\visual-qa\d9c-r4-quotation-before-send-fix\audit`

Computed after-state audit:

- Fourth bullet display: `block`
- Fourth bullet text-align: `left`
- Fourth bullet overflow-wrap: `normal`
- Fourth bullet word-break: `normal`
- Both internal links: `display:inline`
- Expected sentence preserved: yes

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
- No bullet text overflow detected.
- No card overflow detected.
- No horizontal scroll introduced by this fix.
- The fourth bullet remains readable at every checked zoom/width combination.

## Sitewide Search Result

Searches were run across public HTML pages for:

- `Use technical`
- `quality documentation guides`
- `Before You Send`
- `rfqHelpList`
- list items containing inline links

Summary:

- `quality documentation guides`: 1 file
- `Before You Send`: 1 file
- `rfqHelpList`: 1 file
- HTML pages with ordinary inline-link list items: 88 files

Only `quotation.html` contains the affected `rfqHelpList` pattern and exact helper-card issue. No other pages needed correction.

Audit files:

- `D:\Websites\Rubinox\visual-qa\d9c-r4-quotation-before-send-fix\audit\sitewide-search.txt`
- `D:\Websites\Rubinox\visual-qa\d9c-r4-quotation-before-send-fix\audit\sitewide-search-summary.txt`

## Non-Quotation Check

Screenshots and computed overflow checks were captured for:

- `industries.html` at 1366 and 390
- `contact.html` at 1366 and 390
- `materials/stainless-steel.html` at 1366 and 390

Result:

- Total checks: 6
- Failures: 0
- These pages do not use `.rfqHelpList`.
- No visual damage or horizontal overflow was detected from the scoped correction.

## QA Results

Baseline checks before the CSS correction:

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

Final checks after the CSS correction:

- `npm run qa:sitemap`: passed, 261 sitemap URLs, 261 local HTML pages
- `npm run qa:crawl`: passed, 402 links scanned
- `npm run qa:schema`: passed, 261 pages, 866 JSON-LD blocks, 0 invalid
- `npm run qa:accessibility`: passed, 5 pages checked, 0 violations
- `npm run test:navigation`: passed
- `npm run qa:html`: passed, 261 pages, 0 invalid
- `npm run qa:links`: passed, 402 links scanned
- `npm run qa:pa11y`: passed, 9/9 URLs, 0 errors
- `npm run qa:forbidden-claims`: completed, no files rewritten
- `npm run qa:images:audit`: completed, original website images were not modified
- `git diff --check`: passed

## D9D Gate

D9D final sitewide design lock was not created in this batch. Owner should review the live `quotation.html` correction before D9D begins.
