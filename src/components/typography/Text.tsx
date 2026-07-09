import { cn } from '@/utils/cn'
import type { TextProps, TextVariant, TextColor } from './Text.types'

const variantStyles: Record<TextVariant, string> = {
  display:
    'text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]',
  h1: 'text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]',
  h2: 'text-3xl md:text-4xl font-bold tracking-tight leading-snug',
  h3: 'text-2xl md:text-3xl font-semibold tracking-tight leading-snug',
  h4: 'text-xl md:text-2xl font-semibold leading-snug',
  subtitle: 'text-lg md:text-xl font-medium leading-normal',
  'body-lg': 'text-lg leading-relaxed',
  body: 'text-base leading-relaxed',
  'body-sm': 'text-sm leading-relaxed',
  caption: 'text-xs leading-normal',
  overline: 'text-xs font-semibold tracking-widest uppercase',
}

const colorStyles: Record<TextColor, string> = {
  primary: 'text-secondary-900',
  secondary: 'text-secondary-600',
  muted: 'text-secondary-400',
  accent: 'text-primary-600',
  inverse: 'text-white',
  inherit: 'text-inherit',
}

const variantElements: Record<TextVariant, keyof HTMLElementTagNameMap> = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  subtitle: 'p',
  'body-lg': 'p',
  body: 'p',
  'body-sm': 'p',
  caption: 'span',
  overline: 'span',
}

export function Text({
  variant = 'body',
  align,
  color = 'primary',
  balance = false,
  as,
  className,
  children,
  ...props
}: TextProps) {
  const Tag = (as ?? variantElements[variant]) as React.ElementType

  return (
    <Tag
      className={cn(
        variantStyles[variant],
        colorStyles[color],
        align && 'text-' + align,
        balance && 'text-balance',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
