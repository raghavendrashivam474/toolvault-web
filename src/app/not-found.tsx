import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/buttons'
import { Container, Stack } from '@/components/layout'

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <Container size="content">
        <Stack gap="lg" align="center" className="text-center">
          <span className="text-primary-600 text-xs font-semibold tracking-widest uppercase">
            404 — Page not found
          </span>

          <h1 className="text-secondary-900 text-4xl font-bold tracking-tight text-balance md:text-5xl">
            This page does not exist.
          </h1>

          <p className="text-secondary-500 max-w-md text-base leading-relaxed">
            The page you are looking for may have been moved, renamed, or is no
            longer available. Let us take you back home.
          </p>

          <Link href="/">
            <Button
              variant="primary"
              size="lg"
              leftIcon={<ArrowLeft className="h-4 w-4" />}
            >
              Back to Homepage
            </Button>
          </Link>
        </Stack>
      </Container>
    </main>
  )
}
