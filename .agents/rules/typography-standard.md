# Immutable Standard Typography and Font Sizing Rule

> [!IMPORTANT]
> **CRITICAL & IMMUTABLE RULE**: The typography hierarchy, font sizes, and font weights specified below are **permanently locked**.
> Under NO circumstances should any AI agent, assistant, or developer alter, inflate, or enlarge these font standards.
> **DO NOT** re-introduce oversized display text (e.g. `text-[64px]`, `text-6xl`, `text-5xl font-black`), excessive heavy weights (`font-black` on H2/H3/cards), or arbitrary custom pixel sizes.

---

## Immutable Font Sizing Hierarchy

| Level | Exact Tailwind Classes | Purpose & Scale | Never Use |
|---|---|---|---|
| **Page / Hero H1** | `text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight` | Page title in hero sections (36px–48px) | `text-[64px]`, `text-6xl`, `font-black` |
| **Hero Subtitle** | `text-lg sm:text-xl font-semibold tracking-tight` | Tagline directly below H1 (18px–20px) | `text-2xl`, `text-3xl`, `font-extrabold` |
| **Hero Lead Paragraph** | `text-base text-slate-300 font-normal leading-relaxed` | Hero value proposition paragraph (16px) | `text-lg`, `text-xl` |
| **Section Headings (H2)** | `text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#061a2e] leading-snug` | Major section titles (28px–36px) | `text-5xl`, `font-black`, `text-4xl font-black` |
| **Section Subtitle / Context** | `text-sm sm:text-base text-slate-600 font-medium leading-relaxed` | Subheading under H2 (14px–16px) | `text-lg`, `text-xl` |
| **Card / Feature Titles (H3)** | `text-lg sm:text-xl font-bold text-[#061a2e] tracking-tight` | Container & module titles (18px–20px) | `text-2xl`, `text-3xl`, `font-black` |
| **Sub-items / Tile Titles (H4)** | `text-base sm:text-lg font-semibold text-[#061a2e]` | Grid items & service rows (16px–18px) | `text-xl`, `font-black` |
| **Body & Paragraphs** | `text-sm sm:text-base text-slate-600 leading-relaxed` | Standard descriptive copy (14px–15px) | `text-lg`, `text-xl` |
| **Diagnostic / Checklist Items** | `text-sm font-semibold` | Interactive cards, checklist points (14px) | `text-base font-black` |
| **Eyebrows & Badges** | `text-xs font-semibold tracking-wider uppercase` | Pill badges & section tags (12px) | `font-black text-xs tracking-widest` |
| **Numbers / Metrics** | `text-2xl sm:text-3xl font-bold` + `text-xs uppercase font-medium text-slate-400` | Stats strips and numbered badges | Arbitrary or oversized font sizes |
| **Primary Buttons** | `text-sm sm:text-base font-semibold px-7 py-3.5` | CTAs and action buttons | Oversized padding or bloated text |

---

## Strict Enforcement Guidelines

1. **Weight Discipline**:
   - `font-black` (900) is strictly prohibited on all section headings (H2), card titles (H3), and body text.
   - Use `font-extrabold` (800) exclusively for Hero H1 titles.
   - Use `font-bold` (700) for H2 section titles and H3 card titles.
   - Use `font-semibold` (600) for subtitles, list item titles, and buttons.
   - Use `font-normal` (400) or `font-medium` (500) for body copy.

2. **Proportional Harmony**:
   - Never inflate text sizes in an attempt to make a section "stand out".
   - Rely on whitespace, subtle borders, card elevation, and visual hierarchy—not massive text.

3. **Skill Reference**:
   - Refer to the workspace skill `website-architecture` at `.agents/skills/website-architecture/SKILL.md` Section 7 for design system integration.
