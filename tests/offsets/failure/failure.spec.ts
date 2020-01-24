import { failure as offsets } from '@offsets/failure/failure';

describe('offset - plane/failures', () => {
  const offsetsTestCases = [
    { name: 'hydFailure', value: true, expectedResult: 1 },
    { name: 'hydFailure', value: false, expectedResult: 0 },
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
