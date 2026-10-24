import React, { useState, useEffect, useRef } from 'react';
import { PillarIcon } from './BrandLogo';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
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

export const CFOAdvisoryPage = ({ onBack, onOpenContact, onSelectService }) => {
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
  const beyondQuestions = [
    {
      num: "01",
      question: "What is driving our performance?",
      icon: <BarChart3 className="w-5 h-5 text-emerald-600 stroke-[2.3]" />
    },
    {
      num: "02",
      question: "Where are we heading?",
      icon: <Compass className="w-5 h-5 text-teal-600 stroke-[2.3]" />
    },
    {
      num: "03",
      question: "Do we have enough cash?",
      icon: <DollarSign className="w-5 h-5 text-emerald-600 stroke-[2.3]" />
    },
    {
      num: "04",
      question: "What risks are emerging?",
      icon: <AlertTriangle className="w-5 h-5 text-amber-600 stroke-[2.3]" />
    },
    {
      num: "05",
      question: "Can we afford the next investment?",
      icon: <TrendingUp className="w-5 h-5 text-teal-600 stroke-[2.3]" />
    },
    {
      num: "06",
      question: "Which areas are performing?",
      icon: <PieChart className="w-5 h-5 text-emerald-600 stroke-[2.3]" />
    },
    {
      num: "07",
      question: "What happens if our assumptions change?",
      icon: <Sliders className="w-5 h-5 text-teal-600 stroke-[2.3]" />
    },
    {
      num: "08",
      question: "What should management focus on next?",
      icon: <Target className="w-5 h-5 text-emerald-600 stroke-[2.3]" />
    }
  ];

  // 8 CFO Advisory Services
  const cfoServices = [
    {
      id: "strategy",
      title: "Financial Strategy",
      desc: "Translate strategic objectives into practical financial plans.",
      category: "strategy",
      categoryLabel: "Strategy & Capital",
      image: "/images/cfo_advisory.jpg",
      icon: <Target className="w-5 h-5 text-emerald-600 stroke-[2.3]" />
    },
    {
      id: "budgeting",
      title: "Budgeting & Forecasting",
      desc: "Build budgets and rolling forecasts that support decision-making.",
      category: "planning",
      categoryLabel: "Planning & Liquidity",
      image: "/images/cap_module_1.jpg",
      icon: <Calendar className="w-5 h-5 text-[#007791] stroke-[2.3]" />
    },
    {
      id: "cash-flow",
      title: "Cash-Flow Management",
      desc: "Improve visibility over future cash requirements and funding needs.",
      category: "planning",
      categoryLabel: "Planning & Liquidity",
      image: "/images/cap_module_2.jpg",
      icon: <DollarSign className="w-5 h-5 text-emerald-600 stroke-[2.3]" />
    },
    {
      id: "modelling",
      title: "Financial Modelling",
      desc: "Model growth, investment, pricing, staffing, funding and strategic scenarios.",
      category: "strategy",
      categoryLabel: "Strategy & Capital",
      image: "/images/finance_transform.jpg",
      icon: <LineChart className="w-5 h-5 text-[#007791] stroke-[2.3]" />
    },
    {
      id: "mgmt-reporting",
      title: "Management Reporting",
      desc: "Develop reporting that explains performance rather than simply presenting numbers.",
      category: "reporting",
      categoryLabel: "Reporting & Governance",
      image: "/images/cap_module_3.jpg",
      icon: <BarChart3 className="w-5 h-5 text-emerald-600 stroke-[2.3]" />
    },
    {
      id: "kpi",
      title: "KPI & Performance Management",
      desc: "Identify the measures that matter and create reporting around them.",
      category: "partnering",
      categoryLabel: "Performance & Partnering",
      image: "/images/step_insight.jpg",
      icon: <Activity className="w-5 h-5 text-[#007791] stroke-[2.3]" />
    },
    {
      id: "board-reporting",
      title: "Board & Executive Reporting",
      desc: "Provide concise financial information that highlights performance, risk and outlook.",
      category: "reporting",
      categoryLabel: "Reporting & Governance",
      image: "/images/step_leadership.jpg",
      icon: <Building2 className="w-5 h-5 text-emerald-600 stroke-[2.3]" />
    },
    {
      id: "partnering",
      title: "Business Partnering",
      desc: "Connect financial outcomes with operational decisions.",
      category: "partnering",
      categoryLabel: "Performance & Partnering",
      image: "/images/finance_meeting.jpg",
      icon: <Users className="w-5 h-5 text-[#007791] stroke-[2.3]" />
    }
  ];

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
    { name: "Planning process improvement", tag: "Cycle Velocity", icon: <Sparkles className="w-4.5 h-4.5 stroke-[2.2]" /> },
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
  const triggerPoints = [
    "Reports tell you what happened but not why.",
    "Cash flow is becoming harder to predict.",
    "Your business is growing faster than your finance function.",
    "Your board wants better financial insight.",
    "You are making significant investment decisions.",
    "Your finance team needs senior-level support.",
    "You want greater confidence in your forecasts."
  ];

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
    <div className="pt-20 sm:pt-24 pb-20 bg-[#f8fafc] text-slate-800 animate-in fade-in duration-300">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[64vh] flex items-center bg-[#061a2e] text-white overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-slate-800">
        
        {/* Background Artwork with Brand Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={imgUrl("/images/cfo_advisory.jpg")}
            alt="CFO & FP&A Advisory"
            className="w-full h-full object-cover object-center opacity-30 transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061a2e] via-[#061a2e]/95 to-[#007791]/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-transparent to-[#061a2e]/70"></div>
        </div>

        {/* Ambient Radial Lights */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#007791]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#2bb673]/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-6 sm:space-y-7">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-slate-300">
            <button 
              type="button"
              onClick={onBack} 
              className="inline-flex items-center space-x-1.5 text-emerald-400 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>What We Do</span>
            </button>
            <span className="text-slate-500">/</span>
            <span className="text-cyan-300">LEAD</span>
            <span className="text-slate-500">/</span>
            <span className="text-white font-bold truncate">CFO &amp; FP&amp;A Advisory</span>
          </nav>

          {/* Brand Pillar Tag: LEAD */}
          <div className="flex items-center space-x-3.5 pt-1">
            <div className="p-2.5 bg-emerald-500/15 backdrop-blur-md rounded-2xl border border-emerald-400/30 shadow-xl flex items-center justify-center">
              <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 8 L10 32 L26 20 Z" fill="url(#heroLeadGrad)" />
                <path d="M16 12 L28 20 L16 28" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="heroLeadGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#007791" />
                    <stop offset="100%" stopColor="#2bb673" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <span className="inline-block text-[11px] sm:text-xs font-black tracking-widest text-[#2bb673] uppercase bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-1 rounded-full">
                BRAND PILLAR: LEAD
              </span>
            </div>
          </div>

          {/* Main Headline & Value Proposition Narrative */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              CFO &amp; FP&amp;A Advisory
            </h1>
            <p className="text-xl sm:text-2xl text-emerald-400 font-bold tracking-tight">
              Financial leadership when you need it.
            </p>

            <div className="pt-1 space-y-3 max-w-3xl text-slate-200">
              <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-slate-100">
                Organisations don't always need another accountant. Sometimes they need someone who can step back from the numbers, understand the bigger picture and help leadership make better decisions.
              </p>
              <p className="text-sm sm:text-base font-normal leading-relaxed text-slate-300">
                We provide CFO and FP&amp;A capability for organisations that need greater financial clarity, stronger planning or additional senior finance expertise.
              </p>
            </div>
          </div>

          {/* Immediate Call to Action Button */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onOpenContact}
              className="brand-button-gradient text-white text-sm sm:text-base font-extrabold px-8 py-4 rounded-full flex items-center space-x-3 shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer group"
            >
              <span>Start a CFO Conversation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <span className="text-xs sm:text-sm text-slate-300 font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Tailored Executive &amp; Fractional Leadership Engagements
            </span>
          </div>

        </div>
      </section>


      {/* 2. "BEYOND REPORTING THE NUMBERS" SECTION (Left: Content & Questions, Right: Executive Images) */}
      <section className="py-20 bg-[#f8fafc] border-b border-slate-200/80 relative overflow-hidden">
        
        {/* Soft Radial Glow */}
        <div className="pointer-events-none absolute -top-40 right-10 w-96 h-96 bg-cyan-100/60 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-10 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* LEFT COLUMN: Content & 8 Core Questions (lg:col-span-7) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              
              {/* Header */}
              <div className="space-y-2 mb-4">
                <span className="inline-block text-xs font-bold text-[#007791] uppercase tracking-widest bg-cyan-50 px-3.5 py-1 rounded-full border border-cyan-200">
                  STRATEGIC DIAGNOSTICS
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#061a2e] tracking-tight leading-tight">
                  Beyond reporting the numbers
                </h2>
                <p className="text-base sm:text-lg font-bold text-[#007791]">
                  Effective financial leadership helps answer:
                </p>
              </div>

              {/* 8 Core Questions Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                {beyondQuestions.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 hover:border-[#2bb673] shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-3.5 group cursor-default"
                  >
                    {/* Icon & Number Badge */}
                    <div className="w-11 h-11 rounded-xl bg-slate-100/80 border border-slate-200/90 group-hover:bg-emerald-50 group-hover:border-emerald-300 flex items-center justify-center shrink-0 transition-colors shadow-xs">
                      {item.icon}
                    </div>

                    <div className="space-y-0.5 flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black text-slate-400 group-hover:text-emerald-600 transition-colors uppercase tracking-wider">
                          Question {item.num}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-emerald-500 transition-colors" />
                      </div>

                      <h3 className="text-sm sm:text-base font-extrabold text-[#061a2e] group-hover:text-[#007791] transition-colors leading-snug">
                        {item.question}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

            </div>


            {/* RIGHT COLUMN: Pure Video Showcase (lg:col-span-5) */}
            <div className="lg:col-span-5 h-full flex flex-col">
              
              {/* Pure Video Showcase - Seamless with section background, zero border */}
              <div className="relative w-full h-full min-h-[380px] sm:min-h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden bg-transparent group flex items-center justify-center">
                
                {/* HTML5 Loop Video - Full original fidelity & colors */}
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isVideoMuted}
                  playsInline
                  className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
                >
                  <source src={imgUrl("/videos/gemini_generated_video_a22d2ef6.mp4")} type="video/mp4" />
                  Your browser does not support video playback.
                </video>

                {/* Video Controls - Only Appear On Hover */}
                <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                  <button
                    type="button"
                    onClick={toggleVideoPlay}
                    className="w-9 h-9 rounded-full bg-slate-900/75 hover:bg-[#007791] text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
                    title={isVideoPlaying ? "Pause video" : "Play video"}
                    aria-label={isVideoPlaying ? "Pause video" : "Play video"}
                  >
                    {isVideoPlaying ? (
                      <Pause className="w-4 h-4 text-white" />
                    ) : (
                      <Play className="w-4 h-4 text-white ml-0.5" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={toggleVideoMute}
                    className="w-9 h-9 rounded-full bg-slate-900/75 hover:bg-[#007791] text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
                    title={isVideoMuted ? "Unmute audio" : "Mute audio"}
                    aria-label={isVideoMuted ? "Unmute audio" : "Mute audio"}
                  >
                    {isVideoMuted ? (
                      <VolumeX className="w-4 h-4 text-white" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-white" />
                    )}
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* 4. CFO ADVISORY SERVICES - UX/UI SPECIALIST REDESIGN */}
      <section className="py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
        
        {/* Soft Radial Ambient Lighting */}
        <div className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] bg-emerald-50/70 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-20 w-[450px] h-[450px] bg-cyan-50/60 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          {/* Main Section Header with Brand Alignment */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-200/90 pb-8">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>PRACTITIONER-LED EXECUTIVE ADVISORY</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061a2e] tracking-tight">
                CFO Advisory Services
              </h2>
              
              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                We support enterprise and growth leaders across <strong className="text-[#061a2e] font-bold">8 specialized advisory disciplines</strong> — turning complex numbers into decisive strategic momentum.
              </p>
            </div>

            {/* Quick Summary Pill */}
            <div className="hidden lg:flex items-center gap-3 p-3 rounded-2xl bg-[#061a2e] text-white shadow-md border border-slate-800 shrink-0">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm border border-emerald-400/30">
                08
              </div>
              <div className="pr-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block">Advisory Suite</span>
                <span className="text-xs text-emerald-400 font-mono font-semibold">100% Practitioner-Led</span>
              </div>
            </div>
          </div>


          {/* UI/UX Feature 1: Strategic Category Filter Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 p-2 rounded-2xl border border-slate-200">
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
                        ? 'bg-[#061a2e] text-white shadow-md scale-[1.02]'
                        : 'text-slate-600 hover:text-[#061a2e] hover:bg-white'
                    }`}
                  >
                    <span>{filterTab.label}</span>
                    <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-emerald-500 text-white'
                        : 'bg-slate-200/80 text-slate-600'
                    }`}>
                      {filterTab.count}
                    </span>
                  </button>
                );
              })}
            </div>

            <span className="hidden md:inline-block text-xs font-semibold text-slate-500 px-3">
              Showing {cfoFilter === 'all' ? 'all 8' : cfoServices.filter(s => s.category === cfoFilter).length} capabilities
            </span>
          </div>


          {/* UI/UX Feature 2: High-Impact Visual Editorial Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch">
            {cfoServices
              .filter((svc) => cfoFilter === "all" || svc.category === cfoFilter)
              .map((svc, idx) => {
                const actualIndex = cfoServices.findIndex((s) => s.title === svc.title) + 1;
                return (
                  <div
                    key={svc.title}
                    className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-emerald-500 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Media Header with Floating Icon Emblem */}
                      <div className="relative">
                        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900 rounded-t-3xl">
                          <img
                            src={imgUrl(svc.image)}
                            alt={svc.title}
                            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                            onError={(e) => {
                              const fallback = imgUrl("/images/cfo_advisory.jpg");
                              if (e.currentTarget.src !== fallback) {
                                e.currentTarget.src = fallback;
                              }
                            }}
                          />
                          
                          {/* Dark Gradient scrim for text contrast */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-[#061a2e]/35 to-transparent" />

                          {/* Category Tag on Top-Left */}
                          <div className="absolute top-3.5 left-3.5">
                            <span className="px-3 py-1 rounded-full bg-[#061a2e]/85 backdrop-blur-md border border-white/20 text-emerald-400 font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
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

                        {/* Floating Icon Emblem - Placed outside overflow-hidden for 100% full visibility */}
                        <div className="absolute -bottom-5 left-6 w-11 h-11 rounded-2xl bg-white shadow-xl border border-slate-100 flex items-center justify-center text-emerald-700 group-hover:scale-110 group-hover:bg-[#061a2e] group-hover:text-emerald-400 transition-all duration-300 z-20">
                          {svc.icon}
                        </div>
                      </div>

                      {/* Card Content Body */}
                      <div className="p-6 sm:p-7 pt-9 space-y-2.5">
                        <h3 className="text-lg sm:text-xl font-black text-[#061a2e] group-hover:text-emerald-700 transition-colors tracking-tight leading-snug">
                          {svc.title}
                        </h3>
                        
                        <p className="text-sm font-semibold text-slate-600 leading-relaxed">
                          {svc.desc}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer: Interactive Consultation Trigger */}
                    <div className="p-6 pt-3 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={onOpenContact}
                        className="w-full text-xs font-bold text-slate-700 group-hover:text-emerald-700 flex items-center justify-between py-1 transition-colors cursor-pointer"
                      >
                        <span className="font-extrabold">Inquire About This Service</span>
                        <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-all group-hover:translate-x-1">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </button>
                    </div>

                  </div>
                );
              })}
          </div>


          {/* UI/UX Feature 3: Executive Value Proposition Ribbon */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#061a2e] via-[#0b2847] to-[#061a2e] text-white border border-slate-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center lg:text-left">
              <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">
                Tailored Advisory Architecture
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                Need multi-disciplinary CFO capability across several areas?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                We combine strategy, liquidity telemetry, and board governance into a single flexible engagement.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenContact}
              className="w-full sm:w-auto brand-button-gradient text-white text-xs sm:text-sm font-extrabold px-6 py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all cursor-pointer shrink-0"
            >
              <span>Discuss Your Advisory Scope</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 5. STRATEGIC EXECUTION: FRACTIONAL CFO SUPPORT (LEFT) & FP&A CAPABILITIES (RIGHT) - UI/UX SPECIALIST REDESIGN */}
      <section className="py-24 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#f8fafc] border-b border-slate-200/80 relative overflow-hidden">
        
        {/* Soft Radial Ambient Lighting */}
        <div className="pointer-events-none absolute top-10 left-10 w-[500px] h-[500px] bg-teal-100/50 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          {/* Main Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>STRATEGIC EXECUTION &amp; SPECIALIST CAPABILITY</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061a2e] tracking-tight">
              FP&amp;A Capability &amp; Flexible Leadership
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              Tailored high-calibre planning capabilities and senior financial leadership engineered to match your organisation's scale, complexity, and momentum.
            </p>
          </div>

          {/* Two Structured Containers Side-by-Side: Left = FP&A Capabilities, Right = Fractional CFO Support */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* ======================================================== */}
            {/* LEFT CONTAINER: FP&A Capabilities (lg:col-span-6) */}
            {/* ======================================================== */}
            <div className="lg:col-span-6 group bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-[#007791] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
              
              <div>
                {/* Photo Media Header with Floating Emblem */}
                <div className="relative">
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900 rounded-t-3xl">
                    <img
                      src={imgUrl("/images/why_transformation.jpg")}
                      alt="FP&A Capabilities"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                      onError={(e) => {
                        const fallback = imgUrl("/images/finance_transform.jpg");
                        if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-[#061a2e]/35 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="px-3 py-1 rounded-full bg-[#061a2e]/85 backdrop-blur-md border border-white/20 text-cyan-300 font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
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

                  {/* Overlapping Emblem Icon - OUTSIDE overflow-hidden for 100% full visibility */}
                  <div className="absolute -bottom-5 left-6 w-11 h-11 rounded-2xl bg-white shadow-xl border border-slate-100 flex items-center justify-center text-[#007791] group-hover:scale-110 group-hover:bg-[#061a2e] group-hover:text-cyan-400 transition-all duration-300 z-20">
                    <LineChart className="w-5 h-5 stroke-[2.3]" />
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 pt-9 space-y-6">
                  
                  {/* Title & Value Statement */}
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-black text-[#061a2e] group-hover:text-[#007791] transition-colors tracking-tight leading-snug">
                      FP&amp;A Capabilities
                    </h3>
                    <p className="text-sm font-semibold text-slate-600 leading-relaxed">
                      For established and larger organisations, we provide specialist FP&amp;A capability across:
                    </p>
                  </div>

                  {/* Enterprise Capability Matrix Header */}
                  <div className="flex items-center justify-between px-3.5 py-2 bg-slate-50 rounded-xl border border-slate-200/80">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Enterprise Capability Matrix
                    </span>
                    <span className="text-[11px] font-bold text-[#007791] font-mono">
                      Full-Scope FP&amp;A
                    </span>
                  </div>

                  {/* 12 Capabilities in Clean 2-Column Responsive Matrix (NO TRUNCATION!) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {fpaCapabilities.map((cap, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-cyan-400 hover:bg-cyan-50/30 transition-all group/item"
                      >
                        <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200/90 flex items-center justify-center text-[#007791] shrink-0 mt-0.5 group-hover/item:bg-[#007791] group-hover/item:text-white transition-colors shadow-xs">
                          {cap.icon}
                        </div>

                        <div className="min-w-0 flex-1">
                          <h4 className="text-xs sm:text-[13px] font-bold text-[#061a2e] group-hover/item:text-[#007791] transition-colors leading-tight">
                            {cap.name}
                          </h4>
                          <span className="text-[10px] font-semibold text-slate-500 block mt-0.5 leading-tight">
                            {cap.tag}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

              {/* Card Footer: Action Button */}
              <div className="p-6 sm:p-7 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="w-full brand-button-gradient text-white text-xs sm:text-sm font-extrabold px-5 py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
                >
                  <span>Inquire About FP&amp;A Capability Uplift</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>


            {/* ======================================================== */}
            {/* RIGHT CONTAINER: Fractional CFO Support (lg:col-span-6) */}
            {/* ======================================================== */}
            <div className="lg:col-span-6 group bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-teal-500 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
              
              <div>
                {/* Photo Media Header with Floating Emblem */}
                <div className="relative">
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900 rounded-t-3xl">
                    <img
                      src={imgUrl("/images/why_flexible.jpg")}
                      alt="Fractional CFO Support"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                      onError={(e) => {
                        const fallback = imgUrl("/images/cfo_advisory.jpg");
                        if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-[#061a2e]/35 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="px-3 py-1 rounded-full bg-[#061a2e]/85 backdrop-blur-md border border-white/20 text-emerald-400 font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
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

                  {/* Overlapping Emblem Icon - OUTSIDE overflow-hidden for 100% full visibility */}
                  <div className="absolute -bottom-5 left-6 w-11 h-11 rounded-2xl bg-white shadow-xl border border-slate-100 flex items-center justify-center text-teal-700 group-hover:scale-110 group-hover:bg-[#061a2e] group-hover:text-emerald-400 transition-all duration-300 z-20">
                    <Briefcase className="w-5 h-5 stroke-[2.3]" />
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 pt-9 space-y-6">
                  
                  {/* Title & Value Statement */}
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-black text-[#061a2e] group-hover:text-teal-700 transition-colors tracking-tight leading-snug">
                      Fractional CFO Support
                    </h3>
                    <p className="text-sm font-semibold text-slate-600 leading-relaxed">
                      A fractional CFO provides senior financial leadership without the commitment of a full-time appointment.
                    </p>
                  </div>

                  {/* Scenarios Header Bar */}
                  <div className="flex items-center justify-between px-3.5 py-2 bg-slate-50 rounded-xl border border-slate-200/80">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      This can be valuable when:
                    </span>
                    <span className="text-[11px] font-bold text-teal-700 font-mono">
                      8 Key Scenarios
                    </span>
                  </div>

                  {/* 8 Scenarios List */}
                  <div className="space-y-2">
                    {fractionalScenarios.map((scenario, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-teal-400 hover:bg-teal-50/30 transition-all group/item"
                      >
                        <span className="w-6 h-6 rounded-lg bg-emerald-50 border border-emerald-200/90 flex items-center justify-center text-emerald-700 shrink-0 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors shadow-2xs">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug group-hover/item:text-teal-900 transition-colors">
                          {scenario}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

              {/* Card Footer: Action Button */}
              <div className="p-6 sm:p-7 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="w-full brand-button-gradient text-white text-xs sm:text-sm font-extrabold px-5 py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
                >
                  <span>Request a Fractional CFO Diagnostic</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* 6. "WHEN SHOULD YOU CONSIDER CFO ADVISORY?" - UX/UI SPECIALIST REDESIGN */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] border-b border-slate-200/80 relative overflow-hidden">
        {/* Soft Radial Ambient Lighting */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* ======================================================== */}
            {/* LEFT COLUMN: Section Narrative & Executive Visual Anchor (lg:col-span-5) */}
            {/* ======================================================== */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Header */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 shadow-2xs">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                  <span>ORGANISATIONAL TRIGGERS</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061a2e] tracking-tight leading-[1.15]">
                  When should you consider CFO advisory?
                </h2>
                
                <p className="text-base sm:text-lg text-slate-600 font-semibold leading-relaxed">
                  You may benefit when:
                </p>
              </div>

              {/* Executive Visual Media Showcase Card */}
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/90 shadow-md group">
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    src={imgUrl("/images/why_experience.jpg")}
                    alt="When to consider CFO advisory"
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 brightness-90 group-hover:brightness-95"
                    onError={(e) => {
                      const fallback = imgUrl("/images/cfo_advisory.jpg");
                      if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-[#061a2e]/45 to-transparent" />
                  
                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#061a2e]/90 backdrop-blur-md border border-white/20 text-amber-300 font-bold text-[10px] uppercase tracking-wider flex items-center gap-2 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                      <span>Readiness Diagnostic</span>
                    </span>
                  </div>

                  {/* Bottom Overlay Content */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-amber-400 shadow-sm">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 font-bold block leading-none">
                          Strategic Signal Checklist
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-white block mt-1 leading-tight">
                          7 Decision Indicators
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={onOpenContact}
                      className="text-xs font-bold text-white bg-white/20 hover:bg-white/30 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/30 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                    >
                      <span>Assess</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
                    </button>
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
                  className="group bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 hover:border-amber-400 shadow-2xs hover:shadow-lg transition-all duration-300 hover:translate-x-1.5 flex items-center justify-between gap-3.5 cursor-default relative overflow-hidden"
                >
                  {/* Subtle Left Accent Highlight Bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-center gap-3.5 min-w-0 flex-1">
                    {/* Icon Emblem */}
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700 shrink-0 group-hover:scale-110 group-hover:bg-[#061a2e] group-hover:text-amber-400 transition-all duration-300 shadow-2xs">
                      {triggerIcons[idx]}
                    </div>

                    {/* Text Statement */}
                    <p className="text-xs sm:text-[14px] font-bold text-[#061a2e] group-hover:text-amber-950 transition-colors leading-snug">
                      {trigger}
                    </p>
                  </div>

                  {/* Signal Index Badge */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="font-mono text-[11px] font-black px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 border border-slate-200 group-hover:bg-amber-100 group-hover:text-amber-800 group-hover:border-amber-300 transition-colors shadow-2xs">
                      0{idx + 1}
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all hidden sm:block" />
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>


      {/* 7. HIGH-CONTRAST FOOTER CALL TO ACTION BANNER */}
      <section className="py-20 bg-gradient-to-br from-[#061a2e] via-[#092644] to-[#041220] text-white relative overflow-hidden border-t border-slate-800">
        
        {/* Glow Spheres */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#007791]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#2bb673]/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
          
          <div className="inline-flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-[#2bb673] bg-emerald-500/10 border border-emerald-500/30 px-4 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#2bb673]" />
            <span>EXECUTIVE ADVISORY APPOINTMENTS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Start a CFO Conversation
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
            Whether you need strategic financial leadership, fractional CFO support, or enhanced FP&amp;A capabilities, let's discuss how we can partner with your leadership team.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenContact}
              className="w-full sm:w-auto brand-button-gradient text-white text-base font-extrabold px-9 py-4 rounded-full flex items-center justify-center space-x-2.5 shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer group"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              type="button"
              onClick={onBack}
              className="w-full sm:w-auto text-xs sm:text-sm font-bold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-slate-700 px-6 py-4 rounded-full transition-all cursor-pointer"
            >
              Explore All Service Pillars
            </button>
          </div>

          <div className="pt-4 flex items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              Confidential Discussion
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              Direct Senior Advisor Access
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              No Obligation
            </span>
          </div>

        </div>
      </section>


      {/* 7. PILLAR SWITCHER BAR (Capability Navigator) */}
      <section className="py-16 bg-[#041220] text-white border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-b border-slate-800 pb-5 gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-[#2bb673] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Capability Navigator</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">Explore Other Capability Pillars</h3>
            </div>
            
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center space-x-2 text-xs font-extrabold text-[#2bb673] hover:text-white bg-white/5 hover:bg-white/10 border border-slate-700 px-4 py-2.5 rounded-full transition-all cursor-pointer"
            >
              <span>View What We Do Overview</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { id: 'lead', title: 'LEAD', desc: 'CFO & FP&A Advisory', tag: 'Strategic Leadership' },
              { id: 'build', title: 'BUILD', desc: 'Operating Models', tag: 'Scalable Systems' },
              { id: 'transform', title: 'TRANSFORM', desc: 'Data & Tech', tag: 'BI & Automation' },
              { id: 'protect', title: 'PROTECT', desc: 'Tax & Compliance', tag: 'Governance Defense' }
            ].map((p) => {
              const isActive = p.id === 'lead';
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => onSelectService(p.id)}
                  className={`p-6 rounded-2xl border text-left transition-all duration-300 relative group overflow-hidden cursor-pointer ${
                    isActive
                      ? 'border-[#2bb673] bg-[#0a2644] shadow-xl shadow-emerald-500/10 scale-[1.02]'
                      : 'border-slate-800 bg-[#081d33] hover:bg-[#0c2e52] hover:border-[#2bb673]/60 hover:-translate-y-1'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 bg-white/10 rounded-xl backdrop-blur-md">
                      <PillarIcon type={p.id} className="w-6 h-6 text-[#2bb673]" />
                    </div>
                    {isActive ? (
                      <span className="px-2.5 py-1 bg-[#2bb673] text-white text-[10px] font-black uppercase tracking-wider rounded-full flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                        <span>Current</span>
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold text-slate-400 group-hover:text-emerald-400 transition-colors">
                        Explore →
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-black text-[#2bb673] uppercase tracking-wider block mb-1">{p.tag}</span>
                  <h4 className="text-lg font-black text-white block mb-1 group-hover:text-emerald-300 transition-colors">{p.title}</h4>
                  <p className="text-xs text-slate-300 font-medium">{p.desc}</p>
                </button>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};
