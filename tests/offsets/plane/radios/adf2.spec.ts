import { ADF2 as offsets } from '@offsets/plane/radios/adf2';
import { replaceOffsetExpressionValue } from '@convert/apply-conversion';

describe('offset - plane/radios/adf2', () => {
  const offsetsTestCases = [
    { name: 'adf2Freq', value: 74528, expectedResult: 12320 },
    { name: 'adf2RelBearing', value: 38229, expectedResult: 210 },
    { name: 'ndb2IdentSoundSwitch', value: 0, expectedResult: false },
    { name: 'ndb2IdentSoundSwitch', value: 1, expectedResult: true },
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
