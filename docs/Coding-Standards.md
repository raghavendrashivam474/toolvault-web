# Coding Standards — ToolVault

**Version:** v0.1.0
**Status:** Draft
**Last Updated:** 2026-07-09

---

## 1. General Principles

- Write code for humans first, machines second
- Prefer clarity over cleverness
- Keep functions small and focused
- Avoid premature optimization

## 2. Naming Conventions

| Context               | Convention  | Example                    |
|-----------------------|-------------|----------------------------|
| Components            | PascalCase  | HeroSection.tsx            |
| Hooks                 | camelCase   | useScrollPosition.ts       |
| Utilities             | camelCase   | formatDate.ts              |
| Constants             | UPPER_SNAKE | MAX_RETRIES                |
| Folders               | kebab-case  | hero-section/              |
| TypeScript types      | PascalCase  | ButtonProps                |
| TypeScript interfaces | PascalCase  | NavigationItem             |

## 3. TypeScript Standards

- Strict mode enabled
- No implicit any
- Explicit return types on functions
- Prefer interfaces for object shapes
- Prefer type aliases for unions and primitives

## 4. Component Standards

- One component per file
- Props interface defined above component
- Default exports for page components
- Named exports for UI components

## 5. Import Ordering

1. React and Next.js
2. Third-party libraries
3. Internal absolute imports
4. Types

## 6. ESLint Rules

See .eslintrc.json for full configuration.

## 7. Prettier Rules

See .prettierrc for full configuration.

## 8. Git Commit Standards

Format: type(scope): description

Types:
  feat     new feature
  fix      bug fix
  chore    maintenance
  docs     documentation
  build    build system
  style    formatting
  refactor code restructure
  perf     performance
  test     tests

## 9. File Structure Per Component

ComponentName/
  index.ts               Re-export
  ComponentName.tsx      Component implementation
  ComponentName.types.ts Type definitions if complex

## 10. Accessibility Requirements

- All images must have descriptive alt text
- Interactive elements must be keyboard accessible
- Color contrast must meet WCAG 2.1 AA minimum
- Use semantic HTML elements
- ARIA labels where semantic HTML is insufficient