import { Season } from '@shared/weather/season';

export const seasons = (value: number): Season => {
  switch (value) {
    case 0:
      return Season.WINTER;
    case 1:
      return Season.SPRING;
    case 2:
      return Season.SUMMER;
    case 3:
      return Season.AUTUMN;
    default:
      return null;
  }
};
