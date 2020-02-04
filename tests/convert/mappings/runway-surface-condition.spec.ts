import { runwaySurfaceCondition } from '@mappings/runway-surface-condition';
import { SurfaceCondition } from '@shared/runway/runway-surface-condition';

const TESTS = [
  { value: 0, result: SurfaceCondition.NORMAL },
  { value: 1, result: SurfaceCondition.WET },
  { value: 2, result: SurfaceCondition.ICY },
  { value: 3, result: SurfaceCondition.SNOW },
  { value: 4, result: null },
  { value: null, result: null },
];

describe('runway surface condition mapping', () => {
  TESTS.forEach(test => {
    it(`should map value ${test.value} to runway surface condition ${test.result}`, () => {
      expect(runwaySurfaceCondition(test.value)).toEqual(test.result);
    });
  });
});
