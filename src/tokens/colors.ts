/**
 * ToolVault Design Tokens — Colors
 *
 * All color values are defined here.
 * No component should hardcode a color value.
 * Reference these tokens via Tailwind CSS custom properties.
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
  background: {
    primary: '#ffffff',
    secondary: '#f8fafc',
    tertiary: '#f1f5f9',
    inverse: '#0f172a',
  },
  surface: {
    primary: '#ffffff',
    secondary: '#f8fafc',
    elevated: '#ffffff',
    overlay: 'rgba(15, 23, 42, 0.6)',
  },
  border: {
    light: '#e2e8f0',
    default: '#cbd5e1',
    strong: '#94a3b8',
    focus: '#6270f1',
  },
  text: {
    primary: '#0f172a',
    secondary: '#475569',
    tertiary: '#94a3b8',
    inverse: '#ffffff',
    muted: '#64748b',
    accent: '#6270f1',
  },
  success: {
    light: '#f0fdf4',
    default: '#22c55e',
    dark: '#15803d',
  },
  warning: {
    light: '#fffbeb',
    default: '#f59e0b',
    dark: '#b45309',
  },
  error: {
    light: '#fef2f2',
    default: '#ef4444',
    dark: '#b91c1c',
  },
  info: {
    light: '#eff6ff',
    default: '#3b82f6',
    dark: '#1d4ed8',
  },
} as const

export type Colors = typeof colors
