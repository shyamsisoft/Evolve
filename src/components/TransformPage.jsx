import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Target, 
  Activity, 
  Sparkles, 
  Workflow, 
  Server, 
  Zap, 
  BarChart3, 
  TrendingUp, 
  Layers, 
  Database,
  Check, 
  ChevronRight,
  FileSpreadsheet,
  Clock,
  AlertCircle,
  Shuffle,
  ShieldAlert,
  Network,
  PieChart,
  CheckCircle2,
  SlidersHorizontal,
  Layers3
} from 'lucide-react';
import { PillarIcon } from './BrandLogo';
import { imgUrl } from '../utils/imgUrl';
import { CapabilityNavigatorSection } from './CapabilityNavigatorSection';
import { TransformHero } from './TransformHero';
import FinanceTransformationServicesGrid from './FinanceTransformationServicesGrid';

export const TransformPage = ({ onBack, onOpenContact, onSelectService }) => {
  const [selectedTriggers, setSelectedTriggers] = useState(new Set([0, 1]));
  const [activePipelineStage, setActivePipelineStage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleTrigger = (index) => {
    setSelectedTriggers(prev => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  // 2. Data Integration Items (8 Exact words from Source of Truth)
  const dataIntegrationItems = [
    { title: "Data mapping", icon: <Network className="w-4 h-4 text-cyan-600" /> },
    { title: "Migration", icon: <Zap className="w-4 h-4 text-teal-600" /> },
    { title: "Data structures", icon: <Layers3 className="w-4 h-4 text-cyan-600" /> },
    { title: "Data models", icon: <Database className="w-4 h-4 text-teal-600" /> },
    { title: "Chart of Accounts", icon: <SlidersHorizontal className="w-4 h-4 text-cyan-600" /> },
    { title: "System integration", icon: <Server className="w-4 h-4 text-teal-600" /> },
    { title: "Data quality", icon: <CheckCircle2 className="w-4 h-4 text-cyan-600" /> },
    { title: "Reporting datasets", icon: <BarChart3 className="w-4 h-4 text-teal-600" /> }
  ];

  // 3. Reporting Architecture Flow (5 Exact Stages from Source of Truth)
  const reportingArchitectureFlow = [
    { num: "01", name: "Source systems", icon: <Server className="w-6 h-6 stroke-[2.2]" /> },
    { num: "02", name: "Data", icon: <Database className="w-6 h-6 stroke-[2.2]" /> },
    { num: "03", name: "Reporting models", icon: <Workflow className="w-6 h-6 stroke-[2.2]" /> },
    { num: "04", name: "Dashboards", icon: <BarChart3 className="w-6 h-6 stroke-[2.2]" /> },
    { num: "05", name: "Management insight", icon: <TrendingUp className="w-6 h-6 stroke-[2.2]" /> }
  ];

  // 4. TechnologyOne items (6 Exact items from Source of Truth)
  const technologyOneItems = [
    "System optimisation",
    "Process redesign",
    "Configuration review",
    "Reporting",
    "Data integration",
    "Transformation support"
  ];

  // 5. When Transformation Makes Sense (9 Exact triggers from source of truth)
  const transformationTriggers = [
    { num: "01", text: "Finance relies heavily on spreadsheets.", icon: <FileSpreadsheet className="w-5 h-5 text-amber-500 stroke-[2.2]" /> },
    { num: "02", text: "Reporting is highly manual.", icon: <Clock className="w-5 h-5 text-amber-600 stroke-[2.2]" /> },
    { num: "03", text: "Your ERP is not delivering expected benefits.", icon: <AlertCircle className="w-5 h-5 text-rose-500 stroke-[2.2]" /> },
    { num: "04", text: "Different systems produce inconsistent information.", icon: <Shuffle className="w-5 h-5 text-indigo-500 stroke-[2.2]" /> },
    { num: "05", text: "Data is difficult to reconcile.", icon: <ShieldAlert className="w-5 h-5 text-teal-600 stroke-[2.2]" /> },
    { num: "06", text: "Management lacks timely insight.", icon: <TrendingUp className="w-5 h-5 text-sky-500 stroke-[2.2]" /> },
    { num: "07", text: "Processes haven't kept pace with organizational growth.", icon: <Network className="w-5 h-5 text-purple-500 stroke-[2.2]" /> },
    { num: "08", text: "You are implementing a new ERP.", icon: <Server className="w-5 h-5 text-cyan-600 stroke-[2.2]" /> },
    { num: "09", text: "Your finance team spends too much time processing and too little time analysing.", icon: <PieChart className="w-5 h-5 text-emerald-600 stroke-[2.2]" /> }
  ];

  const capabilityPillars = [
    { id: 'lead', name: 'LEAD', title: 'CFO & FP&A Advisory', desc: 'Financial leadership and performance insight.', icon: 'lead' },
    { id: 'build', name: 'BUILD', title: 'Finance Functions & Operating Models', desc: 'Process blueprints, internal controls and capability.', icon: 'build' },
    { id: 'protect', name: 'PROTECT', title: 'Tax & Compliance', desc: 'Statutory compliance and risk defense.', icon: 'protect' }
  ];

  return (
    <div className="pt-20 sm:pt-24 pb-20 bg-[#f8fafc] text-slate-800 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#007791] selection:text-white animate-in fade-in duration-300">

      {/* 1. HERO SECTION (HIGH-IMPACT B2B SAAS / CONSULTING HERO) */}
      <TransformHero onBack={onBack} onOpenContact={onOpenContact} />


      {/* ======================================================== */}
      {/* 2. FINANCE TRANSFORMATION SERVICES (3x3 SERVICES GRID)     */}
      {/* ======================================================== */}
      <FinanceTransformationServicesGrid />

      {/* ======================================================== */}
      {/* 3. FINANCE DATA INTEGRATION & ARCHITECTURE               */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#f8fafc] border-b border-slate-200/80 relative overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#007791]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2bb673]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061a2e] tracking-tight leading-tight">
              Finance Data Integration &amp; Architecture
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-semibold leading-relaxed">
              Reliable reporting starts with reliable data.
            </p>
          </div>

          {/* Part A: Reporting Architecture Flow */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm space-y-8">
            
            <div className="border-b border-slate-100 pb-5 space-y-1">
              <h3 className="text-2xl font-black text-[#061a2e] tracking-tight">
                Reporting Architecture
              </h3>
              <p className="text-sm sm:text-base font-semibold text-slate-600">
                Design reporting environments connecting:
              </p>
            </div>

            {/* 5-Stage Connected Pipeline (Exact 5 Stages from Source of Truth) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
              {reportingArchitectureFlow.map((stage, idx) => {
                const isActive = activePipelineStage === idx;
                const isLast = idx === reportingArchitectureFlow.length - 1;
                return (
                  <div key={idx} className="relative flex flex-col justify-between">
                    <button
                      type="button"
                      onClick={() => setActivePipelineStage(idx)}
                      className={`w-full p-5 sm:p-6 rounded-2xl border text-center transition-all duration-300 cursor-pointer flex flex-col justify-between items-center h-full group ${
                        isActive
                          ? 'bg-[#061a2e] text-white border-[#061a2e] shadow-xl scale-[1.03]'
                          : 'bg-slate-50/90 text-slate-800 border-slate-200/90 hover:border-[#007791] hover:bg-white hover:shadow-md'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shadow-2xs ${
                        isActive 
                          ? 'bg-cyan-500 text-white scale-110 shadow-lg shadow-cyan-500/30' 
                          : 'bg-white border border-slate-200 text-[#007791] group-hover:bg-[#061a2e] group-hover:text-cyan-300'
                      }`}>
                        {stage.icon}
                      </div>

                      <div className="space-y-1.5 pt-3">
                        <span className={`font-mono text-xs font-bold block ${
                          isActive ? 'text-cyan-300' : 'text-slate-400'
                        }`}>
                          {stage.num}
                        </span>
                        <h4 className={`text-base font-black leading-snug ${
                          isActive ? 'text-white' : 'text-[#061a2e] group-hover:text-[#007791]'
                        }`}>
                          {stage.name}
                        </h4>
                      </div>
                    </button>

                    {/* Connecting Chevron (Desktop only) */}
                    {!isLast && (
                      <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-20 pointer-events-none">
                        <div className="w-6 h-6 rounded-full bg-white border border-slate-300 shadow-sm flex items-center justify-center text-[#007791]">
                          <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* Part B: Data Integration Split with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: High-Tech Analytics Visual Card */}
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl flex flex-col justify-end min-h-[380px] group">
              <div className="absolute inset-0 z-0">
                <img
                  src={imgUrl("/images/step_insight.jpg")}
                  alt="Data Integration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-[#061a2e]/65 to-transparent"></div>
              </div>

              <div className="relative z-10 p-6 sm:p-8">
                <div className="p-6 rounded-2xl bg-[#061a2e]/90 backdrop-blur-md border border-white/15 text-white space-y-2 shadow-2xl">
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                    Data Integration
                  </h3>
                  <p className="text-sm text-slate-300 font-semibold">
                    Reliable reporting starts with reliable data.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: 8 Data Integration Dimensions */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm flex flex-col justify-between">
              
              <div className="space-y-5">
                <div className="border-b border-slate-100 pb-4">
                  <h3 className="text-2xl font-black text-[#061a2e] tracking-tight">
                    Data Integration
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {dataIntegrationItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50/90 border border-slate-200/80 hover:border-[#007791] hover:bg-teal-50/20 transition-all flex items-center gap-3.5 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#007791] group-hover:scale-110 transition-transform shadow-2xs shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-sm font-bold text-slate-800 group-hover:text-[#061a2e] transition-colors">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 4. TECHNOLOGYONE & POWER BI ANALYTICS (FLAGSHIP SHOWCASE) */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061a2e] tracking-tight leading-tight">
              TechnologyOne &amp; Power BI Analytics
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* CARD 1: TechnologyOne (Exact Copy) */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-slate-200/90 hover:border-[#007791] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-6">
                
                <div className="flex items-center gap-3.5 border-b border-slate-100 pb-5">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 text-[#007791] flex items-center justify-center group-hover:bg-[#007791] group-hover:text-white transition-colors shadow-2xs">
                    <Server className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <h3 className="text-2xl font-black text-[#061a2e] tracking-tight">
                    TechnologyOne
                  </h3>
                </div>

                {/* 6 Exact Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {technologyOneItems.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50/90 border border-slate-200/80 hover:border-teal-400 hover:bg-teal-50/30 transition-all flex items-center gap-3 group/item"
                    >
                      <span className="w-5 h-5 rounded-full bg-teal-100 border border-teal-300 flex items-center justify-center text-[#007791] text-[11px] font-black group-hover/item:bg-[#007791] group-hover/item:text-white transition-colors shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover/item:text-teal-900 transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

              <div className="pt-8 border-t border-slate-100 mt-8">
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="w-full brand-button-gradient text-white text-sm font-extrabold px-6 py-4 rounded-full shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer group/btn"
                >
                  <span>Discuss a Transformation Requirement</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* CARD 2: Power BI & Financial Analytics (Exact Copy with Visual Analytics Photo) */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-slate-200/90 hover:border-emerald-500 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-6">
                
                <div className="flex items-center gap-3.5 border-b border-slate-100 pb-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center group-hover:bg-[#2bb673] group-hover:text-white transition-colors shadow-2xs">
                    <BarChart3 className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <h3 className="text-2xl font-black text-[#061a2e] tracking-tight">
                    Power BI &amp; Financial Analytics
                  </h3>
                </div>

                {/* Exact Copy Value Statement */}
                <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200/80">
                  <p className="text-base sm:text-lg font-bold text-slate-800 leading-relaxed">
                    Turn financial and operational data into clear, actionable information for leaders.
                  </p>
                </div>

                {/* Photo Feature of Modern Financial Analytics */}
                <div className="relative rounded-2xl overflow-hidden h-44 border border-slate-200">
                  <img
                    src={imgUrl("/images/finance_transform.jpg")}
                    alt="Power BI & Financial Analytics"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e]/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-4 text-white text-xs font-black">
                    Power BI &amp; Financial Analytics
                  </div>
                </div>

              </div>

              <div className="pt-8 border-t border-slate-100 mt-8">
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="w-full brand-button-gradient text-white text-sm font-extrabold px-6 py-4 rounded-full shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer group/btn"
                >
                  <span>Discuss a Transformation Requirement</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 5. WHEN TRANSFORMATION MAKES SENSE (DIAGNOSTIC MATRIX)   */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#f8fafc] border-b border-slate-200/80 relative overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061a2e] tracking-tight leading-tight">
              When Transformation Makes Sense
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-semibold leading-relaxed">
              Consider transformation when:
            </p>
          </div>

          {/* 3x3 Interactive Diagnostic Grid (Exact 9 Triggers from Document) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {transformationTriggers.map((trigger, idx) => {
              const isSelected = selectedTriggers.has(idx);
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => toggleTrigger(idx)}
                  className={`p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4 text-left cursor-pointer group ${
                    isSelected
                      ? 'bg-white border-[#007791] shadow-lg ring-2 ring-[#007791]/15 -translate-y-1'
                      : 'bg-white/80 border-slate-200/90 hover:border-slate-300 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0 shadow-2xs ${
                    isSelected
                      ? 'bg-[#007791] text-white scale-105'
                      : 'bg-slate-50 border border-slate-200 text-slate-500 group-hover:scale-105'
                  }`}>
                    {trigger.icon}
                  </div>

                  <div className="space-y-1 flex-1">
                    <span className="font-mono text-xs font-bold text-slate-400 block">
                      {trigger.num}
                    </span>
                    <p className={`text-sm sm:text-base font-bold leading-snug transition-colors ${
                      isSelected ? 'text-[#061a2e]' : 'text-slate-700 group-hover:text-[#061a2e]'
                    }`}>
                      {trigger.text}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Canonical CTA Button */}
          <div className="pt-4 flex justify-center">
            <button
              type="button"
              onClick={onOpenContact}
              className="brand-button-gradient text-white text-sm sm:text-base font-extrabold px-9 py-4 rounded-full flex items-center space-x-2.5 shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>Discuss a Transformation Requirement</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </section>


      {/* 6. PRE-FOOTER CALL TO ACTION & CAPABILITY NAVIGATOR */}
      <CapabilityNavigatorSection
        currentPillar="transform"
        onOpenContact={onOpenContact}
        onSelectService={onSelectService}
        onBack={onBack}
      />

    </div>
  );
};
