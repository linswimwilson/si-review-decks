# SI Review Deck & Quiz Creation Guide

**Authors:** Lindsay Wilson & Claude Code
**Purpose:** Reference document for creating consistent, high-quality SI review slide decks and companion quizzes for pathophysiology courses. Hand this to Claude (or any AI assistant) along with chapter content to generate new decks.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Review Deck Design](#review-deck-design)
3. [Quiz Design](#quiz-design)
4. [Prompt Template for New Chapters](#prompt-template)
5. [Content Philosophy](#content-philosophy)
6. [Technical Reference](#technical-reference)

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

## 2. Review Deck Design <a name="review-deck-design"></a>

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

### Slide Content Guidelines

- **Narrative slides:** 4-6 bullet points max. Use highlight spans (`hl-blue`, `hl-yellow`, `hl-red`, etc.) for key terms. Bold important words. Add a callout box for "key points" or warnings.
- **Anchor slides:** One powerful sentence or short paragraph. These are the lines students remember. No bullet points.
- **Flow slides:** 4-7 steps in a chain. Keep each step to 2-4 words. The chain tells a story left to right.
- **Compare slides:** Mirror the structure — same categories on both sides so students can scan across. Use consistent formatting (bold labels, then values).
- **Check slides:** One question, 4 answer options, one correct, with a hidden explanation. Place these after content sections, not after every single slide.
- **Case slides:** Give a patient name, age, sex, presenting complaint, vitals, and key labs. Ask a clinical question. Provide 4 answer options or a reveal button.
- **Callout boxes:** Use `callout-info` (blue) for key concepts, `callout-warn` (yellow) for important distinctions, `callout-danger` (red) for emergencies and "never do this" warnings.
- **Badges:** Use `badge-red` for emergencies/high-yield, `badge-yellow` for "know these" numbers, `badge-blue` for key concepts.

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

## 3. Quiz Design <a name="quiz-design"></a>

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

## 4. Prompt Template for New Chapters <a name="prompt-template"></a>

Copy and paste this prompt when asking Claude to create new review decks and quizzes. Fill in the bracketed sections.

### For a Review Deck:

```
Create an interactive HTML review deck for [CHAPTER AND TOPIC].

Use the exact same HTML/CSS/JS template as the existing SI review decks in
C:\Users\Lindsay Wilson\Desktop\si-review-decks\. Read one of the existing
review decks (e.g., Endocrine_Thyroid_Review.html) to match the template exactly.

Title: Chapter [X]: [System] — [Topic]
Subtitle: Section [N] — [one-line description of what this section covers]
Authors: Lindsay Wilson & Claude Code

Content to cover:
- [Topic 1 — key concepts to include]
- [Topic 2 — key concepts to include]
- [Topic 3 — key concepts to include]
- [Condition A vs. Condition B comparison if applicable]
- [Key emergencies or clinical applications]

Source material: [paste lecture notes, textbook content, or transcription here,
OR reference an uploaded PDF/document]

Follow the structure pattern from the SI_Deck_Creation_Guide.md:
- Start with anatomy/physiology foundation
- Build to pathophysiology of each condition
- Include quick checks after each section
- Add flow diagrams for key cascades
- Include a compare slide if there are two contrasting conditions
- End with 2 clinical case scenarios and a big-picture summary
- Target 25-35 slides

Save as: [System]_[Topic]_Review.html
```

### For a Quiz:

```
Create an interactive 10-question HTML quiz for [CHAPTER AND TOPIC].

Use the exact same HTML/CSS/JS quiz template as the existing SI quizzes in
C:\Users\Lindsay Wilson\Desktop\si-review-decks\. Read one of the existing
quizzes (e.g., Endocrine_Quiz_Thyroid.html) to match the template exactly.

The quiz should cover the same content as the [Topic]_Review.html deck.

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
- Difficulty ramps from foundation to synthesis

Save as: [System]_Quiz_[Topic].html
```

### For Both at Once:

```
Create an interactive review deck AND a 10-question quiz for [CHAPTER AND TOPIC].

Read the existing files in C:\Users\Lindsay Wilson\Desktop\si-review-decks\ to
match the template exactly (use any existing Review deck for the deck template,
and any existing Quiz for the quiz template).

Follow the design guide in SI_Deck_Creation_Guide.md for structure, slide types,
question types, and content philosophy.

Content to cover:
- [list topics]

Source material: [paste or reference]

Save as:
- [System]_[Topic]_Review.html
- [System]_Quiz_[Topic].html
```

---

## 5. Content Philosophy <a name="content-philosophy"></a>

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

## 6. Technical Reference <a name="technical-reference"></a>

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

For each new chapter, collect these three inputs before starting:

1. **Your transcribed handwritten lecture notes** — Transcribe your handwritten notes using Claude.ai projects, then save as a .docx (e.g., `Chapter10_Endocrine_Transcription.docx`, `Chapter10_Handwritten_Notes.docx`). These are the most important source because they reflect what YOUR instructor actually emphasized.

2. **The 308 course/chapter objectives** — The course objectives document (e.g., `2025 308 Final Exam Course Objectives Guide.docx` or chapter-specific objectives like `Ch 4 Cardiovascular Disorders 308 Objectives.docx`). These tell Claude what students are actually responsible for knowing, so the decks don't go out of scope.

3. **The LAD slide deck** — The instructor's PowerPoint lecture slides, exported as a tagged PDF (e.g., `lad chap 10 endocrine 26 - Tagged.pdf`). The LAD decks set the structure and depth for how the material is taught in your specific course.

**Optional but helpful:**
- Any compiled review info PDFs (e.g., `Chapter 10 Endocrine Review Info.pdf`)
- Previous Kahoot files or review PowerPoints (e.g., `Ch9_GI_Review.pptx`)

**Tip:** Upload all three source files to a Claude.ai project or provide them in the conversation. The more context Claude has about what your specific instructor covers, the better the output matches your course.

## Quick Reference: Creating a New Chapter

1. **Gather source material** — transcribed notes, course objectives, LAD slide deck (see above)
2. **Identify subtopics** — typically 2-3 review decks per chapter (split by body system subsection)
3. **Use the prompt template** above — paste it into Claude along with the source material
4. **Tell Claude to read an existing file** for the template — this ensures exact CSS/JS match
5. **Review the output** — check clinical accuracy, slide count, question quality
6. **Save files** to `C:\Users\Lindsay Wilson\Desktop\si-review-decks\`
7. **Test in browser** — double-click each file, click through all slides, take the quiz

---

*This guide lives in the si-review-decks folder so it's always alongside the files it describes.*
