import React from 'react';

/**
 * 01. Looking Backwards Icon
 * 3D Glassmorphic Analogue Clock inside a Magnifying Glass with a counter-clockwise Rewind Arrow.
 */
export const LookingBackwardsIcon = ({ className = "w-full h-full" }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <defs>
      <filter id="glow-cyan-backwards" x="-25%" y="-25%" width="150%" height="150%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
      <linearGradient id="cyanLensGrad" x1="20" y1="20" x2="70" y2="70" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.45" />
        <stop offset="60%" stopColor="#0284c7" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#082f49" stopOpacity="0.7" />
      </linearGradient>
      <linearGradient id="cyanRimGrad" x1="16" y1="16" x2="72" y2="72" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
        <stop offset="35%" stopColor="#38bdf8" />
        <stop offset="70%" stopColor="#00f2fe" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
      <linearGradient id="cyanHandleGrad" x1="62" y1="62" x2="86" y2="86" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="50%" stopColor="#0284c7" />
        <stop offset="100%" stopColor="#0369a1" />
      </linearGradient>
      <linearGradient id="rewindArrowGrad" x1="22" y1="22" x2="62" y2="62" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="60%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#00f2fe" />
      </linearGradient>
    </defs>

    {/* Magnifying Glass Diagonal Handle */}
    <path 
      d="M 63 63 L 83 83" 
      stroke="url(#cyanHandleGrad)" 
      strokeWidth="7" 
      strokeLinecap="round" 
      filter="drop-shadow(0 4px 6px rgba(0,0,0,0.5))" 
    />
    <path 
      d="M 64 64 L 82 82" 
      stroke="#e0f2fe" 
      strokeWidth="2.2" 
      strokeLinecap="round" 
      opacity="0.85" 
    />

    {/* Translucent Glass Lens Body */}
    <circle cx="44" cy="44" r="28" fill="url(#cyanLensGrad)" />
    
    {/* 3D Illuminated Glass Rim */}
    <circle 
      cx="44" 
      cy="44" 
      r="28" 
      stroke="url(#cyanRimGrad)" 
      strokeWidth="3.6" 
      filter="url(#glow-cyan-backwards)" 
    />

    {/* Clock Face: Dial Center Dot */}
    <circle cx="44" cy="44" r="2.8" fill="#ffffff" />

    {/* Clock Hands: Minute at 12, Hour at 9 */}
    <line x1="44" y1="44" x2="44" y2="28" stroke="#ffffff" strokeWidth="2.6" strokeLinecap="round" />
    <line x1="44" y1="44" x2="30" y2="44" stroke="#ffffff" strokeWidth="2.6" strokeLinecap="round" />

    {/* Counter-Clockwise Rewind Arc */}
    <path 
      d="M 59 52 A 20 20 0 1 1 27 34" 
      stroke="url(#rewindArrowGrad)" 
      strokeWidth="3.4" 
      strokeLinecap="round" 
      fill="none" 
    />
    {/* Arrowhead pointing counter-clockwise / rewind */}
    <polygon 
      points="20,34 30,27 29,39" 
      fill="#ffffff" 
      filter="drop-shadow(0 0 4px #00f2fe)" 
    />

    {/* Specular White Gloss Rim (Crescent shine on top-left) */}
    <path 
      d="M 23 41 A 24 24 0 0 1 41 23" 
      stroke="#ffffff" 
      strokeWidth="2.6" 
      strokeLinecap="round" 
      opacity="0.8" 
    />
  </svg>
);

/**
 * 02. Understanding Performance Icon
 * 3D Glassmorphic Clipboard with Top Binder Clip, Exploded Pie Chart, and Ascending Bar Chart.
 */
export const UnderstandingPerformanceIcon = ({ className = "w-full h-full" }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <defs>
      <filter id="glow-teal-perf" x="-25%" y="-25%" width="150%" height="150%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
      <linearGradient id="clipBgGrad" x1="26" y1="18" x2="74" y2="84" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.45" />
        <stop offset="50%" stopColor="#0f766e" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#042f2e" stopOpacity="0.7" />
      </linearGradient>
      <linearGradient id="clipRimGrad" x1="26" y1="18" x2="74" y2="84" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
        <stop offset="30%" stopColor="#2dd4bf" />
        <stop offset="70%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#0d9488" />
      </linearGradient>
      <linearGradient id="clipClampGrad" x1="38" y1="12" x2="62" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#5eead4" />
        <stop offset="100%" stopColor="#0d9488" />
      </linearGradient>
      <linearGradient id="pieSliceMain" x1="40" y1="36" x2="58" y2="52" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#2dd4bf" />
        <stop offset="100%" stopColor="#0f766e" />
      </linearGradient>
      <linearGradient id="pieSliceTop" x1="48" y1="32" x2="62" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#2dd4bf" />
      </linearGradient>
      <linearGradient id="barGradTeal" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="35%" stopColor="#2dd4bf" />
        <stop offset="100%" stopColor="#0d9488" />
      </linearGradient>
    </defs>

    {/* Clipboard Body */}
    <rect 
      x="26" 
      y="20" 
      width="48" 
      height="64" 
      rx="8" 
      fill="url(#clipBgGrad)" 
      stroke="url(#clipRimGrad)" 
      strokeWidth="3.2" 
      filter="url(#glow-teal-perf)" 
    />

    {/* Top Binder Clip */}
    <rect x="38" y="14" width="24" height="11" rx="3.5" fill="url(#clipClampGrad)" stroke="#ffffff" strokeWidth="1.2" />
    <circle cx="50" cy="18" r="2.2" fill="#042f2e" />

    {/* Pie Chart (Top Half) */}
    <g transform="translate(50, 42)">
      {/* Major 75% segment */}
      <path 
        d="M 0 0 L 12 0 A 12 12 0 1 1 0 -12 Z" 
        fill="url(#pieSliceMain)" 
        stroke="#5eead4" 
        strokeWidth="1.2" 
      />
      {/* Exploded 25% segment */}
      <path 
        d="M 2 -2 L 13 -2 A 12 12 0 0 0 2 -13 Z" 
        fill="url(#pieSliceTop)" 
        stroke="#ffffff" 
        strokeWidth="1.2" 
        filter="drop-shadow(0 0 2.5px rgba(255,255,255,0.7))" 
      />
    </g>

    {/* Bar Chart (Bottom Half) */}
    <rect x="35.5" y="66" width="6.5" height="11" rx="2" fill="url(#barGradTeal)" />
    <rect x="46.5" y="61" width="6.5" height="16" rx="2" fill="url(#barGradTeal)" />
    <rect x="57.5" y="55" width="6.5" height="22" rx="2" fill="url(#barGradTeal)" />

    {/* Specular Diagonal Sheen across glass */}
    <path d="M 29 24 L 66 24 L 29 61 Z" fill="white" opacity="0.09" />
  </svg>
);

/**
 * 03. Predicting The Future Icon
 * 3D Glassmorphic Crystal Ball Sphere on a 2-Tier Pedestal with an Upward Trending Growth Arrow.
 */
export const PredictingTheFutureIcon = ({ className = "w-full h-full" }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <defs>
      <filter id="glow-emerald-future" x="-25%" y="-25%" width="150%" height="150%">
        <feGaussianBlur stdDeviation="3.5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
      <radialGradient id="orbRadialGlow" cx="42%" cy="36%" r="58%">
        <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.85" />
        <stop offset="35%" stopColor="#10b981" stopOpacity="0.5" />
        <stop offset="70%" stopColor="#047857" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#022c22" stopOpacity="0.8" />
      </radialGradient>
      <linearGradient id="orbRimGrad" x1="20" y1="12" x2="80" y2="72" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
        <stop offset="30%" stopColor="#6ee7b7" />
        <stop offset="70%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
      <linearGradient id="baseTierGrad" x1="26" y1="70" x2="74" y2="86" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="50%" stopColor="#059669" />
        <stop offset="100%" stopColor="#064e3b" />
      </linearGradient>
      <linearGradient id="growthArrowGrad" x1="30" y1="60" x2="74" y2="20" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="50%" stopColor="#a7f3d0" />
        <stop offset="100%" stopColor="#ffffff" />
      </linearGradient>
    </defs>

    {/* Pedestal Base (Bottom Tier) */}
    <ellipse cx="50" cy="82" rx="24" ry="7" fill="url(#baseTierGrad)" stroke="#34d399" strokeWidth="1.6" />
    {/* Pedestal Collar (Top Tier) */}
    <ellipse cx="50" cy="74" rx="18" ry="5.5" fill="#047857" stroke="#6ee7b7" strokeWidth="2.2" />

    {/* Crystal Ball Sphere */}
    <circle cx="50" cy="44" r="28" fill="url(#orbRadialGlow)" />
    <circle 
      cx="50" 
      cy="44" 
      r="28" 
      stroke="url(#orbRimGrad)" 
      strokeWidth="3.4" 
      filter="url(#glow-emerald-future)" 
    />

    {/* Upward Trending Growth Arrow (Curving up-right) */}
    <path 
      d="M 33 55 C 38 46, 48 38, 64 27" 
      stroke="url(#growthArrowGrad)" 
      strokeWidth="4.6" 
      strokeLinecap="round" 
      fill="none" 
      filter="drop-shadow(0 0 5px rgba(52,211,153,0.85))" 
    />
    {/* Arrowhead */}
    <polygon 
      points="56,23 68,24 66,36" 
      fill="#ffffff" 
      filter="drop-shadow(0 0 4px #34d399)" 
    />

    {/* Specular White Shine on Sphere (Top-Left) */}
    <ellipse cx="38" cy="30" rx="8" ry="4.5" transform="rotate(-35 38 30)" fill="#ffffff" opacity="0.7" />
    <circle cx="44" cy="24" r="2" fill="#ffffff" opacity="0.85" />
  </svg>
);

/**
 * 04. Managing Performance Icon
 * 3D Glassmorphic Performance Dashboard Frame with Speedometer Gauge Needle & 3 Status Checkmarks.
 */
export const ManagingPerformanceIcon = ({ className = "w-full h-full" }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <defs>
      <filter id="glow-green-manage" x="-25%" y="-25%" width="150%" height="150%">
        <feGaussianBlur stdDeviation="3.5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
      <linearGradient id="dashBgGrad" x1="18" y1="16" x2="82" y2="84" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#10b981" stopOpacity="0.45" />
        <stop offset="60%" stopColor="#047857" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#022c22" stopOpacity="0.75" />
      </linearGradient>
      <linearGradient id="dashRimGrad" x1="18" y1="16" x2="82" y2="84" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
        <stop offset="35%" stopColor="#34d399" />
        <stop offset="70%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <linearGradient id="speedoTrackGrad" x1="30" y1="52" x2="70" y2="52" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#064e3b" />
        <stop offset="50%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#6ee7b7" />
      </linearGradient>
      <linearGradient id="speedoNeedleGrad" x1="50" y1="52" x2="64" y2="38" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#6ee7b7" />
      </linearGradient>
    </defs>

    {/* Dashboard Console Body */}
    <rect 
      x="18" 
      y="16" 
      width="64" 
      height="68" 
      rx="10" 
      fill="url(#dashBgGrad)" 
      stroke="url(#dashRimGrad)" 
      strokeWidth="3.2" 
      filter="url(#glow-green-manage)" 
    />

    {/* Header Divider Line */}
    <line x1="18" y1="27" x2="82" y2="27" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

    {/* Header Control Dots */}
    <circle cx="26" cy="21.5" r="1.8" fill="#34d399" />
    <circle cx="31.5" cy="21.5" r="1.8" fill="#34d399" opacity="0.7" />
    <circle cx="37" cy="21.5" r="1.8" fill="#34d399" opacity="0.4" />

    {/* Speedometer Gauge Arc (Top Half) */}
    <path 
      d="M 33 53 A 17 17 0 0 1 67 53" 
      stroke="url(#speedoTrackGrad)" 
      strokeWidth="4" 
      strokeLinecap="round" 
      fill="none" 
    />

    {/* Gauge Tick Marks */}
    <line x1="37" y1="43" x2="39" y2="44.5" stroke="#a7f3d0" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="50" y1="35" x2="50" y2="38" stroke="#a7f3d0" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="63" y1="43" x2="61" y2="44.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />

    {/* Speedometer Needle (Optimal Zone) */}
    <line 
      x1="50" 
      y1="52" 
      x2="63" 
      y2="39" 
      stroke="url(#speedoNeedleGrad)" 
      strokeWidth="2.8" 
      strokeLinecap="round" 
      filter="drop-shadow(0 0 3px #6ee7b7)" 
    />
    <circle cx="50" cy="52" r="3" fill="#ffffff" />

    {/* 3 Status Checkmark Badges (Bottom Row) */}
    <g transform="translate(32, 69)">
      <circle cx="0" cy="0" r="6" fill="#047857" stroke="#34d399" strokeWidth="1.2" />
      <path d="M -2.5 0 L -0.8 1.8 L 2.8 -1.8" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    <g transform="translate(50, 69)">
      <circle cx="0" cy="0" r="6" fill="#047857" stroke="#34d399" strokeWidth="1.2" />
      <path d="M -2.5 0 L -0.8 1.8 L 2.8 -1.8" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    <g transform="translate(68, 69)">
      <circle cx="0" cy="0" r="6" fill="#047857" stroke="#34d399" strokeWidth="1.2" />
      <path d="M -2.5 0 L -0.8 1.8 L 2.8 -1.8" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* Diagonal Specular Sheen */}
    <path d="M 22 28 L 58 28 L 22 64 Z" fill="white" opacity="0.07" />
  </svg>
);
