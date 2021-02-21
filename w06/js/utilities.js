// select elements
const input = document.querySelector('.input');
const button = document.querySelector('.button');
const list = document.querySelector('.list');
const filterAll = document.querySelector('.filter-all');
const filterActive = document.querySelector('.filter-active');
const filterCompleted = document.querySelector('.filter-completed');
const tasks = document.querySelector('.missing');
let todos = []; // array to stores the todos


// Event Listener

button.addEventListener("click", function (event) {
    // prevent submitting
    event.preventDefault();
    // console.log(event)
    add(input.value);
});
list.addEventListener("click", remove);
document.addEventListener('click', filter);


// function to add todo to the array and then render
