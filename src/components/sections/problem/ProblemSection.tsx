import { AlertTriangle, Lock, Clock } from 'lucide-react'
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

const problems = [
  {
    icon: AlertTriangle,
    title: 'Prohibitive Infrastructure Costs',
    description:
      'Professional engineering equipment costs hundreds of thousands of dollars. Individual builders, students, and early-stage startups cannot access the tools they need to bring ideas to life.',
    tag: 'Cost',
  },
  {
    icon: Lock,
    title: 'Locked Behind Institutions',
    description:
      'Advanced tools exist inside universities and corporations — but access is restricted by enrollment, employment, or geography. Innovation should not be gated by circumstance.',
    tag: 'Access',
  },
  {
    icon: Clock,
    title: 'Delayed Time to Prototype',
    description:
      'Without infrastructure, builders spend months sourcing tools, renting space, and finding expertise. Every delay compounds into missed opportunities and abandoned ideas.',
    tag: 'Time',
  },
]

export function ProblemSection() {
  return (
    <Section
      id="about"
      spacing="lg"
      background="white"
      aria-label="The problem we solve"
    >
      <Container>
        <SectionHeader align="center">
          <SectionTag>The Problem</SectionTag>
          <SectionTitle>
            Great ideas are stalled by missing infrastructure
          </SectionTitle>
          <SectionSubtitle>
            The gap between imagination and execution has never been more
            expensive. Builders with real potential are held back not by talent
            — but by access.
          </SectionSubtitle>
        </SectionHeader>

        <StaggerContainer className="grid gap-6 md:grid-cols-3">
          {problems.map(problem => (
            <StaggerItem key={problem.title}>
              <div
                className={cn(
                  'border-border-light flex h-full flex-col rounded-xl border bg-white p-8',
                  'hover:border-secondary-200 transition-all duration-200 hover:shadow-md'
                )}
              >
                {/* Icon */}
                <div className="bg-secondary-50 mb-6 flex h-12 w-12 items-center justify-center rounded-lg">
                  <problem.icon className="text-secondary-500 h-6 w-6" />
                </div>

                {/* Tag */}
                <div className="text-secondary-400 mb-4 text-xs font-medium tracking-wide uppercase">
                  {problem.tag}
                </div>

                {/* Content */}
                <h3 className="text-secondary-900 mb-3 text-lg font-semibold">
                  {problem.title}
                </h3>
                <p className="text-secondary-500 text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
