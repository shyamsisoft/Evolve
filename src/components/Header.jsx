import React, { useState, useEffect } from 'react';
import { BrandLogo, PillarIcon } from './BrandLogo';
import { Menu, X, ChevronDown, Sparkles, Lock, UserCheck, Settings, LogOut } from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';

export const Header = ({
  data,
  activePage,
  adminUser,
  onOpenLogin,
  onLogout,
  onOpenContact,
  onToggleCMS,
  isCMSOpen,
  onNavigate,
  onGoHome
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [whatWeDoOpen, setWhatWeDoOpen] = useState(false);
  const [whoWeHelpOpen, setWhoWeHelpOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

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
        <div className="flex items-center justify-between gap-3">
          {/* Brand Logo */}
          <button onClick={onGoHome} className="flex items-center text-left flex-shrink-0 cursor-pointer">
            <BrandLogo variant={activePage === 'protect' ? 'taxation' : 'full'} />
          </button>

          {/* Desktop Navigation - Strictly One Line */}
          <nav className="hidden md:flex items-center space-x-3 lg:space-x-4 xl:space-x-6 flex-shrink-0">
            
            {/* HOME */}
            <button
              onClick={onGoHome}
              className="text-xs lg:text-[13px] xl:text-sm font-semibold text-[#061a2e] hover:text-[#007791] transition-colors py-1.5 whitespace-nowrap cursor-pointer"
            >
              Home
            </button>

            {/* WHO WE HELP DROPDOWN */}
            <div
              className="relative group flex-shrink-0"
              onMouseEnter={() => setWhoWeHelpOpen(true)}
              onMouseLeave={() => setWhoWeHelpOpen(false)}
            >
              <button
                onClick={() => onNavigate('who-we-help')}
                className="flex items-center text-xs lg:text-[13px] xl:text-sm font-semibold text-[#061a2e] hover:text-[#007791] transition-colors py-1.5 whitespace-nowrap cursor-pointer"
              >
                <span>Who We Help</span>
                <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform duration-200 flex-shrink-0 ${whoWeHelpOpen ? 'rotate-180 text-[#007791]' : 'text-gray-400'}`} />
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
              className="relative group flex-shrink-0"
              onMouseEnter={() => setWhatWeDoOpen(true)}
              onMouseLeave={() => setWhatWeDoOpen(false)}
            >
              <button
                onClick={() => onNavigate('what-we-do')}
                className="flex items-center text-xs lg:text-[13px] xl:text-sm font-semibold text-[#061a2e] hover:text-[#007791] transition-colors py-1.5 whitespace-nowrap cursor-pointer"
              >
                <span>What We Do</span>
                <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform duration-200 flex-shrink-0 ${whatWeDoOpen ? 'rotate-180 text-[#007791]' : 'text-gray-400'}`} />
              </button>

              {whatWeDoOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2.5 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <button onClick={() => { setWhatWeDoOpen(false); onNavigate('lead'); }} className="w-full text-left p-2.5 rounded-lg hover:bg-[#f0f5fa] transition-colors flex items-center gap-3">
                    <PillarIcon type="lead" className="w-5 h-5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-[#061a2e]">LEAD — CFO & FP&A Advisory</div>
                      <div className="text-[11px] text-gray-500 font-medium">Strategic financial leadership</div>
                    </div>
                  </button>
                  <button onClick={() => { setWhatWeDoOpen(false); onNavigate('build'); }} className="w-full text-left p-2.5 rounded-lg hover:bg-[#f0f5fa] transition-colors flex items-center gap-3">
                    <PillarIcon type="build" className="w-5 h-5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-[#061a2e]">BUILD — Finance Functions</div>
                      <div className="text-[11px] text-gray-500 font-medium">Operating models & governance</div>
                    </div>
                  </button>
                  <button onClick={() => { setWhatWeDoOpen(false); onNavigate('transform'); }} className="w-full text-left p-2.5 rounded-lg hover:bg-[#f0f5fa] transition-colors flex items-center gap-3">
                    <PillarIcon type="transform" className="w-5 h-5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-[#061a2e]">TRANSFORM — Data & Tech</div>
                      <div className="text-[11px] text-gray-500 font-medium">Technology & BI analytics</div>
                    </div>
                  </button>
                  <button onClick={() => { setWhatWeDoOpen(false); onNavigate('protect'); }} className="w-full text-left p-2.5 rounded-lg hover:bg-[#f0f5fa] transition-colors flex items-center gap-3">
                    <PillarIcon type="protect" className="w-5 h-5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-[#061a2e]">PROTECT — Tax & Compliance</div>
                      <div className="text-[11px] text-gray-500 font-medium">Confidence & regulatory defense</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* INSIGHTS */}
            <button
              onClick={() => onNavigate('insights')}
              className="text-xs lg:text-[13px] xl:text-sm font-semibold text-[#061a2e] hover:text-[#007791] transition-colors py-1.5 whitespace-nowrap cursor-pointer"
            >
              Insights
            </button>

            {/* ABOUT */}
            <button
              onClick={() => onNavigate('about')}
              className="text-xs lg:text-[13px] xl:text-sm font-semibold text-[#061a2e] hover:text-[#007791] transition-colors py-1.5 whitespace-nowrap cursor-pointer"
            >
              About
            </button>

            {/* CONTACT */}
            <button
              onClick={() => onNavigate('contact')}
              className="text-xs lg:text-[13px] xl:text-sm font-semibold text-[#061a2e] hover:text-[#007791] transition-colors py-1.5 whitespace-nowrap cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Right Action Controls: Contact CTA */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <button
              onClick={onOpenContact}
              className="brand-button-gradient text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 rounded-full flex items-center space-x-1.5 shadow-md hover:shadow-lg whitespace-nowrap flex-shrink-0 cursor-pointer"
            >
              <span>{data.ctaText}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-1.5 rounded-lg text-[#061a2e] hover:bg-gray-100">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-2">
            <button onClick={() => { setMobileMenuOpen(false); onGoHome(); }} className="text-left font-semibold text-[#061a2e] py-1.5 text-sm hover:text-[#007791]">Home</button>
            <button onClick={() => { setMobileMenuOpen(false); onNavigate('who-we-help'); }} className="text-left font-semibold text-[#061a2e] py-1.5 text-sm hover:text-[#007791]">Who We Help</button>
            <button onClick={() => { setMobileMenuOpen(false); onNavigate('what-we-do'); }} className="text-left font-semibold text-[#061a2e] py-1.5 text-sm hover:text-[#007791]">What We Do</button>
            <button onClick={() => { setMobileMenuOpen(false); onNavigate('insights'); }} className="text-left font-semibold text-[#061a2e] py-1.5 text-sm hover:text-[#007791]">Insights</button>
            <button onClick={() => { setMobileMenuOpen(false); onNavigate('about'); }} className="text-left font-semibold text-[#061a2e] py-1.5 text-sm hover:text-[#007791]">About</button>
            <button onClick={() => { setMobileMenuOpen(false); onNavigate('contact'); }} className="text-left font-semibold text-[#061a2e] py-1.5 text-sm hover:text-[#007791]">Contact</button>
          </nav>

          <div className="pt-2 border-t border-gray-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full brand-button-gradient text-white text-xs sm:text-sm font-bold py-2.5 rounded-full flex items-center justify-center space-x-1.5 shadow-md active:scale-95 transition-transform"
            >
              <span>{data.ctaText || "Start a Conversation"}</span>
            </button>
          </div>

          {adminUser ? (
            <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onToggleCMS();
                }}
                className="text-xs font-bold text-emerald-600 flex items-center space-x-1.5 py-1"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                <span>Edit Site CMS</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onLogout();
                }}
                className="text-xs font-semibold text-rose-500 py-1"
              >
                Logout ({adminUser.name})
              </button>
            </div>
          ) : (
            <div className="pt-1 border-t border-gray-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="text-xs font-semibold text-gray-500 hover:text-gray-700 flex items-center space-x-1.5 py-1"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Admin Login</span>
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
