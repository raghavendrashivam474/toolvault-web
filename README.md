# ToolVault Web

ToolVault is an engineering infrastructure platform providing professional
engineering equipment, collaborative workspaces, expert mentorship, and
end-to-end prototyping infrastructure.

**Live Site:** [toolvault-web.vercel.app](https://toolvault-web.vercel.app)

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (via `@theme` block)
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## Lighthouse Scores (Production)

| Category       | Desktop | Mobile |
| -------------- | ------- | ------ |
| Performance    | 100     | 96     |
| Accessibility  | 100     | 100    |
| Best Practices | 100     | 100    |
| SEO            | 100     | 100    |

## Visual Design (Sprint 5)

Alternating background rhythm across 10 sections:

- **Dark moments**: Hero (intro), Labs (workspace), Vision (contemplative), CTA (commitment), Footer (grounded)
- **Light sections**: Warm White for breathing, Light Surface for subtle contrast

Each dark section has a distinct ambient glow signature (indigo, cyan, gold).
Gold accent used sparingly for warmth (tags, timeline dots, badges).

## Getting Started

    npm install
    npm run dev

Open http://localhost:3000 in your browser.

## Scripts

| Script        | Purpose                      |
| ------------- | ---------------------------- |
| npm run dev   | Start development server     |
| npm run build | Create production build      |
| npm run start | Run production build locally |
| npm run lint  | Run ESLint                   |

## Documentation

- docs/PRD.md — Product Requirements Document
- docs/Design-Bible.md — Design system specification
- docs/Architecture.md — Technical architecture
- docs/Roadmap.md — Development roadmap
- docs/Coding-Standards.md — Engineering standards

## License

MIT
