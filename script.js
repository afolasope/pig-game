"use strict";
const diceImage = document.querySelector(".img-container img");
console.log(diceImage);
const rollDice = document.querySelector(".btn--roll");
const holdDice = document.querySelector(".btn--hold");
const newGame = document.querySelector(".btn--new");
const player0CurrScore = document.querySelector(".player-0-score");
const player1CurrScore = document.querySelector(".player-1-score");

const scoretotal0 = document.querySelector(".player-0-total");
const scoretotal1 = document.querySelector(".player-1-total");
const currentPlayer0 = document.querySelector(".player-0");
const currentPlayer1 = document.querySelector(".player-1");
diceImage.classList.add("hidden");
console.log(document.querySelector(".container"));

let activePlayer = 0;
console.log(activePlayer);
let currScore = 0;
let scores = [0, 0];

console.log(document.querySelector(".player-0"));

const handleHold = function () {
  // save total score
  scores[activePlayer] += currScore;
  document.querySelector(`.player-${activePlayer}-total`).textContent =
    scores[activePlayer];
  console.log(scores[1]);
  if (scores[activePlayer] >= 100) {
    document.querySelector(`.player-${activePlayer} h2`).innerHTML =
      "YOU WIN! 🏆";

    rollDice.setAttribute("disabled", true);
    holdDice.setAttribute("disabled", true);
  }

  // save current score
  currScore = 0;
  document.querySelector(`.player-${activePlayer}-score`).textContent =
    currScore;

  // switch player
  activePlayer = activePlayer === 0 ? 1 : 0;
  switchPlayerTheme();
};
const switchPlayerTheme = function () {
  if (activePlayer === 0) {
    currentPlayer0.classList.add("active-player");
    currentPlayer1.classList.remove("active-player");
  } else if (activePlayer === 1) {
    currentPlayer1.classList.add("active-player");
    currentPlayer0.classList.remove("active-player");
  }
};

const getDiceNum = function () {
  diceImage.classList.remove("hidden");
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceImage.src = `/dice-${dice}.png`;
  if (dice != 1) {
    currScore += dice;
    document.querySelector(`.player-${activePlayer}-score`).textContent =
      currScore;
  } else {
    currScore = 0;
    document.querySelector(`.player-${activePlayer}-score`).textContent =
      currScore;
    // switch between players
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
  switchPlayerTheme();
};
const resetGame = function () {
  scores = [0, 0];
  currScore = 0;
  player0CurrScore.textContent = currScore;
  player1CurrScore.textContent = currScore;
  scoretotal0.textContent = scores[0];
  scoretotal1.textContent = scores[1];
  rollDice.removeAttribute("disabled", true);
  holdDice.removeAttribute("disabled", true);
  document.querySelector(`.player-0 h2`).innerHTML = "PLAYER 1";
  document.querySelector(`.player-1 h2`).innerHTML = "PLAYER 2";
  activePlayer = 0;
};

rollDice.addEventListener("click", getDiceNum);
holdDice.addEventListener("click", handleHold);
newGame.addEventListener("click", resetGame);
