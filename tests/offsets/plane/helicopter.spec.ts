import { helicopter as offsets } from '@offsets/plane/helicopter';
import { replaceOffsetExpressionValue } from '@convert/apply-conversion';

describe('offset - plane/helicopter', () => {
  const offsetsTestCases = [
    { name: 'rotorBreakApplication', value: 13107, expectedResult: 80 },
    { name: 'rotorLateralTrim', value: 13107, expectedResult: 80 },
    { name: 'governorSwitch', value: 0, expectedResult: false },
    { name: 'governorSwitch', value: 1, expectedResult: true },
    { name: 'helicopterEngine1ElectricalLoad', value: 8192, expectedResult: 50 },
    { name: 'helicopterEngine1TransmOilPres', value: 3276800, expectedResult: 200 },
    { name: 'helicopterEngine1TransmOilTemp', value: 3276800, expectedResult: 200 },
    { name: 'helicopterEngine1RotorRPM', value: 8192, expectedResult: 50 },
    { name: 'helicopterPitchTrim', value: -16000, expectedResult: -98 },
    { name: 'helicopterBankTrim', value: 16383, expectedResult: 100 },
    { name: 'helicopterBankTrim', value: -16383, expectedResult: -100 },
  ];

  describe('offsets list', () => {
    it('should have required properties', () => {
      expect(offsets).toMatchSnapshot();
    });
  });

  offsetsTestCases.forEach(testedOffset => {
    describe(testedOffset.name, () => {
      it('should convert data properly', () => {
        const convertExpression = replaceOffsetExpressionValue(offsets[testedOffset.name], testedOffset.value);

        // tslint:disable-next-line:no-eval
        expect(eval(convertExpression)).toEqual(testedOffset.expectedResult);
      });
    });
  });
});
