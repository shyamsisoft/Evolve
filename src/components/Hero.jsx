import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = ({ data, onOpenContact }) => {
  return (
    <section id="home" className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={data.bgImage || "/images/hero_summit.jpg"}
          alt="Finance moves organisations forward"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
        />
        {/* Modern Multi-Layer Gradient Overlays for High Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061a2e]/90 via-[#061a2e]/65 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-transparent to-[#061a2e]/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl text-white space-y-6">
          {/* Subhead Tag / Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-emerald-300 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#2bb673] animate-pulse"></span>
            <span>{data.badge}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
            {data.title}
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-gray-200 font-normal leading-relaxed max-w-xl">
            {data.subtitle}
          </p>

          {/* CTA Action Button */}
          <div className="pt-4 flex items-center space-x-4">
            <button
              onClick={onOpenContact}
              className="brand-button-gradient text-white text-base font-bold px-8 py-4 rounded-full flex items-center space-x-2 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 group"
            >
              <span>{data.ctaText}</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave / Transition Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#f7f9fc] to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};
