# @fsuipc/api - FSUIPC Node API

Tooling to use FSUIPC external application interface, with nodeJS.

[![Coverage Status](https://coveralls.io/repos/github/fsuipc-node/api/badge.svg?branch=master)](https://coveralls.io/github/fsuipc-node/api?branch=master)
[![npm version](https://badge.fury.io/js/%40fsuipc%2Fapi.svg)](https://badge.fury.io/js/%40fsuipc%2Fapi)
![branch-master](https://github.com/fsuipc-node/api/workflows/branch-master/badge.svg?branch=master)

## Disclamer

This API is a wrapper around [fsuipc-node adapter by koesie10](https://github.com/koesie10/fsuipc-node) meant to create a simple API around all available fsuipc offsets. 

Please find any information about FSUIPC on [their website](http://www.fsuipc.com/).

## Requirements
In order for [`fsuipc`](https://github.com/koesie10/fsuipc-node) (fsuipc-node) and `@fsuipc/api` (this package) to work, and so this API, you must have on your machine:
 - Windows 10 64bits
 - node 12+
 - python 3.7 (don't forget to add it to your PATH)
 - visualstudio 2017+ with desktop C++ package
 - fsuipc installed as flight simulator plugin

Node API usage requirements:
 - `rxjs` >= 6.5.0

## Installation
```
npm i --save @fsuipc/api
or
yarn add @fsuipc/api
```

## API Usage

After import, you can use `FsuipcApi` to listen to provided values. 

### Import

```typescript
import { FsuipcApi } from '@fsuipc/api';
```

### Instantiate

```typescript
const fsuipcApi = new FsuipcApi(Simulator.FSX);
```
### Init

`FsuipcApi.init()` returns a promise when you are properly connected to FSUIPC stream. In case your flight simulator isn't running, this will throw an error.

### Listen to offsets values

`FsuipcApi.listen()` methods takes 2-3 arguments:
 - `interval` [*number*]: interval at which values will be polled from FSUIPC stream
 - `offsetsList` [*string[]*]: a list of string representing offsets you want to subscribe on
 - `terminateOnError` [*boolean* = *true*]: if set to true, if any value is errored, you will be disconnected from FSUIPC stream

This method returns a `ConvertedOffsetValues` observable. You can subscribe to this observable to handle values polled from stream.

### Complete example

```typescript
import { FsuipcApi } from '@fsuipc/api';

const fsuipcApi = new FsuipcApi(Simulator.FSX);

fsuipcApi.init().then(() => {
  fsuipcApi.listen(1000, [
    'gs',
    'altitude',
    'comFreq',
    'lights',
  ]).subscribe((result) => {
    // Use the result here
    console.log(JSON.stringify(result));
  });
}).catch((e) =>
  console.error(e)
);
```
