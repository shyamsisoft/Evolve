import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
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
import { SectionDivider } from './SectionDivider';
import { PrimaryButton } from './PrimaryButton';

export const AboutPage = ({ onBack, onOpenContact }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 7 Dimensions for "Experience Across Complex Organisations"
  const crossFunctionalAreas = [
    { title: "strategy", icon: <Target className="w-5 h-5 text-emerald-400" /> },
    { title: "operations", icon: <Activity className="w-5 h-5 text-teal-400" /> },
    { title: "governance", icon: <ShieldCheck className="w-5 h-5 text-cyan-400" /> },
    { title: "technology", icon: <Cpu className="w-5 h-5 text-emerald-400" /> },
    { title: "data", icon: <Database className="w-5 h-5 text-teal-400" /> },
    { title: "people", icon: <Users className="w-5 h-5 text-cyan-400" /> },
    { title: "performance", icon: <TrendingUp className="w-5 h-5 text-emerald-400" /> }
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
      icon: <Users className="w-5 h-5 text-emerald-400" />
    },
    {
      num: "02",
      title: "Practical over theoretical.",
      points: [
        "Good advice needs to work in the real world.",
        '"We focus on solutions that can be implemented, embedded and maintained by the organisation."'
      ],
      icon: <Workflow className="w-5 h-5 text-teal-400" />
    },
    {
      num: "03",
      title: "Connected thinking.",
      points: [
        "Finance doesn't operate in isolation.",
        '"People, process, technology and data all influence financial performance."',
        "We bring these perspectives together."
      ],
      icon: <Layers className="w-5 h-5 text-cyan-400" />
    },
    {
      num: "04",
      title: "Capability, not dependency.",
      points: [
        '"Where we work alongside internal teams, our objective is to strengthen capability — not create permanent dependency on external support."'
      ],
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />
    }
  ];

  // 3 Philosophy pillars
  const philosophyItems = [
    {
      num: "01",
      title: "Clarity",
      desc: "Better information and better insight.",
      icon: <Lightbulb className="w-5 h-5 text-emerald-400" />
    },
    {
      num: "02",
      title: "Capability",
      desc: "Stronger people, processes and finance functions.",
      icon: <Compass className="w-5 h-5 text-teal-400" />
    },
    {
      num: "03",
      title: "Change",
      desc: "Practical transformation that improves how organisations operate.",
      icon: <TrendingUp className="w-5 h-5 text-cyan-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#061a2e] text-white font-['Inter',sans-serif] selection:bg-[#18B0A6] selection:text-[#061a2e]">
      
      {/* ======================================================== */}
      {/* 1. HERO SECTION: ABOUT EVOLVE                            */}
      {/* ======================================================== */}
      <section className="relative min-h-[64vh] flex items-center bg-[#061a2e] text-white overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-white/10">
        
        {/* Background Artwork with Brand Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={imgUrl("/images/why_experience.jpg")}
            alt="About EVOLVE"
            className="w-full h-full object-cover object-center opacity-30 transform scale-105"
            onError={(e) => {
              const fallback = imgUrl("/images/established_corporate.jpg");
              if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061a2e] via-[#061a2e]/95 to-[#007791]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-transparent to-[#061a2e]/70" />
        </div>

        {/* Ambient Radial Lights */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#007791]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#2bb673]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-6 sm:space-y-7">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-slate-300">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center space-x-1.5 text-emerald-400 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </button>
            <span className="text-slate-500">/</span>
            <span className="text-teal-300 font-bold uppercase">ABOUT</span>
            <span className="text-slate-500">/</span>
            <span className="text-white font-bold truncate">About EVOLVE</span>
          </nav>

          {/* Brand Eyebrow Tag */}
          <div className="flex items-center space-x-3.5 pt-1">
            <div className="p-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl flex items-center justify-center">
              <Compass className="w-9 h-9 text-emerald-400" />
            </div>
            <div>
              <span className="inline-block text-[11px] sm:text-xs font-bold tracking-widest text-[#2bb673] uppercase bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-1 rounded-full">
                PRACTITIONER-LED EXECUTIVE ADVISORY
              </span>
            </div>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              ABOUT EVOLVE
            </h1>

            {/* Lead Tagline */}
            <p className="text-xl sm:text-2xl font-bold text-emerald-400 tracking-tight">
              Built at the intersection of finance, transformation and technology.
            </p>

            {/* Overview Narrative */}
            <div className="pt-1 space-y-4 max-w-3xl text-slate-200">
              <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-slate-100">
                Evolve was established to bridge a gap we repeatedly saw in organisations.
              </p>
              
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                <p className="text-base sm:text-lg font-medium text-slate-100 leading-relaxed">
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
          </div>

          {/* CTA Button */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <PrimaryButton onClick={onOpenContact}>Start a Conversation</PrimaryButton>

            <span className="text-xs sm:text-sm text-slate-300 font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Independent Senior Perspective & Practical Outcomes
            </span>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. CONNECTED DISCIPLINES SECTION                         */}
      {/* ======================================================== */}
      <SectionDivider />
      <section className="py-20 sm:py-24 bg-[#061a2e] text-white border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src={imgUrl('/images/about_team.jpg')}
                  alt="About EVOLVE"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[440px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e]/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 space-y-6">
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Evolve brings these disciplines together.
              </h2>

              <div className="p-6 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10">
                <p className="text-base sm:text-lg lg:text-xl font-medium text-slate-200 leading-relaxed">
                  We work with organisations to understand the problem, create practical solutions and turn those solutions into measurable outcomes.
                </p>
              </div>

              <div className="pt-2">
                <div className="inline-block p-4 sm:p-5 rounded-2xl bg-white/[0.04] text-white shadow-lg border border-white/10 backdrop-blur-md">
                  <p className="text-base sm:text-lg font-bold tracking-wide text-emerald-300">
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
      <SectionDivider />
      <section className="py-20 sm:py-24 bg-[#061a2e] text-white border-b border-white/10 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#007791]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="max-w-4xl space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
              EXPERIENCE ACROSS COMPLEX ORGANISATIONS
            </h2>
            
            <p className="text-lg sm:text-xl font-medium text-slate-200 leading-relaxed italic">
              "Our experience spans public sector, regulatory environments, professional services, not-for-profit organisations and complex finance transformation programs."
            </p>

            <p className="text-base sm:text-lg text-slate-300 font-normal pt-2">
              This gives Evolve a practical understanding of the challenges that arise when finance needs to work across:
            </p>
          </div>

          {/* 7 Dimensions Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {crossFunctionalAreas.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-emerald-500/50 hover:bg-white/[0.06] shadow-xs hover:shadow-md transition-all duration-300 text-center space-y-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mx-auto group-hover:bg-[#061a2e] group-hover:scale-110 transition-all shadow-2xs">
                  {item.icon}
                </div>
                <div className="text-sm font-bold text-slate-300 uppercase tracking-wider group-hover:text-emerald-300 transition-colors">
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
      <SectionDivider />
      <section className="py-20 sm:py-24 bg-[#061a2e] text-white border-b border-white/10 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
              HOW WE WORK
            </h2>
          </div>

          {/* 4 Working Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {howWeWorkPillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-emerald-500/50 hover:bg-white/[0.06] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 text-[#2bb673] flex items-center justify-center group-hover:bg-[#061a2e] group-hover:text-emerald-400 group-hover:border-emerald-500/50 group-hover:scale-105 transition-all shadow-2xs">
                        {pillar.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">
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
                          pt.startsWith('"') ? 'text-white font-medium italic' : 'text-slate-300 font-normal'
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
      <SectionDivider />
      <section className="py-20 sm:py-24 bg-[#061a2e] text-white border-b border-white/10 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
              OUR PHILOSOPHY
            </h2>
            
            <p className="text-lg sm:text-xl font-bold text-emerald-400 tracking-wide uppercase">
              Clarity | Capability | Change
            </p>
          </div>

          {/* 3 Philosophy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {philosophyItems.map((item, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-emerald-500/50 hover:bg-white/[0.06] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 text-[#2bb673] flex items-center justify-center group-hover:bg-[#061a2e] group-hover:text-emerald-400 group-hover:border-emerald-500/50 group-hover:scale-110 transition-all shadow-2xs">
                      {item.icon}
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-base font-normal text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Philosophy Closing Callout & Action */}
          <div className="bg-white/[0.04] backdrop-blur-md rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-8 border border-white/10">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Finance that moves organisations forward.
              </h3>
              <p className="text-base sm:text-lg text-emerald-300 font-bold">
                That's what Evolve is here to do.
              </p>
            </div>

            <PrimaryButton onClick={onOpenContact}>Start a Conversation</PrimaryButton>
          </div>

        </div>
      </section>

    </div>
  );
};
