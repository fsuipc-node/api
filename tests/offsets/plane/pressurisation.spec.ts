import { pressurisation as offsets } from '@offsets/plane/pressurisation';

describe('offset - plane/pressurisation', () => {
  const offsetsTestCases = [
    { name: 'pressDumpSwitch', value: 0, expectedResult: false },
    { name: 'pressDumpSwitch', value: 1, expectedResult: true },
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
