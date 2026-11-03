import React, { useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Building2, 
  LineChart, 
  Layers, 
  Database, 
  BarChart3, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  Users2, 
  TrendingUp, 
  Landmark, 
  Check
} from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';
import { SectorNavigatorSection } from './SectorNavigatorSection';
import { SectionDivider } from './SectionDivider';
import { PrimaryButton } from './PrimaryButton';

export const EstablishedCorporatePage = ({ data = {}, onBack, onOpenContact, onSelectAudience }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 1. Core Support Areas (Exact 6 items from Source of Truth Table)
  const defaultCoreSupportAreas = [
    {
      num: "01",
      area: "FP&A",
      desc: "Planning, forecasting, modelling, performance analysis, and business partnering.",
      icon: <LineChart className="w-5 h-5 text-emerald-400" />,
      image: "/images/corp_fpa.jpg"
    },
    {
      num: "02",
      area: "Target Operating Models",
      desc: "Current-state assessment, future-state design, organization design, process ownership, service delivery models.",
      icon: <Layers className="w-5 h-5 text-teal-400" />,
      image: "/images/corp_operating_models.jpg"
    },
    {
      num: "03",
      area: "Finance Data",
      desc: "Integration, migration, mapping, data models, reporting datasets.",
      icon: <Database className="w-5 h-5 text-cyan-400" />,
      image: "/images/corp_finance_data.jpg"
    },
    {
      num: "04",
      area: "Reporting Architecture",
      desc: "Management reporting, KPI frameworks, dashboards, Power BI.",
      icon: <BarChart3 className="w-5 h-5 text-emerald-400" />,
      image: "/images/corp_reporting_architecture.jpg"
    },
    {
      num: "05",
      area: "Finance Transformation",
      desc: "ERP, TechnologyOne, automation, process redesign, program delivery.",
      icon: <Cpu className="w-5 h-5 text-teal-400" />,
      image: "/images/corp_transformation.jpg"
    },
    {
      num: "06",
      area: "Finance Function",
      desc: "Health checks, capability uplift, operating models, process improvement.",
      icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
      image: "/images/corp_function_uplift.jpg"
    }
  ];

  // 2. How We Work With You (Exact 6 items from Source of Truth)
  const howWeWorkItems = [
    "Specialist advisors offering independent strategic guidance",
    "Transformation partners guiding complex organizational and systems change",
    "Project resources executing high-value finance workstreams",
    "FP&A capability strengthening planning, modelling, and business insight",
    "Independent reviewers assessing finance health, controls, and architecture",
    "Finance transformation specialists driving process redesign and technology adoption"
  ];

  const coreSupportAreas = (data?.coreSupportAreas && data.coreSupportAreas.length > 0)
    ? data.coreSupportAreas.map((s, idx) => ({
        ...defaultCoreSupportAreas[idx % defaultCoreSupportAreas.length],
        ...s,
        icon: defaultCoreSupportAreas[idx % defaultCoreSupportAreas.length]?.icon
      }))
    : defaultCoreSupportAreas;

  return (
    <div className="pt-20 sm:pt-24 pb-20 bg-[#061a2e] text-white font-['Inter',sans-serif] selection:bg-[#18B0A6] selection:text-[#061a2e] animate-in fade-in duration-300">

      {/* ======================================================== */}
      {/* 1. HERO SECTION (EXACT DESIGN MATCH)                     */}
      {/* ======================================================== */}
      <section className="relative min-h-[64vh] flex items-center bg-[#061a2e] text-white overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-white/10">
        
        {/* Background Artwork with Brand Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={imgUrl("/images/established_corporate.jpg")}
            alt="Established & Corporate Organisations"
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
            <span className="text-white font-bold truncate">Established &amp; Corporate</span>
          </nav>

          {/* Sector Badge Tag: ESTABLISHED & CORPORATE */}
          <div className="flex items-center space-x-3.5 pt-1">
            <div className="p-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl flex items-center justify-center">
              <Building2 className="w-9 h-9 text-emerald-400" />
            </div>
            <div>
              <span className="inline-block text-[11px] sm:text-xs font-bold tracking-widest text-[#2bb673] uppercase bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-1 rounded-full">
                SECTOR FOCUS: ESTABLISHED &amp; CORPORATE
              </span>
            </div>
          </div>

          {/* Main Headline & Value Proposition Narrative */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Established &amp; Corporate Organisations
            </h1>
            <p className="text-xl sm:text-2xl text-emerald-400 font-bold tracking-tight">
              {data?.hero?.tagline || "Specialist finance capability when you need it."}
            </p>

            <div className="pt-1 space-y-3 max-w-3xl text-slate-200">
              <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-slate-100">
                Established organisations often have capable internal finance teams. The challenge isn't always a lack of finance capability; sometimes you need specialist capability for a particular problem, transformation program or period of change.
              </p>
              <p className="text-sm sm:text-base font-normal leading-relaxed text-slate-300">
                We work alongside CFOs, Finance Directors, transformation teams, and operational leaders as an extension of your team.
              </p>
            </div>
          </div>

          {/* Immediate Call to Action Button */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <PrimaryButton onClick={onOpenContact}>Discuss Your Requirement</PrimaryButton>

            <span className="text-xs sm:text-sm text-slate-300 font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Specialist Senior Advisory &amp; Project Execution Support
            </span>
          </div>

        </div>
      </section>

      {/* SECTION DIVIDER */}
      <SectionDivider />

      {/* ======================================================== */}
      {/* 2. CORE SUPPORT AREAS (Exact 6 Areas from Table)          */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-24 bg-[#061a2e] text-white border-b border-white/10 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#007791]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2bb673]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Core Support Areas
            </h2>
          </div>

          {/* 6 Cards Grid representing Capability Area and Description & Focus */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {coreSupportAreas.map((item, idx) => (
              <div 
                key={idx}
                className="rounded-3xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-emerald-500/50 hover:bg-white/[0.06] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Card Media Header with Ambient Scrim */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
                    <img 
                      src={imgUrl(item.image)}
                      alt={item.area}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-70 group-hover:opacity-85"
                      onError={(e) => {
                        const fallback = imgUrl('/images/established_corporate.jpg');
                        if (e.currentTarget.src !== fallback) {
                          e.currentTarget.src = fallback;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-[#061a2e]/55 to-transparent" />

                    {/* Floating Icon Emblem on Top-Left */}
                    <div className="absolute top-3.5 left-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#061a2e]/90 backdrop-blur-md border border-white/20 text-[#2bb673] flex items-center justify-center group-hover:text-emerald-400 group-hover:border-emerald-500/50 shadow-md transition-colors">
                        {item.icon}
                      </div>
                    </div>

                    {/* Number Index on Top-Right */}
                    <div className="absolute top-3.5 right-3.5">
                      <span className="px-3 py-1 rounded-full bg-[#061a2e]/90 backdrop-blur-md border border-white/20 font-mono text-xs font-bold text-slate-300">
                        {item.num}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-7 space-y-2.5">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                      {item.area}
                    </h3>
                    <p className="text-sm font-normal text-slate-300 leading-relaxed">
                      {item.desc}
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
      {/* 3. HOW WE WORK WITH YOU (Exact 6 Integration Modes)       */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-24 bg-[#061a2e] text-white border-b border-white/10 relative overflow-hidden">
        {/* Subtle Ambient Lighting */}
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#007791]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
              How We Work With You
            </h2>
            
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              We flexibly integrate into your leadership structure to provide targeted expertise:
            </p>
          </div>

          {/* 6 Integration Bullet Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {howWeWorkItems.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-emerald-500/50 hover:bg-white/[0.06] shadow-sm hover:shadow-xl transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/10 text-emerald-400 flex items-center justify-center group-hover:bg-[#2bb673] group-hover:text-white transition-colors shrink-0 mt-0.5 shadow-2xs">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>

                <div className="space-y-1">
                  <p className="text-sm sm:text-base font-medium text-slate-200 group-hover:text-white transition-colors leading-snug">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. STANDARDIZED SECTOR NAVIGATOR                         */}
      {/* ======================================================== */}
      <SectorNavigatorSection
        currentSector="established-corporate"
        onOpenContact={onOpenContact}
        onSelectAudience={onSelectAudience}
        onBack={onBack}
      />

    </div>
  );
};
