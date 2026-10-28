import React, { useEffect } from 'react';
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
  PieChart
} from 'lucide-react';
import { PillarIcon } from './BrandLogo';
import { imgUrl } from '../utils/imgUrl';

export const TransformPage = ({ onBack, onOpenContact, onSelectService }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 1. Finance Transformation Services (9 Exact items from Source of Truth)
  const transformationServices = [
    {
      num: "01",
      title: "Transformation strategy",
      icon: <Target className="w-5 h-5" />
    },
    {
      num: "02",
      title: "Current-state assessment",
      icon: <Activity className="w-5 h-5" />
    },
    {
      num: "03",
      title: "Future-state design",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      num: "04",
      title: "Process redesign",
      icon: <Workflow className="w-5 h-5" />
    },
    {
      num: "05",
      title: "ERP implementation and optimisation",
      icon: <Server className="w-5 h-5" />
    },
    {
      num: "06",
      title: "Automation",
      icon: <Zap className="w-5 h-5" />
    },
    {
      num: "07",
      title: "Reporting transformation",
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      num: "08",
      title: "Finance capability uplift",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      num: "09",
      title: "Transformation program support",
      icon: <Layers className="w-5 h-5" />
    }
  ];

  // 2. Data Integration items (Exact words from source of truth)
  const dataIntegrationItems = [
    "Data mapping",
    "migration",
    "data structures",
    "data models",
    "Chart of Accounts",
    "system integration",
    "data quality",
    "reporting datasets"
  ];

  // 3. Reporting Architecture Pipeline (5 Stages from Source of Truth)
  const reportingArchitectureFlow = [
    {
      num: "01",
      name: "Source systems",
      icon: <Server className="w-5 h-5" />
    },
    {
      num: "02",
      name: "Data",
      icon: <Database className="w-5 h-5" />
    },
    {
      num: "03",
      name: "Reporting models",
      icon: <Workflow className="w-5 h-5" />
    },
    {
      num: "04",
      name: "Dashboards",
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      num: "05",
      name: "Management insight",
      icon: <TrendingUp className="w-5 h-5" />
    }
  ];

  // 4. TechnologyOne items (Exact words from source of truth)
  const technologyOneItems = [
    "System optimisation",
    "process redesign",
    "configuration review",
    "reporting",
    "data integration",
    "transformation support"
  ];

  // 5. When Transformation Makes Sense (9 Exact triggers from source of truth)
  const transformationTriggers = [
    {
      num: "01",
      text: "Finance relies heavily on spreadsheets.",
      icon: <FileSpreadsheet className="w-5 h-5 text-amber-500" />
    },
    {
      num: "02",
      text: "Reporting is highly manual.",
      icon: <Clock className="w-5 h-5 text-amber-600" />
    },
    {
      num: "03",
      text: "Your ERP is not delivering expected benefits.",
      icon: <AlertCircle className="w-5 h-5 text-rose-500" />
    },
    {
      num: "04",
      text: "Different systems produce inconsistent information.",
      icon: <Shuffle className="w-5 h-5 text-indigo-500" />
    },
    {
      num: "05",
      text: "Data is difficult to reconcile.",
      icon: <ShieldAlert className="w-5 h-5 text-teal-600" />
    },
    {
      num: "06",
      text: "Management lacks timely insight.",
      icon: <TrendingUp className="w-5 h-5 text-sky-500" />
    },
    {
      num: "07",
      text: "Processes haven't kept pace with organizational growth.",
      icon: <Network className="w-5 h-5 text-purple-500" />
    },
    {
      num: "08",
      text: "You are implementing a new ERP.",
      icon: <Server className="w-5 h-5 text-cyan-600" />
    },
    {
      num: "09",
      text: "Your finance team spends too much time processing and too little time analysing.",
      icon: <PieChart className="w-5 h-5 text-emerald-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#007791] selection:text-white">

      {/* ======================================================== */}
      {/* 1. HERO / HEADER SECTION (Strictly source document only) */}
      {/* ======================================================== */}
      <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 bg-[#061a2e] text-white overflow-hidden">
        
        {/* Background Photo with Dark Tech Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={imgUrl("/images/finance_transform.jpg")}
            alt="Finance Transformation, Data & Technology"
            className="w-full h-full object-cover object-center scale-105 filter brightness-40 contrast-125"
            onError={(e) => {
              const fallback = imgUrl("/images/hero_summit.jpg");
              if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061a2e] via-[#061a2e]/90 to-[#061a2e]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(#007791_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
        </div>

        {/* Ambient Glowing Orbs */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs font-bold text-slate-300">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>What We Do</span>
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-cyan-400 font-extrabold uppercase tracking-wider">TRANSFORM</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-300 truncate max-w-[200px] sm:max-w-none">
              Finance Transformation, Data &amp; Technology
            </span>
          </nav>

          <div className="max-w-4xl space-y-6">
            
            {/* Brand Pillar Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-extrabold tracking-widest uppercase backdrop-blur-md shadow-lg">
              <PillarIcon type="transform" className="w-3.5 h-3.5" />
              <span>TRANSFORM</span>
            </div>

            {/* Service Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Finance Transformation, Data &amp; Technology
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl font-bold text-cyan-300 tracking-tight leading-snug">
              Connect people, process, technology and data.
            </p>

            {/* Overview Narrative */}
            <div className="pt-1 space-y-3 max-w-3xl text-slate-200 font-['Inter',sans-serif]">
              <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-slate-100">
                Technology alone does not transform finance. Transformation succeeds when systems, processes, data and people work together to create measurable improvement.
              </p>
              <p className="text-sm sm:text-base font-normal leading-relaxed text-slate-300">
                Technology should make finance better — simpler, faster, more reliable, and more insightful.
              </p>
            </div>

            {/* Action Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onOpenContact}
                className="brand-button-gradient text-white text-sm sm:text-base font-extrabold px-8 py-4 rounded-xl shadow-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer group"
              >
                <span>Discuss a Transformation Requirement</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 2. FINANCE TRANSFORMATION SERVICES                       */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061a2e] tracking-tight leading-tight">
              Finance Transformation Services
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 font-semibold leading-relaxed">
              We support organisations with:
            </p>
          </div>

          {/* 3x3 Service Cards Grid (Exact 9 Services from Document) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transformationServices.map((service, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#007791] shadow-sm hover:shadow-xl transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-200 text-[#007791] flex items-center justify-center group-hover:bg-[#061a2e] group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300 shrink-0 shadow-2xs">
                  {service.icon}
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-xs font-bold text-slate-400">
                    {service.num}
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-[#061a2e] group-hover:text-[#007791] transition-colors leading-snug">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 3. FINANCE DATA INTEGRATION & ARCHITECTURE               */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061a2e] tracking-tight leading-tight">
              Finance Data Integration &amp; Architecture
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 font-semibold leading-relaxed">
              Reliable reporting starts with reliable data.
            </p>
          </div>

          <div className="space-y-8">
            
            {/* Data Integration */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm space-y-6">
              <h3 className="text-2xl font-black text-[#061a2e] tracking-tight">
                Data Integration
              </h3>

              {/* Exact Data Integration Items */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {dataIntegrationItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-indigo-400 hover:bg-indigo-50/30 transition-all flex items-center gap-2.5 group"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#007791] group-hover:scale-125 transition-transform shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#061a2e] transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reporting Architecture */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-2xl font-black text-[#061a2e] tracking-tight">
                  Reporting Architecture
                </h3>
                <p className="text-sm sm:text-base font-semibold text-slate-600">
                  Design reporting environments connecting:
                </p>
              </div>

              {/* Connected Pipeline Flow */}
              <div className="relative pt-2">
                
                {/* Desktop 5-Stage Connected Pipeline */}
                <div className="hidden lg:grid grid-cols-5 gap-4 relative">
                  {reportingArchitectureFlow.map((stage, idx) => {
                    const isLast = idx === reportingArchitectureFlow.length - 1;
                    return (
                      <div key={idx} className="relative flex flex-col justify-between">
                        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[#007791] hover:bg-teal-50/20 hover:shadow-lg transition-all space-y-3 group text-center">
                          
                          <div className="w-12 h-12 mx-auto rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#007791] group-hover:bg-[#061a2e] group-hover:text-cyan-400 transition-colors shadow-2xs">
                            {stage.icon}
                          </div>

                          <span className="font-mono text-xs font-bold text-slate-400 block">
                            {stage.num}
                          </span>

                          <h4 className="text-base font-black text-[#061a2e] group-hover:text-[#007791] transition-colors leading-snug">
                            {stage.name}
                          </h4>
                        </div>

                        {/* Directional Connecting Arrow (except last) */}
                        {!isLast && (
                          <div className="absolute top-1/2 -right-3 -translate-y-1/2 z-20 pointer-events-none">
                            <div className="w-6 h-6 rounded-full bg-white border border-slate-300 shadow-sm flex items-center justify-center text-[#007791]">
                              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Mobile / Tablet Vertical Flow */}
                <div className="flex lg:hidden flex-col gap-3">
                  {reportingArchitectureFlow.map((stage, idx) => {
                    const isLast = idx === reportingArchitectureFlow.length - 1;
                    return (
                      <React.Fragment key={idx}>
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-200 text-[#007791] flex items-center justify-center shrink-0">
                              {stage.icon}
                            </div>
                            <div className="text-sm font-black text-[#061a2e]">{stage.name}</div>
                          </div>
                          <span className="font-mono text-xs font-bold text-slate-400">
                            {stage.num}
                          </span>
                        </div>
                        {!isLast && (
                          <div className="flex justify-center -my-1 text-[#007791]">
                            <ArrowRight className="w-4 h-4 rotate-90" />
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 4. TECHNOLOGYONE & POWER BI ANALYTICS                     */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061a2e] tracking-tight leading-tight">
            TechnologyOne &amp; Power BI Analytics
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* CARD 1: TechnologyOne (Exact Copy) */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-slate-200/90 hover:border-[#007791] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-6">
                
                <div className="flex items-center gap-3.5 border-b border-slate-100 pb-5">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 text-[#007791] flex items-center justify-center group-hover:bg-[#007791] group-hover:text-white transition-colors shadow-2xs">
                    <Server className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <h3 className="text-2xl font-black text-[#061a2e] tracking-tight">
                    TechnologyOne
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {technologyOneItems.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-teal-400 hover:bg-teal-50/30 transition-all flex items-center gap-3 group/item"
                    >
                      <span className="w-5 h-5 rounded-full bg-teal-100 border border-teal-300 flex items-center justify-center text-[#007791] text-[11px] font-black group-hover/item:bg-[#007791] group-hover/item:text-white transition-colors shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                      <span className="text-sm font-bold text-slate-800 group-hover/item:text-teal-900 transition-colors">
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
                  className="w-full brand-button-gradient text-white text-sm font-extrabold px-5 py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
                >
                  <span>Discuss a Transformation Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* CARD 2: Power BI & Financial Analytics (Exact Copy) */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-slate-200/90 hover:border-emerald-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-6">
                
                <div className="flex items-center gap-3.5 border-b border-slate-100 pb-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center group-hover:bg-[#2bb673] group-hover:text-white transition-colors shadow-2xs">
                    <BarChart3 className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <h3 className="text-2xl font-black text-[#061a2e] tracking-tight">
                    Power BI &amp; Financial Analytics
                  </h3>
                </div>

                {/* Exact Copy Paragraph */}
                <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200/80">
                  <p className="text-base sm:text-lg font-bold text-slate-800 leading-relaxed">
                    Turn financial and operational data into clear, actionable information for leaders.
                  </p>
                </div>

              </div>

              <div className="pt-8 border-t border-slate-100 mt-8">
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="w-full brand-button-gradient text-white text-sm font-extrabold px-5 py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
                >
                  <span>Discuss a Transformation Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 5. WHEN TRANSFORMATION MAKES SENSE (9 EXACT TRIGGERS)    */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061a2e] tracking-tight leading-tight">
              When Transformation Makes Sense
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 font-semibold leading-relaxed">
              Consider transformation when:
            </p>
          </div>

          {/* 3x3 Diagnostic Grid (Exact 9 Triggers from Document) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {transformationTriggers.map((trigger, idx) => (
              <div 
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-amber-400 shadow-sm hover:shadow-xl transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xs shrink-0">
                  {trigger.icon}
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-xs font-bold text-slate-400 block">
                    {trigger.num}
                  </span>
                  <p className="text-sm sm:text-base font-bold text-[#061a2e] group-hover:text-amber-950 transition-colors leading-snug">
                    {trigger.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 6. CALL TO ACTION (CTA)                                  */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-[#061a2e] via-[#092644] to-[#041220] text-white relative overflow-hidden border-t border-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
        
        {/* Glow Spheres */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Discuss a Transformation Requirement
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed font-['Inter',sans-serif]">
            Connect people, process, technology and data.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenContact}
              className="w-full sm:w-auto brand-button-gradient text-white text-base font-extrabold px-9 py-4 rounded-full flex items-center justify-center space-x-2.5 shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer group"
            >
              <span>Discuss a Transformation Requirement</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 7. PILLAR SWITCHER BAR (Capability Navigator)            */}
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
              { id: 'protect', title: 'PROTECT', desc: 'Tax & Compliance', tag: 'Governance Defense' }
            ].map((p) => {
              const isActive = p.id === 'transform';
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => onSelectService && onSelectService(p.id)}
                  className={`text-left p-6 rounded-2xl border transition-all cursor-pointer group ${
                    isActive 
                      ? 'bg-gradient-to-br from-[#007791]/30 to-[#061a2e] border-cyan-400 ring-2 ring-cyan-400/30' 
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-600 hover:bg-slate-800/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 font-mono">
                      {p.tag}
                    </span>
                    <PillarIcon type={p.id} className="w-4 h-4" />
                  </div>
                  <div className="text-lg font-black text-white group-hover:text-cyan-300 transition-colors">
                    {p.title}
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
