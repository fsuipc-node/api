import { Type } from 'fsuipc';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const weather: OffsetList = {
  metarStationAltitude: new Offset({
    value: 0x4B4,
    name: 'metarStationAltitude',
    category: OffsetCategory.WEATHER,
    description: 'METAR station altitude - ft',
    type: Type.UInt16,
    convert: '+({VAL} * 3.28084).toFixed(2)',
    permission: 'r',
  }),
  windSurfaceTurbulenceGustSpeed: new Offset({
    value: 0x4BA,
    name: 'windSurfaceTurbulenceGustSpeed',
    category: OffsetCategory.WEATHER,
    description: 'METAR station altitude - kt',
    type: Type.UInt16,
    convert: '+({VAL}).toFixed(2)',
    permission: 'r',
  }),
  metarBarometricDrift: new Offset({
    value: 0x4BC,
    name: 'metarBarometricDrift',
    category: OffsetCategory.WEATHER,
    description: 'METAR barometric drift - difference between aircraft/METAR QNH. Adding drift withll give correct value for ATIS report',
    type: Type.UInt16,
    convert: '{VAL} / 16',
    permission: 'r',
  }),
  metarVisibility: new Offset({
    value: 0x4C0,
    name: 'metarVisibility',
    category: OffsetCategory.WEATHER,
    description: 'METAR visibility - sm',
    type: Type.UInt16,
    convert: '{VAL} / 100',
    permission: 'r',
  }),
  metarCloudThunderBase: new Offset({
    value: 0x4C2,
    name: 'metarCloudThunderBase',
    category: OffsetCategory.WEATHER,
    description: 'METAR visibility - ft',
    type: Type.UInt16,
    convert: '+({VAL} * 3.28084).toFixed(2)',
    permission: 'r',
  }),
  metarCloudBaseLow: new Offset({
    value: 0x4C4,
    name: 'metarCloudBaseLow',
    category: OffsetCategory.WEATHER,
    description: 'METAR cloud base low - ft',
    type: Type.UInt16,
    convert: '+({VAL} * 3.28084).toFixed(2)',
    permission: 'r',
  }),
  metarCloudBaseHigh: new Offset({
    value: 0x4C6,
    name: 'metarCloudBaseHigh',
    category: OffsetCategory.WEATHER,
    description: 'METAR cloud base high - ft',
    type: Type.UInt16,
    convert: '+({VAL} * 3.28084).toFixed(2)',
    permission: 'r',
  }),
  dewPoint: new Offset({
    value: 0x4C8,
    name: 'dewPoint',
    category: OffsetCategory.WEATHER,
    description: 'dew point - FS2000+',
    type: Type.Int16,
    convert: '{VAL} / 256',
    permission: 'r',
  }),
  precipitationRate: new Offset({
    value: 0x4C8,
    name: 'precipitationRate',
    category: OffsetCategory.WEATHER,
    description: 'precipitation rate - FS2000+ - 0 to 5',
    type: Type.Byte,
    permission: 'r',
  }),
  precipitationType: new Offset({
    value: 0x4CC,
    name: 'precipitationType',
    category: OffsetCategory.WEATHER,
    description: 'precipitation type - FS2000+ - 0 to 5',
    type: Type.Byte,
    convert: 'precipitationType',
    mapping: true,
    permission: 'r',
  }),
  cloudThunderCoverage: new Offset({
    value: 0x4CD,
    name: 'cloudThunderCoverage',
    category: OffsetCategory.WEATHER,
    description: 'cloud thunder coverage - octa',
    type: Type.Byte,
    permission: 'r',
  }),
  cloudLowCoverage: new Offset({
    value: 0x4CE,
    name: 'cloudLowCoverage',
    category: OffsetCategory.WEATHER,
    description: 'cloud low coverage - octa',
    type: Type.Byte,
    permission: 'r',
  }),
  cloudHighCoverage: new Offset({
    value: 0x4CF,
    name: 'cloudHighCoverage',
    category: OffsetCategory.WEATHER,
    description: 'cloud high coverage - octa',
    type: Type.Byte,
    permission: 'r',
  }),
  precipitationControl: new Offset({
    value: 0x4D2,
    name: 'precipitationControl',
    category: OffsetCategory.WEATHER,
    description: 'hi-byte type 0-2 - low-byte rate 0-5 - writing 0xFFFF release control',
    type: Type.UInt16,
    permission: 'w',
  }),
  dewPointControl: new Offset({
    value: 0x4D4,
    name: 'dewPointControl',
    category: OffsetCategory.WEATHER,
    description: 'degrees / 256 - 0x8000 release control',
    type: Type.UInt16,
    permission: 'w',
  }),
  surfaceWindSpeed: new Offset({
    value: 0x4D8,
    name: 'surfaceWindSpeed',
    category: OffsetCategory.WEATHER,
    description: 'surface wind speed - FS2000+ - kts',
    type: Type.UInt16,
    permission: 'r',
  }),
  surfaceWindDirection: new Offset({
    value: 0x4DA,
    name: 'surfaceWindDirection',
    category: OffsetCategory.WEATHER,
    description: 'surface wind direction - FS2000+ - deg MAG',
    type: Type.UInt16,
    convert: '+({VAL} * 360 / 65536).toFixed(2)',
    permission: 'r',
  }),
};
