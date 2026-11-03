import React, { useState, useEffect, useRef } from 'react';
import { PillarIcon } from './BrandLogo';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Workflow, 
  TrendingUp, 
  Layers, 
  Target, 
  DollarSign, 
  PieChart, 
  Activity, 
  AlertTriangle,
  HelpCircle,
  Compass,
  BarChart3,
  Sliders,
  Check,
  Building2,
  Briefcase,
  Users,
  Calendar,
  LineChart,
  GitBranch,
  ShieldAlert,
  Clock,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  FileSearch,
  TrendingDown
} from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';
import { CapabilityNavigatorSection } from './CapabilityNavigatorSection';
import { LeadHero } from './LeadHero';
import { SectionDivider } from './SectionDivider';

export const CFOAdvisoryPage = ({ data = {}, onBack, onOpenContact, onSelectService }) => {
  const [activeTelemetryTab, setActiveTelemetryTab] = useState(0);
  const [cfoFilter, setCfoFilter] = useState('all');

  // Video playback controls for the Strategic Animation Showcase
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVideoMuted, setIsVideoMuted] = useState(true);

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsVideoPlaying(true);
      } else {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  const toggleVideoMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsVideoMuted(videoRef.current.muted);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-cycle through the 3 CFO decision telemetry modes continuously every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTelemetryTab((prev) => (prev >= 2 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [activeTelemetryTab]);

  // 8 Core Questions for "Beyond reporting the numbers"
  const defaultBeyondQuestions = [
    {
      num: "01",
      question: "What is driving our performance?",
      icon: <BarChart3 className="w-5 h-5 text-emerald-400 stroke-[2.3]" />
    },
    {
      num: "02",
      question: "Where are we heading?",
      icon: <Compass className="w-5 h-5 text-teal-300 stroke-[2.3]" />
    },
    {
      num: "03",
      question: "Do we have enough cash?",
      icon: <DollarSign className="w-5 h-5 text-emerald-400 stroke-[2.3]" />
    },
    {
      num: "04",
      question: "What risks are emerging?",
      icon: <AlertTriangle className="w-5 h-5 text-amber-400 stroke-[2.3]" />
    },
    {
      num: "05",
      question: "Can we afford the next investment?",
      icon: <TrendingUp className="w-5 h-5 text-teal-300 stroke-[2.3]" />
    },
    {
      num: "06",
      question: "Which areas are performing?",
      icon: <PieChart className="w-5 h-5 text-emerald-400 stroke-[2.3]" />
    },
    {
      num: "07",
      question: "What happens if our assumptions change?",
      icon: <Sliders className="w-5 h-5 text-teal-300 stroke-[2.3]" />
    },
    {
      num: "08",
      question: "What should management focus on next?",
      icon: <Target className="w-5 h-5 text-emerald-400 stroke-[2.3]" />
    }
  ];

  const beyondQuestions = (data?.beyondQuestions && data.beyondQuestions.length > 0)
    ? data.beyondQuestions.map((q, idx) => ({
        num: q.num || String(idx + 1).padStart(2, '0'),
        question: typeof q === 'string' ? q : q.question,
        icon: defaultBeyondQuestions[idx % defaultBeyondQuestions.length]?.icon
      }))
    : defaultBeyondQuestions;

  // 8 CFO Advisory Services (Exact 100% Fidelity to Source of Truth)
  const defaultCfoServices = [
    {
      id: "strategy",
      title: "Financial Strategy",
      desc: "Translate strategic objectives into practical financial plans.",
      category: "strategy",
      categoryLabel: "Strategy & Capital",
      image: "/images/cfo_advisory.jpg",
      icon: <Target className="w-5 h-5 text-emerald-400 stroke-[2.3]" />
    },
    {
      id: "budgeting",
      title: "Budgeting & Forecasting",
      desc: "Build budgets and rolling forecasts that support decision-making.",
      category: "planning",
      categoryLabel: "Planning & Liquidity",
      image: "/images/cap_module_1.jpg",
      icon: <Calendar className="w-5 h-5 text-teal-300 stroke-[2.3]" />
    },
    {
      id: "cash-flow",
      title: "Cash Flow & Working Capital",
      desc: "Improve visibility and control over liquidity and capital requirements.",
      category: "planning",
      categoryLabel: "Planning & Liquidity",
      image: "/images/cap_module_2.jpg",
      icon: <DollarSign className="w-5 h-5 text-emerald-400 stroke-[2.3]" />
    },
    {
      id: "board-reporting",
      title: "Board & Stakeholder Reporting",
      desc: "Provide clear, insightful financial reporting for leadership and boards.",
      category: "reporting",
      categoryLabel: "Reporting & Governance",
      image: "/images/step_leadership.jpg",
      icon: <Building2 className="w-5 h-5 text-teal-300 stroke-[2.3]" />
    },
    {
      id: "modelling",
      title: "Financial Modelling & Decision Support",
      desc: "Model scenarios, capital investments and commercial opportunities.",
      category: "strategy",
      categoryLabel: "Strategy & Capital",
      image: "/images/finance_transform.jpg",
      icon: <LineChart className="w-5 h-5 text-emerald-400 stroke-[2.3]" />
    },
    {
      id: "governance",
      title: "Governance & Financial Control",
      desc: "Strengthen oversight, financial discipline and internal processes.",
      category: "reporting",
      categoryLabel: "Reporting & Governance",
      image: "/images/cap_module_3.jpg",
      icon: <ShieldCheck className="w-5 h-5 text-teal-300 stroke-[2.3]" />
    },
    {
      id: "interim",
      title: "Interim CFO & Leadership Cover",
      desc: "Provide senior capability during growth, transition or recruitment.",
      category: "partnering",
      categoryLabel: "Performance & Partnering",
      image: "/images/why_experience.jpg",
      icon: <Briefcase className="w-5 h-5 text-emerald-400 stroke-[2.3]" />
    },
    {
      id: "partnering",
      title: "Business Partnering",
      desc: "Connect financial outcomes with operational decisions.",
      category: "partnering",
      categoryLabel: "Performance & Partnering",
      image: "/images/finance_meeting.jpg",
      icon: <Users className="w-5 h-5 text-teal-300 stroke-[2.3]" />
    }
  ];

  const cfoServices = (data?.cfoServices && data.cfoServices.length > 0)
    ? data.cfoServices.map((s, idx) => ({
        ...defaultCfoServices[idx % defaultCfoServices.length],
        ...s,
        icon: defaultCfoServices[idx % defaultCfoServices.length]?.icon
      }))
    : defaultCfoServices;

  // 12 FP&A Capabilities
  const fpaCapabilities = [
    { name: "Planning", tag: "Strategy Alignment", icon: <Target className="w-4.5 h-4.5 stroke-[2.2]" /> },
    { name: "Budgeting", tag: "Resource Allocation", icon: <Calendar className="w-4.5 h-4.5 stroke-[2.2]" /> },
    { name: "Forecasting", tag: "Rolling Outlook", icon: <Compass className="w-4.5 h-4.5 stroke-[2.2]" /> },
    { name: "Scenario analysis", tag: "Risk & Sensitivity", icon: <Sliders className="w-4.5 h-4.5 stroke-[2.2]" /> },
    { name: "Driver-based modelling", tag: "Operational Logic", icon: <GitBranch className="w-4.5 h-4.5 stroke-[2.2]" /> },
    { name: "Management reporting", tag: "Executive Clarity", icon: <BarChart3 className="w-4.5 h-4.5 stroke-[2.2]" /> },
    { name: "Performance analysis", tag: "Variance Forensics", icon: <PieChart className="w-4.5 h-4.5 stroke-[2.2]" /> },
    { name: "KPI frameworks", tag: "Metrics That Matter", icon: <Activity className="w-4.5 h-4.5 stroke-[2.2]" /> },
    { name: "Business partnering", tag: "Cross-Functional", icon: <Users className="w-4.5 h-4.5 stroke-[2.2]" /> },
    { name: "Financial modelling", tag: "Valuation & Capex", icon: <LineChart className="w-4.5 h-4.5 stroke-[2.2]" /> },
    { name: "Planning process improvement", tag: "Cycle Velocity", icon: <Workflow className="w-4.5 h-4.5 stroke-[2.2]" /> },
    { name: "FP&A capability uplift", tag: "Team Upskilling", icon: <TrendingUp className="w-4.5 h-4.5 stroke-[2.2]" /> }
  ];

  // Fractional CFO - Scenarios
  const fractionalScenarios = [
    "The organisation is growing",
    "Financial complexity is increasing",
    "The finance team needs senior support",
    "Forecasting needs improvement",
    "Cash flow is becoming difficult to predict",
    "The organisation is preparing for investment",
    "The board needs stronger financial reporting",
    "Leadership needs an independent financial perspective"
  ];

  // Organisational Triggers ("When should you consider CFO advisory?")
  const defaultTriggerPoints = [
    "Reports tell you what happened but not why.",
    "Cash flow is becoming harder to predict.",
    "Your business is growing faster than your finance function.",
    "Your board wants better financial insight.",
    "You are making significant investment decisions.",
    "Your finance team needs senior-level support.",
    "You want greater confidence in your forecasts."
  ];

  const triggerPoints = (data?.triggerPoints && data.triggerPoints.length > 0)
    ? data.triggerPoints
    : defaultTriggerPoints;

  const triggerIcons = [
    <FileSearch className="w-5 h-5 stroke-[2.3]" />,
    <TrendingDown className="w-5 h-5 stroke-[2.3]" />,
    <TrendingUp className="w-5 h-5 stroke-[2.3]" />,
    <BarChart3 className="w-5 h-5 stroke-[2.3]" />,
    <Target className="w-5 h-5 stroke-[2.3]" />,
    <Users className="w-5 h-5 stroke-[2.3]" />,
    <CheckCircle2 className="w-5 h-5 stroke-[2.3]" />
  ];

  return (
    <div className="pt-20 sm:pt-24 pb-0 bg-[#061a2e] text-white font-['Inter',sans-serif] animate-in fade-in duration-300">
      
      {/* 1. HERO SECTION (EXECUTIVE B2B HERO) */}
      <LeadHero data={data?.hero} onBack={onBack} onOpenContact={onOpenContact} />


      {/* SECTION DIVIDER */}
      <SectionDivider />

      {/* 2. "BEYOND REPORTING THE NUMBERS" SECTION (Left: Content & Questions, Right: Executive Images) */}
      <section className="py-20 sm:py-24 bg-[#061a2e] border-b border-white/10 relative overflow-hidden font-['Inter',sans-serif]">
        
        {/* Soft Radial Glow */}
        <div className="pointer-events-none absolute -top-40 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* LEFT COLUMN: Content & 8 Core Questions (lg:col-span-7) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              
              {/* Header */}
              <div className="space-y-3 mb-6">
                <span className="inline-block text-xs font-bold text-teal-300 uppercase tracking-widest bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-teal-500/30 font-['Plus_Jakarta_Sans',sans-serif]">
                  STRATEGIC DIAGNOSTICS
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight font-['Plus_Jakarta_Sans',sans-serif]">
                  Beyond reporting the numbers
                </h2>
                <p className="text-base sm:text-lg font-semibold text-emerald-300">
                  Effective financial leadership helps answer:
                </p>
              </div>

              {/* 8 Core Questions Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                {beyondQuestions.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white/[0.03] rounded-2xl p-3.5 sm:p-4 border border-white/10 hover:border-emerald-400/50 hover:bg-white/[0.06] shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-3.5 group cursor-default backdrop-blur-md"
                  >
                    {/* Icon & Number Badge */}
                    <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 group-hover:bg-emerald-500/15 group-hover:border-emerald-500/30 flex items-center justify-center shrink-0 transition-colors shadow-xs">
                      {item.icon}
                    </div>

                    <div className="space-y-0.5 flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-slate-400 group-hover:text-emerald-400 transition-colors uppercase tracking-wider font-mono">
                          Question {item.num}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-emerald-400 transition-colors" />
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-teal-200 transition-colors leading-snug">
                        {item.question}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

            </div>


            {/* RIGHT COLUMN: Pure Video Showcase (lg:col-span-5) */}
            <div className="lg:col-span-5 h-full flex flex-col justify-center">
              
              {/* Pure Video Showcase - Seamless border and dark glass wrapper */}
              <div className="relative w-full h-full min-h-[380px] sm:min-h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950/60 border border-white/10 shadow-2xl group flex items-center justify-center backdrop-blur-md">
                
                {/* HTML5 Loop Video */}
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isVideoMuted}
                  playsInline
                  className="w-full h-full object-cover rounded-2xl sm:rounded-3xl opacity-90 group-hover:opacity-100 transition-opacity"
                >
                  <source src={imgUrl("/videos/gemini_generated_video_a22d2ef6.mp4")} type="video/mp4" />
                  Your browser does not support video playback.
                </video>

                {/* Video Controls - Only Appear On Hover */}
                <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                  <button
                    type="button"
                    onClick={toggleVideoPlay}
                    className="w-9 h-9 rounded-full bg-slate-900/80 hover:bg-emerald-500 hover:text-slate-950 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95 border border-white/20"
                    title={isVideoPlaying ? "Pause video" : "Play video"}
                    aria-label={isVideoPlaying ? "Pause video" : "Play video"}
                  >
                    {isVideoPlaying ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4 ml-0.5" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={toggleVideoMute}
                    className="w-9 h-9 rounded-full bg-slate-900/80 hover:bg-emerald-500 hover:text-slate-950 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95 border border-white/20"
                    title={isVideoMuted ? "Unmute audio" : "Mute audio"}
                    aria-label={isVideoMuted ? "Unmute audio" : "Mute audio"}
                  >
                    {isVideoMuted ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* SECTION DIVIDER */}
      <SectionDivider />

      {/* 3. CFO ADVISORY SERVICES */}
      <section className="py-20 sm:py-24 bg-[#061a2e] border-b border-white/10 relative overflow-hidden font-['Inter',sans-serif]">
        
        {/* Soft Radial Ambient Lighting */}
        <div className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-20 w-[450px] h-[450px] bg-teal-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          {/* Main Section Header with Brand Alignment */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-emerald-500/30 font-['Plus_Jakarta_Sans',sans-serif]">
                <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
                <span>PRACTITIONER-LED EXECUTIVE ADVISORY</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.15] font-['Plus_Jakarta_Sans',sans-serif]">
                CFO Advisory Services
              </h2>
              
              <p className="text-base sm:text-lg text-slate-300 font-semibold leading-relaxed">
                We support leaders across:
              </p>
            </div>

            {/* Quick Summary Pill */}
            <div className="hidden lg:flex items-center gap-3 p-3 rounded-2xl bg-white/[0.04] text-white shadow-md border border-white/10 shrink-0 backdrop-blur-md">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm border border-emerald-400/30">
                08
              </div>
              <div className="pr-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Advisory Suite</span>
                <span className="text-xs text-emerald-400 font-mono font-semibold">100% Practitioner-Led</span>
              </div>
            </div>
          </div>


          {/* UI/UX Feature 1: Strategic Category Filter Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white/[0.04] p-2 rounded-2xl border border-white/10 backdrop-blur-md">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {[
                { id: "all", label: "All Services", count: 8 },
                { id: "strategy", label: "Strategy & Capital", count: 2 },
                { id: "planning", label: "Planning & Liquidity", count: 2 },
                { id: "reporting", label: "Reporting & Governance", count: 2 },
                { id: "partnering", label: "Performance & Partnering", count: 2 }
              ].map((filterTab) => {
                const isActive = cfoFilter === filterTab.id;
                return (
                  <button
                    key={filterTab.id}
                    type="button"
                    onClick={() => setCfoFilter(filterTab.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? 'bg-white/[0.1] text-white border border-white/20 shadow-md'
                        : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <span>{filterTab.label}</span>
                    <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-emerald-500 text-slate-950 font-extrabold'
                        : 'bg-white/10 text-slate-300'
                    }`}>
                      {filterTab.count}
                    </span>
                  </button>
                );
              })}
            </div>

            <span className="hidden md:inline-block text-xs font-semibold text-slate-400 px-3">
              Showing {cfoFilter === 'all' ? 'all 8' : cfoServices.filter(s => s.category === cfoFilter).length} capabilities
            </span>
          </div>


          {/* UI/UX Feature 2: High-Impact Visual Editorial Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch">
            {cfoServices
              .filter((svc) => cfoFilter === "all" || svc.category === cfoFilter)
              .map((svc) => {
                const actualIndex = cfoServices.findIndex((s) => s.title === svc.title) + 1;
                return (
                  <div
                    key={svc.title}
                    className="group bg-white/[0.03] rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-500/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between backdrop-blur-md"
                  >
                    <div>
                      {/* Top Media Header with Floating Icon Emblem */}
                      <div className="relative">
                        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950 rounded-t-3xl">
                          <img
                            src={imgUrl(svc.image)}
                            alt={svc.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-75"
                            onError={(e) => {
                              const fallback = imgUrl("/images/cfo_advisory.jpg");
                              if (e.currentTarget.src !== fallback) {
                                e.currentTarget.src = fallback;
                              }
                            }}
                          />
                          
                          {/* Dark Gradient scrim for text contrast */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-[#061a2e]/60 to-transparent" />

                          {/* Category Tag on Top-Left */}
                          <div className="absolute top-3.5 left-3.5">
                            <span className="px-3 py-1 rounded-full bg-[#061a2e]/90 backdrop-blur-md border border-white/20 text-emerald-400 font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5 shadow-sm font-['Plus_Jakarta_Sans',sans-serif]">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                              <span>{svc.categoryLabel}</span>
                            </span>
                          </div>

                          {/* Number Index on Top-Right */}
                          <div className="absolute top-3.5 right-3.5">
                            <span className="w-7 h-7 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-mono font-bold text-xs flex items-center justify-center shadow-sm">
                              0{actualIndex}
                            </span>
                          </div>
                        </div>

                        {/* Floating Icon Emblem */}
                        <div className="absolute -bottom-5 left-6 w-11 h-11 rounded-2xl bg-[#0B2440] shadow-xl border border-white/15 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-white/[0.1] transition-all duration-300 z-20">
                          {svc.icon}
                        </div>
                      </div>

                      {/* Card Content Body */}
                      <div className="p-6 sm:p-7 pt-9 space-y-2.5">
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors tracking-tight leading-snug font-['Plus_Jakarta_Sans',sans-serif]">
                          {svc.title}
                        </h3>
                        
                        <p className="text-sm font-normal text-slate-300 leading-relaxed">
                          {svc.desc}
                        </p>
                      </div>
                    </div>



                  </div>
                );
              })}
          </div>




        </div>
      </section>

      {/* SECTION DIVIDER */}
      <SectionDivider />

      {/* 4. STRATEGIC EXECUTION: FRACTIONAL CFO SUPPORT & FP&A CAPABILITIES */}
      <section className="py-20 sm:py-24 bg-[#061a2e] border-b border-white/10 relative overflow-hidden font-['Inter',sans-serif]">
        
        {/* Soft Radial Ambient Lighting */}
        <div className="pointer-events-none absolute top-10 left-10 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          {/* Main Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-300 uppercase tracking-widest bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-teal-500/30 font-['Plus_Jakarta_Sans',sans-serif]">
              <Target className="w-3.5 h-3.5 text-teal-300" />
              <span>STRATEGIC EXECUTION &amp; SPECIALIST CAPABILITY</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
              FP&amp;A Capability &amp; Flexible Leadership
            </h2>
            
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Tailored high-calibre planning capabilities and senior financial leadership engineered to match your organisation's scale, complexity, and momentum.
            </p>
          </div>

          {/* Two Structured Containers Side-by-Side: Left = FP&A Capabilities, Right = Fractional CFO Support */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* ======================================================== */}
            {/* LEFT CONTAINER: FP&A Capabilities (lg:col-span-6) */}
            {/* ======================================================== */}
            <div className="lg:col-span-6 group bg-white/[0.03] rounded-3xl overflow-hidden border border-white/10 hover:border-teal-400/50 shadow-2xl transition-all duration-500 flex flex-col justify-between backdrop-blur-md">
              
              <div>
                {/* Photo Media Header with Floating Emblem */}
                <div className="relative">
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950 rounded-t-3xl">
                    <img
                      src={imgUrl("/images/why_transformation.jpg")}
                      alt="FP&A Capabilities"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-75"
                      onError={(e) => {
                        const fallback = imgUrl("/images/finance_transform.jpg");
                        if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-[#061a2e]/60 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="px-3 py-1 rounded-full bg-[#061a2e]/90 backdrop-blur-md border border-white/20 text-cyan-300 font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5 shadow-sm font-['Plus_Jakarta_Sans',sans-serif]">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>Specialist FP&amp;A Capability</span>
                      </span>
                    </div>

                    <div className="absolute top-3.5 right-3.5">
                      <span className="px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-mono font-bold text-xs shadow-sm">
                        12 Core Disciplines
                      </span>
                    </div>
                  </div>

                  {/* Overlapping Emblem Icon */}
                  <div className="absolute -bottom-5 left-6 w-11 h-11 rounded-2xl bg-[#0B2440] shadow-xl border border-white/15 flex items-center justify-center text-teal-300 group-hover:scale-110 group-hover:bg-white/[0.1] transition-all duration-300 z-20">
                    <LineChart className="w-5 h-5 stroke-[2.3]" />
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 pt-9 space-y-6">
                  
                  {/* Title & Value Statement */}
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-teal-300 transition-colors tracking-tight leading-snug font-['Plus_Jakarta_Sans',sans-serif]">
                      FP&amp;A Capabilities
                    </h3>
                    <p className="text-sm font-normal text-slate-300 leading-relaxed">
                      For established and larger organisations, we provide specialist FP&amp;A capability across:
                    </p>
                  </div>

                  {/* Enterprise Capability Matrix Header */}
                  <div className="flex items-center justify-between px-3.5 py-2 bg-white/[0.04] rounded-xl border border-white/10">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-['Plus_Jakarta_Sans',sans-serif]">
                      Enterprise Capability Matrix
                    </span>
                    <span className="text-[11px] font-bold text-teal-300 font-mono">
                      Full-Scope FP&amp;A
                    </span>
                  </div>

                  {/* 12 Capabilities in Clean 2-Column Responsive Matrix */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {fpaCapabilities.map((cap, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl bg-white/[0.02] border border-white/10 hover:border-teal-400/40 hover:bg-white/[0.05] transition-all group/item"
                      >
                        <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-300 shrink-0 mt-0.5 group-hover/item:bg-teal-500 group-hover/item:text-slate-950 transition-colors shadow-xs">
                          {cap.icon}
                        </div>

                        <div className="min-w-0 flex-1">
                          <h4 className="text-xs sm:text-[13px] font-bold text-white group-hover/item:text-teal-200 transition-colors leading-tight font-['Plus_Jakarta_Sans',sans-serif]">
                            {cap.name}
                          </h4>
                          <span className="text-[10px] font-normal text-slate-400 block mt-0.5 leading-tight">
                            {cap.tag}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>



            </div>


            {/* ======================================================== */}
            {/* RIGHT CONTAINER: Fractional CFO Support (lg:col-span-6) */}
            {/* ======================================================== */}
            <div className="lg:col-span-6 group bg-white/[0.03] rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-500/50 shadow-2xl transition-all duration-500 flex flex-col justify-between backdrop-blur-md">
              
              <div>
                {/* Photo Media Header with Floating Emblem */}
                <div className="relative">
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950 rounded-t-3xl">
                    <img
                      src={imgUrl("/images/why_flexible.jpg")}
                      alt="Fractional CFO Support"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-75"
                      onError={(e) => {
                        const fallback = imgUrl("/images/cfo_advisory.jpg");
                        if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-[#061a2e]/60 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="px-3 py-1 rounded-full bg-[#061a2e]/90 backdrop-blur-md border border-white/20 text-emerald-400 font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5 shadow-sm font-['Plus_Jakarta_Sans',sans-serif]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>Flexible Engagement Model</span>
                      </span>
                    </div>

                    <div className="absolute top-3.5 right-3.5">
                      <span className="px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-mono font-bold text-xs shadow-sm">
                        Senior Leadership
                      </span>
                    </div>
                  </div>

                  {/* Overlapping Emblem Icon */}
                  <div className="absolute -bottom-5 left-6 w-11 h-11 rounded-2xl bg-[#0B2440] shadow-xl border border-white/15 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-white/[0.1] transition-all duration-300 z-20">
                    <Briefcase className="w-5 h-5 stroke-[2.3]" />
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 pt-9 space-y-6">
                  
                  {/* Title & Value Statement */}
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors tracking-tight leading-snug font-['Plus_Jakarta_Sans',sans-serif]">
                      Fractional CFO Support
                    </h3>
                    <p className="text-sm font-normal text-slate-300 leading-relaxed">
                      A fractional CFO provides senior financial leadership without the commitment of a full-time appointment.
                    </p>
                  </div>

                  {/* Scenarios Header Bar */}
                  <div className="flex items-center justify-between px-3.5 py-2 bg-white/[0.04] rounded-xl border border-white/10">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-['Plus_Jakarta_Sans',sans-serif]">
                      This can be valuable when:
                    </span>
                    <span className="text-[11px] font-bold text-emerald-400 font-mono">
                      8 Key Scenarios
                    </span>
                  </div>

                  {/* 8 Scenarios List */}
                  <div className="space-y-2">
                    {fractionalScenarios.map((scenario, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-white/[0.02] border border-white/10 hover:border-emerald-400/40 hover:bg-white/[0.05] transition-all group/item"
                      >
                        <span className="w-6 h-6 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover/item:bg-emerald-500 group-hover/item:text-slate-950 transition-colors shadow-2xs">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-200 leading-snug group-hover/item:text-white transition-colors">
                          {scenario}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>



            </div>

          </div>

        </div>
      </section>


      {/* SECTION DIVIDER */}
      <SectionDivider />

      {/* 5. "WHEN SHOULD YOU CONSIDER CFO ADVISORY?" */}
      <section className="py-20 sm:py-24 bg-[#061a2e] border-b border-white/10 relative overflow-hidden font-['Inter',sans-serif]">
        {/* Soft Radial Ambient Lighting */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* ======================================================== */}
            {/* LEFT COLUMN: Section Narrative & Executive Visual Anchor (lg:col-span-5) */}
            {/* ======================================================== */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Header */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-amber-500/30 font-['Plus_Jakarta_Sans',sans-serif]">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  <span>ORGANISATIONAL TRIGGERS</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.15] font-['Plus_Jakarta_Sans',sans-serif]">
                  When should you consider CFO advisory?
                </h2>
                
                <p className="text-base sm:text-lg text-slate-300 font-semibold leading-relaxed">
                  You may benefit when:
                </p>
              </div>

              {/* Executive Visual Media Showcase Card */}
              <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-white/10 shadow-2xl group">
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    src={imgUrl("/images/why_experience.jpg")}
                    alt="When to consider CFO advisory"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-75"
                    onError={(e) => {
                      const fallback = imgUrl("/images/cfo_advisory.jpg");
                      if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-[#061a2e]/60 to-transparent" />
                  
                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#061a2e]/90 backdrop-blur-md border border-white/20 text-amber-300 font-bold text-[10px] uppercase tracking-wider flex items-center gap-2 shadow-sm font-['Plus_Jakarta_Sans',sans-serif]">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                      <span>Readiness Diagnostic</span>
                    </span>
                  </div>

                  {/* Bottom Overlay Content */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-amber-400 shadow-sm">
                        <Activity className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 font-bold block leading-none">
                          Strategic Signal Checklist
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-white block mt-1 leading-tight font-['Plus_Jakarta_Sans',sans-serif]">
                          7 Decision Indicators
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>


            {/* ======================================================== */}
            {/* RIGHT COLUMN: 7 Interactive Diagnostic Signal Cards (lg:col-span-7) */}
            {/* ======================================================== */}
            <div className="lg:col-span-7 space-y-2.5">
              {triggerPoints.map((trigger, idx) => (
                <div
                  key={idx}
                  className="group bg-white/[0.03] rounded-2xl p-3.5 sm:p-4 border border-white/10 hover:border-amber-400/50 hover:bg-white/[0.06] shadow-md transition-all duration-300 hover:translate-x-1.5 flex items-center justify-between gap-3.5 cursor-default relative overflow-hidden backdrop-blur-md"
                >
                  {/* Subtle Left Accent Highlight Bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-center gap-3.5 min-w-0 flex-1">
                    {/* Icon Emblem */}
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 shrink-0 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 shadow-2xs">
                      {triggerIcons[idx]}
                    </div>

                    {/* Text Statement */}
                    <p className="text-xs sm:text-[14px] font-bold text-slate-200 group-hover:text-white transition-colors leading-snug">
                      {trigger}
                    </p>
                  </div>

                  {/* Signal Index Badge */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="font-mono text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/[0.06] text-slate-300 border border-white/10 group-hover:bg-amber-500/20 group-hover:text-amber-300 group-hover:border-amber-500/40 transition-colors shadow-2xs">
                      0{idx + 1}
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all hidden sm:block" />
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>


      {/* 7. PRE-FOOTER CALL TO ACTION & CAPABILITY NAVIGATOR */}
      <CapabilityNavigatorSection
        currentPillar="lead"
        onOpenContact={onOpenContact}
        onSelectService={onSelectService}
        onBack={onBack}
      />

    </div>
  );
};
