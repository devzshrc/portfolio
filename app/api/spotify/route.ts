import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Note: You'll need to set up Spotify API credentials in environment variables
    const clientId = process.env.SPOTIFY_CLIENT_ID
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
    const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN

    if (!clientId || !clientSecret || !refreshToken) {
      return NextResponse.json({
        isPlaying: false,
        track: null,
        lastPlayed: 'Set up Spotify API credentials'
      })
    }

    // Get access token
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken
      })
    })

    const tokenData = await tokenResponse.json()

    if (!tokenResponse.ok) {
      throw new Error('Failed to refresh Spotify token')
    }

    // Get currently playing track
    const currentResponse = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        'Authorization': `Bearer ${tokenData.access_token}`
      }
    })

    if (currentResponse.status === 204) {
      // Nothing currently playing, get recently played
      const recentResponse = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
        headers: {
          'Authorization': `Bearer ${tokenData.access_token}`
        }
      })

      const recentData = await recentResponse.json()
      const lastTrack = recentData.items?.[0]

      return NextResponse.json({
        isPlaying: false,
        track: null,
        lastPlayed: lastTrack ? {
          name: lastTrack.track.name,
          artist: lastTrack.track.artists[0].name,
          playedAt: lastTrack.played_at
        } : null
      })
    }

    const currentData = await currentResponse.json()

    return NextResponse.json({
      isPlaying: currentData.is_playing,
      track: currentData.item ? {
        name: currentData.item.name,
        artist: currentData.item.artists[0].name,
        album: currentData.item.album.name,
        image: currentData.item.album.images[0]?.url,
        external_url: currentData.item.external_urls.spotify
      } : null,
      lastPlayed: null
    })

  } catch (error) {
    console.error('Spotify API error:', error)
    return NextResponse.json({
      isPlaying: false,
      track: null,
      lastPlayed: 'Error fetching Spotify data'
    })
  }
}
