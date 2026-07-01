# Search Console And Bing Indexing Status - Batch 11D

Date: 2026-07-01
Website: https://rubinoxmetal.com
Scope: documentation-only indexing status report based on owner-provided Google Search Console exports and Bing Webmaster Tools screenshots.

## Guardrails

- No public website pages were changed.
- No new pages were created.
- No sitemap, schema, URL, H1, title/meta, canonical, analytics or internal-link changes were made.
- No business claims were added or expanded.
- Rubinox Metal and Alloys remains positioned as a stockist, supplier, importer, exporter and project supplier, not as a manufacturer.

## Webmaster Status

### Google Search Console

| Item | Status |
| --- | --- |
| Property type | Domain property for `rubinoxmetal.com` |
| Sitemap submitted | `https://rubinoxmetal.com/sitemap.xml` |
| Submitted date | 2026-07-01 |
| Last read | 2026-07-01 |
| Sitemap status | Success |
| Discovered pages | 261 |

Interpretation: Google has accepted the sitemap successfully. Early non-indexed rows should be monitored before changing public pages because sitemap discovery and indexing are separate steps.

### Bing Webmaster Tools

| Item | Status |
| --- | --- |
| Main sitemap URL | `https://rubinoxmetal.com/sitemap.xml` |
| Sitemap status | Success |
| URLs discovered from sitemap | 261 |
| Sitemap errors | 0 |
| Sitemap warnings | 0 |

Interpretation: Bing has accepted the sitemap successfully with no sitemap-level errors or warnings.

## URL Classification

### Normal Redirects - No Action

These are expected alternate host/protocol versions of the homepage. No indexing request is needed for these URLs if they redirect to the canonical HTTPS non-www homepage.

| URL | Classification | Action |
| --- | --- | --- |
| `http://rubinoxmetal.com/` | normal redirect / no action | Leave as-is; monitor only if redirect chain changes |
| `http://www.rubinoxmetal.com/` | normal redirect / no action | Leave as-is; monitor only if redirect chain changes |
| `https://www.rubinoxmetal.com/` | normal redirect / no action | Leave as-is; monitor only if redirect chain changes |

### Discovered - Currently Not Indexed

| URL | Classification | Action |
| --- | --- | --- |
| `https://rubinoxmetal.com/industries.html` | priority indexing request | Inspect URL in GSC and request indexing |
| `https://rubinoxmetal.com/materials/brass.html` | wait and monitor | Recheck at 7 and 14 days; review content/internal links if still not indexed after 30 days |
| `https://rubinoxmetal.com/materials/carbon-steel.html` | wait and monitor | Recheck at 7 and 14 days; review content/internal links if still not indexed after 30 days |
| `https://rubinoxmetal.com/materials/copper.html` | wait and monitor | Recheck at 7 and 14 days; review content/internal links if still not indexed after 30 days |
| `https://rubinoxmetal.com/materials/duplex-super-duplex.html` | wait and monitor | Recheck at 7 and 14 days; review content/internal links if still not indexed after 30 days |
| `https://rubinoxmetal.com/materials/mild-steel.html` | wait and monitor | Recheck at 7 and 14 days; review content/internal links if still not indexed after 30 days |
| `https://rubinoxmetal.com/materials/phosphor-bronze.html` | wait and monitor | Recheck at 7 and 14 days; review content/internal links if still not indexed after 30 days |
| `https://rubinoxmetal.com/materials/ss-304-supplier-india.html` | priority indexing request | Inspect URL in GSC and request indexing |
| `https://rubinoxmetal.com/materials/ss-316-supplier-india.html` | priority indexing request | Inspect URL in GSC and request indexing |
| `https://rubinoxmetal.com/materials/ss-316l-supplier-india.html` | priority indexing request | Inspect URL in GSC and request indexing |
| `https://rubinoxmetal.com/materials/stainless-steel-pipes-supplier-india.html` | priority indexing request | Inspect URL in GSC and request indexing |
| `https://rubinoxmetal.com/materials/stainless-steel-plates-supplier-india.html` | priority indexing request | Inspect URL in GSC and request indexing |
| `https://rubinoxmetal.com/materials/stainless-steel-sheets-supplier-india.html` | priority indexing request | Inspect URL in GSC and request indexing |
| `https://rubinoxmetal.com/materials/stainless-steel-supplier-mumbai.html` | priority indexing request | Inspect URL in GSC and request indexing |
| `https://rubinoxmetal.com/materials/stainless-steel-tubes-supplier-india.html` | priority indexing request | Inspect URL in GSC and request indexing |
| `https://rubinoxmetal.com/materials/titanium.html` | wait and monitor | Recheck at 7 and 14 days; review content/internal links if still not indexed after 30 days |
| `https://rubinoxmetal.com/quotation.html` | priority indexing request | Inspect URL in GSC and request indexing |

### Crawled - Currently Not Indexed

| URL | Classification | Action |
| --- | --- | --- |
| `https://rubinoxmetal.com/materials/ss-309-supplier-india.html` | needs future content/internal-link review if still not indexed after 30 days | Monitor first; avoid immediate public changes |
| `https://rubinoxmetal.com/materials/ss-202-supplier-india.html` | needs future content/internal-link review if still not indexed after 30 days | Monitor first; avoid immediate public changes |
| `https://rubinoxmetal.com/materials/ss-430-supplier-india.html` | needs future content/internal-link review if still not indexed after 30 days | Monitor first; avoid immediate public changes |
| `https://rubinoxmetal.com/materials/inconel-718-supplier-india.html` | needs future content/internal-link review if still not indexed after 30 days | Monitor first; consider priority request if GSC quota remains |
| `https://rubinoxmetal.com/materials/stainless-steel-fittings-supplier-india.html` | needs future content/internal-link review if still not indexed after 30 days | Monitor first; consider priority request if GSC quota remains |
| `https://rubinoxmetal.com/materials/nickel-200-supplier-india.html` | needs future content/internal-link review if still not indexed after 30 days | Monitor first; avoid immediate public changes |
| `https://rubinoxmetal.com/materials/stainless-steel-wire-mesh-supplier-india.html` | needs future content/internal-link review if still not indexed after 30 days | Monitor first; consider priority request if GSC quota remains |
| `https://rubinoxmetal.com/materials/stainless-steel-angles-supplier-india.html` | needs future content/internal-link review if still not indexed after 30 days | Monitor first; consider priority request if GSC quota remains |
| `https://rubinoxmetal.com/materials/stainless-steel-bars-rods-supplier-india.html` | needs future content/internal-link review if still not indexed after 30 days | Monitor first; consider priority request if GSC quota remains |
| `https://rubinoxmetal.com/sitemap.xml` | ignore sitemap XML indexing status | No action; XML sitemaps do not need to be indexed as pages |

## Google Priority URL Inspection / Request Indexing List

Use GSC URL Inspection first for these high-value pages, then request indexing where the tool allows it. If daily request limits apply, submit in this order.

1. `https://rubinoxmetal.com/quotation.html`
2. `https://rubinoxmetal.com/industries.html`
3. `https://rubinoxmetal.com/materials/ss-304-supplier-india.html`
4. `https://rubinoxmetal.com/materials/ss-316-supplier-india.html`
5. `https://rubinoxmetal.com/materials/ss-316l-supplier-india.html`
6. `https://rubinoxmetal.com/materials/stainless-steel-supplier-mumbai.html`
7. `https://rubinoxmetal.com/materials/stainless-steel-pipes-supplier-india.html`
8. `https://rubinoxmetal.com/materials/stainless-steel-tubes-supplier-india.html`
9. `https://rubinoxmetal.com/materials/stainless-steel-plates-supplier-india.html`
10. `https://rubinoxmetal.com/materials/stainless-steel-sheets-supplier-india.html`

Secondary GSC candidates if request quota remains:

1. `https://rubinoxmetal.com/materials/stainless-steel-fittings-supplier-india.html`
2. `https://rubinoxmetal.com/materials/stainless-steel-wire-mesh-supplier-india.html`
3. `https://rubinoxmetal.com/materials/stainless-steel-angles-supplier-india.html`
4. `https://rubinoxmetal.com/materials/stainless-steel-bars-rods-supplier-india.html`
5. `https://rubinoxmetal.com/materials/inconel-718-supplier-india.html`

## Bing URL Submission List

Submit the public, non-redirect, non-sitemap URLs below in Bing URL Submission if Bing indexing coverage does not pick them up from the successful sitemap.

### Priority

1. `https://rubinoxmetal.com/quotation.html`
2. `https://rubinoxmetal.com/industries.html`
3. `https://rubinoxmetal.com/materials/ss-304-supplier-india.html`
4. `https://rubinoxmetal.com/materials/ss-316-supplier-india.html`
5. `https://rubinoxmetal.com/materials/ss-316l-supplier-india.html`
6. `https://rubinoxmetal.com/materials/stainless-steel-supplier-mumbai.html`
7. `https://rubinoxmetal.com/materials/stainless-steel-pipes-supplier-india.html`
8. `https://rubinoxmetal.com/materials/stainless-steel-tubes-supplier-india.html`
9. `https://rubinoxmetal.com/materials/stainless-steel-plates-supplier-india.html`
10. `https://rubinoxmetal.com/materials/stainless-steel-sheets-supplier-india.html`

### Monitor / Submit If Quota Allows

1. `https://rubinoxmetal.com/materials/brass.html`
2. `https://rubinoxmetal.com/materials/carbon-steel.html`
3. `https://rubinoxmetal.com/materials/copper.html`
4. `https://rubinoxmetal.com/materials/duplex-super-duplex.html`
5. `https://rubinoxmetal.com/materials/mild-steel.html`
6. `https://rubinoxmetal.com/materials/phosphor-bronze.html`
7. `https://rubinoxmetal.com/materials/titanium.html`
8. `https://rubinoxmetal.com/materials/ss-309-supplier-india.html`
9. `https://rubinoxmetal.com/materials/ss-202-supplier-india.html`
10. `https://rubinoxmetal.com/materials/ss-430-supplier-india.html`
11. `https://rubinoxmetal.com/materials/inconel-718-supplier-india.html`
12. `https://rubinoxmetal.com/materials/stainless-steel-fittings-supplier-india.html`
13. `https://rubinoxmetal.com/materials/nickel-200-supplier-india.html`
14. `https://rubinoxmetal.com/materials/stainless-steel-wire-mesh-supplier-india.html`
15. `https://rubinoxmetal.com/materials/stainless-steel-angles-supplier-india.html`
16. `https://rubinoxmetal.com/materials/stainless-steel-bars-rods-supplier-india.html`

## Monitoring Plan

### 7-Day Check - 2026-07-08

- Export GSC Page Indexing again.
- Confirm sitemap remains Success with 261 discovered pages.
- Check whether the 10 Google priority URLs moved from Discovered/Crawled to indexed or inspected states.
- Submit/request indexing for any priority URLs not yet requested.
- Check Bing sitemap status remains Success and submit the Bing priority list if needed.

### 14-Day Check - 2026-07-15

- Compare GSC counts against the 2026-07-01 baseline: 3 redirects, 17 Discovered-not-indexed, 10 Crawled-not-indexed.
- Inspect remaining non-indexed high-value URLs.
- If a high-value URL still shows Crawled-not-indexed, record last crawl date and canonical selected by Google.
- Avoid content or internal-link changes unless GSC reports a clear technical reason.

### 30-Day Check - 2026-07-31

- If priority commercial pages are still not indexed, open a scoped future content/internal-link review batch.
- Review pages for differentiated buyer value, internal links from hubs, canonical consistency and overlap with similar pages.
- Keep any future edits claim-safe: no manufacturer, factory, ready-stock, fixed-price, certification, client, project, rating or delivery-guarantee claims.
- Keep new public-page creation gated by GSC data, enquiry evidence or owner-approved priority.

## Current Recommendation

No website code changes are recommended from this first indexing snapshot. The sitemap is accepted in both Google and Bing, and the non-indexed URLs should be handled through request-indexing, Bing URL submission and measured monitoring before content changes.
