import React, { useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  TrendingUp, 
  Briefcase, 
  LineChart, 
  Eye, 
  BarChart3, 
  Target, 
  ShieldCheck, 
  Workflow, 
  FileCheck,
  Building2,
  Users2,
  Landmark,
  Sparkles
} from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';

export const GrowingBusinessesPage = ({ onBack, onOpenContact, onSelectAudience }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 1. Key Solutions (Exact 9 items from Source of Truth)
  const keySolutions = [
    {
      num: "01",
      title: "Fractional CFO",
      desc: "Senior financial leadership tailored to your growth phase.",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      num: "02",
      title: "Budgeting & Forecasting",
      desc: "Build clear financial planning frameworks and predictive rolling models.",
      icon: <LineChart className="w-5 h-5" />
    },
    {
      num: "03",
      title: "Cash Flow Visibility",
      desc: "Gain full transparency over future cash requirements and working capital needs.",
      icon: <Eye className="w-5 h-5" />
    },
    {
      num: "04",
      title: "Management Reporting",
      desc: "Transform raw operational and financial numbers into decision-ready insights.",
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      num: "05",
      title: "Financial Modelling",
      desc: "Model growth scenarios, staffing, pricing, and capital investment requirements.",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      num: "06",
      title: "KPIs & Performance Frameworks",
      desc: "Identify and track the key operational metrics that drive performance.",
      icon: <Target className="w-5 h-5" />
    },
    {
      num: "07",
      title: "Finance Health Checks",
      desc: "Conduct structured reviews across people, processes, systems, and controls.",
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      num: "08",
      title: "Process Improvement & Systems",
      desc: "Optimize financial workflows and eliminate manual reporting overhead.",
      icon: <Workflow className="w-5 h-5" />
    },
    {
      num: "09",
      title: "Tax & Compliance",
      desc: "Connect compliance obligations directly into broader finance function operations.",
      icon: <FileCheck className="w-5 h-5" />
    }
  ];

  // 2. Progression Flow (Exact 4 stages from Source of Truth)
  const progressionStages = [
    { num: "01", name: "Looking backwards" },
    { num: "02", name: "Understanding performance" },
    { num: "03", name: "Predicting the future" },
    { num: "04", name: "Managing performance" }
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
            src={imgUrl("/images/growing_businesses.jpg")}
            alt="Growing Businesses"
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
            <span className="text-white font-bold truncate">Growing Businesses</span>
          </nav>

          {/* Sector Badge Tag: GROWING BUSINESSES */}
          <div className="flex items-center space-x-3.5 pt-1">
            <div className="p-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl flex items-center justify-center">
              <TrendingUp className="w-9 h-9 text-emerald-400" />
            </div>
            <div>
              <span className="inline-block text-[11px] sm:text-xs font-black tracking-widest text-[#2bb673] uppercase bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-1 rounded-full">
                SECTOR FOCUS: GROWING BUSINESSES
              </span>
            </div>
          </div>

          {/* Main Headline & Value Proposition Narrative */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              Growing Business Solutions
            </h1>
            <p className="text-xl sm:text-2xl text-emerald-400 font-bold tracking-tight">
              Financial leadership for organisations ready for their next stage.
            </p>

            <div className="pt-1 space-y-3 max-w-3xl text-slate-200 font-['Inter',sans-serif]">
              <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-slate-100">
                Growing businesses often reach a point where traditional accounting is no longer enough. Growth creates opportunity, but it also creates financial complexity. As organisations grow, informal processes, spreadsheets, and traditional accounting struggle to keep pace.
              </p>
              <p className="text-sm sm:text-base font-normal leading-relaxed text-slate-300">
                We provide practical finance capability that can grow with your organisation.
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
              <span>Start a Conversation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <span className="text-xs sm:text-sm text-slate-300 font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Scalable CFO &amp; Finance Function Architecture
            </span>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. KEY SOLUTIONS (9 Exact Items)                          */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061a2e] tracking-tight leading-tight">
              Key Solutions
            </h2>
          </div>

          {/* 3x3 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keySolutions.map((solution, idx) => (
              <div 
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-[#2bb673] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 text-[#2bb673] flex items-center justify-center group-hover:bg-[#061a2e] group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-300 shadow-2xs">
                      {solution.icon}
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      {solution.num}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-black text-[#061a2e] group-hover:text-[#2bb673] transition-colors leading-snug">
                      {solution.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-600 leading-relaxed font-['Inter',sans-serif]">
                      {solution.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 3. FROM OWNER-LED FINANCE TO MANAGEMENT-LED FINANCE       */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061a2e] tracking-tight leading-tight">
              From owner-led finance to management-led finance
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 font-semibold leading-relaxed">
              The objective is to help your organisation move from:
            </p>
          </div>

          {/* 4-Stage Connected Progression Flow */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm">
            
            {/* Desktop Horizontal Connected Sequence */}
            <div className="hidden lg:grid grid-cols-4 gap-6 relative items-center">
              {progressionStages.map((stage, idx) => {
                const isLast = idx === progressionStages.length - 1;
                return (
                  <div key={idx} className="relative flex flex-col justify-between">
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[#2bb673] hover:bg-emerald-50/20 hover:shadow-lg transition-all space-y-3 group text-center min-h-[140px] flex flex-col justify-between">
                      <span className="font-mono text-xs font-bold text-slate-400 block">
                        {stage.num}
                      </span>
                      <h3 className="text-base sm:text-lg font-black text-[#061a2e] group-hover:text-[#2bb673] transition-colors leading-snug">
                        {stage.name}
                      </h3>
                      <div className="w-2 h-2 rounded-full bg-[#2bb673] mx-auto opacity-70 group-hover:scale-125 transition-transform" />
                    </div>

                    {!isLast && (
                      <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-20 pointer-events-none">
                        <div className="w-8 h-8 rounded-full bg-white border border-slate-300 shadow-sm flex items-center justify-center text-[#2bb673]">
                          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile / Tablet Vertical Flow */}
            <div className="flex lg:hidden flex-col gap-3">
              {progressionStages.map((stage, idx) => {
                const isLast = idx === progressionStages.length - 1;
                return (
                  <React.Fragment key={idx}>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-between">
                      <div className="text-sm font-black text-[#061a2e]">
                        {stage.name}
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400">
                        {stage.num}
                      </span>
                    </div>
                    {!isLast && (
                      <div className="flex justify-center -my-1 text-[#2bb673]">
                        <ArrowRight className="w-4 h-4 rotate-90" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

          </div>

        </div>
      </section>



      {/* ======================================================== */}
      {/* 5. SECTOR NAVIGATOR                                       */}
      {/* ======================================================== */}
      <section className="py-16 bg-[#041220] text-white border-t border-slate-800/80 font-['Plus_Jakarta_Sans',sans-serif]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-b border-slate-800 pb-5 gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-[#2bb673] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Sector Navigator</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">Explore Other Target Sectors</h3>
            </div>
            
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center space-x-2 text-xs font-extrabold text-[#2bb673] hover:text-white bg-white/5 hover:bg-white/10 border border-slate-700 px-4 py-2.5 rounded-full transition-all cursor-pointer"
            >
              <span>View Who We Help Overview</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sectors.map((s) => {
              const isActive = s.id === 'growing-businesses';
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => onSelectAudience && onSelectAudience(s.id)}
                  className={`text-left p-6 rounded-2xl border transition-all cursor-pointer group ${
                    isActive 
                      ? 'bg-gradient-to-br from-[#2bb673]/30 to-[#061a2e] border-emerald-400 ring-2 ring-emerald-400/30' 
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-600 hover:bg-slate-800/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 font-mono">
                      Sector Focus
                    </span>
                    {s.icon}
                  </div>
                  <div className="text-lg font-black text-white group-hover:text-emerald-300 transition-colors">
                    {s.title}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {s.desc}
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
