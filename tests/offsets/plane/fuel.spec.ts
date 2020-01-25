import { fuel as offsets } from '@offsets/plane/fuel';

describe('offset - plane/fuel', () => {
  const offsetsTestCases = [
    { name: 'fuelWeight', value: 512, expectedResult: 2 },
    { name: 'fuelCenterTankLevel', value: 4194304, expectedResult: 50 },
    { name: 'fuelLeftMainTankLevel', value: 4194304, expectedResult: 50 },
    { name: 'fuelLeftAuxTankLevel', value: 4194304, expectedResult: 50 },
    { name: 'fuelLeftTipTankLevel', value: 4194304, expectedResult: 50 },
    { name: 'fuelRightMainTankLevel', value: 4194304, expectedResult: 50 },
    { name: 'fuelRightAuxTankLevel', value: 4194304, expectedResult: 50 },
    { name: 'fuelRightTipTankLevel', value: 4194304, expectedResult: 50 },
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
