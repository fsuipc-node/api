import { propeller1 as offsets } from '@offsets/plane/engines/propeller1';
import { replaceOffsetExpressionValue } from '@convert/apply-conversion';

describe('offset - plane/engines/propeller1', () => {
  const offsetsTestCases = [
    { name: 'propeller1RPMPercent', value: 0.02386, expectedResult: 2 },
    { name: 'propeller1Thrust', value: 23.8601932, expectedResult: 23.86 },
    { name: 'propeller1BetaBladeAngle', value: 23.8601932, expectedResult: 23.8602 },
    { name: 'propeller1FeatheringInhibit', value: 0, expectedResult: false },
    { name: 'propeller1FeatheringInhibit', value: 1, expectedResult: true },
    { name: 'propeller1Feathered', value: 0, expectedResult: false },
    { name: 'propeller1Feathered', value: 1, expectedResult: true },
    { name: 'propeller1AutofeatherArmed', value: 0, expectedResult: false },
    { name: 'propeller1AutofeatherArmed', value: 1, expectedResult: true },
    { name: 'propeller1FeatherSwitch', value: 0, expectedResult: false },
    { name: 'propeller1FeatherSwitch', value: 1, expectedResult: true },
    { name: 'propeller1PanelAutofeatherSwitch', value: 0, expectedResult: false },
    { name: 'propeller1PanelAutofeatherSwitch', value: 1, expectedResult: true },
    { name: 'propeller1Sync', value: 0, expectedResult: false },
    { name: 'propeller1Sync', value: 1, expectedResult: true },
    { name: 'propeller1DeiceSwitch', value: 0, expectedResult: false },
    { name: 'propeller1DeiceSwitch', value: 1, expectedResult: true },
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
