const listEl = document.querySelector("#categories");
const listItems = listEl.children;
console.log(`Numbers of categories: ${listItems.length}`);

const itemEl = document.querySelectorAll(".item");

itemEl.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.children[1].children.length}`);
});
