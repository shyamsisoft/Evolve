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
import { AdminLoginModal } from './components/AdminLoginModal';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Sparkles } from 'lucide-react';
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
        const isOldOrExternal = (url) => !url || url.includes('unsplash.com') || url.includes('hero_leadership') || url.includes('boardroom');

        const mergedApproach = initialSiteData.approachAndWhyUs.approachSteps.map((step, idx) => {
          const pStep = parsed.approachAndWhyUs?.approachSteps?.[idx] || {};
          return {
            ...step,
            ...pStep,
            image: isOldOrExternal(pStep.image) ? step.image : pStep.image
          };
        });

        const mergedWhyUs = initialSiteData.approachAndWhyUs.whyUsItems.map((item, idx) => {
          const pItem = parsed.approachAndWhyUs?.whyUsItems?.[idx] || {};
          return {
            ...item,
            ...pItem,
            image: isOldOrExternal(pItem.image) ? item.image : pItem.image
          };
        });

        const mergedWhatWeDo = initialSiteData.whatWeDo.items.map((item, idx) => {
          const pItem = parsed.whatWeDo?.items?.[idx] || {};
          return {
            ...item,
            ...pItem,
            image: isOldOrExternal(pItem.image) ? item.image : pItem.image
          };
        });

        const mergedWhoWeHelp = initialSiteData.whoWeHelp.items.map((item, idx) => {
          const pItem = parsed.whoWeHelp?.items?.[idx] || {};
          return {
            ...item,
            ...pItem,
            image: isOldOrExternal(pItem.image) ? item.image : pItem.image
          };
        });

        return {
          ...initialSiteData,
          ...parsed,
          hero: {
            ...initialSiteData.hero,
            ...(parsed.hero || {}),
            bgImage: isOldOrExternal(parsed.hero?.bgImage) ? initialSiteData.hero.bgImage : parsed.hero.bgImage,
            slides: initialSiteData.hero.slides.map((slide, idx) => {
              const pSlide = parsed.hero?.slides?.[idx] || {};
              return {
                ...slide,
                ...pSlide,
                bgImage: isOldOrExternal(pSlide.bgImage) ? slide.bgImage : pSlide.bgImage
              };
            })
          },
          section2: {
            ...initialSiteData.section2,
            ...(parsed.section2 || {}),
            image: isOldOrExternal(parsed.section2?.image) ? initialSiteData.section2.image : parsed.section2.image
          },
          ctaBanner: {
            ...initialSiteData.ctaBanner,
            ...(parsed.ctaBanner || {}),
            bgImage: isOldOrExternal(parsed.ctaBanner?.bgImage) ? initialSiteData.ctaBanner.bgImage : parsed.ctaBanner.bgImage
          },
          whatWeDo: {
            ...initialSiteData.whatWeDo,
            ...(parsed.whatWeDo || {}),
            items: mergedWhatWeDo
          },
          whoWeHelp: {
            ...initialSiteData.whoWeHelp,
            ...(parsed.whoWeHelp || {}),
            items: mergedWhoWeHelp
          },
          approachAndWhyUs: {
            ...initialSiteData.approachAndWhyUs,
            ...(parsed.approachAndWhyUs || {}),
            approachBgImage: isOldOrExternal(parsed.approachAndWhyUs?.approachBgImage)
              ? initialSiteData.approachAndWhyUs.approachBgImage
              : (parsed.approachAndWhyUs?.approachBgImage || initialSiteData.approachAndWhyUs.approachBgImage),
            whyUsBgImage: isOldOrExternal(parsed.approachAndWhyUs?.whyUsBgImage)
              ? initialSiteData.approachAndWhyUs.whyUsBgImage
              : (parsed.approachAndWhyUs?.whyUsBgImage || initialSiteData.approachAndWhyUs.whyUsBgImage),
            approachSteps: mergedApproach,
            whyUsItems: mergedWhyUs
          },
          processFlow: {
            ...initialSiteData.processFlow,
            ...(parsed.processFlow || {}),
            characterImage: initialSiteData.processFlow.characterImage,
            bgImage: isOldOrExternal(parsed.processFlow?.bgImage)
              ? initialSiteData.processFlow.bgImage
              : (parsed.processFlow?.bgImage || initialSiteData.processFlow.bgImage),
            steps: initialSiteData.processFlow.steps.map((step, idx) => ({
              ...step,
              ...(parsed.processFlow?.steps?.[idx] || {})
            }))
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
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [adminUser, setAdminUser] = useState(() => {
    try {
      const saved = localStorage.getItem('evolve_admin_user');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  const handleLoginSuccess = (user) => {
    setAdminUser(user);
    localStorage.setItem('evolve_admin_user', JSON.stringify(user));
    if (user?.sessionToken) {
      localStorage.setItem('evolve_session_token', user.sessionToken);
    }
    setIsCMSOpen(true);
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' }).catch(() => {});
    } catch (e) {
      // ignore
    }
    setAdminUser(null);
    setIsCMSOpen(false);
    localStorage.removeItem('evolve_admin_user');
    localStorage.removeItem('evolve_session_token');
  };

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
        activePage={activePage}
        adminUser={adminUser}
        onOpenLogin={() => setIsLoginOpen(true)}
        onLogout={handleLogout}
        onToggleCMS={() => setIsCMSOpen(!isCMSOpen)}
        isCMSOpen={isCMSOpen}
        onOpenContact={() => setIsContactOpen(true)}
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
              onNavigate={(pageId) => setActivePage(pageId)}
            />

            {/* Section 2: Finance is More Than Numbers */}
            <FinanceMoreThanNumbers
              data={fixedData.section2}
              onSelectWhatWeDoOverview={() => setActivePage('what-we-do')}
            />

            {/* Section 3: Process Flow (From numbers to better decisions) */}
            <ProcessFlow
              data={fixedData.processFlow}
              onNavigate={(pageId) => setActivePage(pageId)}
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
          adminUser={adminUser}
          onOpenLogin={() => setIsLoginOpen(true)}
          onToggleCMS={() => setIsCMSOpen(!isCMSOpen)}
          onLogout={handleLogout}
          onOpenContact={() => setIsContactOpen(true)}
          onGoHome={() => setActivePage(null)}
          onNavigate={(pageId) => setActivePage(pageId)}
        />
      </main>

      {/* Floating Privileged User Quick Bar */}
      {adminUser && (
        <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-40 bg-[#061a2e]/95 hover:bg-[#061a2e] text-white backdrop-blur-md px-3 py-1.5 sm:pl-4 sm:pr-3 sm:py-2 rounded-full shadow-2xl border border-slate-700/80 flex items-center space-x-2 sm:space-x-3 transition-all duration-300 animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="hidden sm:inline text-xs font-bold text-slate-200">{adminUser.name}</span>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 sm:px-2 rounded-full border border-emerald-500/20 font-semibold">
              <span className="hidden sm:inline">Privileged</span>
              <span className="sm:hidden">Admin</span>
            </span>
          </div>
          <span className="text-slate-700">|</span>
          <button
            onClick={() => setIsCMSOpen(!isCMSOpen)}
            className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center space-x-1 sm:space-x-1.5 cursor-pointer bg-emerald-500/15 hover:bg-emerald-500/25 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-emerald-500/30 transition-all"
            title="Open Site CMS Content Editor"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isCMSOpen ? 'Close CMS' : 'Edit Site CMS'}</span>
            <span className="sm:hidden">{isCMSOpen ? 'Close' : 'CMS'}</span>
          </button>
          <button
            onClick={handleLogout}
            className="text-xs font-semibold text-slate-400 hover:text-rose-400 px-1 py-0.5 transition-colors cursor-pointer"
            title="Sign out of Admin Portal"
          >
            <span className="hidden sm:inline">Logout</span>
            <span className="sm:hidden">Exit</span>
          </button>
        </div>
      )}

      {/* Interactive Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Admin Portal Login Modal */}
      <ErrorBoundary onReset={() => setIsLoginOpen(false)}>
        <AdminLoginModal
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      </ErrorBoundary>

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
