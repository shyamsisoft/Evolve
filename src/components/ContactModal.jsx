import React, { useState } from 'react';
import { X, Send, CheckCircle, ArrowRight, Shield, Phone, Mail, Clock, Building2 } from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';

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
    `w-full px-4 py-3.5 rounded-xl border text-sm font-medium transition-all outline-none text-white ${
      focusedField === field
        ? 'border-teal-400 ring-2 ring-teal-400/20 bg-white/[0.08] shadow-sm'
        : 'border-white/15 hover:border-white/30 bg-white/[0.04]'
    } placeholder:text-slate-400`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 font-['Inter',sans-serif]"
      style={{ background: 'rgba(6,26,46,0.85)', backdropFilter: 'blur(12px)' }}
    >
      {/* Backdrop click close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Panel */}
      <div
        className="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in zoom-in-95 fade-in duration-300 border border-white/15 bg-[#061a2e]"
        style={{ maxHeight: '92vh' }}
      >

        {/* ─── LEFT: Executive Brand Panel ─── */}
        <div className="relative md:w-80 flex-shrink-0 bg-[#061a2e] text-white flex flex-col justify-between overflow-hidden border-b md:border-b-0 md:border-r border-white/10">

          {/* Background image */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <img
              src={imgUrl('/images/hero_summit.jpg')}
              alt="Evolve Advisory"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#061a2e]/95 via-[#061a2e]/85 to-[#061a2e]/95 z-0" />

          {/* Top content */}
          <div className="relative z-10 p-7 space-y-5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[11px] font-bold text-emerald-300 uppercase tracking-wider border border-white/15">
              <Shield className="w-3.5 h-3.5 text-[#2bb673]" />
              <span>Advisory Briefing</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-white leading-tight">
                Start a Conversation
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Connect with our senior finance specialists to explore how we can support your strategic objectives.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-2.5 text-xs text-slate-300">
                <Shield className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Strict Client Confidentiality Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>Response within 1 business day</span>
              </div>
            </div>
          </div>

          {/* Bottom contact info */}
          <div className="relative z-10 p-7 border-t border-white/10 space-y-2 bg-white/[0.02]">
            <div className="flex items-center space-x-2 text-[11px] text-slate-400 font-medium">
              <Mail className="w-3.5 h-3.5 text-teal-400" />
              <span>advisory@evolve-solutions.com</span>
            </div>
            <div className="flex items-center space-x-2 text-[11px] text-slate-400 font-medium">
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>+1 (800) 555-EVOLVE</span>
            </div>
          </div>

        </div>

        {/* ─── RIGHT: Form Panel ─── */}
        <div className="flex-1 bg-[#0B2440] text-white flex flex-col overflow-y-auto">

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-9 h-9 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-slate-300 hover:text-white flex items-center justify-center transition-all border border-white/10 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {isSubmitted ? (
            /* ── Success State ── */
            <div className="flex-1 flex flex-col items-center justify-center p-12 text-center space-y-5 animate-in zoom-in-95 fade-in duration-300">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400/40 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-emerald-400" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-white">Enquiry Received!</h4>
                <p className="text-sm text-slate-300 font-normal max-w-xs">
                  Thank you, <strong className="text-white">{formData.name || 'there'}</strong>. Our senior advisory team will reach out to you within one business day.
                </p>
              </div>
              <div className="px-5 py-2.5 rounded-full bg-white/[0.08] text-emerald-300 text-xs font-bold border border-white/10">
                Closing automatically…
              </div>
            </div>
          ) : (
            /* ── Form ── */
            <form onSubmit={handleSubmit} className="p-8 space-y-5 flex-1">

              <div className="space-y-1 mb-6">
                <h3 className="text-xl font-bold text-white">Send an Enquiry</h3>
                <p className="text-xs text-slate-400 font-normal">All fields marked * are required.</p>
              </div>

              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider">
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
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider">
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
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider">
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
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                  Primary Interest
                </label>
                <div className="flex flex-wrap gap-2">
                  {services.map((s) => (
                    <button
                      key={s.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, service: s.value })}
                      className={`px-3 py-2 rounded-xl text-[11px] font-bold border transition-all cursor-pointer ${
                        formData.service === s.value
                          ? 'bg-white/[0.12] text-white border-teal-400 ring-2 ring-teal-400/30 shadow-md scale-105'
                          : 'bg-white/[0.03] text-slate-300 border-white/10 hover:border-white/25 hover:text-white'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider">
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
                  className="w-full brand-button-gradient text-white font-bold py-4 rounded-2xl flex items-center justify-center space-x-2.5 shadow-xl hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] transition-all text-sm cursor-pointer"
                >
                  <span>Send Enquiry to Advisory Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-center text-[10px] text-slate-400 font-normal mt-3">
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
