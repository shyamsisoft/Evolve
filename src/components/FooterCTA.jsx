import React from 'react';
import { BrandLogo } from './BrandLogo';
import { ArrowRight, Globe, Share2 } from 'lucide-react';

export const FooterCTA = ({ ctaData, footerData, onOpenContact }) => {
  return (
    <>
      {/* Pre-footer CTA Banner */}
      <section className="relative py-20 bg-[#061a2e] text-white overflow-hidden border-b border-slate-800">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <img
            src={ctaData.bgImage || "/images/hero_summit.jpg"}
            alt="Let's move forward"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#061a2e] via-[#061a2e]/90 to-[#007791]/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Title & Tag */}
            <div className="lg:col-span-7 space-y-3">
              <span className="text-sm font-black uppercase tracking-widest text-[#2bb673]">
                {ctaData.tag}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                {ctaData.title}
              </h2>
              <p className="text-lg sm:text-xl text-gray-200 max-w-xl font-medium pt-1">
                {ctaData.subtitle}
              </p>
            </div>

            {/* CTA Button */}
            <div className="lg:col-span-5 lg:flex lg:justify-end">
              <button
                onClick={onOpenContact}
                className="brand-button-gradient text-white text-lg font-extrabold px-9 py-4.5 rounded-full flex items-center space-x-3 shadow-2xl hover:scale-105 transition-transform"
              >
                <span>{ctaData.buttonText}</span>
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer id="contact" className="bg-[#04111f] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-12 border-b border-slate-800">
            {/* Logo */}
            <a href="#home">
              <BrandLogo variant="dark" />
            </a>

            {/* Quick Links */}
            <nav className="flex flex-wrap gap-x-10 gap-y-4">
              <a href="#home" className="text-base font-bold text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#who-we-help" className="text-base font-bold text-gray-300 hover:text-white transition-colors">Who We Help</a>
              <a href="#what-we-do" className="text-base font-bold text-gray-300 hover:text-white transition-colors">What We Do</a>
              <a href="#insights" className="text-base font-bold text-gray-300 hover:text-white transition-colors">Insights</a>
              <a href="#about" className="text-base font-bold text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-base font-bold text-gray-300 hover:text-white transition-colors">Contact</a>
            </nav>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-slate-800/80 hover:bg-[#007791] text-gray-300 hover:text-white transition-colors"
                title="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-slate-800/80 hover:bg-[#007791] text-gray-300 hover:text-white transition-colors"
                title="YouTube"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom Copyright & Terms */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-sm text-gray-400 space-y-4 sm:space-y-0 font-medium">
            <p>{footerData.copyright}</p>
            <div className="flex items-center space-x-6">
              <a href="#privacy" className="hover:text-gray-200 transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#terms" className="hover:text-gray-200 transition-colors">Terms</a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};
