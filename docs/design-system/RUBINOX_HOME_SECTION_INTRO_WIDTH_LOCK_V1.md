# RUBINOX HOME SECTION INTRO WIDTH - LOCK V1

## Approval Status

Status: approved and final.

Owner approval:

- "Section intro widths approved for design lock"

Lock batch:

- D6B - Homepage Section Intro Width Lock / Design Fingerprint.

Source batch:

- D6A - Homepage Section Intro Width Standardization.

Source commit:

- `7f64585ac61f99647d101a6ec44111ac5551f998`

## Purpose

This lock records the final homepage section intro-width rule for Rubinox Metal and Alloys. Future homepage sections must use the available section width for lead and intro copy instead of keeping paragraph text in a narrow left-heavy column.

D6B is a documentation and design-fingerprint batch. It does not redesign homepage sections, cards, grids, top bar, header, market ticker, hero, RFQ path, footer, metadata, schema, sitemap, analytics, assets, or non-home pages.

## Approved CSS Pattern

The approved D6A homepage section-intro rule is:

```css
.sectionIntro { max-width:1000px; }
.phase3Head > div { width:100%; min-width:0; }
.phase3Intro { max-width:1000px; }
```

Implementation notes:

- `.sectionIntro` controls Product Forms lead copy.
- `.phase3Head > div` lets intro text use the available heading-row width while still protecting flex/grid reflow.
- `.phase3Intro` controls later homepage lead paragraphs.
- `max-width:1000px` is the approved premium desktop cap for homepage intro text.
- `width:100%` and `min-width:0` are required when intro text sits inside a flexible heading row.

## Locked Scope

This lock applies to homepage section intro and lead paragraphs only.

Covered homepage sections:

- Product Forms Available.
- Quality, Documentation and Standards Support.
- PAN India Supply and Export Enquiry Support.
- Simple RFQ Flow for Industrial Metal Enquiries.
- Metal Supply FAQs for Buyers.

Current homepage note:

- Materials We Supply has no standalone intro paragraph.
- D6A and D6B did not add new Materials We Supply copy.
- The Materials We Supply cards and grid were not redesigned.

## Final Measurements

Final D6B screenshot and measurement folder:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-d6b-section-intro-lock-final`

Desktop and mobile final measurements:

| Section | 1366 width / lines | 1280 width / lines | 768 width / lines | 390 width / lines | 360 width / lines |
| --- | ---: | ---: | ---: | ---: | ---: |
| Materials We Supply | No standalone intro | No standalone intro | No standalone intro | No standalone intro | No standalone intro |
| Product Forms | 1000px / 2 | 1000px / 2 | 728px / 2 | 350px / 4 | 320px / 4 |
| Quality / Documentation | 1000px / 2 | 1000px / 2 | 728px / 3 | 350px / 5 | 320px / 6 |
| PAN India / Export | 1000px / 2 | 1000px / 2 | 728px / 3 | 350px / 5 | 320px / 6 |
| RFQ Flow | 900.67px / 2 | 900.67px / 2 | 728px / 3 | 350px / 5 | 320px / 6 |
| Buyer FAQs | 1000px / 2 | 1000px / 2 | 728px / 2 | 350px / 4 | 320px / 4 |

RFQ Flow keeps a narrower desktop measured width because the existing right-side quote-page CTA remains in the same heading row.

## Zoom / Reflow Rule

Future homepage section intro edits must preserve the owner-approved zoom/reflow rule:

- Text inside sections, cards, boxes, and CTAs must not overflow at 100%, 110%, or 125% browser zoom.
- Intro paragraphs must stay inside their section containers.
- Cards and grids must stay inside their parent sections.
- CTA text must remain inside each button or link target.
- Use `min-width:0`, safe wrapping, flexible widths, readable line-height, and scoped overflow prevention where needed.

D6B zoom/reflow screenshots and results:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-d6b-section-intro-lock-zoom-reflow`

Scoped D6B section checks passed at:

- 100% zoom.
- 110% zoom.
- 125% zoom.

Physical widths tested:

- 1366px.
- 1280px.
- 390px.
- 360px.

Scoped result:

- Product Forms, Quality, PAN India, RFQ Flow, and Buyer FAQs intro text stayed inside their section containers.
- Section cards, grids, and the RFQ Flow CTA stayed inside the scoped section checks.
- D6B did not create scoped section horizontal overflow.

Diagnostic note:

- Full-page horizontal overflow at the smallest simulated mobile zoom widths remains outside the D6B section-intro lock scope.
- D6B did not change those outside-scope areas.

## Future Homepage Rule

For future homepage sections:

- Use `max-width:1000px` for section intro and lead paragraphs unless the owner approves a different lock.
- If the intro sits in a flex heading row, the text wrapper must include `width:100%` and `min-width:0`.
- Keep intro text visually balanced across the section width.
- Do not return to a narrow left-column intro pattern unless explicitly approved.
- Do not use intro-width changes as a reason to redesign cards, grids, icons, CTAs, media, metadata, schema, sitemap, analytics, or non-home pages.

## Forbidden Changes

- Do not revert Product Forms, Quality, PAN India, RFQ Flow, or Buyer FAQs intro text to the old narrow pattern.
- Do not add a standalone Materials We Supply intro paragraph without owner approval.
- Do not redesign Materials We Supply.
- Do not redesign Product Forms.
- Do not redesign any card or grid system as part of this lock.
- Do not change Top Bar Lock V1.
- Do not change Header Lock V1.
- Do not change Homepage Market Ticker Lock V1.
- Do not change Home Hero Lock V1.
- Do not change Homepage RFQ Path Lock V1.
- Do not change Card Accent Lock V1 except to reference this intro-width rule in future approved batches.
- Do not replicate this homepage-only rule to non-home pages without a separate approved batch.
- Do not add live price, confirmed stock, delivery, manufacturer, factory, mill, production, certification, approval, testimonial, review, rating, client, project, award, team-size, stockyard-size, or unverified years-of-experience claims.
