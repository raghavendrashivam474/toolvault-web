import { cn } from '@/utils/cn'
import type { GridProps, SpacingSize } from './Layout.types'

const gapStyles: Record<SpacingSize, string> = {
  none: 'gap-0',
  xs: 'gap-2',
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
  xl: 'gap-10',
  '2xl': 'gap-12',
  '3xl': 'gap-16',
}

const colStyles: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  6: 'grid-cols-6',
  12: 'grid-cols-12',
}

const smColStyles: Record<number, string> = {
  1: 'sm:grid-cols-1',
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-3',
  4: 'sm:grid-cols-4',
  6: 'sm:grid-cols-6',
  12: 'sm:grid-cols-12',
}

const mdColStyles: Record<number, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  6: 'md:grid-cols-6',
  12: 'md:grid-cols-12',
}

const lgColStyles: Record<number, string> = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  6: 'lg:grid-cols-6',
  12: 'lg:grid-cols-12',
}

export function Grid({
  cols = 1,
  gap = 'md',
  smCols,
  mdCols,
  lgCols,
  className,
  children,
  ...props
}: GridProps) {
  return (
    <div
      className={cn(
        'grid',
        colStyles[cols],
        gapStyles[gap],
        smCols && smColStyles[smCols],
        mdCols && mdColStyles[mdCols],
        lgCols && lgColStyles[lgCols],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
