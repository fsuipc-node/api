import { Type } from 'fsuipc';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const radios: OffsetList = {
  comFreq: new Offset({
    value: 0x34E,
    name: 'comFreq',
    category: OffsetCategory.RADIOS,
    description: 'Com frequency',
    type: Type.UInt16,
    convert: 'parseInt(`1` + ({VAL}).toString(16))',
    permission: 'rw',
  }),
  transponderFreq: new Offset({
    value: 0x354,
    name: 'transponderFreq',
    category: OffsetCategory.RADIOS,
    description: 'XPND transponder frequency',
    type: Type.UInt16,
    convert: 'parseInt(`1` + ({VAL}).toString(16))',
    permission: 'rw',
  }),
  nav12Select: new Offset({
    value: 0x374,
    name: 'nav12Select',
    category: OffsetCategory.RADIOS,
    description: 'NAV1/NAV2 select',
    type: Type.UInt16,
    permission: 'rw',
  }),
  dme12Select: new Offset({
    value: 0x378,
    name: 'dme12Select',
    category: OffsetCategory.RADIOS,
    description: 'DME1/DME2 select',
    type: Type.UInt16,
    permission: 'rw',
  }),
  navAdfActivate: new Offset({
    value: 0x388,
    name: 'navAdfActivate',
    category: OffsetCategory.RADIOS,
    description: 'NAV and ADF activate < FS2000',
    type: Type.UInt16,
    permission: 'w',
  }),
  comAtisActivate: new Offset({
    value: 0x38A,
    name: 'comAtisActivate',
    category: OffsetCategory.RADIOS,
    description: 'COM/ATIS activate < FS2000',
    type: Type.UInt16,
    permission: 'w',
  }),
  innerMarker: new Offset({
    value: 0xBAC,
    name: 'innerMarker',
    category: OffsetCategory.RADIOS,
    description: 'inner marker - activated when TRUE',
    type: Type.Int16,
    permission: 'r',
  }),
  middleMarker: new Offset({
    value: 0xBAE,
    name: 'middleMarker',
    category: OffsetCategory.RADIOS,
    description: 'middle marker - activated when TRUE',
    type: Type.Int16,
    permission: 'r',
  }),
  outerMarker: new Offset({
    value: 0xBB0,
    name: 'outerMarker',
    category: OffsetCategory.RADIOS,
    description: 'outer marker - activated when TRUE',
    type: Type.Int16,
    permission: 'r',
  }),
};
