const inputEl = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");

inputEl.addEventListener("input", (event) => {
  const font = event.currentTarget.value;
  textEl.style.fontSize = font + "px";
});
