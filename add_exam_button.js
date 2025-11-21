const fs = require('fs');

// Read the file
const content = fs.readFileSync('index.html', 'utf-8');

// Find and replace the single button with two buttons
const oldPattern = '<a href="#chapters" class="cta-button">Start Learning →</a>';
const newContent = `<div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <a href="#chapters" class="cta-button">Start Learning →</a>
                <a href="exam.html" class="cta-button" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);">📝 Take Exam</a>
            </div>`;

// Replace
const updatedContent = content.replace(oldPattern, newContent);

// Write back
fs.writeFileSync('index.html', updatedContent, 'utf-8');

console.log("✅ Successfully added 'Take Exam' button to index.html");
