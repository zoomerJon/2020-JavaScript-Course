'use strict';

// console.log(document.querySelector('.message').textContent);

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(typeof document.querySelector('.message').textContent);

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber);

let playerScore = Number(document.querySelector('.score').textContent);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Yeah Baby!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high!';
    loseScore();
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low!';
    loseScore();
  }
});

function loseScore() {
  playerScore--;
  document.querySelector('.score').textContent = playerScore;
}
