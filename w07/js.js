const input = document.querySelector('.input');
const button = document.querySelector('.button')
const result = document.querySelector('.result');

button.addEventListener('click', square);

function square(e) {
    e.preventDefault();
    let x = input.value;
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x * x;
    }

    result.innerHTML = square.cache[x]
    console.log(square.cache);

    return square.cache[x];
}


// Immediately Invoked Function Expressions
(function () {
    const temp = 'World';
    console.log(`Hello ${temp}`);
})();

// Initialization 

(function () {
    const name = 'Peter Parker'; // This might be obtained from a cookie in reality
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(),
        today = days[date.getDay()];
    console.log(`Welcome back ${name}. Today is ${today}`);
})();

// or this way

{
    const name = 'Miles Morales'; // This might be obtained from a cookie in reality
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(),
        today = days[date.getDay()];
    console.log(`Welcome back ${name}. Today is ${today}`);
}