import React, { useState } from 'react';
import { X, Send, CheckCircle, ArrowRight, Shield, Phone, Mail, Clock, Sparkles, Building2 } from 'lucide-react';

const services = [
  { value: 'CFO & FP&A Advisory', label: 'LEAD — CFO & FP&A Advisory', color: '#2bb673' },
  { value: 'Finance Functions & Operating Models', label: 'BUILD — Finance Functions & Operating Models', color: '#007791' },
  { value: 'Finance Transformation & Data', label: 'TRANSFORM — Data, Systems & Tech', color: '#0891b2' },
  { value: 'Tax & Compliance', label: 'PROTECT — Tax & Compliance', color: '#7c3aed' },
  { value: 'General Strategic Inquiry', label: 'General Strategic Inquiry', color: '#64748b' },
];

export const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    service: 'CFO & FP&A Advisory',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({ name: '', email: '', organization: '', service: 'CFO & FP&A Advisory', message: '' });
    }, 3000);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3.5 rounded-xl border text-sm font-medium transition-all outline-none bg-white/80 ${
      focusedField === field
        ? 'border-[#007791] ring-2 ring-[#007791]/15 bg-white shadow-sm'
        : 'border-slate-200 hover:border-slate-300 text-slate-800'
    } placeholder:text-slate-400`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(6,26,46,0.75)', backdropFilter: 'blur(8px)' }}
    >
      {/* Backdrop click close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Panel */}
      <div
        className="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in zoom-in-95 fade-in duration-300"
        style={{ maxHeight: '92vh' }}
      >

        {/* ─── LEFT: Executive Brand Panel ─── */}
        <div className="relative md:w-80 flex-shrink-0 bg-[#061a2e] text-white flex flex-col justify-between overflow-hidden">

          {/* Background image */}
          <div className="absolute inset-0 opacity-15">
            <img
              src="/images/finance_meeting.jpg"
              alt="Executive Advisory"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#061a2e]/60 via-[#061a2e]/80 to-[#061a2e]" />

          {/* Content */}
          <div className="relative z-10 p-8 space-y-6 flex-1 flex flex-col justify-between">

            {/* Top section */}
            <div className="space-y-6">
              {/* Logo-style badge */}
              <div className="inline-flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-[#2bb673] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-[#2bb673]">EVOLVE Advisory</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-black text-white leading-snug">
                  Let's Start a Strategic Conversation
                </h3>
                <p className="text-sm text-gray-300 font-medium leading-relaxed">
                  Our senior advisory partners respond within one business day to discuss how we can support your financial and transformation goals.
                </p>
              </div>

              {/* Trust bullets */}
              <div className="space-y-3 pt-2">
                {[
                  { icon: Clock, text: '1 Business Day Response' },
                  { icon: Shield, text: 'Confidential & Obligation-Free' },
                  { icon: Building2, text: 'Senior Partner Direct Access' },
                ].map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-center space-x-3 text-xs font-bold text-gray-200">
                    <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3.5 h-3.5 text-[#2bb673]" />
                    </div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom contact strip */}
            <div className="space-y-2 pt-4 border-t border-white/10">
              <div className="flex items-center space-x-2 text-[11px] text-gray-400 font-medium">
                <Mail className="w-3.5 h-3.5 text-[#2bb673]" />
                <span>advisory@evolve.com</span>
              </div>
              <div className="flex items-center space-x-2 text-[11px] text-gray-400 font-medium">
                <Phone className="w-3.5 h-3.5 text-[#007791]" />
                <span>+1 (800) 555-EVOLVE</span>
              </div>
            </div>

          </div>
        </div>

        {/* ─── RIGHT: Form Panel ─── */}
        <div className="flex-1 bg-white flex flex-col overflow-y-auto">

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-all"
          >
            <X className="w-4 h-4" />
          </button>

          {isSubmitted ? (
            /* ── Success State ── */
            <div className="flex-1 flex flex-col items-center justify-center p-12 text-center space-y-5 animate-in zoom-in-95 fade-in duration-300">
              <div className="w-20 h-20 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-[#2bb673]" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-black text-[#061a2e]">Enquiry Received!</h4>
                <p className="text-sm text-slate-500 font-medium max-w-xs">
                  Thank you, <strong className="text-[#061a2e]">{formData.name || 'there'}</strong>. Our senior advisory team will reach out to you within one business day.
                </p>
              </div>
              <div className="px-5 py-2.5 rounded-full bg-[#061a2e] text-white text-xs font-bold">
                Closing automatically…
              </div>
            </div>
          ) : (
            /* ── Form ── */
            <form onSubmit={handleSubmit} className="p-8 space-y-5 flex-1">

              <div className="space-y-1 mb-6">
                <h3 className="text-xl font-black text-[#061a2e]">Send an Enquiry</h3>
                <p className="text-xs text-slate-500 font-medium">All fields marked * are required.</p>
              </div>

              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-black text-slate-600 uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="e.g. Sarah Jenkins"
                  className={inputClass('name')}
                />
              </div>

              {/* Email + Org */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-black text-slate-600 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="sarah@company.com"
                    className={inputClass('email')}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-black text-slate-600 uppercase tracking-wider">
                    Organisation
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    onFocus={() => setFocusedField('org')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Company / Council / NFP"
                    className={inputClass('org')}
                  />
                </div>
              </div>

              {/* Service Interest — Visual pill selector */}
              <div className="space-y-2">
                <label className="block text-[11px] font-black text-slate-600 uppercase tracking-wider">
                  Primary Interest
                </label>
                <div className="flex flex-wrap gap-2">
                  {services.map((s) => (
                    <button
                      key={s.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, service: s.value })}
                      className={`px-3 py-2 rounded-xl text-[11px] font-extrabold border transition-all ${
                        formData.service === s.value
                          ? 'bg-[#061a2e] text-white border-[#061a2e] shadow-md scale-105'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-400'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-black text-slate-600 uppercase tracking-wider">
                  How Can We Support Your Goals?
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Briefly describe your requirements, challenges or timeline…"
                  className={inputClass('message')}
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full brand-button-gradient text-white font-extrabold py-4 rounded-2xl flex items-center justify-center space-x-2.5 shadow-xl hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] transition-all text-sm"
                >
                  <span>Send Enquiry to Advisory Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-center text-[10px] text-slate-400 font-medium mt-3">
                  By submitting, you agree to our Privacy Policy. We never share your details.
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
