# D6A - Homepage Section Intro Width Standardization

## Status

- Batch: D6A - Homepage Section Intro Width Standardization.
- Base commit: `6d9dfc193913bf73071d7e0b8820e9a3cf2d2d66`.
- Scope: homepage intro/lead paragraph width only.
- Design reference: D5A-R2 RFQ path intro width correction.
- Visible redesign: none.
- Broad card-system replication: not performed.

## Owner Feedback

The owner approved the existing section and card visuals, especially around Materials We Supply and Product Forms, but noted that section intro text was still too narrow and left-heavy in the next homepage sections.

The requested correction was to use the same premium-width direction from the RFQ path intro:

```css
.buyerPathHead > div { width:100%; min-width:0; }
.buyerPathHead p { max-width:1000px; }
```

## Implementation

CSS-only changes were made in `index.html`:

```css
.sectionIntro{
  max-width:1000px;
}

.phase3Head > div{
  width:100%;
  min-width:0;
}

.phase3Intro{
  max-width:1000px;
}
```

No paragraph copy changed.

No card HTML, card CSS, grid structure, section title, links, metadata, schema, sitemap, analytics, image, PDF, top bar, header, market ticker, hero, footer, or non-home page file was changed.

## Sections Covered

Existing homepage intro/lead paragraphs standardized:

- Product Forms Available: `.sectionIntro`.
- Quality, Documentation and Standards Support: `.phase3Intro`.
- PAN India Supply and Export Enquiry Support: `.phase3Intro`.
- Simple RFQ Flow for Industrial Metal Enquiries: `.phase3Intro`.
- Metal Supply FAQs for Buyers: `.phase3Intro`.

Note:

- `Materials We Supply` has no standalone intro paragraph in the current homepage source, so D6A did not add new copy there.
- Its card grid and card content were intentionally left unchanged.

## Before Measurements

Screenshot folder:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-d6a-section-intro-before`

Desktop before measurements:

| Section | 1366 intro width | 1366 lines | 1280 intro width | 1280 lines |
| --- | ---: | ---: | ---: | ---: |
| Product Forms | 729.67px | 2 | 729.67px | 2 |
| Quality / Documentation | 684.06px | 3 | 684.06px | 3 |
| PAN India / Export | 684.06px | 3 | 684.06px | 3 |
| RFQ Flow | 684.06px | 3 | 684.06px | 3 |
| Buyer FAQs | 684.06px | 2 | 684.06px | 2 |

## After Measurements

Screenshot folder:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-d6a-section-intro-after`

Desktop after measurements:

| Section | 1366 intro width | 1366 lines | 1280 intro width | 1280 lines |
| --- | ---: | ---: | ---: | ---: |
| Product Forms | 1000px | 2 | 1000px | 2 |
| Quality / Documentation | 1000px | 2 | 1000px | 2 |
| PAN India / Export | 1000px | 2 | 1000px | 2 |
| RFQ Flow | 900.67px | 2 | 900.67px | 2 |
| Buyer FAQs | 1000px | 2 | 1000px | 2 |

RFQ Flow keeps a narrower available width because the existing quote-page CTA remains on the right side of its heading row.

## Zoom / Reflow Check

Screenshot folder:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-d6a-section-intro-zoom-reflow`

Scoped D6A checks passed at:

- 100% zoom.
- 110% zoom.
- 125% zoom.

Viewports tested:

- 1366px.
- 1280px.
- 390px.
- 360px.

Results:

- Changed intro paragraphs stayed inside their section containers.
- Product form cards stayed inside their grid.
- Documentation, location, RFQ flow, and FAQ cards stayed inside their grids.
- RFQ Flow CTA stayed inside its heading row and section at the scoped test sizes.
- D6A sections did not create scoped horizontal overflow.

Full-page diagnostic note:

- At the smallest simulated mobile zoom widths, known full-page horizontal scroll remains traceable outside the D6A intro scope.
- D6A did not change those sections.

## Guardrails

- No content claims were added.
- Rubinox remains described as a stockist, supplier, importer, exporter, and project supplier.
- No new certification, approval, price, stock, delivery, testimonial, review, rating, client, project, award, team-size, stockyard-size, or years-of-experience claim was introduced.
- GA4 remains `G-JT5X5L5H07`.
- Old GA4 `G-CR18QYPS6C` remains absent from public HTML.

## QA Results

- `npm run qa:sitemap` - passed; 261 sitemap URLs, 261 local HTML pages, 0 missing, 0 extras, 0 duplicates.
- `npm run qa:crawl` - passed; 400 links scanned.
- `npm run qa:schema` - passed; 261 HTML pages, 866 JSON-LD blocks, 0 invalid.
- `npm run qa:accessibility` - passed; 5 pages checked, 0 violations.
- `npm run test:navigation` - passed.
- `npm run qa:html` - passed; 261 pages checked, 0 invalid.
- `npm run qa:links` - passed; 400 links scanned.
- `npm run qa:pa11y` - passed; 9/9 URLs passed, with the existing `quotation.html` 5-error result within the threshold of 7.
- `npm run qa:forbidden-claims` - completed; 375 files scanned, 644 review-only matches, no files rewritten.
- `git diff --check` - passed; only the expected CRLF normalization warning appeared for `index.html`.

## D6B Lock Completion

Owner approval:

- "Section intro widths approved for design lock"

D6B completed the final Homepage Section Intro Width Lock V1.

Lock document:

- `docs/design-system/RUBINOX_HOME_SECTION_INTRO_WIDTH_LOCK_V1.md`

Master fingerprint update:

- `docs/design-system/RUBINOX_DESIGN_FINGERPRINT.md`

Final approved homepage section-intro pattern:

```css
.sectionIntro { max-width:1000px; }
.phase3Head > div { width:100%; min-width:0; }
.phase3Intro { max-width:1000px; }
```

D6B final screenshot and measurement folder:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-d6b-section-intro-lock-final`

D6B zoom/reflow screenshot and result folder:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-d6b-section-intro-lock-zoom-reflow`

Final D6B status:

- D6A section intro width rule is approved and final.
- Future homepage section intro and lead paragraphs should preserve the `1000px` max-width rule.
- Text inside sections, cards, boxes, and CTAs must not overflow at 100%, 110%, or 125% zoom.
- Materials We Supply still has no standalone intro paragraph, and no new Materials We Supply copy was added.
- No visible design edits were made in D6B.
- No card/grid/layout redesign was performed.
- No non-home pages were changed.
