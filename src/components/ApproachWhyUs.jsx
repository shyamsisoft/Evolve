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
    imgUrl("/images/approach_understand.jpg"),
    imgUrl("/images/approach_diagnose.jpg"),
    imgUrl("/images/approach_design.jpg"),
    imgUrl("/images/approach_deliver.jpg")
  ];

  const defaultWhyUsImages = [
    imgUrl("/images/why_experience.jpg"),
    imgUrl("/images/why_transformation.jpg"),
    imgUrl("/images/why_practical.jpg"),
    imgUrl("/images/why_flexible.jpg"),
    imgUrl("/images/why_independent.jpg")
  ];

  return (
    <section className="py-20 bg-[#f7f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* SECTION 1: OUR APPROACH (DESIGN MATCHED TO WHAT WE DO) */}
        <div>
          {/* Header */}
          <div className="mb-10 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061a2e] tracking-tight">
              {data.approachTitle}
            </h2>
            <p className="text-sm font-bold text-[#007791] uppercase tracking-wider mt-1.5">
              {data.approachSubtitle}
            </p>
          </div>

          {/* 4 Image Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.approachSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-[#007791]/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Header with Step Badge */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={step.image || defaultApproachImages[idx % defaultApproachImages.length]}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
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

        {/* SECTION 2: WHY US? (DESIGN MATCHED TO WHAT WE DO) */}
        <div>
          {/* Header */}
          <div className="mb-10 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061a2e] tracking-tight">
              {data.whyUsTitle}
            </h2>
            <p className="text-base font-normal text-slate-600 mt-1.5">
              Proven expertise, practical delivery, and strategic clarity for your organisation.
            </p>
          </div>

          {/* 5 Premium Image Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.whyUsItems.map((item, idx) => (
              <div
                key={item.id || idx}
                className={`bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-[#2bb673]/60 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group ${
                  idx === data.whyUsItems.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image || defaultWhyUsImages[idx % defaultWhyUsImages.length]}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
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

      </div>
    </section>
  );
};
