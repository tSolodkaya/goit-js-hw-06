let value = 0;
const boxesEl = document.querySelector("#boxes");
const inputValueEl = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

createBtn.addEventListener("click", handleClickCreateBtn);
inputValueEl.addEventListener("input", handleValueChange);
destroyBtn.addEventListener("click", handleDestroyBtnClick);

function createBoxes(amount) {
  let widthOfElement = 30;
  let heightOfElements = 30;
  const arrayOfBoxes = [];

  for (let i = 1; i <= amount; i += 1) {
    const elementToCreate = document.createElement("div");
    elementToCreate.style.width = widthOfElement + "px";
    elementToCreate.style.height = heightOfElements + "px";
    elementToCreate.style.backgroundColor = getRandomHexColor();
    elementToCreate.style.margin = "10px";
    arrayOfBoxes.push(elementToCreate);
    widthOfElement += 10;
    heightOfElements += 10;
  }
  boxesEl.append(...arrayOfBoxes);
}

function handleValueChange(event) {
  value = event.currentTarget.value;
}

function handleClickCreateBtn(event) {
  boxesEl.innerHTML = " ";
  createBoxes(value);
  inputValueEl.value = 0;
}

function handleDestroyBtnClick(event) {
  boxesEl.innerHTML = " ";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
