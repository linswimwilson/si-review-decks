# COURSE STANDARDS — NURS 308 Chapter Build Workflow

> **How to use this file**: This is the canonical standard for every `chapter.md` built in this project. Claude (in chat) reads it before building or editing any chapter. Claude Code reads it when generating decks, quizzes, or any derivative material. Load it into context before starting any chapter work.
>
> Companion file: `DECK_STANDARDS.md` (governs deck HTML structure, visual components, and the end-to-end deck workflow). Both files live at project root.
>
> Placeholders marked `{FILL IN}` need Lindsay's input before chapters depending on them can be finalized.

---

## 1. TEXTBOOK METADATA

**Citation (use this exact block in every `chapter.md` Section 1):**

- **Textbook**: Pathophysiology: A Practical Approach, 5th Ed. (Lachel Story)
- **Publisher**: Jones & Bartlett Learning
- **Publication Date**: April 2024
- **ISBN (print)**: 978-1284288094
- **ISBN (digital)**: 978-1284304510
- **Pages (total)**: 600
- **Author**: Dr. Lachel Story

**Textbook structural features worth mirroring:**
- Organized by body system (matches our course chapter organization)
- Each chapter walks students through A&P baseline → what goes wrong → identification → action
- Includes "Application to Practice" callouts (5th ed feature)
- Includes "Emerging Research" sections (5th ed feature)
- Includes Next Generation NCLEX-style questions

**How the textbook's design maps to our `chapter.md` format:**
- Base A&P knowledge → Section 3 (Key Concepts)
- What goes wrong → Section 3 (Key Concepts, pathophys paragraphs)
- Identification → Section 5 (Quiz Questions, NCLEX style)
- Action → Section 6 (Clinical Scenarios) + Section 7 (Mnemonics)

---

## 2. COURSE OUTCOMES (COs)

> ⚠️ **{FILL IN}** — Definitions come from Lindsay's master 308 syllabus. Ch. 3, 4, 6, and 11 reference CO1, CO3, CO5, CO6, CO7 — so there are at least 7 COs. Filling these in is gating for building any new chapter's objectives table with confidence, though objectives can still be drafted by referencing CO numbers.

| Code | Course Outcome |
|------|----------------|
| CO1 | {FILL IN — likely foundational A&P/pathophys concepts} |
| CO2 | {FILL IN} |
| CO3 | {FILL IN — used for tissue perfusion / systemic function} |
| CO4 | {FILL IN} |
| CO5 | {FILL IN — used heavily for "explain pathophysiology, etiologies, manifestations"} |
| CO6 | {FILL IN — used for risk factors / applied recognition} |
| CO7 | {FILL IN — used for safety / nursing interventions} |

---

## 3. BLOOM'S TAXONOMY LEVELS

Use these six levels (revised Bloom's). The four bolded levels are used routinely in existing chapters; the other two are available for advanced objectives.

- **Remember** — recall facts, terms, basic concepts (lab values, definitions)
- **Understand** — explain ideas, concepts, relationships (pathophys mechanism)
- **Apply** — use information in new situations (identify manifestations, risk factors)
- **Analyze** — draw connections, differentiate, compare (differentiate arterial vs venous, recognize cascades)
- Evaluate — justify decisions (rare in intro pathophys; can appear in clinical scenarios)
- Create — produce new work (generally not used at this level)

**Guidance for choosing level per objective:**
- Lab values, definitions, lists → Remember
- Mechanism, relationships, "describe how" → Understand
- Recognize manifestations, apply to risk factors, patient cases → Apply
- Differentiate conditions, connect cascades, cross-system reasoning → Analyze

---

## 4. CHAPTER.MD FORMAT SPECIFICATION

Every `chapter.md` has **exactly seven sections**, numbered, in this order.

### Section 1: Chapter Info
Required fields (in this order):
- Chapter number and title
- Textbook citation (use block from §1 above)
- Pages
- Key topics (comma-separated, 6–12 topics)
- Source (notes, lecture slides, etc.)
- Scope notes (e.g., "Foundational content taught but NOT in stated exam objectives")

### Section 2: Objectives
A table with exactly four columns: `ID | Objective | COs | Bloom's`

Rules:
- Objective IDs follow pattern `ch{N}_{seq}`, e.g., `ch3_1`, `ch11_12`
- Sequence numbers start at 1, no gaps
- Objective text begins with an action verb (Describe, Explain, Differentiate, etc.)
- COs column may reference one or multiple course outcomes, comma-separated
- Bloom's column is one word from §3 above

Target count: **10–14 objectives per chapter** (Ch. 3 has 12, Ch. 11 has 14).

### Section 3: Key Concepts
Bold-headed concept paragraphs. Each concept:
- Starts with the concept name in bold followed by a colon
- Is 2–5 sentences
- May include parenthetical definitions, lab values, or quick examples
- Does not use bullet lists inside the paragraph
- Complex concepts may be broken into sub-bullets using `- **Subtype**: description`

Target count: **6–10 concept paragraphs per chapter** (Ch. 11 has more because of split between Foundational Context and Testable Content — that split is allowed when a chapter teaches context beyond stated objectives).

### Section 4: Spiral Connections
A table with exactly three columns: `From (Ch. N) | To | Link`

Rules:
- "From" references a concept in the current chapter
- "To" references a chapter and topic the concept connects to, formatted `Ch. X: Topic Name`
- "Link" is a short (1-sentence) explanation of the pathophysiological connection
- Include connections to earlier chapters (backward) AND later chapters (forward), where real
- Target **5–9 rows** per chapter
- Forced connections dilute value — only include real ones

### Section 5: Quiz Questions
Exactly 3 questions minimum. Each question uses this structure:

```
### Q{N} ({Type} — {Bloom level} — Ch. {N}{[ + Ch. {X} Spiral]})
**Stem**: {question text — can include a brief clinical stem}
- A. {option}
- **B. {option} ✓**
- C. {option}
- D. {option}

**Rationale**: {explanation of correct answer + why distractors are wrong, with mechanism}
**Spiral Tags**: {comma-separated concept tags, 4–6 items}
**Objectives**: {objective IDs covered, comma-separated}
```

Question types: **NCLEX** (standard MCQ), **SATA** (Select All That Apply), **NGN** (Next Generation NCLEX formats — case clusters, extended multiple-response, drag-and-drop) — NGN use is optional per chapter.

### Section 6: Clinical Scenarios
One or two realistic patient scenarios per chapter. Each scenario includes:
- **Patient**: name, age, sex, one-line description
- **Complaint**: presenting problem
- **Available Assessments & Responses**: vitals, lab values, imaging, history, neuro, etc.
- **Key Teaching Points**: numbered list, each tied to chapter pathophys, with spiral references where real

### Section 7: Mnemonics & Memory Tools
Bulleted list of memorable hooks. Each item is one phrase or rule that sticks. Pulled from Lindsay's teaching where possible; reinforced through anchors and callouts in the derivative decks.

### Section 8: Known Gaps *(optional)*
Table of unresolved items: `Gap | Source | Action Needed`. Used to track things Lindsay needs to fill in, objectives that don't have complete source coverage, or decisions pending. Cleared over time.

---

## 5. WRITING CONVENTIONS — VOICE & TONE

Every `chapter.md` should read as if Lindsay wrote it. These conventions protect her voice across chapters AND carry into derivative decks.

**Tone:**
- Conversational but clinically precise
- Warm, not clinical/cold
- Encouraging without being saccharine
- Direct — don't hedge when the pathophys is clear
- Use "the nurse" or second person sparingly; prefer explaining the mechanism

**Pedagogy embedded in content:**
- When a cascade is involved, **show the cascade** with arrows and short stages
- When a concept connects to a prior chapter, **name the connection explicitly**
- When a mechanism has a common misconception, address it directly (e.g., "TIA is not a 'mini-stroke' — that's a misnomer")
- Prefer mechanism over memorization; where memorization is required, pair it with a hook

**Formatting preferences:**
- Use `↑` and `↓` for increases and decreases (standard clinical shorthand)
- Use `→` to show mechanism progression
- Italics for emphasis sparingly
- Bold for concept names and critical terms only

**What to avoid:**
- AI-sounding hedges ("It's important to note that…", "It's worth mentioning that…")
- Overuse of bullet points inside Key Concepts paragraphs
- Generic NCLEX rationales that don't explain mechanism
- Clinical scenarios without a spiral-back to earlier material

---

## 6. CROSS-CHAPTER SPIRAL MAP

Complete chapter list with current status. Update as chapters are built.

| Course Ch. # | Topic | Status |
|-------------|-------|--------|
| Ch. 1 | {FILL IN} | Needs structured data + deck |
| Ch. 2 | {FILL IN} | Needs structured data + deck |
| Ch. 3 | Hematopoietic Function | ✅ Gold-standard `chapter.md` exists |
| Ch. 4 | Cardiovascular | ✅ `chapter.md` exists (gold standard) |
| Ch. 5 | Respiratory | Needs notes transcription + `chapter.md` + deck |
| Ch. 6 | Fluid & Electrolyte (incl. Acid-Base) | ✅ `chapter.md` exists; notes still need transcription |
| Ch. 7 | Urinary | Needs everything |
| Ch. 8 | {FILL IN — check course syllabus} | {FILL IN} |
| Ch. 9 | Endocrine | Thyroid deck exists (HTML); Diabetes deck is PPTX (needs HTML rebuild); no `chapter.md` yet |
| Ch. 10 | Gastrointestinal | Quizzes exist (Upper GI, Lower GI); no review decks; no `chapter.md` yet |
| Ch. 11 | Neural Disorders | ✅ `chapter.md` exists; notes transcribed; 4 decks being built |
| ~~Ch. 12~~ | — | **Does not exist.** Removed per Lindsay. |

**Spiral connection rule**: A chapter must connect backward (to prior chapters) AND forward (to upcoming chapters) where pathophysiology genuinely overlaps. Forced connections dilute value — only include real ones.

---

## 7. REFERENCE CODES & ID CONVENTIONS

### Objective IDs
- Format: `ch{N}_{seq}` (lowercase, no space)
- Examples: `ch3_1`, `ch11_7`, `ch6_10`
- Sequence starts at 1 per chapter
- **This is the locked standard.** Earlier drafts of Ch. 3 used topic-prefixed codes like `cv4`; migrate those to `ch{N}_{seq}` format when touching Ch. 3 next.

### Cross-Chapter Objective References
- Use `ch{N}_{seq}` format when quiz questions reference objectives from another chapter
- Example: a Ch. 11 question with a Ch. 4 spiral lists `ch11_6, ch4_7` in Objectives

### Spiral Tags
- Comma-separated keyword list, 4–6 tags per quiz question
- Each tag is a concept name, not a full sentence
- Good tags: "Neutropenia," "Hemostasis," "Sickle Cell," "AFib," "Embolus"
- Bad tags: "Protection from infection in immunocompromised patients"

### Question IDs
- Currently referenced by chapter + number within chapter (Q1, Q2, Q3)
- If the platform later requires globally unique IDs, use `ch{N}_Q{seq}`

### Deck File Naming
- Format: `Ch{N}_{Topic}_{Type}.html` — see `DECK_STANDARDS.md` §8
- Examples: `Ch11_Foundations_Review.html`, `Ch10_GI_LowerGI_Quiz.html`

---

## 8. TEXTBOOK-SPECIFIC FEATURES TO MIRROR

Since Dr. Story's 5th ed emphasizes certain features, `chapter.md` files should harmonize with them so students move fluidly between textbook and our materials.

**"Application to Practice" callouts (textbook feature)**
- Our parallel: the **Clinical Scenarios (Section 6)**. Keep scenarios clinically realistic and tied to the chapter's pathophys.

**"Emerging Research" sections (textbook feature)**
- Our parallel: for chapters where recent research materially changes nursing practice (e.g., sickle cell treatment advances, new stroke thrombolytics, Alzheimer's biomarker testing), add a brief callout inside Key Concepts OR a Teaching Point in a clinical scenario.
- **{OPTIONAL}** — A dedicated "Current Evidence" subsection in Section 3 could be added for chapters where this matters. Lindsay to approve if/when needed.

**Next Generation NCLEX-style questions (textbook feature)**
- Our Quiz Questions (Section 5) follow NCLEX format by default. For NGN-style questions, future chapters may include:
  - Case-based question clusters
  - Extended multiple-response items
  - Drag-and-drop reasoning items
- **{OPTIONAL}** — Expand Section 5 to include NGN formats per chapter as needed.

---

## 9. CHANGE LOG

| Date | Change | Reason |
|------|--------|--------|
| Previous chat | Initial version built alongside Ch. 11 transcription | Codify what Ch. 3 `chapter.md` got right for future chapters |
| Current | Rebuild: Ch. 12 removed, Ch. 11 marked complete, Ch. 9/10 status updated, reference to `DECK_STANDARDS.md` added | Align with DECK_STANDARDS and current project state |
