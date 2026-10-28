# Content Integrity and Source of Truth Rule

Whenever generating, modifying, or refactoring text for any brand pillar or service page (e.g. `CFOAdvisoryPage.jsx`, `BuildPage.jsx`, etc.):

1. **Strict Copy Fidelity**:
   - The user-provided specification document is the **absolute, immutable source of truth**.
   - Do NOT add additional words, synthetic explanations, marketing fluff, or unrequested paragraphs.
   - Every heading, subtitle, bullet point, and prompt sentence must match the provided specification document.

2. **Skill Reference**:
   - Refer to the workspace skill `page-content-source-of-truth` located at `.agents/skills/page-content-source-of-truth/SKILL.md` and its canonical reference documents in `references/`.
