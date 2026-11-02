import React from 'react';
import { ArrowRight, ChevronRight, ShieldCheck } from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';
import { PrimaryButton } from './PrimaryButton';

export const ProtectHero = ({ onBack, onOpenContact }) => {
  return (
    <section className="relative min-h-[75vh] flex items-center bg-[#061a2e] text-white overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-white/10 font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Background & Visuals: Asymmetric split-screen with seamless gradient mask */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Right side executive imagery */}
        <img
          src={imgUrl("/images/tax_compliance.jpg")}
          alt="Tax & Compliance"
          className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 h-full object-cover object-center opacity-45"
          onError={(e) => {
            const fallback = imgUrl("/images/why_experience.jpg");
            if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
          }}
        />

        {/* Custom linear-gradient blend: solid dark navy on left 42%, smoothly revealing executive imagery */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, #061a2e 42%, rgba(6,26,46,0.75) 70%, transparent 100%)'
          }}
        />

        {/* Vertical edge blends */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-transparent to-[#061a2e]/80" />
      </div>

      {/* Ambient Radial Lights */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-7">
        
        {/* 1. Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-slate-400">
          <button 
            type="button"
            onClick={onBack} 
            className="inline-flex items-center space-x-1.5 text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            <span>What We Do</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
          <span className="text-emerald-400 font-bold tracking-wider">PROTECT</span>
        </nav>

        {/* 2. Eyebrow Badge */}
        <div className="flex items-center space-x-3.5 pt-0.5">
          <div className="inline-flex items-center space-x-2.5 text-xs font-black uppercase tracking-widest text-emerald-400 bg-white/[0.04] border border-emerald-500/30 px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.15)] backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>BRAND PILLAR: PROTECT</span>
          </div>
        </div>

        {/* 3. Typography: H1, Subtitle gradient text & Source-of-Truth Paragraph */}
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
            Tax &amp; Compliance
          </h1>
          
          <p className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-emerald-300 via-teal-200 to-white bg-clip-text text-transparent tracking-tight">
            Strong financial foundations provide confidence.
          </p>

          <div className="pt-1 max-w-2xl font-['Inter',sans-serif]">
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Tax and compliance are fundamental to a well-managed organisation. We provide practical tax and compliance support while connecting compliance with the broader finance function. When financial information, systems, processes and compliance obligations work together, organisations have greater confidence in the numbers.
            </p>
          </div>
        </div>

        {/* 4. CTA Button */}
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <PrimaryButton onClick={onOpenContact}>Request a Compliance Health Check</PrimaryButton>
        </div>

        {/* 5. Trust / Metric Strip */}
        <div className="pt-3 w-full max-w-2xl">
          <div className="grid grid-cols-3 divide-x divide-white/10 bg-white/[0.03] border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-md shadow-2xl">
            <div className="px-3 sm:px-4 text-left">
              <div className="text-lg sm:text-xl font-bold text-white flex items-baseline">
                <span className="text-emerald-400">9-Stage</span>
              </div>
              <span className="text-[11px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider block mt-1">
                Health Check Flow
              </span>
            </div>

            <div className="px-3 sm:px-4 text-left">
              <div className="text-lg sm:text-xl font-bold text-white flex items-baseline">
                <span className="text-teal-300">100%</span>
              </div>
              <span className="text-[11px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider block mt-1">
                Connected Finance
              </span>
            </div>

            <div className="px-3 sm:px-4 text-left">
              <div className="text-lg sm:text-xl font-bold text-white flex items-baseline">
                <span className="text-cyan-300">Proactive</span>
              </div>
              <span className="text-[11px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider block mt-1">
                Risk Defense
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
