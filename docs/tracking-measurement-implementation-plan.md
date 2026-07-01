# Rubinox Tracking And Measurement Implementation Plan

Date: 2026-07-01
Scope: implementation plan only. No public tracking code was added in Batch 11A.

## Objectives

1. Confirm ownership and access for GA4, Google Search Console and Bing Webmaster Tools.
2. Standardize analytics coverage across the static site only after owner approval.
3. Track lead intent without collecting personal data in the repository.
4. Create a repeatable monthly reporting workflow for SEO, RFQ and content decisions.
5. Preserve current SEO URLs, metadata, schema, sitemap URLs and internal linking strategy unless a future batch explicitly scopes changes.

## Phase 1 - Owner Confirmation

| Item | Owner action | Repository action after approval |
| --- | --- | --- |
| GA4 property | Confirm the active GA4 property and measurement ID | Audit current snippet coverage and prepare a safe static include or page-level rollout plan |
| GA4 access | Grant access to reporting and Admin event settings | Confirm whether `generate_lead` events are arriving and choose key events |
| Search Console | Choose domain property or URL-prefix verification | Add only the approved verification method, then submit sitemap |
| Bing Webmaster Tools | Choose GSC import, DNS, meta tag or XML file | Add only the approved verification method, then submit sitemap |
| Contact data | Confirm WhatsApp, email, phone and business hours | Align public contact and event labels only if needed |
| Profiles | Confirm GBP, social and directory URLs | Add links only in a future scoped trust/profile batch |

## Phase 2 - GA4 Coverage Review

Current audit shows GA4 code on 195 of 261 HTML pages and absent from 66 pages. After owner confirmation:

1. Confirm whether the existing GA4 property is correct.
2. Confirm whether the current `generate_lead` event should remain the primary event.
3. Choose one implementation pattern for static pages:
   - Keep inline snippets and patch only missing pages.
   - Move to a shared static JS file if the owner approves a broader implementation cleanup.
4. Test representative lead actions in GA4 DebugView.
5. Mark approved lead events as key events in GA4 Admin.

Do not add Google Ads conversion tags unless a paid campaign batch is separately approved.

## Phase 3 - Event Tracking

Use `data/tracking-event-map.csv` as the source of truth. Recommended order:

1. Primary lead events: WhatsApp, email, phone and quotation page navigation.
2. RFQ form or submission tracking if a form endpoint is added later.
3. Secondary conversion events: company profile PDF, Google Maps, technical resources and price-factor page engagement.
4. Reporting dimensions: page path, page type, material family, grade/specification, product form, location or export market where safely derivable from the page URL.

No event should store buyer names, email addresses, phone numbers, BOQ details, drawings or other sensitive RFQ content.

## Phase 4 - Search Measurement

After Search Console and Bing verification:

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

