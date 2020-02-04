import { lightsMapping } from './lights';
import { runwaySurfaceCondition } from './runway-surface-condition';
import { precipitationType } from './precipitation-type';
import { cloudType } from './cloud-type';
import { seasons } from './seasons';
import { ftsecToKt, ktToFtsec } from './units';
import { engineType } from './engine-type';
import { nearestAirportsIds } from './nearest-airports-ids';
import { appliedBrakes } from './applied-brakes';
import { spoilersControl } from './spoilers-control';
import { vorToFrom } from './vor-to-from';
import { navBackCourseFlags } from './nav-back-course-flags';
import { navCapabilities } from './nav-capabilities';
import { fuelTank } from './fuel-tank';

export const MAPPINGS: { [key: string]: (_: any) => any } = {
  lightsMapping,
  runwaySurfaceCondition,

  // weather
  precipitationType,
  seasons,
  cloudType,

  // units
  ftsecToKt,
  ktToFtsec,

  // plane
  engineType,
  appliedBrakes,
  spoilersControl,
  fuelTank,

  // environment
  nearestAirportsIds,

  // radios,
  vorToFrom,
  navBackCourseFlags,
  navCapabilities,
};

export * from './lights';
export * from './runway-surface-condition';
export * from './precipitation-type';
export * from './seasons';
export * from './units';
export * from './engine-type';
export * from './applied-brakes';
export * from './spoilers-control';
export * from './vor-to-from';
export * from './nav-back-course-flags';
export * from './nav-capabilities';
export * from './fuel-tank';
