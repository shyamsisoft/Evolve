import React from 'react';

export const BrandLogo = ({ variant = "full", size = "normal", className = "" }) => {
  const isDark = variant === "dark" || variant === "footer";
  
  return (
    <div className={`flex flex-col items-start select-none cursor-pointer group ${className}`}>
      {/* Top Main Wordmark */}
      <div className="flex items-center space-x-1 sm:space-x-1.5">
        {/* E (Three horizontal bars) */}
        <div className="flex flex-col justify-between h-5 sm:h-6 w-3.5 sm:w-4 my-auto py-[1px]">
          <span className={`h-[2.5px] w-full rounded-full ${isDark ? 'bg-white' : 'bg-[#061a2e]'}`}></span>
          <span className={`h-[2.5px] w-full rounded-full ${isDark ? 'bg-white' : 'bg-[#061a2e]'}`}></span>
          <span className={`h-[2.5px] w-full rounded-full ${isDark ? 'bg-white' : 'bg-[#061a2e]'}`}></span>
        </div>

        {/* Dynamic Stylized 'V' ribbon with Upward Green Arrow */}
        <div className="relative w-6 sm:w-7 h-6 sm:h-7 mx-0.5">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="vRibbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#004d61" />
                <stop offset="50%" stopColor="#007791" />
                <stop offset="100%" stopColor="#2bb673" />
              </linearGradient>
              <linearGradient id="vArrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0a9396" />
                <stop offset="100%" stopColor="#2bb673" />
              </linearGradient>
            </defs>
            {/* Left curved ribbon arm of V */}
            <path
              d="M 6 4 C 6 4, 8 20, 18 34 C 20 37, 24 37, 26 34 L 35 12"
              stroke="url(#vRibbonGrad)"
              strokeWidth="5.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Arrow Tip on top right of V */}
            <polygon
              points="34,4 39,14 26,14"
              fill="url(#vArrowGrad)"
            />
          </svg>
        </div>

        {/* O */}
        <span className={`font-black text-xl sm:text-2xl tracking-tighter ${isDark ? 'text-white' : 'text-[#061a2e]'}`}>
          O
        </span>

        {/* L */}
        <span className={`font-black text-xl sm:text-2xl tracking-tighter ${isDark ? 'text-white' : 'text-[#061a2e]'}`}>
          L
        </span>

        {/* V */}
        <span className={`font-black text-xl sm:text-2xl tracking-tighter ${isDark ? 'text-white' : 'text-[#061a2e]'}`}>
          V
        </span>

        {/* E (Three horizontal bars) */}
        <div className="flex flex-col justify-between h-5 sm:h-6 w-3.5 sm:w-4 my-auto py-[1px]">
          <span className={`h-[2.5px] w-full rounded-full ${isDark ? 'bg-white' : 'bg-[#061a2e]'}`}></span>
          <span className={`h-[2.5px] w-full rounded-full ${isDark ? 'bg-white' : 'bg-[#061a2e]'}`}></span>
          <span className={`h-[2.5px] w-full rounded-full ${isDark ? 'bg-white' : 'bg-[#061a2e]'}`}></span>
        </div>
      </div>

      {/* Subtext 1: CORPORATE & BUSINESS SOLUTIONS */}
      <span className={`text-[9px] sm:text-[10px] font-semibold tracking-[0.22em] uppercase mt-0.5 ${isDark ? 'text-gray-300' : 'text-[#061a2e]'}`}>
        Corporate & Business Solutions
      </span>

      {/* Subtext 2: Finance | Transformation | Insight (if variant === full) */}
      {variant === "full" && (
        <span className="text-[9px] font-medium tracking-wider text-[#007791] mt-0.5 flex items-center space-x-2">
          <span>Finance</span>
          <span className="text-gray-400">|</span>
          <span>Transformation</span>
          <span className="text-gray-400">|</span>
          <span>Insight</span>
        </span>
      )}
    </div>
  );
};

export const PillarIcon = ({ type, className = "w-10 h-10" }) => {
  switch (type) {
    case 'lead':
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 8 L10 32 L26 20 Z" fill="url(#leadGrad)" />
          <path d="M16 12 L28 20 L16 28" stroke="#2bb673" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <defs>
            <linearGradient id="leadGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#061a2e" />
              <stop offset="100%" stopColor="#007791" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'build':
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 8 H20 C26 8 26 18 20 18 H10 Z" fill="#007791" />
          <path d="M10 18 H22 C28 18 28 32 20 32 H10 Z" fill="#2bb673" />
          <path d="M18 12 L24 18 L18 24" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'transform':
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 12 H32 M20 12 V32" stroke="#007791" strokeWidth="4" strokeLinecap="round" />
          <polygon points="20,6 28,14 12,14" fill="#2bb673" />
          <circle cx="20" cy="32" r="3" fill="#2bb673" />
        </svg>
      );
    case 'protect':
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6 C28 6 32 10 32 18 C32 28 20 34 20 34 C20 34 8 28 8 18 C8 10 12 6 20 6 Z" fill="url(#protectGrad)" />
          <path d="M14 18 C14 18 18 26 24 12" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <defs>
            <linearGradient id="protectGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2bb673" />
              <stop offset="100%" stopColor="#007791" />
            </linearGradient>
          </defs>
        </svg>
      );
    default:
      return null;
  }
};
