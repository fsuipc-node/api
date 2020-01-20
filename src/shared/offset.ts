import { Type } from 'fsuipc';

import { OffsetCategory } from './offset-category';
import { MAPPINGS } from '@mappings/index';

export interface OffsetData {
  value: number;
  name: string;
  category: OffsetCategory;
  type: Type;

  mapping?: boolean;
  length?: number;
  description?: string;
  convert?: string;
  permission?: 'r' | 'w' | 'rw';
 }

export class Offset {
  public value: number = undefined;
  public name: string = undefined;
  public category: OffsetCategory = undefined;
  public type: Type = undefined;
  public mapping: boolean = undefined;
  public length: number = undefined;
  public description: string = undefined;
  public convert: string = undefined;
  public permission: string = undefined;

  constructor(offsetData: Partial<OffsetData>) {
    Object.keys(offsetData).forEach((key: string) => {
      if (key in this) {
        this[key] = offsetData[key];
      }
    });
  }

  public get hasMapping(): boolean {
    return !!(this.mapping && this.convert);
  }

  public get isMappingInvalid(): boolean {
    return !MAPPINGS[this.convert];
  }

  public get isInvalidConvertExpression(): boolean {
    return typeof this.convert !== 'string';
  }

  public get mappingFunction(): (_: any) => any {
    return MAPPINGS[this.convert];
  }
}
