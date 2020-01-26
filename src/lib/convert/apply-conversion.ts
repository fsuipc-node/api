import { VM } from 'vm2';

import { Offset } from '@shared/offset';
import { RawOffsetValue } from '@shared/offset-values';
import { ConvertedOffsetValue } from '@shared/converted-offset-values';

export const applyConversion = (offset: Offset, rawOffsetValue: RawOffsetValue): ConvertedOffsetValue => {
  if (!offset.convert) {
    return rawOffsetValue;
  }

  if (offset.hasMapping) {
    if (offset.isMappingInvalid) {
      return 'INVALID_MAPPING_FUNCTION';
    }

    return offset.mappingFunction(rawOffsetValue);
  } else {
    // tslint:disable-next-line:no-eval
    if (offset.isInvalidConvertExpression) {
      return 'UNSUPPORTED_CONVERSION_EXPRESSION';
    }

    return new VM().run(
      replaceOffsetExpressionValue(offset, rawOffsetValue)
    );
  }
};

export const replaceOffsetExpressionValue = (offset: Offset, rawOffsetValue: RawOffsetValue): string => {
  return offset.convert.replace(
    new RegExp(/{VAL}/g),
    Array.isArray(rawOffsetValue)
      ? `${JSON.stringify(rawOffsetValue)}`
      : typeof rawOffsetValue === 'string'
        ? `'${rawOffsetValue}'`
        : rawOffsetValue.toString()
  );
};
