import { engine3 as offsets } from '@offsets/plane/engines/engine3';
import { replaceOffsetExpressionValue } from '@convert/apply-conversion';

describe('offset - plane/engines/engine3', () => {
  const offsetsTestCases = [
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
  ];

  describe('offsets list', () => {
    it('should have required properties', () => {
      expect(offsets).toMatchSnapshot();
    });
  });

  offsetsTestCases.forEach(testedOffset => {
    describe(testedOffset.name, () => {
      it('should convert data properly', () => {
        const convertExpression = replaceOffsetExpressionValue(offsets[testedOffset.name], testedOffset.value);

        // tslint:disable-next-line:no-eval
        expect(eval(convertExpression)).toEqual(testedOffset.expectedResult);
      });
    });
  });
});
