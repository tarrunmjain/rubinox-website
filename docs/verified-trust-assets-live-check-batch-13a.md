# Verified Trust Assets Live Check - Batch 13A

Date: 2026-07-02
Website: https://rubinoxmetal.com
Active folder: C:\Users\Dell\OneDrive\Documents\rubinox-website-live
Latest commit checked: 2270fc194c6d45fb62dd8cfe7023e1ead4a3c699
Batch type: live verification and documentation.

## Scope

Batch 13A-Live verified the owner-approved trust assets after deployment to GitHub Pages from main. No public website pages, sitemap entries, URLs, titles, meta descriptions, H1s, canonicals, analytics, schema meaning or broad internal-link strategy were changed in this live check.

## Source Context Read

Required source files reviewed:

- docs/trust-conversion-asset-review-batch-12.md
- docs/trust-asset-placement-map.md
- docs/trust-claims-risk-register.md
- docs/RUBINOX_OWNER_DATA_PENDING.md
- docs/RUBINOX_BATCH_QA_CHECKLIST.md
- docs/RUBINOX_SEO_DECISION_LOG.md
- docs/RUBINOX_DESIGN_DECISION_LOG.md
- docs/trust-details-implementation-batch-13a.md

Note: docs/verified-owner-assets-batch-13a-report.md was requested in the live-check brief but is not present in the active repository. The adjacent Batch 13A implementation report above was used as the available implementation source.

## Local Sync

- Branch checked: main.
- git pull origin main: already up to date.
- Local HEAD: 2270fc194c6d45fb62dd8cfe7023e1ead4a3c699.
- Remote origin/main: 2270fc194c6d45fb62dd8cfe7023e1ead4a3c699.
- Only protected untracked files remained before documentation creation:
  - CARD_ACCENT_STYLE_AUDIT.md
  - RUBINOX_MASTER_PROJECT_STATUS.md

## Live Pages Checked

All requested live URLs returned HTTP 200.

| URL | Status | Notes |
| --- | ---: | --- |
| https://rubinoxmetal.com/ | 200 | Home page live |
| https://rubinoxmetal.com/about-us.html | 200 | Trust/Bharat Metals wording checked |
| https://rubinoxmetal.com/registrations-compliance.html | 200 | GST/Udyam/IEC cards checked |
| https://rubinoxmetal.com/company-profile.html | 200 | Company profile page and PDF link checked |
| https://rubinoxmetal.com/contact.html | 200 | Contact person, hours, links and QR checked |
| https://rubinoxmetal.com/quotation.html | 200 | RFQ page live |
| https://rubinoxmetal.com/assets/docs/rubinox-company-profile.pdf | 200 | Public PDF opens, application/pdf, 5,436,250 bytes |

## Trust Details Verified

Visible public details were verified on the live pages:

- GSTIN: 27ABNFR3678P1Z3.
- Udyam: UDYAM-MH-19-0443205.
- IEC: ABNFR3678P.
- Business hours: Monday-Saturday, 9:00 AM-6:00 PM IST.
- Contact person: Tarrun M Jain, Partner.
- Phone: +91 9363193755.
- Email: tarun@rubinoxmetal.com.
- Bharat Metals wording: the site says sister concern Bharat Metals, Chennai and attributes the 40-year metals trade heritage to sister concern Bharat Metals, Chennai, not to Rubinox itself.

## Links And QR Checked

The following approved outbound links returned HTTP 200 or valid Google redirect responses:

- Google Business Profile: https://share.google/r7Mz2LfkMJdfYQl76.
- Google review link: https://g.page/r/CV2a6BfdDB4WEBM/review.
- LinkedIn: https://www.linkedin.com/company/rubinox-metal-and-alloys.
- Instagram: https://www.instagram.com/rubinox_metal/.
- Facebook: https://www.facebook.com/people/Rubinox-Metal-And-Alloys/61590518053054/.
- IndiaMART: https://www.indiamart.com/rubinox-metal-and-alloys/.
- TradeIndia: https://www.tradeindia.com/rubinox-metal-alloys-164651044/.
- Justdial: owner-approved Justdial listing URL; live response 200. HTML source uses normal ampersand escaping.
- ExportersIndia: https://www.exportersindia.com/rubinox-metal-alloys/.

Google review QR:

- Live asset: https://rubinoxmetal.com/assets/trust/rubinox-google-review-qr.png.
- Status: 200, image/png.
- Focused Playwright check passed at 1366, 1280, 768, 390 and 360 widths.
- Natural image size: 132 x 132.
- Displayed size: 100 x 100 desktop, 90 x 90 mobile/tablet.
- Alt text: Google review QR code for Rubinox Metal and Alloys.

## PDF Check

File checked: assets/docs/rubinox-company-profile.pdf.

PDF status:

- Opens locally and from live URL.
- File size: 5,436,250 bytes.
- Pages: 3.
- Page size: A4.
- Encrypted: no.
- JavaScript: no.
- Rendered pages were visually checked from PNG output.
- Images render correctly.
- Registration details are correct.
- Phone and email are correct.
- No raw GST, Udyam or IEC certificate pages are embedded.
- No fake manufacturer, factory, stock, price, certification, client, project, rating, review or delivery claims were found.
- Text scan flagged client/project/rating/testimonial only inside the explicit exclusion note.

PDF render output path:

- C:\Users\Dell\AppData\Local\Temp\rubinox-batch-13a-live-pdf\

## Visual QA Results

Live pages rendered at 1366, 1280, 768, 390 and 360 widths:

- index.html
- about-us.html
- registrations-compliance.html
- company-profile.html
- contact.html
- quotation.html

Visual QA result:

- All 30 render targets returned HTTP 200.
- All checked pages had exactly one H1.
- Page-level horizontal overflow was 0 at every requested width.
- Header and footer were present at every requested width.
- Trust cards stacked cleanly on mobile.
- Registration cards did not create a fake certification badge impression.
- Approved real office/profile visuals rendered correctly on the trust pages.
- Focused QR check passed at all requested widths.
- Quotation page has existing internally scrollable table/CTA elements, but page-level overflow remained 0 and this live batch did not change quotation layout.

Visual screenshots path:

- C:\Users\Dell\AppData\Local\Temp\rubinox-batch-13a-live-visual\

## Technical QA Results

Commands run and results:

- npm.cmd run qa:sitemap: passed. Sitemap URLs 261, local HTML pages 261, missing 0, extra 0, duplicates 0.
- npm.cmd run qa:crawl: passed. Successfully scanned 397 links; new trust images, QR and PDF returned 200.
- npm.cmd run qa:schema: passed. HTML pages scanned 261, JSON-LD blocks 866, invalid JSON-LD blocks 0.
- npm.cmd run qa:accessibility: passed. 5 pages checked, 0 accessibility violations.
- npm.cmd run test:navigation: passed.
- npm.cmd run qa:html: passed. HTML pages checked 261, invalid pages 0.
- npm.cmd run qa:links: passed. Successfully scanned 397 links.
- npm.cmd run qa:pa11y: passed. 9/9 URLs passed within threshold; company-profile.html and contact.html had 0 errors.
- npm.cmd run qa:images:audit: passed as audit. Image files 184, referenced image URLs 4212, missing image files 0. Existing audit notes remain: 55 non-WebP images, 2 oversized images, 3401 missing/empty alt text instances. Original website images were not modified.
- npm.cmd run qa:forbidden-claims: passed as audit. Files scanned 352, matches flagged for review 559, no files rewritten. Reviewed Batch 13A trust surfaces and PDF; matches are safe negative/disclaimer contexts.
- git diff --check: passed.

## Safety Confirmation

Confirmed not published:

- raw GST certificate PDF.
- raw IEC certificate PDF.
- raw Udyam certificate PDF.
- owner DOCX.
- bank/vendor/private documents.
- certificate annexures with partner photos.
- vendor onboarding pack wording.
- fake ISO/PED/NORSOK/IBR/EIL/DNV/Lloyds claims.
- fake client names, project references, reviews, ratings or testimonials.
- stock promises, price promises or delivery guarantees.
- manufacturer, factory, mill or production claims for Rubinox.

Only published document-type asset found in the repo file list is:

- assets/docs/rubinox-company-profile.pdf

## Issues Found

No live broken page, broken PDF, broken QR, broken trust image, schema error, HTML validation error or sitemap issue was found.

Observed notes:

- docs/verified-owner-assets-batch-13a-report.md is absent from the active repository although listed in the live-check brief.
- Automated forbidden-claim and visual scripts produce review noise from safe negative wording, internal scroll regions, lazy-loaded icons and existing audit inventory. Manual review confirmed no Batch 13A trust safety issue.
- Bharat Metals wording was reviewed because an automated proximity scan found Rubinox near the phrase 40-year. The visible copy attributes the heritage to sister concern Bharat Metals, Chennai, not to Rubinox itself. No edit was applied.

## Fixes Applied

No public website fixes were applied. This batch creates this documentation report only.

## Approval Status

Trust asset implementation is approved complete from live QA perspective.
