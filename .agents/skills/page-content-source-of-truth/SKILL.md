---
name: page-content-source-of-truth
description: >-
  Enforces strict content integrity for EVOLVE brand pillar and service detail pages (LEAD, BUILD, TRANSFORM, PROTECT).
  Use this skill whenever creating, updating, or reviewing the copy, text, and structure of any service pillar page
  to ensure 100% fidelity to the canonical source-of-truth documents without any additional words, synthetic text, or marketing filler.
---

# Page Content Source of Truth Skill

This skill enforces the **Zero-Hallucination Content Rule** for all EVOLVE web application pages:

> [!IMPORTANT]
> **ABSOLUTE RULE**: For any pillar page, the user-provided specification document is the **single source of truth**.
> **DO NOT** add additional words, synthetic explanations, marketing fluff, or unrequested paragraphs.
> Use only the exact headings, subheadings, bullet points, and copy from the canonical reference files.

---

## Canonical Specifications

1. **BUILD — Finance Functions & Operating Models**:
   - Canonical document: [references/build-source-of-truth.md](./references/build-source-of-truth.md)
   - Scope: Hero, Overview, Finance Health Check (5 dimensions), Finance Operating Models & TOM (7 dimensions), Target Operating Model Support (10 points), Finance Capability Uplift (5 stages), Outsourced and Augmented Support & Objective statement, CTA.

2. **LEAD — CFO & FP&A Advisory**:
   - Canonical document: [references/lead-source-of-truth.md](./references/lead-source-of-truth.md)
   - Scope: Hero, Overview, Beyond reporting the numbers (8 core questions), CFO Advisory Services (8 core areas), FP&A Capabilities (12 disciplines), Fractional CFO Support (8 scenarios), When should you consider CFO advisory (7 triggers), Call to Action.

---

## Core Guidelines for UI/UX Specialists

1. **Exact Text Reproduction**:
   - Every card title, subtitle, bullet point, and prompt sentence must directly reflect the canonical text.
   - Do not paraphrase, embellish, or lengthen the text.

2. **Visual Hierarchy & Layout Craft**:
   - Rely on modern, world-class layout techniques (split layouts, high-contrast typography, icon emblems, responsive grids, balanced heights) to deliver visual polish without altering the words.

3. **Updating Sources of Truth**:
   - When a user supplies an updated document for any page, update the corresponding file in `references/` first, then update the React component to match.
