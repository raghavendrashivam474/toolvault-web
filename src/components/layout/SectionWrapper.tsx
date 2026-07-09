import { cn } from '@/utils/cn'
import type { SectionWrapperProps, SpacingSize } from './Layout.types'

const spacingStyles: Record<SpacingSize, string> = {
  none: 'py-0',
  xs: 'py-4',
  sm: 'py-8',
  md: 'py-12 md:py-16',
  lg: 'py-16 md:py-24',
  xl: 'py-20 md:py-32',
  '2xl': 'py-24 md:py-40',
  '3xl': 'py-32 md:py-48',
}

const backgroundStyles = {
  primary: 'bg-white',
  secondary: 'bg-secondary-50',
  tertiary: 'bg-secondary-100',
  none: '',
}

export function SectionWrapper({
  spacing = 'lg',
  background = 'none',
  as: Tag = 'section',
  className,
  children,
  ...props
}: SectionWrapperProps) {
  return (
    <Tag
      className={cn(
        spacingStyles[spacing],
        backgroundStyles[background],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
