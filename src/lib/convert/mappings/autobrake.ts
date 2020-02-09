import { AutoBrake } from '@shared/plane/autobrake';

export const autoBrake = (value: number): AutoBrake => {
  switch (value) {
    case 0:
      return AutoBrake.RTO;
    case 1:
      return AutoBrake.OFF;
    case 2:
      return AutoBrake.BRAKE1;
    case 3:
      return AutoBrake.BRAKE2;
    case 4:
      return AutoBrake.BRAKE3;
    case 5:
      return AutoBrake.BRAKE3;
    default:
      return null;
  }
};
