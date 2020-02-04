import { PrecipitationType } from '@shared/weather/precipitation-type';

export const precipitationType = (value: number): PrecipitationType => {
  switch (value) {
    case 0:
      return PrecipitationType.NONE;
    case 1:
      return PrecipitationType.RAIN;
    case 2:
      return PrecipitationType.SNOW;
    default:
      return null;
  }
};
