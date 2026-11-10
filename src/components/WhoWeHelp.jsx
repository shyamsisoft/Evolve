import React from 'react';
import { ArrowRight, Building2, TrendingUp, Users2, Landmark } from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';

export const WhoWeHelp = ({ data, onSelectAudience }) => {
  const getAudienceIcon = (index) => {
    switch (index) {
      case 0:
        return <TrendingUp className="w-5 h-5 text-[#007791]" />;
      case 1:
        return <Building2 className="w-5 h-5 text-[#007791]" />;
      case 2:
        return <Users2 className="w-5 h-5 text-[#007791]" />;
      case 3:
      default:
        return <Landmark className="w-5 h-5 text-[#007791]" />;
    }
  };

  return (
    <section id="who-we-help" className="py-16 sm:py-24 bg-white text-[#061a2e] border-b border-slate-200 relative overflow-hidden font-['Inter',sans-serif]">
      {/* Background Subtle Ambient Lighting */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-[#007791]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-[#2bb673]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#061a2e] tracking-tight mb-3">
              {data.heading}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              {data.subtitle}
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <button
              onClick={() => onSelectAudience && onSelectAudience('who-we-help-overview')}
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#007791] hover:text-emerald-600 transition-colors cursor-pointer"
            >
              <span>{data.exploreAllText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.items.map((item, idx) => (
            <div
              key={item.id || idx}
              onClick={() => onSelectAudience && onSelectAudience(item.id)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 shadow-md hover:shadow-xl flex flex-col justify-between group cursor-pointer"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e]/60 via-transparent to-transparent" />
                  
                  {/* Top Icon Badge */}
                  <div className="absolute top-4 left-4 p-2.5 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 shadow-md">
                    {getAudienceIcon(idx)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#2bb673]">
                    Sector Expertise
                  </span>
                  <h3 className="text-xl font-bold text-[#061a2e] leading-snug group-hover:text-[#007791] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                  {item.focusAreas && item.focusAreas.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.focusAreas.map((area, aIdx) => (
                        <span
                          key={aIdx}
                          className="inline-block text-[10.5px] font-medium bg-slate-50 hover:bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200 transition-colors"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectAudience && onSelectAudience(item.id);
                  }}
                  className="inline-flex items-center space-x-2 text-xs font-bold text-[#007791] group-hover:text-[#061a2e] transition-colors"
                >
                  <span>Explore Sector Page</span>
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
