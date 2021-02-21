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
list.addEventListener("click", check);
document.addEventListener('click', filter);

// function to filter information
function filter(e) {
    const items = list.childNodes;
    let count = 0;
    
    items.forEach(function (item){
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

// function to add
function add(e) {
    // prevent submitting
    e.preventDefault();
    // console.log(e)

    // create div
    let div = document.createElement('div');
    div.classList.add("todo");

    // Complete a task
    let complete = document.createElement('button')
    complete.innerHTML = '&#x2713;';
    // console.log(complete);
    complete.classList.add("complete");
    div.appendChild(complete);

    //create list
    let li = document.createElement('li');
    li.classList.add("list-element");
    li.innerText = input.value;
    div.appendChild(li);

    // create Remove a task
    let remove = document.createElement('button');
    remove.classList.add("remove");
    remove.innerHTML = '&#x2716;'
    //console.log(remove);
    div.appendChild(remove);

    // append to the list
    list.appendChild(div);

    // clear value
    input.value = "";

}

// function complete
function check(e) {
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