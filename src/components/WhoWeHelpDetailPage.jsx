import React, { useEffect } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Building2, TrendingUp, Users2, Landmark, ShieldCheck, Target, BarChart2, AlertTriangle, Zap } from 'lucide-react';

export const WhoWeHelpDetailPage = ({ audienceId, data, onBack, onOpenContact, onSelectAudience }) => {
  const audience = data[audienceId] || data["growing-businesses"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [audienceId]);

  const sectors = [
    {
      id: 'growing-businesses',
      title: 'Growing Businesses',
      tag: 'Scale-Ups & Mid-Market',
      image: '/images/growing_businesses.jpg',
      icon: <TrendingUp className="w-5 h-5 text-[#2bb673]" />
    },
    {
      id: 'established-corporate',
      title: 'Established Corporate',
      tag: 'Enterprise & M&A',
      image: '/images/established_corporate.jpg',
      icon: <Building2 className="w-5 h-5 text-[#2bb673]" />
    },
    {
      id: 'non-profit-community',
      title: 'Not-for-Profit & Community',
      tag: 'Purpose & Grants',
      image: '/images/non_profit_community.jpg',
      icon: <Users2 className="w-5 h-5 text-[#2bb673]" />
    },
    {
      id: 'local-government',
      title: 'Local Government',
      tag: 'Public Sector LTFS',
      image: '/images/local_government.jpg',
      icon: <Landmark className="w-5 h-5 text-[#2bb673]" />
    }
  ];

  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-300">
      
      {/* VISUAL HERO BANNER */}
      <section className="relative bg-[#061a2e] text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-35">
          <img src={audience.bgImage} alt={audience.title} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#061a2e] via-[#061a2e]/90 to-[#007791]/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center space-x-3 text-xs sm:text-sm font-bold text-gray-300">
            <button onClick={onBack} className="inline-flex items-center space-x-1.5 text-emerald-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Overview</span>
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-gray-400">Who We Help</span>
            <span className="text-slate-600">/</span>
            <span className="text-white">{audience.title}</span>
          </div>

          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-[#2bb673]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sector Growth Roadmap</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white max-w-4xl leading-tight">
            {audience.title}
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 font-medium max-w-3xl leading-relaxed">
            {audience.tagline}
          </p>

          <div className="pt-2">
            <button onClick={onOpenContact} className="brand-button-gradient text-white text-base font-extrabold px-9 py-4 rounded-full flex items-center space-x-2 shadow-xl hover:scale-105 transition-transform">
              <span>Schedule Sector Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* VISUAL SECTOR CAPABILITY & FRICTION SHOWCASE */}
      <section className="py-24 bg-gradient-to-b from-[#f8fafc] via-white to-[#f0f5fa] border-t border-slate-200/80 relative overflow-hidden">
        
        {/* Subtle Ambient Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2bb673]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-[#007791] bg-teal-50 border border-teal-100 px-4 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-[#2bb673]" />
                <span>Sector Capability & Diagnostic Blueprint</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061a2e] tracking-tight">
                Addressing Friction in {audience.title}
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                We combine senior industry experience with tailored financial operating models to eliminate operational friction and accelerate growth.
              </p>
            </div>

            {/* Quick Diagnostic Pill */}
            <div className="inline-flex items-center space-x-3 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-md flex-shrink-0">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                <span className="text-xs font-black text-rose-700 uppercase">Sector Friction</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400" />
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2bb673] animate-pulse"></span>
                <span className="text-xs font-black text-[#2bb673] uppercase">Tailored Solution</span>
              </div>
            </div>
          </div>

          {/* MAIN VISUAL LAYOUT: PHOTO FEATURE CARD + PROBLEM/SOLUTION INFOGRAPHIC GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* COLUMN 1: EXECUTIVE SECTOR PHOTO BANNER CARD */}
            <div className="lg:col-span-4 rounded-3xl overflow-hidden shadow-2xl relative border border-slate-200 min-h-[460px] flex flex-col justify-between p-8 text-white group bg-[#061a2e]">
              {/* Background Photography with Zoom Effect */}
              <img
                src={audience.bgImage}
                alt={audience.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-60 group-hover:opacity-75"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-[#061a2e]/75 to-[#061a2e]/30"></div>

              {/* Top Badges */}
              <div className="relative z-10 space-y-2">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[11px] font-black uppercase tracking-wider text-[#2bb673]">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Executive Oversight</span>
                </div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-slate-300 block">
                  Industry Focus
                </span>
              </div>

              {/* Bottom Card Title & Action */}
              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl font-black text-white leading-tight">
                  Customized Advisory Scope for {audience.title}
                </h3>
                <p className="text-xs text-slate-200 font-medium leading-relaxed">
                  Tailored financial capability, board visibility, and operating frameworks delivered by senior finance practitioners.
                </p>
                <button
                  onClick={onOpenContact}
                  className="w-full brand-button-gradient text-white text-xs font-extrabold py-3.5 px-6 rounded-2xl flex items-center justify-center space-x-2 shadow-xl hover:scale-105 transition-transform"
                >
                  <span>Request Sector Diagnostic →</span>
                </button>
              </div>
            </div>

            {/* COLUMN 2 & 3: CHALLENGES VS TAILORED SOLUTIONS INFOGRAPHIC GRID */}
            <div className="lg:col-span-8 space-y-8 flex flex-col justify-between">
              
              {/* 1. SECTOR CHALLENGES (ROSE FRICTION CARDS) */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-rose-600 text-xs font-black uppercase tracking-wider">
                  <Target className="w-4 h-4" />
                  <span>Identified Sector Operational Friction</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {audience.challenges.map((c, idx) => (
                    <div
                      key={idx}
                      className="p-5 bg-rose-50/50 rounded-2xl border-l-4 border-l-rose-500 border border-rose-200/60 flex items-start space-x-3.5 shadow-xs hover:bg-rose-50 transition-colors"
                    >
                      <div className="w-7 h-7 rounded-xl bg-rose-600 text-white flex items-center justify-center font-black text-xs flex-shrink-0 mt-0.5 shadow-xs">
                        0{idx + 1}
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-black uppercase tracking-wider text-rose-700 block">Gap 0{idx + 1}</span>
                        <p className="text-sm font-extrabold text-[#061a2e] leading-snug">"{c}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. TAILORED SOLUTIONS (EMERALD SOLUTION CARDS WITH CHECKMARKS) */}
              <div className="space-y-4 pt-4 border-t border-slate-200/80">
                <div className="flex items-center space-x-2 text-[#007791] text-xs font-black uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#2bb673]" />
                  <span>Evolve Engineered Sector Deliverables</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {audience.solutions.map((s, idx) => (
                    <div
                      key={idx}
                      className="p-5 bg-teal-50/70 rounded-2xl border-l-4 border-l-[#2bb673] border border-teal-200/80 flex items-start space-x-3.5 shadow-xs hover:bg-teal-50 transition-colors"
                    >
                      <CheckCircle2 className="w-6 h-6 text-[#2bb673] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-black text-[#061a2e] leading-tight">{s}</h4>
                        <p className="text-[11px] text-slate-600 font-bold mt-1">Delivered with senior executive oversight.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* REDESIGNED EXECUTIVE EXPLORE OTHER SECTORS SECTION */}
      <section className="py-20 bg-[#041220] text-white relative overflow-hidden">
        {/* Subtle Background Glow Elements */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#007791]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#2bb673]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-800/80 pb-6 gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-[#2bb673] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Sector Blueprint Navigator</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white">Explore Other Target Sectors</h2>
            </div>
            <button
              onClick={onBack}
              className="inline-flex items-center space-x-2 text-xs font-extrabold text-[#2bb673] hover:text-white bg-white/5 hover:bg-white/10 border border-slate-700/80 px-4 py-2.5 rounded-full transition-all"
            >
              <span>View All Sector Overviews</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Sleek Segmented Sector Tab Switcher */}
          <div className="bg-[#081d33] p-2 rounded-2xl border border-slate-800 flex flex-wrap gap-2 shadow-inner">
            {sectors.map((sec) => {
              const isActive = audienceId === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => onSelectAudience(sec.id)}
                  className={`flex-1 min-w-[200px] py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-between space-x-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#007791] to-[#0c355c] text-white shadow-lg border border-[#2bb673]/50'
                      : 'bg-transparent text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <div className="flex items-center space-x-2.5 truncate">
                    <div className={`p-1.5 rounded-lg ${isActive ? 'bg-[#2bb673] text-white' : 'bg-slate-800 text-slate-300'}`}>
                      {sec.icon}
                    </div>
                    <span className="truncate font-extrabold">{sec.title}</span>
                  </div>
                  {isActive ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2bb673] animate-pulse flex-shrink-0"></span>
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* 4 Interactive Visual Sector Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sec) => {
              const isActive = audienceId === sec.id;
              return (
                <div
                  key={sec.id}
                  onClick={() => onSelectAudience(sec.id)}
                  className={`relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer group h-80 flex flex-col justify-between p-6 border transition-all duration-500 ${
                    isActive
                      ? 'border-2 border-[#2bb673] shadow-emerald-500/20 scale-[1.02] bg-[#0a2644]'
                      : 'border-slate-800 hover:border-[#2bb673]/60 hover:-translate-y-1.5 bg-[#081d33]'
                  }`}
                >
                  {/* Background Photo Header with Smooth Zoom */}
                  <img
                    src={sec.image}
                    alt={sec.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-40 group-hover:opacity-60"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041220] via-[#041220]/80 to-transparent"></div>

                  {/* Top Badge & Icon */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-md">
                      {sec.icon}
                    </div>
                    {isActive ? (
                      <span className="px-3 py-1 bg-[#2bb673] text-white text-[11px] font-black uppercase tracking-wider rounded-full shadow-md flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                        <span>Active Sector</span>
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-gray-300 text-[11px] font-bold rounded-full group-hover:bg-[#007791] group-hover:text-white transition-colors">
                        Explore Blueprint
                      </span>
                    )}
                  </div>

                  {/* Bottom Text & Actions */}
                  <div className="relative z-10 space-y-2">
                    <span className="text-[11px] font-extrabold text-[#2bb673] uppercase tracking-wider block">
                      {sec.tag}
                    </span>
                    <h3 className="text-xl font-black text-white leading-tight group-hover:text-emerald-300 transition-colors">
                      {sec.title}
                    </h3>
                    <p className="text-xs text-gray-300 font-medium line-clamp-2 leading-relaxed">
                      {sec.desc}
                    </p>
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-extrabold text-emerald-400 group-hover:text-white">
                      <span>{isActive ? 'Currently Viewing' : 'Switch to Sector'}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5 text-[#2bb673]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};
