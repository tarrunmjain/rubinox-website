# Registration Trust Card Cleanup - Batch 13C

Date: 2026-07-02
Website: https://rubinoxmetal.com
Active folder: C:\Users\Dell\OneDrive\Documents\rubinox-website-live
Batch type: small verified trust-content cleanup.

## Reason For Cleanup

Batch 13C simplified the visible GST, MSME/Udyam and IEC trust cards so public registration details stay premium, concise and aligned with the owner-approved public-display limits. Date fields and PAN were removed from the public cards to reduce clutter and avoid exposing more registration metadata than needed.

## Files And Pages Checked

Public pages checked for registration-card fields and old labels:

- `index.html`
- `about-us.html`
- `registrations-compliance.html`
- `company-profile.html`
- `contact.html`
- `quotation.html`

Other sources checked:

- `assets/docs/rubinox-company-profile.pdf`
- Public HTML schema snippets on changed pages.
- Related trust documentation files.

## Public Pages Changed

- `registrations-compliance.html`
- `company-profile.html`

## Fields Removed

- GST valid/validity date: removed from visible public cards and regenerated PDF.
- MSME/Udyam registration date: removed from visible public cards and regenerated PDF.
- IEC issue date: removed from visible public cards and regenerated PDF.
- IEC PAN: removed from visible public cards and regenerated PDF.

## Final Public GST Fields

1. GST Registered
2. Trade name: RUBINOX METAL AND ALLOYS
3. GSTIN: 27ABNFR3678P1Z3
4. Constitution: Partnership
5. Registration type: Regular

## Final Public MSME / Udyam Fields

1. MSME / Udyam Registered
2. Company name: RUBINOX METAL AND ALLOYS
3. Udyam Registration No.: UDYAM-MH-19-0443205
4. Enterprise classification: Micro, 2026-27
5. Major activity: Trading

## Final Public IEC Fields

1. IEC Holder
2. Firm name: RUBINOX METAL AND ALLOYS
3. IEC: ABNFR3678P
4. Nature of concern: Partnership

## Company Profile PDF Status

The public company profile PDF was regenerated because the previous PDF text included the removed GST valid-from date, Udyam registration date, IEC issue date and IEC PAN fields.

Regenerated file:

- `assets/docs/rubinox-company-profile.pdf`

PDF verification:

- A4 PDF.
- 3 pages.
- Not encrypted.
- No JavaScript.
- Rendered to PNG for visual review.
- Removed fields are absent from extracted text.
- Simplified registration cards are visible in the requested order.
- No raw GST, Udyam or IEC certificate pages are embedded.

PDF render path:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-batch-13c-pdf-render`

## Schema Changes

No schema changes were required. Existing FAQ schema on `registrations-compliance.html` identifies the public GSTIN, Udyam number and IEC number only, and does not contain the removed GST valid-from date, Udyam registration date, IEC issue date or IEC PAN fields.

## QA Results

- `npm.cmd run qa:sitemap` - passed. Sitemap URLs: 261; local HTML pages: 261; missing URLs: 0; extra sitemap URLs: 0; duplicates: 0.
- `npm.cmd run qa:crawl` - passed. Successfully scanned 397 links.
- `npm.cmd run qa:schema` - passed. HTML pages scanned: 261; JSON-LD blocks found: 866; invalid JSON-LD blocks: 0.
- `npm.cmd run qa:accessibility` - passed. Pages checked: 5; total violations: 0.
- `npm.cmd run test:navigation` - passed.
- `npm.cmd run qa:html` - passed. HTML pages checked: 261; invalid pages: 0.
- `npm.cmd run qa:links` - passed. Successfully scanned 397 links.
- `npm.cmd run qa:pa11y` - passed. 9/9 URLs passed within configured threshold; `quotation.html` retains 5 existing threshold-accepted errors.
- `npm.cmd run qa:images:audit` - completed. Missing image files: 0; original website images were not modified. Existing image debt remains: 55 non-WebP images, 2 oversized images and 3401 missing/empty alt text instances.
- `npm.cmd run qa:forbidden-claims` - passed in audit mode. No files rewritten.
- `git diff --check` - passed with Git CRLF warnings only.

## Visual QA Result

Passed targeted visual QA for `registrations-compliance.html` and `company-profile.html` at 1366, 1280, 768, 390 and 360 px widths.

Checks completed:

- Registration cards remain clean and readable on desktop and mobile.
- GST, MSME/Udyam and IEC fields appear in the requested order.
- Removed labels are not visible: `Valid from:`, `Registration date:`, `Issue date:` and `PAN:`.
- Each changed page has exactly one H1.
- Header and footer are present.
- Horizontal overflow: 0 px at all checked widths.
- Public company profile PDF returns HTTP 200 and begins with `%PDF`.

Visual screenshot path:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-batch-13c-visual`

## Claim Safety Confirmation

Batch 13C did not add manufacturer, factory, mill, production, stock, price, fake certification, fake approval, client, project, rating, review, testimonial, delivery guarantee or vendor onboarding claims. Rubinox remains described as stockist, supplier, importer, exporter and project supplier.

Raw GST, Udyam and IEC certificate PDFs were not published.
