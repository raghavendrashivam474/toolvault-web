import { Globe, MessageCircle, Briefcase, Mail } from 'lucide-react'
import { Container, Stack } from '@/components/layout'
import { SITE } from '@/constants'
import { cn } from '@/utils/cn'

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Vision', href: '#vision' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Careers', href: '#' },
  ],
  Resources: [
    { label: 'Labs', href: '#labs' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Workshops', href: '#' },
    { label: 'Mentorship', href: '#' },
  ],
  Contact: [
    { label: 'Get Involved', href: '#cta' },
    { label: 'Partnerships', href: '#' },
    { label: 'Investors', href: '#' },
    { label: SITE.email, href: 'mailto:' + SITE.email },
  ],
}

const socialLinks = [
  { Icon: Globe, label: 'Website', href: '#' },
  { Icon: MessageCircle, label: 'Community', href: '#' },
  { Icon: Briefcase, label: 'LinkedIn', href: '#' },
  { Icon: Mail, label: 'Email', href: 'mailto:' + SITE.email },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="border-secondary-800 bg-secondary-950 border-t"
      aria-label="Footer"
    >
      <Container>
        {/* Top section */}
        <div className="grid gap-12 py-16 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Stack gap="md">
              <a
                href="#"
                className="text-xl font-bold tracking-tight text-white"
              >
                {SITE.name}
              </a>
              <p className="text-secondary-400 max-w-xs text-sm leading-relaxed">
                Engineering infrastructure for innovators. Professional tools,
                collaborative workspaces, and expert guidance — under one roof.
              </p>

              <Stack direction="row" gap="xs">
                {socialLinks.map(social => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={cn(
                      'flex h-9 w-9 items-center justify-center rounded-lg',
                      'text-secondary-500 transition-colors duration-150',
                      'hover:bg-secondary-800 hover:text-secondary-200'
                    )}
                  >
                    <social.Icon className="h-4 w-4" />
                  </a>
                ))}
              </Stack>
            </Stack>
          </div>

          {/* Navigation columns */}
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-3">
            {Object.entries(footerLinks).map(([category, links]) => (
              <Stack key={category} gap="sm">
                <h3 className="text-secondary-400 text-xs font-semibold tracking-widest uppercase">
                  {category}
                </h3>
                <Stack gap="xs">
                  {links.map(link => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-secondary-500 hover:text-secondary-200 text-sm transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  ))}
                </Stack>
              </Stack>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-secondary-800 flex flex-col items-center justify-between gap-4 border-t py-6 sm:flex-row">
          <p className="text-secondary-600 text-xs">
            &copy; {currentYear} {SITE.name}. All rights reserved.
          </p>
          <p className="text-secondary-700 text-xs">v0.3.0 — Sprint 3</p>
        </div>

        {/* Founder note */}
        <div className="border-secondary-800 border-t py-6 text-center">
          <p className="text-secondary-700 text-xs italic">
            Built with precision. Designed for builders. Committed to the long
            term. — ToolVault Founding Team
          </p>
        </div>
      </Container>
    </footer>
  )
}
