import React, { useEffect } from 'react';
import { PillarIcon } from './BrandLogo';
import { ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Layers, ShieldCheck, Cpu, Target, BarChart2, Activity, PieChart } from 'lucide-react';

export const WhatWeDoOverviewPage = ({ onSelectService, onBack, onOpenContact }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-[#007791]">
              Capability Selection Matrix
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#061a2e]">
              Executive Service Pillar Matrix
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#061a2e] text-white text-sm font-bold">
                  <th className="p-5">Pillar</th>
                  <th className="p-5">Primary Focus</th>
                  <th className="p-5">Best For Organisations Facing...</th>
                  <th className="p-5">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm font-medium text-slate-700">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-black text-[#061a2e] uppercase">LEAD</td>
                  <td className="p-5 text-[#007791] font-bold">CFO & FP&A Advisory</td>
                  <td className="p-5">Forward-looking forecasting, board reporting clarity, & fractional CFO support</td>
                  <td className="p-5">
                    <button onClick={() => onSelectService('lead')} className="text-xs font-extrabold text-[#2bb673] hover:underline">Explore LEAD →</button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-black text-[#061a2e] uppercase">BUILD</td>
                  <td className="p-5 text-[#007791] font-bold">Operating Models</td>
                  <td className="p-5">Delayed month-end closes, team role design, & governance controls</td>
                  <td className="p-5">
                    <button onClick={() => onSelectService('build')} className="text-xs font-extrabold text-[#2bb673] hover:underline">Explore BUILD →</button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-black text-[#061a2e] uppercase">TRANSFORM</td>
                  <td className="p-5 text-[#007791] font-bold">Data & Technology</td>
                  <td className="p-5">ERP software selection, PowerBI dashboards, & automated accounting pipelines</td>
                  <td className="p-5">
                    <button onClick={() => onSelectService('transform')} className="text-xs font-extrabold text-[#2bb673] hover:underline">Explore TRANSFORM →</button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-black text-[#061a2e] uppercase">PROTECT</td>
                  <td className="p-5 text-[#007791] font-bold">Tax & Compliance</td>
                  <td className="p-5">Corporate tax strategy, statutory annual filings, & audit readiness defense</td>
                  <td className="p-5">
                    <button onClick={() => onSelectService('protect')} className="text-xs font-extrabold text-[#2bb673] hover:underline">Explore PROTECT →</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
};
