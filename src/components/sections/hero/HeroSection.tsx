import { ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/buttons'
import { Container } from '@/components/layout'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="bg-graphite-deep texture-glow-primary relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Engineering blueprint texture — extremely subtle */}
      <div
        className="texture-blueprint pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      {/* Ambient warm accent — barely visible gold glow bottom-right */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 40% 30% at 80% 80%, rgba(212, 165, 116, 0.06) 0%, transparent 60%)',
        }}
      />

      <Container>
        <div className="relative flex flex-col items-center gap-10 py-32 text-center">
          {/* Overline tag with gold hint */}
          <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm">
            <span className="bg-gold-500 h-1.5 w-1.5 rounded-full" />
            <span className="text-xs font-semibold tracking-widest text-white/70 uppercase">
              Engineering Infrastructure Platform
            </span>
          </div>

          {/* Headline — LCP element, no animation delay */}
          <h1 className="max-w-[880px] text-5xl leading-[1.02] font-bold tracking-tight text-balance text-white md:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Built for engineers who{' '}
            <span className="relative inline-block">
              <span className="text-primary-400 relative z-10">
                build the future
              </span>
              {/* Subtle underline glow */}
              <span
                aria-hidden="true"
                className="bg-primary-500/20 absolute inset-x-0 bottom-1 -z-0 h-3 blur-md"
              />
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="max-w-reading animate-fade-up text-lg leading-[1.6] text-balance text-white/60 md:text-xl"
            style={{ animationDelay: '120ms', animationFillMode: 'both' }}
          >
            Professional equipment, collaborative workspaces, and structured
            mentorship — the complete infrastructure for serious builders, in
            one place.
          </p>

          {/* CTA row */}
          <div
            className="animate-fade-up flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
            style={{ animationDelay: '220ms', animationFillMode: 'both' }}
          >
            <Button
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              Explore ToolVault
            </Button>
            <a
              href="#about"
              className="group inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
            >
              Learn more
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 group-hover:translate-y-0.5"
              >
                ↓
              </span>
            </a>
          </div>

          {/* Trust row — refined typography */}
          <div
            className="animate-fade-up mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
            style={{ animationDelay: '320ms', animationFillMode: 'both' }}
          >
            {[
              'Professional Equipment',
              'Expert Mentorship',
              'Collaborative Labs',
              'End-to-End Prototyping',
            ].map(item => (
              <span
                key={item}
                className="flex items-center gap-2 text-xs font-medium text-white/40"
              >
                <span className="h-px w-4 bg-white/20" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </Container>

      {/* Scroll indicator — refined */}
      <a
        href="#about"
        aria-label="Scroll to content"
        className="animate-fade-in group absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{ animationDelay: '600ms', animationFillMode: 'both' }}
      >
        <div className="flex flex-col items-center gap-2 text-white/30 transition-colors duration-300 group-hover:text-white/60">
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">
            Scroll
          </span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </div>
      </a>
    </section>
  )
}
