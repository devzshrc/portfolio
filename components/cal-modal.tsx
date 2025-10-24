'use client'

import { useEffect } from 'react'

interface CalModalProps {
  isOpen: boolean
  onClose: () => void
  username: string
}

export function CalModal({ isOpen, onClose, username }: CalModalProps) {
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = 'unset'
      }
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="cal-modal-overlay" onClick={onClose}>
      <div className="cal-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="cal-modal-header">
          <h3 className="cal-modal-title">Schedule a Meeting</h3>
          <button className="cal-modal-close" onClick={onClose}>
            <span className="close-icon">×</span>
          </button>
        </div>
        
        <div className="cal-modal-body">
          <iframe
            src={`https://cal.com/${username}/30min`}
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 'none', minHeight: '600px' }}
            title="Schedule a meeting"
          />
        </div>
      </div>
    </div>
  )
}
