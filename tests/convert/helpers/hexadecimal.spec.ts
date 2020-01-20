import { HexadecimalHelper } from '@convert/helpers/hexadecimal';

describe('hexadecimal helper', () => {
  describe('binToHex', () => {
    it('should number to hexadecimal', () => {
      expect(HexadecimalHelper.binToHex(67)).toEqual('43');
    });
  });

  describe('hex2String', () => {
    it('should hexadecimal character code to string', () => {
      expect(HexadecimalHelper.hex2string(43)).toEqual('C');
      expect(HexadecimalHelper.hex2string('43')).toEqual('C');
    });
  });
});
