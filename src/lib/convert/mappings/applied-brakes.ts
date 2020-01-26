import { Brakes } from '@shared/plane/brakes';

export const appliedBrakes = (value: number): Brakes => {
  switch (value) {
    case 1:
      return Brakes.LEFT;
    case 2:
      return Brakes.RIGHT;
    case 3:
      return Brakes.BOTH;
    default:
      return null;
  }
};
