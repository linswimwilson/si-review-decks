# SI Review Deck Visual Toolkit

Reference doc for describing visuals you want on slides. Paste this (or parts of it) into any AI assistant to help sketch ideas, then bring the specs back for implementation.

---

## The Tech Stack (Constraints)

- **Single self-contained HTML file per deck** — one file opens in any browser by double-click, no external files except Google Fonts (Inter).
- **All visuals are code** — inline CSS, inline JavaScript, inline SVG. No image files, no external graphics tools.
- **Dark theme, medical-textbook aesthetic** — navy background `#0f172a`, cards `#1e293b`, colored accents.
- **Must scale responsively** — phone to desktop. Complex SVG visuals usually stack to a simple list on narrow screens.
- **Interactive** — reveal-all quiz answers on click, keyboard/swipe nav.
- **Works with screen readers** — SVG has `<title>` and ARIA labels.

## What I CAN Build

### Slide types (layout skeletons)
| Type | Purpose |
|---|---|
| `title` | Opening slide, gradient heading |
| `section-divider` | "Section A/B/C" label + big chapter-style heading |
| `anchor` | Big bold statement w/ colored tag label (Core Concept, Emergency, Warning, Clinical Pearl, Big Picture) |
| `narrative` | Workhorse: section label + heading + content (bullets, cell-cards, custom SVG) |
| `flow` | Horizontal chain of boxes with arrows — **ONLY for TRUE cascades** (A causes B causes C) |
| `compare` | 2-column or 3-column side-by-side comparison |
| `check` | Quiz with 4 MCQ options, shows all explanations on click |
| `case` | Patient scenario → MCQ question → reveal-all answers w/ teaching |

### Visual components (callable by name)
| Component | What it is |
|---|---|
| **cell-cards** | Grid of colored bordered cards w/ icon + bold header + bullet list content. Default 2-col, can force 1-col (vertical) or 4-col |
| **radial wheel** | Central molecule/hub + pentagon/hexagon positions + dashed spoke lines + organ silhouettes at each point. For "one cause, many parallel effects" |
| **branching tree** | Root node → Y-fork → 2+ middle mediators, each with own effect cards beneath. For "one cause, distinct pathways per mediator" |
| **axis with feedback loop** | Vertical stacked gland boxes + hormone endpoint box + curved dashed SVG arrow looping back to sensing organ. For HPA / HPT / any endocrine axis |
| **true cascade flow** | Horizontal chain of colored boxes with arrows. Each box triggers the next |
| **anatomical map** | Custom SVG drawing of an organ/body region with labels. Built so far: colon path, brain lobes, steroid molecule, glucose sugar ring |
| **circular homeostasis loop** | Central "normal" hub + two arcs (left arm + right arm) for bidirectional regulation (like glucose↔insulin↔glucagon) |
| **vicious cycle loop** | Closed 4-node loop with curved arrows + red exit arrow (for self-reinforcing pathophys like T2 diabetes) |
| **color-swatch cards** | Vertical list of cards with colored swatch on the left, label + description — for categorical guides (stool colors, rhythm strips, etc.) |
| **emergency cards** | 2-column emergency recognition panels w/ "priority" footer boxes |
| **target-cards** | Compact cards listing organ targets/effects (like diabetes complications, before wheel upgrade) |
| **rule + decision tree** | Rule stated in left box + if-then decision rows on right w/ icon, question, arrow, action. Built for Monroe-Kellie |
| **glucose-spectrum** | Horizontal color-banded bar for lab-value ranges (hypo/normal/diabetic) |

### SVG shapes I've already drawn (can be reused or modified)
- **Liver** (bilobed silhouette)
- **Kidney** (bean)
- **Brain** (outline with cortical fissure — lateral view; or with labeled lobes)
- **Stomach** (J-curve sac)
- **Bone** (long-bone / femur)
- **Heart** (symbolic)
- **Eye** (almond outline + iris + pupil)
- **Lymphocyte / WBC** (outer circle + nucleus)
- **Skin cross-section** (stacked epidermis/dermis/subcutaneous rectangles)
- **Nerve fiber** (line with myelin sheath segments)
- **Foot** (side silhouette)
- **Adipose cluster** (circles representing fat cells)
- **Muscle** (bicep outline + horizontal fiber striations)
- **Colon path** (inverted-U with consistency color gradient)
- **Steroid 4-ring** (cortisol backbone, 3 hexagons + 1 pentagon + OH groups)
- **Glucose pyranose ring** (hexagon + O + OH labels)

### Colors (semantic palette)

| Color | Hex | Use for |
|---|---|---|
| Blue | `#38bdf8` | Key anatomy, normal physiology, cold/slow, primary concepts |
| Yellow | `#f59e0b` | Lab values, meds, cautions, metabolic |
| Red | `#ef4444` | Dangers, emergencies, hot/fast, critical values |
| Purple | `#a78bfa` | Brain tissue, demographics, immune |
| Teal | `#22d3ee` | Skin, clinical pearls, sensing |
| Green | `#34d399` | Treatments, goals, positive outcomes, feedback loops |

### Tags on anchor slides
`Core Concept` (blue) · `Clinical Pearl` (teal) · `Red Flag` (red) · `Emergency` (red filled, white text) · `Warning` (yellow) · `Big Picture` (blue, summary slides)

---

## What I CAN'T Easily Do

- **Photorealistic illustrations or photos** — no image generation here; SVG is schematic only
- **Hand-drawn / sketchy textures** — possible but labor-intensive
- **Complex 3D** — out of scope
- **Video or audio** — not supported in the self-contained HTML pattern
- **Anything AI-generated** — not available in this environment
- **Photographic anatomy atlases** — stylized SVG only

---

## How to Describe a Visual Idea

When you want a specific visual, the most useful info for me is:

1. **What's the structure?** Is it:
   - A sequence (cascade)?
   - A radial/hub-and-spokes (wheel)?
   - A branching tree (one → many mediators → many effects)?
   - A comparison (2 or 3 side-by-side)?
   - A homeostasis loop (bidirectional)?
   - An anatomical map (labeled body region)?

2. **What's in the center / what's the anchor concept?**
3. **What are the parts/labels?** (as bullets or a list)
4. **Color coding** — any semantic meaning? (e.g., "metabolic things in yellow, emergencies in red")
5. **Anatomical orientation?** — does order matter? (top→bottom body, outside→inside, etc.)
6. **Any clinical numbers to show?** — and do they need normal ranges alongside?

Example of a great spec:
> "Show the 3 layers of the skin in a vertical stack, outermost on top. Epidermis thin (1-2mm), dermis thicker (medium), subcutaneous thickest. Label each with 1-2 sentences on what lives there. Use teal for skin. Include a hair follicle spanning through them."

## Design Rules We've Established (from our iteration)

1. **Content from your handwritten notes only** — never ADA standards or internet knowledge
2. **Cell-cards contain bullets, not comma-run-on paragraphs**
3. **Parallel effects = wheel, NOT fake cascade**
4. **Multiple mediators with own effects = branching tree**
5. **Endocrine axes are vertical with hormone endpoint + curved feedback loop**
6. **Manifestations before causes** (patient walks in with signs, then we figure out why)
7. **Common presentation → emergency form** (treat-the-typical first, emergency after)
8. **Numbers-in-context on clinical slides** (show normal range next to patient value)
9. **Anatomical ordering** (top-to-bottom follows body anatomy)
10. **Vertical single-column layout** for progressions and sequences
11. **Medical-textbook aesthetic** — SVG silhouettes, no photos
12. **Tags on every anchor slide** (Core Concept / Emergency / Clinical Pearl / Warning / Big Picture)
13. **Sections numbered A/B/C/D** with descriptive subtitles
14. **All checks use revealChoice** (shows all answer explanations on click)
15. **All cases are MCQ with 4 options** (not reveal-button)
