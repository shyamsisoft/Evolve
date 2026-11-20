import React from 'react';
import { 
  ChevronRight, 
  ShieldCheck, 
  Users, 
  Briefcase, 
  Calculator, 
  BookOpen, 
  Handshake, 
  ArrowRight 
} from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';

export const ProtectHero = ({ data = {}, onBack, onOpenContact, onSelectQuickNav }) => {
  const quickNavItems = [
    { id: 'individual-tax', label: 'Individual Tax Returns', icon: <Users className="w-4 h-4 text-emerald-400" /> },
    { id: 'business-taxation', label: 'Business Taxation', icon: <Briefcase className="w-4 h-4 text-emerald-400" /> },
    { id: 'bas-gst', label: 'BAS & GST', icon: <Calculator className="w-4 h-4 text-emerald-400" /> },
    { id: 'bookkeeping-services', label: 'Bookkeeping', icon: <BookOpen className="w-4 h-4 text-emerald-400" /> },
    { id: 'advisory', label: 'Advisory Support', icon: <Handshake className="w-4 h-4 text-emerald-400" /> }
  ];

  const handleQuickNavClick = (id) => {
    if (id === 'advisory') {
      if (onOpenContact) onOpenContact();
      return;
    }
    const el = document.getElementById(id) || document.getElementById('core-services');
    if (el) {
      const headerOffset = 95;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (onSelectQuickNav) {
      onSelectQuickNav(id);
    }
  };

  return (
    <div className="relative w-full font-['Plus_Jakarta_Sans',sans-serif] bg-white overflow-hidden">
      
      {/* ======================================================== */}
      {/* 1. TOP HERO SECTION (EXACT DESIGN MATCH TO MASTER MOCKUP) */}
      {/* ======================================================== */}
      <section className="relative overflow-hidden pt-0 pb-0 bg-white">
        
        {/* Right-Hand Photography: Extended to fill middle zone so natural bokeh blur starts right after headline */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-[62%] sm:w-[60%] md:w-[58%] lg:w-[55%] xl:w-[52%] 2xl:w-[50%] z-0 pointer-events-none overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 6%, rgba(0,0,0,0.65) 15%, black 25%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 6%, rgba(0,0,0,0.65) 15%, black 25%)'
          }}
        >
          <img
            src={imgUrl('/images/tax_hero_growth.jpg')}
            alt="Financial Foundations, Coin Growth and Property Wealth"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-[right_bottom]"
            onError={(e) => {
              const fallback = imgUrl('/images/tax_hero_growth.jpg', { preferWebp: false });
              if (e.currentTarget.src !== fallback) {
                e.currentTarget.src = fallback;
              }
            }}
          />
        </div>

        {/* Soft Left White Gradient: Confined strictly to headline text zone (0-35%), transparent over bokeh zone */}
        <div 
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.96) 24%, rgba(255,255,255,0.4) 34%, transparent 44%)'
          }}
        />

        {/* Top-left dark corner vignette: frames breadcrumbs & badge, safely stops before Strong Financial Foundations */}
        <div 
          className="absolute top-0 left-0 w-full sm:w-[68%] md:w-[58%] lg:w-[50%] xl:w-[44%] h-[74px] sm:h-[80px] md:h-[84px] pointer-events-none z-1 overflow-hidden"
          style={{
            background: 'linear-gradient(to bottom, #061a2e 0%, #061a2e 30%, rgba(6, 26, 46, 0.82) 50%, rgba(6, 26, 46, 0.35) 75%, transparent 100%)',
            maskImage: 'linear-gradient(to right, black 0%, black 35%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.40) 75%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, black 0%, black 35%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.40) 75%, transparent 100%)'
          }}
        />

        {/* Top Content: Breadcrumb, Badge, Logo, Headline, Subtitle */}
        <div 
          className="relative z-10 max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 w-full pt-2.5 sm:pt-3 pb-0"
        >
          <div className="max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl space-y-2 sm:space-y-2.5">
            
            {/* Breadcrumb Navigation on Dark Corner */}
            <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs sm:text-sm font-semibold">
              <button 
                type="button"
                onClick={onBack} 
                className="inline-flex items-center space-x-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <span>What We Do</span>
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="text-[#2bb673] font-bold tracking-wider">PROTECT</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="text-white font-bold truncate">Tax &amp; Compliance</span>
            </nav>

            {/* Eyebrow Badge */}
            <div className="pt-0.5 sm:pt-1">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#061a2e] border border-emerald-500/40 text-[11px] font-black uppercase tracking-widest text-[#2bb673] shadow-xs backdrop-blur-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2bb673]" />
                <span>BRAND PILLAR: PROTECT</span>
              </div>
            </div>

            {/* Primary Headline & Accent Color (Clean 2-line layout, positioned safely in pure white zone) */}
            <div className="space-y-1 pt-2 sm:pt-2.5">
              <h1 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] xl:text-[54px] 2xl:text-[62px] font-extrabold text-[#061a2e] tracking-tight leading-[1.12]">
                Strong Financial Foundations.
                <span className="block font-extrabold whitespace-nowrap" style={{ color: '#2bb673' }}>
                  Greater Confidence. Better Decisions.
                </span>
              </h1>
              
              <div className="pt-1">
                <p className="text-lg sm:text-xl md:text-[22px] lg:text-[24px] 2xl:text-[26px] font-semibold italic text-[#061a2e] tracking-tight leading-snug">
                  Expert Taxation, Proactive Planning and Personalised Support
                </p>
                {/* Subtle emerald curved flourish directly under Expert Taxation */}
                <div className="pt-1 pb-0">
                  <svg className="w-36 sm:w-44 md:w-52 h-2 block" viewBox="0 0 170 8" fill="none">
                    <defs>
                      <linearGradient id="subGreenFlourish" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2bb673" stopOpacity="0.1" />
                        <stop offset="25%" stopColor="#34d399" stopOpacity="0.9" />
                        <stop offset="70%" stopColor="#2bb673" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#2bb673" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M 0 5 Q 75 0, 165 4 Q 75 2.5, 0 5 Z" fill="url(#subGreenFlourish)" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* INTEGRATION STATEMENT BANNER WITH EMERALD CURVED SWOOP   */}
        {/* ======================================================== */}
        <div className="relative z-10 w-full mt-4 sm:mt-5 md:mt-6 overflow-hidden">
          
          {/* Dynamic Background SVG with preserveAspectRatio="none" matching exact container height */}
          <svg
            viewBox="0 0 1024 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full block pointer-events-none"
            preserveAspectRatio="none"
            style={{
              maskImage: 'linear-gradient(to right, black 0%, black 40%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.6) 62%, rgba(0,0,0,0.25) 74%, rgba(0,0,0,0.05) 82%, transparent 88%)',
              WebkitMaskImage: 'linear-gradient(to right, black 0%, black 40%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.6) 62%, rgba(0,0,0,0.25) 74%, rgba(0,0,0,0.05) 82%, transparent 88%)'
            }}
          >
            <defs>
              <linearGradient id="exactGreenGrad" x1="0" y1="0" x2="1024" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#2bb673" stopOpacity="1" />
                <stop offset="18%" stopColor="#34d399" stopOpacity="1" />
                <stop offset="35%" stopColor="#2bb673" stopOpacity="0.95" />
                <stop offset="48%" stopColor="#10b981" stopOpacity="0.75" />
                <stop offset="60%" stopColor="#059669" stopOpacity="0.4" />
                <stop offset="70%" stopColor="#047857" stopOpacity="0.1" />
                <stop offset="76%" stopColor="#047857" stopOpacity="0" />
                <stop offset="100%" stopColor="#047857" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="exactNavyGrad" x1="0" y1="0" x2="1024" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#061a2e" stopOpacity="1" />
                <stop offset="38%" stopColor="#061a2e" stopOpacity="1" />
                <stop offset="48%" stopColor="#061a2e" stopOpacity="0.88" />
                <stop offset="58%" stopColor="#061a2e" stopOpacity="0.65" />
                <stop offset="68%" stopColor="#061a2e" stopOpacity="0.38" />
                <stop offset="76%" stopColor="#061a2e" stopOpacity="0.14" />
                <stop offset="82%" stopColor="#061a2e" stopOpacity="0.03" />
                <stop offset="86%" stopColor="#061a2e" stopOpacity="0" />
                <stop offset="100%" stopColor="#061a2e" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Upper Emerald Swoop Ribbon: starts at y=12, crests at y=0, gently descends and tapers */}
            <path
              d="M 0 12 C 60 4, 110 0, 160 0 C 250 0, 360 4, 460 12 C 580 20, 720 28, 920 34 L 920 38 C 720 32, 580 24, 460 16 C 360 9, 250 6, 160 6 C 110 6, 60 10, 0 22 Z"
              fill="url(#exactGreenGrad)"
            />

            {/* Deep Navy Banner Fill: follows directly under gold ribbon, smoothly dissolving into wood & coins */}
            <path
              d="M 0 22 C 60 10, 110 6, 160 6 C 250 6, 360 9, 460 16 C 580 24, 720 32, 920 38 L 920 100 L 0 100 Z"
              fill="url(#exactNavyGrad)"
            />
          </svg>

          {/* Banner Text in Normal Document Flow (Naturally drives container height & 100% responsive) */}
          <div 
            className="relative z-10 max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 w-full font-['Inter',sans-serif]"
            style={{ paddingTop: '46px', paddingBottom: '24px' }}
          >
            <div 
              className="w-full" 
              style={{ maxWidth: '1240px', textShadow: '0 1px 3px rgba(0,0,0,0.9)' }}
            >
              <p 
                className="text-white font-medium tracking-normal text-xs sm:text-[12.5px] 2xl:text-[13.5px] leading-relaxed"
              >
                <span>Tax and compliance are fundamental to a well-managed organisation. We provide practical tax and compliance support while connecting compliance with the</span>
                <span className="block">broader finance function.</span>
              </p>
              <p 
                className="text-slate-200 font-normal tracking-normal text-xs sm:text-[12.5px] 2xl:text-[13.5px] leading-relaxed mt-3"
              >
                When financial information, systems, processes and compliance obligations work together, organisations have greater confidence in the numbers.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* ======================================================== */}
      {/* 3. TWO-COLUMN NARRATIVE: INDIVIDUAL & BUSINESS TAX RETURN */}
      {/* ======================================================== */}
      <section className="bg-white text-[#061a2e] pt-4 sm:pt-6 pb-2 sm:pb-3 font-['Inter',sans-serif]">
        <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 2xl:gap-18 items-start">
            
            {/* Left Column: Individual Tax Return */}
            <div id="narrative-individual-tax" className="space-y-4 scroll-mt-24">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#061a2e] tracking-tight">
                Individual Tax Return
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                At <strong className="font-bold text-[#2bb673]">EVOLVE TAXATION &amp; ADVISORY</strong>, we make lodging your individual tax return simple, convenient and stress-free. Whether you have straightforward employment income or more complex tax affairs involving rental properties, investments or other income sources, we provide personalised support to suit your circumstances.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                We take the time to understand your financial situation, identify eligible deductions and ensure your tax return is prepared accurately and in accordance with Australian tax requirements.
              </p>
              
              {/* Highlighted Dark Pill Badge with Green Price Accent matching reference image */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleQuickNavClick('individual-tax')}
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-2xl bg-[#061a2e] border border-[#10b981]/60 text-white shadow-md hover:border-[#5ee9b5] hover:shadow-emerald-950/40 transition-all cursor-pointer group text-left"
                >
                  <span className="text-white font-bold text-sm sm:text-base tracking-normal">
                    Individual Tax Returns from just
                  </span>
                  <span className="text-[#5ee9b5] font-black text-lg sm:text-xl tracking-tight">
                    $99!
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column: Business Tax Return */}
            <div id="narrative-business-taxation" className="space-y-4 scroll-mt-24">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#061a2e] tracking-tight">
                Business Tax Return
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                At <strong className="font-bold text-[#2bb673]">EVOLVE TAXATION &amp; ADVISORY</strong>, we help businesses manage and plan their tax obligations with confidence. We provide reliable, affordable and personalised taxation, compliance and bookkeeping services to sole traders, partnerships, companies and trusts.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Our approach goes beyond preparing tax returns. We believe in proactive tax planning and providing timely advice to help businesses understand and prepare for their potential tax liabilities well in advance. By identifying tax considerations early and exploring appropriate tax planning opportunities, we help businesses make informed financial decisions and manage their cash flow more effectively.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                From business tax return preparation and tax compliance to BAS, GST and ongoing bookkeeping support, we deliver practical solutions tailored to your business needs, helping you stay compliant and financially prepared throughout the year.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3.5 QUICK SERVICES RIBBON WITH GOLDEN WAVE & SCRIPT      */}
      {/* ======================================================== */}
      <section className="relative w-full bg-white overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
        
        {/* Dynamic Wave Transition: White (top) to Navy (bottom) with Emerald Accent Ribbon */}
        <div className="w-full overflow-hidden leading-none -mb-[1px]">
          <svg
            viewBox="0 0 1440 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-8 sm:h-11 md:h-13 block"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="ribbonEmeraldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2bb673" stopOpacity="1" />
                <stop offset="25%" stopColor="#34d399" stopOpacity="1" />
                <stop offset="55%" stopColor="#10b981" stopOpacity="0.95" />
                <stop offset="85%" stopColor="#2bb673" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#059669" stopOpacity="0.7" />
              </linearGradient>
            </defs>

            {/* Upper Emerald Ribbon: Starts at left, crests gently, dips in middle, sweeps up to right */}
            <path
              d="M 0 12 C 240 4, 480 8, 720 20 C 960 30, 1200 20, 1440 6 L 1440 11 C 1200 25, 960 35, 720 25 C 480 13, 240 9, 0 17 Z"
              fill="url(#ribbonEmeraldGrad)"
            />

            {/* Deep Navy Fill following directly underneath the emerald ribbon */}
            <path
              d="M 0 17 C 240 9, 480 13, 720 25 C 960 35, 1200 25, 1440 11 L 1440 50 L 0 50 Z"
              fill="#061a2e"
            />
          </svg>
        </div>

        {/* Navy Content Body with 5 Icons & Calligraphic Tagline */}
        <div className="bg-[#061a2e] text-white pt-2 sm:pt-3 pb-5 sm:pb-6 border-b border-white/10">
          <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14 flex flex-col xl:flex-row items-center justify-between gap-4 xl:gap-6">
            
            {/* 5 Service Navigation Columns with Vertical Dividers */}
            <div className="flex items-center divide-x divide-white/20 shrink-0 justify-between sm:justify-start w-full xl:w-auto">
              
              {/* Item 1: Individual Tax Returns */}
              <button
                type="button"
                onClick={() => handleQuickNavClick('individual-tax')}
                className="flex flex-col items-start justify-center text-left pl-0 pr-2.5 sm:pr-3.5 md:pr-4 xl:pr-5 2xl:pr-7 py-1 group cursor-pointer transition-all shrink-0 hover:opacity-90"
              >
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-slate-200 group-hover:text-emerald-400 transition-all mb-1 stroke-[1.5]" />
                <span className="text-[10px] sm:text-[11px] md:text-xs font-semibold text-slate-200 group-hover:text-white leading-tight whitespace-nowrap min-h-[28px] flex flex-col justify-center text-left">
                  <span>Individual</span>
                  <span>Tax Returns</span>
                </span>
              </button>

              {/* Item 2: Business Taxation */}
              <button
                type="button"
                onClick={() => handleQuickNavClick('business-taxation')}
                className="flex flex-col items-center justify-center text-center px-2.5 sm:px-3.5 md:px-4 xl:px-5 2xl:px-7 py-1 group cursor-pointer transition-all shrink-0 hover:opacity-90"
              >
                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-slate-200 group-hover:text-emerald-400 transition-all mb-1 stroke-[1.5]" />
                <span className="text-[10px] sm:text-[11px] md:text-xs font-semibold text-slate-200 group-hover:text-white leading-tight whitespace-nowrap min-h-[28px] flex items-center justify-center text-center">
                  Business<br />Taxation
                </span>
              </button>

              {/* Item 3: BAS & GST */}
              <button
                type="button"
                onClick={() => handleQuickNavClick('bas-gst')}
                className="flex flex-col items-center justify-center text-center px-2.5 sm:px-3.5 md:px-4 xl:px-5 2xl:px-7 py-1 group cursor-pointer transition-all shrink-0 hover:opacity-90"
              >
                <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-slate-200 group-hover:text-emerald-400 transition-all mb-1 stroke-[1.5]" />
                <span className="text-[10px] sm:text-[11px] md:text-xs font-semibold text-slate-200 group-hover:text-white leading-tight whitespace-nowrap min-h-[28px] flex items-center justify-center text-center">
                  BAS &amp; GST
                </span>
              </button>

              {/* Item 4: Bookkeeping */}
              <button
                type="button"
                onClick={() => handleQuickNavClick('bookkeeping-services')}
                className="flex flex-col items-center justify-center text-center px-2.5 sm:px-3.5 md:px-4 xl:px-5 2xl:px-7 py-1 group cursor-pointer transition-all shrink-0 hover:opacity-90"
              >
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-slate-200 group-hover:text-emerald-400 transition-all mb-1 stroke-[1.5]" />
                <span className="text-[10px] sm:text-[11px] md:text-xs font-semibold text-slate-200 group-hover:text-white leading-tight whitespace-nowrap min-h-[28px] flex items-center justify-center text-center">
                  Bookkeeping
                </span>
              </button>

              {/* Item 5: Advisory Support */}
              <button
                type="button"
                onClick={() => handleQuickNavClick('advisory')}
                className="flex flex-col items-center justify-center text-center px-2.5 sm:px-3.5 md:px-4 xl:px-5 2xl:px-7 py-1 group cursor-pointer transition-all shrink-0 hover:opacity-90"
              >
                <Handshake className="w-5 h-5 sm:w-6 sm:h-6 text-slate-200 group-hover:text-emerald-400 transition-all mb-1 stroke-[1.5]" />
                <span className="text-[10px] sm:text-[11px] md:text-xs font-semibold text-slate-200 group-hover:text-white leading-tight whitespace-nowrap min-h-[28px] flex items-center justify-center text-center">
                  Advisory Support
                </span>
              </button>

            </div>

            {/* Right Cursive Script Tagline with Emerald Underline Swoosh */}
            <div className="flex flex-col items-center xl:items-end pr-0 pt-1 shrink-0 max-w-full">
              <span className="font-['Alex_Brush',cursive] text-2xl sm:text-3xl xl:text-[27px] 2xl:text-[33px] text-white tracking-normal sm:tracking-wide whitespace-nowrap select-none drop-shadow-xs">
                Plan Ahead. Stay Compliant. Grow with Confidence.
              </span>
              
              {/* Emerald Underline Swoosh Accent under 'Grow with Confidence.' */}
              <svg 
                className="w-44 sm:w-52 xl:w-56 2xl:w-64 h-3.5 block -mt-1 sm:-mt-1.5 pointer-events-none" 
                viewBox="0 0 280 12" 
                fill="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="swooshEmeraldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2bb673" stopOpacity="0.2" />
                    <stop offset="35%" stopColor="#34d399" stopOpacity="0.95" />
                    <stop offset="85%" stopColor="#2bb673" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#059669" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <path d="M 0 6 Q 140 1, 276 8 Q 140 4, 0 6 Z" fill="url(#swooshEmeraldGrad)" />
              </svg>
            </div>

          </div>
        </div>

      </section>

      {/* ======================================================== */}
      {/* 4. PROMOTIONAL $99 BANNER (DARK NAVY EXECUTIVE BAR)       */}
      {/* ======================================================== */}
      <section className="relative bg-[#061a2e] text-white py-4 sm:py-5 px-4 sm:px-6 lg:px-8 xl:px-12 shadow-inner overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
        
        {/* Subtle top emerald curve swoosh accent */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2bb673] via-[#34d399] to-[#2bb673] opacity-90" />
        <div 
          className="absolute top-0 left-0 w-72 h-4 pointer-events-none opacity-80"
          style={{
            background: 'radial-gradient(ellipse at 10% 0%, #2bb673 0%, transparent 70%)'
          }}
        />

        <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
          <div className="w-full rounded-2xl bg-white/[0.04] border border-emerald-500/30 p-4 sm:p-5 lg:px-7 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6 backdrop-blur-xs">
            
            {/* Left Block: Offer Pill + Large Price */}
            <div className="flex items-center gap-3.5 shrink-0">
              <div className="text-center sm:text-left space-y-1">
                <span className="inline-block px-3 py-0.5 rounded-full bg-emerald-500/20 text-[#2bb673] border border-emerald-500/40 text-[11px] font-black uppercase tracking-wider">
                  Affordable Tax Services
                </span>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-emerald-400 tracking-tight leading-none">
                  FROM $99
                </div>
              </div>
            </div>

            {/* Middle Block: Title, Subtitle, Sub-brand */}
            <div className="text-center lg:text-left space-y-1 flex-1 border-y lg:border-y-0 lg:border-x border-white/15 py-2.5 lg:py-0 lg:px-6">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white tracking-tight">
                Basic Individual Tax Returns
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                Professional service. Affordable pricing. Confidence in every return.
              </p>
              <p className="text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-[#2bb673]">
                EVOLVE TAXATION &amp; ADVISORY
              </p>
            </div>

            {/* Right Block: Highlighted Important Notice */}
            <div className="lg:max-w-md w-full shrink-0 p-3 rounded-xl bg-white/[0.05] border border-emerald-500/30 text-xs text-slate-300 shadow-2xs">
              <p className="leading-relaxed">
                <strong className="font-bold text-emerald-300">Important:</strong> Note that the $99 starting price applies to eligible basic individual tax returns. Additional fees may apply depending on the complexity of your tax affairs and the services required. We will confirm any applicable fees with you before proceeding.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
