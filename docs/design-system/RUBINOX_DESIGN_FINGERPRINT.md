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

## Sitewide Design Rollout Plan - D9A

Status: planning stage.

Plan document:

- `docs/design-system/RUBINOX_SITEWIDE_DESIGN_ROLLOUT_PLAN_D9A.md`

Batch document:

- `docs/design-rollout-sitewide-homepage-design-batch-d9a.md`

Owner clarification:

- "not just footer. the whole home page design to be replicated across all pages."

Planning interpretation:

- Apply approved homepage design language across the full website.
- Do not blindly copy homepage-only content to all pages.
- Use a pilot-first workflow before full sitewide replication.

Source locks:

- Top Bar Lock V1.
- Header Lock V1.
- Header + Top Bar Alignment Lock V1.
- Homepage Market Ticker Lock V1.
- Home Hero Lock V1.
- Homepage RFQ Path Lock V1.
- Card Accent Lock V1.
- Homepage Section Intro Width Lock V1.
- Remaining Homepage Sections Polish Lock V1.
- Footer Lock V1.

Already sitewide:

- Top Bar Lock V1.
- Header Lock V1.
- Header + Top Bar Alignment Lock V1.

Pending sitewide rollout:

- Footer Lock V1.
- Card Accent Lock V1 where page-type appropriate.
- Blue panel contrast rules.
- Inline number/title card rows.
- Clickable chip hover/focus pattern.
- CTA contrast and width rules.
- Contact/map card accent rules.
- Section intro width rules where appropriate.

Must remain homepage-only unless separately approved:

- Market ticker.
- Homepage hero content.
- Homepage RFQ Path content.
- Homepage-specific remaining-section content.
- Homepage-specific material/product grids where page purpose differs.

D9B next step:

- Sitewide Design Pilot on representative pages.
- Use `index.html` as comparison reference only.
- Pilot pages should cover company, compliance, material family, grade/spec, product form, industry, location, export, knowledge, article, contact and quotation page types.

D9C after owner approval:

- Full sitewide replication only after D9B live pilot pages are reviewed and approved.
- Preserve all public URLs, H1 intent, titles, meta descriptions, canonicals, schema meaning, sitemap URLs, GA4, content claims, contact details, images and PDFs.

Forbidden changes:

- Do not start D9B or D9C inside D9A.
- Do not edit public HTML or CSS for visible design in D9A.
- Do not change SEO metadata, schema meaning, sitemap URLs, analytics, images, PDFs or contact details as part of planning.
- Do not add manufacturer, factory, mill, production, stock, price, delivery, certification, approval, client, project, testimonial, rating, review, award, team-size, stockyard-size or unverified years-of-experience claims.

## Sitewide Design Standardization - D9C

Status: implemented for owner review.

Batch document:

- `docs/design-sitewide-standardization-batch-d9c.md`

Scope:

- Full sitewide design standardization across all 261 public HTML pages.
- Final shared CSS: `assets/css/rubinox-sitewide-design-v1.css`.
- Final page scope: `body.sitewideDesignV1`.
- Final footer marker: `sitewideFooterD9C`.

Locked-source design language applied:

- Top Bar Lock V1 and Header Lock V1 remain the shared global navigation baseline.
- Footer Lock V1 was rolled out sitewide with one unified `Quick Links:` bank.
- Card Accent Lock V1, section intro width, CTA contrast, chip hover/focus, inline number rows, contact/map card accents and blue-panel contrast were applied where page-type appropriate.
- Homepage-only market ticker, hero, RFQ Path and homepage body content were not copied to non-home pages.

Specific D9C corrections captured:

- Bharat Metals trust panel contrast and external link treatment.
- FAQ card consistency.
- City, country, product form and technical link hover/focus treatment.
- Quotation numbered cards, Before You Send alignment and factor guide spacing.
- CTA gold button consistency.
- Contact, map, support and platform card accents.

Preservation rules:

- Preserve all public URLs, H1 intent, titles, meta descriptions, canonicals, JSON-LD schema meaning, sitemap URLs, GA4 tracking, contact details, images and PDFs.
- Preserve current GA4 ID `G-JT5X5L5H07` and keep old GA4 ID `G-CR18QYPS6C` absent.
- Keep Rubinox positioned as Stockist | Supplier | Importer | Exporter | Project Supplier.
- Do not add unsupported business, stock, price, delivery, certification, approval, client, project, testimonial, rating, award, team-size, stockyard-size or unverified experience claims.

QA and audit baseline:

- Post-D9C audit: 261 final CSS references, 261 final body class references, 261 final footers, 0 old footer headings, 0 footer year instances, 0 D9B pilot markers, 0 homepage-only marker leakage.
- Zoom/reflow: 132 checks at 100%, 110% and 125%; failing checks: 0.
- QA gates passed or completed: sitemap, crawl, schema, accessibility, navigation, HTML validation, links, Pa11y, forbidden-claims scan, image audit and `git diff --check`.

Next step:

- Owner should review representative pages after D9C. If approved, next step is D9D - Final Sitewide Design Fingerprint Lock.

## Sitewide Hover Correction - D9C-R2

Status: implemented for owner review.

Correction document:

- `docs/design-correction-sitewide-hover-batch-d9c-r2.md`

Approved hover intent for owner review:

- Clickable cards use subtle Rubinox gold border/accent, slight lift and restrained premium shadow.
- Clickable chips keep a light surface with a thin Rubinox gold border and slight lift.
- Mouse hover must not create a thick gold full border, heavy frame, filled gold background, or layout shift.
- Focus-visible remains visible through a subtle 2px gold outline.
- CTA buttons retain the approved gold button hover treatment.
- Non-anchor cards should not gain strong interactive hover behavior.

D9D gate:

- D9D final sitewide design lock must wait for owner review of D9C-R2 live hover states.

## Sitewide Visual Consistency Correction - D9C-R3

Status: Implemented, pending owner review before D9D.

D9C-R3 is the audit-based correction pass after D9C-R2. It does not create the final D9D lock.

Reference:

- `docs/design-correction-sitewide-visual-consistency-batch-d9c-r3.md`

Final hover rule before D9D owner review:

- Approved hover follows the homepage RFQ Path card feel.
- Clickable cards/boxes use the same 1px border width before and after hover.
- Hover may shift border color to subtle Rubinox gold.
- Hover may lift slightly by `translateY(-1px)` to `translateY(-2px)`.
- Hover may use a soft premium shadow.
- Hover must not create a silver border box, thick gold full-frame border, heavy outline, filled gold card/chip background, image frame, or layout shift.
- Clickable chips/links keep a white/light surface with thin gold border, restrained shadow and slight lift.
- CTA buttons keep their approved button styling; ghost RFQ buttons avoid silver hover borders.
- Keyboard focus-visible remains visible through a subtle gold outline.

Spacing rule before D9D owner review:

- Premium hero and hero-grid page families must not visually touch the next major block.
- `industries.html` hero-to-next spacing was restored.
- The strict spacing audit still documents locked homepage/quotation band-section exceptions where section padding, not outer margin, creates the visual separation.

Audit gate:

- D9C-R3 hover offenders before: 743.
- D9C-R3 hover offenders after: 0.
- Browser-style zoom/reflow simulation: 96 checks, 0 failures.
- D9D final sitewide design lock must wait for owner review of D9C-R3 live pages.

## Quotation Before You Send Alignment Correction - D9C-R4

Status: Implemented, pending owner review before D9D.

D9C-R4 is a focused correction after D9C-R3. It does not create the final D9D lock.

Reference:

- `docs/design-correction-quotation-before-send-batch-d9c-r4.md`

Rule before D9D owner review:

- Inline links inside list items must remain inline when they are part of a sentence.
- List item layout must not split one sentence into independent flex/grid columns.
- Helper-list text must remain left aligned, readable, naturally wrapped and contained inside the card.
- Avoid justified/scattered list text and excessive word or letter spacing.
- Bullet markers may be positioned separately only to preserve alignment without disrupting sentence flow.

Corrected quotation sentence:

- `Use technical resources and quality documentation guides for schedule, MTC, PMI and inspection notes.`

Audit gate:

- Exact affected helper-card pattern found only on `quotation.html`.
- Browser-style zoom/reflow simulation: 12 checks, 0 failures.
- Non-quotation visual checks: 6 screenshots/checks, 0 failures.
- D9D final sitewide design lock must wait for owner review of the live D9C-R4 quotation correction.

## Quotation Factor Guides Alignment Correction - D9C-R5

Status: Implemented, pending owner review before D9D.

D9C-R5 is a focused correction after D9C-R4. It does not create the final D9D lock.

Reference:

- `docs/design-correction-quotation-factor-guides-batch-d9c-r5.md`

Rule before D9D owner review:

- Guide/link-chip rows must use a shared content rail for the heading, paragraph and chip bank when they appear inside the same card.
- Chip banks must use controlled wrapping with equal gaps and left-aligned row starts.
- Guide links must not run together, touch card borders or create horizontal scroll.
- Chip hover/focus must follow the approved subtle pattern: thin Rubinox gold border/accent, slight lift and soft shadow.
- Guide chips must not use a filled gold background, thick border, heavy frame or layout-shifting hover.

Corrected quotation guide links:

- Stainless Steel Price Factors
- Stainless Steel Pipe Factors
- SS 304 Factors
- SS 316L Factors
- Inconel 625 Factors
- Duplex 2205 Factors
- Company Profile

Audit gate:

- Exact affected `Quotation Factor Guides` section found only on `quotation.html`.
- Browser-style zoom/reflow simulation: 12 checks, 0 failures.
- Hover/focus screenshots: desktop and mobile captured.
- Non-quotation visual checks: 8 screenshots/checks, 0 failures.
- D9D final sitewide design lock must wait for owner review of the live D9C-R5 quotation correction.

## Knowledge Hub Filter Hover Correction - D9C-R6

Status: Implemented, pending owner review before D9D.

D9C-R6 corrected the Knowledge Hub `Featured Buyer Guides` category/filter chips. It does not create the final D9D lock.

Reference:

- `docs/design-correction-knowledge-hub-filter-hover-batch-d9c-r6.md`

Filter/category chip rule before D9D owner review:

- Filter/category chips must not use non-brand hover colors, silver hover borders, thick frames, filled random backgrounds or layout-shifting hover effects.
- Approved chip hover is a white/light surface, thin Rubinox gold border/accent, slight lift and restrained soft shadow.
- Keyboard focus-visible must remain visible through a subtle Rubinox gold outline.
- Active/selected chips may use a subtle brand-consistent white/pale-gold surface with Rubinox gold border and navy text.
- Default and hover border width must remain stable to prevent layout shift.

Audit gate:

- Actual `button.blogFilter` controls found only on `blog.html`.
- Search/filter behavior preserved.
- Browser-style zoom/reflow simulation: 12 checks, 0 failures.
- Non-blog visual checks: 10 screenshots/checks, 0 failures.
- D9D final sitewide design lock must wait for owner review of the live D9C-R6 Knowledge Hub correction.

## Final Sitewide Design System — LOCK V1

Status: Final approved sitewide design fingerprint.

Owner approval: "D9C-R6 approved for final sitewide design lock"

Final approved live commit: `7198472d18708515f648df50fa03eda3d88094de`

Successful GitHub Pages run: `29010629259`

Final lock reference:

- `docs/design-system/RUBINOX_SITEWIDE_DESIGN_LOCK_V1.md`

D9D batch reference:

- `docs/design-final-sitewide-lock-batch-d9d.md`

D9D finalizes the Rubinox sitewide design system after the approved homepage locks, Footer Lock V1, D9A rollout plan, D9B pilot, D9C sitewide rollout and D9C-R3/R4/R5/R6 correction passes.

The locked public-page markers are:

- `body.sitewideDesignV1`
- `assets/css/rubinox-sitewide-design-v1.css`
- `siteFooter homeFooterPrototypeD8A sitewideFooterD9C`
- Unified footer heading: `Quick Links:`
- GA4 ID: `G-JT5X5L5H07`

The final sitewide interaction rules are:

- Clickable cards use stable 1px borders, subtle Rubinox gold hover/accent, slight lift and restrained shadow.
- Chips and small links use a light surface, thin Rubinox gold hover/accent, slight lift and soft shadow.
- Knowledge Hub `button.blogFilter` controls follow D9C-R6 for default, hover, focus-visible and active states.
- Primary CTAs keep the approved Rubinox gold treatment.
- FAQ/card accent bars follow Card Accent Lock V1.
- Blue/dark panels keep the final D9C navy/silver contrast.
- Text inside sections, cards, boxes, chips and CTAs must not overflow at 100%, 110% or 125% zoom.

The final scope rules are:

- Footer Lock V1 is sitewide across all 261 public HTML pages.
- Top Bar Lock V1 and Header Lock V1 remain sitewide.
- Market ticker, home hero, home RFQ path, homepage section intro width and homepage remaining-section polish remain homepage-only unless a later approved lock expands their scope.
- Public URLs, SEO metadata, JSON-LD, sitemap, CNAME and GA4 remain protected unless a later task explicitly scopes a change.
- Future pages must use the final lock document and this master fingerprint before design review.

D9D verification artifacts:

- Final screenshots: `D:\Websites\Rubinox\visual-qa\d9d-final-sitewide-design-lock\final`
- Hover/focus screenshots: `D:\Websites\Rubinox\visual-qa\d9d-final-sitewide-design-lock\hover-focus`
- Zoom/reflow screenshots and JSON: `D:\Websites\Rubinox\visual-qa\d9d-final-sitewide-design-lock\zoom-reflow`
- Audit files: `D:\Websites\Rubinox\visual-qa\d9d-final-sitewide-design-lock\audit`

D9D audit summary:

- Public HTML pages: 261.
- Final CSS references: 261.
- `sitewideDesignV1` body class pages: 261.
- Unified footer pages: 261.
- Old split footer headings: 0.
- Footer `2026` copyright findings: 0.
- Current GA4 pages: 261.
- Old GA4 pages: 0.
- Homepage-only leakage into non-home pages: 0.
- D9C-R3/R4/R5/R6 correction markers: present.

This section supersedes the "pending owner review before D9D" status language in the D9C correction sections above. Those sections remain as implementation history; this final section is the lock source for future work.
