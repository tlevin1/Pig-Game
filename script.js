'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
// # - selector for ID
// Selecting elements - DOM Element
const score0El = document.querySelector('#score--0');
// another way to do it
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currScore = 0;
let activePlayer = 0; // Player 1 - 0 Player 2 - 1

const curr0El = document.getElementById('current--0');
const curr1El = document.getElementById('current--1');

// Final Scores
const scores = [0, 0];

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const swtichPlayer = function () {
  // switch to next player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer == 0 ? 1 : 0;
  // reset curr score of inactive player
  currScore = 0;

  // removes class if not there
  player0El.classList.toggle('player-active');
  player1El.classList.toggle('player-active');
};

btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // 2 display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. Check if rolled 1 and if true, switch to
  // next player
  if (dice !== 1) {
    // Add dice to curr score
    currScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currScore;
  } else {
    swtichPlayer();
  }
});

btnHold.addEventListener('click', function () {
  // Add curr score to active players score
  scores[activePlayer] += currScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 20) {
    // Game Over
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('.player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('.player--active');
  } else {
    swtichPlayer();
  }
});
