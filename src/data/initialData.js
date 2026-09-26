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
    bgImage: "/images/hero_summit.jpg"
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
    heading: "From numbers to better decisions",
    steps: [
      {
        id: "step1",
        title: "NUMBERS",
        desc: "Tell you what happened.",
        icon: "BarChart3"
      },
      {
        id: "step2",
        title: "INSIGHT",
        desc: "Tells you why.",
        icon: "Lightbulb"
      },
      {
        id: "step3",
        title: "LEADERSHIP",
        desc: "Determines what happens next.",
        icon: "Users"
      }
    ]
  },
  approachAndWhyUs: {
    approachTitle: "Our approach",
    approachSubtitle: "How we work",
    approachSteps: [
      {
        num: "01",
        title: "Understand",
        desc: "We start with the organisation, not the solution. We understand your objectives, challenges, operating environment and current capability.",
        image: "/images/approach_understand.jpg"
      },
      {
        num: "02",
        title: "Diagnose",
        desc: "We identify what is working, what is not and where the greatest opportunities exist.",
        image: "/images/approach_diagnose.jpg"
      },
      {
        num: "03",
        title: "Design",
        desc: "We develop a practical solution that aligns people, processes, systems, data and financial objectives.",
        image: "/images/approach_design.jpg"
      },
      {
        num: "04",
        title: "Deliver",
        desc: "We don't stop at recommendations. Where required, we work alongside your team to implement the solution and build sustainable capability.",
        image: "/images/approach_deliver.jpg"
      }
    ],
    whyUsTitle: "Why us?",
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
        iconType: "lead"
      },
      {
        id: "build",
        pillar: "BUILD",
        title: "Finance Functions & Operating Models",
        desc: "Build a finance function that supports the organisation with the right people, processes, systems and governance.",
        image: "/images/finance_build.jpg",
        iconType: "build"
      },
      {
        id: "transform",
        pillar: "TRANSFORM",
        title: "Finance Transformation, Data & Technology",
        desc: "Connect people, process, technology and data to improve performance and enable change.",
        image: "/images/finance_transform.jpg",
        iconType: "transform"
      },
      {
        id: "protect",
        pillar: "PROTECT",
        title: "Tax & Compliance",
        desc: "Strong financial foundations provide confidence and ensure your organisation meets its obligations.",
        image: "/images/tax_compliance.jpg",
        iconType: "protect"
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
      title: "Growing Businesses",
      subtitle: "When growth creates financial complexity.",
      tagline: "Specialist financial leadership, scalable operating models, and FP&A insight tailored for fast-scaling mid-market enterprises.",
      bgImage: "/images/growing_businesses.jpg",
      challenges: [
        "Outgrowing basic accounting software and manual spreadsheets",
        "Managing cash flow burn while scaling operations and inventory",
        "Need for investor and lender-ready financial presentations",
        "Structuring finance team roles without heavy permanent overhead"
      ],
      solutions: [
        "Fractional CFO & Growth Strategy",
        "Driver-Based Financial Forecasting",
        "Working Capital & Burn Management",
        "Scalable ERP System Selection"
      ]
    },
    "established-corporate": {
      id: "established-corporate",
      title: "Established & Corporate",
      subtitle: "Specialist finance capability when you need it.",
      tagline: "Unlocking corporate performance, business intelligence automation, governance defense, and enterprise transformation.",
      bgImage: "/images/established_corporate.jpg",
      challenges: [
        "Complex multi-entity financial consolidation and reporting friction",
        "Legacy technology debt impeding real-time executive decision-making",
        "Internal capacity bottlenecks during major acquisitions or restructuring",
        "Enhancing board reporting governance and risk controls"
      ],
      solutions: [
        "Multi-Entity Finance Operating Models",
        "PowerBI Data & Analytics Pipelines",
        "M&A Financial Integration Support",
        "Corporate Governance & Internal Controls"
      ]
    },
    "non-profit-community": {
      id: "non-profit-community",
      title: "Not-for-Profit & Community",
      subtitle: "Financial capability that supports your purpose.",
      tagline: "Purpose-driven financial stewardship, grant acquittals, fund accounting, and board governance transparency.",
      bgImage: "/images/non_profit_community.jpg",
      challenges: [
        "Managing tied and untied grant funding streams accurately",
        "Demonstrating transparent financial stewardship to boards and donors",
        "Navigating complex NFP tax exemptions and statutory reporting",
        "Balancing mission delivery with long-term fiscal sustainability"
      ],
      solutions: [
        "NFP Fund Accounting & Grant Management",
        "Board Financial Visibility & Governance",
        "Cost Allocation & Program Profitability",
        "Audit Preparation & Statutory Filings"
      ]
    },
    "local-government": {
      id: "local-government",
      title: "Local Government & Public Sector",
      subtitle: "Better financial insight for better public outcomes.",
      tagline: "Public sector financial management, long-term asset planning, rate-setting analytics, and community transparency.",
      bgImage: "/images/local_government.jpg",
      challenges: [
        "Long-term financial planning across municipal infrastructure assets",
        "Meeting statutory local government reporting frameworks and audits",
        "Optimizing rate setting and public service budget allocations",
        "Modernizing legacy civic software and financial systems"
      ],
      solutions: [
        "Long-Term Financial Strategy (LTFS)",
        "Civic Asset & Capital Works Financial Modeling",
        "Statutory Annual Financial Statements",
        "Public Finance Transformation & Training"
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
        image: "/images/growing_businesses.jpg"
      },
      {
        id: "established-corporate",
        title: "Established & Corporate",
        desc: "Specialist finance capability when you need it.",
        image: "/images/established_corporate.jpg"
      },
      {
        id: "non-profit-community",
        title: "Not-for-Profit & Community",
        desc: "Financial capability that supports your purpose.",
        image: "/images/non_profit_community.jpg"
      },
      {
        id: "local-government",
        title: "Local Government",
        desc: "Better financial insight for better public outcomes.",
        image: "/images/local_government.jpg"
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
        image: "/images/approach_deliver.jpg"
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
    title: "Contact Our Advisory Team",
    subtitle: "We're here to help. Reach out to discuss how we can support your financial, transformation, or compliance goals.",
    offices: [
      { city: "Corporate Headquarters", address: "Financial District Executive Tower", phone: "+1 (800) 555-EVOLVE", email: "advisory@evolve.com" }
    ]
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
