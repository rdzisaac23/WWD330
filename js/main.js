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

function unorderList() {
    
    for (var i = 0; i < links.length; i++){
        //create li items
        let list = document.createElement('li');
        
        //create a
        let a = document.createElement('a'); 
    
        // Set contents
        a.textContent = links[i].label;
        a.setAttribute('href', links[i].url);
    
        // add them to the ol
        list.appendChild(a);
        console.log(list);

        document.querySelector('ul#unorder-list').appendChild(list);  
    }
      
};


links.forEach(unorderList => {
});

console.log(links);
unorderList();