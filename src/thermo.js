class Thermostat {

    constructor(temperature) {
        this.temperature = 20;
        this.MIN_TEMP = 10;
    }

    temperature() {
        return this.temperature;
    }

    increase_temperature(number) {
        this.temperature += number;
        return this.temperature;
    }

    decrease_temperature(number) {
        const new_temperature = this.temperature - number;
        if (new_temperature < this.MIN_TEMP) {
            this.temperature = this.MIN_TEMP
        } else {
            this.temperature = new_temperature
        }
        return this.temperature
    }

}

let thermo = new Thermostat();
// console.log(thermo.temperature);
// console.log(thermo.increase_temperature(5));
// console.log(thermo.increase_temperature(5));

// console.log(thermo.decrease_temperature(5));
// console.log(thermo.decrease_temperature(5));
// console.log(thermo.increase_temperature(5));