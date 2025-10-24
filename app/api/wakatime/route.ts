import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const apiKey = process.env.WAKATIME_API_KEY

    if (!apiKey) {
      return NextResponse.json({
        minutes: 0,
        error: 'WakaTime API key not configured'
      })
    }

    // Get today's coding time
    const today = new Date().toISOString().split('T')[0]
    const response = await fetch(`https://wakatime.com/api/v1/users/current/summaries?start=${today}&end=${today}`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'User-Agent': 'editorial-portfolio'
      },
      next: { revalidate: 300 } // Cache for 5 minutes
    })

    if (!response.ok) {
      throw new Error('Failed to fetch WakaTime data')
    }

    const data = await response.json()
    const todayData = data.data?.[0]

    if (!todayData) {
      return NextResponse.json({
        minutes: 0,
        languages: [],
        projects: []
      })
    }

    return NextResponse.json({
      minutes: Math.round(todayData.grand_total.total_seconds / 60),
      languages: todayData.languages?.slice(0, 3).map((lang: any) => ({
        name: lang.name,
        percent: lang.percent
      })) || [],
      projects: todayData.projects?.slice(0, 3).map((project: any) => ({
        name: project.name,
        percent: project.percent
      })) || []
    })

  } catch (error) {
    console.error('WakaTime API error:', error)
    return NextResponse.json({
      minutes: 0,
      error: 'Failed to fetch WakaTime data'
    })
  }
}
