import { Type } from 'fsuipc';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const pushback: OffsetList = {
  pushbackAngle: new Offset({
    value: 0x334,
    name: 'pushbackAngle',
    category: OffsetCategory.PUSHBACK,
    description: 'pushback angle - radians',
    type: Type.Single,
    permission: 'r',
  }),
  pushbackXContact: new Offset({
    value: 0x338,
    name: 'pushbackXContact',
    category: OffsetCategory.PUSHBACK,
    description: 'pushback X contact - ft',
    type: Type.Single,
    permission: 'r',
  }),
  pushbackYContact: new Offset({
    value: 0x33C,
    name: 'pushbackYContact',
    category: OffsetCategory.PUSHBACK,
    description: 'pushback Y contact - ft',
    type: Type.Single,
    permission: 'r',
  }),
  pushbackZContact: new Offset({
    value: 0x340,
    name: 'pushbackZContact',
    category: OffsetCategory.PUSHBACK,
    description: 'pushback Z contact - ft',
    type: Type.Single,
    permission: 'r',
  }),
  pushbackWaitFlag: new Offset({
    value: 0x344,
    name: 'pushbackWaitFlag',
    category: OffsetCategory.PUSHBACK,
    description: 'pushback wait flag',
    convert: '!!{VAL}',
    type: Type.UInt16,
    permission: 'r',
  }),
};

