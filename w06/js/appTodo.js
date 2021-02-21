import TodoController from './todoController.js';

const input = document.querySelector('.input');
const button = document.querySelector('.button');
const list = document.querySelector('.list');

// on load
const myTodoController = new TodoController;
window.addEventListener('load', () => {
    myTodoController.showTodoList();
});

button.addEventListener("click", function(event){
    // prevent the page to relod
    event.preventDefault();
    myTodoController.addTodo(input.value);
}); 


// list.addEventListener("click", myTodoController.update());

// document.addEventListener('click', filter);