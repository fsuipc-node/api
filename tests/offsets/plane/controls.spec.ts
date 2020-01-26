import { controls as offsets } from '@offsets/plane/controls';
import { replaceOffsetExpressionValue } from '@convert/apply-conversion';

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
    { name: 'spoilersArm', value: 0, expectedResult: false },
    { name: 'spoilersArm', value: 1, expectedResult: true },
    { name: 'spoilerLeftPosition', value: 16383, expectedResult: 100 },
    { name: 'spoilerRightPosition', value: 16383, expectedResult: 100 },
    { name: 'flapsControl', value: 16383, expectedResult: 100 },
    { name: 'flapsLeftPosition', value: 16383, expectedResult: 100 },
    { name: 'flapsRightPosition', value: 16383, expectedResult: 100 },
    { name: 'gearControl', value: 16383, expectedResult: 100 },
    { name: 'gearNosePosition', value: 16383, expectedResult: 100 },
    { name: 'gearRightPosition', value: 16383, expectedResult: 100 },
    { name: 'gearLeftPosition', value: 16383, expectedResult: 100 },
    { name: 'rightToeBrakeControl', value: 200, expectedResult: 100 },
    { name: 'leftToeBrakeControl', value: 200, expectedResult: 100 },
    { name: 'aileronTrimPosition', value: 16383, expectedResult: 100 },
    { name: 'aileronTrimPosition', value: -16383, expectedResult: -100 },
    { name: 'rudderTrimPosition', value: 16383, expectedResult: 100 },
    { name: 'rudderTrimPosition', value: -16383, expectedResult: -100 },
    { name: 'steeringTillerCalibratedValue', value: 16383, expectedResult: 100 },
    { name: 'steeringTillerCalibratedValue', value: -16383, expectedResult: -100 },
    { name: 'rudderCalibratedvalue', value: 16383, expectedResult: 100 },
    { name: 'rudderCalibratedvalue', value: -16383, expectedResult: -100 },
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
