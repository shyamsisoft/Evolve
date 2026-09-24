import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Shield, Target, Users, Award, Sparkles } from 'lucide-react';

export const AboutPage = ({ data, onBack, onOpenContact }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-300">
      
      {/* HERO BANNER */}
      <section className="relative bg-[#061a2e] text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src="/images/established_corporate.jpg" alt="About EVOLVE" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#061a2e] via-[#061a2e]/90 to-[#007791]/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center space-x-3 text-xs sm:text-sm font-bold text-gray-300">
            <button onClick={onBack} className="inline-flex items-center space-x-1.5 text-emerald-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-white">About Us</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white max-w-4xl leading-tight">
            {data.title}
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 font-medium max-w-3xl leading-relaxed">
            {data.subtitle}
          </p>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="bg-[#f0f5fa] p-8 sm:p-12 rounded-3xl border border-slate-200 space-y-4 max-w-4xl mx-auto text-center">
            <span className="text-xs font-black text-[#007791] uppercase tracking-widest block">Our Core Mission</span>
            <p className="text-2xl sm:text-3xl font-black text-[#061a2e] leading-snug">
              "{data.mission}"
            </p>
          </div>

          {/* 3 VALUES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.values.map((v, idx) => (
              <div key={idx} className="bg-[#f7f9fc] p-8 rounded-3xl border border-slate-200 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#007791] text-white flex items-center justify-center font-black text-lg">
                  0{idx + 1}
                </div>
                <h3 className="text-2xl font-black text-[#061a2e]">{v.title}</h3>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">{v.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
