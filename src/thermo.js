class Thermostat {
    max_non_powersafe_temp=32;

    constructor(temperature) {
        this.power_safe_default = true;
        this.max_powersafe_temp = 25;
        this.temperature = 20;
        this.MIN_TEMP = 10;
        this.power_safe = this.power_safe_default;
        this.max_temperature = this.max_powersafe_temp;
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
            this.temperature = this.MIN_TEMP;
        } else {
            this.temperature = new_temperature;
        }
        return this.temperature
    }

    set_max_temperature() {
        if (this.power_safe) {
            this.max_temperature = this.max_powersafe_temp;
        }
        else{
            this.max_temperature = this.max_non_powersafe_temp;
        }
        return this.max_temperature;
    }

    clear_powersafe() {
        this.power_safe = false;
        this.set_max_temperature();
        return this.power_safe;
    }
}

let thermo = new Thermostat();
// console.log(thermo.temperature);
// console.log(thermo.increase_temperature(5));
// console.log(thermo.increase_temperature(5));

// console.log(thermo.decrease_temperature(5));
// console.log(thermo.decrease_temperature(5));
// console.log(thermo.increase_temperature(5));