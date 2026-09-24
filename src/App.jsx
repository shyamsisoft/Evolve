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
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { WhatWeDoOverviewPage } from './components/WhatWeDoOverviewPage';
import { WhoWeHelpOverviewPage } from './components/WhoWeHelpOverviewPage';
import { WhoWeHelpDetailPage } from './components/WhoWeHelpDetailPage';
import { InsightsPage } from './components/InsightsPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';

export function App() {
  const [siteData, setSiteData] = useState(() => {
    const saved = localStorage.getItem('evolve_site_cms_data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const mergedApproach = initialSiteData.approachAndWhyUs.approachSteps.map((step, idx) => ({
          ...step,
          ...(parsed.approachAndWhyUs?.approachSteps?.[idx] || {})
        }));

        const mergedWhyUs = initialSiteData.approachAndWhyUs.whyUsItems.map((item, idx) => ({
          ...item,
          ...(parsed.approachAndWhyUs?.whyUsItems?.[idx] || {})
        }));

        return {
          ...initialSiteData,
          ...parsed,
          approachAndWhyUs: {
            ...initialSiteData.approachAndWhyUs,
            approachSteps: mergedApproach,
            whyUsItems: mergedWhyUs
          }
        };
      } catch (e) {
        return initialSiteData;
      }
    }
    return initialSiteData;
  });

  const [activeFont, setActiveFont] = useState(() => {
    return localStorage.getItem('evolve_site_font') || 'font-jakarta';
  });

  const [activePage, setActivePage] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCMSOpen, setIsCMSOpen] = useState(false);

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem('evolve_site_cms_data', JSON.stringify(siteData));
  }, [siteData]);

  useEffect(() => {
    localStorage.setItem('evolve_site_font', activeFont);
  }, [activeFont]);

  const handleUpdateData = (newData) => {
    setSiteData(newData);
  };

  const handleResetData = () => {
    setSiteData(initialSiteData);
    setActiveFont('font-jakarta');
    setActivePage(null);
    localStorage.removeItem('evolve_site_cms_data');
    localStorage.removeItem('evolve_site_font');
  };

  return (
    <div className={`min-h-screen bg-[#f7f9fc] flex flex-col ${activeFont} text-[#061a2e] selection:bg-[#007791] selection:text-white transition-all duration-300`}>
      {/* Header Bar */}
      <Header
        data={siteData.header}
        onOpenContact={() => setIsContactOpen(true)}
        onToggleCMS={() => setIsCMSOpen(!isCMSOpen)}
        isCMSOpen={isCMSOpen}
        onNavigate={(pageId) => setActivePage(pageId)}
        onGoHome={() => setActivePage(null)}
      />

      {/* Main Content Area: Renders Homepage or Dynamic Dedicated Pages */}
      <main className="flex-1">
        {activePage === 'what-we-do' || activePage === 'what-we-do-overview' ? (
          <WhatWeDoOverviewPage
            onSelectService={(id) => setActivePage(id)}
            onBack={() => setActivePage(null)}
            onOpenContact={() => setIsContactOpen(true)}
          />
        ) : ['lead', 'build', 'transform', 'protect'].includes(activePage) ? (
          <ServiceDetailPage
            serviceId={activePage}
            pageData={siteData.serviceDetailPages || initialSiteData.serviceDetailPages}
            onBack={() => setActivePage('what-we-do')}
            onOpenContact={() => setIsContactOpen(true)}
            onSelectService={(id) => setActivePage(id)}
          />
        ) : activePage === 'who-we-help' || activePage === 'who-we-help-overview' ? (
          <WhoWeHelpOverviewPage
            onSelectAudience={(id) => setActivePage(id)}
            onBack={() => setActivePage(null)}
            onOpenContact={() => setIsContactOpen(true)}
          />
        ) : ['growing-businesses', 'established-corporate', 'non-profit-community', 'local-government'].includes(activePage) ? (
          <WhoWeHelpDetailPage
            audienceId={activePage}
            data={siteData.whoWeHelpDetailPages || initialSiteData.whoWeHelpDetailPages}
            onBack={() => setActivePage('who-we-help')}
            onOpenContact={() => setIsContactOpen(true)}
            onSelectAudience={(id) => setActivePage(id)}
          />
        ) : activePage === 'insights' ? (
          <InsightsPage
            data={siteData.insightsData || initialSiteData.insightsData}
            onBack={() => setActivePage(null)}
            onOpenContact={() => setIsContactOpen(true)}
          />
        ) : activePage === 'about' ? (
          <AboutPage
            data={siteData.aboutData || initialSiteData.aboutData}
            onBack={() => setActivePage(null)}
            onOpenContact={() => setIsContactOpen(true)}
          />
        ) : activePage === 'contact' ? (
          <ContactPage
            data={siteData.contactData || initialSiteData.contactData}
            onBack={() => setActivePage(null)}
          />
        ) : (
          <>
            {/* Hero Section */}
            <Hero
              data={siteData.hero}
              onOpenContact={() => setIsContactOpen(true)}
            />

            {/* Section 2: Finance is More Than Numbers */}
            <FinanceMoreThanNumbers
              data={siteData.section2}
              onSelectWhatWeDoOverview={() => setActivePage('what-we-do')}
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
              onSelectService={(id) => setActivePage(id)}
            />

            {/* Section 6: Who We Help */}
            <WhoWeHelp
              data={siteData.whoWeHelp}
              onSelectAudience={(id) => setActivePage(id)}
            />
          </>
        )}

        {/* Pre-footer CTA & Footer */}
        <FooterCTA
          ctaData={siteData.ctaBanner}
          footerData={siteData.footer}
          onOpenContact={() => setIsContactOpen(true)}
          onGoHome={() => setActivePage(null)}
          onNavigate={(pageId) => setActivePage(pageId)}
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
        activeFont={activeFont}
        onChangeFont={setActiveFont}
        onUpdateData={handleUpdateData}
        onResetData={handleResetData}
      />
    </div>
  );
}

export default App;
