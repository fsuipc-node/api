import { controls as offsets } from '@offsets/plane/controls';

describe('offset - plane/controls', () => {
  const offsetsTestCases = [
    { name: 'autoRudder', value: 0, expectedResult: false },
    { name: 'autoRudder', value: 1, expectedResult: true },
    { name: 'rotorClutchSwitch', value: 0, expectedResult: false },
    { name: 'rotorClutchSwitch', value: 1, expectedResult: true },
    { name: 'elevatorPositionControl', value: -16000, expectedResult: -98 },
    { name: 'aileronPositionControl', value: -16000, expectedResult: -98 },
    { name: 'rudderPositionControl', value: -16000, expectedResult: -98 },
    { name: 'elevatorPositionControl', value: -16000, expectedResult: -98 },
    { name: 'leftBrakeApplication', value: -16000, expectedResult: -98 },
    { name: 'rightBrakeApplication', value: -16000, expectedResult: -98 },
    { name: 'parkingBrake', value: 32767, expectedResult: true },
    { name: 'parkingBrake', value: 32768, expectedResult: true },
    { name: 'parkingBrake', value: 0, expectedResult: false },
    { name: 'parkingBrake', value: true, expectedResult: 32767 },
    { name: 'parkingBrake', value: false, expectedResult: 0 },
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
