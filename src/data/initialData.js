export const initialSiteData = {
  brand: {
    name: "EVOLVE",
    subName: "CORPORATE & BUSINESS SOLUTIONS",
    tagline: "Finance | Transformation | Insight"
  },
  header: {
    navLinks: [
      { label: "Home", href: "#home" },
      { label: "Who We Help", href: "#who-we-help", hasDropdown: true },
      { label: "What We Do", href: "#what-we-do", hasDropdown: true },
      { label: "Insights", href: "#insights" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" }
    ],
    ctaText: "Start a Conversation →"
  },
  hero: {
    badge: "EVOLVE Corporate & Business Solutions",
    title: "Finance that moves organisations forward.",
    subtitle: "Clarity for today. Capability for tomorrow. Transformation when you need it.",
    ctaText: "Start a Conversation →",
    bgImage: "/images/hero_summit.jpg",
    slides: [
      {
        id: "slide-1",
        tabLabel: "Strategic Vision",
        badge: "EVOLVE Corporate & Business Solutions",
        title: "Finance that moves organisations forward.",
        subtitle: "Clarity for today. Capability for tomorrow. Transformation when you need it.",
        ctaText: "Start a Conversation →",
        bgImage: "/images/hero_summit.jpg"
      },
      {
        id: "slide-2",
        tabLabel: "CFO Advisory",
        badge: "LEAD — CFO & FP&A Advisory",
        title: "Strategic financial leadership for complex decisions.",
        subtitle: "Driver-based forecasting, capital optimization, and investor-ready reporting for boards and executive committees.",
        ctaText: "Explore CFO Advisory →",
        bgImage: "/images/cfo_advisory.jpg",
        targetPage: "lead"
      },
      {
        id: "slide-3",
        tabLabel: "Transformation & Data",
        badge: "TRANSFORM — Data, Systems & Technology",
        title: "Modern operating models, automated data & cloud ERP.",
        subtitle: "Connecting people, process, data, and technology to accelerate month-end closes and unlock real-time financial telemetry.",
        ctaText: "Explore Transformation →",
        bgImage: "/images/finance_transform.jpg",
        targetPage: "transform"
      },
      {
        id: "slide-4",
        tabLabel: "Executive Partnership",
        badge: "BUILD — Operating Models & Governance",
        title: "Finance is more than numbers. It is your competitive advantage.",
        subtitle: "Hands-on executive partnership across fast-scaling enterprises, corporate governance, not-for-profits, and the public sector.",
        ctaText: "Meet Our Advisory Team →",
        bgImage: "/images/finance_meeting.jpg",
        targetPage: "about"
      }
    ]
  },
  section2: {
    heading: "Finance is more than numbers.",
    paragraph1: "It is the information leaders rely on to understand performance, manage risk, allocate resources and make important decisions.",
    paragraph2: "We bring together CFO and FP&A advisory, finance-function capability, transformation, data, reporting and compliance to help organisations navigate growth, complexity and change.",
    ctaText: "Explore What We Do →",
    image: "/images/finance_meeting.jpg",
    calloutText: "Better information. Deeper insight. Stronger decisions."
  },
  processFlow: {
    badge: "DRIVE GROWTH WITH CLARITY & STRATEGY",
    heading: "From numbers to better decisions",
    subtitle: "Financial information should do more than describe the past. It should help you understand where you are today, where you are heading and what decisions need to be made. Our role is to help turn financial information into practical insight — and insight into action.",
    exploreText: "Explore Insights",
    characterImage: "/images/character_advisor.png?v=4",
    bgImage: "/images/finance_transform.jpg",
    steps: [
      {
        id: "step1",
        num: "01",
        badgeColor: "amber",
        title: "NUMBERS",
        desc: "Tell you what happened.",
        subDesc: "Historical accounting & data telemetry",
        icon: "BarChart3",
        image: "/images/step_numbers.jpg"
      },
      {
        id: "step2",
        num: "02",
        badgeColor: "teal",
        title: "INSIGHT",
        desc: "Tells you why.",
        subDesc: "Predictive modeling & root cause analysis",
        icon: "Lightbulb",
        image: "/images/step_insight.jpg"
      },
      {
        id: "step3",
        num: "03",
        badgeColor: "amber",
        title: "LEADERSHIP",
        desc: "Determines what happens next.",
        subDesc: "Strategic execution & capital allocation",
        icon: "Users",
        image: "/images/step_leadership.jpg"
      }
    ]
  },
  approachAndWhyUs: {
    approachTitle: "Our approach",
    approachSubtitle: "How we work",
    approachBgImage: "",
    approachSteps: [
      {
        num: "01",
        title: "Understand",
        desc: "We start with the organisation, not the solution. We understand your objectives, challenges, operating environment and current capability.",
        image: "/images/approach_understand.jpg",
        points: [
          { title: "Strategic Discovery", desc: "Understanding core objectives, operating conditions, and business model constraints." },
          { title: "Stakeholder Alignment", desc: "Engaging board and leadership teams to ensure consensus on strategic priorities." },
          { title: "Capability Baseline", desc: "Assessing current people, systems, data quality, and financial capabilities." }
        ]
      },
      {
        num: "02",
        title: "Diagnose",
        desc: "We identify what is working, what is not and where the greatest opportunities exist.",
        image: "/images/approach_diagnose.jpg",
        points: [
          { title: "Financial Forensics", desc: "Granular analysis into margin drivers, cost structures, and cash flow dynamics." },
          { title: "Operational Diagnostics", desc: "Pinpointing bottlenecks, reporting gaps, and workflow redundancies." },
          { title: "Opportunity Mapping", desc: "Quantifying high-value intervention points and prioritizing fast-payback wins." }
        ]
      },
      {
        num: "03",
        title: "Design",
        desc: "We develop a practical solution that aligns people, processes, systems, data and financial objectives.",
        image: "/images/approach_design.jpg",
        points: [
          { title: "Target Operating Model", desc: "Architecting future-state finance structures, governance, and responsibilities." },
          { title: "Systems & Data Flow", desc: "Designing integrated technology architecture and real-time BI telemetry." },
          { title: "Execution Roadmap", desc: "Establishing stage-gate delivery milestones, resource plans, and risk controls." }
        ]
      },
      {
        num: "04",
        title: "Deliver",
        desc: "We don't stop at recommendations. Where required, we work alongside your team to implement the solution and build sustainable capability.",
        image: "/images/approach_deliver.jpg",
        points: [
          { title: "Hands-on Implementation", desc: "Embedding alongside your team to lead program delivery and technical rollout." },
          { title: "Change Adoption", desc: "Standardizing workflows with playbooks, SOPs, and cross-functional training." },
          { title: "Capability Transfer", desc: "Upskilling internal personnel to ensure sustained operational success without dependency." }
        ]
      }
    ],
    whyUsTitle: "Why us?",
    whyUsSubtitle: "Proven expertise, practical delivery, and strategic clarity for your organisation.",
    whyUsBgImage: "",
    whyUsItems: [
      {
        id: "w1",
        title: "Finance experience",
        desc: "Practical finance experience across complex organisations, transformation environments and changing business needs.",
        icon: "BarChart3",
        image: "/images/why_experience.jpg"
      },
      {
        id: "w2",
        title: "Transformation capability",
        desc: "Finance, technology, data and process improvement brought together rather than treated as separate disciplines.",
        icon: "Settings",
        image: "/images/why_transformation.jpg"
      },
      {
        id: "w3",
        title: "Practical delivery",
        desc: "We focus on solutions that can be implemented and used — not reports that sit on a shelf.",
        icon: "Target",
        image: "/images/why_practical.jpg"
      },
      {
        id: "w4",
        title: "Flexible engagement",
        desc: "Engage for a specific project, going advisory support, additional capability or transformation program.",
        icon: "Users",
        image: "/images/why_flexible.jpg"
      },
      {
        id: "w5",
        title: "Independent perspective",
        desc: "An experienced external perspective can often identify issues and opportunities that are difficult to see from inside an organisation.",
        icon: "Shield",
        image: "/images/why_independent.jpg"
      }
    ]
  },
  whatWeDo: {
    heading: "What We Do",
    subtitle: "Four integrated service pillars. One focus — your success.",
    items: [
      {
        id: "lead",
        pillar: "LEAD",
        title: "CFO & FP&A Advisory",
        desc: "Strategic financial leadership and performance insight for organisations that need greater clarity, capability or additional senior finance support.",
        image: "/images/cfo_advisory.jpg",
        iconType: "lead",
        capabilities: [
          "CFO advisory",
          "Fractional CFO support",
          "FP&A",
          "Budgeting & forecasting",
          "Cash-flow management",
          "Financial modelling",
          "Management reporting",
          "KPI frameworks",
          "Scenario analysis",
          "Board and executive reporting",
          "Business partnering",
          "Strategic financial analysis"
        ]
      },
      {
        id: "build",
        pillar: "BUILD",
        title: "Finance Functions & Operating Models",
        desc: "Build a finance function that supports the organisation with the right people, processes, systems and governance.",
        image: "/images/finance_build.jpg",
        iconType: "build",
        capabilities: [
          "Finance Health Checks",
          "Finance operating models",
          "Target operating models",
          "Finance organisation design",
          "Process improvement",
          "Month-end improvement",
          "Management reporting",
          "Controls and governance",
          "Finance capability uplift",
          "Outsourced and augmented finance support"
        ]
      },
      {
        id: "transform",
        pillar: "TRANSFORM",
        title: "Finance Transformation, Data & Technology",
        desc: "Connect people, process, technology and data to improve performance and enable change.",
        image: "/images/finance_transform.jpg",
        iconType: "transform",
        capabilities: [
          "Finance transformation",
          "ERP implementation and optimisation",
          "TechnologyOne",
          "Finance data integration",
          "Data migration",
          "Data models",
          "Reporting architecture",
          "Power BI",
          "Financial analytics",
          "Automation",
          "Process redesign",
          "Systems optimisation",
          "Transformation program support"
        ]
      },
      {
        id: "protect",
        pillar: "PROTECT",
        title: "Tax & Compliance",
        desc: "Professional taxation, bookkeeping and advisory services for individuals and businesses.",
        image: "/images/tax_compliance.jpg",
        iconType: "protect",
        capabilities: [
          "Individual tax returns ($99)",
          "Business taxation",
          "Bookkeeping services",
          "BAS & GST",
          "Payroll & PAYG",
          "Superannuation reviews",
          "FBT",
          "Tax planning & compliance",
          "Compliance Health Checks"
        ]
      }
    ]
  },
  serviceDetailPages: {
    lead: {
      id: "lead",
      pillar: "LEAD",
      title: "CFO & FP&A Advisory",
      tagline: "Strategic financial leadership and performance insight for organisations requiring senior capability, board reporting, and capital optimization.",
      bgImage: "/images/cfo_advisory.jpg",
      iconType: "lead",
      challenges: [
        "Lack of forward-looking financial visibility beyond historical accounting metrics",
        "Need for executive board and investor-ready reporting models",
        "Complex cash flow forecasting and capital allocation decisions",
        "Transitional growth phases requiring interim or fractional CFO expertise"
      ],
      capabilities: [
        { name: "Fractional & Interim CFO Leadership", desc: "Executive financial leadership provided on a flexible, ongoing basis to align strategy with business goals." },
        { name: "FP&A & Financial Modeling", desc: "Driver-based financial modeling, dynamic multi-year forecasting, and scenario analysis." },
        { name: "Board & Stakeholder Reporting", desc: "Creating executive dashboards and performance narratives that translate complex metrics into actionable insights." },
        { name: "Capital & Working Capital Strategy", desc: "Optimizing cash flow management, debt/equity readiness, working capital efficiency, and capital deployment." }
      ],
      methodology: [
        { step: "01", title: "Diagnostic Baseline", desc: "Evaluate existing FP&A processes, metrics, reporting structure, and strategic alignment." },
        { step: "02", title: "Model Architecture", desc: "Engineered driver-based financial models and dynamic forecasting dashboards." },
        { step: "03", title: "Executive Execution", desc: "Lead financial reviews, cash management, investor relations, and board presentations." },
        { step: "04", title: "Capability Transfer", desc: "Train internal finance personnel to sustain long-term operational excellence." }
      ],
      outcomes: [
        { metric: "100%", label: "Board & Investor Clarity" },
        { metric: "40%", label: "Faster Forecasting Cycles" },
        { metric: "3.5x", label: "Average Capital Allocation ROI" }
      ]
    },
    build: {
      id: "build",
      pillar: "BUILD",
      title: "Finance Functions & Operating Models",
      tagline: "Build a high-performing finance function with the right people, processes, governance, and operating structures.",
      bgImage: "/images/finance_build.jpg",
      iconType: "build",
      challenges: [
        "Inefficient manual workflows and delayed month-end close schedules",
        "Unclear role definitions, matrix responsibilities, and team capacity constraints",
        "Inconsistent financial controls, policy gaps, and compliance exposure",
        "Legacy processes failing to keep pace with organizational expansion"
      ],
      capabilities: [
        { name: "Finance Operating Model Design", desc: "Structuring finance team capabilities, service level targets, and matrices aligned to strategic growth." },
        { name: "Month-End Close Optimization", desc: "Streamlining financial close schedules from weeks to days using standardized checklists and workflow triggers." },
        { name: "Process Standardization & SOPs", desc: "Documenting rigorous standard operating procedures across AP, AR, general ledger, and payroll." },
        { name: "Governance & Internal Control Frameworks", desc: "Establishing risk mitigation protocols, segregation of duties, delegation of authority matrices, and policy compliance." }
      ],
      methodology: [
        { step: "01", title: "Workflow Mapping", desc: "Document end-to-end finance processes and pin-point operational bottlenecks." },
        { step: "02", title: "Target Model Blueprint", desc: "Design an agile, scalable operating model with defined governance structures." },
        { step: "03", title: "Standardized Rollout", desc: "Deploy optimized SOPs, close schedules, controls, and team role frameworks." },
        { step: "04", title: "Performance Benchmarking", desc: "Track performance metrics across close velocity, accuracy, and team productivity." }
      ],
      outcomes: [
        { metric: "50%", label: "Faster Month-End Close" },
        { metric: "100%", label: "Control Framework Compliance" },
        { metric: "2.5x", label: "Operational Productivity Gain" }
      ]
    },
    transform: {
      id: "transform",
      pillar: "TRANSFORM",
      title: "Finance Transformation, Data & Technology",
      tagline: "Connect people, process, technology, and data to elevate performance, automate workflows, and drive digital transformation.",
      bgImage: "/images/finance_transform.jpg",
      iconType: "transform",
      challenges: [
        "Siloed financial and operational datasets spread across disparate software systems",
        "Over-reliance on fragile, manual spreadsheet workarounds and human errors",
        "Inability to generate real-time executive BI dashboards and automated metrics",
        "Friction during enterprise cloud software migrations and system integrations"
      ],
      capabilities: [
        { name: "ERP & Financial System Selection", desc: "Independent evaluation, selection, architecture design, and implementation management for cloud financial software." },
        { name: "Business Intelligence & BI Analytics", desc: "Building automated data pipelines, executive scorecards, PowerBI dashboards, and real-time telemetry." },
        { name: "Data Architecture & Integration", desc: "Connecting multi-entity financial, CRM, billing, and operational data stores into a single source of truth." },
        { name: "Digital Process Automation", desc: "Automating accounts payable, invoice processing, expense management, reconciliations, and reporting flows." }
      ],
      methodology: [
        { step: "01", title: "Architecture Audit", desc: "Evaluate existing systems, integrations, manual workarounds, and data hygiene." },
        { step: "02", title: "Transformation Roadmap", desc: "Define target digital architecture, software selection, and integration specs." },
        { step: "03", title: "System Build & Pipeline", desc: "Configure software, construct automated data pipelines, and migrate datasets." },
        { step: "04", title: "Change Management", desc: "Deliver comprehensive team training, user onboarding, and ongoing optimization." }
      ],
      outcomes: [
        { metric: "80%", label: "Reduction in Manual Data Entry" },
        { metric: "Real-Time", label: "Executive BI Visibility" },
        { metric: "100%", label: "Data Integrity Single Source" }
      ]
    },
    protect: {
      id: "protect",
      pillar: "PROTECT",
      title: "Tax & Compliance",
      tagline: "Build unshakeable financial foundations that mitigate risk, protect assets, and ensure full statutory compliance.",
      bgImage: "/images/tax_compliance.jpg",
      iconType: "protect",
      challenges: [
        "Navigating complex corporate tax statutes, cross-border rules, and changing codes",
        "Risk of regulatory audit exposure, penalties, or compliance filing delays",
        "Absence of proactive tax structuring during corporate restructuring or capital events",
        "Governance oversight gaps in statutory financial statement preparation"
      ],
      capabilities: [
        { name: "Corporate Tax Strategy & Structuring", desc: "Proactive tax planning to optimize corporate tax positions while maintaining absolute statutory compliance." },
        { name: "Statutory Reporting & Filings", desc: "Preparation and audit-proof submission of annual financial statements, tax returns, GST/VAT, and statutory filings." },
        { name: "Audit Readiness & Defense", desc: "Constructing comprehensive audit working papers, managing auditor relationships, and representing clients." },
        { name: "Regulatory Risk & Compliance Assessments", desc: "Periodic health checks across corporate governance, statutory compliance, payroll tax, and regulatory reporting." }
      ],
      methodology: [
        { step: "01", title: "Compliance Review", desc: "Audit historical filings, tax positions, regulatory risks, and governance gaps." },
        { step: "02", title: "Strategy Alignment", desc: "Structure proactive tax planning and compliance schedules tailored to business goals." },
        { step: "03", title: "Statutory Execution", desc: "Prepare rigorous statutory documentation and submit audit-proof filings." },
        { step: "04", title: "Continuous Monitoring", desc: "Maintain ongoing compliance monitoring, statutory updates, and audit defense readiness." }
      ],
      outcomes: [
        { metric: "0", label: "Penalty or Filing Exposure" },
        { metric: "100%", label: "On-Time Compliance Filings" },
        { metric: "Full", label: "Audit Readiness Confidence" }
      ]
    }
  },
  whoWeHelpDetailPages: {
    "growing-businesses": {
      id: "growing-businesses",
      hero: {
        badge: "GROWING BUSINESS SOLUTIONS",
        title: "Growing Businesses",
        tagline: "Financial leadership for organisations ready for their next stage.",
        paragraph1: "Growing businesses often reach a point where traditional accounting is no longer enough. Growth creates opportunity, but it also creates financial complexity. As organisations grow, informal processes, spreadsheets, and traditional accounting struggle to keep pace.",
        paragraph2: "We provide practical finance capability that can grow with your organisation.",
        ctaText: "Start a Conversation",
        bgImage: "/images/growing_businesses.jpg"
      },
      keySolutions: [
        { num: "01", title: "Fractional CFO", desc: "Senior financial leadership tailored to your growth phase." },
        { num: "02", title: "Budgeting & Forecasting", desc: "Build clear financial planning frameworks and predictive rolling models." },
        { num: "03", title: "Cash Flow Visibility", desc: "Gain full transparency over future cash requirements and working capital needs." },
        { num: "04", title: "Management Reporting", desc: "Transform raw operational and financial numbers into decision-ready insights." },
        { num: "05", title: "Financial Modelling", desc: "Model growth scenarios, staffing, pricing, and capital investment requirements." },
        { num: "06", title: "KPIs & Performance Frameworks", desc: "Identify and track the key operational metrics that drive performance." },
        { num: "07", title: "Finance Health Checks", desc: "Conduct structured reviews across people, processes, systems, and controls." },
        { num: "08", title: "Process Improvement & Systems", desc: "Optimize financial workflows and eliminate manual reporting overhead." },
        { num: "09", title: "Tax & Compliance", desc: "Connect compliance obligations directly into broader finance function operations." }
      ],
      flowStages: [
        "Looking backwards",
        "Understanding performance",
        "Predicting the future",
        "Managing performance"
      ]
    },
    "established-corporate": {
      id: "established-corporate",
      hero: {
        badge: "ESTABLISHED & CORPORATE ORGANISATIONS",
        title: "Established & Corporate Organisations",
        tagline: "Specialist finance capability when you need it.",
        paragraph1: "Established organisations often have capable internal finance teams. The challenge isn't always a lack of finance capability; sometimes you need specialist capability for a particular problem, transformation program or period of change.",
        paragraph2: "We work alongside CFOs, Finance Directors, transformation teams, and operational leaders as an extension of your team.",
        ctaText: "Discuss Your Requirement",
        bgImage: "/images/established_corporate.jpg"
      },
      coreSupportAreas: [
        { num: "01", area: "FP&A", desc: "Planning, forecasting, modelling, performance analysis, and business partnering." },
        { num: "02", area: "Target Operating Models", desc: "Current-state assessment, future-state design, organization design, process ownership, service delivery models." },
        { num: "03", area: "Finance Data", desc: "Integration, migration, mapping, data models, reporting datasets." },
        { num: "04", area: "Reporting Architecture", desc: "Management reporting, KPI frameworks, dashboards, Power BI." },
        { num: "05", area: "Finance Transformation", desc: "ERP, TechnologyOne, automation, process redesign, program delivery." },
        { num: "06", area: "Finance Function", desc: "Health checks, capability uplift, operating models, process improvement." }
      ],
      howWeWork: [
        "Specialist advisors offering independent strategic guidance",
        "Transformation partners guiding complex organizational and systems change",
        "Project resources executing high-value finance workstreams",
        "FP&A capability strengthening planning, modelling, and business insight",
        "Independent reviewers assessing finance health, controls, and architecture",
        "Finance transformation specialists driving process redesign and technology adoption"
      ]
    },
    "non-profit-community": {
      id: "non-profit-community",
      hero: {
        badge: "NOT-FOR-PROFIT & COMMUNITY SOLUTIONS",
        title: "Not-for-Profit & Community Organisations",
        tagline: "Financial capability that supports your purpose.",
        paragraph1: "Financial sustainability and community impact are closely connected.",
        paragraph2: "Financial sustainability enables organisations to deliver their purpose with confidence. We help NFP and community organisations understand their financial position, strengthen their finance functions, and make better-informed decisions.",
        ctaText: "Discuss Your NFP's Finance Needs",
        bgImage: "/images/non_profit_community.jpg"
      },
      keySolutions: [
        { num: "01", title: "CFO Advisory & Financial Sustainability" },
        { num: "02", title: "Budgeting & Forecasting" },
        { num: "03", title: "Cash-Flow Management" },
        { num: "04", title: "Board Reporting" },
        { num: "05", title: "Funding and Grant Reporting" },
        { num: "06", title: "NDIS Financial Management" },
        { num: "07", title: "Financial Modelling" },
        { num: "08", title: "Finance Health Checks" },
        { num: "09", title: "Finance Transformation & Reporting Analytics" }
      ],
      keyQuestions: [
        "Are we financially sustainable?",
        "Where are our greatest risks?",
        "Are our programs financially viable?",
        "How much cash do we need?",
        "Are our funding arrangements sustainable?",
        "Does our board have the information it needs?",
        "Is our finance function supporting our purpose?"
      ]
    },
    "local-government": {
      id: "local-government",
      hero: {
        badge: "LOCAL GOVERNMENT SOLUTIONS",
        title: "Local Government / Councils",
        tagline: "Better financial insight for better public outcomes.",
        paragraph1: "Councils operate in complex environments where financial sustainability, planning, governance, and service delivery are closely connected.",
        paragraph2: "We combine finance, transformation, systems, data, and reporting capability to support councils in achieving better public outcomes.",
        ctaText: "Discuss Your Council's Finance Challenge",
        bgImage: "/images/local_government.jpg"
      },
      keySolutions: [
        { num: "01", title: "Budgeting & Long-Term Financial Planning" },
        { num: "02", title: "FP&A & Financial Modelling" },
        { num: "03", title: "Forecasting & Management Reporting" },
        { num: "04", title: "TechnologyOne Optimisation" },
        { num: "05", title: "Finance Transformation" },
        { num: "06", title: "Data, BI & Reporting Architecture" },
        { num: "07", title: "Process Improvement & Capability Uplift" }
      ],
      healthCheckDimensions: [
        "People",
        "Processes",
        "Systems",
        "Data",
        "Reporting",
        "Controls"
      ]
    }
  },
  whoWeHelp: {
    heading: "Who We Help",
    subtitle: "We work with organisations at every stage of their journey.",
    exploreAllText: "Explore All →",
    items: [
      {
        id: "growing-businesses",
        title: "Growing Businesses",
        desc: "When growth creates financial complexity.",
        image: "/images/growing_businesses.jpg",
        focusAreas: [
          "Fractional CFO",
          "Forecasting & Cash Flow",
          "Financial Modelling",
          "Health Checks"
        ]
      },
      {
        id: "established-corporate",
        title: "Established & Corporate",
        desc: "Specialist finance capability when you need it.",
        image: "/images/established_corporate.jpg",
        focusAreas: [
          "FP&A & Modelling",
          "Target Operating Models",
          "Power BI & Analytics",
          "ERP & TechOne"
        ]
      },
      {
        id: "non-profit-community",
        title: "Not-for-Profit & Community",
        desc: "Financial capability that supports your purpose.",
        image: "/images/non_profit_community.jpg",
        focusAreas: [
          "CFO Advisory",
          "Funding & Grants",
          "NDIS Management",
          "Board Reporting"
        ]
      },
      {
        id: "local-government",
        title: "Local Government",
        desc: "Better financial insight for better public outcomes.",
        image: "/images/local_government.jpg",
        focusAreas: [
          "Budgeting & LTFS",
          "Financial Modelling",
          "TechnologyOne & BI",
          "Health Checks"
        ]
      }
    ]
  },
  insightsData: {
    title: "Executive Insights & Industry Thought Leadership",
    subtitle: "Expert articles, FP&A whitepapers, case studies, and corporate finance research.",
    articles: [
      {
        id: "a1",
        title: "Beyond the Spreadsheet: Modernizing FP&A for Mid-Market Enterprises",
        category: "FP&A Advisory",
        date: "September 2025",
        readTime: "5 min read",
        summary: "How finance leaders are shifting from historical reporting to driver-based predictive forecasting.",
        synopsis: "Modernizing FP&A transforms finance from a backward-looking compliance function into a strategic growth driver. High-growth enterprises that automate forecast modeling achieve 3.5x higher capital allocation ROI.",
        author: "EVOLVE Senior Advisory Board",
        image: "/images/cfo_advisory.jpg",
        chapters: [
          {
            title: "The Shift Towards Predictive Financial Leadership",
            content: "In today's fast-evolving business landscape, mid-market organizations can no longer rely purely on backward-looking accounting data to drive capital allocation and growth strategies. Forward-thinking CFOs are adopting driver-based financial modeling and integrated FP&A processes to anticipate market shifts before they impact cash runway.\n\nTraditional month-end accounting cycles often take 10 to 15 business days, leaving executive leadership with outdated telemetry when making critical investment and operational decisions. Modernizing the finance operating model bridges this gap, establishing automated data flows and continuous scenario analysis."
          },
          {
            title: "Four Core Pillars of FP&A Modernization",
            content: "Modernizing the finance operating model requires aligning people, process, technology, and executive governance into a single continuous delivery system.\n\nBy replacing manual spreadsheet consolidations with centralized cloud data repositories, management teams gain immediate clarity over rolling 12-month forecasts, departmental budget variances, and working capital sensitivities."
          },
          {
            title: "Implementation Roadmap for Finance Leaders",
            content: "Executing a successful finance transformation requires balancing immediate operational fixes with long-term target operating model design. EVOLVE Senior Advisory partners directly with executive teams to deploy tailored solutions across a structured 4-phase delivery framework.\n\nThrough hands-on executive guidance, we assist leadership in defining key performance indicators, automating board reporting dashboards, and building in-house capability that lasts."
          }
        ],
        quotePullout: "High-growth enterprises that automate their data pipelines reduce close cycles by 60% and improve forecasting accuracy by over 3.5x.",
        pillars: [
          { step: "01", title: "Single Source of Truth", desc: "Consolidating fragmented ERP, CRM, and accounting feeds into unified cloud data warehouses." },
          { step: "02", title: "Dynamic Scenario Modeling", desc: "Simulating revenue sensitivities, headcount ramp rates, and inflation impact in real time." },
          { step: "03", title: "3-Day Close Automation", desc: "Automating month-end journal postings and variance analysis checklists." },
          { step: "04", title: "Board Storytelling", desc: "Translating complex financial metrics into executive narratives for board decision making." }
        ]
      },
      {
        id: "a2",
        title: "Closing the Book in 3 Days: A Blueprint for Finance Function Efficiency",
        category: "Operating Models",
        date: "August 2025",
        readTime: "7 min read",
        summary: "Standardizing SOPs, checklists, and close workflows to cut month-end close cycle times in half.",
        synopsis: "Delayed month-end closes create executive blind spots. Standardizing SOP workflows and automating reconciliation triggers allows finance teams to close the books in 3 to 5 business days.",
        author: "EVOLVE Senior Advisory Board",
        image: "/images/finance_build.jpg",
        chapters: [
          {
            title: "Eliminating Month-End Close Bottlenecks",
            content: "When month-end financial closes stretch beyond 10 business days, management teams operate without current financial data for half of every month. Identifying systemic bottlenecks in journal entries, intercompany reconciliations, and accrual estimates is the first step toward velocity.\n\nMost financial delays stem from manual spreadsheet hand-offs, missing vendor invoices, and undefined approval chains. Eliminating these friction points requires structured workflow mapping."
          },
          {
            title: "Standardizing Close Workflows & Governance SOPs",
            content: "By creating explicit Standard Operating Procedures (SOPs) with clear team ownership matrices and automated task triggers, finance departments eliminate redundant back-and-forth reviews.\n\nDeploying standardized close management software provides real-time visibility into task completion status, ensuring control compliance without sacrificing velocity."
          },
          {
            title: "Sustaining High-Speed Close Performance",
            content: "Maintaining a 3-day close requires continuous process benchmarking, post-close retrospective reviews, and ongoing team training to ensure governance standards remain rigorous as the business scales.\n\nWith a streamlined close schedule, finance teams shift 40% of their operational bandwidth from manual data entry to forward-looking advisory."
          }
        ],
        quotePullout: "A 3-day month-end close schedule frees up over 40% of finance team capacity for strategic FP&A advisory.",
        pillars: [
          { step: "01", title: "Process Bottleneck Audit", desc: "Mapping current close schedules and identifying manual delay points." },
          { step: "02", title: "Standardized SOP Manuals", desc: "Publishing step-by-step close SOPs across general ledger, AP, AR, and payroll." },
          { step: "03", title: "Automated Reconciliation", desc: "Deploying automated matching triggers for bank feeds and GL accounts." },
          { step: "04", title: "Close Velocity Scorecards", desc: "Tracking day-by-day close milestones and variance reporting." }
        ]
      },
      {
        id: "a3",
        title: "Unifying Disparate ERP Data into Real-Time PowerBI Analytics",
        category: "Data & Tech",
        date: "July 2025",
        readTime: "6 min read",
        summary: "Architecting a single source of truth for multi-entity corporate decision makers.",
        synopsis: "Fragmented ERP software and manual Excel consolidations increase data error risks. Unified data pipelines and automated PowerBI feeds deliver instant multi-entity executive visibility.",
        author: "EVOLVE Senior Advisory Board",
        image: "/images/finance_transform.jpg",
        chapters: [
          {
            title: "Overcoming Multi-Entity Data Silos",
            content: "As corporations expand through organic growth or M&A, finance departments often find themselves managing multiple ERP systems, currency conversions, and chart of accounts structures. Establishing an automated single source of truth eliminates manual consolidation errors.\n\nWithout unified data pipelines, executive decision makers spend valuable time debating figure accuracy rather than evaluating strategic growth options."
          },
          {
            title: "Architecting Automated PowerBI Executive Dashboards",
            content: "Connecting cloud financial APIs directly to PowerBI data models allows executive teams to inspect real-time margin trends, working capital burn, and division performance on mobile and desktop devices.\n\nInteractive drill-down features enable board members to examine high-level revenue summaries down to transactional line items in seconds."
          },
          {
            title: "Data Governance & Single Source Integrity",
            content: "Enforcing strict data architecture governance ensures that every financial dashboard metric reconciles 100% to audited general ledger balances.\n\nContinuous automated audit checks prevent data drift and maintain executive confidence across all reporting channels."
          }
        ],
        quotePullout: "Real-time PowerBI financial feeds eliminate over 20 hours per week of manual spreadsheet aggregation.",
        pillars: [
          { step: "01", title: "Data Pipeline Integration", desc: "Automating API feeds from ERP, CRM, and payroll into cloud data warehouses." },
          { step: "02", title: "Unified Chart of Accounts", desc: "Harmonizing multi-entity financial structures for instant consolidation." },
          { step: "03", title: "Executive PowerBI Suites", desc: "Building interactive mobile and desktop dashboards for executive leaders." },
          { step: "04", title: "GL Reconciliation Checks", desc: "Automating 100% data validation checks between BI dashboards and ledger balances." }
        ]
      }
    ]
  },
  aboutData: {
    title: "About EVOLVE Corporate & Business Solutions",
    subtitle: "Empowering organisations through specialist financial leadership, operating capability, and strategic insight.",
    mission: "To partner with leadership teams to turn financial complexity into clear strategic direction, scalable capability, and lasting value.",
    heroBg: "/images/established_corporate.jpg",
    stats: [
      { label: "Combined CFO Leadership", val: "20+ Yrs" },
      { label: "Capital & Advisory Scope", val: "$2.5B+" },
      { label: "Month-End Close Target", val: "3-5 Days" },
      { label: "Client Board Satisfaction", val: "99.8%" }
    ],
    storyTitle: "Our Strategic Philosophy & Leadership Approach",
    storyParagraphs: [
      "EVOLVE Corporate & Business Solutions was founded on a simple premise: modern mid-market enterprises, growing companies, not-for-profits, and public sector organizations require senior executive CFO capability without the rigid overhead of traditional corporate structures.",
      "Rather than delivering theoretical advisory decks and stepping away, EVOLVE partners directly inside executive leadership teams. We roll up our sleeves to modernize financial reporting pipelines, design high-velocity operating models, and enforce governance frameworks that protect long-term capital."
    ],
    values: [
      {
        title: "Clarity",
        tag: "Executive Visibility",
        desc: "Translating complex multi-entity financial data into plain, actionable board stories and real-time PowerBI dashboards.",
        image: "/images/cfo_advisory.jpg"
      },
      {
        title: "Capability",
        tag: "Hands-On Build",
        desc: "We don't just advise; we embed alongside your internal teams to design scalable SOPs and build enduring in-house financial strength.",
        image: "/images/finance_build.jpg"
      },
      {
        title: "Independence",
        tag: "Unbiased Guidance",
        desc: "Unbiased, objective guidance focused purely on your organization's fiscal health, capital allocation, and long-term valuation.",
        image: "/images/why_independent.jpg"
      }
    ],
    leadership: [
      {
        name: "Senior Partner Advisory Board",
        role: "Strategic Executive CFOs",
        bio: "Former Enterprise CFOs and transformation specialists delivering hands-on governance, capital allocation, and FP&A oversight.",
        image: "/images/about_team.jpg"
      },
      {
        name: "Finance Transformation Practice",
        role: "Data & Systems Capability",
        bio: "Pioneering cloud ERP architecture, automated PowerBI pipelines, and digital process automation frameworks.",
        image: "/images/finance_transform.jpg"
      },
      {
        name: "Governance & Compliance Desk",
        role: "Tax & Risk Management",
        bio: "Ensuring 100% statutory compliance, NFP grant acquittal transparency, and local government long-term financial modeling.",
        image: "/images/tax_compliance.jpg"
      }
    ],
    whyUsPillars: [
      {
        title: "Senior Executive Experience",
        subtitle: "Direct CFO Partnership",
        desc: "Work directly with seasoned executives who have led complex corporate, public sector, and mid-market finances.",
        image: "/images/why_experience.jpg"
      },
      {
        title: "Execution-Driven Model",
        subtitle: "Implementation Focus",
        desc: "We deploy standardized close checklists and automated workflow models that build long-term internal strength.",
        image: "/images/approach_deliver.jpg",
        points: [
          { title: "Hands-on Implementation", desc: "Embedding alongside your team to lead program delivery and technical rollout." },
          { title: "Change Adoption", desc: "Standardizing workflows with playbooks, SOPs, and cross-functional training." },
          { title: "Capability Transfer", desc: "Upskilling internal personnel to ensure sustained operational success without dependency." }
        ]
      },
      {
        title: "Practical & High Impact",
        subtitle: "Rapid Time-to-Value",
        desc: "Identify immediate high-impact quick wins within the first 30 days while constructing target operating models.",
        image: "/images/why_practical.jpg"
      },
      {
        title: "Flexible Engagement Scope",
        subtitle: "Scalable Advisory",
        desc: "Scale capability dynamically as your organisation expands, acquires, restructures, or modernizes systems.",
        image: "/images/why_flexible.jpg"
      }
    ]
  },
  contactData: {
    eyebrow: "DIRECT EXECUTIVE ENGAGEMENT",
    title: "Contact",
    subtitle: "Let's talk about what your organisation needs next.",
    introLead: "You may know exactly what support you need. Or you may simply know that finance, reporting, systems, compliance or organisational change isn't working as well as it should.",
    introSublead: "Either way, let's start with a conversation.",
    introText: "Tell us a little about your organisation, the challenge you are facing and what you are looking to achieve. We'll help determine where Evolve can add value.",
    phone: "+61 2 9000 0000",
    email: "enquiries@evolvecorporate.com.au",
    hours: "Monday – Friday: 8:30 AM – 5:30 PM AEST",
    confidentialityNotice: "Confidential Consultation with Senior Advisory Specialists",
    offices: [
      {
        city: "Sydney (Principal Office)",
        address: "Level 28, 200 George Street, Sydney NSW 2000",
        phone: "+61 2 9000 0000",
        email: "sydney@evolvecorporate.com.au",
        isPrimary: true
      },
      {
        city: "Melbourne",
        address: "Level 14, 333 Collins Street, Melbourne VIC 3000",
        phone: "+61 3 9000 0000",
        email: "melbourne@evolvecorporate.com.au",
        isPrimary: false
      },
      {
        city: "Brisbane",
        address: "Level 21, 345 Queen Street, Brisbane QLD 4000",
        phone: "+61 7 3000 0000",
        email: "brisbane@evolvecorporate.com.au",
        isPrimary: false
      }
    ]
  },
  socialLinks: {
    linkedin: "https://www.linkedin.com/company/evolve-corporate-and-business-solutions",
    youtube: "https://youtube.com/@evolvecorporate",
    twitter: ""
  },
  brandSettings: {
    mainLogoDark: "/Logo/evolve-corporate-business-solutions-white.svg",
    mainLogoLight: "/Logo/evolve-corporate-business-solutions.svg",
    taxLogoDark: "/Logo/evolve-taxation-advisory.svg"
  },
        pillarPagesData: {
    lead: {
      hero: {
        badge: "BRAND PILLAR: LEAD",
        title: "CFO & FP&A Advisory",
        tagline: "Financial leadership when you need it.",
        paragraph1: "Organisations don't always need another accountant. Sometimes they need someone who can step back from the numbers, understand the bigger picture and help leadership make better decisions.",
        paragraph2: "We provide CFO and FP&A capability for organisations that need greater financial clarity, stronger planning or additional senior finance expertise.",
        ctaText: "Start a CFO Conversation",
        bgImage: "/images/cfo_advisory.jpg"
      },
      beyondQuestions: [
        { num: "01", question: "What is driving our performance?" },
        { num: "02", question: "Where are we heading?" },
        { num: "03", question: "Do we have enough cash?" },
        { num: "04", question: "What risks are emerging?" },
        { num: "05", question: "Can we afford the next investment?" },
        { num: "06", question: "Which areas are performing?" },
        { num: "07", question: "What happens if our assumptions change?" },
        { num: "08", question: "What should management focus on next?" }
      ],
      cfoServices: [
        {
          id: "strategy",
          title: "Financial Strategy",
          desc: "Translate strategic objectives into practical financial plans.",
          category: "strategy",
          categoryLabel: "Strategy & Capital",
          image: "/images/cfo_advisory.jpg"
        },
        {
          id: "budgeting",
          title: "Budgeting & Forecasting",
          desc: "Build budgets and rolling forecasts that support decision-making.",
          category: "planning",
          categoryLabel: "Planning & Liquidity",
          image: "/images/cap_module_1.jpg"
        },
        {
          id: "cash-flow",
          title: "Cash Flow & Working Capital",
          desc: "Improve visibility and control over liquidity and capital requirements.",
          category: "planning",
          categoryLabel: "Planning & Liquidity",
          image: "/images/cap_module_2.jpg"
        },
        {
          id: "board-reporting",
          title: "Board & Stakeholder Reporting",
          desc: "Provide clear, insightful financial reporting for leadership and boards.",
          category: "reporting",
          categoryLabel: "Reporting & Governance",
          image: "/images/step_leadership.jpg"
        },
        {
          id: "modelling",
          title: "Financial Modelling & Decision Support",
          desc: "Model scenarios, capital investments and commercial opportunities.",
          category: "strategy",
          categoryLabel: "Strategy & Capital",
          image: "/images/finance_transform.jpg"
        },
        {
          id: "governance",
          title: "Governance & Financial Control",
          desc: "Strengthen oversight, financial discipline and internal processes.",
          category: "reporting",
          categoryLabel: "Reporting & Governance",
          image: "/images/cap_module_3.jpg"
        },
        {
          id: "interim",
          title: "Interim CFO & Leadership Cover",
          desc: "Provide senior capability during growth, transition or recruitment.",
          category: "partnering",
          categoryLabel: "Performance & Partnering",
          image: "/images/why_experience.jpg"
        },
        {
          id: "partnering",
          title: "Business Partnering",
          desc: "Connect financial outcomes with operational decisions.",
          category: "partnering",
          categoryLabel: "Performance & Partnering",
          image: "/images/finance_meeting.jpg"
        }
      ],
      triggerPoints: [
        "Reports tell you what happened but not why.",
        "Cash flow is becoming harder to predict.",
        "Your business is growing faster than your finance function.",
        "Your board wants better financial insight.",
        "You are making significant investment decisions.",
        "Your finance team needs senior-level support.",
        "You want greater confidence in your forecasts."
      ]
    },
    build: {
      hero: {
        badge: "BRAND PILLAR: BUILD",
        title: "Finance Functions & Operating Models",
        tagline: "Build a finance function that supports the organisation.",
        paragraph1: "A strong finance function provides more than accurate transactions.",
        paragraph2: "It provides reliable information, efficient processes, effective controls and insight for decision-making. We help organisations assess, design and improve their finance functions.",
        ctaText: "Request a Finance Health Check",
        bgImage: "/images/finance_build.jpg"
      },
      healthCheckDimensions: [
        {
          id: "people",
          num: "01",
          name: "People",
          color: "#6366f1",
          bgLight: "bg-indigo-50 border-indigo-200 text-indigo-700",
          accentBg: "bg-indigo-600",
          accentText: "text-indigo-600",
          items: [
            "Capability",
            "Capacity",
            "Roles and responsibilities",
            "Leadership",
            "Business partnering"
          ]
        },
        {
          id: "processes",
          num: "02",
          name: "Processes",
          color: "#007791",
          bgLight: "bg-teal-50 border-teal-200 text-[#007791]",
          accentBg: "bg-[#007791]",
          accentText: "text-[#007791]",
          items: [
            "Month-end",
            "Procure-to-pay",
            "Order-to-cash",
            "Reconciliations",
            "Reporting",
            "Forecasting"
          ]
        },
        {
          id: "systems",
          num: "03",
          name: "Systems",
          color: "#0ea5e9",
          bgLight: "bg-sky-50 border-sky-200 text-sky-700",
          accentBg: "bg-sky-600",
          accentText: "text-sky-600",
          items: [
            "ERP utilisation",
            "System configuration",
            "Integration",
            "Automation",
            "Data quality"
          ]
        },
        {
          id: "reporting",
          num: "04",
          name: "Reporting",
          color: "#10b981",
          bgLight: "bg-emerald-50 border-emerald-200 text-emerald-700",
          accentBg: "bg-emerald-600",
          accentText: "text-emerald-600",
          items: [
            "Management reporting",
            "Board reporting",
            "KPIs",
            "Budget reporting",
            "Forecasting"
          ]
        },
        {
          id: "controls",
          num: "05",
          name: "Controls & Governance",
          color: "#f59e0b",
          bgLight: "bg-amber-50 border-amber-200 text-amber-700",
          accentBg: "bg-amber-600",
          accentText: "text-amber-600",
          items: [
            "Financial controls",
            "Reconciliations",
            "Delegations",
            "Compliance",
            "Risk"
          ]
        }
      ],
      tomSupportItems: [
        "Current-state assessment",
        "Future-state design",
        "Finance organisation design",
        "Roles and responsibilities",
        "Service delivery models",
        "Process ownership",
        "Governance",
        "Technology requirements",
        "Capability requirements",
        "Implementation planning"
      ]
    },
    transform: {
      hero: {
        badge: "BRAND PILLAR: TRANSFORM",
        title: "Finance Transformation, Data & Technology",
        tagline: "Connect people, process, technology and data.",
        paragraph1: "Technology alone does not transform finance. Transformation succeeds when systems, processes, data and people work together to create measurable improvement.",
        paragraph2: "Technology should make finance better — simpler, faster, more reliable, and more insightful.",
        ctaText: "Discuss a Transformation Requirement",
        bgImage: "/images/finance_transform.jpg"
      },
      services: [
        { num: "01", title: "Transformation strategy", scope: "Strategic roadmap & digital operating model alignment", deliverable: "Target architecture & phased investment plan" },
        { num: "02", title: "Current-state assessment", scope: "Systems diagnostic & process gap analysis", deliverable: "Capability heatmap & risk register" },
        { num: "03", title: "Future-state design", scope: "Target operating model & automated workflows", deliverable: "Future-state process blueprints & role profiles" },
        { num: "04", title: "Process redesign", scope: "Cycle velocity & workflow standardization", deliverable: "Streamlined SOPs & approval matrices" },
        { num: "05", title: "ERP implementation and optimisation", scope: "Core ERP configuration & performance tuning", deliverable: "General ledger & subledger alignment" },
        { num: "06", title: "Automation", scope: "Rules-based automated reconciliation pipelines", deliverable: "Exception tracking & automated data loads" },
        { num: "07", title: "Reporting transformation", scope: "Self-service BI models & management dashboards", deliverable: "Unified executive financial telemetry" },
        { num: "08", title: "Finance capability uplift", scope: "Skills transition to commercial partnering", deliverable: "Upskilling framework & decision playbooks" },
        { num: "09", title: "Transformation program support", scope: "Program governance & risk mitigation", deliverable: "PMO leadership & milestone assurance" }
      ],
      dataIntegrationItems: [
        "Data mapping",
        "Migration",
        "Data structures",
        "Data models",
        "Chart of Accounts",
        "System integration",
        "Data quality",
        "Reporting datasets"
      ],
      transformationTriggers: [
        "Finance relies heavily on spreadsheets.",
        "Reporting is highly manual.",
        "Your ERP is not delivering expected benefits.",
        "Different systems produce inconsistent information.",
        "Data is difficult to reconcile.",
        "Management lacks timely insight.",
        "Processes haven't kept pace with organizational growth.",
        "You are implementing a new ERP.",
        "Your finance team spends too much time processing and too little time analysing."
      ]
    },
    protect: {
      hero: {
        badge: "BRAND PILLAR: PROTECT",
        title: "Tax & Compliance",
        tagline: "Strong financial foundations provide confidence.",
        paragraph1: "Tax and compliance are fundamental to a well-managed organisation. We provide practical tax and compliance support while connecting compliance with the broader finance function.",
        paragraph2: "When financial information, systems, processes and compliance obligations work together, organisations have greater confidence in the numbers.",
        ctaText: "Request a Compliance Health Check",
        bgImage: "/images/tax_compliance.jpg"
      },
      coreServices: [
        {
          id: "business-taxation",
          title: "Business Taxation",
          advisorRole: "Corporate Tax Lead",
          advisorDesc: "Specialized corporate tax planning, group structures, and statutory compliance across mid-market enterprises.",
          character: "/images/character_advisor.png",
          characterAlt: "Corporate Tax Strategy Lead",
          items: [
            "Company tax",
            "Trust taxation",
            "Partnership taxation",
            "Tax compliance",
            "Tax planning",
            "Financial information supporting tax obligations"
          ]
        },
        {
          id: "bas-gst",
          title: "BAS & GST",
          advisorRole: "Indirect Tax & BAS Specialist",
          advisorDesc: "Accurate monthly & quarterly BAS lodging, detailed GST classification reviews, and reconciliations.",
          character: "/images/scale_cfo_executive.png",
          characterAlt: "Indirect Tax & BAS Specialist",
          items: [
            "BAS preparation",
            "GST reviews",
            "GST coding reviews",
            "GST reconciliations",
            "Transaction reviews",
            "Process improvement"
          ]
        },
        {
          id: "payroll-super",
          title: "Payroll, PAYG & Superannuation",
          advisorRole: "Payroll & Employment Taxes Lead",
          advisorDesc: "Mitigating workforce compliance risk with rigorous general ledger ties, PAYG withholding, and super audits.",
          character: "/images/cfo_cartoon_character.png",
          characterAlt: "Payroll Compliance & Superannuation Director",
          items: [
            "PAYG withholding",
            "Superannuation reviews",
            "Payroll compliance reviews",
            "Pay component reviews",
            "Payroll-to-general-ledger reconciliation",
            "Process reviews"
          ]
        },
        {
          id: "fbt",
          title: "Fringe Benefits Tax (FBT)",
          advisorRole: "FBT & Remuneration Lead",
          advisorDesc: "Comprehensive benefit calculations, statutory return preparation, and ongoing salary packaging advice.",
          character: "/images/character_female_lead.png",
          characterAlt: "FBT & Remuneration Advisor",
          items: [
            "FBT reviews",
            "Calculations",
            "Return preparation",
            "Process reviews",
            "Identification of potential FBT issues"
          ]
        }
      ],
      healthCheckStages: [
        "GST",
        "BAS",
        "PAYG",
        "Payroll",
        "Superannuation",
        "FBT",
        "Tax",
        "Reconciliations",
        "Records"
      ]
    }
  },
  ctaBanner: {
    tag: "LET'S MOVE FORWARD",
    title: "Have a finance, transformation or compliance challenge?",
    subtitle: "We're here to help. Start a conversation and let's explore how we can support your goals.",
    buttonText: "Start a Conversation →",
    bgImage: "/images/hero_summit.jpg"
  },
  footer: {
    copyright: "© 2025 Evolve Corporate & Business Solutions. All rights reserved.",
    links: ["Privacy Policy", "Terms"]
  }
};
