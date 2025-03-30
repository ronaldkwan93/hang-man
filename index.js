import {
  words,
  getRandomWord,
  encryptWord,
  gameWord,
  compareValuesReturnIndex,
  validateEncryptionWord,
  attempts,
  startGame,
  resetAttempt,
} from "./game.js";
import { resetUI } from "./dom.js";

const button = document.querySelector("#btn-start");
const keyButton = document.querySelectorAll(".box");

//Game start button
button.addEventListener("click", () => {
  startGame();
  resetUI();
  resetAttempt();
});

//eventlistener to the keyboard
// When keyboard is clicked, then 'guess' is appended
//
keyButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    let indices = compareValuesReturnIndex(e, gameWord, false);
    console.log(indices);
    validateEncryptionWord(e, indices, false);
  });
});

document.addEventListener("keydown", (e) => {
  let indices = compareValuesReturnIndex(e, gameWord, true);
  validateEncryptionWord(e, indices, true);
   console.log(indices);
});

//game logic
// key stroke, we get the value
// branch 1
// value (letter) is included in randomWord, we want the letter to be decrypted and filled in.
