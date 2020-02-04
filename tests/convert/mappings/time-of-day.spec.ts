import { timeOfDay } from '@mappings/time-of-day';
import { TimeOfDay } from '@shared/environment/time-of-day';

const TESTS = [
  { value: 1, result: TimeOfDay.DAY },
  { value: 2, result: TimeOfDay.DUSK_DAWN },
  { value: 3, result: TimeOfDay.NIGHT },
  { value: 4, result: null },
  { value: null, result: null },
];

describe('time-of-day mapping', () => {
  TESTS.forEach(test => {
    it(`should map value ${test.value} to time-of-day ${test.result}`, () => {
      expect(timeOfDay(test.value)).toEqual(test.result);
    });
  });
});
