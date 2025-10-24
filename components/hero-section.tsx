'use client'

import { userData } from '@/data/user-data'

export function HeroSection() {
  const scrollToWork = () => {
    const workSection = document.getElementById('work')
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero-clean">
      {/* Magazine Masthead */}
      <div className="hero-masthead">
        <div className="masthead-left">
          <div className="hero-logo">{userData.magazine.logo}</div>
          <div className="hero-tagline">{userData.magazine.tagline}</div>
        </div>
        <div className="masthead-right">
          <div className="hero-issue">{userData.magazine.issue}</div>
          <div className="hero-date">{userData.magazine.date}</div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="hero-content-wrapper">
        <div className="hero-main">
          <div className="hero-category">{userData.hero.category}</div>
          
          <h1 className="hero-title">
            {userData.personal.name}
          </h1>
          
          <div className="hero-subtitle">
            <div className="role">{userData.personal.role}</div>
            <div className="location">Based in {userData.personal.location}</div>
          </div>

          <div className="hero-description">
            <p>
              {userData.hero.description}
            </p>
          </div>

          <div className="hero-actions">
            <button className="hero-cta" onClick={scrollToWork}>
              <span>View Work</span>
              <span className="cta-arrow">→</span>
            </button>
            
            <div className="hero-meta">
              <span className="page-info">PAGE 01</span>
              <span className="read-time">3 MIN READ</span>
            </div>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="hero-image-section">
          <div className="hero-image-container">
            <div className="hero-image-frame">
              <img 
                src="/hero-image.jpg" 
                alt={userData.personal.name}
                className="hero-image"
              />
              <div className="hero-image-caption">
                <span className="caption-text">Featured Designer</span>
                <span className="caption-credit">Portfolio 2025</span>
              </div>
            </div>
          </div>
          
          {/* Side Elements */}
          <div className="hero-side">
            <div className="hero-number">01</div>
            <div className="hero-accent-line"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
