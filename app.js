// Constants
const colorTextEl = document.getElementById('color-text');
const redBtn = document.getElementById('red');
const blueBtn = document.getElementById('blue');
const greenBtn = document.getElementById('green');
const blackBtn = document.getElementById('black');
const yellowBtn = document.getElementById('yellow');
const orangeBtn = document.getElementById('orange');
const resetBtn = document.getElementById('reset-btn');
const startBtn = document.getElementById('start-btn');
let yourScore = 0;
let incorrectScore = 0;

// Initial score
const positiveScoreEl = document.getElementById('score-num-1');
const negativeScoreEl = document.getElementById('score-num-2');

// Texts and Colors
const textArray = ['Red', 'Blue', 'Green', 'Black', 'Yellow', 'Orange'];
const colorArray = ['#ff4d4d', '#007BFF', '#28A745', '#333333', '#FFC107', '#ff8000'];

// function to set a new random text and color
function setRandomTextAndColor() {
    // get random text and update text
    currentText = textArray[Math.floor(Math.random() * textArray.length)];
    colorTextEl.textContent = currentText;

    // get random color and update color
    currentColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    colorTextEl.style.color = currentColor;
}

// Game Function
function gameLogic (userInput) {

     if (userInput === currentText) {
        yourScore++;
        positiveScoreEl.textContent = yourScore;
    }
    else {
        incorrectScore++;
        negativeScoreEl.textContent = incorrectScore;
    }
    setRandomTextAndColor();
}

// Event Listeners
redBtn.addEventListener('click', () => gameLogic('Red'));
blueBtn.addEventListener('click', () => gameLogic('Blue'));
greenBtn.addEventListener('click', () => gameLogic('Green'));
blackBtn.addEventListener('click', () => gameLogic('Black'));
yellowBtn.addEventListener('click', () => gameLogic('Yellow'));
orangeBtn.addEventListener('click', () => gameLogic('Orange'));

// Reset the Game
resetBtn.addEventListener('click', () => {
    yourScore = 0;
    incorrectScore = 0;
    positiveScoreEl.textContent = yourScore;
    negativeScoreEl.textContent = incorrectScore;
    colorTextEl.textContent = '--';
    colorTextEl.style.color = '#333333';
});

// Start the Game
startBtn.addEventListener('click', () => {
    setRandomTextAndColor();
});