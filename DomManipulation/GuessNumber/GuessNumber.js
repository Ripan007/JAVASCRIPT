"use strict";
/* --------------------------- 0 is a falsy value --------------------------- */
/* -------- by default input value => are  of type string ------- */

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
console.log(secretNumber);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  /* ------------------------- when there is no input ------------------------- */
  if (!guess) {
    document.querySelector(".message").textContent = "❌ no  numnber";
    /* ---------------------------- guess is  correct --------------------------- */
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "10rem";
    document.querySelector(".number").style.borderRadius = "2rem";
    document.querySelector(".number").style.border = "5px solid white";
    document.querySelector(".number").style.textAlign = "center";

    document.querySelector(".message").textContent = "🫡 correct number";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".high-score").textContent = score;
    }
    /* ------------------------------ guess is high ----------------------------- */
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "👇 high number";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "👇you lose the game";
      document.querySelector(".score").textContent = 0;
    }
    /* ------------------------------ guess is low ------------------------------ */
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "👆low number";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "👇you  lose the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber);
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "start guessing";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector(".number").style.borderRadius = "0.2rem";
  document.querySelector(".high-score").textContent = 0;
});
