import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { 
  LookingBackwardsIcon, 
  UnderstandingPerformanceIcon, 
  PredictingTheFutureIcon, 
  ManagingPerformanceIcon 
} from './FlowIcons';

export const OwnerLedToManagementLedFlow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const stages = [
    {
      id: "stage-1",
      num: "01",
      title: "Looking backwards",
      theme: "cyan",
      accentHex: "#00f2fe",
      glowColor: "rgba(0, 242, 254, 0.5)",
      cardBorder: "border-cyan-400/80",
      cardBg: "bg-cyan-500/[0.08]",
      dotColor: "bg-[#00f2fe]",
      dotGlow: "shadow-[0_0_14px_#00f2fe]",
      icon: LookingBackwardsIcon,
      iconAura: "bg-cyan-400/40"
    },
    {
      id: "stage-2",
      num: "02",
      title: "Understanding performance",
      theme: "teal",
      accentHex: "#18B0A6",
      glowColor: "rgba(24, 176, 166, 0.5)",
      cardBorder: "border-teal-400/80",
      cardBg: "bg-teal-500/[0.08]",
      dotColor: "bg-[#18B0A6]",
      dotGlow: "shadow-[0_0_14px_#18B0A6]",
      icon: UnderstandingPerformanceIcon,
      iconAura: "bg-teal-400/40"
    },
    {
      id: "stage-3",
      num: "03",
      title: "Predicting the future",
      theme: "emerald",
      accentHex: "#2bb673",
      glowColor: "rgba(43, 182, 115, 0.5)",
      cardBorder: "border-emerald-400/80",
      cardBg: "bg-emerald-500/[0.08]",
      dotColor: "bg-[#2bb673]",
      dotGlow: "shadow-[0_0_14px_#2bb673]",
      icon: PredictingTheFutureIcon,
      iconAura: "bg-emerald-400/40"
    },
    {
      id: "stage-4",
      num: "04",
      title: "Managing performance",
      theme: "green",
      accentHex: "#10b981",
      glowColor: "rgba(16, 185, 129, 0.55)",
      cardBorder: "border-emerald-300/90",
      cardBg: "bg-emerald-400/[0.10]",
      dotColor: "bg-[#34d399]",
      dotGlow: "shadow-[0_0_14px_#34d399]",
      icon: ManagingPerformanceIcon,
      iconAura: "bg-emerald-300/45"
    }
  ];

  // Auto-play interval: sequentially advance step every 2.8 seconds when not hovered
  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % stages.length);
      }, 2800);
    }
    return () => clearInterval(timerRef.current);
  }, [isHovered, stages.length]);

  return (
    <div 
      className="space-y-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer Chamber Container (Exact Match to Shared Reference Glassmorphic Chamber) */}
      <div className="relative rounded-3xl border border-white/10 bg-[#091a2c]/80 backdrop-blur-2xl p-6 sm:p-8 lg:p-10 xl:p-12 overflow-hidden shadow-2xl">
        
        {/* Subtle Ambient Radial Lights matching stage colors */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#007791]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#2bb673]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Ambient Top Light Beam Accent */}
        <div className="absolute top-0 inset-x-12 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />

        {/* ======================================================== */}
        {/* DESKTOP FLOW: 4 Glass Cards with S-Curve Pipeline        */}
        {/* ======================================================== */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch gap-0 relative">
          
          {stages.map((stage, idx) => {
            const isActive = activeStep === idx;
            const isPassed = activeStep > idx;
            const IconComponent = stage.icon;

            return (
              <React.Fragment key={stage.id}>
                {/* 1. Stage Glassmorphic Card */}
                <div 
                  onClick={() => setActiveStep(idx)}
                  className={`relative rounded-2xl border transition-all duration-500 cursor-pointer p-6 sm:p-7 h-[175px] flex flex-col justify-between group backdrop-blur-md select-none ${
                    isActive 
                      ? `${stage.cardBorder} ${stage.cardBg} scale-[1.03] shadow-[0_0_35px_${stage.glowColor}] z-20`
                      : isPassed
                      ? 'border-white/20 bg-white/[0.04] opacity-95 hover:border-white/40 hover:bg-white/[0.06] z-10'
                      : 'border-white/10 bg-white/[0.02] opacity-75 hover:opacity-95 hover:border-white/25 hover:bg-white/[0.04] z-10'
                  }`}
                >
                  {/* Top Edge Illumination Highlight */}
                  <div 
                    className={`absolute top-0 inset-x-4 h-[2px] transition-opacity duration-500 rounded-full ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ background: `linear-gradient(90deg, transparent, ${stage.accentHex}, transparent)` }}
                  />

                  {/* 3D Floating Vector Glass Icon (Top Right Corner - Pure Clean Vector SVG) */}
                  <div className="absolute -top-7 -right-4 sm:-top-8 sm:-right-5 w-16 h-16 sm:w-20 sm:h-20 pointer-events-none z-30">
                    {/* Glowing Aura Behind Icon */}
                    <div 
                      className={`absolute inset-0 rounded-full blur-xl transition-all duration-500 ${stage.iconAura} ${
                        isActive ? 'scale-125 opacity-100 animate-pulse' : 'scale-90 opacity-40 group-hover:opacity-75'
                      }`}
                    />
                    {/* Pure Vector SVG Icon */}
                    <IconComponent 
                      className={`relative z-10 w-full h-full drop-shadow-xl transition-all duration-500 ${
                        isActive 
                          ? 'scale-110 -translate-y-1 drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]' 
                          : 'scale-95 group-hover:scale-105 opacity-90 group-hover:opacity-100'
                      }`}
                    />
                  </div>

                  {/* Card Content Header: Small Centered Number */}
                  <div className="text-center pt-1">
                    <span className={`font-mono text-xs font-extrabold tracking-widest transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-slate-400'
                    }`}>
                      {stage.num}
                    </span>
                  </div>

                  {/* Card Title */}
                  <div className="py-2 text-center px-2 flex items-center justify-center flex-1">
                    <h3 className={`text-base sm:text-lg font-bold leading-snug tracking-tight transition-all duration-300 ${
                      isActive 
                        ? 'text-white scale-[1.02]' 
                        : 'text-slate-200 group-hover:text-white'
                    }`}>
                      {stage.title}
                    </h3>
                  </div>

                  {/* Card Bottom Indicator Dot */}
                  <div className="flex justify-center items-center pb-1">
                    <div 
                      className={`rounded-full transition-all duration-500 ${stage.dotColor} ${
                        isActive 
                          ? `w-2.5 h-2.5 ${stage.dotGlow} scale-125 ring-4 ring-white/10 animate-pulse` 
                          : 'w-2 h-2 opacity-50 group-hover:opacity-85'
                      }`}
                    />
                  </div>

                  {/* Bottom Edge Neon Glow Bar (Continuous Circuit as shown in Reference Image) */}
                  <div 
                    className={`absolute -bottom-[1px] inset-x-5 h-[2.5px] rounded-full transition-all duration-500 ${
                      isActive 
                        ? 'opacity-100 shadow-[0_0_16px_3px_var(--glow)]' 
                        : 'opacity-40 group-hover:opacity-75 shadow-[0_0_8px_1px_var(--glow)]'
                    }`}
                    style={{ 
                      '--glow': stage.accentHex,
                      background: `linear-gradient(90deg, transparent 0%, ${stage.accentHex} 20%, ${stage.accentHex} 80%, transparent 100%)` 
                    }}
                  />
                  {/* Ambient Bottom Glow Pool */}
                  <div 
                    className={`absolute -bottom-2 inset-x-8 h-3 rounded-full blur-sm transition-opacity duration-500 pointer-events-none ${
                      isActive ? 'opacity-70' : 'opacity-20 group-hover:opacity-50'
                    }`}
                    style={{ background: stage.accentHex }}
                  />
                </div>

                {/* 2. S-Curve Connector between Card idx and idx+1 */}
                {idx < stages.length - 1 && (
                  <div className="w-12 xl:w-16 h-[175px] flex items-center justify-center relative select-none">
                    <svg 
                      viewBox="0 0 60 175" 
                      fill="none" 
                      className="w-full h-full overflow-visible"
                    >
                      <defs>
                        {/* Dynamic Neon Gradient for each connector */}
                        <linearGradient id={`flowGrad-${idx}`} x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor={stages[idx].accentHex} />
                          <stop offset="100%" stopColor={stages[idx + 1].accentHex} />
                        </linearGradient>

                        <filter id={`neonGlow-${idx}`} x1="-30%" y1="-30%" width="160%" height="160%">
                          <feGaussianBlur stdDeviation="4" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      {/* Smooth S-curve from bottom-left (0, 160) up to middle-right (50, 88) */}
                      {/* Glow Backdrop Path */}
                      <path
                        d="M 0 160 C 26 160, 28 88, 50 88"
                        stroke={`url(#flowGrad-${idx})`}
                        strokeWidth="5"
                        strokeLinecap="round"
                        className={`transition-opacity duration-500 ${
                          activeStep > idx 
                            ? 'opacity-85 filter drop-shadow-[0_0_8px_rgba(43,182,115,0.6)]' 
                            : activeStep === idx 
                            ? 'opacity-70 filter drop-shadow-[0_0_8px_rgba(0,242,254,0.6)]' 
                            : 'opacity-25'
                        }`}
                      />

                      {/* Core Crisp Path */}
                      <path
                        d="M 0 160 C 26 160, 28 88, 50 88"
                        stroke={`url(#flowGrad-${idx})`}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className={`transition-opacity duration-500 ${
                          activeStep >= idx ? 'opacity-100' : 'opacity-35'
                        }`}
                      />

                      {/* Arrowhead '>' pointing right into next card */}
                      <polygon
                        points="46,81 58,88 46,95"
                        fill={stages[idx + 1].accentHex}
                        className={`transition-all duration-500 ${
                          activeStep >= idx 
                            ? 'opacity-100 scale-105' 
                            : 'opacity-40'
                        }`}
                      />

                      {/* Animated Traveling Energy Particle along the active S-Curve */}
                      {activeStep === idx && (
                        <circle r="4" fill="#ffffff" filter="drop-shadow(0 0 6px #ffffff)">
                          <animateMotion
                            path="M 0 160 C 26 160, 28 88, 50 88"
                            dur="1.4s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      )}
                    </svg>
                  </div>
                )}
              </React.Fragment>
            );
          })}

        </div>

        {/* ======================================================== */}
        {/* MOBILE & TABLET FLOW: Vertical Step Progression          */}
        {/* ======================================================== */}
        <div className="flex lg:hidden flex-col gap-4">
          {stages.map((stage, idx) => {
            const isActive = activeStep === idx;
            const isPassed = activeStep > idx;
            const IconComponent = stage.icon;

            return (
              <React.Fragment key={stage.id}>
                <div 
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden flex items-center justify-between cursor-pointer ${
                    isActive 
                      ? `${stage.cardBorder} ${stage.cardBg} shadow-[0_0_25px_${stage.glowColor}]` 
                      : isPassed
                      ? 'border-white/20 bg-white/[0.04]' 
                      : 'border-white/10 bg-white/[0.02] opacity-75'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-950/70 border border-white/15 p-1 shrink-0 relative flex items-center justify-center">
                      <div className={`absolute inset-0 rounded-xl blur-md ${stage.iconAura} ${isActive ? 'opacity-100' : 'opacity-30'}`} />
                      <IconComponent className="relative z-10 w-full h-full" />
                    </div>
                    <div>
                      <span className="font-mono text-[11px] font-bold text-slate-400 block">
                        {stage.num}
                      </span>
                      <h4 className="text-base font-bold text-white">
                        {stage.title}
                      </h4>
                    </div>
                  </div>

                  <div className={`w-3 h-3 rounded-full ${stage.dotColor} ${isActive ? 'ring-4 ring-white/20 animate-pulse' : 'opacity-40'}`} />
                </div>

                {/* Mobile Downward Arrow Connector */}
                {idx < stages.length - 1 && (
                  <div className="flex justify-center -my-1 text-slate-500">
                    <ChevronRight className="w-5 h-5 rotate-90" style={{ color: activeStep >= idx ? stages[idx + 1].accentHex : '#475569' }} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </div>
  );
};
