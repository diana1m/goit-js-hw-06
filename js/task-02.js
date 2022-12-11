const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];



// const markup = ingredients.map(ingredient => 
//   `<li class = "item">${ingredient}</li>`
// ).join('');
// list.insertAdjacentHTML("beforeend", markup);
// console.log(list);


const list = document.querySelector('#ingredients');
let fragment = new DocumentFragment ();

const items = ingredients.map(ingredient => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add('item');
  return item;
})

list.append(...items);
console.log(list);
