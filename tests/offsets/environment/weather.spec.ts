import { weather as offsets } from '@offsets/environment/weather';
import { replaceOffsetExpressionValue } from '@convert/apply-conversion';

describe('offset - environment/weather', () => {
  const offsetsTestCases = [
    { name: 'metarStationAltitude', value: 123, expectedResult: 403.54 },
    { name: 'metarBarometricDrift', value: 32, expectedResult: 2 },
    { name: 'metarVisibility', value: 3200, expectedResult: 32 },
    { name: 'metarCloudThunderBase', value: 914, expectedResult: 2998.69 },
    { name: 'metarCloudBaseLow', value: 914, expectedResult: 2998.69 },
    { name: 'metarCloudBaseHigh', value: 914, expectedResult: 2998.69 },
    { name: 'dewPoint', value: 512, expectedResult: 2 },
    { name: 'surfaceWindDirection', value: 32768, expectedResult: 180 },
    { name: 'unlimitedVisibility', value: 3200, expectedResult: 2 },
    { name: 'visibility', value: 3156, expectedResult: 31.56 },
    { name: 'OAT', value: 512, expectedResult: 2 },
    { name: 'interpolatedDewPoint', value: 512, expectedResult: 2 },
    { name: 'windDirection', value: 32768, expectedResult: 180 },
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
