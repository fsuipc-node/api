import { nearestAirportsIds } from '@mappings/nearest-airports-ids';

/* tslint:disable */
const BYTE_ARRAY = [
  67,89,81,66,
  25,42,59,66,99,201,142,194,214,255,115,67,10,5,233,61,
  67,83,71,53,
  185,189,58,66,167,77,142,194,1,128,162,67,149,233,60,65,
  67,83,84,55,
  185,61,58,66,113,93,142,194,2,128,237,67,41,121,130,65,
  67,83,75,53,
  123,148,59,66,89,146,143,194,224,127,17,68,255,229,137,65,
  67,84,82,54,
  107,34,59,66,28,167,143,194,1,0,150,67,90,200,141,65,
  67,84,81,54,
  223,124,58,66,246,232,141,194,0,0,12,68,194,184,165,65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,128,0,0,10,51,1,0,100,0,50,0,2,32,0,0,0,0,0,0,0,0,0,0,0,128,0,0,10,51,1,0,100,0,50,0,2,0,0,0,0,0,0,0,0,0,0,0,0,51,0,0,30,77,2,176,29,16,14,153,57,204,12,0,0,0,0,0,0,0,0,0,0,10,0,0,7,0,1
];
/* tslint:enable */

let EMPTY_BYTE_ARRAY = Array(128).fill(0);

const EXPECTED_AIRPORTS = [
  'CYQB',
  'CSG5',
  'CST7',
  'CSK5',
  'CTR6',
  'CTQ6'
];

let EMPTY_ARRAY = Array(6).fill('');

describe('nearest airport ids', () => {
  it('should convert byte array to airport OACI code list', () => {
    expect(nearestAirportsIds(BYTE_ARRAY)).toEqual(EXPECTED_AIRPORTS);
  });

  it('should convert empty byte array to an empty OACI code list', () => {
    expect(nearestAirportsIds(EMPTY_BYTE_ARRAY)).toEqual(EMPTY_ARRAY);
  });
});
