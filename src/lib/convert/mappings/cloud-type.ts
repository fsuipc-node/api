import { CloudType } from '@shared/weather/cloud-type';

export const cloudType = (value: number): CloudType => {
  switch (value) {
    case 1:
      return CloudType.CIRRUS;
    case 8:
      return CloudType.STRATUS;
    case 9:
      return CloudType.CUMULUS;
    default:
      return CloudType.USER;
  }
};
