import { Container } from '@/components/layout'
import { Section, SectionTag } from '@/components/sections'
import { FadeUp, StaggerContainer, StaggerItem } from '@/animations'
import { cn } from '@/utils/cn'

const timeline = [
  {
    year: '2024',
    title: 'Foundation',
    description:
      'Establish the concept, validate demand, and design the first ToolVault blueprint.',
  },
  {
    year: '2025',
    title: 'Prototype Center',
    description:
      'Launch the first ToolVault pilot location with core labs and founding member cohort.',
  },
  {
    year: '2026',
    title: 'Validation',
    description:
      'Measure outcomes, refine operations, and prove the model with real builder results.',
  },
  {
    year: '2027',
    title: 'Pilot Expansion',
    description:
      'Open second and third locations based on validated blueprint and demand signals.',
  },
  {
    year: '2028+',
    title: 'National Network',
    description:
      'Scale ToolVault into a national engineering infrastructure network across major cities.',
  },
]

function TimelineCard({
  year,
  title,
  description,
}: {
  year: string
  title: string
  description: string
}) {
  return (
    <div className="border-secondary-800 bg-secondary-900 rounded-xl border p-6">
      <div className="text-primary-400 mb-2 text-xs font-semibold tracking-widest uppercase">
        {year}
      </div>
      <h3 className="mb-2 text-base font-semibold text-white">{title}</h3>
      <p className="text-secondary-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export function VisionSection() {
  return (
    <Section
      id="vision"
      spacing="xl"
      className="bg-secondary-950"
      aria-label="Our vision"
    >
      <Container>
        {/* Vision Statement */}
        <FadeUp className="mb-24 text-center">
          <SectionTag className="border-primary-500/30 bg-primary-500/10 text-primary-400">
            Our Vision
          </SectionTag>

          <h2 className="mx-auto mt-6 max-w-4xl text-4xl leading-[1.1] font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            A world where every innovator has access to the infrastructure to
            build what they imagine.
          </h2>

          <p className="text-secondary-400 mx-auto mt-8 max-w-2xl text-lg leading-relaxed">
            ToolVault exists to dismantle the access barrier in engineering. We
            believe the next breakthrough is waiting inside someone who simply
            needs the right environment to build it.
          </p>
        </FadeUp>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="bg-secondary-800 absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 lg:block" />

          <StaggerContainer className="flex flex-col gap-8">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0

              return (
                <StaggerItem key={item.year}>
                  <div
                    className={cn(
                      'flex flex-col items-center gap-6 lg:flex-row lg:gap-12',
                      !isEven && 'lg:flex-row-reverse'
                    )}
                  >
                    {/* Left content */}
                    <div className="flex-1 lg:text-right">
                      {isEven ? (
                        <TimelineCard {...item} />
                      ) : (
                        <div className="hidden lg:block" />
                      )}
                    </div>

                    {/* Center dot */}
                    <div className="border-primary-500 bg-secondary-950 relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2">
                      <div className="bg-primary-500 h-2.5 w-2.5 rounded-full" />
                    </div>

                    {/* Right content */}
                    <div className="flex-1">
                      {!isEven ? (
                        <TimelineCard {...item} />
                      ) : (
                        <div className="lg:hidden">
                          <TimelineCard {...item} />
                        </div>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </Container>
    </Section>
  )
}
