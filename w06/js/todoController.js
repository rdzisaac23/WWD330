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
        // console.log(e);
        let name = e.target.className;
        if (name === "remove") {
            let remove = e.target.parentElement;
            let id = remove.getAttribute('data-key');
            console.log(id);
            let child = this.firstChild;
            child.todoModel.removeTodos(id);
        //    console.log(this);
        // this.parentElement.TodoController.deleteTodo(target.parentElement.getAttribute('data-key'));
        } else if (name === "complete") {
            let check = e.target.parentElement;
            console.log(check);
            check.classList.toggle("completed");
            let id = e.target.parentElement.getAttribute('data-key');
            TodoController.toggle(id);
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

    toggle(id){
        this.todos.forEach(function(item){
            if (item.id == id){
                item.completed = !item.completed;
            }
        });
        this.todoModel.addToLocalStorage(this.todos);r
        return;
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