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
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50',
        'transition-all duration-300',
        isScrolled
          ? 'border-border-light border-b bg-white/95 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <nav
        className="max-w-container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#"
          className="text-secondary-900 text-lg font-bold tracking-tight"
          aria-label={SITE.name}
        >
          {SITE.name}
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150',
                'text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900',
                'focus-visible:ring-primary-500 focus-visible:ring-2 focus-visible:ring-offset-2'
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Button variant="primary" size="sm">
            {CTA_LINK.label}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-lg md:hidden',
            'text-secondary-600 hover:bg-secondary-50 transition-colors',
            'focus-visible:ring-primary-500 focus-visible:ring-2 focus-visible:ring-offset-2'
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0, 0, 0.2, 1] }}
            className="border-border-light overflow-hidden border-b bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={cn(
                    'rounded-lg px-3 py-2.5 text-sm font-medium',
                    'text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900 transition-colors'
                  )}
                >
                  {link.label}
                </a>
              ))}
              <div className="border-border-light mt-2 border-t pt-3">
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  onClick={closeMobileMenu}
                >
                  {CTA_LINK.label}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
