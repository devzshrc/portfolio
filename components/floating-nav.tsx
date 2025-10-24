'use client';

import { useEffect, useState } from 'react';
import { userData } from '@/data/user-data';

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = userData.navigation;

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Find active section
      const sectionElements = sections
        .map((section) => document.getElementById(section.id))
        .filter(Boolean);

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
        <div
          className="h-full bg-black transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Navigation */}
      <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="magazine-nav">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`nav-dot ${activeSection === index ? 'active' : ''}`}
              title={section.label}
            >
              <span className="nav-label">{section.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Page Number */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <div className="magazine-page-number">
          <div className="text-xs font-mono text-muted">PAGE</div>
          <div className="text-lg font-mono font-bold">
            {String(activeSection + 1).padStart(2, '0')}
          </div>
          <div className="text-xs font-mono text-muted">
            / {String(sections.length).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Magazine Date Stamp */}
      <div className="fixed top-6 right-6 z-40 hidden lg:block">
        <div className="magazine-timestamp">
          <div className="text-xs font-mono text-muted">EST. 2025</div>
          <div className="text-xs font-mono text-muted">
            {new Date()
              .toLocaleDateString('en-US', {
                month: 'short',
                day: '2-digit',
              })
              .toUpperCase()}
          </div>
        </div>
      </div>
    </>
  );
}
