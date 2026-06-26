# Location and Export SEO/AEO Master Plan

Project: Rubinox Metal and Alloys  
Website: https://rubinoxmetal.com  
Business positioning: Stockist | Supplier | Importer | Exporter | Project Supplier  
Document purpose: Master planning framework for future India city SEO/GEO/AEO pages and export country SEO/GEO/AEO pages.

## 1. Scope and Guardrails

This is a planning document only. It does not create public pages and does not change website HTML, CSS, JavaScript, images, sitemap, schema or internal links.

Future location and export pages must follow these rules:

- Rubinox Metal and Alloys is a stockist, supplier, importer, exporter and project supplier.
- Do not describe Rubinox as a manufacturer.
- Do not add pricing claims, stock promises, delivery guarantees or unsupported availability claims.
- Do not invent certifications, approvals, vendor status, mill authorization, client names, branch offices, local warehouses or export history.
- Preserve existing SEO URLs, H1s, meta tags, canonicals, schema and internal links unless a future implementation task specifically approves changes.
- Every page must be useful for buyers and must not be a doorway page.

## 2. Recommended Website Architecture

```text
/locations.html
/locations/<city>.html
/export.html
/export/<country>.html
```

| URL pattern | Purpose | Notes |
|---|---|---|
| `/locations.html` | India locations and industrial cluster hub | Public hub for city/cluster pages, organized by state, region and industry. |
| `/locations/<city>.html` | City or industrial cluster RFQ support page | Must include unique industry context, materials, grades, forms, RFQ guidance and FAQ. |
| `/export.html` | Export enquiry hub | Public hub for country pages, export RFQ guidance and documentation support. |
| `/export/<country>.html` | Country export enquiry page | Must include country-specific industry intent, material priorities, documentation guidance and FAQ. |

URL rules:

- Use lowercase hyphenated slugs.
- Keep slugs short and stable.
- Use industrial cluster names where search demand supports them.
- Avoid city names unless the page has useful content and internal links.
- Avoid material plus city pages until Search Console demand supports them.

## 3. Visibility Rules

- Pages must be public and crawlable.
- Pages must be linked from `/locations.html` or `/export.html`.
- Hubs should be linked from the footer or suitable core page sections after implementation.
- High-priority pages should be linked from relevant material, industry and RFQ pages when useful.
- All public location/export pages should be added to `sitemap.xml` after creation.
- Pages do not all need to appear in the main top navigation.
- Do not create hidden, orphan or SEO-only pages.

Recommended discovery model:

```text
Homepage
  -> Locations hub
    -> City/cluster pages
  -> Export hub
    -> Country pages
  -> Major material pages
    -> Relevant location/export pages
  -> Industries page
    -> Relevant location/export pages by industry use case
```

## 4. Doorway Page Safety Rules

Each location/export page must include unique buyer value:

- Unique industrial context for the city, cluster or country.
- Unique material priorities and grade recommendations.
- Unique product form guidance.
- Unique RFQ checklist language where relevant.
- Unique FAQ questions or answer angles.
- Unique internal links based on material and industry intent.
- Unique introduction and short answer block.

Avoid:

- Fake branch office claims.
- Fake warehouse claims.
- Fake local stock claims.
- Fake export history claims.
- Fake client names or project references.
- Delivery guarantees.
- Lowest-price, best-price or competitive-pricing wording.
- Pages that only replace one city or country name in otherwise identical text.

Safe phrasing examples:

- `Rubinox supports RFQs from Pune buyers for stainless steel, duplex, nickel alloys and industrial metal product forms.`
- `Share grade, size, quantity, standard, documentation requirement and delivery location for quotation review.`
- `Documentation such as MTC, PMI or inspection requirements can be reviewed where applicable and as per customer requirement.`
- `Export enquiries should include destination country, port or delivery city, packing needs and documentation requirements.`

Unsafe phrasing examples:

- `Rubinox has a warehouse in Pune.`
- `Ready stock available for immediate delivery in all cities.`
- `Lowest price stainless steel supplier in UAE.`
- `Authorized mill distributor for all products.`
- `Trusted by named clients` unless verified and approved.

## 5. Final 50 India City and Industrial Cluster Plan

| Priority | City / industrial cluster | Main industry intent | Priority materials / grades | Recommended URL slug | Recommended page H1 | Suggested internal links |
|---:|---|---|---|---|---|---|| 1 | Mumbai | Trading, fabrication, pharma, engineering, marine, project buying | SS 304/316L, 904L, Duplex 2205, Nickel Alloys, SMO 254 | `/locations/mumbai.html` | Metal Supplier for Mumbai Industrial RFQs | Stainless Steel, Nickel Alloys, SMO 254, Quotation, Contact |
| 2 | Navi Mumbai | EPC, logistics, fabrication, chemical, port-linked projects | SS 304/316L, Duplex 2205, Carbon Steel, Nickel Alloys | `/locations/navi-mumbai.html` | Metal Supplier for Navi Mumbai EPC and Fabrication Buyers | Stainless Steel, Duplex, Carbon Steel, Industries, Quotation |
| 3 | Thane | Chemical, pharma, fabrication, process equipment | SS 316L, 904L, Duplex 2205, Hastelloy C-276 | `/locations/thane.html` | Industrial Metal Supplier for Thane Buyers | Stainless Steel, Nickel Alloys, Duplex, Quotation |
| 4 | Pune | Automotive, engineering, EV, fabrication, machine building | SS 304/316, Aluminium 6061/6082, Carbon Steel, Mild Steel | `/locations/pune.html` | Metal Supplier for Pune Automotive and Engineering Industries | Stainless Steel, Aluminium, Carbon Steel, Mild Steel, Quotation |
| 5 | Chakan / Pimpri-Chinchwad | Automotive, EV, components, fabrication | SS 304, 316, Aluminium 6061, Mild Steel, Carbon Steel | `/locations/chakan-pimpri-chinchwad.html` | Metal Supplier for Chakan and Pimpri-Chinchwad Industrial Buyers | Aluminium, Stainless Steel, Mild Steel, Industries |
| 6 | Nashik | Engineering, electrical, food processing, fabrication | SS 304/316, Aluminium, Copper, Brass, Mild Steel | `/locations/nashik.html` | Metal Supplier for Nashik Engineering and Food Processing Buyers | Stainless Steel, Aluminium, Copper, Brass, Quotation |
| 7 | Chhatrapati Sambhajinagar / Aurangabad | Automotive, pharma, engineering, fabrication | SS 304/316L, Aluminium 6061, Mild Steel, Carbon Steel | `/locations/chhatrapati-sambhajinagar-aurangabad.html` | Metal Supplier for Chhatrapati Sambhajinagar and Aurangabad Industries | Stainless Steel, Aluminium, Carbon Steel, Industries |
| 8 | Nagpur | Infrastructure, power, logistics, fabrication | Mild Steel, Carbon Steel, SS 304, Plates, Pipes | `/locations/nagpur.html` | Metal Supplier for Nagpur Infrastructure and Fabrication Projects | Mild Steel, Carbon Steel, Stainless Steel, Product Forms |
| 9 | Ahmedabad | Pharma, chemical, textile machinery, engineering | SS 316L, 904L, Duplex 2205, Hastelloy, Aluminium | `/locations/ahmedabad.html` | Metal Supplier for Ahmedabad Pharma and Engineering Buyers | Stainless Steel, Nickel Alloys, Duplex, Aluminium |
| 10 | Vadodara | Chemical, petrochemical, engineering, EPC | SS 316L, Duplex 2205, Super Duplex 2507, Hastelloy C-276, Inconel | `/locations/vadodara.html` | Metal Supplier for Vadodara Chemical and EPC Industries | Duplex, Nickel Alloys, Stainless Steel, Quotation |
| 11 | Surat | Chemical, textile, engineering, fabrication | SS 304/316L, Duplex 2205, Titanium, Nickel Alloys | `/locations/surat.html` | Metal Supplier for Surat Chemical and Fabrication Buyers | Stainless Steel, Titanium, Nickel Alloys, Industries |
| 12 | Bharuch | Chemical, petrochemical, process industries | SS 316L, 904L, Duplex 2205, Hastelloy C-276, SMO 254 | `/locations/bharuch.html` | Metal Supplier for Bharuch Chemical and Petrochemical RFQs | SMO 254, Duplex, Nickel Alloys, Stainless Steel |
| 13 | Ankleshwar | Chemical, pharma intermediates, process equipment | SS 316L, 904L, Hastelloy, Duplex 2205, Titanium | `/locations/ankleshwar.html` | Metal Supplier for Ankleshwar Chemical Industry Buyers | Nickel Alloys, Titanium, Duplex, Quotation |
| 14 | Vapi | Chemical, pharma, paper, fabrication | SS 316L, 904L, Duplex 2205, Hastelloy, Titanium | `/locations/vapi.html` | Metal Supplier for Vapi Chemical and Pharma Buyers | Stainless Steel, Nickel Alloys, Titanium, SMO 254 |
| 15 | Rajkot | Engineering, machine tools, casting, fabrication | Mild Steel, Carbon Steel, SS 304, Aluminium, Brass | `/locations/rajkot.html` | Metal Supplier for Rajkot Engineering and Fabrication Buyers | Mild Steel, Carbon Steel, Brass, Aluminium |
| 16 | Jamnagar | Brass, refinery, marine, engineering | Brass C360/C464, Copper, SS 316L, Duplex, Monel | `/locations/jamnagar.html` | Metal Supplier for Jamnagar Brass, Refinery and Marine Buyers | Brass, Copper, Duplex, Nickel Alloys |
| 17 | Dholera / Sanand | Automotive, EV, infrastructure, heavy projects | Aluminium 6061/6082, SS 304/316, Mild Steel, Carbon Steel | `/locations/dholera-sanand.html` | Metal Supplier for Dholera and Sanand Industrial Projects | Aluminium, Stainless Steel, Mild Steel, Carbon Steel |
| 18 | Chennai | Automotive, marine, engineering, power, export-linked projects | SS 304/316L, Aluminium, Duplex, Nickel Alloys, Titanium | `/locations/chennai.html` | Metal Supplier for Chennai Automotive, Marine and Engineering Buyers | Stainless Steel, Duplex, Titanium, Industries |
| 19 | Sriperumbudur / Oragadam | Automotive, electronics, EV, industrial components | Aluminium 6061/7075, SS 304, Copper, Mild Steel | `/locations/sriperumbudur-oragadam.html` | Metal Supplier for Sriperumbudur and Oragadam Industrial Buyers | Aluminium, Copper, Stainless Steel, Mild Steel |
| 20 | Coimbatore | Pumps, textiles, engineering, fabrication | SS 304/316, Mild Steel, Carbon Steel, Aluminium, Bronze | `/locations/coimbatore.html` | Metal Supplier for Coimbatore Engineering and Pump Industries | Stainless Steel, Mild Steel, Phosphor Bronze, Aluminium |
| 21 | Hosur | Automotive, EV, fabrication, machine building | Aluminium 6061/6082, SS 304/316, Mild Steel, Carbon Steel | `/locations/hosur.html` | Metal Supplier for Hosur Automotive and Engineering Buyers | Aluminium, Stainless Steel, Carbon Steel, Quotation |
| 22 | Salem | Steel, fabrication, engineering, heavy industry | SS 304/316, Carbon Steel, Mild Steel, Plates, Bars | `/locations/salem.html` | Metal Supplier for Salem Fabrication and Engineering Buyers | Stainless Steel, Carbon Steel, Mild Steel, Product Forms |
| 23 | Tiruchirappalli | Boilers, power, fabrication, heavy engineering | SS 304/316L, 310, 321, Inconel, Carbon Steel | `/locations/tiruchirappalli.html` | Metal Supplier for Tiruchirappalli Power and Heavy Engineering RFQs | Inconel, Stainless Steel, Carbon Steel, Industries |
| 24 | Thoothukudi | Port, marine, chemical, power, coastal projects | SS 316L, Duplex 2205, Super Duplex, SMO 254, Titanium | `/locations/thoothukudi.html` | Metal Supplier for Thoothukudi Marine, Port and Chemical Buyers | SMO 254, Duplex, Titanium, Nickel Alloys |
| 25 | Bengaluru | Aerospace, defence, electronics, precision engineering | Titanium Grade 2/5, Aluminium 6061/7075, SS 304/316L, Phosphor Bronze | `/locations/bengaluru.html` | Metal Supplier for Bengaluru Aerospace and Precision Engineering Buyers | Titanium, Aluminium, Phosphor Bronze, Stainless Steel || 26 | Tumakuru | Industrial manufacturing, fabrication, automotive components | SS 304/316, Aluminium, Mild Steel, Carbon Steel | `/locations/tumakuru.html` | Metal Supplier for Tumakuru Industrial Buyers | Stainless Steel, Aluminium, Mild Steel, Quotation |
| 27 | Mysuru | Engineering, food processing, electronics, fabrication | SS 304/316, Aluminium, Copper, Brass, Phosphor Bronze | `/locations/mysuru.html` | Metal Supplier for Mysuru Engineering and Food Processing Buyers | Stainless Steel, Copper, Brass, Phosphor Bronze |
| 28 | Mangaluru | Petrochemical, marine, refinery, port industries | SS 316L, Duplex 2205, Super Duplex, SMO 254, Nickel Alloys | `/locations/mangaluru.html` | Metal Supplier for Mangaluru Petrochemical and Marine RFQs | Duplex, SMO 254, Nickel Alloys, Stainless Steel |
| 29 | Hyderabad | Pharma, aerospace, defence, engineering | SS 316L, Titanium, Inconel, Hastelloy, Aluminium 7075 | `/locations/hyderabad.html` | Metal Supplier for Hyderabad Pharma, Aerospace and Engineering Buyers | Titanium, Nickel Alloys, Stainless Steel, Aluminium |
| 30 | Zaheerabad | Automotive, fabrication, components, engineering | Aluminium 6061, SS 304/316, Mild Steel, Carbon Steel | `/locations/zaheerabad.html` | Metal Supplier for Zaheerabad Automotive and Fabrication Buyers | Aluminium, Mild Steel, Stainless Steel, Carbon Steel |
| 31 | Visakhapatnam | Marine, shipbuilding, steel, port, process industries | SS 316L, Duplex 2205, Super Duplex, SMO 254, Carbon Steel | `/locations/visakhapatnam.html` | Metal Supplier for Visakhapatnam Marine and Heavy Industry Buyers | Duplex, SMO 254, Carbon Steel, Industries |
| 32 | Vijayawada | Infrastructure, fabrication, food processing, engineering | SS 304/316, Mild Steel, Carbon Steel, Aluminium | `/locations/vijayawada.html` | Metal Supplier for Vijayawada Infrastructure and Fabrication Buyers | Stainless Steel, Mild Steel, Carbon Steel, Aluminium |
| 33 | Nellore / Krishnapatnam | Port, power, marine, infrastructure, logistics | SS 316L, Duplex, Carbon Steel, Mild Steel, SMO 254 | `/locations/nellore-krishnapatnam.html` | Metal Supplier for Nellore and Krishnapatnam Port Industries | Duplex, SMO 254, Carbon Steel, Stainless Steel |
| 34 | Kakinada | Petrochemical, marine, port, offshore support | SS 316L, Duplex 2205, Super Duplex 2507, Monel, SMO 254 | `/locations/kakinada.html` | Metal Supplier for Kakinada Petrochemical and Marine RFQs | Duplex, Nickel Alloys, SMO 254, Quotation |
| 35 | Delhi | Infrastructure, trading, fabrication, engineering | SS 304/316, Mild Steel, Carbon Steel, Aluminium, Brass | `/locations/delhi.html` | Metal Supplier for Delhi Industrial and Infrastructure Buyers | Stainless Steel, Mild Steel, Aluminium, Brass |
| 36 | Gurugram / Manesar | Automotive, EV, electronics, precision components | Aluminium 6061/7075, SS 304/316, Copper, Phosphor Bronze | `/locations/gurugram-manesar.html` | Metal Supplier for Gurugram and Manesar Automotive Buyers | Aluminium, Copper, Phosphor Bronze, Stainless Steel |
| 37 | Faridabad | Fabrication, machinery, automotive, engineering | Mild Steel, Carbon Steel, SS 304, Aluminium | `/locations/faridabad.html` | Metal Supplier for Faridabad Fabrication and Engineering Buyers | Mild Steel, Carbon Steel, Stainless Steel, Product Forms |
| 38 | Noida | Electronics, fabrication, engineering, infrastructure | Copper, Brass, Aluminium, SS 304, Mild Steel | `/locations/noida.html` | Metal Supplier for Noida Electronics and Engineering Buyers | Copper, Brass, Aluminium, Stainless Steel |
| 39 | Greater Noida | Automotive, EV, electronics, infrastructure | Aluminium 6061, SS 304/316, Copper, Mild Steel | `/locations/greater-noida.html` | Metal Supplier for Greater Noida Automotive and Electronics Buyers | Aluminium, Copper, Stainless Steel, Mild Steel |
| 40 | Ghaziabad | Fabrication, engineering, infrastructure, construction | Mild Steel, Carbon Steel, SS 304, Plates, Pipes | `/locations/ghaziabad.html` | Metal Supplier for Ghaziabad Fabrication and Infrastructure Buyers | Mild Steel, Carbon Steel, Stainless Steel, Product Forms |
| 41 | Ludhiana | Bicycle, auto components, machinery, fabrication | Mild Steel, Carbon Steel, SS 304, Aluminium, Brass | `/locations/ludhiana.html` | Metal Supplier for Ludhiana Auto Components and Machinery Buyers | Mild Steel, Carbon Steel, Aluminium, Brass |
| 42 | Haridwar / Rudrapur | FMCG, automotive, pharma, electrical, fabrication | SS 304/316, Aluminium, Copper, Mild Steel, Brass | `/locations/haridwar-rudrapur.html` | Metal Supplier for Haridwar and Rudrapur Industrial Buyers | Stainless Steel, Copper, Aluminium, Mild Steel |
| 43 | Jaipur | Engineering, gems machinery, infrastructure, fabrication | SS 304, Mild Steel, Brass, Copper, Aluminium | `/locations/jaipur.html` | Metal Supplier for Jaipur Engineering and Fabrication Buyers | Brass, Copper, Aluminium, Stainless Steel |
| 44 | Jodhpur / Pali | Textile, handicraft machinery, fabrication, processing | SS 304/316, Mild Steel, Carbon Steel, Copper, Brass | `/locations/jodhpur-pali.html` | Metal Supplier for Jodhpur and Pali Industrial Buyers | Stainless Steel, Mild Steel, Copper, Brass |
| 45 | Indore / Pithampur | Automotive, pharma, engineering, fabrication | SS 316L, Aluminium, Mild Steel, Carbon Steel, Duplex | `/locations/indore-pithampur.html` | Metal Supplier for Indore and Pithampur Industrial Buyers | Stainless Steel, Aluminium, Duplex, Carbon Steel |
| 46 | Bhopal / Mandideep | Engineering, electrical, fabrication, infrastructure | SS 304/316, Copper, Aluminium, Mild Steel, Carbon Steel | `/locations/bhopal-mandideep.html` | Metal Supplier for Bhopal and Mandideep Industrial Buyers | Copper, Aluminium, Stainless Steel, Mild Steel |
| 47 | Raipur | Steel, power, fabrication, infrastructure | Carbon Steel, Mild Steel, SS 304, Plates, Pipes | `/locations/raipur.html` | Metal Supplier for Raipur Steel, Power and Fabrication Buyers | Carbon Steel, Mild Steel, Stainless Steel, Product Forms |
| 48 | Bhilai | Steel, heavy engineering, fabrication, power | Carbon Steel, Mild Steel, SS 304/316, Plates, Bars | `/locations/bhilai.html` | Metal Supplier for Bhilai Heavy Engineering and Fabrication Buyers | Carbon Steel, Mild Steel, Stainless Steel, Quotation |
| 49 | Jamshedpur | Automotive, steel, heavy engineering, fabrication | Carbon Steel, Mild Steel, SS 304/316, Aluminium, Nickel Alloys | `/locations/jamshedpur.html` | Metal Supplier for Jamshedpur Automotive and Heavy Engineering Buyers | Carbon Steel, Stainless Steel, Aluminium, Nickel Alloys |
| 50 | Kolkata / Howrah / Durgapur | Foundry, fabrication, power, infrastructure, port | Carbon Steel, Mild Steel, SS 304/316L, Duplex, Nickel Alloys | `/locations/kolkata-howrah-durgapur.html` | Metal Supplier for Kolkata, Howrah and Durgapur Industrial Buyers | Stainless Steel, Carbon Steel, Duplex, Nickel Alloys |

## 6. Final 15 Export Country Plan

Use country pages for export enquiry support. Do not imply local branch presence, local warehouse presence, past export history or guaranteed delivery unless separately verified and approved.

| Priority | Country | Main industry/export intent | Priority materials / grades | Recommended URL slug | Recommended page H1 | Suggested internal links |
|---:|---|---|---|---|---|---|
| 1 | UAE | Oil and gas, marine, construction, EPC, trading | SS 316L, Duplex 2205, Super Duplex 2507, SMO 254, Nickel Alloys | `/export/uae.html` | Industrial Metal Export Enquiry Support for UAE Buyers | Export hub, Duplex, SMO 254, Nickel Alloys, Quotation |
| 2 | Saudi Arabia | Oil and gas, petrochemical, power, desalination, EPC | Duplex, Super Duplex, SMO 254, Inconel, Hastelloy, SS 316L | `/export/saudi-arabia.html` | Industrial Metal Export Enquiry Support for Saudi Arabia Buyers | Export hub, SMO 254, Duplex, Nickel Alloys, Industries |
| 3 | Qatar | Oil and gas, LNG, marine, infrastructure, EPC | Duplex 2205, Super Duplex 2507, SS 316L, SMO 254, Inconel | `/export/qatar.html` | Industrial Metal Export Enquiry Support for Qatar Buyers | Export hub, Duplex, Nickel Alloys, Quotation |
| 4 | Oman | Marine, oil and gas, desalination, infrastructure | SS 316L, Duplex, Super Duplex, SMO 254, Monel | `/export/oman.html` | Industrial Metal Export Enquiry Support for Oman Buyers | Export hub, SMO 254, Duplex, Nickel Alloys |
| 5 | Kuwait | Oil and gas, petrochemical, power, desalination | Duplex, Super Duplex, Hastelloy, Inconel, SS 316L | `/export/kuwait.html` | Industrial Metal Export Enquiry Support for Kuwait Buyers | Export hub, Nickel Alloys, Duplex, Quotation |
| 6 | Bahrain | Marine, oil and gas, fabrication, infrastructure | SS 316L, Duplex 2205, Monel, SMO 254, Carbon Steel | `/export/bahrain.html` | Industrial Metal Export Enquiry Support for Bahrain Buyers | Export hub, Stainless Steel, Duplex, SMO 254 |
| 7 | Singapore | Marine, offshore, pharma, food, precision engineering | SS 316L, Duplex, Titanium, Nickel Alloys, Phosphor Bronze | `/export/singapore.html` | Industrial Metal Export Enquiry Support for Singapore Buyers | Export hub, Titanium, Nickel Alloys, Stainless Steel |
| 8 | Malaysia | Oil and gas, palm oil, chemical, marine, engineering | SS 316L, Duplex, Hastelloy, Inconel, Titanium | `/export/malaysia.html` | Industrial Metal Export Enquiry Support for Malaysia Buyers | Export hub, Nickel Alloys, Duplex, Titanium |
| 9 | Thailand | Automotive, food processing, chemical, electronics | SS 304/316L, Aluminium 6061, Copper, Brass, Titanium | `/export/thailand.html` | Industrial Metal Export Enquiry Support for Thailand Buyers | Export hub, Aluminium, Copper, Stainless Steel |
| 10 | Vietnam | Infrastructure, electronics, marine, industrial fabrication | SS 304/316L, Aluminium, Copper, Mild Steel, Duplex | `/export/vietnam.html` | Industrial Metal Export Enquiry Support for Vietnam Buyers | Export hub, Stainless Steel, Aluminium, Copper |
| 11 | USA | Aerospace, chemical, medical components, energy, engineering | Titanium Grade 2/5/23, Inconel 625/718, Hastelloy, SS 316L, Aluminium 7075 | `/export/usa.html` | Industrial Metal Export Enquiry Support for USA Buyers | Export hub, Titanium, Nickel Alloys, Aluminium, Quotation |
| 12 | UK | Aerospace, marine, chemical, engineering, infrastructure | Titanium, Nickel Alloys, SS 316L, Duplex, Phosphor Bronze | `/export/uk.html` | Industrial Metal Export Enquiry Support for UK Buyers | Export hub, Titanium, Nickel Alloys, Duplex |
| 13 | Germany | Automotive, engineering, chemical, precision manufacturing | Aluminium 6061/7075, SS 304/316L, Titanium, Inconel, Copper | `/export/germany.html` | Industrial Metal Export Enquiry Support for Germany Buyers | Export hub, Aluminium, Titanium, Nickel Alloys |
| 14 | Netherlands | Marine, chemical, energy, process equipment, logistics | SS 316L, Duplex, Super Duplex, SMO 254, Hastelloy | `/export/netherlands.html` | Industrial Metal Export Enquiry Support for Netherlands Buyers | Export hub, Duplex, SMO 254, Nickel Alloys |
| 15 | Australia | Mining, marine, infrastructure, energy, fabrication | SS 316L, Duplex, Carbon Steel, Mild Steel, Aluminium, Nickel Alloys | `/export/australia.html` | Industrial Metal Export Enquiry Support for Australia Buyers | Export hub, Stainless Steel, Duplex, Carbon Steel, Aluminium |
## 7. Industry-to-Material Mapping

| Industry intent | Priority materials | Priority grades / families | Common forms | Page content angle |
|---|---|---|---|---|
| Automotive / EV / auto components | Aluminium, Stainless Steel, Mild Steel, Carbon Steel, Copper, Phosphor Bronze | Aluminium 6061/6082/7075, SS 304/316, IS 2062, C110, C510 | Sheets, plates, bars, rods, tubes, flats, fasteners | Lightweight components, brackets, fixtures, machining, electrical contact parts. |
| Chemical / petrochemical | Stainless Steel, Duplex, Super Duplex, Nickel Alloys, Titanium, SMO 254 | SS 316L/904L, Duplex 2205, Super Duplex 2507, Hastelloy C-276, Inconel 625, Titanium Grade 2, SMO 254 | Pipes, tubes, plates, flanges, fittings, fasteners | Corrosion resistance, chloride exposure, process piping, vessel and heat exchanger support. |
| Pharma / food processing | Stainless Steel, Titanium, Nickel Alloys | SS 304/316L, Titanium Grade 2, Hastelloy where required | Tubes, sheets, plates, fittings, fasteners | Hygienic fabrication, corrosion resistance, documentation and finish requirements. |
| Marine / offshore / desalination | Duplex, Super Duplex, SMO 254, Titanium, Nickel Alloys, Stainless Steel | Duplex 2205, Super Duplex 2507, Zeron 100, SMO 254, Titanium Grade 2, Monel 400, SS 316L | Pipes, tubes, plates, flanges, fittings, fasteners | Seawater, chloride, splash-zone, offshore and desalination RFQ guidance. |
| Power / heat / heavy engineering | Stainless Steel, Nickel Alloys, Carbon Steel, Mild Steel | SS 310/321/347, Inconel 600/625/718, ASTM A516 Gr 70, IS 2062 | Plates, pipes, tubes, bars, rods, flanges | Heat exposure, pressure parts, boilers, heavy fabrication and maintenance. |
| Construction / infrastructure / fabrication | Mild Steel, Carbon Steel, Stainless Steel, Aluminium | IS 2062, ASTM A36, SS 304/316, Aluminium 6061/6082 | Plates, sheets, flats, angles, channels, bars, rods, pipes | Structural fabrication, project BOQ, dimensions, tolerances and quantity review. |
| Electronics / electrical / precision | Copper, Brass, Phosphor Bronze, Aluminium, Stainless Steel | Copper C101/C110/C122, Brass C260/C360, Phosphor Bronze C510/C521, Aluminium 6061 | Sheets, strips, rods, bars, flats, wire mesh | Conductivity, machinability, contacts, terminals, precision components. |
| Aerospace / defence / high-performance | Titanium, Nickel Alloys, Aluminium, Stainless Steel, Phosphor Bronze | Titanium Grade 2/5/23, Inconel 625/718, Aluminium 7075, SS 17-4 PH, Nitronic 60 | Bars, rods, sheets, plates, fasteners | Specification-led RFQs, traceability review, high-performance material selection. |

## 8. City Page Template

### Title pattern

```text
Metal Supplier for <City/Cluster> Industries | Rubinox Metal and Alloys
```

Alternative for high-volume materials:

```text
Stainless Steel and Alloy Supplier for <City/Cluster> Industries | Rubinox
```

### Meta description pattern

```text
Rubinox Metal and Alloys supports <City/Cluster> industrial RFQs for stainless steel, duplex, nickel alloys, titanium, aluminium, copper, brass, carbon steel and project metal requirements with PAN India and export enquiry support.
```

Keep meta descriptions specific to the city industry mix. Do not promise local stock, branch office or delivery timing.

### H1 pattern

```text
Metal Supplier for <City/Cluster> Industrial RFQs
```

For strong industry clusters:

```text
Metal Supplier for <City/Cluster> <Industry> Buyers
```

### Breadcrumb pattern

```text
Home > Locations > <City/Cluster>
```

### Short answer block

Use a 45 to 70 word answer-ready block near the top:

```text
Rubinox Metal and Alloys supports RFQs from <City/Cluster> buyers for stainless steel, duplex, nickel alloys, titanium, aluminium, copper, brass, carbon steel, mild steel and special engineering alloys. Buyers can share grade, form, size, quantity, standard, documentation needs and delivery location for quotation review.
```

### Industry section

Include 4 to 6 local industries based on the cluster, such as automotive, chemical, pharma, marine, infrastructure, electronics, engineering or power. Each industry entry should identify materials typically reviewed for that use case.

### Priority materials section

Recommended format:

| Material family | Why buyers request it | Useful links |
|---|---|---|
| Stainless Steel | General fabrication, process equipment, hygienic applications | Stainless Steel, SS 304, SS 316L |
| Duplex / Super Duplex | Chloride and marine/process exposure | Duplex, 2205, 2507 |
| Nickel Alloys | Chemical, heat and corrosion service | Nickel Alloys, Inconel, Hastelloy |

### Product forms section

Mention supported product forms and link to existing form pages where available:

- Pipes.
- Tubes.
- Sheets.
- Plates.
- Coils.
- Bars.
- Rods.
- Flats.
- Angles.
- Flanges.
- Fittings.
- Fasteners.
- Circles.
- Wire mesh.

### RFQ checklist

City pages should ask for:

- Material family.
- Grade or specification.
- Product form.
- Size, thickness, OD, ID, schedule or dimensions.
- Quantity.
- Standard.
- Finish or condition.
- MTC, PMI or inspection requirement where applicable.
- Delivery city or project location.
- BOQ, MTO, drawing or item schedule for projects.

### FAQ section

Each city page should include visible FAQs before FAQPage schema.

Recommended FAQ themes:

- Can Rubinox support RFQs from <City/Cluster>?
- Which materials are commonly requested by <City/Cluster> industries?
- Can buyers request stainless steel, duplex or nickel alloy grades?
- What details should be shared for faster RFQ review?
- Can project BOQ or MTO enquiries be reviewed?
- Can documentation such as MTC or PMI be discussed?
- Can Rubinox support PAN India supply coordination?
- Does Rubinox have a local branch in <City/Cluster>? Safe answer: do not claim local branch unless verified; state support is coordinated by Rubinox.

### FAQPage schema requirement

- Add FAQPage schema only after visible FAQs exist.
- Schema questions and answers must match visible FAQ content.
- Do not add Product, Offer, Review or AggregateRating schema.
- Do not mention pricing, stock promises, delivery guarantees or fake local presence in schema.

### CTA block

Recommended CTA language:

```text
Send your <City/Cluster> metal RFQ with material, grade, form, size, quantity, standard and delivery location for quotation review.
```

CTA options:

- WhatsApp RFQ.
- Email RFQ.
- Request Quotation.
- Contact Rubinox.

### Related links

Each page should link to:

- `/locations.html`.
- `/quotation.html`.
- `/contact.html`.
- Relevant industry page or industries section.
- 3 to 6 material pages most relevant to the city/cluster.
- 2 to 4 product form pages where useful.

## 9. Export Country Page Template

Country pages should support export enquiry intent without implying local operations, country-specific stock, delivery guarantees or verified export history.

### Title pattern

```text
Industrial Metal Export Enquiry Support for <Country> | Rubinox
```

Alternative:

```text
Stainless Steel and Alloy Export RFQ Support for <Country> | Rubinox
```

### Meta description pattern

```text
Rubinox Metal and Alloys supports <Country> export enquiries for stainless steel, duplex, nickel alloys, titanium, SMO 254, aluminium, copper, brass and project metal RFQs from India.
```

### H1 pattern

```text
Industrial Metal Export Enquiry Support for <Country> Buyers
```

### Export RFQ checklist

Country pages should ask for:

- Destination country.
- Destination port or delivery city, if known.
- Material family and grade.
- Product form.
- Size and dimensions.
- Quantity.
- Standard and specification.
- Finish or condition.
- MTC, PMI, inspection or documentation requirement where applicable.
- Packing requirement.
- BOQ, MTO, drawing or project list.
- Preferred communication method.

### Country industry section

Include country-relevant industry intent, for example UAE oil and gas/EPC/marine, Saudi Arabia petrochemical/power/desalination, Singapore marine/offshore/pharma, or Germany automotive/chemical/precision engineering.

### Priority materials section

| Material family | Export enquiry intent | Useful links |
|---|---|---|
| Duplex / Super Duplex | Offshore, marine, chloride and process applications | Duplex, 2205, 2507 |
| Nickel Alloys | Corrosion, chemical and heat applications | Nickel Alloys, Inconel, Hastelloy |
| Titanium | Chemical, marine and high-performance requirements | Titanium, Grade 2, Grade 5 |

### FAQ section

Recommended country FAQ themes:

- Can Rubinox support export enquiries for <Country> buyers?
- What details are needed for an export RFQ?
- Which materials are commonly requested for <Country> industries?
- Can buyers share project BOQ or MTO requirements?
- Can documentation requirements be reviewed?
- Can Rubinox support stainless steel, duplex, nickel alloys and titanium RFQs?
- Can packing and destination details be included in the RFQ?
- Does Rubinox have a local office in <Country>? Safe answer: do not claim local office unless verified; state enquiries are handled by Rubinox from India.

### FAQPage schema requirement

- Add FAQPage schema only after visible FAQs exist.
- Schema must match visible FAQ content.
- Do not use Product, Offer, Review or AggregateRating schema.
- Do not include unsupported export history, delivery guarantees or local branch claims.

### CTA block

```text
Share your <Country> export RFQ with grade, form, size, quantity, specification, documentation requirement and destination details for quotation review.
```

### Related links

Each country page should link to:

- `/export.html`.
- `/quotation.html`.
- `/contact.html`.
- Relevant material pages.
- Relevant industry page sections.
- High-value product form pages.
## 10. Rollout Sequence

### Phase 0: Audit existing hidden or legacy location pages

- Search the repository for existing city, state, export and country pages.
- Identify hidden, orphan or thin location pages.
- Review `materials/stainless-steel-supplier-mumbai.html` as a legacy SEO asset.
- Document whether each legacy page should be kept, improved, linked into a cluster or consolidated later.
- Do not delete existing indexed pages without Search Console review.

### Phase 1: Create `/locations.html` and `/export.html`

- Create public hub pages first.
- Add them to sitemap.
- Add footer links where appropriate.
- Include clear buyer pathways by industry, material and RFQ intent.
- Do not create city/country pages until the hubs exist.

### Phase 2: First 10 India city pages

Recommended first 10:

1. Mumbai.
2. Navi Mumbai.
3. Thane.
4. Pune.
5. Chakan / Pimpri-Chinchwad.
6. Ahmedabad.
7. Vadodara.
8. Bharuch.
9. Ankleshwar.
10. Chennai.

Rationale: strongest mix of current business relevance, industrial buyer intent, material diversity and proximity to existing Mumbai positioning.

### Phase 3: First 6 export pages

Recommended first 6:

1. UAE.
2. Saudi Arabia.
3. Qatar.
4. Oman.
5. Kuwait.
6. Bahrain.

Rationale: strong GCC industrial, oil and gas, marine, construction, desalination and EPC relevance.

### Phase 4: Next 15 city pages

Recommended next 15:

1. Surat.
2. Vapi.
3. Rajkot.
4. Jamnagar.
5. Dholera / Sanand.
6. Sriperumbudur / Oragadam.
7. Coimbatore.
8. Hosur.
9. Bengaluru.
10. Hyderabad.
11. Visakhapatnam.
12. Delhi.
13. Gurugram / Manesar.
14. Faridabad.
15. Noida.

### Phase 5: Remaining city and country pages

- Complete remaining India city/cluster pages in batches.
- Complete remaining export country pages.
- Run QA after each batch: schema, crawl, sitemap, HTML validation and navigation.
- Keep page creation slow enough to preserve quality and uniqueness.

### Phase 6: High-value material + city pages only after Search Console demand is visible

Examples only if demand is proven:

- City plus material pages for high-value combinations such as Pune aluminium, Bharuch Hastelloy, Chennai duplex, Jamnagar brass.
- Do not create material + city pages pre-emptively.
- Use Search Console queries, impressions, clicks and lead quality before expansion.
- Avoid multiplying thin pages.
- Each material + city page must have unique buyer value and internal links.

## 11. Special Handling: Existing Mumbai Stainless Steel Page

Existing page:

```text
/materials/stainless-steel-supplier-mumbai.html
```

Recommended treatment:

- Treat this page as a legacy SEO asset.
- Do not delete it now.
- Do not redirect it until Search Console and analytics data are reviewed.
- Later, audit it against the future Mumbai location cluster.
- Possible future options:
  - Keep and improve as a material-specific Mumbai page.
  - Link it from `/locations/mumbai.html` as a related stainless steel resource.
  - Consolidate only if duplicate intent becomes a measurable problem.
- Preserve its canonical unless a future consolidation task explicitly changes it.

## 12. Internal Linking Strategy

Recommended link sources:

- Homepage: link to Locations and Export hubs if approved for footer or section-level placement.
- Footer: add hub links after pages are created.
- Materials landing page: link to location/export hubs only where buyer journey makes sense.
- Major material pages: link to high-priority city/export pages only after those pages exist and are useful.
- Industries page: link from relevant industry sections to city/export hubs.
- Quotation page: add contextual links to Locations and Export hubs for buyer guidance.
- Contact page: mention PAN India and export enquiry support with hub links.

Recommended anchor text:

- `India location RFQ support`.
- `Export enquiry support`.
- `Metal supplier for Mumbai industries`.
- `Duplex and nickel alloy RFQ support for GCC buyers`.
- `Stainless steel and alloy RFQ support for Pune buyers`.

Avoid over-optimized repetitive anchor text across many pages.

## 13. Schema Strategy

Recommended schema types:

- `WebPage` for all location/export pages.
- `BreadcrumbList` for all pages.
- `FAQPage` only when visible FAQ content exists.
- Existing organization reference where appropriate.

Avoid:

- `Product` schema unless a future product-specific implementation justifies it.
- `Offer` schema because pricing and availability are not being provided.
- `Review` or `AggregateRating` schema unless verified and compliant.
- `LocalBusiness` schema implying city/country branch presence where none is verified.

## 14. QA Requirements For Future Implementation

After each page batch, run:

```powershell
pnpm run qa:html
pnpm run qa:schema
pnpm run qa:accessibility
pnpm run test:navigation
pnpm run qa:crawl
pnpm run qa:sitemap
```

Manual review checklist:

- One H1 per page.
- Canonical URL matches page URL.
- Page is linked from a hub.
- Page appears in sitemap.
- FAQPage schema matches visible FAQs.
- No fake local office, warehouse or export history claims.
- No pricing language or stock promises.
- CTAs point to WhatsApp, email, quotation or contact pages correctly.
- Mobile layout does not introduce horizontal scroll.

## 15. Success Metrics

Track rollout with:

- Google Search Console impressions by city/country query.
- Click-through rate by page and query type.
- Indexed pages and crawl status.
- Lead quality by RFQ source page.
- Queries triggering AI overviews, featured snippets or answer-style results.
- Internal link crawl depth.
- Duplicate title/meta risks.
- Pages with high impressions but low CTR for title/meta improvements.

## 16. Recommended Next Decision Before Implementation

Before creating pages, approve:

1. Whether `/locations.html` and `/export.html` should be linked from the footer only or also from selected core page sections.
2. Whether city pages should use a uniform visual template matching the premium Rubinox core pages.
3. Whether the first city batch should include only Maharashtra/Gujarat clusters or the full first 10 priority list.
4. Whether export pages should begin with the GCC batch first.
5. Whether `materials/stainless-steel-supplier-mumbai.html` should be linked from the future Mumbai page as a legacy material-specific asset.