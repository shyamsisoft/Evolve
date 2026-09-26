import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Shield, Target, Users, Award, Sparkles, Building2, TrendingUp, Cpu, Compass, ArrowRight, PhoneCall } from 'lucide-react';

export const AboutPage = ({ data, onBack, onOpenContact }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = data.stats || [
    { label: "Combined CFO Leadership", val: "20+ Yrs" },
    { label: "Capital & Advisory Scope", val: "$2.5B+" },
    { label: "Month-End Close Target", val: "3-5 Days" },
    { label: "Client Board Satisfaction", val: "99.8%" }
  ];

  const values = data.values || [
    {
      title: "Clarity",
      tag: "Executive Visibility",
      desc: "Translating complex multi-entity financial data into plain, actionable board stories and real-time PowerBI dashboards.",
      image: "/images/cfo_advisory.jpg"
    },
    {
      title: "Capability",
      tag: "Hands-On Build",
      desc: "We don't just advise; we embed alongside your internal teams to design scalable SOPs and build enduring in-house financial strength.",
      image: "/images/finance_build.jpg"
    },
    {
      title: "Independence",
      tag: "Unbiased Guidance",
      desc: "Unbiased, objective guidance focused purely on your organization's fiscal health, capital allocation, and long-term valuation.",
      image: "/images/why_independent.jpg"
    }
  ];

  const leadership = data.leadership || [
    {
      name: "Senior Partner Advisory Board",
      role: "Strategic Executive CFOs",
      bio: "Former Enterprise CFOs and transformation specialists delivering hands-on governance, capital allocation, and FP&A oversight.",
      image: "/images/about_team.jpg"
    },
    {
      name: "Finance Transformation Practice",
      role: "Data & Systems Capability",
      bio: "Pioneering cloud ERP architecture, automated PowerBI pipelines, and digital process automation frameworks.",
      image: "/images/finance_transform.jpg"
    },
    {
      name: "Governance & Compliance Desk",
      role: "Tax & Risk Management",
      bio: "Ensuring 100% statutory compliance, NFP grant acquittal transparency, and local government long-term financial modeling.",
      image: "/images/tax_compliance.jpg"
    }
  ];

  const whyUsPillars = data.whyUsPillars || [
    {
      title: "Senior Executive Experience",
      subtitle: "Direct CFO Partnership",
      desc: "Work directly with seasoned executives who have led complex corporate, public sector, and mid-market finances.",
      image: "/images/why_experience.jpg"
    },
    {
      title: "Execution-Driven Model",
      subtitle: "Implementation Focus",
      desc: "We deploy standardized close checklists and automated workflow models that build long-term internal strength.",
      image: "/images/approach_deliver.jpg"
    },
    {
      title: "Practical & High Impact",
      subtitle: "Rapid Time-to-Value",
      desc: "Identify immediate high-impact quick wins within the first 30 days while constructing target operating models.",
      image: "/images/why_practical.jpg"
    },
    {
      title: "Flexible Engagement Scope",
      subtitle: "Scalable Advisory",
      desc: "Scale capability dynamically as your organisation expands, acquires, restructures, or modernizes systems.",
      image: "/images/why_flexible.jpg"
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#f8fafc] animate-in fade-in duration-300">
      
      {/* 1. EXECUTIVE HERO BANNER */}
      <section className="relative bg-[#061a2e] text-white pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src={data.heroBg || "/images/established_corporate.jpg"} alt="About EVOLVE" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#061a2e] via-[#061a2e]/95 to-[#007791]/50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center space-x-3 text-xs sm:text-sm font-bold text-gray-300">
            <button onClick={onBack} className="inline-flex items-center space-x-1.5 text-emerald-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-white">About EVOLVE</span>
          </div>

          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-[#2bb673] text-white rounded-full text-xs font-black uppercase tracking-widest shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Corporate Advisory & Capability</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white max-w-4xl leading-tight">
            {data.title}
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 font-medium max-w-3xl leading-relaxed">
            {data.subtitle}
          </p>

          {/* Key Executive Stats Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
            {stats.map((st, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1 backdrop-blur-xs">
                <span className="text-2xl sm:text-3xl font-black text-[#2bb673] block">{st.val}</span>
                <span className="text-xs font-bold text-gray-300 block">{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. OUR MISSION & PHILOSOPHY SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Leadership Photo Banner Card */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                <img
                  src="/images/about_team.jpg"
                  alt="EVOLVE Executive Leadership Team"
                  className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-[#061a2e]/30 to-transparent"></div>
                
                {/* Embedded Floating Badge */}
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200 shadow-lg text-[#061a2e]">
                  <span className="text-xs font-black uppercase text-[#007791] tracking-wider block">Senior Advisory Desk</span>
                  <span className="text-xs font-extrabold text-slate-700">Hands-on CFO Capability</span>
                </div>

                <div className="absolute bottom-8 left-8 right-8 text-white space-y-2">
                  <div className="inline-flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-[#2bb673]">
                    <Award className="w-4 h-4" />
                    <span>Executive Leadership</span>
                  </div>
                  <h3 className="text-2xl font-black text-white">Senior Partner Advisory Board</h3>
                  <p className="text-xs text-gray-300 font-medium">
                    Leading CFO transformation, financial operating models, and public sector governance across corporate Australia.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Statement & Story */}
            <div className="lg:col-span-6 space-y-8">
              
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-teal-50 rounded-full text-xs font-black uppercase tracking-widest text-[#007791]">
                  <Compass className="w-3.5 h-3.5 text-[#2bb673]" />
                  <span>Our Core Mission</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-[#061a2e] leading-snug">
                  "{data.mission}"
                </h2>
              </div>

              {/* Story Paragraphs */}
              <div className="space-y-4 text-slate-700 text-base font-medium leading-relaxed border-l-4 border-l-[#2bb673] pl-6">
                {(data.storyParagraphs || [
                  "EVOLVE Corporate & Business Solutions was founded to provide mid-market enterprises, growing companies, not-for-profits, and public sector organizations with senior CFO capability without permanent overhead.",
                  "Rather than delivering static advisory decks, EVOLVE partners directly inside executive leadership teams to modernize financial reporting pipelines, design high-velocity operating models, and enforce governance frameworks."
                ]).map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenContact}
                  className="brand-button-gradient text-white text-xs font-extrabold px-6 py-3.5 rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center space-x-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Connect With Our Partners</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. CORE ORGANIZATIONAL VALUES (PHOTO CARDS) */}
      <section className="py-20 bg-[#f8fafc] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#007791] bg-teal-50 px-3.5 py-1 rounded-full border border-teal-100">
              Our Foundational Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#061a2e]">
              Built Around 3 Corporate Values
            </h2>
            <p className="text-sm text-slate-600 font-medium">
              How we work alongside executive teams to deliver long-term capability and confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col">
                
                {/* Photo Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={v.image || "/images/cfo_advisory.jpg"}
                    alt={v.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-transparent to-transparent opacity-80"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#2bb673] text-white text-[10px] font-black uppercase tracking-wider rounded-full shadow-md">
                      {v.tag || `0${idx + 1}. Value`}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-black text-white">{v.title}</h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {v.desc}
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-extrabold text-[#007791]">
                    <span>EVOLVE Promise</span>
                    <CheckCircle2 className="w-4 h-4 text-[#2bb673]" />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PRACTICE DESKS & LEADERSHIP GALLERY */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-[#2bb673] bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-100">
                Advisory Capability
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#061a2e]">
                Senior Practice Desks
              </h2>
            </div>
            <p className="text-sm text-slate-600 font-medium max-w-md">
              Specialized execution capabilities spanning CFO advisory, digital transformation, and statutory risk defense.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((lead, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4 shadow-sm hover:border-teal-300 transition-colors">
                <div className="h-44 rounded-2xl overflow-hidden border border-slate-200 relative">
                  <img src={lead.image} alt={lead.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e]/70 via-transparent to-transparent"></div>
                  <span className="absolute bottom-3 left-3 text-[10px] font-black uppercase text-[#2bb673] bg-[#061a2e]/90 px-2.5 py-1 rounded-md">
                    {lead.role}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-black text-[#061a2e]">{lead.name}</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {lead.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. THE EVOLVE ADVANTAGE MATRIX (WHY US) */}
      <section className="py-20 bg-[#061a2e] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src="/images/hero_summit.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#2bb673] bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
              The EVOLVE Advantage
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Why Executive Leaders Choose EVOLVE
            </h2>
            <p className="text-sm text-gray-300 font-medium">
              We bridge the gap between strategic CFO leadership and operational execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUsPillars.map((pil, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4 hover:bg-white/10 transition-colors backdrop-blur-xs flex flex-col justify-between">
                
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#007791] text-white flex items-center justify-center font-black text-lg shadow-md">
                    0{idx + 1}
                  </div>
                  <span className="text-[10px] font-black uppercase text-[#2bb673] tracking-wider block">
                    {pil.subtitle}
                  </span>
                  <h3 className="text-lg font-black text-white leading-snug">
                    {pil.title}
                  </h3>
                  <p className="text-xs text-gray-300 font-medium leading-relaxed">
                    {pil.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <div className="h-20 rounded-xl overflow-hidden border border-white/10 relative">
                    <img src={pil.image} alt={pil.title} className="w-full h-full object-cover opacity-80" />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. BOTTOM CTA BANNER */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#061a2e] to-[#007791] p-10 sm:p-12 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-black uppercase tracking-widest text-[#2bb673]">
                Ready to transform your finance function?
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Schedule a Strategic Executive Consultation
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 font-medium">
                Talk directly with our Senior Partners about fractional CFO leadership, FP&A modeling, or finance function transformation.
              </p>
            </div>

            <button
              onClick={onOpenContact}
              className="brand-button-gradient text-white text-xs font-extrabold py-4 px-8 rounded-2xl shadow-xl hover:scale-105 transition-transform flex-shrink-0 flex items-center space-x-2"
            >
              <span>Start Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
