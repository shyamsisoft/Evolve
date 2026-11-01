import React, { useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Landmark, 
  LineChart, 
  TrendingUp, 
  BarChart3, 
  Server, 
  Workflow, 
  Database, 
  Layers, 
  ShieldCheck, 
  Building2, 
  Users2, 
  Sparkles,
  Users,
  Cpu,
  FileSpreadsheet
} from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';
import { SectorNavigatorSection } from './SectorNavigatorSection';

export const LocalGovernmentPage = ({ onBack, onOpenContact, onSelectAudience }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 1. Key Solutions (Exact 7 items from Source of Truth)
  const keySolutions = [
    {
      num: "01",
      title: "Budgeting & Long-Term Financial Planning",
      icon: <LineChart className="w-5 h-5 text-emerald-600" />
    },
    {
      num: "02",
      title: "FP&A & Financial Modelling",
      icon: <TrendingUp className="w-5 h-5 text-[#007791]" />
    },
    {
      num: "03",
      title: "Forecasting & Management Reporting",
      icon: <BarChart3 className="w-5 h-5 text-cyan-600" />
    },
    {
      num: "04",
      title: "TechnologyOne Optimisation",
      icon: <Server className="w-5 h-5 text-indigo-600" />
    },
    {
      num: "05",
      title: "Finance Transformation",
      icon: <Workflow className="w-5 h-5 text-teal-600" />
    },
    {
      num: "06",
      title: "Data, BI & Reporting Architecture",
      icon: <Database className="w-5 h-5 text-sky-600" />
    },
    {
      num: "07",
      title: "Process Improvement & Capability Uplift",
      icon: <Layers className="w-5 h-5 text-emerald-600" />
    }
  ];

  // 2. Council Finance Health Check Dimensions (Exact 6 stages from Source of Truth)
  const healthCheckStages = [
    { num: "01", name: "People", icon: <Users className="w-5 h-5 text-indigo-600" /> },
    { num: "02", name: "Processes", icon: <Workflow className="w-5 h-5 text-[#007791]" /> },
    { num: "03", name: "Systems", icon: <Cpu className="w-5 h-5 text-cyan-600" /> },
    { num: "04", name: "Data", icon: <Database className="w-5 h-5 text-emerald-600" /> },
    { num: "05", name: "Reporting", icon: <BarChart3 className="w-5 h-5 text-teal-600" /> },
    { num: "06", name: "Controls", icon: <ShieldCheck className="w-5 h-5 text-rose-600" /> }
  ];

  const sectors = [
    {
      id: 'growing-businesses',
      title: 'Growing Businesses',
      desc: 'Scale-Ups & Mid-Market',
      icon: <TrendingUp className="w-5 h-5 text-[#2bb673]" />
    },
    {
      id: 'established-corporate',
      title: 'Established Corporate',
      desc: 'Enterprise & M&A',
      icon: <Building2 className="w-5 h-5 text-[#2bb673]" />
    },
    {
      id: 'non-profit-community',
      title: 'Not-for-Profit & Community',
      desc: 'Purpose & Grants',
      icon: <Users2 className="w-5 h-5 text-[#2bb673]" />
    },
    {
      id: 'local-government',
      title: 'Local Government',
      desc: 'Public Sector LTFS',
      icon: <Landmark className="w-5 h-5 text-[#2bb673]" />
    }
  ];

  return (
    <div className="pt-20 sm:pt-24 pb-20 bg-[#f8fafc] text-slate-800 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#2bb673] selection:text-white animate-in fade-in duration-300">

      {/* ======================================================== */}
      {/* 1. HERO SECTION (EXACT DESIGN MATCH)                     */}
      {/* ======================================================== */}
      <section className="relative min-h-[64vh] flex items-center bg-[#061a2e] text-white overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
        
        {/* Background Artwork with Brand Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={imgUrl("/images/local_government.jpg")}
            alt="Local Government / Councils"
            className="w-full h-full object-cover object-center opacity-30 transform scale-105"
            onError={(e) => {
              const fallback = imgUrl("/images/hero_summit.jpg");
              if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061a2e] via-[#061a2e]/95 to-[#007791]/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-transparent to-[#061a2e]/70"></div>
        </div>

        {/* Ambient Radial Lights */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#007791]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#2bb673]/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-6 sm:space-y-7">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-slate-300">
            <button 
              type="button"
              onClick={onBack} 
              className="inline-flex items-center space-x-1.5 text-emerald-400 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Who We Help</span>
            </button>
            <span className="text-slate-500">/</span>
            <span className="text-cyan-300 font-bold">SECTOR</span>
            <span className="text-slate-500">/</span>
            <span className="text-white font-bold truncate">Local Government</span>
          </nav>

          {/* Sector Badge Tag: LOCAL GOVERNMENT */}
          <div className="flex items-center space-x-3.5 pt-1">
            <div className="p-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl flex items-center justify-center">
              <Landmark className="w-9 h-9 text-emerald-400" />
            </div>
            <div>
              <span className="inline-block text-[11px] sm:text-xs font-black tracking-widest text-[#2bb673] uppercase bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-1 rounded-full">
                SECTOR FOCUS: LOCAL GOVERNMENT
              </span>
            </div>
          </div>

          {/* Main Headline & Value Proposition Narrative */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Local Government Solutions
            </h1>
            <p className="text-xl sm:text-2xl text-emerald-400 font-bold tracking-tight">
              Better financial insight for better public outcomes.
            </p>

            <div className="pt-1 space-y-3 max-w-3xl text-slate-200 font-['Inter',sans-serif]">
              <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-slate-100">
                Councils operate in complex environments where financial sustainability, planning, governance, and service delivery are closely connected. We combine finance, transformation, systems, data, and reporting capability to support councils in achieving better public outcomes.
              </p>
            </div>
          </div>

          {/* Immediate Call to Action Button */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onOpenContact}
              className="brand-button-gradient text-white text-sm sm:text-base font-extrabold px-8 py-4 rounded-full flex items-center space-x-3 shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer group"
            >
              <span>Discuss Your Council's Finance Challenge</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <span className="text-xs sm:text-sm text-slate-300 font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              LTFP, Systems Modernisation &amp; Council Finance Architecture
            </span>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. KEY SOLUTIONS (Exact 7 Items from Document)            */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#061a2e] tracking-tight leading-snug">
              Key Solutions
            </h2>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keySolutions.map((solution, idx) => (
              <div 
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-[#2bb673] shadow-sm hover:shadow-xl transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 text-[#2bb673] flex items-center justify-center group-hover:bg-[#061a2e] group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-300 shrink-0 shadow-2xs">
                  {solution.icon}
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-xs font-bold text-slate-400 block">
                    {solution.num}
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-[#061a2e] group-hover:text-[#2bb673] transition-colors leading-snug">
                    {solution.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 3. COUNCIL FINANCE HEALTH CHECK                           */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#061a2e] tracking-tight leading-snug">
              Council Finance Health Check
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 font-semibold leading-relaxed">
              A structured assessment across: People → Processes → Systems → Data → Reporting → Controls.
            </p>
          </div>

          {/* 6-Stage Connected Sequence / Dimensions */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm space-y-8">
            
            {/* Desktop Horizontal Connected Sequence */}
            <div className="hidden lg:grid grid-cols-6 gap-4 relative items-center">
              {healthCheckStages.map((stage, idx) => {
                const isLast = idx === healthCheckStages.length - 1;
                return (
                  <div key={idx} className="relative flex flex-col items-center">
                    <div className="w-full min-h-[110px] p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[#2bb673] hover:bg-emerald-50/20 hover:shadow-md transition-all text-center flex flex-col justify-between group">
                      <div className="flex items-center justify-between">
                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                          {stage.icon}
                        </div>
                        <span className="font-mono text-xs font-bold text-slate-400">
                          {stage.num}
                        </span>
                      </div>
                      <div className="text-base font-black text-[#061a2e] group-hover:text-[#2bb673] transition-colors leading-tight text-left">
                        {stage.name}
                      </div>
                    </div>

                    {!isLast && (
                      <div className="absolute top-1/2 -right-3 -translate-y-1/2 z-20 pointer-events-none">
                        <div className="w-6 h-6 rounded-full bg-white border border-slate-300 shadow-2xs flex items-center justify-center text-[#2bb673]">
                          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile / Tablet Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:hidden gap-3">
              {healthCheckStages.map((stage, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    {stage.icon}
                    <div className="text-sm font-black text-[#061a2e]">
                      {stage.name}
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    {stage.num}
                  </span>
                </div>
              ))}
            </div>

            {/* Objective Statement & Action */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-base sm:text-lg font-bold text-[#061a2e]">
                Objective: Identify practical opportunities to improve efficiency, insight, and financial management.
              </p>

              <button
                type="button"
                onClick={onOpenContact}
                className="brand-button-gradient text-white text-sm font-extrabold px-6 py-3.5 rounded-xl shadow-md flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer shrink-0"
              >
                <span>Discuss Your Council's Finance Challenge</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 4. STANDARDIZED SECTOR NAVIGATOR & CTA                   */}
      {/* ======================================================== */}
      <SectorNavigatorSection
        currentSector="local-government"
        onOpenContact={onOpenContact}
        onSelectAudience={onSelectAudience}
        onBack={onBack}
      />

    </div>
  );
};
