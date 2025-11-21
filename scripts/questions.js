// Question Bank - All 143 Interview Questions in MCQ Format
const questionBank = [
    // ==================== HTML & CSS Questions (17) ====================
    {
        id: 1,
        chapter: "HTML & CSS",
        difficulty: "basic",
        question: "What is Semantic HTML?",
        options: [
            "Using HTML tags that describe their meaning (e.g., <header>, <article>)",
            "HTML written in alphabetical order",
            "HTML that is compressed for faster loading",
            "HTML that uses only div and span tags"
        ],
        correctAnswer: 0,
        explanation: "Semantic HTML uses tags that describe their meaning, improving accessibility, SEO, and code readability. Examples include <nav>, <main>, <footer>, <section>, <article>."
    },
    {
        id: 2,
        chapter: "HTML & CSS",
        difficulty: "basic",
        question: "What does the CSS Box Model consist of (from inside out)?",
        options: [
            "Content → Padding → Border → Margin",
            "Margin → Border → Padding → Content",
            "Content → Border → Padding → Margin",
            "Padding → Content → Border → Margin"
        ],
        correctAnswer: 0,
        explanation: "The box model layers are: Content (innermost), Padding, Border, and Margin (outermost). Use box-sizing: border-box to include padding and border in width/height calculations."
    },
    {
        id: 3,
        chapter: "HTML & CSS",
        difficulty: "intermediate",
        question: "When should you use Flexbox vs CSS Grid?",
        options: [
            "Flexbox for one-dimensional layouts, Grid for two-dimensional layouts",
            "Flexbox for grids, Grid for flexible layouts",
            "Always use Grid, Flexbox is deprecated",
            "Flexbox for mobile, Grid for desktop"
        ],
        correctAnswer: 0,
        explanation: "Flexbox is designed for one-dimensional layouts (row OR column), while Grid handles two-dimensional layouts (rows AND columns)."
    },
    {
        id: 4,
        chapter: "HTML & CSS",
        difficulty: "intermediate",
        question: "What is the difference between position: absolute and position: fixed?",
        options: [
            "Absolute positions relative to nearest positioned ancestor, Fixed positions relative to viewport",
            "They are the same",
            "Absolute is for mobile, Fixed is for desktop",
            "Fixed positions relative to parent, Absolute positions relative to viewport"
        ],
        correctAnswer: 0,
        explanation: "Absolute positions relative to the nearest positioned ancestor, while Fixed positions relative to the viewport and stays in place when scrolling."
    },
    {
        id: 5,
        chapter: "HTML & CSS",
        difficulty: "intermediate",
        question: "In CSS specificity, which selector has the highest priority?",
        options: [
            "Inline styles (style=\"...\")",
            "ID selectors (#id)",
            "Class selectors (.class)",
            "Element selectors (div)"
        ],
        correctAnswer: 0,
        explanation: "Specificity hierarchy: Inline styles > IDs > Classes/Attributes/Pseudo-classes > Elements/Pseudo-elements. !important overrides everything but should be used sparingly."
    },
    {
        id: 6,
        chapter: "HTML & CSS",
        difficulty: "basic",
        question: "What's the difference between pseudo-classes and pseudo-elements?",
        options: [
            "Pseudo-classes select elements in a state (:hover), pseudo-elements style parts of elements (::before)",
            "They are the same thing",
            "Pseudo-classes use double colon, pseudo-elements use single colon",
            "Pseudo-classes are deprecated"
        ],
        correctAnswer: 0,
        explanation: "Pseudo-classes (single colon) select elements in specific states like :hover, :focus. Pseudo-elements (double colon) style specific parts of elements like ::before, ::after."
    },
    {
        id: 7,
        chapter: "HTML & CSS",
        difficulty: "intermediate",
        question: "What's the main difference between CSS Transitions and Animations?",
        options: [
            "Transitions are for simple state changes, Animations are for multi-step sequences",
            "Transitions are faster than Animations",
            "Animations are deprecated",
            "They are exactly the same"
        ],
        correctAnswer: 0,
        explanation: "Transitions smoothly change from one state to another (e.g., hover). Animations use keyframes for complex, multi-step effects with more control."
    },
    {
        id: 8,
        chapter: "HTML & CSS",
        difficulty: "advanced",
        question: "What is the Critical Rendering Path?",
        options: [
            "The sequence of steps the browser takes to convert HTML, CSS, and JS into pixels on screen",
            "The fastest route for CSS to load",
            "A JavaScript optimization technique",
            "The path users take through a website"
        ],
        correctAnswer: 0,
        explanation: "The CRP includes: DOM Construction → CSSOM Construction → Render Tree → Layout → Paint → Composite. Optimizing this is key to improving web performance."
    },
    {
        id: 9,
        chapter: "HTML & CSS",
        difficulty: "intermediate",
        question: "What does BEM stand for in CSS naming convention?",
        options: [
            "Block, Element, Modifier",
            "Base, Extension, Module",
            "Browser, Element, Model",
            "Best, Efficient, Method"
        ],
        correctAnswer: 0,
        explanation: "BEM (Block, Element, Modifier) is a naming convention that makes CSS more maintainable and prevents style conflicts. Example: .btn, .btn__icon, .btn--primary."
    },
    {
        id: 10,
        chapter: "HTML & CSS",
        difficulty: "advanced",
        question: "How does z-index and Stacking Context work?",
        options: [
            "A child's z-index is limited by its parent's stacking context",
            "Higher z-index always wins regardless of parent",
            "z-index works without position property",
            "z-index only works on absolute positioned elements"
        ],
        correctAnswer: 0,
        explanation: "A child with z-index: 999 can still be behind a neighbor with z-index: 1 if the child's parent has a lower z-index. The child cannot escape its parent's stacking level."
    },
    {
        id: 11,
        chapter: "HTML & CSS",
        difficulty: "intermediate",
        question: "What are CSS Custom Properties (Variables)?",
        options: [
            "Variables defined with --name and used with var(--name), can be updated by JavaScript",
            "Variables that only work in SASS",
            "Deprecated CSS feature",
            "Variables that cannot be changed at runtime"
        ],
        correctAnswer: 0,
        explanation: "CSS Custom Properties can be defined with --name and used with var(--name). Unlike SASS variables, they can be updated by JavaScript at runtime, perfect for theming."
    },
    {
        id: 12,
        chapter: "HTML & CSS",
        difficulty: "advanced",
        question: "When should you use ARIA roles?",
        options: [
            "Only for custom widgets when native HTML tags don't exist",
            "Always, for every element",
            "Never, they are deprecated",
            "Only for images"
        ],
        correctAnswer: 0,
        explanation: "Rule #1: Don't use ARIA if a native HTML tag works. Use ARIA only for complex custom widgets like modals or custom dropdowns that don't have built-in HTML equivalents."
    },
    {
        id: 13,
        chapter: "HTML & CSS",
        difficulty: "advanced",
        question: "What's a major disadvantage of CSS-in-JS?",
        options: [
            "Slower performance due to runtime parsing and larger JS bundle",
            "Cannot use JavaScript variables",
            "Not supported in modern browsers",
            "Requires a CSS preprocessor"
        ],
        correctAnswer: 0,
        explanation: "CSS-in-JS adds runtime overhead and increases bundle size. However, it solves global namespace issues and enables dynamic styling based on props."
    },
    {
        id: 14,
        chapter: "HTML & CSS",
        difficulty: "basic",
        question: "What's the difference between display: none and visibility: hidden?",
        options: [
            "display: none removes element completely, visibility: hidden keeps space but hides element",
            "They do exactly the same thing",
            "visibility: hidden removes element, display: none keeps space",
            "display: none is faster"
        ],
        correctAnswer: 0,
        explanation: "display: none removes the element from layout (causes reflow), while visibility: hidden just makes it invisible but keeps its space in the layout."
    },
    {
        id: 15,
        chapter: "HTML & CSS",
        difficulty: "intermediate",
        question: "Why is Tailwind CSS popular?",
        options: [
            "Utility-first approach speeds up development without switching between HTML and CSS files",
            "It's the only CSS framework available",
            "It automatically generates JavaScript",
            "It replaces HTML"
        ],
        correctAnswer: 0,
        explanation: "Tailwind uses utility classes (like flex, p-4, text-red-500) directly in HTML, eliminating the need to invent class names or switch between files."
    },
    {
        id: 16,
        chapter: "HTML & CSS",
        difficulty: "advanced",
        question: "What are CSS Container Queries?",
        options: [
            "Queries that check the size of the parent container, not the viewport",
            "Queries for database containers",
            "Same as media queries",
            "Queries that only work in Chrome"
        ],
        correctAnswer: 0,
        explanation: "Container Queries allow components to respond to their parent container's size, making them truly reusable regardless of screen size."
    },
    {
        id: 17,
        chapter: "HTML & CSS",
        difficulty: "intermediate",
        question: "What CSS property would you use to make an element stick to the top when scrolling?",
        options: [
            "position: sticky",
            "position: fixed",
            "position: absolute",
            "position: relative"
        ],
        correctAnswer: 0,
        explanation: "position: sticky toggles between relative and fixed positioning based on scroll position, perfect for sticky headers."
    },

    // ==================== JavaScript Questions (25) ====================
    {
        id: 18,
        chapter: "JavaScript",
        difficulty: "intermediate",
        question: "What is a closure in JavaScript?",
        options: [
            "A function that has access to variables from its outer scope even after the outer function has returned",
            "A function that is closed and cannot be called",
            "A way to close browser windows",
            "A deprecated JavaScript feature"
        ],
        correctAnswer: 0,
        explanation: "Closures allow functions to 'remember' their lexical scope even when executed outside that scope. They're created when a function is defined inside another function."
    },
    {
        id: 19,
        chapter: "JavaScript",
        difficulty: "intermediate",
        question: "What is the Event Loop in JavaScript?",
        options: [
            "A mechanism that handles asynchronous operations by managing the call stack and callback queue",
            "A loop that runs events in sequence",
            "A deprecated feature",
            "A way to create infinite loops"
        ],
        correctAnswer: 0,
        explanation: "The Event Loop continuously checks if the call stack is empty, and if so, moves callbacks from the queue to the stack for execution, enabling non-blocking async operations."
    },
    {
        id: 20,
        chapter: "JavaScript",
        difficulty: "intermediate",
        question: "What does 'hoisting' mean in JavaScript?",
        options: [
            "Variable and function declarations are moved to the top of their scope during compilation",
            "Variables are lifted to global scope",
            "Functions are executed before variables",
            "A way to optimize code performance"
        ],
        correctAnswer: 0,
        explanation: "Hoisting moves declarations (not initializations) to the top. var is hoisted and initialized with undefined, let/const are hoisted but not initialized (temporal dead zone)."
    },
    {
        id: 21,
        chapter: "JavaScript",
        difficulty: "advanced",
        question: "How does the 'this' keyword work in JavaScript?",
        options: [
            "It refers to the object that is executing the current function, determined by how the function is called",
            "It always refers to the global object",
            "It always refers to the function itself",
            "It's a reserved keyword with no function"
        ],
        correctAnswer: 0,
        explanation: "'this' is determined by the call-site. In methods it's the object, in regular functions it's global/undefined (strict mode), in arrow functions it's lexically inherited."
    },
    {
        id: 22,
        chapter: "JavaScript",
        difficulty: "advanced",
        question: "What is Prototypal Inheritance?",
        options: [
            "Objects inherit properties from a prototype object through the prototype chain",
            "Classes inherit from other classes",
            "Functions inherit from objects",
            "A way to copy objects"
        ],
        correctAnswer: 0,
        explanation: "Every object has an internal [[Prototype]] link. When accessing a property, JS checks the object first, then its prototype chain. ES6 classes are syntactic sugar over this."
    },
    {
        id: 23,
        chapter: "JavaScript",
        difficulty: "basic",
        question: "What's the difference between == and ===?",
        options: [
            "== performs type coercion, === compares both value and type without coercion",
            "They are exactly the same",
            "=== is faster",
            "== is deprecated"
        ],
        correctAnswer: 0,
        explanation: "Always use === to avoid unexpected bugs. Example: 5 == '5' is true, but 5 === '5' is false."
    },
    {
        id: 24,
        chapter: "JavaScript",
        difficulty: "basic",
        question: "What's the difference between var, let, and const?",
        options: [
            "var is function-scoped, let and const are block-scoped; const cannot be reassigned",
            "They are all the same",
            "var is the newest",
            "let and const are deprecated"
        ],
        correctAnswer: 0,
        explanation: "var is function-scoped and hoisted. let and const are block-scoped. const prevents reassignment but doesn't make objects immutable."
    },
    {
        id: 25,
        chapter: "JavaScript",
        difficulty: "intermediate",
        question: "What do map(), filter(), and reduce() do?",
        options: [
            "map transforms, filter selects, reduce accumulates",
            "They all do the same thing",
            "They are deprecated",
            "They only work on objects"
        ],
        correctAnswer: 0,
        explanation: "map returns new array with transformed elements, filter returns elements passing a test, reduce accumulates array into single value."
    },
    {
        id: 26,
        chapter: "JavaScript",
        difficulty: "intermediate",
        question: "What is Event Bubbling?",
        options: [
            "Events propagate from the target element up through its ancestors to the window",
            "Events move down from window to target",
            "Events happen in random order",
            "A deprecated event model"
        ],
        correctAnswer: 0,
        explanation: "Event phases: Capturing (down) → Target → Bubbling (up). By default, listeners trigger in bubbling phase. Use event.stopPropagation() to prevent bubbling."
    },
    {
        id: 27,
        chapter: "JavaScript",
        difficulty: "advanced",
        question: "What's the difference between Debounce and Throttle?",
        options: [
            "Debounce waits until user stops, Throttle limits execution to once per time period",
            "They are the same",
            "Debounce is faster",
            "Throttle is deprecated"
        ],
        correctAnswer: 0,
        explanation: "Debounce delays execution until after a pause (e.g., search as you type). Throttle ensures execution at most once per interval (e.g., scroll events)."
    },
    {
        id: 28,
        chapter: "JavaScript",
        difficulty: "intermediate",
        question: "What's the difference between Shallow and Deep Copy?",
        options: [
            "Shallow copies top-level properties, Deep copies everything including nested objects",
            "They are the same",
            "Shallow is always better",
            "Deep copy is deprecated"
        ],
        correctAnswer: 0,
        explanation: "Shallow: {...obj} or Object.assign(). Deep: structuredClone() or JSON.parse(JSON.stringify()) (has limitations with functions)."
    },
    {
        id: 29,
        chapter: "JavaScript",
        difficulty: "advanced",
        question: "What is Currying?",
        options: [
            "Converting a function with multiple arguments into a sequence of functions with single arguments",
            "A way to curry favor with the compiler",
            "A deprecated pattern",
            "A type of loop"
        ],
        correctAnswer: 0,
        explanation: "Currying enables partial application and creates reusable function factories. Example: add(a)(b) instead of add(a, b)."
    },
    {
        id: 30,
        chapter: "JavaScript",
        difficulty: "advanced",
        question: "What are Generators?",
        options: [
            "Functions that can be paused and resumed using yield",
            "Functions that generate random numbers",
            "A deprecated feature",
            "Functions that run automatically"
        ],
        correctAnswer: 0,
        explanation: "Declared with function*, generators return an iterator. Call .next() to execute until the next yield statement."
    },
    {
        id: 31,
        chapter: "JavaScript",
        difficulty: "advanced",
        question: "What causes Memory Leaks in JavaScript?",
        options: [
            "Global variables, uncleaned event listeners, uncleared timers, and closures holding large scopes",
            "Using too many variables",
            "Writing long functions",
            "Using const instead of let"
        ],
        correctAnswer: 0,
        explanation: "Common causes: accidental globals, forgotten event listeners (especially in SPAs), uncleared setInterval, and closures retaining unnecessary references."
    },
    {
        id: 32,
        chapter: "JavaScript",
        difficulty: "advanced",
        question: "What are Service Workers?",
        options: [
            "Scripts that run in background, enabling offline support, push notifications, and background sync",
            "Workers that service HTTP requests",
            "A deprecated API",
            "Server-side JavaScript"
        ],
        correctAnswer: 0,
        explanation: "Service Workers act as a proxy between web app and network, intercepting requests to serve cached responses for PWA offline functionality."
    },
    {
        id: 33,
        chapter: "JavaScript",
        difficulty: "advanced",
        question: "What are Web Workers?",
        options: [
            "Scripts that run on separate threads to avoid blocking the main UI thread",
            "Workers on the web",
            "Same as Service Workers",
            "A deprecated API"
        ],
        correctAnswer: 0,
        explanation: "Web Workers enable multi-threading for heavy computations (image processing, data sorting) without freezing the interface."
    },
    {
        id: 34,
        chapter: "JavaScript",
        difficulty: "basic",
        question: "What does 'use strict' do?",
        options: [
            "Enforces stricter parsing and error handling to prevent common mistakes",
            "Makes code run faster",
            "Is required in all modern JavaScript",
            "Is deprecated"
        ],
        correctAnswer: 0,
        explanation: "Strict mode prevents using undeclared variables, duplicate parameters, and reserved keywords. It's automatically enabled in ES6 modules."
    },
    {
        id: 35,
        chapter: "JavaScript",
        difficulty: "intermediate",
        question: "What's the difference between null and undefined?",
        options: [
            "undefined means declared but not assigned, null is an intentional absence of value",
            "They are exactly the same",
            "null is deprecated",
            "undefined is for numbers, null is for strings"
        ],
        correctAnswer: 0,
        explanation: "undefined is the default for uninitialized variables. null is an assignment value meaning 'no value'. typeof null is 'object' (historical bug)."
    },
    {
        id: 36,
        chapter: "JavaScript",
        difficulty: "intermediate",
        question: "What's the difference between LocalStorage and SessionStorage?",
        options: [
            "LocalStorage persists after browser close, SessionStorage only lasts for the session",
            "They are the same",
            "SessionStorage is larger",
            "LocalStorage is deprecated"
        ],
        correctAnswer: 0,
        explanation: "LocalStorage persists indefinitely (~5-10MB). SessionStorage clears when tab closes (~5MB). Cookies are sent with requests (~4KB)."
    },
    {
        id: 37,
        chapter: "JavaScript",
        difficulty: "basic",
        question: "How do you select elements in the DOM?",
        options: [
            "getElementById(), querySelector(), querySelectorAll()",
            "selectElement(), findElement()",
            "getElement(), findAll()",
            "DOM selection is deprecated"
        ],
        correctAnswer: 0,
        explanation: "getElementById is fastest for single elements. querySelector uses CSS selectors for first match. querySelectorAll returns NodeList of all matches."
    },
    {
        id: 38,
        chapter: "JavaScript",
        difficulty: "intermediate",
        question: "What's the difference between CommonJS and ES Modules?",
        options: [
            "CommonJS uses require (Node.js), ES Modules use import (web standard)",
            "They are the same",
            "CommonJS is newer",
            "ES Modules are deprecated"
        ],
        correctAnswer: 0,
        explanation: "ES Modules are statically analyzable (enabling tree shaking) and asynchronous. CommonJS is dynamic and synchronous."
    },
    {
        id: 39,
        chapter: "JavaScript",
        difficulty: "intermediate",
        question: "What are Promises used for?",
        options: [
            "Handling asynchronous operations with better error handling than callbacks",
            "Making promises to the compiler",
            "Synchronous operations only",
            "They are deprecated in favor of callbacks"
        ],
        correctAnswer: 0,
        explanation: "Promises represent eventual completion/failure of async operations. States: pending, fulfilled, rejected. Use .then()/.catch() or async/await."
    },
    {
        id: 40,
        chapter: "JavaScript",
        difficulty: "basic",
        question: "What are the key features introduced in ES6?",
        options: [
            "let/const, arrow functions, template literals, destructuring, classes, promises",
            "Only arrow functions",
            "Nothing significant",
            "ES6 was cancelled"
        ],
        correctAnswer: 0,
        explanation: "ES6 (2015) introduced: block scoping, arrow functions, template literals, destructuring, default parameters, spread/rest operators, classes, modules, promises."
    },
    {
        id: 41,
        chapter: "JavaScript",
        difficulty: "intermediate",
        question: "What is the Execution Context?",
        options: [
            "The environment where JavaScript code is evaluated and executed",
            "The context menu in browsers",
            "A deprecated concept",
            "The same as scope"
        ],
        correctAnswer: 0,
        explanation: "Execution context contains: variable environment, scope chain, and 'this' binding. Types: Global, Function, and Eval contexts."
    },
    {
        id: 42,
        chapter: "JavaScript",
        difficulty: "advanced",
        question: "What is the purpose of the Proxy object?",
        options: [
            "To intercept and customize operations on objects like property access, assignment, and function calls",
            "To create proxy servers",
            "To copy objects",
            "A deprecated feature"
        ],
        correctAnswer: 0,
        explanation: "Proxy allows you to define custom behavior for fundamental operations (get, set, has, etc.). Used in frameworks for reactivity systems."
    },

    // ==================== TypeScript Questions (10) ====================
    {
        id: 43,
        chapter: "TypeScript",
        difficulty: "basic",
        question: "What is TypeScript?",
        options: [
            "A superset of JavaScript that adds static typing",
            "A replacement for JavaScript",
            "A new programming language unrelated to JavaScript",
            "A JavaScript framework"
        ],
        correctAnswer: 0,
        explanation: "TypeScript is a superset of JavaScript that adds optional static typing, interfaces, and other features. It compiles to plain JavaScript."
    },
    {
        id: 44,
        chapter: "TypeScript",
        difficulty: "intermediate",
        question: "What's the difference between 'interface' and 'type' in TypeScript?",
        options: [
            "Interfaces can be extended and merged, types are more flexible with unions and intersections",
            "They are exactly the same",
            "Interfaces are deprecated",
            "Types cannot be used for objects"
        ],
        correctAnswer: 0,
        explanation: "Interfaces can be extended and declaration-merged. Types are more flexible for unions, intersections, and primitives. Both can describe object shapes."
    },
    {
        id: 45,
        chapter: "TypeScript",
        difficulty: "intermediate",
        question: "What is a Generic in TypeScript?",
        options: [
            "A way to create reusable components that work with multiple types",
            "A general-purpose function",
            "A deprecated feature",
            "A type that only works with arrays"
        ],
        correctAnswer: 0,
        explanation: "Generics allow you to write flexible, reusable code that works with multiple types while maintaining type safety. Example: Array<T>, Promise<T>."
    },
    {
        id: 46,
        chapter: "TypeScript",
        difficulty: "advanced",
        question: "What is a Union Type?",
        options: [
            "A type that can be one of several types (e.g., string | number)",
            "A type that combines multiple types into one",
            "A deprecated feature",
            "A type only for arrays"
        ],
        correctAnswer: 0,
        explanation: "Union types allow a value to be one of several types. Example: let value: string | number means value can be either a string or number."
    },
    {
        id: 47,
        chapter: "TypeScript",
        difficulty: "advanced",
        question: "What is Type Narrowing?",
        options: [
            "Refining a broad type to a more specific type using type guards",
            "Making types smaller in size",
            "A deprecated pattern",
            "Removing types from code"
        ],
        correctAnswer: 0,
        explanation: "Type narrowing uses type guards (typeof, instanceof, in operator) to refine types within conditional blocks, improving type safety."
    },
    {
        id: 48,
        chapter: "TypeScript",
        difficulty: "intermediate",
        question: "What is the 'any' type and when should you use it?",
        options: [
            "A type that disables type checking; use sparingly when type is truly unknown",
            "The best type to use everywhere",
            "A type for arrays only",
            "A deprecated type"
        ],
        correctAnswer: 0,
        explanation: "'any' opts out of type checking. Use it sparingly. Prefer 'unknown' for truly unknown types as it requires type checking before use."
    },
    {
        id: 49,
        chapter: "TypeScript",
        difficulty: "intermediate",
        question: "What is the purpose of the 'readonly' modifier?",
        options: [
            "To prevent properties from being modified after initialization",
            "To make properties private",
            "To improve performance",
            "To make properties optional"
        ],
        correctAnswer: 0,
        explanation: "'readonly' prevents reassignment of properties after initialization. It's compile-time only and doesn't affect runtime behavior."
    },
    {
        id: 50,
        chapter: "TypeScript",
        difficulty: "advanced",
        question: "What are Utility Types in TypeScript?",
        options: [
            "Built-in generic types like Partial, Pick, Omit, Record that transform types",
            "Types for utility functions only",
            "Deprecated types",
            "Types that only work with classes"
        ],
        correctAnswer: 0,
        explanation: "Utility types are built-in generics for common type transformations: Partial<T> (all optional), Pick<T, K> (select properties), Omit<T, K> (exclude properties), etc."
    },
    {
        id: 51,
        chapter: "TypeScript",
        difficulty: "basic",
        question: "What is the difference between 'null' and 'undefined' in TypeScript?",
        options: [
            "Both are distinct types; undefined means uninitialized, null means intentionally empty",
            "They are the same type",
            "null is deprecated",
            "undefined cannot be used in TypeScript"
        ],
        correctAnswer: 0,
        explanation: "TypeScript treats null and undefined as distinct types. Use strictNullChecks to catch potential null/undefined errors at compile time."
    },
    {
        id: 52,
        chapter: "TypeScript",
        difficulty: "advanced",
        question: "What is a Mapped Type?",
        options: [
            "A type that transforms properties of another type using a mapping function",
            "A type for Map data structures only",
            "A deprecated feature",
            "A type that only works with arrays"
        ],
        correctAnswer: 0,
        explanation: "Mapped types create new types by transforming properties of existing types. Example: type Readonly<T> = { readonly [P in keyof T]: T[P] }"
    },

    // Note: Due to length constraints, I'm providing a representative sample.
    // The full implementation would include all 143 questions.
    // For now, I'll add placeholders for remaining chapters to demonstrate the structure.

    // ==================== React Questions (28) ====================
    {
        id: 53,
        chapter: "React",
        difficulty: "basic",
        question: "What is React?",
        options: [
            "A JavaScript library for building user interfaces",
            "A programming language",
            "A database",
            "A CSS framework"
        ],
        correctAnswer: 0,
        explanation: "React is a declarative, component-based JavaScript library for building user interfaces, maintained by Meta (Facebook)."
    },
    {
        id: 54,
        chapter: "React",
        difficulty: "intermediate",
        question: "What is the Virtual DOM?",
        options: [
            "A lightweight copy of the real DOM that React uses to optimize updates",
            "A new browser API",
            "A deprecated feature",
            "The same as the real DOM"
        ],
        correctAnswer: 0,
        explanation: "The Virtual DOM is React's in-memory representation of the UI. React compares it with the previous version (diffing) and updates only what changed (reconciliation)."
    },
    {
        id: 55,
        chapter: "React",
        difficulty: "intermediate",
        question: "What is the purpose of useState hook?",
        options: [
            "To add state to functional components",
            "To fetch data from APIs",
            "To style components",
            "To handle routing"
        ],
        correctAnswer: 0,
        explanation: "useState is a Hook that lets you add state to functional components. It returns [state, setState] pair for reading and updating state."
    },
    {
        id: 56,
        chapter: "React",
        difficulty: "intermediate",
        question: "What is useEffect used for?",
        options: [
            "To perform side effects like data fetching, subscriptions, or DOM manipulation",
            "To create effects and animations",
            "To style components",
            "To manage routing"
        ],
        correctAnswer: 0,
        explanation: "useEffect runs after render and handles side effects. The dependency array controls when it runs. Return a cleanup function for subscriptions."
    },
    {
        id: 57,
        chapter: "React",
        difficulty: "advanced",
        question: "What is the difference between useMemo and useCallback?",
        options: [
            "useMemo memoizes values, useCallback memoizes functions",
            "They are exactly the same",
            "useMemo is deprecated",
            "useCallback is for styling"
        ],
        correctAnswer: 0,
        explanation: "useMemo memoizes computed values to avoid expensive recalculations. useCallback memoizes function references to prevent unnecessary re-renders of child components."
    },
    {
        id: 58,
        chapter: "React",
        difficulty: "intermediate",
        question: "What is prop drilling and how can you avoid it?",
        options: [
            "Passing props through multiple levels; avoid with Context API or state management",
            "A way to drill holes in components",
            "A performance optimization",
            "A deprecated pattern"
        ],
        correctAnswer: 0,
        explanation: "Prop drilling is passing props through intermediate components. Solutions: Context API, composition, or state management libraries like Redux/Zustand."
    },
    {
        id: 59,
        chapter: "React",
        difficulty: "advanced",
        question: "What is React.memo and when should you use it?",
        options: [
            "A higher-order component that prevents re-renders if props haven't changed",
            "A hook for memoization",
            "A deprecated feature",
            "A component for memory management"
        ],
        correctAnswer: 0,
        explanation: "React.memo is a HOC that memoizes components, preventing re-renders when props are the same (shallow comparison). Use for expensive components."
    },
    {
        id: 60,
        chapter: "React",
        difficulty: "intermediate",
        question: "What is the purpose of keys in React lists?",
        options: [
            "To help React identify which items changed, added, or removed for efficient updates",
            "To encrypt data",
            "To style list items",
            "To sort lists"
        ],
        correctAnswer: 0,
        explanation: "Keys help React identify elements in lists. Use stable, unique IDs (not array indices) to prevent bugs during reordering or filtering."
    },
    {
        id: 61,
        chapter: "React",
        difficulty: "advanced",
        question: "What is useReducer and when should you use it over useState?",
        options: [
            "A hook for complex state logic with multiple sub-values or when next state depends on previous",
            "A hook for reducing array size",
            "A deprecated hook",
            "A hook for API calls"
        ],
        correctAnswer: 0,
        explanation: "useReducer is preferable when state logic is complex, involves multiple sub-values, or when next state depends on previous state. Similar to Redux reducers."
    },
    {
        id: 62,
        chapter: "React",
        difficulty: "intermediate",
        question: "What is the Context API used for?",
        options: [
            "To share data across the component tree without passing props manually",
            "To create context menus",
            "To handle routing",
            "To fetch data"
        ],
        correctAnswer: 0,
        explanation: "Context provides a way to pass data through the component tree without prop drilling. Use for themes, user data, or global state."
    },
    {
        id: 63,
        chapter: "React",
        difficulty: "basic",
        question: "What is JSX?",
        options: [
            "A syntax extension that allows writing HTML-like code in JavaScript",
            "A new programming language",
            "A CSS preprocessor",
            "A database query language"
        ],
        correctAnswer: 0,
        explanation: "JSX is syntactic sugar for React.createElement(). It makes React code more readable by allowing HTML-like syntax in JavaScript."
    },
    {
        id: 64,
        chapter: "React",
        difficulty: "advanced",
        question: "What is the difference between controlled and uncontrolled components?",
        options: [
            "Controlled components have React-managed state, uncontrolled use DOM refs",
            "They are the same",
            "Controlled components are deprecated",
            "Uncontrolled components are always better"
        ],
        correctAnswer: 0,
        explanation: "Controlled components store form data in React state (single source of truth). Uncontrolled components store data in the DOM, accessed via refs."
    },
    {
        id: 65,
        chapter: "React",
        difficulty: "intermediate",
        question: "What is useRef used for?",
        options: [
            "To persist values across renders without causing re-renders, and to access DOM elements",
            "To create references in documentation",
            "To handle routing",
            "To fetch data"
        ],
        correctAnswer: 0,
        explanation: "useRef returns a mutable object that persists across renders. Use for DOM access, storing mutable values, or keeping previous values."
    },
    {
        id: 66,
        chapter: "React",
        difficulty: "advanced",
        question: "What is React Suspense?",
        options: [
            "A component that lets you wait for code/data to load before rendering",
            "A way to suspend animations",
            "A deprecated feature",
            "A state management tool"
        ],
        correctAnswer: 0,
        explanation: "Suspense lets components 'wait' for something before rendering, showing a fallback. Used with lazy loading and data fetching (React 18+)."
    },
    {
        id: 67,
        chapter: "React",
        difficulty: "intermediate",
        question: "What is the purpose of useLayoutEffect?",
        options: [
            "To run effects synchronously after DOM mutations but before browser paint",
            "To create layouts",
            "To style components",
            "Same as useEffect"
        ],
        correctAnswer: 0,
        explanation: "useLayoutEffect fires synchronously after DOM updates but before paint. Use for DOM measurements or preventing visual flicker. Prefer useEffect when possible."
    },
    {
        id: 68,
        chapter: "React",
        difficulty: "advanced",
        question: "What is React.lazy used for?",
        options: [
            "To dynamically import components for code splitting",
            "To make components load slowly",
            "To create lazy loading images",
            "A deprecated feature"
        ],
        correctAnswer: 0,
        explanation: "React.lazy enables code splitting by dynamically importing components. Use with Suspense to show fallback while loading."
    },
    {
        id: 69,
        chapter: "React",
        difficulty: "intermediate",
        question: "What is the difference between useEffect and useLayoutEffect?",
        options: [
            "useEffect runs asynchronously after paint, useLayoutEffect runs synchronously before paint",
            "They are exactly the same",
            "useLayoutEffect is deprecated",
            "useEffect is only for animations"
        ],
        correctAnswer: 0,
        explanation: "useEffect is asynchronous and doesn't block painting. useLayoutEffect is synchronous and blocks painting, useful for DOM measurements."
    },
    {
        id: 70,
        chapter: "React",
        difficulty: "basic",
        question: "What are React Fragments?",
        options: [
            "A way to group multiple elements without adding extra DOM nodes",
            "Broken components",
            "A deprecated feature",
            "A styling tool"
        ],
        correctAnswer: 0,
        explanation: "Fragments (<></> or <Fragment>) let you group children without adding extra DOM nodes. Useful for returning multiple elements."
    },
    {
        id: 71,
        chapter: "React",
        difficulty: "advanced",
        question: "What is the purpose of Error Boundaries?",
        options: [
            "To catch JavaScript errors in component tree and display fallback UI",
            "To create error messages",
            "To handle network errors",
            "A deprecated feature"
        ],
        correctAnswer: 0,
        explanation: "Error Boundaries are components that catch errors in their child component tree, log errors, and display fallback UI. Use componentDidCatch or static getDerivedStateFromError."
    },
    {
        id: 72,
        chapter: "React",
        difficulty: "intermediate",
        question: "What is the purpose of useContext hook?",
        options: [
            "To consume context values without wrapping components in Context.Consumer",
            "To create new contexts",
            "To handle routing",
            "To fetch data"
        ],
        correctAnswer: 0,
        explanation: "useContext lets you subscribe to React context without nesting. Pass the context object (from createContext) to read its current value."
    },
    {
        id: 73,
        chapter: "React",
        difficulty: "advanced",
        question: "What is the difference between Component and PureComponent?",
        options: [
            "PureComponent implements shouldComponentUpdate with shallow prop/state comparison",
            "They are exactly the same",
            "PureComponent is deprecated",
            "Component is deprecated"
        ],
        correctAnswer: 0,
        explanation: "PureComponent automatically implements shouldComponentUpdate with shallow comparison. Use for performance optimization when props/state are simple."
    },
    {
        id: 74,
        chapter: "React",
        difficulty: "intermediate",
        question: "What is the purpose of StrictMode?",
        options: [
            "To highlight potential problems in development by running extra checks",
            "To enforce strict typing",
            "To improve performance",
            "To handle errors"
        ],
        correctAnswer: 0,
        explanation: "StrictMode activates additional checks and warnings in development. It doesn't affect production builds. Helps identify unsafe lifecycles and side effects."
    },
    {
        id: 75,
        chapter: "React",
        difficulty: "advanced",
        question: "What is React Reconciliation?",
        options: [
            "The algorithm React uses to diff Virtual DOM trees and update only what changed",
            "A way to reconcile data",
            "A deprecated process",
            "A state management pattern"
        ],
        correctAnswer: 0,
        explanation: "Reconciliation is React's diffing algorithm that compares Virtual DOM trees to determine minimal DOM updates. Uses keys for efficient list updates."
    },
    {
        id: 76,
        chapter: "React",
        difficulty: "intermediate",
        question: "What is the purpose of forwardRef?",
        options: [
            "To pass refs through components to child DOM elements",
            "To forward props",
            "To create references",
            "A deprecated feature"
        ],
        correctAnswer: 0,
        explanation: "forwardRef lets components pass refs to child components. Useful for HOCs and component libraries that need to expose DOM nodes."
    },
    {
        id: 77,
        chapter: "React",
        difficulty: "advanced",
        question: "What is useImperativeHandle used for?",
        options: [
            "To customize the instance value exposed to parent components when using ref",
            "To handle imperative code",
            "To create handles",
            "A deprecated hook"
        ],
        correctAnswer: 0,
        explanation: "useImperativeHandle customizes the ref value exposed to parents. Use with forwardRef to expose specific methods instead of the entire DOM node."
    },
    {
        id: 78,
        chapter: "React",
        difficulty: "intermediate",
        question: "What is the purpose of useDebugValue?",
        options: [
            "To display custom labels for custom hooks in React DevTools",
            "To debug values in production",
            "To log errors",
            "A deprecated hook"
        ],
        correctAnswer: 0,
        explanation: "useDebugValue adds labels to custom hooks in React DevTools. Only use in shared custom hooks, not in every component."
    },
    {
        id: 79,
        chapter: "React",
        difficulty: "advanced",
        question: "What is React Server Components?",
        options: [
            "Components that render on the server and send HTML to the client",
            "Components for server-side code only",
            "A deprecated feature",
            "Same as SSR"
        ],
        correctAnswer: 0,
        explanation: "Server Components render on the server, reducing bundle size and improving performance. They can't use hooks or browser APIs. Used in Next.js 13+ App Router."
    },
    {
        id: 80,
        chapter: "React",
        difficulty: "intermediate",
        question: "What is the difference between state and props?",
        options: [
            "State is internal and mutable, props are external and immutable",
            "They are the same",
            "Props are deprecated",
            "State is deprecated"
        ],
        correctAnswer: 0,
        explanation: "State is managed within the component and can change. Props are passed from parent and are read-only. Both trigger re-renders when changed."
    },

    // ==================== Next.js Questions (10) ====================
    {
        id: 81,
        chapter: "Next.js",
        difficulty: "basic",
        question: "What is Next.js?",
        options: [
            "A React framework for building full-stack web applications with SSR and SSG",
            "A replacement for React",
            "A CSS framework",
            "A database"
        ],
        correctAnswer: 0,
        explanation: "Next.js is a React framework that provides features like Server-Side Rendering (SSR), Static Site Generation (SSG), API routes, and file-based routing."
    },
    {
        id: 82,
        chapter: "Next.js",
        difficulty: "intermediate",
        question: "What's the difference between SSR and SSG in Next.js?",
        options: [
            "SSR renders on each request, SSG renders at build time",
            "They are the same",
            "SSG is deprecated",
            "SSR is only for development"
        ],
        correctAnswer: 0,
        explanation: "SSR (getServerSideProps) renders pages on each request. SSG (getStaticProps) pre-renders pages at build time. Use ISR for revalidation."
    },
    {
        id: 83,
        chapter: "Next.js",
        difficulty: "intermediate",
        question: "What is the App Router in Next.js 13+?",
        options: [
            "A new routing system using the app directory with React Server Components",
            "A deprecated feature",
            "Same as Pages Router",
            "A third-party router"
        ],
        correctAnswer: 0,
        explanation: "App Router uses the app/ directory, supports React Server Components, streaming, and nested layouts. It's the recommended approach for new Next.js apps."
    },
    {
        id: 84,
        chapter: "Next.js",
        difficulty: "advanced",
        question: "What is Incremental Static Regeneration (ISR)?",
        options: [
            "A feature that allows updating static pages after build without rebuilding the entire site",
            "A way to incrementally load images",
            "A deprecated feature",
            "Same as SSR"
        ],
        correctAnswer: 0,
        explanation: "ISR lets you update static pages after deployment using revalidate. Pages are regenerated in the background when requested after the revalidation period."
    },
    {
        id: 85,
        chapter: "Next.js",
        difficulty: "intermediate",
        question: "What are API Routes in Next.js?",
        options: [
            "Serverless functions that run on the server to create API endpoints",
            "Routes for external APIs only",
            "A deprecated feature",
            "Client-side routing"
        ],
        correctAnswer: 0,
        explanation: "API Routes (pages/api/*) let you create serverless API endpoints within your Next.js app. They run on the server and can access databases, secrets, etc."
    },
    {
        id: 86,
        chapter: "Next.js",
        difficulty: "intermediate",
        question: "What is the purpose of next/image?",
        options: [
            "An optimized image component that provides automatic lazy loading, resizing, and modern formats",
            "A regular image tag",
            "A deprecated component",
            "An image editor"
        ],
        correctAnswer: 0,
        explanation: "next/image automatically optimizes images: lazy loading, responsive sizes, modern formats (WebP/AVIF), and prevents layout shift."
    },
    {
        id: 87,
        chapter: "Next.js",
        difficulty: "advanced",
        question: "What are Server Components in Next.js?",
        options: [
            "Components that render on the server by default in the App Router",
            "Components for server configuration",
            "A deprecated feature",
            "Same as SSR"
        ],
        correctAnswer: 0,
        explanation: "Server Components render on the server, reducing bundle size. They can't use hooks or browser APIs. Use 'use client' directive for client components."
    },
    {
        id: 88,
        chapter: "Next.js",
        difficulty: "intermediate",
        question: "What is the purpose of next/link?",
        options: [
            "A component for client-side navigation with automatic prefetching",
            "A regular anchor tag",
            "A deprecated component",
            "A component for external links only"
        ],
        correctAnswer: 0,
        explanation: "next/link provides client-side navigation without full page reloads. It automatically prefetches linked pages in the viewport for faster navigation."
    },
    {
        id: 89,
        chapter: "Next.js",
        difficulty: "advanced",
        question: "What is Middleware in Next.js?",
        options: [
            "Code that runs before a request is completed, useful for auth, redirects, and rewrites",
            "A database layer",
            "A deprecated feature",
            "Same as API routes"
        ],
        correctAnswer: 0,
        explanation: "Middleware runs at the edge before requests complete. Use for authentication, redirects, rewrites, or modifying responses. Defined in middleware.ts."
    },
    {
        id: 90,
        chapter: "Next.js",
        difficulty: "intermediate",
        question: "What is the purpose of getStaticPaths?",
        options: [
            "To specify which dynamic routes to pre-render at build time",
            "To get all file paths",
            "A deprecated function",
            "To handle client-side routing"
        ],
        correctAnswer: 0,
        explanation: "getStaticPaths works with getStaticProps for dynamic routes. It returns an array of paths to pre-render. Use fallback for handling other paths."
    },

    // ==================== Redux Questions (15) ====================
    {
        id: 91,
        chapter: "Redux",
        difficulty: "basic",
        question: "What is Redux?",
        options: [
            "A predictable state container for JavaScript apps",
            "A React framework",
            "A database",
            "A CSS library"
        ],
        correctAnswer: 0,
        explanation: "Redux is a state management library based on Flux architecture. It provides a single source of truth for application state."
    },
    {
        id: 92,
        chapter: "Redux",
        difficulty: "intermediate",
        question: "What are the three principles of Redux?",
        options: [
            "Single source of truth, State is read-only, Changes made with pure functions",
            "Multiple stores, Mutable state, Impure functions",
            "No principles",
            "Only one principle"
        ],
        correctAnswer: 0,
        explanation: "Redux principles: 1) Single store, 2) State is read-only (dispatch actions), 3) Reducers are pure functions."
    },
    {
        id: 93,
        chapter: "Redux",
        difficulty: "intermediate",
        question: "What is a Redux action?",
        options: [
            "A plain JavaScript object with a type property describing what happened",
            "A function that modifies state",
            "A component",
            "A deprecated concept"
        ],
        correctAnswer: 0,
        explanation: "Actions are plain objects with a 'type' field. They describe events that occurred. Action creators are functions that return actions."
    },
    {
        id: 94,
        chapter: "Redux",
        difficulty: "intermediate",
        question: "What is a reducer in Redux?",
        options: [
            "A pure function that takes previous state and action, returns new state",
            "A function that reduces array size",
            "A component",
            "A deprecated concept"
        ],
        correctAnswer: 0,
        explanation: "Reducers are pure functions: (state, action) => newState. They must not mutate state, perform side effects, or call non-pure functions."
    },
    {
        id: 95,
        chapter: "Redux",
        difficulty: "advanced",
        question: "What is Redux Toolkit (RTK)?",
        options: [
            "The official, opinionated toolset for efficient Redux development",
            "A deprecated library",
            "A replacement for Redux",
            "A testing tool"
        ],
        correctAnswer: 0,
        explanation: "Redux Toolkit simplifies Redux with utilities like configureStore, createSlice, and createAsyncThunk. It's the recommended way to write Redux."
    },
    {
        id: 96,
        chapter: "Redux",
        difficulty: "intermediate",
        question: "What is the purpose of middleware in Redux?",
        options: [
            "To extend Redux with custom functionality like logging, async actions, or routing",
            "To create middle layers in UI",
            "A deprecated feature",
            "To handle CSS"
        ],
        correctAnswer: 0,
        explanation: "Middleware provides a third-party extension point between dispatching an action and reaching the reducer. Examples: redux-thunk, redux-saga."
    },
    {
        id: 97,
        chapter: "Redux",
        difficulty: "advanced",
        question: "What is redux-thunk?",
        options: [
            "Middleware that allows action creators to return functions instead of actions for async logic",
            "A way to think about Redux",
            "A deprecated library",
            "A testing tool"
        ],
        correctAnswer: 0,
        explanation: "Redux Thunk allows action creators to return functions that receive dispatch and getState. Useful for async operations like API calls."
    },
    {
        id: 98,
        chapter: "Redux",
        difficulty: "advanced",
        question: "What is the difference between redux-thunk and redux-saga?",
        options: [
            "Thunk uses functions, Saga uses generator functions for more complex async flows",
            "They are the same",
            "Thunk is deprecated",
            "Saga is deprecated"
        ],
        correctAnswer: 0,
        explanation: "Thunk is simpler for basic async. Saga uses generators for complex flows like cancellation, debouncing, and sequential operations."
    },
    {
        id: 99,
        chapter: "Redux",
        difficulty: "intermediate",
        question: "What is createSlice in Redux Toolkit?",
        options: [
            "A function that generates action creators and reducers together",
            "A way to slice arrays",
            "A deprecated function",
            "A testing utility"
        ],
        correctAnswer: 0,
        explanation: "createSlice automatically generates action creators and action types based on reducers. It uses Immer for immutable updates."
    },
    {
        id: 100,
        chapter: "Redux",
        difficulty: "intermediate",
        question: "What is the Redux store?",
        options: [
            "An object that holds the complete state tree of your application",
            "A physical store",
            "A database",
            "A component"
        ],
        correctAnswer: 0,
        explanation: "The store holds state, allows access via getState(), updates via dispatch(action), and registers listeners via subscribe()."
    },
    {
        id: 101,
        chapter: "Redux",
        difficulty: "advanced",
        question: "What is RTK Query?",
        options: [
            "A data fetching and caching tool built into Redux Toolkit",
            "A database query language",
            "A deprecated feature",
            "A testing tool"
        ],
        correctAnswer: 0,
        explanation: "RTK Query is a powerful data fetching and caching tool. It eliminates the need to write thunks and reducers for data fetching."
    },
    {
        id: 102,
        chapter: "Redux",
        difficulty: "intermediate",
        question: "What is the purpose of combineReducers?",
        options: [
            "To combine multiple reducer functions into a single root reducer",
            "To combine actions",
            "A deprecated function",
            "To combine components"
        ],
        correctAnswer: 0,
        explanation: "combineReducers merges multiple reducers into one, with each managing its slice of state. Each reducer handles its own part of the state tree."
    },
    {
        id: 103,
        chapter: "Redux",
        difficulty: "advanced",
        question: "What is normalization in Redux?",
        options: [
            "Structuring nested data in a flat, normalized shape for easier updates",
            "Making data normal",
            "A deprecated pattern",
            "A testing technique"
        ],
        correctAnswer: 0,
        explanation: "Normalization stores entities in a flat structure with IDs as keys. Prevents duplication and makes updates easier. Use createEntityAdapter in RTK."
    },
    {
        id: 104,
        chapter: "Redux",
        difficulty: "intermediate",
        question: "What is the purpose of useSelector hook?",
        options: [
            "To extract data from the Redux store state in React components",
            "To select HTML elements",
            "A deprecated hook",
            "To select components"
        ],
        correctAnswer: 0,
        explanation: "useSelector lets functional components read data from Redux store. It subscribes to the store and re-renders when selected data changes."
    },
    {
        id: 105,
        chapter: "Redux",
        difficulty: "intermediate",
        question: "What is the purpose of useDispatch hook?",
        options: [
            "To get a reference to the dispatch function from the Redux store",
            "To dispatch events",
            "A deprecated hook",
            "To dispatch components"
        ],
        correctAnswer: 0,
        explanation: "useDispatch returns the store's dispatch function, allowing components to dispatch actions. Use with action creators for type safety."
    },

    // ==================== Browser Storage & Security Questions (8) ====================
    {
        id: 106,
        chapter: "Browser Storage & Security",
        difficulty: "intermediate",
        question: "What is XSS (Cross-Site Scripting)?",
        options: [
            "An attack where malicious scripts are injected into trusted websites",
            "A styling technique",
            "A performance optimization",
            "A deprecated vulnerability"
        ],
        correctAnswer: 0,
        explanation: "XSS allows attackers to inject malicious scripts. Prevent by sanitizing user input, using Content Security Policy, and escaping output."
    },
    {
        id: 107,
        chapter: "Browser Storage & Security",
        difficulty: "intermediate",
        question: "What is CSRF (Cross-Site Request Forgery)?",
        options: [
            "An attack that tricks users into executing unwanted actions on authenticated sites",
            "A way to forge certificates",
            "A performance issue",
            "A deprecated vulnerability"
        ],
        correctAnswer: 0,
        explanation: "CSRF exploits authenticated sessions. Prevent with CSRF tokens, SameSite cookies, and checking Origin/Referer headers."
    },
    {
        id: 108,
        chapter: "Browser Storage & Security",
        difficulty: "advanced",
        question: "What is Content Security Policy (CSP)?",
        options: [
            "A security header that controls which resources the browser can load",
            "A content management system",
            "A deprecated feature",
            "A styling policy"
        ],
        correctAnswer: 0,
        explanation: "CSP is an HTTP header that prevents XSS by controlling allowed sources for scripts, styles, images, etc. Example: script-src 'self' https://trusted.com"
    },
    {
        id: 109,
        chapter: "Browser Storage & Security",
        difficulty: "intermediate",
        question: "What is the Same-Origin Policy?",
        options: [
            "A security mechanism that restricts how documents/scripts from one origin interact with resources from another",
            "A policy for identical websites",
            "A deprecated policy",
            "A performance optimization"
        ],
        correctAnswer: 0,
        explanation: "Same-Origin Policy prevents scripts from accessing data from different origins (protocol, domain, port). Use CORS to allow cross-origin requests."
    },
    {
        id: 110,
        chapter: "Browser Storage & Security",
        difficulty: "intermediate",
        question: "What is CORS (Cross-Origin Resource Sharing)?",
        options: [
            "A mechanism that allows servers to specify which origins can access their resources",
            "A way to share cores",
            "A deprecated feature",
            "A performance optimization"
        ],
        correctAnswer: 0,
        explanation: "CORS uses HTTP headers to tell browsers to allow cross-origin requests. Server sets Access-Control-Allow-Origin header."
    },
    {
        id: 111,
        chapter: "Browser Storage & Security",
        difficulty: "advanced",
        question: "What are HttpOnly cookies?",
        options: [
            "Cookies that cannot be accessed by JavaScript, only sent in HTTP requests",
            "Cookies that only work with HTTP",
            "A deprecated feature",
            "Cookies for HTTP servers only"
        ],
        correctAnswer: 0,
        explanation: "HttpOnly cookies prevent JavaScript access, protecting against XSS attacks stealing session tokens. Set via Set-Cookie header."
    },
    {
        id: 112,
        chapter: "Browser Storage & Security",
        difficulty: "intermediate",
        question: "What is the SameSite cookie attribute?",
        options: [
            "An attribute that controls whether cookies are sent with cross-site requests",
            "An attribute for same website only",
            "A deprecated attribute",
            "An attribute for styling"
        ],
        correctAnswer: 0,
        explanation: "SameSite prevents CSRF attacks. Values: Strict (never sent cross-site), Lax (sent on top-level navigation), None (always sent, requires Secure)."
    },
    {
        id: 113,
        chapter: "Browser Storage & Security",
        difficulty: "advanced",
        question: "What is Subresource Integrity (SRI)?",
        options: [
            "A security feature that verifies fetched resources haven't been tampered with",
            "A way to integrate subresources",
            "A deprecated feature",
            "A performance optimization"
        ],
        correctAnswer: 0,
        explanation: "SRI uses cryptographic hashes in integrity attribute to verify CDN resources. Example: <script src='...' integrity='sha384-...' crossorigin='anonymous'>"
    },

    // ==================== Performance & Optimization Questions (8) ====================
    {
        id: 114,
        chapter: "Performance & Optimization",
        difficulty: "intermediate",
        question: "What is Code Splitting?",
        options: [
            "Dividing code into smaller bundles that can be loaded on demand",
            "Splitting code into multiple files",
            "A deprecated technique",
            "A way to split strings"
        ],
        correctAnswer: 0,
        explanation: "Code splitting reduces initial bundle size by loading code on demand. Use dynamic import(), React.lazy(), or route-based splitting."
    },
    {
        id: 115,
        chapter: "Performance & Optimization",
        difficulty: "intermediate",
        question: "What is Tree Shaking?",
        options: [
            "Removing unused code from the final bundle during build",
            "Shaking tree data structures",
            "A deprecated technique",
            "A testing method"
        ],
        correctAnswer: 0,
        explanation: "Tree shaking eliminates dead code. Works with ES modules (import/export). Webpack and other bundlers automatically tree shake in production."
    },
    {
        id: 116,
        chapter: "Performance & Optimization",
        difficulty: "advanced",
        question: "What are Web Vitals?",
        options: [
            "A set of metrics measuring real-world user experience (LCP, FID, CLS)",
            "Vital signs for websites",
            "A deprecated metric",
            "A testing tool"
        ],
        correctAnswer: 0,
        explanation: "Core Web Vitals: LCP (Largest Contentful Paint), FID (First Input Delay), CLS (Cumulative Layout Shift). Google ranking factors."
    },
    {
        id: 117,
        chapter: "Performance & Optimization",
        difficulty: "intermediate",
        question: "What is Lazy Loading?",
        options: [
            "Deferring loading of non-critical resources until they're needed",
            "Loading resources slowly",
            "A deprecated technique",
            "A way to make developers lazy"
        ],
        correctAnswer: 0,
        explanation: "Lazy loading improves initial load time. Use for images (loading='lazy'), components (React.lazy), and routes. Load above-the-fold content first."
    },
    {
        id: 118,
        chapter: "Performance & Optimization",
        difficulty: "advanced",
        question: "What is the purpose of the Intersection Observer API?",
        options: [
            "To asynchronously observe changes in element visibility within viewport",
            "To observe intersections in geometry",
            "A deprecated API",
            "To observe network requests"
        ],
        correctAnswer: 0,
        explanation: "Intersection Observer efficiently detects when elements enter/exit viewport. Use for lazy loading, infinite scroll, and analytics."
    },
    {
        id: 119,
        chapter: "Performance & Optimization",
        difficulty: "intermediate",
        question: "What is memoization?",
        options: [
            "Caching function results to avoid expensive recalculations",
            "Memorizing code",
            "A deprecated technique",
            "A way to create memos"
        ],
        correctAnswer: 0,
        explanation: "Memoization stores function results for given inputs. In React: useMemo for values, useCallback for functions, React.memo for components."
    },
    {
        id: 120,
        chapter: "Performance & Optimization",
        difficulty: "advanced",
        question: "What is the purpose of requestAnimationFrame?",
        options: [
            "To schedule animations to run before the next browser repaint for smooth 60fps",
            "To request animation files",
            "A deprecated API",
            "To create animations"
        ],
        correctAnswer: 0,
        explanation: "requestAnimationFrame syncs animations with browser refresh rate (~60fps). More efficient than setTimeout/setInterval for animations."
    },
    {
        id: 121,
        chapter: "Performance & Optimization",
        difficulty: "intermediate",
        question: "What is the purpose of the loading attribute on images?",
        options: [
            "To enable native lazy loading of images",
            "To show loading spinners",
            "A deprecated attribute",
            "To load images faster"
        ],
        correctAnswer: 0,
        explanation: "loading='lazy' enables browser-native lazy loading. Images load when near viewport. Supported in modern browsers, improves performance."
    },

    // ==================== System Design Questions (12) ====================
    {
        id: 122,
        chapter: "System Design",
        difficulty: "advanced",
        question: "What is a CDN (Content Delivery Network)?",
        options: [
            "A distributed network of servers that deliver content based on user's geographic location",
            "A content database",
            "A deprecated technology",
            "A CSS framework"
        ],
        correctAnswer: 0,
        explanation: "CDNs cache static assets on edge servers worldwide, reducing latency and server load. Examples: Cloudflare, AWS CloudFront, Vercel Edge Network."
    },
    {
        id: 123,
        chapter: "System Design",
        difficulty: "advanced",
        question: "What is Load Balancing?",
        options: [
            "Distributing network traffic across multiple servers to ensure reliability and performance",
            "Balancing CSS loads",
            "A deprecated technique",
            "A way to balance budgets"
        ],
        correctAnswer: 0,
        explanation: "Load balancers distribute requests across servers. Algorithms: Round Robin, Least Connections, IP Hash. Improves availability and scalability."
    },
    {
        id: 124,
        chapter: "System Design",
        difficulty: "advanced",
        question: "What is Caching?",
        options: [
            "Storing frequently accessed data in fast storage for quick retrieval",
            "Hiding data",
            "A deprecated technique",
            "A way to store cash"
        ],
        correctAnswer: 0,
        explanation: "Caching layers: Browser cache, CDN cache, Server cache (Redis/Memcached), Database query cache. Use cache invalidation strategies."
    },
    {
        id: 125,
        chapter: "System Design",
        difficulty: "advanced",
        question: "What is Horizontal vs Vertical Scaling?",
        options: [
            "Horizontal adds more machines, Vertical adds more power to existing machines",
            "They are the same",
            "Horizontal is deprecated",
            "Vertical is always better"
        ],
        correctAnswer: 0,
        explanation: "Horizontal (scale out): Add more servers, better for distributed systems. Vertical (scale up): Add CPU/RAM, limited by hardware, simpler."
    },
    {
        id: 126,
        chapter: "System Design",
        difficulty: "advanced",
        question: "What is a Microservices Architecture?",
        options: [
            "An architectural style where applications are composed of small, independent services",
            "Very small services",
            "A deprecated architecture",
            "Same as monolith"
        ],
        correctAnswer: 0,
        explanation: "Microservices split apps into independent services communicating via APIs. Benefits: scalability, flexibility. Challenges: complexity, distributed systems."
    },
    {
        id: 127,
        chapter: "System Design",
        difficulty: "advanced",
        question: "What is Database Sharding?",
        options: [
            "Partitioning data across multiple databases to improve performance and scalability",
            "Breaking databases",
            "A deprecated technique",
            "A backup strategy"
        ],
        correctAnswer: 0,
        explanation: "Sharding splits data horizontally across multiple databases. Shard keys determine data distribution. Improves performance but adds complexity."
    },
    {
        id: 128,
        chapter: "System Design",
        difficulty: "advanced",
        question: "What is the CAP Theorem?",
        options: [
            "A distributed system can only guarantee 2 of 3: Consistency, Availability, Partition Tolerance",
            "A theorem about capital letters",
            "A deprecated concept",
            "A testing theorem"
        ],
        correctAnswer: 0,
        explanation: "CAP Theorem: Choose 2 of Consistency (same data everywhere), Availability (always responds), Partition Tolerance (works despite network failures)."
    },
    {
        id: 129,
        chapter: "System Design",
        difficulty: "advanced",
        question: "What is Event-Driven Architecture?",
        options: [
            "A design pattern where services communicate through events rather than direct calls",
            "Architecture for event planning",
            "A deprecated pattern",
            "Same as REST"
        ],
        correctAnswer: 0,
        explanation: "Event-driven systems use message queues/event buses. Services publish events, others subscribe. Benefits: decoupling, scalability. Use Kafka, RabbitMQ."
    },
    {
        id: 130,
        chapter: "System Design",
        difficulty: "advanced",
        question: "What is API Rate Limiting?",
        options: [
            "Controlling the number of requests a client can make to an API in a time period",
            "Limiting API speed",
            "A deprecated technique",
            "A pricing model"
        ],
        correctAnswer: 0,
        explanation: "Rate limiting prevents abuse and ensures fair usage. Algorithms: Token Bucket, Leaky Bucket, Fixed Window. Return 429 status when exceeded."
    },
    {
        id: 131,
        chapter: "System Design",
        difficulty: "advanced",
        question: "What is a Message Queue?",
        options: [
            "A component that stores messages between services for asynchronous communication",
            "A queue for messaging apps",
            "A deprecated component",
            "A database"
        ],
        correctAnswer: 0,
        explanation: "Message queues enable async communication between services. Examples: RabbitMQ, AWS SQS, Apache Kafka. Benefits: decoupling, reliability, scalability."
    },
    {
        id: 132,
        chapter: "System Design",
        difficulty: "advanced",
        question: "What is Database Replication?",
        options: [
            "Copying data from one database to others for redundancy and read scalability",
            "Replicating database code",
            "A deprecated technique",
            "A backup method"
        ],
        correctAnswer: 0,
        explanation: "Replication creates copies of data. Master-slave: writes to master, reads from slaves. Multi-master: writes to multiple. Improves availability and read performance."
    },
    {
        id: 133,
        chapter: "System Design",
        difficulty: "advanced",
        question: "What is the purpose of a Reverse Proxy?",
        options: [
            "A server that sits in front of web servers and forwards client requests",
            "A proxy that works in reverse",
            "A deprecated technology",
            "Same as forward proxy"
        ],
        correctAnswer: 0,
        explanation: "Reverse proxies handle load balancing, caching, SSL termination, and security. Examples: Nginx, HAProxy, AWS ALB. Clients don't know backend servers."
    },

    // ==================== Leadership & Behavioral Questions (10) ====================
    {
        id: 134,
        chapter: "Leadership",
        difficulty: "advanced",
        question: "How do you handle technical debt in a fast-paced environment?",
        options: [
            "Balance short-term delivery with long-term maintainability, track and prioritize debt, allocate time for refactoring",
            "Ignore it and move fast",
            "Rewrite everything",
            "Only focus on new features"
        ],
        correctAnswer: 0,
        explanation: "Track technical debt, communicate impact to stakeholders, allocate 15-20% time for refactoring, prioritize high-impact debt, and prevent new debt through code reviews."
    },
    {
        id: 135,
        chapter: "Leadership",
        difficulty: "advanced",
        question: "How do you mentor junior developers?",
        options: [
            "Pair programming, code reviews, setting clear expectations, providing growth opportunities, and regular feedback",
            "Let them figure it out",
            "Do their work for them",
            "Only criticize their code"
        ],
        correctAnswer: 0,
        explanation: "Effective mentoring: pair programming, thorough code reviews with explanations, setting learning goals, providing challenging tasks, regular 1-on-1s, and celebrating progress."
    },
    {
        id: 136,
        chapter: "Leadership",
        difficulty: "advanced",
        question: "How do you make technical decisions in a team?",
        options: [
            "Gather requirements, research options, create RFCs, involve team, consider trade-offs, document decisions",
            "Make decisions alone",
            "Always follow trends",
            "Never document"
        ],
        correctAnswer: 0,
        explanation: "Good decision-making: understand requirements, research alternatives, create RFC/ADR, involve stakeholders, evaluate trade-offs, make data-driven choices, document rationale."
    },
    {
        id: 137,
        chapter: "Leadership",
        difficulty: "advanced",
        question: "How do you handle disagreements about technical approaches?",
        options: [
            "Listen to all perspectives, focus on data and trade-offs, find common ground, escalate if needed, commit to decision",
            "Force your opinion",
            "Avoid conflict",
            "Let others decide always"
        ],
        correctAnswer: 0,
        explanation: "Handle disagreements: active listening, focus on facts not opinions, discuss trade-offs, seek compromise, escalate to leadership if stuck, commit once decided."
    },
    {
        id: 138,
        chapter: "Leadership",
        difficulty: "advanced",
        question: "How do you ensure code quality in your team?",
        options: [
            "Code reviews, automated testing, linting, CI/CD, coding standards, pair programming, and continuous learning",
            "Trust everyone",
            "Manual testing only",
            "No reviews needed"
        ],
        correctAnswer: 0,
        explanation: "Ensure quality: mandatory code reviews, comprehensive tests (unit, integration, e2e), automated linting, CI/CD pipelines, coding standards, and knowledge sharing."
    },
    {
        id: 139,
        chapter: "Leadership",
        difficulty: "advanced",
        question: "How do you prioritize features when everything is urgent?",
        options: [
            "Use frameworks like RICE/MoSCoW, align with business goals, consider technical dependencies, communicate trade-offs",
            "Do everything at once",
            "Random selection",
            "Always say yes"
        ],
        correctAnswer: 0,
        explanation: "Prioritize using: RICE (Reach, Impact, Confidence, Effort), align with OKRs, consider dependencies, communicate trade-offs, push back on unrealistic expectations."
    },
    {
        id: 140,
        chapter: "Leadership",
        difficulty: "advanced",
        question: "How do you handle production incidents?",
        options: [
            "Assess severity, communicate status, mitigate immediately, conduct blameless postmortems, implement preventive measures",
            "Panic and blame",
            "Ignore and hope it fixes itself",
            "Immediately rewrite everything"
        ],
        correctAnswer: 0,
        explanation: "Incident response: assess impact, establish communication channel, mitigate quickly, document timeline, conduct blameless postmortem, create action items, improve monitoring."
    },
    {
        id: 141,
        chapter: "Leadership",
        difficulty: "advanced",
        question: "How do you stay updated with frontend technologies?",
        options: [
            "Follow industry blogs, attend conferences, contribute to open source, experiment with new tools, network with peers",
            "Never learn new things",
            "Only read documentation",
            "Wait for others to learn first"
        ],
        correctAnswer: 0,
        explanation: "Stay current: follow tech blogs/newsletters, attend conferences/meetups, contribute to open source, build side projects, participate in communities, allocate learning time."
    },
    {
        id: 142,
        chapter: "Leadership",
        difficulty: "advanced",
        question: "How do you scale yourself as a senior engineer?",
        options: [
            "Delegate, mentor others, create documentation, build tools, establish processes, focus on high-impact work",
            "Do everything yourself",
            "Work longer hours",
            "Avoid helping others"
        ],
        correctAnswer: 0,
        explanation: "Scale impact: delegate effectively, mentor team members, create comprehensive docs, build reusable tools, establish processes, focus on architecture and strategy."
    },
    {
        id: 143,
        chapter: "Leadership",
        difficulty: "advanced",
        question: "How do you balance technical excellence with business needs?",
        options: [
            "Understand business context, communicate technical trade-offs, find pragmatic solutions, build incrementally",
            "Only focus on perfect code",
            "Ignore business needs",
            "Always take shortcuts"
        ],
        correctAnswer: 0,
        explanation: "Balance by: understanding business goals, communicating technical implications, finding pragmatic solutions, delivering incrementally, building quality into process, educating stakeholders."
    }
];

// Export for use in exam.html
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questionBank;
}
