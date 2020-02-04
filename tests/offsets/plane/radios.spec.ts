import { radios as offsets } from '@offsets/plane/radios';
import { replaceOffsetExpressionValue } from '@convert/apply-conversion';

describe('offset - plane/radios', () => {
  const offsetsTestCases = [
    { name: 'comFreq', value: 13584, expectedResult: 13510 },
    { name: 'transponderFreq', value: 13584, expectedResult: 13510 },
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
