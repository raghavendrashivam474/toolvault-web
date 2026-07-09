# Design Bible — ToolVault

**Version:** v0.2.0
**Status:** Active
**Last Updated:** 2026-07-09

---

## 1. Brand Identity

### 1.1 Mission Statement

ToolVault empowers innovators through access to professional engineering
equipment, collaborative workspaces, expert guidance, and end-to-end
prototyping infrastructure.

### 1.2 Brand Voice

Professional. Precise. Empowering. We speak the language of engineers.

### 1.3 Brand Values

- Precision over decoration
- Clarity over complexity
- Trust through consistency
- Performance through restraint

---

## 2. Color System

### 2.1 Primary — Indigo Blue

Used for CTAs, highlights, and interactive elements.

| Token       | Value   | Use                 |
| ----------- | ------- | ------------------- |
| primary-500 | #6270f1 | Default brand color |
| primary-600 | #4f54e5 | Hover states        |
| primary-700 | #3f42ca | Active states       |
| primary-50  | #f0f4ff | Subtle backgrounds  |

### 2.2 Secondary — Slate

Used for text, backgrounds, and neutral surfaces.

| Token         | Value   | Use                |
| ------------- | ------- | ------------------ |
| secondary-900 | #0f172a | Primary text       |
| secondary-600 | #475569 | Secondary text     |
| secondary-400 | #94a3b8 | Muted text         |
| secondary-50  | #f8fafc | Page background    |
| secondary-100 | #f1f5f9 | Section background |

### 2.3 Accent — Cyan

Used for highlights, tags, and secondary interactive elements.

| Token      | Value   | Use                |
| ---------- | ------- | ------------------ |
| accent-500 | #06b6d4 | Accent highlights  |
| accent-50  | #ecfeff | Accent backgrounds |

### 2.4 Semantic Colors

- Success: #22c55e
- Warning: #f59e0b
- Error: #ef4444
- Info: #3b82f6

---

## 3. Typography

### 3.1 Font Family

Primary: Inter (next/font/google)
Monospace: JetBrains Mono

### 3.2 Type Scale

| Variant  | Size (mobile/desktop) | Weight | Use                  |
| -------- | --------------------- | ------ | -------------------- |
| display  | 48px / 72px           | 700    | Hero headlines       |
| h1       | 36px / 48px           | 700    | Page titles          |
| h2       | 30px / 36px           | 700    | Section titles       |
| h3       | 24px / 30px           | 600    | Card titles          |
| h4       | 20px / 24px           | 600    | Sub-section titles   |
| subtitle | 18px / 20px           | 500    | Supporting headlines |
| body-lg  | 18px                  | 400    | Lead paragraphs      |
| body     | 16px                  | 400    | General body text    |
| body-sm  | 14px                  | 400    | Secondary body text  |
| caption  | 12px                  | 400    | Labels and captions  |
| overline | 12px                  | 600    | Section tags         |

---

## 4. Spacing System

8-point grid. All spacing is a multiple of 4px or 8px.

| Token | Value |
| ----- | ----- |
| 1     | 4px   |
| 2     | 8px   |
| 3     | 12px  |
| 4     | 16px  |
| 6     | 24px  |
| 8     | 32px  |
| 10    | 40px  |
| 12    | 48px  |
| 16    | 64px  |
| 20    | 80px  |
| 24    | 96px  |
| 32    | 128px |

---

## 5. Component Design

### 5.1 Buttons

Variants: primary, secondary, outline, ghost, text
Sizes: sm (32px), md (40px), lg (48px), xl (56px)
States: default, hover, focus, active, disabled, loading
Icons: leftIcon, rightIcon props supported

### 5.2 Cards

Base: Card, CardHeader, CardBody, CardFooter
Specialized: FeatureCard, StatCard
Variants: default, outlined, elevated, ghost
Padding: none, sm, md, lg

### 5.3 Layout Primitives

Container: max-w-container (1280px), responsive padding
SectionWrapper: vertical rhythm control
Stack: flexbox with gap and alignment props
Grid: CSS grid with responsive column props
Spacer: explicit whitespace
Divider: horizontal or vertical separator

### 5.4 Section Components

Section, SectionHeader, SectionTag
SectionTitle, SectionSubtitle, SectionDescription, SectionDivider

### 5.5 Typography

Text component with 11 variants
Supports: align, color, balance, custom element override

---

## 6. Iconography

Library: Lucide React
Sizes: 16px (sm), 20px (md), 24px (lg)
Stroke: 1.5 (default Lucide standard)

---

## 7. Motion and Animation

### 7.1 Principles

- Animate with purpose only
- Keep durations between 150ms and 500ms
- Always respect prefers-reduced-motion
- Use easeOut for entering elements
- Avoid bouncy or playful animations

### 7.2 Duration Tokens

| Token  | Value | Use                   |
| ------ | ----- | --------------------- |
| fast   | 150ms | Micro-interactions    |
| normal | 250ms | UI state transitions  |
| slow   | 400ms | Page-level animations |
| slower | 600ms | Complex sequences     |

### 7.3 Available Presets

Variants: fadeIn, fadeUp, fadeDown, slideLeft, slideRight, scaleIn
Stagger: staggerContainer, staggerItem
Hover: hoverLift, hoverScale
Components: FadeIn, FadeUp, FadeDown, SlideLeft, SlideRight, ScaleIn
StaggerContainer, StaggerItem

---

## 8. Responsive Design

### 8.1 Breakpoints

| Name | Width  |
| ---- | ------ |
| sm   | 640px  |
| md   | 768px  |
| lg   | 1024px |
| xl   | 1280px |
| 2xl  | 1536px |

### 8.2 Approach

Mobile first. Design for 375px and scale up.
All layout components are responsive by default.

---

## 9. Accessibility Standards

- WCAG 2.1 AA compliance required
- Focus rings on all interactive elements via :focus-visible
- Color is never the sole indicator of state
- All images require descriptive alt text
- ARIA labels on icon-only interactive elements
- prefers-reduced-motion respected in CSS and Framer Motion

---

## 10. Dark Mode

Architecture prepared. CSS custom properties defined.
Implementation deferred to a future sprint.
