---
name: website-architecture
description: >-
  Comprehensive architectural reference, routing conventions, component hierarchy,
  state management, and design system patterns for the EVOLVE web application.
  Use when creating or refactoring pages, modifying navigation or routing,
  integrating shared components, or reviewing site architecture and code structure.
---

# EVOLVE Website Architecture Reference & Guidelines

This skill documents the complete technical architecture of the EVOLVE Corporate & Business Solutions web application (`d:\Evolve`). Follow these architectural standards whenever developing, updating, or refactoring pages and components.

---

## 1. High-Level Technology Stack

| Layer | Technology | Key Details & Version |
|---|---|---|
| **Core Framework** | React 19 (`react`, `react-dom`) | Modern functional components with hooks (`useState`, `useEffect`, `useCallback`) |
| **Build Tool & Bundler** | Vite 8 (`@vitejs/plugin-react`) | Fast HMR dev server, chunk optimization, production static export |
| **Styling & Design System** | Tailwind CSS v4 (`@tailwindcss/vite`) | Custom color tokens (navy `#061a2e`, emerald `#2bb673`, teal `#007791`), Jakarta / Inter typography |
| **Iconography** | Lucide React (`lucide-react`) | Uniform stroke (`stroke-[2]` or `stroke-[2.2]`), crisp vector icons |
| **Routing** | Custom HTML5 History Router (`src/utils/router.js`) | Path-based clean routing (`/lead`, `/transform`), subpath aware (`/Evolve/`), zero hash dependencies |
| **CMS & Data Layer** | In-Browser CMS & LocalStorage | `initialSiteData.js` default baseline + `localStorage` override + image URL normalization |
| **Deployment** | GitHub Pages (`gh-pages`) | Domain-agnostic static hosting via `base: process.env.NODE_ENV === 'production' ? '/Evolve/' : '/'` |

---

## 2. Directory & File Organization

```
d:\Evolve/
├── .agents/
│   └── skills/
│       ├── page-content-source-of-truth/  # Canonical copy & zero-hallucination rules
│       └── website-architecture/          # This architecture skill
├── public/
│   └── images/                            # All local photography, icons, avatars & assets
├── src/
│   ├── assets/                            # Static asset imports (SVG logos, fallback graphics)
│   ├── components/                        # UI Components & Page Views
│   │   ├── Header.jsx                     # Global sticky navigation with dropdown menus
│   │   ├── FooterCTA.jsx                  # Global pre-footer banner & site footer
│   │   ├── CapabilityNavigatorSection.jsx # Shared 4-pillar navigator bar for all "What We Do" pages
│   │   ├── TransformHero.jsx              # Executive B2B hero for Transform pillar
│   │   ├── BrandLogo.jsx                  # SVG brand mark & dynamic pillar badge renderer
│   │   ├── ContactModal.jsx               # Global consultation modal dialog
│   │   ├── CMSDrawer.jsx                  # In-browser live editor drawer
│   │   ├── AdminLoginModal.jsx            # Admin / privileged user authentication modal
│   │   ├── ErrorBoundary.jsx              # React error boundary fallback
│   │   │
│   │   ├── [Homepage Sections]            # Hero, FinanceMoreThanNumbers, ProcessFlow, ApproachWhyUs, WhatWeDo, WhoWeHelp
│   │   ├── [What We Do Pages]             # WhatWeDoOverviewPage, CFOAdvisoryPage (LEAD), BuildPage (BUILD), TransformPage (TRANSFORM), ProtectPage (PROTECT)
│   │   ├── [Who We Help Pages]            # WhoWeHelpOverviewPage, GrowingBusinessesPage, EstablishedCorporatePage, NotForProfitPage, LocalGovernmentPage
│   │   └── [Company & Knowledge]          # AboutPage, ContactPage, InsightsPage, InsightDetailPage
│   ├── data/
│   │   ├── initialData.js                 # Complete canonical site content baseline
│   │   └── dummyAdminUsers.js             # Simulated administrative accounts for CMS demo
│   ├── services/
│   │   └── ssoAuth.js                     # Simulated SSO & token-based session management
│   ├── utils/
│   │   ├── imgUrl.js                      # Image path normalizer (handles dev '/' vs prod '/Evolve/')
│   │   └── router.js                      # Dynamic HTML5 router (URL parsing, alias resolution, pushState)
│   ├── App.jsx                            # Root component: router listener, CMS sync, layout dispatcher
│   ├── main.jsx                           # React DOM mount point
│   └── index.css                          # Tailwind CSS imports & custom typography rules
├── package.json
└── vite.config.js
```

---

## 3. Routing Architecture (`src/utils/router.js`)

The application uses an ultra-fast, zero-dependency HTML5 History router designed to work identically across local development, custom production domains, and GitHub Pages subpaths.

### Route Resolution Flow
```
User Navigation / Direct URL / PopState
                     │
                     ▼
         getBasePath() Check
(detects root '/' or subpath '/Evolve/')
                     │
                     ▼
            parseCurrentRoute()
(strips base path, handles legacy hashes, resolves aliases)
                     │
                     ▼
             App.jsx State
  setActivePage(page) + setActiveArticleId(id)
                     │
                     ▼
      Conditional Page Render in <main>
```

### Canonical Routes & Aliases
| Canonical Page Key | Canonical Path | Accepted Aliases / Legacy Links |
|---|---|---|
| `null` (Home) | `/` | `''`, `home` |
| `what-we-do` | `/what-we-do` | `what-we-do-overview` |
| `lead` | `/lead` | `cfo-advisory`, `cfo-fpa-advisory` |
| `build` | `/build` | `finance-functions`, `operating-models` |
| `transform` | `/transform` | `finance-transformation`, `data-technology` |
| `protect` | `/protect` | `tax-compliance`, `tax` |
| `who-we-help` | `/who-we-help` | `who-we-help-overview` |
| `growing-businesses`| `/growing-businesses` | `growth`, `scaleup` |
| `established-corporate` | `/established-corporate` | `corporate` |
| `not-for-profit` | `/not-for-profit` | `non-profit-community`, `nfp` |
| `local-government` | `/local-government` | `councils` |
| `about` | `/about` | `about-us` |
| `contact` | `/contact` | `get-in-touch` |
| `insights` | `/insights` | `articles`, `news` |
| `insight-detail` | `/insights/:id` | `insight-detail` |

### Rules for Route Navigation
- Always call `navigateTo(pageId, articleId)` passed down from `App.jsx` instead of `<a href="...">` to prevent full page reloads.
- To programmatically build URLs (e.g. for canonical links or meta tags), use `buildRouteUrl(pageId, articleId)`.

---

## 4. State Management & CMS Synchronization

1. **Baseline Source of Truth**:
   - `src/data/initialData.js` supplies structured JSON content for all homepage sections, footer, and navigation.
2. **Local Persistence Layer**:
   - `localStorage.getItem('evolve_site_cms_data')` stores live client edits.
   - On load, `App.jsx` sanitizes URLs and deep-merges cached values over `initialData` defaults so structural schema additions are preserved.
3. **Asset Resolution Utility (`imgUrl.js`)**:
   - All image paths must be wrapped with `imgUrl('/images/filename.jpg')`.
   - In dev: resolves to `/images/filename.jpg`.
   - In production GitHub Pages: automatically prefixes the base URL (`/Evolve/images/filename.jpg`).

---

## 5. Page Layout Architecture

Every page in the application conforms to a consistent structural shell:

```
┌─────────────────────────────────────────────────────────────┐
│ Header (Sticky, Backdrop Blur, Nav Links & Contact Trigger) │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ <main>                                                      │
│   ├── Dedicated Hero Component                              │
│   ├── Content Sections (Grid, Flow, Split Layout, etc.)      │
│   ├── CapabilityNavigatorSection (Standard on All Pillars)  │
│   └── FooterCTA & Footer Links                              │
│ </main>                                                     │
├─────────────────────────────────────────────────────────────┤
│ Global ContactModal (Activated via onOpenContact)           │
│ Global CMS Drawer (Activated via Admin Quick Bar)           │
└─────────────────────────────────────────────────────────────┘
```

### Standard What-We-Do Page Composition
For pages under **What We Do** (`LEAD`, `BUILD`, `TRANSFORM`, `PROTECT`):
1. **Hero**: High-contrast, brand-aligned banner with breadcrumbs and primary CTA.
2. **Content Modules**: 100% faithful to canonical source-of-truth copy (see `page-content-source-of-truth` skill).
3. **Capability Navigator**: Embed `<CapabilityNavigatorSection activePillar="lead|build|transform|protect" onSelectPillar={onSelectService} onOpenContact={onOpenContact} />`.
4. **Footer**: Handled centrally in `App.jsx`.

---

## 6. Development & Coding Principles

- **Zero Hallucination / Content Integrity**: Content for service pillar pages must adhere strictly to source-of-truth documentation without synthetic filler text.
- **Responsive-First Design**: Mobile-friendly breakpoints (`sm:`, `md:`, `lg:`, `xl:`) with balanced typography and scannable visual structures.
- **Clean Component Encapsulation**: Keep reusable visual modules (such as navigation bars, heroes, and grids) in dedicated component files under `src/components/`.
- **Safe Build & Check**: Always verify `npm run build` after structural modifications to ensure TypeScript/JSX validity and zero build errors.
