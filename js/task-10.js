let value = 0;
const refs = {
  boxesEl: document.querySelector("#boxes"),
  inputValueEl: document.querySelector("input"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
};

refs.createBtn.addEventListener("click", handleClickCreateBtn);
refs.destroyBtn.addEventListener("click", handleDestroyBtnClick);

function createBoxes(amount) {
  let widthOfElement = 30;
  let heightOfElements = 30;
  const arrayOfBoxes = [];
  const lastBoxElement = refs.boxesEl.lastElementChild;

  if (lastBoxElement) {
    widthOfElement = Number.parseInt(lastBoxElement.style.width) + 10;
    heightOfElements = Number.parseInt(lastBoxElement.style.height) + 10;
  }

  for (let i = 1; i <= amount; i += 1) {
    const elementToCreate = createDivElement(widthOfElement, heightOfElements);
    arrayOfBoxes.push(elementToCreate);
    widthOfElement += 10;
    heightOfElements += 10;
  }
  refs.boxesEl.append(...arrayOfBoxes);
}

function createDivElement(width, height) {
  const div = document.createElement("div");
  div.style.width = width + "px";
  div.style.height = height + "px";
  div.style.backgroundColor = getRandomHexColor();
  div.style.margin = "10px";
  return div;
}
function handleClickCreateBtn(event) {
  createBoxes(refs.inputValueEl.value);
  refs.inputValueEl.value = 0;
}

function handleDestroyBtnClick(event) {
  refs.boxesEl.innerHTML = " ";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
