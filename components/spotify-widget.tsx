'use client'

import { useEffect, useState } from 'react'
import { Music, Clock } from 'lucide-react'

interface SpotifyTrack {
  name: string
  artist: string
  album?: string
  image?: string
  external_url?: string
}

interface SpotifyData {
  isPlaying: boolean
  track: SpotifyTrack | null
  lastPlayed: SpotifyTrack | string | null
}

export function SpotifyWidget() {
  const [data, setData] = useState<SpotifyData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSpotifyData = () => {
      fetch('/api/spotify')
        .then(res => res.json())
        .then(data => {
          setData(data)
          setLoading(false)
        })
        .catch(err => {
          console.error('Failed to fetch Spotify data:', err)
          setLoading(false)
        })
    }

    fetchSpotifyData()
    // Refresh every 30 seconds
    const interval = setInterval(fetchSpotifyData, 30000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="geometric-card">
        <div className="flex items-center gap-2 mb-2">
          <Music className="w-4 h-4" />
          <h3 className="text-xl font-bold">Spotify</h3>
        </div>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-3 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="geometric-card">
        <div className="flex items-center gap-2 mb-2">
          <Music className="w-4 h-4" />
          <h3 className="text-xl font-bold">Spotify</h3>
        </div>
        <p className="text-muted text-sm">Unable to connect to Spotify</p>
      </div>
    )
  }

  return (
    <div className="geometric-card">
      <div className="flex items-center gap-2 mb-3">
        <Music className="w-4 h-4" />
        <h3 className="text-xl font-bold">Spotify</h3>
        {data.isPlaying && (
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-green-500 animate-pulse"></div>
            <div className="w-1 h-3 bg-green-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1 h-3 bg-green-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        )}
      </div>

      {data.isPlaying && data.track ? (
        <div>
          <div className="text-sm text-green-600 mb-2 flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Currently listening to
          </div>
          <div className="font-mono text-sm mb-1">{data.track.name}</div>
          <div className="text-muted text-xs">by {data.track.artist}</div>
          {data.track.external_url && (
            <a 
              href={data.track.external_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-muted hover:text-foreground transition-colors mt-2 inline-block border-b border-dotted"
            >
              Open in Spotify →
            </a>
          )}
        </div>
      ) : (
        <div>
          <div className="text-sm text-muted mb-2 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            Not currently listening
          </div>
          {data.lastPlayed && typeof data.lastPlayed === 'object' ? (
            <div>
              <div className="text-xs text-muted mb-1">Last played:</div>
              <div className="font-mono text-sm mb-1">{data.lastPlayed.name}</div>
              <div className="text-muted text-xs">by {data.lastPlayed.artist}</div>
            </div>
          ) : (
            <div className="text-xs text-muted">
              {typeof data.lastPlayed === 'string' ? data.lastPlayed : 'No recent activity'}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
