import React, { useState } from 'react';
import {
  Compass,
  Search,
  Layout,
  RefreshCw,
  Layers,
  Zap,
  BarChart3,
  TrendingUp,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';

const defaultTransformationServices = [
  {
    num: "01",
    title: "Transformation strategy",
    icon: Compass,
    scope: "Strategic roadmap & digital operating model alignment",
    deliverable: "Target architecture & phased investment plan"
  },
  {
    num: "02",
    title: "Current-state assessment",
    icon: Search,
    scope: "Systems diagnostic & process gap analysis",
    deliverable: "Capability heatmap & risk register"
  },
  {
    num: "03",
    title: "Future-state design",
    icon: Layout,
    scope: "Target operating model & automated workflows",
    deliverable: "Future-state process blueprints & role profiles"
  },
  {
    num: "04",
    title: "Process redesign",
    icon: RefreshCw,
    scope: "Cycle velocity & workflow standardization",
    deliverable: "Streamlined SOPs & approval matrices"
  },
  {
    num: "05",
    title: "ERP implementation and optimisation",
    icon: Layers,
    scope: "Core ERP configuration & performance tuning",
    deliverable: "General ledger & subledger alignment"
  },
  {
    num: "06",
    title: "Automation",
    icon: Zap,
    scope: "Rules-based automated reconciliation pipelines",
    deliverable: "Exception tracking & automated data loads"
  },
  {
    num: "07",
    title: "Reporting transformation",
    icon: BarChart3,
    scope: "Self-service BI models & management dashboards",
    deliverable: "Unified executive financial telemetry"
  },
  {
    num: "08",
    title: "Finance capability uplift",
    icon: TrendingUp,
    scope: "Skills transition to commercial partnering",
    deliverable: "Upskilling framework & decision playbooks"
  },
  {
    num: "09",
    title: "Transformation program support",
    icon: ShieldCheck,
    scope: "Program governance & risk mitigation",
    deliverable: "PMO leadership & milestone assurance"
  },
];

export default function FinanceTransformationServicesGrid({
  services = null,
  videoSrc = null,
  gifSrc = null,
  posterSrc = '/images/scale_cfo_executive.png'
}) {
  const transformationServices = (services && services.length > 0)
    ? services.map((s, idx) => ({
        ...defaultTransformationServices[idx % defaultTransformationServices.length],
        ...s,
        icon: defaultTransformationServices[idx % defaultTransformationServices.length]?.icon
      }))
    : defaultTransformationServices;
  const [activeIdx, setActiveIdx] = useState(0);
  const activeService = transformationServices[activeIdx] || transformationServices[0];

  return (
    <section 
      id="finance-transformation-services"
      className="py-20 sm:py-28 bg-white text-[#061a2e] border-b border-slate-200 relative overflow-hidden scroll-mt-28 font-['Plus_Jakarta_Sans',sans-serif]"
    >
      {/* Refined Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12 sm:mb-16">
          <span className="inline-block text-xs font-bold tracking-wider uppercase text-emerald-700 border-l-2 border-emerald-600 pl-3">
            SPECIALIST SERVICES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#061a2e] tracking-tight leading-snug">
            Finance Transformation Services
          </h2>
          <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
            We support organisations with:
          </p>
        </div>

        {/* 2-Column Split: Services List (Left) & Character Showcase (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: 9 Services Listed Down */}
          <div className="lg:col-span-6 space-y-2">
            {transformationServices.map((service, idx) => {
              const Icon = service.icon;
              const isActive = activeIdx === idx;

              return (
                <div
                  key={service.num}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left rounded-xl transition-all duration-200 px-5 py-4 flex items-center justify-between cursor-pointer border ${
                    isActive 
                      ? 'bg-emerald-50/90 border-emerald-500 shadow-md ring-1 ring-emerald-500/20' 
                      : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-emerald-400/60 shadow-xs'
                  }`}
                >
                  <div className="flex items-center space-x-4 min-w-0">
                    {/* Numeric Index Badge */}
                    <span className={`font-mono text-xs font-bold w-7 shrink-0 transition-colors ${
                      isActive ? 'text-emerald-700 font-black' : 'text-slate-600 font-bold'
                    }`}>
                      {service.num}
                    </span>

                    {/* Service Icon */}
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all shrink-0 ${
                      isActive 
                        ? 'bg-emerald-600 text-white shadow-xs' 
                        : 'bg-white text-slate-700 border border-slate-200 shadow-2xs'
                    }`}>
                      <Icon className="w-4.5 h-4.5 stroke-[2.2]" />
                    </div>

                    {/* Service Title */}
                    <span className={`text-base sm:text-[17px] tracking-tight truncate transition-colors ${
                      isActive ? 'text-[#061a2e] font-black' : 'text-slate-800 font-semibold'
                    }`}>
                      {service.title}
                    </span>
                  </div>

                  {/* Active Indicator dot */}
                  <div className="flex items-center space-x-2 shrink-0 ml-3">
                    {isActive ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Interactive Character Showcase (Sticky on Scroll) */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="relative flex flex-col items-center">
              
              {/* Atmospheric Spotlight Glow Behind Character */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-cyan-500/15 via-[#007791]/20 to-emerald-400/15 rounded-full blur-3xl pointer-events-none" />
              
              {/* Grounding Stage Light at Base */}
              <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-t from-cyan-400/25 to-transparent blur-md pointer-events-none" />

              {/* Character Advisor (Pointing Directly at the Left Capability List) */}
              <img
                src={imgUrl('/images/scale_cfo_executive.png')}
                alt="Finance Transformation Advisor"
                loading="lazy"
                decoding="async"
                className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] h-auto object-contain relative z-10 drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:scale-[1.02]"
              />

              {/* Active Service Detail Panel (Frosted Glass Briefing Card) */}
              <div className="w-full relative z-20 -mt-6 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xl space-y-3.5 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-emerald-700">
                      Phase {activeService.num} / 09
                    </span>
                  </div>
                  <span className="text-emerald-800 font-mono text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded bg-emerald-50 border border-emerald-300">
                    Active Capability Focus
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl font-black text-[#061a2e] tracking-tight">
                  {activeService.title}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-200 text-xs">
                  <div>
                    <span className="text-[11px] uppercase font-mono font-bold tracking-wider text-[#007791] block mb-1">
                      Operational Focus
                    </span>
                    <span className="text-sm font-semibold text-slate-800 leading-snug block">
                      {activeService.scope}
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-mono font-bold tracking-wider text-emerald-700 block mb-1">
                      Key Output
                    </span>
                    <span className="text-sm font-semibold text-slate-800 leading-snug block">
                      {activeService.deliverable}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
