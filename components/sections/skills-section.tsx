'use client'

import { 
  MagazineByline, 
  MagazineReadingTime,
  MagazineTags
} from '@/components/magazine-elements'
import { userData } from '@/data/user-data'

export function SkillsSection() {
  return (
    <section id="expertise" className="geometric-section">
      <div className="magazine-header mb-8">
        <h2 className="text-4xl font-bold">{userData.skills.title}</h2>
        <div className="magazine-subtitle">{userData.skills.subtitle}</div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <MagazineByline 
          author="Technical Editor" 
          date="Updated Oct 2025" 
          readTime="2 min" 
        />
        <MagazineReadingTime minutes={2} />
      </div>

      <MagazineTags tags={userData.skills.tags} />
      
      {/* Compact Skills Layout */}
      <div className="compact-skills-container">
        <div className="skills-section">
          <h3 className="skills-section-title">Core Skills</h3>
          <div className="skills-compact-grid">
            {userData.skills.categories.skills.map((skill, index) => (
              <div key={index} className="skill-compact-item">
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h3 className="skills-section-title">Technologies</h3>
          <div className="skills-compact-grid">
            {userData.skills.categories.technologies.map((tech, index) => (
              <div key={index} className="skill-compact-item tech">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
