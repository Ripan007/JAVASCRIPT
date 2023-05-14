'use strict';
// comments=> structuring of code , how we are  planning to build the feature
// selecting  elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting conditions
score0El.textContent = 0;

score1El.textContent = 0;
diceEl.classList.add('hidden');
// array we are  using  const
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// rolling dice functionality

btnRoll.addEventListener('click', function () {
  // 1.generate  a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // display  dice
  diceEl.classList.remove('hidden');
  //   manipulation of src
  diceEl.src = `dice-${dice}.png`;
  // check  for rolled 1 : if true switch  to next player
  if (dice !== 1) {
    // add dice to the current score
    currentScore += dice;
    // current0El.textContent = currentScore; //  change later
    // dynamically  assign  the  value
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // switch to necxt player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
