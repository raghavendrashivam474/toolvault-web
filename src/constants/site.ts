export const SITE = {
  name: 'ToolVault',
  description:
    'Engineering infrastructure for innovators. Access professional tools, collaborative workspaces, and expert guidance.',
  url: 'https://toolvault.io',
  email: 'hello@toolvault.io',
} as const

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

export const TRANSITION = {
  fast: { duration: 0.15, ease: [0, 0, 0.2, 1] as number[] },
  normal: { duration: 0.25, ease: [0, 0, 0.2, 1] as number[] },
  slow: { duration: 0.4, ease: [0, 0, 0.2, 1] as number[] },
} as const

export const Z_INDEX = {
  base: 0,
  raised: 10,
  dropdown: 100,
  sticky: 200,
  overlay: 300,
  modal: 400,
  toast: 500,
} as const
