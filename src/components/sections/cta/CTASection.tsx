import { ArrowRight, Mail } from 'lucide-react'
import { Container, Stack } from '@/components/layout'
import { Section } from '@/components/sections'
import { Button } from '@/components/buttons'
import { FadeUp } from '@/animations'
import { SITE } from '@/constants'

export function CTASection() {
  const communityMailto = `mailto:${SITE.email}?subject=Join%20the%20ToolVault%20Community`
  const contactMailto = `mailto:${SITE.email}?subject=ToolVault%20Enquiry`

  return (
    <Section
      id="cta"
      spacing="xl"
      className="bg-graphite relative overflow-hidden"
      aria-label="Get involved"
    >
      <div
        className="texture-blueprint pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(98, 112, 241, 0.12) 0%, transparent 60%)',
        }}
      />

      <Container size="content" className="relative">
        <FadeUp>
          <Stack gap="xl" align="center" className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm">
              <span className="bg-gold-500 h-1.5 w-1.5 rounded-full" />
              <span className="text-xs font-semibold tracking-widest text-white/70 uppercase">
                Get Involved
              </span>
            </div>

            <h2 className="text-4xl leading-[1.1] font-bold tracking-tight text-balance text-white md:text-5xl lg:text-6xl">
              Ready to build something that matters?
            </h2>

            <p className="max-w-reading text-lg leading-relaxed text-balance text-white/60">
              ToolVault is in active development. Join our founding community of
              builders, investors, and partners shaping what comes next.
            </p>

            <Stack direction="row" gap="sm" wrap className="justify-center">
              <a
                href={communityMailto}
                aria-label="Join the ToolVault community by email"
              >
                <Button
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Join the Community
                </Button>
              </a>
              <a
                href={contactMailto}
                aria-label="Contact ToolVault by email"
                className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-6 text-base font-medium text-white transition-all duration-200 hover:border-white/25 hover:bg-white/[0.06]"
              >
                <Mail className="h-4 w-4" />
                Contact Us
              </a>
            </Stack>

            <div className="mx-auto max-w-lg border-t border-white/[0.08] pt-8">
              <blockquote>
                <p className="text-base leading-relaxed text-white/50 italic">
                  &ldquo;The tools of creation should be accessible to every
                  person with the courage to build. That is the founding
                  principle of ToolVault.&rdquo;
                </p>
                <footer className="text-gold-500 mt-3 text-sm font-medium">
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
