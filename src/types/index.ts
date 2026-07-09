export type Nullable<T> = T | null
export type Optional<T> = T | undefined
export type WithClassName = { className?: string }
export type WithChildren = { children: React.ReactNode }
export type WithId = { id: string }

export type ColorScheme = 'light' | 'dark' | 'system'
export type BreakpointKey = 'sm' | 'md' | 'lg' | 'xl' | '2xl'
export type SpacingScale =
  0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32

export interface NavItem {
  label: string
  href: string
  external?: boolean
  children?: NavItem[]
}

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type Align = 'left' | 'center' | 'right'
export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
