'use client'

import { motion, type HTMLMotionProps } from 'framer-motion'
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

const viewportConfig = { once: true, margin: '-50px' }

export function FadeIn({
  className,
  children,
  ...props
}: HTMLMotionProps<'div'>) {
  return (
    <motion.div
      variants={fadeIn}
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
  return (
    <motion.div
      variants={fadeUp}
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
  return (
    <motion.div
      variants={fadeDown}
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
  return (
    <motion.div
      variants={slideLeft}
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
  return (
    <motion.div
      variants={slideRight}
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
  return (
    <motion.div
      variants={scaleIn}
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
  return (
    <motion.div
      variants={staggerContainer}
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
  return (
    <motion.div variants={staggerItem} className={cn(className)} {...props}>
      {children}
    </motion.div>
  )
}
