const fs = require('fs');

// Read the file
let content = fs.readFileSync('index.html', 'utf-8');

// Fix the duplicate div wrapper
content = content.replace(
    /<div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">\s*<div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">/g,
    '<div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">'
);

// Also need to remove one closing div
const lines = content.split('\n');
let divCount = 0;
let fixedLines = [];
let skipNextClosingDiv = false;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check if this is the duplicate div section
    if (line.includes('Take Exam')) {
        skipNextClosingDiv = true;
        fixedLines.push(line);
        continue;
    }

    if (skipNextClosingDiv && line.trim() === '</div>') {
        skipNextClosingDiv = false;
        fixedLines.push(line);
        // Skip the next closing div
        if (i + 1 < lines.length && lines[i + 1].trim() === '</div>') {
            i++; // Skip next line
        }
        continue;
    }

    fixedLines.push(line);
}

content = fixedLines.join('\n');

// Write back
fs.writeFileSync('index.html', content, 'utf-8');

console.log("✅ Fixed duplicate div wrapper in index.html");
