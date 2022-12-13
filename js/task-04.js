const decrementBtn = document.querySelector(
  'button[data-action = "decrement"]'
);
const incrementBtn = document.querySelector(
  'button[data-action = "increment"]'
);
const valueEl = document.querySelector("#value");

let counterValue = 0;

const handleIncrementClick = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};
const handleDecrementClick = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

decrementBtn.addEventListener("click", handleDecrementClick);
incrementBtn.addEventListener("click", handleIncrementClick);
