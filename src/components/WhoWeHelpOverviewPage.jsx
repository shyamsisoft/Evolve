import React, { useEffect } from 'react';
import { ArrowRight, ArrowLeft, Building2, TrendingUp, Users2, Landmark, CheckCircle2 } from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';

export const WhoWeHelpOverviewPage = ({ onSelectAudience, onBack, onOpenContact }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const audiences = [
    {
      id: "growing-businesses",
      title: "Growing Businesses",
      subtitle: "When growth creates financial complexity.",
      desc: "Specialist financial leadership, scalable operating models, and FP&A insight tailored for fast-scaling mid-market enterprises.",
      image: imgUrl("/images/growing_businesses.jpg"),
      icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
      bullets: [
        "Fractional CFO & Growth Strategy",
        "Driver-Based Financial Forecasting",
        "Working Capital & Burn Management",
        "Scalable ERP System Selection"
      ]
    },
    {
      id: "established-corporate",
      title: "Established & Corporate",
      subtitle: "Specialist finance capability when you need it.",
      desc: "Unlocking corporate performance, business intelligence automation, governance defense, and enterprise transformation.",
      image: imgUrl("/images/established_corporate.jpg"),
      icon: <Building2 className="w-8 h-8 text-emerald-400" />,
      bullets: [
        "Multi-Entity Finance Operating Models",
        "PowerBI Data & Analytics Pipelines",
        "M&A Financial Integration Support",
        "Corporate Governance & Internal Controls"
      ]
    },
    {
      id: "non-profit-community",
      title: "Not-for-Profit & Community",
      subtitle: "Financial capability that supports your purpose.",
      desc: "Purpose-driven financial stewardship, grant acquittals, fund accounting, and board governance transparency.",
      image: imgUrl("/images/non_profit_community.jpg"),
      icon: <Users2 className="w-8 h-8 text-emerald-400" />,
      bullets: [
        "NFP Fund Accounting & Grant Management",
        "Board Financial Visibility & Governance",
        "Cost Allocation & Program Profitability",
        "Audit Preparation & Statutory Filings"
      ]
    },
    {
      id: "local-government",
      title: "Local Government & Public Sector",
      subtitle: "Better financial insight for better public outcomes.",
      desc: "Public sector financial management, long-term asset planning, rate-setting analytics, and community transparency.",
      image: imgUrl("/images/local_government.jpg"),
      icon: <Landmark className="w-8 h-8 text-emerald-400" />,
      bullets: [
        "Long-Term Financial Strategy (LTFS)",
        "Civic Asset & Capital Works Financial Modeling",
        "Statutory Annual Financial Statements",
        "Public Finance Transformation & Training"
      ]
    }
  ];

  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-300">
      
      {/* HERO HEADER */}
      <section className="relative bg-[#061a2e] text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src={imgUrl('/images/hero_summit.jpg')} alt="Who We Help" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#061a2e] via-[#061a2e]/90 to-[#007791]/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center space-x-3 text-xs sm:text-sm font-bold text-gray-300">
            <button onClick={onBack} className="inline-flex items-center space-x-1.5 text-emerald-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-white">Who We Help Overview</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white max-w-4xl leading-tight">
            Who We Help — Organisations at Every Journey Stage
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 font-medium max-w-3xl leading-relaxed">
            From high-growth enterprises to established corporations, non-profits, and municipal governments, we deliver tailored financial capability and strategic clarity.
          </p>
        </div>
      </section>

      {/* 4 SECTOR SHOWCASE GRID */}
      <section className="py-20 bg-[#f7f9fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {audiences.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061a2e] via-[#061a2e]/60 to-transparent"></div>
                    
                    <div className="absolute top-4 left-4 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                      {item.icon}
                    </div>

                    <div className="absolute bottom-4 left-6 right-6">
                      <span className="text-xs font-black uppercase tracking-widest text-[#2bb673]">Sector Expertise</span>
                      <h3 className="text-2xl font-black text-white leading-tight">{item.title}</h3>
                    </div>
                  </div>

                  <div className="p-7 space-y-5">
                    <p className="text-base text-slate-700 font-medium leading-relaxed">{item.desc}</p>
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <span className="text-xs font-extrabold uppercase text-[#007791] tracking-wider block mb-2">Tailored Solutions:</span>
                      {item.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center space-x-2 text-sm font-semibold text-[#061a2e]">
                          <CheckCircle2 className="w-4 h-4 text-[#2bb673] flex-shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <button
                    onClick={() => onSelectAudience(item.id)}
                    className="w-full brand-button-gradient text-white text-sm font-extrabold py-3.5 px-6 rounded-2xl flex items-center justify-center space-x-2 shadow-md"
                  >
                    <span>View {item.title} Sector Page</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#061a2e] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-5">
          <h2 className="text-3xl sm:text-4xl font-black text-white">Let's Discuss Your Sector Needs</h2>
          <p className="text-lg text-gray-200 font-medium">Contact our team for a tailored advisory briefing.</p>
          <button onClick={onOpenContact} className="brand-button-gradient text-white text-base font-extrabold px-9 py-4 rounded-full shadow-xl">
            Start a Conversation →
          </button>
        </div>
      </section>

    </div>
  );
};
