'use client'

import { useEffect } from 'react'
import { RefreshCw } from 'lucide-react'
import { Button } from '@/components/buttons'
import { Container, Stack } from '@/components/layout'

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // In production, forward to an error reporting service
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.error('Application error:', error)
    }
  }, [error])

  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <Container size="content">
        <Stack gap="lg" align="center" className="text-center">
          <span className="text-error-default text-xs font-semibold tracking-widest uppercase">
            Something went wrong
          </span>

          <h1 className="text-secondary-900 text-4xl font-bold tracking-tight text-balance md:text-5xl">
            We hit an unexpected error.
          </h1>

          <p className="text-secondary-500 max-w-md text-base leading-relaxed">
            An unexpected error occurred while rendering this page. You can try
            again — most transient issues resolve on retry.
          </p>

          <Button
            variant="primary"
            size="lg"
            leftIcon={<RefreshCw className="h-4 w-4" />}
            onClick={reset}
          >
            Try Again
          </Button>
        </Stack>
      </Container>
    </main>
  )
}
