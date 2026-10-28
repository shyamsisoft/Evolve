import React from 'react';
import { imgUrl } from '../utils/imgUrl';

export const BrandLogo = ({ variant = "full", size = "normal", className = "" }) => {
  const isDark = variant === "dark" || variant === "footer";
  const isProtect = variant === "taxation";

  return (
    <div className={`flex flex-col items-start select-none cursor-pointer group ${className}`}>
      {/* Official Vector SVG Wordmark */}
      <svg
        viewBox="218 168 1101 210"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 sm:h-5.5 w-auto overflow-visible transition-transform duration-200 group-hover:scale-[1.01]"
        aria-label="EVOLVE"
      >
        <defs>
          <linearGradient id="brandLogoBlue" x1="390" y1="215" x2="500" y2="365" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#0A7FA8" />
            <stop offset="0.55" stopColor="#0B6A92" />
            <stop offset="1" stopColor="#123E68" />
          </linearGradient>
          <linearGradient id="brandLogoGreen" x1="500" y1="345" x2="608" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#0A6B63" />
            <stop offset="0.45" stopColor="#2E9871" />
            <stop offset="1" stopColor="#6DBB6E" />
          </linearGradient>
          <linearGradient id="brandLogoFold" x1="490" y1="330" x2="525" y2="350" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#0C5C5E" />
            <stop offset="1" stopColor="#18B0A6" />
          </linearGradient>
        </defs>

        {/* Letters: E, O, L, V, E */}
        <g fill={isDark ? "#ffffff" : "#061a2e"}>
          <rect x="228" y="213" width="131" height="22" rx="2" />
          <rect x="228" y="274" width="131" height="23" rx="2" />
          <rect x="228" y="339" width="131" height="22" rx="2" />
          <path fillRule="evenodd" d="M706.5 205a92.5 81.5 0 1 0 0.01 0Zm0 23.5a60.5 58.5 0 1 1-0.01 0Z" />
          <path d="M838 213h26v126h103v22H838Z" />
          <path d="M959 213h31l64 118 64-118h31l-82 150h-26Z" />
          <rect x="1179" y="213" width="130" height="22" rx="2" />
          <rect x="1179" y="274" width="130" height="23" rx="2" />
          <rect x="1179" y="339" width="130" height="22" rx="2" />
        </g>

        {/* Dynamic Stylized 'V' Ribbon with Upward Arrow */}
        <path fill="url(#brandLogoBlue)" d="M387 213h22c15 0 26 7 33 19L500 333l27 10c-8 14-20 21-34 21s-25-6-31-14Z" />
        <path fill="url(#brandLogoGreen)" d="M486 330L560.7 213h-16L608 178v65l-11-11L523 345c-13 7-29 1-37-15Z" />
        <path fill="url(#brandLogoFold)" d="M489 336c9 13 23 17 34 9l4-2c-10 13-26 15-38-7Z" />
      </svg>

      {/* Subtext 1: Entity Name */}
      <span className={`text-[8.5px] sm:text-[9.5px] font-extrabold tracking-[0.22em] uppercase mt-1 leading-none ${
        isDark ? 'text-slate-200' : 'text-[#061a2e]'
      }`}>
        {isProtect ? 'Taxation & Advisory' : 'Corporate & Business Solutions'}
      </span>

      {/* Subtext 2: Finance | Transformation | Insight */}
      {!isProtect && (
        <span className={`text-[8px] sm:text-[8.5px] font-bold tracking-wider mt-0.5 flex items-center space-x-1.5 leading-none ${
          isDark ? 'text-cyan-300' : 'text-[#007791]'
        }`}>
          <span>Finance</span>
          <span className={isDark ? 'text-slate-500' : 'text-slate-300'}>|</span>
          <span>Transformation</span>
          <span className={isDark ? 'text-slate-500' : 'text-slate-300'}>|</span>
          <span>Insight</span>
        </span>
      )}
    </div>
  );
};

export const PillarIcon = ({ type, className = "w-10 h-10" }) => {
  const iconMap = {
    lead: '/Logo/icon-lead.svg',
    build: '/Logo/icon-build.svg',
    transform: '/Logo/icon-transform.svg',
    protect: '/Logo/icon-protect.svg',
  };

  const src = iconMap[type?.toLowerCase()];
  if (!src) return null;

  return (
    <img
      src={imgUrl(src)}
      alt={type ? type.toUpperCase() : 'Pillar Icon'}
      className={`object-contain inline-block shrink-0 ${className}`}
    />
  );
};
