import React from 'react';
import { PillarIcon } from './BrandLogo';
import { ArrowRight } from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';

export const WhatWeDo = ({ data, onSelectService }) => {
  return (
    <section id="what-we-do" className="py-14 sm:py-20 bg-[#061a2e] text-white relative overflow-hidden border-b border-white/10 font-['Inter',sans-serif]">
      {/* Background Decorative Lighting */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#007791]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#2bb673]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
            {data.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            {data.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.items.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectService && onSelectService(item.id)}
              className="bg-white/[0.03] backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-500/50 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Header Photo with Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={imgUrl(item.image)}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-[#061a2e]/60 to-transparent" />
                  
                  {/* Pillar SVG Icon Badge */}
                  <div className="absolute top-4 left-4 p-2 bg-[#061a2e]/90 backdrop-blur-md border border-white/15 rounded-xl shadow-lg">
                    <PillarIcon type={item.iconType} className="w-8 h-8" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#2bb673]">
                    {item.pillar}
                  </span>
                  <h3 className="text-xl font-bold text-white leading-snug group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectService && onSelectService(item.id);
                  }}
                  className="inline-flex items-center space-x-2 text-xs font-bold text-teal-400 group-hover:text-white transition-colors"
                >
                  <span>Explore {item.pillar} Page</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
