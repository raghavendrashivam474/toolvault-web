import type { HTMLAttributes, ReactNode } from 'react'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  background?: 'white' | 'light' | 'dark' | 'none'
  as?: 'section' | 'div' | 'article'
}

export interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  align?: 'left' | 'center' | 'right'
  children: ReactNode
}

export interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3'
}

export interface SectionSubtitleProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
}

export interface SectionDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
}

export interface SectionTagProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
}
