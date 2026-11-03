import React, { useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Landmark, 
  LineChart, 
  TrendingUp, 
  BarChart3, 
  Server, 
  Workflow, 
  Database, 
  Layers, 
  ShieldCheck, 
  Building2, 
  Users2, 
  Users,
  Cpu,
  FileSpreadsheet
} from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';
import { SectorNavigatorSection } from './SectorNavigatorSection';
import { SectionDivider } from './SectionDivider';
import { PrimaryButton } from './PrimaryButton';

export const LocalGovernmentPage = ({ data = {}, onBack, onOpenContact, onSelectAudience }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 1. Key Solutions (Exact 7 items from Source of Truth)
  const defaultKeySolutions = [
    {
      num: "01",
      title: "Budgeting & Long-Term Financial Planning",
      icon: <LineChart className="w-5 h-5 text-emerald-400" />,
      image: "/images/council_ltfs_budgeting.jpg"
    },
    {
      num: "02",
      title: "FP&A & Financial Modelling",
      icon: <TrendingUp className="w-5 h-5 text-teal-400" />,
      image: "/images/step_numbers.jpg"
    },
    {
      num: "03",
      title: "Forecasting & Management Reporting",
      icon: <BarChart3 className="w-5 h-5 text-cyan-400" />,
      image: "/images/step_insight.jpg"
    },
    {
      num: "04",
      title: "TechnologyOne Optimisation",
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      image: "/images/cap_module_1.jpg"
    },
    {
      num: "05",
      title: "Finance Transformation",
      icon: <Workflow className="w-5 h-5 text-teal-400" />,
      image: "/images/why_transformation.jpg"
    },
    {
      num: "06",
      title: "Data, BI & Reporting Architecture",
      icon: <Database className="w-5 h-5 text-cyan-400" />,
      image: "/images/approach_design.jpg"
    },
    {
      num: "07",
      title: "Process Improvement & Capability Uplift",
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
      image: "/images/approach_deliver.jpg"
    }
  ];

  const keySolutions = (data?.keySolutions && data.keySolutions.length > 0)
    ? data.keySolutions.map((s, idx) => ({
        ...defaultKeySolutions[idx % defaultKeySolutions.length],
        ...(typeof s === 'string' ? { title: s } : s),
        icon: defaultKeySolutions[idx % defaultKeySolutions.length]?.icon,
        image: defaultKeySolutions[idx % defaultKeySolutions.length]?.image
      }))
    : defaultKeySolutions;

  // 2. Council Finance Health Check Dimensions (Exact 6 stages from Source of Truth)
  const defaultHealthCheckStages = [
    { num: "01", name: "People", icon: <Users className="w-5 h-5 text-emerald-400" /> },
    { num: "02", name: "Processes", icon: <Workflow className="w-5 h-5 text-teal-400" /> },
    { num: "03", name: "Systems", icon: <Cpu className="w-5 h-5 text-cyan-400" /> },
    { num: "04", name: "Data", icon: <Database className="w-5 h-5 text-emerald-400" /> },
    { num: "05", name: "Reporting", icon: <BarChart3 className="w-5 h-5 text-teal-400" /> },
    { num: "06", name: "Controls", icon: <ShieldCheck className="w-5 h-5 text-cyan-400" /> }
  ];

  const healthCheckStages = (data?.healthCheckDimensions && data.healthCheckDimensions.length > 0)
    ? data.healthCheckDimensions.map((d, idx) => ({
        ...defaultHealthCheckStages[idx % defaultHealthCheckStages.length],
        ...(typeof d === 'string' ? { name: d } : d),
        icon: defaultHealthCheckStages[idx % defaultHealthCheckStages.length]?.icon
      }))
    : defaultHealthCheckStages;

  return (
    <div className="pt-20 sm:pt-24 pb-20 bg-[#061a2e] text-white font-['Inter',sans-serif] selection:bg-[#18B0A6] selection:text-[#061a2e] animate-in fade-in duration-300">

      {/* ======================================================== */}
      {/* 1. HERO SECTION (EXACT DESIGN MATCH)                     */}
      {/* ======================================================== */}
      <section className="relative min-h-[64vh] flex items-center bg-[#061a2e] text-white overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-white/10">
        
        {/* Background Artwork with Brand Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={imgUrl("/images/local_government.jpg")}
            alt="Local Government / Councils"
            className="w-full h-full object-cover object-center opacity-30 transform scale-105"
            onError={(e) => {
              const fallback = imgUrl("/images/hero_summit.jpg");
              if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061a2e] via-[#061a2e]/95 to-[#007791]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-transparent to-[#061a2e]/70" />
        </div>

        {/* Ambient Radial Lights */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#007791]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#2bb673]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-6 sm:space-y-7">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-slate-300">
            <button 
              type="button"
              onClick={onBack} 
              className="inline-flex items-center space-x-1.5 text-emerald-400 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Who We Help</span>
            </button>
            <span className="text-slate-500">/</span>
            <span className="text-teal-300 font-bold">SECTOR</span>
            <span className="text-slate-500">/</span>
            <span className="text-white font-bold truncate">Local Government</span>
          </nav>

          {/* Sector Badge Tag: LOCAL GOVERNMENT */}
          <div className="flex items-center space-x-3.5 pt-1">
            <div className="p-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl flex items-center justify-center">
              <Landmark className="w-9 h-9 text-emerald-400" />
            </div>
            <div>
              <span className="inline-block text-[11px] sm:text-xs font-bold tracking-widest text-[#2bb673] uppercase bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-1 rounded-full">
                SECTOR FOCUS: LOCAL GOVERNMENT
              </span>
            </div>
          </div>

          {/* Main Headline & Value Proposition Narrative */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Local Government
            </h1>
            <p className="text-xl sm:text-2xl text-emerald-400 font-bold tracking-tight">
              {data?.hero?.tagline || "Better financial insight for better public outcomes."}
            </p>

            <div className="pt-1 space-y-3 max-w-3xl text-slate-200">
              <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-slate-100">
                Local governments manage complex operations, significant capital programs, and diverse community expectations within strict regulatory frameworks.
              </p>
              <p className="text-sm sm:text-base font-normal leading-relaxed text-slate-300">
                Evolve provides specialist financial advisory, FP&A capability, technology optimisation, and finance transformation support designed specifically for local government.
              </p>
            </div>
          </div>

          {/* Immediate Call to Action Button */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <PrimaryButton onClick={onOpenContact}>Start a Conversation</PrimaryButton>

            <span className="text-xs sm:text-sm text-slate-300 font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              LTFS, TechnologyOne Optimisation &amp; Civic Stewardship
            </span>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. KEY SOLUTIONS (Exact 7 items from Document)            */}
      {/* ======================================================== */}
      <SectionDivider />
      <section className="py-20 sm:py-24 bg-[#061a2e] text-white border-b border-white/10 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#007791]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2bb673]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Key Solutions
            </h2>
          </div>

          {/* Solutions Grid with Bespoke Corporate Imagery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {keySolutions.map((solution, idx) => (
              <div 
                key={idx}
                className="rounded-3xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-emerald-500/50 hover:bg-white/[0.06] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Card Media Header with Ambient Scrim */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
                    <img 
                      src={imgUrl(solution.image)}
                      alt={solution.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-70 group-hover:opacity-85"
                      onError={(e) => {
                        const fallback = imgUrl('/images/local_government.jpg');
                        if (e.currentTarget.src !== fallback) {
                          e.currentTarget.src = fallback;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-[#061a2e]/55 to-transparent" />

                    {/* Floating Icon Emblem on Top-Left */}
                    <div className="absolute top-3.5 left-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#061a2e]/90 backdrop-blur-md border border-white/20 text-[#2bb673] flex items-center justify-center group-hover:text-emerald-400 group-hover:border-emerald-500/50 shadow-md transition-colors">
                        {solution.icon}
                      </div>
                    </div>

                    {/* Number Index on Top-Right */}
                    <div className="absolute top-3.5 right-3.5">
                      <span className="px-3 py-1 rounded-full bg-[#061a2e]/90 backdrop-blur-md border border-white/20 font-mono text-xs font-bold text-slate-300">
                        {solution.num}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-7 space-y-2.5">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                      {solution.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. COUNCIL FINANCE HEALTH CHECK                           */}
      {/* ======================================================== */}
      <SectionDivider />
      <section className="py-20 sm:py-24 bg-[#061a2e] text-white border-b border-white/10 relative overflow-hidden">
        {/* Subtle Ambient Lighting */}
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#007791]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Council Finance Health Check
            </h2>
            
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              A structured assessment across: People → Processes → Systems → Data → Reporting → Controls.
            </p>
          </div>

          {/* 6-Stage Connected Sequence / Dimensions */}
          <div className="bg-white/[0.03] backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-sm space-y-8">
            
            {/* Desktop Horizontal Connected Sequence */}
            <div className="hidden lg:grid grid-cols-6 gap-4 relative items-center">
              {healthCheckStages.map((stage, idx) => {
                const isLast = idx === healthCheckStages.length - 1;
                return (
                  <div key={idx} className="relative flex flex-col items-center">
                    <div className="w-full min-h-[110px] p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-emerald-500/50 hover:bg-white/[0.08] hover:shadow-md transition-all text-center flex flex-col justify-between group">
                      <div className="flex items-center justify-between">
                        <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center shadow-2xs">
                          {stage.icon}
                        </div>
                        <span className="font-mono text-xs font-bold text-slate-400">
                          {stage.num}
                        </span>
                      </div>
                      <div className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors leading-tight text-left">
                        {stage.name}
                      </div>
                    </div>

                    {!isLast && (
                      <div className="absolute top-1/2 -right-3 -translate-y-1/2 z-20 pointer-events-none">
                        <div className="w-6 h-6 rounded-full bg-[#0B2440] border border-white/15 shadow-2xs flex items-center justify-center text-emerald-400">
                          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile / Tablet Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:hidden gap-3">
              {healthCheckStages.map((stage, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between text-white"
                >
                  <div className="flex items-center gap-2.5">
                    {stage.icon}
                    <div className="text-sm font-bold text-white">
                      {stage.name}
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    {stage.num}
                  </span>
                </div>
              ))}
            </div>

            {/* Objective Statement */}
            <div className="pt-4 border-t border-white/10 text-center sm:text-left">
              <p className="text-base sm:text-lg font-medium text-emerald-300">
                Objective: Identify practical opportunities to improve efficiency, insight, and financial management.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. STANDARDIZED SECTOR NAVIGATOR & CTA                   */}
      {/* ======================================================== */}
      <SectorNavigatorSection
        currentSector="local-government"
        onOpenContact={onOpenContact}
        onSelectAudience={onSelectAudience}
        onBack={onBack}
      />

    </div>
  );
};
