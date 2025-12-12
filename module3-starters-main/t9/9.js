document.getElementById("start").addEventListener("click", function () {
const input = document.getElementById("calculation").value;

let results;

if (input.includes("+")){
    const parts = input.split("+");
    results = parseFloat(parts[0]) + parseFloat(parts[1]);
} 
else if (input.includes("-")){
    const parts = input.split("-");
    results = parseFloat(parts[0]) - parseFloat(parts[1]);
}
else if (input.includes("*")){
    const parts = input.split("*");
    results = parseFloat(parts[0]) * parseFloat(parts[1]);
}
else if (input.includes("/")){
    const parts = input.split("/");
    results = parseFloat(parts[0]) / parseFloat(parts[1]);
}

document.getElementById("result").innerText = "Result: " + results;
});