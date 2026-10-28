import React from 'react';
import { imgUrl } from '../utils/imgUrl';

export const BrandLogo = ({ variant = "full", size = "normal", className = "" }) => {
  const isDark = variant === "dark" || variant === "footer";
  const isProtect = variant === "taxation";

  // Purely use the provided logo SVG files
  const logoSrc = isProtect
    ? '/Logo/evolve-taxation-advisory.svg'
    : isDark
    ? '/Logo/evolve-corporate-business-solutions-white.svg'
    : '/Logo/evolve-corporate-business-solutions.svg';

  const defaultClasses = isDark
    ? "h-11 sm:h-12 md:h-13 w-auto object-contain select-none hover:opacity-95 transition-opacity"
    : "h-11 sm:h-12 md:h-13 lg:h-14 w-auto object-contain select-none hover:opacity-95 transition-opacity";

  return (
    <img
      src={imgUrl(logoSrc)}
      alt={isProtect ? "EVOLVE Taxation & Advisory" : "EVOLVE Corporate & Business Solutions"}
      className={className ? `object-contain select-none ${className}` : defaultClasses}
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
