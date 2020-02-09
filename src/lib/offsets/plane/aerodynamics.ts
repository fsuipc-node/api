import { Type } from 'fsuipc';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const APU: OffsetList = {
  incidenceAlpha: new Offset({
    value: 0x2ED0,
    name: 'incidenceAlpha',
    description: 'incidence alpha (body AoA) - radians',
    category: OffsetCategory.AERODYNAMICS,
    type: Type.Double,
    permission: 'r',
  }),
};
