'use client'

import type { ReactNode } from 'react'
import { MotionProvider } from './MotionProvider'

interface AppProvidersProps {
  children: ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  return <MotionProvider>{children}</MotionProvider>
}
