describe("Thermostat", function() {

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('Thermostat starts at 20 degrees', function(){
    it('starts at 20deg', function(){
      thermostat = new Thermostat();
      expect(thermostat.temperature()).toEqual(20);
    });
  });

});