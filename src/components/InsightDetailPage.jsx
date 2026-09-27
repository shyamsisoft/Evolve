import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Calendar, Clock, Sparkles, User, Download, CheckCircle2, BookOpen, ShieldCheck, FileText, Share2 } from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';

export const InsightDetailPage = ({ articleId, articles = [], onBack, onOpenContact, onSelectArticle }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleId]);

  const article = articles.find((a) => a.id === articleId) || articles[0] || {
    id: "a1",
    title: "Beyond the Spreadsheet: Modernizing FP&A for Mid-Market Enterprises",
    category: "FP&A Advisory",
    date: "September 2025",
    readTime: "5 min read",
    summary: "How finance leaders are shifting from historical reporting to driver-based predictive forecasting.",
    image: imgUrl("/images/cfo_advisory.jpg")
  };

  const related = articles.filter((a) => a.id !== article.id);

  return (
    <div className="pt-24 pb-20 bg-[#f8fafc] animate-in fade-in duration-300">
      
      {/* 1. HERO BANNER HEADER */}
      <section className="relative bg-[#061a2e] text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#061a2e] via-[#061a2e]/95 to-[#007791]/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center space-x-3 text-xs sm:text-sm font-bold text-gray-300">
            <button onClick={onBack} className="inline-flex items-center space-x-1.5 text-emerald-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Insights Overview</span>
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-gray-400">Executive Briefing</span>
            <span className="text-slate-600">/</span>
            <span className="text-white">{article.category}</span>
          </div>

          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-[#2bb673] text-white rounded-full text-xs font-black uppercase tracking-widest shadow-md">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Executive Publication</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight max-w-4xl">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-bold text-gray-300 pt-3 border-t border-white/10">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-[#2bb673]" />
              <span>EVOLVE Senior Advisory Board</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-[#007791]" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL BOOK READING LAYOUT */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT MAIN EDITORIAL COLUMN (BOOK STYLE) */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Executive Synopsis Box */}
              {article.synopsis && (
                <div className="p-8 rounded-3xl bg-white border-l-8 border-l-[#2bb673] border border-slate-200/90 shadow-xl space-y-3">
                  <div className="flex items-center space-x-2 text-xs font-black uppercase tracking-wider text-[#007791]">
                    <Sparkles className="w-4 h-4 text-[#2bb673]" />
                    <span>Executive Synopsis</span>
                  </div>
                  <p className="text-lg font-extrabold text-[#061a2e] leading-relaxed italic">
                    "{article.synopsis}"
                  </p>
                </div>
              )}

              {/* Main Reading Content (Book / Whitepaper Format) */}
              <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-xl space-y-10 text-slate-800 leading-relaxed font-medium">
                
                {/* Dynamic Content Sections */}
                {article.chapters && article.chapters.length > 0 ? (
                  article.chapters.map((ch, idx) => (
                    <React.Fragment key={idx}>
                      <div className="space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-black text-[#061a2e] tracking-tight">
                          {ch.title}
                        </h2>
                        <p className="text-base sm:text-lg leading-relaxed text-slate-700 whitespace-pre-line">
                          {ch.content}
                        </p>
                      </div>

                      {/* Inject Quote Pullout after Chapter 01 */}
                      {idx === 0 && article.quotePullout && (
                        <div className="p-6 rounded-2xl bg-teal-50/80 border border-teal-200/80 text-[#061a2e] space-y-2">
                          <span className="text-xs font-black uppercase text-[#007791] tracking-wider block">Key Executive Takeaway</span>
                          <p className="text-base font-extrabold leading-snug">
                            "{article.quotePullout}"
                          </p>
                        </div>
                      )}

                      {/* Inject Pillars Grid after Chapter 01 or 02 */}
                      {idx === 1 && article.pillars && article.pillars.length > 0 && (
                        <div className="space-y-6 pt-4 border-t border-slate-100">
                          <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-black uppercase tracking-wider rounded-md">
                            Strategic Pillars
                          </div>
                          <h3 className="text-xl font-black text-[#061a2e]">
                            Core Framework Drivers
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {article.pillars.map((pil, pIdx) => (
                              <div key={pIdx} className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                                <div className="flex items-center space-x-2 text-[#007791] font-black text-base">
                                  <CheckCircle2 className="w-5 h-5 text-[#2bb673]" />
                                  <span>{pil.step || `0${pIdx+1}`}. {pil.title}</span>
                                </div>
                                <p className="text-xs text-slate-600 font-bold leading-relaxed">
                                  {pil.desc}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  ))
                ) : (
                  /* Fallback default section if chapters not provided */
                  <div className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-black text-[#061a2e]">
                      Executive Advisory Deep-Dive
                    </h2>
                    <p className="text-base sm:text-lg leading-relaxed text-slate-700">
                      {article.summary}
                    </p>
                  </div>
                )}

              </div>

            </div>

            {/* RIGHT STICKY EXECUTIVE SIDEBAR */}
            <div className="lg:col-span-4 space-y-8 sticky top-28">
              
              {/* Publication Meta & Action Card */}
              <div className="bg-[#061a2e] text-white p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
                
                <div className="space-y-2 border-b border-slate-800 pb-5">
                  <span className="text-xs font-black uppercase text-[#2bb673] tracking-widest">
                    Publication Details
                  </span>
                  <h3 className="text-xl font-black text-white">
                    {article.category} Briefing
                  </h3>
                  <span className="text-xs text-slate-300 block font-medium">
                    Published: {article.date} • {article.readTime}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-xs font-bold text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-[#2bb673]" />
                    <span>Executive Board Verified</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-bold text-slate-300">
                    <FileText className="w-4 h-4 text-[#007791]" />
                    <span>Full 14-Page Executive Whitepaper</span>
                  </div>
                </div>

                <div className="pt-2 space-y-3">
                  <button
                    onClick={onOpenContact}
                    className="w-full brand-button-gradient text-white text-xs font-extrabold py-4 px-6 rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center space-x-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Whitepaper PDF</span>
                  </button>

                  <button
                    onClick={onOpenContact}
                    className="w-full bg-white/10 hover:bg-white/20 text-white text-xs font-extrabold py-3.5 px-6 rounded-2xl border border-slate-700 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Schedule Advisory Briefing</span>
                  </button>
                </div>

              </div>

              {/* Related Executive Insights */}
              {related.length > 0 && (
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-lg space-y-4">
                  <span className="text-xs font-black uppercase tracking-widest text-[#007791] block">
                    More Executive Insights
                  </span>
                  
                  <div className="space-y-3">
                    {related.map((rel) => (
                      <div
                        key={rel.id}
                        onClick={() => onSelectArticle && onSelectArticle(rel.id)}
                        className="p-4 rounded-2xl bg-slate-50 hover:bg-teal-50/50 border border-slate-200/80 hover:border-teal-200 transition-all cursor-pointer group flex items-center space-x-3.5 shadow-xs"
                      >
                        {/* Thumbnail Image */}
                        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-slate-200 shadow-xs relative">
                          <img
                            src={rel.image}
                            alt={rel.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>

                        {/* Article Text Content */}
                        <div className="space-y-1 flex-1 min-w-0">
                          <span className="text-[10px] font-black text-[#2bb673] uppercase tracking-wider block">
                            {rel.category}
                          </span>
                          <h4 className="text-xs font-black text-[#061a2e] group-hover:text-[#007791] transition-colors leading-snug line-clamp-2">
                            {rel.title}
                          </h4>
                          <div className="flex items-center justify-between pt-1 text-[10px] font-extrabold text-slate-500">
                            <span>{rel.readTime}</span>
                            <ArrowRight className="w-3 h-3 text-[#007791] group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
