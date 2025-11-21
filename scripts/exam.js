// Exam State Management
let examState = {
    mode: null,
    chapter: null,
    questions: [],
    currentIndex: 0,
    answers: {},
    flagged: new Set(),
    startTime: null,
    timerInterval: null,
    timerDuration: 0,
    timeRemaining: 0
};

// Initialize exam based on mode
function startExam(mode, chapter = null) {
    examState.mode = mode;
    examState.chapter = chapter;

    // Filter and select questions based on mode
    let availableQuestions = [...questionBank];

    if (mode === 'chapter' && chapter) {
        availableQuestions = questionBank.filter(q => q.chapter === chapter);
    }

    // Select questions based on mode
    switch (mode) {
        case 'quick':
            examState.questions = shuffleArray(availableQuestions).slice(0, 10);
            examState.timerDuration = 10 * 60; // 10 minutes
            break;
        case 'chapter':
            examState.questions = shuffleArray(availableQuestions);
            examState.timerDuration = availableQuestions.length * 30; // 30 seconds per question
            break;
        case 'full':
            examState.questions = shuffleArray(availableQuestions).slice(0, 50);
            examState.timerDuration = 25 * 60; // 25 minutes
            break;
        default:
            examState.questions = availableQuestions;
    }

    // Initialize exam state
    examState.currentIndex = 0;
    examState.answers = {};
    examState.flagged = new Set();
    examState.startTime = Date.now();
    examState.timeRemaining = examState.timerDuration;

    // Show exam screen
    hideAllScreens();
    document.getElementById('examScreen').classList.remove('hidden');

    // Start timer if duration is set
    if (examState.timerDuration > 0) {
        startTimer();
    }

    // Display first question
    displayQuestion();
    updateProgress();
    createQuestionDots();
}

// Start custom exam
function startCustomExam() {
    const count = parseInt(document.getElementById('customCount').value) || 20;
    const timer = parseInt(document.getElementById('customTimer').value) || 0;
    const difficulty = document.getElementById('customDifficulty').value;

    let availableQuestions = [...questionBank];

    // Filter by difficulty if not 'all'
    if (difficulty !== 'all') {
        availableQuestions = questionBank.filter(q => q.difficulty === difficulty);
    }

    examState.mode = 'custom';
    examState.questions = shuffleArray(availableQuestions).slice(0, Math.min(count, availableQuestions.length));
    examState.timerDuration = timer * 60;
    examState.timeRemaining = examState.timerDuration;
    examState.currentIndex = 0;
    examState.answers = {};
    examState.flagged = new Set();
    examState.startTime = Date.now();

    hideAllScreens();
    document.getElementById('examScreen').classList.remove('hidden');

    if (examState.timerDuration > 0) {
        startTimer();
    }

    displayQuestion();
    updateProgress();
    createQuestionDots();
}

// Display current question
function displayQuestion() {
    const question = examState.questions[examState.currentIndex];

    // Update question counter
    document.getElementById('questionCounter').textContent =
        `Question ${examState.currentIndex + 1} of ${examState.questions.length}`;

    // Update chapter badge
    document.getElementById('chapterBadge').textContent = question.chapter;

    // Update difficulty badge
    const difficultyBadge = document.getElementById('difficultyBadge');
    difficultyBadge.textContent = question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1);
    difficultyBadge.className = `difficulty-badge ${question.difficulty}`;

    // Update question text
    document.getElementById('questionText').textContent = question.question;

    // Create options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.onclick = () => selectAnswer(index);

        // Check if this option is selected
        if (examState.answers[question.id] === index) {
            optionDiv.classList.add('selected');
        }

        optionDiv.innerHTML = `
            <div class="option-letter">${String.fromCharCode(65 + index)}</div>
            <div class="option-text">${option}</div>
        `;

        optionsContainer.appendChild(optionDiv);
    });

    // Update flag button
    updateFlagButton();

    // Update navigation buttons
    updateNavigationButtons();
}

// Select an answer
function selectAnswer(optionIndex) {
    const question = examState.questions[examState.currentIndex];
    examState.answers[question.id] = optionIndex;

    // Update UI
    const options = document.querySelectorAll('.option');
    options.forEach((opt, idx) => {
        opt.classList.toggle('selected', idx === optionIndex);
    });

    // Update question dots
    updateQuestionDots();
}

// Navigation functions
function previousQuestion() {
    if (examState.currentIndex > 0) {
        examState.currentIndex--;
        displayQuestion();
        updateProgress();
    }
}

function nextQuestion() {
    if (examState.currentIndex < examState.questions.length - 1) {
        examState.currentIndex++;
        displayQuestion();
        updateProgress();
    } else {
        // Show submit button on last question
        document.getElementById('submitBtn').classList.remove('hidden');
    }
}

function jumpToQuestion(index) {
    examState.currentIndex = index;
    displayQuestion();
    updateProgress();
}

// Toggle flag
function toggleFlag() {
    const question = examState.questions[examState.currentIndex];

    if (examState.flagged.has(question.id)) {
        examState.flagged.delete(question.id);
    } else {
        examState.flagged.add(question.id);
    }

    updateFlagButton();
    updateQuestionDots();
}

function updateFlagButton() {
    const question = examState.questions[examState.currentIndex];
    const flagBtn = document.getElementById('flagBtn');

    if (examState.flagged.has(question.id)) {
        flagBtn.classList.add('flagged');
        flagBtn.textContent = '🚩 Flagged';
    } else {
        flagBtn.classList.remove('flagged');
        flagBtn.textContent = '🚩 Flag';
    }
}

// Timer functions
function startTimer() {
    const timerElement = document.getElementById('timer');
    timerElement.classList.remove('hidden');

    examState.timerInterval = setInterval(() => {
        examState.timeRemaining--;

        const minutes = Math.floor(examState.timeRemaining / 60);
        const seconds = examState.timeRemaining % 60;
        timerElement.textContent = `⏱️ ${minutes}:${seconds.toString().padStart(2, '0')}`;

        // Warning when less than 2 minutes
        if (examState.timeRemaining <= 120) {
            timerElement.classList.add('warning');
        }

        // Time's up
        if (examState.timeRemaining <= 0) {
            clearInterval(examState.timerInterval);
            submitExam();
        }
    }, 1000);
}

// Progress and UI updates
function updateProgress() {
    const progress = ((examState.currentIndex + 1) / examState.questions.length) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');

    prevBtn.disabled = examState.currentIndex === 0;

    if (examState.currentIndex === examState.questions.length - 1) {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
    }
}

function createQuestionDots() {
    const dotsContainer = document.getElementById('questionDots');
    dotsContainer.innerHTML = '';

    examState.questions.forEach((question, index) => {
        const dot = document.createElement('div');
        dot.className = 'question-dot';
        dot.onclick = () => jumpToQuestion(index);

        if (index === examState.currentIndex) {
            dot.classList.add('current');
        }
        if (examState.answers[question.id] !== undefined) {
            dot.classList.add('answered');
        }
        if (examState.flagged.has(question.id)) {
            dot.classList.add('flagged');
        }

        dotsContainer.appendChild(dot);
    });
}

function updateQuestionDots() {
    const dots = document.querySelectorAll('.question-dot');
    examState.questions.forEach((question, index) => {
        const dot = dots[index];
        if (dot) {
            dot.classList.toggle('answered', examState.answers[question.id] !== undefined);
            dot.classList.toggle('flagged', examState.flagged.has(question.id));
        }
    });
}

// Submit exam
function submitExam() {
    if (examState.timerInterval) {
        clearInterval(examState.timerInterval);
    }

    // Calculate results
    const results = calculateResults();

    // Save to history
    saveToHistory(results);

    // Show results
    displayResults(results);
}

function calculateResults() {
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;
    const questionResults = [];

    examState.questions.forEach(question => {
        const userAnswer = examState.answers[question.id];
        const isCorrect = userAnswer === question.correctAnswer;

        if (userAnswer === undefined) {
            unanswered++;
        } else if (isCorrect) {
            correct++;
        } else {
            incorrect++;
        }

        questionResults.push({
            question: question,
            userAnswer: userAnswer,
            isCorrect: isCorrect,
            isFlagged: examState.flagged.has(question.id)
        });
    });

    const timeTaken = examState.timerDuration > 0
        ? examState.timerDuration - examState.timeRemaining
        : Math.floor((Date.now() - examState.startTime) / 1000);

    return {
        mode: examState.mode,
        chapter: examState.chapter,
        totalQuestions: examState.questions.length,
        correct,
        incorrect,
        unanswered,
        score: Math.round((correct / examState.questions.length) * 100),
        timeTaken,
        questionResults,
        date: new Date().toISOString()
    };
}

function displayResults(results) {
    hideAllScreens();
    document.getElementById('resultsScreen').classList.remove('hidden');

    // Update score
    document.getElementById('scorePercentage').textContent = `${results.score}%`;
    document.getElementById('correctCount').textContent = results.correct;
    document.getElementById('incorrectCount').textContent = results.incorrect;

    // Format time
    const minutes = Math.floor(results.timeTaken / 60);
    const seconds = results.timeTaken % 60;
    document.getElementById('timeTaken').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Create detailed breakdown
    const breakdownContainer = document.getElementById('resultsBreakdown');
    breakdownContainer.innerHTML = '<h3>Detailed Results</h3>';

    results.questionResults.forEach((result, index) => {
        const resultDiv = document.createElement('div');
        resultDiv.className = `result-item ${result.isCorrect ? 'correct' : result.userAnswer === undefined ? 'unanswered' : 'incorrect'}`;

        const userAnswerText = result.userAnswer !== undefined
            ? result.question.options[result.userAnswer]
            : 'Not answered';

        resultDiv.innerHTML = `
            <div class="result-header">
                <span class="result-number">Q${index + 1}</span>
                <span class="result-chapter">${result.question.chapter}</span>
                <span class="result-status">${result.isCorrect ? '✓ Correct' : result.userAnswer === undefined ? '○ Unanswered' : '✗ Incorrect'}</span>
            </div>
            <div class="result-question">${result.question.question}</div>
            <div class="result-answer">
                <strong>Your answer:</strong> ${userAnswerText}
            </div>
            <div class="result-correct">
                <strong>Correct answer:</strong> ${result.question.options[result.question.correctAnswer]}
            </div>
            <div class="result-explanation">
                <strong>Explanation:</strong> ${result.question.explanation}
            </div>
        `;

        breakdownContainer.appendChild(resultDiv);
    });
}

// History management
function saveToHistory(results) {
    const history = JSON.parse(localStorage.getItem('examHistory') || '[]');
    history.unshift(results);

    // Keep only last 20 results
    if (history.length > 20) {
        history.pop();
    }

    localStorage.setItem('examHistory', JSON.stringify(history));
}

// Review and retake
function reviewAnswers() {
    const breakdownContainer = document.getElementById('resultsBreakdown');
    breakdownContainer.scrollIntoView({ behavior: 'smooth' });
}

function retakeExam() {
    if (examState.mode === 'chapter') {
        startExam('chapter', examState.chapter);
    } else if (examState.mode === 'custom') {
        showCustomSelection();
    } else {
        startExam(examState.mode);
    }
}

// Quit exam
function quitExam() {
    if (confirm('Are you sure you want to quit? Your progress will be lost.')) {
        if (examState.timerInterval) {
            clearInterval(examState.timerInterval);
        }
        showModeSelection();
    }
}

// Screen navigation
function hideAllScreens() {
    document.getElementById('modeSelection').classList.add('hidden');
    document.getElementById('chapterSelection').classList.add('hidden');
    document.getElementById('customSelection').classList.add('hidden');
    document.getElementById('examScreen').classList.add('hidden');
    document.getElementById('resultsScreen').classList.add('hidden');
}

function showModeSelection() {
    hideAllScreens();
    document.getElementById('modeSelection').classList.remove('hidden');
}

function showChapterSelection() {
    hideAllScreens();
    document.getElementById('chapterSelection').classList.remove('hidden');
}

function showCustomSelection() {
    hideAllScreens();
    document.getElementById('customSelection').classList.remove('hidden');
}

// Utility functions
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (document.getElementById('examScreen').classList.contains('hidden')) return;

    switch (e.key) {
        case 'ArrowLeft':
            previousQuestion();
            break;
        case 'ArrowRight':
            nextQuestion();
            break;
        case '1':
        case '2':
        case '3':
        case '4':
            const optionIndex = parseInt(e.key) - 1;
            if (optionIndex < examState.questions[examState.currentIndex].options.length) {
                selectAnswer(optionIndex);
            }
            break;
        case 'f':
        case 'F':
            toggleFlag();
            break;
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    showModeSelection();
});
