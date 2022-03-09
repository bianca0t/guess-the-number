"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

let number = Math.trunc(Math.random() * 10) + 1;
let score = 5;

const displayMsg = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayModalMsg = function (message) {
  document.querySelector(".modal-message").textContent = message;
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const again = function () {
  score = 5;
  number = Math.trunc(Math.random() * 10) + 1;
  displayMsg("Start guessing...");
  document.querySelector(".score").textContent = 5;
  document.querySelector(".guess").value = "";
};

document.querySelector(".try").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMsg("Please enter a number!");
  } else if (guess === number) {
    openModal();
    displayModalMsg("You won!");
  } else if (guess !== number) {
    if (score > 1) {
      displayMsg(guess > number ? "Too High!" : "Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      openModal();
      displayModalMsg("You lost!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", again);

document.querySelector(".btn-modal").addEventListener("click", again);
document.querySelector(".btn-modal").addEventListener("click", closeModal);
