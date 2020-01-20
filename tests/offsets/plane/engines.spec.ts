import { engines as offsets } from '@offsets/plane/engines';

describe('offset - plane/engines', () => {
  const offsetsTestCases = [
    { name: 'hasMixtureControl', value: 0, expectedResult: false },
    { name: 'hasMixtureControl', value: 1, expectedResult: true },
    { name: 'hasCarbHeat', value: 0, expectedResult: false },
    { name: 'hasCarbHeat', value: 1, expectedResult: true },
  ];

  describe('offsets list', () => {
    it('should have required properties', () => {
      expect(offsets).toMatchSnapshot();
    });
  });

  offsetsTestCases.forEach(testedOffset => {
    describe(testedOffset.name, () => {
      it('should convert data properly', () => {
        const convertExpression = offsets[testedOffset.name].convert.replace('{VAL}', testedOffset.value.toString());

        // tslint:disable-next-line:no-eval
        expect(eval(convertExpression)).toEqual(testedOffset.expectedResult);
      });
    });
  });
});
