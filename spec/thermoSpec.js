describe("Thermostat", function() {

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('Thermostat starts at 20 degrees', function(){
    it('starts at 20deg', function(){
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('Can increase the temperature', function(){
    it('increase temperature', function(){
      expect(thermostat.increase_temperature(5)).toEqual(25);
    });
  });

  describe('Can increase the temperature', function(){
    it('increase temperature', function(){
      thermostat.increase_temperature(5);
      expect(thermostat.increase_temperature(5)).toEqual(30);
    });
  });

  describe('Can decrease the temperature', function(){
    it('decreases temperature', function(){
      expect(thermostat.decrease_temperature(2)).toEqual(18); 
    });
  });


});