import React, { useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  HeartHandshake, 
  LineChart, 
  Coins, 
  BarChart3, 
  FileSpreadsheet, 
  Activity, 
  TrendingUp, 
  ShieldCheck, 
  Layers,
  HelpCircle,
  Building2,
  Users2,
  Landmark,
  Sparkles
} from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';

export const NotForProfitPage = ({ onBack, onOpenContact, onSelectAudience }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 1. Key Solutions (Exact 9 items from Source of Truth)
  const keySolutions = [
    {
      num: "01",
      title: "CFO Advisory & Financial Sustainability",
      icon: <HeartHandshake className="w-5 h-5 text-emerald-600" />
    },
    {
      num: "02",
      title: "Budgeting & Forecasting",
      icon: <LineChart className="w-5 h-5 text-[#007791]" />
    },
    {
      num: "03",
      title: "Cash-Flow Management",
      icon: <Coins className="w-5 h-5 text-cyan-600" />
    },
    {
      num: "04",
      title: "Board Reporting",
      icon: <BarChart3 className="w-5 h-5 text-indigo-600" />
    },
    {
      num: "05",
      title: "Funding and Grant Reporting",
      icon: <FileSpreadsheet className="w-5 h-5 text-teal-600" />
    },
    {
      num: "06",
      title: "NDIS Financial Management",
      icon: <Activity className="w-5 h-5 text-emerald-600" />
    },
    {
      num: "07",
      title: "Financial Modelling",
      icon: <TrendingUp className="w-5 h-5 text-sky-600" />
    },
    {
      num: "08",
      title: "Finance Health Checks",
      icon: <ShieldCheck className="w-5 h-5 text-[#007791]" />
    },
    {
      num: "09",
      title: "Finance Transformation & Reporting Analytics",
      icon: <Layers className="w-5 h-5 text-indigo-600" />
    }
  ];

  // 2. Key Questions We Help Answer (Exact 7 questions from Source of Truth)
  const keyQuestions = [
    "Are we financially sustainable?",
    "Where are our greatest risks?",
    "Are our programs financially viable?",
    "How much cash do we need?",
    "Are our funding arrangements sustainable?",
    "Does our board have the information it needs?",
    "Is our finance function supporting our purpose?"
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
    <div className="min-h-screen bg-white text-slate-800 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#2bb673] selection:text-white">

      {/* ======================================================== */}
      {/* 1. HERO / HEADER SECTION (Strictly source document only) */}
      {/* ======================================================== */}
      <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 bg-[#061a2e] text-white overflow-hidden">
        
        {/* Background Photo with Dark Tech Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={imgUrl("/images/non_profit_community.jpg")}
            alt="Not-for-Profit & Community Organisations"
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
              <span>Who We Help</span>
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-[#2bb673] font-extrabold uppercase tracking-wider">Not-for-Profit &amp; Community</span>
          </nav>

          <div className="max-w-4xl space-y-6">
            
            {/* Audience Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs font-extrabold tracking-widest uppercase backdrop-blur-md shadow-lg">
              <Users2 className="w-3.5 h-3.5 text-[#2bb673]" />
              <span>Audience: Not-for-Profit &amp; Community Organisations</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Not-for-Profit &amp; Community Solutions
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl font-bold text-emerald-300 tracking-tight leading-snug">
              Financial capability that supports your purpose.
            </p>

            {/* Overview Narrative (Directly in Hero) */}
            <div className="pt-1 space-y-3 max-w-3xl text-slate-200 font-['Inter',sans-serif]">
              <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-slate-100">
                Financial sustainability and community impact are closely connected.
              </p>
              <p className="text-sm sm:text-base font-normal leading-relaxed text-slate-300">
                Financial sustainability enables organisations to deliver their purpose with confidence. We help NFP and community organisations understand their financial position, strengthen their finance functions, and make better-informed decisions.
              </p>
            </div>

            {/* Hero CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onOpenContact}
                className="brand-button-gradient text-white text-sm sm:text-base font-extrabold px-8 py-4 rounded-xl shadow-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer group"
              >
                <span>Discuss Your NFP's Finance Needs</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 2. KEY SOLUTIONS (Exact 9 Items from Document)            */}
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
      {/* 3. KEY QUESTIONS WE HELP ANSWER (Exact 7 Questions)      */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061a2e] tracking-tight leading-tight">
              Key Questions We Help Answer
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {keyQuestions.map((question, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-400 shadow-sm hover:shadow-xl transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-[#2bb673] flex items-center justify-center group-hover:bg-[#2bb673] group-hover:text-white transition-colors shrink-0 shadow-2xs">
                  <HelpCircle className="w-5 h-5 stroke-[2.2]" />
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-xs font-bold text-slate-400 block">
                    0{idx + 1}
                  </span>
                  <p className="text-base font-bold text-[#061a2e] group-hover:text-emerald-950 transition-colors leading-snug">
                    {question}
                  </p>
                </div>
              </div>
            ))}
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
            Discuss Your NFP's Finance Needs
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed font-['Inter',sans-serif]">
            Financial capability that supports your purpose.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenContact}
              className="w-full sm:w-auto brand-button-gradient text-white text-base font-extrabold px-9 py-4 rounded-full flex items-center justify-center space-x-2.5 shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer group"
            >
              <span>Discuss Your NFP's Finance Needs</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
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
              const isActive = s.id === 'non-profit-community';
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
