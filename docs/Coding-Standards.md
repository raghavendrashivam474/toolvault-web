# Coding Standards — ToolVault

**Version:** v0.2.0
**Status:** Active
**Last Updated:** 2026-07-09

---

## 1. General Principles

- Write code for humans first, machines second
- Prefer clarity over cleverness
- Keep functions small and focused
- Avoid premature optimization
- No dead code
- No console statements in production code
- No TODO comments — create a ticket instead

---

## 2. Naming Conventions

| Context               | Convention  | Example              |
| --------------------- | ----------- | -------------------- |
| Components            | PascalCase  | HeroSection.tsx      |
| Hooks                 | camelCase   | useScrollPosition.ts |
| Utilities             | camelCase   | formatDate.ts        |
| Constants             | UPPER_SNAKE | MAX_RETRIES          |
| Folders               | kebab-case  | hero-section/        |
| TypeScript types      | PascalCase  | ButtonProps          |
| TypeScript interfaces | PascalCase  | NavigationItem       |
| CSS custom properties | kebab-case  | --color-primary      |

---

## 3. TypeScript Standards

- Strict mode enabled (noImplicitAny, noUnusedLocals, noUnusedParameters)
- No explicit any
- Explicit prop interfaces for every component
- Prefer interfaces for object shapes
- Prefer type aliases for unions and primitives
- Use type imports: import type { Foo } from './Foo'

---

## 4. Component Standards

- One component per file
- Props interface defined in a .types.ts file for complex components
- Named exports for all UI components
- Default exports only for Next.js page and layout files
- 'use client' directive only where client-side state or effects are required
- No business logic inside UI components

---

## 5. Import Ordering

1. React and Next.js core
2. Third-party libraries (framer-motion, lucide-react)
3. Internal absolute imports (@/components, @/utils, @/hooks)
4. Relative imports
5. Type imports last

Prettier and ESLint enforce this automatically.

---

## 6. Tailwind Standards

- Use design tokens via Tailwind utility classes only
- No arbitrary values (avoid w-[347px])
- No inline styles unless dynamically computed
- Use cn() for conditional class merging
- Class order enforced by prettier-plugin-tailwindcss

---

## 7. Animation Standards

- All animations use presets from src/animations/
- Never animate opacity and transform separately — combine
- Always test with prefers-reduced-motion enabled
- Keep animation duration under 500ms for UI elements
- Use viewport-based triggers (whileInView) for scroll animations

---

## 8. Git Commit Standards

Format: type(scope): description

Types:
feat new feature or component
fix bug fix
chore maintenance, config, tooling
docs documentation only
build build system or dependencies
style formatting, no logic change
refactor code restructure, no behaviour change
perf performance improvement
test test additions or changes

Examples:
feat(ui): implement Button component
feat(layout): create responsive Container
docs: update architecture documentation
chore: upgrade dependencies

---

## 9. Accessibility Standards

Every component must:

- Use semantic HTML elements
- Support keyboard navigation
- Have visible focus indicators
- Include ARIA attributes where semantics are insufficient
- Never rely on color alone to convey information

---

## 10. File Checklist Before Committing

- [ ] npx tsc --noEmit passes
- [ ] npm run lint passes
- [ ] npx prettier --check passes
- [ ] No console.log statements
- [ ] No unused imports
- [ ] Props are typed
- [ ] Component is exported from its index.ts
