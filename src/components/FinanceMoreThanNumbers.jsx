import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';

export const FinanceMoreThanNumbers = ({ data, onSelectWhatWeDoOverview }) => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          
          {/* Left Column: Text & Narrative */}
          <div className="lg:col-span-6 space-y-7">
            <h2 className="text-3xl sm:text-5xl font-black text-[#061a2e] tracking-tight leading-tight">
              {data.heading}
            </h2>

            <div className="space-y-5 text-lg sm:text-xl text-slate-700 leading-relaxed font-medium">
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
                className="inline-flex items-center space-x-2.5 border-2 border-[#007791] text-[#007791] hover:bg-[#007791] hover:text-white text-base font-extrabold px-7 py-3.5 rounded-full transition-all duration-300 group shadow-sm cursor-pointer"
              >
                <span>{data.ctaText}</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Photo Card with Floating Callout Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group border border-slate-100">
              <img
                src={data.image || imgUrl("/images/finance_meeting.jpg")}
                alt="Executive finance strategy"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e]/40 via-transparent to-transparent"></div>

              {/* Floating Top Right Callout Badge */}
              <div className="absolute top-6 right-6 max-w-[260px] sm:max-w-[300px] bg-white/95 backdrop-blur-md border border-slate-200/80 p-5 rounded-2xl shadow-xl space-y-2 animate-in fade-in zoom-in-95 duration-500">
                <div className="flex items-center space-x-2 text-[#2bb673]">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span className="text-xs font-black uppercase tracking-wider text-[#061a2e]">Core Impact</span>
                </div>
                <p className="text-base sm:text-lg font-bold text-[#061a2e] leading-snug">
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
