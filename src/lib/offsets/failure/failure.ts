import { Type } from 'fsuipc';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const failure: OffsetList = {
  hydFailure: new Offset({
    value: 0xB62,
    name: 'hydFailure',
    category: OffsetCategory.FAILURE,
    description: 'hydraulic failure',
    type: Type.Byte,
    convert: '{VAL} ? 1 : 0',
    permission: 'w',
  }),
};
