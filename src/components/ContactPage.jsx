import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, Send, Sparkles } from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';
import { PillarIcon } from './BrandLogo';

export const ContactPage = ({ onBack }) => {
  const [selectedService, setSelectedService] = useState('LEAD — CFO & FP&A Advisory');
  const [formData, setFormData] = useState({
    organization: '',
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceOptions = [
    { id: 'lead', label: 'LEAD — CFO & FP&A Advisory', pillar: 'lead' },
    { id: 'build', label: 'BUILD — Finance Functions & Operating Models', pillar: 'build' },
    { id: 'transform', label: 'TRANSFORM — Finance Transformation, Data & Technology', pillar: 'transform' },
    { id: 'protect', label: 'PROTECT — Tax & Compliance', pillar: 'protect' },
    { id: 'general', label: 'General Strategic Enquiry', pillar: null }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ organization: '', name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#2bb673] selection:text-white">

      {/* ======================================================== */}
      {/* 1. HERO BANNER: CONTACT                                  */}
      {/* ======================================================== */}
      <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 bg-[#061a2e] text-white overflow-hidden">
        
        {/* Background Photo with Dark Tech Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={imgUrl('/images/hero_summit.jpg')}
            alt="Contact"
            className="w-full h-full object-cover object-center scale-105 filter brightness-40 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061a2e] via-[#061a2e]/90 to-[#061a2e]/65" />
          <div className="absolute inset-0 bg-[radial-gradient(#2bb673_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
        </div>

        {/* Ambient Glowing Orbs */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs font-bold text-slate-300">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Home</span>
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-[#2bb673] font-extrabold uppercase tracking-wider">Contact</span>
          </nav>

          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              CONTACT
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-emerald-300 tracking-tight leading-snug">
              Let's talk about what your organisation needs next.
            </p>

            <div className="pt-2 space-y-4 max-w-3xl text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                You may know exactly what support you need. Or you may simply know that finance, reporting, systems, compliance or organisational change isn't working as well as it should.
              </p>
              <p className="text-white font-bold">
                Either way, let's start with a conversation.
              </p>
              <p>
                Tell us a little about your organisation, the challenge you are facing and what you are looking to achieve. We'll help determine where Evolve can add value.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 2. CONTACT FORM SECTION                                  */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl space-y-8">
            
            {isSubmitted ? (
              <div className="p-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#2bb673] flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#061a2e]">
                  Thank You
                </h3>
                <p className="text-base text-slate-600 max-w-md mx-auto">
                  We have received your message and will be in touch to discuss where Evolve can add value.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* How can we help? Service Selection */}
                <div className="space-y-3">
                  <label className="block text-sm font-black text-[#061a2e] uppercase tracking-wider">
                    How can we help?
                  </label>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {serviceOptions.map((opt) => {
                      const isSelected = selectedService === opt.label;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setSelectedService(opt.label)}
                          className={`text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                            isSelected 
                              ? 'bg-emerald-50/70 border-[#2bb673] ring-2 ring-[#2bb673]/30 shadow-xs' 
                              : 'bg-slate-50 border-slate-200/90 hover:border-slate-400'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {opt.pillar && <PillarIcon type={opt.pillar} className="w-5 h-5 shrink-0" />}
                            <span className="text-xs sm:text-sm font-bold text-[#061a2e] leading-snug">
                              {opt.label}
                            </span>
                          </div>
                          <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                            isSelected ? 'border-[#2bb673] bg-[#2bb673]' : 'border-slate-300'
                          }`}>
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Organisation */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Organisation
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Your organisation name"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:border-[#2bb673] focus:ring-2 focus:ring-[#2bb673]/20 transition-all"
                  />
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Full name"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:border-[#2bb673] focus:ring-2 focus:ring-[#2bb673]/20 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@organisation.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:border-[#2bb673] focus:ring-2 focus:ring-[#2bb673]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Message / Challenge */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Tell us a little about your organisation, the challenge you are facing and what you are looking to achieve
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe the challenge you are facing and your objectives..."
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:border-[#2bb673] focus:ring-2 focus:ring-[#2bb673]/20 transition-all"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto brand-button-gradient text-white text-base font-extrabold px-10 py-4 rounded-xl shadow-xl flex items-center justify-center space-x-2.5 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer group"
                  >
                    <span>Start a Conversation</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  );
};
