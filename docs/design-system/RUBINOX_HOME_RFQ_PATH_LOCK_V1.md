# RUBINOX HOME RFQ PATH LOCK V1

## Approval Status

- Status: approved and final.
- Approved by owner after live homepage review.
- Owner approval note: `RFQ PATH CARDS APPROVED FOR DESIGN LOCK`.
- Source prototype: D5A - Homepage RFQ Path Cards.
- Width correction: D5A-R2 - Homepage RFQ Path Intro Width Correction.
- Approved D5A prototype commit: `6b4c4eb3a47fca722353fc6e86c7d406eefdc18a`.
- Approved D5A-R2 correction commit: `fcd989d524e0df4294b77ee5af40934ab8b1b987`.
- Lock batch: D5B - RFQ Path / Card Accent Design Lock.

## Purpose

This document is the final homepage RFQ path design print and implementation fingerprint for Rubinox Metal and Alloys.
Future homepage edits must preserve this section unless the owner explicitly approves a new RFQ path lock version.

This lock records the approved card structure, intro width, card accent treatment, text wrapping rules, and zoom/reflow
safety requirements. It does not replicate the card design across other homepage or sitewide sections.

## Scope

- Homepage only.
- Section selector: `#buyer-path`.
- No sitewide RFQ path replication was performed in D5B.
- Do not add this exact RFQ path section to non-home pages unless separately approved.
- Top Bar Lock V1, Header Lock V1, Header + Top Bar Alignment Lock V1, Market Ticker Lock V1, and Home Hero Lock V1 remain unchanged.
- Card Accent Lock V1 is documented separately as a future base card reference, but broad card-system replication was not performed in D5B.

## Final Approved Content

Section title:

`Plan the RFQ Path Before You Ask for Pricing`

Intro paragraph:

`Use these quick steps to prepare grade, form, standards, documents and delivery details before sending your requirement. This helps our team review your RFQ clearly and respond with the right sourcing inputs.`

Approved card titles and destinations:

| Step | Title | Link |
| ---: | --- | --- |
| 1 | `Compare grades` | `/grades.html` |
| 2 | `Select product forms` | `/product-forms.html` |
| 3 | `Check standards` | `/technical-resources.html` |
| 4 | `Confirm documents` | `/quality-documentation-support.html` |
| 5 | `Send the RFQ` | `/quotation.html` |

Approved card body copy:

| Step | Body |
| ---: | --- |
| 1 | `Start with stainless steel, duplex, nickel alloy, titanium, copper, brass and special alloy grade pages.` |
| 2 | `Review pipes, tubes, sheets, plates, coils, flanges, fittings, fasteners, bars and rods.` |
| 3 | `Use pipe schedules, MTC notes, PMI guidance and comparison charts for RFQ planning.` |
| 4 | `State MTC, PMI, inspection, traceability or export documentation needs where applicable.` |
| 5 | `Share grade, form, size, quantity, standard, documentation needs and delivery location.` |

## Final Layout Specification

Desktop structure:

- Section selector: `.buyerPathSection`.
- Inner rail: `.buyerPathSection > .wrap`.
- Header row selector: `.buyerPathHead`.
- Card grid selector: `.buyerPathGrid`.
- Desktop grid: `repeat(5,minmax(0,1fr))`.
- Desktop gap: `12px`.
- Desktop section padding: `30px` top and `24px` bottom.
- Background: `linear-gradient(180deg,#fff,#f6f8fc)`.
- Desktop card count: five cards in one row at 1366px and 1280px.

Header and intro rules:

```css
.buyerPathHead{
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
  gap:18px;
  margin-bottom:16px;
}
.buyerPathHead > div{
  width:100%;
  min-width:0;
}
.buyerPathHead p{
  max-width:1000px;
  line-height:1.7;
  font-size:14.5px;
}
```

The intro must not return to the old `74ch` width. The approved D5A-R2 correction is `max-width:1000px`.

## Final Card Specification

Card selector:

```css
.buyerPathCard
```

Approved card surface:

- Surface: white `#fff`.
- Border: `1px solid rgba(16,37,84,.12)`.
- Border radius: `8px`.
- Shadow: `0 12px 30px rgba(15,30,60,.07)`.
- Padding: `15px 16px 16px`.
- Gap: `9px`.
- Minimum desktop height: `132px`.
- `min-width:0` is required.
- Overflow is hidden so the accent line and card radius remain clean.

Approved top accent:

```css
.buyerPathCard::before{
  content:"";
  position:absolute;
  left:0;
  right:0;
  top:0;
  height:3px;
  background:linear-gradient(90deg,var(--accent),var(--navy3));
}
```

Accent token values in the live homepage:

- `--accent`: `#e2a02f`
- `--navy3`: `#132a63`

Approved title row:

- Selector: `.buyerPathTitleRow`.
- Display: `flex`.
- Alignment: `center`.
- Gap: `10px`.
- `min-width:0`.
- `flex-wrap:wrap`.
- Step badge size: `34px x 34px`.
- Title text selector: `.buyerPathCard strong`.
- Title size: `16px`.
- Title line-height: `1.25`.
- Title color: `var(--ink2)`.
- Title must use `overflow-wrap:break-word`.

Approved body text:

- Selector: `.buyerPathBody`.
- Font size: `13px`.
- Line-height: `1.5`.
- Color: `var(--muted2)`.
- `min-width:0`.
- `overflow-wrap:break-word`.

Approved hover/focus:

```css
.buyerPathCard:hover,
.buyerPathCard:focus-visible{
  transform:translateY(-2px);
  border-color:rgba(226,160,47,.45);
  box-shadow:0 18px 38px rgba(7,16,31,.12);
  outline:none;
}
```

## Responsive Rules

- Below the existing responsive breakpoint, `.buyerPathHead` becomes `display:block`.
- Below the existing responsive breakpoint, `.buyerPathGrid` becomes `grid-template-columns:1fr`.
- Below the existing responsive breakpoint, `.buyerPathCard` uses `min-height:auto`.
- At 640px and below, `.buyerPathSection` uses `padding-top:24px`.
- Mobile cards stack in one column and must not create horizontal overflow.

## Final Measurements

Final D5B measurements from local Playwright capture:

| Viewport | Section height | Intro width | Intro lines | Card columns | Max card height | Section overflow |
| ---: | ---: | ---: | ---: | ---: | ---: | --- |
| 1366 | 334.28px | 1000px | 2 | 5 | 160px | pass |
| 1280 | 334.28px | 1000px | 2 | 5 | 160px | pass |
| 768 | 687.78px | 728px | 2 | 1 | 95.50px | pass |
| 390 | 887.20px | 350px | 5 | 1 | 115px | pass |
| 360 | 906.70px | 320px | 5 | 1 | 134.50px | pass |

Screenshot folder:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-d5b-rfq-card-lock-final`

## Zoom / Reflow Safety Specification

Owner rule: text in cards, boxes and CTAs must not overflow at 100%, 110%, or 125% zoom.

For this RFQ path section:

- Intro paragraph must not overflow.
- Card title rows must not overflow.
- Card body text must not overflow.
- Card links must remain inside the grid.
- Section must not create RFQ path horizontal overflow.
- Titles and body copy may wrap naturally when effective width is reduced by zoom.

D5B zoom/reflow test method:

- Playwright Chromium against the local static homepage.
- Browser zoom was simulated by reducing the effective CSS viewport width: `physical viewport width / zoom`.
- Screenshots were captured for each zoom/width case.
- Scoped check target: `#buyer-path`, `.buyerPathHead`, `.buyerPathGrid`, `.buyerPathCard`, `.buyerPathTitleRow`, and `.buyerPathBody`.

D5B zoom/reflow results:

| Physical viewport | Zoom | Effective CSS width | Intro lines | Card columns | Section overflow | Text/card escape | Result |
| ---: | ---: | ---: | ---: | ---: | --- | --- | --- |
| 1366 | 100% | 1366 | 2 | 5 | pass | pass | pass |
| 1280 | 100% | 1280 | 2 | 5 | pass | pass | pass |
| 390 | 100% | 390 | 5 | 1 | pass | pass | pass |
| 360 | 100% | 360 | 5 | 1 | pass | pass | pass |
| 1366 | 110% | 1241 | 2 | 5 | pass | pass | pass |
| 1280 | 110% | 1163 | 2 | 5 | pass | pass | pass |
| 390 | 110% | 354 | 5 | 1 | pass | pass | pass |
| 360 | 110% | 327 | 5 | 1 | pass | pass | pass |
| 1366 | 125% | 1092 | 2 | 5 | pass | pass | pass |
| 1280 | 125% | 1024 | 2 | 5 | pass | pass | pass |
| 390 | 125% | 312 | 6 | 1 | pass | pass | pass |
| 360 | 125% | 288 | 6 | 1 | pass | pass | pass |

Full-page diagnostic note:

- At the smallest simulated zoom widths, page-level horizontal scroll is traceable to existing homepage contact cards outside `#buyer-path`.
- This lock does not authorize contact-section changes.
- The RFQ path section itself passed scoped overflow checks.

Zoom/reflow screenshot folder:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-d5b-rfq-card-lock-zoom-reflow`

## Future Homepage Rules

- Preserve the approved title, intro paragraph, links, card titles, and card body copy unless the owner approves a content change.
- Preserve the intro `max-width:1000px`.
- Preserve the white card surface and gold-to-blue top accent line.
- Preserve the inline number/title row.
- Preserve the five-card desktop row at 1366px and 1280px.
- Preserve mobile single-column stacking.
- Do not make the section taller, heavier, or more decorative without owner approval.
- Run zoom/reflow checks before future RFQ path edits are committed.

## Forbidden Changes

Do not:

- Revert the intro to a narrow left column.
- Revert card titles to a stacked number-over-title layout.
- Remove the gold-to-blue top accent.
- Add badges, chips, icons, decorative media, or extra copy that makes the section taller.
- Add live price, confirmed stock, delivery, certification, approval, testimonial, review, rating, client, project, award, team-size, stockyard-size, or unverified years-of-experience claims.
- Describe Rubinox as a manufacturer.
- Replicate this RFQ path section sitewide without owner approval.
- Apply Card Accent Lock V1 broadly in the same change without a separate owner-approved rollout.
