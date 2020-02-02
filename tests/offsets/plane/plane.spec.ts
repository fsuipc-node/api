import { plane as offsets } from '@offsets/plane/plane';
import { replaceOffsetExpressionValue } from '@convert/apply-conversion';

describe('offset - plane/plane', () => {
  const offsetsTestCases = [
    { name: 'smokeSystemControl', value: 0, expectedResult: false },
    { name: 'smokeSystemControl', value: 1, expectedResult: true },
    { name: 'retractableGear', value: 0, expectedResult: false },
    { name: 'retractableGear', value: 1, expectedResult: true },
    { name: 'retractableLeftFloatExtension', value: 13200, expectedResult: 80 },
    { name: 'retractableRightFloatExtension', value: 13200, expectedResult: 80 },
    { name: 'hasFlaps', value: 0, expectedResult: false },
    { name: 'hasFlaps', value: 1, expectedResult: true },
    { name: 'hasStallHorn', value: 0, expectedResult: false },
    { name: 'hasStallHorn', value: 1, expectedResult: true },
    { name: 'hasSpoilers', value: 0, expectedResult: false },
    { name: 'hasSpoilers', value: 1, expectedResult: true },
    { name: 'isTailDragger', value: 0, expectedResult: false },
    { name: 'isTailDragger', value: 1, expectedResult: true },
    { name: 'hasStrobes', value: 0, expectedResult: false },
    { name: 'hasStrobes', value: 1, expectedResult: true },
    { name: 'hasToeBrakes', value: 0, expectedResult: false },
    { name: 'hasToeBrakes', value: 1, expectedResult: true },
    { name: 'maxMach', value: 13200, expectedResult: 0.65 },
    { name: 'aircraftEmptyWeight', value: 512060, expectedResult: 2000.23 },
    { name: 'aircraftMaxGrossWeight', value: 512060, expectedResult: 2000.23 },
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
