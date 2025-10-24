'use client'

import { useEffect, useState } from 'react'
import { Trophy, Target } from 'lucide-react'

interface LeetCodeData {
  totalSolved: number
  easy: number
  medium: number
  hard: number
  ranking: number | null
  username?: string
  error?: string
}

export function LeetCodeWidget() {
  const [data, setData] = useState<LeetCodeData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/leetcode')
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch LeetCode data:', err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="geometric-card">
        <div className="flex items-center gap-2 mb-2">
          <Target className="w-4 h-4" />
          <h3 className="text-xl font-bold">LeetCode</h3>
        </div>
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-2"></div>
          <div className="grid grid-cols-3 gap-2">
            <div className="h-8 bg-gray-200 rounded"></div>
            <div className="h-8 bg-gray-200 rounded"></div>
            <div className="h-8 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="geometric-card">
        <div className="flex items-center gap-2 mb-2">
          <Target className="w-4 h-4" />
          <h3 className="text-xl font-bold">LeetCode</h3>
        </div>
        <p className="text-muted text-sm">Unable to connect to LeetCode</p>
      </div>
    )
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-50 border-green-200'
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      case 'hard': return 'text-red-600 bg-red-50 border-red-200'
      default: return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  return (
    <div className="geometric-card leetcode-widget">
      <h3 className="text-xl font-bold mb-6">LeetCode Progress</h3>
      
      {/* Main Stats - Clean and Minimal */}
      <div className="leetcode-main-stats">
        <div className="total-solved">
          <div className="total-number">{data.totalSolved}</div>
          <div className="total-label">Problems Solved</div>
        </div>
        
        {data.ranking && (
          <div className="ranking-badge">
            <Trophy className="w-4 h-4" />
            <span>#{data.ranking.toLocaleString()}</span>
          </div>
        )}
      </div>

      {/* Clean Progress Bar */}
      <div className="leetcode-progress-section">
        <div className="progress-header">
          <span className="progress-title">Difficulty Distribution</span>
        </div>
        <div className="clean-progress-bar">
          <div 
            className="progress-fill easy" 
            style={{ width: `${(data.easy / data.totalSolved) * 100}%` }}
          ></div>
          <div 
            className="progress-fill medium" 
            style={{ width: `${(data.medium / data.totalSolved) * 100}%` }}
          ></div>
          <div 
            className="progress-fill hard" 
            style={{ width: `${(data.hard / data.totalSolved) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Minimal Difficulty Stats */}
      <div className="difficulty-stats">
        <div className="difficulty-item">
          <span className="difficulty-dot easy"></span>
          <span className="difficulty-name">Easy</span>
          <span className="difficulty-count">{data.easy}</span>
        </div>
        <div className="difficulty-item">
          <span className="difficulty-dot medium"></span>
          <span className="difficulty-name">Medium</span>
          <span className="difficulty-count">{data.medium}</span>
        </div>
        <div className="difficulty-item">
          <span className="difficulty-dot hard"></span>
          <span className="difficulty-name">Hard</span>
          <span className="difficulty-count">{data.hard}</span>
        </div>
      </div>

      {data.error && (
        <div className="error-message">{data.error}</div>
      )}
    </div>
  )
}
