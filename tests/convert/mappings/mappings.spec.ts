import { MAPPINGS } from '@mappings/index';

describe('mappings list', () => {
  it('should import all mappings', () => {
    expect(MAPPINGS).toMatchSnapshot();
  });
});
