'use client'

import { 
  MagazineByline, 
  MagazineDropCap, 
  MagazineSidebar, 
  MagazineStats, 
  MagazineColumnBreak
} from '@/components/magazine-elements'
import { userData } from '@/data/user-data'

export function WorkSection() {
  return (
    <section id="work" className="geometric-section">
      <div className="magazine-header mb-8">
        <h2 className="text-4xl font-bold">Featured Work</h2>
        <div className="magazine-subtitle">Selected projects that define my approach</div>
      </div>

      <MagazineByline 
        author="Portfolio Editor" 
        date="October 2025" 
        readTime="8 min" 
      />

      <MagazineSidebar 
        type="note"
        title="Editorial Note"
        content="Each project showcases a unique challenge and demonstrates our commitment to thoughtful, user-centered design solutions."
      />

      <div className="projects-grid stagger-animation">
        {userData.projects.map((project, index) => (
          <article key={project.id} className="geometric-card project-card-adaptive magazine-project-card">
            <div className="project-card-content">
              {/* Project Header */}
              <div className="project-header">
                <div className="project-category">PROJECT {String(index + 1).padStart(2, '0')}</div>
                <div className="project-status">COMPLETED</div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              
              <div className="project-meta">
                <span className="project-year">{project.year}</span>
                <span className="project-type">{project.type}</span>
              </div>

              <div className="project-description">
                <MagazineDropCap>{project.description.charAt(0)}</MagazineDropCap>
                <p>{project.description.slice(1)}</p>
              </div>
              
              {/* Technology Stack */}
              <div className="project-tech-section">
                <h4 className="tech-section-title">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Project Links - Anchored to Bottom */}
            <div className="project-card-footer">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-button project-link-live"
                >
                  <span className="project-link-icon">↗</span>
                  <span>Live Site</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-button project-link-github"
                >
                  <span className="project-link-icon">⚡</span>
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <MagazineColumnBreak />

      <MagazineSidebar 
        type="fact"
        title="Development Philosophy"
        content="Every project begins with understanding the user's needs and ends with a solution that exceeds expectations through thoughtful design and robust engineering."
      />
    </section>
  )
}
