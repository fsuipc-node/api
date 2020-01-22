import { controls as offsets } from '@offsets/plane/controls';

describe('offset - plane/controls', () => {
  const offsetsTestCases = [
    { name: 'autoRudder', value: 0, expectedResult: false },
    { name: 'autoRudder', value: 1, expectedResult: true },
    { name: 'rotorClutchSwitch', value: 0, expectedResult: false },
    { name: 'rotorClutchSwitch', value: 1, expectedResult: true },
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
