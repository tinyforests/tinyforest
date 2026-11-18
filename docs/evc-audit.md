# EVC name audit — 18 Nov 2026

Corrected by code, keeping old slug aliases for existing links:

- 132: Plains Grassland (not Coastal Tussock Grassland, which is 163).
- 83: Swampy Riparian Woodland (not Swamp Scrub).
- 9: Coastal Saltmarsh (not Coastal Dune Scrub).
- 164: Creekline Herb-rich Woodland (not Coastal Headland Scrub).
- 73: Rocky Outcrop Shrubland/Herbland Mosaic (not Riparian Forest).
- 103: Riverine Chenopod Woodland (not Swampy Riparian Woodland).

Primary references:

- [DEECA Otway Plain benchmarks](https://www.environment.vic.gov.au/__data/assets/pdf_file/0031/48739/OtP_EVCs_combined.pdf): 132, 83, 9.
- [DEECA Gippsland Plain benchmarks](https://www.environment.vic.gov.au/__data/assets/pdf_file/0033/48696/GipP_EVCs_combined.pdf): 164 and 163.
- [Commonwealth Western Victoria RFA biodiversity assessment](https://www.agriculture.gov.au/sites/default/files/sitecollectiondocuments/rfa/regions/vic-west/environment/west-vic-rfa-biodiversity-assessment-report-appendices-a-f.pdf): 73.
- [Victorian planning referral, DEECA mapping inventory](https://www.planning.vic.gov.au/__data/assets/pdf_file/0023/706082/0697734_Cannie_WF_EES_Referral_Form_FINAL_10May2024-Signed-MH-JL.pdf): 103.

Repository-wide searches in tinyforest and findyourevc found the erroneous 132 name in these two JSON files only. findyourevc reads EVC names from WFS rather than shipping this catalogue; no change there is required.

Remaining unverified catalogue pairs: 4 / Damp Heathy Woodland; 129 / Sedge-rich Woodland; 171 / Coastal Alkaline Scrub; 118 / Basalt Grassland; 267 / Chenopod Grassland. Do not treat these as benchmark-verified. Some appear to use the wrong code; no replacement is guessed here. The government ArcGIS template catalogue has conflicting historical entries for 267. Other unchanged pairs have not all received a complete benchmark audit.

NV2005 is an extent dataset, not a separate universal benchmark list. Benchmark choice also depends on bioregion and variant. The 132 page now points out this distinction instead of presenting coastal salt-tolerance advice.

Check: `node tests/evc-names.cjs`.
