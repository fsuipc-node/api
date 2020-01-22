import { applyConversion } from '@convert/apply-conversion';

import { VM } from 'vm2';
import * as MAPPINGS from '../../src/lib/convert/mappings';
import { Offset } from '@shared/offset';

jest.mock('../../src/lib/convert/mappings', () => ({
  MAPPINGS: {
    someMapping: jest.fn().mockReturnValue('mappingReturn')
  }
}));

const VALUE = 123;
const ARRAY = [123, 456];
const EXPECTED_RESULT_ARRAY = [124, 457];
const EXPECTED_RESULT_MULTIPLE = VALUE + VALUE;
const OFFSET_NO_CONVERT = new Offset({
  name: 'someOffset',
});
const OFFSET_WITH_NON_EXISTING_MAPPING = new Offset({
  name: 'someOffsetNonExistingMapping',
  mapping: true,
  convert: 'someNonExistingMapping',
});
const OFFSET_WITH_EXISTING_MAPPING = new Offset({
  name: 'someOffsetMapping',
  mapping: true,
  convert: 'someMapping',
});
const OFFSET_WITH_SIMPLE_CONVERT = new Offset({
  name: 'someOffsetWithConvert',
  convert: '!!{VAL}',
});
const OFFSET_WITH_ARRAY_CONVERT = new Offset({
  name: 'someOffsetWithConvert',
  convert: '({VAL}).map(val => val + 1)',
});
const OFFSET_WITH_MULTIPLE_VAL_USAGE = new Offset({
  name: 'someOffsetWithConvert',
  convert: '{VAL} + {VAL}',
});
const OFFSET_WITH_NON_STRING_CONVERT = new Offset({
  name: 'someOffsetWithConvert',
  convert: (() => { let something; }) as any,
});
const EXPECTED_EXPRESSION_ARRAY = '([123,456]).map(val => val + 1)';
const EXPECTED_EXPRESSION_SIMPLE = '!!123';
const EXPECTED_EXPRESSION_MULTIPLE = '123 + 123';

const mockRun = jest.fn().mockImplementation((expression) => {
  if (expression === EXPECTED_EXPRESSION_ARRAY) {
    return EXPECTED_RESULT_ARRAY;
  }

  if (expression === EXPECTED_EXPRESSION_MULTIPLE) {
    return EXPECTED_RESULT_MULTIPLE;
  }

  return true;
});
jest.mock('vm2', () => {
  return {
    VM: jest.fn().mockImplementation(() => {
      return {
        run: mockRun
      };
    })
  };
});

describe('apply conversion', () => {
  beforeEach(() => {
    mockRun.mockClear();
  });

  describe('when offset has no convert method', () => {
    it('should return value unmodified', () => {
      expect(applyConversion(OFFSET_NO_CONVERT, VALUE)).toEqual(VALUE);
    });

    it('should not evaluate expression directly', () => {
      expect(mockRun).not.toHaveBeenCalled();
    });
  });

  describe('when offset has a convert method', () => {
    describe('when conversion uses a mapping', () => {
      describe('when mapping was not found', () => {
        it('should return an errored value', () => {
          expect(applyConversion(OFFSET_WITH_NON_EXISTING_MAPPING, VALUE)).toEqual('INVALID_MAPPING_FUNCTION');
        });
      });

      describe('when mapping exists', () => {
        it('should call mapping method', () => {
          expect(applyConversion(OFFSET_WITH_EXISTING_MAPPING, VALUE)).toEqual('mappingReturn');
        });

        it('should not evaluate expression directly', () => {
          expect(mockRun).not.toHaveBeenCalled();
        });
      });
    });

    describe('when conversion does not use a mapping', () => {
      describe('when value is not a string', () => {
        it('should return an errored value set as unsupported conversion expression', () => {
          expect(applyConversion(OFFSET_WITH_NON_STRING_CONVERT, VALUE)).toEqual('UNSUPPORTED_CONVERSION_EXPRESSION');
        });

        it('should not evaluate expression directly', () => {
          expect(mockRun).not.toHaveBeenCalled();
        });
      });

      describe('when value is an array', () => {
        let result;

        beforeEach(() => {
          result = applyConversion(OFFSET_WITH_ARRAY_CONVERT, ARRAY);
        });

        it('should evaluate expression in safe VM', () => {
          expect(mockRun).toHaveBeenCalledWith(EXPECTED_EXPRESSION_ARRAY);
          expect(result).toEqual(EXPECTED_RESULT_ARRAY);
        });
      });

      describe('when value is not an array', () => {
        let result;

        beforeEach(() => {
          result = applyConversion(OFFSET_WITH_SIMPLE_CONVERT, VALUE);
        });

        it('should evaluate expression in safe VM', () => {
          expect(mockRun).toHaveBeenCalledWith(EXPECTED_EXPRESSION_SIMPLE);
          expect(result).toBe(true);
        });
      });

      describe('when expression has multiple value usage', () => {
        let result;

        beforeEach(() => {
          result = applyConversion(OFFSET_WITH_MULTIPLE_VAL_USAGE, VALUE);
        });

        it('should replace all occurences of value', () => {
          expect(mockRun).toHaveBeenCalledWith(EXPECTED_EXPRESSION_MULTIPLE);
          expect(result).toEqual(246);
        });
      });
    });
  });
});
