class Thermostat {
  
  constructor(temperature) { 
  this.temperature = 20;
  } 
  
  temperature() {
    return this.temperature ;
  }

}
let thermo = new Thermostat();
console.log(thermo.temperature);