import React from 'react';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';

export const TransformHero = ({ onBack, onOpenContact }) => {
  return (
    <section className="relative min-h-[72vh] flex items-center bg-[#090D16] text-white overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-slate-800/90 font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Background & Visuals: Asymmetric split-screen with custom linear-gradient mask (to right, #090D16 45%, transparent 100%) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Right side executive-grade imagery */}
        <img
          src={imgUrl("/images/finance_transform.jpg")}
          alt="Finance Transformation, Data & Technology"
          className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 h-full object-cover object-center opacity-60"
          onError={(e) => {
            const fallback = imgUrl("/images/why_transformation.jpg");
            if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
          }}
        />

        {/* Custom linear-gradient blend: solid #090D16 on left 45%, fading to transparent at 100% */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, #090D16 45%, transparent 100%)'
          }}
        />

        {/* Vertical subtle edge blend for seamless header integration */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-transparent to-[#090D16]/60" />
      </div>

      {/* Ambient Radial Lights */}
      <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-6 sm:space-y-7">
        
        {/* 1. Breadcrumb: "What We Do / TRANSFORM / Finance Transformation, Data & Technology" with subtle chevrons */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-slate-400">
          <button 
            type="button"
            onClick={onBack} 
            className="inline-flex items-center space-x-1.5 text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            <span>What We Do</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
          <span className="text-cyan-400 font-bold tracking-wider">TRANSFORM</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
          <span className="text-slate-200 font-medium truncate">Finance Transformation, Data &amp; Technology</span>
        </nav>

        {/* 2. Eyebrow Badge: Pill-shaped badge reading "BRAND PILLAR: TRANSFORM" with glowing emerald icon */}
        <div className="flex items-center space-x-3.5 pt-1">
          <div className="inline-flex items-center space-x-2.5 text-xs font-black uppercase tracking-widest text-[#2bb673] bg-[#090D16]/95 border border-emerald-500/40 px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(43,182,115,0.25)] backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#2bb673] animate-pulse" />
            <span>BRAND PILLAR: TRANSFORM</span>
          </div>
        </div>

        {/* 3. Typography: H1 (60px+, crisp white), Subtitle gradient text & Concise Paragraph */}
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-black tracking-tight text-white leading-[1.08]">
            Finance Transformation, Data &amp; Technology
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent tracking-tight">
            Connect people, process, technology and data.
          </p>

          <div className="pt-1 max-w-2xl font-['Inter',sans-serif]">
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Technology alone does not transform finance. Transformation succeeds when systems, processes, data and people work together to create measurable improvement.
            </p>
          </div>
        </div>

        {/* 4. CTA Button: High-contrast primary action with directional arrow and hover lift */}
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={onOpenContact}
            className="brand-button-gradient text-white text-sm sm:text-base font-extrabold px-9 py-4 rounded-full flex items-center space-x-3 shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer group"
          >
            <span>Discuss a Transformation Requirement</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* 5. Trust / Metric Strip: Sleek horizontal 3-stat metric bar directly under CTA */}
        <div className="pt-4 w-full max-w-2xl">
          <div className="grid grid-cols-3 divide-x divide-white/10 bg-white/[0.04] border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-md shadow-2xl">
            <div className="px-3 sm:px-4 text-left">
              <div className="text-2xl sm:text-3xl font-black text-white flex items-baseline">
                <span className="text-emerald-400">40%</span>
              </div>
              <span className="text-[11px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider block mt-1">
                Faster Cycle Times
              </span>
            </div>

            <div className="px-3 sm:px-4 text-left">
              <div className="text-2xl sm:text-3xl font-black text-white flex items-baseline">
                <span className="text-teal-300">100%</span>
              </div>
              <span className="text-[11px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider block mt-1">
                Data Integrity
              </span>
            </div>

            <div className="px-3 sm:px-4 text-left">
              <div className="text-2xl sm:text-3xl font-black text-white flex items-baseline">
                <span className="text-cyan-400">Ready</span>
              </div>
              <span className="text-[11px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider block mt-1">
                Enterprise ERP Ready
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
