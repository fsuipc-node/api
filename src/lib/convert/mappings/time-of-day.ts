import { TimeOfDay } from '@shared/environment/time-of-day';

export const timeOfDay = (value: number): TimeOfDay => {
  switch (value) {
    case 1:
      return TimeOfDay.DAY;
    case 2:
      return TimeOfDay.DUSK_DAWN;
    case 3:
      return TimeOfDay.NIGHT;
    default:
      return null;
  }
};
