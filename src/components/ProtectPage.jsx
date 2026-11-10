import React, { useState, useEffect } from 'react';
import { 
  ArrowRight,
  ChevronDown, 
  Building2, 
  Receipt, 
  Users, 
  Gift, 
  Check, 
  ShieldCheck, 
  FileText, 
  Calculator, 
  X,
  Info,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  MessageSquare,
  Award
} from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';
import { CapabilityNavigatorSection } from './CapabilityNavigatorSection';
import { ProtectHero } from './ProtectHero';
import { SectionDivider } from './SectionDivider';
import { PrimaryButton } from './PrimaryButton';

export const ProtectPage = ({ data = {}, onBack, onOpenContact, onSelectService }) => {
  const [expandedCardId, setExpandedCardId] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const expectations = [
    {
      num: "01",
      title: "Affordable Individual Returns",
      desc: "Affordable individual tax return services starting from just $99."
    },
    {
      num: "02",
      title: "Professional Taxation Support",
      desc: "Professional taxation and compliance support across all statutory obligations."
    },
    {
      num: "03",
      title: "Small Business Bookkeeping",
      desc: "Reliable, ongoing bookkeeping services tailored for small businesses and sole traders."
    },
    {
      num: "04",
      title: "Personalised Advice",
      desc: "Personalised advice tailored directly to your individual and commercial circumstances."
    },
    {
      num: "05",
      title: "Clear & Transparent Pricing",
      desc: "Clear communication, transparent pricing, and zero unexpected surprises."
    }
  ];

  // 6 Core Services strictly matching the shared Excel sheet (Tax and compliance 3.xlsx)
  const coreServices = [
    {
      id: "individual-tax",
      num: "01",
      title: "Individual Tax Returns",
      eyebrow: "CORE SERVICE 01 | FROM $99",
      image: "/images/solution_tax_compliance.jpg",
      fallbackImage: "/images/tax_compliance.jpg",
      desc: "We assist individuals with preparing and lodging their tax returns, ensuring eligible deductions and relevant income are properly considered. Whether you are an employee, investor or have additional income sources, we provide reliable support tailored to your circumstances.",
      icon: <FileText className="w-8 h-8 text-emerald-400" />,
      ctaText: "Book Your Individual Tax Return",
      scopeLabel: "Services Include:",
      items: [
        "Basic individual tax returns from $99",
        "Rental property & negative gearing",
        "Shares & portfolio dividend reporting",
        "Sole trader & contractor lodgements",
        "Uber & rideshare driver returns",
        "Foreign income & expat tax affairs",
        "Individual Tax Return - Paper Returns",
        "Individual Tax Return - NIL Return",
        "Logbook Claims",
        "Assets - CGT (per asset disposal)",
        "Amendment - ITR",
        "Amendment - Sole Trader"
      ]
    },
    {
      id: "business-taxation",
      num: "02",
      title: "Business Taxation",
      eyebrow: "CORE SERVICE 02 | COMPANIES & TRUSTS",
      image: "/images/tax_business.jpg",
      fallbackImage: "/images/tax_compliance.jpg",
      desc: "We provide taxation and compliance services for companies, trusts and partnerships. From annual tax obligations to tax planning and financial reporting support, we help businesses manage their taxation responsibilities with confidence.",
      icon: <Building2 className="w-8 h-8 text-emerald-400" />,
      ctaText: "Enquire About Business Taxation",
      scopeLabel: "Services Include:",
      items: [
        "Company tax return preparation",
        "Trust taxation & distributions",
        "Partnership taxation & compliance",
        "Strategic annual tax planning",
        "Financial reporting support",
        "Statutory lodgement management",
        "Company Setup & Trust Setup",
        "Company Secretarial (ASIC Agent)",
        "Company Tax Return - Non-Trading / NIL",
        "CTR - Bucket Company (Beneficiary)",
        "TTR - Distribution Only",
        "Amendment - CTR / TTR",
        "TPAR (Taxable Payments Annual Report)",
        "Business Name Renewal"
      ]
    },
    {
      id: "bas-gst",
      num: "03",
      title: "BAS & GST",
      eyebrow: "CORE SERVICE 03 | STATUTORY REPORTING",
      image: "/images/tax_bas_gst.jpg",
      fallbackImage: "/images/step_numbers.jpg",
      desc: "We assist businesses with BAS preparation, GST reviews and reconciliations to help ensure transactions are correctly recorded and reporting obligations are met. We also identify opportunities to improve processes and strengthen financial accuracy.",
      icon: <Receipt className="w-8 h-8 text-emerald-400" />,
      ctaText: "Get a Quote for BAS & GST",
      scopeLabel: "Services Include:",
      items: [
        "Monthly & quarterly BAS preparation",
        "Comprehensive GST classification reviews",
        "GST coding reviews & corrections",
        "Balance sheet GST reconciliations",
        "Transaction audits & error prevention",
        "Reporting process improvement",
        "BAS - Uber Drivers",
        "BAS - NIL Return",
        "Income Activity Statement (IAS)",
        "Amendment - BAS",
        "GST Registration"
      ]
    },
    {
      id: "payroll-super",
      num: "04",
      title: "Payroll, PAYG & Superannuation",
      eyebrow: "CORE SERVICE 04 | WORKFORCE COMPLIANCE",
      image: "/images/tax_payroll_super.jpg",
      fallbackImage: "/images/why_practical.jpg",
      desc: "We provide payroll compliance reviews, PAYG withholding assessments and superannuation reviews to help businesses maintain accurate payroll records and meet their statutory obligations. Our focus is on accuracy, transparency and efficient payroll processes.",
      icon: <Users className="w-8 h-8 text-emerald-400" />,
      ctaText: "Enquire About Payroll Compliance",
      scopeLabel: "Services Include:",
      items: [
        "PAYG withholding reviews & lodgements",
        "Superannuation guarantee audits",
        "Payroll compliance & award checks",
        "Pay component classification reviews",
        "Payroll-to-general-ledger reconciliations",
        "End-of-year STP finalisation",
        "ATO Superannuation Clearing House",
        "NSW Long Service Leave",
        "ATO Application - Payment Plan",
        "ATO Application - Payment Extension",
        "ATO Application - Remission"
      ]
    },
    {
      id: "fbt",
      num: "05",
      title: "Fringe Benefits Tax (FBT)",
      eyebrow: "CORE SERVICE 05 | REMUNERATION TAX",
      image: "/images/tax_fbt.jpg",
      fallbackImage: "/images/why_independent.jpg",
      desc: "We assist businesses in identifying potential FBT exposures, reviewing employee benefits and assessing applicable tax obligations. From FBT calculations and return preparation to process reviews, we help simplify FBT compliance and reduce the risk of errors.",
      icon: <Gift className="w-8 h-8 text-emerald-400" />,
      ctaText: "Enquire About FBT Services",
      scopeLabel: "Services Include:",
      items: [
        "FBT exposure identification & reviews",
        "Statutory benefit calculations",
        "Annual FBT return preparation",
        "FBT process reviews & advisory",
        "Salary packaging compliance reviews",
        "Employee motor vehicle benefit audits",
        "FBT - NIL Return",
        "Tax Planning & Advisory (per hour)"
      ]
    },
    {
      id: "bookkeeping-services",
      num: "06",
      title: "Bookkeeping Services",
      eyebrow: "CORE SERVICE 06 | NEW SERVICE",
      image: "/images/solution_process_systems.jpg",
      fallbackImage: "/images/step_numbers.jpg",
      desc: "Reliable bookkeeping solutions to help small businesses maintain accurate financial records and better understand their financial position. We support small businesses and sole traders with end-to-end bookkeeping, ledger maintenance, and reconciliations.",
      icon: <Calculator className="w-8 h-8 text-emerald-400" />,
      ctaText: "Book a Bookkeeping Consultation",
      scopeLabel: "Services Include:",
      items: [
        "Transaction processing & recording",
        "Bank & credit card reconciliations",
        "Accounts payable & receivable",
        "General ledger maintenance",
        "Invoice & bill processing",
        "Monthly financial & cash flow reporting",
        "End of Year (EOY) Reconciliation",
        "Audit Assistance (per hour)",
        "Accountant’s Letter"
      ]
    }
  ];

  // Compliance Health Check 9 stages
  const healthCheckStages = [
    "GST",
    "BAS",
    "PAYG",
    "Payroll",
    "Superannuation",
    "FBT",
    "Tax",
    "Reconciliations",
    "Records"
  ];

  return (
    <div className="pt-20 sm:pt-24 pb-0 bg-[#061a2e] text-white font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#2bb673] selection:text-white">

      {/* ======================================================== */}
      {/* 1. HERO SECTION (CANONICAL EXECUTIVE HERO)                */}
      {/* ======================================================== */}
      <ProtectHero data={data?.hero} onBack={onBack} onOpenContact={onOpenContact} />

      {/* SECTION DIVIDER */}
      <SectionDivider />

      {/* ======================================================== */}
      {/* 2. PROMOTIONAL INTRODUCTORY BANNER (FULL-WIDTH BANNER)   */}
      {/* ======================================================== */}
      <section className="bg-white font-['Plus_Jakarta_Sans',sans-serif]">
        <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4 sm:py-5">
          
          {/* Main Full-Width Banner Strip */}
          <div className="w-full rounded-2xl bg-gradient-to-r from-emerald-50/90 via-white to-teal-50/80 border border-emerald-200/90 p-4 sm:p-5 lg:px-7 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6">
            
            {/* Left Block: Offer Pill + Large Price */}
            <div className="flex items-center gap-3.5 shrink-0">
              <div className="text-center sm:text-left space-y-1">
                <span className="inline-block px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider">
                  Affordable Tax Services
                </span>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-emerald-600 tracking-tight leading-none">
                  FROM $99
                </div>
              </div>
            </div>

            {/* Middle Block: Title, Subtitle, Sub-brand */}
            <div className="text-center lg:text-left space-y-1 flex-1 border-y lg:border-y-0 lg:border-x border-emerald-200/70 py-2.5 lg:py-0 lg:px-6">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#061a2e] tracking-tight">
                Basic Individual Tax Returns
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal">
                Professional service. Affordable pricing. Confidence in every return.
              </p>
              <p className="text-xs sm:text-[13px] font-black uppercase tracking-wider bg-gradient-to-r from-[#007791] via-[#0A7FA8] to-[#2bb673] bg-clip-text text-transparent">
                EVOLVE TAXATION &amp; ADVISORY
              </p>
            </div>

            {/* Right Block: Highlighted Important Notice */}
            <div className="lg:max-w-md w-full shrink-0 p-3 rounded-xl bg-white/95 border border-emerald-300 text-xs text-slate-700 shadow-2xs">
              <p className="leading-relaxed">
                <strong className="font-bold text-emerald-800">Important:</strong> Include a note that the $99 starting price applies to eligible basic individual tax returns, with additional fees for more complex tax affairs. This will help manage client expectations and maintain pricing transparency.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. DEDICATED EXPECTATIONS & CREED SECTION (DARK THEME)    */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 bg-[#061a2e] text-white border-b border-white/10 relative overflow-hidden font-['Inter',sans-serif]">
        {/* Subtle Ambient Lighting */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#007791]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2bb673]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">

          {/* Section Header */}
          <div className="space-y-3 max-w-3xl">
            <span className="inline-block text-xs font-bold tracking-wider uppercase text-emerald-400 border-l-2 border-emerald-400 pl-3">
              CLIENT VALUE COMMITMENT
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
              With <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300 bg-clip-text text-transparent">EVOLVE TAXATION &amp; ADVISORY</span>, You Can Expect:
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              We hold ourselves to rigorous standards of transparency, precision, and service delivery across every individual and commercial engagement.
            </p>
          </div>

          {/* 5 Expectations in Clean Structured Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expectations.map((exp) => (
              <div 
                key={exp.num}
                className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-emerald-500/50 hover:bg-white/[0.07] transition-all duration-300 space-y-3 flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-black flex items-center justify-center shadow-2xs">
                      {exp.num}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* 6th Card: Brand Creed & Value Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-[#0B2440] to-[#061a2e] border border-emerald-500/40 space-y-3 flex flex-col justify-between shadow-sm">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block">
                  OUR COMMITMENT
                </span>
                <p className="text-base font-extrabold text-white leading-tight">
                  Your Tax Matters. Your Business Matters. Your Future Matters.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Let <span className="font-extrabold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">EVOLVE</span> take the complexity out of your tax and bookkeeping responsibilities, so you can focus on what matters most.
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-white transition-colors cursor-pointer pt-2"
              >
                <span>Speak with an Advisor</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. CORE SERVICES (WHITE BACKGROUND EXECUTIVE CARDS)     */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 bg-white text-[#061a2e] border-b border-slate-200 relative overflow-hidden font-['Inter',sans-serif]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="space-y-3 max-w-3xl">
            <span className="inline-block text-xs font-bold tracking-wider uppercase text-emerald-700 border-l-2 border-emerald-600 pl-3">
              CORE CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#061a2e] tracking-tight leading-snug">
              Core Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Specialized taxation, compliance, and bookkeeping services designed to protect your organisation, minimize exposure, and ensure full statutory governance.
            </p>
          </div>

          {/* 2-Column Responsive Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((service) => {
              const isExpanded = expandedCardId === service.id;
              // Maximum show six initially; show all when expanded
              const visibleItems = isExpanded ? service.items : service.items.slice(0, 6);
              const hasMore = service.items.length > 6;

              return (
                <div
                  key={service.id}
                  onMouseLeave={() => setExpandedCardId(null)}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group shadow-sm"
                >
                  <div>
                    {/* Media Header with Image, Gradient Overlay, & Floating Emblems */}
                    <div className="relative h-56 overflow-hidden bg-slate-950">
                      <img 
                        src={imgUrl(service.image)} 
                        alt={service.title} 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-80"
                        onError={(e) => {
                          const fallback = imgUrl(service.fallbackImage);
                          if (e.currentTarget.src !== fallback) {
                            e.currentTarget.src = fallback;
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-[#061a2e]/60 to-transparent" />
                      
                      {/* Floating Icon Box on Top-Left */}
                      <div className="absolute top-4 left-4 p-3 bg-[#061a2e]/90 backdrop-blur-md rounded-2xl border border-white/15 shadow-lg">
                        {service.icon}
                      </div>

                      {/* Bottom Title & Eyebrow on Image */}
                      <div className="absolute bottom-4 left-6 right-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#2bb673] block mb-1">
                          {service.eyebrow}
                        </span>
                        <h3 className="text-2xl font-bold text-white leading-tight">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Card Content & Checklist */}
                    <div className="p-7 space-y-5 bg-white">
                      <p className="text-base text-slate-600 font-normal leading-relaxed">
                        {service.desc}
                      </p>

                      <div className="space-y-3 pt-3 border-t border-slate-200">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold uppercase text-emerald-700 tracking-wider block">
                            {service.scopeLabel || "Services Include:"}
                          </span>
                          {hasMore && (
                            <button
                              type="button"
                              onClick={() => setExpandedCardId(isExpanded ? null : service.id)}
                              className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100/80 px-2.5 py-1 rounded-lg border border-emerald-200 transition-all cursor-pointer shadow-2xs"
                            >
                              <span>{isExpanded ? "Show Less" : "+ More"}</span>
                              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                            </button>
                          )}
                        </div>

                        {/* Items Checklist (Same Design for all points, max 6 initially, all when expanded) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                          {visibleItems.map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-xs font-medium text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Button */}
                  <div className="p-7 pt-0 bg-white">
                    <button
                      type="button"
                      onClick={onOpenContact}
                      className="w-full brand-button-gradient text-white text-sm font-bold py-3.5 px-6 rounded-2xl flex items-center justify-center space-x-2 shadow-md hover:shadow-lg cursor-pointer transition-transform group-hover:scale-[1.01]"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. COMPLIANCE HEALTH CHECK (DARK THEME)                 */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#061a2e] text-white border-b border-white/10 relative overflow-hidden font-['Inter',sans-serif]">
        {/* Subtle Ambient Lighting */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#007791]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2bb673]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
          
          {/* Section Header */}
          <div className="space-y-3">
            <span className="inline-block text-xs font-bold tracking-wider uppercase text-emerald-400 border-l-2 border-emerald-400 pl-3">
              DIAGNOSTIC PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Compliance Health Check
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
              A structured review across:
            </p>
          </div>

          {/* Stepper Pipeline: Connected sequence matching logo theme */}
          <div className="bg-white/[0.03] backdrop-blur-md rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 space-y-8 shadow-xl">
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {healthCheckStages.map((stage, idx) => (
                <React.Fragment key={idx}>
                  <div className="px-4 sm:px-5 py-3 rounded-xl bg-white/[0.05] border border-white/10 hover:border-emerald-400/60 shadow-xs transition-all flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-sm sm:text-base font-semibold text-white whitespace-nowrap">
                      {stage}
                    </span>
                  </div>
                  {idx < healthCheckStages.length - 1 && (
                    <span className="text-slate-500 font-bold text-sm select-none">
                      →
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Bottom Highlight Banner with Action */}
            <div className="rounded-xl bg-gradient-to-r from-emerald-950/40 via-[#0B2440] to-[#061a2e] border border-emerald-500/30 p-6 sm:p-7 text-center space-y-4 shadow-sm">
              <p className="text-lg sm:text-xl font-bold text-emerald-300 leading-snug">
                Identify issues before they become expensive problems.
              </p>
              <div>
                <PrimaryButton onClick={onOpenContact}>
                  Request a Compliance Health Check
                </PrimaryButton>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. PRE-FOOTER CALL TO ACTION & CAPABILITY NAVIGATOR      */}
      {/* ======================================================== */}
      <CapabilityNavigatorSection
        currentPillar="protect"
        onOpenContact={onOpenContact}
        onSelectService={onSelectService}
        onBack={onBack}
      />

    </div>
  );
};
