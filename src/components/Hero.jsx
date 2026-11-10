import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';
import { PillarIcon } from './BrandLogo';
import { imgUrl } from '../utils/imgUrl';

export const Hero = ({ data, onOpenContact, onNavigate }) => {
  // Fallback slides if data.slides is not provided
  const slides = (data?.slides && data.slides.length > 0) ? data.slides : [
    {
      id: "slide-1",
      tabLabel: "Strategic Vision",
      badge: data?.badge || "EVOLVE Corporate & Business Solutions",
      title: data?.title || "Finance that moves organisations forward.",
      subtitle: data?.subtitle || "Clarity for today. Capability for tomorrow. Transformation when you need it.",
      ctaText: data?.ctaText || "Start a Conversation →",
      bgImage: data?.bgImage || "/images/hero_summit.jpg"
    }
  ];

  const pillars = [
    {
      id: "lead",
      tag: "PILLAR 01",
      pillar: "LEAD",
      title: "CFO & FP&A Advisory",
      subtitle: "Strategic Financial Leadership",
      icon: "lead",
    },
    {
      id: "build",
      tag: "PILLAR 02",
      pillar: "BUILD",
      title: "Finance Functions",
      subtitle: "Operating Models & Systems",
      icon: "build",
    },
    {
      id: "transform",
      tag: "PILLAR 03",
      pillar: "TRANSFORM",
      title: "Data & Technology",
      subtitle: "Digital Finance Architecture",
      icon: "transform",
    },
    {
      id: "protect",
      tag: "PILLAR 04",
      pillar: "PROTECT",
      title: "Tax & Compliance",
      subtitle: "Risk, Governance & Continuity",
      icon: "protect",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [visitedSlides, setVisitedSlides] = useState(() => new Set([0, 1]));
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const slideDuration = 5000; // 5s auto slide

  // Lazily include slides as they are navigated or queued up next
  useEffect(() => {
    setVisitedSlides((prev) => {
      const next = new Set(prev);
      next.add(currentSlide);
      next.add((currentSlide + 1) % slides.length);
      return next;
    });
  }, [currentSlide, slides.length]);

  // Continuous Auto-advance timer
  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slideDuration);

    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;
    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const activeSlideData = slides[currentSlide] || slides[0];

  const handleCtaClick = () => {
    if (activeSlideData.targetPage && onNavigate) {
      onNavigate(activeSlideData.targetPage);
    } else if (onOpenContact) {
      onOpenContact();
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[680px] sm:min-h-[760px] lg:min-h-screen flex flex-col justify-between pt-28 sm:pt-32 lg:pt-36 pb-6 sm:pb-8 overflow-hidden select-none bg-[#061a2e]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Images Layer with Cinematic Cross-Dissolve */}
      {slides.map((slide, idx) => {
        const isActive = idx === currentSlide;
        return (
          <div
            key={slide.id || idx}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10 pointer-events-none'
            }`}
          >
            {visitedSlides.has(idx) && (
              <img
                src={imgUrl(slide.bgImage || data?.bgImage || "/images/hero_summit.jpg")}
                alt={slide.title}
                fetchPriority={idx === 0 ? "high" : "low"}
                loading={idx === 0 ? "eager" : "lazy"}
                decoding="async"
                className={`w-full h-full object-cover object-center transform transition-transform duration-7000 ease-out ${
                  isActive ? 'scale-108' : 'scale-100'
                }`}
              />
            )}
            {/* Multi-Layer Corporate Gradient Overlays for High Text Contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#061a2e]/95 via-[#061a2e]/80 to-[#061a2e]/40 sm:to-transparent/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-transparent to-[#061a2e]/50" />
          </div>
        );
      })}

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full my-auto py-8 sm:py-12">
        <div className="text-white space-y-4 sm:space-y-6 lg:space-y-7">
          
          {/* Animated Subhead Tag / Badge */}
          <div 
            key={`badge-${currentSlide}`}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-300 shadow-md animate-in fade-in slide-in-from-bottom-2 duration-500"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#2bb673] animate-pulse" />
            <span>{activeSlideData.badge}</span>
          </div>

          {/* Animated Main Headline - Scaled for Narrow Viewports */}
          <h1 
            key={`title-${currentSlide}`}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.18] sm:leading-[1.12] text-white animate-in fade-in slide-in-from-bottom-3 duration-600"
          >
            {activeSlideData.title}
          </h1>

          {/* Animated Subtext */}
          <p 
            key={`sub-${currentSlide}`}
            className="text-base sm:text-lg lg:text-2xl text-slate-100 font-normal leading-relaxed max-w-5xl xl:max-w-6xl animate-in fade-in slide-in-from-bottom-4 duration-700"
          >
            {activeSlideData.subtitle}
          </p>

          {/* Action CTAs */}
          <div 
            key={`cta-${currentSlide}`}
            className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-2 sm:pt-3 animate-in fade-in slide-in-from-bottom-5 duration-700"
          >
            <button
              type="button"
              onClick={handleCtaClick}
              className="group inline-flex items-center justify-center space-x-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#007791] via-[#008ba3] to-[#2bb673] hover:from-[#008ba3] hover:to-[#22955c] text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-[#007791]/30 hover:shadow-xl hover:shadow-[#007791]/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>{activeSlideData.ctaText || "Start a Conversation"}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate ? onNavigate('what-we-do') : null}
              className="inline-flex items-center justify-center space-x-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm tracking-wide border border-white/20 hover:border-white/40 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Explore Capabilities</span>
              <ChevronDown className="w-4 h-4 text-emerald-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Slide Navigation Dots / Indicators */}
      {slides.length > 1 && (
        <div className="relative z-20 flex items-center justify-center gap-2 pb-2">
          {slides.map((slide, idx) => (
            <button
              key={slide.id || idx}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                idx === currentSlide
                  ? 'w-8 h-2 bg-gradient-to-r from-[#007791] via-[#18B0A6] to-[#2bb673]'
                  : 'w-2 h-2 bg-white/35 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* 4-Pillar Executive Quick-Bar Docked at Bottom */}
      <div className="relative z-10 max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full pb-3 sm:pb-5">
        <div className="bg-[#061a2e]/85 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl border border-white/15 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            {pillars.map((pillar) => (
              <button
                key={pillar.id}
                type="button"
                onClick={() => onNavigate && onNavigate(pillar.id)}
                className="group relative flex items-center space-x-2.5 sm:space-x-3 p-2.5 sm:p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-emerald-400/50 transition-all duration-300 text-left cursor-pointer"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#061a2e]/90 border border-white/15 p-1.5 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-emerald-400/40 transition-all shadow-md">
                  <PillarIcon type={pillar.icon} className="w-full h-full" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center space-x-1.5">
                    <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-[#2bb673] group-hover:text-emerald-300 transition-colors">
                      {pillar.pillar}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-200 transition-colors truncate">
                    {pillar.title}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-300 truncate hidden sm:block">
                    {pillar.subtitle}
                  </p>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-1" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Prev / Next Circular Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            className="flex absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-[#061a2e]/60 hover:bg-[#007791] text-white/80 hover:text-white border border-white/20 backdrop-blur-md shadow-lg transition-all cursor-pointer hover:scale-110 active:scale-95"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="flex absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-[#061a2e]/60 hover:bg-[#007791] text-white/80 hover:text-white border border-white/20 backdrop-blur-md shadow-lg transition-all cursor-pointer hover:scale-110 active:scale-95"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </>
      )}

      {/* Decorative Bottom Transition Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#061a2e] to-transparent z-10 pointer-events-none" />
    </section>
  );
};
