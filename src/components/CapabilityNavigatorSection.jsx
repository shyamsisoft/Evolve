import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PillarIcon } from './BrandLogo';
import { SectionDivider } from './SectionDivider';
import { PrimaryButton } from './PrimaryButton';

export { PrimaryButton };

const focusRing =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#061a2e]';

// Service names taken from each pillar's source-of-truth "Hero / Header" section.
const PILLARS = [
  { id: 'lead', title: 'LEAD', desc: 'CFO & FP&A Advisory' },
  { id: 'build', title: 'BUILD', desc: 'Finance Functions & Operating Models' },
  { id: 'transform', title: 'TRANSFORM', desc: 'Finance Transformation, Data & Technology' },
  { id: 'protect', title: 'PROTECT', desc: 'Tax & Compliance' },
];

// CTA copy per pillar, taken from each source-of-truth "Call to Action" section.
const PILLAR_CONFIGS = {
  lead: {
    headline: 'Start a CFO Conversation',
    buttonText: 'Start a Conversation',
  },
  build: {
    headline: 'Request a Finance Health Check',
    description: 'Build a finance function that supports the organisation.',
    buttonText: 'Request a Finance Health Check',
  },
  transform: {
    headline: 'Discuss a Transformation Requirement',
    description: 'Connect people, process, technology and data.',
    buttonText: 'Discuss a Transformation Requirement',
  },
  protect: {
    headline: 'Request a Compliance Health Check',
    description: 'Strong financial foundations provide confidence.',
    buttonText: 'Request a Compliance Health Check',
  },
  overview: {
    headline: 'Start an Integrated Conversation',
    description:
      'We bring together CFO advisory, finance function capability, technology transformation, and compliance protection to help organisations navigate growth.',
    buttonText: 'Start a Conversation',
  },
};



export const CapabilityNavigatorSection = ({
  currentPillar = 'lead',
  headline: customHeadline,
  description: customDescription,
  buttonText: customButtonText,
  onOpenContact,
  onSelectService,
  onBack,
}) => {
  const config = PILLAR_CONFIGS[currentPillar] || PILLAR_CONFIGS.lead;
  const headline = customHeadline || config.headline;
  const description = customDescription || config.description;
  const buttonText = customButtonText || config.buttonText;

  const goOverview = () => {
    if (onSelectService) onSelectService('what-we-do');
    else if (onBack) onBack();
  };

  return (
    <section aria-labelledby="pillar-cta-heading" className="bg-[#061a2e] text-white">
      <SectionDivider />
      {/* Call to action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-8 space-y-3">
          <h2 id="pillar-cta-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug">
            {headline}
          </h2>
          {description && (
            <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed max-w-2xl">{description}</p>
          )}
        </div>
        <div className="lg:col-span-4 lg:text-right">
          <PrimaryButton onClick={onOpenContact}>{buttonText}</PrimaryButton>
        </div>
      </div>

      {/* Pillar navigator */}
      <SectionDivider />
      <nav aria-label="What We Do pillars" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h3 className="text-xs font-semibold tracking-wider uppercase text-slate-400">
            {currentPillar === 'overview' ? 'Explore Our 4 Capability Pillars' : 'Explore Other Capability Pillars'}
          </h3>
          <button
            type="button"
            onClick={goOverview}
            className={`inline-flex items-center gap-1.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer rounded ${focusRing}`}
          >
            <span>View What We Do Overview</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden">
          {PILLARS.map((p) => {
            const isActive = p.id === currentPillar;
            return (
              <li key={p.id} className="bg-[#061a2e]">
                <button
                  type="button"
                  onClick={() => onSelectService && onSelectService(p.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`w-full h-full text-left p-6 flex items-start gap-4 transition-colors cursor-pointer ${focusRing} ${
                    isActive ? 'bg-white/[0.06]' : 'hover:bg-white/[0.04]'
                  }`}
                >
                  <PillarIcon type={p.id} className="w-6 h-6 text-emerald-300 shrink-0 mt-0.5" />
                  <span className="space-y-1">
                    <span className="flex items-center gap-2">
                      <span className="text-base sm:text-lg font-semibold text-white">{p.title}</span>
                      {isActive && (
                        <span className="text-xs font-semibold tracking-wider uppercase text-emerald-300">Current</span>
                      )}
                    </span>
                    <span className="block text-sm text-slate-400 leading-snug">{p.desc}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};
