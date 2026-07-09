'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/utils/cn'
import { useScrolled } from '@/hooks'
import { NAV_LINKS, CTA_LINK, SITE } from '@/constants'
import { Button } from '@/components/buttons'

export function Navbar() {
  const isScrolled = useScrolled(50)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev)

  /**
   * Handle mobile nav link tap.
   * Manually scroll to the target section, then close the menu.
   * Doing this in code (instead of relying on native anchor + onClick)
   * ensures the navigation completes before the menu exit animation
   * unmounts the link element on touch devices.
   */
  const handleMobileLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)

    // Wait for menu close animation to start, then scroll
    setTimeout(() => {
      if (href.startsWith('#')) {
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      } else {
        window.location.href = href
      }
    }, 50)
  }

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50',
        'transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
        isScrolled
          ? 'bg-surface-warm/80 border-b border-black/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.04)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <nav
        className="max-w-container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#hero"
          className={cn(
            'text-base font-bold tracking-tight transition-colors duration-300',
            isScrolled ? 'text-secondary-900' : 'text-white'
          )}
          aria-label={`${SITE.name} — back to top`}
        >
          {SITE.name}
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200',
                'focus-visible:outline-2 focus-visible:outline-offset-2',
                isScrolled
                  ? 'text-secondary-600 hover:text-secondary-900 focus-visible:outline-primary-500 hover:bg-black/[0.04]'
                  : 'text-white/70 hover:bg-white/[0.06] hover:text-white focus-visible:outline-white'
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex">
          <a
            href={CTA_LINK.href}
            className={cn(
              'inline-flex h-9 items-center gap-2 rounded-lg px-4 text-sm font-medium transition-all duration-200',
              'focus-visible:outline-2 focus-visible:outline-offset-2',
              isScrolled
                ? 'bg-secondary-900 hover:bg-secondary-800 focus-visible:outline-primary-500 text-white'
                : 'bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/[0.15] hover:ring-white/30 focus-visible:outline-white'
            )}
          >
            {CTA_LINK.label}
          </a>
        </div>

        <button
          type="button"
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-lg transition-colors md:hidden',
            'focus-visible:outline-2 focus-visible:outline-offset-2',
            isScrolled
              ? 'text-secondary-600 focus-visible:outline-primary-500 hover:bg-black/[0.04]'
              : 'text-white/80 hover:bg-white/[0.06] focus-visible:outline-white'
          )}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              'overflow-hidden border-b md:hidden',
              isScrolled
                ? 'bg-surface-warm/95 border-black/[0.06] backdrop-blur-xl'
                : 'bg-graphite-deep/95 border-white/10 backdrop-blur-xl'
            )}
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => handleMobileLinkClick(e, link.href)}
                  className={cn(
                    'rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                    isScrolled
                      ? 'text-secondary-600 hover:text-secondary-900 hover:bg-black/[0.04]'
                      : 'text-white/70 hover:bg-white/[0.06] hover:text-white'
                  )}
                >
                  {link.label}
                </a>
              ))}
              <div
                className={cn(
                  'mt-2 border-t pt-3',
                  isScrolled ? 'border-black/[0.06]' : 'border-white/10'
                )}
              >
                <a
                  href={CTA_LINK.href}
                  onClick={e => handleMobileLinkClick(e, CTA_LINK.href)}
                  className="block"
                >
                  <Button variant="primary" size="md" fullWidth>
                    {CTA_LINK.label}
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
