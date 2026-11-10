import React, { useState, useEffect } from 'react';
import { 
  ArrowRight,
  BarChart3, 
  Settings, 
  Target, 
  Users, 
  Shield, 
  CheckCircle2, 
} from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';
import { SectionDivider } from './SectionDivider';

export const ApproachWhyUs = ({ data, onOpenContact }) => {
  const [activePhase, setActivePhase] = useState(1);

  // Automatically cycle through cards continuously every 4.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev >= 4 ? 1 : prev + 1));
    }, 4500);

    return () => clearInterval(interval);
  }, [activePhase]);

  const getWhyUsIcon = (iconName) => {
    switch (iconName) {
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-[#007791]" />;
      case 'Settings':
        return <Settings className="w-5 h-5 text-[#007791]" />;
      case 'Target':
        return <Target className="w-5 h-5 text-[#007791]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#007791]" />;
      case 'Shield':
      default:
        return <Shield className="w-5 h-5 text-[#007791]" />;
    }
  };

  const defaultApproachImages = [
    "/images/approach_understand.jpg",
    "/images/approach_diagnose.jpg",
    "/images/approach_design.jpg",
    "/images/approach_deliver.jpg"
  ];

  const defaultWhyUsImages = [
    "/images/why_experience.jpg",
    "/images/why_transformation.jpg",
    "/images/why_practical.jpg",
    "/images/why_flexible.jpg",
    "/images/why_independent.jpg"
  ];

  const stepHighlights = {
    1: [
      { title: "Strategic Discovery", desc: "Understanding core objectives, operating conditions, and business model constraints." },
      { title: "Stakeholder Alignment", desc: "Engaging board and leadership teams to ensure consensus on strategic priorities." },
      { title: "Capability Baseline", desc: "Assessing current people, systems, data quality, and financial capabilities." }
    ],
    2: [
      { title: "Financial Forensics", desc: "Granular analysis into margin drivers, cost structures, and cash flow dynamics." },
      { title: "Operational Diagnostics", desc: "Pinpointing bottlenecks, reporting gaps, and workflow redundancies." },
      { title: "Opportunity Mapping", desc: "Quantifying high-value intervention points and prioritizing fast-payback wins." }
    ],
    3: [
      { title: "Target Operating Model", desc: "Architecting future-state finance structures, governance, and responsibilities." },
      { title: "Systems & Data Flow", desc: "Designing integrated technology architecture and real-time BI telemetry." },
      { title: "Execution Roadmap", desc: "Establishing stage-gate delivery milestones, resource plans, and risk controls." }
    ],
    4: [
      { title: "Hands-on Implementation", desc: "Embedding alongside your team to lead program delivery and technical rollout." },
      { title: "Change Adoption", desc: "Standardizing workflows with playbooks, SOPs, and cross-functional training." },
      { title: "Capability Transfer", desc: "Upskilling internal personnel to ensure sustained operational success without dependency." }
    ]
  };

  const selectedStep = (data.approachSteps && data.approachSteps[activePhase - 1]) || (data.approachSteps && data.approachSteps[0]) || {
    num: "01",
    title: "Understand",
    desc: "We start with the organisation, not the solution. We understand your objectives, challenges, operating environment and current capability.",
    image: "/images/approach_understand.jpg"
  };

  return (
    <>
      {/* SECTION 1: OUR APPROACH (INTERACTIVE TABBED METHODOLOGY & DEEP DIVE) */}
      <section 
        id="our-approach" 
        className="relative py-20 bg-white text-[#061a2e] border-b border-slate-200 overflow-hidden font-['Inter',sans-serif]"
      >
        {/* Soft Radial Ambient Lighting */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-12 text-center sm:text-left">
            <span className="inline-block text-xs font-bold text-[#007791] uppercase tracking-widest bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200 mb-3 font-['Plus_Jakarta_Sans',sans-serif]">
              METHODOLOGY &amp; EXECUTION
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#061a2e] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
              {data.approachTitle || "Our approach"}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal mt-2 max-w-2xl leading-relaxed">
              {data.approachSubtitle || "How we work"}
            </p>
          </div>

          {/* 4 Interactive Process Tab Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative" role="tablist" aria-label="Methodology Steps">
            {data.approachSteps.map((step, idx) => {
              const stepNumber = idx + 1;
              const isSelected = activePhase === stepNumber;

              return (
                <button
                  key={idx}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`panel-phase-${stepNumber}`}
                  id={`tab-phase-${stepNumber}`}
                  onClick={() => setActivePhase(stepNumber)}
                  className={`rounded-2xl flex flex-col justify-between overflow-hidden transition-all duration-300 text-left group cursor-pointer relative focus:outline-none backdrop-blur-md ${
                    isSelected
                      ? 'bg-white/[0.08] border border-teal-400 ring-2 ring-teal-400/40 shadow-2xl -translate-y-2 scale-[1.01]'
                      : 'bg-slate-50 border border-slate-200 hover:border-teal-400 hover:bg-white hover:-translate-y-0.5 shadow-xs'
                  }`}
                >
                  {/* Top Active Linear Progress Bar Indicator */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/10 z-20 overflow-hidden">
                    {isSelected ? (
                      <div 
                        key={`timer-${stepNumber}-${activePhase}`}
                        className="h-full bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 step-timer-active"
                      />
                    ) : (
                      <div className="h-full w-0 bg-transparent" />
                    )}
                  </div>

                  <div className="w-full">
                    {/* Card Photo Header */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                      <img
                        src={imgUrl(step.image || defaultApproachImages[idx % defaultApproachImages.length])}
                        alt={step.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-500"
                        onError={(e) => {
                          const fallback = imgUrl(defaultApproachImages[idx % defaultApproachImages.length]);
                          if (e.currentTarget.src !== fallback) {
                            e.currentTarget.src = fallback;
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-[#061a2e]/50 to-transparent" />

                      {/* Floating Step Number Badge */}
                      <div className="absolute top-3.5 left-3.5 bg-[#0B2440]/90 backdrop-blur-md border border-white/20 text-white font-bold text-xs px-2.5 py-1 rounded-full shadow-md font-mono">
                        {step.num || `0${stepNumber}`}
                      </div>

                      {/* Active Phase Pill Badge */}
                      <div 
                        className={`absolute top-3.5 right-3.5 bg-emerald-500 text-slate-950 font-extrabold text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded-full transition-all duration-300 flex items-center gap-1.5 shadow-sm font-['Plus_Jakarta_Sans',sans-serif] ${
                          isSelected ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 pointer-events-none'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-ping" />
                        Active Phase
                      </div>

                      {/* In-Image Title */}
                      <div className="absolute bottom-3 left-4">
                        <span className="text-xs uppercase tracking-wider text-teal-300 font-semibold block mb-0.5 font-mono">
                          Phase {step.num || `0${stepNumber}`}
                        </span>
                        <h3 className="text-xl font-bold text-white tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Card Body Description */}
                    <div className="p-5 pt-4">
                      <p className="text-sm text-slate-600 leading-relaxed min-h-[90px] font-normal">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer with Step Tag & Interactive Circle Arrow */}
                  <div className="p-5 pt-0 mt-auto w-full">
                    <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                      <span className={`text-xs font-bold tracking-widest uppercase transition-colors font-mono ${
                        isSelected ? 'text-[#007791]' : 'text-slate-600 group-hover:text-[#007791]'
                      }`}>
                        Step {step.num || `0${stepNumber}`}
                      </span>
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border ${
                        isSelected 
                          ? 'bg-emerald-500 text-slate-950 border-transparent rotate-90 scale-110 shadow-lg' 
                          : 'bg-slate-100 text-slate-600 border-slate-200 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-transparent group-hover:translate-x-0.5'
                      }`}>
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Connective Pointer Triangle Arrows */}
          <div className="hidden lg:grid grid-cols-4 gap-6 px-12 mt-6 mb-[-1px] pointer-events-none relative z-10">
            {[1, 2, 3, 4].map((phaseNum) => (
              <div 
                key={phaseNum}
                className={`flex justify-center transition-all duration-500 ease-out ${
                  activePhase === phaseNum 
                    ? 'opacity-100 transform translate-y-0 scale-100' 
                    : 'opacity-0 transform translate-y-2 scale-75'
                }`}
              >
                <div className="w-4 h-4 bg-[#0B2440] border-t border-l border-teal-400/50 rotate-45 transform translate-y-2 shadow-sm" />
              </div>
            ))}
          </div>

          {/* Selected Step Image and Description Showcase Panel */}
          <div className="mt-2 rounded-2xl border border-slate-200 bg-slate-50/80 p-5 sm:p-6 lg:p-7 shadow-xl relative overflow-hidden transition-all duration-300">
            
            {/* Ambient Radial Accent */}
            <div className="pointer-events-none absolute -right-20 -top-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />

            <div key={activePhase} className="animate-fade-slide-up relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                
                {/* Selected Step Image Showcase (lg:col-span-5) */}
                <div className="lg:col-span-5 w-full">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video group bg-slate-950">
                    <img
                      src={imgUrl(selectedStep.image || defaultApproachImages[(activePhase - 1) % defaultApproachImages.length])}
                      alt={selectedStep.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        const fallback = imgUrl(defaultApproachImages[(activePhase - 1) % defaultApproachImages.length]);
                        if (e.currentTarget.src !== fallback) {
                          e.currentTarget.src = fallback;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-[#061a2e]/40 to-transparent pointer-events-none" />
                    
                    {/* Top Step Number Badge */}
                    <div className="absolute top-4 left-4 bg-[#0B2440]/90 backdrop-blur-md border border-white/20 text-white font-bold text-xs px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 font-mono">
                      <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                      Phase {selectedStep.num || `0${activePhase}`}
                    </div>

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-xs uppercase tracking-wider text-teal-300 font-semibold block mb-0.5 font-mono">
                        Step {selectedStep.num || `0${activePhase}`} of 04
                      </span>
                      <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
                        {selectedStep.title}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Selected Step Description & Details (lg:col-span-7) */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 border border-teal-200 text-[#007791] mb-3 self-start font-['Plus_Jakarta_Sans',sans-serif]">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    Step {selectedStep.num || `0${activePhase}`} • Methodology in Focus
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#061a2e] tracking-tight mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                    {selectedStep.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-4">
                    {selectedStep.desc}
                  </p>

                  {/* Highlights / Key Activities for this step */}
                  <div className="space-y-2 mb-6">
                    {(stepHighlights[activePhase] || []).map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 p-2 rounded-xl bg-white border border-slate-200 hover:border-teal-400/50 transition-all shadow-xs">
                        <div className="w-5 h-5 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-xs font-bold text-[#061a2e] block leading-tight font-['Plus_Jakarta_Sans',sans-serif]">
                            {highlight.title}
                          </span>
                          <span className="text-xs text-slate-500 leading-snug">
                            {highlight.desc}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <button
                      type="button"
                      onClick={() => {
                        if (onOpenContact) onOpenContact();
                      }}
                      className="brand-button-gradient text-white text-xs sm:text-sm font-extrabold px-6 py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all cursor-pointer font-['Plus_Jakarta_Sans',sans-serif]"
                    >
                      <span>Discuss {selectedStep.title} With Our Team</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                    
                    <span className="text-xs text-slate-600 font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Auto-rotates every 4.5s • Click any card above to focus
                    </span>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION DIVIDER */}
      <SectionDivider />

      {/* SECTION 2: WHY US? */}
      <section id="why-us" className="py-20 sm:py-28 bg-[#061a2e] border-b border-white/10 text-white font-['Inter',sans-serif]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center sm:text-left">
            <span className="inline-block text-xs font-bold text-emerald-400 uppercase tracking-widest bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-emerald-500/30 mb-3 font-['Plus_Jakarta_Sans',sans-serif]">
              WHY CHOOSE EVOLVE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
              {data.whyUsTitle || "Why us?"}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal mt-2 max-w-2xl leading-relaxed">
              {data.whyUsSubtitle || "Proven expertise, practical delivery, and strategic clarity for your organisation."}
            </p>
          </div>

          {/* 5 Cards Arranged as 3 on Top Row, 2 on Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {data.whyUsItems.map((item, idx) => {
              const isTopRow = idx < 3;
              const colSpanClass = isTopRow 
                ? (idx === 2 ? 'md:col-span-2 lg:col-span-2' : 'md:col-span-1 lg:col-span-2') 
                : 'md:col-span-1 lg:col-span-3';

              return (
                <div
                  key={item.id || idx}
                  className={`bg-white/[0.03] rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-500/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group backdrop-blur-md ${colSpanClass}`}
                >
                  <div>
                    {/* Photo Header */}
                    <div className="relative h-48 overflow-hidden bg-slate-950">
                      <img
                        src={imgUrl(item.image || defaultWhyUsImages[idx % defaultWhyUsImages.length])}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-transform duration-700"
                        onError={(e) => {
                          const fallback = imgUrl(defaultWhyUsImages[idx % defaultWhyUsImages.length]);
                          if (e.currentTarget.src !== fallback) {
                            e.currentTarget.src = fallback;
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-[#061a2e]/50 to-transparent"></div>
                      
                      {/* Icon Badge */}
                      <div className="absolute top-4 left-4 p-2.5 bg-[#0B2440] backdrop-blur-md rounded-xl shadow-lg border border-white/15">
                        {getWhyUsIcon(item.icon)}
                      </div>

                      {/* Title Overlay */}
                      <div className="absolute bottom-3 left-4 right-4">
                        <h3 className="text-xl font-bold text-white leading-tight font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-emerald-300 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-6">
                      <p className="text-sm text-slate-300 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Footer Tag */}
                  <div className="px-6 pb-6 pt-0 border-t border-white/10 mt-2">
                    <span className="inline-flex items-center text-xs font-bold text-emerald-400 font-mono">
                      <span>Why Choose Evolve</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
