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
let gameFinished = false;


//Game start button
button.addEventListener("click", () => {
  let gameStatus = startGame();
  gameFinished = gameStatus;
  console.log(gameFinished);
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
    let gameResult = validateEncryptionWord(e, indices, false);
    console.log(gameResult);
    gameFinished = gameResult;
    console.log(gameFinished);
  });
});

document.addEventListener("keydown", (e) => {
  if (!gameFinished) {
    let indices = compareValuesReturnIndex(e, gameWord, true);
    let gameResult = validateEncryptionWord(e, indices, true);
     console.log(indices);
     gameFinished = gameResult;
     console.log(gameFinished)
  }
});

//game logic
// key stroke, we get the value
// branch 1
// value (letter) is included in randomWord, we want the letter to be decrypted and filled in.
