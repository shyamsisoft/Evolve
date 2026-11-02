import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  TrendingUp, 
  Briefcase, 
  LineChart, 
  Eye, 
  BarChart3, 
  Target, 
  ShieldCheck, 
  Workflow, 
  FileCheck,
  Building2,
  Users2,
  Landmark,
} from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';
import { SectorNavigatorSection } from './SectorNavigatorSection';
import { SectionDivider } from './SectionDivider';
import { PrimaryButton } from './PrimaryButton';
import { OwnerLedToManagementLedFlow } from './OwnerLedToManagementLedFlow';

export const GrowingBusinessesPage = ({ onBack, onOpenContact, onSelectAudience }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 1. Key Solutions (Exact 9 items from Source of Truth)
  const keySolutions = [
    {
      num: "01",
      title: "Fractional CFO",
      desc: "Senior financial leadership tailored to your growth phase.",
      icon: <Briefcase className="w-5 h-5" />,
      image: "/images/solution_fractional_cfo.jpg"
    },
    {
      num: "02",
      title: "Budgeting & Forecasting",
      desc: "Build clear financial planning frameworks and predictive rolling models.",
      icon: <LineChart className="w-5 h-5" />,
      image: "/images/solution_budgeting_forecasting.jpg"
    },
    {
      num: "03",
      title: "Cash Flow Visibility",
      desc: "Gain full transparency over future cash requirements and working capital needs.",
      icon: <Eye className="w-5 h-5" />,
      image: "/images/solution_cash_flow.jpg"
    },
    {
      num: "04",
      title: "Management Reporting",
      desc: "Transform raw operational and financial numbers into decision-ready insights.",
      icon: <BarChart3 className="w-5 h-5" />,
      image: "/images/solution_management_reporting.jpg"
    },
    {
      num: "05",
      title: "Financial Modelling",
      desc: "Model growth scenarios, staffing, pricing, and capital investment requirements.",
      icon: <TrendingUp className="w-5 h-5" />,
      image: "/images/solution_financial_modelling.jpg"
    },
    {
      num: "06",
      title: "KPIs & Performance Frameworks",
      desc: "Identify and track the key operational metrics that drive performance.",
      icon: <Target className="w-5 h-5" />,
      image: "/images/solution_kpi_performance.jpg"
    },
    {
      num: "07",
      title: "Finance Health Checks",
      desc: "Conduct structured reviews across people, processes, systems, and controls.",
      icon: <ShieldCheck className="w-5 h-5" />,
      image: "/images/solution_finance_health_checks.jpg"
    },
    {
      num: "08",
      title: "Process Improvement & Systems",
      desc: "Optimize financial workflows and eliminate manual reporting overhead.",
      icon: <Workflow className="w-5 h-5" />,
      image: "/images/solution_process_systems.jpg"
    },
    {
      num: "09",
      title: "Tax & Compliance",
      desc: "Connect compliance obligations directly into broader finance function operations.",
      icon: <FileCheck className="w-5 h-5" />,
      image: "/images/solution_tax_compliance.jpg"
    }
  ];

  return (
    <div className="pt-20 sm:pt-24 pb-20 bg-[#061a2e] text-white font-['Inter',sans-serif] selection:bg-[#18B0A6] selection:text-[#061a2e] animate-in fade-in duration-300">

      {/* ======================================================== */}
      {/* 1. HERO SECTION (EXACT DESIGN MATCH)                     */}
      {/* ======================================================== */}
      <section className="relative min-h-[64vh] flex items-center bg-[#061a2e] text-white overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-white/10">
        
        {/* Background Artwork with Brand Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={imgUrl("/images/growing_businesses.jpg")}
            alt="Growing Businesses"
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
            <span className="text-white font-bold truncate">Growing Businesses</span>
          </nav>

          {/* Sector Badge Tag: GROWING BUSINESSES */}
          <div className="flex items-center space-x-3.5 pt-1">
            <div className="p-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl flex items-center justify-center">
              <TrendingUp className="w-9 h-9 text-emerald-400" />
            </div>
            <div>
              <span className="inline-block text-[11px] sm:text-xs font-bold tracking-widest text-[#2bb673] uppercase bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-1 rounded-full">
                SECTOR FOCUS: GROWING BUSINESSES
              </span>
            </div>
          </div>

          {/* Main Headline & Value Proposition Narrative */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Growing Business Solutions
            </h1>
            <p className="text-xl sm:text-2xl text-emerald-400 font-bold tracking-tight">
              Financial leadership for organisations ready for their next stage.
            </p>

            <div className="pt-1 space-y-3 max-w-3xl text-slate-200">
              <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-slate-100">
                Growing businesses often reach a point where traditional accounting is no longer enough. Growth creates opportunity, but it also creates financial complexity. As organisations grow, informal processes, spreadsheets, and traditional accounting struggle to keep pace.
              </p>
              <p className="text-sm sm:text-base font-normal leading-relaxed text-slate-300">
                We provide practical finance capability that can grow with your organisation.
              </p>
            </div>
          </div>

          {/* Immediate Call to Action Button */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <PrimaryButton onClick={onOpenContact}>Start a Conversation</PrimaryButton>

            <span className="text-xs sm:text-sm text-slate-300 font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Scalable CFO &amp; Finance Function Architecture
            </span>
          </div>

        </div>
      </section>

      {/* SECTION DIVIDER */}
      <SectionDivider />

      {/* ======================================================== */}
      {/* 2. KEY SOLUTIONS (9 Exact Items)                          */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-24 bg-[#061a2e] text-white border-b border-white/10 relative overflow-hidden">
        {/* Subtle Ambient Lighting */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#007791]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2bb673]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Key Solutions
            </h2>
          </div>

          {/* 3x3 Grid with Bespoke Corporate Imagery */}
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
                        const fallback = imgUrl('/images/growing_businesses.jpg');
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
                    <p className="text-sm font-normal text-slate-300 leading-relaxed">
                      {solution.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION DIVIDER */}
      <SectionDivider />

      {/* ======================================================== */}
      {/* 3. FROM OWNER-LED FINANCE TO MANAGEMENT-LED FINANCE       */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-24 bg-[#061a2e] text-white border-b border-white/10 relative overflow-hidden">
        {/* Subtle Ambient Lighting */}
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#007791]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
              From owner-led finance to management-led finance
            </h2>
            
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              The objective is to help your organisation move from:
            </p>
          </div>

          {/* 4-Stage Connected Progression Flow with Live Animations */}
          <OwnerLedToManagementLedFlow />

        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. STANDARDIZED SECTOR NAVIGATOR                         */}
      {/* ======================================================== */}
      <SectorNavigatorSection
        currentSector="growing-businesses"
        onOpenContact={onOpenContact}
        onSelectAudience={onSelectAudience}
        onBack={onBack}
      />

    </div>
  );
};
