import { VorToFrom } from '@shared/radios/vor-to-from';

export const vorToFrom = (value: number): VorToFrom => {
  switch (value) {
    case 0:
      return VorToFrom.OFF;
    case 1:
      return VorToFrom.TO;
    case 2:
      return VorToFrom.FROM;
    default:
      return null;
  }
};
