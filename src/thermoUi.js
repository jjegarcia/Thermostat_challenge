const {Thermostat} = require("./thermo");
const thermostat = new Thermostat(20)

let ui_temp = document.getElementById("temperature");
ui_temp.value = 77;

let buttons = document.getElementsByTagName('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.color = "blue";
}
;
let diff = document.getElementById('diff');

let up_button = document.getElementById("up_button");
let down_button = document.getElementById("down_button");

function upButtonHandler(diff) {
    thermostat.increase_temperature(diff)
}

function downButtonHandler(diff) {
    thermostat.increase_temperature(diff)
}

up_button.addEventListener("click", () => upButtonHandler(diff))
down_button.addEventListener("click", () => downButtonHandler(diff))


