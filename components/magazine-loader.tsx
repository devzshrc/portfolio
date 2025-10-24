'use client'

import { useEffect, useState } from 'react'

export function MagazineLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Fast, minimal loading - just enough to show the animation
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800) // Quick 800ms loading

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="minimal-loader-overlay">
      <div className="minimal-loader-spinner"></div>
    </div>
  )
}
