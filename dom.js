import { words, getRandomWord } from "./game.js";


export const initializeGame = () => {
    const button = document.querySelector("#btn-start");
    const randomWordQuery = document.querySelector(".random-word");
    
    button.addEventListener("click", () => {
      randomWordQuery.innerHTML = "";
      const textNode = document.createElement("div");
      const randomWord = getRandomWord(words);
      const encryptWord = randomWord.replace(/./g, '_ ').trim();
      textNode.textContent = encryptWord;
      randomWordQuery.appendChild(textNode);
    });
}
