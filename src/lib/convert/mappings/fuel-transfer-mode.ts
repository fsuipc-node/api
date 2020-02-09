import { FuelTransferMode } from '@shared/plane/fuel-transfer-mode';

export const fuelTransferMode = (value: number): FuelTransferMode => {
  switch (value) {
    case 0:
      return FuelTransferMode.NONE;
    case 1:
      return FuelTransferMode.AUTO;
    case 2:
      return FuelTransferMode.FWD;
    case 3:
      return FuelTransferMode.AFT;
    default:
      return null;
  }
};
