import { runway as offsets } from '@offsets/airport/runway';

describe('offset - airport/runway', () => {
  const offsetsTestCases = [
    { name: 'runwaySurfaceConditionValid', value: 0, expectedResult: false },
    { name: 'runwaySurfaceConditionValid', value: 1, expectedResult: true },
  ];

  describe('offsets list', () => {
    it('should have required properties', () => {
      expect(offsets).toMatchSnapshot();
    });
  });

  offsetsTestCases.forEach(testedOffset => {
    describe(testedOffset.name, () => {
      it('should convert data properly', () => {
        const convertExpression = offsets[testedOffset.name].convert.replace(new RegExp(/{VAL}/g), testedOffset.value.toString());

        // tslint:disable-next-line:no-eval
        expect(eval(convertExpression)).toEqual(testedOffset.expectedResult);
      });
    });
  });
});
