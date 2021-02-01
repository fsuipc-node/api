import { FSUIPC, FSUIPCError } from 'fsuipc';
import { Subscription } from 'rxjs';

import { FsuipcApi } from '../src/api';
import * as OFFSETS from '../src/lib/offsets/index';
import { applyConversion } from '../src/lib/convert/apply-conversion';
import { Offset } from '@shared/offset';

jest.useFakeTimers();

const enum SimulatorMock {
  ANY,
  FS98,
  FS2K,
  CFS2,
  CFS1,
  FLY,
  FS2K2,
  FS2K4,
  FSX,
  ESP,
  P3D,
  FSX64,
  P3D64
}

const FSUIPCErrorMock = jest.fn().mockImplementation(() => ({
  message: 'some message',
  code: 1234,
}));

const processMock = jest.fn();
const addMock = jest.fn();
const closeMock = jest.fn();

jest.mock('fsuipc', () => {
  return {
    FSUIPC: jest.fn().mockImplementation(() => {
      return {
        open: jest.fn().mockImplementation((simulator?) => {
          if (simulator !== SimulatorMock.P3D64) {
            return Promise.resolve({
              process: processMock,
              add: addMock,
              close: closeMock,
            });
          } else {
            throw new FSUIPCErrorMock();
          }
        })
      };
    }),
    FSUIPCError: jest.fn().mockImplementation(() => ({
      message: 'some message',
      code: 1234,
    })),
    Simulator: {
      FSX: 8,
      P3D64: 12,
    },
    Type: {
      Byte: 0,
      SByte: 1,
      Int16: 2,
      Int32: 3,
      Int64: 4,
      UInt16: 5,
      UInt32: 6,
      UInt64: 7,
      Double: 8,
      Single: 9,
      ByteArray: 10,
      String: 11,
      BitArray: 12,
    }
  };
});

const OFFSET_WITH_BYTE_ARRAY_TYPE = new Offset({
  name: 'someOffsetWithByteArrayType',
  convert: '!!{VAL}',
  value: 0x001,
  type: 10,
  length: 4,
});

const OFFSET_WITH_BIT_ARRAY_TYPE = new Offset({
  name: 'someOffsetWithBitArrayType',
  convert: '!!{VAL}',
  value: 0x002,
  type: 12,
  length: 5,
});

const OFFSET_WITH_STRING_TYPE = new Offset({
  name: 'someOffsetWithStringType',
  convert: '!!{VAL}',
  value: 0x003,
  type: 11,
  length: 6,
});

const OFFSET_WITH_OTHER_TYPE = new Offset({
  name: 'someOffsetWithOtherType',
  convert: '!!{VAL}',
  value: 0x004,
  type: 0,
});

const RAW_OFFSETS_VALUES = {
  someOffsetWithByteArrayType: [123, 456],
  someOffsetWithBitArrayType: [789, 101],
  someOffsetWithStringType: 'SomeString',
  someOffsetWithOtherType: 123,
};

jest.mock('../src/lib/offsets/index', () => ({
  OFFSETS: {
    someOffsetWithOtherType: {
      name: 'someOffsetWithOtherType',
      convert: '!!{VAL}',
      type: 0,
      value: 0x004,
    } as any,
    someOffsetWithByteArrayType: {
      name: 'someOffsetWithByteArrayType',
      convert: '!!{VAL}',
      type: 10,
      value: 0x001,
      length: 4,
    } as any,
    someOffsetWithBitArrayType: {
      name: 'someOffsetWithBitArrayType',
      convert: '!!{VAL}',
      type: 12,
      value: 0x002,
      length: 5,
    } as any,
    someOffsetWithStringType: {
      name: 'someOffsetWithStringType',
      convert: '!!{VAL}',
      type: 11,
      value: 0x003,
      length: 6,
    } as any,
  }
}));

jest.mock('../src/lib/convert/apply-conversion', () => ({
  applyConversion: jest.fn().mockImplementation(val => `converted ${val.convert}`)
}));

describe('FSUIPC Api', () => {
  beforeEach(() => {
    closeMock.mockClear();
    processMock.mockClear();
    addMock.mockClear();
  });

  describe('instance', () => {
    it('should create instance with specified simulator', () => {
      const instance = new FsuipcApi(SimulatorMock.P3D64 as any);
      expect(instance['simulator']).toEqual(SimulatorMock.P3D64);
    });

    it('should create instance with any Simulator by default when no simulator provided', () => {
      const instance = new FsuipcApi();
      expect(instance['simulator']).toEqual(undefined);
    });
  });

  describe('init', () => {
    describe('when connecting to fsuipc protocol succeeds', () => {
      it('should store fsuipc instance', async () => {
        expect.assertions(4);

        const instance = new FsuipcApi();
        const initResult = await instance.init();

        expect(initResult).toEqual(true);
        expect(instance['fsuipc'].add).toEqual(addMock);
        expect(instance['fsuipc'].close).toEqual(closeMock);
        expect(instance['fsuipc'].process).toEqual(processMock);
      });
    });

    describe('when an error occurs while connecting to fsuipc', () => {
      it('should throw the error', async () => {
        expect.assertions(1);

        const instance = new FsuipcApi(SimulatorMock.P3D64 as any);

        try {
          await instance.init();
        } catch (e) {
          expect(e).toEqual({
            message: 'some message',
            code: 1234,
          });
        }
      });
    });
  });

  describe('listen', () => {
    describe('when called before init', () => {
      it('should throw an error', () => {
        expect.assertions(1);

        const instance = new FsuipcApi();

        // tslint:disable-next-line
        instance.listen(1000, []).subscribe(() => {}, (err) => {
          expect(err).toEqual('NO_FSUIPC_INSTANCE');
        });
      });
    });

    describe('when called after init', () => {
      let sub: Subscription;

      beforeEach(() => {
        if (!!sub) {
          sub.unsubscribe();
        }
      });

      describe('process', () => {
        beforeEach(() => {
          processMock.mockResolvedValue({});
        });

        it('should call process after timer', async () => {
          expect.assertions(2);

          const instance = new FsuipcApi();
          await instance.init();
          sub = instance.listen(1000, []).subscribe();

          expect(processMock).not.toHaveBeenCalled();

          jest.advanceTimersByTime(1001);

          expect(processMock).toHaveBeenCalledTimes(1);
        });
      });

      describe('offsets watch cache', () => {
        describe('when there are no cached watched offsets', () => {
          beforeEach(() => {
            processMock.mockResolvedValue({});
          });

          it('should not add watched values', async () => {
            expect.assertions(2);

            const instance = new FsuipcApi();
            await instance.init();
            sub = instance.listen(1000, []).subscribe();
            jest.advanceTimersByTime(1001);

            expect(instance['watchedOffsetCache']).toEqual([]);
            expect(addMock).not.toHaveBeenCalled();
          });

          it('should call process after timer', async () => {
            expect.assertions(2);

            const instance = new FsuipcApi();
            await instance.init();
            sub = instance.listen(1000, []).subscribe();

            expect(processMock).not.toHaveBeenCalled();

            jest.advanceTimersByTime(1001);

            expect(processMock).toHaveBeenCalledTimes(1);
          });
        });

        describe('when there are cached watched offsets', () => {
          describe('when offsets list is empty', () => {
            beforeEach(() => {
              processMock.mockResolvedValue({});
            });

            it('should add all offsets to watch list', async () => {
              expect.assertions(1);

              const instance = new FsuipcApi();
              await instance.init();

              sub = instance.listen(1000, [OFFSET_WITH_OTHER_TYPE.name]).subscribe();
              jest.advanceTimersByTime(1001);

              expect(instance['watchedOffsetCache']).toEqual([OFFSET_WITH_OTHER_TYPE.name]);
            });
          });

          describe('when cached offsets does not match requested ones', () => {
            it('should update offsets watch list', async () => {
              expect.assertions(1);

              const instance = new FsuipcApi();
              await instance.init();

              instance['watchedOffsetCache'] = ['some1', OFFSET_WITH_OTHER_TYPE.name];

              sub = instance.listen(1000, [OFFSET_WITH_OTHER_TYPE.name]).subscribe();
              jest.advanceTimersByTime(1001);

              expect(instance['watchedOffsetCache']).toEqual([OFFSET_WITH_OTHER_TYPE.name]);
            });
          });

          describe('when cached offsets match requested ones', () => {
            it('should use cached offsets', async () => {
              expect.assertions(1);

              const instance = new FsuipcApi();
              await instance.init();

              instance['watchedOffsetCache'] = [ OFFSET_WITH_OTHER_TYPE.name];

              sub = instance.listen(1000, [OFFSET_WITH_OTHER_TYPE.name]).subscribe();
              jest.advanceTimersByTime(1001);

              expect(instance['watchedOffsetCache']).toEqual([OFFSET_WITH_OTHER_TYPE.name]);
            });
          });
        });
      });

      describe('add', () => {
        beforeEach(() => {
          processMock.mockResolvedValue({});
        });

        it('should add offsets on fsuipc watch list with options depending on offset type', async () => {
          expect.assertions(1);

          const instance = new FsuipcApi();
          await instance.init();

          sub = instance.listen(1000, [
            OFFSET_WITH_OTHER_TYPE.name,
            OFFSET_WITH_BYTE_ARRAY_TYPE.name,
            OFFSET_WITH_BIT_ARRAY_TYPE.name,
            OFFSET_WITH_STRING_TYPE.name,
          ]).subscribe();
          jest.advanceTimersByTime(1001);

          expect(addMock.mock.calls).toEqual([
            [
              OFFSET_WITH_OTHER_TYPE.name, OFFSET_WITH_OTHER_TYPE.value, OFFSET_WITH_OTHER_TYPE.type,
            ],
            [
              OFFSET_WITH_BYTE_ARRAY_TYPE.name, OFFSET_WITH_BYTE_ARRAY_TYPE.value, OFFSET_WITH_BYTE_ARRAY_TYPE.type,
              OFFSET_WITH_BYTE_ARRAY_TYPE.length,
            ],
            [
              OFFSET_WITH_BIT_ARRAY_TYPE.name, OFFSET_WITH_BIT_ARRAY_TYPE.value, OFFSET_WITH_BIT_ARRAY_TYPE.type,
              OFFSET_WITH_BIT_ARRAY_TYPE.length,
            ],
            [
              OFFSET_WITH_STRING_TYPE.name, OFFSET_WITH_STRING_TYPE.value, OFFSET_WITH_STRING_TYPE.type,
              OFFSET_WITH_STRING_TYPE.length,
            ],
          ]);
        });
      });

      describe('processing values', () => {
        describe('when fsuipc returns valid data', () => {
          let instance;

          beforeEach(async () => {
            processMock.mockResolvedValue(RAW_OFFSETS_VALUES);

            instance = new FsuipcApi();
            await instance.init();
          });

          it('should return a converted list', (done) => {
            instance.listen(1000, [
              OFFSET_WITH_OTHER_TYPE.name,
              OFFSET_WITH_BYTE_ARRAY_TYPE.name,
              OFFSET_WITH_BIT_ARRAY_TYPE.name,
              OFFSET_WITH_STRING_TYPE.name,
            ]).subscribe((res) => {
              expect(Object.keys(res).length).toEqual(4);
              expect({
                ...res
              }).toEqual({
                someOffsetWithByteArrayType: 'converted !!{VAL}',
                someOffsetWithBitArrayType: 'converted !!{VAL}',
                someOffsetWithStringType: 'converted !!{VAL}',
                someOffsetWithOtherType: 'converted !!{VAL}'
              });
              done();
            });

            jest.runOnlyPendingTimers();
          });
        });

        describe('when fsuipc is errored', () => {
          let instance;

          beforeEach(async () => {
            processMock.mockRejectedValue(new FSUIPCErrorMock());

            instance = new FsuipcApi();
            await instance.init();
          });

          it('should close fsuipc and throw error', (done) => {
            sub = instance.listen(1000, [
              OFFSET_WITH_OTHER_TYPE.name,
              OFFSET_WITH_BYTE_ARRAY_TYPE.name,
              OFFSET_WITH_BIT_ARRAY_TYPE.name,
              OFFSET_WITH_STRING_TYPE.name,
              // tslint:disable-next-line
            ]).subscribe((res) => {}, (err) => {
              expect(err.message).toEqual('some message');
              expect(err.code).toEqual(1234);
              expect(closeMock).toHaveBeenCalled();

              done();
            });

            jest.advanceTimersByTime(1000);
          });
        });
      });
    });
  });
});
