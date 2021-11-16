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
      console.log('temp',this.temperature)

      console.log('compare',this.temperature === 10 || this.temperature <10)

      this.temperature=10
      if (this.temperature === 10 || this.temperature <10) {
          console.log("here")
          return this.MIN_TEMP;
        }
        else {
          console.log("hhhhjhjh")
          this.temperature -= number;
          return this.temperature;
        }
    }

}

let thermo = new Thermostat();
// console.log(thermo.temperature);
// console.log(thermo.increase_temperature(5));
// console.log(thermo.increase_temperature(5));

// console.log(thermo.decrease_temperature(5));
// console.log(thermo.decrease_temperature(5));
// console.log(thermo.increase_temperature(5));