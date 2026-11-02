---
name: no-ai-aesthetics
description: >-
  Enforces strict human-led executive advisory branding for EVOLVE.
  Prohibits any AI-associated iconography (Sparkles, Bot, Wand, pulsing status indicators)
  and synthetic or AI-sounding terminology across all components, badges, and copy.
---

# Executive Brand Integrity: No AI Aesthetics Skill

## 1. Core Principle & Firm Identity

**EVOLVE** is a senior, practitioner-led corporate and business advisory firm specializing in:
- **LEAD**: CFO & FP&A Advisory
- **BUILD**: Finance Functions & Operating Models
- **TRANSFORM**: Finance Transformation, Data & Technology
- **PROTECT**: Tax & Compliance

EVOLVE is **NOT** a SaaS tool, AI platform, copilot, or automated software bot. Every visual and textual element on the website must communicate human leadership, seasoned executive experience, and rigorous corporate governance.

---

## 2. Prohibited Iconography (The "No AI" Rule)

Under **NO circumstances** should any agent, designer, or developer introduce icons or animations associated with AI, chatbots, or automated assistants:

| Prohibited Icon / Pattern | Reason | Strict Replacement |
|---|---|---|
| `<Sparkles />` (✨) | Universally associated with Generative AI / Copilot / Magic tools | `TrendingUp`, `Layers`, `Workflow`, `ShieldCheck`, `Compass`, `Briefcase` |
| `<Bot />` / Robot icons | Suggests an automated bot or chatbot | `Users`, `Briefcase`, `Building2` |
| `<Wand />` / Magic icons | Suggests artificial or automated generation | `Workflow`, `Target`, `Activity` |
| `<Brain />` (in tech context) | Suggests neural network / machine intelligence | `Target`, `Compass`, `Users` |
| `animate-pulse` on badge icons | Simulates an active AI status or listening state | Static, clean iconography without pulse |
| Glowing neon AI "orbs" as product features | Tech SaaS / AI aesthetic | Subtle, dark navy executive ambient gradients |

---

## 3. Allowed Executive Advisory Iconography

Always choose purposeful, industry-standard corporate advisory icons:

1. **Brand Vector SVGs (Preferred for Pillars)**:
   - `<PillarIcon type="lead" />`
   - `<PillarIcon type="build" />`
   - `<PillarIcon type="transform" />`
   - `<PillarIcon type="protect" />`

2. **Lucide Corporate Icons**:
   - **Leadership & Trajectory**: `TrendingUp`, `Compass`, `Target`
   - **Operating Models & Architecture**: `Layers`, `Workflow`, `Building2`
   - **Governance, Tax & Compliance**: `ShieldCheck`, `Shield`, `FileCheck`
   - **Advisory & Executive Management**: `Briefcase`, `Users`, `Activity`, `CheckCircle2`
   - **Analytics & Reporting**: `BarChart3`, `LineChart`, `PieChart`
   - **Admin & CMS Controls**: `Sliders`, `Settings`, `Edit3`

---

## 4. Prohibited Terminology & AI Copy

Do **NOT** write, introduce, or modify copy to include:
- "AI-powered", "Powered by AI", "AI-driven"
- "Smart / Intelligent automation"
- "Copilot", "Virtual CFO Bot", "Automated Advisor"
- "Generative", "Algorithmic", "Neural"
- Synthetic explanations or marketing jargon not present in canonical source documents.

---

## 5. Pre-Commit Checklist

Before approving any UI or component change, verify:
- [ ] No `Sparkles` icon imported or rendered in any `.jsx` or `.tsx` file.
- [ ] No `animate-pulse` on badge icons.
- [ ] Every badge uses an executive advisory icon (`TrendingUp`, `Layers`, `Workflow`, `ShieldCheck`, `Briefcase`, etc.).
- [ ] Content strictly follows the canonical source documents (`page-content-source-of-truth`).
