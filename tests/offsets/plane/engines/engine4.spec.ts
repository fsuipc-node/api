import { engine4 as offsets } from '@offsets/plane/engines/engine4';

describe('offset - plane/engines/engine4', () => {
  const offsetsTestCases = [
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
