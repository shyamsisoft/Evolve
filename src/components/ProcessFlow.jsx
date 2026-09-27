import React, { useState, useEffect } from 'react';
import { BarChart3, Lightbulb, Users, ArrowRight } from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';

export const ProcessFlow = ({ data }) => {
  const [activeStep, setActiveStep] = useState(0);

  // Auto cycle steps gently every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % data.steps.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [data.steps.length]);

  const stepDetails = [
    { icon: <BarChart3 className="w-6 h-6 text-white" />, image: imgUrl("/images/step_numbers.jpg") },
    { icon: <Lightbulb className="w-6 h-6 text-white" />, image: imgUrl("/images/step_insight.jpg") },
    { icon: <Users className="w-6 h-6 text-white" />, image: imgUrl("/images/step_leadership.jpg") }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#f0f5fa] via-[#f7f9fc] to-[#f0f5fa] border-y border-slate-200/80 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[300px] bg-gradient-to-r from-[#007791]/8 to-[#2bb673]/8 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Centered Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061a2e] tracking-tight mb-14">
          {data.heading}
        </h2>

        {/* 3 Interactive Photo Cards Step Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative max-w-5xl mx-auto text-left">
          {data.steps.map((step, idx) => {
            const isActive = activeStep === idx;
            const details = stepDetails[idx % stepDetails.length];

            return (
              <div
                key={step.id || idx}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-3xl overflow-hidden transition-all duration-500 relative flex flex-col justify-between select-none ${
                  isActive
                    ? 'bg-white shadow-2xl border-2 border-[#007791] scale-[1.03] z-20'
                    : 'bg-white/90 backdrop-blur-sm shadow-md border border-slate-200/80 hover:bg-white hover:shadow-lg opacity-90 hover:opacity-100 hover:scale-[1.01]'
                }`}
              >
                {/* Active Top Gradient Line */}
                {isActive && (
                  <div className="absolute -top-[2px] left-0 right-0 h-1.5 bg-gradient-to-r from-[#007791] via-[#0a9396] to-[#2bb673] rounded-t-3xl z-30 animate-pulse"></div>
                )}

                <div>
                  {/* Photo Header */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={details.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-[#061a2e]/60 to-transparent"></div>

                    {/* Step Icon & Number Badges */}
                    <div className="absolute top-4 left-4 p-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg">
                      {details.icon}
                    </div>

                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full shadow-md">
                      <span className="text-xs font-black text-[#007791]">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Step Title Overlay */}
                    <div className="absolute bottom-3 left-5 right-5">
                      <h3 className="text-2xl font-black text-white tracking-wider uppercase leading-tight">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Step Description */}
                  <div className="p-6">
                    <p className="text-base font-bold text-[#007791] mb-2">
                      {step.desc}
                    </p>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {idx === 0 ? "Historical accounting & data telemetry" : idx === 1 ? "Predictive modeling & root cause analysis" : "Strategic execution & capital allocation"}
                    </p>
                  </div>
                </div>

                {/* Progress Bar Indicator */}
                <div className="px-6 pb-6 pt-0">
                  <div className="pt-3 border-t border-slate-100">
                    <div className="flex items-center justify-between text-xs font-extrabold text-slate-500 mb-1.5">
                      <span>{isActive ? 'Active Phase' : 'Phase 0' + (idx + 1)}</span>
                      <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-1 text-[#2bb673]' : 'text-slate-400'}`} />
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 rounded-full ${
                          isActive
                            ? 'w-full bg-gradient-to-r from-[#007791] to-[#2bb673]'
                            : 'w-0 bg-slate-300'
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
