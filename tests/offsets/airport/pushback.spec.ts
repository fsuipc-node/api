import { pushback as offsets } from '@offsets/airport/pushback';
import { replaceOffsetExpressionValue } from '@convert/apply-conversion';

describe('offset - airport/pushback', () => {
  const offsetsTestCases = [
    { name: 'pushbackWaitFlag', value: 0, expectedResult: false },
    { name: 'pushbackWaitFlag', value: 1, expectedResult: true },
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
