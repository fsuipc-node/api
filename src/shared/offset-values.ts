export type RawOffsetValue = string | number | boolean | string[] | number[] | boolean[];

export interface OffsetValues {
  [key: string]: RawOffsetValue;
}
