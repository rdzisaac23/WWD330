// Hike View handler
export default class HikesView {
    constructor(listElementId) {
        // will need this
        this.imgBasePath = '//byui-cit.github.io/cit261/examples/';

    }
    renderHikeList(hikeList, listElement) {
        // loop through our list of hikes building out the appropriate HTML
        // for each and append it to the listElement
        listElement.innerHTML = '';

        hikeList.forEach(hike => {
            listElement.appendChild(this.renderOneHikeLight(hike));
        });
    }
    renderOneHikeLight(hike) {
        // this method will be used to create the list of hikes with less detail:
        //  name, image, distance, difficulty 
        const item = document.createElement('li');
        item.classList.add('light'); // name class light
        item.setAttribute('data-name', hike.name);
        item.innerHTML = ` <h2>${hike.name}</h2>
    <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${
      hike.imgAlt
    }"></div>
    <div>
            <div>
                <h3>Distance</h3>
                <p>${hike.distance}</p>
            </div>
            <div>
                <h3>Difficulty</h3>
                <p>${hike.difficulty}</p>
            </div>
    </div>`;

        return item;

    }
    renderOneHikeFull(hike, parentElement) {
        // this method will be used to one hike with full detail...you will need this for the stretch goal! 
    }
}