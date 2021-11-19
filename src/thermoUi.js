const DEFAULT_DIFF_VALUE = 1;
thermostat = new Thermostat()
let ui_temp = document.getElementById("temperature");
updateTemperature();

let buttons = document.getElementsByTagName('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.color = "blue";
}
;
let diff = document.querySelector('#diff');
let diffValue = DEFAULT_DIFF_VALUE;
let up_button = document.getElementById("up_button");
let down_button = document.getElementById("down_button");
let powersafe_switch = document.getElementById("powersafe_switch")
let temperature_bar = document.getElementById("temperature_bar");

diff.addEventListener('change', () => updateDiff(diff.value))
up_button.addEventListener("click", () => upButtonHandler(diffValue))
down_button.addEventListener("click", () => downButtonHandler(diffValue))
powersafe_switch.addEventListener('change', () => togglePowersafe())

function updateDiff(value) {
    diffValue = parseInt(value);
}

function updateTemperature() {
    ui_temp.value = thermostat.getTemperature();
    updateBar();
}

function upButtonHandler(diff) {
    updateTemperature(thermostat.increase_temperature(diff));
}

function downButtonHandler(diff) {
    updateTemperature(thermostat.decrease_temperature(diff));
}

function togglePowersafe() {
    thermostat.togglePowersafe();
    updateTemperature();
}

function updateBar() {
    temperature_bar.max=thermostat.getMaxTemperature();
    temperature_bar.value=thermostat.temperature();
    temperature_bar.style.color="red";
    // switch (thermostat.energy_usage()) {
    //     case ("low") : {
    //         bar.style.color = "green"
    //         break;
    //     }
    //     case ("medium") : {
    //         bar.style.color = "orange"
    //         break;
    //     }
    //     case ("high") : {
    //         bar.style.color = "red"
    //         break;
    //     }
    //     default :
    //         bar.style.color = "blue"
    // }
}


