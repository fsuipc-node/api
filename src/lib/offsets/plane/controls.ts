import { Type } from 'fsuipc';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const controls: OffsetList = {
  autoRudder: new Offset({
    value: 0x278,
    name: 'autoRudder',
    category: OffsetCategory.CONTROLS,
    description: 'auto coordination',
    convert: '!!{VAL}',
    type: Type.Int16,
    permission: 'rw',
  }),
  leftAileronDeflection: new Offset({
    value: 0x3B0,
    name: 'leftAileronDeflection',
    category: OffsetCategory.CONTROLS,
    description: 'left aileron deflection - radians',
    type: Type.Double,
    permission: 'r',
  }),
  rightAileronDeflection: new Offset({
    value: 0x3B8,
    name: 'rightAileronDeflection',
    category: OffsetCategory.CONTROLS,
    description: 'right aileron deflection - radians',
    type: Type.Double,
    permission: 'r',
  }),
  rotorClutchSwitch: new Offset({
    value: 0x889,
    name: 'rotorClutchSwitch',
    category: OffsetCategory.CONTROLS,
    description: 'rotor clutch switch',
    convert: '!!{VAL}',
    type: Type.Byte,
    permission: 'rw',
  }),
};
