const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingred = document.querySelector('#ingredients');
console.dir(ingred);

const liArray = [];
ingredients.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  li.classList.add("item");
  liArray.push(li);
});
console.log(...liArray);
ingred.append(...liArray);


