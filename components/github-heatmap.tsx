'use client'

import { useEffect, useState } from 'react'

interface Contribution {
  date: string
  count: number
}

interface GitHubData {
  contributions: Contribution[]
  stats: {
    publicRepos: number
    followers: number
    following: number
  }
  error?: string
}

export function GitHubHeatmap() {
  const [data, setData] = useState<GitHubData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/github')
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch GitHub data:', err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="geometric-card">
        <h3 className="text-xl font-bold mb-4">GitHub Activity</h3>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="grid grid-cols-53 gap-1 mb-4">
            {Array.from({ length: 365 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-gray-200 rounded-sm"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (!data || data.error) {
    return (
      <div className="geometric-card">
        <h3 className="text-xl font-bold mb-4">GitHub Activity</h3>
        <p className="text-muted">Failed to load GitHub data</p>
      </div>
    )
  }

  const getContributionColor = (count: number) => {
    if (count === 0) return 'github-contrib-0'
    if (count <= 2) return 'github-contrib-1'
    if (count <= 4) return 'github-contrib-2'
    if (count <= 6) return 'github-contrib-3'
    return 'github-contrib-4'
  }

  const totalContributions = data.contributions.reduce((sum, day) => sum + day.count, 0)

  return (
    <div className="geometric-card">
      <h3 className="text-xl font-bold mb-4">GitHub Activity</h3>
      
      <div className="mb-4 grid grid-cols-3 gap-4 text-sm">
        <div>
          <div className="font-mono text-lg">{data.stats.publicRepos}</div>
          <div className="text-muted">Repositories</div>
        </div>
        <div>
          <div className="font-mono text-lg">{totalContributions}</div>
          <div className="text-muted">Contributions</div>
        </div>
        <div>
          <div className="font-mono text-lg">{data.stats.followers}</div>
          <div className="text-muted">Followers</div>
        </div>
      </div>

      <div className="mb-6">
        <div className="text-sm font-mono text-muted mb-3">Past year contributions</div>
        <div className="github-heatmap-container">
          <div className="github-heatmap-grid">
            {data.contributions.map((day, index) => (
              <div
                key={day.date}
                className={`github-contrib-cell ${getContributionColor(day.count)}`}
                title={`${day.date}: ${day.count} contributions`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs font-mono text-muted">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="github-contrib-cell github-contrib-0"></div>
          <div className="github-contrib-cell github-contrib-1"></div>
          <div className="github-contrib-cell github-contrib-2"></div>
          <div className="github-contrib-cell github-contrib-3"></div>
          <div className="github-contrib-cell github-contrib-4"></div>
        </div>
        <span>More</span>
      </div>
    </div>
  )
}
