import React, { useEffect } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Building2, TrendingUp, Users2, Landmark, ShieldCheck, Target, BarChart2 } from 'lucide-react';

export const WhoWeHelpDetailPage = ({ audienceId, data, onBack, onOpenContact, onSelectAudience }) => {
  const audience = data[audienceId] || data["growing-businesses"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [audienceId]);

  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-300">
      
      {/* VISUAL HERO BANNER */}
      <section className="relative bg-[#061a2e] text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-35">
          <img src={audience.bgImage} alt={audience.title} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#061a2e] via-[#061a2e]/90 to-[#007791]/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center space-x-3 text-xs sm:text-sm font-bold text-gray-300">
            <button onClick={onBack} className="inline-flex items-center space-x-1.5 text-emerald-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Overview</span>
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-gray-400">Who We Help</span>
            <span className="text-slate-600">/</span>
            <span className="text-white">{audience.title}</span>
          </div>

          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-[#2bb673]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sector Growth Roadmap</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white max-w-4xl leading-tight">
            {audience.title}
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 font-medium max-w-3xl leading-relaxed">
            {audience.tagline}
          </p>

          <div className="pt-2">
            <button onClick={onOpenContact} className="brand-button-gradient text-white text-base font-extrabold px-9 py-4 rounded-full flex items-center space-x-2 shadow-xl hover:scale-105 transition-transform">
              <span>Schedule Sector Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* VISUAL SECTOR STATS BAR */}
      <section className="py-10 bg-[#08213b] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-[#0e2c4d] rounded-2xl border border-slate-700">
              <span className="text-3xl font-black text-[#2bb673] block">100%</span>
              <span className="text-xs font-bold text-gray-300">Customized Advisory Scope</span>
            </div>
            <div className="p-4 bg-[#0e2c4d] rounded-2xl border border-slate-700">
              <span className="text-3xl font-black text-[#007791] block">Rapid 5-Day</span>
              <span className="text-xs font-bold text-gray-300">Diagnostic Mobilization</span>
            </div>
            <div className="p-4 bg-[#0e2c4d] rounded-2xl border border-slate-700">
              <span className="text-3xl font-black text-white block">Proven</span>
              <span className="text-xs font-bold text-gray-300">Executive Senior Partners</span>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL CHALLENGES & SOLUTIONS MATRIX */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-rose-600">
                <Target className="w-4 h-4" />
                <span>Sector Operational Friction</span>
              </div>
              <h2 className="text-3xl font-black text-[#061a2e]">Common Sector Challenges</h2>
              <div className="space-y-4">
                {audience.challenges.map((c, idx) => (
                  <div key={idx} className="p-5 bg-[#f7f9fc] rounded-2xl border border-slate-200 flex items-start space-x-4 shadow-xs">
                    <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-black text-xs flex-shrink-0 mt-0.5">
                      0{idx + 1}
                    </div>
                    <p className="text-base font-bold text-[#061a2e] leading-snug">{c}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-[#2bb673]">
                <ShieldCheck className="w-4 h-4" />
                <span>Targeted Deliverables</span>
              </div>
              <h2 className="text-3xl font-black text-[#061a2e]">Evolve Tailored Solutions</h2>
              <div className="space-y-4">
                {audience.solutions.map((s, idx) => (
                  <div key={idx} className="p-5 bg-teal-50/70 rounded-2xl border border-teal-200 flex items-start space-x-4 shadow-xs">
                    <CheckCircle2 className="w-6 h-6 text-[#2bb673] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-extrabold text-[#061a2e]">{s}</h3>
                      <p className="text-xs text-slate-600 font-medium">Delivered with dedicated executive oversight.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* OTHER SECTORS */}
      <section className="py-16 bg-[#f7f9fc] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h3 className="text-2xl font-black text-[#061a2e]">Explore Other Sectors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { id: 'growing-businesses', title: 'Growing Businesses' },
              { id: 'established-corporate', title: 'Established Corporate' },
              { id: 'non-profit-community', title: 'Not-for-Profit' },
              { id: 'local-government', title: 'Local Government' }
            ].map((s) => (
              <button
                key={s.id}
                onClick={() => onSelectAudience(s.id)}
                className={`p-5 rounded-2xl border text-left font-extrabold text-sm transition-all ${
                  audienceId === s.id ? 'border-[#007791] bg-white shadow-md text-[#007791]' : 'border-slate-200 bg-white hover:bg-slate-50 text-[#061a2e]'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
