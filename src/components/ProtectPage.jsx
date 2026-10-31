import React, { useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Building2, 
  Receipt, 
  Users, 
  Gift, 
  Check 
} from 'lucide-react';
import { PillarIcon } from './BrandLogo';
import { imgUrl } from '../utils/imgUrl';
import { CapabilityNavigatorSection } from './CapabilityNavigatorSection';
import { ProtectHero } from './ProtectHero';

export const ProtectPage = ({ onBack, onOpenContact, onSelectService }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Core Services verbatim data
  const coreServices = [
    {
      title: "Business Taxation",
      icon: <Building2 className="w-5 h-5" />,
      image: "/images/tax_business.jpg",
      fallbackImage: "/images/tax_compliance.jpg",
      items: [
        "Company tax",
        "trust taxation",
        "partnership taxation",
        "tax compliance",
        "tax planning",
        "financial information supporting tax obligations"
      ]
    },
    {
      title: "BAS & GST",
      icon: <Receipt className="w-5 h-5" />,
      image: "/images/tax_bas_gst.jpg",
      fallbackImage: "/images/step_numbers.jpg",
      items: [
        "BAS preparation",
        "GST reviews",
        "GST coding reviews",
        "GST reconciliations",
        "transaction reviews",
        "process improvement"
      ]
    },
    {
      title: "Payroll, PAYG & Superannuation",
      icon: <Users className="w-5 h-5" />,
      image: "/images/tax_payroll_super.jpg",
      fallbackImage: "/images/why_practical.jpg",
      items: [
        "PAYG withholding",
        "superannuation reviews",
        "payroll compliance reviews",
        "pay component reviews",
        "payroll-to-general-ledger reconciliation",
        "process reviews"
      ]
    },
    {
      title: "Fringe Benefits Tax (FBT)",
      icon: <Gift className="w-5 h-5" />,
      image: "/images/tax_fbt.jpg",
      fallbackImage: "/images/why_independent.jpg",
      items: [
        "FBT reviews",
        "calculations",
        "return preparation",
        "process reviews",
        "identification of potential FBT issues"
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
    <div className="pt-20 sm:pt-24 pb-20 bg-[#f8fafc] text-slate-800 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#2bb673] selection:text-white animate-in fade-in duration-300">

      {/* ======================================================== */}
      {/* 1. HERO SECTION (EXECUTIVE B2B HERO)                      */}
      {/* ======================================================== */}
      <ProtectHero onBack={onBack} onOpenContact={onOpenContact} />


      {/* ======================================================== */}
      {/* 2. CORE SERVICES (MINIMALIST 2x2 EXECUTIVE GRID)         */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Section Header */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061a2e] tracking-tight leading-tight">
              Core Services
            </h2>
          </div>

          {/* 2x2 Grid of Minimalist Cards with Photo Header & Scannable List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {coreServices.map((service, idx) => (
              <div 
                key={idx}
                className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-44 sm:h-52 overflow-hidden rounded-2xl border border-slate-200/80 mb-6 bg-slate-100">
                    <img
                      src={imgUrl(service.image)}
                      alt={service.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        const fallback = imgUrl(service.fallbackImage);
                        if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e]/60 via-transparent to-transparent" />
                  </div>

                  {/* Card Title & Icon */}
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-[#2bb673] flex items-center justify-center shrink-0 group-hover:bg-[#061a2e] group-hover:text-emerald-400 transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#061a2e] tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Compact, Scannable Clean List with Checkpoints */}
                  <ul className="space-y-2.5 font-['Inter',sans-serif]">
                    {service.items.map((item, itemIdx) => (
                      <li 
                        key={itemIdx}
                        className="flex items-start gap-3 text-sm sm:text-[15px] text-slate-700 leading-snug"
                      >
                        <span className="w-4 h-4 rounded-full bg-emerald-100 text-[#2bb673] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 3. COMPLIANCE HEALTH CHECK                               */}
      {/* ======================================================== */}
      <section className="py-16 sm:py-24 bg-[#f8fafc] border-b border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Section Header */}
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061a2e] tracking-tight leading-tight">
              Compliance Health Check
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              A structured review across:
            </p>
          </div>

          {/* Stepper Pipeline: Auto-wrapping connected sequence with zero truncation */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-sm space-y-8">
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {healthCheckStages.map((stage, idx) => (
                <React.Fragment key={idx}>
                  <div className="px-4 sm:px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#2bb673] hover:bg-emerald-50/20 hover:shadow-md transition-all flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#2bb673]" />
                    <span className="text-sm sm:text-base font-bold text-[#061a2e] whitespace-nowrap">
                      {stage}
                    </span>
                  </div>
                  {idx < healthCheckStages.length - 1 && (
                    <span className="text-slate-400 font-black text-sm select-none">
                      →
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Bottom Action Banner with Verbatim Highlight & CTA */}
            <div className="rounded-2xl bg-gradient-to-r from-[#061a2e] via-[#092644] to-[#041220] p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <p className="text-lg sm:text-xl font-bold text-white leading-snug text-center md:text-left">
                Identify issues before they become expensive problems.
              </p>

              <button
                type="button"
                onClick={onOpenContact}
                className="w-full md:w-auto brand-button-gradient text-white text-sm sm:text-base font-extrabold px-8 py-4 rounded-full shadow-2xl flex items-center justify-center gap-2.5 hover:scale-105 active:scale-95 transition-all cursor-pointer shrink-0"
              >
                <span>Request a Compliance Health Check</span>
                <ArrowRight className="w-4 h-4" />
              </button>
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
