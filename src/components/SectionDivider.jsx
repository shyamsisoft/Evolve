import React from 'react';

/**
 * SectionDivider — Standardized executive divider separating content sections.
 * Features a hairline border (white/10) with an illuminated logo teal (#18B0A6) gradient center.
 */
export const SectionDivider = ({ className = '', glow = true }) => {
  return (
    <div className={`relative w-full h-px bg-white/10 overflow-hidden select-none ${className}`} aria-hidden="true">
      {glow && (
        <div className="absolute inset-x-0 top-0 flex justify-center pointer-events-none">
          <div className="w-2/3 sm:w-1/2 lg:w-1/3 h-px bg-gradient-to-r from-transparent via-[#18B0A6]/70 to-transparent" />
        </div>
      )}
    </div>
  );
};
