import { Type } from 'fsuipc';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const fuel: OffsetList = {
  fuelWeight: new Offset({
    value: 0xAF4,
    name: 'fuelWeight',
    category: OffsetCategory.FUEL,
    description: 'fuel weight - lbs/gal',
    type: Type.Int16,
    convert: '{VAL} / 256',
    permission: 'r',
  }),
  fuelTankSelector: new Offset({
    value: 0xAF8,
    name: 'fuelTankSelector',
    category: OffsetCategory.FUEL,
    description: '0=Off, 1=All, 2=Left, 3=Right, 4=LeftAux, 5=RightAux, 6=Center, 7=Centre2, 8=Centre3, 9=Ext1, 10=Ext2, 11=RtTip, 12=LftTip, 13=CrossFeed, 14=CrossFeed Left to Right, 15=CrossFeed Right to Left, 16=crossfeed both, 17=external, 18=isolate, 19=left main, 20=right main --- Engine 1 only',
    type: Type.Int16,
    permission: 'rw',
  }),
};
