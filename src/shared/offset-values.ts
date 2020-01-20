export type RawOffsetValue = string | number | string[] | number[] | boolean[];

export interface OffsetValues {
  [key: string]: RawOffsetValue;
}
