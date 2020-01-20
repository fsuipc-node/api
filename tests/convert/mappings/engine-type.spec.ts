import { engineType } from '@mappings/engine-type';
import { EngineType } from '@shared/plane/engine-type';

const TESTS = [
  { value: 0, result: EngineType.PISTON },
  { value: 1, result: EngineType.JET },
  { value: 2, result: EngineType.SAILPLANE },
  { value: 3, result: EngineType.HELO },
  { value: 4, result: EngineType.ROCKET },
  { value: 5, result: EngineType.TURBOPROP },
];

describe('engine-type mapping', () => {
  TESTS.forEach(test => {
    it(`should map value ${test.value} to engine-type ${test.result}`, () => {
      expect(engineType(test.value)).toEqual(test.result);
    });
  });
});
