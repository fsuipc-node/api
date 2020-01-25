import { spoilersControl } from '@mappings/spoilers-control';

const TESTS = [
  { value: 0, result: 0 },
  { value: 4799, result: 0 },
  { value: 4800, result: 0 },
  { value: 5620, result: 7 },
  { value: 16383, result: 100 },
];

describe('spoilers control mapping', () => {
  TESTS.forEach(test => {
    it(`should map value ${test.value} to spoilers-control ${test.result}`, () => {
      expect(spoilersControl(test.value)).toEqual(test.result);
    });
  });
});
