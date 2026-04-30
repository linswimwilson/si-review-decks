/**
 * NURS 308 Pathophysiology — Final Exam Mock Question Bank
 * USC Upstate · Spring 2026
 *
 * 100 questions mapped to course objectives
 * Chapters 1-7 (50 Qs) + Chapters 9-11 (50 Qs)
 * Formats: mc (multiple choice), sata (select all that apply), ordering
 *
 * Structure designed for Claude Code integration into si-reviews repo
 */

const NURS308_EXAM_BANK = [

  // ═══════════════════════════════════════════
  // CHAPTER 1: INTRO TO PATHO & CELLULAR DYSFUNCTION (7 Qs)
  // ═══════════════════════════════════════════

  {
    id: "c1_01", chapter: 1, topic: "Introduction to Pathophysiology", type: "mc",
    objective: "Define common terminology in understanding disease processes (CO2)",
    stem: "A 45-year-old patient is diagnosed with type 2 diabetes after years of obesity and physical inactivity. These contributing factors are best described as:",
    options: [
      "Non-modifiable risk factors",
      "Modifiable risk factors",
      "Congenital factors",
      "Idiopathic etiology"
    ],
    correct: 1,
    rationale: "Modifiable risk factors are those that can be changed or controlled through behavior or intervention — obesity and physical inactivity are both modifiable. Non-modifiable risk factors cannot be changed (age, genetics, race). Congenital factors are present at birth. Idiopathic means the cause is unknown, which doesn't apply here since the contributing factors are identified."
  },
  {
    id: "c1_02", chapter: 1, topic: "Prevention Levels", type: "mc",
    objective: "Define the terms primary, secondary, and tertiary prevention (CO2)",
    stem: "A nurse teaches a community group about the importance of annual mammograms for early detection of breast cancer. This is an example of:",
    options: [
      "Primary prevention",
      "Secondary prevention",
      "Tertiary prevention",
      "Quaternary prevention"
    ],
    correct: 1,
    rationale: "Secondary prevention focuses on early detection and treatment of disease before it progresses — screening tests like mammograms are the classic example. Primary prevention aims to prevent disease from occurring in the first place (e.g., vaccination, exercise). Tertiary prevention focuses on managing and reducing complications of an existing disease (e.g., cardiac rehab after a heart attack)."
  },
  {
    id: "c1_03", chapter: 1, topic: "Cellular Adaptations", type: "sata",
    objective: "Identify common cellular adaptations and common causes for each (CO3, CO5)",
    stem: "Which of the following are correctly paired cellular adaptations with their descriptions? Select all that apply.",
    options: [
      "Hypertrophy — increase in cell SIZE in response to increased workload",
      "Hyperplasia — increase in cell NUMBER in response to demand",
      "Atrophy — increase in cell size due to disuse",
      "Metaplasia — replacement of one mature cell type with another mature cell type"
    ],
    correct: [0, 1, 3],
    rationale: "Hypertrophy is an increase in cell SIZE (e.g., cardiac muscle enlarging from chronic HTN). Hyperplasia is an increase in cell NUMBER (e.g., endometrial lining thickening). Metaplasia is one mature cell type being replaced by another (e.g., squamous cells replacing ciliated columnar cells in a smoker's airways). Atrophy is a DECREASE in cell size from disuse, malnutrition, or loss of stimulation — not an increase."
  },
  {
    id: "c1_04", chapter: 1, topic: "Cellular Adaptations", type: "mc",
    objective: "Identify common cellular adaptations (CO3, CO5)",
    stem: "A bodybuilder's skeletal muscle cells increase in size in response to heavy resistance training. This cellular adaptation is an example of:",
    options: [
      "Pathologic hypertrophy",
      "Physiologic hypertrophy",
      "Hyperplasia",
      "Dysplasia"
    ],
    correct: 1,
    rationale: "Physiologic hypertrophy is a normal, adaptive increase in cell size in response to appropriate stimuli — like muscle growth from exercise. Pathologic hypertrophy occurs from disease states (e.g., the heart enlarging due to chronic hypertension — the workload is abnormal). Hyperplasia is an increase in cell number, not size. Dysplasia is atypical hyperplasia — disordered growth that can be precancerous."
  },
  {
    id: "c1_05", chapter: 1, topic: "Cancer", type: "mc",
    objective: "Differentiate between characteristics of benign versus malignant cancers (CO1, CO3)",
    stem: "A patient has a tumor that is well-differentiated, slow-growing, and encapsulated. The nurse recognizes these characteristics are consistent with:",
    options: [
      "Malignant neoplasm",
      "Benign neoplasm",
      "Metastatic disease",
      "Dysplastic tissue"
    ],
    correct: 1,
    rationale: "Benign tumors are well-differentiated (cells resemble normal tissue), slow-growing, encapsulated (contained within a fibrous capsule), and do NOT metastasize. Malignant tumors are poorly differentiated (abnormal-looking cells), fast-growing, invasive (no capsule), and CAN metastasize. Understanding this distinction is foundational — differentiation, growth rate, invasiveness, and metastatic potential are the four key characteristics that separate benign from malignant."
  },
  {
    id: "c1_06", chapter: 1, topic: "Cancer", type: "mc",
    objective: "Describe when benign cancers can become life-threatening (CO5)",
    stem: "A patient has a benign brain tumor that is causing increased intracranial pressure. The nurse understands that this benign tumor is life-threatening because:",
    options: [
      "All benign tumors eventually become malignant",
      "The tumor's location in an enclosed space creates pressure on vital structures",
      "Benign tumors always metastasize to the brain",
      "The tumor has likely undergone malignant transformation"
    ],
    correct: 1,
    rationale: "Benign tumors can become life-threatening based on LOCATION. In an enclosed space like the cranium, even a slow-growing benign tumor creates pressure on brain tissue with nowhere to expand. This can compress vital structures and become fatal. Benign tumors do NOT always become malignant, do NOT metastasize, and location-based threat does not require malignant transformation."
  },
  {
    id: "c1_07", chapter: 1, topic: "Cancer", type: "mc",
    objective: "Describe common clinical manifestations of malignant cancer, including cachexia (CO2, CO5)",
    stem: "A patient with advanced lung cancer has experienced significant unintentional weight loss, muscle wasting, and fatigue despite adequate caloric intake. This syndrome is called:",
    options: [
      "Anorexia nervosa",
      "Malabsorption syndrome",
      "Cachexia",
      "Kwashiorkor"
    ],
    correct: 2,
    rationale: "Cachexia is a complex metabolic syndrome associated with advanced malignancy characterized by severe weight loss, muscle wasting, fatigue, and weakness that does NOT fully respond to nutritional supplementation. The cancer alters metabolism — increasing energy expenditure while decreasing appetite and nutrient utilization. This is distinct from simple malnutrition because providing more calories doesn't reverse it. It's a common and devastating manifestation of advanced cancer."
  },

  // ═══════════════════════════════════════════
  // CHAPTER 2: STRESS, INFLAMMATION & IMMUNITY (7 Qs)
  // ═══════════════════════════════════════════

  {
    id: "c2_01", chapter: 2, topic: "Lines of Defense", type: "ordering",
    objective: "Compare and contrast between lines of defense (CO1)",
    stem: "Place the body's lines of defense in the correct order from FIRST activated to LAST activated:",
    options: [
      "Immune process (adaptive immunity)",
      "Physical and chemical barriers",
      "Inflammatory process"
    ],
    correct: [1, 2, 0],
    rationale: "The body's defenses activate in order: First line — physical and chemical barriers (skin, mucous membranes, stomach acid, tears) prevent pathogens from entering. Second line — the inflammatory process (nonspecific, innate response) activates when barriers are breached, bringing neutrophils and macrophages to the site. Third line — the immune process (adaptive immunity) is the most specific and slowest to activate, involving T cells and B cells that target specific pathogens."
  },
  {
    id: "c2_02", chapter: 2, topic: "Lines of Defense", type: "mc",
    objective: "Compare and contrast between lines of defense (CO1)",
    stem: "A patient steps on a rusty nail. The area becomes red, warm, swollen, and painful over the next few hours. This response represents:",
    options: [
      "First line of defense — physical barrier failure",
      "Second line of defense — inflammatory process",
      "Third line of defense — immune response",
      "Allergic hypersensitivity reaction"
    ],
    correct: 1,
    rationale: "The cardinal signs of inflammation — redness (rubor), warmth (calor), swelling (tumor), and pain (dolor) — represent the second line of defense: the inflammatory process. The first line (skin) was breached by the nail. The inflammatory process is nonspecific and innate — it responds the same way regardless of the pathogen. The third line (adaptive immune response) takes longer to activate and targets specific antigens."
  },
  {
    id: "c2_03", chapter: 2, topic: "Immunity", type: "mc",
    objective: "Differentiate between cell-mediated and humoral immunity (CO1, CO4)",
    stem: "A patient receives a vaccination. The body produces specific antibodies in response. This is an example of:",
    options: [
      "Cell-mediated immunity",
      "Humoral immunity",
      "Innate immunity",
      "Passive immunity"
    ],
    correct: 1,
    rationale: "Humoral immunity involves B lymphocytes producing antibodies (immunoglobulins) that target specific antigens. Vaccination triggers humoral immunity by exposing the immune system to an antigen, prompting antibody production and memory B cell formation. Cell-mediated immunity involves T lymphocytes directly attacking infected or abnormal cells (no antibody production). Innate immunity is nonspecific. Passive immunity involves receiving pre-formed antibodies from another source (e.g., maternal antibodies, immunoglobulin therapy)."
  },
  {
    id: "c2_04", chapter: 2, topic: "Hypersensitivity", type: "mc",
    objective: "Differentiate between types of hypersensitivity reactions (CO1, CO4)",
    stem: "A patient develops anaphylaxis within minutes of eating peanuts. This is classified as a Type I hypersensitivity reaction because it is:",
    options: [
      "A delayed response mediated by T cells",
      "An immediate IgE-mediated response causing massive histamine release",
      "An antibody-mediated cytotoxic reaction destroying cells",
      "An immune complex deposition causing tissue damage"
    ],
    correct: 1,
    rationale: "Type I (immediate/anaphylactic) hypersensitivity is IgE-mediated. Upon re-exposure to an allergen, IgE antibodies on mast cells trigger massive degranulation and histamine release — causing vasodilation, bronchospasm, and potentially anaphylactic shock within minutes. Type II is cytotoxic (antibodies attack cells — e.g., transfusion reaction). Type III is immune complex (e.g., lupus). Type IV is delayed/cell-mediated (T cells — e.g., contact dermatitis, TB skin test). Speed of onset is a key differentiator."
  },
  {
    id: "c2_05", chapter: 2, topic: "Immunodeficiency", type: "sata",
    objective: "Identify causes of immunodeficiency (CO5)",
    stem: "Which of the following can cause immunodeficiency? Select all that apply.",
    options: [
      "HIV infection",
      "Chronic corticosteroid use",
      "Malnutrition",
      "Regular moderate exercise"
    ],
    correct: [0, 1, 2],
    rationale: "HIV directly attacks CD4+ T helper cells, progressively destroying the immune system. Chronic corticosteroid use suppresses immune function by reducing inflammation and lymphocyte activity — this is why long-term steroid patients are at increased infection risk. Malnutrition impairs immune function because immune cells require adequate protein, vitamins, and minerals to function. Regular moderate exercise actually ENHANCES immune function — it is NOT a cause of immunodeficiency."
  },
  {
    id: "c2_06", chapter: 2, topic: "Immunity", type: "sata",
    objective: "Identify factors that enhance and impair the body's defenses (CO1, CO5)",
    stem: "Which of the following factors IMPAIR the body's defense mechanisms? Select all that apply.",
    options: [
      "Adequate sleep and rest",
      "Advanced age",
      "Chronic stress",
      "Smoking"
    ],
    correct: [1, 2, 3],
    rationale: "Advanced age reduces immune function (immunosenescence). Chronic stress elevates cortisol, which suppresses immune response. Smoking damages the mucosal barriers in the airways (first line of defense) and impairs ciliary function, macrophage activity, and overall immune response. Adequate sleep ENHANCES immune function — sleep deprivation impairs it. Understanding what helps versus harms immunity is clinically important for patient education."
  },
  {
    id: "c2_07", chapter: 2, topic: "Inflammation", type: "mc",
    objective: "Describe previously learned content concerning inflammation and immunity (CO1)",
    stem: "During the inflammatory process, which cells are typically the FIRST to arrive at the site of tissue injury?",
    options: [
      "Lymphocytes",
      "Neutrophils",
      "Monocytes",
      "Eosinophils"
    ],
    correct: 1,
    rationale: "Neutrophils are the first responders to acute inflammation — they arrive within hours and are the predominant cell type in the early inflammatory response. They phagocytize (engulf and destroy) pathogens and debris. Monocytes arrive later and differentiate into macrophages for prolonged cleanup. Lymphocytes are part of the adaptive immune response (third line). Eosinophils primarily respond to parasitic infections and allergic reactions."
  },

  // ═══════════════════════════════════════════
  // CHAPTER 3: HEMATOPOIETIC FUNCTION (8 Qs)
  // ═══════════════════════════════════════════

  {
    id: "c3_01", chapter: 3, topic: "Erythrocytes", type: "mc",
    objective: "Describe the role of erythrocytes in the transport of oxygen and carbon dioxide (CO1)",
    stem: "A patient asks why red blood cells are important. The nurse's best response is:",
    options: [
      "Red blood cells produce antibodies to fight infection",
      "Red blood cells carry oxygen from the lungs to the tissues and return carbon dioxide to the lungs for elimination",
      "Red blood cells are responsible for blood clotting",
      "Red blood cells break down damaged tissue"
    ],
    correct: 1,
    rationale: "Erythrocytes (RBCs) contain hemoglobin, which binds oxygen in the lungs and transports it to tissues throughout the body. After delivering oxygen, hemoglobin picks up carbon dioxide (a waste product of cellular metabolism) and carries it back to the lungs for exhalation. Antibody production is a function of B lymphocytes (WBCs). Blood clotting is a function of platelets (thrombocytes). Tissue breakdown is performed by macrophages and enzymes."
  },
  {
    id: "c3_02", chapter: 3, topic: "Anemia", type: "mc",
    objective: "Describe the role of iron, B-12, and ferritin in erythropoiesis and hemoglobin synthesis (CO1, CO5)",
    stem: "A patient is diagnosed with iron deficiency anemia. The nurse understands that iron is essential for erythropoiesis because:",
    options: [
      "Iron stimulates the bone marrow to produce more white blood cells",
      "Iron is a critical component of hemoglobin necessary for oxygen binding",
      "Iron prevents red blood cells from being destroyed in the spleen",
      "Iron regulates the pH of the blood"
    ],
    correct: 1,
    rationale: "Iron is a key component of the hemoglobin molecule — specifically, it forms the core of the heme group that binds oxygen. Without adequate iron, the body cannot produce sufficient functional hemoglobin, resulting in smaller (microcytic), paler (hypochromic) RBCs that carry less oxygen. Ferritin is the storage form of iron. B-12 and folate are needed for proper DNA synthesis during RBC maturation — their deficiency causes megaloblastic anemia (large, immature RBCs)."
  },
  {
    id: "c3_03", chapter: 3, topic: "Anemia", type: "sata",
    objective: "Explain the basic pathophysiology, etiologies, clinical manifestations, and risk factors of anemia (CO5, CO6)",
    stem: "A patient with anemia would be expected to exhibit which of the following clinical manifestations? Select all that apply.",
    options: [
      "Fatigue and weakness",
      "Tachycardia",
      "Pallor",
      "Hypertension"
    ],
    correct: [0, 1, 2],
    rationale: "Anemia reduces the oxygen-carrying capacity of the blood. The body compensates with tachycardia (heart beats faster to circulate the reduced oxygen supply more quickly), and patients experience fatigue/weakness (tissues aren't getting enough oxygen for energy production) and pallor (reduced hemoglobin gives skin and mucous membranes a pale appearance). Anemia does NOT cause hypertension — if anything, severe anemia can contribute to hypotension because the heart is working harder with less effective volume."
  },
  {
    id: "c3_04", chapter: 3, topic: "Leukocytes", type: "mc",
    objective: "Differentiate between the functions of neutrophils, eosinophils, basophils, monocytes, and lymphocytes (CO1)",
    stem: "A patient's lab results show a significantly elevated eosinophil count. The nurse should consider that this finding is most commonly associated with:",
    options: [
      "Acute bacterial infection",
      "Viral infection",
      "Parasitic infection or allergic reaction",
      "Chronic blood loss"
    ],
    correct: 2,
    rationale: "Eosinophils are elevated in parasitic infections and allergic/hypersensitivity reactions — this is their primary role. Neutrophils elevate in acute bacterial infections (they're the first-responders). Lymphocytes typically elevate in viral infections. Chronic blood loss would affect RBC counts, not eosinophils specifically. Knowing which WBC type elevates in which condition is essential for interpreting lab work."
  },
  {
    id: "c3_05", chapter: 3, topic: "Leukopenia", type: "mc",
    objective: "Explain the basic pathophysiology, etiologies, and clinical manifestations of leukopenia (CO5, CO6)",
    stem: "A patient undergoing chemotherapy develops leukopenia. The nurse's priority concern is:",
    options: [
      "Increased risk of bleeding",
      "Increased risk of infection",
      "Increased risk of dehydration",
      "Increased risk of anemia"
    ],
    correct: 1,
    rationale: "Leukopenia is a decrease in white blood cells — the cells responsible for fighting infection. Chemotherapy destroys rapidly dividing cells, including WBC precursors in the bone marrow. With fewer WBCs, the patient is immunocompromised and at high risk for infection. Bleeding risk relates to thrombocytopenia (low platelets). Anemia relates to low RBCs. While chemotherapy can cause all three (pancytopenia), leukopenia specifically increases INFECTION risk."
  },
  {
    id: "c3_06", chapter: 3, topic: "Thrombocytopenia", type: "mc",
    objective: "Describe the role of platelets in coagulation (CO1, CO2)",
    stem: "A patient with thrombocytopenia is most at risk for:",
    options: [
      "Infection",
      "Uncontrolled bleeding",
      "Hypoxia",
      "Polycythemia"
    ],
    correct: 1,
    rationale: "Thrombocytopenia is a decrease in platelet count. Platelets are essential for hemostasis — they aggregate at the site of vascular injury to form a platelet plug, the first step in clot formation. With insufficient platelets, the patient cannot effectively stop bleeding. Clinical manifestations include easy bruising (ecchymosis), petechiae (pinpoint hemorrhages), prolonged bleeding from cuts, and potentially life-threatening internal hemorrhage."
  },
  {
    id: "c3_07", chapter: 3, topic: "Thrombocytopenia", type: "sata",
    objective: "Explain the basic pathophysiology, etiologies, and clinical manifestations of thrombocytopenia (CO5, CO6)",
    stem: "Which clinical manifestations would the nurse expect in a patient with thrombocytopenia? Select all that apply.",
    options: [
      "Petechiae",
      "Ecchymosis (bruising)",
      "Elevated temperature",
      "Prolonged bleeding from minor cuts"
    ],
    correct: [0, 1, 3],
    rationale: "Petechiae (tiny pinpoint red/purple spots from capillary bleeding into skin), ecchymosis (larger areas of bruising), and prolonged bleeding from wounds are all manifestations of inadequate platelet function. These occur because there aren't enough platelets to form effective platelet plugs at injury sites. Elevated temperature is a sign of infection, associated with leukopenia or WBC disorders — not platelet deficiency."
  },
  {
    id: "c3_08", chapter: 3, topic: "Hemoglobin", type: "mc",
    objective: "Identify the role of hemoglobin (CO1)",
    stem: "A nursing student asks why hemoglobin levels are checked as part of an anemia workup. The best explanation is:",
    options: [
      "Hemoglobin levels indicate how well the liver is functioning",
      "Hemoglobin is the oxygen-carrying protein within red blood cells",
      "Hemoglobin measures the number of red blood cells in circulation",
      "Hemoglobin reflects the body's iron storage capacity"
    ],
    correct: 1,
    rationale: "Hemoglobin is the protein inside RBCs that actually binds and carries oxygen. A low hemoglobin means reduced oxygen-carrying capacity regardless of the RBC count — you could have a normal number of RBCs that are poorly filled with hemoglobin (as in iron deficiency). Hemoglobin is not a measure of liver function (that's bilirubin, ALT, AST). It doesn't count RBCs (that's the RBC count). Ferritin reflects iron storage, not hemoglobin itself."
  },

  // ═══════════════════════════════════════════
  // CHAPTER 4: CARDIOVASCULAR (12 Qs)
  // ═══════════════════════════════════════════

  {
    id: "c4_01", chapter: 4, topic: "Cardiac Output", type: "mc",
    objective: "Define terms related to the cardiovascular system (CO2)",
    stem: "Cardiac output is determined by:",
    options: [
      "Heart rate × blood pressure",
      "Heart rate × stroke volume",
      "Stroke volume × peripheral vascular resistance",
      "Blood pressure × peripheral vascular resistance"
    ],
    correct: 1,
    rationale: "Cardiac output (CO) = Heart Rate (HR) × Stroke Volume (SV). This means the total volume of blood the heart pumps per minute depends on how many times it beats AND how much blood it ejects with each beat. If HR increases but SV drops (or vice versa), CO may not change. Understanding this formula is essential because many cardiovascular conditions affect one or both components."
  },
  {
    id: "c4_02", chapter: 4, topic: "Cardiac Output", type: "sata",
    objective: "Identify the responses and clinical manifestations of reduced cardiac output (CO4, CO5)",
    stem: "Which of the following are clinical manifestations of reduced cardiac output? Select all that apply.",
    options: [
      "Fatigue",
      "Decreased urine output",
      "Cool, clammy skin",
      "Bounding pulses"
    ],
    correct: [0, 1, 2],
    rationale: "When cardiac output drops, tissues receive inadequate perfusion. Fatigue results from decreased oxygen delivery to muscles. Decreased urine output occurs because the kidneys receive less blood flow (the body shunts blood to vital organs). Cool, clammy skin results from peripheral vasoconstriction as the body redirects blood to the core. Bounding pulses indicate HIGH output or volume — the opposite of reduced CO. Expect weak, thready pulses instead."
  },
  {
    id: "c4_03", chapter: 4, topic: "ECG", type: "mc",
    objective: "Identify the electrical phases of an ECG wave (CO5)",
    stem: "On an electrocardiogram, the QRS complex represents:",
    options: [
      "Atrial depolarization",
      "Ventricular depolarization",
      "Ventricular repolarization",
      "Atrial repolarization"
    ],
    correct: 1,
    rationale: "The QRS complex represents ventricular depolarization — the electrical impulse spreading through the ventricles causing them to contract. The P wave represents atrial depolarization. The T wave represents ventricular repolarization (the ventricles recovering/resetting). Atrial repolarization occurs during the QRS complex but is hidden by the much larger ventricular signal. P-QRS-T: think 'atria fire, ventricles fire, ventricles recover.'"
  },
  {
    id: "c4_04", chapter: 4, topic: "Dysrhythmias", type: "mc",
    objective: "Differentiate between normal sinus rhythm, bradycardia, and tachycardia (CO2, CO5)",
    stem: "An adult patient's heart rate is 52 bpm with a regular rhythm. The nurse documents this as:",
    options: [
      "Normal sinus rhythm",
      "Sinus bradycardia",
      "Sinus tachycardia",
      "Atrial fibrillation"
    ],
    correct: 1,
    rationale: "Sinus bradycardia is a heart rate below 60 bpm originating from the SA node with a regular rhythm. Normal sinus rhythm is 60-100 bpm. Sinus tachycardia is above 100 bpm. The key clinical concern with bradycardia is whether it's symptomatic — if the slow rate reduces cardiac output enough to cause dizziness, fatigue, syncope, or hypotension, intervention is needed."
  },
  {
    id: "c4_05", chapter: 4, topic: "Cardiac Hypertrophy", type: "mc",
    objective: "Describe the role of RAAS in worsening cardiac hypertrophy (CO4, CO5, CO6)",
    stem: "A patient with chronic hypertension develops left ventricular hypertrophy. The nurse understands that the renin-angiotensin-aldosterone system (RAAS) worsens this condition by:",
    options: [
      "Decreasing heart rate and reducing cardiac workload",
      "Causing vasodilation and reducing afterload",
      "Increasing blood volume and vasoconstriction, which increases the workload on an already strained heart",
      "Directly destroying cardiac muscle cells"
    ],
    correct: 2,
    rationale: "RAAS activation causes angiotensin II-mediated vasoconstriction (increasing afterload) and aldosterone-mediated sodium and water retention (increasing blood volume/preload). Both increase the workload on the heart. When the heart is already hypertrophied from chronic pressure overload, RAAS activation creates a vicious cycle — more volume and more resistance mean the heart must work even harder, worsening the hypertrophy and eventually leading to heart failure."
  },
  {
    id: "c4_06", chapter: 4, topic: "Dyslipidemia", type: "mc",
    objective: "Differentiate between LDL, HDL, and triglycerides (CO1, CO5)",
    stem: "A patient asks, 'My doctor said my HDL is too low. Is that bad?' The nurse's best response is:",
    options: [
      "No, lower is better for all cholesterol types.",
      "Yes, HDL is considered 'good' cholesterol because it helps remove LDL from the arteries. Low HDL increases cardiovascular risk.",
      "HDL doesn't really matter — only LDL and triglycerides affect heart disease.",
      "Low HDL means you need to eat less fat."
    ],
    correct: 1,
    rationale: "HDL (high-density lipoprotein) is 'good' cholesterol — it transports LDL away from the arterial walls back to the liver for processing and elimination. Higher HDL is protective against cardiovascular disease. LDL (low-density lipoprotein) is 'bad' cholesterol — it deposits in arterial walls contributing to atherosclerosis. For LDL, lower is better. For HDL, higher is better. This distinction is critical for patient education about cardiovascular risk."
  },
  {
    id: "c4_07", chapter: 4, topic: "Atherosclerosis/PAD", type: "mc",
    objective: "Describe symptoms associated with PAD, including intermittent claudication (CO5)",
    stem: "A patient with peripheral artery disease reports leg pain that occurs with walking and is relieved by rest. This symptom is called:",
    options: [
      "Neuropathy",
      "Intermittent claudication",
      "Restless leg syndrome",
      "Deep vein thrombosis"
    ],
    correct: 1,
    rationale: "Intermittent claudication is the hallmark symptom of PAD — exercise-induced leg pain (typically in the calves) caused by insufficient blood flow through narrowed arteries. During rest, oxygen demand is low and supply is adequate. During activity, oxygen demand increases but the narrowed arteries can't deliver enough blood — causing ischemic pain. Pain resolves with rest because demand decreases. Think of it as 'angina of the legs.'"
  },
  {
    id: "c4_08", chapter: 4, topic: "CAD", type: "mc",
    objective: "Describe the pathophysiology and clinical manifestations associated with CAD (CO5)",
    stem: "A patient reports substernal chest pressure that radiates to the left arm and occurs during exertion but resolves with rest. This presentation is most consistent with:",
    options: [
      "Myocardial infarction",
      "Stable angina",
      "Pulmonary embolism",
      "Pericarditis"
    ],
    correct: 1,
    rationale: "Stable angina is predictable chest pain triggered by exertion (or stress) and relieved by rest or nitroglycerin. It occurs because the narrowed coronary arteries can supply adequate blood at rest but cannot meet increased myocardial oxygen demand during exertion — causing temporary ischemia. MI pain typically does NOT resolve with rest. Pulmonary embolism presents with sudden dyspnea and pleuritic chest pain. Pericarditis pain is sharp, worsens with inspiration, and improves with leaning forward."
  },
  {
    id: "c4_09", chapter: 4, topic: "Hypertension", type: "sata",
    objective: "Identify risk factors and clinical manifestations of hypertension (CO5)",
    stem: "Which of the following are modifiable risk factors for hypertension? Select all that apply.",
    options: [
      "High sodium diet",
      "Family history of hypertension",
      "Obesity",
      "Smoking",
      "Age"
    ],
    correct: [0, 2, 3],
    rationale: "Modifiable risk factors are those the patient can change: high sodium diet (contributes to fluid retention and increased blood volume), obesity (increases cardiac workload and vascular resistance), and smoking (damages endothelium and promotes vasoconstriction). Family history and age are NON-modifiable — you cannot change your genetics or stop aging. Identifying modifiable vs. non-modifiable is essential for patient education because modifiable factors are where prevention strategies focus."
  },
  {
    id: "c4_10", chapter: 4, topic: "Hypertension", type: "sata",
    objective: "Identify end-organ damage associated with hypertension (CO5, CO6)",
    stem: "Long-standing uncontrolled hypertension can lead to damage in which of the following organs? Select all that apply.",
    options: [
      "Heart",
      "Kidneys",
      "Eyes (retina)",
      "Brain"
    ],
    correct: [0, 1, 2, 3],
    rationale: "ALL of these are targets of end-organ damage from chronic hypertension. Heart — left ventricular hypertrophy and heart failure. Kidneys — nephrosclerosis and chronic kidney disease (the glomeruli are damaged by sustained high pressure). Eyes — hypertensive retinopathy (damage to retinal blood vessels). Brain — increased stroke risk (both ischemic and hemorrhagic). This is why hypertension is called 'the silent killer' — it damages organs progressively, often without symptoms until significant damage has occurred."
  },
  {
    id: "c4_11", chapter: 4, topic: "Perfusion", type: "mc",
    objective: "Define the term perfusion (CO2, CO4)",
    stem: "The term perfusion refers to:",
    options: [
      "The amount of air reaching the alveoli",
      "The flow of blood through the tissues to deliver oxygen and nutrients and remove waste",
      "The heart's ability to generate electrical impulses",
      "The volume of blood ejected from the ventricle with each beat"
    ],
    correct: 1,
    rationale: "Perfusion is the passage of blood through the vasculature to the tissues — delivering oxygen and nutrients while removing metabolic waste products. Adequate perfusion requires sufficient cardiac output, patent blood vessels, and adequate blood volume. Impaired perfusion (from heart failure, atherosclerosis, shock, etc.) leads to tissue ischemia and organ dysfunction. Ventilation refers to air in the alveoli. Automaticity refers to electrical impulse generation. Stroke volume is the volume per beat."
  },
  {
    id: "c4_12", chapter: 4, topic: "O2 Supply/Demand", type: "mc",
    objective: "Describe the balance between myocardium oxygen supply and demand (CO1, CO4)",
    stem: "A patient with coronary artery disease develops chest pain during exercise. This occurs because:",
    options: [
      "Exercise causes coronary arteries to constrict further",
      "Myocardial oxygen demand exceeds what the narrowed coronary arteries can supply",
      "Exercise causes blood to flow backward through the coronary arteries",
      "The heart stops producing electrical impulses during exercise"
    ],
    correct: 1,
    rationale: "The heart muscle requires a constant supply of oxygen delivered by the coronary arteries. During exercise, the heart rate and contractility increase, raising myocardial oxygen DEMAND. In healthy arteries, the vessels dilate to increase supply. In CAD, the narrowed arteries cannot dilate adequately — supply cannot meet demand, causing myocardial ischemia and anginal chest pain. This supply-demand mismatch is the fundamental mechanism of angina."
  },

  // ═══════════════════════════════════════════
  // CHAPTER 5: RESPIRATORY (7 Qs)
  // ═══════════════════════════════════════════

  {
    id: "c5_01", chapter: 5, topic: "Oxygenation/Ventilation", type: "mc",
    objective: "Describe the process of oxygenation and ventilation (CO1, CO2)",
    stem: "The process of air moving into and out of the lungs is called:",
    options: [
      "Perfusion",
      "Diffusion",
      "Ventilation",
      "Oxygenation"
    ],
    correct: 2,
    rationale: "Ventilation is the mechanical process of moving air into (inhalation) and out of (exhalation) the lungs. Oxygenation is the broader process of providing oxygen to the tissues. Diffusion is the exchange of gases (O2 and CO2) across the alveolar-capillary membrane. Perfusion is blood flow through the pulmonary capillaries. All four are related but distinct — ventilation brings air in, diffusion exchanges gases, perfusion moves blood through, and oxygenation is the end result."
  },
  {
    id: "c5_02", chapter: 5, topic: "Asthma", type: "sata",
    objective: "Describe the etiology, pathophysiology, and clinical manifestations of asthma (CO5)",
    stem: "Which of the following are characteristic clinical manifestations of asthma? Select all that apply.",
    options: [
      "Wheezing",
      "Dyspnea",
      "Chest tightness",
      "Productive cough with purulent sputum"
    ],
    correct: [0, 1, 2],
    rationale: "Asthma manifests with wheezing (turbulent airflow through narrowed airways), dyspnea (difficulty breathing due to bronchoconstriction), and chest tightness (from bronchospasm and air trapping). Productive cough with purulent (yellow-green) sputum is more characteristic of infection (pneumonia, acute bronchitis) — asthma may produce a cough, but the sputum is typically clear and mucoid, not purulent. The three tissue changes in asthma are bronchospasm, inflammation/edema, and mucus production."
  },
  {
    id: "c5_03", chapter: 5, topic: "Asthma", type: "sata",
    objective: "Identify common triggers associated with asthma (CO4, CO5)",
    stem: "Which of the following are common asthma triggers? Select all that apply.",
    options: [
      "Allergens (pollen, dust mites, pet dander)",
      "Cold air",
      "Exercise",
      "Emotional stress"
    ],
    correct: [0, 1, 2, 3],
    rationale: "ALL of these are well-established asthma triggers. Allergens activate IgE-mediated immune responses in the airways. Cold air irritates hyperreactive airways. Exercise increases ventilatory demand and can trigger exercise-induced bronchoconstriction. Emotional stress activates the sympathetic nervous system and can alter breathing patterns. Other triggers include respiratory infections, smoke, air pollution, and certain medications (aspirin, NSAIDs, beta-blockers). Identifying and avoiding triggers is a key prevention strategy."
  },
  {
    id: "c5_04", chapter: 5, topic: "Chronic Bronchitis", type: "mc",
    objective: "Relate the term 'obstructive' to ventilation problems associated with chronic bronchitis (CO2)",
    stem: "Chronic bronchitis is classified as an obstructive pulmonary disease because:",
    options: [
      "The lung tissue loses elasticity and cannot recoil",
      "Chronic inflammation and excess mucus production narrow the airways, obstructing airflow",
      "The alveoli are destroyed, reducing surface area for gas exchange",
      "The chest wall becomes rigid, preventing lung expansion"
    ],
    correct: 1,
    rationale: "In chronic bronchitis, persistent inflammation causes the bronchial walls to thicken and goblet cells to overproduce mucus. This narrows the airway lumen, OBSTRUCTING airflow — particularly during exhalation. Air can get in but has difficulty getting out. Loss of elasticity and alveolar destruction describe emphysema. A rigid chest wall would be a restrictive problem. The hallmark of chronic bronchitis is a productive cough most days for at least 3 months in 2 consecutive years."
  },
  {
    id: "c5_05", chapter: 5, topic: "Emphysema", type: "mc",
    objective: "Relate residual volume and total lung capacity to the pathophysiology of emphysema (CO2, CO6)",
    stem: "In emphysema, residual volume and total lung capacity are both INCREASED because:",
    options: [
      "The airways are narrowed by inflammation and mucus",
      "The alveolar walls are destroyed, reducing elastic recoil and trapping air in the lungs",
      "The diaphragm is paralyzed and cannot contract",
      "Excess fluid fills the alveoli"
    ],
    correct: 1,
    rationale: "Emphysema destroys the alveolar walls and their elastic fibers. Without elastic recoil, the lungs cannot effectively push air out during exhalation — air becomes trapped. This increases residual volume (air left in the lungs after maximum exhalation) and total lung capacity (the lungs are hyperinflated with trapped air). This is why emphysema patients develop a 'barrel chest' — the chronically hyperinflated lungs reshape the thorax over time."
  },
  {
    id: "c5_06", chapter: 5, topic: "COPD Comparison", type: "mc",
    objective: "Differentiate between chronic bronchitis and emphysema (CO5, CO6)",
    stem: "Which statement correctly differentiates chronic bronchitis from emphysema?",
    options: [
      "Chronic bronchitis primarily involves airway inflammation and mucus production; emphysema primarily involves alveolar destruction",
      "Chronic bronchitis destroys alveoli; emphysema narrows the airways with mucus",
      "Chronic bronchitis is restrictive; emphysema is obstructive",
      "Chronic bronchitis affects only the upper airways; emphysema affects only the lower airways"
    ],
    correct: 0,
    rationale: "The fundamental difference: chronic bronchitis is a disease of the AIRWAYS (inflammation, mucus, airway narrowing) while emphysema is a disease of the ALVEOLI (wall destruction, loss of elastic recoil, air trapping). Both are obstructive — not restrictive. Both affect the lower airways. Clinically, chronic bronchitis presents with productive cough ('blue bloater' — cyanosis, edema), while emphysema presents with dyspnea and hyperinflation ('pink puffer' — pursed-lip breathing, barrel chest). Many COPD patients have features of both."
  },
  {
    id: "c5_07", chapter: 5, topic: "Respiratory Prevention", type: "mc",
    objective: "Describe prevention strategies for chronic bronchitis and emphysema (CO7)",
    stem: "The MOST important primary prevention strategy for chronic bronchitis and emphysema is:",
    options: [
      "Annual influenza vaccination",
      "Smoking cessation or never starting smoking",
      "Regular pulmonary function testing",
      "Daily use of bronchodilators"
    ],
    correct: 1,
    rationale: "Smoking is by far the leading cause of both chronic bronchitis and emphysema. Smoking cessation (or never starting) is the single most effective primary prevention strategy. Influenza vaccination is important but is secondary/tertiary prevention (preventing complications in people who already have COPD). Pulmonary function testing is diagnostic, not preventive. Bronchodilators treat existing disease — that's tertiary prevention."
  },

  // ═══════════════════════════════════════════
  // CHAPTER 6: FLUID, ELECTROLYTE & ACID-BASE (8 Qs)
  // ═══════════════════════════════════════════

  {
    id: "c6_01", chapter: 6, topic: "Dehydration", type: "sata",
    objective: "Describe the pathophysiology, risk factors, and clinical manifestations of dehydration (CO5)",
    stem: "Which of the following are clinical manifestations of dehydration? Select all that apply.",
    options: [
      "Decreased urine output with concentrated (dark) urine",
      "Dry mucous membranes and poor skin turgor",
      "Tachycardia",
      "Jugular vein distention"
    ],
    correct: [0, 1, 2],
    rationale: "Dehydration decreases fluid volume, leading to: decreased urine output (kidneys conserve water, urine becomes concentrated/dark), dry mucous membranes and poor skin turgor (reduced interstitial fluid), and tachycardia (heart compensates for reduced volume by beating faster to maintain cardiac output). Jugular vein distention (JVD) indicates fluid OVERLOAD, not dehydration — with dehydration, you'd expect flat neck veins."
  },
  {
    id: "c6_02", chapter: 6, topic: "Electrolytes", type: "mc",
    objective: "Explain normal electrolyte functions in the body (CO1, CO6)",
    stem: "Potassium's primary function in the body is:",
    options: [
      "Building strong bones and teeth",
      "Regulating cardiac rhythm and muscle contraction through cellular membrane potential",
      "Transporting oxygen in the blood",
      "Regulating blood glucose levels"
    ],
    correct: 1,
    rationale: "Potassium (K+) is the major intracellular cation and is critical for maintaining cellular membrane potential — which directly affects cardiac conduction and skeletal/smooth muscle contraction. Both hypokalemia and hyperkalemia can cause life-threatening cardiac dysrhythmias. Normal serum potassium is 3.5-5.0 mEq/L. Calcium builds bones. Hemoglobin carries oxygen. Insulin regulates glucose. Potassium abnormalities are among the most dangerous electrolyte imbalances."
  },
  {
    id: "c6_03", chapter: 6, topic: "ABGs", type: "mc",
    objective: "Analyze an ABG to identify the primary disorder and possible causes (CO6)",
    stem: "A patient's ABG results show: pH 7.30, PaCO2 55 mmHg, HCO3 24 mEq/L. This indicates:",
    options: [
      "Respiratory alkalosis",
      "Respiratory acidosis",
      "Metabolic acidosis",
      "Metabolic alkalosis"
    ],
    correct: 1,
    rationale: "Step-by-step ABG interpretation: (1) pH 7.30 is below 7.35, so this is ACIDOSIS. (2) PaCO2 55 is elevated (normal 35-45) — high CO2 means the lungs are retaining acid. (3) HCO3 24 is normal (22-26) — kidneys haven't compensated yet. Since the CO2 is abnormal and the HCO3 is normal, the PRIMARY problem is RESPIRATORY acidosis. Common causes: COPD, respiratory depression, airway obstruction — anything that impairs CO2 elimination."
  },
  {
    id: "c6_04", chapter: 6, topic: "ABGs", type: "mc",
    objective: "Differentiate between respiratory and metabolic imbalances (CO6)",
    stem: "A patient's ABG results show: pH 7.48, PaCO2 40 mmHg, HCO3 30 mEq/L. This indicates:",
    options: [
      "Respiratory alkalosis",
      "Respiratory acidosis",
      "Metabolic alkalosis",
      "Metabolic acidosis"
    ],
    correct: 2,
    rationale: "Interpretation: (1) pH 7.48 is above 7.45 — ALKALOSIS. (2) PaCO2 40 is normal (35-45) — lungs are not the primary problem. (3) HCO3 30 is elevated (normal 22-26) — there's excess bicarbonate (base). Since HCO3 is the abnormal value, this is METABOLIC alkalosis. Common causes include prolonged vomiting (loss of stomach acid/HCl), excessive antacid use, or nasogastric suction. Remember: respiratory problems show CO2 changes; metabolic problems show HCO3 changes."
  },
  {
    id: "c6_05", chapter: 6, topic: "ABGs", type: "mc",
    objective: "Analyze an ABG to identify the primary disorder (CO6)",
    stem: "A patient with diabetic ketoacidosis has the following ABG: pH 7.25, PaCO2 28 mmHg, HCO3 14 mEq/L. The PaCO2 of 28 indicates:",
    options: [
      "The lungs are failing and worsening the acidosis",
      "The lungs are compensating by blowing off CO2 to raise the pH",
      "The kidneys are retaining bicarbonate",
      "There is no compensation occurring"
    ],
    correct: 1,
    rationale: "This is metabolic acidosis (low pH, low HCO3 from ketoacid accumulation) WITH respiratory compensation. The low PaCO2 (28, below normal 35-45) tells you the lungs are hyperventilating — breathing faster and deeper to blow off CO2 (an acid). This is the body's attempt to raise the pH back toward normal. This is called Kussmaul breathing in DKA. The pH is still acidotic (7.25), meaning compensation is partial — the lungs are helping but haven't fully corrected the problem."
  },
  {
    id: "c6_06", chapter: 6, topic: "Electrolytes", type: "mc",
    objective: "List expected serum laboratory values of sodium, potassium (CO6)",
    stem: "A patient's serum potassium level is 6.2 mEq/L. The nurse's PRIORITY action is to:",
    options: [
      "Encourage the patient to eat a banana",
      "Obtain a stat 12-lead ECG and notify the provider",
      "Increase IV fluid rate",
      "Document the finding and recheck in 4 hours"
    ],
    correct: 1,
    rationale: "Normal potassium is 3.5-5.0 mEq/L. A level of 6.2 is significantly elevated (hyperkalemia) and is a MEDICAL EMERGENCY because hyperkalemia can cause fatal cardiac dysrhythmias — specifically, tall peaked T waves progressing to widened QRS and eventually ventricular fibrillation or asystole. Priority: get an ECG immediately to assess cardiac effects and notify the provider for urgent treatment. Never delay — hyperkalemia kills. Bananas INCREASE potassium and would worsen the problem."
  },
  {
    id: "c6_07", chapter: 6, topic: "Fluid Balance", type: "mc",
    objective: "Describe previously learned content concerning fluid compartments (CO1)",
    stem: "The majority of body water is located in the:",
    options: [
      "Intravascular space (blood vessels)",
      "Interstitial space (between cells)",
      "Intracellular space (inside cells)",
      "Transcellular space (cerebrospinal fluid, synovial fluid)"
    ],
    correct: 2,
    rationale: "Approximately two-thirds of total body water is intracellular (inside cells). The remaining one-third is extracellular — divided between interstitial (between cells, about 75% of extracellular) and intravascular (blood vessels, about 25% of extracellular). Understanding fluid distribution is foundational because many conditions involve fluid shifting between compartments — edema is fluid moving from intravascular to interstitial space, for example."
  },
  {
    id: "c6_08", chapter: 6, topic: "pH Regulation", type: "mc",
    objective: "Outline mechanisms in the body that regulate pH (CO1)",
    stem: "A patient develops metabolic acidosis. The nurse expects the FIRST compensatory response to be:",
    options: [
      "The kidneys will begin excreting hydrogen ions",
      "The respiratory system will increase the rate and depth of breathing to blow off CO2",
      "The liver will produce more bicarbonate",
      "The bone marrow will increase red blood cell production"
    ],
    correct: 1,
    rationale: "The respiratory system compensates for acid-base imbalances within MINUTES by adjusting ventilation — in metabolic acidosis, the lungs increase rate and depth of breathing (Kussmaul respirations) to blow off CO2 (an acid), which helps raise the pH. The kidneys also compensate but take HOURS TO DAYS to fully respond by excreting hydrogen ions and retaining bicarbonate. Because the respiratory system acts so much faster than the kidneys, it is the first compensatory mechanism you'll see clinically. The liver and bone marrow are not primary pH regulators."
  },

  // ═══════════════════════════════════════════
  // CHAPTER 7: URINARY DISORDERS (6 Qs — includes stress incontinence)
  // ═══════════════════════════════════════════

  {
    id: "c7_01", chapter: 7, topic: "UTI", type: "mc",
    objective: "Differentiate between cystitis and pyelonephritis (CO5)",
    stem: "A patient presents with fever of 102.4°F, flank pain, nausea, and costovertebral angle tenderness. This presentation is most consistent with:",
    options: [
      "Cystitis",
      "Pyelonephritis",
      "Benign prostatic hyperplasia",
      "Urethritis"
    ],
    correct: 1,
    rationale: "Pyelonephritis is an upper urinary tract infection affecting the kidney. The hallmark signs are fever (often high), flank/costovertebral angle (CVA) pain, nausea/vomiting, and systemic illness. Cystitis (lower UTI/bladder infection) typically presents with dysuria, frequency, urgency, and suprapubic discomfort WITHOUT systemic symptoms like high fever or flank pain. This distinction is clinically critical because pyelonephritis is more serious and requires more aggressive treatment."
  },
  {
    id: "c7_02", chapter: 7, topic: "UTI", type: "sata",
    objective: "Identify abnormal findings of urinalysis that indicate cystitis or pyelonephritis (CO5, CO6)",
    stem: "Which urinalysis findings suggest a urinary tract infection? Select all that apply.",
    options: [
      "Positive leukocyte esterase",
      "Positive nitrites",
      "Presence of white blood cells",
      "Glucose in the urine"
    ],
    correct: [0, 1, 2],
    rationale: "Leukocyte esterase is an enzyme released by WBCs — its presence indicates WBCs in the urine (pyuria), suggesting infection or inflammation. Nitrites indicate bacteria that convert nitrates to nitrites (most commonly gram-negative organisms like E. coli). WBCs in the urine directly indicate an inflammatory/infectious process. Glucose in the urine (glucosuria) is associated with diabetes mellitus, not UTI."
  },
  {
    id: "c7_03", chapter: 7, topic: "UTI Prevention", type: "sata",
    objective: "Identify methods to prevent urinary tract infections (CO7)",
    stem: "Which strategies help prevent urinary tract infections? Select all that apply.",
    options: [
      "Adequate fluid intake",
      "Wiping front to back after toileting",
      "Voiding after sexual intercourse",
      "Holding urine for extended periods to strengthen the bladder"
    ],
    correct: [0, 1, 2],
    rationale: "Adequate fluid intake dilutes urine and promotes frequent voiding, which flushes bacteria from the urinary tract. Wiping front to back prevents fecal bacteria (E. coli) from reaching the urethra. Voiding after intercourse flushes bacteria that may have been introduced into the urethra. Holding urine for extended periods is HARMFUL — it allows bacteria to multiply in stagnant urine and increases UTI risk. These are essential patient education points."
  },
  {
    id: "c7_04", chapter: 7, topic: "BPH", type: "mc",
    objective: "Relate the role of the urethra to the clinical manifestations of BPH (CO6)",
    stem: "A 68-year-old male patient with BPH reports difficulty starting urination and a weak urine stream. These symptoms occur because:",
    options: [
      "The kidneys are producing less urine",
      "The enlarged prostate compresses the urethra, obstructing urine flow",
      "The bladder muscle has become paralyzed",
      "There is a kidney stone blocking the ureter"
    ],
    correct: 1,
    rationale: "The prostate gland surrounds the urethra just below the bladder. In BPH (benign prostatic hyperplasia), the prostate enlarges and compresses the urethra — like squeezing a straw. This creates obstructive urinary symptoms: hesitancy (difficulty starting), weak stream, incomplete emptying, frequency, nocturia, and dribbling. Understanding the anatomical relationship between the prostate and urethra is key to understanding why BPH causes these specific symptoms."
  },
  {
    id: "c7_05", chapter: 7, topic: "BPH & UTI", type: "mc",
    objective: "Explain the relationship between BPH and recurrent UTIs (CO1, CO5, CO6)",
    stem: "A patient with BPH has recurrent urinary tract infections. The nurse understands the connection is that:",
    options: [
      "BPH weakens the immune system",
      "Urinary retention from BPH creates stagnant urine where bacteria can multiply",
      "BPH causes the kidneys to produce bacteria",
      "The enlarged prostate directly introduces bacteria into the bladder"
    ],
    correct: 1,
    rationale: "BPH causes urinary obstruction leading to incomplete bladder emptying (urinary retention). Residual urine that sits in the bladder becomes a breeding ground for bacteria — warm, stagnant, nutrient-rich. This is why BPH patients are prone to recurrent UTIs. The prostate doesn't produce bacteria or directly weaken immunity — it's the mechanical consequence of obstruction and stasis that creates infection risk."
  },
  {
    id: "c7_06", chapter: 7, topic: "Stress Incontinence", type: "mc",
    objective: "Define stress incontinence and identify common risk factors (CO2, CO5)",
    stem: "A patient reports involuntary urine leakage when she coughs, sneezes, or laughs. This is consistent with:",
    options: [
      "Urge incontinence",
      "Overflow incontinence",
      "Stress incontinence",
      "Functional incontinence"
    ],
    correct: 2,
    rationale: "Stress incontinence is involuntary urine loss during activities that increase intra-abdominal pressure — coughing, sneezing, laughing, lifting, or exercise. It occurs due to weakness of the pelvic floor muscles and/or the urethral sphincter. Common risk factors include multiple vaginal deliveries, menopause (estrogen loss weakens pelvic tissues), obesity, chronic coughing, and aging. Urge incontinence is a sudden strong urge followed by loss. Overflow occurs when the bladder can't empty fully. Functional incontinence involves inability to reach the toilet in time."
  },

  // ═══════════════════════════════════════════
  // CHAPTER 9: GASTROINTESTINAL DISORDERS (12 Qs)
  // ═══════════════════════════════════════════

  {
    id: "c9_01", chapter: 9, topic: "Upper GI Anatomy", type: "mc",
    objective: "Describe previously learned content concerning anatomy of the upper GI system (CO1)",
    stem: "The primary function of the lower esophageal sphincter (LES) is to:",
    options: [
      "Propel food forward through peristalsis",
      "Prevent gastric contents from refluxing back into the esophagus",
      "Secrete hydrochloric acid for digestion",
      "Absorb nutrients from food"
    ],
    correct: 1,
    rationale: "The lower esophageal sphincter is a ring of muscle at the junction of the esophagus and stomach. Its primary function is to remain closed between swallows, preventing acidic gastric contents from refluxing upward into the esophagus (which lacks the protective mucous lining of the stomach). When the LES is weakened or relaxes inappropriately, gastric acid can reflux — this is the fundamental mechanism of GERD."
  },
  {
    id: "c9_02", chapter: 9, topic: "GERD", type: "mc",
    objective: "Relate cellular adaptation (metaplasia) to the etiology of GERD (CO3)",
    stem: "Chronic GERD can lead to Barrett's esophagus, which involves the cellular adaptation of:",
    options: [
      "Hyperplasia",
      "Hypertrophy",
      "Atrophy",
      "Metaplasia"
    ],
    correct: 3,
    rationale: "In Barrett's esophagus, the normal squamous epithelium of the esophagus is replaced by columnar epithelium (similar to intestinal lining) — this is METAPLASIA, the replacement of one mature cell type with another. The esophageal cells are essentially trying to adapt to chronic acid exposure by becoming more like stomach/intestinal cells that can better tolerate acid. This is a precancerous condition — Barrett's increases the risk of esophageal adenocarcinoma. This connects directly back to Chapter 1's cellular adaptations."
  },
  {
    id: "c9_03", chapter: 9, topic: "GERD", type: "sata",
    objective: "Describe the pathophysiology, risk factors, and clinical manifestations of GERD (CO5)",
    stem: "Which of the following are risk factors for GERD? Select all that apply.",
    options: [
      "Obesity",
      "Hiatal hernia",
      "Smoking",
      "Low-fat diet"
    ],
    correct: [0, 1, 2],
    rationale: "Obesity increases intra-abdominal pressure, pushing gastric contents upward. Hiatal hernia displaces the LES above the diaphragm, reducing its effectiveness. Smoking relaxes the LES and increases acid production. A low-fat diet would actually HELP GERD — high-fat foods delay gastric emptying and relax the LES. Other risk factors include large meals, eating before lying down, caffeine, alcohol, and certain medications."
  },
  {
    id: "c9_04", chapter: 9, topic: "PUD", type: "mc",
    objective: "Describe the role of H. pylori in the development of gastritis (CO5)",
    stem: "Helicobacter pylori contributes to peptic ulcer disease by:",
    options: [
      "Directly perforating the stomach wall",
      "Producing urease that breaks down the protective mucosal barrier, allowing acid to damage the underlying tissue",
      "Increasing the strength of the lower esophageal sphincter",
      "Reducing gastric acid production"
    ],
    correct: 1,
    rationale: "H. pylori is a gram-negative bacterium that burrows into the gastric mucous layer. It produces urease (which converts urea to ammonia, creating a less acidic microenvironment for the bacterium) and disrupts the protective mucosal barrier. With the barrier compromised, hydrochloric acid can directly contact and damage the underlying gastric or duodenal epithelium, leading to inflammation (gastritis) and ulceration. H. pylori doesn't perforate the wall directly — perforation is a complication of the ulcer it causes."
  },
  {
    id: "c9_05", chapter: 9, topic: "PUD", type: "sata",
    objective: "Relate complications of peptic ulcer disease in a clinical scenario (CO5, CO6)",
    stem: "A patient with a history of peptic ulcer disease presents with sudden, severe abdominal pain, rigid abdomen, and signs of shock. Which complications should the nurse suspect? Select all that apply.",
    options: [
      "Perforation",
      "Hemorrhage",
      "GERD",
      "Peritonitis"
    ],
    correct: [0, 1, 3],
    rationale: "Sudden severe pain with a rigid ('board-like') abdomen suggests perforation — the ulcer has eroded completely through the stomach or duodenal wall, spilling gastric contents into the peritoneal cavity. This causes peritonitis (inflammation of the peritoneum — the rigid abdomen is a key sign). Signs of shock suggest hemorrhage — a bleeding ulcer can cause significant blood loss. GERD is a separate condition that does not present with sudden severe abdominal pain and rigidity. These are life-threatening surgical emergencies."
  },
  {
    id: "c9_06", chapter: 9, topic: "Hepatitis", type: "mc",
    objective: "Differentiate between etiologies of viral hepatitis A, B, C, D (CO5)",
    stem: "A healthcare worker sustains a needlestick injury from a contaminated needle. Which type of viral hepatitis is the GREATEST concern for blood-borne transmission?",
    options: [
      "Hepatitis A",
      "Hepatitis B",
      "Hepatitis D",
      "Hepatitis A and D"
    ],
    correct: 1,
    rationale: "Hepatitis B is the greatest needlestick concern because it is highly infectious via blood and body fluids — it can survive on surfaces for up to 7 days and has a high transmission rate per needlestick exposure (~30%). Hepatitis C is also blood-borne but has a lower transmission rate (~1.8% per needlestick). Hepatitis A is transmitted fecal-orally (contaminated food/water), NOT by needlestick. Hepatitis D requires co-infection with Hepatitis B to replicate — it can't exist alone."
  },
  {
    id: "c9_07", chapter: 9, topic: "Hepatitis Prevention", type: "mc",
    objective: "Relate primary and secondary prevention strategies to viral hepatitis (CO7)",
    stem: "A nurse teaches a group of adolescents about hepatitis prevention. Which statement demonstrates primary prevention of Hepatitis B?",
    options: [
      "Getting a blood test to check for Hepatitis B antibodies",
      "Receiving the Hepatitis B vaccine series",
      "Taking antiviral medications after exposure",
      "Monitoring liver function tests annually"
    ],
    correct: 1,
    rationale: "Primary prevention prevents disease from occurring — vaccination is the gold standard for Hepatitis B primary prevention. Blood testing for antibodies is screening (secondary prevention). Post-exposure antiviral therapy is also secondary prevention (treating early after exposure). Monitoring liver function is surveillance for existing disease (tertiary prevention). The Hep B vaccine is recommended for all infants, healthcare workers, and at-risk populations."
  },
  {
    id: "c9_08", chapter: 9, topic: "Cirrhosis", type: "sata",
    objective: "Identify clinical manifestations of cirrhosis (CO2, CO6)",
    stem: "Which of the following are clinical manifestations of cirrhosis of the liver? Select all that apply.",
    options: [
      "Jaundice",
      "Ascites",
      "Easy bruising",
      "Pruritus (itching)"
    ],
    correct: [0, 1, 2, 3],
    rationale: "ALL are manifestations of cirrhosis: Jaundice — the scarred liver can't process bilirubin, which accumulates in the blood and deposits in skin/sclera. Ascites — portal hypertension and reduced albumin production cause fluid to leak into the peritoneal cavity. Easy bruising — the damaged liver can't produce adequate clotting factors. Pruritus — bile salts deposit in the skin due to impaired hepatic excretion. Each manifestation connects to a specific liver function that cirrhosis impairs."
  },
  {
    id: "c9_09", chapter: 9, topic: "Diarrhea/Constipation", type: "sata",
    objective: "Discuss complications associated with diarrhea and constipation (CO5, CO6)",
    stem: "Which of the following are potential complications of severe, prolonged diarrhea? Select all that apply.",
    options: [
      "Dehydration",
      "Electrolyte imbalances (especially hypokalemia)",
      "Metabolic acidosis",
      "Fecal impaction"
    ],
    correct: [0, 1, 2],
    rationale: "Severe diarrhea causes significant fluid loss → dehydration. The GI tract secretes large amounts of potassium and bicarbonate — losing these in diarrhea causes hypokalemia and metabolic acidosis (loss of bicarbonate, a base). Fecal impaction is a complication of severe CONSTIPATION, not diarrhea — it's the opposite problem. This connects to Chapter 6 (fluid/electrolyte/acid-base) — diarrhea is a common CAUSE of the imbalances you studied there."
  },
  {
    id: "c9_10", chapter: 9, topic: "Diverticular Disease", type: "mc",
    objective: "Differentiate between diverticulosis and diverticulitis (CO5)",
    stem: "A patient is told they have diverticulosis found incidentally on a colonoscopy. The nurse explains that diverticulosis differs from diverticulitis in that:",
    options: [
      "Diverticulosis involves inflamed and infected pouches requiring antibiotics",
      "Diverticulosis is the presence of pouches (diverticula) in the colon wall WITHOUT inflammation",
      "Diverticulosis only occurs in the upper GI tract",
      "There is no difference — they are the same condition"
    ],
    correct: 1,
    rationale: "Diverticulosis is the presence of diverticula (small outpouchings in the colon wall) — it is very common, often asymptomatic, and found incidentally. Diverticulitis occurs when one or more diverticula become INFLAMED and/or INFECTED — causing left lower quadrant pain, fever, elevated WBC, and potentially serious complications (perforation, abscess, peritonitis). The '-osis' suffix means condition/presence; the '-itis' suffix means inflammation. Not all diverticulosis progresses to diverticulitis."
  },
  {
    id: "c9_11", chapter: 9, topic: "Diverticular Disease", type: "mc",
    objective: "Identify risk factors for diverticulosis (CO5)",
    stem: "The primary risk factor for developing diverticulosis is:",
    options: [
      "High-fiber diet",
      "Low-fiber diet",
      "Excessive physical activity",
      "Young age"
    ],
    correct: 1,
    rationale: "Low-fiber diet is the primary modifiable risk factor for diverticulosis. Without adequate fiber, stool is smaller and harder, requiring increased intraluminal pressure to move through the colon. This chronic increased pressure causes the mucosal layer to herniate through weak points in the muscular wall, forming diverticula. Age is also a major factor (more common after 50). A HIGH-fiber diet is actually PROTECTIVE — it promotes bulkier, softer stools that require less pressure to move."
  },
  {
    id: "c9_12", chapter: 9, topic: "Vomiting Reflex", type: "mc",
    objective: "Outline the vomiting reflex (CO1)",
    stem: "The vomiting center that coordinates the emetic reflex is located in the:",
    options: [
      "Cerebral cortex",
      "Medulla oblongata",
      "Cerebellum",
      "Hypothalamus"
    ],
    correct: 1,
    rationale: "The vomiting center is located in the medulla oblongata of the brainstem. It receives input from multiple sources: the chemoreceptor trigger zone (responds to toxins in the blood), the GI tract via the vagus nerve (responds to irritation/distension), the vestibular system (motion sickness), and the cerebral cortex (emotional triggers, sights, smells). When sufficiently stimulated, it coordinates the complex motor sequence of vomiting — diaphragm contraction, abdominal muscle contraction, reverse peristalsis, and glottis closure."
  },

  // ═══════════════════════════════════════════
  // CHAPTER 10: ENDOCRINE & DIABETES (13 Qs)
  // ═══════════════════════════════════════════

  {
    id: "c10_01", chapter: 10, topic: "Thyroid", type: "mc",
    objective: "Describe previously learned content concerning the thyroid gland and related hormones (CO1)",
    stem: "Thyroid-stimulating hormone (TSH) is produced by the:",
    options: [
      "Thyroid gland",
      "Hypothalamus",
      "Anterior pituitary gland",
      "Posterior pituitary gland"
    ],
    correct: 2,
    rationale: "The axis works top-down: the hypothalamus releases TRH (thyrotropin-releasing hormone), which stimulates the anterior pituitary to release TSH (thyroid-stimulating hormone), which stimulates the thyroid gland to produce T3 and T4. This is a feedback loop — when T3/T4 levels are adequate, they inhibit further TRH and TSH release. Understanding this axis is essential for interpreting thyroid lab values and understanding thyroid disorders."
  },
  {
    id: "c10_02", chapter: 10, topic: "Hyperthyroidism", type: "sata",
    objective: "Describe the pathophysiology, risk factors, and clinical manifestations of hyperthyroidism (CO5)",
    stem: "Which of the following are clinical manifestations of hyperthyroidism? Select all that apply.",
    options: [
      "Tachycardia and palpitations",
      "Weight loss despite increased appetite",
      "Heat intolerance and excessive sweating",
      "Constipation and weight gain"
    ],
    correct: [0, 1, 2],
    rationale: "Hyperthyroidism = excess thyroid hormone = hypermetabolic state. Everything speeds up: heart rate increases (tachycardia/palpitations), metabolism burns calories faster (weight loss despite eating more), and heat production increases (heat intolerance, sweating). Constipation and weight gain are manifestations of HYPOthyroidism — where everything slows down. A helpful memory device: 'hyper' = everything is too fast/too much; 'hypo' = everything is too slow/not enough."
  },
  {
    id: "c10_03", chapter: 10, topic: "Hypothyroidism", type: "sata",
    objective: "Describe the pathophysiology, risk factors, and clinical manifestations of hypothyroidism (CO5)",
    stem: "Which of the following are clinical manifestations of hypothyroidism? Select all that apply.",
    options: [
      "Cold intolerance",
      "Weight gain",
      "Fatigue and lethargy",
      "Tremors and anxiety"
    ],
    correct: [0, 1, 2],
    rationale: "Hypothyroidism = insufficient thyroid hormone = hypometabolic state. Everything slows down: metabolism decreases (weight gain), heat production drops (cold intolerance), and energy levels fall (fatigue/lethargy). Other manifestations include constipation, dry skin, brittle hair/nails, bradycardia, and mental sluggishness. Tremors and anxiety are manifestations of HYPERthyroidism. The clinical presentations are essentially mirror images of each other."
  },
  {
    id: "c10_04", chapter: 10, topic: "Thyroid", type: "mc",
    objective: "Relate the term goiter to disorders of the thyroid gland and cellular adaptation (CO2, CO3)",
    stem: "A goiter is an enlargement of the thyroid gland. This enlargement is an example of which cellular adaptation?",
    options: [
      "Atrophy",
      "Metaplasia",
      "Hypertrophy and/or hyperplasia",
      "Dysplasia"
    ],
    correct: 2,
    rationale: "A goiter results from thyroid cells increasing in size (hypertrophy) and/or number (hyperplasia) — typically in response to stimulation by TSH or other growth factors. A goiter can occur in both hyperthyroidism (e.g., Graves' disease — thyroid is overstimulated) and hypothyroidism (e.g., iodine deficiency — TSH is elevated trying to stimulate an underproducing gland). The presence of a goiter alone doesn't tell you if the patient is hyper or hypo — you need lab values."
  },
  {
    id: "c10_05", chapter: 10, topic: "Cushing's Disease", type: "sata",
    objective: "Describe the pathophysiology, risk factors, and clinical manifestations of Cushing's Disease (CO5)",
    stem: "Which clinical manifestations are associated with Cushing's Disease (hypercortisolism)? Select all that apply.",
    options: [
      "Moon face and buffalo hump",
      "Truncal obesity with thin extremities",
      "Easy bruising and poor wound healing",
      "Hypotension and weight loss"
    ],
    correct: [0, 1, 2],
    rationale: "Cushing's disease is caused by excess cortisol. Fat redistribution causes moon face (round face), buffalo hump (fat pad at base of neck), and truncal obesity with thin extremities. Cortisol's catabolic effects on protein cause skin thinning → easy bruising, and impaired collagen synthesis → poor wound healing. Cortisol also causes hyperglycemia, osteoporosis, immunosuppression, and hypertension. Hypotension and weight loss are seen in ADDison's disease (cortisol DEFICIENCY) — essentially the opposite."
  },
  {
    id: "c10_06", chapter: 10, topic: "Cushing's Disease", type: "mc",
    objective: "Relate the function of cortisol to the clinical manifestations and complications of Cushing's (CO5, CO6)",
    stem: "A patient with Cushing's disease develops hyperglycemia. This occurs because cortisol:",
    options: [
      "Destroys the insulin-producing cells of the pancreas",
      "Promotes gluconeogenesis and increases insulin resistance",
      "Directly blocks insulin receptors on all cells",
      "Prevents the liver from storing glucose"
    ],
    correct: 1,
    rationale: "Cortisol is a glucocorticoid — one of its primary functions is to raise blood glucose levels. It does this through gluconeogenesis (stimulating the liver to produce new glucose from non-carbohydrate sources) and by increasing insulin resistance (making cells less responsive to insulin). This is why patients with Cushing's disease are at high risk for developing diabetes. It doesn't destroy beta cells (that's Type 1 DM) — the pancreas is producing insulin, but the tissues can't use it effectively."
  },
  {
    id: "c10_07", chapter: 10, topic: "Glucose Regulation", type: "mc",
    objective: "Describe the function of glucagon, glycogen, glucose, and insulin in the body (CO1, CO6)",
    stem: "Insulin and glucagon have which relationship?",
    options: [
      "They have the same effect — both raise blood glucose",
      "They are antagonistic — insulin lowers blood glucose while glucagon raises it",
      "They are synergistic — they work together to raise blood glucose",
      "Insulin is produced by the liver; glucagon by the pancreas"
    ],
    correct: 1,
    rationale: "Insulin (from beta cells) and glucagon (from alpha cells) are antagonistic hormones that work together to maintain glucose homeostasis. When blood glucose rises (after eating), insulin is released to move glucose into cells, lowering blood sugar. When blood glucose falls (between meals, during fasting), glucagon stimulates the liver to release stored glucose (glycogenolysis) and produce new glucose (gluconeogenesis), raising blood sugar. Both are produced by the pancreas."
  },
  {
    id: "c10_08", chapter: 10, topic: "Diabetes Labs", type: "mc",
    objective: "Identify expected values of HbA1c, serum glucose, and glucosuria (CO5)",
    stem: "A patient's HbA1c is 9.2%. The nurse interprets this as:",
    options: [
      "Normal glycemic control",
      "Mildly elevated — pre-diabetes range",
      "Poorly controlled diabetes — average blood glucose has been significantly elevated over the past 2-3 months",
      "An acute elevation in blood glucose today"
    ],
    correct: 2,
    rationale: "HbA1c (glycosylated hemoglobin) measures the average blood glucose over the past 2-3 months (the lifespan of a red blood cell). Normal is below 5.7%. Pre-diabetes is 5.7-6.4%. Diabetes diagnosis is 6.5% or above. A target of less than 7% is recommended for most diabetic patients. 9.2% indicates POOR glycemic control — the patient's average blood glucose has been significantly elevated. Unlike a random glucose, A1c is not affected by what the patient ate today."
  },
  {
    id: "c10_09", chapter: 10, topic: "Type 1 Diabetes", type: "mc",
    objective: "Describe the pathophysiology, risk factors, and clinical manifestations of Type 1 diabetes (CO5)",
    stem: "Type 1 diabetes mellitus is caused by:",
    options: [
      "Insulin resistance in peripheral tissues",
      "Autoimmune destruction of the beta cells in the pancreatic islets of Langerhans",
      "Overproduction of glucagon by alpha cells",
      "Excessive carbohydrate intake during childhood"
    ],
    correct: 1,
    rationale: "Type 1 DM is an autoimmune disease in which the immune system destroys the insulin-producing beta cells in the pancreas. This results in absolute insulin deficiency — the pancreas produces little to no insulin. Without insulin, glucose cannot enter cells, leading to hyperglycemia. Patients with Type 1 DM require exogenous insulin for survival. Insulin resistance characterizes Type 2 DM. Diet does not cause Type 1 DM — it has a genetic and autoimmune etiology."
  },
  {
    id: "c10_10", chapter: 10, topic: "Type 1 Diabetes", type: "sata",
    objective: "Identify complications related to Type 1 diabetes (CO5, CO6)",
    stem: "Which of the following are acute complications of Type 1 diabetes? Select all that apply.",
    options: [
      "Diabetic ketoacidosis (DKA)",
      "Hypoglycemia",
      "Retinopathy",
      "Hyperglycemic hyperosmolar syndrome (HHS)"
    ],
    correct: [0, 1],
    rationale: "DKA is a hallmark ACUTE complication of Type 1 DM — without insulin, the body breaks down fat for energy, producing ketones and causing metabolic acidosis. Hypoglycemia is an acute complication of insulin therapy — too much insulin or too little food drops blood glucose dangerously low. Retinopathy is a CHRONIC/long-term complication (microvascular damage over years). HHS is primarily associated with Type 2 DM (not Type 1), involving extreme hyperglycemia and dehydration without significant ketosis."
  },
  {
    id: "c10_11", chapter: 10, topic: "Type 2 Diabetes", type: "mc",
    objective: "Describe the pathophysiology and clinical manifestations of Type 2 diabetes (CO5)",
    stem: "The primary pathophysiological mechanism in Type 2 diabetes mellitus is:",
    options: [
      "Autoimmune destruction of beta cells",
      "Insulin resistance combined with progressive beta cell dysfunction",
      "Complete absence of insulin production",
      "Overproduction of insulin by the pancreas"
    ],
    correct: 1,
    rationale: "Type 2 DM involves two key problems: (1) Insulin resistance — cells don't respond effectively to insulin, so glucose can't enter efficiently. (2) Progressive beta cell dysfunction — the pancreas initially compensates by producing more insulin, but over time beta cells fatigue and insulin production declines. Unlike Type 1, there IS insulin being produced (at least initially) — the problem is that it doesn't work effectively. This is why Type 2 DM is managed initially with lifestyle changes and oral medications, not necessarily insulin."
  },
  {
    id: "c10_12", chapter: 10, topic: "Type 2 Diabetes Prevention", type: "sata",
    objective: "Identify primary, secondary, and tertiary prevention strategies for Type 2 diabetes (CO7)",
    stem: "Which of the following are PRIMARY prevention strategies for Type 2 diabetes? Select all that apply.",
    options: [
      "Maintaining a healthy weight",
      "Regular physical activity",
      "Annual HbA1c screening for high-risk individuals",
      "Balanced nutrition with limited processed sugars"
    ],
    correct: [0, 1, 3],
    rationale: "PRIMARY prevention aims to prevent the disease from developing: maintaining a healthy weight (obesity is the #1 modifiable risk factor for Type 2 DM), regular physical activity (improves insulin sensitivity), and balanced nutrition (reduces glucose load and supports weight management) are all primary prevention strategies. Annual HbA1c screening is SECONDARY prevention — it's early detection of a disease that may already exist, not prevention of the disease occurring."
  },
  {
    id: "c10_13", chapter: 10, topic: "Pancreas", type: "mc",
    objective: "Describe the function of the alpha and beta cells in the pancreas (CO1)",
    stem: "The alpha cells and beta cells of the pancreatic islets of Langerhans produce, respectively:",
    options: [
      "Insulin and glucagon",
      "Glucagon and insulin",
      "Cortisol and aldosterone",
      "T3 and T4"
    ],
    correct: 1,
    rationale: "Alpha cells produce glucagon (raises blood glucose). Beta cells produce insulin (lowers blood glucose). Memory trick: alphabetical order — Alpha comes before Beta, Glucagon comes before Insulin. Another way: think 'A' for Alpha = 'Away from low' (glucagon pushes glucose UP, away from hypoglycemia). Beta = 'Brings down' (insulin brings glucose DOWN). Cortisol and aldosterone are from the adrenal glands. T3/T4 are from the thyroid."
  },

  // ═══════════════════════════════════════════
  // CHAPTER 11: NEURAL DISORDERS (12 Qs)
  // ═══════════════════════════════════════════

  {
    id: "c11_01", chapter: 11, topic: "Neural Perfusion", type: "mc",
    objective: "Describe the importance of neural tissue perfusion to tissue function (CO1, CO3)",
    stem: "Neural tissue is particularly vulnerable to ischemia because:",
    options: [
      "Neurons can easily regenerate after injury",
      "The brain has a large reserve of stored glucose and oxygen",
      "Neurons have very high metabolic demands and cannot survive long without continuous blood flow",
      "Neural tissue is primarily composed of fat cells"
    ],
    correct: 2,
    rationale: "Neural tissue has extremely high metabolic demands — the brain uses about 20% of the body's oxygen despite being only 2% of body weight. Neurons have minimal energy stores (no significant glycogen reserve) and depend on continuous blood flow for glucose and oxygen delivery. Even brief interruptions in perfusion (minutes) can cause irreversible neuron death. This is why stroke is a medical emergency — 'time is brain.' Neurons in the CNS have very limited ability to regenerate."
  },
  {
    id: "c11_02", chapter: 11, topic: "Dementia", type: "mc",
    objective: "Describe the common etiologies of dementia (CO5)",
    stem: "The most common cause of dementia is:",
    options: [
      "Vascular disease",
      "Parkinson's disease",
      "Alzheimer's disease",
      "Traumatic brain injury"
    ],
    correct: 2,
    rationale: "Alzheimer's disease accounts for 60-80% of all dementia cases, making it by far the most common cause. It involves progressive accumulation of amyloid plaques and neurofibrillary tangles in the brain, leading to neuronal death. Vascular dementia is the second most common cause (resulting from impaired blood flow to the brain, often from strokes). Parkinson's-related dementia and other types are less common. Understanding that dementia has multiple possible etiologies — not just 'old age' — is clinically important."
  },
  {
    id: "c11_03", chapter: 11, topic: "Dementia", type: "ordering",
    objective: "Describe the progressive clinical manifestations of dementia (CO5)",
    stem: "Place the following manifestations of dementia in order from EARLIEST to LATEST stage:",
    options: [
      "Inability to perform basic ADLs, loss of speech, incontinence",
      "Mild memory loss, difficulty finding words, misplacing items",
      "Confusion, personality changes, inability to recognize family members"
    ],
    correct: [1, 2, 0],
    rationale: "Dementia progresses through stages: EARLY — mild short-term memory loss, difficulty with word-finding, misplacing objects, subtle personality changes (often mistaken for normal aging). MIDDLE — increasing confusion, significant personality/behavioral changes, wandering, inability to recognize familiar people, needing assistance with ADLs. LATE — severe cognitive decline, loss of ability to communicate, inability to perform any ADLs, incontinence, total dependence on caregivers. The progression is gradual and irreversible."
  },
  {
    id: "c11_04", chapter: 11, topic: "Dementia Safety", type: "sata",
    objective: "Identify nursing considerations related to safety in the care of people with dementia (CO7)",
    stem: "Which nursing interventions promote safety for a patient with dementia? Select all that apply.",
    options: [
      "Maintaining a consistent daily routine and environment",
      "Using bed alarms or door alarms to prevent wandering",
      "Placing complex written instructions at the bedside",
      "Removing environmental hazards (throw rugs, sharp objects)"
    ],
    correct: [0, 1, 3],
    rationale: "Consistent routines reduce confusion and agitation in dementia patients — unfamiliar environments and schedule changes increase disorientation. Alarms help alert staff to wandering, a common and dangerous behavior. Removing hazards prevents falls and injuries in patients with impaired judgment and coordination. Complex written instructions are NOT helpful — dementia impairs comprehension and reading ability. Instructions should be simple, short, and given one step at a time verbally."
  },
  {
    id: "c11_05", chapter: 11, topic: "Stroke", type: "mc",
    objective: "Differentiate pathophysiology of ischemic vs. hemorrhagic strokes (CO5)",
    stem: "An ischemic stroke differs from a hemorrhagic stroke in that an ischemic stroke is caused by:",
    options: [
      "Rupture of a blood vessel in the brain",
      "A blockage (thrombus or embolus) that occludes a cerebral artery, cutting off blood flow",
      "A traumatic brain injury",
      "Increased cerebrospinal fluid production"
    ],
    correct: 1,
    rationale: "Ischemic stroke (~87% of all strokes) occurs when a blood clot (thrombus forming locally or embolus traveling from elsewhere) blocks a cerebral artery, cutting off blood supply to downstream brain tissue. Hemorrhagic stroke occurs when a blood vessel RUPTURES, causing bleeding into or around the brain. The distinction matters clinically because treatment differs dramatically — ischemic strokes may be treated with clot-dissolving drugs (tPA), while hemorrhagic strokes require controlling the bleeding. Giving tPA for a hemorrhagic stroke would be catastrophic."
  },
  {
    id: "c11_06", chapter: 11, topic: "Stroke", type: "sata",
    objective: "Identify clinical manifestations of ischemic and hemorrhagic strokes (CO5)",
    stem: "Which of the following are common clinical manifestations of stroke? Select all that apply.",
    options: [
      "Sudden one-sided weakness or numbness (hemiparesis/hemiplegia)",
      "Slurred speech or difficulty speaking (aphasia/dysarthria)",
      "Sudden severe headache (especially hemorrhagic)",
      "Bilateral leg pain with walking"
    ],
    correct: [0, 1, 2],
    rationale: "Stroke manifestations are sudden-onset neurological deficits: unilateral weakness/numbness (the affected side is opposite to the brain hemisphere involved), speech difficulties (if the stroke affects language centers), and sudden severe headache (especially in hemorrhagic stroke — often described as 'worst headache of my life'). Other signs include facial drooping, vision changes, confusion, and loss of balance. Bilateral leg pain with walking is intermittent claudication (PAD), not stroke. Remember FAST: Face drooping, Arm weakness, Speech difficulty, Time to call 911."
  },
  {
    id: "c11_07", chapter: 11, topic: "Stroke Risk Factors", type: "sata",
    objective: "Identify risk factors of ischemic and hemorrhagic strokes (CO5)",
    stem: "Which of the following are risk factors for stroke? Select all that apply.",
    options: [
      "Hypertension",
      "Atrial fibrillation",
      "Diabetes mellitus",
      "Regular aerobic exercise"
    ],
    correct: [0, 1, 2],
    rationale: "Hypertension is the SINGLE MOST IMPORTANT modifiable risk factor for both ischemic and hemorrhagic stroke — chronic high pressure damages blood vessels and promotes atherosclerosis. Atrial fibrillation creates turbulent blood flow in the atria, promoting clot formation that can embolize to the brain (ischemic stroke). Diabetes accelerates atherosclerosis and damages blood vessels. Regular aerobic exercise is PROTECTIVE — it's a prevention strategy, not a risk factor. Other risk factors include smoking, dyslipidemia, obesity, and age."
  },
  {
    id: "c11_08", chapter: 11, topic: "Stroke Prevention", type: "mc",
    objective: "Identify primary, secondary, and tertiary prevention strategies for strokes (CO7)",
    stem: "A patient who had a stroke 6 months ago is now attending outpatient physical therapy to regain function in the affected arm. This is an example of:",
    options: [
      "Primary prevention",
      "Secondary prevention",
      "Tertiary prevention",
      "Quaternary prevention"
    ],
    correct: 2,
    rationale: "Tertiary prevention focuses on rehabilitation and preventing further complications AFTER a disease has already occurred. Physical therapy to regain function after a stroke is classic tertiary prevention. Primary prevention would be controlling blood pressure and exercising BEFORE a stroke occurs. Secondary prevention would be recognizing stroke symptoms early and seeking immediate treatment (early detection/intervention). This connects back to the prevention levels from Chapter 1."
  },
  {
    id: "c11_09", chapter: 11, topic: "Seizures", type: "mc",
    objective: "Describe the relationship between electrical activity in the brain and seizures (CO1, CO5)",
    stem: "A seizure results from:",
    options: [
      "Decreased blood flow to the brain",
      "Abnormal, excessive, and synchronized electrical discharge of neurons in the brain",
      "Infection of the meninges surrounding the brain",
      "Degeneration of the myelin sheath"
    ],
    correct: 1,
    rationale: "A seizure is caused by a sudden, abnormal surge of electrical activity in the brain — neurons fire excessively and in a synchronized pattern that disrupts normal brain function. This can be triggered by many things: epilepsy, electrolyte imbalances, fever, head trauma, infection, or metabolic disorders. Decreased blood flow causes stroke. Meningeal infection is meningitis. Myelin degeneration is demyelinating disease (like MS). The key concept: seizures are an ELECTRICAL disturbance."
  },
  {
    id: "c11_10", chapter: 11, topic: "Seizures", type: "mc",
    objective: "Differentiate between focal and generalized onset seizures (CO5)",
    stem: "A patient experiences a seizure that begins with twitching of the right hand and progresses to involve the entire right arm. This is classified as a:",
    options: [
      "Generalized onset seizure",
      "Focal onset seizure",
      "Absence seizure",
      "Febrile seizure"
    ],
    correct: 1,
    rationale: "Focal onset seizures (formerly called partial seizures) originate in a specific area of one hemisphere of the brain — they begin in a localized area and may or may not spread. This patient's seizure starts in the right hand and spreads up the arm, indicating a focal origin in the left motor cortex. Generalized onset seizures involve BOTH hemispheres from the start (e.g., tonic-clonic — the entire body is involved from the beginning). Absence seizures are brief generalized episodes of 'staring.' Febrile seizures are triggered by fever in children."
  },
  {
    id: "c11_11", chapter: 11, topic: "Seizure Phases", type: "ordering",
    objective: "Outline the phases and characteristics of a seizure (CO5)",
    stem: "Place the phases of a generalized tonic-clonic seizure in the correct order:",
    options: [
      "Postictal phase — confusion, fatigue, drowsiness, gradual recovery",
      "Aura — warning sensation (visual changes, smell, feeling)",
      "Ictal phase — active seizure (tonic stiffening then clonic rhythmic jerking)"
    ],
    correct: [1, 2, 0],
    rationale: "The seizure phases occur in this order: (1) AURA — a warning sensation before the seizure begins (not everyone experiences this). It can be a visual disturbance, unusual smell, taste, or feeling. The aura is technically the beginning of seizure activity. (2) ICTAL — the active seizure phase. In a tonic-clonic seizure: tonic phase (muscles stiffen, may fall, may cry out) followed by clonic phase (rhythmic jerking of extremities). (3) POSTICTAL — the recovery phase after the seizure ends. Characterized by confusion, fatigue, drowsiness, headache, and sometimes temporary neurological deficits."
  },
  {
    id: "c11_12", chapter: 11, topic: "Seizure Safety", type: "sata",
    objective: "Describe safety strategies used in nursing for patients experiencing seizures (CO7)",
    stem: "A patient begins having a tonic-clonic seizure. Which nursing actions are appropriate? Select all that apply.",
    options: [
      "Turn the patient to their side",
      "Place a padded tongue blade in the patient's mouth",
      "Move objects away from the patient to prevent injury",
      "Note the time the seizure begins and monitor duration"
    ],
    correct: [0, 2, 3],
    rationale: "Appropriate seizure nursing care: turn to the side (lateral position) to prevent aspiration of secretions. Move dangerous objects away to prevent injury. Time the seizure — duration is critical information (seizures lasting >5 minutes require emergency intervention — status epilepticus). NEVER place anything in the mouth during a seizure — this is a dangerous outdated practice that can break teeth, injure the jaw, or obstruct the airway. The tongue cannot be 'swallowed.' Also: do NOT restrain the patient — guide movements if necessary but do not hold them down."
  },

  // ═══════════════════════════════════════════
  // ADDITIONAL QUESTIONS (8 Qs to reach 100)
  // ═══════════════════════════════════════════

  {
    id: "c1_08", chapter: 1, topic: "Cell Damage", type: "sata",
    objective: "Describe common causes of cell damage (CO5)",
    stem: "Which of the following are common causes of cellular damage? Select all that apply.",
    options: [
      "Hypoxia (oxygen deprivation)",
      "Chemical toxins (drugs, poisons, alcohol)",
      "Infectious agents (bacteria, viruses)",
      "Adequate blood supply"
    ],
    correct: [0, 1, 2],
    rationale: "Cells can be damaged by many mechanisms: hypoxia deprives cells of the oxygen needed for aerobic metabolism, leading to ATP depletion and cell injury. Chemical toxins (including medications, alcohol, and environmental agents) can directly damage cell membranes or interfere with metabolic processes. Infectious agents injure cells through direct invasion, toxin production, or triggering immune-mediated destruction. Adequate blood supply is PROTECTIVE — it delivers oxygen and nutrients. Ischemia (inadequate blood supply) is a cause of cell damage, not adequate perfusion."
  },
  {
    id: "c2_08", chapter: 2, topic: "Cell-Mediated Immunity", type: "mc",
    objective: "Differentiate between cell-mediated and humoral immunity (CO1, CO4)",
    stem: "A patient receives an organ transplant. The body begins rejecting the new organ. This rejection is primarily mediated by:",
    options: [
      "B lymphocytes producing antibodies (humoral immunity)",
      "T lymphocytes directly attacking the foreign tissue (cell-mediated immunity)",
      "Neutrophils phagocytizing the transplanted cells",
      "Mast cells releasing histamine"
    ],
    correct: 1,
    rationale: "Organ transplant rejection is primarily a cell-mediated immune response. T lymphocytes (specifically cytotoxic T cells) recognize the transplanted tissue as foreign (non-self) and directly attack and destroy the cells. This is why transplant patients require immunosuppressive medications that specifically target T cell function. While humoral immunity (antibodies) can play a role in some types of rejection, the primary mechanism is T cell-mediated. Neutrophils and mast cells are part of innate immunity and are not the primary drivers of transplant rejection."
  },
  {
    id: "c5_08", chapter: 5, topic: "Asthma", type: "mc",
    objective: "Describe tissue changes associated with asthma (CO3)",
    stem: "The three primary tissue changes that occur in the airways during an asthma attack are:",
    options: [
      "Alveolar destruction, mucus plugging, and fibrosis",
      "Bronchospasm, airway inflammation/edema, and increased mucus production",
      "Pleural effusion, atelectasis, and pneumothorax",
      "Bronchodilation, decreased mucus, and airway relaxation"
    ],
    correct: 1,
    rationale: "During an asthma exacerbation, three things happen simultaneously in the airways: (1) Bronchospasm — smooth muscle surrounding the bronchioles contracts, narrowing the airway lumen. (2) Inflammation and edema — the airway walls swell, further narrowing the passage. (3) Increased mucus production — goblet cells overproduce thick, sticky mucus that plugs the already-narrowed airways. Together, these three changes severely reduce airflow, particularly during exhalation (air trapping). Alveolar destruction is emphysema, not asthma."
  },
  {
    id: "c6_09", chapter: 6, topic: "Electrolytes", type: "mc",
    objective: "Explain normal electrolyte functions in the body — sodium (CO1, CO6)",
    stem: "Sodium's primary role in the body is to:",
    options: [
      "Facilitate oxygen transport in the blood",
      "Regulate fluid balance and maintain extracellular fluid volume",
      "Strengthen bones and teeth",
      "Produce energy within cells"
    ],
    correct: 1,
    rationale: "Sodium (Na+) is the major extracellular cation and is the primary regulator of extracellular fluid volume and osmolality. Where sodium goes, water follows — this is why high sodium intake increases blood volume (and blood pressure), and why sodium restriction is a key intervention for fluid overload conditions like heart failure. Normal serum sodium is 135-145 mEq/L. Hyponatremia (low sodium) can cause confusion, seizures, and cerebral edema. Hypernatremia (high sodium) causes thirst, dry mucous membranes, and neurological changes."
  },
  {
    id: "c7_07", chapter: 7, topic: "Urinalysis", type: "sata",
    objective: "Identify normal levels tested within urinalysis (CO1, CO5)",
    stem: "Which of the following urinalysis findings would be considered ABNORMAL? Select all that apply.",
    options: [
      "Protein present in the urine",
      "pH of 6.0",
      "Glucose present in the urine",
      "Bacteria present in the urine"
    ],
    correct: [0, 2, 3],
    rationale: "Normally, urine should NOT contain protein (proteinuria indicates kidney damage — the glomeruli are allowing protein to leak through), glucose (glucosuria indicates blood glucose has exceeded the renal threshold, typically seen in diabetes), or bacteria (bacteriuria indicates urinary tract infection). A pH of 6.0 is within the normal range for urine (4.5-8.0) — urine pH varies based on diet, medications, and metabolic status. Knowing what should and shouldn't be in urine is essential for interpreting urinalysis results."
  },
  {
    id: "c9_13", chapter: 9, topic: "Hepatitis/Cirrhosis", type: "mc",
    objective: "Relate hepatitis to cirrhosis of the liver (CO6)",
    stem: "A patient with a history of chronic Hepatitis C is diagnosed with cirrhosis. The nurse understands the connection between these conditions is that:",
    options: [
      "Hepatitis C directly produces scar tissue in the liver",
      "Chronic hepatic inflammation from Hepatitis C causes progressive fibrosis and scarring, eventually replacing functional liver tissue with nonfunctional scar tissue",
      "Cirrhosis is a side effect of the medications used to treat Hepatitis C",
      "Hepatitis C and cirrhosis are unrelated conditions that coincidentally affect the liver"
    ],
    correct: 1,
    rationale: "Chronic hepatitis (B or C) causes ongoing inflammation of the liver. Over years to decades, this persistent inflammation triggers a wound-healing response — the liver deposits collagen and fibrous tissue. As more and more functional hepatocytes are replaced by scar tissue, the liver loses its ability to perform its functions (metabolism, detoxification, protein synthesis, bile production). This progressive fibrosis IS cirrhosis. It's not the virus directly creating scar tissue — it's the chronic inflammatory RESPONSE to the virus that drives the fibrosis."
  },
  {
    id: "c10_14", chapter: 10, topic: "Diabetes Comparison", type: "mc",
    objective: "Differentiate between Type 1 and Type 2 diabetes (CO5)",
    stem: "Which statement correctly differentiates Type 1 from Type 2 diabetes mellitus?",
    options: [
      "Type 1 is caused by insulin resistance; Type 2 is caused by autoimmune destruction of beta cells",
      "Type 1 typically presents in childhood with sudden onset; Type 2 typically presents in adulthood with gradual onset",
      "Type 1 is more common than Type 2",
      "Type 2 always requires insulin therapy from the time of diagnosis"
    ],
    correct: 1,
    rationale: "Type 1 DM is autoimmune destruction of beta cells, typically presenting in childhood or adolescence with sudden onset of symptoms (polyuria, polydipsia, polyphagia, weight loss) — often with DKA as the first presentation. Type 2 DM involves insulin resistance and progressive beta cell dysfunction, typically presenting in adults (though increasingly seen in obese adolescents) with gradual onset — many patients are asymptomatic for years. Type 2 is FAR more common (90-95% of all diabetes cases). Type 2 may eventually require insulin but often starts with lifestyle modifications and oral medications."
  },
  {
    id: "c4_13", chapter: 4, topic: "Hypertension Prevention", type: "sata",
    objective: "Describe prevention strategies for hypertension (CO7)",
    stem: "Which lifestyle modifications are recommended for the prevention and management of hypertension? Select all that apply.",
    options: [
      "Reducing dietary sodium intake",
      "Maintaining a healthy body weight",
      "Regular aerobic exercise",
      "Increasing caffeine intake"
    ],
    correct: [0, 1, 2],
    rationale: "The primary lifestyle modifications for hypertension prevention (often called the DASH approach) include: sodium restriction (reduces fluid retention and blood volume), maintaining healthy weight (obesity increases cardiac workload and vascular resistance), and regular aerobic exercise (strengthens the heart, improves vascular compliance, and helps with weight management). Other strategies include limiting alcohol, managing stress, and eating a diet rich in fruits, vegetables, and low-fat dairy. Increasing caffeine is NOT recommended — caffeine can acutely raise blood pressure, though its long-term effects are debated."
  },
];

if (typeof window !== "undefined") window.NURS308_EXAM_BANK = NURS308_EXAM_BANK;
