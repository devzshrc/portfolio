'use client'

import { 
  MagazineByline, 
  MagazineDropCap, 
  MagazineSidebar, 
  MagazineStats
} from '@/components/magazine-elements'
import { userData } from '@/data/user-data'

export function AboutSection() {
  return (
    <section id="about" className="geometric-section">
      <div className="magazine-header mb-8">
        <h2 className="text-4xl font-bold">{userData.about.title}</h2>
        <div className="magazine-subtitle">{userData.about.subtitle}</div>
      </div>

      <MagazineByline 
        author={userData.personal.name} 
        date="October 2025" 
        readTime="2 min" 
      />

      <div className="space-y-6">
        <p className="text-lg leading-relaxed">
          <MagazineDropCap>{userData.about.description.charAt(0)}</MagazineDropCap>
          {userData.about.description.slice(1)}
        </p>

        <MagazineStats stats={userData.about.stats} />

        <MagazineSidebar 
          type="quote"
          title="Design Philosophy"
          content={userData.about.philosophy}
        />
      </div>
    </section>
  )
}
