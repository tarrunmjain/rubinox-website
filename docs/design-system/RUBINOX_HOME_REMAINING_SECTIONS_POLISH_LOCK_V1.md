# RUBINOX HOME REMAINING SECTIONS POLISH - LOCK V1

## Approval Status

Status: approved and final.

Owner approval:

- "Remaining homepage sections approved for design lock"

Lock batch:

- D7B - Remaining Homepage Section Polish Lock / Card Accent Rollout Plan Update.

Source batches:

- D7A - Homepage Remaining Section Polish Prototype.
- D7A-R2 - Homepage RFQ Flow and City Chip Hover Correction.
- D7A-R3 - Homepage Final CTA Content Width Correction.

Source commits:

- D7A: `99a90295295fadc0322b40a003b61a9e732f125f`
- D7A-R2: `5e515dafd955055f1fc4fc2dab2e2c0d00d856e5`
- D7A-R3: `7ea3a91da981ccb5a13a81a48a32b1bbe58e25fb`

## Purpose

This lock records the final approved polish for the remaining homepage sections after the Top Bar, Header, Market Ticker, Hero, RFQ Path, Card Accent, and Homepage Section Intro Width locks were already established.

D7B is a documentation and design-fingerprint batch. It does not change the visible website design, homepage content, non-home pages, footer, SEO metadata, schema, sitemap, analytics, images, PDFs, or existing approved lock implementations.

## Locked Scope

This lock applies to the approved homepage-only polish from D7A, D7A-R2, and D7A-R3.

Approved changed areas:

- Quality, Documentation and Standards Support.
- PAN India Supply and Export Enquiry Support.
- Simple RFQ Flow for Industrial Metal Enquiries.
- Leading Stainless Steel and Alloy Supplier in India.
- Send Your Metal Requirement to Rubinox CTA.
- Final contact/map section.

Intentionally protected sections and systems:

- Why Choose Rubinox Metal and Alloys.
- We specialize in stainless steel SEO link section.
- Metal Supply FAQ.
- Top Bar Lock V1.
- Header Lock V1.
- Homepage Market Ticker Lock V1.
- Home Hero Lock V1.
- Homepage RFQ Path Lock V1.
- Footer.

## Quality / Documentation / Standards Rule

Approved final behavior:

- The right card titled `Standards and project specifications` was balanced with safe extra practical detail.
- Added detail is limited to buyer-specified standards, project references, documentation expectations, quotation inputs, origin notes, and logistics requirements.
- No certification, approval, stock, price, delivery, client, project, rating, review, award, or restricted business-role claim was added.

Safe content principle:

Rubinox may review buyer-specified standards and project requirements for sourcing and quotation support. Rubinox must not claim certification, approval, guaranteed compliance, or restricted business capabilities that have not been verified and approved.

## PAN India / Export Rule

Approved final behavior:

- The left blue card contrast was improved.
- Blue card title uses premium silver.
- Blue card body/content uses white or near-white.
- The right white card was retained.
- City chips were converted to links only where exact matching city pages already existed.
- Delhi NCR remains non-clickable because no exact Delhi NCR page exists.

Linked city chips:

- Mumbai: `/locations/mumbai.html`
- Navi Mumbai: `/locations/navi-mumbai.html`
- Thane: `/locations/thane.html`
- Pune: `/locations/pune.html`
- Ahmedabad: `/locations/ahmedabad.html`
- Vadodara: `/locations/vadodara.html`
- Surat: `/locations/surat.html`
- Chennai: `/locations/chennai.html`
- Bengaluru: `/locations/bengaluru.html`
- Hyderabad: `/locations/hyderabad.html`
- Kolkata: `/locations/kolkata-howrah-durgapur.html`

Non-clickable chip:

- Delhi NCR.

Approved city chip hover/focus:

- Light surface.
- Rubinox gold border emphasis.
- Slight `translateY(-2px)` lift.
- Restrained shadow.
- No filled gold background.
- No heavy box treatment.
- No layout shift.
- Keyboard focus remains visible.

## Simple RFQ Flow Rule

Approved final behavior after D7A-R2:

- All four RFQ Flow cards use an inline number badge plus title row.
- This matches the approved RFQ Path number/title pattern.
- Existing titles and body copy were preserved.
- The title receives the remaining row width and wraps safely within that space.
- Body copy remains inside the card.
- Safe wrapping is required at 100%, 110%, and 125% browser zoom.
- No broad card-system rollout was performed.

## Leading Supplier Section Rule

Approved final behavior:

- The white single-section/card for `Leading Stainless Steel and Alloy Supplier in India` received the approved gold-to-blue top accent line.
- Content was not changed.
- SEO intent was preserved.
- This is a homepage-approved application, not a sitewide rollout instruction.

## Final Blue CTA Rule

Approved D7A contrast behavior:

- Blue CTA title changed to silver.
- Blue CTA body/content changed to white or near-white.
- Gold CTA buttons remained unchanged.

Approved D7A-R3 width correction:

- Content rail widened so the paragraph uses more of the blue card width.
- Paragraph reduced from 3 lines to 2 lines at 1366px and 1280px desktop.
- CTA band height reduced naturally.
- CTA copy remained unchanged.
- CTA buttons and links remained unchanged:
  - `WhatsApp Quote`
  - `Email RFQ`
  - `Request Quotation`

Approved CSS rule:

```css
.finalCtaBand p,
.finalCtaActions {
  width:100%;
  max-width:1080px;
  min-width:0;
}
.finalCtaBand p {
  overflow-wrap:break-word;
}
```

## Card Accent Applications

D7B updates Card Accent Lock V1 with these approved homepage applications:

- RFQ Flow cards may use the approved inline number/title row behavior from the RFQ Path pattern when a future scoped batch approves similar step cards.
- The Leading Stainless Steel and Alloy Supplier single white card may use the approved gold-to-blue top accent line.
- The final contact/RFQ card and final map card may use the approved gold-to-blue top accent line.
- City chip hover/focus may use restrained gold border emphasis, light surface, slight lift, and visible focus when the chip is a link.
- The final blue CTA is not a white content-card accent rollout; its approved D7A/D7A-R3 changes are contrast and content-rail width only.

This does not authorize broad homepage, non-home, FAQ, footer, form, table, header, or sitewide card replication.

## Zoom / Reflow Rule

Future edits to these homepage sections must preserve the owner-approved zoom/reflow rule:

- Text inside cards, chips, boxes, and CTAs must not overflow at 100%, 110%, or 125% browser zoom.
- Number/title rows must remain inline where that pattern is approved, with safe wrapping inside the remaining title space.
- City chips must wrap inside their card.
- CTA button text must stay inside each button.
- Use `min-width:0`, flexible widths, safe wrapping, and readable line-height where needed.

D7B visual QA artifact folder:

- `D:\Websites\Rubinox\visual-qa\d7b-remaining-section-lock`

## Future Homepage Rule

For future homepage work:

- Preserve D7A, D7A-R2, and D7A-R3 unless the owner approves a new lock.
- Keep Delhi NCR non-clickable until an exact Delhi NCR destination is created and approved.
- Keep city chip links limited to existing matching local pages.
- Keep RFQ Flow number/title rows safe at desktop, tablet, mobile, and zoomed views.
- Keep the final CTA content rail wide enough to avoid the old narrow-left-column look.
- Keep the final CTA buttons and links unchanged unless a future CTA batch is approved.
- Do not begin footer work as part of this lock.

## Forbidden Changes

Do not use this lock to:

- Change top bar, header, market ticker, hero, RFQ Path, footer, SEO metadata, schema, sitemap, analytics, images, PDFs, or non-home pages.
- Redesign Materials We Supply, Product Forms, Why Choose, the SEO link section, or Metal Supply FAQ.
- Change homepage copy outside a specifically approved future batch.
- Convert Delhi NCR into a link without an exact approved destination.
- Add a filled gold chip hover state for city chips.
- Add heavy boxes, thick borders, layout-shifting hover states, or broad `.card` rules.
- Perform a broad card-system rollout without owner approval.
- Add live price, confirmed stock, delivery guarantee, certification, approval, testimonial, review, rating, client, project, award, team-size, stockyard-size, or unverified years-of-experience claims.
- Describe Rubinox as anything other than a stockist, supplier, importer, exporter, and project supplier.

## D7B QA

D7B must run QA from the active D-drive project folder before commit:

- `npm run qa:sitemap`
- `npm run qa:crawl`
- `npm run qa:schema`
- `npm run qa:accessibility`
- `npm run test:navigation`
- `npm run qa:html`
- `npm run qa:links`
- `npm run qa:pa11y`
- `npm run qa:forbidden-claims`
- `git diff --check`

Final D7B QA result:

- Passed. Sitemap remained 261 URLs; HTML validation checked 261 pages with 0 invalid; schema checked 866 JSON-LD blocks with 0 invalid; accessibility reported 0 violations on sampled pages; navigation passed; crawl and links each scanned 400 links; Pa11y passed 9/9 URLs within the established threshold; forbidden-claims review scanned 378 files, flagged 655 review matches, and rewrote no files; `git diff --check` passed.