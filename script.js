'use strict';
// Select Elements
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const inputValue = document.querySelector('.guess');
const messageLabel = document.querySelector('.message');
const correctNumber = document.querySelector('.number');
const body = document.querySelector('body');
const highScoreLabel = document.querySelector('.highscore');
const mainScore = document.querySelector('.score');

// Set Score , highscore and the random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Functions
const displayMessage = function (message) {
  messageLabel.textContent = message;
};

checkBtn.addEventListener('click', function () {
  const guess = Number(inputValue.value);

  // Check the correct number
  if (!guess) {
    displayMessage('⛔️ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    correctNumber.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    correctNumber.style.width = '30rem';

    //  Set score
    if (score > highscore) {
      highscore = score;
      highScoreLabel.textContent = highscore;
    }
  }
  // Check if number is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      mainScore.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      mainScore.textContent = 0;
    }
  }
});

againBtn.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  mainScore.textContent = score;
  correctNumber.textContent = '?';
  inputValue.value = '';

  body.style.backgroundColor = '#222';
  correctNumber.style.width = '15rem';
});
