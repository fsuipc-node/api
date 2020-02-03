import { propeller4 as offsets } from '@offsets/plane/engines/propeller4';
import { replaceOffsetExpressionValue } from '@convert/apply-conversion';

describe('offset - plane/engines/propeller4', () => {
  const offsetsTestCases = [
    { name: 'propeller4RPMPercent', value: 0.02386, expectedResult: 2 },
    { name: 'propeller4Thrust', value: 23.8601932, expectedResult: 23.86 },
    { name: 'propeller4BetaBladeAngle', value: 23.8601932, expectedResult: 23.8602 },
    { name: 'propeller4FeatheringInhibit', value: 0, expectedResult: false },
    { name: 'propeller4FeatheringInhibit', value: 1, expectedResult: true },
    { name: 'propeller4Feathered', value: 0, expectedResult: false },
    { name: 'propeller4Feathered', value: 1, expectedResult: true },
    { name: 'propeller4AutofeatherArmed', value: 0, expectedResult: false },
    { name: 'propeller4AutofeatherArmed', value: 1, expectedResult: true },
    { name: 'propeller4FeatherSwitch', value: 0, expectedResult: false },
    { name: 'propeller4FeatherSwitch', value: 1, expectedResult: true },
    { name: 'propeller4PanelAutofeatherSwitch', value: 0, expectedResult: false },
    { name: 'propeller4PanelAutofeatherSwitch', value: 1, expectedResult: true },
    { name: 'propeller4Sync', value: 0, expectedResult: false },
    { name: 'propeller4Sync', value: 1, expectedResult: true },
    { name: 'propeller4DeiceSwitch', value: 0, expectedResult: false },
    { name: 'propeller4DeiceSwitch', value: 1, expectedResult: true },
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
