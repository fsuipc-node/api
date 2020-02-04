import { EngineType } from '@shared/plane/engine-type';

export const engineType = (value: number): EngineType => {
  switch (value) {
    case 0:
      return EngineType.PISTON;
    case 1:
      return EngineType.JET;
    case 2:
      return EngineType.SAILPLANE;
    case 3:
      return EngineType.HELO;
    case 4:
      return EngineType.ROCKET;
    case 5:
      return EngineType.TURBOPROP;
    default:
      return null;
  }
};
