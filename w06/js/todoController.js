import Todos from './todos';
import TodoModel from './todoModel';
import TodoView from './todoView';

export default class TodoController {
    // a class needs a constructor
    constructor() {
        this.list = document.querySelector('.list');
        this.todoModel = new TodoModel();
        this.todoView = new TodoView();
    }

    addTodo(item) {
        // check if it's empty
        if (item !== '') {
            // create an abject
            const todo = {
                id: Date.now(),
                name: item,
                completed: false
            };
            todos.push(todo);
            this.todoModel.addToLocalStorage(todos);
            this.showTodoList();
        }
    }

    showTodoList() {
        // The list will come from the model
        const listTodo = this.todoModel.getFromLocalStorage();
        // send the list and element to where we want to display
        this.todoView.renderTodoList(this.list, listTodo);
    }

}

// select elements
const input = document.querySelector('.input');
const button = document.querySelector('.button');
const list = document.querySelector('.list');
const filterAll = document.querySelector('.filter-all');
const filterActive = document.querySelector('.filter-active');
const filterCompleted = document.querySelector('.filter-completed');
const tasks = document.querySelector('.missing');
// const complete = document.querySelector('complete');

// Event Listener
button.addEventListener("click", add);
list.addEventListener("click", remove);
document.addEventListener('click', filter);


// function to filter information
function filter(e) {
    const items = list.childNodes;
    let count = 0;

    items.forEach(function (item) {
        if (!item.classList.contains("completed")) {
            count += 1;
        }
    })
    tasks.innerHTML = count;

    const className = e.target.classList;

    // console.log(className);
    items.forEach(function (item) {
        switch (className.value) {
            case 'filter-all':
                item.style.display = 'flex';
                break;
            case 'filter-completed':
                // console.log(item);
                if (item.classList.contains("completed")) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
                break;
            case 'filter-active':
                if (!item.classList.contains("completed")) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
                break;
        }
    });
}

// function complete
function remove(e) {
    const li = e.target
    if (li.classList[0] === "remove") {
        const item = li.parentElement;
        item.remove();
    } else if (li.classList[0] === "complete") {
        let check = li.parentElement;
        check.classList.toggle("completed");
    } else {

    }
}