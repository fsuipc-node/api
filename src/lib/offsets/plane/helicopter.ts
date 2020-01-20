import { Type } from 'fsuipc';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const helicopter: OffsetList = {
  rotorbreakActive: new Offset({
    value: 0x81E,
    name: 'rotorbreakActive',
    category: OffsetCategory.HELICOPTER,
    description: 'rotor brake active - Robinson only',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'rw',
  }),
  rotorClutchActive: new Offset({
    value: 0x81F,
    name: 'rotorClutchActive',
    category: OffsetCategory.HELICOPTER,
    description: 'rotor clutch active - Robinson only',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'rw',
  }),
  rotorChipWarning: new Offset({
    value: 0x820,
    name: 'rotorChipWarning',
    category: OffsetCategory.HELICOPTER,
    description: 'rotor chip detected - Rbinson only',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'rw',
  }),
  rotorGovWarning: new Offset({
    value: 0x821,
    name: 'rotorGovWarning',
    category: OffsetCategory.HELICOPTER,
    description: 'rotor gov active - Rbinson only',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'rw',
  }),
  rotorBreakApplication: new Offset({
    value: 0x822,
    name: 'rotorBreakApplication',
    category: OffsetCategory.HELICOPTER,
    description: 'rotor brake application - percent - Robinson only',
    convert: 'Math.round({VAL} / 16384 * 100)',
    type: Type.UInt16,
    permission: 'rw',
  }),
  rotorLateralTrim: new Offset({
    value: 0x824,
    name: 'rotorLateralTrim',
    category: OffsetCategory.HELICOPTER,
    description: 'rotor lateral trim - percent - Robinson only',
    convert: 'Math.round({VAL} / 16384 * 100)',
    type: Type.UInt16,
    permission: 'rw',
  }),
  governorSwitch: new Offset({
    value: 0x826,
    name: 'governorSwitch',
    category: OffsetCategory.HELICOPTER,
    description: 'governor switch activated - Robinson only',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'rw',
  }),
  rotorTransmissionTemp: new Offset({
    value: 0x828,
    name: 'rotorTransmissionTemp',
    category: OffsetCategory.HELICOPTER,
    description: 'rotor transmission temp - degrees Rankine - read only',
    type: Type.Double,
    permission: 'r',
  }),
};
