import React, { useState, useEffect } from 'react';
import { 
  LayoutGrid,
  PieChart,
  ArrowRight, 
  ArrowLeft, 
  ArrowDown,
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Layers, 
  Target, 
  BarChart3, 
  Activity, 
  Briefcase, 
  Users, 
  Check, 
  GitBranch, 
  ChevronRight, 
  FileText, 
  Workflow, 
  Compass, 
  Award, 
  Zap, 
  Sliders, 
  Database,
  Clock
} from 'lucide-react';
import { PillarIcon } from './BrandLogo';
import { imgUrl } from '../utils/imgUrl';
import { CapabilityNavigatorSection } from './CapabilityNavigatorSection';
import { BuildHero } from './BuildHero';
import { SectionDivider } from './SectionDivider';

export const BuildPage = ({ data = {}, onBack, onOpenContact, onSelectService }) => {
  const [activeMaturityStage, setActiveMaturityStage] = useState(0);
  const [selectedHealthDim, setSelectedHealthDim] = useState(0);
  const [healthCheckView, setHealthCheckView] = useState('radial');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    // 1. Finance Health Check - 5 Key Dimensions (Exact source of truth copy)
  const defaultHealthCheckDimensions = [
    {
      id: "people",
      num: "01",
      name: "People",
      color: "#6366f1",
      bgLight: "bg-indigo-50 border-indigo-200 text-indigo-700",
      accentBg: "bg-indigo-600",
      accentText: "text-indigo-600",
      icon: <Users className="w-5 h-5 stroke-[2.2]" />,
      items: [
        "Capability",
        "Capacity",
        "Roles and responsibilities",
        "Leadership",
        "Business partnering"
      ]
    },
    {
      id: "processes",
      num: "02",
      name: "Processes",
      color: "#007791",
      bgLight: "bg-teal-50 border-teal-200 text-[#007791]",
      accentBg: "bg-[#007791]",
      accentText: "text-[#007791]",
      icon: <GitBranch className="w-5 h-5 stroke-[2.2]" />,
      items: [
        "Month-end",
        "Procure-to-pay",
        "Order-to-cash",
        "Reconciliations",
        "Reporting",
        "Forecasting"
      ]
    },
    {
      id: "systems",
      num: "03",
      name: "Systems",
      color: "#0ea5e9",
      bgLight: "bg-sky-50 border-sky-200 text-sky-700",
      accentBg: "bg-sky-600",
      accentText: "text-sky-600",
      icon: <Layers className="w-5 h-5 stroke-[2.2]" />,
      items: [
        "ERP utilisation",
        "System configuration",
        "Integration",
        "Automation",
        "Data quality"
      ]
    },
    {
      id: "reporting",
      num: "04",
      name: "Reporting",
      color: "#10b981",
      bgLight: "bg-emerald-50 border-emerald-200 text-emerald-700",
      accentBg: "bg-emerald-600",
      accentText: "text-emerald-600",
      icon: <BarChart3 className="w-5 h-5 stroke-[2.2]" />,
      items: [
        "Management reporting",
        "Board reporting",
        "KPIs",
        "Budget reporting",
        "Forecasting"
      ]
    },
    {
      id: "controls",
      num: "05",
      name: "Controls & Governance",
      color: "#f59e0b",
      bgLight: "bg-amber-50 border-amber-200 text-amber-700",
      accentBg: "bg-amber-600",
      accentText: "text-amber-600",
      icon: <ShieldCheck className="w-5 h-5 stroke-[2.2]" />,
      items: [
        "Financial controls",
        "Reconciliations",
        "Delegations",
        "Compliance",
        "Risk"
      ]
    }
  ];

  const healthCheckDimensions = (data?.healthCheckDimensions && data.healthCheckDimensions.length > 0)
    ? data.healthCheckDimensions.map((dim, idx) => ({
        ...defaultHealthCheckDimensions[idx % defaultHealthCheckDimensions.length],
        ...dim,
        icon: defaultHealthCheckDimensions[idx % defaultHealthCheckDimensions.length]?.icon
      }))
    : defaultHealthCheckDimensions;

  // Polar coordinate helper for Interactive Radial Gauge
  const p2c = (cx, cy, r, deg) => {
    const rad = (deg * Math.PI) / 180.0;
    return {
      x: Number((cx + r * Math.cos(rad)).toFixed(2)),
      y: Number((cy - r * Math.sin(rad)).toFixed(2))
    };
  };

  // Generate annular wedge path
  const makeGaugeArc = (cx, cy, r1, r2, a1, a2) => {
    const p1 = p2c(cx, cy, r2, a1);
    const p2 = p2c(cx, cy, r2, a2);
    const p3 = p2c(cx, cy, r1, a2);
    const p4 = p2c(cx, cy, r1, a1);
    return `M ${p1.x} ${p1.y} A ${r2} ${r2} 0 0 1 ${p2.x} ${p2.y} L ${p3.x} ${p3.y} A ${r1} ${r1} 0 0 0 ${p4.x} ${p4.y} Z`;
  };

  // Radial Gauge Dial geometry (5 sectors spanning 200 degrees: 190° to -10°)
  const gaugeSlices = healthCheckDimensions.map((dim, i) => {
    const cx = 250, cy = 260;
    const r1 = 110, r2 = 180;
    const gap = 3.5;
    const totalSpan = 200;
    const sliceSpan = totalSpan / 5; // 40 degrees per slice
    const a1 = 190 - i * sliceSpan - gap / 2;
    const a2 = 190 - (i + 1) * sliceSpan + gap / 2;
    const mid = (a1 + a2) / 2;
    const normalPath = makeGaugeArc(cx, cy, r1, r2, a1, a2);
    const activePath = makeGaugeArc(cx, cy, r1 - 6, r2 + 10, a1, a2);
    const nodePos = p2c(cx, cy, (r1 + r2) / 2, mid);
    const labelPos = p2c(cx, cy, r2 + 20, mid);

    return {
      index: i,
      a1,
      a2,
      mid,
      normalPath,
      activePath,
      nodePos,
      labelPos
    };
  });

  // 2. Finance Operating Models - 7 Dimensions (Exact source of truth copy)
  const operatingModelDimensions = [
    { name: "People", icon: <Users className="w-4.5 h-4.5 stroke-[2.2]" /> },
    { name: "Processes", icon: <GitBranch className="w-4.5 h-4.5 stroke-[2.2]" /> },
    { name: "Technology", icon: <Layers className="w-4.5 h-4.5 stroke-[2.2]" /> },
    { name: "Data", icon: <Database className="w-4.5 h-4.5 stroke-[2.2]" /> },
    { name: "Governance", icon: <ShieldCheck className="w-4.5 h-4.5 stroke-[2.2]" /> },
    { name: "Service delivery", icon: <Workflow className="w-4.5 h-4.5 stroke-[2.2]" /> },
    { name: "Reporting", icon: <BarChart3 className="w-4.5 h-4.5 stroke-[2.2]" /> }
  ];

  // 3. Target Operating Model Support - 10 Items (Exact source of truth copy)
  const defaultTomSupportItems = [
    "Current-state assessment",
    "Future-state design",
    "Finance organisation design",
    "Roles and responsibilities",
    "Service delivery models",
    "Process ownership",
    "Governance",
    "Technology requirements",
    "Capability requirements",
    "Implementation planning"
  ];

  const tomSupportItems = (data?.tomSupportItems && data.tomSupportItems.length > 0)
    ? data.tomSupportItems
    : defaultTomSupportItems;

  // 4. Finance Capability Uplift - 5 Stages (Exact source of truth copy)
  const capabilityCurve = [
    { 
      num: "01", 
      name: "Processing", 
      color: "#007791", 
      accentBg: "bg-teal-50", 
      accentText: "text-[#007791]",
      icon: <FileText className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#007791] stroke-[2.2]" />
    },
    { 
      num: "02", 
      name: "Reporting", 
      color: "#0ea5e9", 
      accentBg: "bg-sky-50", 
      accentText: "text-[#0ea5e9]",
      icon: <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#0ea5e9] stroke-[2.2]" />
    },
    { 
      num: "03", 
      name: "Analysis", 
      color: "#6366f1", 
      accentBg: "bg-indigo-50", 
      accentText: "text-[#6366f1]",
      icon: <Activity className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#6366f1] stroke-[2.2]" />
    },
    { 
      num: "04", 
      name: "Insight", 
      color: "#10b981", 
      accentBg: "bg-emerald-50", 
      accentText: "text-[#10b981]",
      icon: <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#10b981] stroke-[2.2]" />
    },
    { 
      num: "05", 
      name: "Strategic partnership", 
      color: "#2bb673", 
      accentBg: "bg-emerald-50", 
      accentText: "text-[#2bb673]",
      icon: <Award className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#2bb673] stroke-[2.2]" />
    }
  ];

  // 5. Objective Flow - 4 Stages (Exact source of truth copy)
  const objectiveFlow = [
    { 
      num: "01", 
      label: "Reliable numbers", 
      color: "#007791",
      accentBg: "bg-teal-50",
      icon: <CheckCircle2 className="w-8 h-8 text-[#007791] stroke-[2.2]" /> 
    },
    { 
      num: "02", 
      label: "Efficient processes", 
      color: "#0ea5e9",
      accentBg: "bg-sky-50",
      icon: <Clock className="w-8 h-8 text-[#0ea5e9] stroke-[2.2]" /> 
    },
    { 
      num: "03", 
      label: "Useful insight", 
      color: "#10b981",
      accentBg: "bg-emerald-50",
      icon: <TrendingUp className="w-8 h-8 text-[#10b981] stroke-[2.2]" /> 
    },
    { 
      num: "04", 
      label: "Better decisions", 
      color: "#2bb673",
      accentBg: "bg-emerald-50",
      icon: <Target className="w-8 h-8 text-[#2bb673] stroke-[2.2]" /> 
    }
  ];

  return (
    <div className="pt-20 sm:pt-24 pb-0 bg-[#061a2e] text-white font-['Inter',sans-serif] animate-in fade-in duration-300">
      
      {/* ======================================================== */}
      {/* 1. HERO SECTION (EXECUTIVE B2B HERO)                      */}
      {/* ======================================================== */}
      <BuildHero data={data?.hero} onBack={onBack} onOpenContact={onOpenContact} />


      {/* SECTION DIVIDER */}
      <SectionDivider />

      {/* ======================================================== */}
      {/* 2. FINANCE HEALTH CHECK: INTERACTIVE DIAGNOSTIC CONSOLE    */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-24 bg-[#061a2e] border-b border-white/10 relative overflow-hidden font-['Inter',sans-serif]">
        {/* Soft Radial Ambient Lighting */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Section Header with View Mode Switcher */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-2">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-emerald-500/30 font-['Plus_Jakarta_Sans',sans-serif]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>DIAGNOSTIC FRAMEWORK</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.15] font-['Plus_Jakarta_Sans',sans-serif]">
                Finance Health Check
              </h2>
              
              <p className="text-base sm:text-lg text-slate-300 font-semibold leading-relaxed">
                We assess across five key dimensions:
              </p>
            </div>

            {/* View Mode Switcher Pills */}
            <div className="inline-flex items-center p-1.5 bg-white/[0.04] rounded-2xl border border-white/10 self-start md:self-auto backdrop-blur-md">
              <button
                type="button"
                onClick={() => setHealthCheckView('radial')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                  healthCheckView === 'radial'
                    ? 'bg-white/[0.1] text-white border border-white/20 shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <PieChart className="w-4 h-4 text-emerald-400" />
                <span>Interactive Console</span>
              </button>
              <button
                type="button"
                onClick={() => setHealthCheckView('grid')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                  healthCheckView === 'grid'
                    ? 'bg-white/[0.1] text-white border border-white/20 shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <LayoutGrid className="w-4 h-4 text-emerald-400" />
                <span>All Dimensions at a Glance</span>
              </button>
            </div>
          </div>

          {/* ======================================================== */}
          {/* VIEW OPTION A: INTERACTIVE DIAGNOSTIC CONSOLE (DUAL PANE) */}
          {/* ======================================================== */}
          {healthCheckView === 'radial' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch animate-in fade-in duration-300">
              
              {/* LEFT PANE: The Radial Diagnostic Gauge (col-span-5) */}
              <div className="lg:col-span-5 bg-white/[0.03] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl flex flex-col justify-between items-center relative overflow-hidden backdrop-blur-md">
                
                {/* Console Gauge Header */}
                <div className="w-full flex justify-between items-center pb-2">
                  <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 font-['Plus_Jakarta_Sans',sans-serif]">
                    HEALTH CHECK GAUGE
                  </span>
                  <span
                    className="text-xs font-extrabold px-3 py-1 rounded-full text-white shadow-xs transition-colors duration-300"
                    style={{ backgroundColor: healthCheckDimensions[selectedHealthDim].color }}
                  >
                    Dimension {healthCheckDimensions[selectedHealthDim].num} of 05
                  </span>
                </div>

                {/* SVG Radial Gauge */}
                <div className="w-full max-w-[400px] py-4">
                  <svg viewBox="0 0 500 370" className="w-full h-auto" style={{ overflow: 'visible' }}>
                    <defs>
                      <filter id="dial-shadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#000000" floodOpacity="0.4" />
                      </filter>
                      <filter id="dial-active-glow" x="-30%" y="-30%" width="160%" height="160%">
                        <feDropShadow dx="0" dy="0" stdDeviation="8" floodOpacity="0.35" />
                      </filter>
                      {/* Hatching Patterns */}
                      <pattern id="gauge-hatch-0" width="7" height="7" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="0" x2="0" y2="7" stroke="#6366f1" strokeWidth="2.2" opacity="0.45" />
                      </pattern>
                      <pattern id="gauge-hatch-1" width="7" height="7" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="0" x2="0" y2="7" stroke="#007791" strokeWidth="2.2" opacity="0.45" />
                      </pattern>
                      <pattern id="gauge-hatch-2" width="7" height="7" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="0" x2="0" y2="7" stroke="#0ea5e9" strokeWidth="2.2" opacity="0.45" />
                      </pattern>
                      <pattern id="gauge-hatch-3" width="7" height="7" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="0" x2="0" y2="7" stroke="#10b981" strokeWidth="2.2" opacity="0.45" />
                      </pattern>
                      <pattern id="gauge-hatch-4" width="7" height="7" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="0" x2="0" y2="7" stroke="#f59e0b" strokeWidth="2.2" opacity="0.45" />
                      </pattern>
                    </defs>

                    {/* Outer Guide Track */}
                    <path
                      d="M 68 288 A 185 185 0 0 1 432 288"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />

                    {/* 5 Gauge Arc Sectors */}
                    {gaugeSlices.map((slice) => {
                      const dim = healthCheckDimensions[slice.index];
                      const isSelected = selectedHealthDim === slice.index;

                      return (
                        <g
                          key={dim.id}
                          onClick={() => setSelectedHealthDim(slice.index)}
                          onMouseEnter={() => setSelectedHealthDim(slice.index)}
                          className="cursor-pointer transition-all duration-300"
                        >
                          {/* Arc Sector Wedge */}
                          <path
                            d={isSelected ? slice.activePath : slice.normalPath}
                            fill={dim.color}
                            fillOpacity={isSelected ? 0.35 : 0.08}
                            stroke={dim.color}
                            strokeWidth={isSelected ? 3.5 : 2}
                            filter={isSelected ? "url(#dial-active-glow)" : "none"}
                            className="transition-all duration-300"
                          />

                          {/* Hatching Texture */}
                          <path
                            d={isSelected ? slice.activePath : slice.normalPath}
                            fill={`url(#gauge-hatch-${slice.index})`}
                            className="transition-opacity duration-300 pointer-events-none"
                            opacity={isSelected ? 0.9 : 0.5}
                          />

                          {/* Circular Badge at mid-arc */}
                          <circle
                            cx={slice.nodePos.x}
                            cy={slice.nodePos.y}
                            r={isSelected ? 20 : 17}
                            fill={isSelected ? dim.color : '#061a2e'}
                            stroke={dim.color}
                            strokeWidth={isSelected ? 3.5 : 2.5}
                            filter="url(#dial-shadow)"
                            className="transition-all duration-300"
                          />
                          <text
                            x={slice.nodePos.x}
                            y={slice.nodePos.y + 4.5}
                            textAnchor="middle"
                            fontSize="11"
                            fontWeight="900"
                            fill={isSelected ? '#ffffff' : dim.color}
                            fontFamily="'Plus Jakarta Sans', sans-serif"
                            className="transition-colors duration-300 select-none"
                          >
                            {dim.num}
                          </text>

                          {/* Perimeter Label */}
                          <text
                            x={slice.labelPos.x}
                            y={slice.labelPos.y}
                            textAnchor="middle"
                            fontSize={isSelected ? "13" : "11.5"}
                            fontWeight={isSelected ? "900" : "800"}
                            fill={isSelected ? dim.color : '#94a3b8'}
                            fontFamily="'Plus Jakarta Sans', sans-serif"
                            className="transition-all duration-300 select-none"
                          >
                            {dim.name.split(' ')[0]}
                          </text>
                        </g>
                      );
                    })}

                    {/* CENTER HUB CLIPBOARD EMBLEM */}
                    <g transform="translate(220, 215)" filter="url(#dial-shadow)">
                      <rect
                        x="0"
                        y="0"
                        width="60"
                        height="74"
                        rx="12"
                        fill="#0B2440"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="2.5"
                      />
                      {/* Top Metallic Clip */}
                      <path
                        d="M 16 0 L 16 -6 C 16 -9 20 -11 30 -11 C 40 -11 44 -9 44 -6 L 44 0 Z"
                        fill="#1e3a5f"
                        stroke="rgba(255,255,255,0.3)"
                        strokeWidth="2"
                      />
                      <circle cx="30" cy="-6" r="2.5" fill="#2bb673" />

                      {/* Dollar Symbol & Checkmarks */}
                      <text
                        x="17"
                        y="42"
                        fontSize="24"
                        fontWeight="900"
                        fill="#18B0A6"
                        textAnchor="middle"
                        fontFamily="'Plus Jakarta Sans', sans-serif"
                      >
                        $
                      </text>
                      <rect x="31" y="19" width="14" height="14" rx="3.5" fill="none" stroke="#2bb673" strokeWidth="2.2" />
                      <path d="M 34 26 L 37 29 L 43 22" fill="none" stroke="#2bb673" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      <rect x="31" y="41" width="14" height="14" rx="3.5" fill="none" stroke="#2bb673" strokeWidth="2.2" />
                      <path d="M 34 48 L 37 51 L 43 44" fill="none" stroke="#2bb673" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>

                    {/* Indicator Laser Ray pointing to active dimension */}
                    <line
                      x1="250"
                      y1="210"
                      x2={gaugeSlices[selectedHealthDim].nodePos.x}
                      y2={gaugeSlices[selectedHealthDim].nodePos.y}
                      stroke={healthCheckDimensions[selectedHealthDim].color}
                      strokeWidth="2.5"
                      strokeDasharray="4 4"
                      className="transition-all duration-300"
                    />
                    <circle
                      cx={gaugeSlices[selectedHealthDim].nodePos.x}
                      cy={gaugeSlices[selectedHealthDim].nodePos.y}
                      r="4"
                      fill={healthCheckDimensions[selectedHealthDim].color}
                      className="transition-all duration-300"
                    />

                    {/* Center Dial Typography beneath clipboard */}
                    <text
                      x="250"
                      y="320"
                      textAnchor="middle"
                      fontSize="10"
                      fontWeight="800"
                      fill="#94a3b8"
                      letterSpacing="1.5"
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                    >
                      DIAGNOSTIC HUB
                    </text>
                    <text
                      x="250"
                      y="342"
                      textAnchor="middle"
                      fontSize="15"
                      fontWeight="900"
                      fill="#ffffff"
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                    >
                      {healthCheckDimensions[selectedHealthDim].name} Active
                    </text>
                  </svg>
                </div>

                {/* Dial Quick Switcher Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-1.5 w-full pt-2 border-t border-white/10">
                  {healthCheckDimensions.map((dim, idx) => (
                    <button
                      key={dim.id}
                      type="button"
                      onClick={() => setSelectedHealthDim(idx)}
                      className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        selectedHealthDim === idx
                          ? 'text-white shadow-xs'
                          : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white border border-white/10'
                      }`}
                      style={selectedHealthDim === idx ? { backgroundColor: dim.color } : {}}
                    >
                      {dim.num} {dim.name.split(' ')[0]}
                    </button>
                  ))}
                </div>

              </div>

              {/* RIGHT PANE: Expansive Executive Inspection Panel (col-span-7) */}
              <div className="lg:col-span-7 bg-white/[0.03] rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl flex flex-col justify-between space-y-6 backdrop-blur-md">
                
                <div className="space-y-6">
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md transition-all duration-300"
                        style={{ backgroundColor: healthCheckDimensions[selectedHealthDim].color }}
                      >
                        {healthCheckDimensions[selectedHealthDim].icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className="font-mono text-xs font-black px-2.5 py-0.5 rounded-full text-white"
                            style={{ backgroundColor: healthCheckDimensions[selectedHealthDim].color }}
                          >
                            DIMENSION {healthCheckDimensions[selectedHealthDim].num}
                          </span>
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                            Key Evaluation Dimension
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-4xl font-black text-white font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
                          {healthCheckDimensions[selectedHealthDim].name}
                        </h3>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/30 self-start sm:self-auto">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{healthCheckDimensions[selectedHealthDim].items.length} Evaluated Areas</span>
                    </div>
                  </div>

                  {/* Context Lead from Source of Truth */}
                  <p className="text-sm sm:text-base font-semibold text-slate-300">
                    We assess across five key dimensions:
                  </p>

                  {/* Canonical Items Grid (100% Exact Copy from Source of Truth) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {healthCheckDimensions[selectedHealthDim].items.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.05] transition-all flex items-start gap-3 group"
                      >
                        <div className="w-5 h-5 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform border border-emerald-500/30">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-sm font-semibold text-slate-200 leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Navigation Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => setSelectedHealthDim((prev) => (prev > 0 ? prev - 1 : healthCheckDimensions.length - 1))}
                      className="px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-slate-200 hover:bg-white/[0.08] text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Previous</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedHealthDim((prev) => (prev < healthCheckDimensions.length - 1 ? prev + 1 : 0))}
                      className="px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-slate-200 hover:bg-white/[0.08] text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Next</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          ) : (
            /* ======================================================== */
            /* VIEW OPTION B: ALL 5 DIMENSIONS AT A GLANCE (GRID VIEW)  */
            /* ======================================================== */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6 items-stretch animate-in fade-in duration-300">
              {healthCheckDimensions.map((dim) => (
                <div
                  key={dim.num}
                  className="group bg-white/[0.03] rounded-2xl p-6 border border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.06] shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden backdrop-blur-md"
                >
                  {/* Subtle Top Accent Highlight */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300"
                    style={{ backgroundColor: dim.color }}
                  />

                  <div className="space-y-4">
                    {/* Top Row: Icon & Number Badge */}
                    <div className="flex items-center justify-between">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-white transition-all duration-300 shadow-md"
                        style={{ backgroundColor: dim.color }}
                      >
                        {dim.icon}
                      </div>
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-white/[0.06] text-slate-300 border border-white/10">
                        {dim.num}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug font-['Plus_Jakarta_Sans',sans-serif]">
                        {dim.name}
                      </h3>
                    </div>

                    {/* Bullet Items (Exact words from source of truth) */}
                    <div className="pt-3 border-t border-white/10 space-y-2">
                      {dim.items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3] shrink-0 mt-0.5" />
                          <span className="text-xs font-medium text-slate-300 leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-slate-400 group-hover:text-emerald-400 transition-colors">
                    <span>Dimension {dim.num}</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </section>


      {/* SECTION DIVIDER */}
      <SectionDivider />

      {/* ======================================================== */}
      {/* 3. OPERATING MODELS (TOM) & TOM SUPPORT (TWO SIDE-BY-SIDE CONTAINERS) */}
      {/* ======================================================== */}
      <section id="tom-section" className="py-20 sm:py-24 bg-[#061a2e] border-b border-white/10 relative overflow-hidden">
        {/* Soft Radial Ambient Lighting */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#007791]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2bb673]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Main Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-300 uppercase tracking-widest bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-teal-500/30 font-['Plus_Jakarta_Sans',sans-serif]">
              <Workflow className="w-3.5 h-3.5 text-teal-300" />
              <span>TARGET OPERATING MODEL (TOM)</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.15] font-['Plus_Jakarta_Sans',sans-serif]">
              Finance Operating Models &amp; Target Operating Models (TOM)
            </h2>
          </div>

          {/* ========================================================
              3-COLUMN LAYOUT: Left Card | Center Flow Connector | Right Card
              Clean separation — no overlapping SVGs
              ======================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_80px_1fr] xl:grid-cols-[1fr_96px_1fr] gap-0 items-stretch">

            {/* ======================================================== */}
            {/* LEFT CARD: Finance Operating Models & TOM                */}
            {/* ======================================================== */}
            <div className="group bg-white/[0.03] rounded-3xl lg:rounded-r-none overflow-hidden border border-white/10 border-r-0 lg:border-r-0 hover:border-teal-400/50 shadow-2xl transition-all duration-500 flex flex-col justify-between backdrop-blur-md">
              
              <div>
                {/* Photo Media Header */}
                <div className="relative">
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950 rounded-t-3xl lg:rounded-tr-none">
                    <img
                      src={imgUrl("/images/why_transformation.jpg")}
                      alt="Finance Operating Models"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
                      onError={(e) => {
                        const fallback = imgUrl("/images/approach_design.jpg");
                        if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-[#061a2e]/60 to-transparent" />
                    <div className="absolute top-3.5 left-3.5">
                      <span className="px-3 py-1 rounded-full bg-[#061a2e]/90 backdrop-blur-md border border-white/20 text-cyan-300 font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5 font-['Plus_Jakarta_Sans',sans-serif]">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        Operating Model Design
                      </span>
                    </div>
                    <div className="absolute top-3.5 right-3.5">
                      <span className="px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-mono font-bold text-xs">
                        7 Dimensions
                      </span>
                    </div>
                  </div>
                  <div className="absolute -bottom-5 left-6 w-11 h-11 rounded-2xl bg-[#0B2440] shadow-xl border border-white/15 flex items-center justify-center text-teal-300 group-hover:scale-110 group-hover:bg-white/[0.1] transition-all duration-300 z-20">
                    <Workflow className="w-5 h-5 stroke-[2.3]" />
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-9 space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-teal-300 transition-colors tracking-tight leading-snug font-['Plus_Jakarta_Sans',sans-serif]">
                      Finance Operating Models &amp; Target Operating Models (TOM)
                    </h3>
                    <p className="text-sm font-semibold text-slate-400 leading-relaxed">
                      We help organisations understand and design how finance should operate across:
                    </p>
                  </div>
                  <div className="space-y-2">
                    {operatingModelDimensions.map((dim, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/10 hover:border-teal-400/40 hover:bg-white/[0.05] transition-all group/item"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-300 shrink-0 group-hover/item:bg-teal-500 group-hover/item:text-slate-950 transition-colors">
                            {dim.icon}
                          </div>
                          <span className="text-xs sm:text-sm font-bold text-slate-200 group-hover/item:text-white transition-colors font-['Plus_Jakarta_Sans',sans-serif]">
                            {dim.name}
                          </span>
                        </div>
                        <span className="font-mono text-[11px] font-bold text-slate-400">0{idx + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>


            </div>

            {/* ======================================================== */}
            {/* CENTER FLOW CONNECTOR COLUMN (Desktop only)              */}
            {/* ======================================================== */}
            <div className="hidden lg:flex flex-col items-center justify-center relative" aria-hidden="true">
              {/* Vertical gradient track — full height */}
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-[#007791]/30 via-emerald-500/50 to-teal-500/30" />

              {/* Top anchor: left card outflow */}
              <div className="absolute top-[180px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#007791] border-2 border-white/40 shadow-md ring-4 ring-[#007791]/30" />

              {/* Main central arrow badge */}
              <div className="relative z-10 flex flex-col items-center gap-2">
                {/* "DEFINES" label */}
                <span className="text-[9px] font-black uppercase tracking-widest text-teal-300 font-['Plus_Jakarta_Sans',sans-serif] rotate-[-90deg] whitespace-nowrap mb-1 opacity-80">Framework</span>

                {/* Arrow orb */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#007791] to-[#2bb673] shadow-xl flex items-center justify-center border border-white/20">
                  <ArrowRight className="w-6 h-6 text-white stroke-[3]" />
                </div>

                {/* "DELIVERS" label */}
                <span className="text-[9px] font-black uppercase tracking-widest text-emerald-300 font-['Plus_Jakarta_Sans',sans-serif] rotate-[-90deg] whitespace-nowrap mt-1 opacity-80">Delivers</span>
              </div>

              {/* Bottom anchor: right card inflow */}
              <div className="absolute top-[180px] right-0 translate-x-1/2 -translate-y-1/2" style={{top: 'calc(180px + 1px)'}}>
              </div>
              <div className="absolute top-[calc(180px+1px)] left-1/2 -translate-x-1/2 hidden" />
            </div>

            {/* Mobile downward connector */}
            <div className="flex lg:hidden flex-col items-center py-3 gap-0" aria-hidden="true">
              <div className="w-px h-6 bg-gradient-to-b from-[#007791] to-teal-400" />
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#007791] to-[#2bb673] shadow-lg flex items-center justify-center border border-white/20">
                <ArrowDown className="w-5 h-5 text-white stroke-[3]" />
              </div>
              <div className="w-px h-6 bg-gradient-to-b from-teal-400 to-[#2bb673]" />
            </div>

            {/* ======================================================== */}
            {/* RIGHT CARD: Target Operating Model Support               */}
            {/* ======================================================== */}
            <div className="group bg-white/[0.03] rounded-3xl lg:rounded-l-none overflow-hidden border border-white/10 border-l-0 lg:border-l-0 hover:border-emerald-400/50 shadow-2xl transition-all duration-500 flex flex-col justify-between backdrop-blur-md">
              
              <div>
                {/* Photo Media Header */}
                <div className="relative">
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950 rounded-t-3xl lg:rounded-tl-none">
                    <img
                      src={imgUrl("/images/why_practical.jpg")}
                      alt="Target Operating Model Support"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
                      onError={(e) => {
                        const fallback = imgUrl("/images/finance_build.jpg");
                        if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-[#061a2e]/60 to-transparent" />
                    <div className="absolute top-3.5 left-3.5">
                      <span className="px-3 py-1 rounded-full bg-[#061a2e]/90 backdrop-blur-md border border-white/20 text-emerald-400 font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5 font-['Plus_Jakarta_Sans',sans-serif]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Execution &amp; Delivery
                      </span>
                    </div>
                    <div className="absolute top-3.5 right-3.5">
                      <span className="px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-mono font-bold text-xs">
                        10 Areas
                      </span>
                    </div>
                  </div>
                  <div className="absolute -bottom-5 left-6 w-11 h-11 rounded-2xl bg-[#0B2440] shadow-xl border border-white/15 flex items-center justify-center text-emerald-300 group-hover:scale-110 group-hover:bg-white/[0.1] transition-all duration-300 z-20">
                    <Target className="w-5 h-5 stroke-[2.3]" />
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-9 space-y-5">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors tracking-tight leading-snug font-['Plus_Jakarta_Sans',sans-serif]">
                    Target Operating Model Support
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {tomSupportItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-emerald-400/40 hover:bg-white/[0.05] transition-all group/item"
                      >
                        <span className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover/item:bg-emerald-500 group-hover/item:text-slate-950 transition-colors mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </span>
                        <span className="text-xs font-bold text-slate-200 leading-snug group-hover/item:text-white transition-colors font-['Plus_Jakarta_Sans',sans-serif]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>


            </div>

          </div>{/* end 3-col grid */}

        </div>{/* end space-y-12 */}
      </section>


      {/* SECTION DIVIDER */}
      <SectionDivider />

      {/* ======================================================== */}
      {/* 4. FINANCE CAPABILITY UPLIFT (IMAGE PARITY & CURVE FLOW)  */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-24 bg-[#061a2e] border-b border-white/10 relative overflow-hidden font-['Inter',sans-serif]">
        {/* Soft Radial Ambient Lighting */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.15] font-['Plus_Jakarta_Sans',sans-serif]">
              Finance Capability Uplift
            </h2>
            
            <p className="text-base sm:text-lg text-slate-300 font-semibold leading-relaxed">
              We help finance teams move along the capability curve:
            </p>
          </div>

          {/* ======================================================== */}
          {/* THE 5-STAGE CAPABILITY CURVE DIAGRAM FLOW                */}
          {/* ======================================================== */}
          <div className="bg-white/[0.03] rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl relative overflow-hidden space-y-12 backdrop-blur-md">
            
            {/* Desktop / Large Screens: 5-Node Continuous Flow with Directional Arrows */}
            <div className="hidden lg:flex items-start justify-between gap-2 max-w-5xl mx-auto pt-4 pb-2 relative">
              {capabilityCurve.map((stage, idx) => {
                const isActive = activeMaturityStage === idx;
                const isLast = idx === capabilityCurve.length - 1;

                return (
                  <React.Fragment key={stage.num}>
                    {/* Stage Node */}
                    <div 
                      onClick={() => setActiveMaturityStage(idx)}
                      className={`flex-1 flex flex-col items-center text-center cursor-pointer group transition-all duration-300 relative px-2 ${
                        isActive ? 'scale-105' : 'hover:-translate-y-1'
                      }`}
                    >
                      {/* Circular Icon with Thick Border matching Reference Image */}
                      <div 
                        className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 flex items-center justify-center transition-all duration-300 mb-4 relative ${
                          isActive 
                            ? 'shadow-[0_0_25px_rgba(43,182,115,0.4)] ring-4 ring-offset-2 ring-emerald-400/40 ring-offset-[#061a2e] scale-105' 
                            : 'shadow-md group-hover:shadow-xl group-hover:scale-105'
                        }`}
                        style={{
                          borderColor: stage.color,
                          backgroundColor: '#061a2e'
                        }}
                      >
                        <div className="w-full h-full rounded-full flex items-center justify-center bg-white/[0.04]">
                          {stage.icon}
                        </div>

                        {/* Stage Number Floating Badge */}
                        <div 
                          className="absolute -top-2.5 -right-1 px-2.5 py-0.5 rounded-full text-[11px] font-black text-white shadow-sm font-mono tracking-tight"
                          style={{ backgroundColor: stage.color }}
                        >
                          {stage.num}
                        </div>
                      </div>

                      {/* Stage Name */}
                      <h4 
                        className={`text-base sm:text-lg font-black tracking-tight leading-snug font-['Plus_Jakarta_Sans',sans-serif] transition-colors ${
                          isActive ? 'text-white' : 'text-slate-300 group-hover:text-emerald-300'
                        }`}
                      >
                        {stage.name}
                      </h4>
                    </div>

                    {/* Connecting Directional Arrow between nodes */}
                    {!isLast && (
                      <div className="pt-11 flex items-center justify-center shrink-0 w-10 xl:w-14">
                        <svg className="w-full h-6" viewBox="0 0 40 20" fill="none">
                          <line 
                            x1="0" 
                            y1="10" 
                            x2="28" 
                            y2="10" 
                            stroke={stage.color} 
                            strokeWidth="2.8" 
                            strokeLinecap="round" 
                          />
                          <path 
                            d="M22 3 L32 10 L22 17" 
                            stroke={stage.color} 
                            strokeWidth="2.8" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                          />
                        </svg>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Medium Screens (md only, 768px-1024px): 5 Horizontal Nodes */}
            <div className="hidden md:grid lg:hidden grid-cols-5 gap-3 items-start pt-4">
              {capabilityCurve.map((stage, idx) => {
                const isActive = activeMaturityStage === idx;

                return (
                  <div 
                    key={stage.num}
                    onClick={() => setActiveMaturityStage(idx)}
                    className={`flex flex-col items-center text-center cursor-pointer p-3 rounded-2xl transition-all ${
                      isActive ? 'bg-white/[0.08] shadow-md ring-2 ring-emerald-400' : 'hover:bg-white/[0.04]'
                    }`}
                  >
                    <div 
                      className="w-18 h-18 rounded-full border-3 flex items-center justify-center mb-3 shadow-sm relative"
                      style={{ borderColor: stage.color, backgroundColor: '#061a2e' }}
                    >
                      <div className="w-full h-full rounded-full flex items-center justify-center bg-white/[0.04]">
                        {stage.icon}
                      </div>
                      <span 
                        className="absolute -top-1.5 -right-1 text-[10px] font-black text-white px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: stage.color }}
                      >
                        {stage.num}
                      </span>
                    </div>

                    <h4 className="text-sm font-black text-white leading-snug font-['Plus_Jakarta_Sans',sans-serif]">
                      {stage.name}
                    </h4>
                  </div>
                );
              })}
            </div>

            {/* Mobile View (< md): Clean Vertical Connected Stepper Flow */}
            <div className="block md:hidden space-y-3">
              {capabilityCurve.map((stage, idx) => {
                const isActive = activeMaturityStage === idx;
                const isLast = idx === capabilityCurve.length - 1;

                return (
                  <React.Fragment key={stage.num}>
                    <div 
                      onClick={() => setActiveMaturityStage(idx)}
                      className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center gap-4 ${
                        isActive 
                          ? 'bg-white/[0.08] border-emerald-500 shadow-lg ring-2 ring-emerald-400/20' 
                          : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06]'
                      }`}
                    >
                      {/* Circular Badge */}
                      <div 
                        className="w-14 h-14 rounded-full border-3 shrink-0 flex items-center justify-center shadow-sm relative"
                        style={{ borderColor: stage.color, backgroundColor: '#061a2e' }}
                      >
                        <div className="w-full h-full rounded-full flex items-center justify-center bg-white/[0.04]">
                          {stage.icon}
                        </div>
                        <span 
                          className="absolute -top-1 -right-1 text-[9px] font-black text-white px-1.5 py-0.2 rounded-full"
                          style={{ backgroundColor: stage.color }}
                        >
                          {stage.num}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <span 
                          className="text-[10px] font-mono font-black"
                          style={{ color: stage.color }}
                        >
                          {stage.num}
                        </span>
                        <h4 className="text-base font-black text-white font-['Plus_Jakarta_Sans',sans-serif]">
                          {stage.name}
                        </h4>
                      </div>
                    </div>

                    {/* Downward Arrow between mobile items */}
                    {!isLast && (
                      <div className="flex justify-center py-1">
                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" style={{ color: stage.color }}>
                          <line x1="10" y1="0" x2="10" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                          <path d="M4 9 L10 15 L16 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Stepper Summary Bar */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
              <span className="text-sm sm:text-base font-bold text-emerald-300 font-['Plus_Jakarta_Sans',sans-serif]">
                Processing → Reporting → Analysis → Insight → Strategic partnership
              </span>
            </div>

          </div>

        </div>
      </section>


      {/* SECTION DIVIDER */}
      <SectionDivider />

      {/* ======================================================== */}
      {/* 5. OUTSOURCED AND AUGMENTED FINANCE SUPPORT (EXACT COPY) */}
      {/* ======================================================== */}
      <section id="outsourced-augmented-support" className="py-20 sm:py-24 bg-[#061a2e] border-b border-white/10 relative overflow-hidden">
        {/* Soft Radial Ambient Lighting */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.15] font-['Plus_Jakarta_Sans',sans-serif]">
              Outsourced and Augmented Finance Support
            </h2>
            
            <p className="text-base sm:text-lg text-slate-300 font-semibold leading-relaxed">
              Where organisations need additional capability, we provide flexible support across finance operations, analysis, reporting, and advisory.
            </p>
          </div>

          {/* Main Visual Container */}
          <div className="bg-white/[0.03] rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/10 shadow-2xl space-y-10 backdrop-blur-md">
            
            {/* Lead-in Title */}
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
                The objective is to create a finance function that provides:
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-[#007791] to-[#2bb673] mx-auto mt-3 rounded-full" />
            </div>

            {/* Centered 360 Full Circle Engine (Spacious & Balanced) */}
            <div className="flex flex-col items-center justify-center py-4">
              
              {/* Desktop & Tablet: 360 Full Circle Layout (Nodes orbit cleanly, not connected by lines) */}
              <div className="hidden sm:block relative w-[500px] h-[500px] max-w-full mx-auto">
                
                {/* Concentric Guide Tracks */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
                  <circle cx="250" cy="250" r="210" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
                  <circle cx="250" cy="250" r="155" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2.5" strokeDasharray="6 6" />
                  <circle cx="250" cy="250" r="105" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
                </svg>

                {/* Central Hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-[#061a2e] via-[#092644] to-[#041220] text-white flex flex-col items-center justify-center text-center p-3.5 shadow-2xl border-4 border-[#2bb673] z-10 transition-transform duration-300 hover:scale-105">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2bb673] animate-pulse mb-1 shadow-sm" />
                  <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest font-mono">
                    THE OBJECTIVE
                  </span>
                  <span className="text-sm font-black text-white leading-tight font-['Plus_Jakarta_Sans',sans-serif] mt-0.5">
                    Finance Function
                  </span>
                </div>

                {/* Node 1: Top (12 o'clock) — Label pill positioned cleanly above node */}
                <div className="absolute top-[30px] left-1/2 -translate-x-1/2 flex flex-col items-center text-center z-20 group cursor-pointer hover:scale-105 transition-transform duration-300">
                  <span className="text-xs font-black text-white group-hover:text-cyan-300 mb-2 px-4 py-1.5 rounded-full bg-[#0B2440] border border-white/15 shadow-xl whitespace-nowrap font-['Plus_Jakarta_Sans',sans-serif] transition-colors">
                    {objectiveFlow[0].label}
                  </span>
                  <div 
                    className="w-[72px] h-[72px] rounded-full border-4 flex items-center justify-center shadow-lg relative"
                    style={{ borderColor: objectiveFlow[0].color, backgroundColor: '#061a2e' }}
                  >
                    <div className="w-full h-full rounded-full flex items-center justify-center bg-white/[0.04]">
                      {objectiveFlow[0].icon}
                    </div>
                    <span 
                      className="absolute -top-1 -right-1 text-[9px] font-black text-white px-2 py-0.5 rounded-full font-mono shadow-sm"
                      style={{ backgroundColor: objectiveFlow[0].color }}
                    >
                      01
                    </span>
                  </div>
                </div>

                {/* Node 2: Right (3 o'clock) — Label pill positioned cleanly below node */}
                <div className="absolute top-1/2 right-[20px] -translate-y-1/2 flex flex-col items-center text-center z-20 group cursor-pointer hover:scale-105 transition-transform duration-300">
                  <div 
                    className="w-[72px] h-[72px] rounded-full border-4 flex items-center justify-center shadow-lg relative"
                    style={{ borderColor: objectiveFlow[1].color, backgroundColor: '#061a2e' }}
                  >
                    <div className="w-full h-full rounded-full flex items-center justify-center bg-white/[0.04]">
                      {objectiveFlow[1].icon}
                    </div>
                    <span 
                      className="absolute -top-1 -right-1 text-[9px] font-black text-white px-2 py-0.5 rounded-full font-mono shadow-sm"
                      style={{ backgroundColor: objectiveFlow[1].color }}
                    >
                      02
                    </span>
                  </div>
                  <span className="text-xs font-black text-white group-hover:text-sky-300 mt-2 px-4 py-1.5 rounded-full bg-[#0B2440] border border-white/15 shadow-xl whitespace-nowrap font-['Plus_Jakarta_Sans',sans-serif] transition-colors">
                    {objectiveFlow[1].label}
                  </span>
                </div>

                {/* Node 3: Bottom (6 o'clock) — Label pill positioned cleanly below node */}
                <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 flex flex-col items-center text-center z-20 group cursor-pointer hover:scale-105 transition-transform duration-300">
                  <div 
                    className="w-[72px] h-[72px] rounded-full border-4 flex items-center justify-center shadow-lg relative"
                    style={{ borderColor: objectiveFlow[2].color, backgroundColor: '#061a2e' }}
                  >
                    <div className="w-full h-full rounded-full flex items-center justify-center bg-white/[0.04]">
                      {objectiveFlow[2].icon}
                    </div>
                    <span 
                      className="absolute -top-1 -right-1 text-[9px] font-black text-white px-2 py-0.5 rounded-full font-mono shadow-sm"
                      style={{ backgroundColor: objectiveFlow[2].color }}
                    >
                      03
                    </span>
                  </div>
                  <span className="text-xs font-black text-white group-hover:text-emerald-300 mt-2 px-4 py-1.5 rounded-full bg-[#0B2440] border border-white/15 shadow-xl whitespace-nowrap font-['Plus_Jakarta_Sans',sans-serif] transition-colors">
                    {objectiveFlow[2].label}
                  </span>
                </div>

                {/* Node 4: Left (9 o'clock) — Label pill positioned cleanly below node */}
                <div className="absolute top-1/2 left-[20px] -translate-y-1/2 flex flex-col items-center text-center z-20 group cursor-pointer hover:scale-105 transition-transform duration-300">
                  <div 
                    className="w-[72px] h-[72px] rounded-full border-4 flex items-center justify-center shadow-lg relative"
                    style={{ borderColor: objectiveFlow[3].color, backgroundColor: '#061a2e' }}
                  >
                    <div className="w-full h-full rounded-full flex items-center justify-center bg-white/[0.04]">
                      {objectiveFlow[3].icon}
                    </div>
                    <span 
                      className="absolute -top-1 -right-1 text-[9px] font-black text-white px-2 py-0.5 rounded-full font-mono shadow-sm"
                      style={{ backgroundColor: objectiveFlow[3].color }}
                    >
                      04
                    </span>
                  </div>
                  <span className="text-xs font-black text-white group-hover:text-teal-300 mt-2 px-4 py-1.5 rounded-full bg-[#0B2440] border border-white/15 shadow-xl whitespace-nowrap font-['Plus_Jakarta_Sans',sans-serif] transition-colors">
                    {objectiveFlow[3].label}
                  </span>
                </div>

              </div>

              {/* Mobile View (< sm): 2x2 Responsive Matrix */}
              <div className="grid grid-cols-2 gap-3.5 sm:hidden pt-2 w-full max-w-md mx-auto">
                {objectiveFlow.map((step) => (
                  <div 
                    key={step.num}
                    className="flex flex-col items-center text-center p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 shadow-lg"
                  >
                    <div 
                      className="w-16 h-16 rounded-full border-3 flex items-center justify-center mb-2 shadow-sm relative"
                      style={{ borderColor: step.color, backgroundColor: '#061a2e' }}
                    >
                      <div className="w-full h-full rounded-full flex items-center justify-center bg-white/[0.04]">
                        {step.icon}
                      </div>
                      <span 
                        className="absolute -top-1.5 -right-1 text-[9px] font-black text-white px-1.5 py-0.2 rounded-full font-mono shadow-sm"
                        style={{ backgroundColor: step.color }}
                      >
                        {step.num}
                      </span>
                    </div>
                    <h4 className="text-xs font-black text-white font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
                      {step.label}
                    </h4>
                  </div>
                ))}
              </div>

            </div>

            {/* Bottom Progression Stepper Matrix (UI/UX Segmented Flow) */}
            <div className="pt-8 border-t border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
                {objectiveFlow.map((step) => (
                  <div 
                    key={step.num}
                    className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-emerald-400/40 hover:bg-white/[0.05] transition-all flex items-center gap-3 group cursor-default"
                  >
                    <span 
                      className="w-8 h-8 rounded-xl font-mono font-black text-xs flex items-center justify-center shrink-0 shadow-2xs transition-colors"
                      style={{ 
                        backgroundColor: `${step.color}20`, 
                        color: step.color,
                        borderColor: `${step.color}50`,
                        borderWidth: '1px'
                      }}
                    >
                      {step.num}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-emerald-300 transition-colors leading-snug">
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 6. PRE-FOOTER CALL TO ACTION & CAPABILITY NAVIGATOR */}
      <CapabilityNavigatorSection
        currentPillar="build"
        onOpenContact={onOpenContact}
        onSelectService={onSelectService}
        onBack={onBack}
      />

    </div>
  );
};
