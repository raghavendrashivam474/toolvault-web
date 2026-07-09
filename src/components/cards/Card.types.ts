import type { HTMLAttributes, ReactNode } from 'react'

export type CardVariant = 'default' | 'outlined' | 'elevated' | 'ghost'
export type CardPadding = 'none' | 'sm' | 'md' | 'lg'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
  padding?: CardPadding
  hoverable?: boolean
  clickable?: boolean
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export interface FeatureCardProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode
  title: string
  description: string
  tag?: string
}

export interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
  value: string
  label: string
  description?: string
  icon?: ReactNode
}
