# API Integrations Setup

This portfolio includes live integrations with GitHub, Spotify, WakaTime, and LeetCode. Here's how to set them up:

## GitHub Integration ✅
- **Status**: Works out of the box
- **Username**: `devzshrc` (hardcoded in `/app/api/github/route.ts`)
- **Features**: Contribution heatmap, repository count, followers
- **Rate Limit**: 60 requests/hour (unauthenticated)

## LeetCode Integration ✅
- **Status**: Works out of the box
- **Username**: `de5ash1zh` (hardcoded in `/app/api/leetcode/route.ts`)
- **Features**: Problems solved by difficulty, ranking
- **Note**: Uses unofficial GraphQL API

## Spotify Integration 🔧
- **Status**: Requires setup
- **Setup Steps**:
  1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
  2. Create a new app
  3. Get Client ID and Client Secret
  4. Set redirect URI to `http://localhost:3000/callback` (for development)
  5. Get refresh token using OAuth flow
  6. Add to `.env.local`:
     ```
     SPOTIFY_CLIENT_ID=your_client_id
     SPOTIFY_CLIENT_SECRET=your_client_secret  
     SPOTIFY_REFRESH_TOKEN=your_refresh_token
     ```

## WakaTime Integration 🔧
- **Status**: Requires setup
- **Setup Steps**:
  1. Go to [WakaTime API Key page](https://wakatime.com/api-key)
  2. Copy your API key
  3. Add to `.env.local`:
     ```
     WAKATIME_API_KEY=your_api_key
     ```

## Environment Variables

Copy `env.example` to `.env.local` and fill in your API keys:

```bash
cp env.example .env.local
```

## Features

### GitHub Heatmap
- Shows contribution activity for the past year
- Displays repository count, followers, and total contributions
- Updates every hour

### Spotify Widget
- Shows currently playing track with live indicator
- Falls back to last played track when not listening
- Updates every 30 seconds
- Links to Spotify for current track

### WakaTime Widget  
- Shows coding time for today
- Displays top languages and projects
- Updates every 5 minutes

### LeetCode Widget
- Shows total problems solved
- Breaks down by difficulty (Easy/Medium/Hard)
- Shows global ranking if available
- Updates every hour

## Styling

All widgets use the same geometric design language as the rest of the portfolio:
- Consistent border styling with corner markers
- Monospace font for data display
- Subtle animations and loading states
- Responsive grid layout

## Troubleshooting

If widgets show "Unable to connect" or error messages:

1. **Check API keys** in `.env.local`
2. **Verify usernames** in API route files
3. **Check browser console** for detailed error messages
4. **Rate limits**: GitHub (60/hour), LeetCode (varies)

## Customization

To change usernames:
- **GitHub**: Edit `/app/api/github/route.ts` line 6
- **LeetCode**: Edit `/app/api/leetcode/route.ts` line 6
