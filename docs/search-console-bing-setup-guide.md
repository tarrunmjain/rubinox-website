# Search Console And Bing Setup Guide

Date: 2026-07-01
Scope: owner setup guide for Rubinox measurement. No verification files, meta tags or DNS records were added in Batch 11A or Batch 11B.

## Google Search Console Plan

Selected property:

- Domain property for `rubinoxmetal.com`, verified through DNS.

Owner steps:

1. Sign in to Google Search Console with the account that should own the property.
2. Add a domain property for `rubinoxmetal.com`.
3. Copy the DNS TXT verification value from Google Search Console.
4. Add the DNS TXT record in the DNS provider.
5. Complete verification in Search Console.
6. After verification, submit `https://rubinoxmetal.com/sitemap.xml`.
7. Confirm sitemap discovery and indexing status after Google processes the file.

Repository rules:

- Do not commit placeholder verification files or fake meta tags.
- Do not add an HTML verification file or meta tag for Batch 11B because DNS TXT verification is the selected method.
- Do not store Google account credentials, OAuth secrets or service-account JSON in the repo.

## Bing Webmaster Tools Plan

Selected route:

- Import the verified Google Search Console property into Bing Webmaster Tools after GSC is active.

Owner steps:

1. Sign in to Bing Webmaster Tools with the account that should own the site.
2. Import from the verified Google Search Console property after GSC verification is complete.
3. Submit `https://rubinoxmetal.com/sitemap.xml` after the import is active if Bing does not automatically import the sitemap.

Repository rules:

- Do not commit `BingSiteAuth.xml` without the exact owner-provided value.
- Do not add `msvalidate.01` meta tags without the exact owner-provided value.
- Do not commit account credentials or API keys.

## Post-Verification QA

After either platform is verified:

1. Confirm `robots.txt` still references `https://rubinoxmetal.com/sitemap.xml`.
2. Run local sitemap QA.
3. Submit or resubmit the sitemap in the verified platform.
4. Document the verification method in `docs/RUBINOX_OWNER_DATA_PENDING.md` without exposing secrets.
5. Wait for query and indexing data before making SEO decisions from the reports.
