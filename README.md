# SI Review Decks — Directory Guide

Quick reference for what lives where. Live site: <https://linswimwilson.github.io/si-review-decks/>

---

## 🧭 Standards & Reference Docs (read these first)

| File | Purpose |
|---|---|
| `COURSE_STANDARDS.md` | Chapter.md format, voice, textbook citation, Bloom's levels, ID conventions |
| `DECK_STANDARDS.md` | Deck skeleton, slide types, CSS component library, quality checklist (§9), file naming conventions (§8) |
| `VISUAL_TOOLKIT.md` | Describes what visuals can be built in the decks (send this to any AI helper when iterating) |
| `README.md` | This file |

---

## 📚 Live Review Decks

Opens by double-clicking any file, or via the live site. Each is a self-contained HTML file with a dark-navy medical-textbook theme.

### Chapter 9 — Endocrine
| File | Topic |
|---|---|
| `Endocrine_Thyroid_Review.html` | Hypothyroidism · Hyperthyroidism · HPT axis · emergencies |
| `Endocrine_Adrenal_Review.html` | Cushing's wheel · Addison's tree · HPA axis w/ feedback loop · crisis |
| `Endocrine_Diabetes_Review.html` | Pancreas · insulin loop · Type 1/2 · DKA/HHNK · complications wheel · chronic complications |

### Chapter 10 — GI
| File | Topic |
|---|---|
| `GI_UpperGI_Review.html` | GERD · Barrett's · PUD (older template — retrofit post-final) |
| `GI_LowerGI_Review.html` | Anatomical colon map · diarrhea/constipation · diverticular disease · stool color guide |
| `GI_Liver_Review.html` | ⚠️ Only 8 slides — essentially a draft. Needs rebuild post-final. |

### Chapter 11 — Neural
| File | Topic |
|---|---|
| `course-data/chapters/ch11-neural/Ch11_Foundations_Review.html` | Meninges/CSF · brain lobes · ICP + Monroe-Kellie · bleeds · Circle of Willis |
| `Neural_Stroke_Review.html` | CVA · ischemic/hemorrhagic · FAST · treatment window · case (needs filename migration + lobe recolor post-final) |

### Chapter 4 — Cardiovascular (all use older template — full v2 retrofit post-final)
| File | Topic |
|---|---|
| `Cardiovascular_Anatomy_Review.html` | Heart anatomy · cardiac cycle · heart sounds |
| `Cardiovascular_Output_Review.html` | CO · preload/afterload · RAAS · valves · hypertrophy |
| `Cardiovascular_Electrical_Review.html` | Conduction · ECG · rhythms · ST/T/Q pathology |
| `Cardiovascular_Vascular_Review.html` | Atherosclerosis · dyslipidemia · PAD · HTN |
| `Cardiovascular_CAD_Review.html` | CAD · angina · MI · thrombus/embolus |

---

## 📝 Live Quizzes

All have name-gate + Google-Sheets tracking + SATA/MC/results screens. Separate artifact type from Review decks (see DECK_STANDARDS §2).

### Chapter 9 — Endocrine
- `Endocrine_Quiz_Thyroid.html` · `Endocrine_Quiz_Adrenal.html` · `Endocrine_Quiz_Diabetes.html`
- `Endocrine_Warmup_Quiz.html` (25Q cross-topic)

### Chapter 10 — GI
- `GI_Quiz_UpperGI.html` · `GI_Quiz_LowerGI.html` · `GI_Quiz_Liver.html`
- `GI_Warmup_Quiz.html` (25Q cross-topic)
- `GI_Ch9_Quiz.html` (combined chapter quiz)

---

## 📂 `course-data/`

Source material and structured chapter data — NOT the live decks.

```
course-data/
├── COURSE STANDARDS.pdf                       (Lindsay's course doc)
├── 2025 308 Final Exam Course Objectives Guide.docx
└── chapters/
    ├── ch1-intro-patho/       raw notes + LAD
    ├── ch2-immunity/          raw notes + LAD
    ├── ch3-hematopoietic/     chapter.md ✓ + notes
    ├── ch4-cardiovascular/    chapter.md ✓ + notes
    ├── ch5-respiratory/       LAD only (needs notes)
    ├── ch6-fluid-electrolyte/ chapter.md ✓ + notes
    ├── ch7-urinary/           LAD only (needs notes)
    ├── ch9-gi/                chapter.md (reverse-engineered — rebuild post-final)
    ├── ch10-endocrine/        chapter.md (reverse-engineered — rebuild post-final) + raw .docx notes
    └── ch11-neural/
        ├── chapter.md ✓ (built from notes)
        ├── Ch11_Foundations_Review_Spec.md  (deck spec, approved)
        ├── Ch11_Foundations_Review.html     ★ built per new standards
        ├── ch11 notes transcription.pdf     (Lindsay's 12/2/25 notes)
        └── LAD chap 11 ... PDFs
```

---

## 🗄️ `_archive/`

Obsolete / superseded files kept for reference. None are live.

| File | Why archived |
|---|---|
| `Endocrine_*_Review.pptx` · `GI_*_Review.pptx` (6 files) | Original PowerPoint versions — replaced by HTML |
| `Endocrine_Diabetes_Review_old.html` | Explicit backup of the pre-v2 Diabetes deck |
| `generate-pptx.js` · `generate-ch10-pptx.js` | Scripts that built the PPTX files. Obsolete since decks are HTML. |
| `SI_Deck_Creation_Guide.md` | Superseded by `COURSE_STANDARDS.md` + `DECK_STANDARDS.md` + `VISUAL_TOOLKIT.md` |

To un-archive anything, just move it back to root.

---

## 🛠️ Tooling (ignore unless debugging)

| File | Purpose |
|---|---|
| `index.html` | Landing page — links to all live decks/quizzes |
| `package.json` · `package-lock.json` | npm dependencies (used by now-archived generate scripts; safe to leave) |
| `node_modules/` | npm deps folder |
| `.git/` | Version control |

---

## 🔧 Known Issues (Post-Final Retrofit List)

See DECK_STANDARDS.md §10 for the official retrofit triage. Summary:

1. **Filename/location migration** — all legacy decks should become `Ch[N]_[Topic]_Review.html` in chapter folders
2. **Ch.9 + Ch.10 chapter.md** — rebuild from raw handwritten notes (currently reverse-engineered from decks)
3. **Stroke deck lobe colors** — recolor to match `Ch11_Foundations_Review.html` scheme
4. **Stroke deck rename** — `Neural_Stroke_Review.html` → `Ch11_Stroke_Review.html`
5. **Liver deck** — rebuild (currently only 8 slides)
6. **5 Cardio decks** — full v2 pattern upgrade (cell-cards, tags, section-nums, revealChoice)
7. **Stroke prevention 1°/2°/3° framing** — needs Lindsay's input before adding to Stroke deck

None are blockers for the finals study window.
