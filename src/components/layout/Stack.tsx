import { cn } from '@/utils/cn'
import type { StackProps, SpacingSize } from './Layout.types'

const gapStyles: Record<SpacingSize, string> = {
  none: 'gap-0',
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
  '2xl': 'gap-12',
  '3xl': 'gap-16',
}

const alignStyles = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
}

const justifyStyles = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
}

export function Stack({
  gap = 'md',
  align = 'stretch',
  justify = 'start',
  direction = 'col',
  wrap = false,
  className,
  children,
  ...props
}: StackProps) {
  return (
    <div
      className={cn(
        'flex',
        direction === 'col' ? 'flex-col' : 'flex-row',
        gapStyles[gap],
        alignStyles[align],
        justifyStyles[justify],
        wrap && 'flex-wrap',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
