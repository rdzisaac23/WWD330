class TodoView {

    renderTodoList(todoListElement, todoList) {
        // Controller will decide where to place the list
        // const list = document.querySelector('.list');

        todoListElement.innerHTML = '';
        // the list of todos doesn't exist here in the view either...so I've passed that in as well.
        todoList.forEach((todo) => {
            // this is like './' to find a path
            todoListElement.appendChild(this.renderOneTodo(todo, todoListElement));
        });
    }

    renderOneTodo(todo, parent) {

        // create div
        let div = document.createElement('div');
        div.classList.add("todo");

        // Complete a task
        let complete = document.createElement('button')
        complete.innerHTML = '&#x2713;';
        // console.log(complete);
        if (todo.completed) {
            complete.classList.add("completed");
        } else {
            complete.classList.add("complete");
        }
        div.appendChild(complete);

        //create list
        let li = document.createElement('li');
        li.classList.add("list-element");
        li.setAttribute('data-key', todo.id);
        li.innerText = todo.name;
        div.appendChild(li);

        // create Remove a task
        let remove = document.createElement('button');
        remove.classList.add("remove");
        remove.innerHTML = '&#x2716;'
        //console.log(remove);
        div.appendChild(remove);

        // append to the list
        parent.appendChild(div);

        return div;
    }

    renderFull(parent, list) {

    }
}


export default TodoView;