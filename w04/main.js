// const form = document.forms[0]; // document.forms.search

// // input.addEventListener('focus', () => alert('focused'), false);
// input.addEventListener('blur', () => alert('blurred'), false);
// input.addEventListener('change', () => alert('changed'), false);

const form = document.forms['search'];
const input = form.elements.searchInput;
input.value = 'Search Here';

input.addEventListener('focus', function () {
    if (input.value === 'Search Here') {
        input.value = ''
    }
}, false);
input.addEventListener('blur', function () {
    if (input.value === '') {
        input.value = 'Search Here';
    }
}, false);

form.addEventListener('submit', search, false);

function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}
// function search() {
//     alert(' Form Submitted');
// }

// document.forms.hero.heroName.focus();

const formHero = document.forms['hero'];
formHero.addEventListener('submit',validate,false);
formHero.addEventListener('submit', makeHero, false);
formHero.addEventListener('keyup', validateInline,false);
form.heroName.addEventListener('keyup',disableSubmit,false);

function makeHero(event) {
    event.preventDefault(); // prevent the form from being submitted
    const hero = {}; // create an empty object
    hero.name = formHero.heroName.value; // create a name property based on the input field's value
    hero.realName = formHero.realName.value;
    hero.category = formHero.category.value;
    hero.age = formHero.age.value;
    hero.city = formHero.city.value;
    hero.origin = formHero.origin.value;
    
    // hero.powers = [];
    // for (let i = 0; i < formHero.powers.length; i++) {
    //     if (formHero.powers[i].checked) {
    //         hero.powers.push(formHero.powers[i].value);
    //     }
    // }

    hero.powers = [...formHero.powers].filter(box => box.checked).map(box => box.value);

    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}

document.forms.hero.powers[0].checked = true;
document.forms.hero.category[2].checked = true;
document.forms.hero.origin.value = 'Born as kal-el on the planet Krypton';

function validate(event) {
    const firstLetter = formHero.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}

const label = formHero.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function validateInline() {
    hero.name = formHero.heroName.value; 
    const heroName = hero.name.toUpperCase();
    if(heroName.startsWith('X')){
    error.style.display = 'block';
    } else {
    error.style.display = 'none';
    }
}

function disableSubmit(event) {
    if(event.target.value === ''){
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}