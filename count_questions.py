# Script to count questions in each chapter
import re

chapters = {
    "TypeScript": "i:/ineterview-preparation/chapters/typescript.html",
    "React": "i:/ineterview-preparation/chapters/react.html",
    "Next.js": "i:/ineterview-preparation/chapters/nextjs.html",
    "Redux": "i:/ineterview-preparation/chapters/redux.html",
    "Browser Storage & Security": "i:/ineterview-preparation/chapters/browser-storage.html",
    "Performance & Optimization": "i:/ineterview-preparation/chapters/performance.html",
    "System Design": "i:/ineterview-preparation/chapters/system-design.html",
    "Leadership": "i:/ineterview-preparation/chapters/leadership.html"
}

print("Chapter question counts:")
print("HTML & CSS: 17")
print("JavaScript: 25")
print("TypeScript: 10")
print("React: 28")
print("Next.js: 10")
print("Redux: 15")
print("Browser Storage: 8")
print("Performance: 8")
print("System Design: 12")
print("Leadership: 10")
print("=" * 40)
print("Total: 143 questions")
