import { failure as offsets } from '@offsets/failure/failure';
import { replaceOffsetExpressionValue } from '@convert/apply-conversion';

describe('offset - plane/failures', () => {
  const offsetsTestCases = [
    { name: 'hydFailure', value: true, expectedResult: 1 },
    { name: 'hydFailure', value: false, expectedResult: 0 },
    { name: 'brakeFailure', value: 'left', expectedResult: 0 },
    { name: 'brakeFailure', value: 'right', expectedResult: 1 },
    { name: 'brakeFailure', value: 'all', expectedResult: 2 },
    { name: 'brakeFailure', value: 'total', expectedResult: 2 },
    { name: 'ADFFailure', value: true, expectedResult: 1 },
    { name: 'ADFFailure', value: false, expectedResult: 0 },
    { name: 'ADFFailure', value: 1, expectedResult: true },
    { name: 'ADFFailure', value: 0, expectedResult: false },
    { name: 'ASIFailure', value: true, expectedResult: 1 },
    { name: 'ASIFailure', value: false, expectedResult: 0 },
    { name: 'ASIFailure', value: 1, expectedResult: true },
    { name: 'ASIFailure', value: 0, expectedResult: false },
    { name: 'altimeterFailure', value: true, expectedResult: 1 },
    { name: 'altimeterFailure', value: false, expectedResult: 0 },
    { name: 'altimeterFailure', value: 1, expectedResult: true },
    { name: 'altimeterFailure', value: 0, expectedResult: false },
    { name: 'attitudeIndicatorFailure', value: true, expectedResult: 1 },
    { name: 'attitudeIndicatorFailure', value: false, expectedResult: 0 },
    { name: 'attitudeIndicatorFailure', value: 1, expectedResult: true },
    { name: 'attitudeIndicatorFailure', value: 0, expectedResult: false },
    { name: 'com1Failure', value: true, expectedResult: 1 },
    { name: 'com1Failure', value: false, expectedResult: 0 },
    { name: 'com1Failure', value: 1, expectedResult: true },
    { name: 'com1Failure', value: 0, expectedResult: false },
    { name: 'compassFailure', value: true, expectedResult: 1 },
    { name: 'compassFailure', value: false, expectedResult: 0 },
    { name: 'compassFailure', value: 1, expectedResult: true },
    { name: 'compassFailure', value: 0, expectedResult: false },
    { name: 'electricsFailure', value: true, expectedResult: 1 },
    { name: 'electricsFailure', value: false, expectedResult: 0 },
    { name: 'electricsFailure', value: 1, expectedResult: true },
    { name: 'electricsFailure', value: 0, expectedResult: false },
    { name: 'fuelIndicatorFailure', value: true, expectedResult: 1 },
    { name: 'fuelIndicatorFailure', value: false, expectedResult: 0 },
    { name: 'fuelIndicatorFailure', value: 1, expectedResult: true },
    { name: 'fuelIndicatorFailure', value: 0, expectedResult: false },
    { name: 'headingFailure', value: true, expectedResult: 1 },
    { name: 'headingFailure', value: false, expectedResult: 0 },
    { name: 'headingFailure', value: 1, expectedResult: true },
    { name: 'headingFailure', value: 0, expectedResult: false },
    { name: 'VSIFailure', value: true, expectedResult: 1 },
    { name: 'VSIFailure', value: false, expectedResult: 0 },
    { name: 'VSIFailure', value: 1, expectedResult: true },
    { name: 'VSIFailure', value: 0, expectedResult: false },
    { name: 'transponderFailure', value: true, expectedResult: 1 },
    { name: 'transponderFailure', value: false, expectedResult: 0 },
    { name: 'transponderFailure', value: 1, expectedResult: true },
    { name: 'transponderFailure', value: 0, expectedResult: false },
    { name: 'NAVFailure', value: true, expectedResult: 1 },
    { name: 'NAVFailure', value: false, expectedResult: 0 },
    { name: 'NAVFailure', value: 1, expectedResult: true },
    { name: 'NAVFailure', value: 0, expectedResult: false },
    { name: 'pitotFailure', value: true, expectedResult: 1 },
    { name: 'pitotFailure', value: false, expectedResult: 0 },
    { name: 'pitotFailure', value: 1, expectedResult: true },
    { name: 'pitotFailure', value: 0, expectedResult: false },
    { name: 'turnCoordinatorFailure', value: true, expectedResult: 1 },
    { name: 'turnCoordinatorFailure', value: false, expectedResult: 0 },
    { name: 'turnCoordinatorFailure', value: 1, expectedResult: true },
    { name: 'turnCoordinatorFailure', value: 0, expectedResult: false },
    { name: 'vacuumFailure', value: true, expectedResult: 1 },
    { name: 'vacuumFailure', value: false, expectedResult: 0 },
    { name: 'vacuumFailure', value: 1, expectedResult: true },
    { name: 'vacuumFailure', value: 0, expectedResult: false },
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
