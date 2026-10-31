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
  CheckCircle2,
  Workflow
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
      className="py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200/80 relative overflow-hidden scroll-mt-28"
    >
      {/* Soft Ambient Radial Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#007791]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061a2e] tracking-tight leading-tight">
            Finance Transformation Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-semibold leading-relaxed">
            We support organisations with:
          </p>
        </div>

        {/* 2-Column Split: Services Listed Down (Left) & Media / Live Telemetry Container (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: 9 Services Listed Down (Pure Informational List - Zero Hyperlink Behaviors) */}
          <div className="lg:col-span-6 divide-y divide-slate-200/80 border-t border-b border-slate-200/80">
            {transformationServices.map((service, idx) => {
              const Icon = service.icon;
              const isActive = activeIdx === idx;

              return (
                <div
                  key={service.num}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`py-5 px-4 transition-colors duration-200 flex items-center justify-between cursor-default ${
                    isActive ? 'bg-slate-100/80' : 'hover:bg-slate-50/80'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    {/* Numeric Index */}
                    <span className={`font-mono text-sm font-semibold w-8 shrink-0 transition-colors ${
                      isActive ? 'text-emerald-700 font-bold' : 'text-slate-400'
                    }`}>
                      {service.num}
                    </span>

                    {/* Lucide Icon */}
                    <div className={`transition-colors duration-200 ${
                      isActive ? 'text-emerald-600' : 'text-slate-500'
                    }`}>
                      <Icon className="w-5 h-5 stroke-[2] shrink-0" />
                    </div>

                    {/* Service Title in Bold */}
                    <span className={`text-base sm:text-[17px] font-bold transition-colors ${
                      isActive ? 'text-[#061a2e]' : 'text-slate-800'
                    }`}>
                      {service.title}
                    </span>
                  </div>

                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse hidden sm:block shrink-0" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Container (Sticky on Scroll) */}
          <div className="lg:col-span-6 lg:sticky lg:top-28 lg:pl-8 lg:border-l lg:border-slate-200/80">
            <div className="rounded-3xl bg-[#061a2e] border border-slate-800 shadow-2xl overflow-hidden relative">
              
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
                      className="w-full h-full object-cover opacity-90"
                    />

                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-[#061a2e]/20 to-transparent" />

                    {/* Live Dynamic Telemetry Overlay based on Active Service */}
                    <div className="absolute inset-x-4 top-4 z-10 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-black/60 backdrop-blur-md text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        CAPABILITY FOCUS
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold text-slate-300 bg-white/10 backdrop-blur-md">
                        {activeService.num} / 09
                      </span>
                    </div>

                    {/* Active Service Detail Panel */}
                    <div className="absolute inset-x-4 bottom-4 z-10 bg-[#061a2e]/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/10 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                          {activeService.title}
                        </h4>
                        <span className="text-emerald-400 font-mono text-xs font-semibold">
                          VERIFIED
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-white/10 text-xs">
                        <div className="text-slate-300">
                          <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">
                            Operational Focus
                          </span>
                          <span className="font-medium text-slate-200">
                            {activeService.scope}
                          </span>
                        </div>
                        <div className="text-slate-300">
                          <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-400 block">
                            Key Output
                          </span>
                          <span className="font-medium text-slate-200">
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
