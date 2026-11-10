import React from 'react';
import { ArrowRight, ChevronRight, ShieldCheck } from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';
import { PrimaryButton } from './PrimaryButton';

export const ProtectHero = ({ data = {}, onBack, onOpenContact }) => {
  const hero = {
    badge: data?.badge || "BRAND PILLAR: PROTECT",
    title: data?.title || "Tax & Compliance",
    tagline: data?.tagline || "Strong financial foundations provide confidence.",
    paragraph1: data?.paragraph1 || "Tax and compliance are fundamental to a well-managed organisation. We provide practical tax and compliance support while connecting compliance with the broader finance function.",
    paragraph2: data?.paragraph2 || "When financial information, systems, processes and compliance obligations work together, organisations have greater confidence in the numbers.",
    ctaText: data?.ctaText || "Request a Compliance Health Check",
    bgImage: data?.bgImage || "/images/tax_compliance.jpg"
  };

  return (
    <section className="relative min-h-fit flex items-start bg-[#061a2e] text-white overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-white/10 font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Background & Visuals: Cinematic background with rich contrast overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={imgUrl(hero.bgImage)}
          alt="Tax & Compliance"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-30 transform scale-105"
          onError={(e) => {
            const fallback = imgUrl("/images/why_experience.jpg");
            if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
          }}
        />

        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, #061a2e 20%, rgba(6,26,46,0.93) 55%, rgba(6,26,46,0.88) 100%)'
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-transparent to-[#061a2e]/80" />
      </div>

      {/* Ambient Radial Lights */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full space-y-8">
        
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
          <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
          <span className="text-white font-bold truncate">Tax &amp; Compliance</span>
        </nav>

        {/* 2. Eyebrow Badge */}
        <div className="flex items-center space-x-3.5 pt-0.5">
          <div className="inline-flex items-center space-x-2.5 text-xs font-black uppercase tracking-widest text-emerald-400 bg-white/[0.04] border border-emerald-500/30 px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.15)] backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>{hero.badge}</span>
          </div>
        </div>

        {/* 3. Typography: H1, Subtitle gradient text & Full Source-of-Truth Paragraphs (Growing to Entire Width) */}
        <div className="space-y-4 w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Professional Taxation &amp; Advisory Services for Individuals and Businesses
          </h1>
          
          <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-300 via-teal-200 to-white bg-clip-text text-transparent tracking-tight">
            Strong financial foundations provide confidence.
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



        {/* 5. Executive Introduction (Growing to Entire Width) */}
        <div className="pt-4 font-['Inter',sans-serif] space-y-5 w-full">

          <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-medium leading-relaxed">
            At EVOLVE TAXATION &amp; ADVISORY, we make managing your tax obligations simpler, easier and less stressful. We provide reliable, affordable and personalised taxation, bookkeeping and advisory services to individuals, sole traders and small businesses.
          </p>

          <div className="inline-flex items-baseline gap-3 py-3 px-5 rounded-2xl bg-emerald-500/15 border border-emerald-500/30">
            <span className="text-2xl sm:text-3xl font-black text-emerald-300">$99</span>
            <span className="text-base sm:text-lg font-bold text-white">Individual Tax Returns from just $99!</span>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Whether you need a straightforward individual tax return, assistance with more complex tax matters, business tax compliance or ongoing bookkeeping support, we are here to help. We take the time to understand your circumstances and deliver practical solutions tailored to your individual and business needs.
          </p>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Our services are built around professionalism, accuracy, affordability and transparency, ensuring you receive the right support to meet your tax obligations and make informed financial decisions.
          </p>
        </div>

      </div>
    </section>
  );
};
