import React, { useState, useEffect, useRef } from 'react';
import { BrandLogo, PillarIcon } from './BrandLogo';
import { Menu, X, ChevronDown, Sliders, Lock, ArrowRight } from 'lucide-react';
import { imgUrl } from '../utils/imgUrl';

export const Header = ({
  data,
  brandSettings,
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

  const whoWeHelpTimeoutRef = useRef(null);
  const whatWeDoTimeoutRef = useRef(null);

  const handleWhoWeHelpEnter = () => {
    if (whoWeHelpTimeoutRef.current) clearTimeout(whoWeHelpTimeoutRef.current);
    if (whatWeDoTimeoutRef.current) clearTimeout(whatWeDoTimeoutRef.current);
    setWhatWeDoOpen(false);
    setWhoWeHelpOpen(true);
  };

  const handleWhoWeHelpLeave = () => {
    if (whoWeHelpTimeoutRef.current) clearTimeout(whoWeHelpTimeoutRef.current);
    whoWeHelpTimeoutRef.current = setTimeout(() => {
      setWhoWeHelpOpen(false);
    }, 220);
  };

  const handleWhatWeDoEnter = () => {
    if (whatWeDoTimeoutRef.current) clearTimeout(whatWeDoTimeoutRef.current);
    if (whoWeHelpTimeoutRef.current) clearTimeout(whoWeHelpTimeoutRef.current);
    setWhoWeHelpOpen(false);
    setWhatWeDoOpen(true);
  };

  const handleWhatWeDoLeave = () => {
    if (whatWeDoTimeoutRef.current) clearTimeout(whatWeDoTimeoutRef.current);
    whatWeDoTimeoutRef.current = setTimeout(() => {
      setWhatWeDoOpen(false);
    }, 220);
  };

  useEffect(() => {
    return () => {
      if (whoWeHelpTimeoutRef.current) clearTimeout(whoWeHelpTimeoutRef.current);
      if (whatWeDoTimeoutRef.current) clearTimeout(whatWeDoTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigation
  const nav = (page) => {
    if (whoWeHelpTimeoutRef.current) clearTimeout(whoWeHelpTimeoutRef.current);
    if (whatWeDoTimeoutRef.current) clearTimeout(whatWeDoTimeoutRef.current);
    setMobileMenuOpen(false);
    setWhatWeDoOpen(false);
    setWhoWeHelpOpen(false);
    onNavigate(page);
  };

  const isActive = (page) => activePage === page;

  // Shared nav link class for crisp white header
  const navLinkCls = (active = false) =>
    `relative group flex items-center gap-0.5 text-[13px] xl:text-sm font-semibold tracking-wide transition-colors duration-200 py-1 whitespace-nowrap cursor-pointer
    ${active ? 'text-[#007791]' : 'text-[#272727] hover:text-[#007791]'}`;

  const navUnderline = (active = false) =>
    `absolute -bottom-0.5 left-0 h-[2px] rounded-full transition-all duration-300
    ${active ? 'w-full bg-[#2bb673]' : 'w-0 bg-[#2bb673] group-hover:w-full'}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 font-['Plus_Jakarta_Sans',sans-serif] ${
        isScrolled
          ? 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] py-3 border-b border-slate-200'
          : 'bg-white/95 backdrop-blur-md py-3.5 border-b border-slate-200/80 shadow-sm'
      }`}
    >
      {/* Top accent line — 2px teal/emerald gradient */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#007791] via-[#2bb673] to-[#007791] opacity-90 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">

          {/* ── Brand Logo (Light theme logo for white header) ── */}
          <button
            onClick={onGoHome}
            className="flex items-center text-left flex-shrink-0 cursor-pointer focus:outline-none"
            aria-label="Go to home"
          >
            <BrandLogo
              variant={activePage === 'protect' ? 'taxation' : 'light'}
              customSrc={activePage === 'protect' ? (brandSettings?.taxLogoLight || brandSettings?.taxLogoDark) : (brandSettings?.mainLogoLight || brandSettings?.mainLogoDark)}
            />
          </button>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7 xl:gap-8 flex-shrink-0" role="navigation">

            {/* Home */}
            <button onClick={onGoHome} className={navLinkCls(isActive('home'))}>
              <span>Home</span>
              <span className={navUnderline(isActive('home'))} />
            </button>

            {/* Who We Help dropdown */}
            <div
              className="relative flex-shrink-0"
              onMouseEnter={handleWhoWeHelpEnter}
              onMouseLeave={handleWhoWeHelpLeave}
            >
              <button
                onClick={() => nav('who-we-help')}
                className={navLinkCls(isActive('who-we-help'))}
              >
                <span>Who We Help</span>
                <ChevronDown className={`w-3.5 h-3.5 ml-0.5 transition-transform duration-200 flex-shrink-0 ${whoWeHelpOpen ? 'rotate-180 text-[#007791]' : 'text-slate-400'}`} />
                <span className={navUnderline(isActive('who-we-help'))} />
              </button>

              {whoWeHelpOpen && (
                <div 
                  className="absolute top-full left-0 pt-2 z-50 w-64"
                  onMouseEnter={handleWhoWeHelpEnter}
                  onMouseLeave={handleWhoWeHelpLeave}
                >
                  <div className="bg-white rounded-xl shadow-[0_12px_36px_rgba(6,26,46,0.12)] border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="px-4 pt-3 pb-1.5 border-b border-slate-100 bg-slate-50/70">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#007791]">Sectors We Serve</span>
                    </div>
                    <div className="p-2 space-y-0.5">
                      {[
                        { label: 'Growing Businesses', page: 'growing-businesses' },
                        { label: 'Established & Corporate', page: 'established-corporate' },
                        { label: 'Not-for-Profit & Community', page: 'non-profit-community' },
                        { label: 'Local Government', page: 'local-government' },
                      ].map(({ label, page }) => (
                        <button
                          key={page}
                          onClick={() => { 
                            if (whoWeHelpTimeoutRef.current) clearTimeout(whoWeHelpTimeoutRef.current);
                            setWhoWeHelpOpen(false); 
                            nav(page); 
                          }}
                          className="w-full text-left px-3 py-2 rounded-lg text-[13px] font-semibold text-[#272727] hover:text-[#007791] hover:bg-slate-50 transition-all duration-150 flex items-center justify-between group/item cursor-pointer"
                        >
                          <span>{label}</span>
                          <ArrowRight className="w-3 h-3 text-transparent group-hover/item:text-[#2bb673] transition-all -translate-x-1 group-hover/item:translate-x-0" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* What We Do dropdown */}
            <div
              className="relative flex-shrink-0"
              onMouseEnter={handleWhatWeDoEnter}
              onMouseLeave={handleWhatWeDoLeave}
            >
              <button
                onClick={() => nav('what-we-do')}
                className={navLinkCls(isActive('what-we-do'))}
              >
                <span>What We Do</span>
                <ChevronDown className={`w-3.5 h-3.5 ml-0.5 transition-transform duration-200 flex-shrink-0 ${whatWeDoOpen ? 'rotate-180 text-[#007791]' : 'text-slate-400'}`} />
                <span className={navUnderline(isActive('what-we-do'))} />
              </button>

              {whatWeDoOpen && (
                <div 
                  className="absolute top-full left-0 pt-2 z-50 w-72"
                  onMouseEnter={handleWhatWeDoEnter}
                  onMouseLeave={handleWhatWeDoLeave}
                >
                  <div className="bg-white rounded-xl shadow-[0_12px_36px_rgba(6,26,46,0.12)] border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="px-4 pt-3 pb-1.5 border-b border-slate-100 bg-slate-50/70">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#007791]">Service Pillars</span>
                    </div>
                    <div className="p-2 space-y-0.5">
                      {[
                        { type: 'lead',      label: 'LEAD',      desc: 'CFO & FP&A Advisory',         page: 'lead' },
                        { type: 'build',     label: 'BUILD',     desc: 'Finance Functions',             page: 'build' },
                        { type: 'transform', label: 'TRANSFORM', desc: 'Data & Technology',            page: 'transform' },
                        { type: 'protect',   label: 'PROTECT',   desc: 'Tax & Compliance',             page: 'protect' },
                      ].map(({ type, label, desc, page }) => (
                        <button
                          key={page}
                          onClick={() => { 
                            if (whatWeDoTimeoutRef.current) clearTimeout(whatWeDoTimeoutRef.current);
                            setWhatWeDoOpen(false); 
                            nav(page); 
                          }}
                          className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-all duration-150 flex items-center gap-3 group/item cursor-pointer"
                        >
                          <div className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 group-hover/item:border-[#007791]/40 transition-colors">
                            <PillarIcon type={type} className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[10px] font-black tracking-wider text-[#007791] leading-none mb-0.5">{label}</div>
                            <div className="text-[13px] font-semibold text-[#272727] group-hover/item:text-[#007791] transition-colors leading-tight truncate">{desc}</div>
                          </div>
                          <ArrowRight className="w-3 h-3 ml-auto text-transparent group-hover/item:text-[#2bb673] transition-all -translate-x-1 group-hover/item:translate-x-0 shrink-0" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Insights */}
            <button onClick={() => nav('insights')} className={navLinkCls(isActive('insights'))}>
              <span>Insights</span>
              <span className={navUnderline(isActive('insights'))} />
            </button>

            {/* About */}
            <button onClick={() => nav('about')} className={navLinkCls(isActive('about'))}>
              <span>About</span>
              <span className={navUnderline(isActive('about'))} />
            </button>

            {/* Contact */}
            <button onClick={() => nav('contact')} className={navLinkCls(isActive('contact'))}>
              <span>Contact</span>
              <span className={navUnderline(isActive('contact'))} />
            </button>
          </nav>

          {/* ── Right: CTA + Admin ── */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            {/* Admin CMS pill (admin only) */}
            {adminUser && (
              <button
                onClick={onToggleCMS}
                className="flex items-center gap-1.5 text-[11px] font-bold text-[#007791] hover:text-[#005f73] px-3 py-1.5 rounded-full border border-slate-300 hover:border-[#007791]/50 hover:bg-slate-50 transition-all cursor-pointer"
              >
                <Sliders className="w-3 h-3" />
                <span>CMS</span>
              </button>
            )}

            {/* Primary CTA Button — Original Brand Button Gradient with White Text */}
            <button
              onClick={onOpenContact}
              className="brand-button-gradient text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full flex items-center space-x-1.5 shadow-md hover:shadow-lg whitespace-nowrap flex-shrink-0 cursor-pointer"
            >
              <span>{data?.ctaText || 'Start a Conversation'}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden items-center justify-center w-9 h-9 rounded-lg text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Full-Panel Drawer ── */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-2xl">

          {/* Nav links */}
          <nav className="px-4 pt-4 pb-2 space-y-0.5">
            {[
              { label: 'Home',         action: () => { setMobileMenuOpen(false); onGoHome(); } },
              { label: 'Who We Help',  action: () => nav('who-we-help') },
              { label: 'What We Do',   action: () => nav('what-we-do') },
              { label: 'Insights',     action: () => nav('insights') },
              { label: 'About',        action: () => nav('about') },
              { label: 'Contact',      action: () => nav('contact') },
            ].map(({ label, action }) => (
              <button
                key={label}
                onClick={action}
                className="w-full text-left px-3 py-3 rounded-xl text-[15px] font-semibold text-[#272727] hover:text-[#007791] hover:bg-slate-50 transition-all flex items-center justify-between group cursor-pointer"
              >
                <span>{label}</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#2bb673] group-hover:translate-x-0.5 transition-all" />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="px-4 pt-2 pb-5 border-t border-slate-200 mt-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="w-full brand-button-gradient text-white text-xs sm:text-sm font-bold py-2.5 rounded-full flex items-center justify-center space-x-1.5 shadow-md active:scale-95 transition-transform cursor-pointer"
            >
              <span>{data?.ctaText || 'Start a Conversation'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Admin controls */}
          {adminUser ? (
            <div className="px-4 pb-4 border-t border-slate-200 pt-3 flex items-center justify-between">
              <button
                onClick={() => { setMobileMenuOpen(false); onToggleCMS(); }}
                className="text-xs font-bold text-[#007791] flex items-center gap-1.5 py-1 cursor-pointer"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Edit Site CMS</span>
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onLogout(); }}
                className="text-xs font-semibold text-rose-600 py-1 cursor-pointer"
              >
                Logout ({adminUser.name})
              </button>
            </div>
          ) : (
            <div className="px-4 pb-4 border-t border-slate-200 pt-3">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenLogin(); }}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1.5 py-1 cursor-pointer transition-colors"
              >
                <Lock className="w-3 h-3" />
                <span>Admin Portal</span>
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
