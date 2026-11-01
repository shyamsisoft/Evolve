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

const transformationServices = [
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
  videoSrc = null,
  gifSrc = null,
  posterSrc = '/images/finance_transform.jpg'
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeService = transformationServices[activeIdx] || transformationServices[0];

  return (
    <section 
      id="finance-transformation-services"
      className="py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200/80 relative overflow-hidden scroll-mt-28 font-['Plus_Jakarta_Sans',sans-serif]"
    >
      {/* Refined Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200/80">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Specialist Services
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#061a2e] tracking-tight leading-snug">
            Finance Transformation Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            We support organisations with:
          </p>
        </div>

        {/* 2-Column Split: Services List (Left) & Studio Showcase (Right) */}
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
                  className={`w-full text-left rounded-2xl transition-all duration-200 px-5 py-4 flex items-center justify-between cursor-default border ${
                    isActive 
                      ? 'bg-white border-emerald-500/50 shadow-[0_8px_25px_-6px_rgba(6,26,46,0.08)] ring-1 ring-emerald-500/20 translate-x-1' 
                      : 'bg-white/60 border-slate-200/70 hover:bg-white hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-center space-x-4 min-w-0">
                    {/* Numeric Index Badge */}
                    <span className={`font-mono text-xs font-bold w-7 shrink-0 transition-colors ${
                      isActive ? 'text-emerald-600 font-extrabold' : 'text-slate-400'
                    }`}>
                      {service.num}
                    </span>

                    {/* Service Icon */}
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all shrink-0 ${
                      isActive 
                        ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-500/30' 
                        : 'bg-slate-100/80 text-slate-500'
                    }`}>
                      <Icon className="w-4.5 h-4.5 stroke-[2.2]" />
                    </div>

                    {/* Service Title */}
                    <span className={`text-base sm:text-[17px] font-bold tracking-tight truncate transition-colors ${
                      isActive ? 'text-[#061a2e]' : 'text-slate-700'
                    }`}>
                      {service.title}
                    </span>
                  </div>

                  {/* Active Indicator dot */}
                  <div className="flex items-center space-x-2 shrink-0 ml-3">
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-slate-300" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Container (Sticky on Scroll) */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="rounded-3xl bg-[#090D16] border border-slate-800 shadow-[0_25px_60px_-15px_rgba(6,26,46,0.25)] overflow-hidden relative">
              
              {/* Studio Header Bar */}
              <div className="px-5 py-3.5 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-slate-300">
                    Capability Focus
                  </span>
                </div>
                <span className="text-[11px] font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  {activeService.num} / 09
                </span>
              </div>

              {/* Media Display Area */}
              <div className="relative aspect-video sm:aspect-[4/3] w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                
                {videoSrc ? (
                  <video
                    src={videoSrc}
                    poster={posterSrc ? imgUrl(posterSrc) : undefined}
                    controls
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : gifSrc ? (
                  <img
                    src={imgUrl(gifSrc)}
                    alt="Finance Transformation"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    {/* Executive High-Res Imagery */}
                    <img
                      src={imgUrl(posterSrc)}
                      alt="Finance Transformation"
                      className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                    />

                    {/* Elegant Gradient Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-[#090D16]/40 to-transparent pointer-events-none" />

                    {/* Active Service Detail Panel (Frosted Glass Briefing Card) */}
                    <div className="absolute inset-x-4 bottom-4 z-10 bg-[#090D16]/90 backdrop-blur-xl p-5 rounded-2xl border border-white/15 space-y-3 shadow-2xl">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                          {activeService.title}
                        </h4>
                        <span className="text-emerald-400 font-mono text-[11px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                          Active Phase
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2.5 border-t border-white/10 text-xs">
                        <div>
                          <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block mb-1">
                            Operational Focus
                          </span>
                          <span className="font-semibold text-slate-200 leading-snug block">
                            {activeService.scope}
                          </span>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-400 block mb-1">
                            Key Output
                          </span>
                          <span className="font-semibold text-slate-200 leading-snug block">
                            {activeService.deliverable}
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                )}

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
