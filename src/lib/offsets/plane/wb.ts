import { Type } from 'fsuipc';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const weightAndBalance: OffsetList = {
  lateralCGPercent: new Offset({
    value: 0x2E78,
    name: 'lateralCGPercent',
    category: OffsetCategory.WB,
    description: 'lateral CG - percent from chord',
    convert: 'doublePercentRound',
    mapping: true,
    type: Type.Double,
    permission: 'r',
  }),
  CGPercent: new Offset({
    value: 0x2EF8,
    name: 'CGPercent',
    category: OffsetCategory.WB,
    description: 'CG - percent from chord',
    convert: 'doublePercentRound',
    mapping: true,
    type: Type.Double,
    permission: 'r',
  }),
  CGAftLimit: new Offset({
    value: 0x2F00,
    name: 'CGAftLimit',
    category: OffsetCategory.WB,
    description: 'CG aft limit - percent',
    convert: 'doublePercentRound',
    mapping: true,
    type: Type.Double,
    permission: 'r',
  }),
  CGFwdLimit: new Offset({
    value: 0x2F08,
    name: 'CGFwdLimit',
    category: OffsetCategory.WB,
    description: 'CG forward limit - percent',
    convert: 'doublePercentRound',
    mapping: true,
    type: Type.Double,
    permission: 'r',
  }),
  CGMaxMach: new Offset({
    value: 0x2F10,
    name: 'CGMaxMach',
    category: OffsetCategory.WB,
    description: 'CG max mach',
    type: Type.Double,
    permission: 'r',
  }),
  CGMinMach: new Offset({
    value: 0x2F18,
    name: 'CGMinMach',
    category: OffsetCategory.WB,
    description: 'CG min mach',
    type: Type.Double,
    permission: 'r',
  }),
};
