function read(){
    const text = document.getElementById('test').value;
    console.log(text);
    const copy = document.getElementById('result');

    copy.innerHTML = "This is a test " + text;
}

function sum(){
    const number = parseInt(document.getElementById('number').value);
    console.log(number)
    let sum = document.getElementById('sum');

    if (number !==NaN){
        sum.innerHTML = sumNumbers(number);
    }
}

function sumNumbers(x){
    let total = 0;
    for (let i = 1; i <= x; i++){
        total += i;
    }
    return total;
}

function plus(){
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    let suma = document.getElementById('suma');

    suma.innerHTML = number1 + number2
}