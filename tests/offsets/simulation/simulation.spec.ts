import { simulation as offsets } from '@offsets/simulation/simulation';

describe('offset - plane/simulation', () => {
  const offsetsTestCases = [
    { name: 'cloudComplex', value: 0, expectedResult: false },
    { name: 'cloudComplex', value: 1, expectedResult: true },
    { name: 'pauseFlag', value: 0, expectedResult: false },
    { name: 'pauseFlag', value: 1, expectedResult: true },
    { name: 'framerate', value: 354, expectedResult: 92 },
    { name: 'zoomfactor', value: 128, expectedResult: 2 },
    { name: 'fuelBoxFlag', value: 0, expectedResult: false },
    { name: 'fuelBoxFlag', value: 1, expectedResult: true },
    { name: 'comFreqInc', value: 0, expectedResult: 50 },
    { name: 'comFreqInc', value: 1, expectedResult: 25 },
    { name: 'adfFreqInc', value: 0, expectedResult: 1.0 },
    { name: 'adfFreqInc', value: 1, expectedResult: 0.1 },
    { name: 'smokeSystemAvailable', value: 0, expectedResult: false },
    { name: 'smokeSystemAvailable', value: 1, expectedResult: true },
    { name: 'slewMode', value: 0, expectedResult: false },
    { name: 'slewMode', value: 1, expectedResult: true },
    { name: 'replayInAction', value: 0, expectedResult: false },
    { name: 'replayInAction', value: 1, expectedResult: true },
    { name: 'videoRecording', value: 0, expectedResult: false },
    { name: 'videoRecording', value: 1, expectedResult: true },
    { name: 'crashed', value: 0, expectedResult: false },
    { name: 'crashed', value: 1, expectedResult: true },
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
