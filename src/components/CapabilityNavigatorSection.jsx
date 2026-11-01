import React from 'react';
import { ArrowRight, Sparkles, Check } from 'lucide-react';
import { PillarIcon } from './BrandLogo';

const PILLARS = [
  { id: 'lead', title: 'LEAD', desc: 'CFO & FP&A Advisory', tag: 'Strategic Leadership' },
  { id: 'build', title: 'BUILD', desc: 'Operating Models', tag: 'Scalable Systems' },
  { id: 'transform', title: 'TRANSFORM', desc: 'Data & Tech', tag: 'BI & Automation' },
  { id: 'protect', title: 'PROTECT', desc: 'Tax & Compliance', tag: 'Governance Defense' }
];

const PILLAR_CONFIGS = {
  lead: {
    badge: 'EXECUTIVE ADVISORY APPOINTMENTS',
    headline: 'Start a CFO Conversation',
    description: "Whether you need strategic financial leadership, fractional CFO support, or enhanced FP&A capabilities, let's discuss how we can partner with your leadership team.",
    buttonText: 'Start a Conversation',
  },
  build: {
    badge: 'FINANCE FUNCTION DIAGNOSTIC',
    headline: 'Request a Finance Health Check',
    description: 'Build a finance function that supports the organisation.',
    buttonText: 'Request a Finance Health Check',
  },
  transform: {
    badge: 'TRANSFORMATION ARCHITECTURE',
    headline: 'Discuss a Transformation Requirement',
    description: 'Connect people, process, technology and data.',
    buttonText: 'Discuss a Transformation Requirement',
  },
  protect: {
    badge: 'COMPLIANCE & GOVERNANCE REVIEW',
    headline: 'Request a Compliance Health Check',
    description: 'Strong financial foundations provide confidence.',
    buttonText: 'Request a Compliance Health Check',
  },
  overview: {
    badge: 'INTEGRATED CAPABILITY FRAMEWORK',
    headline: 'Start an Integrated Conversation',
    description: 'We bring together CFO advisory, finance function capability, technology transformation, and compliance protection to help organisations navigate growth.',
    buttonText: 'Start a Conversation',
  }
};

export const CapabilityNavigatorSection = ({
  currentPillar = 'lead',
  badge: customBadge,
  headline: customHeadline,
  description: customDescription,
  buttonText: customButtonText,
  onOpenContact,
  onSelectService,
  onBack,
}) => {
  const config = PILLAR_CONFIGS[currentPillar] || PILLAR_CONFIGS.lead;

  const badge = customBadge || config.badge;
  const headline = customHeadline || config.headline;
  const description = customDescription || config.description;
  const buttonText = customButtonText || config.buttonText;

  const handleNavigateOverview = () => {
    if (onSelectService) {
      onSelectService('what-we-do');
    } else if (onBack) {
      onBack();
    }
  };

  return (
    <>
      {/* 1. HIGH-CONTRAST FOOTER CALL TO ACTION BANNER */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-[#061a2e] via-[#092644] to-[#041220] text-white relative overflow-hidden border-t border-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
        {/* Glow Spheres */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#007791]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#2bb673]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
          <div className="inline-flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-[#2bb673] bg-emerald-500/10 border border-emerald-500/30 px-4 py-1.5 rounded-full shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#2bb673]" />
            <span>{badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            {headline}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed font-['Inter',sans-serif]">
            {description}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenContact}
              className="w-full sm:w-auto brand-button-gradient text-white text-base font-extrabold px-9 py-4 rounded-full flex items-center justify-center space-x-2.5 shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer group"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              type="button"
              onClick={handleNavigateOverview}
              className="w-full sm:w-auto text-xs sm:text-sm font-bold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-slate-700 px-6 py-4 rounded-full transition-all cursor-pointer"
            >
              Explore All Service Pillars
            </button>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              Confidential Discussion
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              Direct Senior Advisor Access
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              No Obligation
            </span>
          </div>
        </div>
      </section>

      {/* 2. PILLAR SWITCHER BAR (Capability Navigator) */}
      <section className="py-16 bg-[#041220] text-white border-t border-slate-800/80 font-['Plus_Jakarta_Sans',sans-serif]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-b border-slate-800 pb-5 gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-[#2bb673] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Capability Navigator</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {currentPillar === 'overview' ? 'Explore Our 4 Capability Pillars' : 'Explore Other Capability Pillars'}
              </h3>
            </div>

            <button
              type="button"
              onClick={handleNavigateOverview}
              className="inline-flex items-center space-x-2 text-xs font-extrabold text-[#2bb673] hover:text-white bg-white/5 hover:bg-white/10 border border-slate-700 px-4 py-2.5 rounded-full transition-all cursor-pointer"
            >
              <span>View What We Do Overview</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PILLARS.map((p) => {
              const isActive = p.id === currentPillar;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => onSelectService && onSelectService(p.id)}
                  className={`p-6 rounded-2xl border text-left transition-all duration-300 relative group overflow-hidden cursor-pointer ${
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
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        <span>Current</span>
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold text-slate-400 group-hover:text-emerald-400 transition-colors">
                        Explore →
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-black text-[#2bb673] uppercase tracking-wider block mb-1">
                    {p.tag}
                  </span>
                  <h4 className="text-lg font-black text-white block mb-1 group-hover:text-emerald-300 transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-xs text-slate-300 font-medium font-['Inter',sans-serif]">
                    {p.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
