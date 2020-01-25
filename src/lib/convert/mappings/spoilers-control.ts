export const spoilersControl = (value: number): number => {
  if (value < 4800) {
    return 0;
  }

  return Math.round((value - 4800) / (16383 - 4800) * 100);
};
