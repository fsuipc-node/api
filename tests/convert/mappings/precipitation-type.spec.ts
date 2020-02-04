import { precipitationType } from '@mappings/precipitation-type';
import { PrecipitationType } from '@shared/weather/precipitation-type';

const TESTS = [
  { value: 0, result: PrecipitationType.NONE },
  { value: 1, result: PrecipitationType.RAIN },
  { value: 2, result: PrecipitationType.SNOW },
  { value: 3, result: null },
  { value: null, result: null },
];

describe('precipitation type mapping', () => {
  TESTS.forEach(test => {
    it(`should map value ${test.value} to precipitation type ${test.result}`, () => {
      expect(precipitationType(test.value)).toEqual(test.result);
    });
  });
});
