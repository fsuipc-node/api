import { positionAttitude as offsets } from '@offsets/position-attitude/position-attitude';

describe('offset - position-attitude/position-attitude', () => {
  const offsetsTestCases = [
    { name: 'groundElevation', value: 18726, expectedResult: 240 },
    { name: 'magVar', value: 38229, expectedResult: 210.00 },
    { name: 'gs', value: 674292, expectedResult: 19 },
    { name: 'tas', value: 257, expectedResult: 2 },
    { name: 'ias', value: 520, expectedResult: 4 },
    { name: 'bpa', value: 390, expectedResult: 3 },
    { name: 'vs', value: 14, expectedResult: 10 },
    { name: 'vsAtTouchdown', value: 13, expectedResult: 9 },
    { name: 'planeOnground', value: 0, expectedResult: false },
    { name: 'planeOnground', value: 1, expectedResult: true },
    { name: 'latitude', value: 2.2329449e+16, expectedResult: 46.78263288720104 },
    { name: 'longitude', value: -3.6582626e+18, expectedResult: -71.39333265196446 },
    { name: 'altitude', value: 392731796979, expectedResult: 300 },
    { name: 'pitch', value: -238609294, expectedResult: -20 },
    { name: 'bank', value: -238609294, expectedResult: -20 },
    { name: 'heading', value: -238609294, expectedResult: -20 },
    { name: 'viewpointLatitude', value: 2.2329449e+16, expectedResult: 46.78263288720104 },
    { name: 'viewpointLongitude', value: -3.6582626e+18, expectedResult: -71.39333265196446 },
    { name: 'viewpointAltitude', value: 392731796979, expectedResult: 300 },
    { name: 'viewpointPitch', value: -238609294, expectedResult: -20 },
    { name: 'viewpointBank', value: -238609294, expectedResult: -20 },
    { name: 'viewpointHeading', value: 2147483648, expectedResult: 180 },
    { name: 'verticalSpeed', value: -46, expectedResult: 150.92 },
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
