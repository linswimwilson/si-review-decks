# DECK STANDARDS — SI Review Deck Build Workflow

> **How to use this file**: This is the upstream standard for every review deck built in this project. Claude (conversational, in chat) writes the spec. Claude Code builds the HTML. Lindsay QAs live. This file governs both. Load it into context before starting any deck work.
>
> Companion file: `COURSE_STANDARDS.md` (governs `chapter.md` structure). Both files live at project root.

---

## 1. THE FORWARD WORKFLOW

Every new chapter's decks follow this sequence. **Lindsay starts in chat with Claude (Phase 1), not in Claude Code.**

| Phase | Owner | Inputs | Output |
|-------|-------|--------|--------|
| 1. Source intake | Lindsay → Claude | Handwritten notes, textbook lecture slides, existing materials | Confirmation all source is present |
| 2. Chapter.md build | Claude (in chat) | Source from Phase 1 | `chapter.md` in the chapter's folder |
| 3. Deck planning | Claude (in chat) | `chapter.md`, source, this file | List of decks the chapter needs + short rationale |
| 4. Deck spec writing | Claude (in chat) | Phase 3 plan + `chapter.md` | One deck spec per deck, slide-by-slide (format in §11) |
| 5. Spec approval | Lindsay | Phase 4 specs | Specs locked, gaps closed, questions answered |
| 6. Deck build | Claude Code | Locked specs + `chapter.md` + this file + `COURSE_STANDARDS.md` | `.html` deck files in chapter folder |
| 7. Live QA | Lindsay | Built decks | Iteration notes back to Claude Code or Claude (in chat) |

**Rule**: Do not skip Phases 3–5 and go straight to Claude Code. That's how we ended up reverse-engineering. Specs are cheap; rebuilds are expensive.

**Rule**: If Claude Code starts improvising structure not in the spec, stop and bring it back to chat. The spec is the contract.

---

## 2. DECK TYPES

Three artifact types. Each serves a different moment.

### Review Deck
Structured walkthrough of a topic. 20–35 slides. For pre-exam review or post-class study. This is the main artifact. Matches Thyroid deck pattern.

### Quiz
Standalone question bank, no content slides. 10–20 questions with rationale. For retrieval practice. Matches GI Upper/Lower quizzes.

### Case Library *(future)*
Clinical scenarios with branching decisions. Not built yet; plan for post-final semester.

### When to split a chapter into multiple decks
Split when (a) the chapter covers **2+ distinct disorders** that share foundations, OR (b) a single disorder is large enough that a single deck would exceed ~35 slides.

Ch. 11 is the template example: one shared **Foundations** deck + three disorder decks (**Stroke**, **Seizures**, **Dementia**).

Single-topic chapters (e.g., Thyroid within Endocrine) get one Review deck. No Foundations split needed.

---

## 3. THE DECK SKELETON

Every Review deck follows this 9-part spine. Slide counts are ranges; adjust to content.

| # | Part | Slides | Notes |
|---|------|--------|-------|
| 1 | **Title** | 1 | Chapter + topic, "Lindsay Wilson & Claude Code — Supplemental Instructor Review" |
| 2 | **Section A divider + Anatomy/Foundations** | 3–6 | Only if the deck covers its own A&P. Foundations deck skips this (it IS the A&P). |
| 3 | **Section B–D dividers + content** | 12–20 | One section per disorder or per major topic. Each follows the per-topic arc (§4). |
| 4 | **Cross-disorder compare** | 1 | Only when 2+ disorders share one deck (e.g., Hypo vs Hyper Thyroid). Skip otherwise. |
| 5 | **Clinical Application section divider** | 1 | Transition into cases |
| 6 | **Cases** | 1–2 | Clinical scenarios with MCQ, using cell-cards + choice reveal pattern |
| 7 | **Big Picture summary anchor** | 1 | Closing anchor slide, gradient title, bulleted key takeaways |

### Per-Disorder Arc (the repeatable unit inside §3)

For each disorder within a deck:

```
Section divider  →  Anchor (core concept)  →  Causes (cell-cards)  →  
Manifestations (cell-cards)  →  Treatment (narrative or cell-cards)  →  
Emergency anchor (if applicable)  →  Check (quiz slide)
```

That's 6–7 slides per disorder. Thyroid deck uses this arc twice (Hypo + Hyper). Stroke deck will use it once (Stroke) with extra content depth.

---

## 4. SLIDE TYPE LIBRARY

Eight slide types. Each has a CSS class and a clear purpose. Claude Code must use these exactly — no inventing new slide types without updating this file.

| CSS class | Purpose | When to use |
|-----------|---------|-------------|
| `.slide.title` | Deck cover | Slide 1 only |
| `.slide.section-divider` | Transition between major sections | Start of every Section (A, B, C...) |
| `.slide.anchor` | Pause-and-state-the-big-thing | Core concepts, emergencies, clinical pearls. Uses a colored `.tag` (concept / emergency / pearl / warn / red) |
| `.slide.narrative` | Bulleted content with optional callout | Default content slide. Causes, manifestations, treatment, mechanisms |
| `.slide.flow` | Cascade or axis visualization | Sequential pathophys (ischemic cascade) OR regulatory axis with feedback loop (HPT, HPA) |
| `.slide.compare` | 2-column side-by-side | Differentiating two conditions or states (Hypo vs Hyper, Ischemic vs Hemorrhagic) |
| `.slide.check` | Interactive MCQ with reveal | Knowledge check after a content block |
| `.slide.case` | Clinical scenario + MCQ | End of deck, clinical application |

### Anchor tag variants (inside `.slide.anchor`)

| Tag class | Color | Use for |
|-----------|-------|---------|
| `.tag-concept` | Blue | Core concept statements ("Hypo = SLOW") |
| `.tag-pearl` | Teal | Clinical pearls and teaching anchors ("What is meaningful to them?") |
| `.tag-warn` | Yellow | Misconceptions and warnings ("TIA is NOT a mini-stroke") |
| `.tag-red` | Red | Red-flag findings |
| `.tag-emergency` | Red, filled | Medical emergencies (Thyroid Storm, Status Epilepticus, Myxedema, Cushing's Triad) |

---

## 5. COMPONENT LIBRARY

Reusable components that live inside slides. These are the workhorses.

### Built

| Component | CSS | Purpose | First used |
|-----------|-----|---------|------------|
| `cell-cards` | `.cell-cards` | 2-col grid of bordered cards with icon + title + bullets. Default chunking tool. Supports `.full-span` child for a card that spans both columns. Content inside `.cell-text` can be plain text or a nested `<ul>` (renders as mini-bullets per feedback_cell_cards). | Thyroid |
| `compare-grid` | `.compare-grid` | 2-col side-by-side for differential content. Col variants: `.col-blue`, `.col-red`, `.col-yellow`, `.col-green`, `.col-purple`, `.col-teal`. | Thyroid |
| `callout` (info/warn/danger) | `.callout` | Tinted inline note at bottom of narrative slides | Thyroid |
| `flow-chain` (horizontal/vertical) | `.flow-chain.horizontal` / `.flow-chain.vertical` | Cascade steps with arrows. **Only for TRUE sequential cascades** where step A physiologically triggers step B. Default direction is horizontal; `.horizontal` modifier is an explicit alias (same as default) for symmetry with `.vertical`. Not for parallel effects (use spokes/wheel instead). | Thyroid (vertical axis), Ch.11 Foundations (horizontal action potential) |
| `axis-wrap` | `.axis-wrap` | Vertical flow + curved SVG feedback loop (HPT axis style). Endocrine-specific. Hormone endpoint box required; curved dashed arrow returns to sensing organ. | Thyroid |
| `choices` (MCQ buttons) | `.choices` / `.choice-btn` | Click-to-reveal answer buttons with per-option rationale. Uses `revealChoice()` handler. | Thyroid |
| `emergency-cards` | `.emergency-cards` | Larger 2-col cards for emergency recognition content | Adrenal |
| **`anatomical-map`** | **`.anatomical-map`** | **SVG-based labeled anatomical diagram. Dark navy background, colored shapes, labels in Inter font. Sub-classes: `.am-label` (14px bold, text-colored), `.am-sub` (10px, text-dim), `.am-connector` (dashed 1.2px leader lines from labels to anatomical parts). Max-width 580px default; overrideable inline. Scales down on mobile. Used for organ/structure cross-sections, anatomical views, vascular networks.** | **Ch.11 Foundations (meninges, brain lobes, Circle of Willis)** |
| **`rule-decision-tree`** | **`.rule-decision-tree`** | **Two-column layout for clinical reasoning. Left: rule card (`.rdt-rule`, yellow-bordered, single headline + body text). Right: vertical stack of if-then rows (`.rdt-row`) each with icon + question + arrow + action, color-coded per row. Mobile: rule stacks on top, rows below. For teaching a principle followed by its applied branches.** | **Ch.11 Foundations (Monroe-Kellie)** |

### To be built (from the Visual Toolkit — add as needed)

| Toolkit name | Status | First chapter needing it | Notes |
|--------------|--------|--------------------------|-------|
| Radial wheel | Built (standalone, not yet DECK_STANDARDS-registered) | Ch.10 Adrenal/Diabetes (retrofit) | Hub + spokes for parallel effects |
| Branching tree | Built (standalone, not yet DECK_STANDARDS-registered) | Ch.10 Addison's (retrofit) | One cause → many mediators |
| Circular loop | Built (standalone, not yet DECK_STANDARDS-registered) | Ch.10 Glucose-insulin (retrofit) | Bidirectional homeostasis |
| Vicious cycle | Built (standalone, not yet DECK_STANDARDS-registered) | Ch.10 T2DM (retrofit) | Closed loop with exit arrow |
| Color-swatch cards | Built (standalone, not yet DECK_STANDARDS-registered) | Ch.9 Lower GI (stool colors) | Categorical visual guide |

When Claude Code builds a new component for the first time, it should follow the dark navy medical-textbook theme (see §7) and register the component here before considering the deck done.

---

## 6. VOICE & TONE

Decks are **pure structured reference**. No Coach Lindsay voice. Coach Lindsay is a separate interactive layer that sits on top of decks in the platform; she doesn't live in the static HTML.

Decks should read like a well-designed textbook chapter crossed with a flash-card deck — clinically precise, organized, and visually clear. Not conversational, not chatty.

Reference `COURSE_STANDARDS.md` Section 5 for the voice conventions shared with `chapter.md`:
- Clinically precise, warm, direct
- `↑` / `↓` for increase/decrease
- `→` for mechanism progression
- Bold for concept names only
- No AI-sounding hedges

**Rule**: Deck content and `chapter.md` content should feel like siblings — same voice, same depth, different format.

---

## 7. COLOR & SEMANTIC CONVENTIONS

The dark-navy medical-textbook theme is fixed across all decks. Colors carry semantic meaning; use them consistently.

### Palette (CSS variables from Thyroid deck)

| Variable | Hex | Semantic use |
|----------|-----|--------------|
| `--bg-dark` | `#0f172a` | Slide background |
| `--bg-card` | `#1e293b` | Card backgrounds |
| `--blue` | `#38bdf8` | Primary concept color, sensory/cognitive content, default highlight |
| `--red` | `#ef4444` | Emergencies, warnings, cardiac, red-flag findings |
| `--yellow` | `#f59e0b` | Cautions, metabolism/weight content, teaching warnings |
| `--green` | `#34d399` | Treatment, GI content, negative feedback loops |
| `--purple` | `#a78bfa` | Neurological/mood content, secondary content |
| `--teal` | `#22d3ee` | Clinical pearls, eye/vision content, reproductive |

### Rules
- **Red is for danger only.** Don't use red decoratively. If red appears, it means emergency, red flag, or critical.
- **One dominant color per slide.** Pick the semantic color for the slide's content; accent sparingly.
- **Consistency across chapters**: if Thyroid uses red for cardiac cell-cards, Neuro should too. Don't switch palettes mid-course.

---

## 8. FILE CONVENTIONS

### Naming
`Ch[N]_[Topic]_[Type].html`

Examples:
- `Ch11_Foundations_Review.html`
- `Ch11_Stroke_Review.html`
- `Ch11_Seizures_Review.html`
- `Ch11_Dementia_Review.html`
- `Ch10_GI_LowerGI_Quiz.html`

### Location
Each deck lives inside its chapter folder (`/NURS 308/Ch. 11/`). Spec files (`.md`) live alongside the built decks.

### Tracking
Every built deck includes the `nameGate` + Google Apps Script tracking block from the Thyroid deck (present at the bottom of the HTML). This logs student visits to the shared endpoint. Don't strip it.

---

## 9. QUALITY CHECKLIST

Before marking a deck done (Phase 7 QA), confirm:

**Structure**
- [ ] Matches the 9-part skeleton (§3) or has a documented reason for deviating
- [ ] Every section has a divider → anchor → content → check rhythm
- [ ] 2 clinical cases (if the content supports it) or 1 case + a documented reason for just one
- [ ] Big Picture summary anchor at the end

**Content**
- [ ] Objectives from `chapter.md` are all addressed
- [ ] Mnemonics from `chapter.md` §7 appear somewhere (mostly in anchors and callouts)
- [ ] Spiral Connections from `chapter.md` §4 show up in at least 2 slides (case stems or callouts)
- [ ] No invented content not traceable to `chapter.md` or source materials

**Visual**
- [ ] Dark navy theme, no external images or AI-generated graphics
- [ ] Colors used semantically (§7)
- [ ] Slide types from §4 only; no invented types
- [ ] Components from §5 only; new components added to §5 before shipping
- [ ] Mobile-responsive (cell-cards + compare-grid collapse to 1 col on mobile)

**Interactivity**
- [ ] Keyboard nav (arrows, space, Home, End) works
- [ ] Touch swipe works
- [ ] `.check` and `.case` slides reveal correct answer on click with rationale
- [ ] nameGate + tracking script present

---

## 10. RETROFIT TRIAGE (as of April 2026)

Existing materials audited against this standard. Retrofit happens **after the final exam**, not before. Final is 10–14 days out; retrofit now steals time from decks students need.

| Artifact | Status | Retrofit needed | Priority |
|----------|--------|-----------------|----------|
| `Endocrine_Thyroid_Review.html` | Matches skeleton closely | Minor — add any missing slide types if concept-appropriate; add to quality checklist | Post-final |
| `Endocrine_Diabetes_Review.pptx` | Wrong format — PowerPoint, not HTML | Major — rebuild as HTML review deck | Post-final |
| `GI_Quiz_UpperGI.html` / `GI_Quiz_LowerGI.html` | Quiz artifact, different type from review decks | No retrofit — quizzes are a separate artifact type (§2). Document as such. | N/A |
| Ch. 9 (Endocrine) review decks | Partial (Thyroid exists, Diabetes is PPTX) | Needs: HTML rebuild of Diabetes; possibly a Foundations-Endocrine deck if content justifies | Post-final |
| Ch. 10 (GI) review decks | None exist — only quizzes | Build full review decks (Upper GI, Lower GI, possibly Foundations-GI) | Post-final |
| Ch. 11 decks | Being built fresh under this standard | N/A — template chapter for workflow | Current sprint |

**What Lindsay is studying from, during the 10–14 day window:**
- Thyroid deck (use as-is, it's fine)
- GI quizzes (use as-is, different artifact)
- Diabetes PPTX (use as-is even though wrong format — retrofit later)
- Ch. 11 decks (built fresh under this standard)

Translation: no retrofit pressure during finals sprint. Post-final we rebuild Ch. 9/10 to standard and backfill Ch. 1–8.

---

## 11. DECK SPEC TEMPLATE

This is the format Claude (in chat) hands to Claude Code. Copy this block when specifying a new deck.

```markdown
# DECK SPEC: Ch[N]_[Topic]_Review

## Header
- **Chapter**: [N — Topic]
- **Deck**: [Foundations / Stroke / etc.]
- **Target slide count**: [~N]
- **Objectives covered**: [ch11_1, ch11_2, ...]
- **Source**: [chapter.md sections, note transcription refs]
- **Status**: [Draft | Approved | Built | QA'd]

## Section Structure

### Section A — [Name]
[1-line purpose of the section]

#### Slide 1: TITLE
- **Title**: [Chapter N — Topic]
- **Subtitle**: [One-line framing]
- **Meta**: Lindsay Wilson & Claude Code · Supplemental Instructor Review

#### Slide 2: SECTION DIVIDER — [Name]
- **Section tag**: "Section A"
- **Title**: [Name with <em> accent on keyword]
- **Subtitle**: [One-line hook]

#### Slide 3: NARRATIVE — [Topic]
- **Section label**: [Topic]
- **Title**: [Short headline with <em> on keyword]
- **Content**: [bullet-level content or reference chapter.md §X]
- **Callout** (optional): info/warn/danger + text
- **Source**: [chapter.md reference]

#### Slide 4: ANCHOR [concept|emergency|pearl|warn|red]
- **Tag**: [tag variant]
- **Headline**: [The big statement]
- **Subline**: [Supporting line, max 2 sentences]

#### Slide 5: FLOW — [Name]
- **Type**: axis-with-feedback | cascade-horizontal | cascade-vertical
- **Steps**: [list of steps with labels]
- **Colors**: [if semantically meaningful]
- **Feedback loop** (if axis): [source → target + label]

#### Slide 6: COMPARE — [A vs B]
- **Title**: [A vs B]
- **Col 1 label + color**: [label + blue/red/yellow]
- **Col 1 bullets**: [key points]
- **Col 2 label + color**: [label + blue/red/yellow]
- **Col 2 bullets**: [key points]

#### Slide 7: NARRATIVE + CELL-CARDS — [Category: Causes/Manifestations/Treatment]
- **Title**: [Short headline]
- **Badge** (optional): "Think: [mnemonic]"
- **Cards**: [N cards, each with: color, icon, title, bullet list]

#### Slide 8: CHECK — [Topic]
- **Stem**: [Question, can include clinical mini-stem]
- **Options A/B/C/D**: [with rationale for each; mark correct]

[... continue through all slides ...]

### Section B — [Name]
[...]

## Cases

#### Slide [N]: CASE — [Patient name]
- **Patient line**: [Name, age, sex, one-line chief complaint]
- **Scenario text**: [2–4 sentences with bolded key findings]
- **Stem**: [Question]
- **Options A/B/C/D**: [with rationale for each; mark correct]
- **Spiral notes** (if relevant): [what earlier chapter this connects to]

## Summary Anchor (final slide)
- **Tag**: Big Picture
- **Headline**: [Topic — The Big Picture]
- **Bulleted key takeaways**: [4–6 bullets, color-coded by semantic theme]

## Notes for Claude Code
- [Any specific component to build first]
- [Any unusual color choices]
- [Any content that needs `chapter.md` cross-reference]
```

---

## 12. CHANGE LOG

Keep a log at the bottom of this file when the standard evolves. Claude Code checks here before assuming old patterns.

| Date | Change | Reason |
|------|--------|--------|
| [current] | Initial version | Codify what Thyroid deck got right + what Ch. 11 needs |
| 2026-04-19 | Registered `.anatomical-map` and `.rule-decision-tree` in §5 as built components; added explicit `.flow-chain.horizontal` alias; documented retrofit status of standalone-built components (wheel, tree, circular loop, vicious cycle, color-swatch) | Components built during Ch.11 Foundations build; registered per spec requirement |

