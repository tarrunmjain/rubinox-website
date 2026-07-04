# RUBINOX CARD ACCENT LOCK V1

## Approval Status

- Status: approved and final as a design reference.
- Approved by owner after live homepage RFQ path review.
- Owner approval note: `RFQ PATH CARDS APPROVED FOR DESIGN LOCK`.
- Source section: Homepage RFQ path cards.
- Source lock document: `docs/design-system/RUBINOX_HOME_RFQ_PATH_LOCK_V1.md`.
- Source prototype: D5A - Homepage RFQ Path Cards.
- Width correction: D5A-R2 - Homepage RFQ Path Intro Width Correction.
- Lock batch: D5B - RFQ Path / Card Accent Design Lock.

## Purpose

This document records the approved Rubinox card accent pattern as a future base card design reference.
It is not a sitewide implementation order. It defines the visual fingerprint that future owner-approved card
rollouts should follow when a white card with a restrained Rubinox accent is appropriate.

## Source Of Truth

The homepage RFQ path cards are the source of truth for Card Accent Lock V1.

Live source selectors:

- `.buyerPathCard`
- `.buyerPathCard::before`
- `.buyerPathTitleRow`
- `.buyerPathStep`
- `.buyerPathCard strong`
- `.buyerPathBody`

The source implementation remains in `index.html`.

## Core Visual Pattern

Card surface:

- White base: `#fff`.
- Border: `1px solid rgba(16,37,84,.12)`.
- Border radius: `8px`.
- Shadow: `0 12px 30px rgba(15,30,60,.07)`.
- Hover/focus border: `rgba(226,160,47,.45)`.
- Hover/focus shadow: `0 18px 38px rgba(7,16,31,.12)`.
- Hover/focus lift: `translateY(-2px)`.

Top accent:

- Height: `3px`.
- Placement: top edge of the card.
- Gradient: `linear-gradient(90deg,var(--accent),var(--navy3))`.
- Live token values:
  - `--accent`: `#e2a02f`
  - `--navy3`: `#132a63`

Radius rule:

- Cards stay at `8px` border radius.
- Do not make this card style highly rounded unless a later design lock changes the global card system.

## Typography Pattern

Heading/title:

- Color: `var(--ink2)`.
- Live token value: `#132a63`.
- Weight: strong/bold treatment.
- RFQ source size: `16px`.
- RFQ source line-height: `1.25`.
- Must allow wrapping inside the card.

Body:

- Color: `var(--muted2)`.
- Live token value: `#566b9a`.
- RFQ source size: `13px`.
- RFQ source line-height: `1.5`.
- Must remain readable and contained.

Number or small badge pattern, when a numbered card is used:

- Size: `34px x 34px` in the RFQ source cards.
- Border radius: `8px`.
- Background: `linear-gradient(145deg,#f8fafc,#eaf0f7)`.
- Border: `1px solid rgba(19,42,99,.14)`.
- Color: `var(--ink2)`.
- Weight: `900`.

## Layout Safety Pattern

Required containment rules:

- Card grid children must use `min-width:0`.
- Card title rows must allow wrapping where needed.
- Card title text must use `overflow-wrap:break-word`.
- Body text must use `overflow-wrap:break-word`.
- Do not use fixed card widths that create horizontal overflow.
- Do not use long unbreakable labels.
- At 100%, 110%, and 125% zoom, text must stay inside cards, boxes, and CTAs.

Approved RFQ source layout:

```css
.buyerPathCard{
  position:relative;
  display:flex;
  flex-direction:column;
  gap:9px;
  min-width:0;
  min-height:132px;
  padding:15px 16px 16px;
  background:#fff;
  border:1px solid rgba(16,37,84,.12);
  border-radius:8px;
  box-shadow:0 12px 30px rgba(15,30,60,.07);
  overflow:hidden;
}
.buyerPathCard::before{
  height:3px;
  background:linear-gradient(90deg,var(--accent),var(--navy3));
}
```

## Allowed Future Uses

Card Accent Lock V1 may be considered for future owner-approved design work on:

- RFQ journey cards.
- Material cards.
- Product form cards.
- FAQ cards.
- Industry cards.
- Related-page cards.
- Clickable and non-clickable informational boxes.

Each rollout still needs its own scoped owner approval, implementation batch, screenshots, zoom/reflow checks, and QA.

## Not Performed In D5B

D5B did not:

- Replicate this card accent across FAQs.
- Replicate this card accent across Materials We Supply.
- Replicate this card accent across Product Forms.
- Replicate this card accent sitewide.
- Change non-home pages.
- Change top bar, header, market ticker, hero, footer, SEO metadata, schema, sitemap, analytics, images, or PDFs.

## Future Rollout Rules

Before applying this card accent to another section:

- Confirm the target section and page scope with the owner.
- Preserve the target section content unless the owner approves copy changes.
- Check whether clickable and non-clickable cards need separate states.
- Keep card density appropriate for the section.
- Do not put cards inside cards.
- Do not add decorative badges or extra labels unless they serve a real workflow purpose.
- Verify text containment at 100%, 110%, and 125% zoom.
- Run the full Rubinox QA suite before committing.

## Forbidden Changes

Do not:

- Treat this lock as permission for broad card-system replication.
- Apply it sitewide without owner approval.
- Create card styles with heavy gradients, oversized radius, nested cards, decorative blobs, or marketing-heavy layouts.
- Add live price, confirmed stock, delivery, certification, approval, testimonial, review, rating, client, project, award, team-size, stockyard-size, or unverified years-of-experience claims.
- Describe Rubinox as a manufacturer.
- Use this card pattern to publish raw GST, Udyam, IEC, vendor onboarding, or client/project reference content.

## D7A / D7A-R2 / D7A-R3 Approved Homepage Applications

D7B records the owner-approved homepage applications from the remaining-section polish workflow.

Approved applications:

- Simple RFQ Flow cards use the approved inline number badge plus title row behavior from the RFQ Path pattern.
- The title area must receive the remaining row width, use `min-width:0`, and wrap safely inside the card.
- Clickable city chips in the PAN India / Export section use light surface, Rubinox gold border emphasis, slight `translateY(-2px)` lift, restrained shadow, and visible keyboard focus.
- City chip hover/focus must not use a filled gold background, heavy box, or layout-shifting treatment.
- The `Leading Stainless Steel and Alloy Supplier in India` white card uses the approved gold-to-blue top accent line.
- The final contact/RFQ card and final map card use the approved gold-to-blue top accent line.
- The final blue CTA is not a white content-card accent application; its approved D7A/D7A-R3 changes are contrast and content rail width only.

Protected during D7A/D7B:

- Why Choose Rubinox Metal and Alloys.
- We specialize in stainless steel SEO link section.
- Metal Supply FAQ.
- Top bar, header, market ticker, hero, RFQ Path and footer.

Rollout rule:

- These applications are homepage-approved only.
- They do not authorize broad card-system rollout, sitewide replication, FAQ restyling, form restyling, table restyling, footer changes, or non-home page changes.
- Future applications still require separate owner approval, screenshots, zoom/reflow checks, QA, and a scoped implementation batch.

## D5B Validation

The source RFQ path cards were rechecked in D5B:

- Final screenshot folder: `C:\Users\Dell\AppData\Local\Temp\rubinox-d5b-rfq-card-lock-final`
- Zoom/reflow screenshot folder: `C:\Users\Dell\AppData\Local\Temp\rubinox-d5b-rfq-card-lock-zoom-reflow`
- 100%, 110%, and 125% scoped RFQ path checks passed.
- Card titles and body text stayed inside the approved cards.
- Broad card-system replication was not performed.
