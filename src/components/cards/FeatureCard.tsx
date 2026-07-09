import { cn } from '@/utils/cn'
import type { FeatureCardProps } from './Card.types'

export function FeatureCard({
  icon,
  title,
  description,
  tag,
  className,
  ...props
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        'group border-border-light rounded-xl border bg-white p-6',
        'transition-all duration-200',
        'hover:border-primary-200 hover:shadow-hover hover:-translate-y-0.5',
        className
      )}
      {...props}
    >
      {tag && (
        <span className="bg-primary-50 text-primary-600 mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold">
          {tag}
        </span>
      )}

      {icon && (
        <div className="bg-primary-50 text-primary-600 group-hover:bg-primary-100 mb-4 flex h-11 w-11 items-center justify-center rounded-lg transition-colors duration-200">
          <span className="h-5 w-5">{icon}</span>
        </div>
      )}

      <h3 className="text-secondary-900 mb-2 text-base font-semibold">
        {title}
      </h3>
      <p className="text-secondary-500 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}
