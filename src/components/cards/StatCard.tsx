import { cn } from '@/utils/cn'
import type { StatCardProps } from './Card.types'

export function StatCard({
  value,
  label,
  description,
  icon,
  className,
  ...props
}: StatCardProps) {
  return (
    <div
      className={cn(
        'border-border-light rounded-xl border bg-white p-6',
        'hover:shadow-hover transition-all duration-200',
        className
      )}
      {...props}
    >
      {icon && (
        <div className="bg-accent-50 text-accent-600 mb-4 flex h-10 w-10 items-center justify-center rounded-lg">
          <span className="h-5 w-5">{icon}</span>
        </div>
      )}

      <div className="text-secondary-900 mb-1 text-3xl font-bold tracking-tight">
        {value}
      </div>
      <div className="text-secondary-600 text-sm font-medium">{label}</div>

      {description && (
        <div className="text-secondary-400 mt-1 text-xs">{description}</div>
      )}
    </div>
  )
}
