class Thermostat {
  
  constructor(temperature) { 
  this.temperature = 20;
  this.MIN_TEMP = 10;
  } 
  
  temperature() {
    return this.temperature ;
  }

  increase_temperature(number){
   this.temperature += number;
    return this.temperature;
  }

  decrease_temperature(number) {
    if (this.temperature > this.MIN_TEMP){
      this.temperature -= number; 
      return this.temperature 
    }
    else if (this.temperature === this.MIN_TEMP) {
        return this.MIN_TEMP
    }
    else {
      return this.MIN_TEMP;
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