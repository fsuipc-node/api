import { OFFSETS } from '@offsets/index';

describe('offsets list', () => {
  it('should resolve full list', () => {
    expect(OFFSETS).toMatchSnapshot();
  });
});
