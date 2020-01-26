import { autopilot as offsets } from '@offsets/plane/autopilot';
import { replaceOffsetExpressionValue } from '@convert/apply-conversion';

describe('offset - plane/autopilot', () => {
  const offsetsTestCases = [
    { name: 'autoPilotAvailable', value: 0, expectedResult: false },
    { name: 'autoPilotAvailable', value: 1, expectedResult: true },
    { name: 'flyByWireELACSwitch', value: 0, expectedResult: false },
    { name: 'flyByWireELACSwitch', value: 1, expectedResult: true },
    { name: 'flyByWireELACCompFailFlag', value: 0, expectedResult: false },
    { name: 'flyByWireELACCompFailFlag', value: 1, expectedResult: true },
    { name: 'flyByWireFACSwitch', value: 0, expectedResult: false },
    { name: 'flyByWireFACSwitch', value: 1, expectedResult: true },
    { name: 'flyByWireFACCompFailFlag', value: 0, expectedResult: false },
    { name: 'flyByWireFACCompFailFlag', value: 1, expectedResult: true },
    { name: 'flyByWireSECSwitch', value: 0, expectedResult: false },
    { name: 'flyByWireSECSwitch', value: 1, expectedResult: true },
    { name: 'flyByWireSECCompFailFlag', value: 0, expectedResult: false },
    { name: 'flyByWireSECCompFailFlag', value: 1, expectedResult: true },
    { name: 'apMasterSwitch', value: 0, expectedResult: false },
    { name: 'apMasterSwitch', value: 1, expectedResult: true },
    { name: 'apWingLevel', value: 0, expectedResult: false },
    { name: 'apWingLevel', value: 1, expectedResult: true },
    { name: 'apNav1Hold', value: 0, expectedResult: false },
    { name: 'apNav1Hold', value: 1, expectedResult: true },
    { name: 'apHeadingHold', value: 0, expectedResult: false },
    { name: 'apHeadingHold', value: 1, expectedResult: true },
    { name: 'apHeadingValue', value: 32768, expectedResult: 180 },
    { name: 'apAltitudeHold', value: 0, expectedResult: false },
    { name: 'apAltitudeHold', value: 1, expectedResult: true },
    { name: 'apAltitudeValue', value: 19975000, expectedResult: 999.98 },
    { name: 'apAsHold', value: 0, expectedResult: false },
    { name: 'apAsHold', value: 1, expectedResult: true },
    { name: 'apMachHold', value: 0, expectedResult: false },
    { name: 'apMachHold', value: 1, expectedResult: true },
    { name: 'apMachValue', value: 229376, expectedResult: 3.5 },
    { name: 'apVsHold', value: 0, expectedResult: false },
    { name: 'apVsHold', value: 1, expectedResult: true },
    { name: 'apRPMN1Hold', value: 0, expectedResult: false },
    { name: 'apRPMN1Hold', value: 1, expectedResult: true },
    { name: 'apRPMN1Value', value: 9175, expectedResult: 56 },
    { name: 'apGlideSlopeHold', value: 0, expectedResult: false },
    { name: 'apGlideSlopeHold', value: 1, expectedResult: true },
    { name: 'apApproachHold', value: 0, expectedResult: false },
    { name: 'apApproachHold', value: 1, expectedResult: true },
    { name: 'apBackCourseHold', value: 0, expectedResult: false },
    { name: 'apBackCourseHold', value: 1, expectedResult: true },
    { name: 'apYawDamperHold', value: 0, expectedResult: false },
    { name: 'apYawDamperHold', value: 1, expectedResult: true },
    { name: 'apTOGAAutoThrottle', value: 0, expectedResult: false },
    { name: 'apTOGAAutoThrottle', value: 1, expectedResult: true },
    { name: 'apAutoThrottleArm', value: 0, expectedResult: false },
    { name: 'apAutoThrottleArm', value: 1, expectedResult: true },
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
