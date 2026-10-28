import React from 'react';
import { imgUrl } from '../utils/imgUrl';

export const BrandLogo = ({ variant = "full", size = "normal", className = "" }) => {
  if (variant === "dark" || variant === "footer") {
    return (
      <img
        src={imgUrl('/Logo/evolve-corporate-business-solutions-white.svg')}
        alt="EVOLVE Corporate & Business Solutions"
        className={`h-9 sm:h-10 w-auto object-contain select-none hover:opacity-95 transition-opacity ${className}`}
      />
    );
  }

  if (variant === "wordmark") {
    return (
      <img
        src={imgUrl('/Logo/evolve-wordmark.svg')}
        alt="EVOLVE"
        className={`h-7 sm:h-8 w-auto object-contain select-none hover:opacity-95 transition-opacity ${className}`}
      />
    );
  }

  if (variant === "taxation") {
    return (
      <img
        src={imgUrl('/Logo/evolve-taxation-advisory.svg')}
        alt="EVOLVE Taxation & Advisory"
        className={`h-9 sm:h-10 w-auto object-contain select-none hover:opacity-95 transition-opacity ${className}`}
      />
    );
  }

  // Default: Full Corporate & Business Solutions logo
  return (
    <img
      src={imgUrl('/Logo/evolve-corporate-business-solutions.svg')}
      alt="EVOLVE Corporate & Business Solutions"
      className={`h-9 sm:h-10 w-auto object-contain select-none hover:opacity-95 transition-opacity ${className}`}
    />
  );
};

export const PillarIcon = ({ type, className = "w-10 h-10" }) => {
  const iconMap = {
    lead: '/Logo/icon-lead.svg',
    build: '/Logo/icon-build.svg',
    transform: '/Logo/icon-transform.svg',
    protect: '/Logo/icon-protect.svg',
  };

  const src = iconMap[type?.toLowerCase()];
  if (!src) return null;

  return (
    <img
      src={imgUrl(src)}
      alt={type ? type.toUpperCase() : 'Pillar Icon'}
      className={`object-contain inline-block shrink-0 ${className}`}
    />
  );
};
