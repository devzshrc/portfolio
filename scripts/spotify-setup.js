#!/usr/bin/env node

/**
 * Spotify API Setup Helper
 * Run this script to get your Spotify refresh token
 */

const readline = require('readline');
const https = require('https');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function getSpotifyRefreshToken() {
  console.log('🎵 Spotify API Setup Helper\n');
  
  const clientId = await question('Enter your Spotify Client ID: ');
  const clientSecret = await question('Enter your Spotify Client Secret: ');
  
  console.log('\n📋 Steps to get authorization code:');
  console.log('1. Open this URL in your browser:');
  console.log(`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=http://localhost:3000/callback&scope=user-read-currently-playing%20user-read-recently-played%20user-top-read`);
  console.log('\n2. After authorization, you\'ll be redirected to a URL like:');
  console.log('http://localhost:3000/callback?code=AUTHORIZATION_CODE');
  console.log('\n3. Copy the "code" parameter from that URL\n');
  
  const authCode = await question('Enter the authorization code: ');
  
  // Exchange code for refresh token
  const postData = new URLSearchParams({
    grant_type: 'authorization_code',
    code: authCode,
    redirect_uri: 'http://localhost:3000/callback'
  }).toString();
  
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  
  const options = {
    hostname: 'accounts.spotify.com',
    path: '/api/token',
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': postData.length
    }
  };
  
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.refresh_token) {
            console.log('\n✅ Success! Add these to your .env.local file:');
            console.log(`SPOTIFY_CLIENT_ID=${clientId}`);
            console.log(`SPOTIFY_CLIENT_SECRET=${clientSecret}`);
            console.log(`SPOTIFY_REFRESH_TOKEN=${response.refresh_token}`);
          } else {
            console.log('\n❌ Error:', response);
          }
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    });
    
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

getSpotifyRefreshToken()
  .then(() => rl.close())
  .catch(error => {
    console.error('Error:', error);
    rl.close();
  });
