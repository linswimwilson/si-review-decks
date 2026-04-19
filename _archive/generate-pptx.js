const PptxGenJS = require("pptxgenjs");
const fs = require("fs");

// ── Color palette (matches HTML dark theme) ──
const C = {
  bg:      "0f172a",
  card:    "1e293b",
  elevated:"334155",
  text:    "f1f5f9",
  dim:     "94a3b8",
  blue:    "38bdf8",
  yellow:  "f59e0b",
  red:     "ef4444",
  purple:  "a78bfa",
  teal:    "22d3ee",
  green:   "4ade80",
  orange:  "fb923c",
};

// ── Helper: create a new deck with common settings ──
function makeDeck() {
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_16x9";
  pptx.defineLayout({ name: "WIDE", width: 13.33, height: 7.5 });
  pptx.layout = "LAYOUT_16x9";
  return pptx;
}

// ── Slide builders ──

function titleSlide(pptx, { topLabel, title, subtitle, meta }) {
  const slide = pptx.addSlide();
  slide.background = { color: C.bg };
  if (topLabel) {
    slide.addText(topLabel.toUpperCase(), {
      x: 0.5, y: 1.0, w: 9, h: 0.4,
      fontSize: 11, fontFace: "Segoe UI", color: C.blue,
      letterSpacing: 3, align: "center", bold: true,
    });
  }
  // Parse title for emphasis (text between * markers)
  const titleParts = parseEmphasis(title);
  slide.addText(titleParts, {
    x: 0.5, y: 1.6, w: 9, h: 1.6,
    fontSize: 32, fontFace: "Segoe UI", color: C.text,
    bold: true, align: "center", lineSpacingMultiple: 1.1,
  });
  if (subtitle) {
    slide.addText(subtitle, {
      x: 1.0, y: 3.4, w: 8, h: 1.0,
      fontSize: 14, fontFace: "Segoe UI", color: C.dim,
      align: "center", lineSpacingMultiple: 1.4,
    });
  }
  if (meta) {
    slide.addText(meta, {
      x: 1.0, y: 4.6, w: 8, h: 0.5,
      fontSize: 11, fontFace: "Segoe UI", color: C.dim,
      align: "center",
    });
  }
  return slide;
}

function sectionSlide(pptx, { num, title, subtitle }) {
  const slide = pptx.addSlide();
  slide.background = { color: C.bg };
  if (num) {
    slide.addText(num, {
      x: 0.5, y: 1.5, w: 9, h: 0.6,
      fontSize: 13, fontFace: "Segoe UI", color: C.blue,
      align: "center", bold: true, letterSpacing: 2,
    });
  }
  const parts = parseEmphasis(title);
  slide.addText(parts, {
    x: 0.5, y: 2.2, w: 9, h: 1.5,
    fontSize: 34, fontFace: "Segoe UI", color: C.text,
    bold: true, align: "center", lineSpacingMultiple: 1.1,
  });
  if (subtitle) {
    slide.addText(subtitle, {
      x: 1.5, y: 3.8, w: 7, h: 0.8,
      fontSize: 14, fontFace: "Segoe UI", color: C.dim,
      align: "center", lineSpacingMultiple: 1.4,
    });
  }
  return slide;
}

function anchorSlide(pptx, { tag, title, subtitle, tagColor, titleColor }) {
  const slide = pptx.addSlide();
  slide.background = { color: C.bg };
  if (tag) {
    slide.addText(tag.toUpperCase(), {
      x: 2.5, y: 1.3, w: 5, h: 0.45,
      fontSize: 10, fontFace: "Segoe UI", color: tagColor || C.blue,
      align: "center", bold: true, letterSpacing: 2,
    });
    // Tag pill background
    slide.addShape("roundRect", {
      x: 3.2, y: 1.27, w: 3.6, h: 0.5,
      fill: { color: C.bg },
      line: { color: tagColor || C.blue, width: 1 },
      rectRadius: 0.2,
    });
    // Re-add text on top
    slide.addText(tag.toUpperCase(), {
      x: 3.2, y: 1.27, w: 3.6, h: 0.5,
      fontSize: 10, fontFace: "Segoe UI", color: tagColor || C.blue,
      align: "center", bold: true, letterSpacing: 2,
    });
  }
  const parts = parseEmphasis(title, titleColor);
  slide.addText(parts, {
    x: 0.5, y: 2.0, w: 9, h: 1.8,
    fontSize: 30, fontFace: "Segoe UI", color: C.text,
    bold: true, align: "center", lineSpacingMultiple: 1.15,
  });
  if (subtitle) {
    slide.addText(subtitle, {
      x: 1.0, y: 4.0, w: 8, h: 1.4,
      fontSize: 13, fontFace: "Segoe UI", color: C.dim,
      align: "center", lineSpacingMultiple: 1.5,
    });
  }
  return slide;
}

function narrativeSlide(pptx, { label, title, bullets, callout, calloutType, cols }) {
  const slide = pptx.addSlide();
  slide.background = { color: C.bg };
  if (label) {
    slide.addText(label.toUpperCase(), {
      x: 0.6, y: 0.35, w: 4, h: 0.35,
      fontSize: 10, fontFace: "Segoe UI", color: C.blue,
      bold: true, letterSpacing: 2,
    });
  }
  const titleParts = parseEmphasis(title);
  slide.addText(titleParts, {
    x: 0.6, y: 0.7, w: 8.5, h: 0.7,
    fontSize: 22, fontFace: "Segoe UI", color: C.text,
    bold: true, lineSpacingMultiple: 1.1,
  });

  if (cols) {
    // Two-column layout
    const colW = 4.1;
    cols.forEach((colBullets, i) => {
      const xPos = 0.6 + i * 4.5;
      const bulletText = colBullets.map(b => ({
        text: b, options: { fontSize: 12, fontFace: "Segoe UI", color: C.dim, bullet: { type: "bullet", color: C.blue }, lineSpacingMultiple: 1.5, breakLine: true }
      }));
      slide.addText(bulletText, {
        x: xPos, y: 1.55, w: colW, h: 3.5,
        valign: "top",
      });
    });
  } else if (bullets) {
    const bulletText = bullets.map(b => ({
      text: b, options: { fontSize: 13, fontFace: "Segoe UI", color: C.dim, bullet: { type: "bullet", color: C.blue }, lineSpacingMultiple: 1.6, breakLine: true }
    }));
    slide.addText(bulletText, {
      x: 0.6, y: 1.55, w: 8.5, h: callout ? 3.0 : 4.2,
      valign: "top",
    });
  }

  if (callout) {
    const cColor = calloutType === "danger" ? C.red : calloutType === "warn" ? C.yellow : C.blue;
    slide.addShape("rect", {
      x: 0.6, y: callout && bullets && bullets.length > 4 ? 4.8 : 4.3,
      w: 8.5, h: 0.8,
      fill: { color: C.card },
      line: { color: cColor, width: 0 },
    });
    // Left accent bar
    slide.addShape("rect", {
      x: 0.6, y: callout && bullets && bullets.length > 4 ? 4.8 : 4.3,
      w: 0.04, h: 0.8,
      fill: { color: cColor },
    });
    slide.addText(callout, {
      x: 0.8, y: callout && bullets && bullets.length > 4 ? 4.8 : 4.3,
      w: 8.1, h: 0.8,
      fontSize: 11, fontFace: "Segoe UI", color: C.dim,
      valign: "middle", lineSpacingMultiple: 1.3,
    });
  }
  return slide;
}

function flowSlide(pptx, { label, title, steps, callout }) {
  const slide = pptx.addSlide();
  slide.background = { color: C.bg };
  if (label) {
    slide.addText(label.toUpperCase(), {
      x: 0.5, y: 0.4, w: 9, h: 0.35,
      fontSize: 10, fontFace: "Segoe UI", color: C.blue,
      align: "center", bold: true, letterSpacing: 2,
    });
  }
  const titleParts = parseEmphasis(title);
  slide.addText(titleParts, {
    x: 0.5, y: 0.8, w: 9, h: 0.65,
    fontSize: 20, fontFace: "Segoe UI", color: C.text,
    bold: true, align: "center",
  });

  const n = steps.length;
  const totalW = 8.5;
  const arrowW = 0.35;
  const arrows = n - 1;
  const boxW = (totalW - arrows * arrowW) / n;
  const startX = 0.75;
  const yPos = 1.8;
  const boxH = 1.2;

  steps.forEach((step, i) => {
    const x = startX + i * (boxW + arrowW);
    const fillColor = step.color || C.card;
    const borderColor = step.border || "475569";
    slide.addShape("roundRect", {
      x, y: yPos, w: boxW, h: boxH,
      fill: { color: fillColor },
      line: { color: borderColor, width: 1 },
      rectRadius: 0.1,
    });
    let textArr = [{ text: step.label, options: { fontSize: 11, fontFace: "Segoe UI", color: C.text, bold: true, breakLine: true } }];
    if (step.sub) {
      textArr.push({ text: "\n" + step.sub, options: { fontSize: 9, fontFace: "Segoe UI", color: C.dim } });
    }
    slide.addText(textArr, {
      x, y: yPos, w: boxW, h: boxH,
      align: "center", valign: "middle", lineSpacingMultiple: 1.3,
    });
    // Arrow
    if (i < n - 1) {
      slide.addText("\u2192", {
        x: x + boxW, y: yPos, w: arrowW, h: boxH,
        fontSize: 18, fontFace: "Segoe UI", color: C.blue,
        align: "center", valign: "middle",
      });
    }
  });

  if (callout) {
    slide.addShape("rect", {
      x: 1.5, y: 3.4, w: 7, h: 0.7,
      fill: { color: C.card },
    });
    slide.addShape("rect", {
      x: 1.5, y: 3.4, w: 0.04, h: 0.7,
      fill: { color: C.blue },
    });
    slide.addText(callout, {
      x: 1.7, y: 3.4, w: 6.6, h: 0.7,
      fontSize: 11, fontFace: "Segoe UI", color: C.dim,
      valign: "middle", lineSpacingMultiple: 1.3,
    });
  }
  return slide;
}

function quizSlide(pptx, { label, question, options, explanation }) {
  const slide = pptx.addSlide();
  slide.background = { color: C.bg };
  slide.addText((label || "Quick Check").toUpperCase(), {
    x: 0.6, y: 0.35, w: 4, h: 0.35,
    fontSize: 10, fontFace: "Segoe UI", color: C.purple,
    bold: true, letterSpacing: 2,
  });
  slide.addText(question, {
    x: 0.6, y: 0.8, w: 8.5, h: 0.9,
    fontSize: 15, fontFace: "Segoe UI", color: C.text,
    bold: true, valign: "top", lineSpacingMultiple: 1.3,
  });

  options.forEach((opt, i) => {
    const yPos = 1.9 + i * 0.7;
    const isCorrect = opt.correct;
    const bgColor = isCorrect ? "1a3a2a" : C.card;
    const borderColor = isCorrect ? C.green : "475569";
    slide.addShape("roundRect", {
      x: 0.6, y: yPos, w: 8.5, h: 0.58,
      fill: { color: bgColor },
      line: { color: borderColor, width: isCorrect ? 1.5 : 0.5 },
      rectRadius: 0.08,
    });
    const prefix = isCorrect ? "\u2713 " : "   ";
    slide.addText(prefix + opt.text, {
      x: 0.8, y: yPos, w: 8.1, h: 0.58,
      fontSize: 12, fontFace: "Segoe UI",
      color: isCorrect ? C.green : C.dim,
      bold: isCorrect, valign: "middle",
    });
  });

  if (explanation) {
    slide.addShape("rect", {
      x: 0.6, y: 4.7, w: 8.5, h: 0.7,
      fill: { color: C.card },
    });
    slide.addShape("rect", {
      x: 0.6, y: 4.7, w: 0.04, h: 0.7,
      fill: { color: C.green },
    });
    slide.addText(explanation, {
      x: 0.8, y: 4.7, w: 8.1, h: 0.7,
      fontSize: 10, fontFace: "Segoe UI", color: C.dim,
      valign: "middle", lineSpacingMultiple: 1.3,
    });
  }
  return slide;
}

function compareSlide(pptx, { title, leftTitle, leftItems, rightTitle, rightItems, leftColor, rightColor }) {
  const slide = pptx.addSlide();
  slide.background = { color: C.bg };
  const titleParts = parseEmphasis(title);
  slide.addText(titleParts, {
    x: 0.5, y: 0.4, w: 9, h: 0.65,
    fontSize: 22, fontFace: "Segoe UI", color: C.text,
    bold: true, align: "center",
  });

  // Left column
  const lc = leftColor || C.blue;
  slide.addShape("roundRect", {
    x: 0.5, y: 1.3, w: 4.3, h: 3.8,
    fill: { color: C.card },
    line: { color: lc, width: 1 },
    rectRadius: 0.1,
  });
  slide.addText(leftTitle, {
    x: 0.7, y: 1.4, w: 3.9, h: 0.5,
    fontSize: 14, fontFace: "Segoe UI", color: lc,
    bold: true,
  });
  const leftBullets = leftItems.map(b => ({
    text: b, options: { fontSize: 11, fontFace: "Segoe UI", color: C.dim, bullet: { type: "bullet", color: lc }, lineSpacingMultiple: 1.5, breakLine: true }
  }));
  slide.addText(leftBullets, {
    x: 0.7, y: 2.0, w: 3.9, h: 2.8,
    valign: "top",
  });

  // Right column
  const rc = rightColor || C.red;
  slide.addShape("roundRect", {
    x: 5.2, y: 1.3, w: 4.3, h: 3.8,
    fill: { color: C.card },
    line: { color: rc, width: 1 },
    rectRadius: 0.1,
  });
  slide.addText(rightTitle, {
    x: 5.4, y: 1.4, w: 3.9, h: 0.5,
    fontSize: 14, fontFace: "Segoe UI", color: rc,
    bold: true,
  });
  const rightBullets = rightItems.map(b => ({
    text: b, options: { fontSize: 11, fontFace: "Segoe UI", color: C.dim, bullet: { type: "bullet", color: rc }, lineSpacingMultiple: 1.5, breakLine: true }
  }));
  slide.addText(rightBullets, {
    x: 5.4, y: 2.0, w: 3.9, h: 2.8,
    valign: "top",
  });
  return slide;
}

function caseSlide(pptx, { label, scenario, question, options, explanation }) {
  const slide = pptx.addSlide();
  slide.background = { color: C.bg };
  slide.addText((label || "Clinical Case").toUpperCase(), {
    x: 0.6, y: 0.3, w: 4, h: 0.35,
    fontSize: 10, fontFace: "Segoe UI", color: C.teal,
    bold: true, letterSpacing: 2,
  });
  // Scenario box
  slide.addShape("roundRect", {
    x: 0.6, y: 0.7, w: 8.5, h: 1.1,
    fill: { color: C.card },
    line: { color: "475569", width: 0.5 },
    rectRadius: 0.08,
  });
  slide.addText(scenario, {
    x: 0.8, y: 0.75, w: 8.1, h: 1.0,
    fontSize: 11, fontFace: "Segoe UI", color: C.dim,
    valign: "middle", lineSpacingMultiple: 1.4,
  });

  if (question) {
    slide.addText(question, {
      x: 0.6, y: 1.9, w: 8.5, h: 0.5,
      fontSize: 13, fontFace: "Segoe UI", color: C.text,
      bold: true,
    });
  }

  if (options) {
    options.forEach((opt, i) => {
      const yPos = 2.5 + i * 0.6;
      const isCorrect = opt.correct;
      const bgColor = isCorrect ? "1a3a2a" : C.card;
      const borderColor = isCorrect ? C.green : "475569";
      slide.addShape("roundRect", {
        x: 0.6, y: yPos, w: 8.5, h: 0.5,
        fill: { color: bgColor },
        line: { color: borderColor, width: isCorrect ? 1.5 : 0.5 },
        rectRadius: 0.08,
      });
      const prefix = isCorrect ? "\u2713 " : "   ";
      slide.addText(prefix + opt.text, {
        x: 0.8, y: yPos, w: 8.1, h: 0.5,
        fontSize: 11, fontFace: "Segoe UI",
        color: isCorrect ? C.green : C.dim,
        bold: isCorrect, valign: "middle",
      });
    });
  }

  if (explanation) {
    slide.addShape("rect", {
      x: 0.6, y: 4.75, w: 8.5, h: 0.65,
      fill: { color: C.card },
    });
    slide.addShape("rect", {
      x: 0.6, y: 4.75, w: 0.04, h: 0.65,
      fill: { color: C.green },
    });
    slide.addText(explanation, {
      x: 0.8, y: 4.75, w: 8.1, h: 0.65,
      fontSize: 10, fontFace: "Segoe UI", color: C.dim,
      valign: "middle", lineSpacingMultiple: 1.2,
    });
  }
  return slide;
}

// Case slide without quiz options (reveal-style)
function caseRevealSlide(pptx, { label, scenario, answerBullets, callout }) {
  const slide = pptx.addSlide();
  slide.background = { color: C.bg };
  slide.addText((label || "Clinical Case").toUpperCase(), {
    x: 0.6, y: 0.3, w: 4, h: 0.35,
    fontSize: 10, fontFace: "Segoe UI", color: C.teal,
    bold: true, letterSpacing: 2,
  });
  slide.addShape("roundRect", {
    x: 0.6, y: 0.7, w: 8.5, h: 1.2,
    fill: { color: C.card },
    line: { color: "475569", width: 0.5 },
    rectRadius: 0.08,
  });
  slide.addText(scenario, {
    x: 0.8, y: 0.75, w: 8.1, h: 1.1,
    fontSize: 11, fontFace: "Segoe UI", color: C.dim,
    valign: "top", lineSpacingMultiple: 1.4,
  });

  const bulletText = answerBullets.map(b => ({
    text: b, options: { fontSize: 11, fontFace: "Segoe UI", color: C.dim, bullet: { type: "bullet", color: C.teal }, lineSpacingMultiple: 1.5, breakLine: true }
  }));
  slide.addText(bulletText, {
    x: 0.6, y: 2.1, w: 8.5, h: 2.5,
    valign: "top",
  });

  if (callout) {
    slide.addShape("rect", {
      x: 0.6, y: 4.7, w: 8.5, h: 0.6,
      fill: { color: C.card },
    });
    slide.addShape("rect", {
      x: 0.6, y: 4.7, w: 0.04, h: 0.6,
      fill: { color: C.teal },
    });
    slide.addText(callout, {
      x: 0.8, y: 4.7, w: 8.1, h: 0.6,
      fontSize: 10, fontFace: "Segoe UI", color: C.dim,
      valign: "middle",
    });
  }
  return slide;
}

// ── Parse *emphasis* markers in text ──
function parseEmphasis(text, emphColor) {
  if (!text) return [{ text: "", options: {} }];
  const color = emphColor || C.blue;
  const parts = text.split(/\*([^*]+)\*/g);
  const result = [];
  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 0) {
      if (parts[i]) result.push({ text: parts[i], options: { color: C.text } });
    } else {
      // Check for color prefix like "red:" or "yellow:"
      const colorMatch = parts[i].match(/^(red|yellow|green|purple|orange|teal):(.*)/);
      if (colorMatch) {
        result.push({ text: colorMatch[2], options: { color: C[colorMatch[1]] } });
      } else {
        result.push({ text: parts[i], options: { color } });
      }
    }
  }
  return result.length ? result : [{ text: text, options: { color: C.text } }];
}


// ════════════════════════════════════════════════════════════════════
//  DECK 1: UPPER GI  (44 slides)
// ════════════════════════════════════════════════════════════════════
function buildUpperGI() {
  const pptx = makeDeck();
  pptx.title = "Chapter 9: Upper GI Pathophysiology Review";
  pptx.author = "Lindsay Wilson & Claude Code";

  // 1 - Title
  titleSlide(pptx, {
    topLabel: "Supplemental Instructor Review",
    title: "Chapter 9: *Upper GI* Pathophysiology",
    subtitle: "Section 1 \u2014 From the mouth to the duodenum. Gates, shields, acid, and what goes wrong.",
    meta: "Lindsay Wilson & Claude Code",
  });

  // 2 - Section: Anatomy
  sectionSlide(pptx, { num: "Section A", title: "Upper GI *Anatomy*", subtitle: "The highway from pharynx to duodenum" });

  // 3 - Flow: Upper GI Highway
  flowSlide(pptx, {
    label: "Anatomy", title: "The Upper GI *Highway*",
    steps: [
      { label: "Pharynx", sub: "Throat" },
      { label: "Epiglottis", sub: "Traffic cop" },
      { label: "Esophagus", sub: "Transport tube" },
      { label: "LES", sub: "The Gate", color: "1a3344", border: C.blue },
      { label: "Stomach", sub: "LUQ, makes HCl", color: "2a2a1a", border: C.yellow },
    ],
  });

  // 4 - Flow: Past the Stomach
  flowSlide(pptx, {
    label: "Anatomy", title: "Past the Stomach",
    steps: [
      { label: "Stomach", color: "2a2a1a", border: C.yellow },
      { label: "Pyloric Sphincter", sub: "Exit gate", color: "1a3344", border: C.blue },
      { label: "Duodenum", sub: "Start of small intestine" },
    ],
    callout: "Three sphincters to know: LES (stomach entrance), Pyloric (stomach exit), Ileocecal valve (small \u2192 large intestine)",
  });

  // 5 - Anchor: Speech + Swallow
  anchorSlide(pptx, {
    tag: "Clinical Pearl",
    title: "Can't speak? *red:Can't swallow.*",
    subtitle: "The pharynx controls both speech and swallowing. If a patient can't vocalize, assume aspiration risk and hold oral intake.",
  });

  // 6 - Quiz: Anatomy
  quizSlide(pptx, {
    question: "Which sphincter acts as the \"gate\" between the esophagus and stomach?",
    options: [
      { text: "A. Lower Esophageal Sphincter (LES)", correct: true },
      { text: "B. Pyloric Sphincter", correct: false },
      { text: "C. Ileocecal Valve", correct: false },
      { text: "D. Upper Esophageal Sphincter", correct: false },
    ],
    explanation: "The LES is the gate at the bottom of the esophagus. When it fails, acid goes UP (GERD).",
  });

  // 7 - Section: Vomiting
  sectionSlide(pptx, { num: "Section B", title: "*Vomiting*", subtitle: "Protective reflex, warning signs, and what the colors mean" });

  // 8 - Anchor: Vomiting
  anchorSlide(pptx, {
    tag: "Key Concept",
    title: "Vomiting = *Reverse Peristalsis*",
    subtitle: "It's a protective reflex. The GI tract shifts into reverse to expel something harmful.",
  });

  // 9 - Anchor: Projectile
  anchorSlide(pptx, {
    tag: "Red Flag", tagColor: C.red,
    title: "*red:Projectile* vomiting = *red:Neuro* problem",
    subtitle: "Projectile vomiting is NOT a GI origin \u2014 think increased intracranial pressure (ICP). This is a neuro red flag, not a stomach issue.",
  });

  // 10 - Narrative: Vomiting Consequences
  narrativeSlide(pptx, {
    label: "Vomiting",
    title: "Prolonged Vomiting \u2192 *Metabolic Alkalosis*",
    bullets: [
      "You're losing HCl (acid) + potassium (K+) with every episode",
      "Less acid in the body = alkalosis \u2014 the blood becomes too basic",
      "Low K+ (hypokalemia) can cause cardiac dysrhythmias",
    ],
    callout: "Aspiration concern: Unresponsive patients who vomit cannot protect their airway. Position on side (recovery position) to prevent aspiration pneumonia.",
    calloutType: "danger",
  });

  // 11 - Narrative: Vomit Colors
  narrativeSlide(pptx, {
    label: "Vomiting",
    title: "What the *Color* Tells You",
    bullets: [
      "Bright Red \u2014 Active bleed, EMERGENCY. Fresh blood from upper GI.",
      "Coffee Grounds \u2014 Slow or old bleed. Blood digested by stomach acid = hematemesis.",
      "Yellow / Green \u2014 Bile. Deep vomiting, contents pulled from duodenum.",
      "Dark Brown / Fecal \u2014 Think bowel obstruction. Contents backing up from below.",
      "Undigested Food \u2014 Gastroparesis. Stomach not emptying. Common in diabetic patients.",
    ],
  });

  // 12 - Quiz: Vomiting
  quizSlide(pptx, {
    question: "A patient has been vomiting for 3 days. Which acid-base imbalance do you expect?",
    options: [
      { text: "A. Metabolic acidosis", correct: false },
      { text: "B. Metabolic alkalosis", correct: true },
      { text: "C. Respiratory acidosis", correct: false },
      { text: "D. Respiratory alkalosis", correct: false },
    ],
    explanation: "Prolonged vomiting depletes HCl and K+. Losing acid shifts the body toward alkalosis (too basic).",
  });

  // 13 - Section: GERD
  sectionSlide(pptx, { num: "Section C", title: "*GERD*", subtitle: "When the gate fails and acid goes UP" });

  // 14 - Anchor: GERD Core
  anchorSlide(pptx, {
    tag: "Core Concept",
    title: "The *Gate* (LES) fails. Acid goes *red:UP.*",
    subtitle: "The esophagus was never designed for acid. When the LES relaxes inappropriately, gastric acid refluxes upward and burns the esophageal lining.",
  });

  // 15 - Narrative: GERD Symptoms
  narrativeSlide(pptx, {
    label: "GERD", title: "Classic *Symptoms*",
    bullets: [
      "Heartburn (substernal burning) \u2014 worse lying down, after meals",
      "Regurgitation \u2014 acid taste in the back of the throat",
      "Adult-onset asthma / chronic cough \u2014 silent nighttime aspiration of acid into airways",
      "Dysphagia \u2014 difficulty swallowing from esophageal irritation",
    ],
    callout: "Can mimic angina! Substernal burning can look like a heart attack. Always rule out cardiac causes first.",
    calloutType: "warn",
  });

  // 16 - Narrative: GERD Risk Factors
  narrativeSlide(pptx, {
    label: "GERD", title: "*Risk Factors*",
    cols: [
      [
        "Obesity \u2014 increases abdominal pressure",
        "Pregnancy \u2014 same mechanism",
        "Hiatal hernia \u2014 stomach pushes up through diaphragm",
      ],
      [
        "Diet triggers: chocolate, caffeine, carbonation, spicy/fatty foods, citrus, alcohol",
        "Substances: nicotine, steroids",
        "Meds: BP meds, anticholinergics, NG tubes",
      ],
    ],
  });

  // 17 - Anchor: Transit Time
  anchorSlide(pptx, {
    tag: "Clinical Pearl",
    title: "*yellow:3\u20134 hours* mouth to pylorus",
    subtitle: "That's how long food takes to clear the stomach. Don't lie down before then \u2014 gravity is your friend against reflux.",
  });

  // 18 - Quiz: GERD
  quizSlide(pptx, {
    question: "A patient with GERD develops a chronic cough at night. What is the likely mechanism?",
    options: [
      { text: "A. Allergic response to stomach acid", correct: false },
      { text: "B. Silent nighttime aspiration of acid into the airways", correct: true },
      { text: "C. Vagus nerve stimulation from esophageal distension", correct: false },
      { text: "D. Anxiety-related hyperventilation from discomfort", correct: false },
    ],
    explanation: "When lying flat, acid refluxes up and can silently aspirate into the lungs/airways, causing chronic cough or adult-onset asthma.",
  });

  // 19 - Narrative: GERD Treatment
  narrativeSlide(pptx, {
    label: "GERD", title: "*Treatment*",
    cols: [
      [
        "PPIs \u2014 suppress acid production. Take before meals.",
        "H2 blockers \u2014 reduce acid (less potent than PPIs)",
        "Antacids (TUMS) \u2014 neutralize existing acid (quick relief)",
      ],
      [
        "Elevate HOB \u2014 let gravity help",
        "Small, frequent meals \u2014 no eating 3\u20134 hrs before bed",
        "Avoid triggers \u2014 weight loss if applicable",
      ],
    ],
    callout: "Watch for: Long-term acid suppression (PPIs) can impair B12 absorption. Monitor for deficiency symptoms.",
    calloutType: "warn",
  });

  // 20 - Narrative: GERD Complications
  narrativeSlide(pptx, {
    label: "GERD", title: "*Complications*",
    bullets: [
      "Esophageal narrowing (stricture) \u2014 chronic inflammation leads to scarring \u2192 dysphagia",
      "Barrett's esophagus \u2014 cell changes from chronic acid exposure (precancerous)",
      "Esophageal cancer \u2014 serious, difficult to treat, poor prognosis",
    ],
  });

  // 21 - Anchor: Barrett's
  anchorSlide(pptx, {
    tag: "Key Concept",
    title: "Barrett's = *orange:Adaptation,* NOT healing",
    subtitle: "Chronic GERD causes metaplasia: the esophagus swaps its normal squamous cells for columnar cells (like the stomach). It's trying to survive the acid \u2014 but this change is precancerous.",
  });

  // 22 - Flow: Barrett's Pathway
  flowSlide(pptx, {
    label: "Barrett's Esophagus", title: "The *Barrett's Pathway*",
    steps: [
      { label: "Chronic GERD", color: "1a3344", border: C.blue },
      { label: "Metaplasia", sub: "Squamous \u2192 columnar", color: "2a2a1a", border: C.yellow },
      { label: "Barrett's", sub: "Precancerous", color: "2a1a3a", border: C.purple },
      { label: "Esophageal\nAdenocarcinoma", color: "3a1a1a", border: C.red },
    ],
    callout: "Nursing action: Barrett's patients need surveillance endoscopy to monitor for progression to cancer.",
  });

  // 23 - Quiz: Barrett's
  quizSlide(pptx, {
    question: "A biopsy from a chronic GERD patient shows columnar cells in the esophagus. This is:",
    options: [
      { text: "A. Normal healing from acid damage", correct: false },
      { text: "B. Barrett's esophagus \u2014 precancerous metaplasia", correct: true },
      { text: "C. Esophageal cancer already present", correct: false },
      { text: "D. An incidental finding with no clinical significance", correct: false },
    ],
    explanation: "Squamous \u2192 columnar metaplasia is Barrett's. It increases risk of esophageal adenocarcinoma and requires surveillance endoscopy.",
  });

  // 24 - Section: PUD
  sectionSlide(pptx, { num: "Section D", title: "Peptic Ulcer *Disease*", subtitle: "When the shield fails and acid goes DOWN" });

  // 25 - Anchor: PUD Core
  anchorSlide(pptx, {
    tag: "Core Concept",
    title: "The *red:Shield* (mucosa) fails. Acid goes *red:DOWN.*",
    subtitle: "The mucosal lining protects the stomach wall from its own acid. When that shield breaks down, acid erodes downward into the tissue \u2014 creating an ulcer.",
  });

  // 26 - Anchor: Same acid
  anchorSlide(pptx, {
    tag: "Connection",
    title: "Same acid. *Different direction.*",
    subtitle: "GERD = gate fails, acid goes UP into esophagus. PUD = shield fails, acid goes DOWN into stomach wall. Know which defense broke.",
  });

  // 27 - Narrative: PUD Causes
  narrativeSlide(pptx, {
    label: "PUD", title: "Top 3 *Causes*",
    bullets: [
      "H. pylori (#1 cause) \u2014 communicable bacterium (oral-oral / fecal-oral). Produces urease \u2192 ammonia \u2192 destroys the mucosal shield.",
      "NSAIDs (#2 cause) \u2014 block COX-1 enzyme \u2192 no prostaglandins \u2192 mucosal shield thins. Think chronic ibuprofen/naproxen use.",
      "Stress ulcers \u2014 critically ill patients, can develop within 24 hrs. Cushing's (brain injury) and Curling's (burn injury) ulcers.",
    ],
  });

  // 28 - Narrative: PUD Risk Factors
  narrativeSlide(pptx, {
    label: "PUD", title: "Additional *Risk Factors*",
    bullets: [
      "Male sex \u2014 higher incidence",
      "Older age",
      "Alcohol \u2014 irritates mucosa directly",
      "Smoking \u2014 impairs mucosal blood flow",
      "Steroids \u2014 weaken mucosal defense",
    ],
  });

  // 29 - Narrative: PUD Treatment
  narrativeSlide(pptx, {
    label: "PUD", title: "*Treatment*",
    cols: [
      [
        "H. pylori \u2192 Triple therapy: PPI + 2 antibiotics. Must complete full course.",
        "NSAID-caused \u2192 Stop the NSAID. If needed, add a PPI for protection.",
      ],
      [
        "Diagnosis: EGD (endoscopy) + H. pylori testing",
        "H. pylori tests: Breath test (urea) or stool antigen",
      ],
    ],
  });

  // 30 - Quiz: PUD
  quizSlide(pptx, {
    question: "A patient takes ibuprofen 800mg TID for 18 months. What is the mechanism of ulcer formation?",
    options: [
      { text: "A. Ibuprofen directly burns the stomach lining with acid", correct: false },
      { text: "B. Ibuprofen increases HCl production", correct: false },
      { text: "C. NSAIDs block COX-1, reducing prostaglandins that maintain the mucosal shield", correct: true },
      { text: "D. Ibuprofen introduces H. pylori into the stomach", correct: false },
    ],
    explanation: "NSAIDs inhibit COX-1 \u2192 decreased prostaglandins \u2192 thinner mucosal shield \u2192 normal acid erodes the unprotected wall.",
  });

  // 31 - Section: PUD Complications
  sectionSlide(pptx, { num: "Complications", title: "When Ulcers *Get Worse*", subtitle: "Bleeding, perforation, and peritonitis" });

  // 32 - Narrative: Track the Blood
  narrativeSlide(pptx, {
    label: "PUD Complications", title: "Track the *red:Blood* Anatomically",
    bullets: [
      "\u25B2 STOMACH (Origin): Hematemesis \u2014 bright red = active bleed; Coffee grounds = old/slow bleed",
      "\u25BC INTESTINES (Transit): Melena \u2014 black, tarry, foul-smelling stool. Blood digested during transit.",
      "\u2B24 RECTUM (Exit): Hematochezia \u2014 bright red rectal bleeding. Massive upper bleed OR lower GI source.",
    ],
  });

  // 33 - Anchor: Perforation
  anchorSlide(pptx, {
    tag: "Emergency", tagColor: C.red,
    title: "Perforation = *red:Surgical Emergency*",
    subtitle: "When the ulcer erodes through ALL layers of the stomach wall, acid and bacteria spill into the sterile peritoneal cavity \u2192 peritonitis.",
  });

  // 34 - Narrative: Peritonitis Signs
  narrativeSlide(pptx, {
    label: "PUD Complications", title: "Signs of *red:Peritonitis*",
    bullets: [
      "Rigid, board-like abdomen \u2014 involuntary guarding, rock-hard on palpation",
      "Rebound tenderness \u2014 pain worsens when you release pressure",
      "Fever \u2014 infection in the peritoneal cavity",
      "Tachycardia \u2014 the body is in crisis",
    ],
    callout: "This is a surgical emergency. Acid + bacteria in a sterile space = rapid sepsis. Do not delay.",
    calloutType: "danger",
  });

  // 35 - Flow: Erosion Pathway
  flowSlide(pptx, {
    label: "PUD Complications", title: "The *red:Erosion Pathway*",
    steps: [
      { label: "Pain", sub: "Ulcer forming" },
      { label: "Bleeding", sub: "Hematemesis", color: "2a2a1a", border: C.yellow },
      { label: "Perforation", sub: "Through all layers", color: "3a1a1a", border: C.red },
      { label: "Peritonitis", sub: "Surgical emergency", color: "3a1a1a", border: C.red },
      { label: "Death", sub: "If untreated", color: "2a0a0a", border: "991b1b" },
    ],
  });

  // 36 - Quiz: PUD Complications
  quizSlide(pptx, {
    question: "A patient with PUD suddenly develops a rigid, board-like abdomen with rebound tenderness and fever. What happened?",
    options: [
      { text: "A. The ulcer is bleeding more heavily", correct: false },
      { text: "B. The patient is having a GERD flare", correct: false },
      { text: "C. Perforation \u2192 peritonitis (surgical emergency)", correct: true },
      { text: "D. Bowel obstruction from scar tissue", correct: false },
    ],
    explanation: "Rigid abdomen + rebound tenderness + fever = peritonitis from perforation. Surgical emergency.",
  });

  // 37 - Compare: GERD vs PUD
  compareSlide(pptx, {
    title: "*GERD* vs *red:PUD*",
    leftTitle: "GERD \u2014 Gate Fails",
    leftItems: [
      "Direction: Acid goes UP",
      "Defense broken: LES (gate)",
      "Key symptom: Heartburn (substernal)",
      "Complication: Barrett's \u2192 cancer risk",
    ],
    rightTitle: "PUD \u2014 Shield Fails",
    rightItems: [
      "Direction: Acid goes DOWN",
      "Defense broken: Mucosal lining (shield)",
      "Key symptom: Epigastric pain",
      "Complication: Bleeding \u2192 perforation \u2192 peritonitis",
    ],
    leftColor: C.blue, rightColor: C.red,
  });

  // 38 - Section: Cases
  sectionSlide(pptx, { num: "Clinical Application", title: "Case *Studies*", subtitle: "Put it all together" });

  // 39 - Case 1: Maria
  caseSlide(pptx, {
    label: "Clinical Case 1",
    scenario: "Maria, 54 years old. History of chronic GERD, obese, smoker. She's been on PPIs for years but hasn't changed her lifestyle. An EGD with biopsy shows columnar cells in the esophagus.",
    question: "What does this biopsy result mean?",
    options: [
      { text: "A. Her GERD has resolved and the esophagus healed", correct: false },
      { text: "B. Barrett's esophagus \u2014 precancerous change requiring surveillance", correct: true },
      { text: "C. Esophageal cancer \u2014 needs immediate surgery", correct: false },
      { text: "D. Normal age-related change in the esophagus", correct: false },
    ],
    explanation: "Chronic acid exposure caused metaplasia (squamous \u2192 columnar). This is Barrett's \u2014 an adaptation, NOT healing. Precancerous.",
  });

  // 40 - Case 2: James Part 1
  caseSlide(pptx, {
    label: "Clinical Case 2",
    scenario: "James, 62 years old. Has been taking ibuprofen 800mg TID for 18 months for chronic knee pain. He presents to the ED with coffee-ground emesis.",
    question: "What's happening right now?",
    options: [
      { text: "A. Acute GERD exacerbation", correct: false },
      { text: "B. Peptic ulcer bleeding (NSAID-induced) with hematemesis", correct: true },
      { text: "C. Food poisoning", correct: false },
      { text: "D. Barrett's esophagus", correct: false },
    ],
    explanation: "18 months of high-dose ibuprofen blocked COX-1 \u2192 depleted prostaglandins \u2192 thinned mucosal shield. Coffee grounds = digested blood.",
  });

  // 41 - Case 2: James Part 2
  caseSlide(pptx, {
    label: "Clinical Case 2 (continued)",
    scenario: "Four hours later, James develops a sudden rigid, board-like abdomen with rebound tenderness and a fever of 102.4\u00b0F. Heart rate is 118 bpm.",
    question: "What complication has occurred? What is the priority?",
    options: [
      { text: "A. The ulcer is bleeding more \u2014 increase IV fluids", correct: false },
      { text: "B. Bowel obstruction \u2014 insert NG tube", correct: false },
      { text: "C. Perforation \u2192 peritonitis \u2014 surgical emergency", correct: true },
      { text: "D. Pancreatitis \u2014 check lipase", correct: false },
    ],
    explanation: "Bleeding ulcer eroded through ALL layers (perforation). Acid + bacteria leaked into peritoneal cavity = peritonitis. SURGICAL EMERGENCY.",
  });

  // 42 - Quiz: Synthesis
  quizSlide(pptx, {
    label: "Synthesis Check",
    question: "Patient A has substernal burning worse when lying down. Patient B has epigastric pain that improves with eating. Match them.",
    options: [
      { text: "A. Patient A = GERD, Patient B = PUD", correct: true },
      { text: "B. Patient A = PUD, Patient B = GERD", correct: false },
      { text: "C. Both patients have GERD", correct: false },
      { text: "D. Both patients have PUD", correct: false },
    ],
    explanation: "Substernal burning worse lying down = GERD (acid UP). Epigastric pain improved by eating = PUD (food buffers acid on exposed ulcer).",
  });

  // 43 - Flow: Big Picture Summary
  const sumSlide = pptx.addSlide();
  sumSlide.background = { color: C.bg };
  sumSlide.addText("SUMMARY", {
    x: 0.5, y: 0.3, w: 9, h: 0.4,
    fontSize: 10, fontFace: "Segoe UI", color: C.blue,
    align: "center", bold: true, letterSpacing: 2,
  });
  const sumTitle = parseEmphasis("The *Big Picture*");
  sumSlide.addText(sumTitle, {
    x: 0.5, y: 0.7, w: 9, h: 0.6,
    fontSize: 20, fontFace: "Segoe UI", color: C.text,
    bold: true, align: "center",
  });
  // Row 1: GERD pathway
  const row1Steps = ["LES (Gate) Fails", "GERD", "Barrett's", "Cancer Risk"];
  const row1Colors = [C.blue, null, C.yellow, C.red];
  row1Steps.forEach((s, i) => {
    const x = 0.8 + i * 2.3;
    slide_addFlowBox(sumSlide, x, 1.6, 1.8, 0.7, s, row1Colors[i]);
    if (i < row1Steps.length - 1) sumSlide.addText("\u2192", { x: x + 1.8, y: 1.6, w: 0.5, h: 0.7, fontSize: 16, color: C.blue, align: "center", valign: "middle" });
  });
  // Row 2: PUD pathway
  const row2Steps = ["Shield (Mucosa) Fails", "PUD", "Bleeding", "Perforation \u2192 Peritonitis"];
  const row2Colors = [C.blue, null, C.yellow, C.red];
  row2Steps.forEach((s, i) => {
    const x = 0.8 + i * 2.3;
    slide_addFlowBox(sumSlide, x, 2.7, 1.8, 0.7, s, row2Colors[i]);
    if (i < row2Steps.length - 1) sumSlide.addText("\u2192", { x: x + 1.8, y: 2.7, w: 0.5, h: 0.7, fontSize: 16, color: C.blue, align: "center", valign: "middle" });
  });
  sumSlide.addText("Same acid. Know which defense broke.", {
    x: 1.5, y: 3.8, w: 7, h: 0.5,
    fontSize: 16, fontFace: "Segoe UI", color: C.blue,
    bold: true, align: "center",
  });

  // 44 - End
  titleSlide(pptx, {
    topLabel: "End of Section 1",
    title: "Chapter 9: *Upper GI* Review Complete",
    subtitle: "Gate fails \u2192 acid UP \u2192 GERD \u2192 Barrett's. Shield fails \u2192 acid DOWN \u2192 PUD \u2192 perforation. You've got this.",
    meta: "Lindsay Wilson & Claude Code | Supplemental Instructor Review",
  });

  return pptx;
}

function slide_addFlowBox(slide, x, y, w, h, text, accentColor) {
  const bg = accentColor ? darken(accentColor) : C.card;
  const border = accentColor || "475569";
  slide.addShape("roundRect", {
    x, y, w, h, fill: { color: bg }, line: { color: border, width: 1 }, rectRadius: 0.08,
  });
  slide.addText(text, {
    x, y, w, h, fontSize: 10, fontFace: "Segoe UI", color: C.text,
    bold: true, align: "center", valign: "middle", lineSpacingMultiple: 1.2,
  });
}

function darken(hex) {
  // Return a dark tinted version for flow box backgrounds
  const map = {
    [C.blue]: "1a3344",
    [C.yellow]: "2a2a1a",
    [C.red]: "3a1a1a",
    [C.green]: "1a3a2a",
    [C.purple]: "2a1a3a",
    [C.teal]: "1a3a3a",
    [C.orange]: "3a2a1a",
  };
  return map[hex] || C.card;
}


// ════════════════════════════════════════════════════════════════════
//  DECK 2: LIVER  (30 slides)
// ════════════════════════════════════════════════════════════════════
function buildLiver() {
  const pptx = makeDeck();
  pptx.title = "GI Pathophysiology Review \u2014 Section 2: Hepatobiliary, Hepatitis, Cirrhosis";
  pptx.author = "Lindsay Wilson & Claude Code";

  // 1 - Title
  titleSlide(pptx, {
    topLabel: "Chapter 9 \u2014 Supplemental Instructor Review",
    title: "GI Pathophysiology *Section 2*",
    subtitle: "Hepatobiliary System \u2022 Hepatitis \u2022 Cirrhosis",
    meta: "Lindsay Wilson & Claude Code",
  });

  // 2 - Section: Hepatobiliary
  sectionSlide(pptx, { num: "I", title: "*Hepatobiliary System*", subtitle: "The liver, bile, gallbladder & pancreas" });

  // 3 - Anchor: The Liver
  anchorSlide(pptx, {
    tag: "Hepatobiliary System",
    title: "The liver does *everything.*",
    subtitle: "Largest internal organ. Highly vascular. CAN regenerate.\nUnique dual blood supply: hepatic artery (O\u2082) + portal vein (nutrients from GI).",
  });

  // 4 - Narrative: Liver Functions A
  narrativeSlide(pptx, {
    label: "Liver Functions", title: "What the Liver Does \u2014 *Part 1*",
    bullets: [
      "Detoxifies: metabolizes drugs, toxins, alcohol",
      "Synthesizes: albumin, clotting factors, glucose, proteins, cholesterol",
      "Stores: glycogen, fats, nutrients \u2014 releases when needed",
      "Makes bile \u2192 emulsifies fat for absorption",
    ],
    callout: "Think of the liver as a factory, warehouse, and recycling center all in one.",
  });

  // 5 - Narrative: Liver Functions B
  narrativeSlide(pptx, {
    label: "Liver Functions", title: "What the Liver Does \u2014 *Part 2*",
    bullets: [
      "Converts ammonia (NH\u2083) \u2192 urea for kidney excretion",
      "Breaks down hormones (estrogen, testosterone)",
      "Removes old RBCs \u2014 recycles iron & proteins",
      "Maintains blood volume via albumin (oncotic pressure holds fluid in vessels)",
    ],
  });

  // 6 - Narrative: When Liver Fails
  narrativeSlide(pptx, {
    label: "When the Liver Fails", title: "Map Each Failure to Its *red:Symptom*",
    bullets: [
      "Can't clear drugs \u2192 TOXICITY",
      "Can't make albumin \u2192 EDEMA, ASCITES",
      "Can't make clotting factors \u2192 BLEEDING, BRUISING",
      "Can't clear bilirubin \u2192 JAUNDICE, PRURITUS",
      "Can't convert ammonia \u2192 HEPATIC ENCEPHALOPATHY",
      "Can't break down estrogen \u2192 males: GYNECOMASTIA, HAIR LOSS",
    ],
  });

  // 7 - Quiz: Liver Functions
  quizSlide(pptx, {
    question: "A patient has low albumin levels. What symptom would you expect?",
    options: [
      { text: "A. Jaundice", correct: false },
      { text: "B. Edema / ascites", correct: true },
      { text: "C. Hepatic encephalopathy", correct: false },
      { text: "D. Gynecomastia", correct: false },
    ],
    explanation: "Albumin maintains oncotic pressure \u2014 it holds fluid inside blood vessels. Low albumin = fluid leaks out = edema & ascites.",
  });

  // 8 - Narrative: Bile & Gallbladder
  narrativeSlide(pptx, {
    label: "Bile & Gallbladder", title: "Bile: Made by Liver, Stored in *Gallbladder*",
    bullets: [
      "Bile released into duodenum when fat is present",
      "Emulsifies fat \u2192 allows absorption of fat + fat-soluble vitamins A, D, E, K",
      "No bile = steatorrhea (floating, greasy, foul stool) + ADEK deficiency",
      "Vitamin K deficiency = no clotting (most dangerous)",
    ],
    callout: "No gallbladder? Bile still flows continuously \u2014 but patient can't handle large fatty meals.",
    calloutType: "warn",
  });

  // 9 - Narrative: Gallbladder Pearls
  narrativeSlide(pptx, {
    label: "Bile & Gallbladder", title: "Gallbladder *Clinical Pearls*",
    bullets: [
      "Gallbladder sits under the liver \u2014 NOT normally palpable",
      "Gallbladder pain is referred pain between the shoulders",
      "Ducts from gallbladder + pancreas enter duodenum side by side",
    ],
    callout: "Gallstones \u2192 block bile duct \u2192 inflame pancreatic duct \u2192 enzymes auto-digest pancreas \u2192 PANCREATITIS",
    calloutType: "danger",
  });

  // 10 - Narrative: Pancreas
  narrativeSlide(pptx, {
    label: "Pancreas", title: "*Exocrine* Pancreas",
    bullets: [
      "Digestive enzymes \u2014 break down carbs, proteins, fats",
      "Bicarbonate (HCO\u2083\u207b) \u2014 neutralizes acidic chyme from stomach",
      "Gallstones can block the shared duct \u2192 pancreatic enzymes activate inside the pancreas \u2192 auto-digestion = pancreatitis",
    ],
  });

  // 11 - Narrative: Newborns & Vit K
  narrativeSlide(pptx, {
    label: "Nursing Pearl", title: "Newborns & *Vitamin K*",
    bullets: [
      "Newborn gut is sterile \u2014 no bacteria to make Vitamin K",
      "Without Vit K, minor injury = MAJOR bleed",
      "Vit K injection at birth \u2014 standard of care",
      "Takes ~3 months for gut bacteria to colonize and produce Vit K",
    ],
  });

  // 12 - Quiz: Biliary Obstruction
  quizSlide(pptx, {
    question: "A gallstone blocks the bile duct. Which vitamin deficiency is the MOST dangerous?",
    options: [
      { text: "A. Vitamin A \u2014 vision problems", correct: false },
      { text: "B. Vitamin D \u2014 bone weakness", correct: false },
      { text: "C. Vitamin E \u2014 nerve damage", correct: false },
      { text: "D. Vitamin K \u2014 bleeding/no clotting", correct: true },
    ],
    explanation: "No bile = no fat absorption = no ADEK. Vitamin K is the most immediately dangerous because it's needed for clotting factors.",
  });

  // 13 - Section: Hepatitis
  sectionSlide(pptx, { num: "II", title: "*yellow:Hepatitis*", subtitle: "Inflammation of the liver \u2014 viral & non-viral causes" });

  // 14 - Anchor: Hepatitis Path
  anchorSlide(pptx, {
    tag: "Hepatitis", tagColor: C.yellow,
    title: "Hepatitis *yellow:destroys liver cells.*",
    subtitle: "Necrosis \u2192 scarring \u2192 cirrhosis \u2192 cancer.\nThe endpoint is always the same. The cause determines the timeline.",
    titleColor: C.yellow,
  });

  // 15 - Compare: Vowels vs Consonants
  compareSlide(pptx, {
    title: "Hepatitis Types: *Vowels* vs *yellow:Consonants*",
    leftTitle: "Vowels: A & E",
    leftItems: [
      "Oral-fecal route (contaminated food/water)",
      "Self-limiting \u2014 no chronic form",
      "Hep A: vaccine (2-dose)",
      "Hep E: no vaccine, rare in US",
    ],
    rightTitle: "Consonants: B, C, D",
    rightItems: [
      "Blood & body fluids (HCW at greater risk)",
      "Hep B: vaccine (3-dose), CAN become chronic",
      "Hep C: NO vaccine, most likely \u2192 chronic \u2192 cirrhosis",
      "Hep D: only co-infects with B",
    ],
    leftColor: C.blue, rightColor: C.yellow,
  });

  // 16 - Narrative: Clinical Course
  narrativeSlide(pptx, {
    label: "Hepatitis", title: "*Clinical Course*",
    bullets: [
      "Prodromal: fatigue, anorexia, nausea, RUQ discomfort (may be asymptomatic)",
      "Icteric: jaundice, dark urine, clay-colored stools, pruritus, elevated AST/ALT",
      "Recovery: weeks to months. A & E resolve. B & C may become chronic.",
    ],
    callout: "Elevated AST/ALT = liver cell damage. Elevated bilirubin = liver can't do its job.",
  });

  // 17 - Narrative: Non-Viral
  narrativeSlide(pptx, {
    label: "Hepatitis", title: "*Non-Viral* Hepatitis",
    bullets: [
      "Alcohol \u2014 most common non-viral cause",
      "Tylenol (acetaminophen) \u2014 toxic to liver in high doses",
      "Seizure meds, antibiotics \u2014 drug-induced",
      "Autoimmune hepatitis",
    ],
    callout: "Non-viral hepatitis is NOT contagious \u2014 but the liver damage is the same.",
    calloutType: "danger",
  });

  // 18 - Narrative: Treatment & Prevention
  narrativeSlide(pptx, {
    label: "Hepatitis Treatment & Prevention", title: "Keep It *Simple*",
    bullets: [
      "Vaccines: Hep A (2-dose) and Hep B (3-dose)",
      "Hygiene/sanitation for A & E",
      "Universal precautions, safe sex, sterile needles for B, C, D",
      "Supportive care \u2014 rest, hydration, nutrition",
      "No Tylenol. No alcohol.",
    ],
  });

  // 19 - Quiz: Hepatitis
  quizSlide(pptx, {
    question: "A traveler returns from Central America with jaundice, fatigue, and dark urine. No IV drug history. Most likely?",
    options: [
      { text: "A. Hepatitis A \u2014 oral-fecal, travel exposure", correct: true },
      { text: "B. Hepatitis B \u2014 blood/body fluid transmission", correct: false },
      { text: "C. Hepatitis C \u2014 blood transmission, no vaccine", correct: false },
      { text: "D. Hepatitis D \u2014 co-infection with B", correct: false },
    ],
    explanation: "Travel + contaminated food/water + no IV drug history = oral-fecal route = Hep A (vowel!). Self-limiting, vaccine-preventable.",
  });

  // 20 - Section: Cirrhosis
  sectionSlide(pptx, { num: "III", title: "*red:Cirrhosis*", subtitle: "When the liver can't recover \u2014 irreversible failure" });

  // 21 - Flow: Cirrhosis Pathway
  flowSlide(pptx, {
    label: "Cirrhosis Pathophysiology", title: "The *red:Cirrhosis Pathway*",
    steps: [
      { label: "Chronic hepatitis\nor alcohol" },
      { label: "Repeated\ninflammation", color: "2a2a1a", border: C.yellow },
      { label: "Irreversible\nfibrosis + scarring", color: "2a2a1a", border: C.yellow },
      { label: "Liver shrinks\n& hardens", color: "3a1a1a", border: C.red },
      { label: "ALL functions\nfail", color: "3a1a1a", border: C.red },
    ],
    callout: "Cirrhosis is IRREVERSIBLE. The only cure is liver transplant.",
  });

  // 22 - Anchor: Three Collapses
  anchorSlide(pptx, {
    tag: "Cirrhosis", tagColor: C.red,
    title: "Cirrhosis = *red:three simultaneous failures*",
    subtitle: "Bilirubin rises. Albumin drops. Ammonia accumulates.\nLearn these three and you can explain every cirrhosis symptom.",
    titleColor: C.red,
  });

  // 23 - Narrative: Collapse 1 - Bilirubin
  narrativeSlide(pptx, {
    label: "Collapse 1", title: "*yellow:\u2191 Bilirubin:* Can't Conjugate or Excrete",
    bullets: [
      "Jaundice \u2014 yellow skin and sclera",
      "Pruritus \u2014 bile salts deposit in skin (intense itching)",
      "Dark urine \u2014 excess bilirubin excreted by kidneys",
      "Clay-colored stools \u2014 no bilirubin reaches the gut",
    ],
  });

  // 24 - Narrative: Collapse 2 - Albumin
  narrativeSlide(pptx, {
    label: "Collapse 2", title: "*\u2193 Albumin* + Portal Hypertension",
    bullets: [
      "Low albumin = low oncotic pressure \u2192 fluid leaks out",
      "Fibrosis blocks portal vein \u2192 portal hypertension",
      "Ascites \u2014 fluid fills abdomen (can push diaphragm \u2192 shallow breathing)",
      "Varices \u2014 esophageal varices, hemorrhoids (blood reroutes around liver)",
      "Peripheral edema",
    ],
    callout: "Esophageal varices can RUPTURE \u2014 life-threatening GI bleed.",
    calloutType: "danger",
  });

  // 25 - Narrative: Collapse 3 - Ammonia
  narrativeSlide(pptx, {
    label: "Collapse 3", title: "*red:\u2191 Ammonia:* Can't Convert NH\u2083 \u2192 Urea",
    bullets: [
      "Ammonia accumulates in blood \u2192 crosses blood-brain barrier",
      "Hepatic encephalopathy: confusion \u2192 lethargy \u2192 unresponsive",
      "Asterixis \u2014 \"flapping tremor\" of the hands (classic sign)",
    ],
    callout: "Test for asterixis: ask patient to extend arms & dorsiflex wrists. Watch for involuntary flapping.",
  });

  // 26 - Narrative: Other Failures
  narrativeSlide(pptx, {
    label: "Cirrhosis", title: "Other Cirrhosis *Failures*",
    bullets: [
      "Hormone breakdown fails \u2192 males: gynecomastia, hair loss; females: masculine features",
      "Clotting fails \u2192 bruising, bleeding, elevated INR",
      "Dilated abdominal veins (caput medusae)",
      "Low blood sugar \u2014 liver can't release stored glucose",
      "Delayed drug clearance \u2014 medications build up",
    ],
  });

  // 27 - Narrative: Cirrhosis Treatment
  narrativeSlide(pptx, {
    label: "Cirrhosis Treatment", title: "*green:Nursing Priorities*",
    bullets: [
      "Encephalopathy: lactulose (traps NH\u2083 in gut), limit protein",
      "Ascites: diuretics, sodium restriction, paracentesis (drain fluid)",
      "Varices: monitor for bleeding (can be fatal)",
      "No Tylenol. No alcohol. Ever.",
      "Liver transplant is the only cure (liver CAN regenerate \u2014 living donor possible)",
    ],
  });

  // 28 - Quiz: Cirrhosis Mapping
  quizSlide(pptx, {
    question: "A cirrhosis patient has confusion and asterixis. Which liver failure is responsible?",
    options: [
      { text: "A. \u2191 Bilirubin \u2014 can't conjugate/excrete", correct: false },
      { text: "B. \u2193 Albumin \u2014 low oncotic pressure", correct: false },
      { text: "C. \u2191 Ammonia \u2014 can't convert NH\u2083 to urea", correct: true },
      { text: "D. \u2193 Clotting factors \u2014 bleeding risk", correct: false },
    ],
    explanation: "Confusion + asterixis = hepatic encephalopathy. Ammonia crosses the blood-brain barrier. Treat with lactulose.",
  });

  // 29 - Case: Robert
  caseRevealSlide(pptx, {
    label: "Clinical Case",
    scenario: "Robert, 58 y/o male. History of chronic Hep C. Presents with distended abdomen, yellow sclera, confusion, and easy bruising. Labs: low albumin, high bilirubin, high ammonia, elevated INR.\n\nMap each finding to the failed liver job.",
    answerBullets: [
      "Distended abdomen (ascites) \u2192 low albumin + portal HTN (fluid leaks out)",
      "Yellow sclera (jaundice) \u2192 high bilirubin (can't conjugate/excrete)",
      "Confusion \u2192 high ammonia (crosses BBB \u2192 encephalopathy)",
      "Easy bruising + elevated INR \u2192 can't make clotting factors",
      "Low albumin \u2192 liver can't synthesize proteins",
    ],
    callout: "Every symptom maps to a specific liver job that failed. This is the framework \u2014 learn the jobs, and you can explain any cirrhosis presentation.",
  });

  // 30 - Summary
  anchorSlide(pptx, {
    tag: "Summary",
    title: "Three Big *Takeaways*",
    subtitle: "1. The liver does everything. When it fails, map each symptom to the specific job.\n2. Hepatitis: vowels (A, E) = oral-fecal. Consonants (B, C, D) = blood & body fluids.\n3. Cirrhosis = three collapses: \u2191 bilirubin, \u2193 albumin/portal HTN, \u2191 ammonia.",
  });

  return pptx;
}


// ════════════════════════════════════════════════════════════════════
//  DECK 3: LOWER GI  (24 slides)
// ════════════════════════════════════════════════════════════════════
function buildLowerGI() {
  const pptx = makeDeck();
  pptx.title = "Chapter 9 Section 3: Lower GI Pathophysiology Review";
  pptx.author = "Lindsay Wilson & Claude Code";

  // 1 - Title
  titleSlide(pptx, {
    topLabel: "Supplemental Instructor Review",
    title: "*Lower GI* Pathophysiology",
    subtitle: "Chapter 9 \u00b7 Section 3 \u2014 Large Intestine, Diarrhea, Constipation & Diverticular Disease",
    meta: "Lindsay Wilson & Claude Code",
  });

  // 2 - Section: Anatomy
  sectionSlide(pptx, { title: "Lower GI *Anatomy*", subtitle: "Where water gets absorbed and waste takes shape" });

  // 3 - Narrative: Large Bowel Path
  narrativeSlide(pptx, {
    title: "The Large *Bowel Path*",
    bullets: [
      "Ileocecal valve = gateway from small intestine \u2192 large intestine. Waste is very liquid here.",
      "Ascending colon (right side) \u2014 liquid stool",
      "Hepatic flexure \u2192 Transverse colon \u2014 toothpaste consistency",
      "Splenic flexure \u2192 Descending colon (left side) \u2014 becoming solid",
      "Sigmoid (S-curve) \u2192 Rectum \u2192 Anus",
      "Primary job: absorb water. Normal transit = 36\u201348 hrs. Brown color from bile pigment.",
    ],
  });

  // 4 - Narrative: Clinical Landmarks
  narrativeSlide(pptx, {
    title: "Clinical *Landmarks* to Know",
    bullets: [
      "Appendix attached to cecum \u2014 lower RIGHT quadrant",
      "Pain lower RIGHT = could be appendix or small bowel (ileocecal area)",
      "Pain lower LEFT = large intestine (sigmoid/descending)",
      "Can live without any part of large bowel (ostomy) \u2014 but liquid stool + need more water",
      "Need minimum 12 inches of small bowel to survive \u2014 otherwise IV nutrition (TPN)",
      "Gas = methane, a normal by-product of digestion",
    ],
  });

  // 5 - Quiz: Anatomy
  quizSlide(pptx, {
    label: "Quick Check", question: "A patient has pain in the lower LEFT quadrant. Which part of the GI tract is most likely involved?",
    options: [
      { text: "A. Appendix", correct: false },
      { text: "B. Ascending colon", correct: false },
      { text: "C. Sigmoid / Descending colon", correct: true },
      { text: "D. Ileocecal valve", correct: false },
    ],
    explanation: "Lower LEFT quadrant pain maps to the sigmoid and descending colon. Appendix and ileocecal valve are lower RIGHT.",
  });

  // 6 - Section: Diarrhea
  sectionSlide(pptx, { title: "*Diarrhea*", subtitle: "When transit is too fast, water can't be absorbed" });

  // 7 - Anchor: Diarrhea
  anchorSlide(pptx, {
    title: "*yellow:Too Fast = Water Not Absorbed*",
    subtitle: "Content moves through the large bowel too quickly for water reabsorption. Result: watery stool, electrolyte loss, and dehydration.",
    titleColor: C.yellow,
  });

  // 8 - Narrative: Diarrhea Causes
  narrativeSlide(pptx, {
    title: "Common Causes of *Diarrhea*",
    bullets: [
      "Viruses & bacteria \u2014 NOT influenza (flu is respiratory!)",
      "Certain foods: high fat + sugar move fast = \"dumping syndrome\"",
      "Excess sugar \u2192 hyperosmolar \u2192 pulls water into GI lumen \u2192 diarrhea",
      "Laxative overuse",
      "Inflammatory bowel disease \u2014 Crohn's (small bowel) vs UC (large bowel)",
    ],
  });

  // 9 - Narrative: What You Lose (KEY)
  narrativeSlide(pptx, {
    title: "*red:What You Lose* With Diarrhea",
    bullets: [
      "You lose: Water, K+ (potassium), HCO\u2083\u207b (bicarbonate)",
      "Result: Metabolic ACIDOSIS with LOW potassium",
      "EXCEPTION \u2014 Usually acidosis pairs with HIGH K+, but diarrhea = acidosis + LOW K+",
      "Low K+ \u2192 concerned about the heart (dysrhythmias)",
      "Young children + very old = earliest onset of dehydration",
    ],
  });

  // 10 - Narrative: Stool Colors
  narrativeSlide(pptx, {
    title: "Stool *Color Guide*",
    bullets: [
      "Bright Red (Frank Blood) \u2014 Lower GI bleed, rectum/sigmoid. Active bleeding.",
      "Maroon \u2014 Upper descending / transverse bleed. Blood has been in GI a while.",
      "Black / Tarry (Melena) \u2014 Upper GI (stomach/duodenum). Fully digested blood. Terrible odor.",
      "Clay / Pale \u2014 Liver problem, no bile pigment reaching stool.",
      "Occult (Hidden Blood) \u2014 Not visible, found by lab testing. Could indicate bowel cancer or slow bleed.",
    ],
  });

  // 11 - Quiz: Diarrhea Acid-Base
  quizSlide(pptx, {
    question: "A patient with chronic diarrhea has a pH of 7.29. What acid-base imbalance is present, and why?",
    options: [
      { text: "A. Metabolic alkalosis from K+ loss", correct: false },
      { text: "B. Metabolic acidosis from HCO\u2083\u207b loss", correct: true },
      { text: "C. Respiratory acidosis from hypoventilation", correct: false },
      { text: "D. Metabolic alkalosis from HCl loss", correct: false },
    ],
    explanation: "pH 7.29 is acidotic. Diarrhea flushes out bicarbonate (the body's base buffer). Remember: diarrhea = acidosis + low K+ (the exception).",
  });

  // 12 - Narrative: Diarrhea Treatment
  narrativeSlide(pptx, {
    title: "Diarrhea \u2014 *green:Treatment*",
    bullets: [
      "Find the cause \u2014 infection? medication? diet?",
      "Fasting from solid food initially; advance to bland diet",
      "High-electrolyte fluids (oral rehydration solutions)",
      "Antidiarrheals (OTC or Rx) as appropriate",
      "Monitor K+ and fluid balance closely",
      "Dietary fiber prevents diarrhea AND constipation (whole grains, oatmeal, fruit/veggie peels, beans, bran)",
    ],
  });

  // 13 - Section: Constipation
  sectionSlide(pptx, { title: "*Constipation*", subtitle: "When transit is too slow, too much water is absorbed" });

  // 14 - Anchor: Constipation
  anchorSlide(pptx, {
    title: "*Too Slow = Too Much Water Absorbed*",
    subtitle: "Stool sits in the colon too long. Water keeps getting pulled out. Result: hard, dry stool that's difficult to pass.",
  });

  // 15 - Narrative: Constipation Causes
  narrativeSlide(pptx, {
    title: "Constipation \u2014 *Causes*",
    bullets: [
      "Medications that slow peristalsis: opioids, iron, calcium channel blockers",
      "Sedentary lifestyle / ignoring urge to defecate",
      "Laxative overuse \u2192 bowel dependency",
      "Low fiber, low fluid intake",
      "Colon cancer can physically block transit",
      "Eating non-food items (pica) \u2192 constipation / obstruction",
    ],
  });

  // 16 - Narrative: Complications & Treatment
  narrativeSlide(pptx, {
    title: "*red:Complications* & *green:Treatment*",
    bullets: [
      "Fissures from straining (tears in anal tissue)",
      "Hemorrhoids \u2014 bulging veins that itch + bleed",
      "Bowel sounds: hypoactive (sluggish gut)",
    ],
    callout: "Treatment ladder: \u2191 Fiber, \u2191 Water, \u2191 Activity \u2192 Stool softeners \u2192 Laxatives \u2192 Enema \u2192 Digital removal (last resort)",
    calloutType: "green",
  });

  // 17 - Quiz: Diarrhea vs Constipation
  quizSlide(pptx, {
    question: "A post-op patient on opioid pain management reports no bowel movement for 4 days. Bowel sounds are hypoactive. Which intervention is MOST appropriate first?",
    options: [
      { text: "A. Administer an enema", correct: false },
      { text: "B. Increase fluids, fiber, and encourage ambulation", correct: true },
      { text: "C. Digital removal of stool", correct: false },
      { text: "D. Administer antidiarrheals", correct: false },
    ],
    explanation: "Opioids slow peristalsis. Start with least invasive: fluids, fiber, and movement. Enema and digital removal are later steps.",
  });

  // 18 - Section: Diverticular Disease
  sectionSlide(pptx, { title: "*Diverticular Disease*", subtitle: "Quiet pouches vs. angry pouches \u2014 know the difference" });

  // 19 - Compare: Diverticulosis vs Diverticulitis
  compareSlide(pptx, {
    title: "Diverticulosis *vs.* *red:Diverticulitis*",
    leftTitle: "Diverticulosis (Quiet)",
    leftItems: [
      "Pouches PRESENT but asymptomatic",
      "Common in adults > 60",
      "Usually an incidental finding",
      "Caused by low fiber + increased intraluminal pressure",
    ],
    rightTitle: "Diverticulitis (Inflamed)",
    rightItems: [
      "Pouches INFLAMED / INFECTED",
      "Feces trapped \u2192 rots \u2192 inflammation",
      "LLQ pain, fever, \u2191WBC, blood in stool",
      "Can PERFORATE \u2192 peritonitis (fatal) or hemorrhage \u2192 shock",
    ],
    leftColor: C.blue, rightColor: C.red,
  });

  // 20 - Flow: How Pouches Form
  flowSlide(pptx, {
    title: "How Diverticular *Pouches Form*",
    steps: [
      { label: "Low-fiber diet +\nchronic straining" },
      { label: "\u2191 Intraluminal\npressure" },
      { label: "Mucosa herniates\nthrough weak spots" },
      { label: "Feces trapped\nin pouch" },
      { label: "Inflammation\n& Infection", color: "3a1a1a", border: C.red },
    ],
  });

  // 21 - Narrative: What to Recognize
  narrativeSlide(pptx, {
    title: "Diverticulitis \u2014 *red:What to Recognize*",
    bullets: [
      "LLQ tenderness (sigmoid colon territory)",
      "Low-grade fever, \u2191 WBC",
      "Blood in stool, abdominal distension",
      "CT abdomen = gold standard for diagnosis",
      "NOT colonoscopy during acute episode \u2014 perforation risk! Scope AFTER resolution.",
    ],
  });

  // 22 - Narrative: Treatment
  narrativeSlide(pptx, {
    title: "Diverticulitis \u2014 *green:Treatment*",
    bullets: [
      "Acute: bowel rest (NPO), IV fluids, IV antibiotics \u2014 3\u20136 days, often hospitalized",
      "Prevention: high fiber, hydration, avoid prolonged sitting on toilet",
      "Recurrent: surgical removal of segment \u2192 possible ostomy",
      "EMERGENCY: Rigid abdomen + rebound tenderness + fever spike = perforation \u2192 surgical emergency",
    ],
  });

  // 23 - Case: Dorothy
  caseRevealSlide(pptx, {
    label: "Clinical Scenario",
    scenario: "Dorothy, 68 years old, presents to the ED with LLQ pain that began 2 days ago and has worsened. She has a low-grade fever of 38.8\u00b0C, WBC 14,200, and reports blood-tinged stool. CT abdomen reveals inflamed pouches in the sigmoid colon.\n\nWhat is the diagnosis? What is the key concern?",
    answerBullets: [
      "Diagnosis: Acute Diverticulitis \u2014 classic signs: LLQ pain, fever, elevated WBC, blood-tinged stool, CT-confirmed",
      "Key concern: Perforation \u2014 if pouches rupture, intestinal contents spill into peritoneal cavity \u2192 peritonitis",
      "Watch for: rigid abdomen, rebound tenderness, sudden fever spike, hemodynamic instability",
      "Expected management: NPO, IV fluids, IV antibiotics, close monitoring",
    ],
  });

  // 24 - Anchor: Final Summary
  anchorSlide(pptx, {
    tag: "Summary",
    title: "Lower GI \u2014 *The Big Picture*",
    subtitle: "\u2022 Large intestine's job = absorb water. Transit time is everything.\n\u2022 Too fast (diarrhea) = metabolic acidosis + low K+\n\u2022 Too slow (constipation) = hard stool, straining, fissures, hemorrhoids\n\u2022 Diverticulosis = quiet pouches. Diverticulitis = infected \u2192 perforation risk\n\u2022 Vomiting = metabolic alkalosis. Diarrhea = metabolic acidosis. Know the difference.",
  });

  return pptx;
}


// ════════════════════════════════════════════════════════════════════
//  MAIN — Generate all three
// ════════════════════════════════════════════════════════════════════
async function main() {
  const dir = __dirname;

  console.log("Generating Upper GI PowerPoint...");
  const upper = buildUpperGI();
  await upper.writeFile({ fileName: `${dir}/GI_UpperGI_Review.pptx` });
  console.log("  -> GI_UpperGI_Review.pptx");

  console.log("Generating Liver PowerPoint...");
  const liver = buildLiver();
  await liver.writeFile({ fileName: `${dir}/GI_Liver_Review.pptx` });
  console.log("  -> GI_Liver_Review.pptx");

  console.log("Generating Lower GI PowerPoint...");
  const lower = buildLowerGI();
  await lower.writeFile({ fileName: `${dir}/GI_LowerGI_Review.pptx` });
  console.log("  -> GI_LowerGI_Review.pptx");

  console.log("\nAll three PowerPoint files generated!");
}

main().catch(err => { console.error(err); process.exit(1); });
