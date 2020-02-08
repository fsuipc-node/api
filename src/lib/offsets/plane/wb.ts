import { Type } from 'fsuipc';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const weightAndBalance: OffsetList = {
  lateralCGPercent: new Offset({
    value: 0x2E78,
    name: 'lateralCGPercent',
    category: OffsetCategory.SEAPLANE,
    description: 'lateral CG - percent from chord',
    convert: 'doublePercentRound',
    mapping: true,
    type: Type.Double,
    permission: 'r',
  }),
};
