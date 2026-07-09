import { cn } from '@/utils/cn'
import type {
  CardProps,
  CardHeaderProps,
  CardBodyProps,
  CardFooterProps,
  CardVariant,
  CardPadding,
} from './Card.types'

const variantStyles: Record<CardVariant, string> = {
  default: 'bg-white border border-border-light',
  outlined: 'bg-transparent border border-border',
  elevated: 'bg-white border border-border-light shadow-md',
  ghost: 'bg-secondary-50 border border-transparent',
}

const paddingStyles: Record<CardPadding, string> = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export function Card({
  variant = 'default',
  padding = 'md',
  hoverable = false,
  clickable = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl transition-all duration-200',
        variantStyles[variant],
        paddingStyles[padding],
        hoverable &&
          'hover:shadow-hover hover:border-border-strong hover:-translate-y-0.5',
        clickable && 'cursor-pointer',
        className
      )}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, children, ...props }: CardHeaderProps) {
  return (
    <div
      className={cn('mb-4 flex items-start justify-between', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardBody({ className, children, ...props }: CardBodyProps) {
  return (
    <div className={cn('flex flex-col gap-3', className)} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ className, children, ...props }: CardFooterProps) {
  return (
    <div
      className={cn(
        'border-border-light mt-6 flex items-center gap-3 border-t pt-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
