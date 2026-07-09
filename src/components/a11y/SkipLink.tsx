import { cn } from '@/utils/cn'

/**
 * SkipLink — WCAG 2.1 requirement.
 * Hidden by default, appears on focus. Allows keyboard users to jump
 * past the navigation directly to the main content.
 */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className={cn(
        'sr-only',
        'focus:not-sr-only',
        'focus:fixed focus:top-4 focus:left-4 focus:z-[100]',
        'focus:bg-primary-600 focus:rounded-lg focus:px-4 focus:py-2',
        'focus:text-sm focus:font-semibold focus:text-white',
        'focus:shadow-lg focus:outline-none',
        'focus:ring-primary-500 focus:ring-2 focus:ring-offset-2'
      )}
    >
      Skip to main content
    </a>
  )
}
