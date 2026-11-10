import React from 'react';
import { ArrowRight, ChevronRight, Layers } from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';
import { PrimaryButton } from './PrimaryButton';

export const BuildHero = ({ data = {}, onBack, onOpenContact }) => {
  const hero = {
    badge: data?.badge || "BRAND PILLAR: BUILD",
    title: data?.title || "Finance Functions & Operating Models",
    tagline: data?.tagline || "Build a finance function that supports the organisation.",
    paragraph1: data?.paragraph1 || "A strong finance function provides more than accurate transactions.",
    paragraph2: data?.paragraph2 || "It provides reliable information, efficient processes, effective controls and insight for decision-making. We help organisations assess, design and improve their finance functions.",
    ctaText: data?.ctaText || "Request a Finance Health Check",
    bgImage: data?.bgImage || "/images/finance_build.jpg"
  };

  return (
    <section className="relative min-h-[75vh] flex items-center bg-[#061a2e] text-white overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-white/10 font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Background & Visuals: Full-coverage cinematic background with rich contrast overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={imgUrl(hero.bgImage)}
          alt="Finance Functions & Operating Models"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-30 transform scale-105"
          onError={(e) => {
            const fallback = imgUrl("/images/approach_design.jpg");
            if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
          }}
        />

        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, #061a2e 35%, rgba(6,26,46,0.88) 68%, rgba(6,26,46,0.72) 100%)'
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-transparent to-[#061a2e]/80" />
      </div>

      {/* Ambient Radial Lights */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full space-y-6 sm:space-y-7">
        
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
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>{hero.badge}</span>
          </div>
        </div>

        {/* 3. Typography: H1, Subtitle gradient text & Full Source-of-Truth Paragraphs (Growing Entire Width) */}
        <div className="space-y-4 w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Finance Functions &amp; Operating Models
          </h1>
          
          <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-300 via-teal-200 to-white bg-clip-text text-transparent tracking-tight">
            Build a finance function that supports the organisation.
          </p>

          <div className="pt-2 font-['Inter',sans-serif] space-y-3 w-full">
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-medium leading-relaxed">
              {hero.paragraph1}
            </p>
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              {hero.paragraph2}
            </p>
          </div>
        </div>

        {/* 4. CTA Button */}
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <PrimaryButton onClick={onOpenContact}>{hero.ctaText}</PrimaryButton>
        </div>

      </div>
    </section>
  );
};
