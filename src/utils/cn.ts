import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges class names using clsx and tailwind-merge.
 * Resolves Tailwind CSS class conflicts intelligently.
 *
 * @example
 * cn('px-4 py-2', condition && 'bg-blue-500', 'px-8')
 * // => 'py-2 bg-blue-500 px-8'
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
