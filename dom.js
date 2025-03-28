const randomWordQuery = document.querySelector(".random-word");

export const appendDivAndWord = (htmlContainer, word) => {
  resetinnerHTML(randomWordQuery);
  createContainerAndText(htmlContainer, word);
};

const resetinnerHTML = (query) => {
  return (query.innerHTML = "");
};

const createContainerAndText = (htmlContainer, word) => {
  const divElement = document.createElement(`${htmlContainer}`);
  divElement.textContent = word;
  divElement.classList.add("encrypted-word")
  randomWordQuery.appendChild(divElement);
};
