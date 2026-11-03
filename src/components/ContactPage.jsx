import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  MessageSquare, 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Building2,
  Calendar
} from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';
import { PillarIcon } from './BrandLogo';
import { SectionDivider } from './SectionDivider';

export const ContactPage = ({ onBack, data }) => {
  const [selectedService, setSelectedService] = useState('LEAD — CFO & FP&A Advisory');
  const [formData, setFormData] = useState({
    organization: '',
    name: '',
    email: '',
    phone: '',
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
      setFormData({ organization: '', name: '', email: '', phone: '', message: '' });
    }, 4500);
  };

  const contactData = data || {
    eyebrow: "DIRECT EXECUTIVE ENGAGEMENT",
    title: "CONTACT",
    subtitle: "Let's talk about what your organisation needs next.",
    introLead: "You may know exactly what support you need. Or you may simply know that finance, reporting, systems, compliance or organisational change isn't working as well as it should.",
    introSublead: "Either way, let's start with a conversation.",
    introText: "Tell us a little about your organisation, the challenge you are facing and what you are looking to achieve. We'll help determine where Evolve can add value.",
    phone: "+61 2 9000 0000",
    email: "enquiries@evolvecorporate.com.au",
    hours: "Monday – Friday: 8:30 AM – 5:30 PM AEST",
    confidentialityNotice: "Confidential Consultation with Senior Advisory Specialists",
    offices: [
      {
        city: "Sydney (Principal Office)",
        address: "Level 28, 200 George Street, Sydney NSW 2000",
        phone: "+61 2 9000 0000",
        email: "sydney@evolvecorporate.com.au",
        isPrimary: true
      },
      {
        city: "Melbourne",
        address: "Level 14, 333 Collins Street, Melbourne VIC 3000",
        phone: "+61 3 9000 0000",
        email: "melbourne@evolvecorporate.com.au",
        isPrimary: false
      },
      {
        city: "Brisbane",
        address: "Level 21, 345 Queen Street, Brisbane QLD 4000",
        phone: "+61 7 3000 0000",
        email: "brisbane@evolvecorporate.com.au",
        isPrimary: false
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#061a2e] text-white font-['Inter',sans-serif] selection:bg-[#18B0A6] selection:text-[#061a2e]">

      {/* ======================================================== */}
      {/* 1. HERO BANNER: CONTACT                                  */}
      {/* ======================================================== */}
      <section className="relative min-h-[58vh] flex items-center bg-[#061a2e] text-white overflow-hidden py-16 sm:py-20 lg:py-22 border-b border-white/10">
        
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
              <MessageSquare className="w-8 h-8 text-emerald-400" />
            </div>
            <div>
              <span className="inline-block text-[11px] sm:text-xs font-bold tracking-widest text-[#2bb673] uppercase bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-1 rounded-full">
                {contactData.eyebrow || 'DIRECT EXECUTIVE ENGAGEMENT'}
              </span>
            </div>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight uppercase">
              {contactData.title || 'CONTACT'}
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-emerald-400 tracking-tight">
              {contactData.subtitle || "Let's talk about what your organisation needs next."}
            </p>

            <div className="pt-1 space-y-2.5 max-w-3xl text-slate-200">
              <p className="text-base sm:text-lg font-medium leading-relaxed text-slate-100">
                {contactData.introLead || "You may know exactly what support you need. Or you may simply know that finance, reporting, systems, compliance or organisational change isn't working as well as it should."}
              </p>
              <p className="text-white font-bold text-base sm:text-lg">
                {contactData.introSublead || "Either way, let's start with a conversation."}
              </p>
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                {contactData.introText || "Tell us a little about your organisation, the challenge you are facing and what you are looking to achieve. We'll help determine where Evolve can add value."}
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
              {contactData.confidentialityNotice || 'Confidential Consultation with Senior Advisory Specialists'}
            </span>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. SPLIT SECTION: CONTACT DETAILS + INTERACTIVE FORM     */}
      {/* ======================================================== */}
      <SectionDivider />
      <section id="contact-form" className="py-16 sm:py-24 bg-[#061a2e] border-b border-white/10 relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#007791]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2bb673]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* ---------------------------------------------------- */}
            {/* LEFT COLUMN: DIRECT CONTACT DETAILS & CORPORATE HUBS */}
            {/* ---------------------------------------------------- */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Primary Direct Contact Box */}
              <div className="p-7 sm:p-8 rounded-3xl bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-xl space-y-6">
                <div>
                  <span className="text-[11px] font-bold tracking-widest text-[#2bb673] uppercase bg-emerald-500/10 border border-emerald-500/25 px-3 py-1 rounded-full inline-block">
                    DIRECT ADVISORY DESK
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-3">
                    Direct Contact
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-normal mt-1">
                    Connect directly with our senior corporate and financial practice leadership.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Telephone */}
                  {contactData.phone && (
                    <div className="flex items-start space-x-3.5 group">
                      <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-emerald-400 group-hover:bg-[#007791] group-hover:text-white transition-all shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                          Advisory Telephone
                        </span>
                        <a 
                          href={`tel:${contactData.phone.replace(/\s+/g, '')}`}
                          className="text-base sm:text-lg font-bold text-white hover:text-emerald-400 transition-colors"
                        >
                          {contactData.phone}
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Email */}
                  {contactData.email && (
                    <div className="flex items-start space-x-3.5 group">
                      <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-teal-400 group-hover:bg-[#007791] group-hover:text-white transition-all shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                          Official Enquiry Email
                        </span>
                        <a 
                          href={`mailto:${contactData.email}`}
                          className="text-base sm:text-lg font-bold text-white hover:text-teal-300 transition-colors break-all"
                        >
                          {contactData.email}
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Business Hours */}
                  {contactData.hours && (
                    <div className="flex items-start space-x-3.5 group">
                      <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-cyan-400 shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                          Consultation Hours
                        </span>
                        <p className="text-sm font-semibold text-slate-200">
                          {contactData.hours}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Corporate Office Locations */}
              {contactData.offices && contactData.offices.length > 0 && (
                <div className="p-7 sm:p-8 rounded-3xl bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-xl space-y-5">
                  <div className="flex items-center space-x-2.5">
                    <Building2 className="w-5 h-5 text-emerald-400" />
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      Corporate Locations
                    </h3>
                  </div>

                  <div className="space-y-4 pt-1">
                    {contactData.offices.map((office, idx) => (
                      <div 
                        key={idx}
                        className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1.5 hover:border-emerald-500/40 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-bold text-emerald-300">
                            {office.city}
                          </span>
                          {office.isPrimary && (
                            <span className="text-[10px] font-bold text-teal-300 bg-teal-500/15 border border-teal-500/30 px-2 py-0.5 rounded-full uppercase">
                              Principal
                            </span>
                          )}
                        </div>
                        {office.address && (
                          <div className="flex items-start space-x-2 text-xs text-slate-300 font-medium">
                            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                            <span>{office.address}</span>
                          </div>
                        )}
                        {office.phone && (
                          <div className="flex items-center space-x-2 text-xs text-slate-400 pt-1">
                            <Phone className="w-3 h-3 text-slate-400 shrink-0" />
                            <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                              {office.phone}
                            </a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Confidentiality Guarantee */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/25 flex items-start space-x-3.5">
                <ShieldCheck className="w-5 h-5 text-[#2bb673] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-bold text-white uppercase tracking-wider block">
                    Strict Commercial Confidentiality
                  </span>
                  <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                    All initial briefings, financial diagnostics, and strategic consultations are protected under commercial non-disclosure protocols.
                  </p>
                </div>
              </div>

            </div>

            {/* ---------------------------------------------------- */}
            {/* RIGHT COLUMN: INTERACTIVE CONSULTATION ENQUIRY FORM  */}
            {/* ---------------------------------------------------- */}
            <div className="lg:col-span-7">
              <div className="bg-white/[0.03] backdrop-blur-md rounded-3xl p-7 sm:p-10 lg:p-12 border border-white/10 shadow-2xl space-y-7">
                
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Start a Conversation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-normal mt-1">
                    Select your area of interest and tell us about your objectives.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-10 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-[#2bb673] border border-emerald-500/30 flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Thank You for Reaching Out
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      We have received your enquiry. An EVOLVE senior advisory director will review your requirements and respond within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* How can we help? Service Selection */}
                    <div className="space-y-3">
                      <label className="block text-xs font-bold text-white uppercase tracking-wider">
                        How can we help? (Select Practice Area)
                      </label>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {serviceOptions.map((opt) => {
                          const isSelected = selectedService === opt.label;
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => setSelectedService(opt.label)}
                              className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2.5 ${
                                isSelected 
                                  ? 'bg-white/[0.08] border-teal-400 ring-2 ring-teal-400/30 text-white shadow-xs' 
                                  : 'bg-white/[0.03] border-white/10 hover:border-white/20 text-slate-300 hover:text-white'
                              }`}
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                {opt.pillar && <PillarIcon type={opt.pillar} className="w-4 h-4 shrink-0" />}
                                <span className="text-xs font-bold leading-snug truncate">
                                  {opt.label}
                                </span>
                              </div>
                              <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                                isSelected ? 'border-[#2bb673] bg-[#2bb673]' : 'border-white/30'
                              }`}>
                                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Organisation & Full Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                          Organisation Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="Your organisation or entity"
                          className="w-full px-4 py-3 rounded-xl border border-white/15 text-sm bg-white/[0.04] text-white placeholder:text-slate-400 focus:bg-white/[0.08] focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all"
                        />
                      </div>

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
                          className="w-full px-4 py-3 rounded-xl border border-white/15 text-sm bg-white/[0.04] text-white placeholder:text-slate-400 focus:bg-white/[0.08] focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Work Email & Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                          className="w-full px-4 py-3 rounded-xl border border-white/15 text-sm bg-white/[0.04] text-white placeholder:text-slate-400 focus:bg-white/[0.08] focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                          Contact Phone (Optional)
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+61 400 000 000"
                          className="w-full px-4 py-3 rounded-xl border border-white/15 text-sm bg-white/[0.04] text-white placeholder:text-slate-400 focus:bg-white/[0.08] focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Message / Strategic Challenge */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Tell us about the challenge you are facing or your key objectives
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Provide details on your current financial, operational, systems or governance objectives..."
                        className="w-full px-4 py-3 rounded-xl border border-white/15 text-sm bg-white/[0.04] text-white placeholder:text-slate-400 focus:bg-white/[0.08] focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full sm:w-auto brand-button-gradient text-white text-sm font-bold px-8 py-3.5 rounded-xl shadow-xl flex items-center justify-center space-x-2.5 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer group"
                      >
                        <span>Start a Conversation</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
