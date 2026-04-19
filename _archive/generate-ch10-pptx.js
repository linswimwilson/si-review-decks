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

function darken(hex) {
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
    slide.addShape("roundRect", {
      x: 3.2, y: 1.27, w: 3.6, h: 0.5,
      fill: { color: C.bg },
      line: { color: tagColor || C.blue, width: 1 },
      rectRadius: 0.2,
    });
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
    const cColor = calloutType === "danger" ? C.red : calloutType === "warn" ? C.yellow : calloutType === "green" ? C.green : C.blue;
    slide.addShape("rect", {
      x: 0.6, y: callout && bullets && bullets.length > 4 ? 4.8 : 4.3,
      w: 8.5, h: 0.8,
      fill: { color: C.card },
      line: { color: cColor, width: 0 },
    });
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


// ════════════════════════════════════════════════════════════════════
//  DECK 1: DIABETES MELLITUS  (44 slides)
// ════════════════════════════════════════════════════════════════════
function buildDiabetes() {
  const pptx = makeDeck();
  pptx.title = "Chapter 10: Endocrine \u2014 Diabetes Mellitus Review";
  pptx.author = "Lindsay Wilson & Claude Code";

  // 1 - Title
  titleSlide(pptx, {
    topLabel: "Supplemental Instructor Review",
    title: "Endocrine \u2014 *Diabetes Mellitus*",
    subtitle: "Chapter 10 \u00b7 Section 1 \u2014 Pancreas, Insulin, Glucose, Type 1 vs Type 2, and Acute Complications",
    meta: "Lindsay Wilson & Claude Code",
  });

  // 2 - Section: The Pancreas
  sectionSlide(pptx, { title: "The *Pancreas*", subtitle: "Your body\u2019s blood sugar control center" });

  // 3 - Narrative: Two Jobs, One Organ
  narrativeSlide(pptx, {
    label: "Pancreas",
    title: "The Pancreas \u2014 *Two Jobs, One Organ*",
    bullets: [
      "Exocrine: digestive enzymes (amylase, lipase, HCO\u2083\u207b) \u2192 duodenum",
      "Endocrine: Islets of Langerhans regulate blood glucose",
      "Lies behind the stomach in the retroperitoneum",
      "Both exocrine and endocrine \u2014 but the endocrine side is our focus here",
    ],
  });

  // 4 - Narrative: Islets of Langerhans
  narrativeSlide(pptx, {
    label: "Pancreas",
    title: "Islets of Langerhans \u2014 *The Key Players*",
    bullets: [
      "Alpha cells \u2192 glucagon (when blood sugar FALLS)",
      "Beta cells \u2192 insulin (when blood sugar RISES) \u2014 these are the majority",
      "Delta cells \u2192 somatostatin (regulates insulin & glucagon)",
      "Epsilon cells \u2192 ghrelin (stimulates hunger)",
    ],
    callout: "Alpha = raises glucose. Beta = lowers glucose. Know the pair.",
  });

  // 5 - Anchor: Insulin = the KEY
  anchorSlide(pptx, {
    tag: "Core Concept",
    title: "Insulin = the *KEY* That Unlocks the Door",
    subtitle: "Without insulin, glucose stays locked in the bloodstream. Cells starve while blood sugar soars.",
  });

  // 6 - Narrative: What Insulin Does
  narrativeSlide(pptx, {
    label: "Insulin",
    title: "What *Insulin* Does",
    bullets: [
      "Anabolic (building up) hormone",
      "Required for glucose to enter liver, muscle, and adipose cells",
      "Lowers blood glucose by enabling glucose to enter cells",
      "Also transports K+, phosphate, and magnesium into cells",
      "Promotes protein synthesis and lipid storage",
    ],
    callout: "Insulin is NOT required for glucose uptake in the brain, RBCs, kidneys, or lens of the eye.",
    calloutType: "warn",
  });

  // 7 - Flow: Glucose-Insulin Feedback Loop
  flowSlide(pptx, {
    label: "Feedback Loop",
    title: "The *Glucose-Insulin* Feedback Loop",
    steps: [
      { label: "You eat" },
      { label: "Blood glucose\nrises" },
      { label: "Beta cells\nrelease insulin" },
      { label: "Glucose\nenters cells" },
      { label: "Blood glucose\nfalls" },
      { label: "Alpha cells\nrelease glucagon" },
      { label: "Liver releases\nstored glucose" },
    ],
  });

  // 8 - Quiz: Pancreatic Cell Types
  quizSlide(pptx, {
    question: "Which pancreatic cell type secretes insulin when blood glucose rises?",
    options: [
      { text: "A. Alpha cells", correct: false },
      { text: "B. Beta cells", correct: true },
      { text: "C. Delta cells", correct: false },
      { text: "D. Epsilon cells", correct: false },
    ],
    explanation: "Beta cells are the majority of islet cells and secrete insulin when glucose rises. Alpha cells secrete glucagon when glucose falls.",
  });

  // 9 - Anchor: Glucose = Sugar = Energy
  anchorSlide(pptx, {
    tag: "Key Concept",
    title: "*yellow:Glucose = Sugar = Energy*",
    subtitle: "Derived from carbohydrates, stored as glycogen in the liver. Simple sugars spike fast and crash. Complex carbs give slow, steady fuel.",
    titleColor: C.yellow,
  });

  // 10 - Section: Diabetes Mellitus
  sectionSlide(pptx, { title: "*Diabetes Mellitus*", subtitle: "When insulin fails, glucose has nowhere to go" });

  // 11 - Anchor: Diabetes Definition
  anchorSlide(pptx, {
    tag: "Definition", tagColor: C.red,
    title: "*red:Diabetes* = Hyperglycemia from Defective Insulin Production, Action, or Both",
    subtitle: "Impaired insulin \u2192 abnormal carbohydrate, protein, and fat metabolism. The glucose transportation system is broken.",
    titleColor: C.red,
  });

  // 12 - Narrative: The 3 Polys
  narrativeSlide(pptx, {
    label: "Classic DM Signs",
    title: "The *red:3 Polys* \u2014 Classic DM Signs",
    bullets: [
      "Polydipsia \u2014 excessive thirst (hyperosmolar blood triggers thirst center)",
      "Polyuria \u2014 excessive urination (glucose in urine pulls water via osmotic diuresis)",
      "Polyphagia \u2014 excessive hunger (cells are starving despite high blood glucose)",
    ],
    callout: "The paradox: blood is swimming in glucose, but cells can\u2019t access it. They send \u201cfeed me\u201d signals \u2192 you eat more \u2192 blood sugar goes higher.",
    calloutType: "warn",
  });

  // 13 - Narrative: Diagnostic Numbers
  narrativeSlide(pptx, {
    label: "Diagnostics",
    title: "*purple:Diagnostic Numbers* to Know",
    bullets: [
      "HbA1C \u2265 6.5% = diabetes (reflects 3-month average \u2014 better than a single glucose reading)",
      "Fasting glucose > 126 mg/dL",
      "Random glucose > 200 mg/dL",
      "Prediabetes: HbA1C 5.7\u20136.4%, fasting 100\u2013125 mg/dL",
      "Normal glucose goal: 70\u2013130 mg/dL",
    ],
    callout: "HbA1C = glucose attached to red blood cells. Shows the big picture. A single fingerstick only shows that moment in time.",
  });

  // 14 - Section: Type 1 Diabetes
  sectionSlide(pptx, { title: "Type 1 *Diabetes*", subtitle: "The immune system destroys the beta cells" });

  // 15 - Anchor: Type 1 Definition
  anchorSlide(pptx, {
    tag: "Type 1",
    title: "Type 1 = *Absolute Lack* of Insulin",
    subtitle: "Autoimmune destruction of pancreatic beta cells. Usually childhood onset, abrupt. Cannot be prevented.",
  });

  // 16 - Narrative: Type 1 Key Features
  narrativeSlide(pptx, {
    label: "Type 1 DM",
    title: "Type 1 DM \u2014 *Key Features*",
    bullets: [
      "Autoimmune: body attacks its own beta cells",
      "Probable trigger: viral or environmental in genetically susceptible individuals",
      "Usually strikes children and young adults (can occur at any age)",
      "Abrupt onset \u2014 often diagnosed after infection",
      "Patient is typically underweight (glucose lost in urine)",
      "Absolute insulin deficiency \u2192 MUST have exogenous insulin to survive",
    ],
  });

  // 17 - Flow: Type 1 Pathophysiology
  flowSlide(pptx, {
    label: "Type 1 DM",
    title: "Type 1 *Pathophysiology*",
    steps: [
      { label: "Autoimmune\ntrigger" },
      { label: "Beta cells\ndestroyed" },
      { label: "No insulin\nproduced" },
      { label: "Glucose can\u2019t\nenter cells" },
      { label: "Hyperglycemia +\nstarving cells", color: "3a1a1a", border: C.red },
    ],
  });

  // 18 - Narrative: Type 1 Treatment
  narrativeSlide(pptx, {
    label: "Type 1 Treatment",
    title: "Type 1 Treatment \u2014 *green:The Triad*",
    bullets: [
      "Insulin injection therapy (cannot take insulin orally \u2014 destroyed by digestion)",
      "Diet: complex carbs, protein, unsaturated fats; coordinate food with insulin timing",
      "Exercise: increases glucose uptake by muscles \u2192 lowers blood glucose",
      "Self-monitoring blood glucose",
      "Goal: glucose 70\u2013130 mg/dL",
    ],
    callout: "Food intake must be coordinated with exercise AND insulin administration. Mismatch = hypo or hyperglycemia.",
    calloutType: "warn",
  });

  // 19 - Quiz: Type 1 Presentation
  quizSlide(pptx, {
    question: "A 12-year-old is newly diagnosed with diabetes after a viral illness. Blood glucose is 340 mg/dL. Which type is most likely, and why?",
    options: [
      { text: "A. Type 2 \u2014 insulin resistance from obesity", correct: false },
      { text: "B. Type 1 \u2014 autoimmune beta cell destruction triggered by viral illness", correct: true },
      { text: "C. Gestational diabetes \u2014 pregnancy-related", correct: false },
      { text: "D. Prediabetes \u2014 blood sugar is only slightly elevated", correct: false },
    ],
    explanation: "Abrupt onset in a child after a viral illness is a classic Type 1 presentation. Glucose of 340 far exceeds prediabetes range.",
  });

  // 20 - Section: Type 2 Diabetes
  sectionSlide(pptx, { title: "Type 2 *Diabetes*", subtitle: "The cells stop listening to insulin" });

  // 21 - Anchor: Type 2 Definition
  anchorSlide(pptx, {
    tag: "Type 2", tagColor: C.yellow,
    title: "Type 2 = *yellow:Insulin Resistance*",
    subtitle: "The key doesn\u2019t fit the lock anymore. Cells resist insulin\u2019s signal. The pancreas overworks to compensate, then gradually fails. 90\u201395% of all diabetes cases.",
    titleColor: C.yellow,
  });

  // 22 - Narrative: Type 2 Key Features
  narrativeSlide(pptx, {
    label: "Type 2 DM",
    title: "Type 2 DM \u2014 *yellow:Key Features*",
    bullets: [
      "Usually begins as insulin resistance \u2014 cells won\u2019t respond to insulin normally",
      "Pancreas compensates by producing MORE insulin \u2192 eventually burns out",
      "~90% of Type 2 patients are obese",
      "Obesity \u2192 free fatty acids \u2192 disrupt insulin receptors on liver, muscle, adipose cells",
      "Gradual onset, often asymptomatic \u2014 may already have complications at diagnosis",
      "Risk factors: obesity, age, family history, gestational DM history, physical inactivity, certain ethnicities",
    ],
  });

  // 23 - Flow: Type 2 Pathophysiology
  flowSlide(pptx, {
    label: "Type 2 DM",
    title: "Type 2 *yellow:Pathophysiology*",
    steps: [
      { label: "Obesity /\ninactivity" },
      { label: "Insulin\nresistance" },
      { label: "Pancreas\noverproduces\ninsulin" },
      { label: "Beta cells\nburn out" },
      { label: "Insulin\nproduction falls" },
      { label: "Hyperglycemia", color: "3a1a1a", border: C.red },
    ],
  });

  // 24 - Narrative: Type 2 Treatment
  narrativeSlide(pptx, {
    label: "Type 2 Treatment",
    title: "Type 2 Treatment \u2014 *green:Lifestyle First*",
    bullets: [
      "Weight control and diet",
      "Exercise (increases glucose uptake AND insulin sensitivity)",
      "Oral hypoglycemic agents (increase insulin production or cell sensitivity)",
      "Insulin replacement may be needed as disease progresses",
      "Goal: maintain optimal blood glucose levels",
    ],
  });

  // 25 - Quiz: Type 1 vs Type 2
  quizSlide(pptx, {
    question: "Which statement best distinguishes Type 2 from Type 1 diabetes?",
    options: [
      { text: "A. Type 2 always requires insulin injections", correct: false },
      { text: "B. Type 2 involves autoimmune destruction of beta cells", correct: false },
      { text: "C. Type 2 begins with insulin resistance, often linked to obesity", correct: true },
      { text: "D. Type 2 only occurs in children", correct: false },
    ],
    explanation: "Type 2 often starts with oral meds, not insulin (A). Autoimmune destruction is Type 1 (B). Type 2 is typically adult-onset (D).",
  });

  // 26 - Compare: Type 1 vs Type 2
  compareSlide(pptx, {
    title: "Type 1 *vs.* *yellow:Type 2*",
    leftTitle: "Type 1 Diabetes",
    leftItems: [
      "Age: Usually children / young adults",
      "Onset: Abrupt",
      "Cause: Autoimmune beta cell destruction",
      "Insulin levels: Low or absent",
      "Treatment: Insulin (required)",
      "Body type: Often underweight",
      "Complication: DKA",
    ],
    rightTitle: "Type 2 Diabetes",
    rightItems: [
      "Age: Usually after 40",
      "Onset: Gradual, insidious",
      "Cause: Insulin resistance",
      "Insulin levels: Normal or high initially",
      "Treatment: Diet, exercise, oral meds \u2192 insulin later",
      "Body type: Often obese",
      "Complication: HHNK",
    ],
    leftColor: C.blue, rightColor: C.yellow,
  });

  // 27 - Section: Acute Complications
  sectionSlide(pptx, { title: "Acute *Complications*", subtitle: "The emergencies that can kill" });

  // 28 - Anchor: Hypoglycemia
  anchorSlide(pptx, {
    tag: "Emergency", tagColor: C.red,
    title: "*red:Hypoglycemia* Is the Most IMMEDIATE Danger",
    subtitle: "The brain needs constant glucose \u2014 its energy demand is TWICE that of other cells. No glucose = seizures, coma, death.",
    titleColor: C.red,
  });

  // 29 - Narrative: Hypoglycemia
  narrativeSlide(pptx, {
    label: "Hypoglycemia",
    title: "*red:Hypoglycemia* \u2014 Too Little Sugar",
    bullets: [
      "Causes: excessive insulin dose, inadequate food intake, strenuous exercise, vomiting",
      "Signs: shaky, sweaty, confused, dizzy, hungry, headache, irritable",
      "Stimulates the sympathetic nervous system (fight-or-flight symptoms)",
      "Brain does NOT require insulin but DOES require glucose",
      "Treatment: give glucose (juice, glucose tabs) or glucagon injection",
    ],
    callout: "Can result in seizures, coma, and death if untreated. Always treat hypoglycemia FIRST \u2014 it kills faster than hyperglycemia.",
    calloutType: "danger",
  });

  // 30 - Anchor: DKA vs HHNK
  anchorSlide(pptx, {
    tag: "Key Concept", tagColor: C.purple,
    title: "*red:DKA* = Type 1\u2019s Emergency\n*yellow:HHNK* = Type 2\u2019s Emergency",
    subtitle: "Same disease family, different crises. Know which belongs to which \u2014 and the key treatment difference.",
    titleColor: C.purple,
  });

  // 31 - Narrative: DKA
  narrativeSlide(pptx, {
    label: "DKA",
    title: "*red:DKA* \u2014 Diabetic Ketoacidosis (Type 1)",
    bullets: [
      "No insulin \u2192 cells can\u2019t use glucose \u2192 body burns FAT for energy",
      "Fat breakdown (lipolysis) \u2192 ketones (acetoacetic acid, acetone)",
      "Ketones accumulate \u2192 overwhelm buffers \u2192 metabolic ACIDOSIS",
      "Kussmaul respirations (rapid, deep breathing) \u2014 body tries to blow off CO\u2082/acetone",
      "Fruity/acetone breath odor",
      "High glucose + high potassium + acidosis + dehydration",
    ],
    callout: "Treatment priority: INSULIN first, then fluids. The problem is lack of insulin.",
  });

  // 32 - Flow: The DKA Cascade
  flowSlide(pptx, {
    label: "DKA",
    title: "The *red:DKA Cascade*",
    steps: [
      { label: "No insulin" },
      { label: "Cells starve" },
      { label: "Body\nburns fat" },
      { label: "Ketones\nproduced", color: "2a2a1a", border: C.yellow },
      { label: "Buffers\noverwhelmed", color: "2a2a1a", border: C.yellow },
      { label: "Metabolic\nacidosis", color: "3a1a1a", border: C.red },
      { label: "Kussmaul\nbreathing", color: "3a1a1a", border: C.red },
    ],
  });

  // 33 - Narrative: HHNK
  narrativeSlide(pptx, {
    label: "HHNK",
    title: "*yellow:HHNK* \u2014 Hyperglycemic Hyperosmolar Nonketotic Syndrome (Type 2)",
    bullets: [
      "Glucose is VERY high (often >600 mg/dL) with severe dehydration",
      "NO significant ketones (some insulin is present \u2014 enough to prevent fat breakdown)",
      "Marked dehydration, poor tissue perfusion, decreased cardiac output, renal impairment",
      "Often triggered by illness, infection, or stress in an elderly Type 2 patient",
    ],
    callout: "Treatment priority: FLUIDS first, then potassium, magnesium, insulin. The problem is dehydration.",
    calloutType: "warn",
  });

  // 34 - Compare: DKA vs HHNK
  compareSlide(pptx, {
    title: "*red:DKA* vs. *yellow:HHNK*",
    leftTitle: "DKA (Diabetic Ketoacidosis)",
    leftItems: [
      "Type: Usually Type 1",
      "Ketones: Present (acidosis)",
      "Glucose: High (300\u2013800)",
      "Key problem: No insulin",
      "Breathing: Kussmaul",
      "Treatment priority: INSULIN",
    ],
    rightTitle: "HHNK (Hyperosmolar Nonketotic)",
    rightItems: [
      "Type: Usually Type 2",
      "Ketones: Absent",
      "Glucose: Very high (>600)",
      "Key problem: Severe dehydration",
      "Breathing: Normal",
      "Treatment priority: FLUIDS",
    ],
    leftColor: C.red, rightColor: C.yellow,
  });

  // 35 - Quiz: DKA Recognition
  quizSlide(pptx, {
    question: "A patient with Type 1 diabetes presents with glucose of 450, fruity breath, and rapid deep breathing. What is happening?",
    options: [
      { text: "A. Hyperglycemic hyperosmolar nonketotic syndrome", correct: false },
      { text: "B. Hypoglycemia from too much insulin", correct: false },
      { text: "C. Diabetic ketoacidosis \u2014 body burning fat, producing ketones", correct: true },
      { text: "D. Normal stress response to illness", correct: false },
    ],
    explanation: "Fruity breath = acetone from ketones. Rapid deep breathing = Kussmaul respirations. Classic DKA in Type 1. HHNK has no ketones.",
  });

  // 36 - Section: Chronic Complications
  sectionSlide(pptx, { title: "Chronic *Complications*", subtitle: "What uncontrolled glucose does over time" });

  // 37 - Anchor: Chronic Damage
  anchorSlide(pptx, {
    tag: "Chronic Damage", tagColor: C.red,
    title: "Glucose Above 120 mg/dL *red:Damages Everything* It Touches",
    subtitle: "Thickens basement membranes, promotes coagulation, accelerates atherosclerosis, diminishes perfusion, and impairs immune function.",
    titleColor: C.red,
  });

  // 38 - Narrative: Microvascular Complications
  narrativeSlide(pptx, {
    label: "Microvascular",
    title: "*red:Microvascular Complications* \u2014 Small Vessel Damage",
    bullets: [
      "Retinopathy (eyes) \u2014 leading cause of blindness in adults",
      "Nephropathy (kidneys) \u2014 leading cause of kidney failure requiring dialysis",
      "High HbA1C prevents RBCs from releasing O\u2082 efficiently",
      "Thickened basement membranes impair nutrient/waste exchange",
    ],
  });

  // 39 - Narrative: Macrovascular & Neuropathic
  narrativeSlide(pptx, {
    label: "Macrovascular & Neuropathic",
    title: "*red:Macrovascular & Neuropathic* Complications",
    bullets: [
      "Coronary artery disease \u2192 heart attacks",
      "Cerebrovascular disease \u2192 strokes",
      "Peripheral vascular disease \u2192 poor circulation to extremities",
      "Neuropathy: numbness, tingling, pain (especially feet)",
      "Delayed wound healing + neuropathy + poor circulation = AMPUTATION risk",
    ],
    callout: "Neuropathy means the patient can\u2019t FEEL injuries. A small cut on the foot can become a limb-threatening infection.",
    calloutType: "danger",
  });

  // 40 - Quiz: Chronic Complications
  quizSlide(pptx, {
    question: "A diabetic patient has numbness in both feet and a non-healing wound on the left great toe. Which complication category is this?",
    options: [
      { text: "A. Microvascular \u2014 retinopathy", correct: false },
      { text: "B. Macrovascular \u2014 coronary artery disease", correct: false },
      { text: "C. Neuropathy + peripheral vascular disease", correct: true },
      { text: "D. Diabetic ketoacidosis", correct: false },
    ],
    explanation: "Numbness = neuropathy (nerve damage). Non-healing wound = poor perfusion from peripheral vascular disease. DKA is acute, not chronic.",
  });

  // 41 - Section: Clinical Application
  sectionSlide(pptx, { num: "Clinical Application", title: "Case *Studies*", subtitle: "Put it all together" });

  // 42 - Case: Marcus
  caseSlide(pptx, {
    label: "Clinical Scenario",
    scenario: "Marcus, 8 years old, brought to the ED. Drinking water constantly, urinating frequently, lost 5 pounds in two weeks. Blood glucose is 380 mg/dL.",
    question: "What type of diabetes is this? What are the priority concerns?",
    options: [
      { text: "A. Type 2 \u2014 unlikely in an 8-year-old with acute onset and weight loss", correct: false },
      { text: "B. Type 1 \u2014 childhood onset, abrupt 3 polys, very high glucose", correct: true },
      { text: "C. Prediabetes \u2014 glucose of 380 far exceeds prediabetes range", correct: false },
      { text: "D. Normal childhood growth \u2014 weight LOSS with excessive thirst/urination is pathologic", correct: false },
    ],
    explanation: "Classic Type 1: childhood onset, abrupt 3 polys, very high glucose. Priority: check for DKA, start insulin, monitor potassium.",
  });

  // 43 - Case: Patricia
  caseSlide(pptx, {
    label: "Clinical Scenario",
    scenario: "Patricia, 62 years old, obese, found confused at home. Blood glucose is 820 mg/dL. No ketones in urine. Severely dehydrated with poor skin turgor.",
    question: "What emergency is this? What is the treatment priority?",
    options: [
      { text: "A. DKA \u2014 no ketones present, which rules out DKA", correct: false },
      { text: "B. Hypoglycemia \u2014 glucose is 820, the opposite of low", correct: false },
      { text: "C. HHNK \u2014 extremely high glucose, no ketones, severe dehydration", correct: true },
      { text: "D. Stroke \u2014 confusion is present, but glucose and dehydration picture points to HHNK", correct: false },
    ],
    explanation: "HHNK: extremely high glucose, no ketones, severe dehydration in elderly obese patient. Treatment priority: FLUIDS first.",
  });

  // 44 - Anchor: Final Summary
  anchorSlide(pptx, {
    tag: "Summary",
    title: "Diabetes \u2014 *The Big Picture*",
    subtitle: "\u2022 Insulin is the key that lets glucose into cells. No insulin or resistant cells = hyperglycemia.\n\u2022 Type 1 = autoimmune, no insulin, childhood, DKA risk. Type 2 = resistance, obesity, gradual, HHNK risk.\n\u2022 DKA treatment = INSULIN first. HHNK treatment = FLUIDS first.\n\u2022 HbA1C \u2265 6.5% = diabetes. Reflects 3-month control.\n\u2022 Chronic hyperglycemia destroys vessels and nerves: eyes, kidneys, heart, feet.",
  });

  return pptx;
}


// ════════════════════════════════════════════════════════════════════
//  DECK 2: THYROID DISORDERS  (28 slides)
// ════════════════════════════════════════════════════════════════════
function buildThyroid() {
  const pptx = makeDeck();
  pptx.title = "Chapter 10: Endocrine \u2014 Thyroid Disorders Review";
  pptx.author = "Lindsay Wilson & Claude Code";

  // 1 - Title
  titleSlide(pptx, {
    topLabel: "Supplemental Instructor Review",
    title: "Chapter 10: Endocrine \u2014 *Thyroid Disorders*",
    subtitle: "Section 2 \u2014 The metabolic thermostat: T3, T4, feedback loops, and what happens when it breaks",
    meta: "Lindsay Wilson & Claude Code",
  });

  // 2 - Section: Thyroid Anatomy & Physiology
  sectionSlide(pptx, { title: "Thyroid *Anatomy & Physiology*", subtitle: "The gland that sets your metabolic speed" });

  // 3 - Narrative: Thyroid Location & Structure
  narrativeSlide(pptx, {
    label: "Thyroid Gland",
    title: "Thyroid Gland \u2014 *Location & Structure*",
    bullets: [
      "Located at base of neck, just below the larynx",
      "Butterfly / H-shape \u2014 two lobes connected by a thin isthmus",
      "Highly vascular \u2014 palpable on physical exam",
      "Contains follicles that produce three key hormones",
      "4 parathyroid glands sit behind it (separate function \u2014 calcium regulation)",
    ],
  });

  // 4 - Narrative: Three Thyroid Hormones
  narrativeSlide(pptx, {
    label: "Thyroid Hormones",
    title: "Three *Thyroid Hormones*",
    bullets: [
      "T4 (thyroxine) \u2014 regulates cellular metabolism & growth/development",
      "T3 (triiodothyronine) \u2014 same function, but the more active form",
      "T3/T4 account for ~95% of all thyroid hormones",
      "Calcitonin \u2014 regulates calcium: inhibits osteoclasts (\u2193 Ca from bone), stimulates osteoblasts (\u2191 Ca into bone)",
    ],
    callout: "Key Point: Iodine is REQUIRED to synthesize T3 and T4. No iodine \u2192 hypothyroidism.",
  });

  // 5 - Flow: The Thyroid Axis
  flowSlide(pptx, {
    label: "Negative Feedback",
    title: "The *Thyroid Axis* (Negative Feedback)",
    steps: [
      { label: "Hypothalamus\nreleases TRH" },
      { label: "Anterior Pituitary\nreleases TSH" },
      { label: "Thyroid Gland\nproduces T3/T4" },
      { label: "T3/T4 feedback\ninhibits hypothalamus", color: "1a3a2a", border: C.green },
    ],
    callout: "When T3/T4 are sufficient, they signal back to STOP further TSH release. When they\u2019re low, TSH rises to stimulate more production.",
  });

  // 6 - Quiz: Thyroid Axis
  quizSlide(pptx, {
    question: "The hypothalamus senses low T3/T4 levels. What happens next?",
    options: [
      { text: "A. Thyroid directly increases hormone production", correct: false },
      { text: "B. Anterior pituitary releases TSH, which stimulates the thyroid to produce more T3/T4", correct: true },
      { text: "C. Posterior pituitary releases ADH to compensate", correct: false },
      { text: "D. Calcitonin is released to raise metabolism", correct: false },
    ],
    explanation: "The thyroid doesn\u2019t act on its own \u2014 it needs TSH from the anterior pituitary (triggered by TRH from the hypothalamus).",
  });

  // 7 - Section: Goiter
  sectionSlide(pptx, { title: "*Goiter*", subtitle: "The thyroid gets bigger \u2014 but why matters" });

  // 8 - Narrative: Goiter
  narrativeSlide(pptx, {
    label: "Goiter",
    title: "*yellow:Goiter* \u2014 Visible Thyroid Enlargement",
    bullets: [
      "Can occur in BOTH hypo- and hyperthyroid states (and even normal function)",
      "Iodine deficiency = #1 cause worldwide (rare in US due to iodized salt)",
      "Autoimmune thyroid conditions are most common cause in the US",
      "Usually painless but can compress trachea/esophagus \u2192 breathing & swallowing difficulty",
      "Not necessarily malignant",
    ],
    callout: "Warning: Goiter does NOT tell you whether the thyroid is over- or underactive. You need lab values (TSH, T3/T4) to determine function.",
    calloutType: "warn",
  });

  // 9 - Section: Hypothyroidism
  sectionSlide(pptx, { title: "*Hypothyroidism*", subtitle: "Everything slows down" });

  // 10 - Anchor: Hypothyroidism
  anchorSlide(pptx, {
    tag: "Hypothyroidism",
    title: "Hypothyroidism = *LOW Thyroid* = The Body in Slow Motion",
    subtitle: "Not enough T3/T4. Metabolism drops. Everything runs cold, slow, and sluggish.",
  });

  // 11 - Narrative: Hypothyroidism Causes
  narrativeSlide(pptx, {
    label: "Hypothyroidism",
    title: "Hypothyroidism \u2014 *Causes & Risk Factors*",
    bullets: [
      "Most common cause: Hashimoto\u2019s thyroiditis (autoimmune \u2014 body attacks thyroid tissue)",
      "Also iatrogenic: thyroid removal, radiation therapy",
      "Can be congenital \u2014 all US newborns are screened at birth",
      "Risk increases with advancing age",
      "More common in women than men",
      "Can result from hypothalamus or pituitary dysfunction (secondary hypothyroidism)",
    ],
  });

  // 12 - Narrative: Hypothyroidism Manifestations
  narrativeSlide(pptx, {
    label: "Think: SLOW",
    title: "Hypothyroidism \u2014 *Manifestations*",
    bullets: [
      "Fatigue, sluggishness, lethargy, depression",
      "Cold intolerance \u2014 always cold",
      "Weight gain despite decreased appetite",
      "Bradycardia, hypotension",
      "Constipation (\u2193 peristalsis)",
      "Dry skin, brittle hair/nails, hair loss/thinning",
      "Facial edema, hoarseness, large tongue",
      "Hypercholesterolemia \u2022 Heavier menstrual periods",
    ],
    callout: "In infants: failure to grow, impaired mental development. This is why ALL newborns are screened.",
  });

  // 13 - Narrative: Myxedema
  narrativeSlide(pptx, {
    label: "Emergency",
    title: "*red:Myxedema* \u2014 Severe Hypothyroidism",
    bullets: [
      "Rare, life-threatening advanced hypothyroidism",
      "Marked hypotension, respiratory depression",
      "Hypothermia \u2014 body can\u2019t generate heat",
      "Lethargy \u2192 coma",
      "Cardiomegaly (enlarged heart)",
    ],
    callout: "Myxedema is a medical emergency. Vitals are LOW and SLOW across the board.",
    calloutType: "danger",
  });

  // 14 - Narrative: Hypothyroidism Treatment
  narrativeSlide(pptx, {
    label: "Treatment",
    title: "*green:Hypothyroidism* \u2014 Treatment",
    bullets: [
      "Lifelong thyroid hormone replacement therapy (Synthroid / levothyroxine)",
      "Take on EMPTY stomach, 30 min before eating",
      "Regular blood work to monitor and adjust dosage",
      "Manage: weight, constipation, body temperature (avoid cold)",
    ],
    callout: "Key Concept: This is hormone REPLACEMENT \u2014 the thyroid isn\u2019t producing enough, so you supplement what\u2019s missing.",
  });

  // 15 - Quiz: Hypothyroidism
  quizSlide(pptx, {
    question: "A patient with hypothyroidism would most likely present with which set of findings?",
    options: [
      { text: "A. Tachycardia, weight loss, heat intolerance", correct: false },
      { text: "B. Bradycardia, weight gain, cold intolerance, constipation", correct: true },
      { text: "C. Exophthalmos, tremor, anxiety", correct: false },
      { text: "D. Hypoglycemia, bronze skin, salt craving", correct: false },
    ],
    explanation: "Everything is SLOW in hypothyroidism. Options A and C describe HYPERthyroid/Graves\u2019. Option D describes Addison\u2019s disease.",
  });

  // 16 - Section: Hyperthyroidism
  sectionSlide(pptx, { title: "*Hyperthyroidism*", subtitle: "Everything speeds up" });

  // 17 - Anchor: Hyperthyroidism
  anchorSlide(pptx, {
    tag: "Hyperthyroidism", tagColor: C.red,
    title: "Hyperthyroidism = *red:TOO MUCH Thyroid* = The Body in Overdrive",
    subtitle: "Excess T3/T4 creates a hypermetabolic state. Everything runs hot, fast, and wired.",
    titleColor: C.red,
  });

  // 18 - Narrative: Hyperthyroidism Causes
  narrativeSlide(pptx, {
    label: "Hyperthyroidism",
    title: "Hyperthyroidism \u2014 Causes (*yellow:Graves\u2019 Disease*)",
    bullets: [
      "Most common cause: Graves\u2019 disease (autoimmune \u2014 antibodies overstimulate the thyroid)",
      "Also: excessive iodine intake, thyroid tumors, thyroid inflammation",
      "Excess thyroid hormone replacement (iatrogenic)",
      "More common in women than men",
    ],
    callout: "Graves\u2019 = the thyroid is being told to GO GO GO by autoantibodies that mimic TSH.",
    calloutType: "warn",
  });

  // 19 - Narrative: Hyperthyroidism Manifestations
  narrativeSlide(pptx, {
    label: "Think: FAST",
    title: "Hyperthyroidism \u2014 *red:Manifestations*",
    bullets: [
      "Sudden weight loss despite increased appetite",
      "Tachycardia, hypertension, palpitations",
      "Heat intolerance, diaphoresis (sweating)",
      "Nervousness, anxiety, irritability, insomnia",
      "Fine hand tremors",
      "Diarrhea (\u2191 peristalsis)",
      "Exophthalmos (bulging eyes) \u2014 hallmark of Graves\u2019",
      "Goiter \u2022 Menstrual changes (lighter/absent periods)",
    ],
  });

  // 20 - Narrative: Exophthalmos
  narrativeSlide(pptx, {
    label: "Graves\u2019 Disease",
    title: "*teal:Exophthalmos* \u2014 The Graves\u2019 Hallmark",
    bullets: [
      "Bulging eyes \u2014 sclera visible around the iris",
      "Eyes may not fully close \u2192 cornea dries out \u2192 scarring \u2192 vision loss",
      "Manage with: cool compresses, sunglasses, eye lubricants, elevate HOB",
    ],
    callout: "Warning: Exophthalmos may NOT resolve even after hyperthyroidism is treated. Protect the corneas.",
    calloutType: "warn",
  });

  // 21 - Anchor: Thyroid Storm
  anchorSlide(pptx, {
    tag: "Medical Emergency", tagColor: C.red,
    title: "*red:Thyroid Storm (Thyrotoxicosis)*",
    subtitle: "A sudden, life-threatening surge of T3/T4. Can be triggered by infection or stress.\nFever \u2022 Severely elevated BP \u2022 Tachycardia \u2022 Decreased mental alertness \u2022 Abdominal pain",
    titleColor: C.red,
  });

  // 22 - Narrative: Hyperthyroidism Treatment
  narrativeSlide(pptx, {
    label: "Treatment",
    title: "*green:Hyperthyroidism* \u2014 Treatment",
    bullets: [
      "Goal: decrease thyroid hormone production",
      "Radioactive iodine \u2014 destroys overactive thyroid tissue",
      "Antithyroid agents (methimazole, PTU)",
      "Beta blockers \u2014 control heart rate and tremors",
      "Surgical removal (thyroidectomy) \u2014 patient may then need lifelong replacement",
      "Increase caloric and calcium intake (hypermetabolism depletes both)",
    ],
    callout: "Key Point: After radioactive iodine or surgery, the patient often becomes HYPOthyroid and needs replacement therapy.",
  });

  // 23 - Quiz: Hyperthyroidism
  quizSlide(pptx, {
    question: "A patient presents with weight loss, tachycardia, tremors, heat intolerance, and bulging eyes. What is the most likely diagnosis?",
    options: [
      { text: "A. Hypothyroidism / Hashimoto\u2019s", correct: false },
      { text: "B. Cushing\u2019s disease", correct: false },
      { text: "C. Hyperthyroidism / Graves\u2019 disease", correct: true },
      { text: "D. Addison\u2019s disease", correct: false },
    ],
    explanation: "Exophthalmos + hypermetabolic symptoms = classic Graves\u2019. Hashimoto\u2019s causes the opposite. Cushing\u2019s = weight gain, moon face.",
  });

  // 24 - Compare: Hypothyroidism vs Hyperthyroidism
  compareSlide(pptx, {
    title: "*Hypothyroidism* vs. *red:Hyperthyroidism*",
    leftTitle: "Hypothyroidism (SLOW)",
    leftItems: [
      "Metabolism: Slow",
      "Weight: Gain",
      "Temperature: Cold intolerant",
      "Heart: Bradycardia, hypotension",
      "GI: Constipation",
      "Skin/Hair: Dry, brittle, coarse",
      "Mood: Depressed, sluggish",
      "Cause: Hashimoto\u2019s (autoimmune destroy)",
      "Treatment: Hormone REPLACEMENT",
    ],
    rightTitle: "Hyperthyroidism (FAST)",
    rightItems: [
      "Metabolism: Fast",
      "Weight: Loss",
      "Temperature: Heat intolerant",
      "Heart: Tachycardia, hypertension",
      "GI: Diarrhea",
      "Skin/Hair: Fine, thin, diaphoresis",
      "Mood: Anxious, irritable, insomnia",
      "Cause: Graves\u2019 (autoimmune overstimulate)",
      "Treatment: SUPPRESS production",
    ],
    leftColor: C.blue, rightColor: C.red,
  });

  // 25 - Section: Clinical Application
  sectionSlide(pptx, { num: "Clinical Application", title: "Case *Studies*", subtitle: "Put it all together" });

  // 26 - Case: Margaret
  caseSlide(pptx, {
    label: "Clinical Case 1",
    scenario: "Margaret, 58 y/o female. Presents with fatigue, 15-lb weight gain over 6 months, always cold, constipation, dry skin, thinning hair. Labs: TSH elevated, T4 low.",
    question: "What is the diagnosis and expected treatment?",
    options: [
      { text: "A. Graves\u2019 disease \u2014 start antithyroid medication", correct: false },
      { text: "B. Hypothyroidism (Hashimoto\u2019s) \u2014 lifelong levothyroxine replacement", correct: true },
      { text: "C. Cushing\u2019s syndrome \u2014 reduce cortisol", correct: false },
      { text: "D. Normal aging \u2014 no treatment needed", correct: false },
    ],
    explanation: "Elevated TSH = pituitary is trying harder because T4 is low. All symptoms point to slowed metabolism. Lifelong levothyroxine.",
  });

  // 27 - Case: Devon
  caseSlide(pptx, {
    label: "Clinical Case 2",
    scenario: "Devon, 32 y/o female. Lost 20 lbs in 2 months despite eating constantly. HR 112, BP 158/92, hands trembling. \u201cWired and anxious all the time.\u201d Eyes bulging.",
    question: "What is the diagnosis? What is the most dangerous potential complication?",
    options: [
      { text: "A. Panic disorder \u2014 prescribe anxiolytics", correct: false },
      { text: "B. Hypothyroidism \u2014 start levothyroxine", correct: false },
      { text: "C. Graves\u2019 disease (hyperthyroidism) \u2014 most dangerous complication: thyroid storm", correct: true },
      { text: "D. Pheochromocytoma \u2014 surgical removal of adrenal tumor", correct: false },
    ],
    explanation: "Weight loss + tachycardia + tremors + anxiety + exophthalmos = classic Graves\u2019. Most dangerous complication: thyroid storm.",
  });

  // 28 - Anchor: Final Summary
  anchorSlide(pptx, {
    tag: "Summary",
    title: "Thyroid Disorders \u2014 *The Big Picture*",
    subtitle: "\u2022 Thyroid sets the metabolic speed: T3/T4 via the hypothalamus-pituitary-thyroid axis.\n\u2022 Hypo = everything SLOW (cold, tired, constipated, weight gain). Hyper = everything FAST (hot, wired, diarrhea, weight loss).\n\u2022 Hashimoto\u2019s = autoimmune destruction (hypo). Graves\u2019 = autoimmune overstimulation (hyper).\n\u2022 Goiter can occur in BOTH. Exophthalmos is specific to Graves\u2019.\n\u2022 Thyroid storm = medical emergency. Myxedema = medical emergency. Opposite ends, both deadly.",
  });

  return pptx;
}


// ════════════════════════════════════════════════════════════════════
//  DECK 3: ADRENAL DISORDERS  (25 slides)
// ════════════════════════════════════════════════════════════════════
function buildAdrenal() {
  const pptx = makeDeck();
  pptx.title = "Chapter 10: Endocrine \u2014 Adrenal Disorders Review";
  pptx.author = "Lindsay Wilson & Claude Code";

  // 1 - Title
  titleSlide(pptx, {
    topLabel: "Supplemental Instructor Review",
    title: "Chapter 10: Endocrine \u2014 *Adrenal Disorders*",
    subtitle: "Section 3 \u2014 Cortisol, aldosterone, and the balance between Cushing\u2019s and Addison\u2019s",
    meta: "Lindsay Wilson & Claude Code",
  });

  // 2 - Section: Adrenal Anatomy
  sectionSlide(pptx, { title: "*Adrenal Anatomy*", subtitle: "Two glands, two layers, very different hormones" });

  // 3 - Narrative: Adrenal Glands Structure
  narrativeSlide(pptx, {
    label: "Adrenal Glands",
    title: "Adrenal Glands \u2014 *Structure*",
    bullets: [
      "Located on top of each kidney \u2014 small but critical",
      "Two distinct layers with completely different functions",
      "Medulla (inner): produces epinephrine & norepinephrine (catecholamines) \u2014 fight-or-flight",
      "Cortex (outer): produces steroids \u2014 mineralocorticoids, glucocorticoids, gonadocorticoids",
      "The cortex is the layer that matters most for Cushing\u2019s and Addison\u2019s",
    ],
  });

  // 4 - Narrative: Two Cortex Hormones
  narrativeSlide(pptx, {
    label: "Adrenal Cortex",
    title: "The Two *Cortex Hormones* You Must Know",
    bullets: [
      "Cortisol (glucocorticoid): manages carb/fat/protein metabolism, suppresses inflammation, raises blood glucose, controls sleep/wake cycle (highest AM, lowest PM), boosts energy for stress response",
      "Aldosterone (mineralocorticoid): causes kidneys to retain Na\u207a and water, increases intravascular volume and BP, excretes K\u207a in urine \u2192 blood K\u207a falls",
    ],
    callout: "Link them: Cortisol = sugar, inflammation, stress. Aldosterone = salt, water, potassium.",
  });

  // 5 - Flow: The HPA Axis
  flowSlide(pptx, {
    label: "HPA Axis",
    title: "The *HPA Axis*",
    steps: [
      { label: "Hypothalamus\nreleases CRH" },
      { label: "Anterior Pituitary\nreleases ACTH" },
      { label: "Adrenal Cortex\nreleases Cortisol" },
      { label: "Negative Feedback\n\u2190 back to hypothalamus", color: "2a2a1a", border: C.yellow },
    ],
    callout: "Ask yourself: Where in this chain did the problem start? Hypothalamus? Pituitary? Adrenal gland itself? Exogenous meds?",
  });

  // 6 - Quiz: Aldosterone & Potassium
  quizSlide(pptx, {
    question: "Aldosterone causes the kidneys to retain sodium and water. What happens to potassium?",
    options: [
      { text: "A. Potassium is also retained", correct: false },
      { text: "B. Potassium is excreted in urine, so blood potassium falls", correct: true },
      { text: "C. Potassium is unaffected by aldosterone", correct: false },
      { text: "D. Potassium moves into bone storage", correct: false },
    ],
    explanation: "Aldosterone causes kidneys to retain Na\u207a while excreting K\u207a \u2014 it\u2019s a swap. The Na/K relationship is key.",
  });

  // 7 - Section: Cushing's Syndrome
  sectionSlide(pptx, { title: "*yellow:Cushing\u2019s Syndrome*", subtitle: "Too much cortisol \u2014 the body in overdrive" });

  // 8 - Anchor: Cushing's = EXCESS
  anchorSlide(pptx, {
    tag: "Cushing\u2019s", tagColor: C.yellow,
    title: "Cushing\u2019s = *yellow:EXCESS Cortisol*",
    subtitle: "Think: too much of everything cortisol does.\nToo much sugar (hyperglycemia). Too much sodium/water (edema, hypertension).\nToo much immune suppression (infections, delayed healing). Bones break down (osteoporosis).",
    titleColor: C.yellow,
  });

  // 9 - Narrative: Cushing's Causes
  narrativeSlide(pptx, {
    label: "Cushing\u2019s",
    title: "Cushing\u2019s \u2014 *yellow:Causes*",
    bullets: [
      "#1 cause: Iatrogenic \u2014 taking exogenous glucocorticoid medications (prednisone, dexamethasone) for chronic inflammatory conditions (asthma, arthritis, IBD)",
      "Adrenal tumors secreting excess cortisol",
      "Pituitary tumors secreting excess ACTH (Cushing\u2019s disease specifically)",
      "Paraneoplastic syndrome \u2014 ectopic ACTH secretion from cancer (e.g., small cell lung cancer)",
    ],
  });

  // 10 - Narrative: Cushing's Classic Look
  narrativeSlide(pptx, {
    label: "Think: Santa Claus",
    title: "Cushing\u2019s \u2014 *yellow:The Classic Look*",
    bullets: [
      "Truncal obesity with thin extremities",
      "Moon face \u2014 round, full, red",
      "Buffalo hump \u2014 fat pad on upper back",
      "Purple striae (stretch marks) on abdomen",
      "Thin, fragile skin that bruises easily",
      "Muscle weakness and wasting",
    ],
    callout: "Instructor mnemonic: Does Santa have Cushing\u2019s? Round face, big belly, red cheeks \u2014 yes.",
  });

  // 11 - Narrative: Cushing's Metabolic Effects
  narrativeSlide(pptx, {
    label: "High Yield",
    title: "Cushing\u2019s \u2014 *red:Metabolic Effects*",
    bullets: [
      "Hyperglycemia \u2192 steroid-induced diabetes (cortisol raises blood sugar)",
      "Hypertension + edema (cortisol has aldosterone-like effects \u2192 Na\u207a/H\u2082O retention)",
      "Hypokalemia (K\u207a excreted)",
      "Osteoporosis (cortisol prevents bones from absorbing calcium \u2192 fracture risk)",
      "Immunosuppression \u2192 infections, wounds that won\u2019t heal",
      "Mood changes, irritability, psychosis. Females: hirsutism. Males: hair loss.",
    ],
  });

  // 12 - Quiz: Cushing's Recognition
  quizSlide(pptx, {
    question: "A patient on long-term prednisone develops a round face, weight gain around the trunk, easy bruising, and blood glucose of 210. What is this?",
    options: [
      { text: "A. Addison\u2019s disease from steroid use", correct: false },
      { text: "B. Normal side effects of aging", correct: false },
      { text: "C. Iatrogenic Cushing\u2019s syndrome from exogenous glucocorticoids", correct: true },
      { text: "D. Hypothyroidism", correct: false },
    ],
    explanation: "Moon face + truncal obesity + easy bruising + hyperglycemia in a patient on chronic steroids = textbook iatrogenic Cushing\u2019s.",
  });

  // 13 - Narrative: Cushing's Treatment
  narrativeSlide(pptx, {
    label: "Treatment",
    title: "*green:Cushing\u2019s* \u2014 Treatment",
    bullets: [
      "If iatrogenic: GRADUAL tapering of glucocorticoids \u2014 let adrenals wake back up",
      "If tumor: surgery, radiation, chemotherapy",
      "Manage complications: hyperglycemia, infections, edema, osteoporosis, bleeding",
      "Fall prevention (osteoporosis + muscle weakness = high fracture risk)",
    ],
    callout: "NEVER abruptly stop steroids! The adrenal glands are \u201casleep\u201d from suppression. Sudden withdrawal \u2192 adrenal crisis \u2192 potentially fatal.",
    calloutType: "danger",
  });

  // 14 - Section: Addison's Disease
  sectionSlide(pptx, { title: "*Addison\u2019s Disease*", subtitle: "Too little cortisol \u2014 the body running on empty" });

  // 15 - Anchor: Addison's = DEFICIENT
  anchorSlide(pptx, {
    tag: "Addison\u2019s",
    title: "Addison\u2019s = *DEFICIENT Cortisol & Aldosterone*",
    subtitle: "Think: NOT ENOUGH of everything.\nNot enough sugar (hypoglycemia). Not enough Na/water retention (dehydration, hypotension).\nNot enough immune modulation. The body can\u2019t handle stress.",
  });

  // 16 - Narrative: Addison's Causes
  narrativeSlide(pptx, {
    label: "Addison\u2019s",
    title: "Addison\u2019s \u2014 *Causes*",
    bullets: [
      "#1: Autoimmune destruction of the adrenal cortex",
      "Infections (TB, fungal), hemorrhage, tumors destroying adrenal tissue",
      "Pituitary dysfunction \u2192 insufficient ACTH",
      "Hypothalamic dysfunction \u2192 insufficient CRH",
      "Abrupt withdrawal of exogenous steroids (adrenals have atrophied)",
    ],
    callout: "Fun fact: JFK had Addison\u2019s disease \u2014 his famous tan was actually hyperpigmentation from excess ACTH stimulating melanocytes.",
  });

  // 17 - Narrative: Addison's Manifestations
  narrativeSlide(pptx, {
    label: "High Yield",
    title: "Addison\u2019s \u2014 *red:Manifestations*",
    bullets: [
      "Hypotension (especially orthostatic/postural)",
      "Hypoglycemia (no cortisol to raise glucose)",
      "Hyperkalemia (no aldosterone to excrete K\u207a) \u2014 HEART CONCERN",
      "Hyponatremia (no aldosterone to retain Na\u207a) \u2014 BRAIN CONCERN",
      "Hyperpigmentation \u2014 dark/bronze skin (excess ACTH stimulates melanocytes)",
      "Extreme fatigue, weakness, weight loss, salt craving, nausea, vomiting, chronic diarrhea, mood changes",
    ],
  });

  // 18 - Anchor: Adrenal Crisis
  anchorSlide(pptx, {
    tag: "Medical Emergency", tagColor: C.red,
    title: "*red:Adrenal Crisis* = Medical Emergency",
    subtitle: "Na\u207a drops, K\u207a spikes, BP crashes, kidneys shut down.\nProfound fatigue, dehydration, vascular collapse.\nCan be triggered by: stress, illness, surgery, or abruptly stopping steroids.",
    titleColor: C.red,
  });

  // 19 - Narrative: Addison's Treatment
  narrativeSlide(pptx, {
    label: "Treatment",
    title: "*green:Addison\u2019s* \u2014 Treatment",
    bullets: [
      "Lifelong hormone replacement: hydrocortisone (cortisol) + fludrocortisone (aldosterone)",
      "Wear medical alert bracelet at all times. Carry extra medication.",
      "Dietary: INCREASE sodium intake (they lose Na\u207a). LOW potassium diet (they retain K\u207a). Fluid replacement.",
      "Stress dosing: increase steroids during illness, surgery, or stress",
    ],
    callout: "Addison\u2019s patients cannot mount a normal stress response. Any illness, injury, or surgery requires increased steroid doses \u2014 otherwise they risk adrenal crisis.",
    calloutType: "danger",
  });

  // 20 - Quiz: Addison's Electrolytes
  quizSlide(pptx, {
    question: "A patient with Addison\u2019s disease would be expected to have which electrolyte pattern?",
    options: [
      { text: "A. High sodium, low potassium", correct: false },
      { text: "B. Low sodium, high potassium", correct: true },
      { text: "C. High calcium, low phosphate", correct: false },
      { text: "D. Normal electrolytes with elevated glucose", correct: false },
    ],
    explanation: "Without aldosterone, kidneys cannot retain Na\u207a (drops) and cannot excrete K\u207a (rises). High Na\u207a/low K\u207a is the Cushing\u2019s pattern.",
  });

  // 21 - Compare: Cushing's vs Addison's
  compareSlide(pptx, {
    title: "*yellow:Cushing\u2019s* vs. *Addison\u2019s*",
    leftTitle: "Cushing\u2019s (EXCESS Cortisol)",
    leftItems: [
      "Cortisol: High",
      "Glucose: High (steroid diabetes)",
      "Na\u207a: High (retained)",
      "K\u207a: Low (excreted)",
      "BP: Hypertension",
      "Weight: Obese (truncal)",
      "Skin: Thin, bruises, striae",
      "Look: Moon face, buffalo hump",
      "Tx: Taper steroids, surgery",
    ],
    rightTitle: "Addison\u2019s (DEFICIENT Cortisol/Aldo)",
    rightItems: [
      "Cortisol: Low",
      "Glucose: Low",
      "Na\u207a: Low (lost)",
      "K\u207a: High (retained)",
      "BP: Hypotension",
      "Weight: Weight loss",
      "Skin: Hyperpigmentation (bronze)",
      "Look: Thin, fatigued",
      "Tx: Lifelong replacement",
    ],
    leftColor: C.yellow, rightColor: C.blue,
  });

  // 22 - Section: Clinical Application
  sectionSlide(pptx, { num: "Clinical Application", title: "Case *Studies*", subtitle: "Put it all together" });

  // 23 - Case: Rosa
  caseRevealSlide(pptx, {
    label: "Clinical Scenario",
    scenario: "Rosa, 45 y/o female, has been taking prednisone 40mg daily for 3 years for lupus. She presents with a round face, central obesity, purple stretch marks on her abdomen, blood glucose 245, and BP 162/98. She asks if she can just stop the prednisone.",
    answerBullets: [
      "Diagnosis: Iatrogenic Cushing\u2019s syndrome from chronic exogenous steroid use",
      "Moon face, truncal obesity, purple striae, hyperglycemia, hypertension = textbook Cushing\u2019s",
      "She absolutely CANNOT stop prednisone abruptly \u2014 adrenals are completely suppressed after 3 years",
      "Sudden withdrawal \u2192 adrenal crisis \u2192 cardiovascular collapse \u2192 death",
      "Must GRADUALLY taper under medical supervision while managing complications",
    ],
    callout: "NEVER abruptly stop steroids after chronic use. Gradual taper only.",
  });

  // 24 - Case: James
  caseRevealSlide(pptx, {
    label: "Clinical Scenario",
    scenario: "James, 34 y/o male, presents to the ED with profound fatigue, BP 78/50, blood glucose 52, and dark bronze skin discoloration. Labs: Na\u207a 128, K\u207a 6.1. He reports salt cravings and has lost 20 lbs without trying.",
    answerBullets: [
      "Diagnosis: Addison\u2019s disease (adrenal insufficiency)",
      "Hypotension, hypoglycemia, hyponatremia (Na\u207a 128), hyperkalemia (K\u207a 6.1), bronze skin, weight loss, salt cravings, fatigue",
      "Most immediately dangerous: K\u207a 6.1 (hyperkalemia) \u2014 can cause fatal cardiac dysrhythmias",
      "Treatment: IV fluids, IV hydrocortisone, continuous cardiac monitoring, correct electrolytes urgently",
    ],
    callout: "Hyperkalemia (K\u207a > 5.0) is a medical emergency \u2014 always monitor the heart.",
  });

  // 25 - Anchor: Final Summary
  anchorSlide(pptx, {
    tag: "Summary",
    title: "Adrenal Disorders \u2014 *The Big Picture*",
    subtitle: "\u2022 Cushing\u2019s = too much cortisol. Addison\u2019s = not enough. They are OPPOSITES in every way.\n\u2022 Cushing\u2019s: high glucose, high Na\u207a, low K\u207a, hypertension, moon face, buffalo hump.\n\u2022 Addison\u2019s: low glucose, low Na\u207a, high K\u207a, hypotension, bronze skin, weight loss.\n\u2022 NEVER abruptly stop steroids \u2014 gradual taper only.\n\u2022 K\u207a = heart concern. Na\u207a = brain concern. Always check electrolytes.",
  });

  return pptx;
}


// ════════════════════════════════════════════════════════════════════
//  MAIN — Generate all three
// ════════════════════════════════════════════════════════════════════
async function main() {
  const dir = __dirname;

  console.log("Generating Endocrine Diabetes PowerPoint...");
  const diabetes = buildDiabetes();
  await diabetes.writeFile({ fileName: `${dir}/Endocrine_Diabetes_Review.pptx` });
  console.log("  -> Endocrine_Diabetes_Review.pptx");

  console.log("Generating Endocrine Thyroid PowerPoint...");
  const thyroid = buildThyroid();
  await thyroid.writeFile({ fileName: `${dir}/Endocrine_Thyroid_Review.pptx` });
  console.log("  -> Endocrine_Thyroid_Review.pptx");

  console.log("Generating Endocrine Adrenal PowerPoint...");
  const adrenal = buildAdrenal();
  await adrenal.writeFile({ fileName: `${dir}/Endocrine_Adrenal_Review.pptx` });
  console.log("  -> Endocrine_Adrenal_Review.pptx");

  console.log("\nAll three Chapter 10 PowerPoint files generated!");
}

main().catch(err => { console.error(err); process.exit(1); });
