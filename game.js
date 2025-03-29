import { appendDivAndWord } from "./dom.js";

let gameStarted = false;
export let gameWord = "";
export let attempts = 0;

export const words = [
  "apple",
  "banana",
  "orange",
  "grape",
  "kiwi",
  "pear",
  "peach",
  "plum",
  "melon",
  "lemon",
  "pineapple",
  "mango",
  "papaya",
  "coconut",
  "strawberry",
  "blueberry",
  "raspberry",
  "blackberry",
  "cherry",
  "apricot",
  "tomato",
  "carrot",
  "potato",
  "onion",
  "garlic",
  "pepper",
  "lettuce",
  "broccoli",
  "spinach",
  "zucchini",
  "cucumber",
  "celery",
  "cauliflower",
  "asparagus",
  "mushroom",
  "pumpkin",
  "radish",
  "beetroot",
  "turnip",
  "parsnip",
  "elephant",
  "giraffe",
  "tiger",
  "lion",
  "cheetah",
  "leopard",
  "zebra",
  "rhino",
  "hippo",
  "buffalo",
  "kangaroo",
  "koala",
  "panda",
  "sloth",
  "chimpanzee",
  "gorilla",
  "orangutan",
  "lemur",
  "meerkat",
  "otter",
  "shark",
  "whale",
  "dolphin",
  "seal",
  "octopus",
  "jellyfish",
  "lobster",
  "crab",
  "shrimp",
  "starfish",
  "eagle",
  "sparrow",
  "parrot",
  "penguin",
  "ostrich",
  "flamingo",
  "peacock",
  "hummingbird",
  "owl",
  "falcon",
  "house",
  "apartment",
  "mansion",
  "cottage",
  "bungalow",
  "castle",
  "villa",
  "shack",
  "chalet",
  "palace",
  "bed",
  "chair",
  "table",
  "desk",
  "sofa",
  "couch",
  "cabinet",
  "wardrobe",
  "bookshelf",
  "dresser",
  "car",
  "bicycle",
  "motorcycle",
  "scooter",
  "truck",
  "bus",
  "train",
  "airplane",
  "helicopter",
  "boat",
  "submarine",
  "rocket",
  "spaceship",
  "hovercraft",
  "tram",
  "trolley",
  "taxi",
  "ferry",
  "yacht",
  "canoe",
  "violin",
  "guitar",
  "piano",
  "trumpet",
  "flute",
  "drums",
  "clarinet",
  "saxophone",
  "cello",
  "harp",
  "concert",
  "symphony",
  "melody",
  "harmony",
  "rhythm",
  "tempo",
  "note",
  "scale",
  "chord",
  "tune",
  "dog",
  "cat",
  "rabbit",
  "hamster",
  "goldfish",
  "parakeet",
  "ferret",
  "guinea",
  "chinchilla",
  "gerbil",
  "winter",
  "spring",
  "summer",
  "autumn",
  "snow",
  "rain",
  "hail",
  "sleet",
  "fog",
  "storm",
  "mountain",
  "river",
  "lake",
  "ocean",
  "forest",
  "desert",
  "valley",
  "canyon",
  "island",
  "waterfall",
  "kitchen",
  "bathroom",
  "bedroom",
  "livingroom",
  "garage",
  "basement",
  "attic",
  "hallway",
  "balcony",
  "patio",
  "science",
  "history",
  "math",
  "geography",
  "chemistry",
  "biology",
  "physics",
  "astronomy",
  "literature",
  "philosophy",
  "football",
  "basketball",
  "tennis",
  "golf",
  "soccer",
  "baseball",
  "hockey",
  "cricket",
  "rugby",
  "volleyball",
];

export const startGame = () => {
  const randomWord = getRandomWord(words);
  const encryptedWord = encryptWord(randomWord);
  appendDivAndWord("div", encryptedWord);
  gameStarted = true;
};

export const resetAttempt = () => {
  attempts = 0;
  attemptContainer.src = `./assets/img/h-${attempts}.jpg`;
};

export const getRandomWord = (words) => {
  let randomIndex = Math.floor(Math.random() * words.length);
  gameWord = words[randomIndex];
  console.log(gameWord);
  return gameWord;
};

export const encryptWord = (word) => {
  return word.replace(/./g, "_ ").trim();
};

export const compareValuesReturnIndex = (e, word) => {
  const value = e.target.textContent;
  const arr = word.split("");
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (value === arr[i]) {
      newArray.push(i);
    }
  }
  // console.log(newArray);
  return newArray;
};

const attemptQuery = document.querySelector(".attempt");
const attemptContainer = document.createElement("img");

export const validateEncryptionWord = (e, indices) => {
  let encryptedDiv = document.querySelector(".encrypted-word");
  let displayedWord = encryptedDiv.textContent.split("");
  let keyValue = e.target.textContent;
  const keyQuery = document.querySelector(`#${keyValue}`);
  keyQuery.classList.add("disabled");
  for (let i = 0; i < displayedWord.length; i++) {
    let index = indices[i];
    // due to the space created, reading index * 2 from the original index.
    if (gameWord.includes(keyValue)) {
      displayedWord[index * 2] = keyValue;
      //target key box, append disable class
    } else {
      attempts++;
      attemptContainer.src = `./assets/img/h-${attempts}.jpg`;
      attemptContainer.classList.add("attempt-img");
      attemptQuery.appendChild(attemptContainer);
      console.log("Attempts made: " + attempts);
      break;
    }
  }

  encryptedDiv.textContent = displayedWord.join("");

  console.log(displayedWord.filter((x) => x !== " "));

  const message = document.querySelector(".message");
  const boxes = document.querySelectorAll(".box");
  const encrypted = document.querySelector(".encrypted-word");

  if (displayedWord.every((x) => x !== "_")) {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = "Well done! You've guessed the word :)";
    message.appendChild(messageDiv);
    attempts = 0;
  } else if (attempts === 10) {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = "Sorry, please try again with 'RESTART GAME'";
    message.appendChild(messageDiv);
    const button = document.querySelector("#btn-start");
    button.textContent = "RESTART GAME";
    attempts = 0;
    boxes.forEach((box) => {
      box.classList.add("disabled");
    });
    console.log(gameWord);
    encrypted.textContent = gameWord;
  }

  // value (letter) is not included in the randomWord, we want diagram of hangman to be appended
};

// branch 2

// ending 1
// If diagrams of hangman === 11 && encrypted letters >= 1, game over

// ending 2
// If all encrypted letters === 0, then game is done.
