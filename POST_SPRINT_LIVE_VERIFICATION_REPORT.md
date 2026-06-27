# Post-Sprint Live Verification Report

Project: Rubinox Metal and Alloys  
Website: https://rubinoxmetal.com  
Repository: tarrunmjain/rubinox-website  
Active folder: `C:\Users\Dell\OneDrive\Documents\rubinox-website-live`  
Verification date: 2026-06-27

## 1. Latest Local Commit

- Branch: `main`
- Latest local commit: `1de6c4b Add site wide polish audit report`
- Full local hash: `1de6c4bba67a0e655d58fc18f71d2b5ee9255a9d`

Recent local history includes the full sprint sequence:

- `1de6c4b Add site wide polish audit report`
- `44de715 Add blog knowledge hub and SEO articles`
- `dc0a2c6 Polish location and export page design`
- `374e0ec Upgrade material page RFQ CTA sections`
- `7fc4040 Polish footer and mobile contact bar`
- `e5408c8 Apply site wide visual alignment polish`
- `ed5188b Add high speed steel and product form pages`

## 2. Latest Remote Main Commit

- `origin/main`: `1de6c4bba67a0e655d58fc18f71d2b5ee9255a9d`
- Remote `main` matches the latest expected local sprint commit.

## 3. Active Repo Git Status

Before this report was created, the active repo status was:

```text
?? RUBINOX_MASTER_PROJECT_STATUS.md
```

After creating this documentation-only report, expected local status is:

```text
?? POST_SPRINT_LIVE_VERIFICATION_REPORT.md
?? RUBINOX_MASTER_PROJECT_STATUS.md
```

No modified or staged website files were found during this verification. No commit or push was performed.

## 4. Old Backup Folder Codex Batch File Check

Old backup folder inspected only:

`C:\Users\Dell\OneDrive\Documents\RUBINOX METAL AND ALLOYS WEBSITE`

Checked files:

- `codex_batch1_edit.js`: not found
- `codex_batch2_edit.js`: not found
- `codex_batch3_edit.js`: not found
- Recursive `codex_batch*.js`: none found

Finding:

- No `codex_batch*.js` files were found in the active repo.
- No `codex_batch*.js` files were found in the old backup folder during this check.
- Therefore there are no batch helper files to delete or ignore from either location.

## 5. Local QA Results

| Command | Result |
| --- | --- |
| `pnpm run qa:sitemap` | Pass. 196 sitemap URLs, 196 local HTML pages, 0 missing URLs, 0 sitemap-only URLs, 0 duplicates. |
| `pnpm run qa:crawl` | Pass. 285 links scanned, no broken internal links reported. |
| `pnpm run qa:schema` | Pass. 196 HTML pages scanned, 525 JSON-LD blocks found, 0 invalid JSON-LD blocks. |
| `pnpm run qa:accessibility` | Pass. 5 configured pages checked, 0 Axe violations. |
| `pnpm run qa:html` | Expected legacy baseline. 196 pages checked, 59 invalid legacy pages remain; all new sprint pages validate. |
| `pnpm run test:navigation` | Pass. Navigation verification passed. |

No navigation timeout occurred.

## 6. Live URL Spot-Check Results

The requested live URLs were checked using `Invoke-WebRequest` against `https://rubinoxmetal.com`.

Summary:

- Pages checked: 31
- HTTP 200 pages: 31
- Unique image assets discovered from checked pages: 28
- Broken image assets found: 0
- Header marker present: 31/31
- Footer marker present: 31/31
- Logo reference present: 31/31
- Mobile top bar contact/social CSS markers present: 31/31
- Direct unsafe claim marker on checked pages: 0

Checked groups:

| Group | Pages checked | Result |
| --- | ---: | --- |
| Core pages | 5 | All opened with HTTP 200, header/footer/logo markers present, no broken image assets. |
| Hub pages | 3 | All opened with HTTP 200, header/footer/logo markers present, no broken image assets. |
| New material/product pages | 3 | All opened with HTTP 200, header/footer/logo markers present, no broken image assets. |
| Sample city pages | 10 | All opened with HTTP 200, header/footer/logo markers present, no broken image assets. |
| Sample export pages | 6 | All opened with HTTP 200, header/footer/logo markers present, no broken image assets. |
| Sample blog pages | 4 | All opened with HTTP 200, header/footer/logo markers present, no broken image assets. |

Notes:

- Core/material templates do not show a visible `Skip to content` line in the fetched HTML output.
- Location, export and blog templates include the `.skip-link` hidden-until-focus CSS marker.
- IndiaMART text/badge markers are present on the checked core, hub, location, export and new material/product pages where the platform footer appears.
- Blog pages use a simpler footer and do not include the IndiaMART platform badge, but no broken IndiaMART image or broken footer image was found.
- Live image checks found 0 broken image URLs among the 28 unique image assets discovered in the checked pages.

## 7. Sitemap Count

- Sitemap URLs: 196
- Local HTML pages: 196
- Missing from sitemap: 0
- Sitemap URLs without local file: 0
- Duplicate sitemap URLs: 0

## 8. Schema Count and Invalid Count

- HTML pages scanned: 196
- JSON-LD blocks found: 525
- Invalid JSON-LD blocks: 0

## 9. Accessibility Result

- Configured Axe pages checked: 5
- Total Axe violations: 0

Pages checked by the configured script:

- `/`
- `/quotation.html`
- `/industries.html`
- `/materials/stainless-steel.html`
- `/materials/ss-304-supplier-india.html`

## 10. HTML Validation Baseline

- HTML pages checked: 196
- Invalid pages: 59
- This matches the known legacy baseline.
- All new sprint pages, including blog pages, location/export pages, High Speed Steel, Channels and Perforated Sheets, validate successfully.

## 11. Unsafe Wording Scan Result

Terms scanned across active HTML files:

- manufacturer
- manufactured by Rubinox
- factory
- ready stock
- lowest price
- best price
- competitive pricing
- guaranteed delivery
- branch office
- local warehouse
- authorised mill
- approved vendor
- certified exporter
- exported to
- global clients
- delivery guarantee

Result summary:

| Term | Matches | Files | Assessment |
| --- | ---: | ---: | --- |
| `manufacturer` | 20 | 9 | Safe context. Used in negative positioning such as Rubinox is not a manufacturer, or buyer-sector references such as manufacturers/processors. |
| `manufactured by Rubinox` | 0 | 0 | No issue found. |
| `factory` | 0 | 0 | No issue found. |
| `ready stock` | 0 | 0 | No issue found. |
| `lowest price` | 0 | 0 | No issue found. |
| `best price` | 0 | 0 | No issue found. |
| `competitive pricing` | 0 | 0 | No issue found. |
| `guaranteed delivery` | 30 | 15 | Safe negative context on export/location pages; no guaranteed delivery is claimed. |
| `branch office` | 0 | 0 | No issue found. |
| `local warehouse` | 130 | 65 | Safe negative context stating Rubinox does not claim local warehouses. |
| `authorised mill` | 0 | 0 | No issue found. |
| `approved vendor` | 1 | 1 | Safe buyer-document context on Special Engineering Alloys page; not a Rubinox vendor-status claim. |
| `certified exporter` | 0 | 0 | No issue found. |
| `exported to` | 0 | 0 | No issue found. |
| `global clients` | 0 | 0 | No issue found. |
| `delivery guarantee` | 2 | 2 | Safe negative context; no delivery guarantee is claimed. |

No unsafe business claim requiring an immediate website edit was found.

## 12. Issues Found

No critical broken-link, broken-image, invalid-schema or unsafe-claim issue was found.

Observations only:

- Blog pages use a simplified footer without the IndiaMART platform badge. This is not a broken image issue, but a future design consistency pass could add the platform footer system to blog templates if desired.
- The known legacy HTML validation baseline of 59 invalid pages remains.
- The accessibility QA script currently checks representative pages, not all 196 pages.

## 13. Recommended Next Action

1. Commit this report if the verification record should be stored in the repository.
2. Plan a focused legacy HTML validation cleanup for the remaining 59 invalid pages.
3. Consider expanding accessibility QA coverage to all template families, including blog, location/export and material/product-form pages.
4. Optionally align the Blog footer with the platform/social footer used on core pages in a future visual consistency pass.

## Final Confirmation

- Active repo local `main` includes `1de6c4b`.
- Remote `origin/main` points to `1de6c4bba67a0e655d58fc18f71d2b5ee9255a9d`.
- No `codex_batch*.js` files exist in the active repo.
- No `codex_batch*.js` files were found in the old backup folder during this check.
- QA passed within expected baselines.
- Live spot checks passed with all requested pages returning HTTP 200 and 0 broken image assets.
- No website HTML/CSS/JS/images/sitemap/schema files were modified.
- No commit or push was performed.