import React, { useState, useEffect } from 'react';
import { BarChart3, Lightbulb, Users, ArrowRight } from 'lucide-react';

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
    { icon: <BarChart3 className="w-8 h-8 text-[#007791]" /> },
    { icon: <Lightbulb className="w-8 h-8 text-[#2bb673]" /> },
    { icon: <Users className="w-8 h-8 text-[#061a2e]" /> }
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

        {/* 3 Interactive Cards Step Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative max-w-5xl mx-auto text-left">
          {data.steps.map((step, idx) => {
            const isActive = activeStep === idx;
            const details = stepDetails[idx % stepDetails.length];

            return (
              <div
                key={step.id || idx}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-2xl p-8 transition-all duration-500 relative flex flex-col justify-between select-none ${
                  isActive
                    ? 'bg-white shadow-2xl border-2 border-[#007791] scale-[1.03] z-20'
                    : 'bg-white/90 backdrop-blur-sm shadow-md border border-slate-200/80 hover:bg-white hover:shadow-lg opacity-90 hover:opacity-100 hover:scale-[1.01]'
                }`}
              >
                {/* Active Top Gradient Line */}
                {isActive && (
                  <div className="absolute -top-[2px] left-0 right-0 h-1.5 bg-gradient-to-r from-[#007791] via-[#0a9396] to-[#2bb673] rounded-t-2xl animate-pulse"></div>
                )}

                <div>
                  {/* Step Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-br from-[#007791]/15 to-[#2bb673]/20 scale-110 shadow-inner'
                          : 'bg-slate-100'
                      }`}
                    >
                      {details.icon}
                    </div>

                    <span
                      className={`text-xs font-extrabold tracking-wider px-3 py-1 rounded-full ${
                        isActive
                          ? 'bg-[#007791] text-white shadow-md'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-2xl font-black text-[#061a2e] tracking-wider uppercase mb-2">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-base font-bold text-[#007791] mb-4">
                    {step.desc}
                  </p>
                </div>

                {/* Progress Bar Indicator */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs font-extrabold text-slate-500 mb-1.5">
                    <span>{isActive ? 'Active Step' : 'Step 0' + (idx + 1)}</span>
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
            );
          })}
        </div>

      </div>
    </section>
  );
};
