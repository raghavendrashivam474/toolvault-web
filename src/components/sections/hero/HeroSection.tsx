'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/buttons'
import { Container } from '@/components/layout'
import { fadeUp, staggerContainer, staggerItem } from '@/animations'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="bg-secondary-950 relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 40%, rgba(98,112,241,0.12) 0%, transparent 70%)',
        }}
      />

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-8 py-32 text-center"
        >
          {/* Overline tag */}
          <motion.div variants={staggerItem}>
            <span className="border-primary-500/30 bg-primary-500/10 text-primary-400 inline-block rounded-full border px-4 py-1.5 text-xs font-semibold tracking-widest uppercase">
              Engineering Infrastructure
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={staggerItem}
            className="max-w-4xl text-5xl leading-[1.05] font-bold tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            Built for the Next Generation of{' '}
            <span className="text-primary-400">Innovators</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={staggerItem}
            className="text-secondary-400 max-w-2xl text-lg leading-relaxed md:text-xl"
          >
            ToolVault is an engineering infrastructure platform providing
            professional equipment, collaborative workspaces, expert mentorship,
            and end-to-end prototyping support — everything you need to build
            what matters.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col items-center gap-3 sm:flex-row"
          >
            <Button
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              Explore ToolVault
            </Button>
            <Button variant="ghost" size="lg">
              <span className="text-secondary-300 hover:text-white">
                Learn More
              </span>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={staggerItem}
            className="text-secondary-500 flex flex-wrap items-center justify-center gap-6 text-xs"
          >
            {[
              'Professional Equipment',
              'Expert Mentorship',
              'Collaborative Labs',
              'End-to-End Prototyping',
            ].map(item => (
              <span key={item} className="flex items-center gap-2">
                <span className="bg-primary-500 h-1 w-1 rounded-full" />
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-secondary-600 flex flex-col items-center gap-1"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
