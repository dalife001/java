
document.getElementById("start").addEventListener("click", function () {
const valuee = document.getElementById('operation').value;
const number1 = parseFloat(document.getElementById('num1').value);
const number2 = parseFloat(document.getElementById('num2').value);

let result;

if (valuee === 'add') {
    result = number1 + number2;
}
else if (valuee === 'sub') {
    result = number1 - number2;
}
else if (valuee === 'multi') {
    result = number1 * number2;
}
else if (valuee === 'div') {
    result = number1 / number2;
}
document.getElementById('result').innerText = "Result: " + result;
});