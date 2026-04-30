/**
 * NURS 308 Pathophysiology — Advanced Mock Exam Bank
 * USC Upstate · Spring 2026
 *
 * 50 scenario-based questions — higher difficulty
 * NO repeat content from nurs308-exam-bank.js
 * Focus: clinical application, analysis, prioritization, connecting concepts across chapters
 *
 * For Claude Code integration into si-reviews repo
 */

const NURS308_ADVANCED_BANK = [

  // ═══════════════════════════════════════════
  // MULTI-SYSTEM / CROSS-CHAPTER SCENARIOS (8 Qs)
  // ═══════════════════════════════════════════

  {
    id: "adv_01", chapter: 0, topic: "Multi-System Integration", type: "mc",
    difficulty: "hard",
    objective: "Apply knowledge across body systems to a clinical scenario (CO4, CO5, CO6)",
    stem: "A 62-year-old patient with a 20-year history of uncontrolled type 2 diabetes is admitted with a blood pressure of 198/112, serum creatinine of 3.2 mg/dL (normal 0.7-1.3), and bilateral lower extremity edema. The nurse recognizes that these findings MOST likely represent:",
    options: [
      "An acute allergic reaction to a new medication",
      "The cumulative effect of chronic hyperglycemia damaging the cardiovascular and renal systems simultaneously",
      "An isolated hypertensive crisis unrelated to the diabetes",
      "Normal age-related changes in a 62-year-old"
    ],
    correct: 1,
    rationale: "This question requires connecting diabetes (Ch 10) to cardiovascular damage (Ch 4) to renal failure (Ch 7). Chronic hyperglycemia damages blood vessels at every level — macrovascular (atherosclerosis → hypertension) and microvascular (glomerular damage → elevated creatinine → fluid retention → edema). The elevated creatinine tells you the kidneys are failing. The edema tells you fluid is accumulating because the kidneys can't excrete it. The hypertension is both a cause AND a consequence of the kidney damage. This is one patient, but three chapters of pathophysiology working together."
  },
  {
    id: "adv_02", chapter: 0, topic: "Multi-System Integration", type: "mc",
    difficulty: "hard",
    objective: "Apply knowledge of inflammation, immunity, and cellular adaptation to a clinical scenario (CO3, CO5, CO6)",
    stem: "A long-term smoker is diagnosed with squamous cell carcinoma of the lung. The nurse understands the pathological progression that led to this cancer was MOST likely:",
    options: [
      "Normal lung tissue → hyperplasia → malignancy",
      "Normal ciliated epithelium → metaplasia (squamous replacement) → dysplasia → malignancy",
      "Normal lung tissue → atrophy → malignancy",
      "Normal lung tissue → hypertrophy → malignancy"
    ],
    correct: 1,
    rationale: "This connects cellular adaptations (Ch 1) to respiratory damage (Ch 5) to cancer progression (Ch 1). Chronic smoke exposure irritates the ciliated columnar epithelium of the airways. The body adapts through metaplasia — replacing the ciliated cells with squamous cells that are more resistant to irritation. If the irritant continues, the metaplastic cells can become dysplastic (disordered growth). Dysplasia can progress to carcinoma in situ and then invasive malignancy. This is the classic metaplasia → dysplasia → neoplasia sequence. Understanding this progression is clinically important because metaplasia and dysplasia are REVERSIBLE if the irritant is removed — but once malignancy develops, it is not."
  },
  {
    id: "adv_03", chapter: 0, topic: "Multi-System Integration", type: "sata",
    difficulty: "hard",
    objective: "Connect acid-base, respiratory, and cardiovascular pathophysiology (CO4, CO5, CO6)",
    stem: "A patient with severe COPD presents with the following ABG: pH 7.33, PaCO2 58, HCO3 34. Which conclusions can the nurse draw from these results? Select all that apply.",
    options: [
      "The patient has respiratory acidosis",
      "The kidneys are compensating by retaining bicarbonate",
      "This is an acute, uncompensated imbalance",
      "The elevated CO2 results from the patient's inability to adequately exhale and eliminate CO2"
    ],
    correct: [0, 1, 3],
    rationale: "This integrates respiratory pathophysiology (Ch 5) with acid-base interpretation (Ch 6). The pH is low (acidosis) and the CO2 is high (respiratory cause) — so this is respiratory acidosis. The HCO3 is ALSO elevated (34, above normal 22-26), which tells you the kidneys have been compensating by retaining bicarbonate to buffer the chronic acid load. This means it's PARTIALLY compensated, not uncompensated — if it were acute/uncompensated, the HCO3 would still be normal. In COPD, the obstructed airways trap air and prevent effective CO2 elimination, causing chronic CO2 retention. The kidneys recognize the chronic acidosis and retain bicarbonate over days, which is why the pH isn't as low as you'd expect with a PaCO2 of 58."
  },
  {
    id: "adv_04", chapter: 0, topic: "Multi-System Integration", type: "mc",
    difficulty: "hard",
    objective: "Connect liver failure to hematopoietic and fluid imbalances (CO5, CO6)",
    stem: "A patient with end-stage cirrhosis presents with a platelet count of 62,000/mm³, INR of 2.8, and severe ascites. The nurse is MOST concerned about the risk of:",
    options: [
      "Infection from leukopenia",
      "Life-threatening hemorrhage due to both thrombocytopenia and impaired clotting factor production",
      "Pulmonary embolism from excessive clotting",
      "Hyperglycemia from impaired glucose metabolism"
    ],
    correct: 1,
    rationale: "This connects cirrhosis (Ch 9) to hematopoietic function (Ch 3) to fluid balance (Ch 6). The cirrhotic liver fails in multiple ways simultaneously: it can't produce adequate clotting factors (elevated INR = blood takes longer to clot), and portal hypertension causes splenomegaly which sequesters and destroys platelets (thrombocytopenia). Together, these create a DUAL bleeding risk — both the platelet plug (primary hemostasis) and the coagulation cascade (secondary hemostasis) are impaired. The ascites adds risk because procedures to drain it (paracentesis) carry bleeding risk in this patient. This is a situation where one organ's failure creates cascading problems across multiple systems."
  },
  {
    id: "adv_05", chapter: 0, topic: "Multi-System Integration", type: "mc",
    difficulty: "hard",
    objective: "Apply pathophysiology of Cushing's to multiple body systems (CO5, CO6)",
    stem: "A patient with Cushing's disease develops a urinary tract infection. The nurse recognizes that this patient is at higher-than-normal risk for complications from this infection because excess cortisol:",
    options: [
      "Directly kills bacteria in the urinary tract",
      "Suppresses the immune response AND impairs wound healing, making it harder for the body to fight and recover from infection",
      "Increases urine output, flushing the infection more quickly",
      "Has no effect on the immune system"
    ],
    correct: 1,
    rationale: "This connects endocrine pathophysiology (Ch 10 — Cushing's) to immunity (Ch 2) to urinary disorders (Ch 7). Excess cortisol has profound immunosuppressive effects — it reduces WBC migration to infection sites, decreases inflammatory response, and impairs lymphocyte function. It also impairs wound healing by breaking down protein (catabolic effect) and inhibiting collagen synthesis. So a Cushing's patient with a UTI faces two problems: their immune system can't fight the infection effectively, AND if the infection causes tissue damage, the tissue can't repair itself normally. This is why infections in Cushing's patients can escalate quickly from minor to serious. It also explains why Cushing's patients are at higher risk for developing hyperglycemia during infection (cortisol + infection stress both raise glucose)."
  },
  {
    id: "adv_06", chapter: 0, topic: "Multi-System Integration", type: "sata",
    difficulty: "hard",
    objective: "Connect dehydration to cardiovascular and renal compensation (CO4, CO5, CO6)",
    stem: "A patient with severe diarrhea for 3 days presents with HR 118, BP 86/54, urine output 15 mL/hr (dark amber), and dry mucous membranes. Which compensatory mechanisms are responsible for the tachycardia and decreased urine output? Select all that apply.",
    options: [
      "The heart increases rate to compensate for reduced blood volume and maintain cardiac output",
      "The kidneys reduce urine output to conserve the remaining fluid volume",
      "ADH (antidiuretic hormone) is released, causing the kidneys to reabsorb more water",
      "The RAAS system activates, causing vasoconstriction and sodium/water retention"
    ],
    correct: [0, 1, 2, 3],
    rationale: "ALL four are happening simultaneously. This connects GI losses (Ch 9 — diarrhea) to fluid balance (Ch 6 — dehydration) to cardiovascular compensation (Ch 4) to renal response (Ch 7). Severe diarrhea causes massive fluid loss → hypovolemia. The body responds: (1) Baroreceptors detect low BP → sympathetic activation → tachycardia to maintain CO despite reduced volume. (2) The kidneys receive less blood flow and reduce output to conserve fluid. (3) The posterior pituitary releases ADH in response to high serum osmolality, telling the kidneys to reabsorb water (concentrated dark urine). (4) RAAS activates: renin → angiotensin II (vasoconstriction) → aldosterone (sodium and water retention). This is the body throwing every compensatory mechanism it has at the problem of volume loss."
  },
  {
    id: "adv_07", chapter: 0, topic: "Multi-System Integration", type: "mc",
    difficulty: "hard",
    objective: "Connect hypertension to stroke pathophysiology (CO5, CO6, CO7)",
    stem: "A patient with a 15-year history of poorly controlled hypertension presents with sudden left-sided weakness and slurred speech. CT scan shows a hemorrhage in the right cerebral hemisphere. The nurse understands the MOST likely mechanism linking the chronic hypertension to this hemorrhagic stroke is:",
    options: [
      "A blood clot formed in the heart and traveled to the brain",
      "Chronic high pressure weakened the walls of cerebral arteries, eventually causing one to rupture",
      "The patient's blood became too thick from hypertension, blocking a vessel",
      "Hypertension caused the brain tissue to swell and compress a blood vessel"
    ],
    correct: 1,
    rationale: "This connects long-standing cardiovascular disease (Ch 4 — hypertension) to its end-organ damage in the brain (Ch 11 — hemorrhagic stroke). Chronic hypertension batters the walls of small cerebral arteries over years, causing microaneurysm formation (Charcot-Bouchard aneurysms) and weakening of the vessel walls. Eventually, a weakened vessel ruptures under continued high pressure, causing intracerebral hemorrhage. The left-sided weakness with a right hemisphere hemorrhage is consistent — motor deficits appear on the OPPOSITE side of the brain lesion (contralateral). This scenario illustrates why hypertension is the number one modifiable risk factor for stroke — controlling BP prevents the years of vascular damage that precede the rupture."
  },
  {
    id: "adv_08", chapter: 0, topic: "Multi-System Integration", type: "mc",
    difficulty: "hard",
    objective: "Connect DKA to fluid, electrolyte, and acid-base disturbances (CO5, CO6)",
    stem: "A patient with Type 1 diabetes presents in diabetic ketoacidosis (DKA) with blood glucose 486 mg/dL, pH 7.18, and serum potassium 5.6 mEq/L. Despite the elevated serum potassium, the nurse knows that this patient likely has a TOTAL BODY potassium deficit because:",
    options: [
      "The lab result is incorrect and should be repeated",
      "Acidosis shifts potassium out of cells into the blood, masking intracellular depletion — once acidosis is corrected, potassium will shift back into cells and serum levels will drop dangerously",
      "High blood glucose destroys potassium molecules",
      "DKA only affects sodium levels, not potassium"
    ],
    correct: 1,
    rationale: "This is one of the trickiest concepts connecting acid-base (Ch 6) to diabetes (Ch 10) to electrolytes (Ch 6). In DKA, the acidosis causes hydrogen ions (H+) to move INTO cells. To maintain electrical neutrality, potassium moves OUT of cells into the serum — so the serum level looks normal or even high. But the patient has been losing potassium through osmotic diuresis (high glucose pulls water and electrolytes into the urine) for hours or days. Total body potassium is depleted. The danger: when you treat the acidosis with insulin and fluids, potassium shifts back into cells rapidly, and the serum potassium can crash — causing fatal cardiac arrhythmias. This is why potassium must be monitored closely and replaced during DKA treatment, EVEN when the initial level appears elevated."
  },

  // ═══════════════════════════════════════════
  // CHAPTER-SPECIFIC CLINICAL SCENARIOS (42 Qs)
  // ═══════════════════════════════════════════

  // ── CH 1-2: CELLULAR / INFLAMMATION ──

  {
    id: "adv_09", chapter: 1, topic: "Cancer Staging", type: "mc",
    difficulty: "hard",
    objective: "Describe staging and its clinical implications (CO5)",
    stem: "Two patients are both diagnosed with colon cancer. Patient A has a small, localized tumor with no lymph node involvement. Patient B has a large tumor that has spread to the liver and several lymph nodes. Which statement is correct about their treatment and prognosis?",
    options: [
      "Both patients have the same prognosis since they have the same type of cancer",
      "Patient A has a better prognosis because the cancer is localized; Patient B's metastasis to the liver indicates advanced disease with a significantly worse prognosis",
      "Patient B has a better prognosis because larger tumors respond better to chemotherapy",
      "Lymph node involvement does not affect cancer prognosis"
    ],
    correct: 1,
    rationale: "Staging matters more than diagnosis alone. Localized cancer (no lymph node involvement, no metastasis) has a much better prognosis because it can often be surgically removed completely. Once cancer has spread to lymph nodes and distant organs (liver metastasis), it's advanced/metastatic disease — the cancer has demonstrated the ability to invade, travel, and establish in new locations. Treatment shifts from curative intent to management. This is why screening for early detection (secondary prevention) is so valuable — catching cancer before it spreads dramatically changes outcomes."
  },
  {
    id: "adv_10", chapter: 2, topic: "Anaphylaxis", type: "ordering",
    difficulty: "hard",
    objective: "Apply knowledge of Type I hypersensitivity to a clinical emergency (CO4, CO5)",
    stem: "A patient develops anaphylaxis after receiving IV antibiotics. Place the nurse's actions in the correct PRIORITY order:",
    options: [
      "Administer epinephrine as prescribed",
      "Document the event and notify the pharmacy",
      "Stop the antibiotic infusion immediately"
    ],
    correct: [2, 0, 1],
    rationale: "In anaphylaxis, STOP THE TRIGGER FIRST — discontinue the infusion immediately to prevent further antigen exposure. Then administer epinephrine — it's the FIRST-LINE drug for anaphylaxis because it reverses bronchospasm (opens airways), increases blood pressure (counters vasodilation), and reduces further mediator release from mast cells. Documentation and notification are important but come AFTER life-saving interventions. This is ABCs in action — remove the cause, treat the life threat, then handle the administrative tasks."
  },
  {
    id: "adv_11", chapter: 2, topic: "Hypersensitivity Application", type: "mc",
    difficulty: "hard",
    objective: "Differentiate between Type I and Type IV hypersensitivity reactions in clinical context (CO4)",
    stem: "A nurse is caring for two patients. Patient A developed hives, wheezing, and hypotension within 5 minutes of receiving penicillin. Patient B developed a raised, red, itchy rash at the site of a nickel belt buckle that appeared over 48 hours. The nurse recognizes that these reactions differ because:",
    options: [
      "Patient A has a Type IV delayed reaction; Patient B has a Type I immediate reaction",
      "Patient A has a Type I immediate IgE-mediated reaction; Patient B has a Type IV delayed T-cell-mediated reaction",
      "Both patients are experiencing the same type of hypersensitivity reaction at different speeds",
      "Neither reaction involves the immune system"
    ],
    correct: 1,
    rationale: "Type I (immediate) hypersensitivity is IgE-mediated — it occurs within MINUTES of allergen exposure. IgE antibodies on mast cells trigger degranulation and histamine release → urticaria, bronchospasm, vasodilation, and potentially anaphylaxis. Classic triggers: drugs (penicillin), foods (peanuts), insect stings. Type IV (delayed) hypersensitivity is T-cell-mediated — it takes 24-72 HOURS to develop. Sensitized T cells recognize the antigen and mount an inflammatory response at the site of contact. Classic examples: contact dermatitis (nickel, poison ivy, latex), TB skin test (PPD). The key differentiators: speed of onset (minutes vs days) and mechanism (IgE/mast cells vs T cells). These are the two types you'll encounter most often clinically."
  },

  // ── CH 3: HEMATOPOIETIC ──

  {
    id: "adv_12", chapter: 3, topic: "Anemia Application", type: "mc",
    difficulty: "hard",
    objective: "Apply knowledge of anemia to clinical decision-making (CO5, CO6)",
    stem: "A patient with chronic kidney disease has a hemoglobin of 8.2 g/dL. The nurse understands that this anemia is MOST likely caused by:",
    options: [
      "Iron deficiency from poor dietary intake",
      "Decreased erythropoietin production by the damaged kidneys, resulting in reduced red blood cell production",
      "Excessive bleeding from the urinary tract",
      "Vitamin B-12 malabsorption"
    ],
    correct: 1,
    rationale: "The kidneys produce erythropoietin (EPO), the hormone that stimulates the bone marrow to produce red blood cells. In chronic kidney disease, the damaged kidneys produce less EPO → the bone marrow receives less stimulation → fewer RBCs are produced → anemia. This is called anemia of chronic kidney disease and is one of the most common complications of CKD. Treatment includes synthetic erythropoietin (epoetin alfa). This connects renal pathophysiology (Ch 7) to hematopoietic function (Ch 3) — the kidneys aren't just filters, they're endocrine organs."
  },
  {
    id: "adv_13", chapter: 1, topic: "Inheritance Patterns", type: "mc",
    difficulty: "hard",
    objective: "Differentiate between autosomal dominant and autosomal recessive inheritance patterns (CO1, CO5)",
    stem: "A patient is diagnosed with sickle cell disease. Both parents are carriers but do not have the disease themselves. The nurse recognizes this inheritance pattern as:",
    options: [
      "Autosomal dominant — only one copy of the gene is needed to express the disease",
      "Autosomal recessive — two copies of the defective gene (one from each parent) are required to express the disease",
      "X-linked recessive — the gene is carried on the X chromosome",
      "Mitochondrial inheritance — passed only through the mother"
    ],
    correct: 1,
    rationale: "Sickle cell disease follows an autosomal recessive inheritance pattern. Both parents are carriers (heterozygous — one normal gene, one sickle gene) and have sickle cell TRAIT but not the disease. The child inherited a defective gene from EACH parent (homozygous), resulting in the full disease. In autosomal recessive conditions, carrier parents have a 25% chance with each pregnancy of having an affected child. In contrast, autosomal DOMINANT conditions (like Huntington's disease, Marfan syndrome) require only ONE copy of the defective gene — an affected parent has a 50% chance of passing it to each child, and carriers don't exist because having one copy means having the disease. Key difference: recessive = need TWO copies, carriers exist; dominant = need only ONE copy, no carriers."
  },
  {
    id: "adv_14", chapter: 3, topic: "Pancytopenia", type: "sata",
    difficulty: "hard",
    objective: "Apply knowledge of hematopoietic disorders to clinical priorities (CO5, CO6)",
    stem: "A patient undergoing chemotherapy develops pancytopenia (low RBCs, WBCs, and platelets). Which nursing assessments are HIGHEST priority? Select all that apply.",
    options: [
      "Monitor for signs of infection (fever, chills, sore throat)",
      "Assess for bleeding (petechiae, bruising, bleeding gums, blood in stool)",
      "Monitor for fatigue and activity intolerance",
      "Assess for hair loss"
    ],
    correct: [0, 1],
    rationale: "In pancytopenia, ALL three cell lines are depleted, but the PRIORITY concerns are life-threatening: infection (from neutropenia/leukopenia — infections can become septic rapidly without adequate WBCs) and hemorrhage (from thrombocytopenia — uncontrolled bleeding can be fatal). Fatigue from anemia is real and impacts quality of life, but it's not immediately life-threatening. Hair loss is an expected side effect of chemo, not a priority assessment. Clinical prioritization means addressing what can KILL the patient first — infection and bleeding before comfort issues."
  },

  // ── CH 4: CARDIOVASCULAR ──

  {
    id: "adv_15", chapter: 4, topic: "MI Recognition", type: "mc",
    difficulty: "hard",
    objective: "Differentiate between stable angina and myocardial infarction (CO5, CO6)",
    stem: "A patient with known stable angina calls the clinic reporting chest pressure that started 45 minutes ago at rest, is not relieved by three doses of sublingual nitroglycerin, and is accompanied by diaphoresis and nausea. The nurse should advise:",
    options: [
      "Take a fourth nitroglycerin and rest for another hour",
      "Call 911 immediately — this presentation suggests myocardial infarction",
      "Schedule an appointment for tomorrow morning",
      "Take two aspirin and apply a heating pad to the chest"
    ],
    correct: 1,
    rationale: "This scenario screams MI: chest pain at REST (not exertion-triggered like stable angina), unrelieved by nitroglycerin (unlike angina which typically resolves with 1-3 doses), and accompanied by diaphoresis and nausea (autonomic nervous system activation from myocardial damage). The 45-minute duration alone is concerning — stable angina typically lasts 3-5 minutes. This patient needs emergent evaluation. 'Time is muscle' — every minute of coronary occlusion means more myocardial tissue death. The nurse cannot tell the patient to wait."
  },
  {
    id: "adv_16", chapter: 4, topic: "Heart Failure", type: "sata",
    difficulty: "hard",
    objective: "Relate cardiac hypertrophy and RAAS to heart failure progression (CO4, CO5, CO6)",
    stem: "A patient with chronic left-sided heart failure presents with worsening symptoms. Which findings would the nurse expect? Select all that apply.",
    options: [
      "Crackles (rales) in the lungs",
      "Peripheral edema in the ankles and feet",
      "Dyspnea, especially when lying flat (orthopnea)",
      "Jugular vein distention"
    ],
    correct: [0, 2],
    rationale: "LEFT-sided heart failure means the left ventricle can't pump blood forward effectively. Blood backs up behind the failing left ventricle — which means it backs up into the LUNGS. This causes pulmonary congestion → crackles/rales (fluid in alveoli) and dyspnea/orthopnea (fluid impairs gas exchange, worse when lying flat because gravity distributes fluid more evenly across lung fields). Peripheral edema and JVD are signs of RIGHT-sided heart failure — blood backs up behind the right ventricle into the systemic venous circulation. Left failure often leads to right failure over time, but the question asks about left-sided specifically."
  },
  {
    id: "adv_17", chapter: 4, topic: "Clinical ECG Application", type: "mc",
    difficulty: "hard",
    objective: "Apply knowledge of cardiac electrical activity to clinical scenarios (CO5)",
    stem: "A patient's cardiac monitor shows an irregularly irregular rhythm with no identifiable P waves and a heart rate of 142 bpm. The nurse recognizes this rhythm as:",
    options: [
      "Sinus tachycardia",
      "Atrial fibrillation with rapid ventricular response",
      "Ventricular tachycardia",
      "Normal sinus rhythm"
    ],
    correct: 1,
    rationale: "The two key findings are: (1) irregularly irregular rhythm — the intervals between beats have no pattern, and (2) no identifiable P waves — the atria are not depolarizing in an organized fashion. These are the defining characteristics of atrial fibrillation. The rate of 142 indicates rapid ventricular response (the ventricles are responding too quickly to the chaotic atrial signals). Sinus tachycardia is fast but REGULAR with identifiable P waves. V-tach is fast and usually regular with wide QRS complexes. The clinical significance: A-fib creates turbulent blood flow in the atria, increasing stroke risk from clot formation."
  },

  // ── CH 5: RESPIRATORY ──

  {
    id: "adv_18", chapter: 5, topic: "Asthma vs COPD", type: "mc",
    difficulty: "hard",
    objective: "Differentiate asthma from COPD in a clinical presentation (CO5, CO6)",
    stem: "A 28-year-old patient presents with acute dyspnea and diffuse wheezing that resolves completely after bronchodilator treatment. Pulmonary function tests performed the following week are completely normal. This presentation is MOST consistent with:",
    options: [
      "Chronic bronchitis",
      "Emphysema",
      "Asthma",
      "Pulmonary fibrosis"
    ],
    correct: 2,
    rationale: "The critical distinction: asthma is REVERSIBLE airway obstruction, while COPD (chronic bronchitis, emphysema) is largely IRREVERSIBLE. This patient is young (asthma is more common in younger patients), the symptoms resolved completely with a bronchodilator, and PFTs were normal between episodes. In COPD, there would be persistent obstruction on PFTs even between exacerbations, the obstruction would not fully reverse with bronchodilators, and the typical age of presentation is older (40s-60s with significant smoking history). Complete reversibility + normal baseline PFTs = asthma."
  },
  {
    id: "adv_19", chapter: 5, topic: "Respiratory Clinical Scenario", type: "mc",
    difficulty: "hard",
    objective: "Apply respiratory pathophysiology to patient assessment (CO5, CO6)",
    stem: "A patient with severe emphysema is breathing with pursed lips. The nurse understands that this breathing pattern is beneficial because it:",
    options: [
      "Increases the amount of oxygen inhaled",
      "Creates back-pressure that keeps the airways open longer during exhalation, preventing premature airway collapse and air trapping",
      "Strengthens the diaphragm muscle",
      "Reduces the number of breaths needed per minute"
    ],
    correct: 1,
    rationale: "In emphysema, the loss of elastic recoil means the small airways have no structural support and tend to collapse during exhalation — trapping air. Pursed-lip breathing creates a small amount of positive pressure in the airways during exhalation, acting as a splint that keeps them open longer. This allows more trapped air to escape, reducing hyperinflation and improving gas exchange. It's a compensatory mechanism the patient develops instinctively. Nurses should encourage and teach this technique — it's one of the most effective non-pharmacological interventions for COPD."
  },

  // ── CH 6: FLUIDS / ELECTROLYTES / ABGs ──

  {
    id: "adv_20", chapter: 6, topic: "Complex ABG", type: "mc",
    difficulty: "hard",
    objective: "Interpret ABGs with compensation in clinical context (CO6)",
    stem: "A patient with a 3-day history of vomiting has the following ABG: pH 7.50, PaCO2 48, HCO3 36. The elevated PaCO2 indicates that:",
    options: [
      "The patient has a primary respiratory acidosis",
      "The respiratory system is compensating by retaining CO2 to lower the pH back toward normal",
      "The patient has a combined respiratory and metabolic alkalosis",
      "The ABG results are invalid and should be redrawn"
    ],
    correct: 1,
    rationale: "Step by step: pH 7.50 = alkalosis. HCO3 36 = elevated (metabolic alkalosis from vomiting — loss of HCl/stomach acid). The PaCO2 is 48 (above normal 35-45). In alkalosis, you'd expect the body to try to LOWER the pH back toward normal. The respiratory system compensates by HYPOVENTILATING — breathing slower/shallower to RETAIN CO2 (an acid), which works to pull the pH down. So the elevated CO2 is COMPENSATORY, not a primary problem. If this were primary respiratory acidosis, the pH would be LOW, not high. Always identify the primary problem first (alkalotic pH + high bicarb = metabolic alkalosis), then determine if the other value is compensating."
  },
  {
    id: "adv_21", chapter: 6, topic: "Electrolyte Emergency", type: "mc",
    difficulty: "hard",
    objective: "Apply knowledge of electrolyte imbalances to clinical prioritization (CO6)",
    stem: "A nurse is reviewing morning lab results for four patients. Which result requires the MOST urgent intervention?",
    options: [
      "Sodium 132 mEq/L (low normal: 135-145)",
      "Calcium 8.8 mg/dL (low normal: 8.5-10.5)",
      "Potassium 2.8 mEq/L (low normal: 3.5-5.0)",
      "Magnesium 1.6 mEq/L (low normal: 1.5-2.5)"
    ],
    correct: 2,
    rationale: "All values are slightly abnormal except potassium at 2.8, which is significantly below normal and dangerous. Severe hypokalemia (K+ < 3.0) can cause life-threatening cardiac dysrhythmias — including ventricular fibrillation and cardiac arrest. Potassium is critical for maintaining the cardiac cell membrane potential, and when it's this low, the heart's electrical system becomes unstable. The other values are only mildly outside normal and are not immediately dangerous. The nurse should obtain a stat ECG (look for flattened T waves, U waves, ST depression) and notify the provider for urgent potassium replacement."
  },
  {
    id: "adv_22", chapter: 6, topic: "Fluid Overload", type: "sata",
    difficulty: "hard",
    objective: "Differentiate fluid overload from dehydration in clinical assessment (CO5, CO6)",
    stem: "A patient with heart failure has gained 5 lbs in 2 days. Which additional assessment findings would support a diagnosis of fluid volume EXCESS? Select all that apply.",
    options: [
      "Crackles in the lung bases",
      "Bounding pulse",
      "Poor skin turgor and dry mucous membranes",
      "Peripheral edema (3+ pitting)"
    ],
    correct: [0, 1, 3],
    rationale: "Rapid weight gain (1-2 lbs = approximately 1 liter of fluid) is a cardinal sign of fluid retention. Crackles indicate fluid in the alveoli (pulmonary congestion). Bounding pulse indicates increased intravascular volume — the heart is pumping a larger volume, creating stronger peripheral pulses. Pitting edema indicates fluid shifting from the vascular space into the interstitial tissues. Poor skin turgor and dry mucous membranes are signs of fluid DEFICIT (dehydration) — the opposite problem. In heart failure, the heart can't pump effectively, causing fluid to back up and accumulate. Daily weights are one of the most important monitoring tools in heart failure management."
  },

  // ── CH 7: URINARY ──

  {
    id: "adv_23", chapter: 1, topic: "Autosomal Dominant Inheritance", type: "mc",
    difficulty: "hard",
    objective: "Apply knowledge of autosomal dominant inheritance to clinical scenarios (CO1, CO5)",
    stem: "A 35-year-old patient is diagnosed with Huntington's disease. His father also had Huntington's. The patient asks, 'What are the chances my children will get this?' The nurse understands that because Huntington's follows an autosomal dominant inheritance pattern:",
    options: [
      "Each child has a 25% chance of inheriting the disease",
      "Each child has a 50% chance of inheriting the disease — only one copy of the defective gene is needed to develop the condition",
      "Children are only at risk if both parents carry the gene",
      "The disease only passes to male children"
    ],
    correct: 1,
    rationale: "Autosomal dominant conditions require only ONE copy of the defective gene to manifest the disease. An affected parent (heterozygous — one normal gene, one defective gene) has a 50% chance of passing the defective gene to each child, regardless of the child's sex. If the child inherits it, they WILL develop the disease — there are no 'carriers' in dominant conditions. This differs from autosomal recessive conditions (like sickle cell disease) where two copies are needed and carriers exist. Huntington's, Marfan syndrome, and polycystic kidney disease (adult form) are classic autosomal dominant conditions. The 50% risk per pregnancy is a critical genetic counseling concept."
  },
  {
    id: "adv_24", chapter: 7, topic: "Urine Culture", type: "mc",
    difficulty: "hard",
    objective: "Describe the purpose of a urine culture and apply to treatment decisions (CO5)",
    stem: "A patient is started on empiric antibiotics for a suspected UTI. The urine culture results return 3 days later showing the organism is RESISTANT to the prescribed antibiotic. The nurse should expect the provider to:",
    options: [
      "Continue the same antibiotic since it was already started",
      "Change the antibiotic to one the culture shows the organism is sensitive to",
      "Discontinue all antibiotics since 3 days have passed",
      "Add a second antibiotic on top of the first"
    ],
    correct: 1,
    rationale: "This is why we obtain cultures BEFORE starting antibiotics. Empiric therapy is an educated guess based on the most likely organism. The culture and sensitivity results tell us exactly which organism is present and which antibiotics will kill it. If the organism is resistant to the current antibiotic, continuing it is ineffective — the bacteria will survive and the infection will persist or worsen. The appropriate action is to switch to an antibiotic the culture shows sensitivity to. This is evidence-based, targeted therapy versus empiric therapy — the culture provides the evidence to guide the specific treatment."
  },

  // ── CH 9: GI ──

  {
    id: "adv_25", chapter: 9, topic: "GI Bleed Recognition", type: "mc",
    difficulty: "hard",
    objective: "Apply knowledge of PUD complications to clinical assessment (CO5, CO6)",
    stem: "A patient with a history of peptic ulcer disease presents with hematemesis (vomiting blood) that looks like coffee grounds, melena (black tarry stool), HR 112, and BP 94/58. The nurse's PRIORITY action is:",
    options: [
      "Administer a proton pump inhibitor orally",
      "Prepare for fluid resuscitation and potential blood transfusion — this patient is showing signs of hemorrhagic shock from an upper GI bleed",
      "Schedule an outpatient endoscopy for next week",
      "Obtain a stool sample for H. pylori testing"
    ],
    correct: 1,
    rationale: "This patient is actively bleeding and showing signs of hemorrhagic shock (tachycardia and hypotension = the body is compensating for blood loss). Coffee-ground emesis indicates blood that has been exposed to stomach acid (upper GI source). Melena (black tarry stool) confirms significant bleeding — the blood has been digested during transit through the GI tract. Priority is ABC: maintain circulation through aggressive fluid resuscitation and prepare for possible blood transfusion. Endoscopy is needed urgently (not next week) to identify and potentially treat the bleeding source. H. pylori testing is important but not while the patient is hemodynamically unstable."
  },
  {
    id: "adv_26", chapter: 9, topic: "GERD Clinical Application", type: "mc",
    difficulty: "hard",
    objective: "Relate pathophysiology to clinical manifestations of GERD (CO6)",
    stem: "A patient with GERD reports worsening symptoms at night. The nurse understands the reason symptoms worsen in a recumbent position is that:",
    options: [
      "The stomach produces more acid at night",
      "Gravity no longer helps keep gastric contents in the stomach, allowing acid to reflux more easily through a weakened LES",
      "The esophagus produces less mucus at night",
      "Blood flow to the stomach decreases during sleep"
    ],
    correct: 1,
    rationale: "When upright, gravity helps keep gastric contents in the stomach below the LES. When lying down, this gravitational advantage is lost — acid can more easily reflux through a weakened or relaxed LES into the esophagus. This is why GERD management includes elevating the head of the bed 6-8 inches (not just adding pillows — you need to elevate the torso), avoiding eating 2-3 hours before lying down, and sleeping on the left side (positions the stomach below the esophagus). Understanding the positional mechanism helps patients understand WHY these lifestyle modifications work."
  },
  {
    id: "adv_27", chapter: 9, topic: "Diverticulitis Emergency", type: "mc",
    difficulty: "hard",
    objective: "Apply knowledge of diverticular disease complications to clinical prioritization (CO5, CO6)",
    stem: "A patient with known diverticulosis presents with severe left lower quadrant pain, fever of 101.8°F, and rebound tenderness. The nurse is MOST concerned that this patient may be developing:",
    options: [
      "Constipation requiring a laxative",
      "Diverticulitis with possible perforation — rebound tenderness suggests peritoneal irritation",
      "A urinary tract infection",
      "Irritable bowel syndrome"
    ],
    correct: 1,
    rationale: "Left lower quadrant pain (where the sigmoid colon lives) + fever (indicating infection/inflammation) + rebound tenderness (the hallmark sign of peritoneal irritation) in a patient with known diverticulosis = diverticulitis until proven otherwise, with the rebound tenderness raising concern for perforation. If a diverticulum perforates, intestinal contents leak into the peritoneal cavity → peritonitis → potential sepsis. This is a surgical emergency. Rebound tenderness is assessed by pressing slowly on the abdomen and then releasing quickly — pain on RELEASE indicates the inflamed peritoneum is being disturbed. This patient needs emergent imaging (CT), IV antibiotics, NPO status, and likely surgical consultation."
  },
  {
    id: "adv_28", chapter: 9, topic: "Liver Failure Application", type: "mc",
    difficulty: "hard",
    objective: "Apply knowledge of cirrhosis pathophysiology to clinical manifestations (CO5, CO6)",
    stem: "A patient with cirrhosis has a serum albumin of 1.8 g/dL (normal 3.5-5.0). The nurse understands that this low albumin contributes to the patient's ascites because:",
    options: [
      "Albumin causes the liver to produce excess fluid",
      "Albumin maintains oncotic pressure in the blood vessels — without it, fluid leaks from the vascular space into the peritoneal cavity",
      "Low albumin directly irritates the peritoneum, causing fluid production",
      "Albumin absorbs excess fluid from the abdomen"
    ],
    correct: 1,
    rationale: "Albumin is the major protein responsible for maintaining plasma oncotic (colloid osmotic) pressure — it acts like a sponge that keeps fluid inside the blood vessels. The cirrhotic liver can't produce adequate albumin → oncotic pressure drops → fluid shifts out of the vascular space into the interstitial and peritoneal spaces (third-spacing) → ascites and peripheral edema. This is the same mechanism as edema in malnutrition (kwashiorkor) — low protein = low oncotic pressure = fluid leaks out of vessels. In cirrhosis, portal hypertension ALSO contributes to ascites by increasing hydrostatic pressure in the portal system. Both forces push fluid out of vessels and into the peritoneal cavity."
  },

  // ── CH 10: ENDOCRINE / DIABETES ──

  {
    id: "adv_29", chapter: 10, topic: "DKA vs HHS", type: "mc",
    difficulty: "hard",
    objective: "Differentiate between DKA and HHS in clinical presentation (CO5, CO6)",
    stem: "A patient presents with blood glucose of 824 mg/dL, serum osmolality of 340 mOsm/kg (normal 275-295), severe dehydration, and altered mental status — but pH is 7.38 and there are NO ketones in the urine. This presentation is MOST consistent with:",
    options: [
      "Diabetic ketoacidosis (DKA)",
      "Hypoglycemia",
      "Hyperglycemic hyperosmolar syndrome (HHS)",
      "Addisonian crisis"
    ],
    correct: 2,
    rationale: "The key differentiator: extremely high glucose (often >600) WITH normal pH and NO ketones = HHS, not DKA. In HHS (typically Type 2 DM), there IS some insulin being produced — enough to prevent lipolysis and ketone formation, but not enough to control glucose. Without ketosis, there's no acidosis, so pH stays normal. The extreme hyperglycemia causes osmotic diuresis → profound dehydration → hyperosmolality → altered mental status. DKA (typically Type 1) has moderate hyperglycemia, ketones, acidosis, and Kussmaul breathing. HHS has EXTREME hyperglycemia, no ketones, normal pH, and more severe dehydration and neurological changes. HHS has a higher mortality rate than DKA."
  },
  {
    id: "adv_30", chapter: 10, topic: "Hypoglycemia Recognition", type: "sata",
    difficulty: "hard",
    objective: "Identify and prioritize management of hypoglycemia (CO5, CO6)",
    stem: "A diabetic patient on insulin becomes diaphoretic, tremulous, confused, and has a blood glucose of 48 mg/dL. Which nursing actions are appropriate? Select all that apply.",
    options: [
      "If the patient can swallow safely, give 15g of fast-acting carbohydrate (juice, glucose tablets)",
      "Administer the patient's scheduled insulin dose",
      "Recheck blood glucose in 15 minutes after treatment",
      "If the patient is unconscious, administer IV dextrose or IM glucagon as prescribed"
    ],
    correct: [0, 2, 3],
    rationale: "Hypoglycemia (BG <70) is a medical emergency that requires immediate treatment. The Rule of 15: give 15g of fast-acting carbs, wait 15 minutes, recheck. If the patient can't swallow safely (unconscious, seizure), give IV D50 or IM glucagon — NEVER put food/fluid in the mouth of an unconscious patient (aspiration risk). NEVER give insulin during hypoglycemia — insulin would drop the glucose even further, potentially causing seizures, loss of consciousness, or death. This is one of the most critical safety priorities in diabetes management. After treating, investigate the cause: missed meal? Too much insulin? Unexpected exercise?"
  },
  {
    id: "adv_31", chapter: 10, topic: "Thyroid Lab Interpretation", type: "mc",
    difficulty: "hard",
    objective: "Apply knowledge of thyroid axis to lab interpretation (CO5, CO6)",
    stem: "A patient's lab results show: TSH 0.1 mIU/L (low; normal 0.5-4.5) and Free T4 4.8 ng/dL (high; normal 0.8-1.8). The nurse interprets these results as:",
    options: [
      "Hypothyroidism — the thyroid is underproducing",
      "Primary hyperthyroidism — the thyroid is overproducing T4, so the pituitary suppresses TSH via negative feedback",
      "The lab results are contradictory and must be wrong",
      "Normal thyroid function"
    ],
    correct: 1,
    rationale: "Understanding the feedback loop is key: when the thyroid overproduces T4 (high Free T4), the elevated hormone signals the pituitary to STOP producing TSH (negative feedback) → TSH drops to near zero. Low TSH + high T4 = hyperthyroidism. The opposite pattern (high TSH + low T4) = hypothyroidism — the pituitary is screaming at a failing thyroid to produce more. This inverse relationship between TSH and T4 is one of the most clinically important lab interpretation skills. In Graves' disease (the most common cause of hyperthyroidism), autoantibodies mimic TSH and stimulate the thyroid directly, so TSH is suppressed because the thyroid is already being overstimulated."
  },
  {
    id: "adv_32", chapter: 11, topic: "Parietal Lobe Deficits", type: "mc",
    difficulty: "hard",
    objective: "Apply knowledge of brain lobe function to clinical assessment (CO5, CO6)",
    stem: "A patient who had a right parietal lobe stroke is eating lunch and only eats the food on the right side of the plate, ignoring everything on the left. When asked to draw a clock, the patient draws all the numbers on the right half. This phenomenon is called:",
    options: [
      "Visual field blindness from occipital lobe damage",
      "Unilateral neglect (hemispatial neglect) — the patient is unaware of the left side of their environment due to right parietal lobe damage",
      "Confusion from frontal lobe damage",
      "Left-sided paralysis preventing the patient from turning their head"
    ],
    correct: 1,
    rationale: "Unilateral neglect (hemispatial neglect) is a classic parietal lobe deficit — particularly from RIGHT parietal damage. The patient is not blind and not paralyzed — they simply do not PERCEIVE or ATTEND TO the left side of space. They eat from one side of the plate, shave one side of the face, and draw only half a clock because the left side of their world doesn't exist in their awareness. This is different from a visual field cut (occipital lobe) where the patient knows something is missing. In neglect, the patient doesn't know what they're missing. Nursing implications: approach the patient from the unaffected side, place call lights and items on the right, and gradually train the patient to scan left. The parietal lobe processes sensory information and spatial awareness — damage disrupts the brain's spatial map."
  },

  // ── CH 11: NEURO ──

  {
    id: "adv_33", chapter: 11, topic: "Aphasia Types", type: "mc",
    difficulty: "hard",
    objective: "Differentiate between types of aphasia and their anatomical basis (CO5, CO6)",
    stem: "Two stroke patients both have difficulty with language. Patient A speaks in fluent but nonsensical sentences ('The dog is wishing the car to the purple') and cannot understand what the nurse is saying. Patient B understands the nurse's questions but can only produce single words with great effort ('yes... no... water...'). The nurse recognizes that:",
    options: [
      "Patient A has Broca's aphasia (frontal lobe); Patient B has Wernicke's aphasia (temporal lobe)",
      "Patient A has Wernicke's aphasia (temporal lobe — impaired comprehension, fluent but meaningless speech); Patient B has Broca's aphasia (frontal lobe — impaired speech production, comprehension intact)",
      "Both patients have the same type of aphasia at different severities",
      "Neither patient has aphasia — these are signs of confusion"
    ],
    correct: 1,
    rationale: "Wernicke's aphasia (receptive/fluent aphasia) results from damage to Wernicke's area in the TEMPORAL lobe. The patient speaks fluently and in complete sentences, but the words are meaningless or jumbled — and they CANNOT understand spoken or written language. It sounds like a foreign language. Broca's aphasia (expressive/non-fluent aphasia) results from damage to Broca's area in the FRONTAL lobe. The patient understands everything but CANNOT produce fluent speech — they speak in short, effortful phrases. They know what they want to say but can't get the words out. Memory trick: Broca's = Broken speech (frontal, production problem). Wernicke's = Wordy but Wrong (temporal, comprehension problem). This distinction matters for nursing communication — with Broca's, use yes/no questions and give time. With Wernicke's, use gestures, pictures, and demonstration."
  },
  {
    id: "adv_34", chapter: 11, topic: "Brain Lobe Function", type: "sata",
    difficulty: "hard",
    objective: "Apply knowledge of brain lobe function to clinical assessment of neurological deficits (CO5, CO6)",
    stem: "A patient has a stroke affecting the frontal lobe. Which deficits would the nurse expect to assess? Select all that apply.",
    options: [
      "Impaired voluntary motor movement on the contralateral side",
      "Personality changes, impaired judgment, and difficulty with planning/problem-solving",
      "Expressive aphasia (Broca's area — difficulty producing speech, but comprehension intact)",
      "Loss of vision in the opposite visual field"
    ],
    correct: [0, 1, 2],
    rationale: "The frontal lobe controls voluntary motor function (primary motor cortex), executive functions (judgment, planning, problem-solving, impulse control), personality, and contains Broca's area (speech production) in the dominant hemisphere. Damage causes: contralateral motor deficits (the motor cortex crosses over), personality/behavioral changes and impaired judgment (prefrontal cortex), and expressive aphasia if Broca's area is involved — the patient knows what they want to say but can't form the words. Loss of the opposite visual field (homonymous hemianopia) is an OCCIPITAL lobe deficit, not frontal. Other lobe functions to know: temporal = hearing, memory, Wernicke's area (receptive language); parietal = sensory processing, spatial awareness; occipital = vision."
  },
  {
    id: "adv_35", chapter: 11, topic: "Seizure Application", type: "mc",
    difficulty: "hard",
    objective: "Apply knowledge of seizures to clinical scenarios (CO5, CO7)",
    stem: "A patient's seizure has been continuous for 7 minutes with no signs of stopping. The nurse recognizes this as:",
    options: [
      "A normal seizure duration — wait and observe",
      "Status epilepticus — a medical emergency requiring immediate intervention to prevent brain damage",
      "A focal seizure that will resolve on its own",
      "A pseudoseizure that does not require treatment"
    ],
    correct: 1,
    rationale: "Status epilepticus is defined as a seizure lasting longer than 5 minutes or two or more seizures without full recovery of consciousness between them. It is a MEDICAL EMERGENCY — prolonged seizure activity causes excessive neuronal firing that can lead to neuronal death, hyperthermia, rhabdomyolysis, respiratory failure, and brain damage. Treatment includes benzodiazepines (lorazepam, diazepam) as first-line to stop the seizure, airway management, and identifying the cause. Every minute counts — the longer a seizure continues, the harder it becomes to stop and the greater the risk of permanent brain injury."
  },
  {
    id: "adv_36", chapter: 11, topic: "Dementia Application", type: "mc",
    difficulty: "hard",
    objective: "Differentiate delirium from dementia (CO5)",
    stem: "An 80-year-old patient with known mild dementia is admitted for hip surgery. On post-op day 1, the patient becomes acutely confused, agitated, and is seeing people who aren't there. The family says, 'She was never this bad before surgery.' The nurse suspects:",
    options: [
      "Rapid progression of the patient's dementia",
      "Delirium superimposed on dementia — an acute, reversible change likely caused by post-operative factors",
      "The dementia was previously underdiagnosed",
      "Normal post-operative behavior in elderly patients"
    ],
    correct: 1,
    rationale: "The KEY differentiator: DELIRIUM is acute onset (hours to days) and potentially REVERSIBLE; DEMENTIA is gradual onset (months to years) and irreversible. This patient's baseline was mild dementia, but the acute, sudden worsening after surgery is delirium — not progression of the dementia. Common post-op causes of delirium include medications (anesthesia, opioids), infection (UTI is extremely common), pain, dehydration, electrolyte imbalances, and unfamiliar environment. Delirium is a medical emergency that requires finding and treating the underlying cause. The visual hallucinations are a hallmark of delirium that typically don't occur in mild-moderate dementia."
  },

  // ── ADDITIONAL COMPLEX SCENARIOS ──

  {
    id: "adv_37", chapter: 3, topic: "Sickle Cell Crisis", type: "mc",
    difficulty: "hard",
    objective: "Apply knowledge of RBC pathology to clinical presentation (CO5, CO6)",
    stem: "A patient with sickle cell disease presents in vaso-occlusive crisis with severe pain in the chest and extremities. The nurse understands that the pain is caused by:",
    options: [
      "Infection in the bone marrow",
      "Sickled red blood cells blocking blood flow in small vessels, causing ischemia and tissue infarction",
      "Excessive iron deposits in the joints",
      "Overproduction of white blood cells"
    ],
    correct: 1,
    rationale: "In sickle cell disease, RBCs become rigid and crescent-shaped (sickled) under conditions of low oxygen, dehydration, stress, or infection. These sickled cells cannot flow through small capillaries — they get stuck, forming blockages. Downstream tissue is deprived of oxygen (ischemia), causing intense pain and potential tissue death (infarction). The chest pain may indicate acute chest syndrome — a life-threatening complication involving sickling in the pulmonary vasculature. Management focuses on hydration (reduces sickling), oxygen (prevents further deoxygenation), pain management, and treating any underlying triggers."
  },
  {
    id: "adv_38", chapter: 11, topic: "Brain Lobe Functions", type: "mc",
    difficulty: "hard",
    objective: "Apply knowledge of brain lobe function to clinical assessment (CO5, CO6)",
    stem: "A patient who had an occipital lobe stroke reports that they can see objects on the right side of their visual field but cannot see anything on the left side — in EITHER eye. The nurse documents this as:",
    options: [
      "Blindness in the left eye",
      "Homonymous hemianopia — loss of the same visual field in both eyes, caused by damage to the visual processing area on one side of the brain",
      "Unilateral neglect from parietal lobe damage",
      "Cataracts causing partial vision loss"
    ],
    correct: 1,
    rationale: "The occipital lobe processes VISION. The visual pathways cross partially, so damage to one occipital lobe causes loss of the OPPOSITE visual field in BOTH eyes — this is homonymous hemianopia. The patient isn't blind in one eye — they've lost the left half of their visual field bilaterally. This is different from unilateral neglect (parietal lobe) where the patient doesn't attend to one side but isn't actually blind. Nursing safety implications: approach from the intact visual field side, teach the patient to scan toward the affected side, position the call light and belongings on the side they can see. The four lobes and their primary functions: frontal = motor, personality, judgment, Broca's speech; parietal = sensation, spatial awareness; temporal = hearing, memory, Wernicke's comprehension; occipital = vision."
  },
  {
    id: "adv_39", chapter: 11, topic: "Dementia Differentiation", type: "mc",
    difficulty: "hard",
    objective: "Differentiate between Lewy body dementia and Alzheimer's disease (CO5)",
    stem: "A patient's family reports that their loved one has progressive cognitive decline, but unlike their neighbor who has Alzheimer's, this patient also experiences vivid visual hallucinations, significant fluctuations in alertness throughout the day, and has developed a shuffling gait with rigid movements. The nurse recognizes these features are most consistent with:",
    options: [
      "Late-stage Alzheimer's disease",
      "Lewy body dementia — distinguished from Alzheimer's by the presence of visual hallucinations, fluctuating cognition, and parkinsonian motor features",
      "Vascular dementia from multiple small strokes",
      "Normal aging with anxiety"
    ],
    correct: 1,
    rationale: "Lewy body dementia (LBD) shares cognitive decline with Alzheimer's, but has three distinguishing features that set it apart: (1) Recurrent, detailed VISUAL HALLUCINATIONS — often of people or animals, typically early in the disease. Hallucinations are not typical of early-to-mid Alzheimer's. (2) FLUCTUATING cognition and alertness — the patient may be lucid and oriented one hour and profoundly confused the next. Alzheimer's decline is more gradual and consistent. (3) PARKINSONIAN motor features — shuffling gait, rigidity, bradykinesia, tremor — because Lewy bodies (abnormal protein deposits) affect both cortical and subcortical areas. This distinction matters clinically because LBD patients are EXTREMELY sensitive to antipsychotic medications — drugs commonly used for agitation in other dementias can cause severe, life-threatening reactions in LBD."
  },
  {
    id: "adv_40", chapter: 9, topic: "Portal Hypertension", type: "sata",
    difficulty: "hard",
    objective: "Connect cirrhosis pathophysiology to its life-threatening complications (CO5, CO6)",
    stem: "A patient with cirrhosis develops portal hypertension. Which complications directly result from increased pressure in the portal venous system? Select all that apply.",
    options: [
      "Esophageal varices (dilated veins in the esophagus at risk for rupture)",
      "Splenomegaly (enlarged spleen causing platelet sequestration)",
      "Caput medusae (distended periumbilical veins visible on the abdomen)",
      "Hepatic encephalopathy (confusion from ammonia buildup)"
    ],
    correct: [0, 1, 2],
    rationale: "Portal hypertension means blood can't flow easily through the scarred liver, so it backs up and finds alternative routes (collateral circulation). Esophageal varices form when blood detours through esophageal veins — these thin-walled veins can rupture catastrophically, causing massive hemorrhage. Splenomegaly occurs because blood backs up into the splenic vein — the enlarged spleen then traps and destroys platelets (contributing to thrombocytopenia and bleeding risk). Caput medusae are visible dilated veins around the umbilicus from portal blood seeking alternate routes. Hepatic encephalopathy is caused by the liver's inability to clear ammonia — it's related to liver FAILURE, not portal hypertension directly (though portal-systemic shunting allows ammonia to bypass the liver, worsening it)."
  },
  {
    id: "adv_41", chapter: 10, topic: "Adrenal Crisis", type: "mc",
    difficulty: "hard",
    objective: "Apply knowledge of cortisol function to emergency scenarios (CO5, CO6)",
    stem: "A patient who has been taking high-dose prednisone for 6 months is admitted for emergency surgery. The surgeon plans to discontinue all medications pre-operatively. The nurse should be MOST concerned about:",
    options: [
      "Hyperglycemia from surgical stress",
      "Adrenal crisis — the patient's adrenal glands have been suppressed by chronic exogenous steroids and cannot produce adequate cortisol to handle the stress of surgery",
      "Allergic reaction to anesthesia",
      "Excessive blood clotting during surgery"
    ],
    correct: 1,
    rationale: "Chronic exogenous steroid use suppresses the HPA axis through negative feedback — the adrenal glands atrophy from disuse because the body has been receiving cortisol from the medication. If steroids are abruptly discontinued, especially during physiological stress (surgery, illness, trauma), the atrophied adrenals CANNOT mount an appropriate cortisol response. This causes adrenal crisis (acute adrenal insufficiency): severe hypotension, cardiovascular collapse, shock, and potentially death. This is why steroids must be TAPERED, not stopped abruptly, and why stress-dose steroids are given perioperatively to chronically steroid-dependent patients."
  },
  {
    id: "adv_42", chapter: 10, topic: "Thyroid Storm", type: "mc",
    difficulty: "hard",
    objective: "Recognize life-threatening endocrine emergencies (CO5, CO6)",
    stem: "A patient with undiagnosed Graves' disease undergoes surgery. Post-operatively, the patient develops a temperature of 104.2°F, heart rate of 168, severe agitation, and delirium. The nurse suspects:",
    options: [
      "Post-operative infection",
      "Malignant hyperthermia from anesthesia",
      "Thyroid storm — a life-threatening exacerbation of hyperthyroidism triggered by the physiological stress of surgery",
      "Normal post-operative recovery"
    ],
    correct: 2,
    rationale: "Thyroid storm (thyrotoxic crisis) is a medical emergency where hyperthyroidism becomes life-threatening. It's often triggered by a physiological stressor (surgery, infection, trauma, labor) in a patient with uncontrolled or undiagnosed hyperthyroidism. The massive surge of thyroid hormones causes extreme hypermetabolism: dangerously high fever (not typical of simple infection), severe tachycardia (can cause heart failure), extreme agitation/delirium, and potentially cardiovascular collapse and death. Treatment requires immediate beta-blockers (control heart rate), antithyroid medications, cooling measures, and supportive care. Mortality is 20-30% even with treatment. This is why thyroid function should ideally be assessed before elective surgery."
  },
  {
    id: "adv_43", chapter: 5, topic: "Respiratory Failure", type: "mc",
    difficulty: "hard",
    objective: "Apply respiratory pathophysiology to critical clinical scenarios (CO5, CO6)",
    stem: "A patient with severe pneumonia has the following ABG: pH 7.22, PaCO2 62, PaO2 54, HCO3 24. The nurse recognizes this patient is in:",
    options: [
      "Compensated respiratory alkalosis",
      "Acute respiratory failure with both hypoxemia and hypercapnia",
      "Metabolic acidosis with respiratory compensation",
      "Normal acid-base status"
    ],
    correct: 1,
    rationale: "Interpret step by step: pH 7.22 = severe acidosis. PaCO2 62 = significantly elevated (the cause of the acidosis — respiratory). HCO3 24 = normal (no renal compensation yet — this is acute). PaO2 54 = severely low (normal >80) — hypoxemia. This patient has acute respiratory failure: the infected lungs cannot adequately exchange gases — they can't get enough oxygen IN (hypoxemia) or enough CO2 OUT (hypercapnia). The normal bicarb confirms this is acute, not chronic. This patient needs immediate respiratory support — supplemental oxygen at minimum, possibly intubation and mechanical ventilation if they cannot maintain adequate oxygenation. Pneumonia has caused the gas exchange surfaces to fill with inflammatory exudate, drastically reducing functional alveolar area."
  },
  {
    id: "adv_44", chapter: 4, topic: "DVT to PE", type: "mc",
    difficulty: "hard",
    objective: "Connect peripheral vascular pathology to pulmonary complications (CO5, CO6)",
    stem: "A post-surgical patient with a known deep vein thrombosis in the left leg suddenly develops acute shortness of breath, sharp chest pain with inspiration, tachycardia, and an oxygen saturation of 86%. The nurse suspects:",
    options: [
      "Pneumonia from post-operative atelectasis",
      "A pulmonary embolism — a clot from the DVT has dislodged and traveled to the pulmonary vasculature",
      "An anxiety attack from fear of the DVT",
      "Fluid overload from IV fluids"
    ],
    correct: 1,
    rationale: "This is a classic and life-threatening complication: a blood clot from the leg DVT breaks loose (embolizes), travels through the venous system to the right heart, and lodges in the pulmonary arterial system — blocking blood flow to a portion of the lung. The sudden-onset triad of dyspnea + pleuritic chest pain (sharp, worse with breathing) + tachycardia in a patient with known DVT is pulmonary embolism until proven otherwise. The low O2 sat (86%) reflects impaired gas exchange in the blocked lung segment. This is a medical emergency requiring anticoagulation, possible thrombolysis, and hemodynamic support. This is also why DVT prevention (early ambulation, SCDs, anticoagulant prophylaxis) is so critical in post-surgical patients."
  },
  {
    id: "adv_45", chapter: 11, topic: "ICP Recognition", type: "sata",
    difficulty: "hard",
    objective: "Apply knowledge of neurological pathophysiology to clinical assessment (CO5, CO6)",
    stem: "A patient who sustained a head injury develops increasing drowsiness, unequal pupils (one dilated and non-reactive), and projectile vomiting. These signs suggest:",
    options: [
      "Increased intracranial pressure (ICP)",
      "Possible brain herniation if ICP is not managed immediately",
      "A concussion that will resolve on its own",
      "The need for immediate CT scan and neurosurgical consultation"
    ],
    correct: [0, 1, 3],
    rationale: "The triad of decreasing level of consciousness, unilateral pupil dilation (fixed, dilated pupil = compression of cranial nerve III), and vomiting are CLASSIC signs of critically elevated intracranial pressure. A unilateral fixed, dilated pupil is especially ominous — it suggests the brain is herniating (being pushed through the opening in the skull base), compressing vital brainstem structures. This is a neurosurgical EMERGENCY. A concussion does NOT cause unequal pupils or progressive deterioration — those findings indicate a more serious process (epidural hematoma, subdural hematoma, cerebral edema). Immediate CT and neurosurgical intervention may be the difference between survival and death."
  },
  {
    id: "adv_46", chapter: 7, topic: "Acute Kidney Injury", type: "mc",
    difficulty: "hard",
    objective: "Apply knowledge of renal function to clinical scenarios (CO5, CO6)",
    stem: "A patient in the ICU has had sustained hypotension (BP 74/42) for 2 hours. Their urine output drops to 8 mL/hr, and serum creatinine begins rising. The nurse recognizes this as:",
    options: [
      "Pre-renal acute kidney injury — inadequate blood flow to the kidneys from prolonged hypotension is causing ischemic damage to the nephrons",
      "A normal response to IV fluid administration",
      "Post-renal acute kidney injury from urinary obstruction",
      "Chronic kidney disease that was previously undiagnosed"
    ],
    correct: 0,
    rationale: "Pre-renal AKI is the most common type — it occurs when the kidneys don't receive adequate blood flow to maintain filtration. Sustained hypotension (from shock, hemorrhage, sepsis, heart failure) reduces renal perfusion → the kidneys can't filter adequately → urine output drops, waste products (creatinine, BUN) accumulate. If perfusion is restored quickly, the kidney damage may be reversible. If hypotension continues, it progresses to intrarenal (intrinsic) AKI with actual tubular necrosis — which is much harder to reverse. This is why monitoring urine output is a CRITICAL assessment in any hemodynamically unstable patient — it's a real-time indicator of organ perfusion."
  },
  {
    id: "adv_47", chapter: 1, topic: "Necrosis vs Apoptosis", type: "mc",
    difficulty: "hard",
    objective: "Differentiate between types of cell death (CO3, CO5)",
    stem: "A patient sustains a myocardial infarction, and a portion of cardiac muscle dies from oxygen deprivation. This type of cell death is classified as:",
    options: [
      "Apoptosis — a programmed, orderly cell death",
      "Necrosis — an unplanned cell death resulting from injury or ischemia that triggers an inflammatory response",
      "Atrophy — a reduction in cell size",
      "Lysis — a normal part of cell turnover"
    ],
    correct: 1,
    rationale: "Cell death from oxygen deprivation (ischemia/infarction) is NECROSIS — unplanned, pathological cell death caused by external injury. Necrotic cells swell, rupture, and release their contents into surrounding tissue, triggering an inflammatory response (this is why cardiac enzymes like troponin are elevated after MI — they leak from necrotic myocardial cells). APOPTOSIS, by contrast, is programmed cell death — orderly, intentional, and non-inflammatory. The body uses apoptosis for normal cell turnover and development (e.g., removing webbing between fingers during fetal development). The distinction matters clinically: necrosis is always pathological and triggers inflammation; apoptosis is usually physiological and doesn't."
  },
  {
    id: "adv_48", chapter: 9, topic: "H. pylori Diagnosis", type: "mc",
    difficulty: "hard",
    objective: "Identify diagnostic testing for H. pylori (CO5)",
    stem: "A patient with recurrent epigastric pain is tested for H. pylori using a urea breath test. The test is positive. The nurse explains that this test works by detecting:",
    options: [
      "Antibodies against H. pylori in the patient's blood",
      "H. pylori DNA in a stool sample",
      "CO2 produced by H. pylori's urease enzyme breaking down labeled urea — the CO2 is detected in the patient's exhaled breath",
      "Live bacteria cultured from a throat swab"
    ],
    correct: 2,
    rationale: "The urea breath test exploits H. pylori's most distinctive biochemical feature — it produces UREASE, an enzyme that breaks down urea into ammonia and CO2. The patient ingests urea labeled with a carbon isotope (C-13 or C-14). If H. pylori is present in the stomach, its urease breaks down the labeled urea, releasing labeled CO2 that is absorbed into the blood and exhaled in the breath, where it's detected. If H. pylori is absent, the labeled urea passes through undigested. It's a non-invasive, highly accurate test. Blood antibody tests can't distinguish between active and past infection. The stool antigen test detects H. pylori proteins in feces — also accurate but a different mechanism."
  },
  {
    id: "adv_49", chapter: 10, topic: "Diabetic Neuropathy Application", type: "mc",
    difficulty: "hard",
    objective: "Apply knowledge of diabetes complications to clinical assessment and patient education (CO5, CO6, CO7)",
    stem: "A patient with long-standing type 2 diabetes steps on a thumbtack at home and doesn't feel it. The wound goes unnoticed for 3 days and becomes infected. The nurse understands that this scenario illustrates the dangerous intersection of multiple diabetic complications because:",
    options: [
      "Diabetes causes bones to become brittle and break easily",
      "Peripheral neuropathy eliminated the pain sensation, peripheral vascular disease impairs blood flow needed for healing, and hyperglycemia impairs immune function — creating a cascade where injuries go undetected, heal poorly, and become infected easily",
      "The thumbtack introduced a diabetic-specific bacteria into the wound",
      "Insulin resistance prevents wounds from forming scabs"
    ],
    correct: 1,
    rationale: "This scenario demonstrates why diabetic foot care education is critical. Three complications converge: (1) PERIPHERAL NEUROPATHY — chronic hyperglycemia damages sensory nerves in the feet, so the patient doesn't feel injuries. The wound goes undetected. (2) PERIPHERAL VASCULAR DISEASE — diabetes accelerates atherosclerosis in small and large vessels, reducing blood flow to the feet. Poor circulation means less oxygen, fewer immune cells, and fewer nutrients reach the wound. (3) IMPAIRED IMMUNE FUNCTION — hyperglycemia impairs WBC function (phagocytosis is less effective at high glucose levels), making infections more likely and harder to fight. This is why diabetic foot ulcers are the leading cause of non-traumatic amputations. Prevention: daily foot inspections, proper footwear, regular podiatry visits, and tight glycemic control."
  },
  {
    id: "adv_50", chapter: 4, topic: "Clinical Prioritization", type: "mc",
    difficulty: "hard",
    objective: "Apply cardiovascular pathophysiology to nursing prioritization (CO4, CO5, CO6)",
    stem: "A nurse is caring for four patients. Which patient should the nurse assess FIRST?",
    options: [
      "A patient with stable angina who reports 2/10 chest pain after walking to the bathroom",
      "A patient with heart failure who gained 2 lbs overnight",
      "A patient with a new onset of chest pain, diaphoresis, and jaw pain who is clutching their chest",
      "A patient with hypertension whose BP is 152/94"
    ],
    correct: 2,
    rationale: "Prioritization requires identifying the most UNSTABLE patient — the one whose condition could deteriorate most rapidly. Patient C has new-onset chest pain with diaphoresis and jaw pain — this is a potential MI in progress. Every minute of delay means more myocardial tissue death. Patient A has STABLE angina with mild pain — expected and manageable. Patient B's weight gain needs intervention but isn't immediately life-threatening. Patient D's BP is elevated but not at hypertensive crisis level. Always assess the patient with the most acute, potentially life-threatening presentation first. Then address the others in order of urgency."
  },

  // ═══════════════════════════════════════════
  // LAB-EMBEDDED CLINICAL SCENARIOS (8 Qs)
  // ═══════════════════════════════════════════

  {
    id: "adv_51", chapter: 3, topic: "Lab Interpretation — Anemia", type: "mc",
    difficulty: "hard",
    objective: "Interpret lab values in a clinical scenario to identify anemia (CO5, CO6)",
    stem: "A patient presents with fatigue, pallor, and tachycardia (HR 108). Labs show: Hgb 7.8 g/dL, HCT 24%, platelets 220,000/mm³, WBC 6,800/mm³. Which lab finding BEST explains this patient's symptoms?",
    options: [
      "The elevated platelet count is causing the symptoms",
      "The low hemoglobin (7.8) and hematocrit (24%) — the patient is significantly anemic and the heart is compensating with tachycardia to circulate the reduced oxygen supply",
      "The WBC count indicates infection",
      "All values are within normal limits"
    ],
    correct: 1,
    rationale: "Normal Hgb is 14 g/dL, normal HCT is 45%. This patient's Hgb of 7.8 and HCT of 24% represent severe anemia. The tachycardia is a compensatory response — the heart beats faster to circulate the diminished oxygen-carrying capacity more quickly. Note the HCT is roughly 3× the Hgb (7.8 × 3 ≈ 24), confirming the values are consistent. Platelets (220K) and WBC (6,800) are both normal, so bleeding and infection aren't the primary issue — this is an anemia presentation. The nurse should investigate the cause: iron deficiency? Chronic disease? Blood loss?"
  },
  {
    id: "adv_52", chapter: 6, topic: "Lab Interpretation — ABG Clinical", type: "mc",
    difficulty: "hard",
    objective: "Interpret ABGs in a clinical scenario and identify compensation (CO6)",
    stem: "A patient with a 3-day history of severe diarrhea presents with Kussmaul respirations. ABG results: pH 7.28, PaCO₂ 24 mmHg, HCO₃ 14 mEq/L. The nurse interprets this as:",
    options: [
      "Respiratory acidosis — the low CO₂ is the primary problem",
      "Metabolic acidosis with respiratory compensation — the low HCO₃ (loss of bicarbonate from diarrhea) is the primary problem, and the lungs are hyperventilating to blow off CO₂",
      "Metabolic alkalosis — the patient is losing too much acid",
      "Normal ABG values for a patient with diarrhea"
    ],
    correct: 1,
    rationale: "Interpret systematically: pH 7.28 = acidosis. HCO₃ 14 = low (normal 22–26) = metabolic cause. PaCO₂ 24 = low (normal 35–45) = lungs are compensating by blowing off CO₂ (an acid). Severe diarrhea causes loss of bicarbonate (a base) from the GI tract → metabolic acidosis. The body compensates: Kussmaul respirations (deep, rapid breathing) blow off CO₂ to try to raise the pH. The pH is still acidotic (7.28), so compensation is partial. Treatment: replace fluids and electrolytes, treat the diarrhea. The ABG tells the whole clinical story when you know what to look for."
  },
  {
    id: "adv_53", chapter: 4, topic: "Lab Interpretation — Cardiac Emergency", type: "sata",
    difficulty: "hard",
    objective: "Interpret cardiac biomarkers and ECG findings in acute MI (CO5, CO6)",
    stem: "A patient arrives in the ED with crushing chest pain radiating to the left arm. ECG shows ST-segment elevation in leads V1-V4. Labs show: Troponin 4.2 ng/mL (normal <0.04), CPK-MB 28 U/L (normal <5). Which conclusions can the nurse draw? Select all that apply.",
    options: [
      "The elevated troponin confirms myocardial cell damage/death is occurring",
      "The ST elevation on ECG indicates acute ischemia/infarction of the anterior wall",
      "The normal CPK-MB means no cardiac damage has occurred",
      "This patient needs emergent cardiac catheterization"
    ],
    correct: [0, 1, 3],
    rationale: "Troponin is the gold standard biomarker — at 4.2 (normal <0.04), this is massively elevated, confirming significant myocardial cell death. The CPK-MB at 28 (normal <5) is ALSO elevated, not normal — it's more than 5× the upper limit. ST elevation in V1-V4 corresponds to the anterior wall of the heart (LAD territory). Together: elevated cardiac biomarkers + ST elevation + classic symptoms = STEMI (ST-elevation myocardial infarction). This is a cardiac emergency requiring emergent catheterization and likely PCI (stent placement). Time is muscle."
  },
  {
    id: "adv_54", chapter: 10, topic: "Lab Interpretation — DKA", type: "mc",
    difficulty: "hard",
    objective: "Interpret lab values in diabetic ketoacidosis (CO5, CO6)",
    stem: "A Type 1 diabetic patient presents confused and with Kussmaul respirations. Labs: blood glucose 486 mg/dL, pH 7.18, HCO₃ 10 mEq/L, K+ 5.8 mEq/L, urine ketones strongly positive. Despite the elevated serum potassium, the nurse's FIRST action after initiating insulin and IV fluids should be:",
    options: [
      "Restrict potassium intake since the level is high",
      "Closely monitor potassium because it will DROP rapidly as acidosis is corrected — insulin drives K+ back into cells, and the patient likely has total body potassium depletion despite the elevated serum level",
      "Administer additional potassium since the level is dangerously low",
      "Ignore the potassium level and focus only on the glucose"
    ],
    correct: 1,
    rationale: "This is DKA: high glucose (486), acidosis (pH 7.18, HCO₃ 10), positive ketones, Kussmaul respirations (compensatory hyperventilation). The K+ of 5.8 looks high, but it's a trap — acidosis shifts K+ OUT of cells into the serum, masking severe intracellular depletion. The patient has been losing K+ through osmotic diuresis for hours. When you give insulin (drives K+ into cells) and correct acidosis (H+ leaves cells, K+ goes back in), serum K+ will plummet — potentially causing fatal cardiac arrhythmias. Monitor K+ every 1-2 hours and be ready to replace it. This is one of the most important concepts in DKA management."
  },
  {
    id: "adv_55", chapter: 9, topic: "Lab Interpretation — Liver Failure", type: "sata",
    difficulty: "hard",
    objective: "Interpret liver function labs in clinical context (CO5, CO6)",
    stem: "A patient with cirrhosis has these labs: albumin 1.9 g/dL (normal 3.5-5.0), bilirubin 4.8 mg/dL (normal 0.1-1.2), ammonia 98 μg/dL (normal 15-45), INR 2.6 (normal 0.8-1.1). Which clinical manifestations would the nurse EXPECT based on these values? Select all that apply.",
    options: [
      "Jaundice — from elevated bilirubin depositing in skin and sclera",
      "Ascites and peripheral edema — from low albumin reducing oncotic pressure",
      "Confusion and asterixis (liver flap) — from elevated ammonia crossing the blood-brain barrier",
      "Improved blood clotting — from the elevated INR"
    ],
    correct: [0, 1, 2],
    rationale: "Each lab value directly predicts a clinical finding: Bilirubin 4.8 (4× normal) → the liver can't process bilirubin → it accumulates in blood and deposits in tissues → JAUNDICE. Albumin 1.9 (half normal) → the liver can't produce enough albumin → oncotic pressure drops → fluid leaks from vessels → ASCITES and EDEMA. Ammonia 98 (2× normal) → the liver can't clear this neurotoxin → it crosses the blood-brain barrier → HEPATIC ENCEPHALOPATHY (confusion, asterixis). INR 2.6 → the liver can't produce adequate clotting factors → blood takes LONGER to clot → INCREASED bleeding risk, not improved clotting. A high INR means WORSE clotting, not better."
  },
  {
    id: "adv_57", chapter: 4, topic: "Lab Interpretation — Lipids & Risk", type: "mc",
    difficulty: "hard",
    objective: "Interpret lipid panel and apply to cardiovascular risk assessment (CO5, CO6)",
    stem: "A 54-year-old patient with type 2 diabetes and hypertension has these lipid results: total cholesterol 262 mg/dL, LDL 178 mg/dL, HDL 32 mg/dL, triglycerides 310 mg/dL. The nurse recognizes this patient's cardiovascular risk is:",
    options: [
      "Low — only the total cholesterol is slightly above normal",
      "Moderate — the LDL needs improvement but everything else is acceptable",
      "Very high — EVERY lipid value is abnormal in the wrong direction, combined with diabetes and hypertension as additional risk factors",
      "Unable to be determined from lipid values alone"
    ],
    correct: 2,
    rationale: "Every single value is problematic: Total cholesterol 262 (goal <200, this is HIGH). LDL 178 (goal <100, this is nearly 2× optimal — 'bad' cholesterol is very elevated). HDL 32 (goal >40, this is LOW — 'good' cholesterol is insufficient). Triglycerides 310 (goal <150, this is very elevated). Combined with diabetes (accelerates atherosclerosis) and hypertension (damages vessel walls), this patient has multiple compounding risk factors for MI and stroke. This is exactly the kind of question where lab values are embedded in the scenario — you need to recognize that ALL four lipid values are abnormal and understand what direction is bad for each one."
  },
  {
    id: "adv_58", chapter: 10, topic: "Lab Interpretation — Thyroid", type: "mc",
    difficulty: "hard",
    objective: "Interpret thyroid labs and correlate with clinical presentation (CO5, CO6)",
    stem: "A patient presents with fatigue, weight gain, constipation, cold intolerance, and dry skin. Labs show: TSH 14.2 mIU/L (normal 0.5-4.5), Free T4 0.4 ng/dL (normal 0.8-1.8). These findings are consistent with:",
    options: [
      "Hyperthyroidism — the thyroid is overproducing hormones",
      "Hypothyroidism — the elevated TSH means the pituitary is trying to stimulate a failing thyroid, and the low T4 confirms the thyroid is underproducing",
      "Normal thyroid function for an older adult",
      "Cushing's disease"
    ],
    correct: 1,
    rationale: "The clinical picture (fatigue, weight gain, constipation, cold intolerance, dry skin) screams hypothyroidism — everything is slowed down. The labs confirm it: TSH is HIGH (14.2, normal 0.5-4.5) because the pituitary is producing extra TSH trying to stimulate the underperforming thyroid. Free T4 is LOW (0.4, normal 0.8-1.8) confirming the thyroid isn't producing enough hormone despite the pituitary's effort. Remember the inverse relationship: in PRIMARY hypothyroidism, TSH goes UP while T4 goes DOWN. In hyperthyroidism, it's the opposite — TSH drops while T4 rises. The labs match the clinical presentation perfectly."
  },
];

if (typeof window !== "undefined") window.NURS308_ADVANCED_BANK = NURS308_ADVANCED_BANK;
