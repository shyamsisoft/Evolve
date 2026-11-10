import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Workflow, 
  Server, 
  Zap, 
  BarChart3, 
  TrendingUp, 
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
  Layers3,
  Layers
} from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';
import { CapabilityNavigatorSection } from './CapabilityNavigatorSection';
import { SectionDivider } from './SectionDivider';
import { TransformHero } from './TransformHero';
import FinanceTransformationServicesGrid from './FinanceTransformationServicesGrid';

export const TransformPage = ({ data = {}, onBack, onOpenContact, onSelectService }) => {
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
  const defaultDataIntegrationItems = [
    { title: "Data mapping", icon: <Network className="w-4 h-4 text-emerald-600" /> },
    { title: "Migration", icon: <Zap className="w-4 h-4 text-teal-600" /> },
    { title: "Data structures", icon: <Layers3 className="w-4 h-4 text-emerald-600" /> },
    { title: "Data models", icon: <Database className="w-4 h-4 text-teal-600" /> },
    { title: "Chart of Accounts", icon: <SlidersHorizontal className="w-4 h-4 text-emerald-600" /> },
    { title: "System integration", icon: <Server className="w-4 h-4 text-teal-600" /> },
    { title: "Data quality", icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" /> },
    { title: "Reporting datasets", icon: <BarChart3 className="w-4 h-4 text-teal-600" /> }
  ];

  const dataIntegrationItems = (data?.dataIntegrationItems && data.dataIntegrationItems.length > 0)
    ? data.dataIntegrationItems.map((item, idx) => ({
        title: typeof item === 'string' ? item : (item.title || item),
        icon: defaultDataIntegrationItems[idx % defaultDataIntegrationItems.length]?.icon
      }))
    : defaultDataIntegrationItems;

  // 3. Reporting Architecture Flow (5 Exact Stages from Source of Truth)
  const reportingArchitectureFlow = [
    { num: "01", name: "Source systems", icon: <Server className="w-5 h-5 stroke-[2.2]" /> },
    { num: "02", name: "Data", icon: <Database className="w-5 h-5 stroke-[2.2]" /> },
    { num: "03", name: "Reporting models", icon: <Workflow className="w-5 h-5 stroke-[2.2]" /> },
    { num: "04", name: "Dashboards", icon: <BarChart3 className="w-5 h-5 stroke-[2.2]" /> },
    { num: "05", name: "Management insight", icon: <TrendingUp className="w-5 h-5 stroke-[2.2]" /> }
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
  const defaultTransformationTriggers = [
    { num: "01", text: "Finance relies heavily on spreadsheets.", icon: <FileSpreadsheet className="w-5 h-5 text-emerald-600 stroke-[2.2]" /> },
    { num: "02", text: "Reporting is highly manual.", icon: <Clock className="w-5 h-5 text-emerald-600 stroke-[2.2]" /> },
    { num: "03", text: "Your ERP is not delivering expected benefits.", icon: <AlertCircle className="w-5 h-5 text-teal-600 stroke-[2.2]" /> },
    { num: "04", text: "Different systems produce inconsistent information.", icon: <Shuffle className="w-5 h-5 text-teal-600 stroke-[2.2]" /> },
    { num: "05", text: "Data is difficult to reconcile.", icon: <ShieldAlert className="w-5 h-5 text-emerald-600 stroke-[2.2]" /> },
    { num: "06", text: "Management lacks timely insight.", icon: <TrendingUp className="w-5 h-5 text-teal-600 stroke-[2.2]" /> },
    { num: "07", text: "Processes haven't kept pace with organizational growth.", icon: <Network className="w-5 h-5 text-emerald-600 stroke-[2.2]" /> },
    { num: "08", text: "You are implementing a new ERP.", icon: <Server className="w-5 h-5 text-teal-600 stroke-[2.2]" /> },
    { num: "09", text: "Your finance team spends too much time processing and too little time analysing.", icon: <PieChart className="w-5 h-5 text-emerald-600 stroke-[2.2]" /> }
  ];

  const transformationTriggers = (data?.transformationTriggers && data.transformationTriggers.length > 0)
    ? data.transformationTriggers.map((t, idx) => ({
        num: String(idx + 1).padStart(2, '0'),
        text: typeof t === 'string' ? t : (t.text || t.title),
        icon: defaultTransformationTriggers[idx % defaultTransformationTriggers.length]?.icon
      }))
    : defaultTransformationTriggers;

  return (
    <div className="pt-20 sm:pt-24 pb-0 bg-[#061a2e] text-white font-['Plus_Jakarta_Sans',sans-serif] selection:bg-emerald-500 selection:text-slate-950">

      {/* 1. HERO SECTION */}
      <TransformHero data={data?.hero} onBack={onBack} onOpenContact={onOpenContact} />

      {/* 2. FINANCE TRANSFORMATION SERVICES */}
      <SectionDivider />
      <FinanceTransformationServicesGrid services={data?.services} />

      {/* 3. FINANCE DATA INTEGRATION & ARCHITECTURE */}
      <SectionDivider />
      <section className="py-20 sm:py-28 bg-[#061a2e] border-b border-white/10 relative overflow-hidden">
        {/* Ambient Subtle Radial Lights */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* Section Header */}
          <div className="space-y-3">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-emerald-400 border-l-2 border-emerald-400 pl-3">
              INFORMATION ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
              Finance Data Integration &amp; Architecture
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
              Reliable reporting starts with reliable data.
            </p>
          </div>

          {/* Part A: Reporting Architecture Flow */}
          <div className="bg-white/[0.03] rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 space-y-8">
            
            <div className="border-b border-white/10 pb-5 space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Reporting Architecture
              </h3>
              <p className="text-sm sm:text-base font-medium text-slate-300">
                Design reporting environments connecting:
              </p>
            </div>

            {/* 5-Stage Connected Pipeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 relative">
              {reportingArchitectureFlow.map((stage, idx) => {
                const isActive = activePipelineStage === idx;
                const isLast = idx === reportingArchitectureFlow.length - 1;
                return (
                  <div key={idx} className="relative flex flex-col justify-between">
                    <button
                      type="button"
                      onClick={() => setActivePipelineStage(idx)}
                      className={`w-full p-5 rounded-xl border text-center transition-all duration-200 cursor-pointer flex flex-col justify-between items-center h-full group ${
                        isActive
                          ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-xl scale-[1.02]'
                          : 'bg-white/[0.04] text-white border-white/10 hover:border-emerald-400/50 hover:bg-white/[0.07]'
                      }`}
                    >
                      <div className={`w-11 h-11 rounded-lg flex items-center justify-center transition-all shrink-0 ${
                        isActive 
                          ? 'bg-slate-950 text-emerald-400 font-bold shadow-md shadow-emerald-500/30' 
                          : 'bg-white/10 border border-white/10 text-slate-300 group-hover:bg-emerald-500/20 group-hover:text-emerald-300'
                      }`}>
                        {stage.icon}
                      </div>

                      <div className="space-y-1 pt-3">
                        <span className={`font-mono text-xs font-bold block ${
                          isActive ? 'text-slate-950 font-black' : 'text-emerald-300'
                        }`}>
                          {stage.num}
                        </span>
                        <h4 className={`text-sm sm:text-base font-semibold leading-snug ${
                          isActive ? 'text-slate-950 font-bold' : 'text-white'
                        }`}>
                          {stage.name}
                        </h4>
                      </div>
                    </button>

                    {/* Connecting Chevron (Desktop only) */}
                    {!isLast && (
                      <div className="hidden lg:flex absolute top-1/2 -right-2.5 -translate-y-1/2 z-20 pointer-events-none">
                        <div className="w-5 h-5 rounded-full bg-[#061a2e] border border-white/20 shadow-xs flex items-center justify-center text-slate-400">
                          <ChevronRight className="w-3 h-3 stroke-[2.5]" />
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
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/10 shadow-xl flex flex-col justify-end min-h-[360px] group bg-slate-900/80">
              <div className="absolute inset-0 z-0">
                <img
                  src={imgUrl("/images/step_insight.jpg")}
                  alt="Data Integration"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-65 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-[#061a2e]/50 to-transparent" />
              </div>

              <div className="relative z-10 p-6 sm:p-7">
                <div className="p-5 rounded-xl bg-[#061a2e]/90 backdrop-blur-md border border-white/15 text-white space-y-1.5 shadow-2xl">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                    Data Integration
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium">
                    Reliable reporting starts with reliable data.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: 8 Data Integration Dimensions */}
            <div className="lg:col-span-7 bg-white/[0.03] rounded-2xl p-6 sm:p-8 lg:p-9 border border-white/10 flex flex-col justify-between">
              
              <div className="space-y-4">
                <div className="border-b border-white/10 pb-3">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Data Integration Dimensions
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {dataIntegrationItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-emerald-400/50 hover:bg-white/[0.08] transition-all flex items-center gap-3.5 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 group-hover:scale-105 transition-transform shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
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

      {/* 4. TECHNOLOGYONE & POWER BI ANALYTICS */}
      <SectionDivider />
      <section className="py-20 sm:py-28 bg-white text-[#061a2e] border-b border-slate-200 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-3">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-emerald-400 border-l-2 border-emerald-400 pl-3">
              PLATFORMS &amp; TOOLING
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#061a2e] tracking-tight leading-snug">
              TechnologyOne &amp; Power BI Analytics
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* CARD 1: TechnologyOne */}
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-6">
                
                <div className="flex items-center gap-3.5 border-b border-slate-200 pb-5">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 text-emerald-300 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                    <Server className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#061a2e] tracking-tight">
                    TechnologyOne
                  </h3>
                </div>

                {/* 6 Exact Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {technologyOneItems.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-emerald-400 shadow-xs transition-all flex items-center gap-3"
                    >
                      <span className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center text-[10px] font-black shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

              </div>


            </div>

            {/* CARD 2: Power BI & Financial Analytics */}
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-6">
                
                <div className="flex items-center gap-3.5 border-b border-slate-200 pb-5">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 text-emerald-300 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                    <BarChart3 className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#061a2e] tracking-tight">
                    Power BI &amp; Financial Analytics
                  </h3>
                </div>

                {/* Exact Copy Value Statement */}
                <div className="p-5 rounded-xl bg-white/[0.04] border border-white/10">
                  <p className="text-base sm:text-lg font-semibold text-slate-200 leading-relaxed">
                    Turn financial and operational data into clear, actionable information for leaders.
                  </p>
                </div>

                {/* Photo Feature */}
                <div className="relative rounded-xl overflow-hidden h-44 border border-white/10 bg-slate-900">
                  <img
                    src={imgUrl("/images/finance_transform.jpg")}
                    alt="Power BI & Financial Analytics"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white text-xs font-semibold tracking-wide">
                    Executive Financial Analytics
                  </div>
                </div>

              </div>


            </div>

          </div>

        </div>
      </section>

      {/* 5. WHEN TRANSFORMATION MAKES SENSE */}
      <SectionDivider />
      <section className="py-20 sm:py-28 bg-[#061a2e] border-b border-white/10 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-3">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-emerald-400 border-l-2 border-emerald-400 pl-3">
              STRATEGIC READINESS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
              When Transformation Makes Sense
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
              Consider transformation when:
            </p>
          </div>

          {/* 3x3 Diagnostic Grid matching Logo Theme */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {transformationTriggers.map((trigger, idx) => {
              const isSelected = selectedTriggers.has(idx);
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => toggleTrigger(idx)}
                  className={`p-5 rounded-xl border text-left cursor-pointer transition-all duration-200 flex items-start gap-4 ${
                    isSelected
                      ? 'bg-emerald-500/15 border-emerald-400/80 shadow-sm ring-1 ring-emerald-400/30'
                      : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all shrink-0 ${
                    isSelected
                      ? 'bg-emerald-400 text-slate-950 font-bold'
                      : 'bg-white/10 text-slate-300'
                  }`}>
                    {trigger.icon}
                  </div>

                  <div className="space-y-1 flex-1">
                    <span className={`font-mono text-xs font-bold block ${
                      isSelected ? 'text-emerald-300' : 'text-slate-400'
                    }`}>
                      {trigger.num}
                    </span>
                    <p className={`text-sm sm:text-[15px] font-semibold leading-snug transition-colors ${
                      isSelected ? 'text-white' : 'text-slate-200'
                    }`}>
                      {trigger.text}
                    </p>
                  </div>
                </button>
              );
            })}
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
