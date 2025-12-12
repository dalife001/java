// function 1 for the html
console.log("I'm printing to console!");
// function 2 for the html
function greetUser() {
    const name = document.getElementById('username').value;
    document.getElementById('greeting').innerText = `Hello, ${name}!`;
}

// function 3 for the html
function calculate(){
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const num3 = Number(document.getElementById('num3').value);

    const sum = num1 + num2 + num3;
    const product = num1 * num2 * num3;
    const average = sum / 3;

    document.getElementById('result').innerHTML =
        `Sum: ${sum}<br>Product: ${product}<br>Average: ${average}`;
}

// function 4 for the html
function sortingHat() {
    const name = document.getElementById('studentName').value;
    const houseNumber = Math.floor(Math.random() * 4) + 1; // 1-4
    let house = "";

    if (houseNumber === 1) {
        house = "Gryffindor";
    } else if (houseNumber === 2) {
        house = "Slytherin";
    } else if (houseNumber === 3) {
        house = "Hufflepuff";
    } else {
        house = "Ravenclaw";
    }

    document.getElementById('Result').innerText = `${name}, you are ${house}.`;
}