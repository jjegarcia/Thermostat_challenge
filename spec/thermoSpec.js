describe("Thermostat", function() {

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('Thermostat starts at 20 degrees', function(){
    it('starts at 20deg', function(){
      thermostat = new Thermostat();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('Can increase the temperature', function(){
    it('increase temperature', function(){
      thermostat = new Thermostat();
      expect(thermostat.increase_temperature(5)).toEqual(25);
    });
  });

  describe('Can increase the temperature', function(){
    it('increase temperature', function(){
      thermostat = new Thermostat();
      thermostat.increase_temperature(5);
      expect(thermostat.increase_temperature(5)).toEqual(30);
    });
  });


});