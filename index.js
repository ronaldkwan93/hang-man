import { appendDivAndWord } from "./dom.js";
import {
  words,
  getRandomWord,
  encryptWord,
  gameWord,
  compareValuesReturnIndex,
  validateEncryptionWord,
} from "./game.js";

const button = document.querySelector("#btn-start");
const keyButton = document.querySelectorAll(".box");

//Game start button
button.addEventListener("click", () => {
  const randomWord = getRandomWord(words);
  const encryptedWord = encryptWord(randomWord);
  appendDivAndWord("div", encryptedWord);
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
