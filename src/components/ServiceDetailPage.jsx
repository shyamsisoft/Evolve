import React, { useState, useEffect } from 'react';
import { PillarIcon } from './BrandLogo';
import { ArrowRight, ArrowLeft, CheckCircle2, ShieldCheck, Sparkles, TrendingUp, Layers, Cpu, FileText, BarChart2, Check, Zap, Target, DollarSign, PieChart, Activity, Search, AlertTriangle } from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';

export const ServiceDetailPage = ({ serviceId, pageData, onBack, onOpenContact, onSelectService }) => {
  const service = pageData[serviceId] || pageData.lead;

  const moduleImages = [
    imgUrl("/images/cap_module_1.jpg"),
    imgUrl("/images/cap_module_2.jpg"),
    imgUrl("/images/cap_module_3.jpg"),
    imgUrl("/images/cap_module_4.jpg")
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  return (
    <div className="pt-24 pb-20 bg-[#f7f9fc] animate-in fade-in duration-300">
      
      {/* 1. EXECUTIVE CORPORATE HERO BANNER */}
      <section className="relative min-h-[60vh] flex items-center bg-[#061a2e] text-white overflow-hidden py-20 border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={service.bgImage}
            alt={service.title}
            className="w-full h-full object-cover object-center opacity-30 transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061a2e] via-[#061a2e]/92 to-[#007791]/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-transparent to-[#061a2e]/60"></div>
        </div>

        {/* Decorative Financial Grid & Lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(#007791_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-7">
          
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-3 text-xs sm:text-sm font-bold text-gray-300">
            <button onClick={onBack} className="inline-flex items-center space-x-1.5 text-emerald-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Home</span>
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-gray-400">What We Do</span>
            <span className="text-slate-600">/</span>
            <span className="text-white">{service.title}</span>
          </div>

          {/* Pillar Badge */}
          <div className="flex items-center space-x-4">
            <div className="p-3.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
              <PillarIcon type={service.iconType} className="w-10 h-10" />
            </div>
            <div>
              <span className="text-xs font-black tracking-widest text-[#2bb673] uppercase block">
                EVOLVE SERVICE PILLAR
              </span>
              <span className="text-sm font-extrabold text-white">
                {service.pillar} — Corporate Financial Capability
              </span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl leading-[1.12]">
            {service.title}
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 font-medium max-w-3xl leading-relaxed">
            {service.tagline}
          </p>

          <div className="pt-3 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenContact}
              className="brand-button-gradient text-white text-base font-extrabold px-9 py-4 rounded-full flex items-center space-x-2.5 shadow-2xl hover:scale-105 transition-transform"
            >
              <span>Schedule Executive Briefing</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </section>

      {/* 3. EXECUTIVE PROBLEM SOLVING & CHALLENGES — VISUAL FRICTION VS SOLUTION SUITE */}
      <section className="py-24 bg-gradient-to-b from-[#f8fafc] via-white to-[#f0f5fa] border-t border-slate-200/80 relative overflow-hidden">
        
        {/* Ambient Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2bb673]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-rose-600 bg-rose-50 border border-rose-200 px-4 py-1.5 rounded-full">
                <Target className="w-3.5 h-3.5 text-rose-600" />
                <span>Diagnostic Friction & Resolution</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061a2e] tracking-tight">
                The Strategic Challenges We Address
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                Leadership teams encounter key financial gaps that limit strategic clarity, close speed, and capital allocation. Here is how we diagnose the friction and engineer permanent capability.
              </p>
            </div>

            {/* Quick Status Pill */}
            <div className="inline-flex items-center space-x-3 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-md flex-shrink-0">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                <span className="text-xs font-black text-rose-700 uppercase">Friction Identified</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400" />
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2bb673] animate-pulse"></span>
                <span className="text-xs font-black text-[#2bb673] uppercase">Evolve Resolution</span>
              </div>
            </div>
          </div>

          {/* 4 VISUAL FRICTION VS SOLUTION CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.challenges.map((challenge, idx) => {
              const capObj = (service.capabilities && service.capabilities[idx]);
              const solutionText = capObj 
                ? `${capObj.name} — ${capObj.desc}`
                : (service.solutions && service.solutions[idx]) 
                  ? service.solutions[idx] 
                  : "Engineered automated workflows & scalable operating model architecture";

              const categoryTags = [
                "CLOSE VELOCITY FRICTION",
                "TEAM CAPACITY BOTTLENECK",
                "GOVERNANCE & RISK EXPOSURE",
                "ENTERPRISE SCALE BARRIER"
              ];

              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xl hover:shadow-2xl transition-all duration-500 space-y-6 group hover:-translate-y-1 relative overflow-hidden"
                >
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#061a2e] text-[#2bb673] flex items-center justify-center font-black text-lg shadow-md border border-[#2bb673]/30">
                        0{idx + 1}
                      </div>
                      <span className="text-xs font-black uppercase tracking-wider text-[#007791]">
                        {categoryTags[idx % 4]}
                      </span>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-black uppercase tracking-wider">
                      Gap 0{idx + 1} Analysis
                    </span>
                  </div>

                  {/* Visual 2-Column Split: Problem vs Solution */}
                  <div className="space-y-4 pt-2">
                    
                    {/* 1. FRICTION / PROBLEM BOX */}
                    <div className="p-5 rounded-2xl bg-rose-50/60 border-l-4 border-l-rose-500 border border-rose-200/60 space-y-2 group-hover:bg-rose-50 transition-colors">
                      <div className="flex items-center space-x-2 text-rose-700 text-xs font-black uppercase tracking-wider">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                        <span>Current Operational Friction Point</span>
                      </div>
                      <p className="text-base font-extrabold text-[#061a2e] leading-snug">
                        "{challenge}"
                      </p>
                    </div>

                    {/* Arrow Transfer Indicator */}
                    <div className="flex justify-center -my-2 relative z-10">
                      <div className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-[#007791]">
                        <ArrowRight className="w-4 h-4 rotate-90" />
                      </div>
                    </div>

                    {/* 2. EVOLVE RESOLUTION BOX */}
                    <div className="p-5 rounded-2xl bg-teal-50/70 border-l-4 border-l-[#2bb673] border border-teal-200/80 space-y-2 group-hover:bg-teal-50 transition-colors">
                      <div className="flex items-center space-x-2 text-[#007791] text-xs font-black uppercase tracking-wider">
                        <ShieldCheck className="w-4.5 h-4.5 text-[#2bb673] flex-shrink-0" />
                        <span>Evolve Engineered Resolution</span>
                      </div>
                      <p className="text-base font-extrabold text-[#061a2e] leading-snug">
                        {solutionText}
                      </p>
                    </div>

                  </div>

                  {/* Card Bottom Outcome Tag */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-extrabold">
                    <span className="text-[#007791] flex items-center space-x-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2bb673]" />
                      <span>Target Operational Result Delivered</span>
                    </span>
                    <span className="text-slate-400 group-hover:text-[#2bb673] transition-colors">
                      Eliminated Permanently →
                    </span>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. FINANCIAL CAPABILITY MODULES WITH PHOTO HEADERS */}
      <section className="py-20 bg-[#f0f5fa] border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black text-[#2bb673] uppercase tracking-widest">
              Comprehensive Service Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#061a2e]">
              Core Capability Modules
            </h2>
            <p className="text-base text-slate-600 font-normal">
              Modular financial advisory and operating frameworks deployed by senior finance practitioners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={moduleImages[idx % moduleImages.length]}
                      alt={cap.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-[#061a2e]/60 to-transparent"></div>

                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-black text-[#007791]">
                      Module 0{idx + 1}
                    </div>

                    <div className="absolute bottom-4 left-6 right-6">
                      <h3 className="text-2xl font-black text-white leading-tight">
                        {cap.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7 space-y-3">
                    <p className="text-base text-slate-700 leading-relaxed font-medium">
                      {cap.desc}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="p-7 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
                  <span className="text-xs font-bold text-slate-500">Executive Advisory Scope</span>
                  <button onClick={onOpenContact} className="text-xs font-extrabold text-[#007791] group-hover:text-[#2bb673] flex items-center space-x-1">
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. METHODOLOGY ROADMAP — CIRCULAR EXECUTIVE DESIGN */}
      <section className="py-24 bg-gradient-to-b from-[#f8fafc] via-white to-[#f0f5fa] border-t border-slate-200/80 relative overflow-hidden">
        {/* Subtle Background Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-[#007791]/5 via-[#2bb673]/5 to-[#061a2e]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-[#007791] bg-teal-50 border border-teal-100 px-4 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#2bb673]" />
              <span>Executive Execution Roadmap</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061a2e] tracking-tight">
              4-Phase Circular Delivery Process
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-medium">
              A continuous, closed-loop implementation methodology engineered to deliver immediate clarity and long-term capability.
            </p>
          </div>

          {/* CIRCULAR TIMELINE TRACK & 4 PHASE NODES */}
          <div className="relative max-w-6xl mx-auto">
            
            {/* Horizontal Connecting Track Cable (Desktop) */}
            <div className="absolute top-12 left-16 right-16 h-2 bg-slate-200 -translate-y-1/2 z-0 hidden lg:block rounded-full"></div>
            <div className="absolute top-12 left-16 right-16 h-2 bg-gradient-to-r from-[#061a2e] via-[#007791] to-[#2bb673] -translate-y-1/2 z-0 hidden lg:block rounded-full shadow-sm"></div>

            {/* 4 Connected Circular Nodes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {service.methodology.map((m, idx) => {
                const circleColors = [
                  "from-[#061a2e] to-[#007791] border-[#007791] text-[#2bb673] shadow-teal-500/20",
                  "from-[#007791] to-[#0c355c] border-[#2bb673] text-emerald-400 shadow-emerald-500/20",
                  "from-[#061a2e] to-[#08213b] border-[#007791] text-sky-400 shadow-sky-500/20",
                  "from-[#08213b] to-[#2bb673] border-[#2bb673] text-white shadow-emerald-500/20"
                ];

                const phaseIcons = [
                  <Search className="w-5 h-5 text-[#2bb673]" />,
                  <Layers className="w-5 h-5 text-[#007791]" />,
                  <Cpu className="w-5 h-5 text-emerald-400" />,
                  <TrendingUp className="w-5 h-5 text-[#2bb673]" />
                ];

                return (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between group relative overflow-hidden"
                  >
                    {/* Top Accent Gradient Arc Line */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#007791] to-[#2bb673]"></div>

                    <div className="space-y-6">
                      
                      {/* Prominent Circular Step Node */}
                      <div className="flex items-center justify-between">
                        <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${circleColors[idx % 4]} border-4 shadow-xl flex flex-col items-center justify-center group-hover:scale-110 transition-transform duration-500 relative ring-8 ring-slate-100`}>
                          <span className="text-2xl font-black leading-none">{m.step}</span>
                          <span className="text-[9px] font-extrabold uppercase tracking-widest opacity-90 mt-0.5">PHASE</span>
                        </div>

                        <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-teal-50 group-hover:border-teal-200 transition-colors shadow-xs">
                          {phaseIcons[idx % 4]}
                        </div>
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-2">
                        <span className="text-[11px] font-extrabold text-[#007791] uppercase tracking-wider block">
                          Phase 0{idx + 1} Milestone
                        </span>
                        <h3 className="text-xl font-black text-[#061a2e] group-hover:text-[#007791] transition-colors leading-tight">
                          {m.title}
                        </h3>
                        <p className="text-sm text-slate-600 font-medium leading-relaxed">
                          {m.desc}
                        </p>
                      </div>

                    </div>

                    {/* Footer Deliverable Indicator */}
                    <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-[#2bb673] animate-pulse"></span>
                        <span className="text-xs font-black text-[#061a2e] uppercase tracking-wider">
                          Phase 0{idx + 1} Deliverable
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#2bb673] group-hover:translate-x-1 transition-all" />
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

          {/* CENTER CIRCULAR METHODOLOGY ASSURANCE HUB */}
          <div className="max-w-4xl mx-auto bg-[#061a2e] text-white p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-5">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#007791] via-[#0a9396] to-[#2bb673] p-1 flex-shrink-0 shadow-lg">
                <div className="w-full h-full bg-[#061a2e] rounded-full flex items-center justify-center">
                  <Activity className="w-7 h-7 text-[#2bb673]" />
                </div>
              </div>
              <div>
                <span className="text-xs font-black text-[#2bb673] uppercase tracking-widest block">Continuous Assurance</span>
                <h4 className="text-xl font-black text-white">Closed-Loop Executive Delivery</h4>
                <p className="text-xs text-gray-300 font-medium mt-1">Every phase builds permanent internal capability and long-term governance defense.</p>
              </div>
            </div>

            <button
              onClick={onOpenContact}
              className="brand-button-gradient text-white text-xs font-extrabold py-3.5 px-6 rounded-2xl shadow-lg hover:scale-105 transition-transform flex-shrink-0 whitespace-nowrap"
            >
              <span>Schedule Phase Diagnostic →</span>
            </button>
          </div>

        </div>
      </section>

      {/* 6. PILLAR SWITCHER BAR */}
      <section className="py-20 bg-[#041220] text-white relative overflow-hidden">
        {/* Subtle Background Glow Elements */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#007791]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#2bb673]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-b border-slate-800/80 pb-6 gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-[#2bb673] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Capability Navigator</span>
              </div>
              <h3 className="text-3xl font-black text-white">Explore Other Capability Pillars</h3>
            </div>
            <button
              onClick={onBack}
              className="inline-flex items-center space-x-2 text-xs font-extrabold text-[#2bb673] hover:text-white bg-white/5 hover:bg-white/10 border border-slate-700/80 px-4 py-2.5 rounded-full transition-all"
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
              const isActive = serviceId === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => onSelectService(p.id)}
                  className={`p-6 rounded-2xl border text-left transition-all duration-300 relative group overflow-hidden ${
                    isActive
                      ? 'border-[#2bb673] bg-[#0a2644] shadow-xl shadow-emerald-500/10 scale-[1.02]'
                      : 'border-slate-800 bg-[#081d33] hover:bg-[#0c2e52] hover:border-[#2bb673]/60 hover:-translate-y-1'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 bg-white/10 rounded-xl backdrop-blur-md">
                      <PillarIcon type={p.id} className="w-6 h-6 text-[#2bb673]" />
                    </div>
                    {isActive ? (
                      <span className="px-2.5 py-1 bg-[#2bb673] text-white text-[10px] font-black uppercase tracking-wider rounded-full flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                        <span>Active</span>
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold text-slate-400 group-hover:text-emerald-400 transition-colors">
                        Explore →
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-black text-[#2bb673] uppercase tracking-wider block mb-1">{p.tag}</span>
                  <h4 className="text-lg font-black text-white block mb-1 group-hover:text-emerald-300 transition-colors">{p.title}</h4>
                  <p className="text-xs text-slate-300 font-medium">{p.desc}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};
