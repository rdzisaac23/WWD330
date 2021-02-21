
export default class TodoModel {

    getFromLocalStorage(){
        let todos;
        if (localStorage.getItem('todos') === null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem('todos'));
        }
        return todos;
    }

    addToLocalStorage(todos) {
        // convert array to string
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    removeTodo(id){
        const todos = TodoModel.getTodosList();
        todos.forEach(todo, index => {
            if (todo.id === id) {
                todos.splice(index, 1);
            }
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    }
}