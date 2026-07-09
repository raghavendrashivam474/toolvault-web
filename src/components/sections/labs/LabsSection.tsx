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

export function LabsSection() {
  return (
    <Section
      id="labs"
      spacing="lg"
      className="bg-graphite relative overflow-hidden"
      aria-label="Inside ToolVault"
    >
      {/* Blueprint texture */}
      <div
        className="texture-blueprint pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      {/* Cool cyan ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 20%, rgba(34, 211, 238, 0.06) 0%, transparent 60%)',
        }}
      />

      <Container className="relative">
        <SectionHeader align="center">
          <SectionTag className="border-white/10 bg-white/[0.03] text-white/70">
            Inside ToolVault
          </SectionTag>
          <SectionTitle className="text-white">
            Every tool a builder could need — in one place
          </SectionTitle>
          <SectionSubtitle className="text-white/60">
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
                  'group card-glass-dark relative flex h-full flex-col rounded-xl p-6',
                  'transition-all duration-300',
                  'hover:-translate-y-0.5'
                )}
              >
                <div className="mb-5 flex h-40 w-full items-center justify-center rounded-lg bg-white/[0.02] transition-colors duration-300 group-hover:bg-white/[0.04]">
                  <div className="flex flex-col items-center gap-2 text-white/30">
                    <lab.icon className="h-10 w-10" />
                    <span className="text-xs">Image Coming Soon</span>
                  </div>
                </div>

                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-medium tracking-wider text-white/40 uppercase">
                    {lab.category}
                  </span>
                  <span className="rounded-full border border-green-400/20 bg-green-400/10 px-2 py-0.5 text-xs font-medium text-green-400 capitalize">
                    {lab.status}
                  </span>
                </div>

                <h3 className="mb-2 text-base font-semibold text-white">
                  {lab.name}
                </h3>

                <p className="text-sm leading-relaxed text-white/50">
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
