# D7A - Homepage Remaining Section Polish Prototype

## Status

- Batch: D7A - Homepage Remaining Section Polish Prototype.
- Base commit: `db8c193e69976f7c90096d362d40bb56cac4babe`.
- Scope: homepage only.
- Files changed: `index.html` and this documentation file.
- Sitewide rollout: not performed.
- Design lock: not created in D7A.

## Owner Feedback Summary

The owner approved the overall remaining homepage sections, with specific polish requests for contrast, visual balance, inline RFQ card titles, selective city chip links, and card accent consistency.

Sections intentionally protected from change:

- Why Choose Rubinox Metal and Alloys.
- We specialize in stainless steel SEO link section.
- Metal Supply FAQ.

Sections changed:

- Quality, Documentation and Standards Support.
- PAN India Supply and Export Enquiry Support.
- Simple RFQ Flow for Industrial Metal Enquiries.
- Leading Stainless Steel and Alloy Supplier in India.
- Send Your Metal Requirement to Rubinox CTA.
- Final contact/map section.

## Existing Locks Respected

- Top Bar Lock V1 was not changed.
- Header Lock V1 was not changed.
- Header + Top Bar Alignment Lock V1 was not changed.
- Homepage Market Ticker Lock V1 was not changed.
- Home Hero Lock V1 was not changed.
- Homepage RFQ Path Lock V1 was not changed.
- Homepage Section Intro Width Lock V1 was preserved.
- Card Accent Lock V1 was used only where D7A explicitly requested top accent lines.

Protected untracked files remained untouched and untracked:

- `CARD_ACCENT_STYLE_AUDIT.md`
- `RUBINOX_MASTER_PROJECT_STATUS.md`

## Quality / Standards Content

The left documentation card was kept as-is.

The right `Standards and Project Specifications` card received one safe detail paragraph:

```text
Share the applicable buyer-specified reference with grade, form, size, schedule or thickness, quantity, test or documentation expectations, origin notes and logistics requirements. Rubinox reviews these inputs before preparing sourcing and quotation support.
```

This wording keeps standards as buyer-specified references and does not claim Rubinox approvals, certifications, guaranteed compliance, or manufacturing capability.

## PAN India / Export Changes

The left blue card keeps its existing layout and blue background.

Contrast fix:

- Blue card title color: `#e3e7ed`.
- Blue card body text: `rgba(255,255,255,.92)`.
- Blue card role chips: white text on a subtle translucent surface.

The right white card design was preserved.

## City Chip Links

Converted to clickable links because matching local pages exist:

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

Left non-clickable:

- Delhi NCR: no exact `Delhi NCR` local page exists, and mapping it to only Delhi would be ambiguous.

City chip screenshots:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-d7a-city-chip-links`

## RFQ Flow Cards

The four existing RFQ Flow cards keep their titles and body copy.

D7A changed only the title layout:

- Number badge and title now sit in the same row.
- The row wraps safely on smaller widths.
- Body copy remains unchanged.

## Accent Line Additions

The approved gold-to-blue top accent line was added to:

- Leading Stainless Steel and Alloy Supplier in India card.
- Final contact/RFQ card.
- Final map card.

No section content, heading level, map embed, contact details, schema, footer data, or links were changed for these accent additions.

## CTA Contrast Fix

The `Send Your Metal Requirement to Rubinox` blue CTA section keeps its existing structure and links.

Contrast fix:

- CTA title color: `#e3e7ed`.
- CTA body copy: `rgba(255,255,255,.92)`.
- Gold CTA buttons and their link targets were preserved.

Homepage typo check:

- No `Luginox` typo remains on the homepage.

## Screenshot Folders

Before screenshots:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-d7a-remaining-home-before`

After screenshots:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-d7a-remaining-home-after`

City chip screenshots:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-d7a-city-chip-links`

Zoom/reflow screenshots:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-d7a-remaining-home-zoom-reflow`

Non-home check screenshots:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-d7a-nonhome-check`

## Zoom / Reflow Results

Scoped D7A checks passed at:

- 100% zoom.
- 110% zoom.
- 125% zoom.

Widths checked:

- 1366px.
- 1280px.
- 390px.
- 360px.

Changed-section results:

- Quality cards: no scoped overflow.
- PAN India / Export cards: no scoped overflow.
- City chips: no scoped overflow.
- RFQ Flow cards: no scoped overflow.
- CTA section: no scoped overflow.
- Contact/map section: no scoped overflow.

Page-level note:

- Desktop 125% simulated page-level overflow existed before D7A and remained unchanged.
- Mobile simulated page-level overflow improved after D7A.
- No D7A changed section created scoped horizontal overflow.

## Non-Home Check

Captured pages:

- `/company-profile.html` at 1366px and 390px.
- `/materials/stainless-steel.html` at 1366px and 390px.
- `/product-forms.html` at 1366px and 390px.

Result:

- No non-home page file was edited.
- Checked non-home pages do not contain the D7A homepage-only section selectors.
- Checked non-home pages showed no horizontal overflow at the captured widths.

## D7A-R2 Owner Correction

Batch:

- D7A-R2 - Homepage RFQ Flow and City Chip Hover Correction.

Issue 1:

- In the Simple RFQ Flow for Industrial Metal Enquiries section, only card 3 appeared to keep the number badge and title in a clean inline row.
- Cards 1, 2 and 4 could visually wrap the title below the number badge because longer titles were not flexing into the remaining row width.

Fix:

- All four RFQ Flow cards now keep the number badge and title inside the same inline flex row.
- The title receives the remaining row width and wraps within that space when needed.
- Existing card titles, body copy, card order and section links were preserved.

Issue 2:

- Clickable city chip hover in the Domestic and Export Enquiry Coverage card did not closely match the approved RFQ Path hover behavior.

Fix:

- Clickable city chips now use a restrained hover/focus style with the same light chip surface, Rubinox gold border emphasis, subtle `translateY(-2px)` lift and a restrained shadow.
- The hover/focus state does not use a filled gold background, heavy box, large outline, or layout-shifting treatment.
- City chip links remain keyboard accessible.

City chip link rule:

- Mumbai, Navi Mumbai, Thane, Pune, Ahmedabad, Vadodara, Surat, Chennai, Bengaluru, Hyderabad and Kolkata remain clickable because exact local pages exist.
- Delhi NCR remains non-clickable because no exact Delhi NCR local page exists.

D7A-R2 screenshot folders:

- Before: `C:\Users\Dell\AppData\Local\Temp\rubinox-d7a-r2-before`
- After: `C:\Users\Dell\AppData\Local\Temp\rubinox-d7a-r2-after`
- Zoom/reflow: `C:\Users\Dell\AppData\Local\Temp\rubinox-d7a-r2-zoom-reflow`
- Non-home check: `C:\Users\Dell\AppData\Local\Temp\rubinox-d7a-r2-nonhome-check`

D7A-R2 zoom/reflow result:

- 100%, 110% and 125% scoped checks passed.
- Widths checked: 1366px, 1280px, 390px and 360px.
- All four RFQ Flow number/title rows stayed inline with safe wrapping inside the card.
- RFQ Flow body copy stayed inside the cards.
- City chips stayed inside the Domestic and Export Enquiry Coverage card.
- No scoped horizontal overflow was introduced by D7A-R2.

D7A-R2 non-home check:

- `/company-profile.html` checked at 1366px and 390px.
- `/materials/stainless-steel.html` checked at 1366px and 390px.
- No non-home page file was edited.
- Checked non-home pages do not contain the D7A-R2 RFQ row or city chip selectors.
- Checked non-home pages showed no horizontal overflow at the captured widths.

Scope confirmations:

- Footer work was not performed.
- D7B lock was not created.
- Top bar, header, market ticker, hero, approved RFQ Path, sitemap, schema, analytics, images and PDFs were not changed.

## D7A-R3 Final CTA Content Width Correction

Batch:

- D7A-R3 - Homepage Final CTA Content Width Correction.

Owner feedback:

- The `Send Your Metal Requirement to Rubinox` blue CTA box looked good overall, but the paragraph content was restricted to the left side.
- The empty right side made the CTA feel unbalanced.
- The paragraph needed to use more left-to-right space and naturally reduce the section height where possible.

Root cause:

- The CTA paragraph inherited a narrow `78ch` maximum width, which measured about `694px` on desktop inside a `1140px` blue card.

Final width rule:

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

Implementation notes:

- CTA title was kept unchanged.
- CTA body copy was kept unchanged.
- CTA buttons were kept unchanged: `WhatsApp Quote`, `Email RFQ`, and `Request Quotation`.
- CTA links were kept unchanged.
- Blue background, silver/white contrast, gold button styling and existing alignment were preserved.
- The correction only widens the content rail and keeps safe wrapping.

Before/after desktop measurements:

| Viewport | Before band height | After band height | Before body width | After body width | Before lines | After lines |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 1366px | 260.59px | 232.59px | 694.08px | 1080px | 3 | 2 |
| 1280px | 260.59px | 232.59px | 694.08px | 1080px | 3 | 2 |

Result:

- Desktop CTA band height reduced naturally by `28px` at 1366px and 1280px.
- Tablet and mobile kept the same safe wrapping behavior.

D7A-R3 screenshot folders:

- Before: `C:\Users\Dell\AppData\Local\Temp\rubinox-d7a-r3-cta-before`
- After: `C:\Users\Dell\AppData\Local\Temp\rubinox-d7a-r3-cta-after`
- Zoom/reflow: `C:\Users\Dell\AppData\Local\Temp\rubinox-d7a-r3-cta-zoom-reflow`
- Non-home check: `C:\Users\Dell\AppData\Local\Temp\rubinox-d7a-r3-nonhome-check`

D7A-R3 zoom/reflow result:

- 100%, 110% and 125% scoped CTA checks passed.
- Widths checked: 1366px, 1280px, 390px and 360px.
- CTA title, body copy and button text stayed inside the blue card.
- No scoped horizontal overflow was introduced by D7A-R3.

D7A-R3 non-home check:

- `/company-profile.html` checked at 1366px and 390px.
- `/materials/stainless-steel.html` checked at 1366px and 390px.
- No non-home page file was edited.
- Checked non-home pages do not contain the homepage final CTA selectors.
- Checked non-home pages showed no horizontal overflow at the captured widths.

Scope confirmations:

- Footer work was not performed.
- D7B lock was not created.
- Top bar, header, market ticker, hero, approved RFQ Path, Quality/Standards, PAN India chips, RFQ Flow, FAQ, contact/map, sitemap, schema, analytics, images and PDFs were not changed.

## SEO / Schema / Analytics

- No title, meta description, canonical, Open Graph, Twitter card, JSON-LD, sitemap, robots, analytics, image, PDF, map embed, or footer data was changed.
- GA4 remains `G-JT5X5L5H07`.
- Old GA4 `G-CR18QYPS6C` remains absent from public HTML.

## Claim Safety

- No new certification, approval, stock, price, delivery, rating, review, client, project, award, team-size, stockyard-size, or years-of-experience claim was added.
- Rubinox remains positioned as a stockist, supplier, importer, exporter, and project supplier.
- No restricted business-role claim was introduced.

## QA Results

Baseline QA before changes passed:

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

Final D7A QA commands run after implementation:

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

Final D7A QA result:

- Passed. Review-only forbidden-claims matches were not rewritten.

## Owner Review Instruction

Owner must review the live homepage remaining section polish before any lock or sitewide rollout.

Next step after owner approval:

- D7B - Create Remaining Homepage Section Polish Lock / update Card Accent rollout plan.
- Do not apply sitewide until owner approves.
