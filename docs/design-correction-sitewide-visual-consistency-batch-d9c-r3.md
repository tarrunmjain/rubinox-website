# Rubinox Design Batch D9C-R3 - Sitewide Visual Consistency Correction

Date: 2026-07-09
Project: Rubinox Metal and Alloys website
Batch: D9C-R3 - Sitewide Visual Consistency Audit and Correction
Status: Implemented, pending final QA/commit/push, pending owner review before D9D

## Purpose

The owner reviewed live D9C/D9C-R2 pages and identified that sitewide consistency issues remained. The most visible issues were on `industries.html`:

- Technical and Documentation Support card hover still showed a heavy/silver outline effect.
- The gap between the industries hero and the next content block had collapsed.
- The owner cannot manually inspect 261 public pages, so the correction required a systematic audit.

D9D final sitewide design lock was not created in this batch.

## Starting Point

Local and remote `main` matched before this batch.

- Current inherited head before D9C-R3: `85c48ba0b30ab04b811b1be23009fbe77ce77e42`
- Previous D9C-R2 commit: `design: correct sitewide hover states`
- Protected untracked files were left untouched:
  - `CARD_ACCENT_STYLE_AUDIT.md`
  - `RUBINOX_MASTER_PROJECT_STATUS.md`

## Files Changed

- `assets/css/rubinox-sitewide-design-v1.css`
- `docs/design-correction-sitewide-visual-consistency-batch-d9c-r3.md`
- `docs/design-sitewide-standardization-batch-d9c.md`
- `docs/design-system/RUBINOX_DESIGN_FINGERPRINT.md`

No HTML files were changed.

## CSS Correction Summary

The correction stayed in the shared D9C stylesheet and did not change page content, SEO, schema, sitemap, analytics, images, PDFs, header, top bar, or footer structure.

Hover corrections added coverage for:

- `a.supportCard`
- `a.flowCard`
- `a.clusterCard`
- `a.materialCard`
- anchor classes containing `Card` / `card`, excluding `.btn`
- `.materialLinks a`
- `.formPolishLinks a`
- `.popularRow a`
- `.formChipRow a`
- `a.formChip`
- `.tagRow a:not(.btn)`
- `.linkGrid a:not(.btn)`
- `.locationLinkGrid a:not(.btn)`
- `.industryActions a:not(.rfqAction):not(.btn)`
- `.materialRfqActions a:not(.btn)`
- `.materialRfqActions .btn.ghost`
- `.articleToc a`

The approved hover behavior is now:

- Same 1px border width before and after hover.
- Subtle Rubinox gold border/accent on hover.
- Slight lift, `translateY(-1px)` to `translateY(-2px)`.
- Soft premium shadow.
- White/light surface remains.
- No silver hover border.
- No filled gold card/chip background.
- No thick gold full-frame border.
- No heavy mouse-hover outline.
- Keyboard focus-visible remains available with a subtle gold outline.

CTA buttons were preserved as CTA buttons. Gold CTA styles remain gold; ghost RFQ buttons now avoid silver hover borders while retaining a restrained button treatment.

## Industries Fixes

### Technical and Documentation Support Hover

The reported `industries.html` support cards are now covered by the shared `a.supportCard` hover/focus rules.

Before:

- The support cards inherited a visible navy/silver outline frame on hover.
- Border color did not adopt the approved subtle gold card hover consistently.

After:

- Hover uses subtle gold border, slight lift, soft shadow and white surface.
- Mouse hover has no heavy outline frame.
- Focus-visible keeps an accessible subtle gold outline.

### Hero-To-Next Spacing

The collapsed `industries.html` hero-to-next-block gap was fixed through shared premium-hero spacing rules.

Before strict audit:

- `industries.html` `.premiumHero` to `.trustStrip`: `0px` gap.

After correction:

- The industries hero-to-next strict audit flag is removed.
- A shared `--rubinox-hero-next-gap-final` spacing floor is applied to premium hero sequences.

## Automated Audit Method

Temporary Playwright audit scripts were created under:

- `D:\Websites\Rubinox\temp`

They were not committed.

Audit output was saved under:

- `D:\Websites\Rubinox\visual-qa\d9c-r3-sitewide-visual-consistency-audit\audit`

The audit visited all 261 sitemap pages and sampled high-risk clickable card/chip/link candidates on every page. It checked computed base and hover styles for:

- border width changes
- silver/gray hover borders
- hover outline frames
- filled gold hover backgrounds
- gold/silver ring-like shadows
- hover layout shift
- horizontal overflow on hover

The same pass also checked:

- major section spacing
- accent-card candidates
- CTA group candidates
- FAQ structure candidates
- footer consistency

## Audit Results

Before D9C-R3:

- Public pages audited: 261
- Hover candidates sampled: 3064
- Hover offenders: 743
- Hover offender reasons:
  - `hover-outline-frame`: 743
  - `silver-hover-border`: 49
  - `filled-gold-hover-background`: 8
- Strict spacing offenders: 1531
- Footer offenders: 0
- FAQ offenders: 0

After D9C-R3:

- Public pages audited: 261
- Hover candidates sampled: 3064
- Hover offenders: 0
- Silver hover border offenders: 0
- Thick/full-frame hover offenders: 0
- Filled gold card/chip hover offenders: 0
- Strict spacing offenders: 22
- Footer offenders: 0
- FAQ offenders: 0

## Spacing Exceptions

The strict spacing audit still flags 22 outer-box spacing cases after correction. These are documented exceptions, not D9C-R3 regressions:

- Homepage locked sections, including the locked hero/RFQ/body-section sequence, use section padding and approved locked spacing. D9C-R3 did not alter locked homepage body section spacing.
- `quotation.html` has full-width stacked section bands where outer boxes touch but internal padding creates the visual separation.
- One industries CTA transition remains below the strict 16px threshold by a small amount, but the owner-reported hero-to-next issue is fixed and the CTA block retains visible internal spacing and card separation.

No further spacing change was made because forcing these locked/section-band cases into the strict box-gap threshold would risk redesigning approved page sections.

## Screenshot Folders

- Before screenshots: `D:\Websites\Rubinox\visual-qa\d9c-r3-sitewide-visual-consistency-audit\before`
- After screenshots: `D:\Websites\Rubinox\visual-qa\d9c-r3-sitewide-visual-consistency-audit\after`
- Hover/focus screenshots: `D:\Websites\Rubinox\visual-qa\d9c-r3-sitewide-visual-consistency-audit\hover-focus`
- Spacing audit folder: `D:\Websites\Rubinox\visual-qa\d9c-r3-sitewide-visual-consistency-audit\spacing`
- Zoom/reflow screenshots: `D:\Websites\Rubinox\visual-qa\d9c-r3-sitewide-visual-consistency-audit\zoom-reflow`
- Audit JSON files: `D:\Websites\Rubinox\visual-qa\d9c-r3-sitewide-visual-consistency-audit\audit`

Artifact counts:

- Before screenshots: 10
- After screenshots: 10
- Hover/focus screenshots: 10
- Zoom/reflow files: 194
- Audit JSON files: 18

## Zoom / Reflow Results

Two zoom methods were recorded:

1. CSS-root zoom diagnostic: 96 checks, 14 diagnostic overflow flags. These flags were caused by CSS `zoom` increasing the reported document width without browser-style reflow.
2. Browser-style viewport reflow simulation: 96 checks, 0 failures.

The browser-style reflow simulation covered:

- 100%, 110%, and 125% zoom equivalents
- Widths: 1366, 1280, 390, 360
- Pages: `industries.html`, `materials/stainless-steel.html`, `product-forms.html`, `locations.html`, `export.html`, `quotation.html`, one blog article, and `contact.html`

Result:

- No hover/focus horizontal overflow detected in the browser-style reflow simulation.
- Mobile widths remained clean in the tested pages.
- Industries spacing remained clean for the reported hero-to-next issue.

## Preservation Confirmation

D9C-R3 did not:

- create D9D
- edit public HTML pages
- change SEO URLs
- change H1 intent
- change titles/meta/canonicals
- change schema meaning
- change sitemap URLs
- change GA4 tracking
- change images or PDFs
- add or delete pages
- redesign header, top bar, market ticker, hero, footer, or homepage locked body sections
- add manufacturing, factory, mill, production, fake certification, fake stock, fake pricing, or delivery-guarantee claims

Rubinox remains documented as Stockist | Supplier | Importer | Exporter | Project Supplier.

## Owner Review Gate

D9C-R3 must be reviewed live before D9D final sitewide design lock is created.

