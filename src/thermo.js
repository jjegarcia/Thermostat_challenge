class Thermostat {
  
  constructor(temperature) { 
  this.temperature = 20;
  } 
  
  temperature() {
    return this.temperature ;
  }

  increase_temperature(number){
   this.temperature += number;
    return this.temperature;
  }

  decrease_temperature(number) {
    this.temperature -= number;
    return this.temperature
  }

}
let thermo = new Thermostat();
console.log(thermo.temperature);
console.log(thermo.increase_temperature(5));
console.log(thermo.increase_temperature(5));