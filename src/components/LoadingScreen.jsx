import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';

export const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Smooth, realistic progressive ticker
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerate smoothly through loading phases
        const increment = prev < 50 
          ? Math.floor(Math.random() * 8) + 5 
          : prev < 85 
          ? Math.floor(Math.random() * 10) + 7 
          : Math.floor(Math.random() * 14) + 8;
        return Math.min(100, prev + increment);
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Hold briefly at 100% then start smooth fade-out
      const fadeTimer = setTimeout(() => {
        setIsFading(true);
      }, 250);

      // Unmount after fade completes
      const doneTimer = setTimeout(() => {
        setIsDone(true);
      }, 850);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(doneTimer);
      };
    }
  }, [progress]);

  if (isDone) return null;

  return (
    <div
      aria-hidden={isFading}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#061a2e] transition-all duration-700 ease-out select-none ${
        isFading ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Atmospheric Spotlight Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-cyan-500/15 via-[#007791]/25 to-emerald-400/15 rounded-full blur-3xl pointer-events-none" />

      {/* Center Brand Identity Stack */}
      <div className="relative z-10 flex flex-col items-center space-y-7 px-6 text-center max-w-md w-full">
        
        {/* Official Brand Logo */}
        <div className="relative transform transition-transform duration-700 hover:scale-105">
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 via-[#007791]/15 to-teal-400/10 rounded-2xl blur-lg pointer-events-none" />
          <BrandLogo 
            variant="dark" 
            className="h-14 sm:h-16 md:h-20 w-auto object-contain drop-shadow-[0_10px_25px_rgba(0,119,145,0.35)]" 
          />
        </div>

        {/* Minimalist Corporate Progress Bar */}
        <div className="w-52 sm:w-64 h-[2.5px] bg-white/10 rounded-full overflow-hidden relative backdrop-blur-sm mt-4">
          <div
            className="h-full bg-gradient-to-r from-[#007791] via-[#2bb673] to-emerald-300 transition-all duration-150 ease-out rounded-full shadow-[0_0_12px_rgba(43,182,115,0.7)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Counter & Tagline */}
        <div className="space-y-2 pt-1 font-mono">
          <span className="text-xs font-bold tracking-widest text-emerald-400">
            {progress}%
          </span>
          <p className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-slate-400">
            Clarity · Capability · Transformation
          </p>
        </div>

      </div>
    </div>
  );
};
