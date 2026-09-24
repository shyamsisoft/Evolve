import React, { useState, useEffect } from 'react';
import { ArrowLeft, Mail, Phone, MapPin, Send, CheckCircle, HelpCircle, Clock, ShieldCheck, Sparkles } from 'lucide-react';

export const ContactPage = ({ data, onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    service: 'CFO & FP&A Advisory',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', organization: '', service: 'CFO & FP&A Advisory', message: '' });
    }, 3000);
  };

  const faqs = [
    { q: "What types of organisations do you work with?", a: "We partner with growing mid-market enterprises, established corporations, not-for-profit organisations, and local government authorities." },
    { q: "How quickly can an interim CFO or FP&A advisor engage?", a: "Our executive advisors can mobilize within 3 to 5 business days following an initial baseline briefing." },
    { q: "Do you offer project-based or ongoing engagements?", a: "We provide flexible engagement models ranging from specific transformation projects to ongoing fractional advisory support." }
  ];

  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-300">
      
      {/* HERO BANNER */}
      <section className="relative bg-[#061a2e] text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src="/images/hero_summit.jpg" alt="Contact" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#061a2e] via-[#061a2e]/90 to-[#007791]/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center space-x-3 text-xs sm:text-sm font-bold text-gray-300">
            <button onClick={onBack} className="inline-flex items-center space-x-1.5 text-emerald-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-white">Contact Advisory Team</span>
          </div>

          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-[#2bb673]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Executive Access</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white max-w-4xl leading-tight">
            {data.title}
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 font-medium max-w-3xl leading-relaxed">
            {data.subtitle}
          </p>
        </div>
      </section>

      {/* SLA BADGES BAR */}
      <section className="py-8 bg-[#08213b] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3 p-2">
              <Clock className="w-6 h-6 text-[#2bb673]" />
              <span className="text-sm font-bold">Guaranteed 24h Inquiry Response</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-2">
              <ShieldCheck className="w-6 h-6 text-[#007791]" />
              <span className="text-sm font-bold">Confidential NDA Protection</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-2">
              <CheckCircle className="w-6 h-6 text-emerald-400" />
              <span className="text-sm font-bold">Direct Senior Partner Oversight</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM & OFFICES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form Column */}
            <div className="lg:col-span-7 bg-[#f7f9fc] p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-lg">
              {isSubmitted ? (
                <div className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#2bb673] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-[#061a2e]">Advisory Request Received</h3>
                  <p className="text-base text-slate-600">Thank you, {formData.name}. Our senior partner team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-2xl font-black text-[#061a2e]">Send a Strategic Inquiry</h3>
                  
                  <div>
                    <label className="block text-xs font-bold text-[#061a2e] uppercase mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. David Ross"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#007791]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#061a2e] uppercase mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="david@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#007791]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#061a2e] uppercase mb-1">Organisation</label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Enterprise Name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#007791]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#061a2e] uppercase mb-1">Primary Area of Interest</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#007791]"
                    >
                      <option value="CFO & FP&A Advisory">LEAD — CFO & FP&A Advisory</option>
                      <option value="Finance Operating Models">BUILD — Finance Operating Models</option>
                      <option value="Finance Transformation & Data">TRANSFORM — Data & Tech</option>
                      <option value="Tax & Compliance">PROTECT — Tax & Compliance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#061a2e] uppercase mb-1">Message / Requirements</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your current finance, technology, or governance goals..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#007791]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full brand-button-gradient text-white font-extrabold py-4 rounded-xl flex items-center justify-center space-x-2 shadow-lg hover:scale-[1.02] transition-all"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Offices & FAQ Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#061a2e] text-white p-8 rounded-3xl space-y-4 shadow-xl border border-slate-800">
                <h3 className="text-xl font-extrabold text-white">Advisory Headquarters</h3>
                <div className="space-y-4 text-sm text-gray-300">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-[#2bb673] flex-shrink-0" />
                    <span>Financial District Executive Plaza, Level 24</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-[#2bb673] flex-shrink-0" />
                    <span>+1 (800) 555-EVOLVE</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-[#2bb673] flex-shrink-0" />
                    <span>advisory@evolve.com</span>
                  </div>
                </div>
              </div>

              {/* FAQ Accordion */}
              <div className="space-y-4">
                <h3 className="text-xl font-black text-[#061a2e]">Frequently Asked Questions</h3>
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="p-5 bg-[#f7f9fc] rounded-2xl border border-slate-200 space-y-2 cursor-pointer hover:border-[#007791]/50 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-extrabold text-[#061a2e]">{faq.q}</h4>
                      <span className="text-[#007791] font-black">{activeFaq === idx ? '-' : '+'}</span>
                    </div>
                    {activeFaq === idx && (
                      <p className="text-sm text-slate-600 font-medium leading-relaxed pt-1 animate-in fade-in">{faq.a}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
