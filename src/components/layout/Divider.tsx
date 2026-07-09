import { cn } from '@/utils/cn'

interface DividerProps {
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

export function Divider({
  orientation = 'horizontal',
  className,
}: DividerProps) {
  return (
    <hr
      aria-hidden="true"
      className={cn(
        'border-border-light',
        orientation === 'horizontal' ? 'w-full border-t' : 'h-full border-l',
        className
      )}
    />
  )
}
