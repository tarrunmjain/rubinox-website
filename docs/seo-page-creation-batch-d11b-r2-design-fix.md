# D11B-R2 - First SEO Page Batch Design Correction

## Batch Summary

D11B-R2 corrected the first 10 material-location SEO/GEO/AEO pages after live owner review. The correction was limited to footer/theme consistency and the Typical Enquiry Uses note presentation.

No new pages were created. No URL, H1, title, meta description, canonical URL, JSON-LD meaning, sitemap entry, GA4 configuration, contact value or page intent was changed.

## Owner Issues

- Footer function icons on the new D11B pages did not fully match the locked footer treatment.
- The Typical Enquiry Uses note used a pale beige/yellow presentation that did not match the final Rubinox theme.

## Pages Fixed

- `material-location/ss-304-welded-pipes-chennai.html`
- `material-location/ss-316-sheets-hyderabad.html`
- `material-location/ss-316l-pipes-ahmedabad.html`
- `material-location/ss-304-round-bars-pune.html`
- `material-location/ss-316-fittings-mumbai.html`
- `material-location/ss-304-plates-bengaluru.html`
- `material-location/stainless-steel-coils-surat.html`
- `material-location/stainless-steel-flanges-vadodara.html`
- `material-location/duplex-2205-pipes-mumbai.html`
- `material-location/inconel-625-round-bars-hyderabad.html`

## Root Cause

Footer root cause:

- The D11B pages used the locked footer markup and correct one-folder-deep relative asset paths.
- A shared CSS footer selector used the wrong class spelling: `.siteFooterD9C`.
- The actual locked footer marker is `.sitewideFooterD9C`.
- Because of that selector mismatch, the final shared footer icon normalization did not apply to the new material-location pages.

Typical Enquiry Uses note root cause:

- The D11B pages reused the existing `.editorialNote` class.
- That class carried a beige/yellow note presentation from older article styling.
- The note needed a theme-consistent Rubinox treatment while preserving the same safe meaning.

## Fixes Applied

- Corrected shared footer selectors in `assets/css/rubinox-sitewide-design-v1.css` to target `.sitewideFooterD9C`.
- Added final shared footer function-icon styling for the locked footer marker.
- Preserved the locked footer structure, unified `Quick Links:` heading, six brand/contact/social icons and no-year copyright.
- Added reusable `.rfqReviewNote` styling with a white/silver card background, navy text and gold/navy accent.
- Added `rfqReviewNote` to the existing Typical Enquiry Uses note on all 10 D11B pages.
- Preserved note meaning and page copy.

## Files Changed

- `assets/css/rubinox-sitewide-design-v1.css`
- 10 `material-location/*.html` pages listed above
- `docs/seo-page-creation-batch-d11b.md`
- `docs/seo-page-creation-batch-d11b-r2-design-fix.md`

## Audit Results

Targeted browser audit across all 10 fixed pages:

- Final footer present: 10/10.
- Correct locked footer marker `.sitewideFooterD9C`: 10/10.
- Six brand/contact/social icons in the footer row: 10/10.
- Unified `Quick Links:` present: 10/10.
- Old split footer headings present: 0.
- Footer `2026` year findings: 0.
- Call icon computed style: themed green function treatment on 10/10.
- Email icon computed style: themed blue function treatment on 10/10.
- Typical Enquiry Uses note: white/silver background with gold/navy accent on 10/10.
- Page-level horizontal overflow in targeted audit: 0.

## Screenshot Folders

- `D:\Websites\Rubinox\visual-qa\d11b-r2-first-page-batch-design-fix\before`
- `D:\Websites\Rubinox\visual-qa\d11b-r2-first-page-batch-design-fix\after`
- `D:\Websites\Rubinox\visual-qa\d11b-r2-first-page-batch-design-fix\footer`
- `D:\Websites\Rubinox\visual-qa\d11b-r2-first-page-batch-design-fix\zoom-reflow`
- `D:\Websites\Rubinox\visual-qa\d11b-r2-first-page-batch-design-fix\audit`

Screenshot counts:

- Before screenshots: 8.
- After screenshots: 12.
- Footer close-ups: 12.
- Zoom/reflow screenshots: 36.

## Zoom and Reflow Results

Checked pages:

- `material-location/ss-316-sheets-hyderabad.html`
- `material-location/duplex-2205-pipes-mumbai.html`
- `material-location/inconel-625-round-bars-hyderabad.html`

Declared widths and zoom levels:

- 1366, 1280, 390 and 360.
- 100%, 110% and 125%.

Results:

- 36 zoom/reflow checks completed.
- Page-level overflow: 0.
- Footer overflow: 0.
- Note text overflow: 0.
- CTA/card/chip text overflow findings: 0.
- Mobile layouts remained clean at the sampled widths.

## QA Results

Final QA results:

- `npm run qa:sitemap`: 271 sitemap URLs, 271 local HTML pages, 0 missing, 0 extra, 0 duplicates.
- `npm run qa:crawl`: 412 links scanned successfully.
- `npm run qa:schema`: 271 HTML pages scanned, 906 JSON-LD blocks, 0 invalid.
- `npm run qa:accessibility`: 5 pages checked, 0 violations.
- `npm run test:navigation`: passed.
- `npm run qa:html`: 271 pages checked, 0 invalid.
- `npm run qa:links`: 412 links scanned successfully.
- `npm run qa:pa11y`: 9/9 URLs passed, 0 errors.
- `npm run qa:forbidden-claims`: baseline only, no files rewritten.
- `npm run qa:images:audit`: 0 missing image files; existing image inventory findings remain unchanged.
- `git diff --check`: passed.

## Safety Confirmation

- No new public pages were created.
- No sitemap count change was made.
- No title/meta/canonical/schema meaning was changed.
- GA4 remains `G-JT5X5L5H07`.
- Old GA4 ID remains absent.
- Protected untracked files remained untouched and untracked.

## Owner Review

Owner should review the corrected D11B pages before D11C.
