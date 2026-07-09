import { Flame, Cpu, Bot, Monitor, Users, Building2 } from 'lucide-react'
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

const labs = [
  {
    icon: Flame,
    name: 'Forge Lab',
    category: 'Fabrication',
    description:
      'Industrial fabrication equipment including laser cutters, CNC mills, welding stations, and precision metalworking tools.',
    status: 'available' as const,
  },
  {
    icon: Cpu,
    name: 'Circuit Studio',
    category: 'Electronics',
    description:
      'PCB design and manufacturing, oscilloscopes, soldering stations, and a full suite of electronic testing equipment.',
    status: 'available' as const,
  },
  {
    icon: Bot,
    name: 'Robotics Arena',
    category: 'Robotics & Automation',
    description:
      'Collaborative robotics workspace with motion capture, actuator testing rigs, and embedded systems development platforms.',
    status: 'available' as const,
  },
  {
    icon: Monitor,
    name: 'Compute Studio',
    category: 'Computing & AI',
    description:
      'High-performance computing clusters, GPU workstations for AI and simulation, and dedicated machine learning environments.',
    status: 'available' as const,
  },
  {
    icon: Users,
    name: 'Build Mentors',
    category: 'Guidance',
    description:
      'Dedicated engineering mentors available for technical reviews, design critiques, and structured knowledge transfer sessions.',
    status: 'available' as const,
  },
  {
    icon: Building2,
    name: 'Innovation Commons',
    category: 'Collaboration',
    description:
      'Open collaboration space for cross-disciplinary teams to converge, brainstorm, and prototype together in real time.',
    status: 'available' as const,
  },
]

const statusStyles = {
  available: 'bg-green-50 text-green-700 border-green-200',
  soon: 'bg-amber-50 text-amber-700 border-amber-200',
}

export function LabsSection() {
  return (
    <Section
      id="labs"
      spacing="lg"
      background="white"
      aria-label="Inside ToolVault"
    >
      <Container>
        <SectionHeader align="center">
          <SectionTag>Inside ToolVault</SectionTag>
          <SectionTitle>
            Every tool a builder could need — in one place
          </SectionTitle>
          <SectionSubtitle>
            ToolVault is designed as a complete innovation ecosystem. Each lab
            is purpose-built, professionally equipped, and ready for serious
            work.
          </SectionSubtitle>
        </SectionHeader>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {labs.map(lab => (
            <StaggerItem key={lab.name}>
              <div
                className={cn(
                  'group border-border-light relative flex h-full flex-col rounded-xl border bg-white p-6',
                  'transition-all duration-200',
                  'hover:border-primary-200 hover:shadow-hover hover:-translate-y-0.5'
                )}
              >
                {/* Image placeholder */}
                <div className="bg-secondary-50 group-hover:bg-secondary-100 mb-5 flex h-40 w-full items-center justify-center rounded-lg transition-colors duration-200">
                  <div className="text-secondary-300 flex flex-col items-center gap-2">
                    <lab.icon className="h-10 w-10" />
                    <span className="text-xs">Image Coming Soon</span>
                  </div>
                </div>

                {/* Category + Status */}
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-secondary-400 text-xs font-medium tracking-wider uppercase">
                    {lab.category}
                  </span>
                  <span
                    className={cn(
                      'rounded-full border px-2 py-0.5 text-xs font-medium capitalize',
                      statusStyles[lab.status]
                    )}
                  >
                    {lab.status}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-secondary-900 mb-2 text-base font-semibold">
                  {lab.name}
                </h3>

                {/* Description */}
                <p className="text-secondary-500 text-sm leading-relaxed">
                  {lab.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
