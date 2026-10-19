import React from 'react';
import { ArrowRight, BarChart3, Settings, Target, Users, Shield } from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';

export const ApproachWhyUs = ({ data }) => {
  const getWhyUsIcon = (iconName) => {
    switch (iconName) {
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-[#2bb673]" />;
      case 'Settings':
        return <Settings className="w-5 h-5 text-[#2bb673]" />;
      case 'Target':
        return <Target className="w-5 h-5 text-[#2bb673]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#2bb673]" />;
      case 'Shield':
      default:
        return <Shield className="w-5 h-5 text-[#2bb673]" />;
    }
  };

  const defaultApproachImages = [
    "/images/approach_understand.jpg",
    "/images/approach_diagnose.jpg",
    "/images/approach_design.jpg",
    "/images/approach_deliver.jpg"
  ];

  const defaultWhyUsImages = [
    "/images/why_experience.jpg",
    "/images/why_transformation.jpg",
    "/images/why_practical.jpg",
    "/images/why_flexible.jpg",
    "/images/why_independent.jpg"
  ];

  return (
    <>
      {/* SECTION 1: OUR APPROACH (4 STEP FRAMEWORK) WITH BACKGROUND IMAGE */}
      <section id="our-approach" className="relative py-24 bg-[#061a2e] text-white overflow-hidden">
        {/* Background Graphic with Atmospheric Teal & Deep Ocean Overlays */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={imgUrl(data.approachBgImage || '/images/hero_summit.jpg')}
            alt="Our Approach Background"
            className="w-full h-full object-cover object-center opacity-25 filter brightness-85 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#061a2e]/95 via-[#002238]/85 to-[#061a2e]/95" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#007791]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center sm:text-left">
            <span className="inline-block text-xs font-bold text-[#00c0e8] uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 mb-3">
              METHODOLOGY & EXECUTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {data.approachTitle}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal mt-2 max-w-2xl leading-relaxed">
              {data.approachSubtitle}
            </p>
          </div>

          {/* 4 Image Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.approachSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-2xl hover:shadow-cyan-500/15 hover:border-[#007791]/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group text-slate-800"
              >
                <div>
                  {/* Photo Header with Step Badge */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={imgUrl(step.image || defaultApproachImages[idx % defaultApproachImages.length])}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                      onError={(e) => {
                        const fallback = imgUrl(defaultApproachImages[idx % defaultApproachImages.length]);
                        if (e.currentTarget.src !== fallback) {
                          e.currentTarget.src = fallback;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent"></div>
                    
                    {/* Step Number Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-white/50">
                      <span className="text-xs font-black text-[#007791] tracking-wider">
                        {step.num}
                      </span>
                    </div>

                    {/* Step Title Overlay */}
                    <div className="absolute bottom-3 left-4 right-4">
                      <h3 className="text-xl font-extrabold text-white leading-tight">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content Body with Increased Font Size */}
                  <div className="p-6">
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Card Footer Connector */}
                <div className="px-6 pb-6 pt-0 flex items-center justify-between">
                  <span className="text-xs font-extrabold text-[#007791] uppercase tracking-wider">
                    Step {step.num}
                  </span>
                  <div className="p-2 rounded-full bg-teal-50 group-hover:bg-[#007791] text-[#007791] group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY US? WITH EXECUTIVE BACKGROUND IMAGE */}
      <section id="why-us" className="relative py-24 bg-[#061a2e] text-white overflow-hidden">
        {/* Background Image Graphic with Atmospheric Dark Gradient Overlays */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={imgUrl(data.whyUsBgImage || '/images/established_corporate.jpg')}
            alt="Why Choose Evolve Background"
            className="w-full h-full object-cover object-center opacity-30 filter brightness-90 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#061a2e]/95 via-[#061a2e]/80 to-[#061a2e]/95" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#007791]/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#2bb673]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center sm:text-left">
            <span className="inline-block text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 mb-3">
              WHY CHOOSE EVOLVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {data.whyUsTitle}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal mt-2 max-w-2xl leading-relaxed">
              {data.whyUsSubtitle || "Proven expertise, practical delivery, and strategic clarity for your organisation."}
            </p>
          </div>

          {/* 5 Premium Image Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.whyUsItems.map((item, idx) => (
              <div
                key={item.id || idx}
                className={`bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-2xl hover:shadow-2xl hover:shadow-emerald-500/15 hover:border-[#2bb673]/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group ${
                  idx === data.whyUsItems.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={imgUrl(item.image || defaultWhyUsImages[idx % defaultWhyUsImages.length])}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                      onError={(e) => {
                        const fallback = imgUrl(defaultWhyUsImages[idx % defaultWhyUsImages.length]);
                        if (e.currentTarget.src !== fallback) {
                          e.currentTarget.src = fallback;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-[#061a2e]/50 to-transparent"></div>
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4 p-2.5 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-white/50">
                      {getWhyUsIcon(item.icon)}
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-3 left-4 right-4">
                      <h3 className="text-xl font-extrabold text-white leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content Body with Increased Font Size */}
                  <div className="p-6">
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="px-6 pb-6 pt-0">
                  <span className="inline-flex items-center text-xs font-extrabold text-[#2bb673]">
                    <span>Why Choose Evolve</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
