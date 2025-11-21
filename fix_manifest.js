const fs = require('fs');

// Read the manifest file
const manifest = JSON.parse(fs.readFileSync('manifest.json', 'utf-8'));

// Update start_url and add scope
manifest.start_url = './';
manifest.scope = './';

// Write back with proper formatting
fs.writeFileSync('manifest.json', JSON.stringify(manifest, null, 4), 'utf-8');

console.log('✅ Updated manifest.json with scope and relative start_url');
