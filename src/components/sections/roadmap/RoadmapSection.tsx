import { CheckCircle2, Circle, Clock } from 'lucide-react'
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

type PhaseStatus = 'complete' | 'active' | 'upcoming'

interface RoadmapPhase {
  phase: string
  title: string
  status: PhaseStatus
  period: string
  description: string
  milestones: string[]
}

const phases: RoadmapPhase[] = [
  {
    phase: '01',
    title: 'Foundation',
    status: 'active',
    period: '2024 — Current',
    description:
      'Concept development, market validation, technical architecture, team formation, and investor engagement.',
    milestones: [
      'Concept finalized',
      'Market research completed',
      'Technical blueprint drafted',
      'Website launched',
      'Founding team assembled',
    ],
  },
  {
    phase: '02',
    title: 'Prototype Center',
    status: 'upcoming',
    period: '2025',
    description:
      'Launch the first ToolVault location with core labs, founding member cohort, and essential equipment.',
    milestones: [
      'Location secured',
      'Core equipment installed',
      'Founding members onboarded',
      'Pilot programs launched',
      'Initial mentors engaged',
    ],
  },
  {
    phase: '03',
    title: 'Validation',
    status: 'upcoming',
    period: '2026',
    description:
      'Measure outcomes, collect data, refine operations, and establish proof of model.',
    milestones: [
      'Member outcome data collected',
      'Operations manual v1 complete',
      'Revenue model validated',
      'Partnerships established',
      'Series A preparation',
    ],
  },
  {
    phase: '04',
    title: 'Pilot Expansion',
    status: 'upcoming',
    period: '2027',
    description:
      'Open second and third locations based on validated blueprint and geographic demand signals.',
    milestones: [
      'Second location secured',
      'Franchise model defined',
      'Regional partnerships signed',
      'Standardized onboarding deployed',
      'Network effects beginning',
    ],
  },
  {
    phase: '05',
    title: 'National Network',
    status: 'upcoming',
    period: '2028+',
    description:
      'Scale ToolVault into a national engineering infrastructure network reaching every major innovation hub.',
    milestones: [
      '10+ locations operational',
      'National brand established',
      'Government partnerships',
      'University integrations',
      'Ecosystem fully self-sustaining',
    ],
  },
]

const statusConfig = {
  complete: {
    Icon: CheckCircle2,
    color: 'text-green-700',
    bg: 'bg-green-50',
    border: 'border-green-200',
    label: 'Complete',
  },
  active: {
    Icon: Clock,
    color: 'text-primary-700',
    bg: 'bg-primary-50',
    border: 'border-primary-200',
    label: 'Active',
  },
  upcoming: {
    Icon: Circle,
    color: 'text-secondary-500',
    bg: 'bg-secondary-100',
    border: 'border-black/[0.06]',
    label: 'Upcoming',
  },
}

export function RoadmapSection() {
  return (
    <Section
      id="roadmap"
      spacing="lg"
      className="bg-surface-warm"
      aria-label="Roadmap"
    >
      <Container>
        <SectionHeader align="center">
          <SectionTag>Roadmap</SectionTag>
          <SectionTitle>A clear path to a larger vision</SectionTitle>
          <SectionSubtitle>
            ToolVault is being built with precision and patience. Each phase
            builds on the last — creating a foundation designed to last decades.
          </SectionSubtitle>
        </SectionHeader>

        <StaggerContainer className="flex flex-col gap-4">
          {phases.map(phase => {
            const config = statusConfig[phase.status]
            const StatusIcon = config.Icon

            return (
              <StaggerItem key={phase.phase}>
                <div
                  className={cn(
                    'rounded-xl border bg-white p-6 transition-all duration-200',
                    phase.status === 'active'
                      ? 'border-primary-200 ring-primary-100 shadow-md ring-1'
                      : 'border-black/[0.06] hover:border-black/[0.10] hover:shadow-sm'
                  )}
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                    <div className="flex shrink-0 items-center gap-4 lg:w-20 lg:flex-col lg:items-center lg:gap-2">
                      <div
                        className={cn(
                          'flex h-12 w-12 items-center justify-center rounded-full border-2 text-lg font-bold',
                          phase.status === 'active'
                            ? 'border-primary-500 bg-primary-50 text-primary-700'
                            : 'bg-secondary-50 text-secondary-400 border-black/[0.08]'
                        )}
                      >
                        {phase.phase}
                      </div>
                      <div
                        className={cn(
                          'flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium',
                          config.bg,
                          config.border,
                          config.color
                        )}
                      >
                        <StatusIcon className="h-3 w-3" />
                        <span>{config.label}</span>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="mb-1 flex flex-wrap items-center gap-3">
                        <h3 className="text-secondary-900 text-lg font-semibold">
                          {phase.title}
                        </h3>
                        <span className="text-secondary-400 text-sm">
                          {phase.period}
                        </span>
                      </div>
                      <p className="text-secondary-500 mb-4 text-sm leading-relaxed">
                        {phase.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {phase.milestones.map(milestone => (
                          <span
                            key={milestone}
                            className={cn(
                              'rounded-full border px-3 py-1 text-xs',
                              phase.status === 'active'
                                ? 'border-primary-100 bg-primary-50 text-primary-700'
                                : 'bg-secondary-50 text-secondary-500 border-black/[0.06]'
                            )}
                          >
                            {milestone}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
