import { Type } from 'fsuipc';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const ADF2: OffsetList = {
  adf2Freq: new Offset({
    value: 0x2D4,
    name: 'adf2Freq',
    category: OffsetCategory.RADIOS,
    description: 'ADF 2 freq - Main 3 digits in BCD - FS2004',
    type: Type.UInt16,
    convert: '+({VAL}).toString(16)',
    permission: 'rw',
  }),
  adf2ExtendedFreq: new Offset({
    value: 0x2D6,
    name: 'adf2ExtendedFreq',
    category: OffsetCategory.RADIOS,
    description: 'ADF 2 extended freq - in BCD - FS2004',
    type: Type.UInt16,
    permission: 'rw',
  }),
  adf2RelBearing: new Offset({
    value: 0x2D8,
    name: 'adf2RelBearing',
    category: OffsetCategory.RADIOS,
    description: 'ADF2 Rel Bearing - FS2004',
    convert: 'Math.round({VAL} * 360 / 65536)',
    type: Type.Int16,
    permission: 'r',
  }),
  ndb2Identity: new Offset({
    value: 0x2DC,
    name: 'ndb2Identity',
    category: OffsetCategory.RADIOS,
    description: 'NDB2 identity - FS2004',
    type: Type.String,
    length: 6,
    permission: 'r',
  }),
  ndb2Name: new Offset({
    value: 0x2E2,
    name: 'ndb2Name',
    category: OffsetCategory.RADIOS,
    description: 'NDB2 name - FS2004',
    type: Type.String,
    length: 25,
    permission: 'r',
  }),
  ndb2IdentSoundSwitch: new Offset({
    value: 0x2FB,
    name: 'ndb2IdentSoundSwitch',
    category: OffsetCategory.RADIOS,
    description: 'NDB2 ident sound switch - FS2004',
    type: Type.Byte,
    convert: '!!{VAL}',
    permission: 'rw',
  }),
  adf2SignalStrength: new Offset({
    value: 0xC14,
    name: 'adf2SignalStrength',
    category: OffsetCategory.RADIOS,
    description: 'ADF2 signal strength',
    type: Type.UInt32,
    permission: 'r',
  }),
};
