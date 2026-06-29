# Legacy HTML Validation Cleanup Report

Date: 2026-06-29

## Scope

Batch 2 cleaned HTML validation issues only. No redesign, SEO rewrite, new public page, URL change, sitemap change, or business-claim expansion was included.

Active folder used: `C:\Users\Dell\OneDrive\Documents\rubinox-website-live`

## Starting Baseline

Command used for the saved baseline:

```powershell
npm.cmd run qa:html
```

Saved raw output:

```text
reports/html-validation-before-batch-2.txt
```

Baseline result:

| Metric | Count |
| --- | ---: |
| HTML pages checked | 261 |
| Invalid pages | 59 |
| Total validation errors | 77 |
| Warnings | 0 |

## Invalid Pages At Start

```text
index.html: 2 errors
materials/hastelloy-b-2-supplier-india.html: 1 error
materials/hastelloy-b-3-supplier-india.html: 1 error
materials/hastelloy-c-22-supplier-india.html: 1 error
materials/hastelloy-c-276-supplier-india.html: 1 error
materials/hastelloy-c-4-supplier-india.html: 1 error
materials/hastelloy-x-supplier-india.html: 1 error
materials/incoloy-800-supplier-india.html: 1 error
materials/incoloy-825-supplier-india.html: 1 error
materials/inconel-600-supplier-india.html: 1 error
materials/inconel-625-supplier-india.html: 1 error
materials/inconel-718-supplier-india.html: 1 error
materials/monel-400-supplier-india.html: 1 error
materials/monel-k-500-supplier-india.html: 1 error
materials/nickel-200-supplier-india.html: 1 error
materials/nickel-201-supplier-india.html: 1 error
materials/nitronic-60-supplier-india.html: 1 error
materials/smo-254-supplier-india.html: 1 error
materials/ss-17-4-ph-supplier-india.html: 1 error
materials/ss-201-supplier-india.html: 1 error
materials/ss-202-supplier-india.html: 1 error
materials/ss-253ma-supplier-india.html: 1 error
materials/ss-304-supplier-india.html: 1 error
materials/ss-304l-supplier-india.html: 1 error
materials/ss-309-supplier-india.html: 2 errors
materials/ss-309s-supplier-india.html: 1 error
materials/ss-310-supplier-india.html: 1 error
materials/ss-310s-supplier-india.html: 1 error
materials/ss-316-supplier-india.html: 1 error
materials/ss-316l-supplier-india.html: 1 error
materials/ss-316ti-supplier-india.html: 1 error
materials/ss-317l-supplier-india.html: 2 errors
materials/ss-321-supplier-india.html: 1 error
materials/ss-321h-supplier-india.html: 1 error
materials/ss-347-supplier-india.html: 1 error
materials/ss-347h-supplier-india.html: 1 error
materials/ss-409-supplier-india.html: 1 error
materials/ss-410-supplier-india.html: 1 error
materials/ss-420-supplier-india.html: 1 error
materials/ss-430-supplier-india.html: 1 error
materials/ss-904l-supplier-india.html: 2 errors
materials/stainless-steel-angles-supplier-india.html: 1 error
materials/stainless-steel-bars-rods-supplier-india.html: 7 errors
materials/stainless-steel-circles-supplier-india.html: 1 error
materials/stainless-steel-coils-supplier-india.html: 1 error
materials/stainless-steel-fasteners-supplier-india.html: 1 error
materials/stainless-steel-fittings-supplier-india.html: 1 error
materials/stainless-steel-flanges-supplier-india.html: 1 error
materials/stainless-steel-flats-supplier-india.html: 1 error
materials/stainless-steel-pipes-supplier-india.html: 1 error
materials/stainless-steel-plates-supplier-india.html: 1 error
materials/stainless-steel-sheets-supplier-india.html: 1 error
materials/stainless-steel-supplier-mumbai.html: 9 errors
materials/stainless-steel-tubes-supplier-india.html: 1 error
materials/stainless-steel-wire-mesh-supplier-india.html: 1 error
materials/titanium-grade-1-supplier-india.html: 1 error
materials/titanium-grade-2-supplier-india.html: 1 error
materials/titanium-grade-23-supplier-india.html: 1 error
materials/titanium-grade-5-supplier-india.html: 1 error
```

## Error Types And Fix Strategy

| Error type | Count | Fix strategy |
| --- | ---: | --- |
| `doctype-style` | 58 | Changed lowercase `<!doctype html>` to uppercase `<!DOCTYPE html>` on reported pages only. |
| `no-raw-characters` | 13 | Encoded visible raw ampersands as `&amp;` on the reported text nodes only. |
| `prefer-native-element` | 4 | Replaced reported `<div id="main-content" role="main">` wrappers with native `<main id="main-content">` and matching `</main>` closures. |
| `tel-non-breaking` | 1 | Replaced the visible space in the homepage telephone CTA text with `&nbsp;`; rendered text remains the same. |
| `aria-label-misuse` | 1 | Converted the homepage buyer path link group from a labelled `<div>` to a labelled `<nav>` with the same class and links. |

## Pages Fixed

All 59 invalid pages listed above were fixed. The main changed groups were:

- Homepage validation cleanup: `index.html`.
- Stainless steel legacy pages and forms.
- Nickel alloy, Incoloy, Inconel, Monel, Hastelloy and Nickel grade pages.
- SMO 254 and Nitronic 60 grade pages.
- Titanium grade pages.

## Final Validation Result

Command:

```powershell
npm.cmd run qa:html
```

Final result:

| Metric | Count |
| --- | ---: |
| HTML pages checked | 261 |
| Invalid pages | 0 |

## Regression QA Results

| Check | Result |
| --- | --- |
| `npm.cmd run qa:sitemap` | Passed: 261 sitemap URLs, 261 local HTML pages, 0 missing, 0 extra, 0 duplicate URLs. |
| `npm.cmd run qa:crawl` | Passed: 394 links scanned. |
| `npm.cmd run qa:schema` | Passed: 261 pages, 866 JSON-LD blocks, 0 invalid blocks. |
| `npm.cmd run qa:accessibility` | Passed: 5 configured pages, 0 violations. |
| `npm.cmd run test:navigation` | Passed. |
| `npm.cmd run qa:html` | Passed: 261 pages checked, 0 invalid pages. |
| `npm.cmd run qa:links` | Passed: 394 links scanned. |
| `npm.cmd run qa:pa11y` | Passed: 9/9 URLs within configured threshold. Existing quotation/contact findings remain within threshold and were not part of this batch. |
| `npm.cmd run qa:images:audit` | Completed: 179 image files, 4192 references, 0 missing, 54 non-WebP, 2 oversized, 3399 missing/empty alt instances. No images rewritten. |
| `npm.cmd run qa:forbidden-claims` | Completed: 321 files scanned, 330 broad matches flagged for review, no files rewritten. |
| `npm.cmd run qa:full` | Passed with extended timeout. Lighthouse representative scores remained non-blocking in the current config. |
| `git diff --check` | Passed with no whitespace errors. Git reported line-ending warnings only. |

## Visual Smoke Result

Rendered smoke check completed with Playwright on 13 pages across 5 viewport widths: 1366, 1280, 768, 390 and 360.

Pages checked:

- `/`
- `/materials/ss-309-supplier-india.html`
- `/materials/ss-317l-supplier-india.html`
- `/materials/ss-904l-supplier-india.html`
- `/materials/stainless-steel-bars-rods-supplier-india.html`
- `/materials/stainless-steel-supplier-mumbai.html`
- `/materials/inconel-625-supplier-india.html`
- `/materials/hastelloy-c-276-supplier-india.html`
- `/materials/monel-400-supplier-india.html`
- `/materials/nickel-200-supplier-india.html`
- `/materials/smo-254-supplier-india.html`
- `/materials/titanium-grade-2-supplier-india.html`
- `/materials/duplex-2205-supplier-india.html`

Result: passed 65 page/viewport combinations. Checks covered page-level horizontal overflow, sticky header signal, logo visibility, one visible H1, compact white footer signal, local image loading, and RFQ/contact link presence.

## Claim Safety Result

No public copy rewrite or claim expansion was performed. The forbidden-claims scan remained a review-only scan and did not rewrite files. No manufacturer, factory, stock, price, certification, rating, client, project or delivery guarantee claim was introduced.

## Deferred Items

No HTML validation errors were deferred.

Existing non-validation audit backlogs remain separate batches:

- Image audit findings: non-WebP files, oversized files and missing/empty alt instances.
- Broad forbidden-claims review matches that require human/context review.
- Existing Pa11y thresholded findings on quotation/contact pages.

## Preservation Confirmations

- No public SEO URLs changed.
- No sitemap URLs changed.
- No H1 intent changed; source-only entity encoding preserves rendered H1 text.
- No title, meta description, canonical, Open Graph or Twitter metadata was intentionally changed.
- No JSON-LD meaning was changed; schema validation remains clean.
- No navigation strategy or internal link strategy was changed.
- No visual redesign, CSS restyling, color change, typography change or layout polish was included.
- The two pre-existing untracked files remain untouched: `CARD_ACCENT_STYLE_AUDIT.md` and `RUBINOX_MASTER_PROJECT_STATUS.md`.