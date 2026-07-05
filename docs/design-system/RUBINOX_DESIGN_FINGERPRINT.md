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

## Homepage RFQ Path - LOCK V1

Status: approved and final.

Lock document:

- `docs/design-system/RUBINOX_HOME_RFQ_PATH_LOCK_V1.md`

Related card reference:

- `docs/design-system/RUBINOX_CARD_ACCENT_LOCK_V1.md`

Source:

- D5A homepage-only RFQ path card prototype.
- D5A-R2 homepage-only RFQ path intro width correction.

Approved commits:

- D5A prototype: `6b4c4eb3a47fca722353fc6e86c7d406eefdc18a`
- D5A-R2 correction: `fcd989d524e0df4294b77ee5af40934ab8b1b987`

Scope:

- Homepage only.
- No sitewide RFQ path replication was performed.
- Do not add the RFQ path section to non-home pages unless the owner separately approves it.
- Do not change top bar, header, market ticker, hero, footer, SEO metadata, schema, sitemap, analytics, images, PDFs, or non-home pages as part of RFQ path maintenance.

Exact content pattern:

- Section title: `Plan the RFQ Path Before You Ask for Pricing`
- Intro copy: `Use these quick steps to prepare grade, form, standards, documents and delivery details before sending your requirement. This helps our team review your RFQ clearly and respond with the right sourcing inputs.`
- Card titles:
  - `Compare grades`
  - `Select product forms`
  - `Check standards`
  - `Confirm documents`
  - `Send the RFQ`

Exact visual pattern:

- Section background: `linear-gradient(180deg,#fff,#f6f8fc)`.
- Intro wrapper: `.buyerPathHead > div { width:100%; min-width:0; }`.
- Intro paragraph: `.buyerPathHead p { max-width:1000px; }`.
- Desktop card grid: five columns using `repeat(5,minmax(0,1fr))`.
- Card base: white card, `8px` radius, subtle navy border, subtle shadow.
- Top accent: `3px` `linear-gradient(90deg,var(--accent),var(--navy3))`.
- Number/title row: inline, wrapped safely with `min-width:0`.
- Card hover/focus: `translateY(-2px)`, stronger border, stronger shadow.

Zoom/reflow no-overflow rule:

- At 100%, 110%, and 125% browser zoom, RFQ intro text, card titles, card body text, and card boxes must not spill outside the RFQ path section.
- Future homepage RFQ path edits must run zoom/reflow checks before commit.
- Use `min-width:0`, `flex-wrap:wrap`, readable line-height, and safe text wrapping where needed.

Future homepage instruction:

- Preserve the `1000px` intro width correction.
- Preserve the five-card desktop row at 1366px and 1280px.
- Preserve the single-column mobile stack.
- Preserve the white card plus gold-to-blue top accent style.
- Preserve the inline number/title row.
- Do not add extra cards or copy that makes the section tall without owner approval.

Forbidden changes:

- Do not revert to the old narrow `74ch` intro.
- Do not remove the top accent line.
- Do not return the card title to a stacked number-over-title layout.
- Do not add live price, confirmed stock, delivery, manufacturer, factory, mill, production, certification, approval, testimonial, review, rating, client, project, award, team-size, stockyard-size, or unverified years-of-experience claims.
- Do not replicate the RFQ path sitewide without owner approval.

## Card Accent - LOCK V1

Status: approved and final as a design reference.

Lock document:

- `docs/design-system/RUBINOX_CARD_ACCENT_LOCK_V1.md`

Source:

- Homepage RFQ path cards approved in D5A/D5A-R2 and locked in D5B.

Scope:

- Future base card design reference only.
- No broad card-system replication was performed in D5B.
- Future applications require separate owner approval, screenshots, zoom/reflow checks, QA, and a scoped implementation batch.

Exact visual pattern:

- White card base: `#fff`.
- Border: `1px solid rgba(16,37,84,.12)`.
- Radius: `8px`.
- Shadow: `0 12px 30px rgba(15,30,60,.07)`.
- Top accent: `3px` `linear-gradient(90deg,var(--accent),var(--navy3))`.
- Heading color: `var(--ink2)` / `#132a63`.
- Body color: `var(--muted2)` / `#566b9a`.
- Hover/focus lift: `translateY(-2px)`.
- Text containment: `min-width:0`, safe wrapping, no text escape at 100%, 110%, or 125% zoom.

Future use candidates:

- RFQ journey cards.
- Material cards.
- Product form cards.
- FAQ cards.
- Industry cards.
- Related-page cards.
- Clickable and non-clickable informational boxes.

Forbidden changes:

- Do not treat this lock as permission for broad sitewide card replication.
- Do not put cards inside cards.
- Do not create heavy gradient cards, oversized rounded cards, decorative blob cards, or marketing-style card clusters from this lock.
- Do not add live price, confirmed stock, delivery, manufacturer, factory, mill, production, certification, approval, testimonial, review, rating, client, project, award, team-size, stockyard-size, or unverified years-of-experience claims.

## Homepage Section Intro Width - LOCK V1

Status: approved and final.

Owner approval:

- "Section intro widths approved for design lock"

Lock document:

- `docs/design-system/RUBINOX_HOME_SECTION_INTRO_WIDTH_LOCK_V1.md`

Source:

- D6A homepage section intro width standardization.

Approved source commit:

- `7f64585ac61f99647d101a6ec44111ac5551f998`

Scope:

- Homepage section intro and lead paragraphs only.
- No non-home page replication was performed.
- No visible redesign was performed in D6B.
- No card, grid, top bar, header, market ticker, hero, RFQ path, footer, SEO metadata, schema, sitemap, analytics, image, or PDF change is part of this lock.

Exact CSS pattern:

```css
.sectionIntro { max-width:1000px; }
.phase3Head > div { width:100%; min-width:0; }
.phase3Intro { max-width:1000px; }
```

Covered homepage sections:

- Product Forms Available.
- Quality, Documentation and Standards Support.
- PAN India Supply and Export Enquiry Support.
- Simple RFQ Flow for Industrial Metal Enquiries.
- Metal Supply FAQs for Buyers.

Current Materials We Supply rule:

- Materials We Supply has no standalone intro paragraph.
- Do not add new Materials We Supply intro copy without owner approval.
- Do not redesign the Materials We Supply card grid as part of this lock.

Zoom/reflow no-overflow rule:

- At 100%, 110%, and 125% browser zoom, text inside homepage sections, cards, boxes, and CTAs must not spill outside its parent container.
- Future homepage intro-width edits must run zoom/reflow checks before commit.
- Use `min-width:0`, flexible widths, safe wrapping, and sensible line-height where needed.

Future homepage instruction:

- New homepage section intro and lead paragraphs should use `max-width:1000px`.
- When intro text sits in a flexible heading row, the text wrapper must use `width:100%` and `min-width:0`.
- Do not return to a narrow left-column intro pattern without owner approval.

Forbidden changes:

- Do not use this lock to redesign cards or grids.
- Do not use this lock to alter non-home pages.
- Do not use this lock to change top bar, header, market ticker, hero, RFQ path, or footer.
- Do not add live price, confirmed stock, delivery, manufacturer, factory, mill, production, certification, approval, testimonial, review, rating, client, project, award, team-size, stockyard-size, or unverified years-of-experience claims.

## Remaining Homepage Sections Polish - LOCK V1

Status: approved and final.

Owner approval:

- "Remaining homepage sections approved for design lock"

Lock document:

- `docs/design-system/RUBINOX_HOME_REMAINING_SECTIONS_POLISH_LOCK_V1.md`

Source:

- D7A - Homepage Remaining Section Polish Prototype.
- D7A-R2 - Homepage RFQ Flow and City Chip Hover Correction.
- D7A-R3 - Homepage Final CTA Content Width Correction.

Approved source commits:

- D7A: `99a90295295fadc0322b40a003b61a9e732f125f`
- D7A-R2: `5e515dafd955055f1fc4fc2dab2e2c0d00d856e5`
- D7A-R3: `7ea3a91da981ccb5a13a81a48a32b1bbe58e25fb`

Scope:

- Homepage remaining-section polish only.
- No sitewide rollout was performed.
- No footer workflow was started.
- No non-home pages were changed.
- No SEO metadata, schema, sitemap, analytics, images or PDFs were changed.

Protected sections and systems:

- Why Choose Rubinox Metal and Alloys.
- We specialize in stainless steel SEO link section.
- Metal Supply FAQ.
- Top Bar Lock V1.
- Header Lock V1.
- Homepage Market Ticker Lock V1.
- Home Hero Lock V1.
- Homepage RFQ Path Lock V1.
- Footer.

Exact locked details:

- Quality / Standards card text remains limited to buyer-specified standards, project references, quotation inputs, documentation expectations, origin notes and logistics requirements.
- PAN India / Export blue card uses approved silver/white contrast.
- City chips link only to exact existing location pages: Mumbai, Navi Mumbai, Thane, Pune, Ahmedabad, Vadodara, Surat, Chennai, Bengaluru, Hyderabad and Kolkata.
- Delhi NCR remains non-clickable until an exact approved destination exists.
- Clickable city chip hover/focus uses light surface, Rubinox gold border, slight lift, restrained shadow and visible focus.
- RFQ Flow cards use the inline number badge plus title row pattern with safe wrapping.
- The Leading Stainless Steel and Alloy Supplier white card uses the approved gold-to-blue top accent line.
- Final contact/RFQ and final map cards use the approved gold-to-blue top accent line.
- The final blue CTA uses silver/white contrast and the approved wide content rail.

Approved final CTA width rule:

```css
.finalCtaBand p,
.finalCtaActions {
  width:100%;
  max-width:1080px;
  min-width:0;
}
.finalCtaBand p {
  overflow-wrap:break-word;
}
```

Zoom/reflow no-overflow rule:

- Text inside homepage cards, chips, boxes and CTAs must not spill outside parent containers at 100%, 110% or 125% browser zoom.
- Future edits to these sections must rerun scoped zoom/reflow checks before commit.

Forbidden changes:

- Do not use this lock to start footer work.
- Do not use this lock to perform broad card-system rollout.
- Do not change non-home pages without a separate approved batch.
- Do not add live price, confirmed stock, delivery guarantee, certification, approval, testimonial, review, rating, client, project, award, team-size, stockyard-size, or unverified years-of-experience claims.
- Keep Rubinox positioned as Stockist | Supplier | Importer | Exporter | Project Supplier.

## Footer - LOCK V1

Status: approved and final.

Lock document:

- `docs/design-system/RUBINOX_FOOTER_LOCK_V1.md`

Source:

- D8A - Homepage Footer Prototype.
- D8A-R2 - Homepage Footer Horizontal Link-Row Correction.
- D8A-R3 - Homepage Footer Unified Quick Links Correction.

Approved final version:

- D8A-R3 unified Quick Links footer.

Approved source commit:

- `4c5d9efb2d205b2f9c53bacfd629d645462ac278`

Pages run that made the approved footer live:

- `28743433455`

Scope:

- Footer design fingerprint for future sitewide use.
- Homepage contains the approved prototype.
- Sitewide footer replication was not performed in D8B.
- D8C must perform sitewide replication after this lock.

Exact locked details:

- Desktop macro layout: brand block left, unified Quick Links center, Contact Details right.
- Middle footer block has one non-clickable heading only: `Quick Links:`.
- `Quick Links:` uses the approved subtle gold underline/accent.
- Links start below the heading and wrap from the same left edge.
- Separate `Main Materials` and `Forms & RFQ` headings are forbidden in the final footer.
- Material, form, and RFQ links remain under the unified Quick Links bank.
- Six brand/contact/social icons must stay in one row where the approved D8A-R3 layout can keep them together.
- Contact details, platform/directory icons, and all existing URLs are preserved.
- Copyright is yearless: `© Rubinox Metal and Alloys. All rights reserved.`
- Do not re-add `2026` to the footer copyright without owner approval.

Zoom/reflow rule:

- Footer links, headings, icons, contact text, and copyright must not overflow at 100%, 110%, or 125% browser zoom.
- Unified links may wrap naturally inside the footer rail.
- Mobile must remain clean at 390px and 360px.
- Use `min-width:0`, flexible widths, safe wrapping, compact icon sizing, and readable line-height.

Forbidden changes:

- Do not create a footer variant without owner approval.
- Do not add every city, grade, location, specification, or blog link to the footer.
- Do not make the footer an SEO link dump.
- Do not change phone, email, address, social links, platform links, schema, sitemap, analytics, images, PDFs, top bar, header, market ticker, hero, RFQ path, or homepage body sections as part of footer replication.
- Do not add live price, confirmed stock, delivery guarantee, certification, approval, testimonial, review, rating, client, project, award, team-size, stockyard-size, or unverified years-of-experience claims.
- Keep Rubinox positioned as Stockist | Supplier | Importer | Exporter | Project Supplier.
