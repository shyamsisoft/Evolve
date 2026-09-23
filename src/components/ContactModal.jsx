import React, { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';

export const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    service: 'CFO & FP&A Advisory',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({ name: '', email: '', organization: '', service: 'CFO & FP&A Advisory', message: '' });
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
        
        {/* Header Bar */}
        <div className="bg-[#061a2e] px-6 py-5 text-white flex items-center justify-between">
          <div>
            <h3 className="text-xl font-extrabold tracking-tight">Start a Conversation</h3>
            <p className="text-xs text-gray-300">Let's discuss how we can move your organisation forward.</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {isSubmitted ? (
          <div className="p-8 text-center space-y-4 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#2bb673] flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-extrabold text-[#061a2e]">Message Sent!</h4>
            <p className="text-sm text-slate-600">
              Thank you for reaching out, {formData.name || 'there'}. Our advisory team will contact you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#061a2e] uppercase mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Sarah Jenkins"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#007791] focus:ring-2 focus:ring-[#007791]/20 transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#061a2e] uppercase mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="sarah@organisation.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#007791] focus:ring-2 focus:ring-[#007791]/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#061a2e] uppercase mb-1">
                  Organisation
                </label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="Company / Council"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#007791] focus:ring-2 focus:ring-[#007791]/20 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#061a2e] uppercase mb-1">
                Primary Interest
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#007791] focus:ring-2 focus:ring-[#007791]/20 transition-all bg-white"
              >
                <option value="CFO & FP&A Advisory">LEAD — CFO & FP&A Advisory</option>
                <option value="Finance Functions & Operating Models">BUILD — Finance Functions & Operating Models</option>
                <option value="Finance Transformation & Data">TRANSFORM — Data, Systems & Tech</option>
                <option value="Tax & Compliance">PROTECT — Tax & Compliance</option>
                <option value="General Strategic Inquiry">General Strategic Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#061a2e] uppercase mb-1">
                How can we support your goals?
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Briefly describe your requirements or timeline..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#007791] focus:ring-2 focus:ring-[#007791]/20 transition-all"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full brand-button-gradient text-white text-sm font-bold py-3 rounded-xl flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
