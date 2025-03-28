export let gameWord = "";

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
  console.log(newArray);
  return newArray;
};

export const validateEncryptionWord = (e, indices) => {
  let encryptedDiv = document.querySelector(".encrypted-word");
  let displayedWord = encryptedDiv.textContent.split("");
  let keyValue = e.target.textContent;
  for (let i = 0; i < displayedWord.length; i++) {
    let index = indices[i];
    if (index >= 0) {
      // due to the space created, reading index * 2 from the original index. 
      displayedWord[index * 2] = keyValue;
    }
  }
  console.log(displayedWord);
  encryptedDiv.textContent = displayedWord.join("");

  
  console.log(displayedWord.filter(x => x !== ' '));

  // value (letter) is not included in the randomWord, we want diagram of hangman to be appended

}

// branch 2

// ending 1
// If diagrams of hangman === 11 && encrypted letters >= 1, game over

// ending 2
// If all encrypted letters === 0, then game is done.
