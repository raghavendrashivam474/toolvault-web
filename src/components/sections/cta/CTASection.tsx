import { ArrowRight, Mail } from 'lucide-react'
import { Container, Stack } from '@/components/layout'
import { Section, SectionTag } from '@/components/sections'
import { Button } from '@/components/buttons'
import { FadeUp } from '@/animations'

export function CTASection() {
  return (
    <Section id="cta" spacing="xl" background="white" aria-label="Get involved">
      <Container size="content">
        <FadeUp>
          <Stack gap="xl" align="center" className="text-center">
            <SectionTag>Get Involved</SectionTag>

            <h2 className="text-secondary-900 text-4xl leading-[1.1] font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
              Ready to build something that matters?
            </h2>

            <p className="text-secondary-500 max-w-xl text-lg leading-relaxed">
              ToolVault is in active development. Join our founding community of
              builders, investors, and partners shaping what comes next.
            </p>

            <Stack direction="row" gap="sm" wrap className="justify-center">
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Join the Community
              </Button>
              <Button
                variant="outline"
                size="lg"
                leftIcon={<Mail className="h-4 w-4" />}
              >
                Contact Us
              </Button>
            </Stack>

            <div className="border-border-light mx-auto max-w-lg border-t pt-8">
              <blockquote>
                <p className="text-secondary-400 text-base leading-relaxed italic">
                  &ldquo;The tools of creation should be accessible to every
                  person with the courage to build. That is the founding
                  principle of ToolVault.&rdquo;
                </p>
                <footer className="text-secondary-500 mt-3 text-sm font-medium">
                  — ToolVault Founding Team
                </footer>
              </blockquote>
            </div>
          </Stack>
        </FadeUp>
      </Container>
    </Section>
  )
}
