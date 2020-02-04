import { SurfaceCondition } from '@shared/runway/runway-surface-condition';

export const runwaySurfaceCondition = (value: number): SurfaceCondition => {
  switch (value) {
    case 0:
      return SurfaceCondition.NORMAL;
    case 1:
      return SurfaceCondition.WET;
    case 2:
      return SurfaceCondition.ICY;
    case 3:
      return SurfaceCondition.SNOW;
    default:
      return null;
  }
};
