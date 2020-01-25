import { lightsMapping } from './lights';
import { runwaySurfaceCondition } from './runway-surface-condition';
import { precipitationType } from './precipitation-type';
import { seasons } from './seasons';
import { ftsecToKt, ktToFtsec } from './units';
import { engineType } from './engine-type';
import { nearestAirportsIds } from './nearest-airports-ids';
import { appliedBrakes } from './applied-brakes';
import { spoilersControl } from './spoilers-control';

export const MAPPINGS: { [key: string]: (_: any) => any } = {
  lightsMapping,
  runwaySurfaceCondition,

  // weather
  precipitationType,
  seasons,

  // units
  ftsecToKt,
  ktToFtsec,

  // plane
  engineType,
  appliedBrakes,
  spoilersControl,

  // environment
  nearestAirportsIds,
};

export * from './lights';
export * from './runway-surface-condition';
export * from './precipitation-type';
export * from './seasons';
export * from './units';
export * from './engine-type';
export * from './applied-brakes';
export * from './spoilers-control';
