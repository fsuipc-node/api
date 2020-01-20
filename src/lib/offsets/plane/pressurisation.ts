import { Type } from 'fsuipc';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const pressurisation: OffsetList = {
  pressCabinAlt: new Offset({
    value: 0x318,
    name: 'pressCabinAlt',
    category: OffsetCategory.PRESSURISATION,
    description: 'pressurisation: cabin altitude - ft',
    type: Type.Int32,
    permission: 'r',
  }),
  pressCabinAltTarget: new Offset({
    value: 0x31C,
    name: 'pressCabinAltTarget',
    category: OffsetCategory.PRESSURISATION,
    description: 'pressurisation: target cabin altitude - ft',
    type: Type.Int32,
    permission: 'r',
  }),
  pressCabinAltChange: new Offset({
    value: 0x320,
    name: 'pressCabinAltChange',
    category: OffsetCategory.PRESSURISATION,
    description: 'pressurisation: cabin altitude change set - ft/s',
    type: Type.Single,
    permission: 'r',
  }),
  pressCabinAltPressDiff: new Offset({
    value: 0x324,
    name: 'pressCabinAltPressDiff',
    category: OffsetCategory.PRESSURISATION,
    description: 'pressurisation: cabin altitude change set - lb/sqft',
    type: Type.Single,
    permission: 'r',
  }),
  pressDumpSwitch: new Offset({
    value: 0x328,
    name: 'pressDumpSwitch',
    category: OffsetCategory.PRESSURISATION,
    description: 'pressurisation: dump switch',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw',
  }),
};
