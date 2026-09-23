import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const FinanceMoreThanNumbers = ({ data }) => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061a2e] tracking-tight leading-tight">
              {data.heading}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              <p>{data.paragraph1}</p>
              <p>{data.paragraph2}</p>
            </div>

            <div className="pt-2">
              <a
                href="#what-we-do"
                className="inline-flex items-center space-x-2 border-2 border-[#007791] text-[#007791] hover:bg-[#007791] hover:text-white text-sm font-bold px-6 py-3 rounded-full transition-all duration-300 group shadow-sm"
              >
                <span>{data.ctaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Photo Card with Floating Callout Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group border border-slate-100">
              <img
                src={data.image || "/images/finance_meeting.jpg"}
                alt="Executive finance strategy"
                className="w-full h-[380px] sm:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e]/40 via-transparent to-transparent"></div>

              {/* Floating Top Right Callout Badge */}
              <div className="absolute top-6 right-6 max-w-[240px] sm:max-w-[270px] bg-white/95 backdrop-blur-md border border-slate-200/80 p-4 rounded-2xl shadow-xl space-y-2 animate-in fade-in zoom-in-95 duration-500">
                <div className="flex items-center space-x-2 text-[#2bb673]">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#061a2e]">Core Impact</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-[#061a2e] leading-snug">
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
