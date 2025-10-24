'use client'

import { CalBooking } from '@/components/cal-booking'
import { userData } from '@/data/user-data'

export function ContactSection() {
  return (
    <section id="contact" className="geometric-section pb-12">
      <div className="magazine-header mb-8">
        <h2 className="text-4xl font-bold">Get In Touch</h2>
        <div className="magazine-subtitle">Let's create something remarkable together</div>
      </div>
      <p className="text-lg leading-relaxed mb-8">
        I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like
        to collaborate or just chat about design and development.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Contact Information */}
        <div className="geometric-card">
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div>
              <div className="text-xs font-mono text-muted mb-1">EMAIL</div>
              <div className="font-mono">{userData.personal.email}</div>
            </div>
            <div>
              <div className="text-xs font-mono text-muted mb-1">TWITTER</div>
              <div className="font-mono">{userData.personal.twitter}</div>
            </div>
            <div>
              <div className="text-xs font-mono text-muted mb-1">GITHUB</div>
              <div className="font-mono">{userData.personal.github}</div>
            </div>
          </div>
        </div>

        {/* Cal.com Booking */}
        <CalBooking username={userData.personal.calUsername} />
      </div>
    </section>
  )
}
