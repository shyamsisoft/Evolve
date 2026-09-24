import React from 'react';
import { ArrowRight, Building2, TrendingUp, Users2, Landmark } from 'lucide-react';

export const WhoWeHelp = ({ data, onSelectAudience }) => {
  const getAudienceIcon = (index) => {
    switch (index) {
      case 0:
        return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case 1:
        return <Building2 className="w-5 h-5 text-emerald-400" />;
      case 2:
        return <Users2 className="w-5 h-5 text-emerald-400" />;
      case 3:
      default:
        return <Landmark className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="who-we-help" className="py-20 bg-[#f7f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061a2e] tracking-tight mb-2">
              {data.heading}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              {data.subtitle}
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <button
              onClick={() => onSelectAudience && onSelectAudience('who-we-help-overview')}
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#007791] hover:text-[#2bb673] transition-colors cursor-pointer"
            >
              <span>{data.exploreAllText}</span>
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.items.map((item, idx) => (
            <div
              key={item.id || idx}
              onClick={() => onSelectAudience && onSelectAudience(item.id)}
              className="relative rounded-2xl overflow-hidden shadow-lg group h-84 flex flex-col justify-between p-6 border border-slate-200/80 hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Background Photo */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />
              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-[#061a2e]/70 to-[#061a2e]/30"></div>

              {/* Top Icon Badge */}
              <div className="relative z-10 self-start p-2.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                {getAudienceIcon(idx)}
              </div>

              {/* Bottom Content & Link */}
              <div className="relative z-10 space-y-2">
                <h3 className="text-xl font-extrabold text-white leading-tight group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-100 leading-relaxed font-normal">
                  {item.desc}
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectAudience && onSelectAudience(item.id);
                    }}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#2bb673] group-hover:text-white transition-colors"
                  >
                    <span>Explore Page</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
