import { cloudType } from '@mappings/cloud-type';
import { CloudType } from '@shared/weather/cloud-type';

const TESTS = [
  { value: 0, result: CloudType.USER },
  { value: 1, result: CloudType.CIRRUS },
  { value: 8, result: CloudType.STRATUS },
  { value: 9, result: CloudType.CUMULUS },
];

describe('cloud type mapping', () => {
  TESTS.forEach(test => {
    it(`should map value ${test.value} to cloud type ${test.result}`, () => {
      expect(cloudType(test.value)).toEqual(test.result);
    });
  });
});
