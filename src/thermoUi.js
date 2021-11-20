const DEFAULT_DIFF_VALUE = 1;
thermostat = new Thermostat()
let temperature_bar = document.querySelector('.bar');
let ui_temp = document.getElementById("temperature");
let diff = document.querySelector('#diff');
let diffValue = DEFAULT_DIFF_VALUE;
let up_button = document.getElementById("up_button");
let down_button = document.getElementById("down_button");
let powersafe_switch = document.getElementById("powersafe_switch")
let buttons = document.getElementsByTagName('button');

updateTemperature();
for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.color = "blue";
}

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
    updateBarLength();
    updateBarColor();
}

function updateBarColor() {
    console.log('usage',thermostat.energy_usage());
    switch (thermostat.energy_usage()) {
        case ('low') : {
            temperature_bar.style.backgroundColor = 'green';
            console.log('green:',thermostat.getTemperature());
            break;
        }
        case ('medium') : {
            temperature_bar.style.backgroundColor = 'orange';
            console.log('orange:',thermostat.getTemperature());
            break;
        }
        case ('high') : {
            temperature_bar.style.backgroundColor = 'red';
            console.log('red:',thermostat.getTemperature());
            break;
        }
        default :
            temperature_bar.style.backgroundColor = 'blue';
            console.log('blue:',thermostat.getTemperature());

    }
}

function updateBarLength() {

}
