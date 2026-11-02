import React, { useState, useEffect } from 'react';
import { PillarIcon } from './BrandLogo';
import { ArrowRight, ArrowLeft, CheckCircle2, Layers, ShieldCheck, Cpu, Target, BarChart2, Activity, PieChart, Table, LayoutGrid, Zap } from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';
import { CapabilityNavigatorSection } from './CapabilityNavigatorSection';
import { SectionDivider } from './SectionDivider';
import { PrimaryButton } from './PrimaryButton';

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
      image: imgUrl("/images/cfo_advisory.jpg"),
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
      image: imgUrl("/images/finance_build.jpg"),
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
      image: imgUrl("/images/finance_transform.jpg"),
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
      image: imgUrl("/images/tax_compliance.jpg"),
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
    <div className="pt-20 sm:pt-24 pb-20 bg-[#061a2e] text-white animate-in fade-in duration-300 font-['Inter',sans-serif]">
      
      {/* ======================================================== */}
      {/* 1. HERO SECTION (EXACT DESIGN MATCH WITH ALL PILLARS)    */}
      {/* ======================================================== */}
      <section className="relative min-h-[64vh] flex items-center bg-[#061a2e] text-white overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-white/10">
        
        {/* Background Artwork with Brand Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={imgUrl("/images/hero_summit.jpg")}
            alt="What We Do Overview"
            className="w-full h-full object-cover object-center opacity-30 transform scale-105"
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
            <span className="text-teal-300 font-bold">SERVICES</span>
            <span className="text-slate-500">/</span>
            <span className="text-white font-bold truncate">What We Do Overview</span>
          </nav>

          {/* Brand Pillar Tag: OVERVIEW */}
          <div className="flex items-center space-x-3.5 pt-1">
            <div className="p-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl flex items-center justify-center">
              <Layers className="w-9 h-9 text-emerald-400" />
            </div>
            <div>
              <span className="inline-block text-[11px] sm:text-xs font-bold tracking-widest text-[#2bb673] uppercase bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-1 rounded-full">
                FOUR INTEGRATED SERVICE PILLARS
              </span>
            </div>
          </div>

          {/* Main Headline & Value Proposition Narrative */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              What We Do
            </h1>
            <p className="text-xl sm:text-2xl text-emerald-400 font-bold tracking-tight">
              One focus — your success.
            </p>

            <div className="pt-1 space-y-3 max-w-3xl text-slate-200">
              <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-slate-100">
                We bring together CFO advisory, finance function capability, technology transformation, and compliance protection to help organisations navigate growth.
              </p>
            </div>
          </div>

          {/* Immediate Call to Action Button */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <PrimaryButton onClick={onOpenContact}>Start a Conversation</PrimaryButton>

            <span className="text-xs sm:text-sm text-slate-300 font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Four Connected Disciplines for Sustainable Growth
            </span>
          </div>

        </div>
      </section>

      {/* SECTION DIVIDER */}
      <SectionDivider />

      {/* 2. MASTER PILLARS SHOWCASE GRID */}
      <section className="py-20 bg-[#061a2e] text-white border-b border-white/10 relative overflow-hidden">
        {/* Subtle Ambient Lighting */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#007791]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2bb673]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase text-teal-400 tracking-widest">Integrated Capability Framework</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Explore Our Core Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((item) => (
              <div
                key={item.id}
                className="bg-white/[0.03] backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-500/50 hover:bg-white/[0.06] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={imgUrl(item.image)}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-[#061a2e]/60 to-transparent" />
                    
                    <div className="absolute top-4 left-4 p-3 bg-[#061a2e]/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/15">
                      <PillarIcon type={item.iconType} className="w-9 h-9" />
                    </div>

                    <div className="absolute bottom-4 left-6 right-6">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#2bb673]">
                        PILLAR: {item.pillar}
                      </span>
                      <h3 className="text-2xl font-bold text-white leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7 space-y-5">
                    <p className="text-base text-slate-300 font-normal leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="space-y-2.5 pt-3 border-t border-white/10">
                      <span className="text-xs font-bold uppercase text-teal-400 tracking-wider block mb-2">
                        Core Deliverable Scope:
                      </span>
                      {item.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-center space-x-2.5 text-sm font-medium text-slate-200">
                          <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Button */}
                <div className="p-7 pt-0">
                  <button
                    type="button"
                    onClick={() => onSelectService(item.id)}
                    className="w-full brand-button-gradient text-white text-sm font-bold py-3.5 px-6 rounded-2xl flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
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

      {/* SECTION DIVIDER */}
      <SectionDivider />

      {/* 3. EXECUTIVE SERVICE COMPARISON MATRIX */}
      <section className="py-20 bg-[#061a2e] text-white border-b border-white/10 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#007791]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2bb673]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header & View Mode Switcher */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-teal-300 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/10">
                <Layers className="w-3.5 h-3.5 text-[#2bb673]" />
                <span>Capability Alignment Suite</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Executive Service Pillar Matrix
              </h2>
              <p className="text-base sm:text-lg text-slate-300 font-normal">
                Compare our four core finance capability blueprints to match your organisation's immediate growth priorities and operational friction points.
              </p>
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center bg-white/[0.04] p-1.5 rounded-2xl border border-white/10 shadow-md self-start md:self-auto backdrop-blur-md">
              <button
                type="button"
                onClick={() => setMatrixViewMode('matrix')}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  matrixViewMode === 'matrix'
                    ? 'bg-white/[0.12] text-white border border-white/20 shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                <Table className="w-4 h-4 text-[#2bb673]" />
                <span>Matrix Table</span>
              </button>
              <button
                type="button"
                onClick={() => setMatrixViewMode('cards')}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  matrixViewMode === 'cards'
                    ? 'bg-white/[0.12] text-white border border-white/20 shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                <LayoutGrid className="w-4 h-4 text-[#2bb673]" />
                <span>Pillar Cards</span>
              </button>
            </div>
          </div>

          {/* VIEW MODE 1: SLEEK EXECUTIVE MATRIX TABLE */}
          {matrixViewMode === 'matrix' ? (
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-[#061a2e]/60 backdrop-blur-md">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[900px]">
                  <thead>
                    <tr className="bg-[#0B2440] border-b border-white/10 text-white text-xs uppercase tracking-widest font-bold">
                      <th className="p-6 w-1/5">Pillar Blueprint</th>
                      <th className="p-6 w-1/4">Primary Advisory Focus</th>
                      <th className="p-6 w-1/3">Best For Organisations Facing...</th>
                      <th className="p-6 w-1/6 text-center">Strategic Outcome</th>
                      <th className="p-6 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-sm font-normal text-slate-300">
                    {matrixData.map((row) => (
                      <tr
                        key={row.id}
                        className="hover:bg-white/[0.04] transition-all duration-300 group cursor-pointer"
                        onClick={() => onSelectService(row.id)}
                      >
                        {/* 1. Pillar Badge Column */}
                        <td className="p-6 align-top">
                          <div className="flex items-start space-x-3.5">
                            <div className="p-3 rounded-2xl bg-white/[0.04] text-white shadow-md border border-white/10 group-hover:border-emerald-500/50 group-hover:scale-105 transition-all flex-shrink-0">
                              <PillarIcon type={row.iconType} className="w-6 h-6 text-[#2bb673]" />
                            </div>
                            <div>
                              <span className="text-xl font-bold text-white block group-hover:text-emerald-300 transition-colors">
                                {row.pillar}
                              </span>
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2bb673] block mt-0.5">
                                {row.tagline}
                              </span>
                            </div>
                          </div>
                        </td>

                        {/* 2. Primary Focus Column */}
                        <td className="p-6 align-top space-y-2">
                          <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors leading-snug">
                            {row.focusTitle}
                          </h3>
                          <span className="inline-block px-3 py-1 bg-white/[0.04] text-teal-300 border border-teal-500/30 text-[11px] font-bold rounded-full">
                            {row.focusBadge}
                          </span>
                        </td>

                        {/* 3. Organisational Triggers Column */}
                        <td className="p-6 align-top">
                          <div className="space-y-2">
                            {row.triggers.map((trig, tIdx) => (
                              <div key={tIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm font-normal text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span className="leading-snug">{trig}</span>
                              </div>
                            ))}
                          </div>
                        </td>

                        {/* 4. Strategic Outcome Column */}
                        <td className="p-6 align-top text-center">
                          <div className="inline-flex flex-col items-center justify-center p-3 rounded-2xl bg-white/[0.04] border border-white/10 w-full">
                            <Zap className="w-4 h-4 text-[#2bb673] mb-1" />
                            <span className="text-xs font-bold text-white block text-center leading-tight">
                              {row.impact}
                            </span>
                            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mt-1">
                              {row.impactBadge}
                            </span>
                          </div>
                        </td>

                        {/* 5. Action Column */}
                        <td className="p-6 align-top text-right">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectService(row.id);
                            }}
                            className="brand-button-gradient text-white text-xs font-bold py-3 px-5 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-1.5 whitespace-nowrap cursor-pointer"
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
                  className="bg-white/[0.03] backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-500/50 hover:bg-white/[0.06] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer"
                >
                  <div className="p-8 space-y-6">
                    {/* Top Row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 rounded-2xl bg-white/[0.04] text-white shadow-md border border-white/10">
                          <PillarIcon type={row.iconType} className="w-6 h-6 text-[#2bb673]" />
                        </div>
                        <div>
                          <span className="text-2xl font-bold text-white block group-hover:text-emerald-300 transition-colors">
                            {row.pillar}
                          </span>
                          <span className="text-xs font-bold uppercase tracking-wider text-[#2bb673] block">
                            {row.tagline}
                          </span>
                        </div>
                      </div>

                      <span className="px-3 py-1 bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-bold rounded-full uppercase">
                        {row.impactBadge}
                      </span>
                    </div>

                    {/* Title & Focus */}
                    <div className="space-y-1.5 pt-2 border-t border-white/10">
                      <span className="text-xs font-bold uppercase text-teal-400 tracking-wider block">
                        Advisory Focus
                      </span>
                      <h3 className="text-xl font-bold text-white">
                        {row.focusTitle}
                      </h3>
                    </div>

                    {/* Scenario Triggers */}
                    <div className="space-y-3 pt-2">
                      <span className="text-xs font-bold uppercase text-slate-400 tracking-wider block">
                        Best For Organisations Facing:
                      </span>
                      {row.triggers.map((trig, tIdx) => (
                        <div key={tIdx} className="flex items-start space-x-2.5 text-sm font-normal text-slate-300">
                          <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{trig}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="p-8 pt-0">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectService(row.id);
                      }}
                      className="w-full brand-button-gradient text-white text-sm font-bold py-3.5 px-6 rounded-2xl flex items-center justify-center space-x-2 shadow-md hover:shadow-lg cursor-pointer"
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

      {/* PRE-FOOTER CALL TO ACTION & CAPABILITY NAVIGATOR */}
      <CapabilityNavigatorSection
        currentPillar="overview"
        onOpenContact={onOpenContact}
        onSelectService={onSelectService}
        onBack={onBack}
      />

    </div>
  );
};
