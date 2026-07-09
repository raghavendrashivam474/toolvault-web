import { Shield, Compass, Users, Award, Hammer, TrendingUp } from 'lucide-react'
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

const pillars = [
  {
    icon: Shield,
    title: 'Engineering Infrastructure',
    description:
      'We invest in the physical and digital infrastructure that serious engineering demands — no compromises on quality or capability.',
  },
  {
    icon: Compass,
    title: 'Guided Experience',
    description:
      'Every member has access to structured guidance from practitioners who have built real systems at scale.',
  },
  {
    icon: Users,
    title: 'Collaboration by Design',
    description:
      'ToolVault is designed for cross-disciplinary work. The best solutions emerge when diverse builders share a workspace.',
  },
  {
    icon: Award,
    title: 'Professional Standards',
    description:
      'We hold every workspace, piece of equipment, and program to the standard of a professional engineering environment.',
  },
  {
    icon: Hammer,
    title: 'Builder-First Design',
    description:
      'Every decision — from layout to tooling to scheduling — is made with the active builder in mind, not the administrator.',
  },
  {
    icon: TrendingUp,
    title: 'Long-Term Vision',
    description:
      'ToolVault is not a coworking space. It is the foundation of a national engineering infrastructure network built for the next decade.',
  },
]

export function WhySection() {
  return (
    <Section
      spacing="lg"
      className="bg-surface-subtle"
      aria-label="Why ToolVault"
    >
      <Container>
        <SectionHeader align="center">
          <SectionTag>Why ToolVault</SectionTag>
          <SectionTitle>Built different. Built to last.</SectionTitle>
          <SectionSubtitle>
            ToolVault is not another makerspace. It is an engineering
            infrastructure platform designed from first principles — for
            builders who mean business.
          </SectionSubtitle>
        </SectionHeader>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map(pillar => (
            <StaggerItem key={pillar.title}>
              <div
                className={cn(
                  'group flex h-full flex-col rounded-xl border border-black/[0.06] bg-white p-8',
                  'hover:border-primary-200 transition-all duration-200 hover:shadow-md'
                )}
              >
                <div className="bg-secondary-900 group-hover:bg-primary-600 mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-white transition-colors duration-300">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <h3 className="text-secondary-900 mb-3 text-base font-semibold">
                  {pillar.title}
                </h3>
                <p className="text-secondary-500 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
