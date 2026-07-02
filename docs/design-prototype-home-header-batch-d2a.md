# Design Batch D2A - Homepage Header Prototype

## Purpose

Create a homepage-only prototype for the next Rubinox header design pass after Top Bar Lock V1. This batch corrects the live homepage header height, logo rendering, desktop navigation visibility, and navigation hover treatment without creating a header lock or replicating the header sitewide.

## Owner Screenshot Feedback Summary

- Header appeared too tall.
- Logo appeared slightly stretched or blurred.
- Logo needed more premium stand-out.
- Desktop navigation needed to appear directly on desktop instead of relying on the mobile hamburger.
- Homepage desktop navigation needed to show the main menu links directly.
- Header navigation hover needed to feel premium and turn Rubinox gold like the approved top-bar icon hover.

## D2A-R2 Owner Corrections

Owner reviewed the live D2A homepage header and confirmed:

`The size and everything is perfect.`

R2 therefore preserves the approved D2A header height, spacing, desktop nav visibility, mobile hamburger behavior, dropdown behavior, and gold hover treatment. Only the owner-requested final corrections were applied.

R2 corrections:

- Strengthened the homepage logo stand-out effect with a scoped premium layered drop-shadow.
- Added `HOME` to the homepage desktop navigation and mobile menu.
- Checked the desktop WhatsApp RFQ header button and skipped it because it reduced clean 1280px desktop spacing with the approved `292px` logo and six required nav items.

D2A-R2 logo CSS treatment, superseded by D2A-R3:

```css
header.home-header-prototype-d2a .brand{
  filter:drop-shadow(0 4px 8px rgba(8,24,54,.12));
}
header.home-header-prototype-d2a .brand img{
  filter:drop-shadow(0 1px 0 rgba(255,255,255,.42)) drop-shadow(0 4px 8px rgba(8,24,54,.18)) drop-shadow(0 10px 16px rgba(19,42,99,.12));
}
```

No scale transform, animation, extra box, logo color change, or logo size change was added. Logo dimensions remain the approved D2A render size.

Final homepage desktop nav order:

1. `HOME`
2. `COMPANY PROFILE`
3. `PRODUCT PORTFOLIO`
4. `REQUEST A QUOTE`
5. `KNOWLEDGE HUB`
6. `CONTACT`

Fit confirmation:

- At `1366px`, the full desktop nav is visible and the hamburger is hidden.
- At `1280px`, the full desktop nav is visible and the hamburger is hidden.
- Header height remains `117px` full sticky header and `81px` main header band at desktop widths.
- Mobile closed header height remains unchanged at about `138px` at `390px` and `360px`.
- Mobile menu opens cleanly at `390px` with `HOME` included at the top.

R2 screenshot folders:

- Before screenshots: `C:\Users\Dell\AppData\Local\Temp\rubinox-d2a-r2-header-before`
- After screenshots: `C:\Users\Dell\AppData\Local\Temp\rubinox-d2a-r2-header-after`
- Hover/dropdown screenshots: `C:\Users\Dell\AppData\Local\Temp\rubinox-d2a-r2-header-hover-dropdown`
- Non-home check screenshots: `C:\Users\Dell\AppData\Local\Temp\rubinox-d2a-r2-header-nonhome-check`

Top Bar Lock V1 remains untouched. Header Lock V1 was not created. Sitewide header replication was not performed. Non-home pages remain unchanged by D2A-R2.

Owner must review the live homepage header again before Header Lock V1 is created.

## D2A-R3 Logo Crispness Correction

Owner reviewed the live D2A-R2 homepage header and confirmed the header was otherwise approved, but the logo looked slightly more blurred after the 3D treatment.

Owner feedback:

`ALL GOOD BUT LOGO NOW LOOKING SLIGHTLY MORE BLUR. KINDLY CHECK IF NOT SHIFT BACK TO NON 3D VERSION WITH SAME SIZE.`

Cause identified:

- The D2A-R2 scoped logo treatment applied CSS `filter:drop-shadow(...)` to both the `.brand` link and the logo image.
- CSS filter rendering can rasterize the logo layer and create a soft halo around text/edges.
- Because logo crispness is now more important than the 3D effect, the filter treatment was removed.

Final D2A-R3 logo treatment:

```css
header.home-header-prototype-d2a .brand{
  filter:none!important;
}
header.home-header-prototype-d2a .brand img{
  width:292px!important;
  height:auto!important;
  max-height:70px!important;
  object-fit:contain!important;
  image-rendering:auto;
  filter:none!important;
}
```

D2A-R3 removed the 3D/filter effect instead of reducing it. No transform, scale, glow, shadow, box, asset swap, logo color change, or size change was added.

Verification:

- Desktop logo remains `292px x 70px` at `1366px` and `1280px`.
- Mobile logo remains about `184px x 44.45px` at `390px`.
- Desktop full header remains `117px`.
- Main header band remains `81px`.
- Top bar remains `35px`.
- Nav order remains `HOME`, `COMPANY PROFILE`, `PRODUCT PORTFOLIO`, `REQUEST A QUOTE`, `KNOWLEDGE HUB`, `CONTACT`.
- Desktop nav remains visible at `1366px` and `1280px`.
- Mobile hamburger remains clean with `HOME` included in the mobile menu.

D2A-R3 screenshot folders:

- Before screenshots: `C:\Users\Dell\AppData\Local\Temp\rubinox-d2a-r3-logo-before`
- After screenshots: `C:\Users\Dell\AppData\Local\Temp\rubinox-d2a-r3-logo-after`
- Non-home check screenshots: `C:\Users\Dell\AppData\Local\Temp\rubinox-d2a-r3-nonhome-check`

D2A-R3 is homepage-only. Header Lock V1 was not created. Sitewide header replication was not performed. Non-home pages remain unchanged.

## Exact Scope

Homepage only.

D2A does not replicate the header sitewide. Header Lock V1 was not created in this batch.

## Files Changed

- `index.html`
- `docs/design-prototype-home-header-batch-d2a.md`

No shared CSS file was changed. The prototype CSS is inline in `index.html` and scoped under:

```css
header.home-header-prototype-d2a
```

## Protected Files

The protected untracked files remain untouched and untracked:

- `CARD_ACCENT_STYLE_AUDIT.md`
- `RUBINOX_MASTER_PROJECT_STATUS.md`

## Top Bar Lock Protection

Top Bar Lock V1 was not altered.

- `assets/css/topbar-lock-v1.css` was not changed.
- `assets/js/topbar-lock-v1.js` was not changed.
- `docs/design-system/RUBINOX_TOPBAR_LOCK_V1.md` was not changed.
- Top bar desktop height remains `35px` at 1366px and 1280px.
- Top bar mobile height remains about `69px` at 390px and 360px.
- Top bar icon hover/click-reset behavior was not changed.

## Screenshot Folders

- Before screenshots: `C:\Users\Dell\AppData\Local\Temp\rubinox-d2a-header-before`
- After screenshots: `C:\Users\Dell\AppData\Local\Temp\rubinox-d2a-header-after`
- Hover/dropdown screenshots: `C:\Users\Dell\AppData\Local\Temp\rubinox-d2a-header-hover-dropdown`
- Non-home check screenshots: `C:\Users\Dell\AppData\Local\Temp\rubinox-d2a-header-nonhome-check`

## Header Height Measurement

Measured on the homepage at 1366px viewport width.

| Area | Before | After | Change |
| --- | ---: | ---: | ---: |
| Main header band, excluding top bar | `96px` | `81px` | `15.63%` reduction |
| Full sticky header, including approved top bar | `132px` | `117px` | `11.36%` reduction |
| Approved top bar | `35px` | `35px` | unchanged |

The required 15% reduction was achieved on the main header band while leaving the approved top bar untouched.

## Logo Rendering

Logo asset used:

- `logo.png`
- Asset dimensions: `360x87`

Measured on the homepage at 1366px viewport width.

| Logo Render | Before | After | Change |
| --- | ---: | ---: | ---: |
| Width | `320px` | `292px` | `8.75%` smaller |
| Height | `77.33px` | `70px` | `9.48%` smaller |

Logo crispness fix:

- Preserved aspect ratio with `width` plus `height:auto`.
- Kept `object-fit:contain`.
- Avoided stretching the logo beyond the source asset quality.
- Preserved the navy text, silver ring/circle, and gold X accent.
- The silver ring remains visible and is not cropped.

Logo premium treatment:

- D2A added a restrained drop-shadow on the logo image and brand link.
- D2A-R2 strengthened the drop-shadow treatment.
- D2A-R3 removed the drop-shadow/filter treatment to restore maximum logo crispness.
- No heavy glow, animation, transform, or extra logo box is used in the final D2A-R3 state.

## Desktop Navigation

Desktop nav breakpoint:

- Full desktop navigation is shown above `1020px`.
- Hamburger is used at `1020px` and below.
- Full nav was verified visible at 1366px and 1280px.
- Hamburger was verified active at 768px, 390px, and 360px.

Homepage desktop nav items implemented:

| Item | Link / Behavior |
| --- | --- |
| `HOME` | `/` |
| `COMPANY PROFILE` | Existing dropdown trigger; existing dropdown links preserved |
| `PRODUCT PORTFOLIO` | Existing dropdown trigger; existing dropdown links preserved |
| `REQUEST A QUOTE` | `/quotation.html` |
| `KNOWLEDGE HUB` | `/blog.html` |
| `CONTACT` | `/contact.html` |

The homepage desktop header now shows `HOME` after the D2A-R2 owner correction. The logo also remains a homepage link.

The desktop WhatsApp RFQ header button was checked in D2A-R2 and skipped because it reduced clean desktop spacing at 1280px with the approved logo size and six required nav items. The existing mobile `WhatsApp Quote` action remains.

## Dropdown Behavior

Existing dropdown behavior is preserved:

- Company Profile dropdown remains hover/focus/click accessible.
- Product Portfolio dropdown remains hover/focus/click accessible.
- Existing internal dropdown links were preserved.
- No new dropdown links were invented.
- Only existing dropdown content is used.

`KNOWLEDGE HUB` has no existing dropdown in the homepage header, so D2A uses the existing direct `/blog.html` link and does not invent a dropdown.

## Hover Effect Rules

Gold color used:

- `#d7a84f`

Desktop top-level nav hover/focus:

- Text turns Rubinox gold.
- Item lifts subtly by `translateY(-1px)`.
- Background remains transparent.
- No large filled background, heavy box, or noisy underline is added.

Dropdown item hover/focus:

- Text turns Rubinox gold.
- Background remains white.
- Border emphasis stays subtle.
- No lift is applied in dropdown items.

Measured hover checks:

- Contact hover color: `rgb(215, 168, 79)`.
- Knowledge Hub hover color: `rgb(215, 168, 79)`.
- Dropdown item hover color: `rgb(215, 168, 79)`.

## Mobile Behavior

- Mobile header still uses the existing hamburger menu.
- Mobile menu opens at 390px with `aria-expanded="true"`.
- Mobile logo remains crisp and proportionate.
- No overlap was observed in the captured 390px and 360px states.
- Mobile accordion behavior was not broadly changed.

## Accessibility Notes

- Existing `aria-haspopup`, `aria-expanded`, and `aria-controls` attributes were preserved on dropdown triggers.
- Existing mobile menu `aria-expanded` behavior was preserved.
- Existing crawlable dropdown links remain `<a href="">` links.
- Header hover/focus states remain visible and color-based.
- Baseline and final accessibility checks reported 0 Axe violations on the configured pages.

## SEO, Schema, Sitemap, Analytics

The following were intentionally untouched:

- Public SEO URLs
- H1
- Title/meta/canonical
- JSON-LD schema
- Sitemap URLs
- Internal-link strategy outside the homepage header prototype
- GA4 tracking

GA4 confirmation:

- Current GA4 ID remains `G-JT5X5L5H07`.
- Old GA4 ID `G-CR18QYPS6C` remains absent.

## Forbidden Content Confirmation

No business claims were added. No claims about manufacturing, factories, mills, production, fake approvals, fake certifications, stock promises, live prices, delivery guarantees, client names, project names, ratings, reviews, awards, stockyard size, team size, or years of experience were introduced.

Rubinox identity remains:

`Stockist | Supplier | Importer | Exporter | Project Supplier`

## Non-Home Confirmation

D2A is homepage-only.

The D2A class `home-header-prototype-d2a` is absent from the checked non-home pages:

- `/company-profile.html`
- `/materials/ss-304-supplier-india.html`

Non-home screenshot checks were captured at:

- 1366px
- 390px

## Future Sitewide Rule

Do not implement this rule until owner approval and a later lock/replication batch.

When this header is later approved and replicated sitewide:

- Homepage nav includes `HOME`.
- Non-home nav includes `HOME`.
- The owner wants header navigation to remain visually consistent across pages.

Future homepage and non-home nav:

- `HOME`
- `COMPANY PROFILE`
- `PRODUCT PORTFOLIO`
- `REQUEST A QUOTE`
- `KNOWLEDGE HUB`
- `CONTACT`

## QA Commands Run And Results

Baseline QA before edits:

- `npm.cmd run qa:sitemap`: passed; 261 sitemap URLs, 261 local HTML pages, 0 missing, 0 unmatched, 0 duplicate URLs.
- `npm.cmd run qa:crawl`: passed; 399 links scanned successfully.
- `npm.cmd run qa:schema`: first attempt timed out at the shell limit; rerun passed with 261 HTML pages scanned, 866 JSON-LD blocks found, 0 invalid blocks.
- `npm.cmd run qa:accessibility`: passed; 5 configured pages, 0 total violations.
- `npm.cmd run test:navigation`: passed.
- `npm.cmd run qa:html`: passed; 261 pages checked, 0 invalid pages.
- `npm.cmd run qa:links`: passed; 399 links scanned successfully.
- `npm.cmd run qa:pa11y`: passed; 9/9 URLs passed, quotation page remained within existing threshold.
- `npm.cmd run qa:forbidden-claims`: completed; 362 files scanned, 601 matches flagged for review, no files rewritten.
- `git diff --check`: passed.

Final QA after implementation:

- `npm.cmd run qa:sitemap`: passed; 261 sitemap URLs, 261 local HTML pages, 0 missing, 0 unmatched, 0 duplicate URLs.
- `npm.cmd run qa:crawl`: passed; 399 links scanned successfully.
- `npm.cmd run qa:schema`: passed; 261 HTML pages scanned, 866 JSON-LD blocks found, 0 invalid blocks.
- `npm.cmd run qa:accessibility`: passed; 5 configured pages, 0 total violations.
- `npm.cmd run test:navigation`: passed.
- `npm.cmd run qa:html`: passed; 261 pages checked, 0 invalid pages.
- `npm.cmd run qa:links`: passed; 399 links scanned successfully.
- `npm.cmd run qa:pa11y`: passed; 9/9 URLs passed, quotation page remained within existing threshold.
- `npm.cmd run qa:forbidden-claims`: completed; 363 files scanned, 602 matches flagged for review, no files rewritten.
- `git diff --check`: passed.

Final QA after D2A-R2 corrections:

- `npm.cmd run qa:sitemap`: passed; 261 sitemap URLs, 261 local HTML pages, 0 missing, 0 unmatched, 0 duplicate URLs.
- `npm.cmd run qa:crawl`: passed; 399 links scanned successfully.
- `npm.cmd run qa:schema`: passed; 261 HTML pages scanned, 866 JSON-LD blocks found, 0 invalid blocks.
- `npm.cmd run qa:accessibility`: passed; 5 configured pages, 0 total violations.
- `npm.cmd run test:navigation`: passed.
- `npm.cmd run qa:html`: passed; 261 pages checked, 0 invalid pages.
- `npm.cmd run qa:links`: passed; 399 links scanned successfully.
- `npm.cmd run qa:pa11y`: passed; 9/9 URLs passed, quotation page remained within existing threshold.
- `npm.cmd run qa:forbidden-claims`: completed; 363 files scanned, 602 matches flagged for review, no files rewritten.
- `git diff --check`: passed.

Final QA after D2A-R3 logo crispness correction:

- `npm.cmd run qa:sitemap`: passed; 261 sitemap URLs, 261 local HTML pages, 0 missing, 0 unmatched, 0 duplicate URLs.
- `npm.cmd run qa:crawl`: passed; 399 links scanned successfully.
- `npm.cmd run qa:schema`: passed; 261 HTML pages scanned, 866 JSON-LD blocks found, 0 invalid blocks.
- `npm.cmd run qa:accessibility`: passed; 5 configured pages, 0 total violations.
- `npm.cmd run test:navigation`: passed.
- `npm.cmd run qa:html`: passed; 261 pages checked, 0 invalid pages.
- `npm.cmd run qa:links`: passed; 399 links scanned successfully.
- `npm.cmd run qa:pa11y`: passed; 9/9 URLs passed, quotation page remained within existing threshold.
- `npm.cmd run qa:forbidden-claims`: completed; 363 files scanned, 602 matches flagged for review, no files rewritten.
- `git diff --check`: passed.

## Visual QA Notes

- Homepage 1366px and 1280px show the full desktop nav.
- D2A-R2 homepage 1366px and 1280px show `HOME` plus the full six-item desktop nav.
- Homepage 768px, 390px, and 360px use the mobile hamburger.
- Header logo appears proportionate and remains the approved D2A size.
- D2A-R3 removes the logo filter/drop-shadow treatment so the homepage logo renders crisp with computed `filter:none`.
- D2A-R3 homepage 1366px and 1280px preserve `292px x 70px` logo size, `117px` full header height, and `81px` main header band.
- Company Profile dropdown opens and remains readable.
- Product Portfolio dropdown opens and remains readable.
- HOME, Knowledge Hub, and Contact hover use Rubinox gold with the same subtle lift.
- Dropdown item hover uses gold text without a heavy background.
- Mobile menu opens cleanly at 390px and includes `HOME` at the top.
- Non-home checked pages do not contain the D2A homepage prototype class.

## Owner Review Instruction

Owner must review the live homepage header before this header design is locked or replicated sitewide.

## Next Step After Owner Approval

D2B - Create Header Design Lock / Design Fingerprint. Do not proceed to D2C until owner approves the live homepage header.
