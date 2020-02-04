import { FuelTank } from '@shared/plane/fuel-tank';

export const fuelTank = (value: number): FuelTank => {
  switch (value) {
    case 0:
      return FuelTank.NONE;
    case 1:
      return FuelTank.ALL;
    case 2:
      return FuelTank.LEFT;
    case 3:
      return FuelTank.RIGHT;
    case 4:
      return FuelTank.LEFT_AUX;
    case 5:
      return FuelTank.RIGHT_AUX;
    case 6:
      return FuelTank.CENTER;
    case 7:
      return FuelTank.CENTER2;
    case 8:
      return FuelTank.CENTER3;
    case 9:
      return FuelTank.EXT1;
    case 10:
      return FuelTank.EXT2;
    case 11:
      return FuelTank.RIGHT_TIP;
    case 12:
      return FuelTank.LEFT_TIP;
    case 13:
      return FuelTank.CROSS_FEED;
    case 14:
      return FuelTank.CROSS_FEED_LTR;
    case 15:
      return FuelTank.CROSS_FEED_RTL;
    case 16:
      return FuelTank.CROSS_FEED_BOTH;
    case 17:
      return FuelTank.EXTERNAL;
    case 18:
      return FuelTank.ISOLATE;
    case 19:
      return FuelTank.LEFT_MAIN;
    case 20:
      return FuelTank.RIGHT_MAIN;
    default:
      return null;
  }
};
