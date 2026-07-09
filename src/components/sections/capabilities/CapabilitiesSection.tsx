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
      background="light"
      aria-label="Capabilities"
    >
      <Container>
        <SectionHeader align="center">
          <SectionTag>Capabilities</SectionTag>
          <SectionTitle>Everything you need. Nothing you don't.</SectionTitle>
          <SectionSubtitle>
            ToolVault is built around the complete lifecycle of an engineering
            project — from the first spark of an idea to a fully realized
            prototype.
          </SectionSubtitle>
        </SectionHeader>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {capabilities.map(cap => (
            <StaggerItem key={cap.title}>
              <div
                className={cn(
                  'group flex h-full flex-col rounded-xl border bg-white p-6',
                  'transition-all duration-200',
                  cap.available
                    ? 'border-border-light hover:border-primary-200 hover:shadow-md'
                    : 'border-border-light opacity-70'
                )}
              >
                <div
                  className={cn(
                    'mb-4 flex h-10 w-10 items-center justify-center rounded-lg',
                    cap.available ? 'bg-primary-50' : 'bg-secondary-50'
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
                    <span className="shrink-0 rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700">
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
