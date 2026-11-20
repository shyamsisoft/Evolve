import React, { useState, useEffect, useRef } from 'react';
import { 
  Users, 
  Briefcase, 
  Calculator, 
  BookOpen, 
  Handshake, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

export const TaxationSideDock = ({ onOpenContact }) => {
  // Minimized by default so it does not obstruct text on page load
  const [isMinimized, setIsMinimized] = useState(true);
  const [activeSection, setActiveSection] = useState('individual-tax');
  const dockRef = useRef(null);

  const navItems = [
    {
      id: 'individual-tax',
      label: 'Individual Tax Returns',
      icon: <Users className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300" />
    },
    {
      id: 'business-taxation',
      label: 'Business Taxation',
      icon: <Briefcase className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300" />
    },
    {
      id: 'bas-gst',
      label: 'BAS & GST',
      icon: <Calculator className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300" />
    },
    {
      id: 'bookkeeping-services',
      label: 'Bookkeeping',
      icon: <BookOpen className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300" />
    },
    {
      id: 'advisory',
      label: 'Advisory Support',
      icon: <Handshake className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300" />
    }
  ];

  // Close when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!isMinimized && dockRef.current && !dockRef.current.contains(e.target)) {
        setIsMinimized(true);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isMinimized]);

  // Observe active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const item of navItems) {
        if (item.id === 'advisory') continue;
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id) => {
    setActiveSection(id);
    // Once clicked, navigate and automatically minimize so content is visible
    setIsMinimized(true);

    if (id === 'advisory') {
      if (onOpenContact) {
        onOpenContact();
      } else {
        const contactEl = document.getElementById('contact');
        if (contactEl) {
          contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      return;
    }

    const el = document.getElementById(id) || document.getElementById('core-services');
    if (el) {
      const headerOffset = 95;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div ref={dockRef}>
      {/* 1. Minimized Slim Tab (Shifted higher to top-[18%] so it never collides with hero headline or subtitle) */}
      <div 
        className={`fixed left-0 top-[18%] sm:top-[20%] z-40 transition-all duration-300 ease-in-out pointer-events-auto ${
          isMinimized ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <button
          type="button"
          onClick={() => setIsMinimized(false)}
          className="flex flex-col items-center gap-1 pl-1 pr-1.5 py-2 rounded-r-lg bg-[#061a2e]/95 border-r border-y border-emerald-500/60 text-[#2bb673] hover:text-white hover:bg-emerald-950/70 shadow-lg backdrop-blur-md transition-all cursor-pointer group"
          title="Open Services Navigation"
          aria-label="Open Services Navigation"
        >
          <ChevronRight className="w-3 h-3 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
          <span className="text-[8.5px] font-bold tracking-widest uppercase [writing-mode:vertical-rl] rotate-180 py-0.5 text-slate-200 group-hover:text-emerald-300 select-none">
            Services
          </span>
        </button>
      </div>

      {/* 2. Expanded Compact Vertical Dock */}
      <aside
        aria-label="Taxation Quick Navigation"
        className={`fixed left-0 top-[17%] sm:top-[19%] z-40 transition-all duration-300 ease-in-out ${
          isMinimized 
            ? '-translate-x-full opacity-0 pointer-events-none' 
            : 'translate-x-0 opacity-100 pointer-events-auto'
        }`}
      >
        <div className="w-[78px] sm:w-[84px] rounded-r-xl bg-[#061a2e]/98 backdrop-blur-md border-r-2 border-y border-emerald-500/60 shadow-2xl shadow-black/60 overflow-hidden flex flex-col font-['Inter',sans-serif]">
          
          {/* Header Bar with Minimize Button */}
          <div className="flex items-center justify-between px-2 py-1.5 border-b border-white/10 bg-black/30">
            <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#2bb673] select-none pl-0.5">
              Services
            </span>
            <button
              type="button"
              onClick={() => setIsMinimized(true)}
              className="p-0.5 rounded text-slate-400 hover:text-white hover:bg-white/15 transition-colors cursor-pointer group"
              title="Close Quick Navigation"
              aria-label="Close Quick Navigation"
            >
              <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform text-emerald-400" />
            </button>
          </div>

          {/* Navigation Items (5 Services - Compact Scale) */}
          <nav className="flex flex-col">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleClick(item.id)}
                  className={`w-full py-2 px-1 flex flex-col items-center justify-center text-center transition-all cursor-pointer group relative border-b border-white/10 last:border-b-0 ${
                    isActive 
                      ? 'bg-emerald-500/25 text-white font-bold' 
                      : 'text-slate-200 hover:bg-emerald-500/15 hover:text-white'
                  }`}
                >
                  {/* Left Active Emerald Bar */}
                  {isActive && (
                    <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#2bb673] shadow-[0_0_6px_#2bb673]" />
                  )}

                  {/* Icon */}
                  <div className="transition-transform group-hover:scale-110 mb-0.5">
                    {item.icon}
                  </div>

                  {/* Label */}
                  <span className={`text-[8.5px] sm:text-[9px] leading-tight tracking-tight ${
                    isActive ? 'text-white font-bold' : 'text-slate-200 group-hover:text-white font-medium'
                  }`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>

        </div>
      </aside>
    </div>
  );
};
