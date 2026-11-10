import React from 'react';

/**
 * SectionDivider -- Standardized executive divider separating content sections.
 * variant: 'dark' (default) | 'light' | 'transparent'
 */
export const SectionDivider = ({ className = '', glow = true, variant = 'dark' }) => {
  const baseColor = variant === 'light' ? 'bg-slate-200' : 'bg-white/10';
  const glowColor = variant === 'light'
    ? 'bg-gradient-to-r from-transparent via-[#007791]/30 to-transparent'
    : 'bg-gradient-to-r from-transparent via-[#18B0A6]/70 to-transparent';

  return (
    <div className={`relative w-full h-px ${baseColor} overflow-hidden select-none ${className}`} aria-hidden="true">
      {glow && (
        <div className="absolute inset-x-0 top-0 flex justify-center pointer-events-none">
          <div className={`w-2/3 sm:w-1/2 lg:w-1/3 h-px ${glowColor}`} />
        </div>
      )}
    </div>
  );
};
