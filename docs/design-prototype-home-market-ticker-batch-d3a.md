# Design Batch D3A - Homepage Market Ticker Compact Prototype

## Purpose

Create a homepage-only compact prototype for the Rubinox Market Watch section after owner screenshot review. The owner confirmed the design direction was good, but the rendered ticker section was too tall and the right-side context text needed to be shorter.

This batch reduces the homepage market ticker height while preserving the approved premium dark navy visual style, ticker rail structure, market identity, and disclaimer meaning. This is not a design lock.

## Scope

Homepage only:

- `index.html`
- Homepage market ticker CSS and markup only

Files intentionally not changed:

- Top bar implementation
- Header implementation
- Hero section
- Trust/cards/CTA/footer sections
- Non-home pages
- Sitemap
- Schema
- Analytics
- TradingView ticker source logic

Protected untracked files remain untouched and untracked:

- `CARD_ACCENT_STYLE_AUDIT.md`
- `RUBINOX_MASTER_PROJECT_STATUS.md`

## Owner Screenshot Feedback

- Market Watch section height was too large.
- The design itself was approved in direction.
- The section should feel close to the approved header main band height.
- The right-side explanatory context copy should be shorter.
- Disclaimer meaning must remain clear.

## Locked Design Dependencies

Preserved:

- Top Bar Lock V1
- Header Lock V1
- Header/topbar alignment rail correction
- Rubinox design fingerprint

No top bar, header, or shared rail edits were made in this batch.

## Implementation Notes

The compacting was handled through small scoped adjustments:

- Reduced desktop market ticker grid column widths slightly.
- Tightened ticker wrapper gap.
- Reduced vertical padding.
- Reset the market note paragraph margin to `0`.
- Tightened market note line-height and strong-title spacing.
- Shortened the right-side context copy.
- Added small mobile padding refinements while keeping the section readable.

The TradingView ticker embed/source logic was left unchanged.

## Final Context Copy

Title:

`Context only, not a quotation.`

Body:

`Indicative signals only - not live prices, stock confirmation or a quote. Final quote depends on grade, form, size, quantity, documents, origin and logistics.`

The live HTML uses `&mdash;` between "only" and "not live prices" for display punctuation.

Meaning preserved:

- No live pricing implication.
- No stock confirmation implication.
- No formal quotation implication.
- No pricing promise.

## Measurements

Approved design reference:

- Header Lock V1 documented desktop main header band: about `81px`.

Before D3A:

| Viewport | Market ticker height | Note |
| --- | ---: | --- |
| 1366px | 139.56px | Too tall versus header band |
| 1280px | 139.56px | Too tall versus header band |
| 390px | 256.66px | Mobile readable but tall |

After D3A:

| Viewport | Market ticker height | Result |
| --- | ---: | --- |
| 1366px | 82px | Within 80-95px desktop target |
| 1280px | 82px | Within 80-95px desktop target |
| 768px | 169.95px | Stacked tablet layout, no overflow |
| 390px | 184.67px | Stacked mobile layout, no overflow |
| 360px | 184.67px | Stacked mobile layout, no overflow |

Desktop final height is close to the approved header band reference and remains below the requested 100px maximum.

## Screenshot Records

Before screenshots:

`C:\Users\Dell\AppData\Local\Temp\rubinox-d3a-market-ticker-before`

After screenshots:

`C:\Users\Dell\AppData\Local\Temp\rubinox-d3a-market-ticker-after`

Non-home check screenshots:

`C:\Users\Dell\AppData\Local\Temp\rubinox-d3a-market-ticker-nonhome-check`

Required widths captured:

- Homepage: 1366, 1280, 768, 390, 360
- Non-home checks: 1366 and 390

Non-home pages checked:

- `company-profile.html`
- `materials/stainless-steel.html`

Non-home result:

- No `.marketWatch` section was present on checked non-home pages.
- No horizontal overflow was detected on checked non-home pages.
- Non-home files were not edited.

## QA Results

Final command set and results for this batch:

- `npm run qa:sitemap` - pass; 261 sitemap URLs, 261 local HTML pages, 0 missing, 0 unmatched, 0 duplicates.
- `npm run qa:crawl` - pass; 400 links scanned successfully.
- `npm run qa:schema` - pass; 261 HTML pages scanned, 866 JSON-LD blocks found, 0 invalid JSON-LD blocks.
- `npm run qa:accessibility` - pass; 5 pages checked, 0 total violations.
- `npm run test:navigation` - pass; navigation verification passed.
- `npm run qa:html` - pass; 261 HTML pages checked, 0 invalid pages.
- `npm run qa:links` - pass; 400 links scanned successfully.
- `npm run qa:pa11y` - pass; 9/9 URLs passed. Existing `quotation.html` count remained within threshold.
- `npm run qa:forbidden-claims` - pass in review-only mode; 368 files scanned, 608 existing matches flagged for review, no files rewritten.
- `git diff --check` - pass; only line-ending warning for `index.html`.

Final verification points:

- Sitemap remains 261 URLs.
- HTML remains 261 pages with 0 invalid pages.
- Schema remains valid.
- GA4 remains `G-JT5X5L5H07` in `index.html`.
- Old GA4 ID `G-CR18QYPS6C` remains absent.
- Top bar unchanged.
- Header unchanged.
- Header/topbar alignment unchanged.
- Non-home pages not edited.
- No unsafe claims introduced.

## Owner Review

Owner must review the live homepage market ticker before this section is locked.

Next step after owner approval:

D3B - Create Homepage Market Ticker Design Lock / Design Fingerprint.
