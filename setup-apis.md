# 🚀 API Setup Guide

## Quick Setup Commands

### 1. Run Spotify Setup Helper
```bash
node scripts/spotify-setup.js
```

### 2. Manual Setup Steps

## 🎵 Spotify API Setup

### Step 1: Create Spotify App
1. Go to https://developer.spotify.com/dashboard
2. Click "Create App"
3. Fill in:
   - **App Name**: Editorial Portfolio
   - **App Description**: Personal portfolio integration  
   - **Redirect URI**: `http://localhost:3000/callback`
4. Save Client ID and Client Secret

### Step 2: Get Authorization Code
Visit this URL (replace YOUR_CLIENT_ID):
```
https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=http://localhost:3000/callback&scope=user-read-currently-playing%20user-read-recently-played%20user-top-read
```

### Step 3: Get Refresh Token
Use the authorization code from step 2:
```bash
curl -H "Authorization: Basic $(echo -n 'CLIENT_ID:CLIENT_SECRET' | base64)" \
     -d grant_type=authorization_code \
     -d code=AUTHORIZATION_CODE \
     -d redirect_uri=http://localhost:3000/callback \
     https://accounts.spotify.com/api/token
```

## ⏱️ WakaTime API Setup

### Step 1: Get API Key
1. Go to https://wakatime.com/api-key
2. Sign in to your account
3. Copy your API key

### Step 2: Install WakaTime Plugin
Install WakaTime plugin in your code editor:
- **VS Code**: Search "WakaTime" in extensions
- **Other editors**: https://wakatime.com/plugins

## 📝 Environment Variables

Create `.env.local` file in project root:

```bash
# WakaTime API Configuration
WAKATIME_API_KEY=waka_your-api-key-here

# Spotify API Configuration  
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
SPOTIFY_REFRESH_TOKEN=your_refresh_token
```

## 🔄 Restart Development Server

After adding environment variables:
```bash
npm run dev
```

## 🐛 Troubleshooting

### WakaTime Not Working
- ✅ Check API key is correct
- ✅ Ensure WakaTime plugin is installed in your editor
- ✅ Verify you have coding activity today
- ✅ Check browser console for errors

### Spotify Not Working  
- ✅ Verify all 3 environment variables are set
- ✅ Check redirect URI matches exactly
- ✅ Ensure scopes include required permissions
- ✅ Try refreshing the page

### Still Having Issues?
Check the browser console (F12) for detailed error messages.
