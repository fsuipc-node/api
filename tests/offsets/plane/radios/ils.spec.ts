import { ILS as offsets } from '@offsets/plane/radios/ils';
import { replaceOffsetExpressionValue } from '@convert/apply-conversion';

describe('offset - plane/radios/ils', () => {
  const offsetsTestCases = [
    { name: 'innerMarkerLatitude', value: 5198687, expectedResult: 46.77999650061239 },
    { name: 'innerMarkerLongitude', value: -851715875, expectedResult: -71.38999993912876 },
    { name: 'innerMarkerAltitude', value: 92, expectedResult: 301.84 },
    { name: 'middleMarkerLatitude', value: 5198687, expectedResult: 46.77999650061239 },
    { name: 'middleMarkerLongitude', value: -851715875, expectedResult: -71.38999993912876 },
    { name: 'middleMarkerAltitude', value: 92, expectedResult: 301.84 },
    { name: 'outerMarkerLatitude', value: 5198687, expectedResult: 46.77999650061239 },
    { name: 'outerMarkerLongitude', value: -851715875, expectedResult: -71.38999993912876 },
    { name: 'outerMarkerAltitude', value: 92, expectedResult: 301.84 },
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
