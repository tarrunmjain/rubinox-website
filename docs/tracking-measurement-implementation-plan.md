# Rubinox Tracking And Measurement Implementation Plan

Date: 2026-07-01
Scope: Batch 11A implementation plan with Batch 11B completion notes.

Batch 11B status: repository-side GA4 standardization and safe event tracking are implemented. Owner-side Search Console DNS verification, sitemap submission and Bing import remain pending.

## Objectives

1. Confirm ownership and access for GA4, Google Search Console and Bing Webmaster Tools.
2. Standardize analytics coverage across the static site only after owner approval.
3. Track lead intent without collecting personal data in the repository.
4. Create a repeatable monthly reporting workflow for SEO, RFQ and content decisions.
5. Preserve current SEO URLs, metadata, schema, sitemap URLs and internal linking strategy unless a future batch explicitly scopes changes.

## Phase 1 - Owner Confirmation

| Item | Owner action | Repository action after approval |
| --- | --- | --- |
| GA4 property | Confirmed as `G-JT5X5L5H07` for Rubinox Website | Completed in Batch 11B across 261 of 261 HTML pages |
| GA4 access | Grant reporting/Admin access as needed | Confirm events after deployment and choose key events in GA4 Admin |
| Search Console | Add DNS TXT record for domain verification | No repo verification artifact required |
| Bing Webmaster Tools | Import from verified GSC property | No repo verification artifact required |
| Contact data | Current WhatsApp number and RFQ email confirmed for continued use | No public contact change made |
| Profiles | Confirm GBP, social and directory URLs | Add links only in a future scoped trust/profile batch |

## Phase 2 - GA4 Coverage Review

Batch 11B standardized GA4 coverage:

1. All 261 HTML pages load `G-JT5X5L5H07`.
2. All 261 HTML pages include `/assets/js/tracking.js`.
3. The old accidental ID `G-CR18QYPS6C` was removed.
4. Legacy inline `generate_lead` helper code was replaced by safe central tracking compatibility functions.
5. Representative lead actions should be tested in GA4 Realtime or DebugView after deployment.
6. Approved lead events should be marked as key events in GA4 Admin after event receipt is confirmed.

Do not add Google Ads conversion tags unless a paid campaign batch is separately approved.

## Phase 3 - Event Tracking

Use `data/tracking-event-map.csv` as the source of truth. Batch 11B implemented:

1. Primary lead events: WhatsApp, email, phone and quotation page navigation.
2. Static quotation form intent events: form start, email submit and WhatsApp submit.
3. Secondary conversion events: company profile PDF/page, technical resources, quality documentation and Knowledge Hub article clicks.
4. Directory/social outbound events for existing public links.
5. Reporting parameters limited to safe context: `page_path`, `link_type`, `cta_location`, `destination_type`, `outbound_domain` and `file_type`.

No event should store buyer names, email addresses, phone numbers, BOQ details, drawings or other sensitive RFQ content.

## Phase 4 - Search Measurement

After owner Search Console and Bing verification:

1. Submit `https://rubinoxmetal.com/sitemap.xml`.
2. Confirm indexed status for core pages, material hubs, grade/spec pages, location pages, export pages and blog articles.
3. Export monthly query/page performance for:
   - Clicks.
   - Impressions.
   - CTR.
   - Average position.
   - Top gaining and declining pages.
   - Queries by material, grade, product form, location and export market.
4. Use findings to prioritize refreshes to existing pages before creating new pages.

## Phase 5 - Monthly Reporting

Use `docs/monthly-seo-measurement-report-template.md` once GSC, Bing and GA4 data are available.

Reporting cadence:

1. First baseline report after 28 full days of verified data.
2. Monthly report during the first week of each month.
3. Separate implementation tickets for any public page, metadata, schema or sitemap change suggested by the report.

## Safety Rules For Future Implementation

- Do not commit API keys, OAuth secrets, service-account JSON, verification tokens unless the owner explicitly approves the exact method.
- Do not commit placeholder verification files or fake IDs.
- Do not change public SEO URLs, H1 intent, title/meta/canonical, schema meaning, sitemap URLs or broad internal-link strategy as part of analytics work.
- Do not introduce unsafe manufacturer, factory, stock, price, certification, client, project, review, rating or delivery claims.
