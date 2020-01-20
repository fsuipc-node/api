import { environment as offsets } from '@offsets/environment/environment';

describe('offset - environment/environment', () => {
  describe('offsets list', () => {
    it('should have required properties', () => {
      expect(offsets).toMatchSnapshot();
    });
  });
});
