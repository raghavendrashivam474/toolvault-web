import { cn } from '@/utils/cn'
import type {
  SectionProps,
  SectionHeaderProps,
  SectionTitleProps,
  SectionSubtitleProps,
  SectionDescriptionProps,
  SectionTagProps,
} from './Section.types'

const sectionSpacing = {
  none: '',
  sm: 'py-12',
  md: 'py-16 md:py-20',
  lg: 'py-20 md:py-28',
  xl: 'py-28 md:py-36',
}

const sectionBackground = {
  white: 'bg-white',
  light: 'bg-secondary-50',
  dark: 'bg-secondary-900',
  none: '',
}

export function Section({
  spacing = 'lg',
  background = 'none',
  as: Tag = 'section',
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Tag
      className={cn(
        sectionSpacing[spacing],
        sectionBackground[background],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}

export function SectionHeader({
  align = 'center',
  className,
  children,
  ...props
}: SectionHeaderProps) {
  const alignStyles = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  }

  return (
    <div
      className={cn('mb-12 flex flex-col gap-4', alignStyles[align], className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function SectionTag({ className, children, ...props }: SectionTagProps) {
  return (
    <span
      className={cn(
        'border-primary-200 bg-primary-50 inline-block rounded-full border',
        'text-primary-600 px-3 py-1 text-xs font-semibold tracking-widest uppercase',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export function SectionTitle({
  as: Tag = 'h2',
  className,
  children,
  ...props
}: SectionTitleProps) {
  return (
    <Tag
      className={cn(
        'text-secondary-900 text-3xl font-bold tracking-tight md:text-4xl',
        'text-balance',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}

export function SectionSubtitle({
  className,
  children,
  ...props
}: SectionSubtitleProps) {
  return (
    <p
      className={cn(
        'text-secondary-500 max-w-2xl text-lg leading-relaxed',
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}

export function SectionDescription({
  className,
  children,
  ...props
}: SectionDescriptionProps) {
  return (
    <p
      className={cn(
        'text-secondary-500 max-w-3xl text-base leading-relaxed',
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}

export function SectionDivider({ className }: { className?: string }) {
  return (
    <hr
      aria-hidden="true"
      className={cn('border-border-light border-t', className)}
    />
  )
}
