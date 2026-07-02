# RUBINOX DESIGN FINGERPRINT

This file records approved final design fingerprints for Rubinox Metal and Alloys. Future pages and future design batches must follow these locks unless the owner explicitly approves a new version.

## Top Bar — LOCK V1

Status: approved and final.

Lock document:

- `docs/design-system/RUBINOX_TOPBAR_LOCK_V1.md`

Implementation assets:

- `assets/css/topbar-lock-v1.css`
- `assets/js/topbar-lock-v1.js`

Exact content pattern:

- Left text: `Stockist | Supplier | Importer | Exporter | Project Supplier`
- Center area: empty
- Right icons: Call, WhatsApp, Email, Facebook, Instagram, LinkedIn

Exact visual pattern:

- Dark blue to light blue gradient: `linear-gradient(90deg,#050b16,#07101f 52%,#102554)`
- Plain premium silver text: `#d8e0ec`
- Subtle text lift through soft text-shadow only
- Plain icons with no normal-state boxes
- Icon-only Rubinox gold hover: `#d7a84f`
- Hover lift: `translateY(-2px)`
- LinkedIn top bar icon uses inline two-layer SVG
- LinkedIn hover changes only the logo shape to gold while the `in` letters remain white
- Pointer click/reset behavior is required on every page

Future page instruction:

- Every new public page must include `topbar-lock-v1`.
- Every new public page must load `assets/css/topbar-lock-v1.css`.
- Every new public page must load `assets/js/topbar-lock-v1.js`.
- Do not create a top bar variant.
- Do not reuse the old D1A homepage prototype class as the implementation class.

Forbidden changes:

- Do not add center text, chips, badges, GST/Udyam/IEC numbers, PAN India text, Export RFQ text, or marquee content.
- Do not add icon boxes, hover boxes, border boxes, outline boxes, underline effects, gold lines, or pseudo-element boxes.
- Do not change the icon order.
- Do not change colors, heights, links, or hover behavior without owner approval.
- Do not add manufacturer, factory, mill, production, stock, price, delivery, certification, approval, client, project, testimonial, rating, award, team size, stockyard size, or unverified years-of-experience claims.

Latest approved prototype commit:

- `aaad5fc4b50426855aba4e8d63339d8ee7424bfb`

Sitewide implementation commit:

- Pending until this D1B-D1C batch commit is created; final response will report the commit hash.
