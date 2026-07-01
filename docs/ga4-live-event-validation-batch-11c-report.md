# GA4 Live Event Validation - Batch 11C

Date: 2026-07-01
Production domain: https://rubinoxmetal.com
Validated commit: c26e23755c0516243294ac3563572da8e27ded69
GA4 Measurement ID: G-JT5X5L5H07

## Scope

Batch 11C validated the Batch 11B GA4 implementation on the live site and in the static source. No GA4 account access was used, no Google Search Console or Bing verification artifacts were added, and no owner/customer form data was submitted.

## Static Tracking QA

| Check | Result |
| --- | --- |
| HTML files scanned | 261 |
| Pages with exactly one `G-JT5X5L5H07` gtag source | 261 |
| Pages with exactly one `gtag('config', 'G-JT5X5L5H07');` call | 261 |
| Pages with exactly one `/assets/js/tracking.js` include | 261 |
| `G-CR18QYPS6C` occurrences | 0 |
| `generate_lead` occurrences | 0 |
| inline `function trackLeadAndGo` definitions | 0 |
| bad tracking coverage files | 0 |

Additional scans found no repo GSC/Bing verification artifacts, no placeholder tracking IDs, and no old quotation static-form event names. `assets/js/tracking.js` does not read form `.value`, query form fields, use cookies, or use local/session storage for tracking payloads.

## Live Page Load QA

Headless Chromium checked these production URLs:

| URL | Status | GA4 tag | tracking.js | Console/page errors | Header/footer | Layout |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | 200 | present | 200, ready | 0 / 0 | present | no horizontal overflow |
| `/quotation.html` | 200 | present | 200, ready | 0 / 0 | present | no horizontal overflow |
| `/contact.html` | 200 | present | 200, ready | 0 / 0 | present | no horizontal overflow |
| `/materials/ss-304-supplier-india.html` | 200 | present | 200, ready | 0 / 0 | present | no horizontal overflow |
| `/blog.html` | 200 | present | 200, ready | 0 / 0 | present | no horizontal overflow |
| `/blog/stainless-steel-304-vs-316-vs-316l.html` | 200 | present | 200, ready | 0 / 0 | present | no horizontal overflow |
| `/export/uae.html` | 200 | present | 200, ready | 0 / 0 | present | no horizontal overflow |
| `/locations/mumbai.html` | 200 | present | 200, ready | 0 / 0 | present | no horizontal overflow |
| `/company-profile.html` | 200 | present | 200, ready | 0 / 0 | present | no horizontal overflow |
| `/technical-resources.html` | 200 | present | 200, ready | 0 / 0 | present | no horizontal overflow |

Screenshots and raw JSON outputs were saved outside the repo at:

`C:\Users\Dell\AppData\Local\Temp\rubinox-batch11c-live-event-validation-20260701`

## Click Simulation QA

The browser run replaced `window.gtag` with a temporary local stub so test events were captured without sending manual test noise into GA4. Anchor defaults and delayed navigation were suppressed by the test harness after the tracking handlers ran, so click destination and event classification could be verified without leaving the page.

| Interaction | Expected event | Result |
| --- | --- | --- |
| Header WhatsApp | `click_whatsapp_header` | passed |
| Main/general WhatsApp CTA | `click_whatsapp_general` | passed |
| Quotation page WhatsApp link | `click_whatsapp_quotation` | passed |
| Quotation page email link | `click_email_quotation` | passed |
| Contact page phone link | `click_phone_contact` | passed |
| Contact page email link | `click_email_contact` | passed |
| Request Quote CTA | `click_request_quote_cta` | passed |
| Company profile PDF link | `click_company_profile_pdf` | passed |
| Company profile page link | `click_company_profile_page` | passed |
| Technical Resources link | `click_technical_resources` | passed |
| Quality Documentation link | `click_quality_documentation` | passed |
| Knowledge Hub article click | `click_knowledge_hub_article` | passed |
| External directory link | `outbound_indiamart` | passed |
| External social link | `outbound_linkedin` | passed |
| Quotation form start | `quotation_form_start` | passed |
| Quotation form WhatsApp submit | `quotation_form_whatsapp_submit` | passed |
| Quotation form email submit | `quotation_form_email_submit` | passed |

All simulated interactions returned safe payload keys only: `page_path`, `link_type`, `cta_location`, `destination_type`, `outbound_domain`, and `file_type`. No email address, phone number, field value, message body, buyer name, company name, quantity, size, grade, or material value was captured in the tracking payloads.

The no-gtag guard was also tested on production: when `window.gtag` was unset, `window.rubinoxTracking.track(...)` returned without throwing, with 0 console errors and 0 page errors.

## QA Results

| Command | Result |
| --- | --- |
| `git status --short` before edits | only protected untracked files |
| `git branch` | `main` |
| `git pull origin main` | already up to date |
| `npm.cmd run qa:sitemap` | passed: 261 sitemap URLs, 261 local HTML pages, 0 missing, 0 duplicates |
| `npm.cmd run qa:crawl` | passed: 395 links scanned |
| `npm.cmd run qa:schema` | passed: 261 pages, 866 JSON-LD blocks, 0 invalid |
| `npm.cmd run qa:accessibility` | passed: 5 pages, 0 violations |
| `npm.cmd run test:navigation` | passed |
| `npm.cmd run qa:html` | passed: 261 pages, 0 invalid |
| `npm.cmd run qa:links` | passed: 395 links scanned |
| `npm.cmd run qa:pa11y` | passed: 9/9 URLs within repo thresholds |
| `npm.cmd run qa:images:audit` | completed with existing inventory counts; no missing image files and no rewrites |
| `npm.cmd run qa:forbidden-claims` | completed review scan; 524 existing matches flagged for review, no rewrites |
| `git diff --check` | passed |

## SEO, Schema, Claim, And Privacy Safety

No public website pages were changed in Batch 11C. No public SEO URLs, H1 intent, title/meta/canonical tags, schema meaning, sitemap URLs, broad internal link strategy, contact details, or visual design were changed.

No unsafe manufacturer, factory, stock, price, certification, client, project, rating, or delivery claims were introduced. No personal data or RFQ field values are sent in GA4 event payloads.

## Owner Remaining Actions

1. Manually verify GA4 Realtime / DebugView after deployment using real browsing in the GA4 property for `G-JT5X5L5H07`.
2. Complete Google Search Console DNS TXT domain verification.
3. Submit `https://rubinoxmetal.com/sitemap.xml` in Google Search Console after verification.
4. Import the verified Google Search Console property into Bing Webmaster Tools.

## Batch 11C Status

Technical implementation is approved from source QA and live browser QA. GA4 Realtime receipt remains an owner-side manual confirmation because Codex did not access the GA4 account.
