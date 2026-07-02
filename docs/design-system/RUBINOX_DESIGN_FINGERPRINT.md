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
