import { navBackCourseFlags } from '@mappings/nav-back-course-flags';

const VALUES = [0, 1, 1, 0, 0, 0, 1, 1];
const EXPECTED_RESULT = {
  backCourseAvailable: false,
  localiserTunedIn: true,
  onBackCourse: true,
  stationActive: true,
};

describe('nav backcourse flags mapping', () => {
  it('should map values to nav backcourse flags object', () => {
    expect(navBackCourseFlags(VALUES)).toEqual(EXPECTED_RESULT);
  });
});
