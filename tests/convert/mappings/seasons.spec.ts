import { seasons } from '@mappings/seasons';
import { Season } from '@shared/weather/season';

const TESTS = [
  { value: 0, result: Season.WINTER },
  { value: 1, result: Season.SPRING },
  { value: 2, result: Season.SUMMER },
  { value: 3, result: Season.AUTUMN },
];

describe('seasons mapping', () => {
  TESTS.forEach(test => {
    it(`should map value ${test.value} to season ${test.result}`, () => {
      expect(seasons(test.value)).toEqual(test.result);
    });
  });
});
