import { engines as offsets } from '@offsets/plane/engines';
import { replaceOffsetExpressionValue } from '@convert/apply-conversion';

describe('offset - plane/engines', () => {
  const offsetsTestCases = [
    { name: 'hasMixtureControl', value: 0, expectedResult: false },
    { name: 'hasMixtureControl', value: 1, expectedResult: true },
    { name: 'hasCarbHeat', value: 0, expectedResult: false },
    { name: 'hasCarbHeat', value: 1, expectedResult: true },
    { name: 'throttleLowerLimit', value: -2048, expectedResult: -50 },
    { name: 'throttleLowerLimit', value: 0, expectedResult: 0 },
    { name: 'throttleLowerLimit', value: 8192, expectedResult: 50 },
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
