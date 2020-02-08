import { doublePercentRound } from '@mappings/double-percent';
const TESTS = [
  { value: 0, result: 0 },
  { value: 0.0567, result: 6 },
  { value: 0.8927, result: 89 },
  { value: -0.05, result: -5 },
];

describe('double percent round mapping', () => {
  TESTS.forEach(test => {
    it(`should map value ${test.value} to percent ${test.result}`, () => {
      expect(doublePercentRound(test.value)).toEqual(test.result);
    });
  });
});
