# Technical Architecture — ToolVault

**Version:** v0.3.0
**Status:** Active
**Last Updated:** 2026-07-09

---

## 1. Overview

ToolVault is built on Next.js 16 with the App Router, TypeScript strict mode,
Tailwind CSS v4, and Framer Motion. Sprint 3 delivered the complete homepage
assembled from Sprint 2 reusable primitives.

---

## 2. Technology Stack

| Layer      | Technology            | Version |
| ---------- | --------------------- | ------- |
| Framework  | Next.js (App Router)  | 16.2.10 |
| Language   | TypeScript            | 5.x     |
| Styling    | Tailwind CSS          | 4.x     |
| Animation  | Framer Motion         | 12.x    |
| Icons      | Lucide React          | Latest  |
| Utilities  | clsx + tailwind-merge | Latest  |
| Deployment | Vercel                | —       |

---

## 3. Folder Structure

src/
app/
page.tsx Homepage — composes all sections
layout.tsx Root layout with metadata and providers
globals.css Global styles and CSS custom properties
animations/
variants.ts Framer Motion animation presets
MotionComponents.tsx FadeIn, FadeUp, StaggerContainer etc.
index.ts
components/
buttons/ Button — 5 variants, 4 sizes
cards/ Card, FeatureCard, StatCard
layout/ Container, Stack, Grid, Spacer, Divider
navigation/ Navbar — sticky, responsive, mobile menu
sections/
capabilities/ CapabilitiesSection
cta/ CTASection
footer/ Footer
hero/ HeroSection
labs/ LabsSection
problem/ ProblemSection
roadmap/ RoadmapSection
solution/ SolutionSection, WhySection
vision/ VisionSection
Section.tsx Section, SectionHeader, SectionTag etc.
typography/ Text component — 11 variants
constants/
site.ts SITE, BREAKPOINTS, TRANSITION, Z_INDEX
navigation.ts NAV_LINKS, CTA_LINK
index.ts
hooks/
useReducedMotion.ts
useMediaQuery.ts
useScrolled.ts
index.ts
providers/
MotionProvider.tsx LazyMotion wrapper
AppProviders.tsx Root provider composition
index.ts
tokens/
colors.ts Full color palette
typography.ts Font definitions
spacing.ts 8pt grid, radius, shadows
animation.ts Duration and easing tokens
index.ts
types/
index.ts Global TypeScript definitions
utils/
cn.ts clsx + tailwind-merge utility
helpers.ts formatNumber, sleep, clamp, isClient

---

## 4. Homepage Component Tree

HomePage (page.tsx)
Navbar
main#main-content
HeroSection
ProblemSection
SolutionSection
LabsSection
CapabilitiesSection
WhySection
VisionSection
RoadmapSection
CTASection
Footer

---

## 5. Animation Architecture

All animations use Framer Motion via approved Sprint 2 presets.

Scroll-triggered: whileInView with once:true viewport detection
Entrance: FadeUp, FadeIn, SlideLeft, SlideRight, ScaleIn
Stagger: StaggerContainer wraps grids, StaggerItem wraps cards
Hover: CSS transitions (duration-200) on card elements
Navigation: AnimatePresence for mobile menu open/close
Hero: staggerContainer with animate (not whileInView)

Reduced motion: Respected via CSS @media prefers-reduced-motion

---

## 6. Responsive Strategy

All sections mobile-first. Breakpoints used:

sm 640px — 2-column grids begin
md 768px — typography scales up, nav links appear
lg 1024px — 3-4 column grids, timeline alternates sides
xl 1280px — max container width reached

Navigation: Desktop links hidden below md, mobile menu below md.
Hero: Typography scales from text-5xl to text-7xl across breakpoints.
Grids: All use responsive col classes (sm:grid-cols-2, lg:grid-cols-3).

---

## 7. Performance Strategy

- Static generation for homepage (no server components needed)
- LazyMotion reduces Framer Motion bundle size
- next/font for zero-layout-shift font loading (Inter)
- Named exports enable tree shaking
- No inline styles (except computed backgrounds in Hero)
- Images are placeholders — next/image optimization in Sprint 4

---

## 8. SEO Implementation

Metadata defined in layout.tsx:

- title template: page | ToolVault
- description
- openGraph with title, description, type, locale
- twitter card summary_large_image
- robots index and follow
- metadataBase for absolute URL resolution

---

## 9. Accessibility Implementation

- Semantic HTML throughout (header, main, section, footer, nav)
- All sections have aria-label attributes
- Navbar has aria-label, aria-expanded on mobile toggle
- Focus-visible ring on all interactive elements
- Decorative elements aria-hidden
- Button loading states aria-busy and aria-disabled
- Blockquote semantic markup in CTA
- Skip to main content via id="main-content"
- Reduced motion via CSS and useReducedMotion hook

---

## 10. Deployment

Target: Vercel
Branch: main -> production
Build: next build — static output
Route: / — statically prerendered

## 11. Production Deployment

**Live URL:** https://toolvault-web.vercel.app
**Platform:** Vercel
**Build:** Static (all 10 routes prerendered)
**CDN:** Vercel Edge Network (global)
**Build command:** next build
**Deployed:** Sprint 4 completion

### Deployment Routes

| Route                 | Type                 |
| --------------------- | -------------------- |
| /                     | Static               |
| /_not-found           | Static               |
| /apple-icon           | Static (dynamic PNG) |
| /icon.svg             | Static               |
| /manifest.webmanifest | Static               |
| /opengraph-image      | Static (dynamic PNG) |
| /robots.txt           | Static               |
| /sitemap.xml          | Static               |
| /twitter-image        | Static (dynamic PNG) |

### Security Headers Applied

- X-DNS-Prefetch-Control: on
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=()

### Lighthouse Scores (Production)

| Category       | Desktop | Mobile |
| -------------- | ------- | ------ |
| Performance    | 100     | 96     |
| Accessibility  | 100     | 100    |
| Best Practices | 100     | 100    |
| SEO            | 100     | 100    |

Core Web Vitals — all in Google's Good threshold:

- FCP: 0.9s
- LCP: 2.4s
- TBT: 50ms
- CLS: 0
