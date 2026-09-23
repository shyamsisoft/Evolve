import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';

export const Header = ({ data, onOpenContact, onToggleCMS, isCMSOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [whatWeDoOpen, setWhatWeDoOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-white/80 backdrop-blur-sm py-4 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center">
            <BrandLogo variant="full" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            {data.navLinks.map((link, idx) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={idx}
                    className="relative group"
                    onMouseEnter={() => setWhatWeDoOpen(true)}
                    onMouseLeave={() => setWhatWeDoOpen(false)}
                  >
                    <a
                      href={link.href}
                      className="flex items-center text-sm font-semibold text-[#061a2e] hover:text-[#007791] transition-colors py-2"
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${whatWeDoOpen ? 'rotate-180 text-[#007791]' : 'text-gray-400'}`} />
                    </a>

                    {/* Dropdown Menu */}
                    {whatWeDoOpen && (
                      <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-3 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <a
                          href="#what-we-do"
                          className="flex items-start p-2.5 rounded-lg hover:bg-[#f0f5fa] transition-colors group/item"
                        >
                          <div>
                            <div className="text-xs font-bold text-[#061a2e] group-hover/item:text-[#007791]">
                              CFO & FP&A Advisory
                            </div>
                            <div className="text-[11px] text-gray-500">Strategic financial leadership</div>
                          </div>
                        </a>
                        <a
                          href="#what-we-do"
                          className="flex items-start p-2.5 rounded-lg hover:bg-[#f0f5fa] transition-colors group/item"
                        >
                          <div>
                            <div className="text-xs font-bold text-[#061a2e] group-hover/item:text-[#007791]">
                              Finance Functions & Operating Models
                            </div>
                            <div className="text-[11px] text-gray-500">People, process & governance</div>
                          </div>
                        </a>
                        <a
                          href="#what-we-do"
                          className="flex items-start p-2.5 rounded-lg hover:bg-[#f0f5fa] transition-colors group/item"
                        >
                          <div>
                            <div className="text-xs font-bold text-[#061a2e] group-hover/item:text-[#007791]">
                              Finance Transformation & Data
                            </div>
                            <div className="text-[11px] text-gray-500">Technology & analytics</div>
                          </div>
                        </a>
                        <a
                          href="#what-we-do"
                          className="flex items-start p-2.5 rounded-lg hover:bg-[#f0f5fa] transition-colors group/item"
                        >
                          <div>
                            <div className="text-xs font-bold text-[#061a2e] group-hover/item:text-[#007791]">
                              Tax & Compliance
                            </div>
                            <div className="text-[11px] text-gray-500">Confidence & regulatory defense</div>
                          </div>
                        </a>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={idx}
                  href={link.href}
                  className="text-sm font-semibold text-[#061a2e] hover:text-[#007791] transition-colors py-2"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* CMS Toggle Button */}
            <button
              onClick={onToggleCMS}
              className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs font-bold rounded-full transition-all border ${
                isCMSOpen
                  ? 'bg-emerald-500 text-white border-emerald-600 shadow-md'
                  : 'bg-slate-100 text-[#061a2e] border-slate-200 hover:bg-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isCMSOpen ? 'Close CMS Editor' : '⚡ Edit Site CMS'}</span>
            </button>

            {/* Start a Conversation CTA Button */}
            <button
              onClick={onOpenContact}
              className="brand-button-gradient text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full flex items-center space-x-1.5 shadow-md hover:shadow-lg"
            >
              <span>{data.ctaText}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onToggleCMS}
              className="p-1.5 bg-emerald-100 text-emerald-800 rounded-lg text-xs font-bold flex items-center"
            >
              <Sparkles className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#061a2e] hover:bg-gray-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col space-y-2">
            {data.navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-[#061a2e] hover:text-[#007791] py-2 px-3 rounded-lg hover:bg-gray-50"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-gray-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full brand-button-gradient text-white text-sm font-bold px-5 py-3 rounded-xl flex items-center justify-center space-x-2 shadow-md"
            >
              <span>{data.ctaText}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
