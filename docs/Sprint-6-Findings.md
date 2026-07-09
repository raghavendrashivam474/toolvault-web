# Sprint 6 — QA Report

**Status:** Complete
**Date:** 2026-07-09
**Version:** v1.0.0
**Live URL:** https://toolvault-web.vercel.app

---

## Summary

Sprint 6 was a validation and hardening sprint. No new features were added.
The Sprint 5 build was audited across functionality, responsiveness,
accessibility, performance, and cross-browser behavior. All critical and high
severity findings were resolved before release.

---

## Testing Methodology

- **Wave 1 (Discovery):** Systematic code inspection + manual browser testing.
  Findings recorded without immediate fixes to avoid fix-cycle regressions.
- **Wave 2 (Fixes):** All findings resolved in focused commits.
- **Wave 3 (Documentation):** QA report + release notes.

---

## Findings & Resolutions

### CRITICAL — Responsive Overflow at 320px

**Finding:** Horizontal scroll appeared on viewports at or below 320px.
**Cause:** Hero headline typography scaling started at text-5xl (48px) with a
xl:text-[5.5rem] (88px) cap that could exceed narrow viewports.
**Resolution:** Adjusted Hero typography to start at text-4xl and scale
progressively. Added global `overflow-x: hidden` on html and body as a safety
net.
**Commit:** `fix(responsive): eliminate 320px horizontal scroll, tighten Hero typography scaling`

### HIGH — Three Primary CTAs Non-Functional

**Finding:** Hero "Explore ToolVault", Nav "Get Involved", and CTA section
"Join the Community" buttons rendered but did nothing when clicked.
**Cause:** Button components used without onClick, href, or anchor wrapper.
**Resolution:** Wrapped each Button in an anchor element with the correct
navigation target. Hero explore now scrolls to Problem section. Nav Get
Involved and Learn More scroll to CTA. Join the Community opens a mailto to
the founding team.
**Commit:** `fix: wire up primary CTAs, fix nav/footer logos, replace dead placeholder links, use real email`

### MEDIUM — Dead Placeholder Links

**Finding:** 11 links across Navbar, Footer navigation, and social icons
pointed to href="#" with no destination.
**Resolution:** Removed placeholder "coming soon" links from footer
(Careers, Workshops, Mentorship, Partnerships, Investors, social placeholders).
Consolidated footer to only real destinations. Nav and Footer logos now scroll
to top via #hero anchor.

### INFO — SolutionSection and WhySection lack IDs

**Finding:** These sections have no id attribute.
**Assessment:** No navigation link points to them. Intentional. No action.

---

## Functional Testing Results

| Element                         | Status |
| ------------------------------- | ------ |
| Navbar logo → scroll to top     | ✅     |
| Nav link: About                 | ✅     |
| Nav link: Labs                  | ✅     |
| Nav link: Capabilities          | ✅     |
| Nav link: Vision                | ✅     |
| Nav link: Roadmap               | ✅     |
| Nav CTA: Get Involved           | ✅     |
| Hero: Explore ToolVault         | ✅     |
| Hero: Learn more                | ✅     |
| Hero: Scroll indicator          | ✅     |
| CTA: Join the Community (email) | ✅     |
| CTA: Contact Us (email)         | ✅     |
| Footer logo → scroll to top     | ✅     |
| Footer: Explore column links    | ✅     |
| Footer: Contact links           | ✅     |
| Skip to main content link       | ✅     |
| Mobile menu open/close          | ✅     |
| Mobile menu items               | ✅     |

---

## Responsive Testing Results

| Breakpoint | Status | Notes                                 |
| ---------- | ------ | ------------------------------------- |
| 320px      | ✅     | Fixed in Sprint 6 (was overflowing)   |
| 375px      | ✅     | iPhone SE — clean                     |
| 390px      | ✅     | iPhone 14 — clean                     |
| 414px      | ✅     | Large mobile — clean                  |
| 768px      | ✅     | iPad — clean                          |
| 1024px     | ✅     | Laptop — clean                        |
| 1280px     | ✅     | Desktop — clean                       |
| 1440px     | ✅     | Large desktop — clean                 |
| 1920px     | ✅     | Ultra-wide — container caps at 1280px |

---

## Accessibility Audit

| Check                                           | Status |
| ----------------------------------------------- | ------ |
| Skip to main content link visible on Tab        | ✅     |
| Focus rings visible on all interactive elements | ✅     |
| Keyboard navigation for all buttons and links   | ✅     |
| ARIA labels on icon-only elements               | ✅     |
| Heading hierarchy (h1 → h2 → h3)                | ✅     |
| Semantic HTML (header, main, section, footer)   | ✅     |
| Reduced motion respected                        | ✅     |
| Color contrast (WCAG AA)                        | ✅     |

Lighthouse Accessibility: **100 / 100**

---

## Performance Audit

Measured via Google PageSpeed Insights on production URL.

| Metric         | Desktop | Mobile |
| -------------- | ------- | ------ |
| Performance    | 100     | 96     |
| Accessibility  | 100     | 100    |
| Best Practices | 100     | 100    |
| SEO            | 100     | 100    |

Core Web Vitals (mobile):

- FCP: 0.9s
- LCP: 2.4s (within Good threshold)
- TBT: 50ms
- CLS: 0

---

## SEO Validation

| Endpoint                    | Status |
| --------------------------- | ------ |
| /robots.txt                 | ✅ 200 |
| /sitemap.xml                | ✅ 200 |
| /manifest.webmanifest       | ✅ 200 |
| /icon.svg                   | ✅ 200 |
| /opengraph-image            | ✅ 200 |
| /twitter-image              | ✅ 200 |
| Meta title                  | ✅     |
| Meta description            | ✅     |
| Canonical URL               | ✅     |
| Open Graph tags             | ✅     |
| Twitter Card tags           | ✅     |
| JSON-LD Organization schema | ✅     |

---

## Cross-Browser Compatibility

| Browser        | Status | Notes                                                                               |
| -------------- | ------ | ----------------------------------------------------------------------------------- |
| Chrome Desktop | ✅     | Full support                                                                        |
| Edge Desktop   | ✅     | Full support (Chromium-based)                                                       |
| Firefox        | ✅     | Scroll progress bar not visible (no scroll-timeline support — graceful degradation) |
| Chrome Android | ✅     | Full support                                                                        |

---

## Production Deployment Verification

| Check                        | Status |
| ---------------------------- | ------ |
| Vercel auto-deploy from main | ✅     |
| Build time                   | ~44s   |
| Zero build warnings          | ✅     |
| Zero runtime console errors  | ✅     |
| All 9 routes serve correctly | ✅     |
| /404 page renders            | ✅     |
| Metadata renders in HTML     | ✅     |

---

## Known Limitations

- **mailto: links require configured email client.** Users without a default
  mail app configured will experience clicks that appear to do nothing. This
  is standard browser behavior. Fallback: the email address is visibly listed
  in the footer for manual copy.

- **Real photography not yet integrated.** Lab cards use icon placeholders
  labeled "Image Coming Soon". Scheduled for Sprint 7 content sprint.

- **Contact form deferred.** Currently all inquiry flows use mailto: links.
  Contact form with backend scheduled for Sprint 7.

---

## Sprint 6 Deliverables

- ✅ 320px responsive fix
- ✅ 3 primary CTAs wired to correct destinations
- ✅ 11 dead placeholder links removed or replaced
- ✅ Nav and Footer logos scroll to top
- ✅ Real email address (`raghavendrashivam474@gmail.com`) integrated across site
- ✅ QA report documented
- ✅ v1.0.0 release tagged

---

**Sprint 6 status:** Complete. Site is production-grade and ready for public
showcase, investor demos, and mentor review.
