const inputEl = document.querySelector("#validation-input");

const validValue = Number(inputEl.getAttribute("data-length"));

const handleAddValidClass = (element) => {
  if (element.classList.contains("invalid")) {
    element.classList.remove("invalid");
  }
  element.classList.add("valid");
};

const handleAddInvalidClass = (element) => {
  if (element.classList.contains("valid")) {
    element.classList.remove("valid");
  }
  element.classList.add("invalid");
};

const validateNumberOfSymbols = inputEl.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === validValue) {
    handleAddValidClass(inputEl);
  } else {
    handleAddInvalidClass(inputEl);
  }
});
