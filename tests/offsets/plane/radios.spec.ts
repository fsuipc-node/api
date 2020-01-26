import { radios as offsets } from '@offsets/plane/radios';
import { replaceOffsetExpressionValue } from '@convert/apply-conversion';

describe('offset - plane/radios', () => {
  const offsetsTestCases = [
    { name: 'adf2Freq', value: 74528, expectedResult: 12320 },
    { name: 'adf2RelBearing', value: 38229, expectedResult: 210 },
    { name: 'ndb2IdentSoundSwitch', value: 0, expectedResult: false },
    { name: 'ndb2IdentSoundSwitch', value: 1, expectedResult: true },
    { name: 'vor1DMEDistance', value: 250, expectedResult: 25 },
    { name: 'vor1DMESpeed', value: 350, expectedResult: 35 },
    { name: 'vor1DMETimeToStation', value: 450, expectedResult: 45 },
    { name: 'vor2DMEDistance', value: 550, expectedResult: 55 },
    { name: 'vor2DMESpeed', value: 650, expectedResult: 65 },
    { name: 'vor2DMETimeToStation', value: 750, expectedResult: 75 },
    { name: 'adfFreq', value: 74528, expectedResult: 12320 },
    { name: 'comFreq', value: 13584, expectedResult: 13510 },
    { name: 'nav1Freq', value: 13584, expectedResult: 13510 },
    { name: 'nav2Freq', value: 13584, expectedResult: 13510 },
    { name: 'hasNav1', value: 0, expectedResult: false },
    { name: 'hasNav1', value: 1, expectedResult: true },
    { name: 'hasNav2', value: 0, expectedResult: false },
    { name: 'hasNav2', value: 1, expectedResult: true },
    { name: 'vor2DmeLatitude', value: 5198687, expectedResult: 46.77999650061239 },
    { name: 'vor2DmeLongitude', value: -851715875, expectedResult: -71.38999993912876 },
    { name: 'vor2DmeElevation', value: 92, expectedResult: 301.84 },
    { name: 'vor2ILSLocHeadingTrue', value: 27346, expectedResult: 150.22 },
    { name: 'vor2ILSGlideSlopeAngle', value: 27346, expectedResult: 150.22 },
    { name: 'vor2LocLatitude', value: 5198687, expectedResult: 46.77999650061239 },
    { name: 'vor2LocLongitude', value: -851715875, expectedResult: -71.38999993912876 },
    { name: 'vor2LocElevation', value: 92, expectedResult: 301.84 },
    { name: 'vor2OrILSGlideSlopeLatitude', value: 5198687, expectedResult: 46.77999650061239 },
    { name: 'vor1OrILSGlideSlopeLatitude', value: 5198687, expectedResult: 46.77999650061239 },
    { name: 'vor2OrILSGlideSlopeLongitude', value: -851715875, expectedResult: -71.38999993912876 },
    { name: 'vor1OrILSGlideSlopeLongitude', value: -851715875, expectedResult: -71.38999993912876 },
    { name: 'vor2OrILSGlideSlopeElevation', value: 92, expectedResult: 301.84 },
    { name: 'vor1OrILSGlideSlopeElevation', value: 92, expectedResult: 301.84 },
    { name: 'vor1ILSLocHeadingTrue', value: 27346, expectedResult: 150.22 },
    { name: 'vor1GlideSlopeAngle', value: 27346, expectedResult: 150.22 },
    { name: 'vor1LocLatitude', value: 5198687, expectedResult: 46.77999650061239 },
    { name: 'vor1LocLongitude', value: -851715875, expectedResult: -71.38999993912876 },
    { name: 'vor1LocElevation', value: 92, expectedResult: 301.84 },
    { name: 'vor1DmeLatitude', value: 5198687, expectedResult: 46.77999650061239 },
    { name: 'vor1DmeLongitude', value: -851715875, expectedResult: -71.38999993912876 },
    { name: 'vor1DmeElevation', value: 92, expectedResult: 301.84 },
    { name: 'dme1Distance', value: '92.5', expectedResult: 92.5 },
    { name: 'dme1Distance', value: '92.5 ', expectedResult: 92.5 },
    { name: 'dme1Distance', value: '92.50', expectedResult: 92.5 },
    { name: 'dme1Distance', value: '112.5', expectedResult: 112.5 },
    { name: 'dme1Distance', value: '112.0', expectedResult: 112 },
    { name: 'dme1Distance', value: '112. ', expectedResult: 112 },
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
