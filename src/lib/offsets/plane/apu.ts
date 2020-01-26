import { Type } from 'fsuipc';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const APU: OffsetList = {
  APUGeneratorSwitch: new Offset({
    value: 0xB51,
    name: 'APUGeneratorSwitch',
    category: OffsetCategory.APU,
    description: 'APU generator switch',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'rw',
  }),
  APUGeneratorActive: new Offset({
    value: 0xB52,
    name: 'APUGeneratorActive',
    category: OffsetCategory.APU,
    description: 'APU generator active',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'r',
  }),
  APUOnFire: new Offset({
    value: 0xB53,
    name: 'APUOnFire',
    category: OffsetCategory.APU,
    description: 'APU generator active',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'r',
  }),
  APUMaxRPM: new Offset({
    value: 0xB54,
    name: 'APUMaxRPM',
    category: OffsetCategory.APU,
    description: 'APU generator max RPM percent',
    convert: '+({VAL}).toFixed(2)',
    type: Type.Single,
    permission: 'r',
  }),
  APUStarter: new Offset({
    value: 0xB58,
    name: 'APUStarter',
    category: OffsetCategory.APU,
    description: 'APU starter',
    convert: '{VAL} ? 1 : 0',
    type: Type.Single,
    permission: 'rw',
  }),
  APUVoltage: new Offset({
    value: 0xB5C,
    name: 'APUVoltage',
    category: OffsetCategory.APU,
    description: 'APU generator voltage',
    convert: '+({VAL}).toFixed(2)',
    type: Type.Single,
    permission: 'rw',
  }),
};
