import { Type } from 'fsuipc';

import { OffsetCategory } from '@shared/offset-category';
import { OffsetList } from '@shared/offset-list';
import { Offset } from '@shared/offset';

export const radios: OffsetList = {
  adf2Freq: new Offset({
    value: 0x2D4,
    name: 'adf2Freq',
    category: OffsetCategory.RADIOS,
    description: 'ADF 2 freq - Main 3 digits in BCD - FS2004',
    type: Type.UInt16,
    convert: '+({VAL}).toString(16)',
    permission: 'rw',
  }),
  adf2ExtendedFreq: new Offset({
    value: 0x2D6,
    name: 'adf2ExtendedFreq',
    category: OffsetCategory.RADIOS,
    description: 'ADF 2 extended freq - in BCD - FS2004',
    type: Type.UInt16,
    permission: 'rw',
  }),
  adf2RelBearing: new Offset({
    value: 0x2D8,
    name: 'adf2RelBearing',
    category: OffsetCategory.RADIOS,
    description: 'ADF2 Rel Bearing - FS2004',
    convert: 'Math.round({VAL} * 360 / 65536)',
    type: Type.Int16,
    permission: 'r',
  }),
  ndb2Identity: new Offset({
    value: 0x2DC,
    name: 'ndb2Identity',
    category: OffsetCategory.RADIOS,
    description: 'NDB2 identity - FS2004',
    type: Type.String,
    length: 6,
    permission: 'r',
  }),
  ndb2Name: new Offset({
    value: 0x2E2,
    name: 'ndb2Name',
    category: OffsetCategory.RADIOS,
    description: 'NDB2 name - FS2004',
    type: Type.String,
    length: 25,
    permission: 'r',
  }),
  ndb2IdentSoundSwitch: new Offset({
    value: 0x2FB,
    name: 'ndb2IdentSoundSwitch',
    category: OffsetCategory.RADIOS,
    description: 'NDB2 ident sound switch - FS2004',
    type: Type.Byte,
    convert: '!!{VAL}',
    permission: 'rw',
  }),
  vor1DMEDistance: new Offset({
    value: 0x300,
    name: 'vor1DMEDistance',
    category: OffsetCategory.RADIOS,
    description: 'VOR1 DME distance - nm',
    convert: '{VAL} / 10',
    type: Type.UInt16,
    permission: 'r',
  }),
  vor1DMESpeed: new Offset({
    value: 0x302,
    name: 'vor1DMESpeed',
    category: OffsetCategory.RADIOS,
    description: 'VOR1 DME speed - kt',
    convert: '{VAL} / 10',
    type: Type.UInt16,
    permission: 'r',
  }),
  vor1DMETimeToStation: new Offset({
    value: 0x304,
    name: 'vor1DMETimeToStation',
    category: OffsetCategory.RADIOS,
    description: 'VOR1 DME time to station - sec',
    convert: '{VAL} / 10',
    type: Type.UInt16,
    permission: 'r',
  }),
  vor2DMEDistance: new Offset({
    value: 0x306,
    name: 'vor2DMEDistance',
    category: OffsetCategory.RADIOS,
    description: 'VOR2 DME distance - nm',
    convert: '{VAL} / 10',
    type: Type.UInt16,
    permission: 'r',
  }),
  vor2DMESpeed: new Offset({
    value: 0x308,
    name: 'vor2DMESpeed',
    category: OffsetCategory.RADIOS,
    description: 'VOR2 DME speed - kt',
    convert: '{VAL} / 10',
    type: Type.UInt16,
    permission: 'r',
  }),
  vor2DMETimeToStation: new Offset({
    value: 0x30A,
    name: 'vor2DMETimeToStation',
    category: OffsetCategory.RADIOS,
    description: 'VOR2 DME time to station - sec',
    convert: '{VAL} / 10',
    type: Type.UInt16,
    permission: 'r',
  }),
  adfFreq: new Offset({
    value: 0x34C,
    name: 'adfFreq',
    category: OffsetCategory.RADIOS,
    description: 'ADF frequency show as Binary Coded Decimal. The thousands digit and the fractional parts are provided in adfFreqExtended',
    type: Type.UInt16,
    convert: '+({VAL}).toString(16)',
    permission: 'rw',
  }),
  adfFreqExtended: new Offset({
    value: 0x356,
    name: 'adfFreqExtended',
    category: OffsetCategory.RADIOS,
    description: 'ADF frequency extended',
    type: Type.UInt16,
    permission: 'rw',
  }),
  comFreq: new Offset({
    value: 0x34E,
    name: 'comFreq',
    category: OffsetCategory.RADIOS,
    description: 'Com frequency',
    type: Type.UInt16,
    convert: 'parseInt(`1` + ({VAL}).toString(16))',
    permission: 'rw',
  }),
  nav1Freq: new Offset({
    value: 0x350,
    name: 'nav1Freq',
    category: OffsetCategory.RADIOS,
    description: 'NAV1 frequency',
    type: Type.UInt16,
    convert: 'parseInt(`1` + ({VAL}).toString(16))',
    permission: 'rw',
  }),
  nav2Freq: new Offset({
    value: 0x352,
    name: 'nav2Freq',
    category: OffsetCategory.RADIOS,
    description: 'NAV2 frequency',
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
  hasNav1: new Offset({
    value: 0x7A0,
    name: 'hasNav1',
    category: OffsetCategory.RADIOS,
    description: 'has NAV1',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'rw',
  }),
  hasNav2: new Offset({
    value: 0x7A4,
    name: 'hasNav2',
    category: OffsetCategory.RADIOS,
    description: 'has NAV2',
    convert: '!!{VAL}',
    type: Type.UInt32,
    permission: 'r',
  }),
  vor2DmeLatitude: new Offset({
    value: 0x834,
    name: 'vor2DmeLatitude',
    category: OffsetCategory.RADIOS,
    description: 'VOR 2 DME latitude - FS2002+',
    type: Type.Int32,
    convert: '{VAL} * 90 / 10001750',
    permission: 'r',
  }),
  vor2DmeLongitude: new Offset({
    value: 0x838,
    name: 'vor2DmeLongitude',
    category: OffsetCategory.RADIOS,
    description: 'VOR 2 DME longitude - FS2002+',
    type: Type.Int32,
    convert: '{VAL} * 360 / (65536 * 65536)',
    permission: 'r',
  }),
  vor2DmeElevation: new Offset({
    value: 0x83C,
    name: 'vor2DmeElevation',
    category: OffsetCategory.RADIOS,
    description: 'VOR 2 DME elevation - meters - FS2002+',
    type: Type.Int32,
    convert: '+({VAL} * 3.28084).toFixed(2)',
    permission: 'r',
  }),
  vor2ILSLocHeadingTrue: new Offset({
    value: 0x844,
    name: 'vor2ILSLocHeadingTrue',
    category: OffsetCategory.RADIOS,
    description: 'NAV2 ILS Localiser inverse runway heading if VOR 2 is ILS - TRUE - FS2002+ - 180 different to aircraft direction to follow localiser',
    type: Type.UInt16,
    convert: '+({VAL} * 360 / 65536).toFixed(2)',
    permission: 'r',
  }),
  vor2ILSGlideSlopeAngle: new Offset({
    value: 0x846,
    name: 'vor2ILSGlideSlopeAngle',
    category: OffsetCategory.RADIOS,
    description: 'VOR 2 ILS GlideSlope Angle',
    type: Type.Int16,
    convert: '+({VAL} * 360 / 65536).toFixed(2)',
    permission: 'r',
  }),
  vor2LocLatitude: new Offset({
    value: 0x84C,
    name: 'vor2LocLatitude',
    category: OffsetCategory.RADIOS,
    description: 'VOR 2 or NAV2 ILS LOC latitude - FS2002+',
    type: Type.Int32,
    convert: '{VAL} * 90 / 10001750',
    permission: 'r',
  }),
  vor2LocLongitude: new Offset({
    value: 0x850,
    name: 'vor2LocLongitude',
    category: OffsetCategory.RADIOS,
    description: 'VOR 2 or NAV2 ILS LOC longitude - FS2002+',
    type: Type.Int32,
    convert: '{VAL} * 360 / (65536 * 65536)',
    permission: 'r',
  }),
  vor2LocElevation: new Offset({
    value: 0x854,
    name: 'vor2LocElevation',
    category: OffsetCategory.RADIOS,
    description: 'VOR 2 or NAV2 ILS LOC elevation - meters - FS2002+',
    type: Type.Int32,
    convert: '+({VAL} * 3.28084).toFixed(2)',
    permission: 'r',
  }),
  vor2OrILSGlideSlopeLatitude: new Offset({
    value: 0x858,
    name: 'vor2OrILSGlideSlopeLatitude',
    category: OffsetCategory.RADIOS,
    description: 'VOR 2 latitude or NAV2 ILS glideslope latitude - FS2002+',
    type: Type.Int32,
    convert: '{VAL} * 90 / 10001750',
    permission: 'r',
  }),
  vor1OrILSGlideSlopeLatitude: new Offset({
    value: 0x85C,
    name: 'vor1OrILSGlideSlopeLatitude',
    category: OffsetCategory.RADIOS,
    description: 'VOR 1 latitude OR NAV1 ILS glideslope latitude',
    type: Type.Int32,
    convert: '{VAL} * 90 / 10001750',
    permission: 'r',
  }),
  vor2OrILSGlideSlopeLongitude: new Offset({
    value: 0x860,
    name: 'vor2OrILSGlideSlopeLongitude',
    category: OffsetCategory.RADIOS,
    description: 'VOR 2 or NAV 2 ILS glideslope longitude - FS2002+',
    type: Type.Int32,
    convert: '{VAL} * 360 / (65536 * 65536)',
    permission: 'r',
  }),
  vor1OrILSGlideSlopeLongitude: new Offset({
    value: 0x864,
    name: 'vor1OrILSGlideSlopeLongitude',
    category: OffsetCategory.RADIOS,
    description: 'VOR 1 or NAV 1 ILS glideslope longitude',
    type: Type.Int32,
    convert: '{VAL} * 360 / (65536 * 65536)',
    permission: 'r',
  }),
  vor2OrILSGlideSlopeElevation: new Offset({
    value: 0x868,
    name: 'vor2OrILSGlideSlopeElevation',
    category: OffsetCategory.RADIOS,
    description: 'VOR 2 or NAV2 ILS glideslope elevation - meters - FS2002+',
    type: Type.Int32,
    convert: '+({VAL} * 3.28084).toFixed(2)',
    permission: 'r',
  }),
  vor1OrILSGlideSlopeElevation: new Offset({
    value: 0x86C,
    name: 'vor1OrILSGlideSlopeElevation',
    category: OffsetCategory.RADIOS,
    description: 'VOR 1 or NAV1 ILS glideslope elevation - meters - FS2002+',
    type: Type.Int32,
    convert: '+({VAL} * 3.28084).toFixed(2)',
    permission: 'r',
  }),
  vor1ILSLocHeadingTrue: new Offset({
    value: 0x870,
    name: 'vor1LocHeadingTrue',
    category: OffsetCategory.RADIOS,
    description: 'VOR 1 ILS LOC heading - TRUE - -180 different to aircraft direction to follow localiser',
    type: Type.UInt16,
    convert: '+({VAL} * 360 / 65536).toFixed(2)',
    permission: 'r',
  }),
  vor1GlideSlopeAngle: new Offset({
    value: 0x872,
    name: 'vor1GlideSlopeAngle',
    category: OffsetCategory.RADIOS,
    description: 'VOR 1 ILS glideslope Angle',
    type: Type.Int16,
    convert: '+({VAL} * 360 / 65536).toFixed(2)',
    permission: 'r',
  }),
  vor1LocLatitude: new Offset({
    value: 0x874,
    name: 'vor1LocLatitude',
    category: OffsetCategory.RADIOS,
    description: 'VOR 1 or NAV1 ILS LOC latitude - FS2002+',
    type: Type.Int32,
    convert: '{VAL} * 90 / 10001750',
    permission: 'r',
  }),
  vor1LocLongitude: new Offset({
    value: 0x878,
    name: 'vor1LocLongitude',
    category: OffsetCategory.RADIOS,
    description: 'VOR 1 or NAV1 ILS LOC longitude - FS2002+',
    type: Type.Int32,
    convert: '{VAL} * 360 / (65536 * 65536)',
    permission: 'r',
  }),
  vor1LocElevation: new Offset({
    value: 0x87C,
    name: 'vor1LocElevation',
    category: OffsetCategory.RADIOS,
    description: 'VOR 1 or NAV1 ILS LOC elevation - meters - FS2002+',
    type: Type.Int32,
    convert: '+({VAL} * 3.28084).toFixed(2)',
    permission: 'r',
  }),
  vor1DmeLatitude: new Offset({
    value: 0x880,
    name: 'vor1DmeLatitude',
    category: OffsetCategory.RADIOS,
    description: 'VOR 1 DME latitude - FS2002+',
    type: Type.Int32,
    convert: '{VAL} * 90 / 10001750',
    permission: 'r',
  }),
  vor1DmeLongitude: new Offset({
    value: 0x884,
    name: 'vor1DmeLongitude',
    category: OffsetCategory.RADIOS,
    description: 'VOR 1 DME longitude - FS2002+',
    type: Type.Int32,
    convert: '{VAL} * 360 / (65536 * 65536)',
    permission: 'r',
  }),
  vor1DmeElevation: new Offset({
    value: 0x88A,
    name: 'vor1DmeElevation',
    category: OffsetCategory.RADIOS,
    description: 'VOR 1 DME elevation - ft - FS2002+',
    type: Type.Int32,
    convert: '+({VAL} * 3.28084).toFixed(2)',
    permission: 'r',
  }),
};
