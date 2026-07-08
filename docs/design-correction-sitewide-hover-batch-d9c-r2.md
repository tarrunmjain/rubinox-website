# Rubinox Design Batch D9C-R2 - Sitewide Hover Correction

## Batch Status

- Batch: D9C-R2 - Sitewide Hover Design Correction
- Status: Implemented for owner review
- Source batch: D9C full sitewide design standardization
- Latest base commit before this correction: `b3e8b2711d9d959221d9cc705062db4f1937aa09`
- D9D status: Not started

Owner should review representative live hover states before D9D final sitewide design lock.

## Owner Feedback

The D9C live hover state appeared too strong on several clickable cards. The most visible issue was the Materials We Supply / Stainless Steel card hover, where the card and image area could read as a thick gold frame.

Approved target:

- Subtle RFQ-style card lift.
- Soft premium shadow.
- Light Rubinox gold border/accent feel.
- No thick full gold border.
- No heavy gold frame around image/card areas.
- No filled gold card/chip background.
- No layout shift.

## Implementation Scope

Changed:

- `assets/css/rubinox-sitewide-design-v1.css`

Documentation:

- `docs/design-correction-sitewide-hover-batch-d9c-r2.md`
- `docs/design-sitewide-standardization-batch-d9c.md`
- `docs/design-system/RUBINOX_DESIGN_FINGERPRINT.md`

No HTML changes were required.

## CSS Patterns Changed

New D9C-R2 hover variables:

```css
--rubinox-hover-gold-border: rgba(226, 160, 47, .42);
--rubinox-hover-chip-border: rgba(226, 160, 47, .48);
--rubinox-hover-shadow: 0 18px 38px rgba(7, 16, 31, .12);
--rubinox-hover-chip-shadow: 0 8px 18px rgba(15, 30, 60, .08);
--rubinox-hover-lift: translateY(-2px);
```

Primary clickable card selectors corrected:

- `body.sitewideDesignV1 main a.card`
- `body.sitewideDesignV1 main a.materialSupplyCard`
- `body.sitewideDesignV1 main a.articleCard`
- `body.sitewideDesignV1 main a.formCard`
- `body.sitewideDesignV1 main a.ssFormCard`
- `body.sitewideDesignV1 main a.industryCard`
- `body.sitewideDesignV1 main a.homeIndustryCard`
- `body.sitewideDesignV1 main a.materialLink`
- `body.sitewideDesignV1 main a.industryMini`
- `body.sitewideDesignV1 main a.relItem`
- `body.sitewideDesignV1 main a.gateCard`
- `body.sitewideDesignV1 main a.cityCard`
- `body.sitewideDesignV1 main a.countryCard`
- `body.sitewideDesignV1 main a.exportCard`
- `body.sitewideDesignV1 main a.locationCard`
- `body.sitewideDesignV1 main a.resourceCard`

Primary clickable chip/link selectors corrected:

- `body.sitewideDesignV1 main .linkGrid a`
- `body.sitewideDesignV1 main .locationLinkGrid a`
- `body.sitewideDesignV1 main .tagRow a`
- `body.sitewideDesignV1 main .industryActions a`
- `body.sitewideDesignV1 main a.miniTag`
- `body.sitewideDesignV1 main a.materialTag`
- `body.sitewideDesignV1 main a.cityTag`
- `body.sitewideDesignV1 main a.gradeTag`
- `body.sitewideDesignV1 main a.specTag`
- `body.sitewideDesignV1 main a.standardTag`
- `body.sitewideDesignV1 main a.chip`
- `body.sitewideDesignV1 main a.tag`
- `body.sitewideDesignV1 main a.blogFilter`
- `body.sitewideDesignV1 main a.miniLink`

Static-card cleanup:

- `.articleCard:not(a):hover`
- `.supportCard:not(a):hover`
- `.industryCard:not(a):hover`

Image movement cleanup:

- Hover image scaling is neutralized for affected material, product form, stainless form and article cards.

CTA buttons:

- Approved gold CTA button hover was preserved.

## Before/After Evidence

D-drive screenshot folders:

- Before: `D:\Websites\Rubinox\visual-qa\d9c-r2-hover-correction\before`
- After: `D:\Websites\Rubinox\visual-qa\d9c-r2-hover-correction\after`
- Hover/focus: `D:\Websites\Rubinox\visual-qa\d9c-r2-hover-correction\hover-focus`
- Zoom/reflow: `D:\Websites\Rubinox\visual-qa\d9c-r2-hover-correction\zoom-reflow`
- Audit: `D:\Websites\Rubinox\visual-qa\d9c-r2-hover-correction\audit`

Screenshot counts:

- Before hover screenshots: 15
- After hover screenshots: 15
- Hover/focus screenshots: 15
- Zoom/reflow screenshots: 108

## Pages And Sections Tested

- Homepage RFQ Path card reference.
- Homepage Materials We Supply card.
- `materials/stainless-steel.html` stainless product form card.
- `product-forms.html` product form card.
- `industries.html` technical/action card link.
- `locations.html` city card/link.
- `export.html` country card.
- `blog.html` article card.
- `quotation.html` factor guide link/card.
- `company-profile.html` footer link hover.
- `quotation.html` CTA button hover.

## Hover/Focus Audit Results

Pre-change audit:

- Files checked: 9
- Matches flagged for hover review: 399
- Likely causes: broad hover outline, stronger lift, image zoom, filled chip/card hover states.

Post-change audit:

- After hover checks: 15
- Hover metric failures: 0
- Hover/focus screenshots: 15
- Result: PASS

Confirmed:

- Clickable card/chip hovers use 1px borders.
- Hover states keep white/light surfaces.
- Mouse hover has no card/chip outline frame.
- Focus-visible remains available through a subtle 2px gold outline.
- CTA button hover remains approved.

## Zoom/Reflow Results

Checked hover states at:

- 100%
- 110%
- 125%

Widths checked:

- 1366
- 1280
- 390
- 360

Result:

- Checks: 108
- Failures: 0
- No hover/focus horizontal overflow detected.
- No hover/focus layout shift detected.

## Preservation Confirmation

- D9D final sitewide design lock was not created.
- No website content was rewritten.
- No SEO/meta/canonical/schema/sitemap edits were made.
- GA4 tracking remains unchanged.
- Footer/header/topbar structure was not changed.
- No links, images, PDFs, or public URLs were changed.
- Protected untracked files were not staged or modified.

## Owner Review Gate

Owner should review representative live hover states. If approved, proceed to D9D final sitewide design lock.
