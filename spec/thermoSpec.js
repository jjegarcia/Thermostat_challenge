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
        thermostat.decrease_temperature(20);
      }
      expect(thermostat.temperature).toEqual(10); 
    })
  })

  describe('If power saving mode is on, the maximum temperature is 25 degrees', function() {

    it('has default power saving on', function(){
      expect(thermostat.power_safe).toEqual(true);
    })

    it('has default max temp of 25', function(){
      expect(thermostat.max_temperature).toEqual(25);
    })
  })

  it('has max temp of 25 if in powersafe mode', function(){
    expect(thermostat.set_max_temperature()).toEqual(25);
  })

  it('clear powersafe mode', function(){

    expect(thermostat.clear_powersafe()).toEqual(false);
  })

  it('has max temp of 32 if not in powersafe mode', function(){
    thermostat.clear_powersafe();
    expect(thermostat.set_max_temperature()).toEqual(32);
  })

});