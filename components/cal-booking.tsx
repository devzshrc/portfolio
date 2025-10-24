'use client'

import { useState } from 'react'
import { CalModal } from './cal-modal'

interface CalBookingProps {
  username: string
}

export function CalBooking({ username }: CalBookingProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <div className="geometric-card">
        <h3 className="text-xl font-bold mb-4">Schedule a Meeting</h3>
        <p className="text-muted mb-4 text-sm">
          Book a 30-minute call to discuss your project, collaboration opportunities, or just to chat about design and development.
        </p>
        <button
          onClick={openModal}
          className="cal-booking-button"
        >
          <svg className="cal-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          <span>Book a Call</span>
          <span className="cal-arrow">→</span>
        </button>
        <div className="text-xs text-muted mt-2">
          Powered by Cal.com
        </div>
      </div>

      <CalModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        username={username}
      />
    </>
  )
}
