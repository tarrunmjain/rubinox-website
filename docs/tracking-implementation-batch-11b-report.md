# Rubinox Tracking Implementation Report - Batch 11B

Date: 2026-07-01
Scope: GA4 standardization and safe conversion-event tracking for the existing static website.

## Owner Confirmations Used

- GA4 Measurement ID: `G-JT5X5L5H07`.
- GA4 stream: Rubinox Website for `https://rubinoxmetal.com`.
- Old or accidental GA4 ID: `G-CR18QYPS6C`; removed from `quotation.html`.
- Google Search Console method: owner-managed DNS TXT domain verification.
- Bing Webmaster Tools method: import from Google Search Console after GSC verification.
- Sitemap to submit manually after verification: `https://rubinoxmetal.com/sitemap.xml`.
- Google Business Profile review link: not available; no review link was added.
- WhatsApp number and RFQ email: current website contact details retained without change.

## Implementation Summary

| Area | Result |
| --- | --- |
| GA4 coverage before Batch 11B | Partial. 196 pages had a GA4 script source and 65 pages were missing GA4 coverage; `quotation.html` used old ID `G-CR18QYPS6C`. |
| GA4 coverage after Batch 11B | 261 of 261 HTML pages have exactly one GA4 loader, one `gtag('config', 'G-JT5X5L5H07')` call and one `/assets/js/tracking.js` include. |
| Event tracking | Implemented in `assets/js/tracking.js` without collecting names, phone numbers, email addresses, grades, quantities, notes or RFQ message content. |
| GSC verification | Pending owner DNS TXT verification; no repo file or meta tag added. |
| Bing verification | Pending owner import from GSC after GSC verification; no repo file or meta tag added. |
| Sitemap submission | Owner action after GSC verification. |

## Events Implemented

- WhatsApp CTA clicks by header, floating, quotation, grade page, product-form and general contexts.
- Email CTA clicks by header, quotation, contact and general contexts.
- Phone clicks by header, contact and general contexts.
- Quotation CTA navigation.
- Company profile PDF and company profile page clicks.
- Technical resources, quality documentation and Knowledge Hub article clicks.
- Directory/social outbound clicks where existing links are present.
- Quotation form start, email submit and WhatsApp submit events without sending field values to GA4.

## Safety Notes

- No Search Console or Bing verification token was committed.
- No API keys, OAuth secrets, service-account files or credentials were added.
- No public contact details were changed.
- No public SEO URLs, H1 intent, title/meta/canonical tags, schema meaning, sitemap URLs or broad internal-link strategy were changed.
- No manufacturer, factory, stock, price, certification, client, project, rating or delivery claims were introduced.

## Owner Actions Remaining

1. Add the Google Search Console DNS TXT record in the DNS provider and complete domain verification.
2. Submit `https://rubinoxmetal.com/sitemap.xml` in Google Search Console after verification.
3. Import the verified GSC property into Bing Webmaster Tools.
4. Confirm events in GA4 Realtime or DebugView after deployment.
5. Mark approved lead events as key events in GA4 Admin after confirming event receipt.
