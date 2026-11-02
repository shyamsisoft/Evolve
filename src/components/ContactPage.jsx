import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, Send, MessageSquare } from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';
import { PillarIcon } from './BrandLogo';
import { SectionDivider } from './SectionDivider';

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
    <div className="min-h-screen bg-[#061a2e] text-white font-['Inter',sans-serif] selection:bg-[#18B0A6] selection:text-[#061a2e]">

      {/* ======================================================== */}
      {/* 1. HERO BANNER: CONTACT                                  */}
      {/* ======================================================== */}
      <section className="relative min-h-[64vh] flex items-center bg-[#061a2e] text-white overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-white/10">
        
        {/* Background Artwork with Brand Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={imgUrl('/images/contact_office.jpg')}
            alt="Contact EVOLVE"
            className="w-full h-full object-cover object-center opacity-30 transform scale-105"
            onError={(e) => {
              const fallback = imgUrl('/images/established_corporate.jpg');
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
              <span>Back to Home</span>
            </button>
            <span className="text-slate-500">/</span>
            <span className="text-teal-300 font-bold uppercase">ENGAGE</span>
            <span className="text-slate-500">/</span>
            <span className="text-white font-bold truncate">Contact</span>
          </nav>

          {/* Direct Engagement Tag */}
          <div className="flex items-center space-x-3.5 pt-1">
            <div className="p-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl flex items-center justify-center">
              <MessageSquare className="w-9 h-9 text-emerald-400" />
            </div>
            <div>
              <span className="inline-block text-[11px] sm:text-xs font-bold tracking-widest text-[#2bb673] uppercase bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-1 rounded-full">
                DIRECT EXECUTIVE ENGAGEMENT
              </span>
            </div>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              CONTACT
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-emerald-400 tracking-tight">
              Let's talk about what your organisation needs next.
            </p>

            <div className="pt-1 space-y-3 max-w-3xl text-slate-200">
              <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-slate-100">
                You may know exactly what support you need. Or you may simply know that finance, reporting, systems, compliance or organisational change isn't working as well as it should.
              </p>
              <p className="text-white font-bold text-base sm:text-lg">
                Either way, let's start with a conversation.
              </p>
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Tell us a little about your organisation, the challenge you are facing and what you are looking to achieve. We'll help determine where Evolve can add value.
              </p>
            </div>
          </div>

          {/* Quick Action Button & Status Pill */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a 
              href="#contact-form"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#007791] to-[#2bb673] text-white font-bold text-sm shadow-lg hover:shadow-emerald-500/25 hover:brightness-110 transition-all cursor-pointer"
            >
              Send an Enquiry
              <ArrowRight className="w-4 h-4" />
            </a>

            <span className="text-xs sm:text-sm text-slate-300 font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Confidential Consultation with Senior Advisory Specialists
            </span>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. CONTACT FORM SECTION                                  */}
      {/* ======================================================== */}
      <SectionDivider />
      <section id="contact-form" className="py-20 sm:py-24 bg-[#061a2e] border-b border-white/10 relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#007791]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white/[0.03] backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/10 shadow-xl space-y-8">
            
            {isSubmitted ? (
              <div className="p-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-[#2bb673] border border-emerald-500/30 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Thank You
                </h3>
                <p className="text-base text-slate-300 max-w-md mx-auto">
                  We have received your message and will be in touch to discuss where Evolve can add value.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* How can we help? Service Selection */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-white uppercase tracking-wider">
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
                              ? 'bg-white/[0.08] border-teal-400 ring-2 ring-teal-400/30 text-white shadow-xs' 
                              : 'bg-white/[0.03] border-white/10 hover:border-white/20 text-slate-300 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {opt.pillar && <PillarIcon type={opt.pillar} className="w-5 h-5 shrink-0" />}
                            <span className="text-xs sm:text-sm font-bold leading-snug">
                              {opt.label}
                            </span>
                          </div>
                          <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                            isSelected ? 'border-[#2bb673] bg-[#2bb673]' : 'border-white/30'
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
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Organisation
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Your organisation name"
                    className="w-full px-4 py-3.5 rounded-xl border border-white/15 text-sm bg-white/[0.04] text-white placeholder:text-slate-400 focus:bg-white/[0.08] focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all"
                  />
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Full name"
                      className="w-full px-4 py-3.5 rounded-xl border border-white/15 text-sm bg-white/[0.04] text-white placeholder:text-slate-400 focus:bg-white/[0.08] focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@organisation.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-white/15 text-sm bg-white/[0.04] text-white placeholder:text-slate-400 focus:bg-white/[0.08] focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all"
                    />
                  </div>
                </div>

                {/* Message / Challenge */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Tell us a little about your organisation, the challenge you are facing and what you are looking to achieve
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe the challenge you are facing and your objectives..."
                    className="w-full px-4 py-3.5 rounded-xl border border-white/15 text-sm bg-white/[0.04] text-white placeholder:text-slate-400 focus:bg-white/[0.08] focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto brand-button-gradient text-white text-base font-bold px-10 py-4 rounded-xl shadow-xl flex items-center justify-center space-x-2.5 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer group"
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
