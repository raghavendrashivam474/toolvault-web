import type { Variants } from 'framer-motion'

/**
 * ToolVault Motion Variants
 *
 * All variants use a single canonical easing curve to feel cohesive.
 * Durations are intentionally short (250-400ms) for a snappy, premium feel.
 * Y-offsets are subtle (16px) to avoid overly dramatic scroll reveals.
 */

// Canonical easing — used across every animation for consistency.
const easeOut = [0, 0, 0.2, 1] as const
const durationFast = 0.25
const durationNormal = 0.35
const offset = 16

// ── Fade Variants ────────────────────────────────────────────────

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: durationNormal, ease: easeOut },
  },
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: offset },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durationNormal, ease: easeOut },
  },
}

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -offset },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durationNormal, ease: easeOut },
  },
}

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: offset * 1.5 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: durationNormal, ease: easeOut },
  },
}

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -offset * 1.5 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: durationNormal, ease: easeOut },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: durationFast, ease: easeOut },
  },
}

// ── Stagger Variants ─────────────────────────────────────────────

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: offset * 0.75 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durationFast, ease: easeOut },
  },
}

// ── Hover Variants ───────────────────────────────────────────────

export const hoverLift = {
  rest: { y: 0, transition: { duration: 0.2, ease: easeOut } },
  hover: { y: -3, transition: { duration: 0.2, ease: easeOut } },
}

export const hoverScale = {
  rest: { scale: 1, transition: { duration: 0.2, ease: easeOut } },
  hover: { scale: 1.02, transition: { duration: 0.2, ease: easeOut } },
}
