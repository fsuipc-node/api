import { Type } from 'fsuipc';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const hydraulic: OffsetList = {
  hyd1Pressure: new Offset({
    value: 0x2B08,
    name: 'hyd1Pressure',
    category: OffsetCategory.HYDRAULIC,
    description: 'hyd1 pressure',
    type: Type.Double,
    permission: 'r',
  }),
  hyd1Reservoir: new Offset({
    value: 0x2B1C,
    name: 'hyd1Reservoir',
    category: OffsetCategory.HYDRAULIC,
    description: 'hyd1 reservoir percent',
    convert: 'doublePercentRound',
    mapping: true,
    type: Type.Double,
    permission: 'r',
  }),
  hyd2Pressure: new Offset({
    value: 0x2C08,
    name: 'hyd2Pressure',
    category: OffsetCategory.HYDRAULIC,
    description: 'hyd2 pressure',
    type: Type.Double,
    permission: 'r',
  }),
  hyd2Reservoir: new Offset({
    value: 0x2C1C,
    name: 'hyd2Reservoir',
    category: OffsetCategory.HYDRAULIC,
    description: 'hyd2 reservoir percent',
    convert: 'doublePercentRound',
    mapping: true,
    type: Type.Double,
    permission: 'r',
  }),
  hyd3Pressure: new Offset({
    value: 0x2D08,
    name: 'hyd3Pressure',
    category: OffsetCategory.HYDRAULIC,
    description: 'hyd3 pressure',
    type: Type.Double,
    permission: 'r',
  }),
  hyd3Reservoir: new Offset({
    value: 0x2D1C,
    name: 'hyd3Reservoir',
    category: OffsetCategory.HYDRAULIC,
    description: 'hyd3 reservoir percent',
    convert: 'doublePercentRound',
    mapping: true,
    type: Type.Double,
    permission: 'r',
  }),
  hyd4Pressure: new Offset({
    value: 0x2E08,
    name: 'hyd4Pressure',
    category: OffsetCategory.HYDRAULIC,
    description: 'hyd4 pressure',
    type: Type.Double,
    permission: 'r',
  }),
  hyd4Reservoir: new Offset({
    value: 0x2E1C,
    name: 'hyd4Reservoir',
    category: OffsetCategory.HYDRAULIC,
    description: 'hyd4 reservoir percent',
    convert: 'doublePercentRound',
    mapping: true,
    type: Type.Double,
    permission: 'r',
  }),
};
