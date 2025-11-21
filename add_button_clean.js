const fs = require('fs');

// Read the file
const content = fs.readFileSync('index.html', 'utf-8');

// Define the exact old content to replace
const oldContent = '            <a href="#chapters" class="cta-button">Start Learning →</a>\r\n        </div>';

// Define the new content with both buttons
const newContent = `            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <a href="#chapters" class="cta-button">Start Learning →</a>
                <a href="exam.html" class="cta-button" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);">📝 Take Exam</a>
            </div>
        </div>`;

// Check if the replacement already exists
if (content.includes('Take Exam')) {
    console.log('⚠️  "Take Exam" button already exists in index.html');
    process.exit(0);
}

// Replace
const updatedContent = content.replace(oldContent, newContent);

// Verify the replacement worked
if (updatedContent === content) {
    console.log('❌ Failed to find the target content to replace');
    console.log('Looking for:', oldContent.substring(0, 50) + '...');
    process.exit(1);
}

// Write back
fs.writeFileSync('index.html', updatedContent, 'utf-8');

console.log("✅ Successfully added 'Take Exam' button to index.html");
