# SI Review Deck & Quiz Creation Guide

**Authors:** Lindsay Wilson & Claude Code
**Purpose:** Reference document for creating consistent, high-quality SI review slide decks and companion quizzes for pathophysiology courses. Hand this to Claude (or any AI assistant) along with chapter content to generate new decks.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Course Data Layer](#course-data-layer)
3. [Content Authority Rules](#content-authority)
4. [Review Deck Design](#review-deck-design)
5. [Quiz Design](#quiz-design)
6. [Prompt Template for New Chapters](#prompt-template)
7. [Content Philosophy](#content-philosophy)
8. [Technical Reference](#technical-reference)

---

## 1. Project Overview <a name="project-overview"></a>

These are interactive HTML files for Supplemental Instructor (SI) review sessions in a BSN pathophysiology course. Each file is self-contained (no external dependencies besides Google Fonts) and works by double-clicking to open in any browser.

**Two file types per topic:**
- **Review Deck** — Slide-based presentation for teaching/reviewing content (like PowerPoint, but interactive)
- **Quiz** — 10-question interactive assessment with immediate feedback and explanations

**Naming convention:**
- Review decks: `[System]_[Topic]_Review.html` (e.g., `Endocrine_Thyroid_Review.html`)
- Quizzes: `[System]_Quiz_[Topic].html` (e.g., `Endocrine_Quiz_Thyroid.html`)

**Target audience:** BSN nursing students in pathophysiology. Content should be clinically relevant, NCLEX-aligned, and connect pathophysiology to nursing practice.

---

## 2. Course Data Layer <a name="course-data-layer"></a>

### What It Is

The `course-data/chapters/` folder contains structured markdown files — one per chapter — that serve as the **primary source of truth** for building review decks and quizzes. These are NOT raw notes or PDFs. They are Lindsay's processed, vetted output that distills each chapter into a standardized format.

### Folder Structure

```
course-data/
  chapters/
    ch3-hematopoietic/chapter.md
    ch4-cardiovascular/chapter.md
    ch6-fluid-electrolyte/chapter.md
    ch9-gi/chapter.md
    ch10-endocrine/chapter.md
    ...
```

### What Each chapter.md Contains

Every chapter file follows a standardized 7-section format:

| Section | What It Contains | How It's Used in Deck Building |
|---|---|---|
| **1. Chapter Info** | Chapter number, textbook, pages, key topics | Deck titles, scope boundaries |
| **2. Objectives** | Each objective with ID, course outcomes, and Bloom's level | Ensures decks cover all required objectives; Bloom's level guides question difficulty |
| **3. Key Concepts** | Core pathophysiology content with specific lab values, mechanisms, and manifestations | The primary content source for narrative slides, flow diagrams, and compare slides |
| **4. Spiral Connections** | How this chapter connects to other chapters | Used to add cross-references in decks and create spiral quiz questions |
| **5. Quiz Questions** | Pre-written questions with rationales, spiral tags, and objective mappings | Can be used directly in quizzes or adapted for warm-ups |
| **6. Clinical Scenario** | Full patient case with assessments, labs, vitals, and teaching points | Source for case slides at the end of each deck |
| **7. Mnemonics & Memory Tools** | Lindsay's memory aids and teaching hooks | Used in callout boxes and anchor slides |

### How to Use When Building Decks

**Before building ANY deck or quiz for a chapter:**

1. Read `course-data/chapters/ch[X]-[topic]/chapter.md` first
2. Use the **Key Concepts** section as the content backbone
3. Use the **Objectives** to verify full coverage — every objective should be addressed somewhere
4. Pull **lab values and numbers** only from Key Concepts (never from general knowledge)
5. Use the **Mnemonics** in callout boxes and anchor slides
6. Use the **Clinical Scenario** for case slides
7. Reference **Spiral Connections** to add cross-chapter callouts where relevant
8. Use **Bloom's levels** from the objectives to calibrate quiz question difficulty

### Creating New Chapter Files

When Lindsay provides raw notes for a new chapter, the workflow is:

1. Lindsay provides transcribed notes + course objectives + LAD slides
2. Together, we process them into the standardized 7-section chapter.md format
3. The chapter.md file is saved to the appropriate folder
4. ALL subsequent deck and quiz building for that chapter reads from the chapter.md

---

## 3. Content Authority Rules <a name="content-authority"></a>

### ABSOLUTE RULE: All content originates from Lindsay's provided materials.

Nothing in any review deck or quiz may come from internet searches, general clinical knowledge, Claude's training data, or standard textbook references. Every fact, number, mnemonic, phrasing choice, and clinical detail must trace back to one of Lindsay's sources.

### Source Priority (highest to lowest)

| Priority | Source | What It Provides |
|---|---|---|
| **1 (highest)** | Lindsay's handwritten/transcribed notes | Instructor emphasis, phrasing, teaching voice, specific values |
| **2** | Structured `chapter.md` files in `course-data/chapters/` | Vetted, organized content — the processed version of the raw notes |
| **3** | Course objectives documents (308 Objectives) | Scope boundaries — what students are responsible for |
| **4** | LAD slide decks | Structure, depth, and sequencing as taught in class |

### What Is NOT a Valid Source

- Internet searches or web lookups
- General clinical knowledge or standard-of-care guidelines
- Claude's training data about medical topics
- Textbooks or references Lindsay has not provided
- "Common knowledge" about nursing or pathophysiology

### When Content Is Missing

If a concept, value, or detail is needed for a deck but is NOT in any provided source material:

- **DO NOT** fill it in from general knowledge
- **DO** leave a placeholder (e.g., "Check LAD notes for specific target values")
- **DO** ask Lindsay for the information
- **DO** flag it clearly so it doesn't get missed

### Why This Matters

Lindsay's course may use different values, emphasize different mechanisms, or frame concepts differently than standard references. The decks must match what HER instructor teaches. Mnemonics and teaching tools reflect Lindsay's teaching voice and her students' needs — they should never be generated independently.

---

## 4. Review Deck Design <a name="review-deck-design"></a>

### Visual Theme
- **Dark theme** with navy background (`#0f172a`)
- Accent colors: blue (`#38bdf8`), purple (`#a78bfa`), yellow (`#f59e0b`), red (`#ef4444`), teal (`#22d3ee`), green (`#34d399`)
- Font: Inter (Google Fonts)
- Responsive — works on desktop, tablet, and phone
- Navigation: arrow keys, spacebar, swipe, or on-screen buttons

### Slide Types (7 types)

Each deck uses a mix of these slide types. They serve different cognitive purposes:

| Slide Type | Purpose | When to Use |
|---|---|---|
| **title** | Opening slide with chapter, section, authors | Always slide 1 |
| **section-divider** | Announces a new major topic within the deck | Before each new section (e.g., "Hypothyroidism", "Treatment") |
| **anchor** | Big bold statement that frames the concept | Key "aha moment" ideas — the one-liner students should walk away with |
| **narrative** | Bulleted content slide — the workhorse | Teaching factual content, manifestations, causes, treatments |
| **flow** | Horizontal chain showing a process/cascade | Feedback loops, pathophysiology cascades, step-by-step mechanisms |
| **compare** | Side-by-side two-column comparison | Contrasting two conditions (e.g., hypo vs hyper, DKA vs HHNK) |
| **check** | Quick interactive question embedded in the deck | Knowledge checks every 3-5 content slides — keep students engaged |
| **case** | Clinical scenario with a reveal button or answer options | Clinical application — "meet the patient" scenarios near the end |

### Typical Slide Distribution (per deck)

A typical deck has 25-44 slides depending on content density:

- **Narrative:** ~40-50% of slides (the bulk of content)
- **Section Divider:** ~15-20% (one per major topic section)
- **Anchor:** ~15-20% (key concept statements, emergencies, big ideas)
- **Check:** ~10-15% (one after every major section, before moving on)
- **Flow:** 1-4 per deck (for pathophysiology cascades and feedback loops)
- **Compare:** 1-2 per deck (for the big "vs." comparisons)
- **Case:** 2 per deck (clinical scenarios near the end, before the final summary)

### Deck Structure Pattern

Every deck follows this arc:

```
1. TITLE SLIDE
2. SECTION DIVIDER — Anatomy/Physiology foundation
3-5. NARRATIVE slides — normal structure and function
6. FLOW — the key feedback loop or mechanism
7. CHECK — quick question on the foundation

8. SECTION DIVIDER — Condition A
9. ANCHOR — the big concept statement
10-12. NARRATIVE slides — causes, manifestations, metabolic effects
13. CHECK — can you recognize it?
14. NARRATIVE — treatment

15. SECTION DIVIDER — Condition B (if applicable)
16-20. (Same pattern as Condition A)

21. COMPARE — Condition A vs. Condition B side by side

22. SECTION DIVIDER — Clinical Application
23-24. CASE scenarios (2 patients — one for each condition)

25. ANCHOR — Final summary (big picture takeaways)
```

### Visual Design Rules

These rules prevent "regurgitated list" slides and create visual anchoring that helps students retain information:

**NO NAKED LISTS.** If a slide has 4+ bullet points of parallel information (features, causes, signs), convert to **color-coded cards** with category labels. Each card gets:
- A colored left border
- An icon in a colored circle
- A bold category label (WHO / WHY / HOW / TREATMENT, or THE PROBLEM / THE LINK / THE TRAP, etc.)
- 1-2 lines of content

Use the `.cell-cards` grid for this. Cards are more scannable than bullets and create visual groupings that stick in memory.

**ALL FLOWS GET COLOR-CODED.** Every step in a flow chain should have a distinct `border-color` and `color` that tells a visual story:
- Triggers/causes: yellow
- Processes/mechanisms: blue
- Compensation/response: purple
- Worsening/damage: red (intensifying toward the end)
- Outcomes: red with background tint (`background:rgba(239,68,68,0.06)`)
- Flow arrows between critical transitions should also be colored (not just default blue)

**TAGS ON EVERY ANCHOR SLIDE.** Use a tag div above the heading to categorize the slide:
- `tag-concept` (blue) — "Core Concept"
- `tag-pearl` (teal) — "Clinical Pearl"
- `tag-red` (red) — "Red Flag"
- `tag-emergency` (red filled) — "Emergency"
- `tag-warn` (yellow) — "Warning"
- "Big Picture" for final summary slides

**SECTION LABELS ON EVERY NARRATIVE SLIDE.** Small uppercase label at the top: `<div class="section-label">Pancreas</div>`. Tells the student what topic they're in without reading the heading.

**SECTION NUMBERS ON DIVIDERS.** Use "Section A", "Section B", etc. on section-divider slides via `<div class="section-num">Section A</div>`.

**COLUMN LAYOUTS FOR PARALLEL CONTENT.** When a slide has two groups of related content (e.g., risk factors + protective factors, or symptoms + treatments), use `<div class="content cols">` with two `<div class="col">` children instead of one long list.

**NUMBERS APPEAR IN CONTEXT.** Diagnostic values (lab ranges, glucose targets, HbA1C cutoffs) don't just live on one "numbers to know" slide. They must be **reinforced on every clinical slide where a patient value is presented**. Format: `glucose 380 mg/dL (random >200 = diabetes; normal: 70-130)`. Students should never see a clinical value without seeing the reference range next to it.

**CHECK SLIDES USE REVEAL-ALL HANDLER.** Use `revealChoice()` (GI-style) that shows all answers and explanations simultaneously when any answer is clicked — not `handleCheck()` which only marks the clicked answer. The reveal-all approach teaches by showing WHY each wrong answer is wrong, not just highlighting the right one.

### Slide Content Guidelines

- **Narrative slides:** 4-6 items max per visual group. Use color-coded cards for 4+ parallel items. Use column layouts for paired content. Include a section label. Add callout boxes for key points or warnings.
- **Anchor slides:** One powerful sentence or short paragraph with a tag label. These are the lines students remember. No bullet points.
- **Flow slides:** 4-7 steps in a chain. Keep each step to 2-4 words with a `<small>` subtitle. Color-code every step — the chain should be visually readable without reading the text.
- **Compare slides:** Mirror the structure — same categories on both sides so students can scan across. Use consistent formatting (bold labels, then values). Color-coded column headers with matching border colors.
- **Check slides:** One question, 4 answer options, reveal-all on click with per-option explanations. Place these after content sections, not after every single slide.
- **Case slides:** Give a patient name, age, sex, presenting complaint, vitals, and key labs WITH reference ranges. Ask a clinical question. Provide 4 answer options with reveal-all.
- **Callout boxes:** Use `callout info` (blue) for key concepts, `callout warn` (yellow) for important distinctions, `callout danger` (red) for emergencies and "never do this" warnings.
- **Badges:** Use `badge-red` for emergencies/high-yield, `badge-yellow` for "know these" numbers, `badge-blue` for key concepts. Place inline next to headings.

### Custom Visual Elements

Use these CSS components for visual variety (defined in the v2 template):

| Component | CSS Class | Use For |
|---|---|---|
| Color-coded cards | `.cell-cards` + `.cell-card` | Replacing bullet lists with categorized visual cards |
| Emergency comparison | `.emergency-cards` + `.emergency-card` | Side-by-side emergency conditions with treatment priority boxes |
| Target organ cards | `.target-cards` + `.target-card` | Showing which organs are affected (with icons) |
| Glucose spectrum | `.glucose-spectrum` + `.glucose-zone` | Color-zoned bar for lab value ranges |
| Column layout | `.content.cols` + `.col` | Side-by-side content groupings |
| Tag labels | `.tag` + `.tag-concept` / `.tag-red` / etc. | Categorizing anchor slides |

### Gold Standard Template

The **Endocrine_Diabetes_Review_v2.html** file is the current gold standard for visual design. When building new decks, read this file first to match:
- The merged CSS (GI visual elements + newer template structure)
- The `revealChoice()` quiz handler
- The card, flow, compare, and custom component patterns
- The tag and section label system

All existing decks built before v2 should be upgraded to match this standard when revised.

### Highlight Color Conventions

Use colors consistently across all decks:

| Color | Use For |
|---|---|
| `hl-blue` | Key anatomy, normal physiology, primary concepts |
| `hl-yellow` | Important terms, lab values, medications, distinguishing features |
| `hl-red` | Dangers, emergencies, critical values, "never do this" |
| `hl-green` | Treatments, goals, positive outcomes |
| `hl-purple` | Demographics (women, age groups), secondary distinctions |
| `hl-teal` | Special features (exophthalmos, calcitonin), clinical pearls |

---

## 5. Quiz Design <a name="quiz-design"></a>

### Format
- 10 questions per quiz
- Same dark theme as the review decks
- Progress bar, score tracking, detailed explanations after every question
- Results screen with percentage, performance message, and missed-question review
- SATA scored all-or-nothing (must select ALL correct and NONE incorrect)
- Retake button on results screen

### Question Type Distribution (per 10-question quiz)

This mix is consistent across all quizzes:

| Type | Count | Code | Description |
|---|---|---|---|
| Multiple Choice | 4 | `mc` | Single best answer from 4 options |
| Select All That Apply | 2 | `sata` | Multiple correct answers from 5-6 options |
| True / False | 2 | `tf` | True or False with detailed explanation |
| All EXCEPT | 1 | `except` | "All of the following EXCEPT" — identify the outlier |
| Priority / First Action | 1 | `priority` | "What is the nurse's FIRST action?" |

### Question Writing Philosophy

**Clinical application over memorization.** Every question should start with a patient scenario, lab values, or clinical situation — not "Which of the following is true about X?"

**Structure of a good stem:**
1. Patient age, sex, relevant history
2. Presenting complaint or clinical finding
3. Key data (vitals, labs, timeline)
4. A focused question that tests understanding, not recall

**Explanation format (every question gets one):**
1. Start with the correct answer restated in bold
2. Explain WHY it's correct — connect to the pathophysiology
3. Under "Why the others are wrong:" — explain each incorrect option specifically
4. Include a teaching point or clinical pearl where relevant

**Distractor design (wrong answers):**
- Each wrong answer should be plausible — something a student might pick if they confuse two conditions or don't understand the mechanism
- Include common misconceptions as distractors
- For SATA: include 1-2 items that belong to the opposite/related condition (e.g., hyperthyroid symptoms in a hypothyroid question)
- For EXCEPT: make the incorrect options clearly belong to the condition, and the correct answer clearly belong to a different condition

**Difficulty distribution across 10 questions:**
- Questions 1-3: Foundation (anatomy, physiology, basic recognition)
- Questions 4-6: Application (case-based, mechanism questions)
- Questions 7-8: Analysis (priority, emergency recognition, multi-step reasoning)
- Questions 9-10: Synthesis (lab interpretation, comparison, putting it all together)

### Question Data Format

Each question in the JavaScript array:

```javascript
{
  id: 1,                          // Sequential number
  type: "mc",                     // mc | sata | tf | except | priority
  typeLabel: "Multiple Choice",   // Display label for the badge
  stem: "Clinical scenario and question text. Use <strong> for emphasis.",
  choices: [
    "Option A text",
    "Option B text",
    "Option C text",
    "Option D text"
  ],
  correct: [1],                   // Array of 0-based indices. MC/TF/except = one index. SATA = multiple.
  explanation: "HTML-formatted explanation with <strong>, <br>, bullet points."
}
```

Type labels by type:
- `mc` → "Multiple Choice"
- `sata` → "Select All That Apply"
- `tf` → "True / False"
- `except` → "All EXCEPT"
- `priority` → "Priority / First Action"

---

## 6. Prompt Template for New Chapters <a name="prompt-template"></a>

Copy and paste this prompt when asking Claude to create new review decks and quizzes. Fill in the bracketed sections.

### For a Review Deck:

```
Read SI_Deck_Creation_Guide.md and course-data/chapters/ch[X]-[topic]/chapter.md.

Create an interactive HTML review deck for [CHAPTER AND TOPIC].

Use the exact same HTML/CSS/JS template as the existing SI review decks in
C:\Users\Lindsay Wilson\Desktop\si-review-decks\. Read one of the existing
review decks (e.g., Endocrine_Thyroid_Review.html) to match the template exactly.

Title: Chapter [X]: [System] — [Topic]
Subtitle: Section [N] — [one-line description of what this section covers]
Authors: Lindsay Wilson & Claude Code

Content source: Use the chapter.md file as the primary content source.
Pull key concepts, lab values, mnemonics, and clinical scenarios ONLY from
the structured data. Do NOT add content from general knowledge.

Deck focus (which sections of the chapter.md to cover):
- [Topic 1]
- [Topic 2]
- [Condition A vs. Condition B if applicable]

Follow the structure pattern from the SI_Deck_Creation_Guide.md:
- Start with anatomy/physiology foundation
- Build to pathophysiology of each condition
- Include quick checks after each section
- Add flow diagrams for key cascades
- Include a compare slide if there are two contrasting conditions
- Use mnemonics from Section 7 of chapter.md in callout boxes
- Use the clinical scenario from Section 6 of chapter.md for case slides
- Reference spiral connections from Section 4 where relevant
- Target 18-30 slides

Save as: [System]_[Topic]_Review.html
```

### For a Quiz:

```
Read SI_Deck_Creation_Guide.md and course-data/chapters/ch[X]-[topic]/chapter.md.

Create an interactive 10-question HTML quiz for [CHAPTER AND TOPIC].

Use the exact same HTML/CSS/JS quiz template as the existing SI quizzes in
C:\Users\Lindsay Wilson\Desktop\si-review-decks\. Read one of the existing
quizzes (e.g., Endocrine_Quiz_Thyroid.html) to match the template exactly.

Content source: Use the chapter.md file. Pull quiz questions from Section 5,
adapt clinical scenarios from Section 6, and use key concepts from Section 3.
Use Bloom's levels from Section 2 to calibrate difficulty. All content must
come from the chapter.md — do NOT add content from general knowledge.

Question type distribution (must be exact):
- 4 Multiple Choice (mc)
- 2 Select All That Apply (sata)
- 2 True/False (tf)
- 1 All EXCEPT (except)
- 1 Priority/First Action (priority)

Follow the question writing philosophy from SI_Deck_Creation_Guide.md:
- Clinical scenarios over pure recall
- Detailed explanations for every question (correct answer + why others are wrong)
- NCLEX-style stems with patient data
- Difficulty ramps from foundation (Remember/Understand) to synthesis (Analyze/Evaluate)
- Include spiral connection questions where chapter.md Section 4 links to other chapters

Save as: [System]_Quiz_[Topic].html
```

### For Both at Once:

```
Read SI_Deck_Creation_Guide.md and course-data/chapters/ch[X]-[topic]/chapter.md.

Create an interactive review deck AND a 10-question quiz for [CHAPTER AND TOPIC].

Use the chapter.md as the ONLY content source. Read an existing Review deck
for the deck template and an existing Quiz for the quiz template.

Follow the design guide for structure, slide types, question types, content
philosophy, and content authority rules.

All content — lab values, mnemonics, phrasing, clinical details — must come
from the chapter.md. If something is missing, flag it rather than filling in
from general knowledge.

Save as:
- [System]_[Topic]_Review.html
- [System]_Quiz_[Topic].html
```

---

## 7. Content Philosophy <a name="content-philosophy"></a>

### Teaching Approach

These decks are designed around principles from Lindsay's relational anchoring framework:

- **Anchor first, detail second.** Start each section with a big, memorable concept statement (anchor slide) before diving into bullet points. Students need the "why" before the "what."
- **Contrast is clarity.** When two conditions are opposites (hypo/hyper, Cushing's/Addison's, DKA/HHNK), teach them as a pair. The compare slide is one of the most valuable slides in any deck.
- **Quick checks keep attention.** Never go more than 4-5 content slides without an interactive check. These aren't graded — they're cognitive rest stops that let students test their understanding before moving on.
- **Clinical cases make it real.** Abstract pathophysiology becomes meaningful when attached to a patient. Every deck ends with 2 clinical scenarios that integrate everything taught.
- **Emergencies get special treatment.** Life-threatening complications (thyroid storm, myxedema, adrenal crisis, DKA) get their own anchor slide with a red emergency badge. Students must be able to recognize and prioritize these.

### Voice and Tone

- Conversational but precise. Write like you're explaining to a smart friend, not reading from a textbook.
- Use mnemonics and memory hooks where natural (e.g., "Does Santa have Cushing's?", "SLOW vs FAST").
- Bold and highlight strategically — not everything, just the things that would be underlined in a textbook.
- Explain the WHY behind every fact. "Bradycardia" alone is useless. "Bradycardia — because metabolism is slowed and the heart doesn't need to work as hard" teaches the mechanism.

### What NOT to Include

- Drug dosages or specific medication protocols (these change and are institution-specific)
- Content beyond the scope of the pathophysiology course (no pharmacology deep dives, no advanced diagnostics)
- Overly dense slides — if a slide has more than 6 bullet points, split it
- Jargon without explanation — if a term is introduced, define it inline

---

## 8. Technical Reference <a name="technical-reference"></a>

### File Structure

Both file types are single self-contained HTML files with:
- Inline CSS in a `<style>` block
- Inline JavaScript in a `<script>` block
- No external dependencies except Google Fonts (Inter)
- Works offline after first load (font is cached)

### CSS Variables (shared across all files)

**Review Decks:**
```css
:root {
  --bg-dark: #0f172a;
  --bg-card: #1e293b;
  --blue: #38bdf8;
  --yellow: #f59e0b;
  --red: #ef4444;
  --purple: #a78bfa;
  --teal: #22d3ee;
  --green: #34d399;
  --text: #f1f5f9;
  --text-dim: #94a3b8;
  --text-muted: #64748b;
}
```

**Quizzes:**
```css
:root {
  --bg: #0f172a;
  --surface: #1e293b;
  --surface2: #334155;
  --border: #475569;
  --text: #e2e8f0;
  --text-dim: #94a3b8;
  --accent: #38bdf8;
  --accent-glow: rgba(56, 189, 248, 0.15);
  --correct: #4ade80;
  --correct-bg: rgba(74, 222, 128, 0.12);
  --incorrect: #f87171;
  --incorrect-bg: rgba(248, 113, 113, 0.12);
  --warning: #fbbf24;
  --radius: 12px;
  --radius-sm: 8px;
}
```

### Existing Files (as of April 2026)

**Chapter 9 — GI:**
- `GI_UpperGI_Review.html` — GERD, Barrett's, PUD
- `GI_LowerGI_Review.html` — IBD, diverticular disease, obstruction
- `GI_Liver_Review.html` — Hepatitis, cirrhosis, portal hypertension
- `GI_Quiz_UpperGI.html`
- `GI_Quiz_LowerGI.html`
- `GI_Quiz_Liver.html`
- `GI_Ch9_Quiz.html` (combined chapter quiz)

**Chapter 10 — Endocrine:**
- `Endocrine_Diabetes_Review.html` — Pancreas, Type 1 vs 2, DKA, HHNK, complications
- `Endocrine_Thyroid_Review.html` — Hypo/hyperthyroidism, Graves', Hashimoto's, emergencies
- `Endocrine_Adrenal_Review.html` — Cushing's, Addison's, cortisol, aldosterone, adrenal crisis
- `Endocrine_Quiz_Diabetes.html`
- `Endocrine_Quiz_Thyroid.html`
- `Endocrine_Quiz_Adrenal.html`

---

## Quick Reference: Source Materials to Gather

For each new chapter, collect these raw inputs:

1. **Your transcribed handwritten lecture notes** — Transcribe via Claude.ai projects, save as .docx. These are the highest-priority source because they reflect what YOUR instructor actually emphasized.

2. **The 308 course/chapter objectives** — The course objectives document. These define what students are responsible for knowing.

3. **The LAD slide deck** — The instructor's PowerPoint lecture slides (exported as tagged PDF). Sets structure and depth.

**Optional but helpful:**
- Compiled review info PDFs
- Previous Kahoot files or review PowerPoints

### Processing Raw Materials into Structured Data

Raw notes/PDFs/slides are **input**. The structured `chapter.md` file is **output**. The workflow:

1. Gather raw materials (notes, objectives, LAD slides)
2. Process them together into a standardized `chapter.md` file (7-section format)
3. Save to `course-data/chapters/ch[X]-[topic]/chapter.md`
4. The `chapter.md` becomes the single source of truth for ALL deck and quiz building

The raw materials stay wherever they are (Downloads, etc.). They don't need to be in the project folder. Only the processed `chapter.md` files live in `course-data/`.

## Quick Reference: Creating a New Chapter

1. **Gather raw source material** — transcribed notes, course objectives, LAD slide deck
2. **Process into chapter.md** — create the structured 7-section file and save to `course-data/chapters/ch[X]-[topic]/chapter.md`
3. **Identify subtopics** — typically 2-5 review decks per chapter (split by body system subsection)
4. **Build decks from chapter.md** — use the prompt templates above; Claude reads the chapter.md as primary source
5. **Review the output** — check clinical accuracy against YOUR notes, verify slide count, question quality
6. **Save files** to `C:\Users\Lindsay Wilson\Desktop\si-review-decks\`
7. **Test in browser** — double-click each file, click through all slides, take the quiz
8. **Update index.html** — add the new chapter section to the landing page
9. **Push to GitHub** — commit and push so the live site is updated

---

*This guide lives in the si-review-decks folder so it's always alongside the files it describes.*
