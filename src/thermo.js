class Thermostat {
    default_temperature = 20;
    power_safe_default = true;
    max_non_powersafe_temp = 32;
    max_powersafe_temp = 25;
    MIN_TEMP = 10;

    constructor(temperature) {
        this.temperature = this.default_temperature;
        this.power_safe = this.power_safe_default;
        this.max_temperature = this.max_powersafe_temp;
    }

    increase_temperature(number) {
        this.temperature += number;
        return this.temperature;
    }

    decrease_temperature(number) {
        const new_temperature = this.temperature - number;
        this.temperature = (new_temperature < this.MIN_TEMP) ? this.MIN_TEMP : new_temperature;
        return this.temperature
    }

    set_max_temperature() {
        this.max_temperature = (this.power_safe) ? this.max_powersafe_temp : this.max_non_powersafe_temp;
        return this.max_temperature;
    }

    clear_powersafe() {
        this.power_safe = false;
        this.set_max_temperature();
        return this.power_safe;
    }

    reset_temperature() {
        this.temperature = this.default_temperature
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