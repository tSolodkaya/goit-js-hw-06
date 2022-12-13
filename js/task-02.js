const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const arrayOfItems = [];

const createListElement = (title) => {
  const item = document.createElement("li");
  item.textContent = title;
  item.classList = "item";
  arrayOfItems.push(item);
};

const itemsToInsertinMurkup = ingredients.forEach((element) => {
  createListElement(element);
});

listEl.append(...arrayOfItems);
