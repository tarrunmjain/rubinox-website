# Rubinox Design Batch D9B - Sitewide Design Pilot

## Batch Status

- Batch: D9B - Sitewide Design Pilot on Representative Pages
- Status: Implemented for owner review
- Source plan: D9A - Sitewide Homepage Design System Replication Plan
- Scope: 12 representative pilot pages only
- Full sitewide replication: Not performed
- Homepage reference: `index.html` used only as design reference; it was not edited

Owner must review the D9B live pilot pages before D9C full sitewide replication.

Next step: D9B-R2 corrections if needed, otherwise D9C full sitewide replication.

## Design Locks Used

- `docs/design-system/RUBINOX_TOPBAR_LOCK_V1.md`
- `docs/design-system/RUBINOX_HEADER_LOCK_V1.md`
- `docs/design-system/RUBINOX_HEADER_TOPBAR_ALIGNMENT_LOCK_V1.md`
- `docs/design-system/RUBINOX_MARKET_TICKER_LOCK_V1.md`
- `docs/design-system/RUBINOX_HOME_HERO_LOCK_V1.md`
- `docs/design-system/RUBINOX_HOME_RFQ_PATH_LOCK_V1.md`
- `docs/design-system/RUBINOX_CARD_ACCENT_LOCK_V1.md`
- `docs/design-system/RUBINOX_HOME_SECTION_INTRO_WIDTH_LOCK_V1.md`
- `docs/design-system/RUBINOX_HOME_REMAINING_SECTIONS_POLISH_LOCK_V1.md`
- `docs/design-system/RUBINOX_FOOTER_LOCK_V1.md`
- `docs/design-system/RUBINOX_SITEWIDE_DESIGN_ROLLOUT_PLAN_D9A.md`
- `docs/design-system/RUBINOX_DESIGN_FINGERPRINT.md`

## Files Changed

Pilot HTML pages:

1. `company-profile.html`
2. `registrations-compliance.html`
3. `materials/stainless-steel.html`
4. `materials/ss-304-supplier-india.html`
5. `product-forms.html`
6. `industries.html`
7. `locations/mumbai.html`
8. `export/uae.html`
9. `blog.html`
10. `blog/stainless-steel-304-vs-316-vs-316l.html`
11. `contact.html`
12. `quotation.html`

Shared scoped CSS:

- `assets/css/sitewide-design-pilot-d9b.css`

Documentation:

- `docs/design-pilot-sitewide-design-batch-d9b.md`

## Scope Controls

- The D9B CSS is scoped behind `body.sitewideDesignPilotD9B`.
- The D9B footer marker is scoped with `sitewideFooterPilotD9B`.
- `sitewideDesignPilotD9B` appears on exactly 12 pilot pages.
- `sitewideFooterPilotD9B` appears on exactly 12 pilot pages.
- No non-pilot public HTML pages were edited.
- `index.html` was not edited.
- No sitemap, CNAME, images, PDFs, analytics scripts, or structured data files were edited.
- Protected untracked files were not staged or modified:
  - `CARD_ACCENT_STYLE_AUDIT.md`
  - `RUBINOX_MASTER_PROJECT_STATUS.md`

## Footer Pilot Replication

Footer Lock V1 was applied to all 12 pilot pages with:

- Brand block on the left.
- One unified center link bank.
- One non-clickable heading: `Quick Links:`.
- Contact details block on the right.
- No separate `Main Materials` heading in the pilot footer.
- No separate `Forms & RFQ` heading in the pilot footer.
- Existing footer links preserved under the unified link bank.
- Relative links adjusted for root, nested material/location/export, and nested blog pages.
- Social and platform icons retained in a single row.
- Copyright updated on pilot footers to:
  `© Rubinox Metal and Alloys. All rights reserved.`
- No year was reintroduced in the pilot footer copyright.

## Homepage-Only Section Controls

The pilot pages did not receive homepage-only sections:

- No homepage market ticker was copied.
- No homepage hero content was copied.
- No homepage RFQ Path section was copied.
- No homepage buyer path marker was added.

## Page-by-Page Inventory

| Pilot page | Footer | Card accent | Blue panel contrast | Number row | Chip hover | CTA contrast/width | Contact/map accent | Section intro width | SEO/meta/schema |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `company-profile.html` | Applied | Applied to existing company and support cards | Applied where dark panels appear | Not applicable | Not applicable | Applied to CTA areas | Applied where contact-style cards appear | Applied where section intros exist | Preserved |
| `registrations-compliance.html` | Applied | Applied to existing registration and support cards | Applied where dark panels appear | Not applicable | Not applicable | Applied to CTA areas | Not applicable | Applied where section intros exist | Preserved |
| `materials/stainless-steel.html` | Applied | Applied to existing material/form/FAQ cards | Applied where dark panels appear | Not applicable | Applied to clickable tags/links where present | Applied to CTA areas | Not applicable | Applied where section intros exist | Preserved |
| `materials/ss-304-supplier-india.html` | Applied | Applied to grade, gate, related, and FAQ cards | Applied where dark panels appear | Not applicable | Applied to clickable mini tags where present | Applied to CTA areas | Not applicable | Applied where section intros exist | Preserved |
| `product-forms.html` | Applied | Applied to product form and FAQ cards | Applied where dark panels appear | Not applicable | Not applicable | Applied to CTA areas | Not applicable | Applied where section intros exist | Preserved |
| `industries.html` | Applied | Applied to industry, article, and support cards | Applied where dark panels appear | Not applicable | Applied to clickable material tags where present | Applied to CTA areas | Not applicable | Applied where section intros exist | Preserved |
| `locations/mumbai.html` | Applied | Applied to local support, FAQ, and related cards | Applied where dark panels appear | Not applicable | Applied to clickable local tags where present | Applied to CTA areas | Not applicable | Applied where section intros exist | Preserved |
| `export/uae.html` | Applied | Applied to export support, FAQ, and related cards | Applied where dark panels appear | Not applicable | Applied to clickable tags where present | Applied to CTA areas | Not applicable | Applied where section intros exist | Preserved |
| `blog.html` | Applied | Applied to article cards without changing article content | Applied where dark panels appear | Not applicable | Existing filters preserved; clickable card hover improved | Applied to CTA areas | Not applicable | Applied where section intros exist | Preserved |
| `blog/stainless-steel-304-vs-316-vs-316l.html` | Applied | Light card consistency applied where eligible | Applied where dark panels appear | Not applicable | Not applicable | Applied to CTA areas | Not applicable | Applied where section intros exist | Preserved |
| `contact.html` | Applied | Applied to contact, platform, flow, and FAQ cards | Applied where dark panels appear | Applied to existing flow cards | Not applicable | Applied to CTA/contact areas | Applied to contact/map surfaces | Applied where section intros exist | Preserved |
| `quotation.html` | Applied | Applied to checklist, document, material, project, contact, and FAQ cards | Applied where dark panels appear | Applied to existing process cards | Applied to clickable city/tag/mini links where present | Applied to CTA and RFQ areas | Applied to contact surfaces | Applied where section intros exist | Preserved |

## Design Rules Applied

Footer:

- Footer Lock V1 structure was applied to the 12 pilot pages only.
- Root and nested relative paths were validated by link QA.

Card accent:

- Eligible existing cards and boxes received a restrained gold-to-blue top accent line.
- Existing card content and page structure were preserved.
- Image/article card clipping behavior was preserved where needed.

Blue panel contrast:

- Dark/navy panels use light headings and readable light body copy.
- CTA buttons retain the approved gold emphasis where applicable.

Numbered inline pattern:

- Process cards on `contact.html` and `quotation.html` keep number badges and titles in one row with safe wrapping.

Chip hover:

- Clickable chip/tag links receive restrained lift, gold border, and shadow on hover/focus.
- Non-clickable chips remain static.

CTA contrast/width:

- CTA panels use the approved blue/gold contrast and allow content rails to use the available width safely.
- No pricing, inventory, or timeline promises were added.

Contact/map accent:

- Contact-style cards and map surfaces on pilot pages receive compatible card accents where suitable.
- Existing contact details and map embeds were preserved.

Section intro width:

- Section intro paragraphs use the approved wider reading width where applicable.
- Text is constrained for readability and does not stretch uncontrolled across wide screens.

## Visual QA Artifacts

All screenshots were saved on D drive:

- Before screenshots:
  `D:\Websites\Rubinox\visual-qa\d9b-sitewide-design-pilot\before`
- After screenshots:
  `D:\Websites\Rubinox\visual-qa\d9b-sitewide-design-pilot\after`
- Hover/focus screenshots:
  `D:\Websites\Rubinox\visual-qa\d9b-sitewide-design-pilot\hover-focus`
- Zoom/reflow screenshots:
  `D:\Websites\Rubinox\visual-qa\d9b-sitewide-design-pilot\zoom-reflow`
- Non-pilot comparison screenshots:
  `D:\Websites\Rubinox\visual-qa\d9b-sitewide-design-pilot\non-pilot-check`

Screenshot counts:

- Before: 32 files
- After: 32 files
- Hover/focus: 5 files
- Zoom/reflow: 84 files
- Non-pilot check: 10 files

Representative non-pilot pages checked:

- `materials/ss-316l-supplier-india.html`
- `materials/inconel-625-supplier-india.html`
- `locations/pune.html`
- `export/oman.html`
- `blog/duplex-2205-vs-super-duplex-2507.html`

## Zoom/Reflow Results

Zoom/reflow checks were captured at:

- 100%
- 110%
- 125%

Viewport widths checked:

- 1366
- 1280
- 390
- 360

Representative pages checked:

- `company-profile.html`
- `materials/stainless-steel.html`
- `product-forms.html`
- `locations/mumbai.html`
- `contact.html`
- `quotation.html`
- `blog/stainless-steel-304-vs-316-vs-316l.html`

Result:

- D9B changed-section reflow passed across 84 equivalent zoom/reflow combinations.
- No card, box, chip, CTA, or footer text overflow was found in D9B changed areas.
- Mobile layouts stayed clean at 390 and 360 widths.
- Any desktop-width pressure from the already locked global header/nav is outside D9B scope and was not changed.

## QA Results

Baseline QA was run before edits, and final QA was run after edits.

Final QA:

- `npm run qa:sitemap`: passed. Sitemap URLs: 261. Local HTML pages: 261. Missing: 0. Sitemap-only: 0. Duplicates: 0.
- `npm run qa:crawl`: passed. Successfully scanned 402 links.
- `npm run qa:schema`: passed. HTML pages scanned: 261. JSON-LD blocks: 866. Invalid: 0.
- `npm run qa:accessibility`: passed. 5 pages checked. Total violations: 0.
- `npm run test:navigation`: passed.
- `npm run qa:html`: passed. HTML pages checked: 261. Invalid pages: 0.
- `npm run qa:links`: passed. Successfully scanned 402 links.
- `npm run qa:pa11y`: passed. 9/9 URLs passed; `quotation.html` remained within the accepted threshold.
- `npm run qa:forbidden-claims`: completed. Files scanned: 383. Matches flagged for review: 669. No files were rewritten.
- `git diff --check`: passed with only Windows line-ending warnings on edited HTML files.

Additional verification:

- Sitemap baseline remains 261 URLs.
- HTML validation baseline remains 261 pages, 0 invalid.
- Schema baseline remains 866 JSON-LD blocks, 0 invalid.
- GA4 ID `G-JT5X5L5H07` remains present on all 261 public HTML pages.
- Old GA4 ID `G-CR18QYPS6C` remains absent.
- No non-pilot public HTML pages were edited.
- No homepage-only sections were copied.
- No restricted business capability language or unsafe commercial promises were added.

## Owner Review

Review these live pilot pages after deployment:

1. `https://rubinoxmetal.com/company-profile.html`
2. `https://rubinoxmetal.com/registrations-compliance.html`
3. `https://rubinoxmetal.com/materials/stainless-steel.html`
4. `https://rubinoxmetal.com/materials/ss-304-supplier-india.html`
5. `https://rubinoxmetal.com/product-forms.html`
6. `https://rubinoxmetal.com/industries.html`
7. `https://rubinoxmetal.com/locations/mumbai.html`
8. `https://rubinoxmetal.com/export/uae.html`
9. `https://rubinoxmetal.com/blog.html`
10. `https://rubinoxmetal.com/blog/stainless-steel-304-vs-316-vs-316l.html`
11. `https://rubinoxmetal.com/contact.html`
12. `https://rubinoxmetal.com/quotation.html`

Owner must review the D9B live pilot pages before D9C full sitewide replication.
