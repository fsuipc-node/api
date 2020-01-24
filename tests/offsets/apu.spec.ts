import { APU as offsets } from '@offsets/plane/apu';

describe('offset - plane/APU', () => {
  const offsetsTestCases = [
    { name: 'APUGeneratorSwitch', value: 0, expectedResult: false },
    { name: 'APUGeneratorSwitch', value: 1, expectedResult: true },
    { name: 'APUGeneratorActive', value: 0, expectedResult: false },
    { name: 'APUGeneratorActive', value: 1, expectedResult: true },
    { name: 'APUOnFire', value: 0, expectedResult: false },
    { name: 'APUOnFire', value: 1, expectedResult: true },
    { name: 'APUMaxRPM', value: 1.05666, expectedResult: 1.06 },
    { name: 'APUStarter', value: true, expectedResult: 1 },
    { name: 'APUStarter', value: false, expectedResult: 0 },
    { name: 'APUVoltage', value: 12.05666, expectedResult: 12.06 },
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
