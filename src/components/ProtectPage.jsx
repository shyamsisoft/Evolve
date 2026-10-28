import React, { useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Building2, 
  Receipt, 
  Users, 
  Gift, 
  Check, 
  Sparkles,
  FileCheck,
  Scale,
  ClipboardList,
  FolderArchive,
  AlertTriangle
} from 'lucide-react';
import { PillarIcon } from './BrandLogo';
import { imgUrl } from '../utils/imgUrl';

export const ProtectPage = ({ onBack, onOpenContact, onSelectService }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 1. Core Services (Exact copy from Source of Truth)
  const coreServices = [
    {
      num: "01",
      title: "Business Taxation",
      icon: <Building2 className="w-5 h-5 text-emerald-600" />,
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
      num: "02",
      title: "BAS & GST",
      icon: <Receipt className="w-5 h-5 text-[#007791]" />,
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
      num: "03",
      title: "Payroll, PAYG & Superannuation",
      icon: <Users className="w-5 h-5 text-cyan-600" />,
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
      num: "04",
      title: "Fringe Benefits Tax (FBT)",
      icon: <Gift className="w-5 h-5 text-indigo-600" />,
      items: [
        "FBT reviews",
        "calculations",
        "return preparation",
        "process reviews",
        "identification of potential FBT issues"
      ]
    }
  ];

  // 2. Compliance Health Check Pipeline Stages (Exact 9 stages from Source of Truth)
  const healthCheckStages = [
    { num: "01", name: "GST" },
    { num: "02", name: "BAS" },
    { num: "03", name: "PAYG" },
    { num: "04", name: "Payroll" },
    { num: "05", name: "Superannuation" },
    { num: "06", name: "FBT" },
    { num: "07", name: "Tax" },
    { num: "08", name: "Reconciliations" },
    { num: "09", name: "Records" }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#2bb673] selection:text-white">

      {/* ======================================================== */}
      {/* 1. HERO / HEADER SECTION (Strictly source document only) */}
      {/* ======================================================== */}
      <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 bg-[#061a2e] text-white overflow-hidden">
        
        {/* Background Photo with Dark Tech Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={imgUrl("/images/tax_compliance.jpg")}
            alt="Tax & Compliance"
            className="w-full h-full object-cover object-center scale-105 filter brightness-40 contrast-125"
            onError={(e) => {
              const fallback = imgUrl("/images/hero_summit.jpg");
              if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061a2e] via-[#061a2e]/90 to-[#061a2e]/65" />
          <div className="absolute inset-0 bg-[radial-gradient(#2bb673_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
        </div>

        {/* Ambient Glowing Orbs */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs font-bold text-slate-300">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>What We Do</span>
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-[#2bb673] font-extrabold uppercase tracking-wider">PROTECT</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-300 truncate max-w-[200px] sm:max-w-none">
              Tax &amp; Compliance
            </span>
          </nav>

          <div className="max-w-4xl space-y-6">
            
            {/* Brand Pillar Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs font-extrabold tracking-widest uppercase backdrop-blur-md shadow-lg">
              <PillarIcon type="protect" className="w-3.5 h-3.5" />
              <span>PROTECT</span>
            </div>

            {/* Service Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Tax &amp; Compliance
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl font-bold text-emerald-300 tracking-tight leading-snug">
              Strong financial foundations provide confidence.
            </p>

            {/* Overview Narrative (Directly in Hero) */}
            <div className="pt-1 space-y-3 max-w-3xl text-slate-200 font-['Inter',sans-serif]">
              <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-slate-100">
                Tax and compliance are fundamental to a well-managed organisation. We provide practical tax and compliance support while connecting compliance with the broader finance function.
              </p>
              <p className="text-sm sm:text-base font-normal leading-relaxed text-slate-300">
                When financial information, systems, processes and compliance obligations work together, organisations have greater confidence in the numbers.
              </p>
            </div>

            {/* Hero CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onOpenContact}
                className="brand-button-gradient text-white text-sm sm:text-base font-extrabold px-8 py-4 rounded-xl shadow-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer group"
              >
                <span>Request a Compliance Health Check</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 2. CORE SERVICES (4 Exact Service Domains)               */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061a2e] tracking-tight leading-tight">
              Core Services
            </h2>
          </div>

          {/* 2x2 Clean Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((service, idx) => (
              <div 
                key={idx}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 hover:border-[#2bb673] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-6">
                  
                  <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-[#2bb673] flex items-center justify-center group-hover:bg-[#061a2e] group-hover:text-emerald-400 group-hover:scale-105 transition-all duration-300 shadow-2xs">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-black text-[#061a2e] tracking-tight group-hover:text-[#061a2e] transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      {service.num}
                    </span>
                  </div>

                  {/* Exact Sub-items */}
                  <div className="space-y-2.5">
                    {service.items.map((item, itemIdx) => (
                      <div 
                        key={itemIdx}
                        className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all flex items-center gap-3 group/item"
                      >
                        <span className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-[#2bb673] text-[11px] font-black group-hover/item:bg-[#2bb673] group-hover/item:text-white transition-colors shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </span>
                        <span className="text-sm font-bold text-slate-800 group-hover/item:text-[#061a2e] transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 3. COMPLIANCE HEALTH CHECK (Structured Review Flow)      */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061a2e] tracking-tight leading-tight">
              Compliance Health Check
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 font-semibold leading-relaxed">
              A structured review across:
            </p>
          </div>

          {/* 9-Stage Connected Sequence */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm space-y-8">
            
            {/* Desktop Horizontal Connected Sequence */}
            <div className="hidden lg:grid grid-cols-9 gap-2 relative items-center">
              {healthCheckStages.map((stage, idx) => {
                const isLast = idx === healthCheckStages.length - 1;
                return (
                  <div key={idx} className="relative flex flex-col items-center">
                    <div className="w-full min-h-[84px] p-2 xl:p-2.5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[#2bb673] hover:bg-emerald-50/20 hover:shadow-md transition-all text-center flex flex-col justify-between group">
                      <span className="font-mono text-[10px] font-bold text-slate-400 block">
                        {stage.num}
                      </span>
                      <div className="text-[10px] xl:text-[11px] 2xl:text-xs font-black text-[#061a2e] group-hover:text-[#2bb673] transition-colors leading-tight tracking-tight">
                        {stage.name}
                      </div>
                    </div>

                    {!isLast && (
                      <div className="absolute top-1/2 -right-2.5 -translate-y-1/2 z-20 pointer-events-none">
                        <div className="w-5 h-5 rounded-full bg-white border border-slate-300 shadow-2xs flex items-center justify-center text-[#2bb673]">
                          <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Tablet 3x3 Grid / Mobile Vertical Flow */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:hidden gap-3">
              {healthCheckStages.map((stage, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-between"
                >
                  <div className="text-sm font-black text-[#061a2e]">
                    {stage.name}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    {stage.num}
                  </span>
                </div>
              ))}
            </div>

            {/* Closing Highlight Box (Exact Document Sentence) */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-base sm:text-lg font-bold text-[#061a2e]">
                Identify issues before they become expensive problems.
              </p>

              <button
                type="button"
                onClick={onOpenContact}
                className="brand-button-gradient text-white text-sm font-extrabold px-6 py-3.5 rounded-xl shadow-md flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer shrink-0"
              >
                <span>Request a Compliance Health Check</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 4. CALL TO ACTION (CTA)                                  */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-[#061a2e] via-[#092644] to-[#041220] text-white relative overflow-hidden border-t border-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
        
        {/* Glow Spheres */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Request a Compliance Health Check
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed font-['Inter',sans-serif]">
            Strong financial foundations provide confidence.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenContact}
              className="w-full sm:w-auto brand-button-gradient text-white text-base font-extrabold px-9 py-4 rounded-full flex items-center justify-center space-x-2.5 shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer group"
            >
              <span>Request a Compliance Health Check</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 5. PILLAR SWITCHER BAR (Capability Navigator)            */}
      {/* ======================================================== */}
      <section className="py-16 bg-[#041220] text-white border-t border-slate-800/80 font-['Plus_Jakarta_Sans',sans-serif]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-b border-slate-800 pb-5 gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-[#2bb673] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Capability Navigator</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">Explore Other Capability Pillars</h3>
            </div>
            
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center space-x-2 text-xs font-extrabold text-[#2bb673] hover:text-white bg-white/5 hover:bg-white/10 border border-slate-700 px-4 py-2.5 rounded-full transition-all cursor-pointer"
            >
              <span>View What We Do Overview</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { id: 'lead', title: 'LEAD', desc: 'CFO & FP&A Advisory', tag: 'Strategic Leadership' },
              { id: 'build', title: 'BUILD', desc: 'Operating Models', tag: 'Scalable Systems' },
              { id: 'transform', title: 'TRANSFORM', desc: 'Data & Tech', tag: 'BI & Automation' },
              { id: 'protect', title: 'protect', titleDisplay: 'PROTECT', desc: 'Tax & Compliance', tag: 'Governance Defense' }
            ].map((p) => {
              const isActive = p.id === 'protect';
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => onSelectService && onSelectService(p.id)}
                  className={`text-left p-6 rounded-2xl border transition-all cursor-pointer group ${
                    isActive 
                      ? 'bg-gradient-to-br from-[#2bb673]/30 to-[#061a2e] border-emerald-400 ring-2 ring-emerald-400/30' 
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-600 hover:bg-slate-800/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 font-mono">
                      {p.tag}
                    </span>
                    <PillarIcon type={p.id} className="w-4 h-4" />
                  </div>
                  <div className="text-lg font-black text-white group-hover:text-emerald-300 transition-colors">
                    {p.titleDisplay || p.title}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {p.desc}
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};
