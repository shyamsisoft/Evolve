import React, { useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Building2, 
  Receipt, 
  Users, 
  Gift, 
  Check,
  ShieldCheck
} from 'lucide-react';
import { PillarIcon } from './BrandLogo';
import { imgUrl } from '../utils/imgUrl';
import { CapabilityNavigatorSection } from './CapabilityNavigatorSection';
import { ProtectHero } from './ProtectHero';
import { SectionDivider } from './SectionDivider';

export const ProtectPage = ({ onBack, onOpenContact, onSelectService }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Core Services verbatim data with distinct dedicated advisor characters
  const coreServices = [
    {
      id: "business-taxation",
      title: "Business Taxation",
      icon: <Building2 className="w-5 h-5" />,
      image: "/images/tax_business.jpg",
      fallbackImage: "/images/tax_compliance.jpg",
      character: "/images/character_advisor.png",
      characterAlt: "Corporate Tax Strategy Lead",
      advisorRole: "Corporate Tax Lead",
      advisorDesc: "Specialized corporate tax planning, group structures, and statutory compliance across mid-market enterprises.",
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
      icon: <Receipt className="w-5 h-5" />,
      image: "/images/tax_bas_gst.jpg",
      fallbackImage: "/images/step_numbers.jpg",
      character: "/images/scale_cfo_executive.png",
      characterAlt: "Indirect Tax & BAS Specialist",
      advisorRole: "Indirect Tax & BAS Specialist",
      advisorDesc: "Accurate monthly & quarterly BAS lodging, detailed GST classification reviews, and reconciliations.",
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
      icon: <Users className="w-5 h-5" />,
      image: "/images/tax_payroll_super.jpg",
      fallbackImage: "/images/why_practical.jpg",
      character: "/images/cfo_cartoon_character.png",
      characterAlt: "Payroll Compliance & Superannuation Director",
      advisorRole: "Payroll & Employment Taxes Lead",
      advisorDesc: "Mitigating workforce compliance risk with rigorous general ledger ties, PAYG withholding, and super audits.",
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
      icon: <Gift className="w-5 h-5" />,
      image: "/images/tax_fbt.jpg",
      fallbackImage: "/images/why_independent.jpg",
      character: "/images/character_female_lead.png",
      characterAlt: "FBT & Remuneration Advisor",
      advisorRole: "FBT & Remuneration Lead",
      advisorDesc: "Comprehensive benefit calculations, statutory return preparation, and ongoing salary packaging advice.",
      items: [
        "FBT reviews",
        "Calculations",
        "Return preparation",
        "Process reviews",
        "Identification of potential FBT issues"
      ]
    }
  ];

  // Compliance Health Check 9 stages verbatim
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
      {/* 1. HERO SECTION (EXECUTIVE B2B HERO)                      */}
      {/* ======================================================== */}
      <ProtectHero onBack={onBack} onOpenContact={onOpenContact} />


      {/* SECTION DIVIDER */}
      <SectionDivider />

      {/* ======================================================== */}
      {/* 2. CORE SERVICES (ALTERNATING ZIG-ZAG SHOWCASE)          */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-24 bg-[#061a2e] border-b border-white/10 relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#007791]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2bb673]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20 lg:space-y-24 relative z-10">
          
          {/* Section Header */}
          <div className="space-y-3 max-w-3xl">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-emerald-400 border-l-2 border-emerald-400 pl-3">
              CAPABILITY MODULES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
              Core Services
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              Specialized corporate taxation and compliance services designed to protect your organisation, minimise exposure, and ensure full statutory governance.
            </p>
          </div>

          {/* Alternating Zig-Zag Service Modules */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-28">
            {coreServices.map((service, idx) => {
              const isCharLeft = idx % 2 === 0; // 0: Left, 1: Right, 2: Left, 3: Right

              return (
                <div 
                  key={service.id || idx}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  {/* Character Column */}
                  <div 
                    className={`lg:col-span-4 ${
                      isCharLeft 
                        ? 'lg:order-1' 
                        : 'lg:order-2'
                    }`}
                  >
                    <div className="relative flex flex-col items-center justify-center w-full max-w-[340px] mx-auto">
                      {/* Ambient Halo behind character */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-cyan-500/15 via-[#007791]/20 to-teal-400/15 rounded-full blur-2xl pointer-events-none" />
                      
                      {/* Grounding Base Shadow */}
                      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-t from-cyan-400/20 to-transparent blur-md pointer-events-none" />

                      {/* Character Image */}
                      <img
                        src={imgUrl(service.character)}
                        alt={service.characterAlt}
                        loading="lazy"
                        decoding="async"
                        className={`w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[330px] h-auto object-contain relative z-10 drop-shadow-[0_20px_45px_rgba(0,0,0,0.65)] hover:scale-[1.03] transition-transform duration-300 ${
                          !isCharLeft && idx === 3 ? 'scale-x-[-1]' : ''
                        }`}
                      />

                      {/* Advisor Badge Card */}
                      <div className="w-full mt-3 p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md relative z-10 shadow-lg text-left">
                        <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
                          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{service.advisorRole}</span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-normal">
                          {service.advisorDesc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Service Card Column */}
                  <div 
                    className={`lg:col-span-8 ${
                      isCharLeft 
                        ? 'lg:order-2' 
                        : 'lg:order-1'
                    }`}
                  >
                    <div className="bg-[#061a2e]/90 backdrop-blur-md rounded-2xl border border-white/10 hover:border-emerald-500/40 p-6 sm:p-8 space-y-6 transition-all duration-300 shadow-xl group hover:bg-white/[0.03]">
                      
                      {/* Header Image */}
                      <div className="relative h-48 sm:h-56 w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900/60">
                        <img
                          src={imgUrl(service.image)}
                          alt={service.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80"
                          onError={(e) => {
                            const fallback = imgUrl(service.fallbackImage);
                            if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-[#061a2e]/40 to-transparent" />
                        
                        {/* Module Tag Badge on Image */}
                        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-[#061a2e]/90 backdrop-blur-md border border-white/20 text-xs font-bold text-white shadow-md">
                          <span className="text-emerald-400 font-extrabold">0{idx + 1}</span>
                          <span className="text-white/40">|</span>
                          <span>{service.title}</span>
                        </div>
                      </div>

                      {/* Title & Icon Header */}
                      <div className="flex items-center gap-3.5">
                        <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 text-emerald-300 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 group-hover:text-emerald-300 transition-colors shadow-inner">
                          {service.icon}
                        </div>
                        <div>
                          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#2bb673]">
                            Capability Module 0{idx + 1}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      {/* Scannable Checkpoints in Clean 2-Column Responsive Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        {service.items.map((item, itemIdx) => (
                          <div
                            key={itemIdx}
                            className="flex items-start gap-2.5 text-sm sm:text-[14px] text-slate-300 leading-snug font-['Inter',sans-serif]"
                          >
                            <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* SECTION DIVIDER */}
      <SectionDivider />

      {/* ======================================================== */}
      {/* 3. COMPLIANCE HEALTH CHECK                               */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-24 bg-[#061a2e] border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Section Header */}
          <div className="space-y-3">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-emerald-400 border-l-2 border-emerald-400 pl-3">
              DIAGNOSTIC PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
              Compliance Health Check
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
              A structured review across:
            </p>
          </div>

          {/* Stepper Pipeline: Connected sequence matching logo theme */}
          <div className="bg-white/[0.03] rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 space-y-8">
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {healthCheckStages.map((stage, idx) => (
                <React.Fragment key={idx}>
                  <div className="px-4 sm:px-5 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-emerald-400/50 hover:bg-white/[0.08] transition-all flex items-center gap-2.5">
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

            {/* Bottom Highlight Banner */}
            <div className="rounded-xl bg-white/[0.04] border border-white/10 p-6 sm:p-7 text-center">
              <p className="text-lg sm:text-xl font-bold text-emerald-300 leading-snug">
                Identify issues before they become expensive problems.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 4. PRE-FOOTER CALL TO ACTION & CAPABILITY NAVIGATOR      */}
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
