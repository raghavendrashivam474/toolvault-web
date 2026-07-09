'use client'

import { cn } from '@/utils/cn'
import type { ButtonProps, ButtonVariant, ButtonSize } from './Button.types'

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    'bg-primary-600 text-white border border-primary-600',
    'hover:bg-primary-700 hover:border-primary-700',
    'active:bg-primary-800',
    'focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
    'disabled:bg-primary-300 disabled:border-primary-300 disabled:cursor-not-allowed',
  ].join(' '),
  secondary: [
    'bg-secondary-100 text-secondary-900 border border-secondary-200',
    'hover:bg-secondary-200 hover:border-secondary-300',
    'active:bg-secondary-300',
    'focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ].join(' '),
  outline: [
    'bg-transparent text-primary-600 border border-primary-300',
    'hover:bg-primary-50 hover:border-primary-400',
    'active:bg-primary-100',
    'focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ].join(' '),
  ghost: [
    'bg-transparent text-secondary-700 border border-transparent',
    'hover:bg-secondary-100 hover:text-secondary-900',
    'active:bg-secondary-200',
    'focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ].join(' '),
  text: [
    'bg-transparent text-primary-600 border border-transparent underline-offset-4',
    'hover:underline hover:text-primary-700',
    'active:text-primary-800',
    'focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ].join(' '),
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm gap-1.5 rounded-md',
  md: 'h-10 px-4 text-sm gap-2 rounded-lg',
  lg: 'h-12 px-6 text-base gap-2 rounded-lg',
  xl: 'h-14 px-8 text-lg gap-2.5 rounded-xl',
}

const iconSizeStyles: Record<ButtonSize, string> = {
  sm: 'w-3.5 h-3.5',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
  xl: 'w-5 h-5',
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center',
        'font-medium',
        'transition-all duration-150',
        'select-none',
        'outline-none',
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && 'w-full',
        loading && 'cursor-wait opacity-80',
        className
      )}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading}
      {...props}
    >
      {loading && (
        <svg
          className={cn('animate-spin', iconSizeStyles[size])}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}

      {!loading && leftIcon && (
        <span
          className={cn('shrink-0', iconSizeStyles[size])}
          aria-hidden="true"
        >
          {leftIcon}
        </span>
      )}

      <span>{children}</span>

      {!loading && rightIcon && (
        <span
          className={cn('shrink-0', iconSizeStyles[size])}
          aria-hidden="true"
        >
          {rightIcon}
        </span>
      )}
    </button>
  )
}
