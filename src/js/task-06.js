// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
// перевіряє його вміст щодо правильної кількості введених символів.

const input = document.querySelector('#validation-input');
input.addEventListener('blur', validation);
function validation(){
    if (input.value.length < 6) {
        input.style.borderColor = "#f44336";
    } else {
        input.style.borderColor = "#4caf50";
    }
}