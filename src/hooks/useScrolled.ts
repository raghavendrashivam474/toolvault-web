'use client'

import { useEffect, useState } from 'react'

/**
 * Tracks vertical scroll position.
 * Returns true when scrolled past the given threshold.
 *
 * NOTE: Always returns false on first render (SSR + hydration) to guarantee
 * the server and client output the same HTML. The real value is applied
 * after mount, avoiding React hydration mismatch warnings.
 *
 * @example
 * const isScrolled = useScrolled(50)
 */
export function useScrolled(threshold: number = 10): boolean {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const check = () => {
      setIsScrolled(window.scrollY > threshold)
    }

    // Apply real value after mount to sync with the DOM
    check()

    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [threshold])

  return isScrolled
}
