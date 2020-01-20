import { Type } from 'fsuipc';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const icing: OffsetList = {
  structuralIce: new Offset({
    value: 0x348,
    name: 'structuralIce',
    category: OffsetCategory.ICING,
    description: 'structural ice - decimal percent',
    type: Type.UInt16,
    convert: '+({VAL} / 16384 * 100).toFixed(2)',
    permission: 'r',
  }),
  pitotIce: new Offset({
    value: 0x34A,
    name: 'pitotIce',
    category: OffsetCategory.ICING,
    description: 'structural ice - decimal percent',
    type: Type.UInt16,
    convert: '+({VAL} / 16384 * 100).toFixed(2)',
    permission: 'r',
  }),
};
