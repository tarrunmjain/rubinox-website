# RUBINOX DESIGN FINGERPRINT

This file records approved final design fingerprints for Rubinox Metal and Alloys. Future pages and future design batches must follow these locks unless the owner explicitly approves a new version.

## Top Bar — LOCK V1

Status: approved and final.

Lock document:

- `docs/design-system/RUBINOX_TOPBAR_LOCK_V1.md`

Implementation assets:

- `assets/css/topbar-lock-v1.css`
- `assets/js/topbar-lock-v1.js`

Exact content pattern:

- Left text: `Stockist | Supplier | Importer | Exporter | Project Supplier`
- Center area: empty
- Right icons: Call, WhatsApp, Email, Facebook, Instagram, LinkedIn

Exact visual pattern:

- Dark blue to light blue gradient: `linear-gradient(90deg,#050b16,#07101f 52%,#102554)`
- Plain premium silver text: `#d8e0ec`
- Subtle text lift through soft text-shadow only
- Plain icons with no normal-state boxes
- Icon-only Rubinox gold hover: `#d7a84f`
- Hover lift: `translateY(-2px)`
- LinkedIn top bar icon uses inline two-layer SVG
- LinkedIn hover changes only the logo shape to gold while the `in` letters remain white
- Pointer click/reset behavior is required on every page

Future page instruction:

- Every new public page must include `topbar-lock-v1`.
- Every new public page must load `assets/css/topbar-lock-v1.css`.
- Every new public page must load `assets/js/topbar-lock-v1.js`.
- Do not create a top bar variant.
- Do not reuse the old D1A homepage prototype class as the implementation class.

Forbidden changes:

- Do not add center text, chips, badges, GST/Udyam/IEC numbers, PAN India text, Export RFQ text, or marquee content.
- Do not add icon boxes, hover boxes, border boxes, outline boxes, underline effects, gold lines, or pseudo-element boxes.
- Do not change the icon order.
- Do not change colors, heights, links, or hover behavior without owner approval.
- Do not add manufacturer, factory, mill, production, stock, price, delivery, certification, approval, client, project, testimonial, rating, award, team size, stockyard size, or unverified years-of-experience claims.

Latest approved prototype commit:

- `aaad5fc4b50426855aba4e8d63339d8ee7424bfb`

Sitewide implementation commit:

- Pending until this D1B-D1C batch commit is created; final response will report the commit hash.

## Header - LOCK V1

Status: approved and final.

Lock document:

- `docs/design-system/RUBINOX_HEADER_LOCK_V1.md`

Implementation asset:

- `assets/css/header-lock-v1.css`

Required page assets:

- `assets/css/topbar-lock-v1.css`
- `assets/css/header-lock-v1.css`
- `assets/js/topbar-lock-v1.js`

Implementation class:

- `header-lock-v1`

Do not reuse:

- `home-header-prototype-d2a`

Exact desktop nav order:

1. `HOME`
2. `COMPANY PROFILE`
3. `PRODUCT PORTFOLIO`
4. `REQUEST A QUOTE`
5. `KNOWLEDGE HUB`
6. `CONTACT`

Exact visual pattern:

- Desktop full header, including approved top bar: about `117px`
- Main header band: about `81px`
- Approved top bar: about `35px`
- Desktop logo render: about `292px x 70px`
- Mobile logo render at 390px: about `184px x 44.45px`
- Logo uses `/logo.png` at source dimensions `360px x 87px`
- Logo must remain crisp with `filter:none!important`
- No logo blur, drop-shadow, glow, 3D effect, transform, animation, recolor, crop, or asset swap
- Desktop nav visible above `1020px`
- Hamburger at `1020px` and below
- Desktop nav hover turns text Rubinox gold `#d7a84f` and lifts by `translateY(-1px)`
- Desktop nav hover background stays transparent
- Dropdown item hover turns text Rubinox gold with subtle border emphasis and white background

Required behavior:

- Desktop nav remains visible at `1366px` and `1280px`.
- Mobile menu includes `Home` at the top.
- Existing Company Profile and Product Portfolio dropdown links are preserved.
- Existing mobile `WhatsApp Quote` is preserved.
- Desktop WhatsApp RFQ button is not allowed in Header Lock V1.
- Top Bar Lock V1 remains visually and behaviorally unchanged.

Future page instruction:

- Every new public page must include `header-lock-v1`.
- Every new public page must load `assets/css/header-lock-v1.css`.
- Every new public page must preserve `topbar-lock-v1`, `assets/css/topbar-lock-v1.css`, and `assets/js/topbar-lock-v1.js`.
- Do not create a header variant without owner approval.

Forbidden changes:

- Do not change the nav order, logo size, logo rendering rules, breakpoint, dropdown contents, or mobile menu composition without owner approval.
- Do not add desktop WhatsApp RFQ.
- Do not add a Knowledge Hub dropdown.
- Do not add manufacturer, factory, mill, production, stock, price, delivery, certification, approval, client, project, testimonial, rating, award, team size, stockyard size, or unverified years-of-experience claims.

Latest approved homepage prototype commit:

- `af7054f215db03e96ccc9e0fa8c3613c5f80f56c`

Sitewide implementation commit:

- Pending until this D2B-D2C batch commit is created; final response will report the commit hash.

## Header + Top Bar Alignment Rail - LOCK V1

Status: approved and final.

Lock document:

- `docs/design-system/RUBINOX_HEADER_TOPBAR_ALIGNMENT_LOCK_V1.md`

Implementation asset:

- `assets/css/header-lock-v1.css`

Source:

- D2D sitewide header/topbar alignment correction.

Exact rail pattern:

- Homepage rail is the source of truth.
- Max width: `1180px`.
- Desktop padding: `20px` left and right.
- Tablet padding: `20px` left and right.
- Mobile padding: `14px` left and right.
- Width rule: `width:100%!important`.
- Centering: `margin-left:auto` and `margin-right:auto`.
- Box sizing: `border-box`.

Required wrappers:

- Top bar inner rail: `header .topRail.topbar-lock-v1 > .wrap`
- Header inner rail: `header.header-lock-v1 > .wrap`

Future page instruction:

- Every new public page must use the same locked topbar/header rail classes.
- Do not create page-specific header or top bar container padding.
- Do not create custom header/topbar margins for individual pages.
- Page layout `.wrap`, `.container`, hero, section or article rules must not narrow the locked header/topbar rail.

Forbidden changes:

- No page-specific margin hacks.
- No different header wrappers.
- No different topbar wrappers.
- No custom left padding for individual pages.
- No top bar redesign.
- No header redesign.

## Homepage Market Ticker - LOCK V1

Status: approved and final.

Lock document:

- `docs/design-system/RUBINOX_MARKET_TICKER_LOCK_V1.md`

Source:

- D3A homepage market ticker compact prototype.

Approved prototype commit:

- `5e21d2e2bbe17674e0ebbf797335d00e39954c83`

Scope:

- Homepage only.
- No sitewide replication is required.
- Do not add the market ticker to non-home pages unless the owner separately approves it.

Exact visual pattern:

- Premium dark navy Market Watch section below the locked header.
- Background: `linear-gradient(90deg,#050b16,#07101f 58%,#102554)`.
- Desktop structure: Market Watch label, TradingView ticker values, compact context block.
- Desktop height target: about `82px`.
- Do not exceed about `100px` at `1366px` or `1280px` without owner approval and documentation.
- Do not return to the old pre-D3A height of about `139.56px`.
- Mobile/tablet layout may stack for readability and must not create horizontal overflow.

Exact content pattern:

- Label title: `Market Watch`.
- Label subtitle: `RFQ planning context`.
- Context title: `Context only, not a quotation.`
- Context body: `Indicative signals only - not live prices, stock confirmation or a quote. Final quote depends on grade, form, size, quantity, documents, origin and logistics.`
- The live HTML uses `&mdash;` between "only" and "not live prices".

Required safety meaning:

- Ticker values are indicative reference signals only.
- Ticker values are not live prices.
- Ticker values are not stock confirmation.
- Ticker values are not a formal quotation.
- Final quote depends on grade, form, size, quantity, documents, origin and logistics.

Future homepage instruction:

- Preserve the compact height and short disclaimer.
- Preserve the current TradingView ticker tape structure and approved symbol list unless the owner approves a change.
- Do not add long copy, badges, chips, or extra ticker items that make the section tall again.
- Do not style the ticker as a live pricing board.
- Do not convert market signals into quotation, stock, or price promises.

Forbidden changes:

- No live price promises.
- No confirmed stock claims.
- No quotation guarantees.
- No buy-now pricing.
- No fake stock status.
- No manufacturer, factory, mill, production, manufacturing unit, or `we manufacture` wording.
- No certification or approval claims.
- No sitewide ticker replication without owner approval.

## Homepage Hero - LOCK V1

Status: approved and final.

Lock document:

- `docs/design-system/RUBINOX_HOME_HERO_LOCK_V1.md`

Source:

- D4A homepage-only hero prototype.

Approved prototype commit:

- `b05495996cb550d192dccfb1d411c9529cb69798`

Deployment repair commit:

- `76f00146545d3e2d7e2e10cdcc842dc7b381808a`

Pages run that made the approved hero live:

- `28622840146`

Scope:

- Homepage only.
- No sitewide hero replication was performed.
- Do not add this homepage hero to non-home pages unless the owner separately approves a sitewide or page-family hero workflow.

Exact layout summary:

- Compact dark image-backed homepage hero below Market Ticker Lock V1.
- Ticker-to-H1 gap: `32px` at 1366px and 1280px.
- Desktop hero height: about `669.31px` at 1366px and 1280px.
- Mobile hero height: about `1411.67px` at 390px and `1496.05px` at 360px.
- Desktop grid: left content column and right image/CTA column.
- H1 color: premium silver `#e3e7ed`.
- Hero paragraph color: `rgba(255,255,255,.9)`.
- Hero image remains `/assets/hero-metal.webp`.
- Right-side detail/contact card is removed.

Exact chip rules:

- Only three hero chips are allowed:
  - `Grade & Form Review`
  - `MTC / PMI Review`
  - `PAN India RFQ Support`
- Do not reintroduce the duplicate `Stockist | Supplier | Importer | Exporter | Project Supplier` chip.

Exact CTA rules:

- Only three hero CTAs are allowed:
  - `WhatsApp Us`
  - `Email Us`
  - `Call Us`
- All three CTAs use the Rubinox gold CTA system.
- Desktop 100% layout keeps the three CTAs in one row below the image.
- At 110% and 125% zoom, CTAs may wrap if needed, but text must remain inside each button.

Zoom/reflow no-overflow rule:

- At 100%, 110%, and 125% browser zoom, hero H1 text, paragraph text, chips, CTA buttons, white info boxes, and hero content containers must not spill outside their boxes or columns.
- Future homepage hero edits must run zoom/reflow checks before commit.
- Use `min-width:0`, flexible widths, safe wrapping, sensible line-height, and scoped overflow-prevention rules when needed.

Future homepage instruction:

- Preserve the compact 32px gap.
- Preserve the silver H1.
- Preserve the white paragraph.
- Preserve the three-chip system.
- Preserve the gold CTAs below the right image.
- Preserve the three white info boxes: `Mumbai`, `PAN India`, and `All Forms`.
- Preserve the removed right detail card.
- Preserve the homepage-only scope.

Forbidden changes:

- Do not increase the hero gap back to the old large spacing.
- Do not restore the blue paragraph treatment.
- Do not restore the duplicate business-identity chip.
- Do not restore the right-side detail/contact card.
- Do not add live price, confirmed stock, delivery, manufacturer, factory, mill, production, certification, approval, testimonial, review, rating, client, project, award, team-size, stockyard-size, or unverified years-of-experience claims.
- Do not add CTA text that overflows at 100%, 110%, or 125% zoom.
- Do not replicate the hero sitewide without owner approval.
