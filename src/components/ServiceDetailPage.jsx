import React, { useState, useEffect } from 'react';
import { PillarIcon } from './BrandLogo';
import { ArrowRight, ArrowLeft, CheckCircle2, ShieldCheck, Sparkles, TrendingUp, Layers, Cpu, FileText, BarChart2, Check, Zap, Target, DollarSign, PieChart, Activity } from 'lucide-react';

export const ServiceDetailPage = ({ serviceId, pageData, onBack, onOpenContact, onSelectService }) => {
  const service = pageData[serviceId] || pageData.lead;

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

      {/* 2. FINANCIAL METRICS & IMPACT TELEMETRY SCORECARD */}
      <section className="py-12 bg-[#04111f] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {service.outcomes.map((out, idx) => (
              <div
                key={idx}
                className="bg-[#09223d] p-6 rounded-2xl border border-slate-700/80 flex items-center justify-between shadow-xl relative overflow-hidden group hover:border-[#2bb673]/60 transition-colors"
              >
                <div className="space-y-1">
                  <span className="text-xs font-black uppercase text-[#2bb673] tracking-widest block">Proven Metric Impact</span>
                  <span className="text-3xl sm:text-4xl font-black text-white block">{out.metric}</span>
                  <span className="text-xs font-bold text-gray-300 block">{out.label}</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 text-emerald-400 group-hover:bg-[#2bb673] group-hover:text-white transition-colors">
                  <BarChart2 className="w-7 h-7" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EXECUTIVE PROBLEM SOLVING & CHALLENGES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#007791]">
              Financial & Operating Friction
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#061a2e] tracking-tight">
              The Strategic Challenges We Address
            </h2>
            <p className="text-base text-slate-600 font-medium">
              Leadership teams encounter key financial gaps that limit strategic clarity, close speed, and capital allocation. We engineer solutions to eliminate these barriers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.challenges.map((challenge, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-[#f7f9fc] border border-slate-200/90 hover:border-[#007791]/50 transition-all shadow-sm space-y-3 flex items-start space-x-4"
              >
                <div className="w-9 h-9 rounded-xl bg-[#061a2e] text-[#2bb673] flex items-center justify-center font-black text-sm flex-shrink-0 mt-0.5 shadow-sm">
                  0{idx + 1}
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#007791]">Operational Gap</span>
                  <p className="text-base font-bold text-[#061a2e] leading-snug">
                    {challenge}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. FINANCIAL CAPABILITY MODULES */}
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
                className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 space-y-5 relative overflow-hidden group"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3.5 bg-[#f0f5fa] rounded-2xl text-[#007791] group-hover:bg-[#007791] group-hover:text-white transition-colors">
                    <Activity className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-black text-[#007791] uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full">
                    Module 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#061a2e] group-hover:text-[#007791] transition-colors">
                  {cap.name}
                </h3>

                <p className="text-base text-slate-700 leading-relaxed font-medium">
                  {cap.desc}
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
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

      {/* 5. METHODOLOGY ROADMAP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-black text-[#007791] uppercase tracking-widest">
              Execution Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#061a2e]">
              4-Phase Delivery Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.methodology.map((m, idx) => (
              <div
                key={idx}
                className="bg-[#f7f9fc] p-7 rounded-3xl border border-slate-200 hover:border-[#007791] transition-all space-y-4 relative flex flex-col justify-between group shadow-sm hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#061a2e] text-[#2bb673] flex items-center justify-center font-black text-lg shadow-md group-hover:bg-[#007791] group-hover:text-white transition-colors">
                    {m.step}
                  </div>
                  {idx < service.methodology.length - 1 && (
                    <ArrowRight className="hidden lg:block w-5 h-5 text-slate-300 group-hover:text-[#2bb673] transition-colors" />
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-[#061a2e]">
                    {m.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {m.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80">
                  <span className="text-xs font-black text-[#007791] uppercase tracking-wider">Phase 0{idx + 1} Deliverable</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. PILLAR SWITCHER BAR */}
      <section className="py-16 bg-[#061a2e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <h3 className="text-2xl font-black text-white">Explore Other Capability Pillars</h3>
            <button onClick={onBack} className="text-sm font-bold text-[#2bb673] hover:underline mt-2 sm:mt-0">
              View All What We Do Overview ↑
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { id: 'lead', title: 'LEAD', desc: 'CFO & FP&A Advisory' },
              { id: 'build', title: 'BUILD', desc: 'Operating Models' },
              { id: 'transform', title: 'TRANSFORM', desc: 'Data & Tech' },
              { id: 'protect', title: 'PROTECT', desc: 'Tax & Compliance' }
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => onSelectService(p.id)}
                className={`p-5 rounded-2xl border text-left transition-all ${
                  serviceId === p.id
                    ? 'border-[#2bb673] bg-[#0c2e52] shadow-md'
                    : 'border-slate-700 bg-[#08213b] hover:bg-[#0c2e52]'
                }`}
              >
                <span className="text-xs font-black text-[#2bb673] uppercase block mb-1">{p.title}</span>
                <span className="text-base font-extrabold text-white block">{p.desc}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
