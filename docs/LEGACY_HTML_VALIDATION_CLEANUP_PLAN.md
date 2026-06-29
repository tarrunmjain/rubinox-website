# Legacy HTML Validation Cleanup Plan

Date: 2026-06-29
Scope: planning only. Do not mix this cleanup with design, layout, SEO expansion, or content rewrite batches.

## Current Baseline

Command run:

```powershell
npm.cmd run qa:html
```

Baseline result:

- HTML pages checked: 261
- Invalid pages: 58
- Total validation errors: 75
- Warnings: 0 in the current script output

Primary rule families from `tool-reports/html-validate.json`:

- `doctype-style`: 58 instances
- `no-raw-characters`: 13 instances
- `prefer-native-element`: 4 instances

Highest-count pages:

| Page | Error count |
| --- | ---: |
| `materials/stainless-steel-supplier-mumbai.html` | 9 |
| `materials/stainless-steel-bars-rods-supplier-india.html` | 7 |
| `materials/ss-309-supplier-india.html` | 2 |
| `materials/ss-317l-supplier-india.html` | 2 |
| `materials/ss-904l-supplier-india.html` | 2 |

Most remaining affected pages are material, grade, and product-form pages under `materials/`, especially stainless steel, nickel alloy, titanium, SMO 254, and related form pages.

## Cleanup Strategy

1. Keep this as a dedicated technical cleanup batch.
2. Do not change URLs, H1s, titles, meta descriptions, canonical tags, schema intent, page copy, navigation, footer, or visual design.
3. Fix one validation rule family at a time.
4. Start with `doctype-style` if the fix is mechanical and safe across the affected templates.
5. Address `no-raw-characters` with careful character/entity replacement only where validation requires it.
6. Address `prefer-native-element` only after confirming the HTML semantics and CSS/JS behavior remain unchanged.
7. Run `npm.cmd run qa:html` after each focused group of fixes.
8. Do a final full QA pass before committing.

## QA Requirements

Required after cleanup edits:

```powershell
npm.cmd run qa:html
npm.cmd run qa:sitemap
npm.cmd run qa:crawl
npm.cmd run qa:schema
npm.cmd run qa:accessibility
npm.cmd run test:navigation
git diff --check
```

Recommended additional checks:

```powershell
npm.cmd run qa:forbidden-claims
npm.cmd run qa:images:audit
```

For any touched public HTML page, confirm:

- The page still opens locally.
- One H1 remains present.
- Canonical URL and sitemap URL are unchanged.
- JSON-LD remains valid.
- WhatsApp, email, phone, and quotation links are unchanged.
- No manufacturer, factory, fake certification, stock guarantee, or price-list claim was introduced.

## Do Not Mix With Design Batches

This cleanup should not include card styling, typography, spacing, header, footer, CTA, image, or layout changes. Keeping validation cleanup separate makes regressions easier to spot and preserves the current indexed SEO surface.