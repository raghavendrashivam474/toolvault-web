# Development Roadmap — ToolVault

**Version:** v0.5.0
**Status:** Sprint 5 Complete
**Live:** https://toolvault-web.vercel.app

---

## Sprint 1 — Foundation (Complete)

Repository, Next.js 16, TypeScript, Tailwind, ESLint, Prettier, folder structure.

## Sprint 2 — UI Foundation (Complete)

Design tokens, Typography, Layout, Button, Card, Section components, Framer Motion, hooks, providers.

## Sprint 3 — Homepage (Complete)

All 10 sections built and assembled. Full accessibility. Zero errors.

## Sprint 4 — Production Polish (Complete)

Loading pages, SEO, favicons, security headers, accessibility.
Lighthouse: 100/100/100/100 desktop, 96/100/100/100 mobile.
Deployed to Vercel.

## Sprint 5 — Visual Identity (Complete)

- [x] Tailwind v4 @theme migration
- [x] Refined color language (warm neutrals, graphite hierarchy, gold accent)
- [x] Engineering texture system (blueprint grid, dot matrix, CAD lines)
- [x] Scroll progress bar (CSS scroll-timeline)
- [x] Hero redesign with ambient glows and glass tag
- [x] Adaptive navigation (transparent over dark, glass on scroll)
- [x] Alternating background rhythm across all 10 sections
- [x] Ambient lighting per dark section (indigo, cyan, gold, indigo)
- [x] Glass card system for dark sections
- [x] Gold accent language (tags, timeline dots, "Soon" badges)
- [x] Premium micro-interactions (softer focus, warm selection, refined scrollbar)
- [x] SSR hydration fix in useScrolled hook

### Sprint 5 Design Language

| Section       | Background    | Ambient Glow       |
| ------------- | ------------- | ------------------ |
| Hero          | Deep Graphite | Indigo + Gold hint |
| Problem       | Warm White    | —                  |
| Solution      | Light Surface | —                  |
| Labs          | Graphite      | Cyan               |
| Capabilities  | Warm White    | —                  |
| Why ToolVault | Light Surface | —                  |
| Vision        | Deep Graphite | Gold               |
| Roadmap       | Warm White    | —                  |
| CTA           | Graphite      | Indigo spotlight   |
| Footer        | Near Black    | —                  |

## Sprint 5.1 — Deferred Polish (Planned)

- [ ] Card system further refinement
- [ ] Typography micro-adjustments
- [ ] Spacing audit
- [ ] Iconography consistency pass
- [ ] Motion polish

## Sprint 6 — Content and Assets (Planned)

- [ ] Real photography replacing placeholders
- [ ] Video content integration
- [ ] Custom domain (toolvault.io)
- [ ] Contact form with backend
- [ ] Email waitlist capture
- [ ] Analytics integration

## Sprint 7 — Feature Expansion (Planned)

- [ ] Theme toggle (dark/light mode)
- [ ] Member portal
- [ ] Equipment booking system
- [ ] Workshop registration

## Sprint 6 — QA & Production Hardening (Complete) — v1.0.0

- [x] Discovery wave — systematic code + manual testing
- [x] Fixed 320px horizontal scroll (Hero typography + global overflow-x)
- [x] Wired up 3 broken CTAs (Hero, Nav, CTA section)
- [x] Removed 11 dead placeholder links
- [x] Nav and Footer logos scroll to top
- [x] Real email integrated (raghavendrashivam474@gmail.com)
- [x] Full responsive validation (320px through 1920px)
- [x] Accessibility audit passed
- [x] Performance validated on production PageSpeed Insights
- [x] All SEO endpoints verified
- [x] Cross-browser check
- [x] QA report + Release notes v1.0.0

See docs/Sprint-6-Findings.md and docs/RELEASE-NOTES.md
