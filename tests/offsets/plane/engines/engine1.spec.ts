import { engine1 as offsets } from '@offsets/plane/engines/engine1';
import { replaceOffsetExpressionValue } from '@convert/apply-conversion';

describe('offset - plane/engines/engine1', () => {
  const offsetsTestCases = [
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
    { name: 'engine1TurbineAfterburnerActive', value: 0, expectedResult: false },
    { name: 'engine1TurbineAfterburnerActive', value: 1, expectedResult: true },
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
