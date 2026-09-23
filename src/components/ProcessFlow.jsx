import React from 'react';
import { BarChart3, Lightbulb, Users, ArrowRight } from 'lucide-react';

export const ProcessFlow = ({ data }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'BarChart3':
        return <BarChart3 className="w-8 h-8 text-[#007791]" />;
      case 'Lightbulb':
        return <Lightbulb className="w-8 h-8 text-[#007791]" />;
      case 'Users':
      default:
        return <Users className="w-8 h-8 text-[#007791]" />;
    }
  };

  return (
    <section className="py-16 bg-[#f0f5fa] border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#061a2e] tracking-tight mb-12">
          {data.heading}
        </h2>

        {/* 3 Step Flow with Arrows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center max-w-5xl mx-auto">
          {data.steps.map((step, idx) => (
            <React.Fragment key={step.id || idx}>
              {/* Step Card */}
              <div className="relative group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col items-center text-center">
                {/* Icon Container with Gradient Hover Ring */}
                <div className="w-16 h-16 rounded-2xl bg-[#f0f5fa] group-hover:bg-gradient-to-br group-hover:from-[#007791]/10 group-hover:to-[#2bb673]/20 flex items-center justify-center mb-5 transition-colors duration-300">
                  {getIcon(step.icon)}
                </div>

                {/* Step Title */}
                <h3 className="text-base font-extrabold text-[#061a2e] tracking-wider uppercase mb-2 group-hover:text-[#007791] transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm font-medium text-slate-500">
                  {step.desc}
                </p>
              </div>

              {/* Arrow Connector (Hidden on Mobile) */}
              {idx < data.steps.length - 1 && (
                <div className="hidden md:flex justify-center text-slate-400">
                  <ArrowRight className="w-6 h-6 text-slate-300" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
