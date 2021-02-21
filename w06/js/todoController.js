import TodoModel from './todoModel.js';
import TodoView from './todoView.js';

export default class TodoController {
    // a class needs a constructor
    constructor() {
        this.list = document.querySelector('.list');
        this.todoModel = new TodoModel();
        this.todoView = new TodoView();
        this.todos = [];
        
    }

    addTodo(item) {
        console.log(item);
        // check if it's empty
        if (item != '') {
            // create an abject
            const todo = {
                id: Date.now(),
                name: item,
                completed: false
            };
            this.todos.push(todo);
            this.todoModel.addToLocalStorage(this.todos);
            this.showTodoList();
        }
    }

    showTodoList() {
        // The list will come from the model
        this.todos = this.todoModel.getFromLocalStorage();
        // send the list and element to where we want to display
        this.todoView.renderTodoList(this.list, this.todos);
        // after the render add the listner
        this.addTodoListListener();
    }

    addTodoListListener(){
        this.list.addEventListener("click", this.update);
    }

    update(e) {
        //  console.log(e);
        const li = e.target;
        if (li.classList[0] === "remove") {
            this.todoModel.removeTodos(e.target.parentElement.getAttribute('data-key'));
        } else if (li.classList[0] === "complete") {
            let check = li.parentElement;
            check.classList.toggle("completed");
        } else {

        }
    }

    deleteTodo(id) {
        // filter the item with the id
        this.todos = this.todos.filter(function (item) {
            return item.id != id;
        });
        this.todoModel.addToLocalStorage(todos);
    }

    filter(e) {
        const items = list.childNodes;
        let tasks = document.querySelector('.missing');
        // console.log(tasks);
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


}

// select elements
const input = document.querySelector('.input');
const button = document.querySelector('.button');
const list = document.querySelector('.list');
const filterAll = document.querySelector('.filter-all');
const filterActive = document.querySelector('.filter-active');
const filterCompleted = document.querySelector('.filter-completed');