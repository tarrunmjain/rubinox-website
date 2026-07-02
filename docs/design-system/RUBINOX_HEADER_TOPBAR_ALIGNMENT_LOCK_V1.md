# RUBINOX HEADER + TOP BAR ALIGNMENT LOCK V1

## Status

- Status: approved correction lock after D2D sitewide alignment batch.
- Source of truth: homepage rail after Top Bar Lock V1 and Header Lock V1 approval.
- Scope: header and top bar horizontal rail only.
- Top bar design: unchanged.
- Header design: unchanged.
- Hero, body sections, cards, CTA blocks, footer, SEO, schema, sitemap and analytics: unchanged.

## Issue Summary

After Header Lock V1 was replicated, some page families visually started the top bar text and logo farther to the right than the homepage. The Mission & Vision, Company Profile, Registrations & Compliance and Knowledge Hub pages were examples.

The issue was a rail/container conflict, not a design issue. Some inline page layout rules set `.wrap` to a `1140px` width. Header Lock V1 set the locked max width and padding, but did not explicitly set `width`, so those page-level `.wrap` widths could still narrow the header and top bar rail.

## Approved Source Of Truth

The homepage rail is the approved visual source of truth.

At desktop widths, the locked header/top bar rail uses:

- Max width: `1180px`
- Desktop padding: `20px` left and right
- Tablet padding: `20px` left and right
- Mobile padding: `14px` left and right
- Box sizing: `border-box`
- Centering: `margin-left:auto` and `margin-right:auto`

## Final Rail CSS Values

Canonical file:

- `assets/css/header-lock-v1.css`

The shared rail is controlled by:

```css
:root{
  --rubinox-header-rail-max:1180px;
  --rubinox-header-rail-padding-desktop:20px;
  --rubinox-header-rail-padding-tablet:20px;
  --rubinox-header-rail-padding-mobile:14px;
}

header.header-lock-v1 .wrap{
  width:100%!important;
  max-width:var(--rubinox-header-rail-max)!important;
  margin-left:auto!important;
  margin-right:auto!important;
  padding-left:var(--rubinox-header-rail-padding-desktop)!important;
  padding-right:var(--rubinox-header-rail-padding-desktop)!important;
  box-sizing:border-box!important;
}
```

Tablet and mobile retain the same approved header behavior:

```css
@media(max-width:1020px){
  header.header-lock-v1 .wrap{
    padding-left:var(--rubinox-header-rail-padding-tablet)!important;
    padding-right:var(--rubinox-header-rail-padding-tablet)!important;
  }
}

@media(max-width:640px){
  header.header-lock-v1 .wrap{
    padding-left:var(--rubinox-header-rail-padding-mobile)!important;
    padding-right:var(--rubinox-header-rail-padding-mobile)!important;
  }
}
```

## Locked Class Pattern

Top bar inner rail:

```css
header .topRail.topbar-lock-v1 > .wrap
```

Header inner rail:

```css
header.header-lock-v1 > .wrap
```

Both rail elements inherit the same locked `header.header-lock-v1 .wrap` rule. Page-level `.wrap`, `.container`, `.site-container`, hero, section or article rules must not change the header or top bar rail.

## Measurement Method

Measurements were captured with Playwright through a temporary local HTTP server so absolute `/assets/...` references rendered like production.

Selectors measured:

- Top bar inner wrapper: `header .topRail.topbar-lock-v1 > .wrap`
- Top bar left text: `header .topRail.topbar-lock-v1 .railNote`
- Header inner wrapper: `header.header-lock-v1 > .wrap`
- Logo: `header.header-lock-v1 .brand img`
- Desktop nav: `header.header-lock-v1 .desktopNav`

Accepted tolerance: `0px` to `2px`.

## Before Measurement Table

| Page | Viewport | Topbar inner X | Topbar text X | Header inner X | Logo X | Nav X | Nav right | Header W | Topbar W |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Home | 1366 | 93 | 113 | 93 | 113 | 453.98 | 1253 | 1180 | 1180 |
| Company Profile | 1366 | 113 | 133 | 113 | 133 | 443 | 1242.02 | 1140 | 1140 |
| Mission and Vision | 1366 | 113 | 133 | 113 | 133 | 443 | 1242.02 | 1140 | 1140 |
| Registrations Compliance | 1366 | 113 | 133 | 113 | 133 | 443 | 1242.02 | 1140 | 1140 |
| Material Family | 1366 | 93 | 113 | 93 | 113 | 453.98 | 1253 | 1180 | 1180 |
| Grade Spec | 1366 | 93 | 113 | 93 | 113 | 453.98 | 1253 | 1180 | 1180 |
| Product Form | 1366 | 93 | 113 | 93 | 113 | 453.98 | 1253 | 1180 | 1180 |
| Industries | 1366 | 93 | 113 | 93 | 113 | 453.98 | 1253 | 1180 | 1180 |
| Knowledge Hub | 1366 | 113 | 133 | 113 | 133 | 443 | 1242.02 | 1140 | 1140 |
| Contact | 1366 | 93 | 113 | 93 | 113 | 453.98 | 1253 | 1180 | 1180 |
| Request Quote | 1366 | 93 | 113 | 93 | 113 | 453.98 | 1253 | 1180 | 1180 |
| Home | 1280 | 50 | 70 | 50 | 70 | 410.98 | 1210 | 1180 | 1180 |
| Mission and Vision | 1280 | 70 | 90 | 70 | 90 | 400 | 1199.02 | 1140 | 1140 |

## After Measurement Table

| Page | Viewport | Topbar inner X | Topbar text X | Header inner X | Logo X | Nav X | Nav right | Header W | Topbar W |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Home | 1366 | 93 | 113 | 93 | 113 | 453.98 | 1253 | 1180 | 1180 |
| Company Profile | 1366 | 93 | 113 | 93 | 113 | 453.98 | 1253 | 1180 | 1180 |
| Mission and Vision | 1366 | 93 | 113 | 93 | 113 | 453.98 | 1253 | 1180 | 1180 |
| Registrations Compliance | 1366 | 93 | 113 | 93 | 113 | 453.98 | 1253 | 1180 | 1180 |
| Material Family | 1366 | 93 | 113 | 93 | 113 | 453.98 | 1253 | 1180 | 1180 |
| Grade Spec | 1366 | 93 | 113 | 93 | 113 | 453.98 | 1253 | 1180 | 1180 |
| Product Form | 1366 | 93 | 113 | 93 | 113 | 453.98 | 1253 | 1180 | 1180 |
| Industries | 1366 | 93 | 113 | 93 | 113 | 453.98 | 1253 | 1180 | 1180 |
| Knowledge Hub | 1366 | 93 | 113 | 93 | 113 | 453.98 | 1253 | 1180 | 1180 |
| Contact | 1366 | 93 | 113 | 93 | 113 | 453.98 | 1253 | 1180 | 1180 |
| Request Quote | 1366 | 93 | 113 | 93 | 113 | 453.98 | 1253 | 1180 | 1180 |
| Home | 1280 | 50 | 70 | 50 | 70 | 410.98 | 1210 | 1180 | 1180 |
| Mission and Vision | 1280 | 50 | 70 | 50 | 70 | 410.98 | 1210 | 1180 | 1180 |
| Home | 390 | 0 | 39.34 | 0 | 14 | 0 | 0 | 390 | 390 |
| Mission and Vision | 390 | 0 | 39.34 | 0 | 14 | 0 | 0 | 390 | 390 |

Result: all tested pages match the homepage rail within `0px` tolerance at 1366px, 1280px and 390px.

## Screenshot Folders

Before screenshots and measurements:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-d2d-alignment-before`

After screenshots and measurements:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-d2d-alignment-after`

## Future Page Rule

All new public pages must use the same locked topbar/header rail classes and must not create page-specific header container padding.

## Forbidden Changes

- No page-specific margin hacks.
- No different header wrappers.
- No different topbar wrappers.
- No custom left padding for individual pages.
- No page-level `.wrap`, `.container`, `.site-container` or hero rule may narrow the locked header/topbar rail.
- No top bar redesign.
- No header redesign.
- No nav label, order, logo size, top bar icon, hover, CTA, hero, content, footer, SEO, schema or analytics change as part of alignment corrections.

## QA Checklist

- Homepage still uses the approved rail.
- Mission & Vision aligns to homepage.
- Company Profile aligns to homepage.
- Top bar text starts from the same rail on tested desktop pages.
- Logo starts from the same rail on tested desktop pages.
- Desktop nav remains visible at 1366px and 1280px.
- Mobile rail remains clean at 390px.
- Mobile menu still starts with `Home`.
- Logo remains crisp with no filter, shadow or blur.
- Topbar center remains empty.
- No desktop WhatsApp RFQ button is added.
- Public HTML keeps the approved GA4 ID and does not reintroduce the old accidental GA4 ID.
