'use client'

import { useEffect, useState } from 'react'
import { Code, Clock } from 'lucide-react'

interface WakaTimeData {
  minutes: number
  languages?: Array<{ name: string; percent: number }>
  projects?: Array<{ name: string; percent: number }>
  error?: string
}

export function WakaTimeWidget() {
  const [data, setData] = useState<WakaTimeData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchWakaTimeData = () => {
      fetch('/api/wakatime')
        .then(res => res.json())
        .then(data => {
          setData(data)
          setLoading(false)
        })
        .catch(err => {
          console.error('Failed to fetch WakaTime data:', err)
          setLoading(false)
        })
    }

    fetchWakaTimeData()
    // Refresh every 5 minutes
    const interval = setInterval(fetchWakaTimeData, 300000)
    return () => clearInterval(interval)
  }, [])

  const formatTime = (minutes: number) => {
    if (minutes < 60) {
      return `${minutes}m`
    }
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return `${hours}h ${remainingMinutes}m`
  }

  if (loading) {
    return (
      <div className="geometric-card">
        <div className="flex items-center gap-2 mb-2">
          <Code className="w-4 h-4" />
          <h3 className="text-xl font-bold">WakaTime</h3>
        </div>
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-2"></div>
          <div className="h-3 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="geometric-card">
        <div className="flex items-center gap-2 mb-2">
          <Code className="w-4 h-4" />
          <h3 className="text-xl font-bold">WakaTime</h3>
        </div>
        <p className="text-muted text-sm">Unable to connect to WakaTime</p>
      </div>
    )
  }

  return (
    <div className="geometric-card">
      <div className="flex items-center gap-2 mb-3">
        <Code className="w-4 h-4" />
        <h3 className="text-xl font-bold">WakaTime</h3>
      </div>

      <div className="mb-3">
        <div className="text-sm text-muted mb-1 flex items-center gap-1">
          <Clock className="w-3 h-3" />
          Coded today
        </div>
        <div className="font-mono text-2xl">{formatTime(data.minutes)}</div>
      </div>

      {data.languages && data.languages.length > 0 && (
        <div className="mb-3">
          <div className="text-xs text-muted mb-2">Top languages today:</div>
          <div className="space-y-1">
            {data.languages.map((lang, index) => (
              <div key={lang.name} className="flex justify-between items-center text-xs">
                <span className="font-mono">{lang.name}</span>
                <span className="text-muted">{lang.percent.toFixed(1)}%</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.projects && data.projects.length > 0 && (
        <div>
          <div className="text-xs text-muted mb-2">Active projects:</div>
          <div className="space-y-1">
            {data.projects.map((project, index) => (
              <div key={project.name} className="flex justify-between items-center text-xs">
                <span className="font-mono truncate">{project.name}</span>
                <span className="text-muted">{project.percent.toFixed(1)}%</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.error && (
        <div className="text-xs text-muted">{data.error}</div>
      )}
    </div>
  )
}
