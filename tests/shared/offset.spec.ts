import { Type } from 'fsuipc';

import { Offset } from '@shared/offset';
import { OffsetCategory } from '@shared/offset-category';

import * as MAPPINGS from '../../src/lib/convert/mappings';
jest.mock('../../src/lib/convert/mappings', () => ({
  MAPPINGS: {
    someMapping: jest.fn().mockReturnValue('mappingReturn')
  }
}));

const OFFSET_DATA_WITH_VALID_MAPPING = {
  name: 'someOffsetWithMapping',
  mapping: true,
  convert: 'someMapping',
  description: 'some magical description',
  value: 0x123,
  category: OffsetCategory.COCKPIT,
  type: Type.ByteArray,
  length: 4,
  unexistingKey: '[H+]'
};

const OFFSET_DATA_WITH_NON_EXISTING_MAPPING = {
  name: 'someOffsetWithMapping',
  mapping: true,
  convert: 'someNoneExistingMapping',
  description: 'some magical description',
  value: 0x123,
  category: OffsetCategory.COCKPIT,
  type: Type.ByteArray,
  length: 4,
};

const OFFSET_DATA_WITH_ONLY_MAPPING = {
  name: 'someOffsetWithMapping',
  mapping: true,
  description: 'some magical description',
  value: 0x123,
  category: OffsetCategory.COCKPIT,
  type: Type.ByteArray,
  length: 4,
};

const OFFSET_DATA_WITH_ONLY_CONVERT = {
  name: 'someOffsetWithMapping',
  convert: '{VAL}',
  description: 'some magical description',
  value: 0x123,
  category: OffsetCategory.COCKPIT,
  type: Type.ByteArray,
  length: 4,
};

const OFFSET_DATA_WITH_NON_VALID_CONVERT = {
  name: 'someOffsetWithMapping',
  convert: (() => { const doSomething = true; }) as any,
  description: 'some magical description',
  value: 0x123,
  category: OffsetCategory.COCKPIT,
  type: Type.ByteArray,
  length: 4,
};

let offset;

describe('Offset class', () => {
  beforeEach(() => {
    offset = undefined;
  });

  describe('initialization', () => {
    beforeEach(() => {
      offset = new Offset(OFFSET_DATA_WITH_VALID_MAPPING);
    });

    it('should map data to object attributes', () => {
      expect(offset.name).toEqual(OFFSET_DATA_WITH_VALID_MAPPING.name);
      expect(offset.mapping).toEqual(OFFSET_DATA_WITH_VALID_MAPPING.mapping);
      expect(offset.convert).toEqual(OFFSET_DATA_WITH_VALID_MAPPING.convert);
      expect(offset.description).toEqual(OFFSET_DATA_WITH_VALID_MAPPING.description);
      expect(offset.value).toEqual(OFFSET_DATA_WITH_VALID_MAPPING.value);
      expect(offset.category).toEqual(OFFSET_DATA_WITH_VALID_MAPPING.category);
      expect(offset.type).toEqual(OFFSET_DATA_WITH_VALID_MAPPING.type);
      expect(offset.length).toEqual(OFFSET_DATA_WITH_VALID_MAPPING.length);
      expect(offset.unexistingKey).toBeUndefined();
    });
  });

  describe('hasMapping', () => {
    describe('when offset has mapping and convert', () => {
      beforeEach(() => {
        offset = new Offset(OFFSET_DATA_WITH_VALID_MAPPING);
      });

      it('should return true', () => {
        expect(offset.hasMapping).toBe(true);
      });
    });

    describe('when offset has only mapping', () => {
      beforeEach(() => {
        offset = new Offset(OFFSET_DATA_WITH_ONLY_MAPPING);
      });

      it('should return false', () => {
        expect(offset.hasMapping).toBe(false);
      });
    });

    describe('when offset has only convert', () => {
      beforeEach(() => {
        offset = new Offset(OFFSET_DATA_WITH_ONLY_CONVERT);
      });

      it('should return false', () => {
        expect(offset.hasMapping).toBe(false);
      });
    });
  });

  describe('isMappingInvalid', () => {
    describe('when offset has existing mapping', () => {
      beforeEach(() => {
        offset = new Offset(OFFSET_DATA_WITH_VALID_MAPPING);
      });

      it('should return false', () => {
        expect(offset.isMappingInvalid).toBe(false);
      });
    });

    describe('when offset has non existing mapping', () => {
      beforeEach(() => {
        offset = new Offset(OFFSET_DATA_WITH_NON_EXISTING_MAPPING);
      });

      it('should return true', () => {
        expect(offset.isMappingInvalid).toBe(true);
      });
    });
  });

  describe('isInvalidConvertExpression', () => {
    describe('when convert is a string', () => {
      beforeEach(() => {
        offset = new Offset(OFFSET_DATA_WITH_VALID_MAPPING);
      });

      it('should return false', () => {
        expect(offset.isInvalidConvertExpression).toBe(false);
      });
    });

    describe('when convert expression is not a string', () => {
      beforeEach(() => {
        offset = new Offset(OFFSET_DATA_WITH_NON_VALID_CONVERT);
      });

      it('should return true', () => {
        expect(offset.isInvalidConvertExpression).toBe(true);
      });
    });
  });

  describe('mappingFunction', () => {
    describe('when mapping exists', () => {
      beforeEach(() => {
        offset = new Offset(OFFSET_DATA_WITH_VALID_MAPPING);
      });

      it('should return the matching mapping Function', () => {
        expect(typeof offset.mappingFunction).toEqual('function');
        expect(offset.mappingFunction()).toEqual('mappingReturn');
      });
    });

    describe('when mapping does not exist', () => {
      beforeEach(() => {
        offset = new Offset(OFFSET_DATA_WITH_NON_EXISTING_MAPPING);
      });

      it('should return undefined', () => {
        expect(offset.mappingFunction).toBeUndefined();
      });
    });
  });
});
