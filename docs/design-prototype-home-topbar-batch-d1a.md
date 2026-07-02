# Design Batch D1A — Homepage Top Bar Prototype Revision

## Owner Requested Changes

- Keep the existing dark blue to light blue top bar gradient.
- Keep the left text exactly: `Stockist | Supplier | Importer | Exporter | Project Supplier`.
- Change the left text to a premium silver/stainless-steel treatment inspired by the Rubinox logo.
- Keep the center area empty.
- Keep the same right icon set: Call, WhatsApp, Email, Facebook, Instagram, LinkedIn.
- Keep icons plain in the normal state with no boxes.
- Remove the gold square/background/line hover effect on the homepage prototype.
- Make icon hover change the icon itself to Rubinox gold with a slight upward lift.
- Preserve mobile compactness and clickability.

## Exact Scope

Homepage only. This batch is a prototype revision for the homepage top bar and was not replicated sitewide.

## Files Changed

- `index.html`
- `docs/design-prototype-home-topbar-batch-d1a.md`

## CSS Scoping Method

The homepage top bar markup now has the class `homeTopBarPrototype` on the existing `.topRail` element. All new prototype CSS is scoped through:

```css
header .topRail.homeTopBarPrototype
```

No non-home HTML page was edited.

## Screenshot Folders

- Before screenshots: `C:\Users\Dell\AppData\Local\Temp\rubinox-d1a-topbar-before`
- After screenshots: `C:\Users\Dell\AppData\Local\Temp\rubinox-d1a-topbar-after`
- Non-home check screenshots: `C:\Users\Dell\AppData\Local\Temp\rubinox-d1a-topbar-nonhome-check`

## Desktop Visual Notes

- The top bar keeps the existing navy-to-blue gradient.
- The center area remains empty.
- The left text now reads as silver/stainless steel instead of gold.
- Icon placement and spacing remain close to the previous desktop layout.

## Mobile Visual Notes

- No new mobile text was added.
- The top bar keeps the existing compact stacked mobile structure.
- Icons remain clickable and in one row.
- No hover background box is applied for touch/mobile states.

## Final Top Bar Background Treatment

The existing top bar background gradient is preserved.

## Silver/Stainless-Steel Text Treatment

The top bar text uses a subtle silver linear gradient clipped to text, plus a restrained shadow for depth. It is intended to feel lifted and premium without a heavy chrome effect.

## Icon Normal State

Icons remain plain, unboxed, clickable utility links. No background box, border box, or shadow is added in the normal state.

## Icon Hover State

On homepage top bar hover/focus:

- The icon color changes to Rubinox gold.
- The icon lifts upward by `translateY(-2px)`.
- Background remains transparent.
- Border remains removed.
- Box shadow remains removed.
- No underline or gold line appears.

Inline SVG icons use `currentColor`; image-based brand icons use a scoped filter on hover/focus so the icon itself becomes gold-toned.

## Accessibility Notes

- Contact and social links keep their accessible names through existing `aria-label` attributes.
- Keyboard focus remains visible with a subtle rounded outline and no background box.
- Text contrast remains strong against the dark top bar.
- `npm.cmd run qa:accessibility` reported 0 accessibility violations on the configured pages.
- `npm.cmd run qa:pa11y` passed all 9 configured URLs.

## Confirmations

- Center area remains empty.
- No raw GST/Udyam/IEC numbers were added.
- No manufacturing, stock, price, fake certification, client, project, rating, award, factory, or delivery guarantee claims were added.
- SEO tags, schema content, sitemap, analytics, header navigation, hero, trust strip, and footer were untouched by this prototype.
- GA4 ID `G-JT5X5L5H07` remains present.
- Old GA4 ID `G-CR18QYPS6C` remains absent.

## QA Commands Run And Results

- `git status --short`: only protected untracked files were present before edits.
- `npm run qa:sitemap`: blocked by PowerShell execution policy for `npm.ps1`; rerun as `npm.cmd run qa:sitemap`.
- `npm.cmd run qa:sitemap`: passed; 261 sitemap URLs, 261 local HTML pages, 0 missing, 0 unmatched, 0 duplicates.
- `npm run qa:schema`: blocked by PowerShell execution policy for `npm.ps1`; rerun as `npm.cmd run qa:schema`.
- `npm.cmd run qa:schema`: passed; 261 HTML pages scanned, 866 JSON-LD blocks found, 0 invalid JSON-LD blocks.
- `npm.cmd run qa:crawl`: passed; 397 links scanned successfully.
- `npm.cmd run qa:accessibility`: passed; 5 configured pages checked, 0 total violations.
- `npm.cmd run test:navigation`: passed; navigation verification passed.
- `npm.cmd run qa:html`: passed; 261 pages checked, 0 invalid pages.
- `npm.cmd run qa:links`: passed; 397 links scanned successfully.
- `npm.cmd run qa:pa11y`: passed; 9/9 URLs passed, homepage 0 errors, quotation page 5 existing errors within threshold.
- `npm.cmd run qa:forbidden-claims`: completed; 357 files scanned, 589 matches flagged for review, no files rewritten.
- `git diff --check`: passed; Git reported only the expected LF-to-CRLF working-copy warning for `index.html`.

## Owner Review Note

Owner must review the live homepage before this top bar design is locked or replicated sitewide.

## Next Step

After owner approval: D1B — Create Top Bar Design Lock / Design Fingerprint. Do not replicate sitewide until approval.
