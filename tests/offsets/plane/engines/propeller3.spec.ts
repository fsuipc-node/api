import { propeller3 as offsets } from '@offsets/plane/engines/propeller3';
import { replaceOffsetExpressionValue } from '@convert/apply-conversion';

describe('offset - plane/engines/propeller3', () => {
  const offsetsTestCases = [
    { name: 'propeller3RPMPercent', value: 0.02386, expectedResult: 2 },
    { name: 'propeller3Thrust', value: 23.8601932, expectedResult: 23.86 },
    { name: 'propeller3BetaBladeAngle', value: 23.8601932, expectedResult: 23.8602 },
    { name: 'propeller3FeatheringInhibit', value: 0, expectedResult: false },
    { name: 'propeller3FeatheringInhibit', value: 1, expectedResult: true },
    { name: 'propeller3Feathered', value: 0, expectedResult: false },
    { name: 'propeller3Feathered', value: 1, expectedResult: true },
    { name: 'propeller3AutofeatherArmed', value: 0, expectedResult: false },
    { name: 'propeller3AutofeatherArmed', value: 1, expectedResult: true },
    { name: 'propeller3FeatherSwitch', value: 0, expectedResult: false },
    { name: 'propeller3FeatherSwitch', value: 1, expectedResult: true },
    { name: 'propeller3PanelAutofeatherSwitch', value: 0, expectedResult: false },
    { name: 'propeller3PanelAutofeatherSwitch', value: 1, expectedResult: true },
    { name: 'propeller3Sync', value: 0, expectedResult: false },
    { name: 'propeller3Sync', value: 1, expectedResult: true },
    { name: 'propeller3DeiceSwitch', value: 0, expectedResult: false },
    { name: 'propeller3DeiceSwitch', value: 1, expectedResult: true },
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
