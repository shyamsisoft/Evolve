import React, { useState, useEffect } from 'react';
import { PillarIcon } from './BrandLogo';
import { ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Layers, ShieldCheck, Cpu, Target, BarChart2, Activity, PieChart, Table, LayoutGrid, Zap } from 'lucide-react';

export const WhatWeDoOverviewPage = ({ onSelectService, onBack, onOpenContact }) => {
  const [matrixViewMode, setMatrixViewMode] = useState('matrix');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const matrixData = [
    {
      id: "lead",
      pillar: "LEAD",
      tagline: "Strategic Leadership",
      focusTitle: "CFO & FP&A Advisory",
      focusBadge: "Executive Guidance",
      triggers: [
        "Uncertain forward cash flow & budget forecasting models",
        "Board or investors requesting higher financial reporting clarity",
        "Need for fractional CFO capability without full-time overhead"
      ],
      impact: "100% Board Transparency",
      impactBadge: "Strategic Growth",
      iconType: "lead"
    },
    {
      id: "build",
      pillar: "BUILD",
      tagline: "Scalable Systems",
      focusTitle: "Finance Functions & Operating Models",
      focusBadge: "Process Architecture",
      triggers: [
        "Delayed month-end close cycle exceeding 5-10 business days",
        "Unclear team roles, bottlenecks, and missing SOP governance",
        "Scaling organisation outgrowing initial accounting setup"
      ],
      impact: "3-Day Fast Month-End Close",
      impactBadge: "Process Speed",
      iconType: "build"
    },
    {
      id: "transform",
      pillar: "TRANSFORM",
      tagline: "BI & Automation",
      focusTitle: "Data, BI & Tech Architecture",
      focusBadge: "Digital Transformation",
      triggers: [
        "Manual Excel consolidation errors & fragmented data silos",
        "Need for automated PowerBI executive dashboard feeds",
        "ERP system selection or legacy cloud migration challenges"
      ],
      impact: "Real-Time BI Dashboard Feed",
      impactBadge: "Tech Automation",
      iconType: "transform"
    },
    {
      id: "protect",
      pillar: "PROTECT",
      tagline: "Governance Defense",
      focusTitle: "Tax, Audit & Compliance Defense",
      focusBadge: "Regulatory Control",
      triggers: [
        "Statutory annual filing & corporate tax compliance deadlines",
        "Complex audit preparation and regulatory scrutiny",
        "Governance risk exposure in cross-border or NFP grant acquittals"
      ],
      impact: "100% Statutory Compliance",
      impactBadge: "Audit Defense",
      iconType: "protect"
    }
  ];

  const pillars = [
    {
      id: "lead",
      pillar: "LEAD",
      title: "CFO & FP&A Advisory",
      desc: "Strategic financial leadership and performance insight for organisations that need greater clarity, capability, or senior finance support.",
      image: "/images/cfo_advisory.jpg",
      iconType: "lead",
      highlights: [
        "Fractional & Interim CFO Leadership",
        "Driver-Based FP&A & Financial Modeling",
        "Board & Investor-Ready Reporting",
        "Working Capital & Cash Flow Optimization"
      ]
    },
    {
      id: "build",
      pillar: "BUILD",
      title: "Finance Functions & Operating Models",
      desc: "Build a finance function that supports the organisation with the right people, processes, systems, and governance.",
      image: "/images/finance_build.jpg",
      iconType: "build",
      highlights: [
        "Finance Target Operating Model Design",
        "Month-End Close Optimization",
        "Process Standardization & SOPs",
        "Internal Controls & Governance Frameworks"
      ]
    },
    {
      id: "transform",
      pillar: "TRANSFORM",
      title: "Finance Transformation, Data & Technology",
      desc: "Connect people, process, technology, and data to improve performance, automate workflows, and enable enterprise change.",
      image: "/images/finance_transform.jpg",
      iconType: "transform",
      highlights: [
        "ERP & Cloud Financial System Selection",
        "Business Intelligence & PowerBI Dashboards",
        "Data Architecture & Single Source Integration",
        "Digital Workflow & Accounts Payable Automation"
      ]
    },
    {
      id: "protect",
      pillar: "PROTECT",
      title: "Tax & Compliance",
      desc: "Strong financial foundations provide confidence and ensure your organisation meets all legal and statutory obligations.",
      image: "/images/tax_compliance.jpg",
      iconType: "protect",
      highlights: [
        "Corporate Tax Strategy & Planning",
        "Statutory Annual Filings & Reporting",
        "Audit Preparation & Defense Representation",
        "Regulatory Risk & Compliance Assessments"
      ]
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#f7f9fc] animate-in fade-in duration-300">
      
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#061a2e] text-white py-20 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 opacity-25">
          <img src="/images/hero_summit.jpg" alt="What We Do Overview" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#061a2e] via-[#061a2e]/92 to-[#007791]/50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center space-x-3 text-xs sm:text-sm font-bold text-gray-300">
            <button
              onClick={onBack}
              className="inline-flex items-center space-x-1.5 text-emerald-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-white">What We Do Overview</span>
          </div>

          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-[#2bb673]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Four Integrated Pillars</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white max-w-4xl leading-tight">
            What We Do — Four Integrated Service Pillars
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 font-medium max-w-3xl leading-relaxed">
            One focus — your success. We bring together CFO advisory, finance function capability, technology transformation, and compliance protection to help organisations navigate growth.
          </p>
        </div>
      </section>

      {/* 2. MASTER PILLARS SHOWCASE GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase text-[#007791] tracking-widest">Integrated Capability Framework</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#061a2e]">
              Explore Our Core Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-[#061a2e]/60 to-transparent"></div>
                    
                    <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/50">
                      <PillarIcon type={item.iconType} className="w-9 h-9" />
                    </div>

                    <div className="absolute bottom-4 left-6 right-6">
                      <span className="text-xs font-black uppercase tracking-widest text-[#2bb673]">
                        PILLAR: {item.pillar}
                      </span>
                      <h3 className="text-2xl font-black text-white leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7 space-y-5">
                    <p className="text-base text-slate-700 font-medium leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="space-y-2.5 pt-3 border-t border-slate-100">
                      <span className="text-xs font-extrabold uppercase text-[#007791] tracking-wider block mb-2">
                        Core Deliverable Scope:
                      </span>
                      {item.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-center space-x-2.5 text-sm font-semibold text-[#061a2e]">
                          <CheckCircle2 className="w-4.5 h-4.5 text-[#2bb673] flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Button */}
                <div className="p-7 pt-0">
                  <button
                    onClick={() => onSelectService(item.id)}
                    className="w-full brand-button-gradient text-white text-sm font-extrabold py-3.5 px-6 rounded-2xl flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                  >
                    <span>View {item.title} Dedicated Page</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. EXECUTIVE SERVICE COMPARISON MATRIX */}
      <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-[#f7f9fc] border-t border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#007791]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2bb673]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header & View Mode Switcher */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-[#007791] bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
                <Sparkles className="w-3.5 h-3.5 text-[#2bb673]" />
                <span>Capability Alignment Suite</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061a2e] tracking-tight">
                Executive Service Pillar Matrix
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-medium">
                Compare our four core finance capability blueprints to match your organisation's immediate growth priorities and operational friction points.
              </p>
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center bg-white p-1.5 rounded-2xl border border-slate-200 shadow-md self-start md:self-auto">
              <button
                onClick={() => setMatrixViewMode('matrix')}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-black transition-all ${
                  matrixViewMode === 'matrix'
                    ? 'bg-[#061a2e] text-white shadow-md'
                    : 'text-slate-600 hover:text-[#061a2e] hover:bg-slate-100'
                }`}
              >
                <Table className="w-4 h-4 text-[#2bb673]" />
                <span>Matrix Table</span>
              </button>
              <button
                onClick={() => setMatrixViewMode('cards')}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-black transition-all ${
                  matrixViewMode === 'cards'
                    ? 'bg-[#061a2e] text-white shadow-md'
                    : 'text-slate-600 hover:text-[#061a2e] hover:bg-slate-100'
                }`}
              >
                <LayoutGrid className="w-4 h-4 text-[#2bb673]" />
                <span>Pillar Cards</span>
              </button>
            </div>
          </div>

          {/* VIEW MODE 1: SLEEK EXECUTIVE MATRIX TABLE */}
          {matrixViewMode === 'matrix' ? (
            <div className="overflow-hidden rounded-3xl border border-slate-200/90 shadow-2xl bg-white">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[900px]">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#061a2e] via-[#08213b] to-[#007791] text-white text-xs uppercase tracking-widest font-black">
                      <th className="p-6 w-1/5">Pillar Blueprint</th>
                      <th className="p-6 w-1/4">Primary Advisory Focus</th>
                      <th className="p-6 w-1/3">Best For Organisations Facing...</th>
                      <th className="p-6 w-1/6 text-center">Strategic Outcome</th>
                      <th className="p-6 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-sm font-medium text-slate-700">
                    {matrixData.map((row) => (
                      <tr
                        key={row.id}
                        className="hover:bg-gradient-to-r hover:from-teal-50/50 hover:via-emerald-50/20 hover:to-transparent transition-all duration-300 group cursor-pointer"
                        onClick={() => onSelectService(row.id)}
                      >
                        {/* 1. Pillar Badge Column */}
                        <td className="p-6 align-top">
                          <div className="flex items-start space-x-3.5">
                            <div className="p-3 rounded-2xl bg-[#061a2e] text-white shadow-md border border-[#2bb673]/30 group-hover:scale-110 transition-transform flex-shrink-0">
                              <PillarIcon type={row.iconType} className="w-6 h-6 text-[#2bb673]" />
                            </div>
                            <div>
                              <span className="text-xl font-black text-[#061a2e] block group-hover:text-[#007791] transition-colors">
                                {row.pillar}
                              </span>
                              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#2bb673] block mt-0.5">
                                {row.tagline}
                              </span>
                            </div>
                          </div>
                        </td>

                        {/* 2. Primary Focus Column */}
                        <td className="p-6 align-top space-y-2">
                          <h3 className="text-base font-extrabold text-[#061a2e] group-hover:text-[#007791] transition-colors leading-snug">
                            {row.focusTitle}
                          </h3>
                          <span className="inline-block px-3 py-1 bg-sky-50 text-[#007791] border border-sky-200/80 text-[11px] font-extrabold rounded-full">
                            {row.focusBadge}
                          </span>
                        </td>

                        {/* 3. Organisational Triggers Column */}
                        <td className="p-6 align-top">
                          <div className="space-y-2">
                            {row.triggers.map((trig, tIdx) => (
                              <div key={tIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                                <CheckCircle2 className="w-4 h-4 text-[#2bb673] flex-shrink-0 mt-0.5" />
                                <span className="leading-snug">{trig}</span>
                              </div>
                            ))}
                          </div>
                        </td>

                        {/* 4. Strategic Outcome Column */}
                        <td className="p-6 align-top text-center">
                          <div className="inline-flex flex-col items-center justify-center p-3 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 w-full">
                            <Zap className="w-4 h-4 text-[#2bb673] mb-1" />
                            <span className="text-xs font-black text-[#061a2e] block text-center leading-tight">
                              {row.impact}
                            </span>
                            <span className="text-[10px] font-extrabold text-[#2bb673] uppercase tracking-wider block mt-1">
                              {row.impactBadge}
                            </span>
                          </div>
                        </td>

                        {/* 5. Action Column */}
                        <td className="p-6 align-top text-right">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectService(row.id);
                            }}
                            className="brand-button-gradient text-white text-xs font-extrabold py-3 px-5 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-1.5 whitespace-nowrap"
                          >
                            <span>Explore {row.pillar}</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            /* VIEW MODE 2: EXECUTIVE VISUAL CARDS GRID */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {matrixData.map((row) => (
                <div
                  key={row.id}
                  onClick={() => onSelectService(row.id)}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer"
                >
                  <div className="p-8 space-y-6">
                    {/* Top Row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 rounded-2xl bg-[#061a2e] text-white shadow-md border border-[#2bb673]/30">
                          <PillarIcon type={row.iconType} className="w-6 h-6 text-[#2bb673]" />
                        </div>
                        <div>
                          <span className="text-2xl font-black text-[#061a2e] block group-hover:text-[#007791] transition-colors">
                            {row.pillar}
                          </span>
                          <span className="text-xs font-extrabold uppercase tracking-wider text-[#2bb673] block">
                            {row.tagline}
                          </span>
                        </div>
                      </div>

                      <span className="px-3 py-1 bg-emerald-50 text-[#2bb673] border border-emerald-200 text-xs font-black rounded-full uppercase">
                        {row.impactBadge}
                      </span>
                    </div>

                    {/* Title & Focus */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <span className="text-xs font-extrabold uppercase text-[#007791] tracking-wider block">
                        Advisory Focus
                      </span>
                      <h3 className="text-xl font-black text-[#061a2e]">
                        {row.focusTitle}
                      </h3>
                    </div>

                    {/* Scenario Triggers */}
                    <div className="space-y-3 pt-2">
                      <span className="text-xs font-extrabold uppercase text-slate-500 tracking-wider block">
                        Best For Organisations Facing:
                      </span>
                      {row.triggers.map((trig, tIdx) => (
                        <div key={tIdx} className="flex items-start space-x-2.5 text-sm font-semibold text-slate-700">
                          <CheckCircle2 className="w-4.5 h-4.5 text-[#2bb673] flex-shrink-0 mt-0.5" />
                          <span>{trig}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="p-8 pt-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectService(row.id);
                      }}
                      className="w-full brand-button-gradient text-white text-sm font-extrabold py-3.5 px-6 rounded-2xl flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                    >
                      <span>Explore {row.pillar} Dedicated Blueprint</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

    </div>
  );
};
