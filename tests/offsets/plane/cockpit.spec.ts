import { cockpit as offsets } from '@offsets/plane/cockpit';

describe('offset - plane/cockpit', () => {
  const offsetsTestCases = [
    { name: 'navLights', value: 0, expectedResult: false },
    { name: 'navLights', value: 1, expectedResult: true },
    { name: 'strobeLights', value: 0, expectedResult: false },
    { name: 'strobeLights', value: 1, expectedResult: true },
    { name: 'landingLights', value: 0, expectedResult: false },
    { name: 'landingLights', value: 1, expectedResult: true },
    { name: 'alternateStaticAirSource', value: 0, expectedResult: false },
    { name: 'alternateStaticAirSource', value: 1, expectedResult: true },
    { name: 'pitotHeat', value: 0, expectedResult: false },
    { name: 'pitotHeat', value: 1, expectedResult: true },
    { name: 'altimeterSettings', value: 32, expectedResult: 2 },
    { name: 'altimeterSettingsG1000', value: 32, expectedResult: 2 },
    { name: 'turnRate', value: 2765, expectedResult: 3 },
    { name: 'turnRate', value: 2055, expectedResult: 2 },
    { name: 'stallWarning', value: 0, expectedResult: false },
    { name: 'stallWarning', value: 1, expectedResult: true },
    { name: 'overspeedWarning', value: 0, expectedResult: false },
    { name: 'overspeedWarning', value: 1, expectedResult: true },
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
