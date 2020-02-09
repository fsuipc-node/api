import { HSI as offsets } from '@offsets/plane/radios/hsi';
import { replaceOffsetExpressionValue } from '@convert/apply-conversion';

describe('offset - plane/radios/hsi', () => {
  const offsetsTestCases = [
    { name: 'HSICDINeedlePosition', value: 102.786, expectedResult: 81 },
    { name: 'HSIGSINeedlePosition', value: 102.786, expectedResult: 86 },
    { name: 'HSISpeed', value: 100, expectedResult: 194 },
    { name: 'HSICDIValid', value: 0, expectedResult: false },
    { name: 'HSICDIValid', value: 1, expectedResult: true },
    { name: 'HSIGSIValid', value: 0, expectedResult: false },
    { name: 'HSIGSIValid', value: 1, expectedResult: true },
    { name: 'HSIHasLocaliser', value: 0, expectedResult: false },
    { name: 'HSIHasLocaliser', value: 1, expectedResult: true },
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
