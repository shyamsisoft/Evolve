import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Workflow, 
  Users, 
  Cpu, 
  Database, 
  ShieldCheck, 
  Target, 
  TrendingUp, 
  Activity, 
  Check,
  Compass,
  Lightbulb
} from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';

export const AboutPage = ({ onBack, onOpenContact }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 7 Dimensions for "Experience Across Complex Organisations"
  const crossFunctionalAreas = [
    { title: "strategy", icon: <Target className="w-5 h-5 text-emerald-600" /> },
    { title: "operations", icon: <Activity className="w-5 h-5 text-[#007791]" /> },
    { title: "governance", icon: <ShieldCheck className="w-5 h-5 text-cyan-600" /> },
    { title: "technology", icon: <Cpu className="w-5 h-5 text-indigo-600" /> },
    { title: "data", icon: <Database className="w-5 h-5 text-teal-600" /> },
    { title: "people", icon: <Users className="w-5 h-5 text-emerald-600" /> },
    { title: "performance", icon: <TrendingUp className="w-5 h-5 text-sky-600" /> }
  ];

  // 4 "How We Work" principles
  const howWeWorkPillars = [
    {
      num: "01",
      title: "Collaborative but accountable.",
      points: [
        "We work with leadership teams rather than operating at a distance.",
        '"We ask difficult questions when required, bring an independent perspective and take responsibility for helping turn recommendations into practical outcomes."'
      ],
      icon: <Users className="w-5 h-5 text-emerald-600" />
    },
    {
      num: "02",
      title: "Practical over theoretical.",
      points: [
        "Good advice needs to work in the real world.",
        '"We focus on solutions that can be implemented, embedded and maintained by the organisation."'
      ],
      icon: <Workflow className="w-5 h-5 text-[#007791]" />
    },
    {
      num: "03",
      title: "Connected thinking.",
      points: [
        "Finance doesn't operate in isolation.",
        '"People, process, technology and data all influence financial performance."',
        "We bring these perspectives together."
      ],
      icon: <Layers className="w-5 h-5 text-cyan-600" />
    },
    {
      num: "04",
      title: "Capability, not dependency.",
      points: [
        '"Where we work alongside internal teams, our objective is to strengthen capability — not create permanent dependency on external support."'
      ],
      icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />
    }
  ];

  // 3 Philosophy pillars
  const philosophyItems = [
    {
      num: "01",
      title: "Clarity",
      desc: "Better information and better insight.",
      icon: <Lightbulb className="w-5 h-5 text-emerald-600" />
    },
    {
      num: "02",
      title: "Capability",
      desc: "Stronger people, processes and finance functions.",
      icon: <Compass className="w-5 h-5 text-[#007791]" />
    },
    {
      num: "03",
      title: "Change",
      desc: "Practical transformation that improves how organisations operate.",
      icon: <TrendingUp className="w-5 h-5 text-cyan-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#2bb673] selection:text-white">
      
      {/* ======================================================== */}
      {/* 1. HERO SECTION: ABOUT EVOLVE                            */}
      {/* ======================================================== */}
      <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 bg-[#061a2e] text-white overflow-hidden">
        
        {/* Background Photo with Dark Tech Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={imgUrl("/images/hero_summit.jpg")}
            alt="About EVOLVE"
            className="w-full h-full object-cover object-center scale-105 filter brightness-40 contrast-125"
            onError={(e) => {
              const fallback = imgUrl("/images/established_corporate.jpg");
              if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061a2e] via-[#061a2e]/90 to-[#061a2e]/65" />
          <div className="absolute inset-0 bg-[radial-gradient(#2bb673_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
        </div>

        {/* Ambient Glowing Orbs */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs font-bold text-slate-300">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Home</span>
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-[#2bb673] font-extrabold uppercase tracking-wider">About EVOLVE</span>
          </nav>

          <div className="max-w-4xl space-y-6">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              ABOUT EVOLVE
            </h1>

            {/* Lead Tagline */}
            <p className="text-xl sm:text-2xl font-bold text-emerald-300 tracking-tight leading-snug">
              Built at the intersection of finance, transformation and technology.
            </p>

            {/* Overview Narrative */}
            <div className="pt-1 space-y-4 max-w-3xl text-slate-200 font-['Inter',sans-serif]">
              <p className="text-base sm:text-lg font-medium leading-relaxed text-slate-100">
                Evolve was established to bridge a gap we repeatedly saw in organisations.
              </p>
              
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <p className="text-base sm:text-lg font-semibold text-slate-100 leading-relaxed">
                  Businesses often have access to accountants, technology specialists and consultants — but the problems they face sit across all three.
                </p>
              </div>

              {/* Connected Chain */}
              <div className="space-y-2 pt-2 border-l-2 border-emerald-400/60 pl-4 text-sm sm:text-base text-slate-300 font-medium">
                <p>Financial decisions depend on good data.</p>
                <p>Good data depends on effective systems and processes.</p>
                <p>And transformation only creates value when people actually use the solution and the organisation realises the benefit.</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onOpenContact}
                className="brand-button-gradient text-white text-sm sm:text-base font-extrabold px-8 py-4 rounded-xl shadow-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer group"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 2. CONNECTED DISCIPLINES SECTION                         */}
      {/*    (Left side: Image | Right side: Content)              */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                <img
                  src={imgUrl('/images/about_team.jpg')}
                  alt="About EVOLVE"
                  className="w-full h-[440px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e]/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 space-y-6">
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061a2e] tracking-tight leading-tight">
                Evolve brings these disciplines together.
              </h2>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90">
                <p className="text-base sm:text-lg lg:text-xl font-bold text-slate-800 leading-relaxed">
                  We work with organisations to understand the problem, create practical solutions and turn those solutions into measurable outcomes.
                </p>
              </div>

              <div className="pt-2">
                <div className="inline-block p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#061a2e] to-[#0a2f52] text-white shadow-lg border border-slate-700">
                  <p className="text-base sm:text-lg font-black tracking-wide text-emerald-300">
                    Finance. Transformation. Technology. One connected approach.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ======================================================== */}
      {/* 3. EXPERIENCE ACROSS COMPLEX ORGANISATIONS                */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="max-w-4xl space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061a2e] tracking-tight leading-tight">
              EXPERIENCE ACROSS COMPLEX ORGANISATIONS
            </h2>
            
            <p className="text-lg sm:text-xl font-bold text-slate-800 leading-relaxed italic">
              "Our experience spans public sector, regulatory environments, professional services, not-for-profit organisations and complex finance transformation programs."
            </p>

            <p className="text-base sm:text-lg text-slate-600 font-semibold pt-2">
              This gives Evolve a practical understanding of the challenges that arise when finance needs to work across:
            </p>
          </div>

          {/* 7 Dimensions Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {crossFunctionalAreas.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-[#2bb673] shadow-xs hover:shadow-md transition-all duration-300 text-center space-y-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mx-auto group-hover:bg-[#061a2e] group-hover:scale-110 transition-all shadow-2xs">
                  {item.icon}
                </div>
                <div className="text-sm font-black text-[#061a2e] uppercase tracking-wider group-hover:text-[#2bb673] transition-colors">
                  {item.title}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 4. HOW WE WORK                                           */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061a2e] tracking-tight leading-tight">
              HOW WE WORK
            </h2>
          </div>

          {/* 4 Working Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {howWeWorkPillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 hover:border-[#2bb673] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-[#2bb673] flex items-center justify-center group-hover:bg-[#061a2e] group-hover:text-emerald-400 group-hover:scale-105 transition-all shadow-2xs">
                        {pillar.icon}
                      </div>
                      <h3 className="text-2xl font-black text-[#061a2e] tracking-tight">
                        {pillar.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      {pillar.num}
                    </span>
                  </div>

                  <div className="space-y-3 font-['Inter',sans-serif]">
                    {pillar.points.map((pt, pIdx) => (
                      <p 
                        key={pIdx}
                        className={`text-sm sm:text-base leading-relaxed ${
                          pt.startsWith('"') ? 'text-slate-800 font-bold italic' : 'text-slate-600 font-medium'
                        }`}
                      >
                        {pt}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 5. OUR PHILOSOPHY                                        */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061a2e] tracking-tight leading-tight">
              OUR PHILOSOPHY
            </h2>
            
            <p className="text-lg sm:text-xl font-black text-[#2bb673] tracking-wide uppercase">
              Clarity | Capability | Change
            </p>
          </div>

          {/* 3 Philosophy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {philosophyItems.map((item, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-[#2bb673] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 text-[#2bb673] flex items-center justify-center group-hover:bg-[#061a2e] group-hover:text-emerald-400 group-hover:scale-110 transition-all shadow-2xs">
                      {item.icon}
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-[#061a2e] group-hover:text-[#2bb673] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-base font-semibold text-slate-700 leading-relaxed font-['Inter',sans-serif]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Philosophy Closing Callout & Action */}
          <div className="bg-gradient-to-br from-[#061a2e] to-[#041220] rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-8 border border-slate-800">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Finance that moves organisations forward.
              </h3>
              <p className="text-base sm:text-lg text-emerald-300 font-bold">
                That's what Evolve is here to do.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenContact}
              className="brand-button-gradient text-white text-base font-extrabold px-8 py-4 rounded-full flex items-center space-x-2.5 shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer group shrink-0"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
