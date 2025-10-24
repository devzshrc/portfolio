const CLIENT_ID = '0b241966bb514bfe9af27a693bda30b7';
const CLIENT_SECRET = '7b0bded8db6b4409b827cb76871c5623';
const REDIRECT_URI = 'http://localhost:3000/callback';

console.log('🎵 Spotify Refresh Token Setup\n');

console.log('⚠️  FIRST: Make sure you\'ve added the redirect URI to your Spotify app:');
console.log('1. Go to https://developer.spotify.com/dashboard');
console.log('2. Click on your app');
console.log('3. Click "Edit Settings"');
console.log('4. Add this Redirect URI: http://localhost:3000/callback');
console.log('5. Click "Save"\n');

console.log('Step 1: Open this URL in your browser:');
console.log(`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=user-read-currently-playing`);

console.log('\nStep 2: After authorization, you\'ll be redirected to:');
console.log('http://localhost:3000/callback?code=SOME_LONG_CODE');

console.log('\nStep 3: Copy the code parameter and run this curl command:');
console.log(`curl -H "Authorization: Basic $(echo -n '${CLIENT_ID}:${CLIENT_SECRET}' | base64)" \\`);
console.log('     -d grant_type=authorization_code \\');
console.log('     -d code=YOUR_CODE_HERE \\');
console.log(`     -d redirect_uri=${REDIRECT_URI} \\`);
console.log('     https://accounts.spotify.com/api/token');

console.log('\nStep 4: Copy the refresh_token from the response and add to your .env file:');
console.log(`SPOTIFY_CLIENT_ID=${CLIENT_ID}`);
console.log(`SPOTIFY_CLIENT_SECRET=${CLIENT_SECRET}`);
console.log('SPOTIFY_REFRESH_TOKEN=your_refresh_token_here');
