const changeColorButton = document.querySelector(".change-color");
const textColorEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

changeColorButton.addEventListener("click", handleChangeColorBtnClick);

function handleChangeColorBtnClick(event) {
  const color = getRandomHexColor();
  textColorEl.textContent = color;
  bodyEl.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
