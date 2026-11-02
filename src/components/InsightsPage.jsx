import React, { useState, useEffect } from 'react';
import { ArrowLeft, Search, Filter, BookOpen, Clock, Calendar, ArrowRight, Download } from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';
import { SectionDivider } from './SectionDivider';

export const InsightsPage = ({ data, onBack, onOpenContact, onSelectArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articles = data.articles || [];
  const categories = ['All', 'FP&A Advisory', 'Operating Models', 'Data & Tech'];

  const filteredArticles = articles.filter((a) => {
    const matchesCategory = selectedCategory === 'All' || a.category === selectedCategory;
    const matchesSearch = a.title.toLowerCase().includes(searchTerm.toLowerCase()) || a.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20 bg-[#061a2e] text-white min-h-screen animate-in fade-in duration-300 font-['Inter',sans-serif]">
      
      {/* HERO BANNER */}
      <section className="relative bg-[#061a2e] text-white py-16 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-25">
          <img src={imgUrl('/images/cfo_advisory.jpg')} alt="Insights" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#061a2e] via-[#061a2e]/90 to-[#007791]/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center space-x-3 text-xs sm:text-sm font-bold text-slate-300">
            <button 
              type="button"
              onClick={onBack} 
              className="inline-flex items-center space-x-1.5 text-emerald-400 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-white">Insights &amp; Thought Leadership</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl leading-tight">
            {data.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-normal max-w-3xl leading-relaxed">
            {data.subtitle}
          </p>
        </div>
      </section>

      {/* FILTER & ARTICLES HUB */}
      <SectionDivider />
      <section className="py-20 bg-[#061a2e] text-white border-b border-white/10 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#007791]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* SEARCH & FILTER BAR */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white/[0.03] backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-sm">
            <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-white/[0.12] text-white border border-white/20 shadow-xs'
                      : 'bg-white/[0.03] text-slate-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/[0.04] text-white rounded-xl border border-white/15 text-xs focus:outline-none focus:border-teal-400 placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* ARTICLES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredArticles.map((art) => (
              <div
                key={art.id}
                onClick={() => onSelectArticle && onSelectArticle(art.id)}
                className="bg-white/[0.03] backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-500/50 hover:bg-white/[0.06] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <img src={imgUrl(art.image)} alt={art.title} className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#061a2e]/90 backdrop-blur-md border border-white/15 rounded-full text-xs font-bold text-teal-400">
                      {art.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-4 text-xs font-bold text-slate-400">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{art.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{art.readTime}</span>
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                      {art.title}
                    </h3>

                    <p className="text-sm text-slate-300 font-normal leading-relaxed">
                      {art.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectArticle && onSelectArticle(art.id);
                    }}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-teal-400 group-hover:text-white transition-colors"
                  >
                    <span>Read Executive Article</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
