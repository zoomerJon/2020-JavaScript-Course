'use strict';

// console.log(document.querySelector('.message').textContent);

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(typeof document.querySelector('.message').textContent);

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;
let gamePlaying = true;
let guess;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber);

let playerScore = Number(document.querySelector('.score').textContent);
let highScore = Number(document.querySelector('.highscore').textContent);
console.log(highScore);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);
  if (gamePlaying) {
    console.log(guess, typeof guess);
    console.log(playerScore);

    // When there is no input
    if (!guess) {
      displayMessage('No Number!');
    }
    // When player wins
    else if (guess === secretNumber) {
      displayMessage('Yeah Baby!');
      gamePlaying = false;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      // Check for high score
      if (playerScore > highScore) {
        highScore = playerScore;
        document.querySelector('.highscore').textContent = playerScore;
      }
    }
    // When guess is wrong
    else if (guess !== secretNumber) {
      if (playerScore > 1) {
        loseScore();
      } else {
        lose();
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = null;
  playerScore = Number(document.querySelector('.score').textContent);
  console.log(typeof playerScore, playerScore);
  gamePlaying = true;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

function loseScore() {
  playerScore--;
  document.querySelector('.score').textContent = playerScore;
  displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
}

function lose() {
  document.querySelector('.score').textContent = 0;
  document.querySelector('.message').textContent = 'You lost the game!';
}
