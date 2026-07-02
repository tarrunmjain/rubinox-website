# RUBINOX TOP BAR LOCK V1

## Approval Status

- Status: approved and final.
- Approved by owner after live homepage review.
- Owner approval note: `CHECKED AND PASS.`
- Source prototype: D1A, D1A-R2, and D1A-R3 homepage top bar workflow.
- Latest approved prototype commit: `aaad5fc4b50426855aba4e8d63339d8ee7424bfb`.
- Sitewide implementation batch: D1B-D1C - Top Bar Design Lock + Sitewide Replication.

## Purpose

This document is the final Rubinox top bar design print and implementation fingerprint. Future public pages must use this top bar exactly. Codex, future agents, and maintainers must not invent another top bar style, alternate hover pattern, alternate text treatment, or alternate icon set without owner approval.

## Alignment Rail

Top bar inner content must use the locked shared rail across all public pages. The rail rule is documented in:

- `docs/design-system/RUBINOX_HEADER_TOPBAR_ALIGNMENT_LOCK_V1.md`

The top bar inner wrapper remains:

```css
header .topRail.topbar-lock-v1 > .wrap
```

This wrapper inherits the same locked rail as the main header: `1180px` max width, `20px` desktop/tablet padding, `14px` mobile padding, centered with `box-sizing:border-box`. Do not create page-specific top bar padding or a different top bar wrapper.

## Desktop Design Specification

- Rendered desktop height: `35px` at 1366px and 1280px viewport widths.
- Top bar selector: `header .topRail.topbar-lock-v1`.
- Layout structure: left text, empty center, right icon cluster.
- Left text: `Stockist | Supplier | Importer | Exporter | Project Supplier`.
- Center area: empty.
- Font family: `Arial, Helvetica, sans-serif`.
- Font size: `12px`.
- Font weight: `700`.
- Line height: measured `16.2px`.
- Letter spacing: `0` in CSS / `normal` computed.
- Silver text color: `#d8e0ec`.
- Text shadow: `0 1px 0 rgba(255,255,255,.24), 0 2px 8px rgba(0,0,0,.28)`.
- Background CSS: `linear-gradient(90deg,#050b16,#07101f 52%,#102554)`.
- Bottom border: `1px solid rgba(226,160,47,.2)`.
- Wrap min-height: `34px`.
- Desktop wrap padding: `0px` top and `0px` bottom.
- Desktop wrap gap: `16px`.
- Icon container gap: `8px`.
- Icon hit area: `30px` by `30px`.
- Icon glyph size: `18px` by `18px`.
- Base icon color: `#d8e0ec`.
- Call default color: `#58d68d`.
- Email default color: `#8ec5ff`.
- LinkedIn default logo shape: `#0a66c2`.
- LinkedIn letters: `#fff`.
- Hover gold: `#d7a84f`.
- Hover lift: `translateY(-2px)`.
- Transition: `color .18s ease, transform .18s ease, filter .18s ease`.
- Keyboard focus-visible: uses the same icon-only gold/lift treatment and no extra box.
- Click reset: pointer-clicked icons receive `is-click-reset`, blur after activation, reset to default visual state, and re-enable hover after `pointerleave`.

## Mobile Design Specification

- Rendered mobile height: `69px` at 390px and 360px viewport widths.
- Mobile wrap padding: `8px` top and `8px` bottom.
- Mobile wrap gap: `6px`.
- Mobile visible elements: left text and the six approved utility icons.
- Mobile hidden elements: none inside the top bar.
- Mobile text font size: `11.5px` at 760px and below.
- Mobile text line-height: measured `16.1px`.
- Mobile icon hit area: `30px` by `30px`.
- Mobile icon gap: `6px`.
- Mobile layout: compact stacked structure with text above centered icons.
- No wrapping/clutter rule: do not add new text, chips, badges, marquee content, or extra icons.

## Background

Use this exact gradient:

```css
background:linear-gradient(90deg,#050b16,#07101f 52%,#102554)!important;
```

Do not replace it with flat navy. Do not introduce a heavier gradient. Do not make the top bar taller.

## Font And Text Treatment

The text treatment is plain premium silver with subtle lift:

```css
color:#d8e0ec!important;
font-family:Arial,Helvetica,sans-serif!important;
font-size:12px!important;
font-weight:700!important;
line-height:1.35!important;
letter-spacing:0!important;
text-shadow:0 1px 0 rgba(255,255,255,.24),0 2px 8px rgba(0,0,0,.28)!important;
```

Explicit rules:

- No gradient-clipped text.
- No stripe or metallic line effect.
- No chip, badge, box, border, or background behind the text.
- Use `Stockist`, never `Stockiest`.

## Icon Rules

Allowed icon order:

1. Call
2. WhatsApp
3. Email
4. Facebook
5. Instagram
6. LinkedIn

Rules:

- Icons remain plain without boxes in normal state.
- Icons remain plain without boxes on hover.
- Hover turns the icon itself gold and lifts it by `translateY(-2px)`.
- No square box, rounded-square hover box, gold background box, border box, outline box, underline, gold line, large glow, or pseudo-element box is allowed.
- Image-based brand icons use the shared gold filter only on hover/focus-visible.
- Keyboard focus-visible must remain available through icon-only gold/lift behavior.
- Pointer click must not leave the icon stuck in the hover/focus state after returning to the page.
- The `is-click-reset` class suppresses hover/focus gold/lift until the pointer leaves.

LinkedIn special rule:

- LinkedIn must use the two-layer inline SVG in the top bar.
- Default logo shape remains LinkedIn blue: `#0a66c2`.
- On hover/focus-visible, only the LinkedIn logo shape changes to Rubinox gold: `#d7a84f`.
- The LinkedIn `in` letters remain white: `#fff`.
- No extra outer LinkedIn box, border, background, outline, or shadow is allowed.

## Allowed Content

Only this content is allowed:

- Left text: `Stockist | Supplier | Importer | Exporter | Project Supplier`
- Empty center area
- Right icon links: Call, WhatsApp, Email, Facebook, Instagram, LinkedIn

## Forbidden Content

Do not add:

- GST, Udyam, or IEC numbers
- Raw certificate details
- Badges, chips, pills, tickers, or marquees
- PAN India text
- Export RFQ text
- Price, stock, or delivery promises
- Manufacturer, factory, mill, production, manufacturing unit, `we manufacture`, or similar wording
- Fake certification or approval claims
- Testimonials, reviews, ratings, client names, project names, awards, stockyard size, team size, or unverified years of experience

## HTML Pattern

Every public page must use this class and link pattern:

```html
<div class="topRail topbar-lock-v1">
  <div class="wrap">
    <span class="railNote">Stockist | Supplier | Importer | Exporter | Project Supplier</span>
    <div class="railLinks utilityIcons" role="group" aria-label="Contact and social links">
      <a class="utilityIcon functionIcon" href="tel:+919363193755" aria-label="Call Rubinox" title="Call Rubinox">...</a>
      <a class="utilityIcon brandUtility" href="https://wa.me/919363193755" target="_blank" rel="noopener noreferrer" aria-label="Contact Rubinox on WhatsApp" title="WhatsApp">...</a>
      <a class="utilityIcon functionIcon" href="mailto:tarun@rubinoxmetal.com" aria-label="Email Rubinox" title="Email Rubinox">...</a>
      <a class="utilityIcon brandUtility socialUtility" href="https://www.facebook.com/people/Rubinox-Metal-And-Alloys/61590518053054/" target="_blank" rel="noopener noreferrer" aria-label="Follow Rubinox on Facebook" title="Facebook">...</a>
      <a class="utilityIcon brandUtility socialUtility" href="https://www.instagram.com/rubinox_metal/" target="_blank" rel="noopener noreferrer" aria-label="Follow Rubinox on Instagram" title="Instagram">...</a>
      <a class="utilityIcon brandUtility socialUtility linkedInUtility" href="https://www.linkedin.com/company/rubinox-metal-and-alloys" target="_blank" rel="noopener noreferrer" aria-label="Follow Rubinox on LinkedIn" title="LinkedIn">...</a>
    </div>
  </div>
</div>
```

Every public page must include:

```html
<link rel="stylesheet" href="/assets/css/topbar-lock-v1.css">
<script src="/assets/js/topbar-lock-v1.js" defer></script>
```

## CSS Pattern

The canonical CSS lives in:

- `assets/css/topbar-lock-v1.css`

Core selectors:

```css
header .topRail.topbar-lock-v1
header .topRail.topbar-lock-v1 .railNote
header .topRail.topbar-lock-v1 .utilityIcon:not(.is-click-reset):hover
header .topRail.topbar-lock-v1 .utilityIcon:not(.is-click-reset):focus-visible
header .topRail.topbar-lock-v1 .utilityIcon.is-click-reset
header .topRail.topbar-lock-v1 .brandUtility:not(.is-click-reset):hover img
header .topRail.topbar-lock-v1 .linkedInUtility:not(.is-click-reset):hover .linkedInLogoShape
```

Do not edit these selectors casually. If a future change is owner-approved, update this lock document and the design fingerprint in the same batch.

## JS Pattern

The canonical helper lives in:

- `assets/js/topbar-lock-v1.js`

Purpose:

- Scope only to `.topbar-lock-v1 .utilityIcon`.
- Add `is-click-reset` after mouse, pen, or touch activation.
- Blur the clicked link after activation.
- Suppress sticky hover/focus visuals while the pointer remains over the clicked icon.
- Remove `is-click-reset` on `pointerleave`.
- Blur an active reset link on `window.focus` and `visibilitychange`.

Keyboard accessibility note:

- Keyboard activation is not treated as pointer activation.
- Keyboard users still receive the focus-visible icon-only gold/lift state.

## Replication Instructions

- Every new public page must include this top bar.
- Do not create a variant.
- Do not change colors, heights, links, icon order, or icon behavior without owner approval.
- Use `topbar-lock-v1`, `assets/css/topbar-lock-v1.css`, and `assets/js/topbar-lock-v1.js`.
- Keep the center area empty.
- Keep the LinkedIn top bar icon as the inline two-layer SVG.
- Do not reuse the old homepage prototype class as the implementation class.

## QA Checklist

Run these checks before committing any future top bar change:

- HTML validation.
- Schema validation.
- Link crawl.
- Accessibility audit.
- Navigation test.
- Pa11y.
- Forbidden claims scan.
- Visual screenshots at 1366, 1280, 768, 390, and 360 widths.
- Icon hover check for Call, WhatsApp, Email, Facebook, Instagram, and LinkedIn.
- Icon click/reset check for Call, WhatsApp, Email, Facebook, Instagram, and LinkedIn.
- LinkedIn white `in` check.
- Non-home page comparison against homepage.
- Confirm no `Stockiest` typo.
- Confirm no GST, Udyam, or IEC content in the top bar.
- Confirm no old hover box/background/border/outline/pseudo-element effect is active.

## Screenshot References

Sitewide screenshot folder:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-topbar-lock-v1-sitewide`

Hover/click screenshot folder:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-topbar-lock-v1-hover-click`

Representative pages captured in this batch:

- Homepage at 1366, 1280, 768, 390, and 360.
- `company-profile.html` at 1366 and 390.
- `registrations-compliance.html` at 1366 and 390.
- `materials/stainless-steel.html` at 1366 and 390.
- `materials/ss-304-supplier-india.html` at 1366 and 390.
- `product-forms.html` at 1366 and 390.
- `industries.html` at 1366 and 390.
- `locations/mumbai.html` at 1366 and 390.
- `blog.html` at 1366 and 390.
- `contact.html` at 1366 and 390.
- `quotation.html` at 1366 and 390.
