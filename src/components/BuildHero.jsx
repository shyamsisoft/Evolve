import React from 'react';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';

export const BuildHero = ({ onBack, onOpenContact }) => {
  return (
    <section className="relative min-h-[75vh] flex items-center bg-[#070C18] text-white overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-slate-800/80 font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Background & Visuals: Asymmetric split-screen with seamless gradient mask */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Right side executive imagery */}
        <img
          src={imgUrl("/images/finance_build.jpg")}
          alt="Finance Functions & Operating Models"
          className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 h-full object-cover object-center opacity-55"
          onError={(e) => {
            const fallback = imgUrl("/images/approach_design.jpg");
            if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
          }}
        />

        {/* Custom linear-gradient blend: solid dark slate on left 42%, smoothly revealing executive imagery */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, #070C18 42%, rgba(7,12,24,0.7) 70%, transparent 100%)'
          }}
        />

        {/* Vertical edge blends */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070C18] via-transparent to-[#070C18]/80" />
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
          <span className="text-emerald-400 font-bold tracking-wider">BUILD</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
          <span className="text-slate-300 font-medium truncate">Finance Functions &amp; Operating Models</span>
        </nav>

        {/* 2. Eyebrow Badge */}
        <div className="flex items-center space-x-3.5 pt-0.5">
          <div className="inline-flex items-center space-x-2.5 text-xs font-black uppercase tracking-widest text-emerald-400 bg-white/[0.04] border border-emerald-500/30 px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.15)] backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>BRAND PILLAR: BUILD</span>
          </div>
        </div>

        {/* 3. Typography: H1, Subtitle gradient text & Source-of-Truth Paragraph */}
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
            Finance Functions &amp; Operating Models
          </h1>
          
          <p className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-emerald-300 via-teal-200 to-white bg-clip-text text-transparent tracking-tight">
            Build a finance function that supports the organisation.
          </p>

          <div className="pt-1 max-w-2xl font-['Inter',sans-serif] space-y-2">
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              A strong finance function provides more than accurate transactions. It provides reliable information, efficient processes, effective controls and insight for decision-making.
            </p>
            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              We help organisations assess, design and improve their finance functions.
            </p>
          </div>
        </div>

        {/* 4. CTA Button */}
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={onOpenContact}
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm sm:text-base font-extrabold px-8 py-4 rounded-full flex items-center space-x-3 shadow-[0_4px_25px_rgba(16,185,129,0.35)] hover:scale-105 active:scale-95 transition-all cursor-pointer group"
          >
            <span>Request a Finance Health Check</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* 5. Trust / Metric Strip */}
        <div className="pt-3 w-full max-w-2xl">
          <div className="grid grid-cols-3 divide-x divide-white/10 bg-white/[0.03] border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-md shadow-2xl">
            <div className="px-3 sm:px-4 text-left">
              <div className="text-lg sm:text-xl font-bold text-white flex items-baseline">
                <span className="text-emerald-400">5 Dim</span>
              </div>
              <span className="text-[11px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider block mt-1">
                Health Check Scope
              </span>
            </div>

            <div className="px-3 sm:px-4 text-left">
              <div className="text-lg sm:text-xl font-bold text-white flex items-baseline">
                <span className="text-teal-300">100%</span>
              </div>
              <span className="text-[11px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider block mt-1">
                Target Operating Model
              </span>
            </div>

            <div className="px-3 sm:px-4 text-left">
              <div className="text-lg sm:text-xl font-bold text-white flex items-baseline">
                <span className="text-cyan-300">Scalable</span>
              </div>
              <span className="text-[11px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider block mt-1">
                Fractional &amp; Augmented
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
