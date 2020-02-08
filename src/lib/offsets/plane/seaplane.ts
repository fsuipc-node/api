import { Type } from 'fsuipc';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const seaplane: OffsetList = {
  retractableLeftFloatExtension: new Offset({
    value: 0x614,
    name: 'retractableLeftFloatExtension',
    category: OffsetCategory.SEAPLANE,
    description: 'retractable left float extension - percent',
    convert: 'Math.floor({VAL} / 16384 * 100)',
    type: Type.UInt16,
    permission: 'r',
  }),
  retractableRightFloatExtension: new Offset({
    value: 0x616,
    name: 'retractableRightFloatExtension',
    category: OffsetCategory.SEAPLANE,
    description: 'retractable right float extension - percent',
    convert: 'Math.floor({VAL} / 16384 * 100)',
    type: Type.UInt16,
    permission: 'r',
  }),
  waterLeftRudderExtended: new Offset({
    value: 0x2A78,
    name: 'waterLeftRudderExtended',
    category: OffsetCategory.SEAPLANE,
    description: 'water left rudder extended',
    type: Type.Double,
    permission: 'r',
  }),
  waterRightRudderExtended: new Offset({
    value: 0x2A80,
    name: 'waterRightRudderExtended',
    category: OffsetCategory.SEAPLANE,
    description: 'water right rudder extended',
    type: Type.Double,
    permission: 'r',
  }),
  waterRudderHandlePosition: new Offset({
    value: 0x2A88,
    name: 'waterRudderHandlePosition',
    category: OffsetCategory.SEAPLANE,
    description: 'water rudder handle position',
    convert: 'Math.floor({VAL} / 16384 * 100)',
    type: Type.UInt32,
    permission: 'rw',
  }),
};
