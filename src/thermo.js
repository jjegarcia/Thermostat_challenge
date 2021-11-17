const LOW_USAGE_THRESHOLD = 18;
const HIGH_USAGE_THRESHOLD = 26;
const DEFAULT_TEMPERATURE = 20;
const POWER_SAFE_DEFAULT = true;
const MAX_NON_POWERSAFE_TEMP = 32;
const MAX_POWERSAFE_TEMP = 25;
const MIN_TEMP = 10;


class Thermostat {

    constructor(temperature) {
        this.temperature = DEFAULT_TEMPERATURE;
        this.power_safe = POWER_SAFE_DEFAULT;
        this.max_temperature = MAX_POWERSAFE_TEMP;
    }

    increase_temperature(number) {
        this.temperature += number;
        return this.temperature;
    }

    decrease_temperature(number) {
        const new_temperature = this.temperature - number;
        this.temperature = (new_temperature < MIN_TEMP) ? MIN_TEMP : new_temperature;
        return this.temperature
    }

    set_max_temperature() {
        this.max_temperature = (this.power_safe) ? MAX_POWERSAFE_TEMP : MAX_NON_POWERSAFE_TEMP;
        return this.max_temperature;
    }

    clear_powersafe() {
        this.power_safe = false;
        this.set_max_temperature();
        return this.power_safe;
    }

    reset_temperature() {
        this.temperature = DEFAULT_TEMPERATURE
        return this.temperature
    }

    energy_usage() {
        if (this.temperature < LOW_USAGE_THRESHOLD) {
            return 'low';
        }
        if (LOW_USAGE_THRESHOLD < this.temperature < HIGH_USAGE_THRESHOLD) {
            return 'medium';
        }
        return 'high';
    }
}