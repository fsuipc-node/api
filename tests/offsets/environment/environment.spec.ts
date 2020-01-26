import { environment as offsets } from '@offsets/environment/environment';
import { replaceOffsetExpressionValue } from '@convert/apply-conversion';

describe('offset - environment/environment', () => {
  const offsetsTestCases = [
    { name: 'towerLatitude', value: 2.2329449e+16, expectedResult: 46.78263288720104 },
    { name: 'towerLongitude', value: -3.6582626e+18, expectedResult: -71.39333265196446 },
    { name: 'towerAltitude', value: 392731796979, expectedResult: 300 },
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
