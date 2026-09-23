import React, { useState, useEffect } from 'react';
import { initialSiteData } from './data/initialData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FinanceMoreThanNumbers } from './components/FinanceMoreThanNumbers';
import { ProcessFlow } from './components/ProcessFlow';
import { ApproachWhyUs } from './components/ApproachWhyUs';
import { WhatWeDo } from './components/WhatWeDo';
import { WhoWeHelp } from './components/WhoWeHelp';
import { FooterCTA } from './components/FooterCTA';
import { ContactModal } from './components/ContactModal';
import { CMSDrawer } from './components/CMSDrawer';

export function App() {
  const [siteData, setSiteData] = useState(() => {
    const saved = localStorage.getItem('evolve_site_cms_data');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return initialSiteData;
      }
    }
    return initialSiteData;
  });

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCMSOpen, setIsCMSOpen] = useState(false);

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem('evolve_site_cms_data', JSON.stringify(siteData));
  }, [siteData]);

  const handleUpdateData = (newData) => {
    setSiteData(newData);
  };

  const handleResetData = () => {
    setSiteData(initialSiteData);
    localStorage.removeItem('evolve_site_cms_data');
  };

  return (
    <div className="min-h-screen bg-[#f7f9fc] flex flex-col font-sans text-[#061a2e] selection:bg-[#007791] selection:text-white">
      {/* Header Bar */}
      <Header
        data={siteData.header}
        onOpenContact={() => setIsContactOpen(true)}
        onToggleCMS={() => setIsCMSOpen(!isCMSOpen)}
        isCMSOpen={isCMSOpen}
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          data={siteData.hero}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Section 2: Finance is More Than Numbers */}
        <FinanceMoreThanNumbers
          data={siteData.section2}
        />

        {/* Section 3: Process Flow (From numbers to better decisions) */}
        <ProcessFlow
          data={siteData.processFlow}
        />

        {/* Section 4: Our Approach & Why Us */}
        <ApproachWhyUs
          data={siteData.approachAndWhyUs}
        />

        {/* Section 5: What We Do (Service Pillars) */}
        <WhatWeDo
          data={siteData.whatWeDo}
        />

        {/* Section 6: Who We Help */}
        <WhoWeHelp
          data={siteData.whoWeHelp}
        />

        {/* Pre-footer CTA & Footer */}
        <FooterCTA
          ctaData={siteData.ctaBanner}
          footerData={siteData.footer}
          onOpenContact={() => setIsContactOpen(true)}
        />
      </main>

      {/* Interactive Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Dynamic Live CMS & Content Manager Drawer */}
      <CMSDrawer
        isOpen={isCMSOpen}
        onClose={() => setIsCMSOpen(false)}
        data={siteData}
        onUpdateData={handleUpdateData}
        onResetData={handleResetData}
      />
    </div>
  );
}

export default App;
