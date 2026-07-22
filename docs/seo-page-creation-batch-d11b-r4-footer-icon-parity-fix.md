# D11B-R4 - SEO Page Footer Icon Parity Correction

## Owner Issue Summary

After D11B-R3, the owner reviewed the first 10 material-location pages and found one remaining footer issue before D11C:

- Call and email icons were inside light footer tiles.
- WhatsApp, Facebook, Instagram and LinkedIn appeared as loose standalone icons.
- The icon row did not visually match the finalized sitewide footer.

This correction keeps all D11B page content, URLs, title/meta, canonical tags, schema, sitemap entries and analytics unchanged.

## Pages Covered

1. `material-location/ss-304-welded-pipes-chennai.html`
2. `material-location/ss-316-sheets-hyderabad.html`
3. `material-location/ss-316l-pipes-ahmedabad.html`
4. `material-location/ss-304-round-bars-pune.html`
5. `material-location/ss-316-fittings-mumbai.html`
6. `material-location/ss-304-plates-bengaluru.html`
7. `material-location/stainless-steel-coils-surat.html`
8. `material-location/stainless-steel-flanges-vadodara.html`
9. `material-location/duplex-2205-pipes-mumbai.html`
10. `material-location/inconel-625-round-bars-hyderabad.html`

## Root Cause

The footer icon markup on the D11B pages already matched the finalized footer references:

- `.footerIconGroup` wrapper was present.
- Six `.footerIcon` anchors were present.
- Call and email anchors used `.functionIcon`.
- Social anchors used `.brandUtility`.
- Accessible labels and link destinations were preserved.
- Nested page asset paths were correct.

The mismatch was caused by shared CSS selector coverage:

- The shared D9C footer CSS applied the locked light tile background and border only to `.footerIcon.functionIcon`.
- That covered Call and Email.
- It did not cover the four `.footerIcon.brandUtility` social links.
- Reference pages still rendered correctly because they also carry stronger page-level footer icon CSS.

## Correction Applied

Updated `assets/css/rubinox-sitewide-design-v1.css` so the locked footer tile treatment applies to every icon anchor inside the final footer brand icon group:

- `body.sitewideDesignV1 .sitewideFooterD9C .footerBrand .footerIcon`

The fix now enforces:

- 32px by 32px tile size.
- 8px rounded tile radius.
- Light neutral tile background for social icons.
- Approved subtle green and blue function-icon tile tint for Call and Email.
- Shared light border.
- Centered icon alignment.
- No loose social icons.
- Hover lift, white hover tile, gold border and soft shadow.
- Focus-visible outline matching the final footer treatment.

No D11B HTML page markup was changed because the markup already matched the locked footer structure.

## Files Changed

- `assets/css/rubinox-sitewide-design-v1.css`
- `docs/seo-page-creation-batch-d11b.md`
- `docs/seo-page-creation-batch-d11b-r4-footer-icon-parity-fix.md`

## Audit Results

Post-change audit covered all 10 D11B pages at 1366, 1280 and 390 widths:

- Final CSS reference present: 10/10 pages.
- `sitewideDesignV1` body class present: 10/10 pages.
- Final footer classes present: 10/10 pages.
- `.footerIconGroup` present: 10/10 pages.
- Exactly six `.footerIcon` anchors: 10/10 pages.
- All six icons have matching tile dimensions: 10/10 pages.
- All six icons have matching border radius: 10/10 pages.
- All six icons have visible tile background and border: 10/10 pages.
- All six icons remain in one row at 1366, 1280 and 390: 10/10 pages.
- No loose social icons: 10/10 pages.
- No plain black call/email icons: 10/10 pages.
- Unified `Quick Links:` present: 10/10 pages.
- Old split footer headings absent: 10/10 pages.
- Footer copyright has no year: 10/10 pages.
- Horizontal overflow: 0.

Audit JSON is saved in:

- `D:\Websites\Rubinox\visual-qa\d11b-r4-footer-icon-parity-fix\audit`

## Screenshot Folders

- `D:\Websites\Rubinox\visual-qa\d11b-r4-footer-icon-parity-fix\before`
- `D:\Websites\Rubinox\visual-qa\d11b-r4-footer-icon-parity-fix\after`
- `D:\Websites\Rubinox\visual-qa\d11b-r4-footer-icon-parity-fix\footer-icons`
- `D:\Websites\Rubinox\visual-qa\d11b-r4-footer-icon-parity-fix\zoom-reflow`
- `D:\Websites\Rubinox\visual-qa\d11b-r4-footer-icon-parity-fix\audit`

## Zoom and Reflow Results

Zoom/reflow was checked on:

- `material-location/ss-316-sheets-hyderabad.html`
- `material-location/duplex-2205-pipes-mumbai.html`
- `material-location/inconel-625-round-bars-hyderabad.html`

Nominal widths and zoom levels:

- 1366 at 100%, 110% and 125%.
- 1280 at 100%, 110% and 125%.
- 390 at 100%, 110% and 125%.
- 360 at 100%, 110% and 125%.

The final browser-zoom reflow audit used effective CSS viewport widths for 110% and 125% checks. Results:

- Page overflow: 0.
- Footer icon overflow: 0.
- All six icons stayed in one row for every tested width and zoom level.
- All six icons kept visible tile background and border.
- Mobile layout remained clean.

## QA Results

Baseline QA before the R4 edit passed:

- `npm run qa:sitemap`: 271 sitemap URLs, 271 local HTML pages, 0 missing, 0 extra sitemap URLs, 0 duplicates.
- `npm run qa:crawl`: passed.
- `npm run qa:schema`: 271 HTML pages scanned, 906 JSON-LD blocks found, 0 invalid.
- `npm run qa:accessibility`: passed.
- `npm run test:navigation`: passed.
- `npm run qa:html`: 271 pages checked, 0 invalid.
- `npm run qa:links`: passed.
- `npm run qa:pa11y`: 9/9 URLs passed, 0 errors.
- `npm run qa:forbidden-claims`: no files rewritten.
- `git diff --check`: passed.

Final QA after documentation update:

- `npm run qa:sitemap`: 271 sitemap URLs, 271 local HTML pages, 0 missing, 0 extra sitemap URLs, 0 duplicates.
- `npm run qa:crawl`: 412 links scanned successfully.
- `npm run qa:schema`: 271 HTML pages scanned, 906 JSON-LD blocks found, 0 invalid.
- `npm run qa:accessibility`: passed.
- `npm run test:navigation`: passed.
- `npm run qa:html`: 271 pages checked, 0 invalid.
- `npm run qa:links`: 412 links scanned successfully.
- `npm run qa:pa11y`: 9/9 URLs passed, 0 errors.
- `npm run qa:forbidden-claims`: 408 files scanned, 672 existing matches flagged for review, no files rewritten.
- `npm run qa:images:audit`: 184 image files found, 4,101 referenced image URLs, 0 missing image files; existing image inventory items remain for non-WebP, oversized image and alt-text review.
- `git diff --check`: passed with line-ending normalization warnings only.

## Safety Confirmation

- No new pages were created.
- No sitemap count change was made.
- No public URL, H1 intent, title/meta, canonical or schema meaning was changed.
- GA4 remains `G-JT5X5L5H07`.
- Old GA4 ID remains absent.
- No unsupported business role, approval, testimonial, client, project-reference, inventory, price or dispatch-promise wording was added.
- Footer layout from D11B-R3 remains preserved: brand left, unified Quick Links center and Contact Details right on desktop.

## Owner Review Instruction

Owner should review the corrected D11B footer icons before D11C.
