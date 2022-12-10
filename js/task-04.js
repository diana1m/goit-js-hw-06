const value = document.querySelector('#value');

console.log(value);

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener('click', clickMinus);
incrementBtn.addEventListener('click', clickPlus);

function clickMinus(evn){
    value.textContent -= 1;
}

function clickPlus(evn){
   value.textContent = Number(value.textContent) + 1;
}

