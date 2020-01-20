const FEET_BY_SEC_TO_KT: number = 0.592484;

export const ftsecToKt = (value: number): number => {
  return +(value * FEET_BY_SEC_TO_KT).toFixed(2);
};

export const ktToFtsec = (value: number): number => {
  return +(value / FEET_BY_SEC_TO_KT).toFixed(2);
};
