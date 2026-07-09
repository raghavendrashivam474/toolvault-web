'use client'

import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/utils/cn'
import {
  fadeIn,
  fadeUp,
  fadeDown,
  slideLeft,
  slideRight,
  scaleIn,
  staggerContainer,
  staggerItem,
} from './variants'

/**
 * Motion Components
 *
 * All viewport-triggered components:
 * - Trigger once (no re-animation on scroll up)
 * - Use a smaller margin (-80px) so reveals feel timely
 * - Respect prefers-reduced-motion automatically
 *
 * When reduced motion is preferred, elements render at their final state
 * with no transition, preserving layout and content.
 */

const viewportConfig = { once: true, margin: '-80px' }

function useMotionOrStatic(variant: typeof fadeUp) {
  const prefersReducedMotion = useReducedMotion()
  if (prefersReducedMotion) {
    return {
      hidden: { opacity: 1 },
      visible: { opacity: 1, transition: { duration: 0 } },
    }
  }
  return variant
}

// ── Individual Motion Components ─────────────────────────────────

export function FadeIn({
  className,
  children,
  ...props
}: HTMLMotionProps<'div'>) {
  const variants = useMotionOrStatic(fadeIn)
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function FadeUp({
  className,
  children,
  ...props
}: HTMLMotionProps<'div'>) {
  const variants = useMotionOrStatic(fadeUp)
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function FadeDown({
  className,
  children,
  ...props
}: HTMLMotionProps<'div'>) {
  const variants = useMotionOrStatic(fadeDown)
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function SlideLeft({
  className,
  children,
  ...props
}: HTMLMotionProps<'div'>) {
  const variants = useMotionOrStatic(slideLeft)
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function SlideRight({
  className,
  children,
  ...props
}: HTMLMotionProps<'div'>) {
  const variants = useMotionOrStatic(slideRight)
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function ScaleIn({
  className,
  children,
  ...props
}: HTMLMotionProps<'div'>) {
  const variants = useMotionOrStatic(scaleIn)
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({
  className,
  children,
  ...props
}: HTMLMotionProps<'div'>) {
  const variants = useMotionOrStatic(staggerContainer)
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  className,
  children,
  ...props
}: HTMLMotionProps<'div'>) {
  const variants = useMotionOrStatic(staggerItem)
  return (
    <motion.div variants={variants} className={cn(className)} {...props}>
      {children}
    </motion.div>
  )
}
