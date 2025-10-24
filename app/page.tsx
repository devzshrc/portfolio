import { FloatingNav } from '@/components/floating-nav'
import { HeroSection } from '@/components/hero-section'
import { MagazineLoader } from '@/components/magazine-loader'
import { 
  WorkSection, 
  AboutSection, 
  SkillsSection, 
  DataSection, 
  ContactSection 
} from '@/components/sections'
import { userData } from '@/data/user-data'

export default function Home() {
  return (
    <div className="geometric-bg">
      <MagazineLoader />
      <FloatingNav />
      <div className="page-container">
        {/* Hero Section */}
        <HeroSection />

        {/* Connector Line */}
        <div className="line-connector" />

        {/* Work Section */}
        <WorkSection />

        {/* Connector Line */}
        <div className="line-connector-solid" />

        {/* About Section */}
        <AboutSection />

        {/* Magazine Section Divider */}
        <div className="magazine-section-divider"></div>

        {/* Data Section */}
        <DataSection />

        {/* Connector Line */}
        <div className="line-connector" />

        {/* Skills Section */}
        <SkillsSection />

        {/* Connector Line */}
        <div className="line-connector-solid" />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <div className="border-t border-border pt-8 mt-12 text-center text-muted text-sm">
          <p>Designed & built by {userData.personal.name} — 2025</p>
        </div>
      </div>
    </div>
  )
}
