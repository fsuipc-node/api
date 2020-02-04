import { propeller2 as offsets } from '@offsets/plane/engines/propeller2';
import { replaceOffsetExpressionValue } from '@convert/apply-conversion';

describe('offset - plane/engines/propeller2', () => {
  const offsetsTestCases = [
    { name: 'propeller2RPMPercent', value: 0.02386, expectedResult: 2 },
    { name: 'propeller2Thrust', value: 23.8601932, expectedResult: 23.86 },
    { name: 'propeller2BetaBladeAngle', value: 23.8601932, expectedResult: 23.8602 },
    { name: 'propeller2FeatheringInhibit', value: 0, expectedResult: false },
    { name: 'propeller2FeatheringInhibit', value: 1, expectedResult: true },
    { name: 'propeller2Feathered', value: 0, expectedResult: false },
    { name: 'propeller2Feathered', value: 1, expectedResult: true },
    { name: 'propeller2AutofeatherArmed', value: 0, expectedResult: false },
    { name: 'propeller2AutofeatherArmed', value: 1, expectedResult: true },
    { name: 'propeller2FeatherSwitch', value: 0, expectedResult: false },
    { name: 'propeller2FeatherSwitch', value: 1, expectedResult: true },
    { name: 'propeller2PanelAutofeatherSwitch', value: 0, expectedResult: false },
    { name: 'propeller2PanelAutofeatherSwitch', value: 1, expectedResult: true },
    { name: 'propeller2Sync', value: 0, expectedResult: false },
    { name: 'propeller2Sync', value: 1, expectedResult: true },
    { name: 'propeller2DeiceSwitch', value: 0, expectedResult: false },
    { name: 'propeller2DeiceSwitch', value: 1, expectedResult: true },
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
