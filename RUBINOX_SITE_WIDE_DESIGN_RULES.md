# Rubinox Site-Wide Design System Rules

## 1. Purpose

This document defines the visual, layout, spacing, typography, CTA, card, chip, header, footer, mobile and interaction rules for the Rubinox Metal and Alloys website.

Codex must read this before any UI/design/layout task.

The goal is:
- one consistent premium Rubinox visual language
- navy, silver and gold brand identity
- clean industrial buyer experience
- no mixed card styles
- no random spacing
- no inconsistent chips/buttons
- no inconsistent header/footer/top bar patterns
- no page family drifting away from the approved design system

## 2. Brand Colors

Use these core visual directions:

- Primary navy: `#132a63` or existing `var(--ink2)`
- Deep navy / near-black: `#07101f` or existing dark header/footer token
- Gold accent: `#e2a02f` or existing `var(--accent)`
- Silver / line: `#d8e0ec` or existing `var(--line)`
- Muted blue text: `#566b9a` or existing `var(--muted)`
- White card surface: `#ffffff`
- Light page background: very pale silver/blue gradient where already used

Rules:
- Gold is for CTAs, accent lines, focus accents and small highlights.
- Silver/light blue is for chips, soft surfaces and utility badges.
- Navy is for headings and important text.
- Muted blue is for paragraph text.
- Do not introduce random black, red, green, purple or unrelated colors unless required for status/brand icons.

## 3. Header Rules

Site-wide header must be identical across all pages.

Rules:
- Same logo size across all pages.
- Same header height across all pages.
- Same top rail height across all pages.
- Same desktop nav alignment across all pages.
- Same mobile menu pattern across all pages.
- Same WhatsApp Quote button style across all pages.
- Same Company Profile and Product Portfolio dropdown behavior across all pages.
- Only one dropdown may be open at a time.
- Dropdowns must not close when user moves from trigger into menu.
- Dropdown links must be crawlable `<a href="">` links.
- Dropdown triggers should behave consistently.
- Mobile dropdowns must be accordion style.
- Header must not cover hero breadcrumbs.
- Header must not create horizontal mobile overflow.

Top navigation labels:
- Company Profile
- Product Portfolio
- Request Quote
- Knowledge Hub
- Contact
- WhatsApp Quote button

Do not add all city, country or blog child links to the top nav.

## 4. Top Bar Rules

Top utility bar must be consistent across all pages.

Desktop:
- Left text: Stockist | Supplier | Importer | Exporter | Project Supplier
- Right icons: Call, WhatsApp, Email, Facebook, Instagram, LinkedIn
- Icons must be clean, without boxes, matching homepage style.
- Icons must align in one row.
- Icons must have accessible labels.

Mobile:
- Top bar icons must remain compact in one row.
- Do not stack icons vertically.
- Do not increase top bar height unnecessarily.
- No horizontal overflow.

## 5. Footer Rules

Footer must be site-wide consistent.

Rules:
- Same footer layout across page families unless intentionally approved.
- Same social/platform icon size and alignment.
- All footer social icons should fit cleanly.
- IndiaMART badge/icon must not show broken image.
- Privacy Policy and Terms & Conditions must remain linked.
- Locations, Export, Knowledge Hub and key hubs should remain discoverable.
- Footer should not be overloaded with all 50 city links or all blog pages.
- Footer icons are separate UI elements; do not apply content-card accents to them.
- Footer should remain mobile readable.

## 6. Hero Section Rules

Hero sections must follow one consistent page-wide system.

Rules:
- Hero width must align with the major content sections below.
- Hero and next section must start and end at the same horizontal points.
- Hero top spacing must avoid clipping under sticky header.
- Hero border radius, padding, and spacing should be consistent.
- Hero should be ready for future right-side page image.
- Do not add empty right-side image placeholders.
- If no hero image exists, content should use the hero area naturally.
- Keep one H1 per page.
- Keep breadcrumb visible and consistent.
- Remove unnecessary decorative gold eyebrow/kicker labels unless user specifically approves them.
- Hero CTA buttons should use the gold CTA system.

Future hero image rule:
- If adding hero images later, use a two-column layout only when image exists.
- On mobile, image must stack below or above text cleanly.
- Do not distort images.
- Use descriptive alt text.

## 7. Breadcrumb Rules

Breadcrumbs must be consistent across all pages.

Rules:
- Home must always be clickable and link to `/`.
- Home link must have consistent underline/bottom-border or clear link styling.
- Breadcrumb text must not be clipped by header.
- Breadcrumbs must remain readable on dark hero backgrounds.
- Do not make breadcrumbs look like CTA buttons.
- Do not change BreadcrumbList schema unless required and validated.

## 8. CTA Button Rules

All main CTA buttons must use the Rubinox gold system.

Gold CTA applies to:
- WhatsApp Quote
- Request Quote
- Request Quotation
- Email RFQ
- Send RFQ
- Quotation Page
- Contact Rubinox when used as hero/CTA action
- Primary and secondary action buttons in CTA blocks

CTA style:
- Gold background
- Navy/dark text
- Bold text
- Rounded corners
- Subtle gold shadow
- Smooth hover/focus state
- Clear keyboard focus

Do not use white/silver/blue buttons for hero CTA actions unless the user explicitly approves a secondary ghost button style.

Gold is for actions, not for informational chips.

## 9. Chip / Tag / Pill Rules

All small informational chips must follow the silver chip theme.

Silver chip applies to:
- grade chips
- material chips
- product form chips
- industry chips
- related city/country chips
- blog category tags
- small non-primary info pills

Silver chip style:
- light silver / pale blue background
- navy text
- subtle border
- compact padding
- rounded corners
- small soft shadow if needed
- bold but readable text

Clickable chips:
- keep silver base
- on hover/focus, add subtle gold border or navy emphasis
- do not turn into gold-filled buttons unless they are actual CTAs

Do not use gold-filled chips for informational grade tags such as:
- SS 316L
- Tubes
- Fittings
- Gr 1
- Gr 2
- HSS M2
- UNS S31254

Gold stays reserved for CTA buttons and accent lines.

## 10. Card Rules

Final Rubinox content card style:
- white card
- rounded corners
- soft border
- soft shadow
- navy heading
- muted blue body text
- optional icon/image
- subtle top accent line using gold-to-navy/silver gradient

Use this style for:
- material cards
- product form cards
- grade cards
- company/about info cards
- industry cards
- city cards
- export country cards
- product portfolio cards
- related link cards
- feature/benefit cards
- hub cards

Do not use old vertical gold left-border style for normal cards.

Do not apply content-card top accent to:
- hero sections
- CTA bands
- FAQ cards
- RFQ form fields
- tables
- footer/social icons
- header/dropdown/mobile nav items
- Google map boxes
- legal/policy long text blocks
- buttons
- breadcrumbs

Implementation warning:
- Avoid broad `.card::before` rules.
- Use selector-specific changes or shared classes only after checking affected elements.
- Do not accidentally affect FAQs, CTAs, forms, tables, footer icons or header menu items.

## 11. Clickable Card Hover / Focus Rules

Clickable cards must clearly feel clickable.

Applies to:
- material cards
- form cards
- grade cards
- city cards
- export cards
- blog article cards
- related link cards
- product portfolio cards

Hover/focus style:
- subtle only
- slight upward movement, maximum around `translateY(-2px)`
- mild shadow increase
- subtle gold/navy border emphasis
- no heavy glow
- no thick/double gold border
- no aggressive animation
- no layout jump
- keyboard focus must be visible

Do not apply hover animation to non-clickable cards.

Do not apply clickable-card hover to:
- FAQ cards
- tables
- forms
- CTA bands
- legal blocks
- maps
- header/dropdowns
- footer icons
- breadcrumbs

## 12. Section Spacing Rules

Section spacing must be consistent site-wide.

Rules:
- Use standardized section padding/margins.
- Keep gaps small but clean.
- Do not make pages feel stretched or overly long.
- Do not make pages cramped.
- Hero-to-next-section spacing must be consistent.
- Card grid gaps must be consistent.
- Section-to-section spacing must be consistent.
- Mobile spacing should reduce naturally.

Suggested approach:
- Use consistent variables/classes if possible:
  - page max width
  - section gap
  - card gap
  - hero padding
  - mobile gutter

Do not create random one-off spacing unless solving a specific visual issue.

## 13. Container / Alignment Rules

Text and section alignment must be consistent across pages.

Rules:
- Hero section and content sections should share the same max-width.
- Hero and next section should align left and right.
- Cards/grids should sit inside the same content container.
- Full-width bands may exist only if inner content aligns to the standard container.
- Long blog/article text may use a narrower readable content column, but hero and major sections should still align.
- Avoid sections wider than the hero unless intentionally approved.
- Avoid sections narrower than the hero unless it is an article body or form column.

Recommended max width:
- use existing premium hero width, around 1140px
- responsive gutters on mobile/tablet

## 14. Typography Rules

Typography must be consistent by role.

H1:
- one per page
- large, bold, white on dark hero or navy on light hero
- no random H1 sizes per page family

H2:
- navy
- consistent size
- gold underline/slash accent where section headings use the standard style

H3:
- navy
- used for card headings, FAQ questions and subsection headings
- FAQ H3/question headings must use navy

Paragraphs:
- muted blue text
- readable line-height
- no pure black body text unless already approved in a dark/light context

Small labels:
- avoid unnecessary gold eyebrow labels in hero
- use only when meaningful, not decorative clutter

Blog/article:
- narrower readable body column
- article text should not look like dense landing-page cards

## 15. Section Heading Accent Rules

The gold slash/underline section heading accent should be consistent.

Apply to:
- main section H2 headings
- important hub section titles
- homepage-style section headings

Do not apply to:
- H1
- card titles
- FAQ questions
- table headings
- header/dropdown items
- footer headings
- chip text

## 16. Bullet and Number Rules

Bullets:
- bullets should use Rubinox gold where styled lists are present
- text remains muted/navy
- do not create oversized decorative bullets

Number boxes:
- number/step boxes should use the silver/light-blue box theme
- navy numbers/text
- subtle border/shadow
- do not use heavy gold boxes unless the number itself is a CTA-like highlight

Check:
- RFQ steps
- process steps
- buyer guides
- blog checklist steps
- project flow steps

## 17. FAQ Rules

FAQ cards should stay quiet and readable.

Rules:
- FAQ question headings: navy / `var(--ink2)`
- FAQ answers: muted / `var(--muted)`
- Do not add card top accent to FAQ boxes.
- Do not make FAQ boxes look like product cards.
- Add visible FAQ before FAQPage schema.
- FAQPage schema must match visible FAQ content.
- Keep FAQ answers concise and buyer-focused.

## 18. Table Rules

Tables should be clean and readable.

Rules:
- no top accent card styling on tables
- clear header row
- soft borders
- good mobile behavior
- no tiny text
- avoid horizontal overflow on mobile
- use tables for comparisons and buyer specification guides where helpful

## 19. Form Rules

Forms should remain simple and easy to use.

Rules:
- no decorative top accent on input fields
- clear labels
- readable inputs
- good mobile spacing
- form CTA button should be gold
- no pricing promises
- no stock promises

## 20. Image Rules

Images must be local and optimized.

Rules:
- Do not hotlink external images.
- Use descriptive alt text.
- Do not use broken image placeholders.
- Do not distort aspect ratio.
- Use WebP/SVG where appropriate.
- Blog images can use branded visual assets.
- Future hero images should fit hero layout cleanly.
- Decorative images can use empty alt only when truly decorative.

## 21. Blog / Knowledge Hub Rules

Knowledge Hub should look like articles, not normal landing pages.

Rules:
- blog hub uses article cards with images/visuals
- article pages use readable article layout
- article body should have narrower reading width
- include TOC or section links where useful
- include answer blocks, tables, checklists and FAQs where useful
- include related articles and related material links
- do not make every article section look like a product landing card
- keep SEO/AEO/GEO content practical and procurement-focused

## 22. Location / Export Page Rules

Location and export pages must not look like hidden SEO pages.

Rules:
- they must remain public and linked from hubs
- city/country cards must be clickable and styled consistently
- answer blocks must remain readable and AEO-focused
- no fake branch, warehouse, local office or guaranteed delivery claims
- no fake export history
- no city/country child link should point to missing pages

## 23. Legal Page Rules

Privacy Policy and Terms & Conditions should remain readable.

Rules:
- no heavy card accents for long legal text
- keep clean sections
- footer links must remain
- do not overclaim legal compliance
- do not invent registrations or certificates

## 24. Mobile Rules

Every design change must be checked on mobile.

Rules:
- no horizontal overflow
- top bar icons stay one row
- mobile menu accordion works
- dropdowns do not break mobile layout
- cards stack cleanly
- hero content is not clipped
- CTA buttons fit screen width
- chips wrap cleanly
- tables are readable or scroll safely
- section gaps are reduced on mobile

Recommended mobile visual widths:
- 360px
- 390px
- 430px
- 768px

## 25. Accessibility Rules

Maintain:
- 0 Axe violations
- visible focus states
- accessible nav/dropdowns
- aria-expanded for mobile/dropdowns where used
- meaningful link text
- alt text for images
- good contrast

Do not remove skip links.
Skip links should be hidden until keyboard focus.

## 26. SEO / Schema Safety Rules

Do not change unless task requires:
- H1
- title
- meta description
- canonical
- JSON-LD schema
- sitemap URLs
- internal links
- robots settings

Schema rules:
- Keep JSON-LD valid.
- Add FAQPage schema only when visible FAQ exists.
- Do not add Product, Offer, Review or AggregateRating schema unless supported and approved.
- Do not add fake LocalBusiness schema for cities without actual branch address.

## 27. Business Claim Safety Rules

Never add:
- manufacturer claim
- factory claim
- ready stock promise
- lowest/best/competitive pricing
- guaranteed delivery
- authorised mill supplier
- approved vendor
- certified exporter
- fake branch office
- fake local warehouse
- fake export history
- fake client names
- fake certifications

Allowed language:
- stockist
- supplier
- importer
- exporter
- project supplier
- can review enquiries
- quotation support
- RFQ support
- documentation assistance where applicable
- as per buyer/project requirement
- subject to grade, form, size and sourcing feasibility

## 28. QA Rules After Any Visual Change

Run:
`pnpm run qa:sitemap`
`pnpm run qa:crawl`
`pnpm run qa:schema`
`pnpm run qa:accessibility`
`pnpm run qa:html`
`pnpm run test:navigation`

Expected:
- sitemap count unchanged unless pages are added/removed intentionally
- no broken links
- 0 invalid JSON-LD
- 0 accessibility violations
- known legacy HTML baseline only
- navigation passes

Manual visual checks should include:
- homepage
- one core page
- one material page
- one grade/product page
- one location page
- one export page
- one blog page
- mobile layout

## 29. Implementation Rules For Codex

Before editing:
- run git status
- check latest commit
- confirm only expected untracked files
- inspect affected pages
- keep changes scoped

During editing:
- do not use broad selectors unless reviewed
- avoid `.card` global changes unless all affected elements are known
- use selector-specific changes first
- do not leave temporary scripts in repo
- do not modify old backup folder

After editing:
- run QA
- review diff
- confirm no SEO/schema/content changes unless intended
- commit only intended files
- never commit RUBINOX_MASTER_PROJECT_STATUS.md
- push only after QA passes

## 30. Priority Design Principles

When uncertain, follow this order:

1. Preserve business accuracy.
2. Preserve SEO metadata and schema.
3. Preserve crawlable links.
4. Keep design consistent with homepage.
5. Use gold for CTAs and accent lines only.
6. Use silver for chips/tags/number boxes.
7. Use navy for headings.
8. Use muted blue for body text.
9. Keep spacing compact and premium.
10. Do not over-decorate functional elements.
