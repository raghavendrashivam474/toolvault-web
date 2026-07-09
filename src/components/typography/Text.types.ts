import type { HTMLAttributes } from 'react'

export type TextVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'subtitle'
  | 'body-lg'
  | 'body'
  | 'body-sm'
  | 'caption'
  | 'overline'

export type TextAlign = 'left' | 'center' | 'right'

export type TextColor =
  'primary' | 'secondary' | 'muted' | 'accent' | 'inverse' | 'inherit'

export interface TextProps extends HTMLAttributes<HTMLElement> {
  variant?: TextVariant
  align?: TextAlign
  color?: TextColor
  balance?: boolean
  as?: keyof HTMLElementTagNameMap
}
