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
  fragment.append(item);
  return item;
})

list.appendChild(fragment);
console.log(list);
