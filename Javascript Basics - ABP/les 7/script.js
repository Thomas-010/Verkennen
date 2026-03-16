
const button = document.getElementById("btn");
const input = document.getElementById("input");
const select = document.getElementById("select");
const box = document.getElementById("box");
const output = document.getElementById("output");

let kleur = ""

button.addEventListener("click", function () {
     output.textContent = "Knop geklikt"
});

input.addEventListener("keyup", function () {
    output.textContent = "Input: " + input.value;
});

select.addEventListener("change", function (){
    kleur = select.value;
    box.style.backgroundColor = kleur;
    output.textContent = "Kleur geselecteerd: " + kleur
});

box.addEventListener("mouseover", function (){
    box.style.backgroundColor = "yellow";
    output.textContent = "mouseover"
});

box.addEventListener("mouseout", function () {
    box.style.backgroundColor = kleur
    output.textContent = "mouseout"
});

document.addEventListener("keydown", function (event) {
    output.textContent = "Toets ingedrukt:" + event.key

});

