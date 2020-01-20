import { ftsecToKt, ktToFtsec } from '@mappings/units';

describe('ft/s to knots', () => {
  it('should convert unit properly', () => {
    expect(ftsecToKt(100)).toEqual(59.25);
  });
});

describe('knots to ft/s', () => {
  it('should convert unit properly', () => {
    expect(ktToFtsec(59.253)).toEqual(100.01);
  });
});
