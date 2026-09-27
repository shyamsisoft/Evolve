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
import { InsightDetailPage } from './components/InsightDetailPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { imgUrl } from './utils/imgUrl';

// Pre-process all image paths in a data object so they work on GitHub Pages
const IMAGE_KEYS = new Set(['image','bgImage','heroBg','src']);
function fixImagePaths(obj) {
  if (typeof obj === 'string') return obj;
  if (Array.isArray(obj)) return obj.map(fixImagePaths);
  if (obj && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [
        k,
        IMAGE_KEYS.has(k) && typeof v === 'string' ? imgUrl(v) : fixImagePaths(v)
      ])
    );
  }
  return obj;
}


export function App() {
  const [activeArticleId, setActiveArticleId] = useState('a1');
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

  // Fix all data-driven image paths for GitHub Pages subpath deployment
  const fixedData = fixImagePaths(siteData);

  return (
    <div className={`min-h-screen bg-[#f7f9fc] flex flex-col ${activeFont} text-[#061a2e] selection:bg-[#007791] selection:text-white transition-all duration-300`}>
      {/* Header Bar */}
      <Header
        data={fixedData.header}
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
            pageData={fixedData.serviceDetailPages || initialSiteData.serviceDetailPages}
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
            data={fixedData.whoWeHelpDetailPages || initialSiteData.whoWeHelpDetailPages}
            onBack={() => setActivePage('who-we-help')}
            onOpenContact={() => setIsContactOpen(true)}
            onSelectAudience={(id) => setActivePage(id)}
          />
        ) : activePage === 'insights' ? (
          <InsightsPage
            data={fixedData.insightsData || initialSiteData.insightsData}
            onBack={() => setActivePage(null)}
            onOpenContact={() => setIsContactOpen(true)}
            onSelectArticle={(id) => {
              setActiveArticleId(id);
              setActivePage('insight-detail');
            }}
          />
        ) : activePage === 'insight-detail' ? (
          <InsightDetailPage
            articleId={activeArticleId}
            articles={fixedData.insightsData?.articles || initialSiteData.insightsData.articles}
            onBack={() => setActivePage('insights')}
            onOpenContact={() => setIsContactOpen(true)}
            onSelectArticle={(id) => {
              setActiveArticleId(id);
              setActivePage('insight-detail');
            }}
          />
        ) : activePage === 'about' ? (
          <AboutPage
            data={fixedData.aboutData || initialSiteData.aboutData}
            onBack={() => setActivePage(null)}
            onOpenContact={() => setIsContactOpen(true)}
          />
        ) : activePage === 'contact' ? (
          <ContactPage
            data={fixedData.contactData || initialSiteData.contactData}
            onBack={() => setActivePage(null)}
          />
        ) : (
          <>
            {/* Hero Section */}
            <Hero
              data={fixedData.hero}
              onOpenContact={() => setIsContactOpen(true)}
            />

            {/* Section 2: Finance is More Than Numbers */}
            <FinanceMoreThanNumbers
              data={fixedData.section2}
              onSelectWhatWeDoOverview={() => setActivePage('what-we-do')}
            />

            {/* Section 3: Process Flow (From numbers to better decisions) */}
            <ProcessFlow
              data={fixedData.processFlow}
            />

            {/* Section 4: Our Approach & Why Us */}
            <ApproachWhyUs
              data={fixedData.approachAndWhyUs}
            />

            {/* Section 5: What We Do (Service Pillars) */}
            <WhatWeDo
              data={fixedData.whatWeDo}
              onSelectService={(id) => setActivePage(id)}
            />

            {/* Section 6: Who We Help */}
            <WhoWeHelp
              data={fixedData.whoWeHelp}
              onSelectAudience={(id) => setActivePage(id)}
            />
          </>
        )}

        {/* Pre-footer CTA & Footer */}
        <FooterCTA
          ctaData={fixedData.ctaBanner}
          footerData={fixedData.footer}
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
