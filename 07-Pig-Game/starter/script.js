'use strict';

// Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Conditions
let gamePlaying, scores, currentScore, activePlayer;

const init = function () {
  gamePlaying = true;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');

  player0El.classList.contains('player--winner')
    ? player0El.classList.remove('player--winner')
    : player1El.classList.remove('player--winner');
};
init();

btnRoll.addEventListener('click', function () {
  if (gamePlaying) {
    // 1. Generate Random Dice Roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    // 2. Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3. Check for Rolled 1
    if (dice !== 1) {
      // Add Dice to Current Score
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // Switch to Next Player
      nextPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (gamePlaying) {
    // 1. Add Score to Player Score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if Player Won the Game
    if (scores[activePlayer] >= 20) {
      // Finish the Game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      gamePlaying = false;
      diceEl.classList.add('hidden');
    } else {
      // Switch to Next Player
      nextPlayer();
    }
  }
});

const nextPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnNew.addEventListener('click', init);
