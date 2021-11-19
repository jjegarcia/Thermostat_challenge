describe("Thermostat", function () {

    beforeEach(function () {
        thermostat = new Thermostat();
    });

    describe('Thermostat starts at 20 degrees', function () {
        it('starts at 20deg', function () {
            expect(thermostat.temperature).toEqual(20);
        });
    });

    describe('Can increase the temperature', function () {
        it('increase temperature', function () {
            expect(thermostat.increase_temperature(5)).toEqual(25);
        });
    });

    describe('Can increase the temperature', function () {
        it('increase temperature', function () {
            thermostat.increase_temperature(1);
            expect(thermostat.increase_temperature(2)).toEqual(23);
        });
    });

    describe('it wont exceed the maximum temperature', () =>
        it('the maximum temperature is 25', () => {
                for (let i = 0; i < 11; i++) {
                    thermostat.increase_temperature(3);
                }
            expect(thermostat.getTemperature()).toEqual(25)
            }
        ));

    describe('Can decrease the temperature', function () {
        it('decreases temperature', function () {
            expect(thermostat.decrease_temperature(2)).toEqual(18);
        });
    });

    describe('The minimum temperature is 10', function () {
        it('Has a min temperature of 10', function () {
            expect(MIN_TEMP).toEqual(10);
        })

        it('has min temp of 10', function () {
            for (let i = 0; i < 11; i++) {
                thermostat.decrease_temperature(20);
            }
            expect(thermostat.temperature).toEqual(10);
        })
    })

    describe('If power saving mode is on, the maximum temperature is 25 degrees', function () {

        it('has default power saving on', function () {
            expect(thermostat.power_safe).toEqual(true);
        })

        it('has default max temp of 25', function () {
            expect(thermostat.max_temperature).toEqual(25);
        })
    })

    it('has max temp of 25 if in powersafe mode', function () {
        expect(thermostat.set_max_temperature()).toEqual(25);
    })

    it('clear powersafe mode', function () {
        expect(thermostat.togglePowersafe()).toEqual(false);
    })

    it('has max temp of 32 if not in powersafe mode', function () {
        thermostat.togglePowersafe();
        expect(thermostat.set_max_temperature()).toEqual(32);
    })

    describe('You can reset the temperature to 20 with a reset function', function () {

        it('reset will set 20 degrees', function () {
            expect(thermostat.reset_temperature()).toEqual(20);
        })
    })

    describe('You can ask about the thermostat\'s current energy usage', function () {

        it('< 18 is low-usage', function () {
            thermostat.temperature = 13;
            expect(thermostat.energy_usage()).toEqual('low');
        })

        it('18-25 is medium-usage', function () {
            thermostat.temperature = 22;
            expect(thermostat.energy_usage()).toEqual('medium');
        })

        it('25+ is high-usage', function () {
            thermostat.temperature = 22;
            expect(thermostat.energy_usage()).toEqual('medium');
        })
    })

});