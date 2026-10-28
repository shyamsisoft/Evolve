import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';

export const FinanceMoreThanNumbers = ({ data, onSelectWhatWeDoOverview }) => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Text & Narrative */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#061a2e] tracking-tight leading-tight">
              {data.heading}
            </h2>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-[17px] text-slate-600 leading-relaxed font-normal">
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
                className="inline-flex items-center space-x-2 border-2 border-[#007791] text-[#007791] hover:bg-[#007791] hover:text-white text-xs sm:text-base font-bold px-5 py-2.5 sm:px-6 sm:py-3 rounded-full transition-all duration-300 group shadow-sm cursor-pointer"
              >
                <span>{data.ctaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Photo Card with Floating Callout Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group border border-slate-100">
              <img
                src={data.image || imgUrl("/images/finance_meeting.jpg")}
                alt="Executive finance strategy"
                loading="lazy"
                decoding="async"
                className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e]/40 via-transparent to-transparent"></div>

              {/* Floating Top Right Callout Badge */}
              <div className="absolute top-3 right-3 sm:top-6 sm:right-6 max-w-[210px] sm:max-w-[300px] bg-white/95 backdrop-blur-md border border-slate-200/80 p-3 sm:p-5 rounded-xl sm:rounded-2xl shadow-xl space-y-1 sm:space-y-2 animate-in fade-in zoom-in-95 duration-500">
                <div className="flex items-center space-x-1.5 sm:space-x-2 text-[#2bb673]">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#061a2e]">Core Impact</span>
                </div>
                <p className="text-xs sm:text-base lg:text-lg font-bold text-[#061a2e] leading-snug">
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
