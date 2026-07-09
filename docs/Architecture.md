# Technical Architecture — ToolVault

**Version:** v0.2.0
**Status:** Active
**Last Updated:** 2026-07-09

---

## 1. Overview

ToolVault is built on Next.js 16 with the App Router, TypeScript strict mode,
Tailwind CSS v4, and Framer Motion. The architecture prioritizes scalability,
maintainability, and performance from the foundation.

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
app/ Next.js App Router — pages and layouts
animations/ Framer Motion variants and motion components
assets/ Static assets referenced in code
components/
buttons/ Button component library
cards/ Card component library
layout/ Layout primitives (Container, Stack, Grid)
navigation/ Navigation components (Sprint 3)
sections/ Section structure components
typography/ Text component with variant system
constants/ Application-wide constants
hooks/ Custom React hooks
lib/ Third-party library configurations
providers/ React context providers
styles/ Additional global styles
tokens/ Design token definitions
types/ Global TypeScript type definitions
utils/ Pure utility functions

public/
images/ Optimised images
icons/ SVG icons
videos/ Video assets
documents/ Downloadable documents

docs/ Project documentation

---

## 4. Design Token Architecture

Tokens are defined in src/tokens/ and consumed via:

1. Tailwind CSS config (tailwind.config.ts) — utility classes
2. CSS custom properties (globals.css) — runtime values
3. TypeScript imports — type-safe references in logic

Token categories:
colors.ts — full color palette
typography.ts — font families, sizes, weights
spacing.ts — spacing scale, border radius, shadows
animation.ts — durations and easing values
index.ts — single export entry point

---

## 5. Component Architecture

### Naming

- PascalCase for component files and exports
- kebab-case for folders
- One component per file
- Named exports throughout (no default exports from UI components)

### File Structure Per Component

ComponentName/
index.ts — re-exports
ComponentName.tsx — implementation
ComponentName.types.ts — prop interfaces

### Import Pattern

import { Button } from '@/components/buttons'
import { Container, Stack } from '@/components/layout'
import { FadeUp } from '@/animations'
import { cn } from '@/utils/cn'

---

## 6. Routing Strategy

Next.js App Router. File-based routing under src/app/.
Current routes:
/ — placeholder (Sprint 3 will implement landing page)

---

## 7. Provider Architecture

AppProviders wraps the root layout and composes all providers.
Current providers:
MotionProvider — Framer Motion LazyMotion with domAnimation features

Add new providers inside AppProviders as the application grows.

---

## 8. Performance Strategy

- LazyMotion used for Framer Motion (reduces bundle size)
- next/font for zero-layout-shift font loading
- Tree-shakable named exports on all components
- No inline styles
- No arbitrary Tailwind values
- Static generation for all marketing pages

---

## 9. Accessibility Strategy

- Semantic HTML enforced in all components
- :focus-visible ring on all interactive elements
- aria-hidden on decorative elements
- aria-disabled and aria-busy on Button states
- prefers-reduced-motion respected globally via CSS
- WCAG 2.1 AA target for all color combinations

---

## 10. Deployment Pipeline

Target: Vercel
Branch: main -> production
Preview: every pull request gets a preview URL
Environment variables: managed in Vercel dashboard
