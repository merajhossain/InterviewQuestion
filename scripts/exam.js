// Exam State
let examState = {
    mode: '',
    questions: [],
    currentQuestionIndex: 0,
    userAnswers: [],
    flaggedQuestions: new Set(),
    startTime: null,
    timerInterval: null,
    timerDuration: 0
};

// Initialize Exam
function startExam(mode, chapter = null) {
    examState.mode = mode;
    examState.startTime = Date.now();

    // Select questions based on mode
    let selectedQuestions = [];

    switch (mode) {
        case 'quick':
            selectedQuestions = getRandomQuestions(questionBank, 10);
            break;
        case 'full':
            selectedQuestions = [...questionBank];
            break;
        case 'chapter':
            selectedQuestions = questionBank.filter(q => q.chapter === chapter);
            break;
    }

    examState.questions = shuffleArray(selectedQuestions);
    examState.userAnswers = new Array(examState.questions.length).fill(null);
    examState.flaggedQuestions = new Set();
    examState.currentQuestionIndex = 0;

    // Show exam screen
    document.getElementById('modeSelection').classList.add('hidden');
    document.getElementById('chapterSelection').classList.add('hidden');
    document.getElementById('customSelection').classList.add('hidden');
    document.getElementById('examScreen').classList.remove('hidden');

    // Initialize exam UI
    initializeExam();
    displayQuestion();
}

function startCustomExam() {
    const count = parseInt(document.getElementById('customCount').value);
    const timerMinutes = parseInt(document.getElementById('customTimer').value);
    const difficulty = document.getElementById('customDifficulty').value;

    examState.mode = 'custom';
    examState.startTime = Date.now();

    // Filter by difficulty if specified
    let filteredQuestions = questionBank;
    if (difficulty !== 'all') {
        filteredQuestions = questionBank.filter(q => q.difficulty === difficulty);
    }

    // Select random questions
    examState.questions = getRandomQuestions(filteredQuestions, Math.min(count, filteredQuestions.length));
    examState.userAnswers = new Array(examState.questions.length).fill(null);
    examState.flaggedQuestions = new Set();
    examState.currentQuestionIndex = 0;

    // Set up timer if specified
    if (timerMinutes > 0) {
        examState.timerDuration = timerMinutes * 60;
        startTimer();
    }

    // Show exam screen
    document.getElementById('customSelection').classList.add('hidden');
    document.getElementById('examScreen').classList.remove('hidden');

    initializeExam();
    displayQuestion();
}

function initializeExam() {
    // Create question dots for navigation
    const dotsContainer = document.getElementById('questionDots');
    dotsContainer.innerHTML = '';

    examState.questions.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'question-dot';
        dot.onclick = () => jumpToQuestion(index);
        dot.title = `Question ${index + 1}`;
        dotsContainer.appendChild(dot);
    });

    updateNavigationButtons();
}

function displayQuestion() {
    const question = examState.questions[examState.currentQuestionIndex];
    const index = examState.currentQuestionIndex;

    // Update question counter
    document.getElementById('questionCounter').textContent =
        `Question ${index + 1} of ${examState.questions.length}`;

    // Update chapter badge
    document.getElementById('chapterBadge').textContent = question.chapter;

    // Update difficulty badge
    const difficultyBadge = document.getElementById('difficultyBadge');
    difficultyBadge.textContent = question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1);
    difficultyBadge.className = `difficulty-badge ${question.difficulty}`;

    // Update question text
    document.getElementById('questionText').textContent = question.question;

    // Display options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, optionIndex) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        if (examState.userAnswers[index] === optionIndex) {
            optionDiv.classList.add('selected');
        }
        optionDiv.onclick = () => selectAnswer(optionIndex);

        const optionLabel = document.createElement('div');
        optionLabel.className = 'option-label';
        optionLabel.textContent = String.fromCharCode(65 + optionIndex); // A, B, C, D

        const optionText = document.createElement('div');
        optionText.className = 'option-text';
        optionText.textContent = option;

        optionDiv.appendChild(optionLabel);
        optionDiv.appendChild(optionText);
        optionsContainer.appendChild(optionDiv);
    });

    // Update progress bar
    const progress = ((index + 1) / examState.questions.length) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;

    // Update flag button
    const flagBtn = document.getElementById('flagBtn');
    if (examState.flaggedQuestions.has(index)) {
        flagBtn.classList.add('flagged');
        flagBtn.textContent = '🚩 Flagged';
    } else {
        flagBtn.classList.remove('flagged');
        flagBtn.textContent = '🚩 Flag';
    }

    // Update question dots
    updateQuestionDots();
    updateNavigationButtons();
}

function selectAnswer(optionIndex) {
    examState.userAnswers[examState.currentQuestionIndex] = optionIndex;

    // Update UI
    const options = document.querySelectorAll('.option');
    options.forEach((opt, idx) => {
        if (idx === optionIndex) {
            opt.classList.add('selected');
        } else {
            opt.classList.remove('selected');
        }
    });

    updateQuestionDots();
}

function nextQuestion() {
    if (examState.currentQuestionIndex < examState.questions.length - 1) {
        examState.currentQuestionIndex++;
        displayQuestion();
    }
}

function previousQuestion() {
    if (examState.currentQuestionIndex > 0) {
        examState.currentQuestionIndex--;
        displayQuestion();
    }
}

function jumpToQuestion(index) {
    examState.currentQuestionIndex = index;
    displayQuestion();
}

function toggleFlag() {
    const index = examState.currentQuestionIndex;
    if (examState.flaggedQuestions.has(index)) {
        examState.flaggedQuestions.delete(index);
    } else {
        examState.flaggedQuestions.add(index);
    }
    displayQuestion();
}

function updateQuestionDots() {
    const dots = document.querySelectorAll('.question-dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('current', 'answered', 'flagged');

        if (index === examState.currentQuestionIndex) {
            dot.classList.add('current');
        }
        if (examState.userAnswers[index] !== null) {
            dot.classList.add('answered');
        }
        if (examState.flaggedQuestions.has(index)) {
            dot.classList.add('flagged');
        }
    });
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');

    // Update previous button
    prevBtn.disabled = examState.currentQuestionIndex === 0;

    // Show submit button on last question
    if (examState.currentQuestionIndex === examState.questions.length - 1) {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
    }
}

function startTimer() {
    const timerElement = document.getElementById('timer');
    timerElement.classList.remove('hidden');

    let timeRemaining = examState.timerDuration;

    examState.timerInterval = setInterval(() => {
        timeRemaining--;

        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerElement.textContent = `⏱️ ${minutes}:${seconds.toString().padStart(2, '0')}`;

        // Warning when less than 1 minute
        if (timeRemaining <= 60) {
            timerElement.classList.add('warning');
        }

        // Auto-submit when time runs out
        if (timeRemaining <= 0) {
            clearInterval(examState.timerInterval);
            submitExam();
        }
    }, 1000);
}

function submitExam() {
    if (examState.timerInterval) {
        clearInterval(examState.timerInterval);
    }

    // Calculate results
    const results = calculateResults();

    // Hide exam screen, show results
    document.getElementById('examScreen').classList.add('hidden');
    document.getElementById('resultsScreen').classList.remove('hidden');

    // Display results
    displayResults(results);
}

function calculateResults() {
    let correct = 0;
    let incorrect = 0;
    const details = [];

    examState.questions.forEach((question, index) => {
        const userAnswer = examState.userAnswers[index];
        const isCorrect = userAnswer === question.correctAnswer;

        if (userAnswer !== null) {
            if (isCorrect) {
                correct++;
            } else {
                incorrect++;
            }
        }

        details.push({
            question,
            userAnswer,
            isCorrect,
            skipped: userAnswer === null
        });
    });

    const timeTaken = Math.floor((Date.now() - examState.startTime) / 1000);
    const percentage = Math.round((correct / examState.questions.length) * 100);

    return {
        correct,
        incorrect,
        skipped: examState.questions.length - correct - incorrect,
        total: examState.questions.length,
        percentage,
        timeTaken,
        details
    };
}

function displayResults(results) {
    // Update score display
    document.getElementById('scorePercentage').textContent = `${results.percentage}%`;
    document.getElementById('correctCount').textContent = results.correct;
    document.getElementById('incorrectCount').textContent = results.incorrect;

    // Format time
    const minutes = Math.floor(results.timeTaken / 60);
    const seconds = results.timeTaken % 60;
    document.getElementById('timeTaken').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Display detailed breakdown
    const breakdownContainer = document.getElementById('resultsBreakdown');
    breakdownContainer.innerHTML = '<h3>Question Breakdown</h3>';

    results.details.forEach((detail, index) => {
        const resultCard = document.createElement('div');
        resultCard.className = `result-card ${detail.isCorrect ? 'correct' : detail.skipped ? 'skipped' : 'incorrect'}`;

        const questionNum = document.createElement('div');
        questionNum.className = 'result-question-num';
        questionNum.textContent = `Q${index + 1}`;

        const questionText = document.createElement('div');
        questionText.className = 'result-question-text';
        questionText.textContent = detail.question.question;

        const answerInfo = document.createElement('div');
        answerInfo.className = 'result-answer-info';

        if (detail.skipped) {
            answerInfo.innerHTML = '<span class="result-status">⊘ Skipped</span>';
        } else {
            const userAnswerText = detail.question.options[detail.userAnswer];
            const correctAnswerText = detail.question.options[detail.question.correctAnswer];

            if (detail.isCorrect) {
                answerInfo.innerHTML = `
                    <span class="result-status">✓ Correct</span>
                    <div class="result-answer">Your answer: ${userAnswerText}</div>
                `;
            } else {
                answerInfo.innerHTML = `
                    <span class="result-status">✗ Incorrect</span>
                    <div class="result-answer wrong">Your answer: ${userAnswerText}</div>
                    <div class="result-answer correct">Correct answer: ${correctAnswerText}</div>
                `;
            }
        }

        const explanation = document.createElement('div');
        explanation.className = 'result-explanation';
        explanation.textContent = detail.question.explanation;

        resultCard.appendChild(questionNum);
        resultCard.appendChild(questionText);
        resultCard.appendChild(answerInfo);
        resultCard.appendChild(explanation);

        breakdownContainer.appendChild(resultCard);
    });

    // Save to history (localStorage)
    saveExamHistory(results);
}

function saveExamHistory(results) {
    const history = JSON.parse(localStorage.getItem('examHistory') || '[]');
    history.push({
        date: new Date().toISOString(),
        mode: examState.mode,
        score: results.percentage,
        correct: results.correct,
        total: results.total,
        timeTaken: results.timeTaken
    });

    // Keep only last 10 exams
    if (history.length > 10) {
        history.shift();
    }

    localStorage.setItem('examHistory', JSON.stringify(history));
}

function reviewAnswers() {
    document.querySelector('.results-breakdown').scrollIntoView({ behavior: 'smooth' });
}

function retakeExam() {
    location.reload();
}

function quitExam() {
    if (confirm('Are you sure you want to quit? Your progress will be lost.')) {
        location.reload();
    }
}

// UI Navigation Functions
function showModeSelection() {
    document.getElementById('modeSelection').classList.remove('hidden');
    document.getElementById('chapterSelection').classList.add('hidden');
    document.getElementById('customSelection').classList.add('hidden');
}

function showChapterSelection() {
    document.getElementById('modeSelection').classList.add('hidden');
    document.getElementById('chapterSelection').classList.remove('hidden');
}

function showCustomSelection() {
    document.getElementById('modeSelection').classList.add('hidden');
    document.getElementById('customSelection').classList.remove('hidden');
}

// Utility Functions
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function getRandomQuestions(questions, count) {
    const shuffled = shuffleArray(questions);
    return shuffled.slice(0, count);
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (document.getElementById('examScreen').classList.contains('hidden')) return;

    // 1-4 for selecting answers
    if (e.key >= '1' && e.key <= '4') {
        const optionIndex = parseInt(e.key) - 1;
        const options = document.querySelectorAll('.option');
        if (options[optionIndex]) {
            selectAnswer(optionIndex);
        }
    }

    // N for next
    if (e.key === 'n' || e.key === 'N') {
        nextQuestion();
    }

    // P for previous
    if (e.key === 'p' || e.key === 'P') {
        previousQuestion();
    }

    // F for flag
    if (e.key === 'f' || e.key === 'F') {
        toggleFlag();
    }
});
