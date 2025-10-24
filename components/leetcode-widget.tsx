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
    <div className="geometric-card">
      <div className="flex items-center gap-2 mb-3">
        <Target className="w-4 h-4" />
        <h3 className="text-xl font-bold">LeetCode</h3>
      </div>

      <div className="mb-4">
        <div className="text-sm text-muted mb-1">Problems solved</div>
        <div className="font-mono text-2xl flex items-center gap-2">
          {data.totalSolved}
          {data.ranking && (
            <div className="flex items-center gap-1 text-sm text-muted">
              <Trophy className="w-3 h-3" />
              #{data.ranking.toLocaleString()}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className={`p-2 rounded border text-center ${getDifficultyColor('easy')}`}>
          <div className="font-mono text-lg">{data.easy}</div>
          <div className="text-xs">Easy</div>
        </div>
        <div className={`p-2 rounded border text-center ${getDifficultyColor('medium')}`}>
          <div className="font-mono text-lg">{data.medium}</div>
          <div className="text-xs">Medium</div>
        </div>
        <div className={`p-2 rounded border text-center ${getDifficultyColor('hard')}`}>
          <div className="font-mono text-lg">{data.hard}</div>
          <div className="text-xs">Hard</div>
        </div>
      </div>

      {data.error && (
        <div className="text-xs text-muted mt-2">{data.error}</div>
      )}

      {data.username && (
        <div className="text-xs text-muted mt-2">
          Profile: {data.username}
        </div>
      )}
    </div>
  )
}
