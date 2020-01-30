import { Type } from 'fsuipc';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const ILS: OffsetList = {
  innerMarkerLatitude: new Offset({
    value: 0x1100,
    name: 'innerMarkerLatitude',
    category: OffsetCategory.RADIOS,
    description: 'inner marker latitude',
    type: Type.Int32,
    convert: '{VAL} * 90 / 10001750',
    permission: 'r',
  }),
  innerMarkerLongitude: new Offset({
    value: 0x1104,
    name: 'innerMarkerLongitude',
    category: OffsetCategory.RADIOS,
    description: 'inner marker longitude',
    type: Type.Int32,
    convert: '{VAL} * 360 / (65536 * 65536)',
    permission: 'r',
  }),
  innerMarkerAltitude: new Offset({
    value: 0x1108,
    name: 'innerMarkerAltitude',
    category: OffsetCategory.RADIOS,
    description: 'inner marker altitude - ft',
    type: Type.Int32,
    convert: '+({VAL} * 3.28084).toFixed(2)',
    permission: 'r',
  }),
  middleMarkerLatitude: new Offset({
    value: 0x110C,
    name: 'middleMarkerLatitude',
    category: OffsetCategory.RADIOS,
    description: 'middle marker latitude',
    type: Type.Int32,
    convert: '{VAL} * 90 / 10001750',
    permission: 'r',
  }),
  middleMarkerLongitude: new Offset({
    value: 0x1110,
    name: 'middleMarkerLongitude',
    category: OffsetCategory.RADIOS,
    description: 'middle marker longitude',
    type: Type.Int32,
    convert: '{VAL} * 360 / (65536 * 65536)',
    permission: 'r',
  }),
  middleMarkerAltitude: new Offset({
    value: 0x1114,
    name: 'middleMarkerAltitude',
    category: OffsetCategory.RADIOS,
    description: 'middle marker altitude - ft',
    type: Type.Int32,
    convert: '+({VAL} * 3.28084).toFixed(2)',
    permission: 'r',
  }),
  outerMarkerLatitude: new Offset({
    value: 0x1118,
    name: 'outerMarkerLatitude',
    category: OffsetCategory.RADIOS,
    description: 'outer marker latitude',
    type: Type.Int32,
    convert: '{VAL} * 90 / 10001750',
    permission: 'r',
  }),
  outerMarkerLongitude: new Offset({
    value: 0x111C,
    name: 'outerMarkerLongitude',
    category: OffsetCategory.RADIOS,
    description: 'outer marker longitude',
    type: Type.Int32,
    convert: '{VAL} * 360 / (65536 * 65536)',
    permission: 'r',
  }),
  outerMarkerAltitude: new Offset({
    value: 0x1120,
    name: 'outerMarkerAltitude',
    category: OffsetCategory.RADIOS,
    description: 'outer marker altitude - ft',
    type: Type.Int32,
    convert: '+({VAL} * 3.28084).toFixed(2)',
    permission: 'r',
  }),
};
