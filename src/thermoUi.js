thermostat = new Thermostat()
let ui_temp = document.getElementById("temperature");
updateTemperature();

let buttons = document.getElementsByTagName('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.color = "blue";
}
;
let diff = document.querySelector('#diff').value;;
let up_button = document.getElementById("up_button");
let down_button = document.getElementById("down_button");

up_button.addEventListener("click", () => upButtonHandler(1))

down_button.addEventListener("click", () => downButtonHandler(diff))

function updateTemperature() {
    ui_temp.value = thermostat.getTemperature();
}

function upButtonHandler(diff) {
    updateTemperature(thermostat.increase_temperature(diff));
}

function downButtonHandler(diff) {
    updateTemperature( thermostat.decrease_temperature(diff));
}

