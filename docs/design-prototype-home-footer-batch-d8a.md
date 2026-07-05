# Design Prototype: Homepage Footer - Batch D8A

Status: Prototype implemented for owner review. D8A-R2 horizontal link-row correction implemented.
Scope: Homepage only (`index.html`).
Lock status: Not locked. Do not replicate sitewide until D8B approval.

## Objective

Owner feedback confirmed the existing footer direction was good, especially the left brand/logo/intro/social area, but the footer needed to become more compact and the Quick Links column needed to be easier to scan.

D8A keeps the approved footer character while reducing height, splitting Quick Links into two internal mini groups, and preserving all existing homepage footer destinations and contact details.

## Files Changed

- `index.html`
- `docs/design-prototype-home-footer-batch-d8a.md`

## Homepage Footer Changes

- Added the homepage-only class `homeFooterPrototypeD8A` to the homepage footer.
- Preserved the five main desktop footer blocks:
  - Brand/company intro
  - Quick Links
  - Main Materials
  - Forms & RFQ
  - Contact Details
- Split Quick Links internally into two mini groups:
  - Group 1: Home, About Us, Industries, Product Portfolio, Locations, Export, Blog
  - Group 2: Technical Resources, Quality Documentation, Company Profile, Quotation, Contact, Privacy Policy, Terms & Conditions
- Kept the six brand/contact icons in one row with `flex-wrap: nowrap` on the homepage footer icon group.
- Kept Materials links as a concise six-link list.
- Kept Forms & RFQ links as a concise six-link list.
- Preserved phone, email, address, and business platform icon links.
- Did not change non-home page footers.
- Did not change the top bar, header, market ticker, hero, RFQ path, homepage sections, footer contact details, SEO, schema, sitemap, analytics, images, or PDFs.

## Height Measurements

| Viewport | Before footer height | After footer height | Reduction |
| --- | ---: | ---: | ---: |
| 1366px desktop | 533px | 372px | 30.2% |
| 1280px desktop | 533px | 372px | 30.2% |
| 390px mobile | 1393px | 1023px | 26.6% |
| 360px mobile | 1393px | 1022px | 26.6% |

The footer reduction lands inside the owner requested 25-35% range on the tested desktop and mobile widths.

## Icon Row Result

| Viewport | Brand icon count | Brand icon rows | Result |
| --- | ---: | ---: | --- |
| 1366px desktop | 6 | 1 | Pass |
| 1280px desktop | 6 | 1 | Pass |
| 390px mobile | 6 | 1 | Pass |
| 360px mobile | 6 | 1 | Pass |

## Visual QA Evidence

Before screenshots:

- `D:\Websites\Rubinox\visual-qa\d8a-footer-prototype\before\home-footer-desktop-1366.png`
- `D:\Websites\Rubinox\visual-qa\d8a-footer-prototype\before\home-footer-desktop-1280.png`
- `D:\Websites\Rubinox\visual-qa\d8a-footer-prototype\before\home-footer-mobile-390.png`
- `D:\Websites\Rubinox\visual-qa\d8a-footer-prototype\before\home-footer-mobile-360.png`

After screenshots:

- `D:\Websites\Rubinox\visual-qa\d8a-footer-prototype\after\home-footer-desktop-1366.png`
- `D:\Websites\Rubinox\visual-qa\d8a-footer-prototype\after\home-footer-desktop-1280.png`
- `D:\Websites\Rubinox\visual-qa\d8a-footer-prototype\after\home-footer-mobile-390.png`
- `D:\Websites\Rubinox\visual-qa\d8a-footer-prototype\after\home-footer-mobile-360.png`

Hover/focus screenshots:

- `D:\Websites\Rubinox\visual-qa\d8a-footer-prototype\hover-focus\quick-link-technical-resources.png`
- `D:\Websites\Rubinox\visual-qa\d8a-footer-prototype\hover-focus\material-stainless-steel.png`
- `D:\Websites\Rubinox\visual-qa\d8a-footer-prototype\hover-focus\forms-rfq-quotation.png`
- `D:\Websites\Rubinox\visual-qa\d8a-footer-prototype\hover-focus\brand-icon-linkedin.png`
- `D:\Websites\Rubinox\visual-qa\d8a-footer-prototype\hover-focus\mobile-focus-quotation.png`

Zoom/reflow screenshots at effective 125% zoom:

- `D:\Websites\Rubinox\visual-qa\d8a-footer-prototype\zoom-reflow\home-footer-desktop-1366-zoom-125.png`
- `D:\Websites\Rubinox\visual-qa\d8a-footer-prototype\zoom-reflow\home-footer-desktop-1280-zoom-125.png`
- `D:\Websites\Rubinox\visual-qa\d8a-footer-prototype\zoom-reflow\home-footer-mobile-390-zoom-125.png`
- `D:\Websites\Rubinox\visual-qa\d8a-footer-prototype\zoom-reflow\home-footer-mobile-360-zoom-125.png`

Non-home footer check screenshots:

- `D:\Websites\Rubinox\visual-qa\d8a-footer-prototype\non-home-check\company-profile-footer-desktop-1366.png`
- `D:\Websites\Rubinox\visual-qa\d8a-footer-prototype\non-home-check\company-profile-footer-mobile-390.png`
- `D:\Websites\Rubinox\visual-qa\d8a-footer-prototype\non-home-check\stainless-steel-footer-desktop-1366.png`
- `D:\Websites\Rubinox\visual-qa\d8a-footer-prototype\non-home-check\stainless-steel-footer-mobile-390.png`

## Zoom And Reflow Notes

- Footer content was checked at 100%, 110%, and effective 125% zoom for 1366px, 1280px, 390px, and 360px widths.
- Homepage footer elements produced no internal footer overflow in the checked states.
- Brand icon row remained one row in the checked states.
- A page-level horizontal scroll signal appeared at effective 125% desktop width from outside the homepage footer. Locked top bar/header areas were not changed in D8A.

## Non-Home Footer Check

Checked pages:

- `/company-profile.html`
- `/materials/stainless-steel.html`

Result:

- Non-home footers retain `class="siteFooter"`.
- The homepage-only `homeFooterPrototypeD8A` class is absent on checked non-home pages.
- No sitewide footer replication was performed.

## D8A-R2 horizontal footer link-row prototype

Owner feedback after the live D8A review confirmed the brand block, contact details, and icon direction should remain, but the middle footer links still felt too column-heavy. D8A-R2 keeps the homepage-only footer prototype and converts the middle area into a horizontal link bank.

Scope:

- Homepage only (`index.html`).
- No Footer Lock V1 was created.
- No sitewide footer replication was performed.
- No non-home page footer was edited.
- No contact detail, SEO, schema, sitemap, analytics, image, PDF, top bar, header, market ticker, hero, RFQ path, homepage section, or footer brand-block redesign was performed.

Desktop layout:

- Left: existing brand block with logo, current short description, and six contact/social icons.
- Center: `footerLinkBank` with three stacked horizontal rows.
- Right: existing Contact Details block and platform icons.

Horizontal row contents:

- Quick Links: Home, About Us, Industries, Product Portfolio, Locations, Export, Blog, Technical Resources, Quality Documentation, Company Profile, Quotation, Contact, Privacy Policy, Terms & Conditions.
- Main Materials: Stainless Steel, Duplex & Super Duplex, Nickel Alloys, Titanium, SMO 254, Special Engineering Alloys.
- Forms & RFQ: Pipes, Tubes, Sheets, Plates, Flanges, Request Quotation.

Interaction notes:

- Link rows use inline wrapping and subtle vertical separators.
- Hover changes link color to Rubinox gold without heavy backgrounds or layout shift.
- Keyboard focus uses a visible gold outline.
- The six brand/contact icons remain in one row on checked desktop and mobile widths.

Copyright correction:

- Homepage footer changed from `© 2026 Rubinox Metal and Alloys. All rights reserved.` to `© Rubinox Metal and Alloys. All rights reserved.`
- Checked non-home footers were not changed and still retain their existing copyright text.

### D8A-R2 measurements

| Viewport | D8A footer height before R2 | D8A-R2 footer height | R2 reduction |
| --- | ---: | ---: | ---: |
| 1366px desktop | 372px | 319px | 14.2% |
| 1280px desktop | 372px | 319px | 14.2% |
| 390px mobile | 1023px | 771px | 24.6% |
| 360px mobile | 1022px | 770px | 24.7% |

### D8A-R2 icon row result

| Viewport | Brand icon count | Brand icon rows | Result |
| --- | ---: | ---: | --- |
| 1366px desktop | 6 | 1 | Pass |
| 1280px desktop | 6 | 1 | Pass |
| 390px mobile | 6 | 1 | Pass |
| 360px mobile | 6 | 1 | Pass |

### D8A-R2 mobile and zoom/reflow results

- 100%, 110%, and effective 125% zoom/reflow checks passed for 1366px, 1280px, 390px, and 360px test widths.
- No footer horizontal overflow was detected in the checked states.
- Brand icon row stayed in one row in all checked states.
- At the narrowest effective 125% mobile check, the copyright line wrapped safely without creating horizontal scroll.

### D8A-R2 visual QA evidence

Before screenshots:

- `D:\Websites\Rubinox\visual-qa\d8a-r2-footer-horizontal\before\home-footer-desktop-1366.png`
- `D:\Websites\Rubinox\visual-qa\d8a-r2-footer-horizontal\before\home-footer-desktop-1280.png`
- `D:\Websites\Rubinox\visual-qa\d8a-r2-footer-horizontal\before\home-footer-mobile-390.png`
- `D:\Websites\Rubinox\visual-qa\d8a-r2-footer-horizontal\before\home-footer-mobile-360.png`

After screenshots:

- `D:\Websites\Rubinox\visual-qa\d8a-r2-footer-horizontal\after\home-footer-desktop-1366.png`
- `D:\Websites\Rubinox\visual-qa\d8a-r2-footer-horizontal\after\home-footer-desktop-1280.png`
- `D:\Websites\Rubinox\visual-qa\d8a-r2-footer-horizontal\after\home-footer-tablet-768.png`
- `D:\Websites\Rubinox\visual-qa\d8a-r2-footer-horizontal\after\home-footer-mobile-390.png`
- `D:\Websites\Rubinox\visual-qa\d8a-r2-footer-horizontal\after\home-footer-mobile-360.png`

Hover/focus screenshots:

- `D:\Websites\Rubinox\visual-qa\d8a-r2-footer-horizontal\hover-focus\home-footer-quick-hover.png`
- `D:\Websites\Rubinox\visual-qa\d8a-r2-footer-horizontal\hover-focus\home-footer-materials-focus.png`
- `D:\Websites\Rubinox\visual-qa\d8a-r2-footer-horizontal\hover-focus\home-footer-forms-hover.png`
- `D:\Websites\Rubinox\visual-qa\d8a-r2-footer-horizontal\hover-focus\home-footer-social-hover.png`

Zoom/reflow screenshots:

- `D:\Websites\Rubinox\visual-qa\d8a-r2-footer-horizontal\zoom-reflow\home-footer-desktop-1366-zoom-1.png`
- `D:\Websites\Rubinox\visual-qa\d8a-r2-footer-horizontal\zoom-reflow\home-footer-desktop-1366-zoom-1p1.png`
- `D:\Websites\Rubinox\visual-qa\d8a-r2-footer-horizontal\zoom-reflow\home-footer-desktop-1366-zoom-1p25.png`
- `D:\Websites\Rubinox\visual-qa\d8a-r2-footer-horizontal\zoom-reflow\home-footer-desktop-1280-zoom-1.png`
- `D:\Websites\Rubinox\visual-qa\d8a-r2-footer-horizontal\zoom-reflow\home-footer-desktop-1280-zoom-1p1.png`
- `D:\Websites\Rubinox\visual-qa\d8a-r2-footer-horizontal\zoom-reflow\home-footer-desktop-1280-zoom-1p25.png`
- `D:\Websites\Rubinox\visual-qa\d8a-r2-footer-horizontal\zoom-reflow\home-footer-mobile-390-zoom-1.png`
- `D:\Websites\Rubinox\visual-qa\d8a-r2-footer-horizontal\zoom-reflow\home-footer-mobile-390-zoom-1p1.png`
- `D:\Websites\Rubinox\visual-qa\d8a-r2-footer-horizontal\zoom-reflow\home-footer-mobile-390-zoom-1p25.png`
- `D:\Websites\Rubinox\visual-qa\d8a-r2-footer-horizontal\zoom-reflow\home-footer-mobile-360-zoom-1.png`
- `D:\Websites\Rubinox\visual-qa\d8a-r2-footer-horizontal\zoom-reflow\home-footer-mobile-360-zoom-1p1.png`
- `D:\Websites\Rubinox\visual-qa\d8a-r2-footer-horizontal\zoom-reflow\home-footer-mobile-360-zoom-1p25.png`

Non-home footer check screenshots:

- `D:\Websites\Rubinox\visual-qa\d8a-r2-footer-horizontal\nonhome-check\company-profile-desktop.png`
- `D:\Websites\Rubinox\visual-qa\d8a-r2-footer-horizontal\nonhome-check\company-profile-mobile.png`
- `D:\Websites\Rubinox\visual-qa\d8a-r2-footer-horizontal\nonhome-check\material-desktop.png`
- `D:\Websites\Rubinox\visual-qa\d8a-r2-footer-horizontal\nonhome-check\material-mobile.png`

Non-home check result:

- `/company-profile.html` and `/materials/stainless-steel.html` were checked at desktop and mobile widths.
- The checked non-home footers do not have the homepage `homeFooterPrototypeD8A` class.
- The checked non-home footers do not have the D8A-R2 `footerLinkBank` markup.
- No sitewide footer replication was performed.

## QA

Baseline QA before edits passed:

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

Final QA after edits passed:

- `npm run qa:sitemap` - 261 sitemap URLs, 261 local HTML pages, 0 missing, 0 duplicates
- `npm run qa:crawl` - passed
- `npm run qa:schema` - passed
- `npm run qa:accessibility` - passed
- `npm run test:navigation` - passed
- `npm run qa:html` - passed
- `npm run qa:links` - 400 links scanned successfully
- `npm run qa:pa11y` - 9/9 URLs passed; quotation page remains within existing threshold
- `npm run qa:forbidden-claims` - 379 files scanned, 655 matches flagged for review, no files rewritten
- `git diff --check` - passed

The same final QA suite was rerun after the D8A-R2 horizontal footer link-row correction. Results remained passing: sitemap 261/261, HTML 261 pages with 0 invalid, schema 866 JSON-LD blocks with 0 invalid, accessibility 0 violations on checked pages, navigation passed, crawl and links scanned 400 links, pa11y passed 9/9 URLs within threshold, forbidden-claims rewrote no files, and `git diff --check` passed with only line-ending normalization warnings.

## Next Step

Owner should review the live homepage footer. If approved, D8B should create Footer Design Lock / Design Fingerprint and then replicate the locked footer sitewide only after approval.
