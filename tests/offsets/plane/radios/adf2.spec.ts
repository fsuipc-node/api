import { ADF2 as offsets } from '@offsets/plane/radios/adf2';
import { replaceOffsetExpressionValue } from '@convert/apply-conversion';

describe('offset - plane/radios/adf2', () => {
  const offsetsTestCases = [
    { name: 'adf2Freq', value: 74528, expectedResult: 12320 },
    { name: 'adf2RelBearing', value: 38229, expectedResult: 210 },
    { name: 'ndb2IdentSoundSwitch', value: 0, expectedResult: false },
    { name: 'ndb2IdentSoundSwitch', value: 1, expectedResult: true },
    { name: 'adf2Latitude', value: 5198687, expectedResult: 46.77999650061239 },
    { name: 'adf2Longitude', value: -851715875, expectedResult: -71.38999993912876 },
    { name: 'adf2Altitude', value: 92, expectedResult: 301.84 },
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
