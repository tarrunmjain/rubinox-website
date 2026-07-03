# RUBINOX HOME HERO LOCK V1

## Approval Status

- Status: approved and final.
- Approved by owner after live homepage review.
- Owner approval note: `CREATE IT. JUST MAKE SURE WHEN THE PAGES ARE ZOOMED FROM 100% TO 110 OR 125% THE TEXT OF ANY BOX, CTC ETC SHOULD NOT COME OUT OF THE BOX.`
- Source prototype: D4A - Homepage Hero Prototype.
- Approved hero commit: `b05495996cb550d192dccfb1d411c9529cb69798`.
- Deployment repair commit: `76f00146545d3e2d7e2e10cdcc842dc7b381808a`.
- Pages run that made D4A live: `28622840146`.

## Purpose

This document is the final homepage hero design print and implementation fingerprint for Rubinox Metal and Alloys.
Future homepage edits must preserve this layout unless the owner explicitly approves a new hero lock version.

Codex and future maintainers must not reintroduce the old large ticker-to-H1 gap, blue paragraph treatment, duplicate
business-identity chip, mixed CTA styles, or right-side detail/contact card.

## Scope

- Homepage only.
- No sitewide hero replication was performed in D4B.
- Do not replicate this hero to non-home pages unless separately approved.
- Non-home page heroes remain outside this lock and need their own future workflow.
- Top Bar Lock V1, Header Lock V1, Header + Top Bar Alignment Lock V1, and Market Ticker Lock V1 remain unchanged.

## Desktop Design Specification

Final desktop structure:

- Hero section selector: `.hero`.
- Inner rail: `.hero > .wrap`.
- Main grid: `.heroGrid`.
- Desktop grid columns: `1.18fr .82fr`.
- Desktop grid gap: `28px`.
- Left column contains the H1, paragraph, three approved chips, popular-grade links, and three white info boxes.
- Right column contains the approved hero image and the three gold CTA buttons below the image.
- Right details/contact card is removed from the final HTML pattern.

Final desktop measurements:

| Viewport | Ticker bottom | H1 top | Ticker-to-H1 gap | Hero height | Chip rows | CTA rows |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 1366 | 199px | 231px | 32px | 669.31px | 1 | 1 |
| 1280 | 199px | 231px | 32px | 669.31px | 1 | 1 |

Final desktop typography:

- H1 text: `Stainless Steel Supplier, Stockist & Exporter in Mumbai, India | Nickel Alloy & Duplex Metals`.
- H1 font family: inherited page stack, currently `Arial, Helvetica, sans-serif` through the final site polish rules.
- H1 size: `42px` desktop.
- H1 line-height: `1.15`.
- H1 weight: inherited bold browser heading weight.
- H1 color: premium silver `#e3e7ed`.
- H1 text shadow: `0 1px 0 rgba(255,255,255,.12), 0 3px 8px rgba(0,0,0,.35)`.
- Paragraph color: `rgba(255,255,255,.9)`.
- Paragraph size: `16px`.
- Paragraph line-height: `1.7`.
- Paragraph max width: `62ch`.

Final chips:

1. `Grade & Form Review`
2. `MTC / PMI Review`
3. `PAN India RFQ Support`

Chip design:

- Selector: `.hero .pill`.
- Display: `inline-flex`.
- Desktop white-space: `nowrap`.
- Padding: `7px 10px`.
- Gap: `8px`.
- Border radius: `6px`.
- Informational chip treatment remains restrained and is not a CTA.

Final CTAs:

1. `WhatsApp Us`
2. `Email Us`
3. `Call Us`

CTA design:

- Selector: `.hero .heroImageCtas .btn`.
- Placement: below the right hero image.
- Normal desktop behavior: one row at 1366px and 1280px.
- Background: `linear-gradient(180deg,#f2bc55,#e2a02f)`.
- Text color: `#07101f`.
- Border: `1px solid rgba(247,198,91,.72)`.
- Shadow: `0 14px 30px rgba(226,160,47,.24)`.
- Hover/focus lift: `translateY(-1px)`.
- At high zoom or smaller effective widths, CTAs may wrap for readability. Text must stay inside the button.

Final info boxes:

1. `Mumbai` / `Kalbadevi - 400002`
2. `PAN India` / `Supply Network`
3. `All Forms` / `Pipes, Plates, Coils & More`

Info-box design:

- Selector: `.hero .kpi .box`.
- Grid: three columns on desktop.
- White card surface: `rgba(255,255,255,.96)`.
- Border: `1px solid rgba(226,160,47,.18)`.
- Border radius: `8px`.
- Shadow: `0 18px 34px rgba(0,0,0,.16)`.
- Number text color: `var(--ink2)`.
- Label text color: `var(--muted2)`.

Hero image:

- Asset path: `/assets/hero-metal.webp`.
- Alt text: `Stainless steel, pipes, sheets and industrial metal stock`.
- The image is unchanged from the approved prototype.
- Desktop placement: right column above the CTA row.
- Image frame selector: `.heroMedia`.
- Frame min-height: `240px`.
- Border radius: `8px`.
- Border: `1px solid rgba(226,160,47,.24)`.

Relationship to Market Ticker Lock V1:

- The hero starts immediately below the approved compact Market Watch ticker.
- The locked ticker-to-H1 gap is `32px` at 1366px and 1280px.
- Do not increase this gap back to the pre-D4A `76px` value without owner approval.

## Mobile Design Specification

Final mobile behavior:

- Hero grid stacks to one column below the existing responsive breakpoint.
- H1, paragraph, chips, popular-grade links, info boxes, image, and CTAs remain readable.
- Chips wrap naturally on mobile.
- CTAs wrap/stack naturally on mobile.
- Info boxes stack vertically on mobile.
- Hero image stacks below the left-column content and above the CTA buttons.

Final mobile measurements:

| Viewport | Ticker bottom | H1 top | Ticker-to-H1 gap | Hero height | Chip rows | CTA rows | Info-box rows |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 390 | 322.77px | 354.77px | 32px | 1411.67px | 2 | 2 | 3 |
| 360 | 322.77px | 354.77px | 32px | 1496.05px | 2 | 2 | 3 |

Mobile lock rules:

- Keep the 32px ticker-to-H1 gap.
- Keep the H1 readable and inside its column.
- Keep paragraph line length readable.
- Allow chips to wrap instead of shrinking text too far.
- Allow CTA buttons to wrap to two or three rows at high zoom.
- Keep the white info boxes stacked and contained.
- No hero text may be clipped or spill outside its chip, button, card, or content column.

## Zoom / Reflow Safety Specification

This section is mandatory for future homepage hero work.

At 100%, 110%, and 125% browser zoom:

- Hero title must not overflow its column.
- Hero paragraph must not overflow.
- All three chips must keep their text inside the chip boundary.
- All three CTA buttons must keep their text inside the button boundary.
- White info boxes must keep text inside their boxes.
- No CTA label may be clipped.
- Hero containers must not create hero-level horizontal overflow.
- Desktop layout should remain premium at 1366px and 1280px.
- Mobile layout should remain clean at 390px and 360px.

Implementation rules:

- Use flexible widths.
- Preserve `min-width:0` where flex/grid children need it.
- Use `flex-wrap:wrap` where smaller available widths require it.
- Use sensible `line-height`.
- Use `white-space:normal` for longer chip/card text if future copy becomes longer.
- Avoid fixed widths that cause overflow.
- Use `overflow-wrap:anywhere` only where necessary and only if it does not make the text look broken.
- CTA buttons may wrap to two or three rows at high zoom if needed.
- At normal desktop 100% zoom, preserve the approved one-row CTA layout.
- At 110% and 125%, readability and containment are more important than forcing all CTAs into one row.

Zoom/reflow test method used for D4B:

- Temporary local HTTP server with Playwright Chromium.
- Screenshots captured from the local static site.
- Browser zoom was simulated by using effective CSS viewport widths: `viewport width / zoom`.
- This method mirrors the reduced CSS layout width produced by browser zoom and was documented because direct browser zoom automation is not consistently exposed through Playwright.
- Tolerance: 2px.

Zoom/reflow test result table:

| Physical viewport | Zoom | Effective CSS width | Chip rows | CTA rows | Info-box rows | Hero overflow | Chip overflow | CTA overflow | Info-box overflow |
| ---: | ---: | ---: | ---: | ---: | ---: | --- | --- | --- | --- |
| 1366 | 100% | 1366 | 1 | 1 | 1 | pass | pass | pass | pass |
| 1280 | 100% | 1280 | 1 | 1 | 1 | pass | pass | pass | pass |
| 390 | 100% | 390 | 2 | 2 | 3 | pass | pass | pass | pass |
| 360 | 100% | 360 | 2 | 2 | 3 | pass | pass | pass | pass |
| 1366 | 110% | 1242 | 1 | 1 | 1 | pass | pass | pass | pass |
| 1280 | 110% | 1164 | 1 | 1 | 1 | pass | pass | pass | pass |
| 390 | 110% | 355 | 2 | 2 | 3 | pass | pass | pass | pass |
| 360 | 110% | 327 | 3 | 3 | 3 | pass | pass | pass | pass |
| 1366 | 125% | 1093 | 1 | 1 | 1 | pass | pass | pass | pass |
| 1280 | 125% | 1024 | 1 | 1 | 1 | pass | pass | pass | pass |
| 390 | 125% | 312 | 3 | 3 | 3 | pass | pass | pass | pass |
| 360 | 125% | 288 | 3 | 3 | 3 | pass | pass | pass | pass |

Result: no homepage hero CSS or HTML safety fix was required in D4B.

## Final Content Rules

Final H1:

`Stainless Steel Supplier, Stockist & Exporter in Mumbai, India | Nickel Alloy & Duplex Metals`

Final paragraph:

`Rubinox Metal and Alloys is a leading stockist, supplier, trader, importer and exporter of stainless steel, aluminium, copper, brass, carbon steel, mild steel, nickel alloys (Inconel, Monel, Hastelloy), duplex stainless steel, SMO 254, titanium and phosphor bronze. Serving PAN India and international markets with sourcing coordination, export enquiry support and specification-led RFQ review as per requirement.`

Final chip labels:

- `Grade & Form Review`
- `MTC / PMI Review`
- `PAN India RFQ Support`

Final CTA labels:

- `WhatsApp Us`
- `Email Us`
- `Call Us`

Final info boxes:

- `Mumbai`
- `PAN India`
- `All Forms`

Removed content rules:

- Do not reintroduce the duplicate `Stockist | Supplier | Importer | Exporter | Project Supplier` chip.
- Do not reintroduce the right-side contact/detail checklist card.

## Allowed Content

Only these homepage hero content blocks are allowed:

- Approved H1.
- Approved paragraph.
- Approved three chips.
- Approved three CTAs.
- Approved three white info boxes.
- Approved image `/assets/hero-metal.webp`.

## Forbidden Content

Do not add:

- Duplicate `Stockist | Supplier | Importer | Exporter | Project Supplier` chip.
- Right-side contact/detail checklist card.
- Live price promises.
- Stock promises.
- Delivery promises.
- Manufacturer, factory, mill, production, manufacturing unit, `we manufacture`, or similar wording.
- Fake certifications or approval claims.
- Testimonials, reviews, client names, project names, awards, ratings, stockyard size, team size, or unverified years of experience.
- Long paragraphs that increase hero height.
- CTA text that overflows at zoom.
- Any box, CTA, chip, or content container with text spilling outside.

## HTML Pattern

Representative final homepage structure:

```html
<section class="hero">
  <div class="wrap">
    <div class="heroGrid">
      <div>
        <h1>Stainless Steel Supplier, Stockist &amp; Exporter in Mumbai, India | Nickel Alloy &amp; Duplex Metals</h1>
        <p class="lead">...</p>
        <div class="pillRow">
          <span class="pill">&#10003; Grade &amp; Form Review</span>
          <span class="pill">&#10003; MTC / PMI Review</span>
          <span class="pill">&#10003; PAN India RFQ Support</span>
        </div>
        <div class="popularRow">...</div>
        <div class="kpi">
          <div class="box"><div class="num">Mumbai</div><div class="lbl">Kalbadevi - 400002</div></div>
          <div class="box"><div class="num">PAN India</div><div class="lbl">Supply Network</div></div>
          <div class="box"><div class="num">All Forms</div><div class="lbl">Pipes, Plates, Coils &amp; More</div></div>
        </div>
      </div>
      <div class="heroRight">
        <div class="heroMedia">
          <img src="/assets/hero-metal.webp" alt="Stainless steel, pipes, sheets and industrial metal stock">
        </div>
        <div class="ctaRow heroImageCtas">
          <a class="btn primary heroPrimaryCta" href="https://wa.me/919363193755">WhatsApp Us</a>
          <a class="btn primary heroSecondaryCta" href="mailto:tarun@rubinoxmetal.com?subject=Quotation%20Request%20-%20Rubinox">Email Us</a>
          <a class="btn primary heroTertiaryCta" href="tel:+919363193755">Call&nbsp;Us</a>
        </div>
      </div>
    </div>
  </div>
</section>
```

## CSS Pattern

Representative final homepage selectors:

```css
.hero{padding:32px 0 40px}
.heroGrid{display:grid;gap:28px;grid-template-columns:1.18fr .82fr;align-items:stretch}
.hero h1{color:#e3e7ed!important;text-shadow:0 1px 0 rgba(255,255,255,.12),0 3px 8px rgba(0,0,0,.35)!important}
.hero .lead{color:rgba(255,255,255,.9)!important}
.hero .pillRow{gap:8px;flex-wrap:nowrap}
.hero .pill{padding:7px 10px;white-space:nowrap}
.hero .kpi{display:grid;gap:10px;grid-template-columns:repeat(3,1fr)}
.heroRight{display:flex;flex-direction:column;height:100%;gap:14px}
.heroMedia{flex:1;min-height:240px;border-radius:8px;overflow:hidden}
.hero .heroImageCtas{margin-top:0;flex-wrap:nowrap}
.hero .heroImageCtas .btn{flex:1 1 0;min-width:0;white-space:nowrap}
```

Responsive and zoom/reflow safety rules:

```css
@media(max-width:900px){
  .heroGrid{grid-template-columns:1fr}
  .hero .pillRow{flex-wrap:wrap}
  .hero .heroImageCtas{flex-wrap:wrap}
  .hero .heroImageCtas .btn{flex:1 1 140px}
  .heroMedia{min-height:220px}
}
```

Future changes may add homepage-hero-only overflow safety rules only when testing proves they are needed and the approved visual design is preserved.

## Link Behavior

Final CTA links:

- WhatsApp: `https://wa.me/919363193755`
- Email: `mailto:tarun@rubinoxmetal.com?subject=Quotation%20Request%20-%20Rubinox`
- Call: `tel:+919363193755`

Keep the existing `trackLead(...)` calls from `index.html`.

## Future Homepage Instructions

- Preserve the compact 32px ticker-to-H1 gap.
- Preserve the silver H1.
- Preserve the white paragraph.
- Preserve the three-chip system.
- Preserve the gold CTA buttons.
- Preserve the CTA placement below the image.
- Preserve the removed right card.
- Run zoom/reflow checks at 100%, 110%, and 125% before committing any hero change.
- No text may overflow from any hero box, CTA, chip, or content container.
- Do not alter locked top bar, header, or market ticker styles as part of hero work.
- Do not replicate this homepage hero sitewide without owner approval.

## QA Checklist

Run these checks before committing any future homepage hero change:

- Visual widths: 1366, 1280, 768, 390, 360.
- Zoom levels: 100%, 110%, 125%.
- CTA overflow check.
- Chip overflow check.
- Info-box overflow check.
- Hero horizontal overflow check.
- Mobile clean layout.
- H1 and paragraph readability.
- Top bar unchanged.
- Header unchanged.
- Market ticker unchanged.
- Non-home pages unchanged.
- HTML validation.
- Sitemap check.
- Schema check.
- Accessibility check.
- Navigation test.
- Link crawl.
- Pa11y.
- Forbidden claims scan.
- GA4 ID check.
- `git diff --check`.

## Screenshot References

Final lock screenshots:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-hero-lock-v1`

Zoom/reflow screenshots:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-hero-lock-v1-zoom-reflow`

Non-home check screenshots:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-hero-lock-v1-nonhome-check`

Captured homepage widths:

- `1366`
- `1280`
- `768`
- `390`
- `360`

Zoom/reflow captured widths:

- `1366`, `1280`, `390`, and `360` at 100%, 110%, and 125%.

Non-home pages checked:

- `company-profile.html` at 1366 and 390.
- `materials/stainless-steel.html` at 1366 and 390.

Non-home result:

- No non-home page files were edited.
- No homepage hero lock was replicated to non-home pages.
- Checked non-home screenshots retained their existing hero systems.
