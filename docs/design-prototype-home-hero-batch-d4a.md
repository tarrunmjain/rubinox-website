# Design Prototype - Homepage Hero Batch D4A

## Batch

- Batch: D4A - Homepage Hero Prototype.
- Scope: homepage only.
- Status: prototype complete for owner review; not a hero lock.
- Source page: `index.html`.
- Documentation file: `docs/design-prototype-home-hero-batch-d4a.md`.

## Owner Feedback

The owner reviewed the live homepage hero and asked for a more compact, premium, readable and balanced hero area below the approved market ticker. The specific requested changes were to reduce the top gap, use a silver H1, make the paragraph white, remove the duplicate business-identity chip, shorten the remaining chips, make all three CTAs gold, move CTAs under the approved image if clean, and remove the lower right RFQ details card.

## Guardrails

- Top Bar Lock V1 was not changed.
- Header Lock V1 was not changed.
- Header + Top Bar Alignment Lock V1 was not changed.
- Market Ticker Lock V1 was not changed.
- Non-home pages were not edited.
- Sitemap, schema, canonical URLs, analytics and GA4 tracking were not changed.
- H1 wording and SEO intent were preserved exactly.
- Hero image asset and alt text were preserved: `/assets/hero-metal.webp`, `Stainless steel, pipes, sheets and industrial metal stock`.
- Protected untracked files were not touched or staged: `CARD_ACCENT_STYLE_AUDIT.md`, `RUBINOX_MASTER_PROJECT_STATUS.md`.

## Visual Changes

- Reduced homepage hero top padding from `76px` to `32px`.
- Changed hero H1 to premium silver `#e3e7ed` with subtle text lift: `0 1px 0 rgba(255,255,255,.12), 0 3px 8px rgba(0,0,0,.35)`.
- Changed hero paragraph to readable near-white: `rgba(255,255,255,.9)`.
- Removed the duplicate first chip: `Stockist | Supplier | Importer | Exporter | Project Supplier`.
- Final three chip labels:
  - `&#10003; Grade & Form Review`
  - `&#10003; MTC / PMI Review`
  - `&#10003; PAN India RFQ Support`
- Moved the three hero CTAs below the right-side image because they fit cleanly in one desktop row and balance the left information boxes.
- Final CTA labels and links:
  - `WhatsApp Us` -> `https://wa.me/919363193755`
  - `Email Us` -> `mailto:tarun@rubinoxmetal.com?subject=Quotation%20Request%20-%20Rubinox`
  - `Call Us` -> `tel:+919363193755`
- All three CTAs use the gold button treatment and a slight hover lift.
- Removed the lower right RFQ details card from the homepage hero only.
- Kept the three white information boxes on the left: `Mumbai`, `PAN India`, `All Forms`.

## Measurement Summary

| Viewport | Metric | Before | After | Result |
| --- | ---: | ---: | ---: | --- |
| 1366 | Market ticker bottom Y | 199 | 199 | unchanged |
| 1366 | H1 top Y | 275 | 231 | gap reduced |
| 1366 | Hero image top Y | 275 | 231 | gap reduced |
| 1366 | Gap ticker to H1 | 76 | 32 | 57.9% reduction |
| 1366 | Gap ticker to image | 76 | 32 | 57.9% reduction |
| 1366 | Hero section height | 833.31 | 669.31 | compacted |
| 1280 | Market ticker bottom Y | 199 | 199 | unchanged |
| 1280 | H1 top Y | 275 | 231 | gap reduced |
| 1280 | Hero image top Y | 275 | 231 | gap reduced |
| 1280 | Gap ticker to H1 | 76 | 32 | 57.9% reduction |
| 1280 | Gap ticker to image | 76 | 32 | 57.9% reduction |
| 1280 | Hero section height | 833.31 | 669.31 | compacted |
| 390 | Market ticker bottom Y | 322.77 | 322.77 | unchanged |
| 390 | H1 top Y | 398.77 | 354.77 | gap reduced |
| 390 | Hero image top Y | 1599.44 | 1347.44 | stacked layout compacted |
| 390 | Gap ticker to H1 | 76 | 32 | 57.9% reduction |
| 390 | Gap ticker to image | 1276.67 | 1024.67 | stacked layout compacted |
| 390 | Hero section height | 1778.45 | 1411.67 | compacted |

Additional after-state checks:

| Viewport | Chips line count | CTA line count | Horizontal overflow |
| --- | ---: | ---: | --- |
| 1366 | 1 | 1 | no |
| 1280 | 1 | 1 | no |
| 768 | 1 | 1 | no |
| 390 | 2 | 2 | no |
| 360 | 2 | 2 | no |

## Screenshot References

- Before screenshots and measurements: `C:\Users\Dell\AppData\Local\Temp\rubinox-d4a-hero-before`
- After screenshots and measurements: `C:\Users\Dell\AppData\Local\Temp\rubinox-d4a-hero-after`
- CTA hover screenshots: `C:\Users\Dell\AppData\Local\Temp\rubinox-d4a-hero-cta-hover`
- Non-home check screenshots: `C:\Users\Dell\AppData\Local\Temp\rubinox-d4a-hero-nonhome-check`

Captured homepage widths: `1366`, `1280`, `768`, `390`, `360`.

CTA hover captures:

- Normal desktop state.
- WhatsApp hover.
- Email hover.
- Call hover.
- Mobile CTA layout at 390px.

Non-home screenshots:

- `company-profile.html` at 1366 and 390.
- `materials/stainless-steel.html` at 1366 and 390.

Non-home result: no non-home files were edited, checked pages had no horizontal overflow, and no homepage market ticker/hero-card behavior was added to non-home pages.

## QA Results

Baseline QA before changes:

| Command | Result |
| --- | --- |
| `npm.cmd run qa:sitemap` | passed: 261 sitemap URLs, 261 local HTML pages, 0 missing, 0 duplicates |
| `npm.cmd run qa:crawl` | passed: 400 links scanned successfully |
| `npm.cmd run qa:schema` | passed: 261 HTML pages, 866 JSON-LD blocks, 0 invalid |
| `npm.cmd run qa:accessibility` | passed: 5 pages checked, 0 violations |
| `npm.cmd run test:navigation` | passed |
| `npm.cmd run qa:html` | passed: 261 pages checked, 0 invalid |
| `npm.cmd run qa:links` | passed: 400 links scanned successfully |
| `npm.cmd run qa:pa11y` | passed: 9/9 URLs within threshold |
| `npm.cmd run qa:forbidden-claims` | completed: 369 files scanned, 618 existing review flags, no rewrites |
| `git diff --check` | passed |

Post-edit QA:

| Command | Result |
| --- | --- |
| `npm.cmd run qa:sitemap` | passed: 261 sitemap URLs, 261 local HTML pages, 0 missing, 0 duplicates |
| `npm.cmd run qa:crawl` | passed: 400 links scanned successfully |
| `npm.cmd run qa:schema` | passed: 261 HTML pages, 866 JSON-LD blocks, 0 invalid |
| `npm.cmd run qa:accessibility` | passed: 5 pages checked, 0 violations |
| `npm.cmd run test:navigation` | passed |
| `npm.cmd run qa:html` | initially flagged the `tel:` CTA spacing rule; fixed by encoding the rendered `Call Us` label as `Call&nbsp;Us`; rerun passed with 261 pages checked, 0 invalid |
| `npm.cmd run qa:links` | passed: 400 links scanned successfully |
| `npm.cmd run qa:pa11y` | passed: 9/9 URLs within threshold |
| `npm.cmd run qa:forbidden-claims` | completed after documentation: 370 files scanned, 618 existing review flags, no rewrites |
| `git diff --check` | passed |

## Content Safety

- No pricing promises, confirmed-stock promises, delivery guarantees, approval claims, ratings, client references, project references, awards, team-size claims or unverified experience claims were introduced.
- No public SEO URL, H1 wording, schema, sitemap entry, canonical URL or analytics ID was changed.
- Current GA4 remains `G-JT5X5L5H07`; old accidental GA4 ID `G-CR18QYPS6C` remains absent.

## Owner Review

Owner must review the live homepage hero before this section is locked.

Next step after owner approval: D4B &mdash; Create Homepage Hero Design Lock / Design Fingerprint.