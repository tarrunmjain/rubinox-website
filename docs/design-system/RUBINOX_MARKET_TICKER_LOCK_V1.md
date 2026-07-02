# RUBINOX MARKET TICKER LOCK V1

## Approval Status

- Status: approved and final.
- Approved by owner after live homepage review.
- Owner approval note: `APPROVED`.
- Source prototype: D3A - Homepage Market Ticker Compact Prototype.
- Approved prototype commit: `5e21d2e2bbe17674e0ebbf797335d00e39954c83`.
- Lock batch: D3B - Homepage Market Ticker Design Lock / Design Fingerprint.

## Purpose

This document is the final homepage market ticker design print and implementation fingerprint. Future homepage work must preserve this compact Market Watch section unless the owner explicitly approves a new market ticker lock version.

Codex and future maintainers must not make this ticker tall again, add long explanatory copy, convert market signals into live pricing promises, or treat ticker values as a formal quotation source.

## Scope

- Homepage only.
- No sitewide replication is required.
- Do not add the market ticker to non-home pages unless separately approved by the owner.
- Do not change top bar, header, hero, trust strip, cards, CTA sections, footer, SEO metadata, schema, sitemap, analytics, images, PDFs, or non-home pages as part of market ticker maintenance.

## Final Approved Design Summary

- Premium dark navy Market Watch section below the locked header.
- Compact desktop height: `82px` at `1366px` and `1280px`.
- Desktop section visually aligns with the approved `81px` main header band.
- Three-column desktop structure: Market Watch label, TradingView ticker tape, short context/disclaimer block.
- Mobile/tablet structure stacks label, ticker, and disclaimer vertically.
- Right-side context copy is short and readable.
- Disclaimer meaning is preserved: indicative context only, not live prices, not stock confirmation, not a formal quote.

## Desktop Design Specification

Rendered measurements:

| Viewport | Header main band | Market ticker |
| --- | ---: | ---: |
| 1366px | 81px | 82px |
| 1280px | 81px | 82px |

Height rules:

- Target desktop ticker height: about `82px`.
- Acceptable desktop range for minor rendering differences: about `80px` to `95px`.
- Do not exceed about `100px` on `1366px` or `1280px` without owner approval and documentation.
- Never return to the old pre-D3A height of about `139.56px`.

Section values:

- Selector: `.marketWatch`.
- Background: `linear-gradient(90deg,#050b16,#07101f 58%,#102554)`.
- Top border: `1px solid rgba(226,160,47,.18)`.
- Bottom border: `1px solid rgba(226,160,47,.22)`.
- Text color: `#d6dce8`.
- Inner wrapper selector: `.marketWatch .wrap`.
- Desktop grid: `208px minmax(0,1fr) minmax(250px,320px)`.
- Desktop gap: `12px`.
- Desktop wrapper min-height: `72px`.
- Desktop wrapper padding: `4px` top, `4px` bottom.
- Rail width inherits the homepage `.wrap` pattern: max `1180px`, centered, with `20px` horizontal padding.

Layout structure:

1. `.marketLabel`
   - Contains `Market Watch` title and `RFQ planning context`.
   - Uses a left vertical gold accent.
2. `.marketTape`
   - Contains the TradingView ticker tape container.
   - Uses subtle left and right dividers.
3. `.marketNote`
   - Contains the compact disclaimer/context copy.
   - Uses a subtle left divider on desktop.

Typography:

- Page font stack: `Arial, Helvetica, sans-serif` from the locked homepage/header override.
- Market label title: `12.5px`, `700`, white, uppercase, `line-height:1.12`, letter spacing `.08em`.
- Market label subtitle: `11.5px`, `line-height:1.28`, color `#aeb8ca`.
- Context body: `11.5px`, `line-height:1.28`, color `#aeb8ca`.
- Context title: `11.5px`, `700`, white, `line-height:1.2`, `margin-bottom:1px`.

Ticker values:

- Ticker source: TradingView ticker tape embed.
- Approved symbols:
  - `CAPITALCOM:COPPER` - Copper
  - `CAPITALCOM:ALUMINUM` - Aluminium
  - `CAPITALCOM:NICKEL` - Nickel
  - `AMEX:LEAD` - Lead
  - `FX_IDC:USDINR` - USD/INR
- Widget settings:
  - `isTransparent: true`
  - `displayMode: "adaptive"`
  - `colorTheme: "dark"`
  - `locale: "en"`
- Positive/negative value colors are controlled by the TradingView dark ticker widget. Preserve the current red negative and green/teal positive indicator behavior by preserving the widget and configuration.

## Mobile Design Specification

Rendered measurements:

| Viewport | Header main band | Market ticker |
| --- | ---: | ---: |
| 768px | 68.7px | 169.95px |
| 390px | 68px | 184.67px |
| 360px | 68px | 184.67px |

Mobile behavior:

- `.marketWatch .wrap` changes to a single-column grid.
- Mobile grid columns: `1fr`.
- Mobile gap: `4px`.
- Mobile wrapper padding: `6px` top and `6px` bottom.
- `.marketTape` removes desktop side dividers and horizontal padding.
- `.marketNote` removes desktop left divider, uses no left padding, and keeps compact top/bottom padding.
- Mobile must not create horizontal overflow.
- Mobile may stack and be taller than desktop to preserve readability.

Mobile content rule:

- The disclaimer must remain present.
- If future mobile refinements are needed, secondary wording may be shortened only if the safety meaning remains.
- Do not remove the "context only, not quotation" meaning.
- Do not hide the disclaimer completely.

## Final Disclaimer / Content Rule

Final approved visible copy:

Title:

`Context only, not a quotation.`

Body:

`Indicative signals only - not live prices, stock confirmation or a quote. Final quote depends on grade, form, size, quantity, documents, origin and logistics.`

The live HTML uses `&mdash;` between "only" and "not live prices" for display punctuation.

Required meaning:

- Values are indicative reference signals only.
- Values are not live prices.
- Values are not stock confirmation.
- Values are not a formal quotation.
- Final quote depends on grade, form, size, quantity, documents, origin, and logistics.

Do not add pricing promises. Do not imply live pricing. Do not imply confirmed stock.

## Allowed Content

Only this content pattern is allowed:

- `Market Watch`
- `RFQ planning context`
- Current approved ticker items and indicative signal values
- Short context/disclaimer text

## Forbidden Content

Do not add:

- Live price promises
- Confirmed stock claims
- Quotation guarantees
- Buy-now pricing
- Fake stock status
- Manufacturer, factory, mill, production, manufacturing unit, `we manufacture`, or similar wording
- Certifications or approval claims
- Badges, chips, or decorative labels that increase clutter
- Long paragraphs that make the ticker tall again
- Extra ticker items unless owner approves and the layout remains compact

## HTML Pattern

Representative final structure from `index.html`:

```html
<section class="marketWatch" aria-label="Indicative metal market watch">
  <div class="wrap">
    <div class="marketLabel">
      <strong>Market Watch</strong>
      <span>RFQ planning context</span>
    </div>
    <div class="marketTape">
      <div class="tradingview-widget-container" id="marketTicker">
        <div class="tradingview-widget-container__widget"></div>
      </div>
    </div>
    <p class="marketNote"><strong>Context only, not a quotation.</strong> Indicative signals only &mdash; not live prices, stock confirmation or a quote. Final quote depends on grade, form, size, quantity, documents, origin and logistics.</p>
  </div>
</section>
```

Required accessibility rule:

- Keep `aria-label="Indicative metal market watch"` or an equivalent accessible section name.

## CSS Pattern

Representative final scoped CSS from `index.html`:

```css
.marketWatch{
  background:linear-gradient(90deg,#050b16,#07101f 58%,#102554);
  border-top:1px solid rgba(226,160,47,.18);
  border-bottom:1px solid rgba(226,160,47,.22);
  color:#d6dce8;
}
.marketWatch .wrap{
  display:grid;
  grid-template-columns:208px minmax(0,1fr) minmax(250px,320px);
  align-items:center;
  gap:12px;
  min-height:72px;
  padding-top:4px;
  padding-bottom:4px;
}
.marketLabel{
  display:flex;
  flex-direction:column;
  gap:1px;
  min-width:0;
  position:relative;
  padding-left:12px;
}
.marketLabel::before{
  content:"";
  position:absolute;
  left:0;
  top:3px;
  bottom:3px;
  width:3px;
  border-radius:999px;
  background:linear-gradient(180deg,var(--accentSoft),var(--accent));
}
.marketLabel strong{
  color:#fff;
  font-size:12.5px;
  line-height:1.12;
  letter-spacing:.08em;
  text-transform:uppercase;
}
.marketLabel span,
.marketNote{
  color:#aeb8ca;
  font-size:11.5px;
  line-height:1.28;
}
.marketTape{
  min-width:0;
  overflow:hidden;
  border-left:1px solid rgba(226,160,47,.18);
  border-right:1px solid rgba(226,160,47,.18);
  padding:0 8px;
}
.tradingview-widget-container{
  min-height:44px;
}
.marketNote{
  margin:0;
  text-align:left;
  border-left:1px solid rgba(226,160,47,.18);
  padding:4px 0 4px 12px;
}
.marketNote strong{
  display:block;
  color:#fff;
  font-size:11.5px;
  line-height:1.2;
  margin-bottom:1px;
}
```

Responsive rule:

```css
@media (max-width:900px){
  .marketWatch .wrap{
    grid-template-columns:1fr;
    gap:4px;
    padding-top:6px;
    padding-bottom:6px;
  }
  .marketTape{
    border-left:0;
    border-right:0;
    padding:0;
  }
  .marketNote{
    text-align:left;
    border-left:0;
    padding-left:0;
    padding-top:2px;
    padding-bottom:0;
  }
}
```

Overflow prevention:

- Preserve `min-width:0` on `.marketLabel` and `.marketTape`.
- Preserve `.marketTape{overflow:hidden;}`.
- Preserve mobile single-column stacking at `max-width:900px`.

## JS / Data Pattern

The current ticker loader lives inline in `index.html`.

Function:

```js
function loadMarketTicker(){ ... }
```

Purpose:

- Load the TradingView ticker tape embed after page load.
- Configure the approved market signal list.
- Keep the display transparent/dark/adaptive so it fits the Rubinox ticker rail.

Current external script:

```text
https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js
```

Important rules:

- Do not change the ticker source logic unless required for layout safety and approved.
- Do not style this as a live pricing board.
- Treat values as indicative reference/context signals only.
- Do not use the widget values as quotation values, confirmed stock, or procurement commitments.

## Future Homepage Instructions

- This ticker belongs only on the homepage.
- Keep compact desktop height near the approved `82px`.
- Do not increase vertical copy.
- Do not add more ticker items unless owner approves and the desktop section remains compact.
- Do not remove disclaimer safety meaning.
- Do not present the ticker as live pricing, confirmed stock, or a quotation source.
- If a future owner-approved design change is made, create Market Ticker Lock V2 and update `docs/design-system/RUBINOX_DESIGN_FINGERPRINT.md`.

## QA Checklist

Run these checks before committing any future market ticker change:

- Visual screenshots at `1366`, `1280`, `768`, `390`, and `360`.
- Desktop height check against the approved `82px` target.
- Mobile no-horizontal-overflow check.
- Disclaimer meaning check.
- Top bar unchanged check.
- Header unchanged check.
- Header/topbar alignment unchanged check.
- Non-home pages not affected check.
- HTML validation.
- Sitemap check.
- Schema check.
- Accessibility check.
- Navigation test.
- Link crawl.
- Pa11y check.
- Forbidden-claims scan.
- `git diff --check`.

## Screenshot References

Final lock screenshots:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-market-ticker-lock-v1`

Non-home check screenshots:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-market-ticker-lock-v1-nonhome-check`

Captured homepage widths:

- `1366`
- `1280`
- `768`
- `390`
- `360`

Non-home pages checked:

- `company-profile.html` at `1366` and `390`
- `materials/stainless-steel.html` at `1366` and `390`

Non-home result:

- No `.marketWatch` section exists on the checked non-home pages.
- No horizontal overflow was detected.
- No non-home page code was changed for this lock.
