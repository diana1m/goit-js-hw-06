// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль 
// по кліку на button.change-color і виводить значення кольору в span.color

// Для генерування випадкового кольору використовуй функцію getRandomHexColor

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBtn = document.querySelector('.change-color');
const colorText = document.querySelector('.color');

colorBtn.addEventListener('click', changeColor);
function changeColor(evn){
  document.body.style.backgroundColor = getRandomHexColor();
  colorText.textContent = getRandomHexColor();
}
