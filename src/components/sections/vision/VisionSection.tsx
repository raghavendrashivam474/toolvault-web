import { Container } from '@/components/layout'
import { Section } from '@/components/sections'
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
    <div className="card-glass-dark rounded-xl p-6">
      <div className="text-gold-500 mb-2 text-xs font-semibold tracking-widest uppercase">
        {year}
      </div>
      <h3 className="mb-2 text-base font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-white/60">{description}</p>
    </div>
  )
}

export function VisionSection() {
  return (
    <Section
      id="vision"
      spacing="xl"
      className="bg-graphite-deep relative overflow-hidden"
      aria-label="Our vision"
    >
      {/* Blueprint texture */}
      <div
        className="texture-blueprint pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      {/* Warm gold ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 50% 35% at 50% 30%, rgba(212, 165, 116, 0.08) 0%, transparent 65%)',
        }}
      />

      <Container className="relative">
        <FadeUp className="mb-24 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm">
            <span className="bg-gold-500 h-1.5 w-1.5 rounded-full" />
            <span className="text-xs font-semibold tracking-widest text-white/70 uppercase">
              Our Vision
            </span>
          </div>

          <h2 className="mx-auto mt-6 max-w-4xl text-4xl leading-[1.1] font-bold tracking-tight text-balance text-white md:text-5xl lg:text-6xl">
            Every innovator deserves the infrastructure to build what they
            imagine.
          </h2>

          <p className="max-w-reading mx-auto mt-8 text-lg leading-relaxed text-balance text-white/60">
            ToolVault exists to remove the access barrier in engineering. The
            next breakthrough may be waiting inside someone who simply needs the
            right environment to build it.
          </p>
        </FadeUp>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 bg-white/[0.06] lg:block"
          />

          <StaggerContainer className="flex flex-col gap-8">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0

              return (
                <StaggerItem key={item.year}>
                  <div
                    className={cn(
                      'flex flex-col items-stretch gap-6',
                      'lg:flex-row lg:items-center lg:gap-12',
                      !isEven && 'lg:flex-row-reverse'
                    )}
                  >
                    <div className="flex-1">
                      <TimelineCard {...item} />
                    </div>

                    <div
                      aria-hidden="true"
                      className="border-gold-500/40 bg-graphite-deep relative z-10 hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 lg:flex"
                    >
                      <div className="bg-gold-500 h-2.5 w-2.5 rounded-full" />
                    </div>

                    <div className="hidden flex-1 lg:block" />
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
