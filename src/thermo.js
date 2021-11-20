const LOW_USAGE_THRESHOLD = 18;
const HIGH_USAGE_THRESHOLD = 26;
const DEFAULT_TEMPERATURE = 20;
const POWER_SAFE_DEFAULT = true;
const MAX_NON_POWERSAFE_TEMP = 32;
const MAX_POWERSAFE_TEMP = 25;
const MIN_TEMP = 10;


class Thermostat {

    constructor() {
        // this.myGauge = this.getMyGauge();
        this.temperature = DEFAULT_TEMPERATURE;
        this.power_safe = POWER_SAFE_DEFAULT;
        this.max_temperature = MAX_POWERSAFE_TEMP;
    }

    increase_temperature(number) {
        const new_temperature = this.getTemperature() + number;
        this.reviewTemperature(new_temperature);
        return this.getTemperature();
    }

    reviewTemperature(new_temperature) {
        this.temperature = (new_temperature > this.getMaxTemperature()) ? this.getMaxTemperature() : new_temperature;
    }

    decrease_temperature(number) {
        const new_temperature = this.getTemperature() - number;
        this.temperature = (new_temperature < MIN_TEMP) ? MIN_TEMP : new_temperature;
        return this.getTemperature()
    }

    getTemperature() {
        return this.temperature;
    }

    set_max_temperature() {
        this.max_temperature = this.getPowerSafe() ? MAX_POWERSAFE_TEMP : MAX_NON_POWERSAFE_TEMP;
        return this.getMaxTemperature();
    }

    getMaxTemperature() {
        return this.max_temperature;
    }

    togglePowersafe() {
        this.power_safe = !this.power_safe;
        this.set_max_temperature();
        this.reviewTemperature(this.temperature);
        return this.getPowerSafe();
    }

    getPowerSafe() {
        return this.power_safe;
    }

    reset_temperature() {
        this.set_max_temperature();
        return this.getTemperature();
    }

    energy_usage() {
        if (this.getTemperature() < LOW_USAGE_THRESHOLD) {
            return 'low';
        }
        if ((this.getTemperature() >= LOW_USAGE_THRESHOLD) && (this.getTemperature() < HIGH_USAGE_THRESHOLD)) {
            return 'medium';
        }
        return 'high';
    }

}
