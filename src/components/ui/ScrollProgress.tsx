/**
 * ScrollProgress — Thin brand-accent bar fixed at page top.
 * Uses modern CSS scroll-driven animations (no JavaScript required).
 * Silently invisible on browsers without scroll-timeline support.
 */
export function ScrollProgress() {
  return (
    <div className="scroll-progress" aria-hidden="true" role="presentation" />
  )
}
