const Lights = ['nav', 'beacon', 'land', 'taxi', 'strobe', 'panel', 'recognition', 'wing', 'logo', 'cabin'];

export const lightsMapping = (values: number[]): { [key: string]: boolean } => {
  const lights: { [key: string]: boolean } = {};

  values.forEach((value, index) => {
    const lightName: string = Lights[index];

    if (!lightName) {
      return;
    }

    lights[lightName] = !!value;
  });

  return lights;
};
