import { engine2 as offsets } from '@offsets/plane/engines/engine2';
import { replaceOffsetExpressionValue } from '@convert/apply-conversion';

describe('offset - plane/engines/engine2', () => {
  const offsetsTestCases = [
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
