import { ArrowDown, Lightbulb, Wrench, Rocket, Zap } from 'lucide-react'
import { Container, Stack } from '@/components/layout'
import {
  Section,
  SectionHeader,
  SectionTag,
  SectionTitle,
  SectionSubtitle,
} from '@/components/sections'
import { FadeUp, StaggerContainer, StaggerItem } from '@/animations'
import { cn } from '@/utils/cn'

const processSteps = [
  { label: 'Idea', sublabel: 'You bring the vision' },
  {
    label: 'ToolVault',
    sublabel: 'We provide the infrastructure',
    highlight: true,
  },
  { label: 'Prototype', sublabel: 'Build with professional tools' },
  { label: 'Innovation', sublabel: 'Launch what matters' },
]

const capabilities = [
  {
    icon: Zap,
    title: 'Access',
    description:
      'Professional-grade engineering equipment available when you need it.',
  },
  {
    icon: Wrench,
    title: 'Build',
    description:
      'Collaborative workspaces designed for focused, deep-work sessions.',
  },
  {
    icon: Lightbulb,
    title: 'Learn',
    description:
      'Expert mentors and structured workshops accelerate your growth.',
  },
  {
    icon: Rocket,
    title: 'Create',
    description:
      'End-to-end prototyping support from concept to finished product.',
  },
]

export function SolutionSection() {
  return (
    <Section
      spacing="lg"
      className="bg-surface-subtle"
      aria-label="Our solution"
    >
      <Container>
        <SectionHeader align="center">
          <SectionTag>The Solution</SectionTag>
          <SectionTitle>
            The complete engineering environment, under one roof.
          </SectionTitle>
          <SectionSubtitle>
            ToolVault provides the infrastructure serious builders need to move
            from concept to functional prototype without institutional friction.
          </SectionSubtitle>
        </SectionHeader>

        <FadeUp className="mb-20">
          <div className="mx-auto max-w-2xl">
            <div className="flex flex-col items-center gap-0">
              {processSteps.map((step, index) => (
                <div key={step.label} className="flex flex-col items-center">
                  <div
                    className={cn(
                      'flex w-full max-w-xs flex-col items-center rounded-xl border px-8 py-5 text-center transition-all duration-300',
                      step.highlight
                        ? 'border-primary-500/20 bg-primary-600 shadow-glow text-white'
                        : 'text-secondary-900 border-black/[0.06] bg-white'
                    )}
                  >
                    <span
                      className={cn(
                        'text-lg font-bold',
                        step.highlight ? 'text-white' : 'text-secondary-900'
                      )}
                    >
                      {step.label}
                    </span>
                    <span
                      className={cn(
                        'mt-1 text-xs',
                        step.highlight
                          ? 'text-primary-100'
                          : 'text-secondary-400'
                      )}
                    >
                      {step.sublabel}
                    </span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="text-secondary-300 flex flex-col items-center py-2">
                      <ArrowDown className="h-5 w-5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(cap => (
            <StaggerItem key={cap.title}>
              <Stack
                className={cn(
                  'h-full rounded-xl border border-black/[0.06] bg-white p-6',
                  'hover:border-primary-200 transition-all duration-200 hover:shadow-md'
                )}
                gap="sm"
              >
                <div className="bg-primary-50 flex h-10 w-10 items-center justify-center rounded-lg">
                  <cap.icon className="text-primary-600 h-5 w-5" />
                </div>
                <h3 className="text-secondary-900 text-base font-semibold">
                  {cap.title}
                </h3>
                <p className="text-secondary-500 text-sm leading-relaxed">
                  {cap.description}
                </p>
              </Stack>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
