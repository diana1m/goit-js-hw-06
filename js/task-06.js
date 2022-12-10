// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
// перевіряє його вміст щодо правильної кількості введених символів.

const input = document.querySelector('#validation-input');
input.addEventListener('blur', validation);
function validation(){
    input.classList.add('invalid');
    if (input.value.length === Number(input.getAttribute('data-length'))) {
        // input.style.borderColor = "#4caf50";
        input.classList.replace('invalid' , 'valid');
    } else {
        // input.style.borderColor = "#f44336";
        input.classList.replace('valid', 'invalid');
    }
    console.log(input);
}