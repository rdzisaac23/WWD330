import Todos from 'todos.js';

const todos = [new Todos()];

// list class: Save to localStorage
export default class LocalStorage {
    
    getTodos(){
        let listTodos;
        if(localStorage.getItem('listTodos') === null){
            listTodos = [];
        } else {
            listTodos = JSON.parse(localStorage.getItem('listToDo'));
        }
        return listTodos;
    }

    saveLocalStorage(todos) {
        let listToDo = this.todos;
        if (localStorage.getItem('listToDo') === null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem('todos'));
        }

        todos.push(todo);
        localStorage.setItem('listToDo', JSON.stringify(listToDo))
    }

    displayTodos() {
        let todos = this.todos;
        if (localStorage.getItem('listToDo') === null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem('todos'));
        }

        todos.forEach((todo) => LocalStorage.addTodoList(todo));

    }
}