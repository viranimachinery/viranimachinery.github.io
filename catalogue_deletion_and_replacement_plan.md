# Document B: Catalogue Deletion & Replacement Plan

> **Status:** Planning Phase — Awaiting User Approval  
> **Repository:** Virani Machinery & Co. (`d:\viraniwebsiterelatedimages\virani_website_final`)  
> **Code Modification Status:** ZERO files deleted or modified. No action will be taken without explicit approval.  
> **Scope:** Brand product catalogue files only. Core website design, layout, animations, typography, and non-catalogue assets are 100% protected.

---

## 1. Executive Summary & Philosophy of the Plan

The Virani Machinery website utilizes an **Automatic Product Discovery System (APDS)** in [index.html](file:///d:/viraniwebsiterelatedimages/virani_website_final/index.html#L3789-L4250) that scans `assets/<BrandName>/` for image files to dynamically build main product cards and sub-product carousels.

Currently, the catalogue folders contain **generic placeholder filenames** (e.g., `product1.jpg`, `product2.webp`, `product15.png`, raw hash filenames like `o_1j224dbmf...`, and desktop screenshots). Because of line 3812 in `index.html` (`if (num) return 'Product ' + num`), the live website displays these as generic numbered products rather than commercial brand offerings.

**Rule of Replacement:**
- We propose to remove **ONLY** the obsolete, generic placeholder product images and sub-folders within the 6 designated brand directories.
- We will **NOT** delete core brand logos, site icons, fonts, promotional banners, or the `cement` directory.
- Every proposed deletion is replaced 1-to-1 with a high-resolution, officially verified product image named after the actual commercial product (e.g., `CPVC Brass Elbow.webp` instead of `product15.png`).

---

## 2. Exhaustive List of Proposed Deletions (Exact Paths & Folders)

### A. Waterflo Catalogue Deletions
*Location:* `assets/Waterflo/`

#### 1. Obsolete Main Product Files (14 files to delete):
*Why:* These are generic placeholder images (`product1` to `product7`) with duplicate uncompressed `.jpg` and `.webp` copies.
*Impact on Website:* None outside the Waterflo card list. They will be immediately replaced by the 7 verified main products (Strongfit CPVC, Surefit uPVC, Clickfit SWR, Selfit SWR, AgriMaster, Boreline, HDPE Pipes).
```text
assets/Waterflo/product1.jpg
assets/Waterflo/product1.webp
assets/Waterflo/product2.jpg
assets/Waterflo/product2.webp
assets/Waterflo/product3.jpg
assets/Waterflo/product3.webp
assets/Waterflo/product4.jpg
assets/Waterflo/product4.webp
assets/Waterflo/product5.jpg
assets/Waterflo/product5.webp
assets/Waterflo/product6.jpg
assets/Waterflo/product6.webp
assets/Waterflo/product7.jpg
assets/Waterflo/product7.webp
```

#### 2. Obsolete Sub-Product Folders and Files (38 files across 6 folders to delete):
*Why:* These folders contain numbered sub-products (`product8.png` to `product26.png`) with duplicate `.png` and `.webp` versions.
*Impact on Website:* Will be replaced by semantic sub-product folders named after each verified main product line containing real fitting names.
```text
assets/Waterflo/product1/
  ├── product15.png
  ├── product15.webp
  ├── product16.png
  ├── product16.webp
  ├── product17.png
  ├── product17.webp
  ├── product18.png
  └── product18.webp

assets/Waterflo/product2/
  ├── product13.png
  ├── product13.webp
  ├── product14.png
  └── product14.webp

assets/Waterflo/product4/
  ├── product22.png
  └── product22.webp

assets/Waterflo/product5/
  ├── product19.png
  ├── product19.webp
  ├── product20.png
  ├── product20.webp
  ├── product21.png
  └── product21.webp

assets/Waterflo/product6/
  ├── product23.png
  ├── product23.webp
  ├── product24.png
  ├── product24.webp
  ├── product25.png
  ├── product25.webp
  ├── product26.png
  └── product26.webp

assets/Waterflo/product7/
  ├── product8.png
  ├── product8.webp
  ├── product9.png
  ├── product9.webp
  ├── product10.png
  ├── product10.webp
  ├── product11.png
  ├── product11.webp
  ├── product12.png
  └── product12.webp
```
*Total Waterflo deletions:* 52 files, 6 subdirectories.

---

### B. Kanan Plast Catalogue Deletions
*Location:* `assets/Kanan Plast/`

#### 1. Obsolete Main Product Files (8 files to delete):
*Why:* Generic placeholder files (`product1` to `product4`) with duplicate `.jpeg` and `.webp` copies.
*Impact on Website:* None outside the Kanan Plast card list. Will be replaced by the 7 verified valve categories.
```text
assets/Kanan Plast/product1.jpeg
assets/Kanan Plast/product1.webp
assets/Kanan Plast/product2.jpeg
assets/Kanan Plast/product2.webp
assets/Kanan Plast/product3.jpeg
assets/Kanan Plast/product3.webp
assets/Kanan Plast/product4.jpeg
assets/Kanan Plast/product4.webp
```

#### 2. Obsolete Sub-Product Folder & Desktop Screenshots (6 files to delete):
*Why:* Unprocessed desktop screenshots (`Screenshot 2026-10-08 162804`, etc.) accidentally saved in the repository.
*Impact on Website:* None. These will be replaced by verified isolated valve models.
```text
assets/Kanan Plast/product3/
  ├── Screenshot 2026-10-08 162804.png
  ├── Screenshot 2026-10-08 162804.webp
  ├── Screenshot 2026-10-08 162811.png
  ├── Screenshot 2026-10-08 162811.webp
  ├── Screenshot 2026-10-08 162818.png
  └── Screenshot 2026-10-08 162818.webp
```
*Total Kanan Plast deletions:* 14 files, 1 subdirectory.

---

### C. Ganga Pipes Catalogue Deletions
*Location:* `assets/Ganga Pipes/`

#### Obsolete Main Product Files (4 files to delete):
*Why:* Placeholder files (`product1.jpg`, `product1.webp`, `product2.jpg`, `product2.webp`). Currently Ganga Pipes has only 2 placeholder products and zero sub-products.
*Impact on Website:* None outside Ganga Pipes section. Will be replaced by 8 verified pipe systems and 32 verified fittings directly from Ganga's media server.
```text
assets/Ganga Pipes/product1.jpg
assets/Ganga Pipes/product1.webp
assets/Ganga Pipes/product2.jpg
assets/Ganga Pipes/product2.webp
```
*Total Ganga Pipes deletions:* 4 files.

---

### D. Birla Opus Paints Catalogue Deletions
*Location:* `assets/Birla Opus/`

#### Obsolete Main Product Files (4 files to delete):
*Why:* Unlabeled generic placeholder files (`product1.webp` through `product4.webp`).
*Impact on Website:* None outside Birla Opus section. Will be replaced by the 6 official collections (One, Calista, Style, Alldry, Allwood, Primers).
```text
assets/Birla Opus/product1.webp
assets/Birla Opus/product2.webp
assets/Birla Opus/product3.webp
assets/Birla Opus/product4.webp
```
*Total Birla Opus deletions:* 4 files.

---

### E. Mottero Sanitaryware Catalogue Deletions
*Location:* `assets/Mottero/`

#### 1. Obsolete Main Product Files (8 files to delete):
*Why:* Generic placeholder files (`product1` to `product4`) with duplicate `.jpg` and `.webp` copies.
*Impact on Website:* None outside Mottero section. Will be replaced by verified vitreous china lines (One Piece Closets, Wall Hung Closets, Table Top Basins, etc.).
```text
assets/Mottero/product1.jpg
assets/Mottero/product1.webp
assets/Mottero/product2.jpg
assets/Mottero/product2.webp
assets/Mottero/product3.jpg
assets/Mottero/product3.webp
assets/Mottero/product4.jpg
assets/Mottero/product4.webp
```

#### 2. Obsolete Sub-Product Folders and Raw Hash Files (18 files across 3 folders to delete):
*Why:* These files have raw scrambled hash names (e.g. `o_1j224dbmf1nhg2ltsujr4v19p2p.jpg`), rendering meaningless names in the UI.
*Impact on Website:* Will be replaced by cleanly named sub-products with verified commercial model codes (e.g. `Afro - 5112.webp`, `Cosmo - 6106.webp`, `Arrow - 1123.webp`).
```text
assets/Mottero/product1/
  ├── o_1j224dbmf1nhg2ltsujr4v19p2p.jpg
  ├── o_1j224dbmf1nhg2ltsujr4v19p2p.webp
  ├── o_1j224dbmf1tp314b51vfb1rkcig2r.jpg
  ├── o_1j224dbmf1tp314b51vfb1rkcig2r.webp
  ├── o_1j224dbmfgna1c76qsjuvrac8s.jpg
  └── o_1j224dbmfgna1c76qsjuvrac8s.webp

assets/Mottero/product2/
  ├── o_1j22237oj1t3rtuon4l1j4d1aiiq.jpg
  ├── o_1j22237oj1t3rtuon4l1j4d1aiiq.webp
  ├── o_1j22237ojbbm163210e58spjpmk.jpg
  ├── o_1j22237ojbbm163210e58spjpmk.webp
  ├── o_1j22237ojdj2b3o166mavtic2m.jpg
  └── o_1j22237ojdj2b3o166mavtic2m.webp

assets/Mottero/product3/
  ├── o_1j224v9nr1mnlouj4806dluut10.jpg
  ├── o_1j224v9nr1mnlouj4806dluut10.webp
  ├── o_1j224v9ns1hlf1rj0qhuofl4p17.jpg
  ├── o_1j224v9ns1hlf1rj0qhuofl4p17.webp
  ├── o_1j224v9nsrfl1d6onkbb7218a713.jpg
  └── o_1j224v9nsrfl1d6onkbb7218a713.webp
```
*Total Mottero deletions:* 26 files, 3 subdirectories.

---

### F. Appu Xtra Water Tanks Catalogue Deletions
*Location:* `assets/Appu Xtra/`

#### Obsolete Main Product Files (6 files to delete):
*Why:* Generic placeholder files (`product1.jpg`, `product1.webp`, `product2.jpg`, `product2.webp`, `product3.png`, `product3.webp`).
*Impact on Website:* None outside Appu Xtra section. Will be replaced by the 5 verified tank lines (3-Layer UV White, Ruf & Tuf Heavy, Chemical Heavy, 2-Layer Domestic, PUF Foam Insulated).
```text
assets/Appu Xtra/product1.jpg
assets/Appu Xtra/product1.webp
assets/Appu Xtra/product2.jpg
assets/Appu Xtra/product2.webp
assets/Appu Xtra/product3.png
assets/Appu Xtra/product3.webp
```
*Total Appu Xtra deletions:* 6 files.

---

### Grand Total of Proposed Deletions Across the 6 Brands
- **Total Obsolete Files to Delete:** 106 files (53 JPEG/PNG duplicates + 53 old generic WebP files)
- **Total Obsolete Subdirectories to Delete:** 10 folders (`product1`, `product2`, `product3`, etc.)

---

## 3. Protected Assets That Must Remain 100% Unchanged

The following files and directories will **NOT be touched, renamed, moved, or deleted under any circumstances**:

### A. Core Site Identity, Typography & UI (PRESERVED)
| File Path | Role on Website | Rationale for Preservation |
| :--- | :--- | :--- |
| `assets/BalooBhai2-Regular.ttf` | Gujarati Font Family | Essential for all Gujarati typography in hero, buttons, and headers |
| `assets/image.png` & `assets/image.webp` | Favicon & Apple Icon | Browser tab icon and mobile home screen shortcut |
| `assets/GUJRATI LOGO.png` & `.webp` | Header Gujarati Logo | Brand identity in the desktop and mobile navigation header |
| `assets/virani-official-logo.png` & `.webp` | Official Virani Logo | Main corporate logo in navbar, footer, and inquiry overlays |

### B. Brand Logos Required by Automatic Discovery (PRESERVED)
These 6 brand logos are explicitly mapped in `APDS_LOGO_OVERRIDES` (lines 4014–4021 of `index.html`). Deleting any of them would break brand logo rendering in the showcase headers and trusted brand pill list:
* `assets/waterflo-logo.png` & `assets/waterflo-logo.webp`
* `assets/kanan-logo.jpeg` & `assets/kanan-logo.webp`
* `assets/ganga.png` & `assets/ganga.webp`
* `assets/birla_opus_2_595513922e.webp`
* `assets/mottero-logo.png` & `assets/mottero-logo.webp`
* `assets/appuextra.png` & `assets/appuextra.webp`

### C. Unrelated Brand Directory Outside Scope (PRESERVED)
* `assets/cement/` (and its files `product1.jpg`, `product1.webp`, `product2.jpg`, `product2.webp`, `assets/cement.png`, `assets/cement.webp`, `assets/cement1.jpg`, `assets/cement1.webp`):  
  *Rationale:* The user specifically restricted the task to 6 brands. Cement is outside scope and remains 100% untouched.

### D. Loose Showcase Banners & Reference Imagery in Root `assets/` (PRESERVED)
These root files are not inside brand catalogue folders and will remain untouched:
* `assets/VIRANI Machinery Gujarati Product Showcase.png` & `.webp`
* `assets/Waterflo Pipes & Fittings Product Showcase.png` & `.webp`
* `assets/Kanan Plast Plumbing Solutions Poster.png` & `.webp`
* `assets/Mottero Premium Sanitaryware Showcase.png` & `.webp`
* `assets/waterflo-portfolio.png` & `.webp`
* `assets/kanan-products.jpeg` & `.webp`
* `assets/kanan-green-valve.jpeg` & `.webp`
* `assets/kanan-red-valve.jpeg` & `.webp`
* `assets/mottero-basin.jpg` & `.webp`
* `assets/mottero-toilet.jpg` & `.webp`
* `assets/appu-tank-detail.jpg` & `.webp`
* `assets/appu-tank-single.png` & `.webp`
* `assets/appu-tanks.jpg` & `.webp`

### E. Core Code and Infrastructure Files (PRESERVED)
* `index.html`: Layout, two-sided entrance animation, swipe gesture support, lightbox zoom/pan viewer, search filtering, Gujarati strings, WhatsApp enquiry links, Google Maps iframe, and responsive CSS remain 100% unchanged.
* `.git/`: Version control repository untouched. No commits, no pushes.

---

## 4. Proposed Replacement Architecture

Once approved, the new structure inside each brand folder will follow this clean, semantic format:

```text
assets/
├── Waterflo/
│   ├── Strongfit CPVC Piping System.webp
│   ├── Strongfit CPVC Piping System/
│   │   ├── CPVC SDR 11 Pipe.webp
│   │   ├── CPVC 90 Degree Elbow.webp
│   │   ├── CPVC Brass Elbow.webp
│   │   └── ...
│   ├── Surefit uPVC Plumbing System.webp
│   ├── Clickfit uPVC SWR Drainage System.webp
│   ├── Selfit uPVC SWR Drainage System.webp
│   ├── AgriMaster Agriculture Pipes.webp
│   ├── Boreline Column Pipes.webp
│   └── HDPE Coils and Pipes.webp
├── Kanan Plast/
│   ├── PP Flange End Three Piece Ball Valve.webp
│   ├── PP Solid Ball Valves.webp
│   ├── PP Solid Ball Valves/
│   │   ├── MS Handle Ball Valve.webp
│   │   ├── Short Handle Ball Valve.webp
│   │   └── ...
│   └── ...
├── Ganga Pipes/
│   ├── Ganga CPVC Hot and Cold Water Pipes.webp
│   ├── Ganga CPVC Hot and Cold Water Pipes/
│   │   ├── CPVC Pipe 3 Meter.webp
│   │   ├── CPVC 90 Degree Elbow.webp
│   │   ├── CPVC Brass Insert Elbow.webp
│   │   └── ...
│   └── ...
├── Birla Opus/
│   ├── One Pure Elegance Luxury Emulsion.webp
│   ├── Calista Neo Star Premium Emulsion.webp
│   ├── Style Color Smart Architectural Paint.webp
│   ├── Alldry Comprehensive Waterproofing.webp
│   ├── Allwood Fine Timber Finishes.webp
│   └── Primers Putties and Tools.webp
├── Mottero/
│   ├── One Piece Closets Collection.webp
│   ├── One Piece Closets Collection/
│   │   ├── Afro 5112 Syphonic Closet.webp
│   │   ├── Gama 5115 Syphonic Closet.webp
│   │   └── ...
│   ├── Wall Hung European Closets.webp
│   ├── Table Top Art Basins.webp
│   ├── One Piece Freestanding Basins.webp
│   ├── Pastel Matte Color Sanitaryware.webp
│   ├── Pastel Matte Table Top Basins.webp
│   └── Commercial Urinals and Squatting Pans.webp
└── Appu Xtra/
    ├── Appuxtra 3 Layer UV White Water Tank.webp
    ├── Ruf and Tuf Black Extra Heavy Tank.webp
    ├── Special Appuxtra Chemical Heavy Tank.webp
    ├── Appuxtra Black 2 Layer Domestic Tank.webp
    └── Waterflo PUF Foam Insulated Cool Tank.webp
```

---

## 5. Verification Checklist Before Any Execution

- [x] Zero code or asset files deleted or modified in this planning pass.
- [x] Every single proposed deletion path verified against the live disk filesystem.
- [x] All 6 brand logo overrides confirmed protected.
- [x] Fonts, icons, and Gujarati branding confirmed protected.
- [x] Unrelated `cement` directory confirmed protected.
- [x] Replacement images confirmed live, official, and downloadable from manufacturer CDNs.
- [x] Awaiting user's explicit two-part approval before proceeding.
