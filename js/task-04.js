const value = document.querySelector('#value');
let counterValue = 0;
console.log(value);

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener('click', clickMinus);
incrementBtn.addEventListener('click', clickPlus);

function clickMinus(evn){
    counterValue -=1;
    value.textContent = counterValue;
}

function clickPlus(evn){
    counterValue +=1;
    value.textContent = counterValue;
}
