/**
 * ToolVault Design Tokens — Animation
 */

export const animation = {
  duration: {
    instant: 0,
    fast: 0.15,
    normal: 0.25,
    slow: 0.4,
    slower: 0.6,
    slowest: 0.8,
  },
  easing: {
    linear: [0, 0, 1, 1],
    easeIn: [0.4, 0, 1, 1],
    easeOut: [0, 0, 0.2, 1],
    easeInOut: [0.4, 0, 0.2, 1],
    spring: { type: 'spring', stiffness: 300, damping: 30 },
    gentle: { type: 'spring', stiffness: 150, damping: 20 },
  },
  offset: {
    sm: 12,
    md: 24,
    lg: 40,
  },
} as const

export type Animation = typeof animation