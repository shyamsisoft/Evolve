import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';

export const FinanceMoreThanNumbers = ({ data, onSelectWhatWeDoOverview }) => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#061a2e] text-white relative border-b border-white/10 font-['Inter',sans-serif] overflow-hidden">
      {/* Soft Radial Ambient Lighting */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Text & Narrative */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight font-['Plus_Jakarta_Sans',sans-serif]">
              {data.heading}
            </h2>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-[17px] text-slate-300 leading-relaxed font-normal">
              <p>{data.paragraph1}</p>
              <p>{data.paragraph2}</p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  if (onSelectWhatWeDoOverview) {
                    onSelectWhatWeDoOverview();
                  } else {
                    const el = document.getElementById('what-we-do');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="brand-button-gradient text-white text-xs sm:text-sm font-extrabold px-6 py-3.5 rounded-full inline-flex items-center space-x-2 shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer font-['Plus_Jakarta_Sans',sans-serif]"
              >
                <span>{data.ctaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Photo Card with Floating Callout Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group border border-white/10 bg-slate-950">
              <img
                src={data.image || imgUrl("/images/finance_meeting.jpg")}
                alt="Executive finance strategy"
                loading="lazy"
                decoding="async"
                className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover object-center opacity-75 group-hover:scale-105 group-hover:opacity-90 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e]/60 via-transparent to-transparent"></div>

              {/* Floating Top Right Callout Badge */}
              <div className="absolute top-3 right-3 sm:top-6 sm:right-6 max-w-[210px] sm:max-w-[300px] bg-[#0B2440]/90 backdrop-blur-md border border-white/15 p-3 sm:p-5 rounded-xl sm:rounded-2xl shadow-2xl space-y-1 sm:space-y-2 animate-in fade-in zoom-in-95 duration-500">
                <div className="flex items-center space-x-1.5 sm:space-x-2 text-[#2bb673]">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-emerald-400 font-mono">Core Impact</span>
                </div>
                <p className="text-xs sm:text-base lg:text-lg font-bold text-white leading-snug font-['Plus_Jakarta_Sans',sans-serif]">
                  {data.calloutText}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
