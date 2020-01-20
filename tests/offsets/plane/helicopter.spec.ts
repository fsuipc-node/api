import { helicopter as offsets } from '@offsets/plane/helicopter';

describe('offset - plane/helicopter', () => {
  const offsetsTestCases = [
    { name: 'rotorBreakApplication', value: 13107, expectedResult: 80 },
    { name: 'rotorLateralTrim', value: 13107, expectedResult: 80 },
    { name: 'governorSwitch', value: 0, expectedResult: false },
    { name: 'governorSwitch', value: 1, expectedResult: true },
  ];

  describe('offsets list', () => {
    it('should have required properties', () => {
      expect(offsets).toMatchSnapshot();
    });
  });

  offsetsTestCases.forEach(testedOffset => {
    describe(testedOffset.name, () => {
      it('should convert data properly', () => {
        const convertExpression = offsets[testedOffset.name].convert.replace('{VAL}', testedOffset.value.toString());

        // tslint:disable-next-line:no-eval
        expect(eval(convertExpression)).toEqual(testedOffset.expectedResult);
      });
    });
  });
});
