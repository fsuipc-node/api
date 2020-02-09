
import { fuelTransferMode } from '@mappings/fuel-transfer-mode';
import { FuelTransferMode } from '@shared/plane/fuel-transfer-mode';

const TESTS = [
  { value: 0, result: FuelTransferMode.NONE },
  { value: 1, result: FuelTransferMode.AUTO },
  { value: 2, result: FuelTransferMode.FWD },
  { value: 3, result: FuelTransferMode.AFT },
  { value: null, result: null },
];

describe('fuel-transfer-mode mapping', () => {
  TESTS.forEach(test => {
    it(`should map value ${test.value} to fuel-transfer-mode ${test.result}`, () => {
      expect(fuelTransferMode(test.value)).toEqual(test.result);
    });
  });
});
