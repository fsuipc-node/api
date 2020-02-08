import { electric as offsets } from '@offsets/plane/electric';
import { replaceOffsetExpressionValue } from '@convert/apply-conversion';

describe('offset - plane/electric', () => {
  const offsetsTestCases = [
    { name: 'masterBatterySwitch', value: 0, expectedResult: false },
    { name: 'masterBatterySwitch', value: 1, expectedResult: true },
    { name: 'masterAvionicsSwitch', value: 0, expectedResult: false },
    { name: 'masterAvionicsSwitch', value: 1, expectedResult: true },
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
