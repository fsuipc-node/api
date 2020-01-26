import { vorToFrom } from '@mappings/vor-to-from';
import { VorToFrom } from '@shared/radios/vor-to-from';

const TESTS = [
  { value: 0, result: VorToFrom.OFF },
  { value: 1, result: VorToFrom.TO },
  { value: 2, result: VorToFrom.FROM },
];

describe('vor-to-from mapping', () => {
  TESTS.forEach(test => {
    it(`should map value ${test.value} to vor-to-from ${test.result}`, () => {
      expect(vorToFrom(test.value)).toEqual(test.result);
    });
  });
});
