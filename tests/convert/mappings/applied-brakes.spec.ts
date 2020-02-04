import { appliedBrakes } from '@mappings/applied-brakes';
import { Brakes } from '@shared/plane/brakes';

const TESTS = [
  { value: null, result: null },
  { value: 0, result: null },
  { value: 1, result: Brakes.LEFT },
  { value: 2, result: Brakes.RIGHT },
  { value: 3, result: Brakes.BOTH },
];

describe('applied-brakes mapping', () => {
  TESTS.forEach(test => {
    it(`should map value ${test.value} to applied-brakes ${test.result}`, () => {
      expect(appliedBrakes(test.value)).toEqual(test.result);
    });
  });
});
