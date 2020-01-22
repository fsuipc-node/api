import { engines as offsets } from '@offsets/plane/engines';

describe('offset - plane/engines', () => {
  const offsetsTestCases = [
    { name: 'hasMixtureControl', value: 0, expectedResult: false },
    { name: 'hasMixtureControl', value: 1, expectedResult: true },
    { name: 'hasCarbHeat', value: 0, expectedResult: false },
    { name: 'hasCarbHeat', value: 1, expectedResult: true },

    // Engine 1
    { name: 'engine1ThrottleLever', value: -2048, expectedResult: -50 },
    { name: 'engine1ThrottleLever', value: 0, expectedResult: 0 },
    { name: 'engine1ThrottleLever', value: 8192, expectedResult: 50 },
    { name: 'engine1PropLever', value: -2048, expectedResult: -50 },
    { name: 'engine1PropLever', value: 0, expectedResult: 0 },
    { name: 'engine1PropLever', value: 8192, expectedResult: 50 },
    { name: 'engine1MixtureLever', value: 8192, expectedResult: 50 },
    { name: 'engine1Firing', value: 0, expectedResult: false },
    { name: 'engine1Firing', value: 1, expectedResult: true },
    { name: 'engine1N2', value: 8192, expectedResult: 50 },
    { name: 'engine1N1', value: 8192, expectedResult: 50 },
    { name: 'engine1PropRPM', value: 107374182400, expectedResult: 100 },
    { name: 'engine1FuelFlowLbHourSSL', value: 256, expectedResult: 2 },
    { name: 'engine1AntiIce', value: 0, expectedResult: false },
    { name: 'engine1AntiIce', value: 1, expectedResult: true },
    { name: 'engine1OilTemp', value: 10532, expectedResult: 90 },
    { name: 'engine1OilPres', value: 22342, expectedResult: 75 },
    { name: 'engine1PressureRatio', value: 20480, expectedResult: 2 },
    { name: 'engine1EGT', value: 14281, expectedResult: 750 },
    { name: 'engine1MP', value: 20480, expectedResult: 20 },
    { name: 'engine1OilQuantity', value: 8167, expectedResult: 50 },
    { name: 'engine1Vibration', value: 6553, expectedResult: 2 },
    { name: 'engine1HydPres', value: 64, expectedResult: 16 },
    { name: 'engine1HydQuantity', value: 8192, expectedResult: 50 },
    { name: 'engine1ITT', value: 3276800, expectedResult: 200 },
    { name: 'engine1Torque', value: 8192, expectedResult: 50 },
    { name: 'engine1FuelPres', value: 288, expectedResult: 2 },
    { name: 'engine1ElectricalLoad', value: 8192, expectedResult: 50 },
    { name: 'engine1TransmOilPres', value: 3276800, expectedResult: 200 },
    { name: 'engine1TransmOilTemp', value: 3276800, expectedResult: 200 },
    { name: 'engine1RotorRPM', value: 8192, expectedResult: 50 },

    // Engine 2
    { name: 'engine2ThrottleLever', value: -2048, expectedResult: -50 },
    { name: 'engine2ThrottleLever', value: 0, expectedResult: 0 },
    { name: 'engine2ThrottleLever', value: 8192, expectedResult: 50 },
    { name: 'engine2PropLever', value: -2048, expectedResult: -50 },
    { name: 'engine2PropLever', value: 0, expectedResult: 0 },
    { name: 'engine2PropLever', value: 8192, expectedResult: 50 },
    { name: 'engine2MixtureLever', value: 8192, expectedResult: 50 },
    { name: 'engine2Firing', value: 0, expectedResult: false },
    { name: 'engine2Firing', value: 1, expectedResult: true },
    { name: 'engine2N2', value: 8192, expectedResult: 50 },
    { name: 'engine2N1', value: 8192, expectedResult: 50 },
    { name: 'engine2PropRPM', value: 107374182400, expectedResult: 100 },
    { name: 'engine2FuelFlowLbHourSSL', value: 256, expectedResult: 2 },
    { name: 'engine2AntiIce', value: 0, expectedResult: false },
    { name: 'engine2AntiIce', value: 1, expectedResult: true },
    { name: 'engine2OilTemp', value: 10532, expectedResult: 90 },
    { name: 'engine2OilPres', value: 22342, expectedResult: 75 },
    { name: 'engine2PressureRatio', value: 20480, expectedResult: 2 },
    { name: 'engine2EGT', value: 14281, expectedResult: 750 },
    { name: 'engine2MP', value: 20480, expectedResult: 20 },
    { name: 'engine2OilQuantity', value: 8167, expectedResult: 50 },
    { name: 'engine2Vibration', value: 6553, expectedResult: 2 },
    { name: 'engine2HydPres', value: 64, expectedResult: 16 },
    { name: 'engine2HydQuantity', value: 8192, expectedResult: 50 },
    { name: 'engine2ITT', value: 3276800, expectedResult: 200 },
    { name: 'engine2Torque', value: 8192, expectedResult: 50 },
    { name: 'engine2FuelPres', value: 288, expectedResult: 2 },

    // Engine 3
    { name: 'engine3ThrottleLever', value: -2048, expectedResult: -50 },
    { name: 'engine3ThrottleLever', value: 0, expectedResult: 0 },
    { name: 'engine3ThrottleLever', value: 8192, expectedResult: 50 },
    { name: 'engine3PropLever', value: -2048, expectedResult: -50 },
    { name: 'engine3PropLever', value: 0, expectedResult: 0 },
    { name: 'engine3PropLever', value: 8192, expectedResult: 50 },
    { name: 'engine3MixtureLever', value: 8192, expectedResult: 50 },
    { name: 'engine3Firing', value: 0, expectedResult: false },
    { name: 'engine3Firing', value: 1, expectedResult: true },
    { name: 'engine3N2', value: 8192, expectedResult: 50 },
    { name: 'engine3N1', value: 8192, expectedResult: 50 },
    { name: 'engine3PropRPM', value: 107374182400, expectedResult: 100 },
    { name: 'engine3FuelFlowLbHourSSL', value: 256, expectedResult: 2 },
    { name: 'engine3AntiIce', value: 0, expectedResult: false },
    { name: 'engine3AntiIce', value: 1, expectedResult: true },
    { name: 'engine3OilTemp', value: 10532, expectedResult: 90 },
    { name: 'engine3OilPres', value: 22342, expectedResult: 75 },
    { name: 'engine3PressureRatio', value: 20480, expectedResult: 2 },
    { name: 'engine3EGT', value: 14281, expectedResult: 750 },
    { name: 'engine3MP', value: 20480, expectedResult: 20 },
    { name: 'engine3OilQuantity', value: 8167, expectedResult: 50 },
    { name: 'engine3Vibration', value: 6553, expectedResult: 2 },
    { name: 'engine3HydPres', value: 64, expectedResult: 16 },
    { name: 'engine3HydQuantity', value: 8192, expectedResult: 50 },
    { name: 'engine3ITT', value: 3276800, expectedResult: 200 },
    { name: 'engine3Torque', value: 8192, expectedResult: 50 },
    { name: 'engine3FuelPres', value: 288, expectedResult: 2 },

    // Engine 4
    { name: 'engine4ThrottleLever', value: -2048, expectedResult: -50 },
    { name: 'engine4ThrottleLever', value: 0, expectedResult: 0 },
    { name: 'engine4ThrottleLever', value: 8192, expectedResult: 50 },
    { name: 'engine4PropLever', value: -2048, expectedResult: -50 },
    { name: 'engine4PropLever', value: 0, expectedResult: 0 },
    { name: 'engine4PropLever', value: 8192, expectedResult: 50 },
    { name: 'engine4MixtureLever', value: 8192, expectedResult: 50 },
    { name: 'engine4Firing', value: 0, expectedResult: false },
    { name: 'engine4Firing', value: 1, expectedResult: true },
    { name: 'engine4N2', value: 8192, expectedResult: 50 },
    { name: 'engine4N1', value: 8192, expectedResult: 50 },
    { name: 'engine4PropRPM', value: 107374182400, expectedResult: 100 },
    { name: 'engine4FuelFlowLbHourSSL', value: 256, expectedResult: 2 },
    { name: 'engine4AntiIce', value: 0, expectedResult: false },
    { name: 'engine4AntiIce', value: 1, expectedResult: true },
    { name: 'engine4OilTemp', value: 10532, expectedResult: 90 },
    { name: 'engine4OilPres', value: 22342, expectedResult: 75 },
    { name: 'engine4PressureRatio', value: 20480, expectedResult: 2 },
    { name: 'engine4EGT', value: 14281, expectedResult: 750 },
    { name: 'engine4MP', value: 20480, expectedResult: 20 },
    { name: 'engine4OilQuantity', value: 8167, expectedResult: 50 },
    { name: 'engine4Vibration', value: 6553, expectedResult: 2 },
    { name: 'engine4HydPres', value: 64, expectedResult: 16 },
    { name: 'engine4HydQuantity', value: 8192, expectedResult: 50 },
    { name: 'engine4ITT', value: 3276800, expectedResult: 200 },
    { name: 'engine4Torque', value: 8192, expectedResult: 50 },
    { name: 'engine4FuelPres', value: 288, expectedResult: 2 },
  ];

  describe('offsets list', () => {
    it('should have required properties', () => {
      expect(offsets).toMatchSnapshot();
    });
  });

  offsetsTestCases.forEach(testedOffset => {
    describe(testedOffset.name, () => {
      it('should convert data properly', () => {
        const convertExpression = offsets[testedOffset.name].convert.replace(new RegExp(/{VAL}/g), testedOffset.value.toString());

        // tslint:disable-next-line:no-eval
        expect(eval(convertExpression)).toEqual(testedOffset.expectedResult);
      });
    });
  });
});
