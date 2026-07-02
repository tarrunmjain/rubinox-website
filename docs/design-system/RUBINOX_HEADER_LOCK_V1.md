# RUBINOX HEADER LOCK V1

## Approval Status

- Status: approved and final.
- Approved by owner after D2A-R3 live homepage review.
- Owner approval note: `PERFECT. FINALISE IT AND DO SITE WIDE AND CREATE DESIGN PACK FOR HEADER FOR FUTURE PAGES.`
- Source prototype: D2A, D2A-R2, and D2A-R3 homepage header workflow.
- Latest approved homepage prototype commit: `af7054f215db03e96ccc9e0fa8c3613c5f80f56c`.
- Sitewide implementation batch: D2B-D2C - Header Design Lock + Sitewide Replication.

## Purpose

This document is the final Rubinox main header design print and implementation fingerprint. Future public pages must use this header exactly unless the owner explicitly approves a new header lock version.

Top Bar Lock V1 remains a separate approved system and is not visually changed by Header Lock V1.

## Implementation Assets

Every public page must include:

```html
<link rel="stylesheet" href="/assets/css/topbar-lock-v1.css">
<link rel="stylesheet" href="/assets/css/header-lock-v1.css">
<script src="/assets/js/topbar-lock-v1.js" defer></script>
```

Canonical header stylesheet:

- `assets/css/header-lock-v1.css`

Canonical top bar assets, unchanged:

- `assets/css/topbar-lock-v1.css`
- `assets/js/topbar-lock-v1.js`

## Header Class

Every public page must use:

```html
<header class="header-lock-v1">
```

Do not use the old homepage prototype class:

```html
home-header-prototype-d2a
```

## Desktop Design Specification

- Full sticky header height, including approved top bar: about `117px`.
- Main header band height: about `81px`.
- Approved top bar height: about `35px`.
- Main header layout: logo on the left, desktop nav on the right.
- Container max width: `1180px`.
- Horizontal container padding: `20px`.
- Main header band min-height: `76px`.
- Main header band padding: `5px 0`.
- Main header gap: `18px`.
- Logo asset: `/logo.png`.
- Logo source dimensions: `360px x 87px`.
- Desktop rendered logo: about `292px x 70px`.
- Logo rendering: `height:auto`, `object-fit:contain`, `image-rendering:auto`.
- Logo crispness rule: `filter:none!important` on both `.brand` and `.brand img`.
- No logo CSS drop-shadow, blur, glow, transform, scale animation, 3D effect, box, or asset swap.

## Alignment Rail

Logo and navigation must use the locked shared rail across all public pages. The rail rule is documented in:

- `docs/design-system/RUBINOX_HEADER_TOPBAR_ALIGNMENT_LOCK_V1.md`

The main header inner wrapper remains:

```css
header.header-lock-v1 > .wrap
```

This wrapper inherits the same locked rail as the top bar: `1180px` max width, `20px` desktop/tablet padding, `14px` mobile padding, centered with `box-sizing:border-box`. Do not create page-specific header padding, different header wrappers, or custom left margins.

## Desktop Navigation

Final desktop navigation order on all pages:

1. `HOME`
2. `COMPANY PROFILE`
3. `PRODUCT PORTFOLIO`
4. `REQUEST A QUOTE`
5. `KNOWLEDGE HUB`
6. `CONTACT`

Desktop nav behavior:

- Full desktop navigation is visible above `1020px`.
- Hamburger is used at `1020px` and below.
- Desktop nav was approved visible at `1366px` and `1280px`.
- Do not add a desktop WhatsApp RFQ button.
- Preserve the existing mobile `WhatsApp Quote` button.
- The logo remains a home link.

Dropdown contents:

- `COMPANY PROFILE`: About Us, Mission & Vision, Industries We Serve, Cities We Serve, Countries We Serve, Registrations & Compliance.
- `PRODUCT PORTFOLIO`: Materials, Product Forms, Grades.
- Do not invent dropdown links.
- `KNOWLEDGE HUB` remains a direct `/blog.html` link.

## Desktop Hover Treatment

Gold color:

- `#d7a84f`

Top-level nav hover/focus:

- Text turns Rubinox gold.
- Item lifts with `translateY(-1px)`.
- Background remains transparent.
- No box, filled pill, underline, border, glow, or extra hover surface.

Dropdown item hover/focus:

- Text turns Rubinox gold.
- Background remains white.
- Border emphasis stays subtle.
- No dropdown item lift.

## Mobile Specification

- Mobile logo at `390px`: about `184px x 44.45px`.
- Mobile breakpoint: `1020px` and below.
- Mobile main header band min-height: `68px`.
- Mobile main header band padding: `8px 0`.
- Mobile menu includes `Home` as the first link.
- Mobile accordions remain for Company Profile and Product Portfolio.
- Mobile `WhatsApp Quote` remains present and unchanged in purpose.
- No text overlap, no horizontal overflow, and no logo stretching are allowed.

## Top Bar Protection

Header Lock V1 must not change Top Bar Lock V1.

Preserve:

- Top bar text: `Stockist | Supplier | Importer | Exporter | Project Supplier`
- Icon order: Call, WhatsApp, Email, Facebook, Instagram, LinkedIn
- Top bar linked social URLs
- LinkedIn two-layer SVG behavior
- Icon-only Rubinox gold hover
- Pointer click/reset behavior
- Top bar desktop and mobile heights

## HTML Pattern

Use the shared `header-lock-v1` class and the approved absolute site links:

```html
<header class="header-lock-v1">
  <div class="topRail topbar-lock-v1">...</div>
  <div class="wrap">
    <div class="nav">
      <a class="brand" href="/" aria-label="Rubinox Home">
        <img width="360" height="87" src="/logo.png" alt="Rubinox Metal and Alloys" decoding="async">
      </a>
      <nav class="navlinks desktopNav" aria-label="Main navigation">
        <a class="navTextLink" href="/">HOME</a>
        ...
      </nav>
      <button type="button" class="menuToggle" id="menuToggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu">...</button>
    </div>
    <div class="mobileMenu" id="mobileMenu">...</div>
  </div>
</header>
```

## Accessibility

- Keep `aria-label="Rubinox Home"` on the logo link.
- Keep `aria-label="Main navigation"` on the desktop nav.
- Keep `aria-haspopup`, `aria-expanded`, and `aria-controls` on dropdown triggers.
- Keep `aria-label="Open menu"`, `aria-expanded`, and `aria-controls="mobileMenu"` on the hamburger button.
- Keep `aria-label="Mobile navigation"` on the mobile nav.
- Keep `aria-label="LinkedIn"` or equivalent accessible naming through the existing top bar LinkedIn link.

## Forbidden Changes

Do not:

- Change the top bar.
- Change the desktop nav order.
- Add desktop WhatsApp RFQ.
- Add a new Knowledge Hub dropdown.
- Add new dropdown links without owner approval.
- Resize, crop, blur, shadow, filter, recolor, or animate the logo.
- Use `home-header-prototype-d2a` as the final implementation class.
- Add manufacturer, factory, mill, production, stock, price, delivery, certification, approval, client, project, testimonial, rating, award, team size, stockyard size, or unverified years-of-experience claims.

## Replication Instructions

- Every current and future public HTML page must use Header Lock V1.
- Every page must load `assets/css/header-lock-v1.css`.
- Every page must keep `assets/css/topbar-lock-v1.css` and `assets/js/topbar-lock-v1.js`.
- Header updates must be made consistently across all public HTML pages.
- If a future owner-approved change creates Header Lock V2, update this file and `docs/design-system/RUBINOX_DESIGN_FINGERPRINT.md` in the same batch.
