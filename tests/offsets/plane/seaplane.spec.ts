import { seaplane as offsets } from '@offsets/plane/seaplane';
import { replaceOffsetExpressionValue } from '@convert/apply-conversion';

describe('offset - plane/seaplane', () => {
  const offsetsTestCases = [
    { name: 'retractableLeftFloatExtension', value: 13200, expectedResult: 80 },
    { name: 'retractableRightFloatExtension', value: 13200, expectedResult: 80 },
    { name: 'waterRudderHandlePosition', value: 13200, expectedResult: 80 },
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
