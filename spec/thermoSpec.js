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

  describe('The minimum temperature is 10', function() {
    it('Has a min temperature of 10', function(){
      expect(thermostat.MIN_TEMP).toEqual(10); 
    })

    it('has min temp of 10', function(){
      for (let i = 0; i < 11; i++) {
        thermostat.decrease_temperature(6);
      }
      expect(thermostat.temperature).toEqual(10); 
    })
  })


});