# Rubinox Design Batch D9C-R6 - Knowledge Hub Filter Hover Correction

Date: 2026-07-09
Project: Rubinox Metal and Alloys website
Batch: D9C-R6 - Knowledge Hub Buyer Guide filter hover correction
Status: Implemented, pending live owner review before D9D

## Purpose

The owner reviewed the live Knowledge Hub page after D9C-R5 and identified one remaining hover-state issue.

Problem area:

- Page: `blog.html`
- Section: `Featured Buyer Guides`
- Elements: category/filter chips below the search field

The filter chips did not match the approved Rubinox chip-hover system. Hover/focus/active states used a filled pale background with a navy-tinted outline that could read as a silver frame. D9D final sitewide design lock was not created in this batch.

## Root Cause

The Knowledge Hub filters are `button.blogFilter` controls. Existing D9C sitewide chip rules covered anchor-style chips such as `a.blogFilter`, `a.tag`, `a.chip` and `.tagRow a`, but they did not cover `button.blogFilter`.

Because of that selector gap, the older page-specific Knowledge Hub rule continued to control these buttons:

- hover/focus/active used a filled background
- hover/focus/active used a 2px navy outline that read as a silver frame
- hover did not use the final approved chip shadow/lift pattern

## Fix Applied

A focused CSS-only override was added to `assets/css/rubinox-sitewide-design-v1.css` for:

- `body.sitewideDesignV1 main .blogFilters button.blogFilter`
- `body.sitewideDesignV1 main .blogFilters button.blogFilter:hover`
- `body.sitewideDesignV1 main .blogFilters button.blogFilter:focus-visible`
- `body.sitewideDesignV1 main .blogFilters button.blogFilter.isActive`

No `blog.html` markup, content, links, article cards or filter JavaScript were changed.

## Final Filter Chip Rule

Default filter chip:

- white/light surface
- navy text
- 1px subtle border
- soft resting shadow
- no layout shift

Hover:

- white surface remains
- thin Rubinox gold border/accent
- slight `translateY(-1px)` lift
- restrained soft shadow
- no filled random color
- no silver border
- no thick frame
- no hover outline

Focus-visible:

- white surface remains
- Rubinox gold border/accent
- restrained soft shadow and slight lift
- accessible subtle gold outline

Active/selected:

- subtle white-to-pale-gold brand surface
- Rubinox gold border
- navy text
- restrained shadow
- no silver frame or heavy outline

## Functionality Preserved

The filter/search JavaScript was preserved.

Post-fix behavior checks:

- Initial Knowledge Hub article cards visible: 32
- `Nickel Alloys` filter visible cards: 4
- `monel` search visible cards: 2
- `duplex` search visible cards: 5
- Filter/search checks passed

## Files Changed

- `assets/css/rubinox-sitewide-design-v1.css`
- `docs/design-correction-knowledge-hub-filter-hover-batch-d9c-r6.md`
- `docs/design-sitewide-standardization-batch-d9c.md`
- `docs/design-system/RUBINOX_DESIGN_FINGERPRINT.md`

No `blog.html` markup change was required.

No public URLs, title/meta/canonical tags, JSON-LD meaning, sitemap URLs, GA4 tracking, contact details, header, top bar, footer, images or PDFs were changed.

## Visual QA Artifacts

All visual QA output was saved on D drive only.

- Before screenshots: `D:\Websites\Rubinox\visual-qa\d9c-r6-knowledge-hub-filter-hover-fix\before`
- After screenshots: `D:\Websites\Rubinox\visual-qa\d9c-r6-knowledge-hub-filter-hover-fix\after`
- Hover/focus screenshots: `D:\Websites\Rubinox\visual-qa\d9c-r6-knowledge-hub-filter-hover-fix\hover-focus`
- Zoom/reflow screenshots: `D:\Websites\Rubinox\visual-qa\d9c-r6-knowledge-hub-filter-hover-fix\zoom-reflow`
- Non-blog screenshots: `D:\Websites\Rubinox\visual-qa\d9c-r6-knowledge-hub-filter-hover-fix\non-blog-check`
- Audit files: `D:\Websites\Rubinox\visual-qa\d9c-r6-knowledge-hub-filter-hover-fix\audit`

## Before/After Computed State

Before:

- Hover background: `rgb(255, 248, 232)`
- Hover outline: `2px` navy-tinted outline
- Hover shadow: none
- Focus/active used the same filled background and outline treatment

After:

- Hover background: `rgb(255, 255, 255)`
- Hover border: Rubinox gold
- Hover outline width: `0px`
- Hover shadow: approved restrained chip shadow
- Focus-visible outline: subtle Rubinox gold
- Active state: brand-consistent white/pale-gold surface with Rubinox gold border

## Hover and Focus Results

Screenshots were captured for desktop and mobile widths.

Result:

- `All` normal state captured.
- `Carbon Steel & Mild Steel` hover state corrected.
- `Export Support` hover state corrected.
- `RFQ & Procurement` keyboard focus-visible state corrected.
- `Product Forms` active/selected state corrected.
- Mobile filter chip view captured.
- No filled random color, silver border, thick frame or layout shift was detected.

## Zoom and Reflow Results

Zoom/reflow simulation was run at:

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
- Filter chips stay inside the section.
- Chip text does not overflow.
- Chips wrap cleanly.
- Search input stays aligned.
- Hover/focus does not change chip size.

## Sitewide Search Result

Searches were run across public HTML and CSS files for:

- `blogFilter`
- `blogFilters`
- `filter`
- `tag`
- `chip`
- `pill`
- `category`
- `guideFilter`
- `buyerGuide`
- `filterChip`
- `tagChip`

Summary:

- Actual files with `<button ... blogFilter>` controls: 1
- Actual file: `blog.html`
- Files containing `blogFilters` text: 54, because older/shared CSS text is embedded in multiple static pages
- `guideFilter`, `buyerGuide`, `filterChip`, `tagChip`: 0

The actual Knowledge Hub filter controls exist only on `blog.html`. Other tag/chip occurrences are article tags, material/form chips, related links or page metadata and were not changed.

Audit files:

- `D:\Websites\Rubinox\visual-qa\d9c-r6-knowledge-hub-filter-hover-fix\audit\sitewide-chip-filter-search.txt`
- `D:\Websites\Rubinox\visual-qa\d9c-r6-knowledge-hub-filter-hover-fix\audit\sitewide-chip-filter-search-summary.txt`

## Non-Blog Check

Screenshots and computed overflow checks were captured for:

- `industries.html` at 1366 and 390
- `product-forms.html` at 1366 and 390
- `locations.html` at 1366 and 390
- `export.html` at 1366 and 390
- `materials/stainless-steel.html` at 1366 and 390

Result:

- Total checks: 10
- Failures: 0
- These pages do not contain actual `.blogFilter` button controls.
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
- `npm run qa:forbidden-claims`: completed, 390 files scanned, 672 matches flagged for review, no files rewritten
- `git diff --check`: passed

Final checks after the correction:

- `npm run qa:sitemap`: passed, 261 sitemap URLs, 261 local HTML pages
- `npm run qa:crawl`: passed, 402 links scanned
- `npm run qa:schema`: passed on rerun, 261 pages, 866 JSON-LD blocks, 0 invalid
- `npm run qa:accessibility`: passed, 5 pages checked, 0 violations
- `npm run test:navigation`: passed
- `npm run qa:html`: passed, 261 pages, 0 invalid
- `npm run qa:links`: passed, 402 links scanned
- `npm run qa:pa11y`: passed, 9/9 URLs, 0 errors
- `npm run qa:forbidden-claims`: completed, 391 files scanned, 672 matches flagged for review, no files rewritten
- `npm run qa:images:audit`: completed, 184 image files, 3951 referenced image URLs, 0 missing image files, original website images not modified
- `git diff --check`: passed, with Git line-ending notices only

Note: the first final `qa:schema` run reported one `https://schema.org` context dereference failure on `product-portfolio.html`. The same command was rerun immediately and passed with 0 invalid blocks. No HTML files were changed in D9C-R6.

## D9D Gate

D9D final sitewide design lock was not created in this batch. Owner should review the live `blog.html` / Knowledge Hub filter hover correction before D9D begins.
