import React, { useState, useEffect } from 'react';
import { 
  ArrowRight,
  Eye, 
  BarChart3, 
  Settings, 
  Target, 
  Users, 
  Shield, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';

export const ApproachWhyUs = ({ data, onOpenContact }) => {
  const [activePhase, setActivePhase] = useState(1);

  // Automatically cycle through cards continuously every 4.5 seconds (never stops on mouse hover)
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev >= 4 ? 1 : prev + 1));
    }, 4500);

    return () => clearInterval(interval);
  }, [activePhase]);

  const getWhyUsIcon = (iconName) => {
    switch (iconName) {
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-[#2bb673]" />;
      case 'Settings':
        return <Settings className="w-5 h-5 text-[#2bb673]" />;
      case 'Target':
        return <Target className="w-5 h-5 text-[#2bb673]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#2bb673]" />;
      case 'Shield':
      default:
        return <Shield className="w-5 h-5 text-[#2bb673]" />;
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
        className="relative py-20 bg-[#f8fafc] text-slate-800 overflow-hidden"
      >
        {/* Clean background without square grid */}
        <div 
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[550px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle 700px at 50% 120px, rgba(14, 165, 233, 0.08), transparent 70%)'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-12 text-center sm:text-left">
            <span className="inline-block text-xs font-bold text-[#007791] uppercase tracking-widest bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200 mb-3">
              METHODOLOGY &amp; EXECUTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061a2e] tracking-tight">
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
                  className={`rounded-2xl flex flex-col justify-between overflow-hidden transition-all duration-300 text-left group cursor-pointer relative focus:outline-none focus:ring-2 focus:ring-cyan-500/50 bg-white border ${
                    isSelected
                      ? 'border-[#0284c7] ring-2 ring-cyan-500/40 shadow-[0_20px_35px_-5px_rgba(2,132,199,0.22)] -translate-y-2 scale-[1.01]'
                      : 'border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5'
                  }`}
                >
                  {/* Top Active Linear Progress Bar Indicator */}
                  <div className="absolute top-0 left-0 right-0 h-[3.5px] bg-slate-100/80 z-20 overflow-hidden">
                    {isSelected ? (
                      <div 
                        key={`timer-${stepNumber}-${activePhase}`}
                        className="h-full bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 step-timer-active"
                      />
                    ) : (
                      <div className="h-full w-0 bg-transparent" />
                    )}
                  </div>

                  <div className="w-full">
                    {/* Card Photo Header */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={imgUrl(step.image || defaultApproachImages[idx % defaultApproachImages.length])}
                        alt={step.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          const fallback = imgUrl(defaultApproachImages[idx % defaultApproachImages.length]);
                          if (e.currentTarget.src !== fallback) {
                            e.currentTarget.src = fallback;
                          }
                        }}
                      />
                      {/* Gradient overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/10" />

                      {/* Floating Step Number Badge */}
                      <div className="absolute top-3.5 left-3.5 bg-slate-900/80 backdrop-blur-md border border-white/20 text-white font-bold text-xs px-2.5 py-1 rounded-full shadow-md">
                        {step.num || `0${stepNumber}`}
                      </div>

                      {/* Active Phase Pill Badge with Pulsing Ping */}
                      <div 
                        className={`absolute top-3.5 right-3.5 bg-teal-500 backdrop-blur-md text-white font-bold text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded-full transition-all duration-300 flex items-center gap-1.5 shadow-sm ${
                          isSelected ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 pointer-events-none'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                        Active Phase
                      </div>

                      {/* In-Image Title */}
                      <div className="absolute bottom-3 left-4">
                        <span className="text-xs uppercase tracking-wider text-cyan-300 font-semibold block mb-0.5">
                          Phase {step.num || `0${stepNumber}`}
                        </span>
                        <h3 className="text-2xl font-bold text-white tracking-tight">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Card Body Description */}
                    <div className="p-5 pt-4">
                      <p className="text-sm text-slate-600 leading-relaxed min-h-[90px]">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer with Step Tag & Interactive Circle Arrow */}
                  <div className="p-5 pt-0 mt-auto w-full">
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className={`text-xs font-bold tracking-widest uppercase transition-colors ${
                        isSelected ? 'text-cyan-600 font-extrabold' : 'text-slate-400 group-hover:text-cyan-600'
                      }`}>
                        Step {step.num || `0${stepNumber}`}
                      </span>
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border ${
                        isSelected 
                          ? 'bg-cyan-600 text-white border-transparent rotate-90 scale-110 shadow-md shadow-cyan-500/30' 
                          : 'bg-slate-100 text-slate-600 border-slate-200 group-hover:bg-cyan-600 group-hover:text-white group-hover:border-transparent group-hover:translate-x-0.5'
                      }`}>
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Connective Pointer Triangle Arrows pointing from Active Tab to Deep Dive Drawer */}
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
                <div className="w-4 h-4 bg-white border-t border-l border-cyan-500/70 rotate-45 transform translate-y-2 shadow-sm" />
              </div>
            ))}
          </div>

          {/* Selected Step Image and Description Showcase Panel */}
          <div className="mt-2 rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.08)] relative overflow-hidden transition-all duration-300">
            
            {/* Soft Ambient Radial Blur Accent inside Showcase */}
            <div className="pointer-events-none absolute -right-20 -top-20 w-80 h-80 bg-cyan-100/60 rounded-full blur-3xl" />

            {/* Smooth Animated Content Transition for the Active Phase */}
            <div key={activePhase} className="animate-fade-slide-up relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                
                {/* Selected Step Image Showcase (lg:col-span-5) */}
                <div className="lg:col-span-5 w-full">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[4/3] group bg-slate-900">
                    <img
                      src={imgUrl(selectedStep.image || defaultApproachImages[(activePhase - 1) % defaultApproachImages.length])}
                      alt={selectedStep.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        const fallback = imgUrl(defaultApproachImages[(activePhase - 1) % defaultApproachImages.length]);
                        if (e.currentTarget.src !== fallback) {
                          e.currentTarget.src = fallback;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none" />
                    
                    {/* Top Step Number Badge */}
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md border border-white/20 text-white font-bold text-xs px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      Phase {selectedStep.num || `0${activePhase}`}
                    </div>

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-xs uppercase tracking-wider text-cyan-300 font-semibold block mb-0.5">
                        Step {selectedStep.num || `0${activePhase}`} of 04
                      </span>
                      <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {selectedStep.title}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Selected Step Description & Details (lg:col-span-7) */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-50 border border-cyan-200 text-[#007791] mb-3 self-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    Step {selectedStep.num || `0${activePhase}`} • Methodology in Focus
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#061a2e] tracking-tight mb-3">
                    {selectedStep.title}
                  </h3>

                  {/* Selected Step Description */}
                  <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed mb-6">
                    {selectedStep.desc}
                  </p>

                  {/* Highlights / Key Activities for this step */}
                  <div className="space-y-3 mb-8">
                    {((selectedStep.points && selectedStep.points.length > 0 ? selectedStep.points : stepHighlights[activePhase]) || []).map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                        <span className="w-5 h-5 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 shrink-0 mt-0.5 text-xs font-bold">
                          ✓
                        </span>
                        <div>
                          <span className="text-xs sm:text-sm font-bold text-slate-900 block">
                            {highlight.title}
                          </span>
                          <span className="text-xs sm:text-sm text-slate-600 leading-normal">
                            {highlight.desc}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action Button & Step Status */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => {
                        if (onOpenContact) {
                          onOpenContact();
                        } else {
                          const el = document.getElementById('contact');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-teal-600 to-cyan-600 hover:brightness-105 shadow-md shadow-teal-600/20 transition-all cursor-pointer group"
                    >
                      <span>Discuss {selectedStep.title} With Our Team</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <span className="text-xs text-slate-600 font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Auto-rotates every 4.5s • Click any card above to focus
                    </span>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

                  {/* SECTION 2: WHY US? (LAYOUT: 3 ON TOP, 2 ON BOTTOM) */}
      <section id="why-us" className="py-20 bg-white border-t border-slate-200/60 text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center sm:text-left">
            <span className="inline-block text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-3">
              WHY CHOOSE EVOLVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061a2e] tracking-tight">
              {data.whyUsTitle || "Why us?"}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal mt-2 max-w-2xl leading-relaxed">
              {data.whyUsSubtitle || "Proven expertise, practical delivery, and strategic clarity for your organisation."}
            </p>
          </div>

          {/* 5 Cards Arranged as 3 on Top Row, 2 on Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {data.whyUsItems.map((item, idx) => {
              // 3 cards on top row (each taking 2 of 6 columns = 33.3%)
              // 2 cards on bottom row (each taking 3 of 6 columns = 50%)
              const isTopRow = idx < 3;
              const colSpanClass = isTopRow 
                ? (idx === 2 ? 'md:col-span-2 lg:col-span-2' : 'md:col-span-1 lg:col-span-2') 
                : 'md:col-span-1 lg:col-span-3';

              return (
                <div
                  key={item.id || idx}
                  className={`bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-[#2bb673]/60 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group ${colSpanClass}`}
                >
                  <div>
                    {/* Photo Header */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={imgUrl(item.image || defaultWhyUsImages[idx % defaultWhyUsImages.length])}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                        onError={(e) => {
                          const fallback = imgUrl(defaultWhyUsImages[idx % defaultWhyUsImages.length]);
                          if (e.currentTarget.src !== fallback) {
                            e.currentTarget.src = fallback;
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-[#061a2e]/50 to-transparent"></div>
                      
                      {/* Icon Badge */}
                      <div className="absolute top-4 left-4 p-2.5 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-white/50">
                        {getWhyUsIcon(item.icon)}
                      </div>

                      {/* Title Overlay */}
                      <div className="absolute bottom-3 left-4 right-4">
                        <h3 className="text-xl font-extrabold text-white leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-6">
                      <p className="text-sm text-slate-700 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Footer Tag */}
                  <div className="px-6 pb-6 pt-0 border-t border-slate-100 mt-2">
                    <span className="inline-flex items-center text-xs font-extrabold text-[#2bb673]">
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
