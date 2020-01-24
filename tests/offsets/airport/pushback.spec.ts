import { pushback as offsets } from '@offsets/airport/pushback';

describe('offset - airport/pushback', () => {
  const offsetsTestCases = [
    { name: 'pushbackWaitFlag', value: 0, expectedResult: false },
    { name: 'pushbackWaitFlag', value: 1, expectedResult: true },
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
