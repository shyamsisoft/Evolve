import React, { useState } from 'react';
import { PillarIcon } from './BrandLogo';
import { ArrowRight } from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';

export const WhatWeDo = ({ data, onSelectService }) => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (id, e) => {
    e.stopPropagation();
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  return (
    <section id="what-we-do" className="py-16 sm:py-24 bg-white text-[#061a2e] relative overflow-hidden border-b border-slate-200 font-['Inter',sans-serif]">
      {/* Background Decorative Lighting */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#007791]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#2bb673]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#061a2e] mb-3">
            {data.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            {data.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.items.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectService && onSelectService(item.id)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-400 transition-all duration-300 hover:-translate-y-2 shadow-md hover:shadow-xl flex flex-col justify-between group cursor-pointer"
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
                  <h3 className="text-xl font-bold text-[#061a2e] leading-snug group-hover:text-[#007791] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>

                  {/* Capabilities List — Balanced View with Expandable +More */}
                  {item.capabilities && item.capabilities.length > 0 && (() => {
                    const isExpanded = !!expandedCards[item.id];
                    const maxInitial = 5;
                    const visibleCaps = isExpanded ? item.capabilities : item.capabilities.slice(0, maxInitial);
                    const remainingCount = item.capabilities.length - maxInitial;

                    return (
                      <div className="pt-2.5 border-t border-slate-100 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#007791]">
                            {item.pillar === 'LEAD' 
                              ? 'We help leaders with:' 
                              : item.pillar === 'PROTECT' 
                              ? 'Services include:' 
                              : 'We help with:'}
                          </span>
                          {isExpanded && (
                            <button
                              type="button"
                              onClick={(e) => toggleExpand(item.id, e)}
                              className="text-[10px] font-bold text-slate-500 hover:text-[#007791] transition-colors cursor-pointer"
                            >
                              Show less
                            </button>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {visibleCaps.map((cap, cIdx) => (
                            <span
                              key={cIdx}
                              className="inline-block text-[10.5px] font-medium bg-slate-50 hover:bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200 transition-colors"
                            >
                              {cap}
                            </span>
                          ))}

                          {!isExpanded && remainingCount > 0 && (
                            <button
                              type="button"
                              onClick={(e) => toggleExpand(item.id, e)}
                              className="inline-block text-[10.5px] font-bold text-[#007791] bg-teal-50 hover:bg-teal-100 border border-teal-200 text-[#007791] px-2.5 py-1 rounded-md transition-all cursor-pointer hover:scale-105 active:scale-95"
                              title="Click to view all services"
                            >
                              +{remainingCount} more
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })()}
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
                  className="inline-flex items-center space-x-2 text-xs font-bold text-[#007791] group-hover:text-[#061a2e] transition-colors"
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
