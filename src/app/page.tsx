import { Navbar } from '@/components/navigation'
import { HeroSection } from '@/components/sections/hero'
import { ProblemSection } from '@/components/sections/problem'
import { SolutionSection, WhySection } from '@/components/sections/solution'
import { LabsSection } from '@/components/sections/labs'
import { CapabilitiesSection } from '@/components/sections/capabilities'
import { VisionSection } from '@/components/sections/vision'
import { RoadmapSection } from '@/components/sections/roadmap'
import { CTASection } from '@/components/sections/cta'
import { Footer } from '@/components/sections/footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <LabsSection />
        <CapabilitiesSection />
        <WhySection />
        <VisionSection />
        <RoadmapSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
