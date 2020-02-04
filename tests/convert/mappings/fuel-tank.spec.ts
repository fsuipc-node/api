import { FuelTank } from '@shared/plane/fuel-tank';
import { fuelTank } from '@mappings/fuel-tank';

const TESTS = [
  { value: 0, result: FuelTank.NONE },
  { value: 1, result: FuelTank.ALL },
  { value: 2, result: FuelTank.LEFT },
  { value: 3, result: FuelTank.RIGHT },
  { value: 4, result: FuelTank.LEFT_AUX },
  { value: 5, result: FuelTank.RIGHT_AUX },
  { value: 6, result: FuelTank.CENTER },
  { value: 7, result: FuelTank.CENTER2 },
  { value: 8, result: FuelTank.CENTER3 },
  { value: 9, result: FuelTank.EXT1 },
  { value: 10, result: FuelTank.EXT2 },
  { value: 11, result: FuelTank.RIGHT_TIP },
  { value: 12, result: FuelTank.LEFT_TIP },
  { value: 13, result: FuelTank.CROSS_FEED },
  { value: 14, result: FuelTank.CROSS_FEED_LTR },
  { value: 15, result: FuelTank.CROSS_FEED_RTL },
  { value: 16, result: FuelTank.CROSS_FEED_BOTH },
  { value: 17, result: FuelTank.EXTERNAL },
  { value: 18, result: FuelTank.ISOLATE },
  { value: 19, result: FuelTank.LEFT_MAIN },
  { value: 20, result: FuelTank.RIGHT_MAIN },
  { value: 21, result: null },
  { value: null, result: null },
];

describe('fuel-tank mapping', () => {
  TESTS.forEach(test => {
    it(`should map value ${test.value} to engine-type ${test.result}`, () => {
      expect(fuelTank(test.value)).toEqual(test.result);
    });
  });
});
