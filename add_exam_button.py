import re

# Read the file
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find and replace the single button with two buttons
old_pattern = r'<a href="#chapters" class="cta-button">Start Learning →</a>'
new_content = '''<div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <a href="#chapters" class="cta-button">Start Learning →</a>
                <a href="exam.html" class="cta-button" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);">📝 Take Exam</a>
            </div>'''

# Replace
content = content.replace(old_pattern, new_content)

# Write back
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Successfully added 'Take Exam' button to index.html")
