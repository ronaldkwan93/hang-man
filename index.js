import { appendDivAndWord } from "./dom.js";
import { words, getRandomWord, encryptWord } from "./game.js";

const button = document.querySelector("#btn-start");
const keyButton = document.querySelectorAll(".box");

//Game start button
button.addEventListener("click", () => {
  const randomWord = getRandomWord(words);
  const encryptedWord = encryptWord(randomWord);
  appendDivAndWord("div", encryptedWord);
});



