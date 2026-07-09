import type { HTMLAttributes } from 'react'

export type SpacingSize =
  'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'narrow' | 'content' | 'default' | 'wide' | 'full'
  padded?: boolean
}

export interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  spacing?: SpacingSize
  background?: 'primary' | 'secondary' | 'tertiary' | 'none'
  as?: 'section' | 'div' | 'article' | 'aside' | 'main'
}

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  gap?: SpacingSize
  align?: 'start' | 'center' | 'end' | 'stretch'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around'
  direction?: 'row' | 'col'
  wrap?: boolean
}

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 6 | 12
  gap?: SpacingSize
  smCols?: 1 | 2 | 3 | 4 | 6 | 12
  mdCols?: 1 | 2 | 3 | 4 | 6 | 12
  lgCols?: 1 | 2 | 3 | 4 | 6 | 12
}

export interface SpacerProps {
  size?: SpacingSize
  axis?: 'vertical' | 'horizontal'
}
