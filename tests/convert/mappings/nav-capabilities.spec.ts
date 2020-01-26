import { navCapabilities } from '@mappings/nav-capabilities';

const VALUES = [0, 1, 1, 0, 0, 0, 1, 1, 1, 1];
const EXPECTED_RESULT = {
  dme: false,
  tacan: true,
  voice: true,
  noSignal: false,
  dmeGlideslope: false,
  noBackCourse: false,
  glideslope: true,
  isLocaliser: true,
};

describe('nav capabilities mapping', () => {
  it('should map values to nav capabilities object', () => {
    expect(navCapabilities(VALUES)).toEqual(EXPECTED_RESULT);
  });
});
