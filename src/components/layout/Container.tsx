import { cn } from '@/utils/cn'
import type { ContainerProps } from './Layout.types'

const sizeStyles = {
  narrow: 'max-w-narrow',
  content: 'max-w-content',
  default: 'max-w-container',
  wide: 'max-w-screen-2xl',
  full: 'max-w-full',
}

export function Container({
  size = 'default',
  padded = true,
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full',
        sizeStyles[size],
        padded && 'px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
