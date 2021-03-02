let rootURL = 'https://swapi.dev/api/';
const buttons = [document.querySelectorAll("button")];
console.log(buttons)
const container = document.querySelector(".container");

buttons.map((button) => {
    console.log(button);
   addEventListener('click', value)
})

function value(e) {
    console.log(e);
    let output = document.querySelector(".container");
    let selection = "";
    if (e.path[0].value) {
        selection = e.path[0].value.toLowerCase();
        // console.log(e.path[0].value);
        let swURL = rootURL + selection + "/";
        // console.log(swURL);
        output.innerHTML = "";
        connection(swURL, selection);
    } else {
        return;
    }
}

function connection(swURL, selection) {
    let output = document.querySelector(".container");
    fetch(swURL).then(res => {
        if (res.ok) {
            //console.log(res)
            res.json()
                .then(data => {
                    switch (selection) {
                        case 'films':
                            // console.log(data);
                            data.results.map((film) => {
                                films(film)
                            });
                            break;
                        case 'people':
                            const person = "";
                            // console.log(data);
                            data.results.map((person) => {
                                people(person)
                            });
                            if (data.next) {
                                output.appendChild(next())
                            }
                            break;
                        case 'planets':
                            // console.log(data);
                            data.results.map((planet) => {
                                planets(planet)
                            });
                            break;
                        case 'species':
                            console.log(data)
                            break;
                        case 'starships':
                            console.log(data)
                            break;
                        case 'vehicles':
                            console.log(data)
                            break;
                        default:
                            break;
                    }
                })
        } else {
            console.log("Not Ok")
        }
    })
}


function films(data) {
    const container = document.querySelector(".container");
    let div = document.createElement('div');
    let title = document.createElement('h2');
    let p = document.createElement('p');
    title.innerHTML = data.title;
    // console.log(title)
    p.innerHTML = data.opening_crawl;
    div.appendChild(title);
    div.appendChild(p);
    // console.log(div);
    container.appendChild(div);
}

function people(data) {
    const container = document.querySelector(".container");
    let div = document.createElement('div');
    let name = document.createElement('h2');
    let birth_year = document.createElement('p');
    name.innerHTML = data.name;
    // console.log(title)
    birth_year.innerHTML = data.birth_year;
    div.appendChild(name);
    div.appendChild(birth_year);
    // console.log(div);
    container.appendChild(div);
}

function planets(data) {
    const container = document.querySelector(".container");
    let div = document.createElement('div');
    let name = document.createElement('h2');
    let climate = document.createElement('p');
    name.innerHTML = data.name;
    // console.log(title)
    climate.innerHTML = data.climate;
    div.appendChild(name);
    div.appendChild(climate);
    // console.log(div);
    container.appendChild(div);
}

function previus() {
    const previus = document.createElement(button);
    return previus
}

function next() {
    const next = document.createElement("button")
    next.data = "next";
    next.innerHTML = 'Next';
    return next
}