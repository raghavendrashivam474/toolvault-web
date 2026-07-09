import {
  Wrench,
  Building2,
  GraduationCap,
  Layers,
  Users,
  BookOpen,
  Rocket,
} from 'lucide-react'
import { Container } from '@/components/layout'
import {
  Section,
  SectionHeader,
  SectionTag,
  SectionTitle,
  SectionSubtitle,
} from '@/components/sections'
import { StaggerContainer, StaggerItem } from '@/animations'
import { cn } from '@/utils/cn'

const capabilities = [
  {
    icon: Wrench,
    title: 'Engineering Infrastructure',
    description:
      'Professional-grade fabrication, electronics, computing, and testing equipment available to every member.',
    available: true,
  },
  {
    icon: Building2,
    title: 'Innovation Workspaces',
    description:
      'Purpose-built labs and collaborative zones designed to support focused engineering work at any scale.',
    available: true,
  },
  {
    icon: GraduationCap,
    title: 'Build Mentorship',
    description:
      'Structured access to engineering mentors across disciplines — from hardware design to system architecture.',
    available: true,
  },
  {
    icon: Layers,
    title: 'Rapid Prototyping',
    description:
      'End-to-end prototyping pipelines that take your concept from sketch to functional product.',
    available: true,
  },
  {
    icon: Users,
    title: 'Builder Community',
    description:
      'A curated network of engineers, designers, and founders collaborating across domains.',
    available: true,
  },
  {
    icon: BookOpen,
    title: 'Workshops and Training',
    description:
      'Regularly scheduled technical workshops, design sprints, and hands-on certification programs.',
    available: true,
  },
  {
    icon: Rocket,
    title: 'Startup Support',
    description:
      'Dedicated resources, office hours, and infrastructure credits for early-stage engineering ventures.',
    available: false,
  },
]

export function CapabilitiesSection() {
  return (
    <Section
      id="capabilities"
      spacing="lg"
      className="bg-surface-warm"
      aria-label="Capabilities"
    >
      <Container>
        <SectionHeader align="center">
          <SectionTag>Capabilities</SectionTag>
          <SectionTitle>Everything a serious builder needs.</SectionTitle>
          <SectionSubtitle>
            ToolVault supports the full lifecycle of an engineering project —
            from initial concept to a fully realized working prototype.
          </SectionSubtitle>
        </SectionHeader>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {capabilities.map(cap => (
            <StaggerItem key={cap.title}>
              <div
                className={cn(
                  'group flex h-full flex-col rounded-xl border bg-white p-6 transition-all duration-200',
                  cap.available
                    ? 'hover:border-primary-200 border-black/[0.06] hover:shadow-md'
                    : 'border-black/[0.06] opacity-70'
                )}
              >
                <div
                  className={cn(
                    'mb-4 flex h-10 w-10 items-center justify-center rounded-lg',
                    cap.available ? 'bg-primary-50' : 'bg-secondary-100'
                  )}
                >
                  <cap.icon
                    className={cn(
                      'h-5 w-5',
                      cap.available ? 'text-primary-600' : 'text-secondary-400'
                    )}
                  />
                </div>

                <div className="mb-2 flex items-start justify-between gap-2">
                  <h3 className="text-secondary-900 text-sm font-semibold">
                    {cap.title}
                  </h3>
                  {!cap.available && (
                    <span className="border-gold-200 bg-gold-50 text-gold-700 shrink-0 rounded-full border px-2 py-0.5 text-xs font-medium">
                      Soon
                    </span>
                  )}
                </div>

                <p className="text-secondary-500 text-sm leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
