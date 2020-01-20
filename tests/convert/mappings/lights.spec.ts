import { lightsMapping } from '@mappings/lights';

const VALUES = [0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0];
const EXPECTED_RESULT = {
  nav: false,
  beacon: true,
  land: true,
  taxi: false,
  strobe: false,
  panel: false,
  recognition: true,
  wing: true,
  logo: true,
  cabin: true
};

describe('lights mapping', () => {
  it('should map values to lights object', () => {
    expect(lightsMapping(VALUES)).toEqual(EXPECTED_RESULT);
  });
});
