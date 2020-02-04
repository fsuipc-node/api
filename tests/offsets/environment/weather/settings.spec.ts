import { weatherSettings as offsets } from '@offsets/environment/weather/settings';
import { replaceOffsetExpressionValue } from '@convert/apply-conversion';

describe('offset - environment/weather/settings', () => {
  const offsetsTestCases = [
    { name: 'upperCloudCeilingSetting', value: 914, expectedResult: 2998.69 },
    { name: 'upperCloudBaseSetting', value: 914, expectedResult: 2998.69 },
    { name: 'upperCloudCoverageSetting', value: 32768 , expectedResult: 4 },
    { name: 'upperCloudVariationSetting', value: 914, expectedResult: 2998.69 },
    { name: 'lowerCloudCeilingSetting', value: 914, expectedResult: 2998.69 },
    { name: 'lowerCloudBaseSetting', value: 914, expectedResult: 2998.69 },
    { name: 'lowerCloudCoverageSetting', value: 32768 , expectedResult: 4 },
    { name: 'lowerCloudVariationSetting', value: 914, expectedResult: 2998.69 },
    { name: 'stormCloudCeilingSetting', value: 914, expectedResult: 2998.69 },
    { name: 'stormCloudBaseSetting', value: 914, expectedResult: 2998.69 },
    { name: 'stormCloudCoverageSetting', value: 32768 , expectedResult: 4 },
    { name: 'stormCloudVariationSetting', value: 914, expectedResult: 2998.69 },
    { name: 'upperTemperatureLevelSetting', value: 914, expectedResult: 2998.69 },
    { name: 'upperTemperatureSetting', value: 512, expectedResult: 2 },
    { name: 'middleTemperatureLevelSetting', value: 914, expectedResult: 2998.69 },
    { name: 'middleTemperatureSetting', value: 512, expectedResult: 2 },
    { name: 'lowerTemperatureLevelSetting', value: 914, expectedResult: 2998.69 },
    { name: 'lowerTemperatureSetting', value: 512, expectedResult: 2 },
    { name: 'surfaceTemperatureLevelSetting', value: 914, expectedResult: 2998.69 },
    { name: 'surfaceTemperatureSetting', value: 512, expectedResult: 2 },
    { name: 'temperatureDriftSetting', value: 512, expectedResult: 2 },
    { name: 'temperatureDayNightVariationSetting', value: 512, expectedResult: 2 },
    { name: 'pressureQNHSetting', value: 32, expectedResult: 2 },
    { name: 'pressureDriftSetting', value: 32, expectedResult: 2 },
    { name: 'upperWindCeilingSetting', value: 914, expectedResult: 2998.69 },
    { name: 'upperWindBaseSetting', value: 914, expectedResult: 2998.69 },
    { name: 'upperWindDirectionSetting', value: 32768, expectedResult: 180 },
    { name: 'upperWindGustEnabledSetting', value: 1, expectedResult: true },
    { name: 'upperWindGustEnabledSetting', value: 0, expectedResult: false },
    { name: 'middleWindCeilingSetting', value: 914, expectedResult: 2998.69 },
    { name: 'middleWindBaseSetting', value: 914, expectedResult: 2998.69 },
    { name: 'middleWindDirectionSetting', value: 32768, expectedResult: 180 },
    { name: 'middleWindGustEnabledSetting', value: 1, expectedResult: true },
    { name: 'middleWindGustEnabledSetting', value: 0, expectedResult: false },
    { name: 'lowerWindCeilingSetting', value: 914, expectedResult: 2998.69 },
    { name: 'lowerWindBaseSetting', value: 914, expectedResult: 2998.69 },
    { name: 'lowerWindDirectionSetting', value: 32768, expectedResult: 180 },
    { name: 'lowerWindGustEnabledSetting', value: 1, expectedResult: true },
    { name: 'lowerWindGustEnabledSetting', value: 0, expectedResult: false },
    { name: 'surfaceWindCeilingSetting', value: 914, expectedResult: 2998.69 },
    { name: 'surfaceWindDirectionSetting', value: 32768, expectedResult: 180 },
    { name: 'surfaceWindGustEnabledSetting', value: 1, expectedResult: true },
    { name: 'surfaceWindGustEnabledSetting', value: 0, expectedResult: false },
    { name: 'upperCloudIcingSetting', value: 1, expectedResult: true },
    { name: 'upperCloudIcingSetting', value: 0, expectedResult: false },
    { name: 'lowerCloudIcingSetting', value: 1, expectedResult: true },
    { name: 'lowerCloudIcingSetting', value: 0, expectedResult: false },
    { name: 'stormCloudIcingSetting', value: 1, expectedResult: true },
    { name: 'stormCloudIcingSetting', value: 0, expectedResult: false },
    { name: 'visibilitySetting', value: 1000, expectedResult: 10 },
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
