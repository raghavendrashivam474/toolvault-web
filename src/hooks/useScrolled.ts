'use client'

import { useEffect, useState } from 'react'

/**
 * Tracks vertical scroll position.
 * Returns true when scrolled past the given threshold.
 *
 * @example
 * const isScrolled = useScrolled(50)
 */
export function useScrolled(threshold: number = 10): boolean {
  const [isScrolled, setIsScrolled] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    return window.scrollY > threshold
  })

  useEffect(() => {
    const handler = () => {
      setIsScrolled(window.scrollY > threshold)
    }

    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [threshold])

  return isScrolled
}
