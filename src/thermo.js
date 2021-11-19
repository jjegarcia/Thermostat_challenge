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

// getMyGauge() {
    //     return Gauge(document.getElementById("gauge-demo"), {
    //         dialRadius: 40,
    //         dialStartAngle: 135,
    //         dialEndAngle: 45,
    //         value: 0,
    //         max: 100,
    //         min: 0,
    //         valueDialClass: "value",
    //         valueClass: "value-text",
    //         dialClass: "dial",
    //         gaugeClass: "gauge",
    //         showValue: true,
    //         gaugeColor: null,
    //         label: function (val) {
    //             return Math.round(val);
    //         } // returns a string label that will be rendered in the center
    //     });
    // }

    increase_temperature(number) {
        const new_temperature = this.getTemperature() + number;
        this.temperature = (new_temperature > this.max_temperature) ? this.max_temperature : new_temperature;
        return this.getTemperature();
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
        return this.max_temperature;
    }

    togglePowersafe() {
        this.power_safe = !this.power_safe;
        this.set_max_temperature();
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
        if (LOW_USAGE_THRESHOLD < this.getTemperature() < HIGH_USAGE_THRESHOLD) {
            return 'medium';
        }
        return 'high';
    }
}
