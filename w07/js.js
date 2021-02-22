const input = document.querySelector('.input');
const button = document.querySelector('.button')
const result = document.querySelector('.result');

button.addEventListener('click', square);

function square(e){
    e.preventDefault();
    let x = input.value;
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x*x;
    }

    result.innerHTML = square.cache[x]

    return square.cache[x];
}