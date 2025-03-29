import {
  words,
  getRandomWord,
  encryptWord,
  gameWord,
  compareValuesReturnIndex,
  validateEncryptionWord,
  attempts,
  startGame,
  resetAttempt
} from "./game.js";

const button = document.querySelector("#btn-start");
const keyButton = document.querySelectorAll(".box");
const message = document.querySelector(".message");
const boxes = document.querySelectorAll(".box");
const attempt = document.querySelector(".attempt");
const attemptImg = document.querySelector(".attempt-img");

//Game start button
button.addEventListener("click", () => {
  startGame()

  message.textContent = "";
  boxes.forEach((box) => {
    box.classList.remove("disabled");
  });
  resetAttempt();
  if(attemptImg) {
    attemptImg.remove();
    const imgContainer = document.createElement('img');
    imgContainer.classList.add('attempt-img');
    imgContainer.src = "./assets/img/h-0.jpg";
    attempt.appendChild(imgContainer);
  }

});

//eventlistener to the keyboard
// When keyboard is clicked, then 'guess' is appended
//
keyButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    let indices = compareValuesReturnIndex(e, gameWord);
    validateEncryptionWord(e, indices);
  });
});

//game logic
// key stroke, we get the value
// branch 1
// value (letter) is included in randomWord, we want the letter to be decrypted and filled in.
