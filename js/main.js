const links = [{
        label: "Week notes",
        url: "w01/index.html"
    },
    {
        label: "Week2",
        url: "#"
    },
    {
        label: "Challenge 1: Todo",
        url: "#"
    },
    {
        label: "Tic Toc Game",
        url: "w04/tictoc.html"
    }
]

function orderList() {
    
    for (var i = 0; i < links.length; i++){
        //create a
         
        //create li items
        let a = document.createElement('a');
        let list = document.createElement('li');
    
        // Set contents
        a.textContent = links[i].label;
        a.setAttribute('href', links[i].url);
    
        // add them to the ol
        list.appendChild(a);
        console.log(list);

        document.querySelector('ol#order-list').appendChild(list);  
    }
      
};


links.forEach(orderList => {
});

console.log(links);
orderList();