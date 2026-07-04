# Rubinox Design Batch D5A - Homepage RFQ Path Cards Prototype

## Batch Summary

- Batch: D5A - Homepage RFQ Path Cards Prototype.
- Scope: homepage only.
- Status: prototype complete for owner review; not a card-system lock.
- Source page: `index.html`.
- Documentation file: `docs/design-prototype-home-rfq-path-batch-d5a.md`.
- Latest base commit before D5A: `b8f57e6c43a693d2c6d6d7446d1f122c88199c70`.

## Owner Feedback

Owner reviewed the homepage section headed:

`Plan the RFQ Path Before You Ask for Pricing`

Owner feedback:

- The old paragraph was confusing.
- The section should speak directly to the visitor/customer.
- The card design looked nice and should be preserved.
- White cards, subtle shadow, navy headings, and gold-to-blue top accent line should stay.
- The step number and card title should sit in the same row to reduce card height.
- This pattern may later become the broader Rubinox card language, but no broad rollout should happen in D5A.

## Files Changed

- `index.html`
- `docs/design-prototype-home-rfq-path-batch-d5a.md`

No non-home HTML files were edited.

## Protected Files

These protected untracked files remained untouched and untracked:

- `CARD_ACCENT_STYLE_AUDIT.md`
- `RUBINOX_MASTER_PROJECT_STATUS.md`

## Existing Locks Preserved

D5A did not change:

- Top Bar Lock V1.
- Header Lock V1.
- Header + Top Bar Alignment Lock V1.
- Homepage Market Ticker Lock V1.
- Home Hero Lock V1.
- Footer.
- Non-home page hero sections.
- SEO metadata, canonical URLs, schema, sitemap, analytics, images, or PDFs.

## Copy Update

Old paragraph:

`Move from grade selection to form, standards, documentation and quotation details without changing pages blindly. These routes keep buyer research tied to practical RFQ inputs.`

New paragraph:

`Use these quick steps to prepare grade, form, standards, documents and delivery details before sending your requirement. This helps our team review your RFQ clearly and respond with the right sourcing inputs.`

Reason:

- Speaks directly to the visitor.
- Removes confusing `buyer research` wording.
- Keeps the meaning practical and RFQ-focused.
- Does not imply live pricing, confirmed stock, delivery, or quotation guarantees.

## Final Card Titles

1. `Compare grades`
2. `Select product forms`
3. `Check standards`
4. `Confirm documents`
5. `Send the RFQ`

## Card Layout Change

Before D5A:

- Step number, title, and body were separate stacked elements.
- Desktop card height was about `184.56px` at 1366px and 1280px.

After D5A:

- Each card uses a compact inline row:
  - `.buyerPathTitleRow`
  - `.buyerPathStep`
  - card title in `strong`
- The step badge remains a small rounded badge.
- The title sits next to the number.
- The title row can wrap safely when the available width is smaller.
- Card body copy remains short and readable.

## Preserved Card Design

D5A preserved:

- White card base.
- Premium subtle shadow.
- Gold-to-blue top accent line.
- Navy heading text.
- Readable muted body text.
- Five cards in one row on desktop.
- Clean industrial card look.

## Overflow Prevention Rules Used

Scoped homepage RFQ path rules added or adjusted:

- `.buyerPathCard{min-width:0}`
- `.buyerPathTitleRow{display:flex; flex-wrap:wrap; min-width:0}`
- `.buyerPathStep{flex:0 0 34px}`
- `.buyerPathCard strong{flex:1 1 0; min-width:0; overflow-wrap:break-word}`
- `.buyerPathBody{min-width:0; overflow-wrap:break-word}`

No global card-system CSS was introduced.

## Before Screenshots

Folder:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-d5a-rfq-path-before`

Captured widths:

- `1366`
- `1280`
- `768`
- `390`
- `360`

Section-level screenshots were also captured in the same folder using `before-section-{width}.png`.

## After Screenshots

Folder:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-d5a-rfq-path-after`

Captured widths:

- `1366`
- `1280`
- `768`
- `390`
- `360`

Section-level screenshots were also captured in the same folder using `after-section-{width}.png`.

## Zoom/Reflow Screenshots

Folder:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-d5a-rfq-path-zoom-reflow`

Method:

- Temporary local HTTP server with Playwright Chromium.
- Browser zoom was simulated with effective CSS viewport width: `physical width / zoom`.
- This mirrors the reduced CSS layout width produced by browser zoom.
- Tolerance: `2px`.

Captured widths:

- `1366`, `1280`, `390`, and `360` at `100%`, `110%`, and `125%`.

## Non-Home Check Screenshots

Folder:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-d5a-rfq-path-nonhome-check`

Checked pages:

- `company-profile.html` at 1366 and 390.
- `materials/stainless-steel.html` at 1366 and 390.

Result:

- No non-home pages were edited.
- Checked non-home pages do not contain `#buyer-path`.
- Homepage RFQ path card prototype was not replicated sitewide.

## Before/After Measurements

| Viewport | Before section height | After section height | Before max card height | After max card height | Result |
| ---: | ---: | ---: | ---: | ---: | --- |
| 1366 | 358.84px | 358.92px | 184.56px | 160px | Cards reduced by 24.56px; section height stayed effectively even because the approved paragraph is longer. |
| 1280 | 358.84px | 358.92px | 184.56px | 160px | Cards reduced by 24.56px; section height stayed effectively even because the approved paragraph is longer. |
| 768 | 830.98px | 712.42px | 124.14px | 95.50px | Section and cards became more compact. |
| 390 | 1008.97px | 887.20px | 144.28px | 115px | Section and cards became more compact. |
| 360 | 1029.11px | 906.70px | 164.42px | 134.50px | Section and cards became more compact. |

## Zoom/Reflow Test Results

| Physical viewport | Zoom | Effective CSS width | Card rows | Max card height | Section overflow | Text overflow | Result |
| ---: | ---: | ---: | ---: | ---: | --- | --- | --- |
| 1366 | 100% | 1366 | 1 | 160px | pass | pass | pass |
| 1280 | 100% | 1280 | 1 | 160px | pass | pass | pass |
| 390 | 100% | 390 | 5 | 115px | pass | pass | pass |
| 360 | 100% | 360 | 5 | 134.50px | pass | pass | pass |
| 1366 | 110% | 1241 | 1 | 160px | pass | pass | pass |
| 1280 | 110% | 1163 | 1 | 160px | pass | pass | pass |
| 390 | 110% | 354 | 5 | 134.50px | pass | pass | pass |
| 360 | 110% | 327 | 5 | 134.50px | pass | pass | pass |
| 1366 | 125% | 1092 | 1 | 160px | pass | pass | pass |
| 1280 | 125% | 1024 | 1 | 179.50px | pass | pass | pass |
| 390 | 125% | 312 | 5 | 134.50px | pass | pass | pass |
| 360 | 125% | 288 | 5 | 134.50px | pass | pass | pass |

Result:

- RFQ path card number/title rows did not overflow.
- RFQ path card body text stayed inside the cards.
- RFQ path cards stayed inside the section/container.
- The RFQ path section did not create horizontal overflow.

## Content Safety Verification

D5A did not add:

- Manufacturer, factory, mill, production, manufacturing unit, or `we manufacture` wording.
- Fake certification or approval claims.
- Live price promises.
- Confirmed stock promises.
- Delivery guarantees.
- Quotation guarantees.
- Testimonials, reviews, client names, project names, ratings, awards, stockyard size, team size, or unverified years of experience.

## Analytics and Public SEO Verification

- GA4 ID remains `G-JT5X5L5H07`.
- Old accidental GA4 ID `G-CR18QYPS6C` remains absent from public HTML.
- No sitemap URL was added, removed, or changed.
- No title, meta description, canonical, Open Graph, Twitter card, or JSON-LD schema was changed.

## Future Card System Note

This D5A prototype is not Card System Lock V1.

Owner intention documented for future work:

- Once approved and locked, this card style may become the common Rubinox card pattern for clickable and non-clickable boxes.
- Future candidates include:
  - FAQs.
  - Materials We Supply.
  - Product Forms.
  - RFQ journey cards.
  - Industry, material, and product cards.

Future Card System Lock should preserve:

- White card base.
- Gold-to-blue top accent line.
- Navy headings.
- Compact number/title row where numbered.
- No text overflow at 100%, 110%, and 125% zoom.
- Same design language for clickable and non-clickable cards.

Broad card-system replication was not performed in D5A.

## QA Commands

Baseline QA was run before edits:

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

Final QA was run after implementation and documentation:

- `npm run qa:sitemap` - passed; 261 sitemap URLs, 261 local HTML pages, 0 missing, 0 extras, 0 duplicates.
- `npm run qa:crawl` - passed; 400 links scanned.
- `npm run qa:schema` - passed; 261 HTML pages, 866 JSON-LD blocks, 0 invalid.
- `npm run qa:accessibility` - passed; 5 pages checked, 0 violations.
- `npm run test:navigation` - passed.
- `npm run qa:html` - passed; 261 pages checked, 0 invalid.
- `npm run qa:links` - passed; 400 links scanned.
- `npm run qa:pa11y` - passed; 9/9 URLs passed, with the existing `quotation.html` 5-error result within the threshold of 7.
- `npm run qa:forbidden-claims` - completed; 372 files scanned, 632 review-only matches, no files rewritten.
- `git diff --check` - passed; only the expected CRLF normalization warning appeared for `index.html`.

## Visual QA Notes

- Desktop retains five cards in one row.
- Card design remains the approved white card with top accent line.
- Step number and title now sit in the same row.
- Longer titles wrap inside the title row when needed.
- Mobile stacks the cards cleanly.
- No RFQ path card text spills outside its card at tested widths or zoom levels.

## D5A-R2 Owner Correction

Owner feedback after the live D5A review: the RFQ path intro paragraph was wrapping into 3 narrow desktop lines while the right side of the section had unused empty space.

Root cause:

- The intro paragraph was constrained by `.buyerPathHead p { max-width: 74ch; }`.
- On 1366px and 1280px desktop captures, that rendered at about 596.75px wide, which made the paragraph look left-heavy relative to the five-card rail.

Final homepage-only correction:

```css
.buyerPathHead > div{
  width:100%;
  min-width:0;
}

.buyerPathHead p{
  max-width:1000px;
}
```

The approved paragraph copy stayed unchanged:

`Use these quick steps to prepare grade, form, standards, documents and delivery details before sending your requirement. This helps our team review your RFQ clearly and respond with the right sourcing inputs.`

Before/after measurement summary:

| Viewport | Before intro width | After intro width | Before intro lines | After intro lines | Before section height | After section height | Max card height after |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 1366 | 596.75px | 1000px | 3 | 2 | 358.92px | 334.28px | 160px |
| 1280 | 596.75px | 1000px | 3 | 2 | 358.92px | 334.28px | 160px |
| 768 | 596.75px | 728px | 3 | 2 | 712.42px | 687.78px | 95.50px |
| 390 | 350px | 350px | 5 | 5 | 887.20px | 887.20px | 115px |
| 360 | 320px | 320px | 5 | 5 | 906.70px | 906.70px | 134.50px |

Screenshot folders:

- Before: `C:\Users\Dell\AppData\Local\Temp\rubinox-d5a-r2-rfq-path-before`
- After: `C:\Users\Dell\AppData\Local\Temp\rubinox-d5a-r2-rfq-path-after`
- Zoom/reflow: `C:\Users\Dell\AppData\Local\Temp\rubinox-d5a-r2-rfq-path-zoom-reflow`
- Non-home check: `C:\Users\Dell\AppData\Local\Temp\rubinox-d5a-r2-rfq-path-nonhome-check`

D5A-R2 zoom/reflow scoped RFQ path results:

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

Full-page diagnostic note: at the smallest simulated zoom widths, page-level horizontal scroll is still traceable to the existing homepage contact cards, outside the RFQ path section. D5A-R2 did not change that section because this batch was scoped only to the RFQ path intro.

Non-home check:

- `company-profile.html` at 1366px and 390px: no `#buyer-path`; no non-home edit.
- `materials/stainless-steel.html` at 1366px and 390px: no `#buyer-path`; no non-home edit.

Scope confirmations:

- RFQ path cards were not redesigned.
- The approved white-card plus gold-to-blue top accent style was preserved.
- The D5A inline number/title layout was preserved.
- Broad card-system replication was not performed.
- D5B lock was not created yet.

D5A-R2 final QA:

- `npm run qa:sitemap` - passed; 261 sitemap URLs, 261 local HTML pages, 0 missing, 0 extras, 0 duplicates.
- `npm run qa:crawl` - passed; 400 links scanned.
- `npm run qa:schema` - passed; 261 HTML pages, 866 JSON-LD blocks, 0 invalid.
- `npm run qa:accessibility` - passed; 5 pages checked, 0 violations.
- `npm run test:navigation` - passed.
- `npm run qa:html` - passed; 261 pages checked, 0 invalid.
- `npm run qa:links` - passed; 400 links scanned.
- `npm run qa:pa11y` - passed; 9/9 URLs passed, with the existing `quotation.html` 5-error result within the threshold of 7.
- `npm run qa:forbidden-claims` - completed; 372 files scanned, 632 review-only matches, no files rewritten.
- `git diff --check` - passed; only expected CRLF normalization warnings appeared for `index.html` and this documentation file.

## D5B Lock Completion

Owner reviewed the live homepage RFQ path cards after D5A and D5A-R2 and approved them for design lock.

Owner approval note:

`RFQ PATH CARDS APPROVED FOR DESIGN LOCK`

D5B created:

- `docs/design-system/RUBINOX_HOME_RFQ_PATH_LOCK_V1.md`
- `docs/design-system/RUBINOX_CARD_ACCENT_LOCK_V1.md`

D5B also updated:

- `docs/design-system/RUBINOX_DESIGN_FINGERPRINT.md`
- This D5A prototype documentation file.

Final status:

- Homepage RFQ Path Lock V1 is approved and final.
- Card Accent Lock V1 is approved and final as a future base card design reference.
- The approved homepage RFQ path design remains homepage-only.
- Broad card-system replication was not performed.
- FAQs, Materials We Supply, Product Forms, non-home pages, top bar, header, market ticker, hero, footer, SEO metadata, schema, sitemap, analytics, images, and PDFs were not changed in D5B.

Future instruction:

- Do not apply Card Accent Lock V1 broadly without a separate owner-approved rollout batch.
- Future card rollouts must preserve the owner zoom/reflow rule: card, box, and CTA text must not overflow at 100%, 110%, or 125% zoom.

D5B final QA:

- `npm run qa:sitemap` - passed; 261 sitemap URLs, 261 local HTML pages, 0 missing, 0 extras, 0 duplicates.
- `npm run qa:crawl` - passed; 400 links scanned.
- `npm run qa:schema` - passed; 261 HTML pages, 866 JSON-LD blocks, 0 invalid.
- `npm run qa:accessibility` - passed; 5 pages checked, 0 violations.
- `npm run test:navigation` - passed.
- `npm run qa:html` - passed; 261 pages checked, 0 invalid.
- `npm run qa:links` - passed; 400 links scanned.
- `npm run qa:pa11y` - passed; 9/9 URLs passed, with the existing `quotation.html` 5-error result within the threshold of 7.
- `npm run qa:forbidden-claims` - completed; 374 files scanned, 644 review-only matches, no files rewritten.
- `git diff --check` - passed; only expected CRLF normalization warnings appeared for edited documentation files.
