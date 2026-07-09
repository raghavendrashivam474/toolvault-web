/**
 * ToolVault Design Tokens — Colors (Sprint 5 refined palette)
 *
 * Warmer neutrals replace pure whites and pure blacks.
 * Dark sections use a hierarchy of graphite tones for visual variety.
 * Gold accent added for subtle warmth (used sparingly).
 */

export const colors = {
  primary: {
    50: '#f0f4ff',
    100: '#e0e9ff',
    200: '#c7d6fe',
    300: '#a5b8fc',
    400: '#8193f8',
    500: '#6270f1',
    600: '#4f54e5',
    700: '#3f42ca',
    800: '#3438a4',
    900: '#2f3482',
    950: '#1c1f4e',
  },
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  },
  accent: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
    950: '#083344',
  },

  // Sprint 5 — Warm neutral surfaces
  surface: {
    warm: '#fafaf9', // Warm White — primary light sections
    subtle: '#f7f7f5', // Surface — subtle contrast between whites
    light: '#f5f5f4', // Light Gray — softest neutral for detail sections
    elevated: '#ffffff', // Pure white — only for elevated card surfaces
  },

  // Sprint 5 — Dark tone hierarchy (each section a different room)
  graphite: {
    deep: '#0b0f1a', // Hero — dramatic intro
    default: '#111827', // Labs, CTA — workspace and close
    midnight: '#0f172a', // Vision — contemplative
    black: '#05070d', // Footer — grounded finality
  },

  // Sprint 5 — Gold accent (used sparingly)
  gold: {
    50: '#fdf9f0',
    100: '#faf0d9',
    200: '#f3dea8',
    300: '#e9c37a',
    400: '#dfa953',
    500: '#d4a574', // Primary gold — warm amber
    600: '#b8874d',
    700: '#916738',
    800: '#6b4b2a',
    900: '#4a341f',
  },

  border: {
    light: '#e7e5e4',
    default: '#d6d3d1',
    strong: '#a8a29e',
    focus: '#6270f1',
    darkGlass: 'rgba(255,255,255,0.04)',
    darkGlassStrong: 'rgba(255,255,255,0.08)',
  },

  text: {
    primary: '#0f172a',
    secondary: '#475569',
    tertiary: '#94a3b8',
    inverse: '#fafaf9',
    muted: '#64748b',
    accent: '#6270f1',
    gold: '#d4a574',
  },

  success: { light: '#f0fdf4', default: '#22c55e', dark: '#15803d' },
  warning: { light: '#fffbeb', default: '#f59e0b', dark: '#b45309' },
  error: { light: '#fef2f2', default: '#ef4444', dark: '#b91c1c' },
  info: { light: '#eff6ff', default: '#3b82f6', dark: '#1d4ed8' },
} as const

export type Colors = typeof colors
