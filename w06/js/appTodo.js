import TodoController from './todoController.js';

const input = document.querySelector('.input');
const button = document.querySelector('.button');


// on load
const myTodoController = new TodoController;
window.addEventListener('load', () => {
    myTodoController.showTodoList();
});

// add new todo
button.addEventListener("click", function(event){
    // prevent the page to relod
    event.preventDefault();
    myTodoController.addTodo(input.value);
    input.innerHTML = ''
});

// filter data
document.addEventListener('click', myTodoController.filter);

// remove