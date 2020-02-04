import { NAV2 as offsets } from '@offsets/plane/radios/nav2';
import { replaceOffsetExpressionValue } from '@convert/apply-conversion';

describe('offset - plane/radios/nav2', () => {
  const offsetsTestCases = [
    { name: 'vor2DMEDistance', value: 550, expectedResult: 55 },
    { name: 'vor2DMESpeed', value: 650, expectedResult: 65 },
    { name: 'vor2DMETimeToStation', value: 750, expectedResult: 75 },
    { name: 'nav2Freq', value: 13584, expectedResult: 13510 },
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
    { name: 'vor2OrILSGlideSlopeLongitude', value: -851715875, expectedResult: -71.38999993912876 },
    { name: 'vor2OrILSGlideSlopeElevation', value: 92, expectedResult: 301.84 },
    { name: 'dme2Distance', value: '92.5', expectedResult: 92.5 },
    { name: 'dme2Distance', value: '92.5 ', expectedResult: 92.5 },
    { name: 'dme2Distance', value: '92.50', expectedResult: 92.5 },
    { name: 'dme2Distance', value: '112.5', expectedResult: 112.5 },
    { name: 'dme2Distance', value: '112.0', expectedResult: 112 },
    { name: 'dme2Distance', value: '112. ', expectedResult: 112 },
    { name: 'dme2Speed', value: '92.5', expectedResult: 92.5 },
    { name: 'dme2Speed', value: '92.5 ', expectedResult: 92.5 },
    { name: 'dme2Speed', value: '92.50', expectedResult: 92.5 },
    { name: 'dme2Speed', value: '112.5', expectedResult: 112.5 },
    { name: 'dme2Speed', value: '112.0', expectedResult: 112 },
    { name: 'dme2Speed', value: '112. ', expectedResult: 112 },
    { name: 'nav2MagVar', value: 9102, expectedResult: 50 },
    { name: 'nav2LocNeedlePosition', value: 127, expectedResult: 100 },
    { name: 'nav2LocNeedlePosition', value: -127, expectedResult: -100 },
    { name: 'nav2Radial', value: 9102, expectedResult: 50 },
    { name: 'nav2GlideslopeNeedlePosition', value: 127, expectedResult: 100 },
    { name: 'nav2GlideslopeNeedlePosition', value: -127, expectedResult: -100 },
    { name: 'nav2GlideslopeActive', value: 0, expectedResult: false },
    { name: 'nav2GlideslopeActive', value: 1, expectedResult: true },
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
