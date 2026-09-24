import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';

export const Header = ({ data, onOpenContact, onToggleCMS, isCMSOpen, onNavigate, onGoHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [whatWeDoOpen, setWhatWeDoOpen] = useState(false);
  const [whoWeHelpOpen, setWhoWeHelpOpen] = useState(false);

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
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5'
          : 'bg-white/85 backdrop-blur-sm py-3 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button onClick={onGoHome} className="flex items-center text-left">
            <BrandLogo variant="full" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            
            {/* HOME */}
            <button
              onClick={onGoHome}
              className="text-[13px] sm:text-sm font-semibold text-[#061a2e] hover:text-[#007791] transition-colors py-1.5"
            >
              Home
            </button>

            {/* WHO WE HELP DROPDOWN */}
            <div
              className="relative group"
              onMouseEnter={() => setWhoWeHelpOpen(true)}
              onMouseLeave={() => setWhoWeHelpOpen(false)}
            >
              <button
                onClick={() => onNavigate('who-we-help')}
                className="flex items-center text-[13px] sm:text-sm font-semibold text-[#061a2e] hover:text-[#007791] transition-colors py-1.5"
              >
                <span>Who We Help</span>
                <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform duration-200 ${whoWeHelpOpen ? 'rotate-180 text-[#007791]' : 'text-gray-400'}`} />
              </button>

              {whoWeHelpOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2.5 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <button onClick={() => { setWhoWeHelpOpen(false); onNavigate('growing-businesses'); }} className="w-full text-left p-2.5 rounded-lg hover:bg-[#f0f5fa] transition-colors">
                    <div className="text-xs font-bold text-[#061a2e]">Growing Businesses</div>
                    <div className="text-[11px] text-gray-500 font-medium">Fast-scaling mid-market enterprises</div>
                  </button>
                  <button onClick={() => { setWhoWeHelpOpen(false); onNavigate('established-corporate'); }} className="w-full text-left p-2.5 rounded-lg hover:bg-[#f0f5fa] transition-colors">
                    <div className="text-xs font-bold text-[#061a2e]">Established & Corporate</div>
                    <div className="text-[11px] text-gray-500 font-medium">Enterprise performance & governance</div>
                  </button>
                  <button onClick={() => { setWhoWeHelpOpen(false); onNavigate('non-profit-community'); }} className="w-full text-left p-2.5 rounded-lg hover:bg-[#f0f5fa] transition-colors">
                    <div className="text-xs font-bold text-[#061a2e]">Not-for-Profit & Community</div>
                    <div className="text-[11px] text-gray-500 font-medium">Grant accounting & donor transparency</div>
                  </button>
                  <button onClick={() => { setWhoWeHelpOpen(false); onNavigate('local-government'); }} className="w-full text-left p-2.5 rounded-lg hover:bg-[#f0f5fa] transition-colors">
                    <div className="text-xs font-bold text-[#061a2e]">Local Government</div>
                    <div className="text-[11px] text-gray-500 font-medium">Civic long-term asset planning</div>
                  </button>
                </div>
              )}
            </div>

            {/* WHAT WE DO DROPDOWN */}
            <div
              className="relative group"
              onMouseEnter={() => setWhatWeDoOpen(true)}
              onMouseLeave={() => setWhatWeDoOpen(false)}
            >
              <button
                onClick={() => onNavigate('what-we-do')}
                className="flex items-center text-[13px] sm:text-sm font-semibold text-[#061a2e] hover:text-[#007791] transition-colors py-1.5"
              >
                <span>What We Do</span>
                <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform duration-200 ${whatWeDoOpen ? 'rotate-180 text-[#007791]' : 'text-gray-400'}`} />
              </button>

              {whatWeDoOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2.5 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <button onClick={() => { setWhatWeDoOpen(false); onNavigate('lead'); }} className="w-full text-left p-2.5 rounded-lg hover:bg-[#f0f5fa] transition-colors">
                    <div className="text-xs font-bold text-[#061a2e]">LEAD — CFO & FP&A Advisory</div>
                    <div className="text-[11px] text-gray-500 font-medium">Strategic financial leadership</div>
                  </button>
                  <button onClick={() => { setWhatWeDoOpen(false); onNavigate('build'); }} className="w-full text-left p-2.5 rounded-lg hover:bg-[#f0f5fa] transition-colors">
                    <div className="text-xs font-bold text-[#061a2e]">BUILD — Finance Functions</div>
                    <div className="text-[11px] text-gray-500 font-medium">Operating models & governance</div>
                  </button>
                  <button onClick={() => { setWhatWeDoOpen(false); onNavigate('transform'); }} className="w-full text-left p-2.5 rounded-lg hover:bg-[#f0f5fa] transition-colors">
                    <div className="text-xs font-bold text-[#061a2e]">TRANSFORM — Data & Tech</div>
                    <div className="text-[11px] text-gray-500 font-medium">Technology & BI analytics</div>
                  </button>
                  <button onClick={() => { setWhatWeDoOpen(false); onNavigate('protect'); }} className="w-full text-left p-2.5 rounded-lg hover:bg-[#f0f5fa] transition-colors">
                    <div className="text-xs font-bold text-[#061a2e]">PROTECT — Tax & Compliance</div>
                    <div className="text-[11px] text-gray-500 font-medium">Confidence & regulatory defense</div>
                  </button>
                </div>
              )}
            </div>

            {/* INSIGHTS */}
            <button
              onClick={() => onNavigate('insights')}
              className="text-[13px] sm:text-sm font-semibold text-[#061a2e] hover:text-[#007791] transition-colors py-1.5"
            >
              Insights
            </button>

            {/* ABOUT */}
            <button
              onClick={() => onNavigate('about')}
              className="text-[13px] sm:text-sm font-semibold text-[#061a2e] hover:text-[#007791] transition-colors py-1.5"
            >
              About
            </button>

            {/* CONTACT */}
            <button
              onClick={() => onNavigate('contact')}
              className="text-[13px] sm:text-sm font-semibold text-[#061a2e] hover:text-[#007791] transition-colors py-1.5"
            >
              Contact
            </button>
          </nav>

          {/* Right Action Controls */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={onToggleCMS}
              className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs font-bold rounded-full transition-all border ${
                isCMSOpen ? 'bg-emerald-500 text-white border-emerald-600 shadow-md' : 'bg-slate-100 text-[#061a2e] border-slate-200 hover:bg-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isCMSOpen ? 'Close CMS Editor' : '⚡ Edit Site CMS'}</span>
            </button>

            <button
              onClick={onOpenContact}
              className="brand-button-gradient text-white text-xs sm:text-sm font-bold px-5 py-2 rounded-full flex items-center space-x-1.5 shadow-md hover:shadow-lg"
            >
              <span>{data.ctaText}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button onClick={onToggleCMS} className="p-1.5 bg-emerald-100 text-emerald-800 rounded-lg text-xs font-bold flex items-center">
              <Sparkles className="w-4 h-4" />
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-1.5 rounded-lg text-[#061a2e] hover:bg-gray-100">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            <button onClick={() => { setMobileMenuOpen(false); onGoHome(); }} className="text-left font-semibold text-[#061a2e] py-1.5">Home</button>
            <button onClick={() => { setMobileMenuOpen(false); onNavigate('who-we-help'); }} className="text-left font-semibold text-[#061a2e] py-1.5">Who We Help</button>
            <button onClick={() => { setMobileMenuOpen(false); onNavigate('what-we-do'); }} className="text-left font-semibold text-[#061a2e] py-1.5">What We Do</button>
            <button onClick={() => { setMobileMenuOpen(false); onNavigate('insights'); }} className="text-left font-semibold text-[#061a2e] py-1.5">Insights</button>
            <button onClick={() => { setMobileMenuOpen(false); onNavigate('about'); }} className="text-left font-semibold text-[#061a2e] py-1.5">About</button>
            <button onClick={() => { setMobileMenuOpen(false); onNavigate('contact'); }} className="text-left font-semibold text-[#061a2e] py-1.5">Contact</button>
          </nav>
        </div>
      )}
    </header>
  );
};
