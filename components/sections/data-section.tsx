'use client'

import { GitHubHeatmap } from '@/components/github-heatmap'
import { LeetCodeWidget } from '@/components/leetcode-widget'

export function DataSection() {
  return (
    <section id="data" className="geometric-section">
      <div className="magazine-header mb-8">
        <h2 className="text-4xl font-bold">Live Data</h2>
        <div className="magazine-subtitle">Real-time insights from my digital workspace</div>
      </div>
      
      {/* GitHub - Full Width */}
      <div className="mb-8">
        <GitHubHeatmap />
      </div>

      {/* LeetCode Widget - Full Width */}
      <div className="mb-8">
        <LeetCodeWidget />
      </div>
    </section>
  )
}
