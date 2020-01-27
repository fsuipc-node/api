import { Type } from 'fsuipc';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const ADF1: OffsetList = {
  adfFreq: new Offset({
    value: 0x34C,
    name: 'adfFreq',
    category: OffsetCategory.RADIOS,
    description: 'ADF frequency show as Binary Coded Decimal. The thousands digit and the fractional parts are provided in adfFreqExtended',
    type: Type.UInt16,
    convert: '+({VAL}).toString(16)',
    permission: 'rw',
  }),
  adfFreqExtended: new Offset({
    value: 0x356,
    name: 'adfFreqExtended',
    category: OffsetCategory.RADIOS,
    description: 'ADF frequency extended',
    type: Type.UInt16,
    permission: 'rw',
  }),
  adf1SignalStrength: new Offset({
    value: 0xC1C,
    name: 'adf1SignalStrength',
    category: OffsetCategory.RADIOS,
    description: 'ADF1 signal strength',
    type: Type.UInt32,
    permission: 'r',
  }),
  adf1BearingToNDB: new Offset({
    value: 0xC6A,
    name: 'adf1BearingToNDB',
    category: OffsetCategory.RADIOS,
    description: 'ADF1 relative bearing to NDB - degrees - -ve left, +ve right',
    convert: 'Math.round({VAL} * 360 / 65536)',
    type: Type.Int16,
    permission: 'r',
  }),
  adf1DialBearing: new Offset({
    value: 0xC6C,
    name: 'adf1DialBearing',
    category: OffsetCategory.RADIOS,
    description: 'ADF1 dial bearing - degrees',
    type: Type.UInt16,
    permission: 'rw',
  }),
};
