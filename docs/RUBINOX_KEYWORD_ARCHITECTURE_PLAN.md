
# Rubinox Keyword Architecture Plan

Date: 2026-06-29
Scope: planning only. The keyword map does not authorize new public pages.

## Core Rule

Every keyword should map to one primary URL. Secondary URLs can support the topic through internal links, but they should not compete for the same primary intent.

## Keyword Families

| Family | Examples | Primary page type |
| --- | --- | --- |
| Material keywords | stainless steel, duplex, nickel alloys, titanium, copper, brass | Material family page |
| Grade keywords | SS 316L, Inconel 625, Copper Nickel 90/10, API 5L Grade B | Grade/specification page |
| Product form keywords | pipes, tubes, sheets, plates, coils, rods, flanges, fittings | Product form page |
| Specification keywords | ASTM A335 P91, API 5L Grade B, EN 10216, DIN 2391 | Specification page |
| City keywords | stainless steel supplier in Mumbai, SS pipe dealer in Chennai | City page or existing supplier page |
| State keywords | duplex dealer in Gujarat, stainless steel supplier Maharashtra | Future state page after data review |
| Country/export keywords | SS 316 angle dealer in Dubai, metal exporter UAE | Export page or future export subpage |
| Buyer-intent keywords | supplier, stockist, importer, exporter, project supplier | Existing commercial pages |
| Price-factor keywords | stainless steel price factors India | Price-factor guide |
| RFQ keywords | stainless steel quotation India, metal RFQ checklist | RFQ page or Knowledge Hub article |

## Dealer Term Handling

Dealer queries should be captured as search intent but mapped to supplier/stockist/exporter pages. Do not imply Rubinox is an authorized dealer, local dealer, branch office or city-specific stockyard.

## Page Creation Gates

Before creating a new public page:

1. Confirm a unique primary keyword.
2. Confirm existing page cannot satisfy the intent.
3. Confirm the new page will not be a doorway page.
4. Confirm the page can include useful, differentiated content.
5. Confirm safe claim language.
6. Add the page to sitemap only after implementation QA passes.

## Starter Matrix

The starter rows in data/keyword-master-map.csv cover dealer, supplier, grade, specification, technical chart, price-factor, city and export examples. The next pass should expand them using Search Console query data, not guessing.
