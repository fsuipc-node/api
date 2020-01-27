import { ADF1 as offsets } from '@offsets/plane/radios/adf1';
import { replaceOffsetExpressionValue } from '@convert/apply-conversion';

describe('offset - plane/radios/adf1', () => {
  const offsetsTestCases = [
    { name: 'adfFreq', value: 74528, expectedResult: 12320 },
    { name: 'adf1BearingToNDB', value: 9102, expectedResult: 50 },
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
