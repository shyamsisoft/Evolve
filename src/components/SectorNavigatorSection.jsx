import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, Building2, Users2, Landmark, Check } from 'lucide-react';

const SECTORS = [
  { 
    id: 'growing-businesses', 
    title: 'Growing Businesses', 
    desc: 'Fast-scaling enterprises and dynamic founders.',
    tag: 'Growth & Scale',
    icon: TrendingUp,
    accent: 'emerald'
  },
  { 
    id: 'established-corporate', 
    title: 'Established & Corporate', 
    desc: 'Complex enterprise finance and governance.',
    tag: 'Enterprise Scale',
    icon: Building2,
    accent: 'teal'
  },
  { 
    id: 'not-for-profit', 
    title: 'Not-for-Profit & Community', 
    desc: 'Purpose-driven organisations and community NFPs.',
    tag: 'Mission & Impact',
    icon: Users2,
    accent: 'cyan'
  },
  { 
    id: 'local-government', 
    title: 'Local Government', 
    desc: 'Civic entities, regional councils and authorities.',
    tag: 'Civic Governance',
    icon: Landmark,
    accent: 'emerald'
  }
];

const SECTOR_CONFIGS = {
  'growing-businesses': {
    badge: 'SCALE-UP FINANCIAL PARTNERSHIP',
    headline: 'Ready to Scale Your Finance Function?',
    description: 'Get senior fractional CFO guidance, reliable forecasting, and scalable financial systems tailored to your growth phase.',
    buttonText: 'Discuss Growing Business Support',
  },
  'established-corporate': {
    badge: 'ENTERPRISE FINANCE ADVISORY',
    headline: 'Strengthen Corporate Finance Capabilities',
    description: 'Enhance FP&A depth, operating model agility, and financial reporting across complex multi-entity structures.',
    buttonText: 'Discuss Corporate Finance Solutions',
  },
  'not-for-profit': {
    badge: 'PURPOSE-DRIVEN GOVERNANCE',
    headline: 'Maximize Impact Through Stronger Finance',
    description: 'Bring transparency, grant acquittal rigor, and sustainable financial governance to your mission-driven organisation.',
    buttonText: 'Discuss NFP Advisory Support',
  },
  'local-government': {
    badge: 'CIVIC FINANCIAL STEWARDSHIP',
    headline: 'Civic Stewardship & Financial Planning',
    description: 'Support council leadership with independent reviews, TechnologyOne optimisation, and long-term financial plans (LTFP).',
    buttonText: 'Discuss Local Government Advisory',
  },
  overview: {
    badge: 'SECTOR-SPECIFIC EXPERTISE',
    headline: 'Start a Sector-Specific Conversation',
    description: 'Whether you are scaling a fast-growing business, navigating enterprise complexity, guiding an NFP, or serving a community council.',
    buttonText: 'Start a Conversation',
  }
};

export const SectorNavigatorSection = ({
  currentSector = 'growing-businesses',
  badge: customBadge,
  headline: customHeadline,
  description: customDescription,
  buttonText: customButtonText,
  onOpenContact,
  onSelectAudience,
  onBack,
}) => {
  const config = SECTOR_CONFIGS[currentSector] || SECTOR_CONFIGS['growing-businesses'];

  const badge = customBadge || config.badge;
  const headline = customHeadline || config.headline;
  const description = customDescription || config.description;
  const buttonText = customButtonText || config.buttonText;

  const handleNavigateOverview = () => {
    if (onSelectAudience) {
      onSelectAudience('who-we-help');
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
              className="w-full sm:w-auto text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-slate-700/80 text-sm font-bold px-7 py-4 rounded-full transition-all cursor-pointer"
            >
              Explore All Sectors
            </button>
          </div>
        </div>
      </section>

      {/* 2. STANDARDIZED 4-SECTOR AUDIENCE NAVIGATOR */}
      <section className="py-14 sm:py-16 bg-[#041220] border-t border-slate-800/90 text-white font-['Plus_Jakarta_Sans',sans-serif]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-800/80 gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                SECTOR NAVIGATOR
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Who We Help Across Industries
              </h3>
            </div>
            <button
              type="button"
              onClick={handleNavigateOverview}
              className="text-xs font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 self-start md:self-auto cursor-pointer"
            >
              <span>All 4 Sectors</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SECTORS.map((sector) => {
              const isCurrent = currentSector === sector.id;
              const Icon = sector.icon;

              return (
                <button
                  key={sector.id}
                  type="button"
                  onClick={() => onSelectAudience && onSelectAudience(sector.id)}
                  className={`text-left p-5 sm:p-6 rounded-2xl border transition-all duration-300 relative group flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-gradient-to-br from-emerald-500/20 via-[#061a2e] to-[#041220] border-emerald-400/90 shadow-xl shadow-emerald-500/10 ring-2 ring-emerald-400/30 -translate-y-1'
                      : 'bg-[#061a2e]/60 border-slate-800 hover:border-slate-700 hover:bg-[#061a2e] hover:-translate-y-0.5'
                  }`}
                >
                  {isCurrent && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-t-2xl" />
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                        isCurrent
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-white/5 text-slate-300 border border-white/10 group-hover:text-emerald-400'
                      }`}>
                        <Icon className="w-5 h-5 stroke-[2.2]" />
                      </div>

                      {isCurrent ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                          Current
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400">
                          {sector.tag}
                        </span>
                      )}
                    </div>

                    <h4 className={`text-base font-bold tracking-tight mb-1.5 transition-colors ${
                      isCurrent ? 'text-white' : 'text-slate-100 group-hover:text-emerald-300'
                    }`}>
                      {sector.title}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed font-['Inter',sans-serif]">
                      {sector.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-bold">
                    <span className={isCurrent ? 'text-emerald-400' : 'text-slate-400 group-hover:text-slate-200'}>
                      {isCurrent ? 'Viewing' : 'Explore Sector'}
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${
                      isCurrent ? 'text-emerald-400' : 'text-slate-400 group-hover:translate-x-1 group-hover:text-emerald-400'
                    }`} />
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
};
