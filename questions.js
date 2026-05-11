// 100 MCQ questions from Mock 1, 2, 3
// { id, mock, topic, q, options[4], correct, explain[4] }

export const QUESTIONS = [

  // ═══════════════════════════════════════════
  // MOCK 1 — 40 questions
  // ═══════════════════════════════════════════

  {
    id: 1, mock: 1, topic: "Decision Making",
    q: "A manager relies on a written rule to approve overtime whenever demand exceeds capacity. This is an example of:",
    options: ["Nonprogrammed decision", "Intuitive judgment", "Programmed decision", "Administrative decision"],
    correct: 2,
    explain: [
      "Incorrect. Nonprogrammed decisions deal with unique, novel situations that have no pre-set rule.",
      "Incorrect. Intuitive judgment relies on gut feeling, not a pre-written rule.",
      "Correct. A programmed decision is routine and repetitive — it follows a pre-established rule or procedure, exactly as described here.",
      "Incorrect. 'Administrative decision' refers to Simon's model of bounded rationality, not a decision type defined by how it is triggered."
    ]
  },
  {
    id: 2, mock: 1, topic: "Cognitive Biases",
    q: "A startup CEO insists on continuing a failing project simply because large investments were already made. This bias is called:",
    options: ["Confirmation bias", "Illusion of control", "Escalating commitment", "Representativeness"],
    correct: 2,
    explain: [
      "Incorrect. Confirmation bias means seeking only information that confirms existing beliefs.",
      "Incorrect. Illusion of control means overestimating one's ability to influence outcomes.",
      "Correct. Escalating commitment (sunk-cost bias) — continuing a failing course of action to justify prior investments already made.",
      "Incorrect. Representativeness bias means judging situations by how closely they resemble a stereotype."
    ]
  },
  {
    id: 3, mock: 1, topic: "Planning & Strategy",
    q: "Which planning quality allows managers to revise plans when conditions change?",
    options: ["Unity", "Continuity", "Accuracy", "Flexibility"],
    correct: 3,
    explain: [
      "Incorrect. Unity refers to the alignment and coordination of all plans toward a common goal.",
      "Incorrect. Continuity refers to maintaining planning as an ongoing, uninterrupted process.",
      "Incorrect. Accuracy refers to the precision of information used in planning.",
      "Correct. Flexibility means plans can be adjusted or revised as circumstances change — essential in dynamic environments."
    ]
  },
  {
    id: 4, mock: 1, topic: "Planning & Strategy",
    q: "A firm pursuing differentiation strategy is MOST likely to compete on:",
    options: ["Lowest cost", "High volume", "Unique features or service", "Tight cost control only"],
    correct: 2,
    explain: [
      "Incorrect. Competing on lowest cost is the essence of a cost-leadership strategy, not differentiation.",
      "Incorrect. High volume is associated with cost leadership and mass-market approaches.",
      "Correct. Differentiation strategy (Porter) means offering unique features, quality, brand, or service that customers value enough to pay a premium.",
      "Incorrect. Tight cost control is again a cost-leadership characteristic."
    ]
  },
  {
    id: 5, mock: 1, topic: "Value Chain & Operations",
    q: "The coordinated series of functional activities that transform inputs into final products is known as the:",
    options: ["Supply chain", "Functional strategy", "Value chain", "Corporate plan"],
    correct: 2,
    explain: [
      "Incorrect. Supply chain covers the network of suppliers and logistics, which is a subset of the broader concept.",
      "Incorrect. Functional strategy is a plan for a specific department, not a description of coordinated activities.",
      "Correct. Porter's value chain is the linked sequence of functional activities (R&D, production, marketing, service) that create value from inputs to final product.",
      "Incorrect. A corporate plan defines overall company direction, not the operational activities themselves."
    ]
  },
  {
    id: 6, mock: 1, topic: "Conflict & Negotiation",
    q: "When marketing emphasizes customer responsiveness while production focuses on cost efficiency, conflict arises due to:",
    options: ["Status inconsistency", "Different goals and time horizons", "Scarce resources", "Overlapping authority"],
    correct: 1,
    explain: [
      "Incorrect. Status inconsistency conflict arises from differences in employee rank or prestige.",
      "Correct. Departments pursuing different objectives (responsiveness vs. efficiency) with different time horizons is the classic source of intergroup conflict.",
      "Incorrect. Resource scarcity conflict happens when departments compete for the same limited budget or resources — not described here.",
      "Incorrect. Overlapping authority conflict occurs when roles and responsibilities are unclear or duplicated."
    ]
  },
  {
    id: 7, mock: 1, topic: "Communication",
    q: "Using email to communicate complex emotional feedback is ineffective because email has:",
    options: ["Too much noise", "Poor feedback mechanisms", "Low information richness", "Filtering problems"],
    correct: 2,
    explain: [
      "Incorrect. Noise is interference in the channel — not the core reason email fails for emotional content.",
      "Partially correct but incomplete. Weak feedback is just one dimension of information richness.",
      "Correct. Email has low information richness — it lacks voice tone, facial expressions, and real-time feedback, making it unsuitable for complex emotional messages.",
      "Incorrect. Filtering refers to a sender deliberately distorting information — a different communication problem."
    ]
  },
  {
    id: 8, mock: 1, topic: "Communication",
    q: "A self-managed team where all members communicate freely reflects which network?",
    options: ["Wheel", "Chain", "Circle", "All-channel"],
    correct: 3,
    explain: [
      "Incorrect. Wheel network — all communication flows through one central person (the hub).",
      "Incorrect. Chain network — communication passes sequentially down a strict hierarchy.",
      "Incorrect. Circle network — each member communicates only with two neighbors.",
      "Correct. All-channel network — everyone can communicate freely with everyone else, typical of self-managed, empowered teams."
    ]
  },
  {
    id: 9, mock: 1, topic: "IT & Information Systems",
    q: "Raw transaction records stored in a database are best described as:",
    options: ["Information", "Knowledge", "Intelligence", "Data"],
    correct: 3,
    explain: [
      "Incorrect. Information is data that has been processed and organized into a meaningful form.",
      "Incorrect. Knowledge is information applied in context to solve problems.",
      "Incorrect. Intelligence is high-level strategic insight derived from analyzed knowledge.",
      "Correct. Data is raw, unprocessed facts and records. The hierarchy is: Data → Information → Knowledge → Intelligence."
    ]
  },
  {
    id: 10, mock: 1, topic: "IT & Information Systems",
    q: "Which MIS best supports non-routine strategic decisions?",
    options: ["Transaction-processing system", "Operations information system", "Executive support system", "Payroll system"],
    correct: 2,
    explain: [
      "Incorrect. TPS handles routine, structured transactions (sales, orders, payroll entries).",
      "Incorrect. OIS supports middle-level operational and tactical decisions.",
      "Correct. ESS (Executive Support System) is designed for top managers to support unstructured, non-routine strategic decisions using aggregated internal and external data.",
      "Incorrect. Payroll is a narrow operational system — a subset of TPS."
    ]
  },
  {
    id: 11, mock: 1, topic: "Conflict & Negotiation",
    q: "Collaboration as a conflict-handling style is MOST appropriate when:",
    options: ["One party has more power", "Quick action is required", "Long-term relationships matter", "Conflict should be avoided"],
    correct: 2,
    explain: [
      "Incorrect. Power imbalance makes true collaboration difficult; other styles (accommodation or compromise) may be more realistic.",
      "Incorrect. Speed favors the competitive (forcing) style; collaboration is time-consuming.",
      "Correct. Collaboration (win-win) takes time and trust but preserves and strengthens long-term relationships — the right choice when the relationship matters most.",
      "Incorrect. Wanting to avoid conflict describes the avoidance style, not collaboration."
    ]
  },
  {
    id: 12, mock: 1, topic: "Conflict & Negotiation",
    q: "In distributive negotiation, parties typically believe:",
    options: ["Cooperation will benefit both", "The resource \"pie\" is fixed", "Trust is essential", "Creativity is encouraged"],
    correct: 1,
    explain: [
      "Incorrect. Believing cooperation benefits both is the foundation of integrative (win-win) negotiation.",
      "Correct. Distributive negotiation is zero-sum — one party's gain is the other's loss — because the 'pie' is seen as fixed and cannot be expanded.",
      "Incorrect. Distributive bargaining involves minimal trust; parties treat each other as adversaries.",
      "Incorrect. Creative problem-solving to expand value is a feature of integrative bargaining."
    ]
  },
  {
    id: 13, mock: 1, topic: "Organizational Politics",
    q: "Which political strategy increases power by reducing uncertainty for others?",
    options: ["Building alliances", "Controlling uncertainty", "Controlling the agenda", "Making everyone a winner"],
    correct: 1,
    explain: [
      "Incorrect. Building alliances increases power through coalitions and support networks.",
      "Correct. Controlling uncertainty — the person who can handle and resolve uncertain situations for others becomes indispensable, which dramatically increases their power.",
      "Incorrect. Controlling the agenda is about determining which topics get discussed, not about managing uncertainty.",
      "Incorrect. Making everyone a winner is a strategy for building broad support and goodwill."
    ]
  },
  {
    id: 14, mock: 1, topic: "Planning & Strategy",
    q: "Generating multiple future scenarios and response plans is known as:",
    options: ["SWOT analysis", "Forecasting", "Scenario planning", "Benchmarking"],
    correct: 2,
    explain: [
      "Incorrect. SWOT analyzes current strengths, weaknesses, opportunities, and threats — a snapshot, not multiple futures.",
      "Incorrect. Forecasting predicts one most-likely future outcome.",
      "Correct. Scenario planning involves creating several plausible future scenarios and developing contingency responses for each.",
      "Incorrect. Benchmarking compares a firm's performance to best-in-class competitors."
    ]
  },
  {
    id: 15, mock: 1, topic: "Value Chain & Operations",
    q: "JIT inventory systems mainly help organizations improve:",
    options: ["Product differentiation", "Innovation speed", "Efficiency and cost control", "Employee motivation"],
    correct: 2,
    explain: [
      "Incorrect. JIT is not directly related to making products unique or differentiated.",
      "Incorrect. Innovation speed is about R&D and new product development cycles, not inventory levels.",
      "Correct. Just-In-Time minimizes inventory holding costs by receiving goods only when needed — directly improving efficiency and cost control.",
      "Incorrect. JIT is an operational/logistics methodology, not a motivational tool."
    ]
  },
  {
    id: 16, mock: 1, topic: "Innovation & Change",
    q: "Which innovation is relatively rare and driven by major technological breakthroughs?",
    options: ["Incremental innovation", "Continuous innovation", "Process innovation", "Quantum innovation"],
    correct: 3,
    explain: [
      "Incorrect. Incremental innovation involves small, gradual improvements to existing products or processes.",
      "Incorrect. Continuous innovation refers to an ongoing stream of small improvements.",
      "Incorrect. Process innovation improves how things are made or delivered, not a breakthrough category.",
      "Correct. Quantum innovation (also called radical or discontinuous innovation) is rare, driven by major breakthroughs that fundamentally change an industry."
    ]
  },
  {
    id: 17, mock: 1, topic: "Innovation & Change",
    q: "A learning organization emphasizes all EXCEPT:",
    options: ["Personal mastery", "Systems thinking", "Centralized control", "Shared vision"],
    correct: 2,
    explain: [
      "Incorrect — this IS a feature. Personal mastery is one of Senge's five disciplines of a learning organization.",
      "Incorrect — this IS a feature. Systems thinking is the cornerstone of Senge's framework.",
      "Correct. Centralized control contradicts the learning organization, which relies on decentralization, empowerment, and distributed decision-making.",
      "Incorrect — this IS a feature. Shared vision is another of Senge's five core disciplines."
    ]
  },
  {
    id: 18, mock: 1, topic: "IT & Information Systems",
    q: "An ERP system primarily helps by:",
    options: ["Replacing managers", "Linking all functional activities", "Eliminating planning", "Reducing decision-making"],
    correct: 1,
    explain: [
      "Incorrect. ERP supports managers; it does not replace human judgment.",
      "Correct. ERP (Enterprise Resource Planning) integrates all functional areas — finance, HR, supply chain, production, marketing — into a single unified system.",
      "Incorrect. ERP actually enhances planning by providing real-time cross-functional data.",
      "Incorrect. ERP facilitates better decision-making; it does not reduce or eliminate it."
    ]
  },
  {
    id: 19, mock: 1, topic: "Communication",
    q: "Grapevine communication is BEST described as:",
    options: ["Formal and vertical", "Written and impersonal", "Informal and unofficial", "Controlled by managers"],
    correct: 2,
    explain: [
      "Incorrect. Formal and vertical describes official hierarchical communication channels — the opposite of grapevine.",
      "Incorrect. Grapevine communication is typically oral and personal.",
      "Correct. Grapevine is the informal, unofficial communication network — rumors, gossip, and corridor conversations that emerge spontaneously.",
      "Incorrect. Grapevine is precisely what managers cannot control, which is why it can be problematic."
    ]
  },
  {
    id: 20, mock: 1, topic: "Innovation & Change",
    q: "Advanced IT may shorten product life cycles, forcing managers to focus more on:",
    options: ["Bureaucratic control", "Continuous innovation", "Rule-based decisions", "Stability"],
    correct: 1,
    explain: [
      "Incorrect. Bureaucratic control slows response time — incompatible with rapidly shrinking product life cycles.",
      "Correct. When products become obsolete faster, survival requires constantly innovating — launching new products and improving existing ones before competitors do.",
      "Incorrect. Rule-based decisions are programmed and rigid — unsuitable for fast-changing tech environments.",
      "Incorrect. Stability is the opposite of what shortened product life cycles demand."
    ]
  },
  {
    id: 21, mock: 1, topic: "Decision Making",
    q: "Which statement BEST differentiates programmed and non-programmed decisions?",
    options: [
      "Both types follow the same formal rules",
      "Programmed decisions are routine and rule-based; non-programmed decisions address novel, unstructured problems",
      "Non-programmed decisions are made by computers; programmed decisions by humans",
      "Programmed decisions are always strategic; non-programmed are always operational"
    ],
    correct: 1,
    explain: [
      "Incorrect. They are fundamentally different in structure, context, and the process used to make them.",
      "Correct. Programmed: repetitive situations handled with pre-established rules. Non-programmed: unique situations requiring analysis, judgment, and creativity.",
      "Incorrect. The distinction is about structure and novelty, not whether a human or machine makes the decision.",
      "Incorrect. Programmed decisions are typically operational; non-programmed are more likely to be strategic."
    ]
  },
  {
    id: 22, mock: 1, topic: "Decision Making",
    q: "Bounded rationality, as proposed by Herbert Simon, refers to:",
    options: [
      "The ability of managers to always reach optimal solutions",
      "Cognitive and information limits that force managers to 'satisfice' instead of fully optimizing",
      "Unlimited time and resources available for decisions",
      "Decisions driven purely by emotion"
    ],
    correct: 1,
    explain: [
      "Incorrect. Always reaching optimal solutions is the classical (rational) model — not Simon's concept.",
      "Correct. Simon argued that managers face limits of information, time, and cognitive capacity, so they 'satisfice' — choose a solution that is good enough rather than optimal.",
      "Incorrect. Bounded rationality is specifically about the constraints on rationality, not unlimited capacity.",
      "Incorrect. Bounded rationality concerns cognitive limits, not emotional decision-making."
    ]
  },
  {
    id: 23, mock: 1, topic: "Cognitive Biases",
    q: "Which pair are BOTH examples of cognitive biases that distort managerial decisions?",
    options: [
      "Forecasting and benchmarking",
      "Confirmation bias and escalating commitment",
      "Centralization and decentralization",
      "TQM and JIT"
    ],
    correct: 1,
    explain: [
      "Incorrect. Forecasting and benchmarking are planning and comparison tools, not cognitive biases.",
      "Correct. Confirmation bias (seeking only confirming information) and escalating commitment (persisting with failing investments) are both well-documented cognitive biases.",
      "Incorrect. These are structural design characteristics of organizations, not cognitive biases.",
      "Incorrect. TQM and JIT are operational management methodologies."
    ]
  },
  {
    id: 24, mock: 1, topic: "Planning & Strategy",
    q: "A mission statement is important because it:",
    options: [
      "Lists the daily tasks of all employees",
      "Defines the organization's purpose and provides direction for goals and strategy",
      "Replaces the company's financial statements",
      "Documents legal incorporation details"
    ],
    correct: 1,
    explain: [
      "Incorrect. Daily tasks belong in job descriptions, not a mission statement.",
      "Correct. A mission statement answers 'Why do we exist?' and anchors all goal-setting, strategic planning, and decision-making.",
      "Incorrect. Financial statements are separate accounting documents.",
      "Incorrect. Legal details belong in articles of incorporation or company statutes."
    ]
  },
  {
    id: 25, mock: 1, topic: "Planning & Strategy",
    q: "Which sequence BEST represents the three main steps of the planning process?",
    options: [
      "Hiring → training → evaluating",
      "Determining mission and goals → formulating strategy → implementing strategy",
      "Forecasting → budgeting → auditing",
      "Organizing → leading → controlling"
    ],
    correct: 1,
    explain: [
      "Incorrect. These are HR cycle steps.",
      "Correct. The three-step planning process: (1) Determine mission and goals, (2) Formulate strategy, (3) Implement strategy.",
      "Incorrect. These are financial/budgetary steps.",
      "Incorrect. These are three of the four management functions (POLC), not steps within planning."
    ]
  },
  {
    id: 26, mock: 1, topic: "Planning & Strategy",
    q: "SWOT analysis is used primarily to:",
    options: [
      "Calculate financial ratios",
      "Identify internal Strengths and Weaknesses and external Opportunities and Threats",
      "Measure employee satisfaction",
      "Audit accounting records"
    ],
    correct: 1,
    explain: [
      "Incorrect. Financial ratios are calculated from financial statements, not SWOT.",
      "Correct. SWOT is a strategic analysis framework: internal (Strengths, Weaknesses) + external (Opportunities, Threats).",
      "Incorrect. Employee satisfaction is measured through surveys and HR tools.",
      "Incorrect. Auditing is a financial/compliance function."
    ]
  },
  {
    id: 27, mock: 1, topic: "Planning & Strategy",
    q: "Which is the BEST example of a functional-level strategy?",
    options: [
      "A CEO deciding which industries to enter",
      "The corporate decision to divest a subsidiary",
      "The marketing department launching a social-media campaign to boost brand awareness",
      "A government regulation on labor"
    ],
    correct: 2,
    explain: [
      "Incorrect. Deciding which industries to enter is a corporate-level strategy.",
      "Incorrect. Divesting a subsidiary is also a corporate-level (portfolio) decision.",
      "Correct. Functional-level strategy is a plan for a specific department (marketing, operations, HR) that supports the business-level strategy.",
      "Incorrect. This is an external environmental force, not a company strategy."
    ]
  },
  {
    id: 28, mock: 1, topic: "Value Chain & Operations",
    q: "Value chain management is BEST defined as:",
    options: [
      "Auditing supplier invoices",
      "Coordinating functional activities (R&D, production, marketing, service) to maximize value delivered to customers",
      "Eliminating all middlemen from the supply chain",
      "Replacing managers with automation software"
    ],
    correct: 1,
    explain: [
      "Incorrect. Invoice auditing is an accounting function, not VCM.",
      "Correct. Value chain management is the process of coordinating all linked activities across functions to continuously improve the value delivered to customers.",
      "Incorrect. Removing middlemen relates to distribution channel strategy, not VCM.",
      "Incorrect. VCM is a management philosophy, not an automation replacement strategy."
    ]
  },
  {
    id: 29, mock: 1, topic: "Value Chain & Operations",
    q: "According to value chain theory, customers generally value a combination of:",
    options: [
      "Brand name and stock price",
      "Quality, price, and responsiveness (service)",
      "Headquarters location and founder's biography",
      "CEO's social media following"
    ],
    correct: 1,
    explain: [
      "Incorrect. Stock price is an investor metric, not a customer value driver.",
      "Correct. According to value chain theory, customers evaluate value based on quality, price, and how responsive/attentive the company is to their needs.",
      "Incorrect. Neither headquarters location nor founder biography is a standard customer value driver.",
      "Incorrect. CEO social media presence is a reputational factor, not a core value driver."
    ]
  },
  {
    id: 30, mock: 1, topic: "Value Chain & Operations",
    q: "Total Quality Management (TQM) has as its MAIN objective:",
    options: [
      "Reducing employee headcount",
      "Continuously improving quality of products and processes through employee involvement",
      "Increasing advertising spend",
      "Moving production to low-cost countries"
    ],
    correct: 1,
    explain: [
      "Incorrect. TQM is about quality improvement, not workforce reduction.",
      "Correct. TQM (Deming) = continuous improvement of quality across all processes, with every employee actively involved.",
      "Incorrect. Advertising is a marketing function, unrelated to TQM.",
      "Incorrect. Offshoring is a cost strategy, not TQM."
    ]
  },
  {
    id: 31, mock: 1, topic: "Communication",
    q: "Information richness refers to:",
    options: [
      "The cost of an information system",
      "The amount of information a medium can carry and its ability to foster shared understanding",
      "The number of users connected to a network",
      "The size of a database in gigabytes"
    ],
    correct: 1,
    explain: [
      "Incorrect. Cost is not a dimension of information richness.",
      "Correct. Information richness (Daft & Lengel) measures how much information a channel can convey and how well it facilitates mutual understanding between sender and receiver.",
      "Incorrect. Network size is a technical metric, unrelated to richness.",
      "Incorrect. Database storage capacity is a technical measure, not richness."
    ]
  },
  {
    id: 32, mock: 1, topic: "Communication",
    q: "Face-to-face communication is considered the richest medium because it:",
    options: [
      "Is the cheapest channel available",
      "Provides multiple simultaneous cues (voice, body language, expressions) and allows immediate feedback",
      "Leaves the best written record",
      "Eliminates all communication noise"
    ],
    correct: 1,
    explain: [
      "Incorrect. Cost has nothing to do with information richness.",
      "Correct. Face-to-face is the richest channel because it simultaneously transmits verbal, vocal, and visual cues, and enables instant two-way feedback.",
      "Incorrect. Face-to-face conversations leave no written record — that's actually a drawback, not a richness indicator.",
      "Incorrect. Noise can still occur in face-to-face communication (distractions, misunderstandings)."
    ]
  },
  {
    id: 33, mock: 1, topic: "Conflict & Negotiation",
    q: "Intergroup conflict refers to:",
    options: [
      "Internal personal struggle within a single employee",
      "Conflict between two or more groups or departments within an organization",
      "A merger conflict between two separate organizations",
      "A complaint submitted by a customer"
    ],
    correct: 1,
    explain: [
      "Incorrect. That is intrapersonal conflict.",
      "Correct. Intergroup conflict occurs when two or more groups (e.g., departments, teams) within the same organization have incompatible goals or compete for resources.",
      "Incorrect. That would be inter-organizational conflict.",
      "Incorrect. A customer complaint is an external relationship issue."
    ]
  },
  {
    id: 34, mock: 1, topic: "Conflict & Negotiation",
    q: "Which pairing correctly matches an effective (functional) with an ineffective (dysfunctional) conflict-handling style?",
    options: [
      "Effective: collaboration; Ineffective: avoidance",
      "Effective: avoidance; Ineffective: compromise",
      "Effective: forcing always; Ineffective: integration",
      "Effective: accommodation always; Ineffective: collaboration"
    ],
    correct: 0,
    explain: [
      "Correct. Collaboration (win-win) is consistently the most functional style; avoidance is typically dysfunctional because the underlying issue remains unresolved.",
      "Incorrect. Avoidance is generally dysfunctional; compromise is moderate but often functional.",
      "Incorrect. Forcing is often dysfunctional long-term; integration/collaboration is effective.",
      "Incorrect. Constant accommodation is dysfunctional (sacrifices one's own interests); collaboration is effective."
    ]
  },
  {
    id: 35, mock: 1, topic: "Conflict & Negotiation",
    q: "Integrative bargaining is BEST described as:",
    options: [
      "A zero-sum negotiation where one party wins and the other loses",
      "Cooperative negotiation aimed at expanding the 'pie' and producing win-win outcomes",
      "Settling all disputes through court litigation",
      "Always splitting every difference exactly 50/50"
    ],
    correct: 1,
    explain: [
      "Incorrect. Zero-sum describes distributive bargaining.",
      "Correct. Integrative bargaining — parties cooperate to find creative solutions that expand total value and satisfy both sides (win-win).",
      "Incorrect. Litigation is a legal process, not a negotiation model.",
      "Incorrect. 50/50 splitting is compromise — integrative bargaining seeks solutions better than a simple split."
    ]
  },
  {
    id: 36, mock: 1, topic: "Organizational Politics",
    q: "Organizational politics refers to:",
    options: [
      "Government regulations affecting businesses",
      "Activities managers engage in to acquire, develop, and use power to achieve their goals",
      "Voting on a company's stock dividends",
      "A company's public relations campaigns"
    ],
    correct: 1,
    explain: [
      "Incorrect. Government regulations belong to the political macro-environment, not internal organizational politics.",
      "Correct. Organizational politics = the use of power, influence, and informal tactics by individuals or groups to achieve their goals within the organization.",
      "Incorrect. Dividend voting is a shareholder governance issue.",
      "Incorrect. PR campaigns are external communications, not internal politics."
    ]
  },
  {
    id: 37, mock: 1, topic: "IT & Information Systems",
    q: "Which statement correctly differentiates data and information?",
    options: [
      "Data and information are interchangeable terms",
      "Data are raw, unorganized facts; information is data processed into a meaningful, usable form",
      "Information is rawer and less processed than data",
      "Information is always digital while data is always on paper"
    ],
    correct: 1,
    explain: [
      "Incorrect. They represent different levels of processing.",
      "Correct. Data = raw facts (e.g., a list of numbers). Information = data organized into meaningful patterns (e.g., a sales trend report). Hierarchy: Data → Information → Knowledge.",
      "Incorrect. This reverses the correct relationship.",
      "Incorrect. The format (digital vs. paper) is irrelevant to this distinction."
    ]
  },
  {
    id: 38, mock: 1, topic: "IT & Information Systems",
    q: "Which pair are BOTH attributes of useful information?",
    options: [
      "Quality and timeliness",
      "Physical weight and color",
      "Volume and language dialect",
      "Internet speed and font size"
    ],
    correct: 0,
    explain: [
      "Correct. Useful information must be of high quality (accurate, complete, relevant) and timely (delivered when needed). These are two of the core attributes.",
      "Incorrect. Physical properties like weight or color are irrelevant to information usefulness.",
      "Incorrect. Volume alone doesn't make information useful; language dialect is a communication, not information quality, issue.",
      "Incorrect. These are technical/presentation factors, not information quality attributes."
    ]
  },
  {
    id: 39, mock: 1, topic: "Organizational Structure",
    q: "A boundaryless organization is one that:",
    options: [
      "Has no employees at all",
      "Eliminates internal and external barriers to information flow and collaboration",
      "Operates only in a single city",
      "Has unlimited financial resources"
    ],
    correct: 1,
    explain: [
      "Incorrect. Boundaryless organizations still have employees — the concept refers to structural barriers, not staff.",
      "Correct. A boundaryless organization minimizes vertical, horizontal, and external barriers to enable free information flow, rapid collaboration, and flexibility.",
      "Incorrect. Geographic scope is unrelated to boundarylessness.",
      "Incorrect. Financial resources are unrelated to this structural concept."
    ]
  },
  {
    id: 40, mock: 1, topic: "Communication",
    q: "IT should SUPPORT rather than REPLACE face-to-face communication because:",
    options: [
      "IT tools are always more expensive than face-to-face meetings",
      "Complex, emotional, or sensitive issues require higher information richness than most IT channels provide",
      "IT is illegal in most organizational contexts",
      "Employees universally prefer paper memos to any technology"
    ],
    correct: 1,
    explain: [
      "Incorrect. Cost is not the primary reason; many IT tools are cheaper than in-person meetings.",
      "Correct. Sensitive, complex, or high-stakes communications need the richness of face-to-face interaction (tone, body language, real-time feedback) that IT channels typically cannot fully replicate.",
      "Incorrect. This is obviously false.",
      "Incorrect. This is a false generalization and not a principled reason."
    ]
  },

  // ═══════════════════════════════════════════
  // MOCK 2 — 40 questions
  // ═══════════════════════════════════════════

  {
    id: 41, mock: 2, topic: "Ethics & CSR",
    q: "A manager refuses to report unsafe practices because it might reduce short-term profits. Which ethical issue is MOST evident?",
    options: ["Utilitarian ethics", "Moral rights violation", "Justice rule application", "Ethical leadership"],
    correct: 1,
    explain: [
      "Incorrect. Utilitarianism evaluates actions by their overall benefit — while relevant, the most direct issue here is a rights violation.",
      "Correct. Concealing safety hazards directly violates workers' moral right to safe working conditions.",
      "Incorrect. The justice rule concerns fair distribution of benefits and burdens — not the primary issue here.",
      "Incorrect. This example illustrates unethical leadership, not the application of ethical leadership principles."
    ]
  },
  {
    id: 42, mock: 2, topic: "Ethics & CSR",
    q: "A company follows the law strictly but does nothing beyond legal requirements to support employee welfare. This reflects a:",
    options: ["Proactive approach", "Accommodative approach", "Defensive approach", "Obstructionist approach"],
    correct: 2,
    explain: [
      "Incorrect. Proactive means going significantly beyond what the law requires to benefit stakeholders.",
      "Incorrect. Accommodative means meeting social expectations, sometimes going beyond legal minimums.",
      "Correct. Defensive approach — the company does exactly what the law requires and nothing more.",
      "Incorrect. Obstructionist means resisting or violating legal and social responsibilities."
    ]
  },
  {
    id: 43, mock: 2, topic: "Ethics & CSR",
    q: "Which stakeholder group is MOST directly affected when a firm outsources production to a low-wage country?",
    options: ["Shareholders", "Employees", "Competitors", "Regulators"],
    correct: 1,
    explain: [
      "Incorrect. Shareholders may actually benefit from lower costs and higher profits.",
      "Correct. Domestic employees face the most direct impact — job losses and displacement as production moves abroad.",
      "Incorrect. Competitors are affected indirectly, through shifts in competitive dynamics.",
      "Incorrect. Regulators do not bear direct losses from outsourcing decisions."
    ]
  },
  {
    id: 44, mock: 2, topic: "Ethics & CSR",
    q: "Unwritten rules that define acceptable behavior in a society are known as:",
    options: ["Values", "Laws", "Norms", "Ethics"],
    correct: 2,
    explain: [
      "Incorrect. Values are deep-seated beliefs about what is important — broader and more internalized than behavioral rules.",
      "Incorrect. Laws are written, formally enforced rules established by governments.",
      "Correct. Norms are unwritten social rules and standards that guide acceptable behavior in a community or society.",
      "Incorrect. Ethics is a broader system of principles distinguishing right from wrong."
    ]
  },
  {
    id: 45, mock: 2, topic: "Diversity & Bias",
    q: "A manager assumes a young employee lacks commitment because of age. This is an example of:",
    options: ["Bounded rationality", "Implicit bias", "Distributive justice", "Procedural justice"],
    correct: 1,
    explain: [
      "Incorrect. Bounded rationality refers to cognitive/informational limits in decision-making, not prejudicial assumptions.",
      "Correct. Implicit bias — an unconscious prejudice based on a demographic characteristic (age) that influences the manager's assessment.",
      "Incorrect. Distributive justice concerns the fair distribution of outcomes and rewards.",
      "Incorrect. Procedural justice concerns the fairness of the processes used to make decisions."
    ]
  },
  {
    id: 46, mock: 2, topic: "Global Environment",
    q: "Which force belongs to the global task environment?",
    options: ["Inflation", "National culture", "Competitors", "Demographic change"],
    correct: 2,
    explain: [
      "Incorrect. Inflation is an economic force in the general (macro) environment.",
      "Incorrect. National culture is a sociocultural force in the general environment.",
      "Correct. Competitors are part of the task (industry) environment — forces that directly affect the organization's day-to-day operations.",
      "Incorrect. Demographic change is a sociocultural force in the general environment."
    ]
  },
  {
    id: 47, mock: 2, topic: "Global Environment",
    q: "Economies of scale mainly affect global competition by:",
    options: ["Increasing labor costs", "Lowering entry barriers", "Raising barriers to entry", "Increasing ethical dilemmas"],
    correct: 2,
    explain: [
      "Incorrect. Economies of scale reduce per-unit costs — the opposite of increasing them.",
      "Incorrect. Large players with scale advantages raise barriers — they do not lower them.",
      "Correct. Firms with economies of scale can produce at lower costs, making it very difficult for new entrants to compete profitably — hence higher barriers to entry.",
      "Incorrect. This is an operational advantage, not an ethical issue."
    ]
  },
  {
    id: 48, mock: 2, topic: "National Culture",
    q: "A high power-distance culture is MOST likely to:",
    options: ["Promote flat hierarchies", "Encourage questioning authority", "Accept unequal power distribution", "Emphasize teamwork equally"],
    correct: 2,
    explain: [
      "Incorrect. Flat hierarchies are characteristic of low power-distance cultures.",
      "Incorrect. Questioning authority is associated with low power-distance cultures.",
      "Correct. High power distance (Hofstede) means members of a society accept and expect unequal distribution of power as normal and legitimate.",
      "Incorrect. Teamwork emphasis is more associated with collectivism than power distance."
    ]
  },
  {
    id: 49, mock: 2, topic: "Ethics & CSR",
    q: "Sexual favors exchanged for promotion represent which form of harassment?",
    options: ["Hostile work environment", "Procedural injustice", "Quid pro quo", "Implicit bias"],
    correct: 2,
    explain: [
      "Incorrect. Hostile work environment refers to pervasive offensive behavior creating an intimidating atmosphere.",
      "Incorrect. Procedural injustice is about unfair decision-making processes — unrelated to harassment.",
      "Correct. Quid pro quo ('this for that') harassment: sexual favors demanded in exchange for workplace benefits such as promotion or continued employment.",
      "Incorrect. Implicit bias is unconscious prejudice — a distinct concept."
    ]
  },
  {
    id: 50, mock: 2, topic: "Global Environment",
    q: "Declining trade barriers generally increase:",
    options: ["National isolation", "Managerial certainty", "Global competition", "Cultural uniformity"],
    correct: 2,
    explain: [
      "Incorrect. Removing trade barriers leads to greater integration, not isolation.",
      "Incorrect. Globalization actually increases uncertainty and complexity for managers.",
      "Correct. When trade barriers fall, more firms from more countries can enter markets, directly intensifying global competition.",
      "Incorrect. Cultural diversity generally persists and even grows in importance under globalization."
    ]
  },
  {
    id: 51, mock: 2, topic: "Management Fundamentals",
    q: "A manager who chooses appropriate goals but wastes resources while pursuing them is:",
    options: ["Efficient but ineffective", "Effective but inefficient", "Both efficient and effective", "Neither efficient nor effective"],
    correct: 1,
    explain: [
      "Incorrect. Efficiency = minimal resource use — the opposite of what is described.",
      "Correct. Effective = choosing the right goals ✓. Inefficient = wasting resources in pursuit ✗.",
      "Incorrect. Efficiency is clearly absent due to resource waste.",
      "Incorrect. Effectiveness is present — the goals chosen are appropriate."
    ]
  },
  {
    id: 52, mock: 2, topic: "Management Fundamentals",
    q: "Which managerial task involves determining how best to group people and resources?",
    options: ["Planning", "Organizing", "Leading", "Controlling"],
    correct: 1,
    explain: [
      "Incorrect. Planning is about setting goals and developing strategies to achieve them.",
      "Correct. Organizing is the process of structuring tasks, roles, authority, and resources into departments and teams.",
      "Incorrect. Leading involves motivating, inspiring, and guiding people.",
      "Incorrect. Controlling is measuring performance against standards and correcting deviations."
    ]
  },
  {
    id: 53, mock: 2, topic: "Managerial Roles",
    q: "A department manager who negotiates with suppliers is performing which Mintzberg role?",
    options: ["Monitor", "Figurehead", "Resource allocator", "Negotiator"],
    correct: 3,
    explain: [
      "Incorrect. Monitor role = scanning the environment for information.",
      "Incorrect. Figurehead role = symbolic and ceremonial duties.",
      "Incorrect. Resource allocator = distributing resources internally within the organization.",
      "Correct. Negotiator (Mintzberg) = representing the organization in major negotiations with external parties such as suppliers, unions, or partners."
    ]
  },
  {
    id: 54, mock: 2, topic: "Management Theory",
    q: "According to scientific management, improving efficiency primarily requires:",
    options: ["Letting workers design their own jobs", "Trial-and-error decision making", "Studying the worker–task relationship scientifically", "Increasing informal communication"],
    correct: 2,
    explain: [
      "Incorrect. Taylor believed managers, not workers, should design jobs based on scientific study.",
      "Incorrect. Taylor explicitly rejected trial-and-error in favor of systematic scientific methods.",
      "Correct. Taylor's scientific management = systematic time-and-motion studies of the worker–task relationship to find the 'one best way' to perform each task.",
      "Incorrect. Informal communication was the focus of the Human Relations school (Mayo), not Taylor."
    ]
  },
  {
    id: 55, mock: 2, topic: "Management Theory",
    q: "One major criticism of scientific management was that it:",
    options: ["Ignored organizational structure", "Overemphasized technology", "Treated workers as machines", "Encouraged excessive teamwork"],
    correct: 2,
    explain: [
      "Incorrect. Taylor did pay attention to organizational work design.",
      "Incorrect. Taylor focused on human motion and task analysis, not overemphasizing machines per se.",
      "Correct. The main criticism: scientific management dehumanized workers — treating them as mechanical components to be optimized, ignoring psychological and social needs.",
      "Incorrect. Taylor's approach was highly individualized; teamwork was not emphasized at all."
    ]
  },
  {
    id: 56, mock: 2, topic: "Organizational Structure",
    q: "An organization with centralized authority, strict rules, and vertical communication has a:",
    options: ["Organic structure", "Boundary-less structure", "Mechanistic structure", "Matrix structure"],
    correct: 2,
    explain: [
      "Incorrect. Organic structure is flexible, decentralized, with minimal rules — the opposite.",
      "Incorrect. Boundary-less structure removes hierarchical barriers.",
      "Correct. Mechanistic structure (Burns & Stalker): centralized authority, formal rules, standardized processes, and vertical information flow — suited to stable environments.",
      "Incorrect. Matrix structure involves dual authority (functional + project), not simple vertical hierarchy."
    ]
  },
  {
    id: 57, mock: 2, topic: "Management Theory",
    q: "A manager who believes employees dislike work and need close supervision follows:",
    options: ["Theory Z", "Theory Y", "Theory X", "Human relations theory"],
    correct: 2,
    explain: [
      "Incorrect. Theory Z (Ouchi) is a Japanese-influenced approach emphasizing long-term employment and consensus.",
      "Incorrect. Theory Y holds a positive view: employees are self-motivated, enjoy work, and seek responsibility.",
      "Correct. Theory X (McGregor): managers assume employees are lazy, dislike work, avoid responsibility, and must be closely controlled.",
      "Incorrect. Human relations is a broader school emphasizing social needs — not this specific assumption."
    ]
  },
  {
    id: 58, mock: 2, topic: "Personality & Individual Behavior",
    q: "Which Big Five personality trait is MOST closely associated with reliability and discipline?",
    options: ["Extraversion", "Agreeableness", "Conscientiousness", "Openness to experience"],
    correct: 2,
    explain: [
      "Incorrect. Extraversion = sociability, assertiveness, and energy.",
      "Incorrect. Agreeableness = cooperativeness, friendliness, and trust.",
      "Correct. Conscientiousness = reliability, discipline, organization, and achievement orientation — the Big Five trait most strongly linked to job performance.",
      "Incorrect. Openness to experience = curiosity, creativity, and receptiveness to new ideas."
    ]
  },
  {
    id: 59, mock: 2, topic: "Personality & Individual Behavior",
    q: "A manager who believes outcomes depend mainly on external forces has:",
    options: ["High self-esteem", "Internal locus of control", "External locus of control", "High need for achievement"],
    correct: 2,
    explain: [
      "Incorrect. Self-esteem relates to one's overall sense of self-worth, not causal attribution.",
      "Incorrect. Internal locus of control = 'I determine my own outcomes.'",
      "Correct. External locus of control (Rotter): the belief that outcomes are controlled by luck, fate, or other people rather than one's own actions.",
      "Incorrect. Need for achievement (McClelland) is the drive to excel and meet high standards — a different construct."
    ]
  },
  {
    id: 60, mock: 2, topic: "Organizational Culture",
    q: "Shared values, norms, rituals, and stories in an organization form its:",
    options: ["Climate", "Structure", "Strategy", "Culture"],
    correct: 3,
    explain: [
      "Incorrect. Organizational climate is the surface-level atmosphere or 'feel' — more temporary and observable.",
      "Incorrect. Structure defines formal roles, authority, and reporting relationships.",
      "Incorrect. Strategy is a plan to achieve competitive goals.",
      "Correct. Organizational culture is the deep, shared system of values, norms, beliefs, rituals, and stories that guide member behavior."
    ]
  },
  {
    id: 61, mock: 2, topic: "Management Fundamentals",
    q: "Management is BEST defined as:",
    options: [
      "The act of personally producing goods or services",
      "The planning, organizing, leading, and controlling of resources to achieve goals efficiently and effectively",
      "The exclusive function of hiring new employees",
      "The accounting and finance function of a firm"
    ],
    correct: 1,
    explain: [
      "Incorrect. Personally producing goods is an operational task, not management.",
      "Correct. Management = the POLC process (Planning, Organizing, Leading, Controlling) applied to human, financial, and physical resources to achieve organizational goals.",
      "Incorrect. Hiring is one HR task within the organizing function — not a definition of management.",
      "Incorrect. Finance is one functional area managed; it does not define management as a whole."
    ]
  },
  {
    id: 62, mock: 2, topic: "Management Fundamentals",
    q: "Which statement correctly distinguishes efficiency from effectiveness?",
    options: [
      "They mean exactly the same thing",
      "Efficiency = doing things right (low resource waste); Effectiveness = doing the right things (correct goal selection)",
      "Effectiveness measures resource waste; efficiency measures goal selection",
      "Efficiency is about ethics; effectiveness is about legal compliance"
    ],
    correct: 1,
    explain: [
      "Incorrect. They are distinct and complementary concepts.",
      "Correct. Efficiency: using minimum inputs for a given output (doing things right). Effectiveness: choosing goals that lead to desired organizational outcomes (doing the right things).",
      "Incorrect. The definitions are reversed.",
      "Incorrect. Neither concept is primarily about ethics or legality."
    ]
  },
  {
    id: 63, mock: 2, topic: "Management Fundamentals",
    q: "The four principal managerial tasks are:",
    options: [
      "Hiring, firing, paying, training",
      "Planning, organizing, leading, controlling",
      "Buying, selling, storing, shipping",
      "Producing, marketing, financing, accounting"
    ],
    correct: 1,
    explain: [
      "Incorrect. These are HR operational tasks, not the principal management functions.",
      "Correct. POLC — Planning, Organizing, Leading, Controlling — are the four foundational managerial tasks (Fayol, updated).",
      "Incorrect. These are supply chain operations.",
      "Incorrect. These are business functions, not managerial tasks per se."
    ]
  },
  {
    id: 64, mock: 2, topic: "Personality & Individual Behavior",
    q: "Emotional intelligence is the ability to:",
    options: [
      "Solve complex mathematical problems rapidly",
      "Understand and manage one's own emotions and the emotions of others",
      "Memorize and recall organizational charts",
      "Accurately forecast stock prices"
    ],
    correct: 1,
    explain: [
      "Incorrect. Mathematical ability is cognitive intelligence (IQ), not emotional intelligence (EQ).",
      "Correct. EI (Goleman): self-awareness, self-regulation, motivation, empathy, and social skills — the ability to recognize, understand, and manage emotions in oneself and others.",
      "Incorrect. Memorization is a cognitive function.",
      "Incorrect. Financial forecasting is analytical, not emotional intelligence."
    ]
  },
  {
    id: 65, mock: 2, topic: "Organizational Culture",
    q: "Organizational culture is BEST defined as:",
    options: [
      "The firm's legal incorporation documents",
      "Shared values, norms, beliefs, and assumptions that guide behavior in an organization",
      "The official organizational chart displayed on the wall",
      "The company's brand logo and color palette"
    ],
    correct: 1,
    explain: [
      "Incorrect. Legal documents define legal structure, not culture.",
      "Correct. Organizational culture = the deep, shared system of values, norms, beliefs, and taken-for-granted assumptions that shape how members think, feel, and act.",
      "Incorrect. The org chart depicts formal structure, not culture.",
      "Incorrect. Visual identity is brand design, not organizational culture."
    ]
  },
  {
    id: 66, mock: 2, topic: "Organizational Behavior",
    q: "Organizational Citizenship Behavior (OCB) is valuable because it consists of:",
    options: [
      "Behaviors legally required by labor law",
      "Discretionary employee behaviors beyond formal duties that benefit the organization",
      "Behaviors explicitly listed in the job description",
      "Behaviors that harm the organization but are legally protected"
    ],
    correct: 1,
    explain: [
      "Incorrect. OCB is voluntary, not legally mandated.",
      "Correct. OCB = voluntary, discretionary behaviors (helping colleagues, civic virtue, conscientiousness) not required by job descriptions but that improve organizational functioning.",
      "Incorrect. Job description tasks are in-role behaviors, not OCB.",
      "Incorrect. Harmful protected behaviors are counterproductive behaviors — the opposite of OCB."
    ]
  },
  {
    id: 67, mock: 2, topic: "Management Fundamentals",
    q: "Why is high efficiency alone NOT sufficient for high organizational performance?",
    options: [
      "Because efficient organizations always lose money",
      "Because a firm can efficiently pursue the WRONG goals — strong efficiency without effectiveness still leads to failure",
      "Because efficiency is prohibited in most countries",
      "Because efficiency requires zero resources"
    ],
    correct: 1,
    explain: [
      "Incorrect. Efficiency does not cause financial loss — it typically helps reduce costs.",
      "Correct. A firm can be very efficient (low resource waste) but still fail if it is pursuing the wrong objectives. Both efficiency AND effectiveness are required.",
      "Incorrect. This is false.",
      "Incorrect. Efficiency means optimal resource use — the opposite of using zero resources."
    ]
  },
  {
    id: 68, mock: 2, topic: "Personality & Individual Behavior",
    q: "How do positive and negative moods typically affect managerial decision making?",
    options: [
      "Moods have absolutely no effect on workplace decisions",
      "Positive moods tend to boost creativity and optimism; negative moods often lead to more careful, critical analysis",
      "Positive moods always produce worse decisions",
      "Moods only affect personal life, never professional behavior"
    ],
    correct: 1,
    explain: [
      "Incorrect. Research consistently shows moods influence cognition and decision-making.",
      "Correct. Positive affect → broader thinking, creative problem-solving. Negative affect → more systematic, detailed, risk-averse analysis. Both have situational value.",
      "Incorrect. Positive moods can enhance creativity and openness — they don't automatically worsen decisions.",
      "Incorrect. Affect spills over from personal to professional contexts."
    ]
  },
  {
    id: 69, mock: 2, topic: "Planning & Strategy",
    q: "A core competency gives an organization competitive advantage because it is:",
    options: [
      "A standard task performed identically by all competing firms",
      "A unique bundle of skills and resources that is valuable, rare, and difficult for competitors to imitate",
      "Any task performed by any employee in the company",
      "A government-issued operating license"
    ],
    correct: 1,
    explain: [
      "Incorrect. If all competitors do it, it is a competitive necessity, not an advantage.",
      "Correct. Core competency (Prahalad & Hamel): a distinctive capability that is valuable (V), rare (R), inimitable (I), and non-substitutable (O) — the VRIO framework for sustained competitive advantage.",
      "Incorrect. Ordinary tasks are not competencies.",
      "Incorrect. A license is a legal permit, not a strategic competency."
    ]
  },
  {
    id: 70, mock: 2, topic: "Ethics & CSR",
    q: "A manager's personal values influence planning and decision-making MOST clearly by:",
    options: [
      "Determining the company's stock price",
      "Shaping what goals are considered desirable and what means are considered acceptable",
      "Setting central bank interest rates",
      "Replacing legal requirements entirely"
    ],
    correct: 1,
    explain: [
      "Incorrect. Stock price is determined by markets, not managerial values directly.",
      "Correct. Values act as a filter: they determine which objectives a manager considers worth pursuing and which methods they consider ethically permissible.",
      "Incorrect. Interest rates are set by central banks — outside managerial control.",
      "Incorrect. Values complement laws but do not replace them."
    ]
  },
  {
    id: 71, mock: 2, topic: "Ethics & CSR",
    q: "An ethical dilemma is BEST defined as a situation where:",
    options: [
      "A manager faces a routine, clearly legal and unambiguous question",
      "One must choose between alternatives where each option has ethical drawbacks or competing moral claims",
      "All available options are equally good ethically",
      "There is one completely obvious right answer"
    ],
    correct: 1,
    explain: [
      "Incorrect. A routine, clear-cut question is not a dilemma.",
      "Correct. An ethical dilemma arises when every available choice involves some moral cost or trade-off — no option is clearly and entirely right.",
      "Incorrect. If all options are equally good, it is a choice, not a dilemma.",
      "Incorrect. An obvious right answer eliminates the dilemma."
    ]
  },
  {
    id: 72, mock: 2, topic: "Ethics & CSR",
    q: "According to the justice rule, an ethical decision is one that:",
    options: [
      "Maximizes the firm's profit regardless of impact on others",
      "Distributes benefits and burdens fairly, impartially, and equitably among all stakeholders",
      "Exclusively favors top management",
      "Ignores the interests of external stakeholders"
    ],
    correct: 1,
    explain: [
      "Incorrect. Profit maximization at any cost often violates the justice rule.",
      "Correct. The justice rule: decisions are ethical when outcomes (costs and benefits) are distributed fairly and without discrimination across all affected parties.",
      "Incorrect. Favoring only top management violates impartiality.",
      "Incorrect. The justice rule specifically requires considering all stakeholders."
    ]
  },
  {
    id: 73, mock: 2, topic: "Ethics & CSR",
    q: "Two key responsibilities companies owe employees as stakeholders include:",
    options: [
      "Providing free luxury vehicles and unlimited paid leave",
      "Safe working conditions and fair compensation",
      "Guaranteed lifetime employment for every employee",
      "Mandatory personal therapy sessions for all staff"
    ],
    correct: 1,
    explain: [
      "Incorrect. These are not standard stakeholder obligations.",
      "Correct. Core employee stakeholder responsibilities: (1) safe, healthy working conditions and (2) fair wages and benefits — foundational ethical and legal obligations.",
      "Incorrect. Lifetime employment is not a universal employer obligation.",
      "Incorrect. Therapy sessions may be a benefit but are not a baseline stakeholder duty."
    ]
  },
  {
    id: 74, mock: 2, topic: "Diversity & Bias",
    q: "The 'glass ceiling' refers to:",
    options: [
      "A literal transparent architectural feature in offices",
      "Invisible barriers that prevent women and minorities from advancing to top positions despite qualifications",
      "A type of executive liability insurance",
      "A government tax regulation"
    ],
    correct: 1,
    explain: [
      "Incorrect. It is a sociological metaphor, not a physical object.",
      "Correct. Glass ceiling = the invisible, often systemic barriers (biases, networks, stereotypes) that block qualified women and minorities from reaching senior leadership roles.",
      "Incorrect. No such insurance product is described by this term.",
      "Incorrect. It has nothing to do with tax law."
    ]
  },
  {
    id: 75, mock: 2, topic: "Diversity & Bias",
    q: "Implicit bias is BEST described as:",
    options: [
      "An openly stated and consciously held prejudice",
      "Unconscious attitudes or stereotypes that automatically influence understanding, decisions, and actions",
      "A formal HR anti-discrimination policy",
      "A type of financial fraud"
    ],
    correct: 1,
    explain: [
      "Incorrect. Openly stated prejudice is explicit bias.",
      "Correct. Implicit bias: unconscious associations and stereotypes that influence perceptions and decisions without the person realizing it — often measured with the Implicit Association Test (IAT).",
      "Incorrect. HR policies are organizational responses to bias, not bias itself.",
      "Incorrect. Implicit bias is a psychological phenomenon, not a financial crime."
    ]
  },
  {
    id: 76, mock: 2, topic: "Global Environment",
    q: "How do the task and general environments differ globally?",
    options: [
      "They are identical concepts with different names",
      "Task environment forces (customers, suppliers, competitors) directly affect daily operations; general environment forces (economic, political, sociocultural) affect organizations broadly and indirectly",
      "Task environment is internal to the organization; general environment is irrelevant",
      "General environment includes only the firm's employees"
    ],
    correct: 1,
    explain: [
      "Incorrect. They represent fundamentally different levels of environmental analysis.",
      "Correct. Task environment = specific industry forces with direct impact (suppliers, customers, competitors, regulators). General environment = macro forces (PESTEL) that affect all industries indirectly.",
      "Incorrect. Both are external environments.",
      "Incorrect. Employees are part of the internal organizational environment."
    ]
  },
  {
    id: 77, mock: 2, topic: "Global Environment",
    q: "Firms use global outsourcing primarily to:",
    options: [
      "Deliberately increase their production costs",
      "Access lower labor costs or specialized skills available in other countries",
      "Legally avoid paying all taxes",
      "Replace their entire customer base abroad"
    ],
    correct: 1,
    explain: [
      "Incorrect. The goal is cost reduction, not increase.",
      "Correct. Global outsourcing: contracting work to foreign providers to reduce costs (labor arbitrage) and/or gain access to specialized expertise not available locally.",
      "Incorrect. Tax strategy is separate from outsourcing decisions.",
      "Incorrect. Outsourcing is about production/services, not replacing customers."
    ]
  },
  {
    id: 78, mock: 2, topic: "Global Environment",
    q: "Barriers to entry are strategically important to managers because they:",
    options: [
      "Determine the dress code for employees",
      "Affect how easily new competitors can enter the industry and threaten the firm's market position",
      "Define the company's mission statement",
      "Are relevant only to government regulators, not managers"
    ],
    correct: 1,
    explain: [
      "Incorrect. Dress codes are an HR matter.",
      "Correct. High barriers to entry (economies of scale, brand loyalty, capital requirements) protect existing firms. Low barriers invite new competitors. This is a core element of Porter's Five Forces.",
      "Incorrect. Mission statements are internal strategic documents.",
      "Incorrect. Barriers to entry are central to competitive strategy — absolutely relevant to managers."
    ]
  },
  {
    id: 79, mock: 2, topic: "National Culture",
    q: "Individualism vs. collectivism (Hofstede) describes whether a culture emphasizes:",
    options: [
      "Religion vs. science",
      "Personal achievement and self-interest vs. group loyalty, harmony, and shared identity",
      "Urban vs. rural lifestyles",
      "Monarchy vs. democracy"
    ],
    correct: 1,
    explain: [
      "Incorrect. Religion vs. science is not a Hofstede dimension.",
      "Correct. Individualism (e.g., USA, UK): personal goals and self-reliance prevail. Collectivism (e.g., Japan, China): group harmony, loyalty, and shared identity take precedence over individual interests.",
      "Incorrect. Urban/rural is a demographic dimension, not a cultural values dimension.",
      "Incorrect. Political systems are captured in other frameworks, not this Hofstede dimension."
    ]
  },
  {
    id: 80, mock: 2, topic: "Diversity & Bias",
    q: "Two effective ways managers can support workforce diversity include:",
    options: [
      "Ignoring all differences and treating everyone as identical",
      "Diversity training programs combined with inclusive recruitment and promotion practices",
      "Hiring only one demographic group",
      "Paying different wages to different demographic groups"
    ],
    correct: 1,
    explain: [
      "Incorrect. A 'color-blind' approach ignores systemic disadvantages and is insufficient.",
      "Correct. Evidence-based best practices: (1) structured diversity training to reduce bias, (2) inclusive and standardized hiring/promotion processes that mitigate bias.",
      "Incorrect. This is discriminatory and illegal.",
      "Incorrect. Differential pay based on demographics is illegal and unethical."
    ]
  },

  // ═══════════════════════════════════════════
  // MOCK 3 — 20 questions
  // ═══════════════════════════════════════════

  {
    id: 81, mock: 3, topic: "Communication",
    q: "A message containing complex emotional content is best delivered through which communication channel?",
    options: ["Memo", "Email", "Face-to-face communication", "Formal report"],
    correct: 2,
    explain: [
      "Incorrect. A memo has very low information richness — it cannot convey tone, emotion, or enable real-time feedback.",
      "Incorrect. Email is a lean channel — better for simple, factual messages than emotionally complex ones.",
      "Correct. Face-to-face is the richest medium: simultaneous verbal, vocal, and nonverbal cues plus instant feedback make it ideal for complex emotional content.",
      "Incorrect. Formal reports are the leanest channel — no interactivity, no tone, no feedback loop."
    ]
  },
  {
    id: 82, mock: 3, topic: "Management Fundamentals",
    q: "Which management function is MOST directly involved in establishing performance standards?",
    options: ["Planning", "Organizing", "Leading", "Controlling"],
    correct: 3,
    explain: [
      "Partially related — planning sets goals that inform standards, but the formal establishment of performance standards belongs to controlling.",
      "Incorrect. Organizing is about structuring roles and resources.",
      "Incorrect. Leading is about motivating and directing people.",
      "Correct. Controlling's four steps: (1) establish performance standards, (2) measure actual performance, (3) compare to standards, (4) take corrective action."
    ]
  },
  {
    id: 83, mock: 3, topic: "Innovation & Change",
    q: "When employees resist change because they fear job loss, the resistance is primarily due to:",
    options: ["Habitual forces", "Structural inertia", "Personal uncertainty", "Communication noise"],
    correct: 2,
    explain: [
      "Incorrect. Habitual forces refer to employees resisting change because it disrupts familiar routines and ways of working.",
      "Incorrect. Structural inertia refers to resistance embedded in organizational systems, procedures, and policies.",
      "Correct. Personal uncertainty: fear of losing one's job, income, or status is a primary driver of individual resistance to organizational change.",
      "Incorrect. Communication noise is interference in message transmission — a separate communication concept."
    ]
  },
  {
    id: 84, mock: 3, topic: "Decision Making",
    q: "A manager systematically evaluates multiple alternatives and selects the optimal solution assuming complete information. This reflects the:",
    options: ["Administrative model", "Classical model", "Behavioral model", "Political model"],
    correct: 1,
    explain: [
      "Incorrect. The administrative model (Simon) assumes limited information and 'satisficing' — not optimization.",
      "Correct. The classical model assumes managers have complete information, unlimited time, and rational ability to evaluate all alternatives and select the optimal solution — an idealized view.",
      "Incorrect. The behavioral model accounts for cognitive biases and limitations.",
      "Incorrect. The political model sees decisions emerging from bargaining between powerful coalitions."
    ]
  },
  {
    id: 85, mock: 3, topic: "Group Dynamics",
    q: "A team avoids critical evaluation to maintain harmony and consensus. This phenomenon is known as:",
    options: ["Risk shifting", "Group polarization", "Groupthink", "Social loafing"],
    correct: 2,
    explain: [
      "Incorrect. Risk shifting (risky shift) is when groups make riskier decisions than individuals would alone.",
      "Incorrect. Group polarization is when group discussion moves members toward more extreme positions than they held initially.",
      "Correct. Groupthink (Janis): the desire for harmony suppresses dissent and critical evaluation, leading to poor-quality, unchallenged decisions.",
      "Incorrect. Social loafing is when individuals exert less effort in a group than alone."
    ]
  },
  {
    id: 86, mock: 3, topic: "Leadership",
    q: "Which leadership behavior focuses on inspiring employees through vision and meaning?",
    options: ["Transactional leadership", "Laissez-faire leadership", "Transformational leadership", "Autocratic leadership"],
    correct: 2,
    explain: [
      "Incorrect. Transactional leadership is based on exchange — rewards for performance, penalties for non-compliance.",
      "Incorrect. Laissez-faire is hands-off leadership with minimal direction or involvement.",
      "Correct. Transformational leadership (Bass): inspiring followers through an aspirational vision, intellectual stimulation, and individualized consideration — transforming values and motivation.",
      "Incorrect. Autocratic leadership is directive and unilateral — no inspiration or vision-sharing."
    ]
  },
  {
    id: 87, mock: 3, topic: "Organizational Structure",
    q: "Dividing an organization into marketing, finance, and operations departments is an example of:",
    options: ["Geographic departmentalization", "Product departmentalization", "Functional departmentalization", "Customer departmentalization"],
    correct: 2,
    explain: [
      "Incorrect. Geographic departmentalization groups units by location or region.",
      "Incorrect. Product departmentalization groups units by product line or service.",
      "Correct. Functional departmentalization groups people by business function (marketing, finance, operations, HR) — the most common basic structure.",
      "Incorrect. Customer departmentalization groups units by the type of customer served."
    ]
  },
  {
    id: 88, mock: 3, topic: "Management Fundamentals",
    q: "A manager reallocates resources when actual results deviate from standards. This action belongs to:",
    options: ["Planning", "Organizing", "Leading", "Controlling"],
    correct: 3,
    explain: [
      "Incorrect. Planning sets the goals and standards before execution — not the response to deviation.",
      "Incorrect. Organizing initially allocates resources into structure — not mid-course reallocation based on performance gaps.",
      "Incorrect. Leading motivates and guides people.",
      "Correct. Controlling: detecting that actual performance deviates from standards and taking corrective action (e.g., reallocating resources) is the defining corrective step in the control process."
    ]
  },
  {
    id: 89, mock: 3, topic: "Management Fundamentals",
    q: "Managers who supervise supervisors belong to which management level?",
    options: ["First-line", "Middle", "Top", "Project"],
    correct: 1,
    explain: [
      "Incorrect. First-line managers directly supervise non-managerial employees (workers).",
      "Correct. Middle managers supervise first-line managers (i.e., supervisors), bridging top management and front-line operations.",
      "Incorrect. Top managers (CEO, CFO) set overall strategy and report to the board.",
      "Incorrect. Project manager is a temporary role, not a permanent hierarchical level."
    ]
  },
  {
    id: 90, mock: 3, topic: "Personality & Individual Behavior",
    q: "Which personality trait reflects being dependable, disciplined, and achievement-oriented?",
    options: ["Agreeableness", "Openness to experience", "Conscientiousness", "Extraversion"],
    correct: 2,
    explain: [
      "Incorrect. Agreeableness = cooperativeness, warmth, and willingness to go along with others.",
      "Incorrect. Openness to experience = curiosity, creativity, and receptiveness to new ideas.",
      "Correct. Conscientiousness = dependability, discipline, self-organization, and achievement drive — the single best Big Five predictor of job performance across occupations.",
      "Incorrect. Extraversion = outgoing energy, sociability, and positive affect."
    ]
  },
  {
    id: 91, mock: 3, topic: "Planning & Strategy",
    q: "Which statement BEST describes the relationship between planning and controlling?",
    options: [
      "They are completely unrelated managerial functions",
      "Planning sets goals and standards; controlling measures progress against them and corrects deviations",
      "Controlling sets the goals; planning measures actual performance against them",
      "Both functions fully replace organizing and leading"
    ],
    correct: 1,
    explain: [
      "Incorrect. Planning and controlling are tightly linked — they form a feedback loop.",
      "Correct. Planning defines goals and performance standards → Controlling measures actual performance against those standards → Deviations trigger corrective action → Which informs updated plans.",
      "Incorrect. This reverses the correct relationship.",
      "Incorrect. Planning and controlling complement organizing and leading; they do not replace them."
    ]
  },
  {
    id: 92, mock: 3, topic: "Organizational Culture",
    q: "Which is an important way managers SHAPE organizational culture?",
    options: [
      "Passively ignoring employee behavior and expressed values",
      "Selection of new hires, role modeling, and reward systems aligned with desired values",
      "Eliminating all performance reviews",
      "Outsourcing every management decision to consultants"
    ],
    correct: 1,
    explain: [
      "Incorrect. Passive management allows cultures to drift or become dysfunctional.",
      "Correct. Managers shape culture through: (1) who they hire (selective hiring for value fit), (2) what they model (role modeling), and (3) what they reward (reinforcing desired behaviors through recognition and incentives).",
      "Incorrect. Removing performance reviews removes a key reinforcement mechanism.",
      "Incorrect. Outsourcing decisions removes the manager's ability to influence culture directly."
    ]
  },
  {
    id: 93, mock: 3, topic: "Decision Making",
    q: "Why does bounded rationality matter in managerial decision making?",
    options: [
      "Because managers always achieve optimal solutions in practice",
      "Because limited information, time, and cognitive capacity force managers to 'satisfice' rather than fully optimize",
      "Because managerial rationality is completely unlimited",
      "Because managers typically refuse to make any decisions"
    ],
    correct: 1,
    explain: [
      "Incorrect. That describes the classical model — not real-world behavior.",
      "Correct. Simon's bounded rationality: real managers satisfice (choose a solution that is good enough) because they cannot process all information or evaluate all alternatives due to cognitive and time limits.",
      "Incorrect. 'Bounded' means limited — the opposite of unlimited.",
      "Incorrect. Managers do make decisions — they just don't make perfectly rational ones."
    ]
  },
  {
    id: 94, mock: 3, topic: "Organizational Structure",
    q: "Which statement correctly distinguishes centralization from decentralization?",
    options: [
      "They are synonymous structural concepts",
      "Centralization concentrates decision authority at the top of the hierarchy; decentralization pushes authority down to lower-level managers and employees",
      "Decentralization concentrates decision authority at the top",
      "Centralization eliminates the need for any managers"
    ],
    correct: 1,
    explain: [
      "Incorrect. They are structural opposites with different effects on autonomy, speed, and control.",
      "Correct. Centralization: top management retains decision-making authority. Decentralization: authority is delegated to lower levels, enabling faster local decisions and greater employee autonomy.",
      "Incorrect. This reverses the correct definitions.",
      "Incorrect. Centralization increases the importance of top managers, not eliminates them."
    ]
  },
  {
    id: 95, mock: 3, topic: "Organizational Structure",
    q: "Organizational structure is important because it:",
    options: [
      "Directly sets the company's market share",
      "Establishes how tasks, authority, and reporting relationships are coordinated to achieve goals",
      "Replaces the need for organizational strategy",
      "Determines product prices independently of market forces"
    ],
    correct: 1,
    explain: [
      "Incorrect. Market share is determined by competitive performance, not org structure directly.",
      "Correct. Organizational structure = the formal system of task, authority, and reporting relationships that coordinates and motivates people toward organizational goals.",
      "Incorrect. Structure supports and implements strategy — the famous maxim is 'structure follows strategy.'",
      "Incorrect. Prices are determined by market forces and pricing strategy, not org structure."
    ]
  },
  {
    id: 96, mock: 3, topic: "Motivation & Job Design",
    q: "What is the difference between job enlargement and job enrichment?",
    options: [
      "They are interchangeable concepts meaning the same thing",
      "Enlargement adds more tasks at the same skill level (horizontal loading); enrichment adds more responsibility and autonomy (vertical loading)",
      "Enlargement always reduces salary; enrichment always increases it",
      "Enrichment removes tasks from a job; enlargement reduces working hours"
    ],
    correct: 1,
    explain: [
      "Incorrect. They are distinct approaches to job redesign with different impacts on motivation.",
      "Correct. Job enlargement = horizontal expansion (more variety, same level). Job enrichment = vertical expansion (more responsibility, control, and opportunities for growth — Herzberg's motivators).",
      "Incorrect. Neither is inherently linked to pay changes.",
      "Incorrect. These descriptions are inverted and incorrect."
    ]
  },
  {
    id: 97, mock: 3, topic: "Value Chain & Operations",
    q: "Benchmarking improves performance by:",
    options: [
      "Eliminating all performance standards",
      "Comparing the firm's processes and results against best-in-class organizations to identify improvement opportunities",
      "Setting targets randomly without data",
      "Punishing poor performers without analysis"
    ],
    correct: 1,
    explain: [
      "Incorrect. Benchmarking creates data-driven standards, not eliminates them.",
      "Correct. Benchmarking = identifying best-practice organizations, measuring their processes, and applying those insights to close the performance gap.",
      "Incorrect. Benchmarking relies on rigorous comparison data — the opposite of random target-setting.",
      "Incorrect. Benchmarking is an analytical and learning process, not a punitive one."
    ]
  },
  {
    id: 98, mock: 3, topic: "Motivation & Job Design",
    q: "Motivation refers to psychological forces determining direction, effort, and persistence. A well-known motivational theory is:",
    options: [
      "Newton's three laws of motion",
      "Maslow's Hierarchy of Needs",
      "The law of supply and demand",
      "The Pythagorean theorem"
    ],
    correct: 1,
    explain: [
      "Incorrect. Newton's laws describe physical motion, not human psychological drives.",
      "Correct. Maslow's Hierarchy of Needs (physiological → safety → social → esteem → self-actualization) is one of the most widely taught motivational theories in management.",
      "Incorrect. Supply and demand is an economics concept.",
      "Incorrect. Pythagorean theorem is a geometric principle."
    ]
  },
  {
    id: 99, mock: 3, topic: "Group Dynamics",
    q: "Two key benefits of team-based work structures include:",
    options: [
      "Slower decisions and greater individual isolation",
      "Greater knowledge sharing and faster, more flexible responses to problems",
      "Increased individual effort and reduced need for coordination",
      "Lower creativity and decreased employee engagement"
    ],
    correct: 1,
    explain: [
      "Incorrect. Teams typically accelerate decisions through shared information and parallel processing.",
      "Correct. Team-based structures: (1) combine diverse knowledge and expertise, (2) enable quicker, more adaptive responses to complex problems through collective intelligence.",
      "Incorrect. Teams emphasize collective effort and require active coordination.",
      "Incorrect. Research consistently shows teams enhance creativity and engagement when well-managed."
    ]
  },
  {
    id: 100, mock: 3, topic: "Communication",
    q: "Which statement BEST distinguishes formal and informal organizational communication?",
    options: [
      "They are the same thing with different names",
      "Formal communication flows through official channels following the hierarchy; informal communication flows spontaneously (e.g., the grapevine)",
      "Informal communication is always written; formal is always spoken",
      "Formal communication is prohibited in modern organizations"
    ],
    correct: 1,
    explain: [
      "Incorrect. They are structurally and functionally distinct.",
      "Correct. Formal: official channels, follows hierarchy, often documented (memos, reports, meetings). Informal: spontaneous, unofficial, interpersonal (grapevine, corridor conversations).",
      "Incorrect. This reverses reality — formal communication is often written; informal is typically spoken.",
      "Incorrect. Formal communication is foundational to all organized institutions."
    ]
  }
];
