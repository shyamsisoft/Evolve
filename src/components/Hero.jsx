import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const slideDuration = 6500; // 6.5s per slide

  // Auto-advance timer
  useEffect(() => {
    if (slides.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slideDuration);

    return () => clearInterval(timer);
  }, [slides.length, isPaused, currentSlide]);

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
      className="relative min-h-[580px] sm:min-h-[660px] lg:min-h-[92vh] flex flex-col justify-center pt-28 sm:pt-36 lg:pt-36 pb-20 sm:pb-28 lg:pb-32 overflow-hidden select-none bg-[#061a2e]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
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
            <img
              src={imgUrl(slide.bgImage || data?.bgImage || "/images/hero_summit.jpg")}
              alt={slide.title}
              className={`w-full h-full object-cover object-center transform transition-transform duration-7000 ease-out ${
                isActive ? 'scale-108' : 'scale-100'
              }`}
            />
            {/* Multi-Layer Corporate Gradient Overlays for Guaranteed High Text Contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#061a2e]/95 via-[#061a2e]/80 to-[#061a2e]/40 sm:to-transparent/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-transparent to-[#061a2e]/50" />
          </div>
        );
      })}

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl text-white space-y-4 sm:space-y-6 lg:space-y-7">
          
          {/* Animated Subhead Tag / Badge */}
          <div 
            key={`badge-${currentSlide}`}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-300 shadow-md animate-in fade-in slide-in-from-bottom-2 duration-500"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#2bb673] animate-pulse" />
            <span className="truncate max-w-[280px] sm:max-w-none">{activeSlideData.badge}</span>
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
            className="text-xs sm:text-base lg:text-xl text-gray-200 font-normal leading-relaxed max-w-2xl line-clamp-3 sm:line-clamp-none animate-in fade-in slide-in-from-bottom-4 duration-700"
          >
            {activeSlideData.subtitle}
          </p>
        </div>
      </div>

      {/* Prev / Next Circular Navigation Arrows (Visible on Tablets & Desktops) */}
      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            className="hidden md:flex absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-[#061a2e]/60 hover:bg-[#007791] text-white/80 hover:text-white border border-white/20 backdrop-blur-md shadow-lg transition-all cursor-pointer hover:scale-110 active:scale-95"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="hidden md:flex absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-[#061a2e]/60 hover:bg-[#007791] text-white/80 hover:text-white border border-white/20 backdrop-blur-md shadow-lg transition-all cursor-pointer hover:scale-110 active:scale-95"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </>
      )}

      {/* Bottom Carousel Navigation Controls */}
      {slides.length > 1 && (
        <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Mobile Sleek Pill Navigation Strip (< md) */}
          <div className="flex md:hidden items-center justify-between bg-[#061a2e]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 mx-auto max-w-[240px] shadow-lg">
            <button
              type="button"
              onClick={handlePrev}
              className="p-1 text-white/80 hover:text-white cursor-pointer active:scale-90"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <div className="flex items-center space-x-1.5 px-3">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentSlide
                      ? 'w-6 bg-[#2bb673]'
                      : 'w-1.5 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="p-1 text-white/80 hover:text-white cursor-pointer active:scale-90"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Desktop & Tablet Segmented Progress Bar Grid (>= md) */}
          <div className="hidden md:grid md:grid-cols-4 gap-2.5 lg:gap-3 bg-[#061a2e]/70 backdrop-blur-md p-2 rounded-2xl border border-white/10">
            {slides.map((slide, idx) => {
              const isActive = idx === currentSlide;
              return (
                <button
                  key={slide.id || idx}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`relative p-2.5 rounded-xl text-left transition-all cursor-pointer overflow-hidden ${
                    isActive 
                      ? 'bg-white/15 border border-white/25 shadow-md' 
                      : 'hover:bg-white/5 opacity-65 hover:opacity-100'
                  }`}
                >
                  {/* Top Animated Progress Bar for Active Slide */}
                  {isActive && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#007791] via-[#2bb673] to-emerald-400 transition-all"
                        style={{
                          width: isPaused ? '100%' : '100%',
                          animation: isPaused ? 'none' : `progressAnim ${slideDuration}ms linear infinite`
                        }}
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-center">
                    <span className={`text-[11px] sm:text-xs font-bold truncate transition-colors ${
                      isActive ? 'text-white' : 'text-slate-300'
                    }`}>
                      {slide.tabLabel || `Slide ${idx + 1}`}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      )}

      {/* Decorative Bottom Transition Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#f8fafc] to-transparent z-10 pointer-events-none" />
    </section>
  );
};
