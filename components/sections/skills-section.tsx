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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="geometric-card">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-black"></div>
            <h3 className="text-xl font-bold">Skills</h3>
          </div>
          <ul className="space-y-3 text-muted stagger-animation">
            {userData.skills.categories.skills.map((skill, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-1 h-1 bg-black rounded-full"></span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="geometric-card">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-black"></div>
            <h3 className="text-xl font-bold">Technologies</h3>
          </div>
          <ul className="space-y-3 text-muted">
            {userData.skills.categories.technologies.map((tech, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-1 h-1 bg-black rounded-full"></span>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
