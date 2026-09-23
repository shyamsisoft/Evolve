import React from 'react';
import { ArrowRight, BarChart3, Settings, Target, Users, Shield } from 'lucide-react';

export const ApproachWhyUs = ({ data }) => {
  const getWhyUsIcon = (iconName) => {
    switch (iconName) {
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-[#007791]" />;
      case 'Settings':
        return <Settings className="w-5 h-5 text-[#007791]" />;
      case 'Target':
        return <Target className="w-5 h-5 text-[#007791]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#007791]" />;
      case 'Shield':
      default:
        return <Shield className="w-5 h-5 text-[#007791]" />;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Our Approach (How We Work) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#061a2e] tracking-tight">
                {data.approachTitle}
              </h2>
              <p className="text-sm font-bold text-[#007791] uppercase tracking-wider mt-1">
                {data.approachSubtitle}
              </p>
            </div>

            {/* 4 Process Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.approachSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-[#f7f9fc] p-5 rounded-2xl border border-slate-100 hover:border-[#007791]/30 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md relative group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-[#007791] tracking-wider">
                        {step.num}
                      </span>
                      {idx < data.approachSteps.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#2bb673] transition-colors" />
                      )}
                    </div>
                    <h3 className="text-base font-extrabold text-[#061a2e] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Why Us? */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#061a2e] tracking-tight">
              {data.whyUsTitle}
            </h2>

            {/* List / Grid of 5 Benefit Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.whyUsItems.map((item, idx) => (
                <div
                  key={item.id || idx}
                  className={`bg-[#f0f5fa] p-5 rounded-2xl border border-slate-100/80 hover:bg-white hover:shadow-md transition-all duration-300 ${
                    idx === data.whyUsItems.length - 1 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-xl bg-white shadow-xs text-[#007791] mt-0.5">
                      {getWhyUsIcon(item.icon)}
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold text-[#061a2e] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
