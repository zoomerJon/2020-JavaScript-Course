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

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber);

let playerScore = Number(document.querySelector('.score').textContent);
let highScore = Number(document.querySelector('.highscore').textContent);
console.log(highScore);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (gamePlaying) {
    console.log(guess, typeof guess);
    console.log(playerScore);

    // When there is no input
    if (!guess) {
      document.querySelector('.message').textContent = 'No Number!';
    }
    // When player wins
    else if (guess === secretNumber) {
      document.querySelector('.message').textContent = 'Yeah Baby!';
      gamePlaying = false;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (playerScore > highScore) {
        highScore = playerScore;
        document.querySelector('.highscore').textContent = playerScore;
      }
    }
    // When guess is too high
    else if (guess > secretNumber) {
      if (playerScore > 1) {
        document.querySelector('.message').textContent = 'Too high!';
        loseScore();
      } else {
        lose();
      }
    }
    // When guess is too low
    else if (guess < secretNumber) {
      if (playerScore > 1) {
        document.querySelector('.message').textContent = 'Too low!';
        loseScore();
      } else {
        lose();
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
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
}

function lose() {
  document.querySelector('.score').textContent = 0;
  document.querySelector('.message').textContent = 'You lose!';
}
