import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const username = 'de5ash1zh'
    
    // LeetCode doesn't have an official API, so we'll use a GraphQL query
    const query = `
      query getUserProfile($username: String!) {
        matchedUser(username: $username) {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
          profile {
            ranking
            userAvatar
            realName
            aboutMe
            school
            websites
            countryName
            company
            jobTitle
            skillTags
            postViewCount
            postViewCountDiff
            reputation
            reputationDiff
          }
        }
      }
    `

    const response = await fetch('https://leetcode.com/graphql/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'editorial-portfolio'
      },
      body: JSON.stringify({
        query,
        variables: { username }
      }),
      next: { revalidate: 3600 } // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error('Failed to fetch LeetCode data')
    }

    const data = await response.json()
    const user = data.data?.matchedUser

    if (!user) {
      return NextResponse.json({
        totalSolved: 0,
        easy: 0,
        medium: 0,
        hard: 0,
        ranking: null,
        error: 'User not found'
      })
    }

    const stats = user.submitStats.acSubmissionNum
    const totalSolved = stats.reduce((sum: number, stat: any) => sum + stat.count, 0)
    
    return NextResponse.json({
      totalSolved,
      easy: stats.find((s: any) => s.difficulty === 'Easy')?.count || 0,
      medium: stats.find((s: any) => s.difficulty === 'Medium')?.count || 0,
      hard: stats.find((s: any) => s.difficulty === 'Hard')?.count || 0,
      ranking: user.profile.ranking,
      username: user.username
    })

  } catch (error) {
    console.error('LeetCode API error:', error)
    return NextResponse.json({
      totalSolved: 0,
      easy: 0,
      medium: 0,
      hard: 0,
      ranking: null,
      error: 'Failed to fetch LeetCode data'
    })
  }
}
