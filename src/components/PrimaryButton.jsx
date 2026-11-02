import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Standardized Executive Primary Button for EVOLVE.
 * Enforces uniform button styling across all pages in the Logo Theme.
 */
export const PrimaryButton = ({
  children,
  onClick,
  type = 'button',
  className = '',
  icon = true
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`brand-button-gradient text-white text-sm sm:text-base font-bold px-8 py-3.5 rounded-full inline-flex items-center justify-center gap-2.5 shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer group shrink-0 ${className}`}
    >
      <span>{children}</span>
      {icon && (
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      )}
    </button>
  );
};
