const fs = require('fs');
const path = require('path');

// Read the original file
const originalFile = fs.readFileSync('interview_preparation.html', 'utf8');

// Define chapter boundaries and metadata
const chapters = [
    {
        name: 'javascript',
        title: 'JavaScript',
        file: 'javascript.html',
        prev: 'html-css.html',
        next: 'typescript.html',
        startMarker: '<!-- JavaScript Section -->',
        endMarker: '<!-- TypeScript Section -->'
    },
    {
        name: 'typescript',
        title: 'TypeScript',
        file: 'typescript.html',
        prev: 'javascript.html',
        next: 'react.html',
        startMarker: '<!-- TypeScript Section -->',
        endMarker: '<!-- React Section -->'
    },
    {
        name: 'react',
        title: 'React',
        file: 'react.html',
        prev: 'typescript.html',
        next: 'nextjs.html',
        startMarker: '<!-- React Section -->',
        endMarker: '<!-- Next.js Section -->'
    },
    {
        name: 'nextjs',
        title: 'Next.js',
        file: 'nextjs.html',
        prev: 'react.html',
        next: 'redux.html',
        startMarker: '<section id="nextjs" class="chapter">',
        endMarker: '<!-- Redux Section -->'
    },
    {
        name: 'redux',
        title: 'Redux',
        file: 'redux.html',
        prev: 'nextjs.html',
        next: 'browser-storage.html',
        startMarker: '<!-- Redux Section -->',
        endMarker: '<!-- Browser Storage'
    },
    {
        name: 'browser-storage',
        title: 'Browser Storage & Security',
        file: 'browser-storage.html',
        prev: 'redux.html',
        next: 'performance.html',
        startMarker: '<!-- Browser Storage & Security Section -->',
        endMarker: '<!-- Performance'
    },
    {
        name: 'performance',
        title: 'Performance & Optimization',
        file: 'performance.html',
        prev: 'browser-storage.html',
        next: 'system-design.html',
        startMarker: '<!-- Performance & Optimization Section -->',
        endMarker: '<!-- System Design'
    },
    {
        name: 'system-design',
        title: 'System Design',
        file: 'system-design.html',
        prev: 'performance.html',
        next: 'leadership.html',
        startMarker: '<!-- System Design Section -->',
        endMarker: '<!-- Leadership'
    },
    {
        name: 'leadership',
        title: 'Leadership & Behavioral',
        file: 'leadership.html',
        prev: 'system-design.html',
        next: null,
        startMarker: '<!-- Leadership Section -->',
        endMarker: '</main>'
    }
];

// Template for chapter pages
function createChapterHTML(chapter, content) {
    const nextButton = chapter.next
        ? `<a href="${chapter.next}" class="nav-button">Next: ${chapters.find(c => c.file === chapter.next)?.title} →</a>`
        : '';

    const prevButton = chapter.prev
        ? `<a href="${chapter.prev}" class="nav-button">← Previous</a>`
        : '';

    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${chapter.title} - Interview Prep</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../styles/main.css">
</head>

<body>
    <!-- Chapter Navigation -->
    <nav class="chapter-nav">
        <a href="../index.html" class="chapter-nav-home">← Home</a>
        <h1 class="chapter-nav-title">${chapter.title}</h1>
        <div class="chapter-nav-controls">
            ${prevButton}
            ${nextButton}
        </div>
    </nav>

    <!-- Main Content -->
    <main class="main-content">
        ${content}
    </main>

    <!-- Back to Top Button -->
    <button class="back-to-top" onclick="scrollToTop()">↑</button>

    <script src="../scripts/main.js"></script>
</body>

</html>`;
}

// Extract and create each chapter
chapters.forEach(chapter => {
    const startIndex = originalFile.indexOf(chapter.startMarker);
    const endIndex = originalFile.indexOf(chapter.endMarker, startIndex);

    if (startIndex === -1 || endIndex === -1) {
        console.log(`Warning: Could not find markers for ${chapter.name}`);
        return;
    }

    const content = originalFile.substring(startIndex, endIndex);
    const html = createChapterHTML(chapter, content);

    const outputPath = path.join('chapters', chapter.file);
    fs.writeFileSync(outputPath, html, 'utf8');
    console.log(`Created: ${outputPath}`);
});

console.log('All chapters created successfully!');
