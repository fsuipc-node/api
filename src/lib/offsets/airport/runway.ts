import { Type } from 'fsuipc';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const runway: OffsetList = {
  runwaySurfaceCondition: new Offset({
    value: 0x346,
    name: 'runwaySurfaceCondition',
    category: OffsetCategory.RUNWAY,
    description: 'surface condition',
    type: Type.Byte,
    mapping: true,
    convert: 'runwaySurfaceCondition',
    permission: 'r',
  }),
  runwaySurfaceConditionValid: new Offset({
    value: 0x347,
    name: 'runwaySurfaceConditionValid',
    category: OffsetCategory.RUNWAY,
    description: 'surface condition valid flag',
    type: Type.Byte,
    convert: '!!{VAL}',
    permission: 'r',
  }),
};

