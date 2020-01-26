import { icing as offsets } from '@offsets/plane/icing';
import { replaceOffsetExpressionValue } from '@convert/apply-conversion';

describe('offset - plane/icing', () => {
  const offsetsTestCases = [
    { name: 'structuralIce', value: 5730, expectedResult: 34.97 },
    { name: 'pitotIce', value: 5730, expectedResult: 34.97 },
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
