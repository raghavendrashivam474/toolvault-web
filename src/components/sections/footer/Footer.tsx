import { Mail } from 'lucide-react'
import { Container, Stack } from '@/components/layout'
import { SITE } from '@/constants'
import { cn } from '@/utils/cn'

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Explore: [
    { label: 'About', href: '#about' },
    { label: 'Labs', href: '#labs' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Vision', href: '#vision' },
    { label: 'Roadmap', href: '#roadmap' },
  ],
  Contact: [
    { label: 'Get Involved', href: '#cta' },
    {
      label: SITE.email,
      href: `mailto:${SITE.email}?subject=ToolVault%20Enquiry`,
    },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="bg-graphite-black border-t border-white/[0.06]"
      aria-label="Footer"
    >
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Stack gap="md">
              <a
                href="#hero"
                className="text-xl font-bold tracking-tight text-white"
                aria-label={`${SITE.name} — back to top`}
              >
                {SITE.name}
              </a>
              <p className="max-w-xs text-sm leading-relaxed text-white/50">
                Engineering infrastructure for innovators. Professional tools,
                collaborative workspaces, and expert guidance — under one roof.
              </p>

              <a
                href={`mailto:${SITE.email}`}
                aria-label="Email ToolVault"
                className={cn(
                  'inline-flex h-9 w-9 items-center justify-center rounded-lg',
                  'text-white/40 transition-colors duration-200',
                  'hover:bg-white/[0.05] hover:text-white/80'
                )}
              >
                <Mail className="h-4 w-4" />
              </a>
            </Stack>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-3">
            {Object.entries(footerLinks).map(([category, links]) => (
              <Stack key={category} gap="sm">
                <h3 className="text-xs font-semibold tracking-widest text-white/40 uppercase">
                  {category}
                </h3>
                <Stack gap="xs">
                  {links.map(link => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </Stack>
              </Stack>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] py-6 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {currentYear} {SITE.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/30">v1.0.0</p>
        </div>

        <div className="border-t border-white/[0.06] py-6 text-center">
          <p className="text-xs text-white/30 italic">
            Built with precision. Designed for builders. Committed to the long
            term. — ToolVault Founding Team
          </p>
        </div>
      </Container>
    </footer>
  )
}
