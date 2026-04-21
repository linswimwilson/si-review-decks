# Session Handoff — Ch 11 Neural Complete

**Date:** 2026-04-21
**Latest commit on origin/main:** `9bc6062` (grape purple heading tweak)

---

## What shipped this session

Full Ch 11 Neural package, live on GitHub Pages:

**4 Review Decks** (at project root)
- `Neural_Foundations_Review.html` — neurons/fuel, brain regions, ↑ICP + Cushing's, bleeds
- `Neural_Stroke_Review.html` — ischemic vs hemorrhagic, FAST, treatment window, prevention (1°/2°/3°), Mr. Washington case
- `Neural_Seizures_Review.html` — causes, classification, phases, safety
- `Neural_Dementia_Review.html` — Alzheimer's, Lewy body, progression, Mrs. Garcia case

**4 Quizzes** (at project root)
- `Neural_Warmup_Quiz.html` — 25 rapid-fire across all four topics
- `Neural_Quiz_Stroke.html` — 10 scenario-based Qs
- `Neural_Quiz_Seizures.html` — 10 scenario-based Qs
- `Neural_Quiz_Dementia.html` — 10 scenario-based Qs

**Index** (`index.html`)
- Ch 11 section added with grape-purple heading (`#9333ea`)
- All 4 decks + 4 quizzes linked

**Chapter.md** (`course-data/chapters/ch11-neural/chapter.md`)
- New Section 3 subsection: *Stroke Prevention — Primary, Secondary, Tertiary* with Lindsay's full voice + teaching dialogue
- New Q5 (NCLEX Analysis) for secondary prevention
- Section 8 Known Gaps: prevention gap moved to "Filled gaps" list

**Local only (not pushed):**
- `course-data/` folder — handwritten notes, LAD PDFs, instructor materials. Historically never pushed to the public repo. The chapter.md update lives here locally only.
- 5 `Cardiovascular_*.html` decks — pre-v2, flagged for archive but not yet moved (Lindsay interrupted the archive bash command to ask about workflow).

---

## Design rules earned the hard way this session

Save these — they'll apply to every future deck.

1. **Hand-drawn brain SVGs look amateur.** Use real medical diagrams. Gray's Anatomy Plate 728 (Wikimedia, public domain) is what's in Foundations slide 4 / Stroke slide 4, recolored to our palette with `#cbd5e1` strokes so the line art reads on the dark background.

2. **Don't duplicate content between decks.** Original Stroke had 11 foundations-repeat slides (meninges, ICP, Cushing's, bleeds, Circle of Willis). Replaced with a single recap card pointing to the Foundations deck. Seizures and Dementia already used this pattern.

3. **Section dividers should form a narrative arc, not be reference labels.** Foundations reads: *neurons precious → regions → pressure problem → bleeds.* Each divider now references the previous concept and sets up the next.

4. **Cushing's triad is a CAUSAL cascade, not 3 parallel cards.** Current Foundations slide 15 walks it as: ↑ICP → brain forces BP↑ (Sign 1) → baroreflex drops HR (Sign 2) → brainstem respiratory centers compressed (Sign 3).

5. **Quiz scenarios must be NOVEL.** No rehashing warmup questions, no rehashing the deck's built-in case (Mr. Washington, Mrs. Garcia). Test the principle in a fresh patient with different details.

6. **Slides must fit without scroll.** Compress bullets when density is high. Dementia progression timeline went from 8 block steps to 8 compact one-liners; Foundations slide 21 bleeds went from 4-bullet cards to 2-bullet cards.

7. **Cell cards: brief bullets under the header, not paragraphs.** Students skim; paragraphs get dropped.

8. **Don't attribute facts to Lindsay.** "Lindsay's rule for normal CSF" was changed to just "Normal CSF: no blood, yes sugar." Facts stand on their own.

9. **"Section N" removed from title pages.** Just the topic name — no subsection numbering on title slides.

These are codified in `DECK_STANDARDS.md` and memory files at `C:\Users\Lindsay Wilson\.claude\projects\C--Users-Lindsay-Wilson\memory\`.

---

## Pending work (in rough priority order)

### Near-term (finals window)
1. **Archive the 5 pre-v2 Cardio decks** — move to `_archive/pre-v2-cardio/`. Lindsay paused this when she asked "will we use these to upgrade or write over?" Answer: write over from her Ch 4 handwritten notes, not upgrade-in-place (per the source-from-notes-only rule).
2. **Ch 4 Cardiovascular rebuild** — 5 v2 decks from her handwritten notes in `course-data/chapters/ch4-cardiovascular/`. Do NOT use the existing pre-v2 decks as source material (risk of general-knowledge fill-ins leaking in, same failure mode as the Diabetes glucose numbers).
3. **Ch 4 Cardio quizzes** — warmup + per-topic, same pattern as Ch 9/10/11.
4. **Update index.html** to add Ch 4 section once decks exist.

### Post-final retrofit (per DECK_STANDARDS §10)
- Filename migration to `Ch[N]_[Topic]_[Type].html` in chapter folders
- Chapter.md rebuilds for Ch 9 and Ch 10 from raw notes (both currently reverse-engineered from decks — failure mode is they can silently inherit general-knowledge values)
- Repo privacy decision: Pro ($4/mo) vs Netlify migration vs two-repo split. Currently public because GitHub Pages free tier requires it.

### Bugs / nice-to-haves
- Cardio decks sitting at root are untracked in git but clutter the folder. Archive them so Lindsay can find what she's testing without searching.

---

## Where things live

```
Desktop/si-review-decks/
├── index.html                           ← site entry, has Ch 9/10/11 sections
├── Neural_Foundations_Review.html       ← live
├── Neural_Stroke_Review.html            ← live
├── Neural_Seizures_Review.html          ← live
├── Neural_Dementia_Review.html          ← live
├── Neural_Warmup_Quiz.html              ← live
├── Neural_Quiz_Stroke.html              ← live
├── Neural_Quiz_Seizures.html            ← live
├── Neural_Quiz_Dementia.html            ← live
├── Endocrine_*.html (Ch 10, 3 decks + 4 quizzes)  ← live
├── GI_*.html (Ch 9, 3 decks + 5 quizzes)          ← live
├── Cardiovascular_*.html (5 pre-v2 drafts)        ← untracked, needs archive
├── DECK_STANDARDS.md                    ← design rulebook
├── COURSE_STANDARDS.md                  ← higher-level course conventions
├── VISUAL_TOOLKIT.md                    ← component reference
├── README.md
├── _archive/                            ← pre-v2 files, old pptx, docs
└── course-data/                         ← local only, NOT pushed
    └── chapters/ch11-neural/chapter.md  ← has updated prevention content
```

---

## How to pick up in a new terminal

1. Working directory: `C:\Users\Lindsay Wilson\Desktop\si-review-decks`
2. Read this file first, then read `DECK_STANDARDS.md` if you need the design rulebook.
3. Memory files at `C:\Users\Lindsay Wilson\.claude\projects\C--Users-Lindsay-Wilson\memory\` already contain all the hard-earned rules (cell-cards, axis diagrams, anatomy orientation, mechanism accuracy, numbers-from-notes-only).
4. If Lindsay says "let's build Cardio" — start by reading her `course-data/chapters/ch4-cardiovascular/` handwritten notes (`.docx` extracted via `unzip -p FILE.docx word/document.xml | sed 's/<[^>]*>/ /g'`) before looking at the existing decks.
5. Repo is public (`github.com/linswimwilson/si-review-decks`). Live at `linswimwilson.github.io/si-review-decks/`.
