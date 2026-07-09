# Rubinox Design Batch D9C - Full Sitewide Design Standardization

## Batch Status

- Batch: D9C - Full Sitewide Design Standardization
- Status: Implemented for owner review
- Previous approval: D9B representative pilot approved for full sitewide rollout
- Scope: all 261 public HTML pages
- Shared CSS: `assets/css/rubinox-sitewide-design-v1.css`
- Commit message: `design: standardize sitewide design system`

Owner should review representative pages after D9C. If approved, next step is D9D - Final Sitewide Design Fingerprint Lock.

## Source Locks Used

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
- `docs/design-pilot-sitewide-design-batch-d9b.md`
- `docs/design-system/RUBINOX_DESIGN_FINGERPRINT.md`

## Files Changed

Website implementation:

- 261 public HTML pages updated with the final D9C body class and shared CSS reference.
- `assets/css/rubinox-sitewide-design-v1.css` created as the final scoped sitewide design stylesheet.

Documentation:

- `docs/design-sitewide-standardization-batch-d9c.md`
- `docs/design-system/RUBINOX_DESIGN_FINGERPRINT.md`

Protected untracked files were not staged or modified:

- `CARD_ACCENT_STYLE_AUDIT.md`
- `RUBINOX_MASTER_PROJECT_STATUS.md`

## Sitewide Rules Applied

- The final sitewide design scope is `body.sitewideDesignV1`.
- The final footer marker is `sitewideFooterD9C`.
- Footer Lock V1 was rolled out to all 261 public HTML pages.
- Top bar, header, market ticker, homepage hero, homepage RFQ Path, and homepage-specific body sections were not copied into other pages.
- Existing public URLs, H1 intent, titles, meta descriptions, canonicals, JSON-LD schema meaning, sitemap URLs, GA4 tracking, contact details, images and PDFs were preserved.
- Current GA4 ID `G-JT5X5L5H07` remains the active analytics ID.
- Old GA4 ID `G-CR18QYPS6C` remains absent.

## Specific Issue Fixes

Bharat Metals trust contrast/link:

- `about-us.html`, `company-profile.html`, and `contact.html` keep the Bharat Metals trust reference readable on the approved dark panel treatment.
- The Bharat Metals reference links to `https://www.stainlesssteeldealers.com/` where it appears in visible page copy.

FAQ card design:

- FAQ cards now receive the approved restrained card accent and consistent light-surface treatment where page markup uses FAQ cards.
- The one plain FAQ article in `industries.html` was normalized to `faqItem` without changing FAQ copy.

City/country hover:

- City, country, location, export and related link cards receive the approved gold border, restrained lift, and focus treatment.

Quotation numbered cards:

- Existing quotation process cards use the inline number badge plus title row pattern with safe wrapping.

Quotation Before You Send alignment:

- The Before You Send helper list remains left aligned with normal word spacing and no forced justification.

D9C-R4 Quotation Before You Send Alignment Correction:

- Owner review identified the fourth `Before You Send` bullet on `quotation.html` as unreadable on the live page.
- Root cause: the list item used flex layout while the sentence contained inline links, allowing sentence fragments and links to behave as separate flex items.
- Correction: `.rfqHelpList li` now uses normal block text flow, keeps the bullet dot aligned with `::before`, and keeps internal links inline.
- The final sentence remains: `Use technical resources and quality documentation guides for schedule, MTC, PMI and inspection notes.`
- Reference: `docs/design-correction-quotation-before-send-batch-d9c-r4.md`.
- D9D final sitewide design lock remains pending owner review of this live correction.

Quotation factor guides spacing:

- Factor guide links keep all existing destinations and use improved chip spacing with safe wrapping.

Industries technical card hover:

- The industries technical/action card links receive the approved hover/focus treatment.

CTA gold buttons:

- CTA buttons in page CTA bands and related card contexts use the approved Rubinox gold treatment with safe wrapping.

Product form hover:

- Product form and stainless form cards receive the approved gold-border lift and focus behavior.

Contact/map/card accents:

- Contact cards, platform cards, support cards, map surfaces and compatible card surfaces receive the approved top accent treatment.

## Footer Sitewide Rollout

- All 261 public HTML pages now use the final D8A-R3 footer structure.
- Footer layout: brand block, one unified Quick Links bank, and contact details.
- The footer contains one non-clickable heading: `Quick Links:`.
- Separate footer headings `Main Materials` and `Forms & RFQ` were removed sitewide.
- Footer copyright remains yearless.
- Existing footer links were preserved under the unified link bank with correct relative paths.
- Social, contact and platform icons were preserved.
- The six brand/contact icons are kept in one row where the locked responsive layout can support it.

## Homepage-Only Controls

The following homepage-only items were not copied sitewide:

- Homepage market ticker.
- Homepage hero content.
- Homepage RFQ Path section.
- Homepage buyer path marker.
- Homepage-specific material/product/industry section content.

## Audit Results

Post-D9C audit output:

- Public HTML pages found: 261
- Final CSS references: 261
- Final body class references: 261
- Final footer references: 261
- Unified footer link banks: 261
- Old `Main Materials` footer heading count: 0
- Old `Forms & RFQ` footer heading count: 0
- Footer year count: 0
- D9B pilot CSS references: 0
- D9B pilot body/footer markers: 0
- Bharat Metals visible pages: 3
- Bharat Metals external link pages: 3
- `Luginox` typo count: 0
- `stockiest` typo count: 0
- Old GA4 count: 0
- Missing current GA4 pages: 0
- Market ticker non-home pages: 0
- Buyer path non-home pages: 0
- Home hero marker non-home pages: 0
- Plain FAQ articles inside FAQ grids: 0
- Quotation Before You Send correction: true
- Quotation factor guides present: true

Audit JSON:

- `D:\Websites\Rubinox\visual-qa\d9c-sitewide-design-standardization\audit\pre-d9c-audit.json`
- `D:\Websites\Rubinox\visual-qa\d9c-sitewide-design-standardization\audit\post-d9c-audit.json`
- `D:\Websites\Rubinox\visual-qa\d9c-sitewide-design-standardization\audit\d9c-apply-inventory.json`

## Visual QA Artifacts

All screenshots were saved on D drive:

- Before screenshots: `D:\Websites\Rubinox\visual-qa\d9c-sitewide-design-standardization\before`
- After screenshots: `D:\Websites\Rubinox\visual-qa\d9c-sitewide-design-standardization\after`
- Hover/focus screenshots: `D:\Websites\Rubinox\visual-qa\d9c-sitewide-design-standardization\hover-focus`
- Zoom/reflow screenshots: `D:\Websites\Rubinox\visual-qa\d9c-sitewide-design-standardization\zoom-reflow`
- Audit artifacts: `D:\Websites\Rubinox\visual-qa\d9c-sitewide-design-standardization\audit`

Screenshot counts:

- Before: 44 PNG files
- After: 44 PNG files
- Hover/focus: 8 PNG files
- Zoom/reflow: 132 PNG files

## Zoom/Reflow Results

Zoom/reflow was checked at:

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
- `contact.html`
- `industries.html`
- `locations.html`
- `export.html`
- `quotation.html`
- `materials/stainless-steel.html`
- `product-forms.html`
- `locations/mumbai.html`
- `export/uae.html`
- `blog/stainless-steel-304-vs-316-vs-316l.html`

Result:

- 132 zoom/reflow checks completed.
- Failing checks: 0.
- Text inside cards, boxes, chips, CTAs and footers did not overflow at 100%, 110% or 125% in the checked pages.
- The header desktop/mobile switch guard was kept at 1120px so locked header content does not force horizontal overflow at browser zoom.

## QA Results

Final QA after implementation:

- `npm run qa:sitemap`: passed. Sitemap URLs: 261. Local HTML pages: 261. Missing: 0. Sitemap-only: 0. Duplicates: 0.
- `npm run qa:crawl`: passed. Successfully scanned 402 links.
- `npm run qa:schema`: passed. HTML pages scanned: 261. JSON-LD blocks: 866. Invalid: 0.
- `npm run qa:accessibility`: passed. 5 pages checked. Total violations: 0.
- `npm run test:navigation`: passed.
- `npm run qa:html`: passed. HTML pages checked: 261. Invalid pages: 0.
- `npm run qa:links`: passed. Successfully scanned 402 links.
- `npm run qa:pa11y`: passed. 9/9 URLs passed with 0 errors.
- `npm run qa:forbidden-claims`: completed. Files scanned: 386. Matches flagged for review: 669. No files were rewritten.
- `npm run qa:images:audit`: completed. Image files found: 184. Referenced image URLs: 3951. Missing image files: 0. Original website images were not modified.
- `git diff --check`: passed with only Windows LF/CRLF warnings on edited HTML files.

## Next Step

Owner should review representative pages after D9C. If approved, next step is D9D - Final Sitewide Design Fingerprint Lock.

## D9C-R2 Hover Correction

Status: implemented for owner review.

Correction document:

- `docs/design-correction-sitewide-hover-batch-d9c-r2.md`

Summary:

- Standardized sitewide clickable card and chip hover states to the approved RFQ-style pattern.
- Preserved a white/light surface, subtle Rubinox gold border/accent, slight lift and soft shadow.
- Removed the visual effect where hover could read as a thick gold card/image frame.
- Preserved approved CTA button hover behavior.
- No HTML changes were required.
- D9D final sitewide design lock was not created.

Owner review required:

- Owner should review representative live hover states. If approved, proceed to D9D final sitewide design lock.

## D9C-R3 Sitewide Visual Consistency Correction

Status: Implemented, pending owner review before D9D.

D9C-R3 was added after owner review found remaining visual consistency issues on live D9C pages. The specific reported issues were the `industries.html` Technical and Documentation Support hover state and the collapsed gap between the industries hero and the next section.

Correction scope:

- Shared sitewide CSS only.
- No public HTML pages changed.
- No SEO, schema, sitemap, analytics, image, PDF, header, top bar, footer, homepage hero, or homepage body-section redesign.
- D9D final sitewide lock was not created.

Audit-based result:

- 261 public sitemap pages audited.
- Hover candidates sampled: 3064.
- Hover offenders before: 743.
- Hover offenders after: 0.
- Silver hover border offenders after: 0.
- Footer offenders after: 0.
- FAQ offenders after: 0.
- Strict spacing offenders before: 1531.
- Strict spacing offenders after: 22 documented locked-band/section exceptions.
- Browser-style zoom/reflow simulation: 96 checks, 0 failures.

Design correction:

- Anchor support cards, card-like anchors, material/form link groups, tag/chip groups, article TOC links, industry action links and ghost RFQ buttons now follow the approved RFQ-style hover pattern.
- Mouse hover uses a subtle Rubinox gold border/accent, slight lift, soft shadow and a white/light surface.
- Mouse hover must not show a silver border box, thick gold frame, filled gold card background, heavy outline, or layout shift.
- Keyboard focus-visible remains available through a subtle gold outline.
- Industries hero-to-next spacing was restored through the shared premium hero spacing floor.

Reference documentation:

- `docs/design-correction-sitewide-visual-consistency-batch-d9c-r3.md`

Owner should review representative live pages before D9D final sitewide design lock.
