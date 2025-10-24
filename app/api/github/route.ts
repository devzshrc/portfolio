import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const username = 'devzshrc'
    const response = await fetch(`https://api.github.com/users/${username}/events/public`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'editorial-portfolio'
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub data')
    }

    const events = await response.json()
    
    // Get user stats
    const userResponse = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'editorial-portfolio'
      },
      next: { revalidate: 3600 }
    })

    const userData = await userResponse.json()

    // Process contribution data for heatmap
    const contributions = processContributions(events)

    return NextResponse.json({
      contributions,
      stats: {
        publicRepos: userData.public_repos,
        followers: userData.followers,
        following: userData.following
      }
    })
  } catch (error) {
    console.error('GitHub API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch GitHub data' },
      { status: 500 }
    )
  }
}

function processContributions(events: any[]) {
  const contributionMap = new Map()
  const today = new Date()
  const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate())

  // Initialize all dates in the past year with 0 contributions
  for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().split('T')[0]
    contributionMap.set(dateStr, 0)
  }

  // Count contributions from events
  events.forEach(event => {
    if (event.type === 'PushEvent' || event.type === 'CreateEvent' || event.type === 'PullRequestEvent') {
      const date = new Date(event.created_at).toISOString().split('T')[0]
      if (contributionMap.has(date)) {
        contributionMap.set(date, contributionMap.get(date) + 1)
      }
    }
  })

  // Convert to array format for heatmap
  return Array.from(contributionMap.entries()).map(([date, count]) => ({
    date,
    count
  }))
}
