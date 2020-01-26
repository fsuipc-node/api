const BackCourseFlags = [
  { name: 'backCourseAvailable', index: 0 },
  { name: 'localiserTunedIn', index: 1 },
  { name: 'onBackCourse', index: 2 },
  { name: 'stationActive', index: 7 },
];

export const navBackCourseFlags = (values: number[]): { [key: string]: boolean } => {
  const flags: { [key: string]: boolean } = {};

  values.forEach((value, index) => {
    const flagName = BackCourseFlags.find(flag => flag.index === index);

    if (!flagName) {
      return;
    }

    flags[flagName.name] = !!value;
  });

  return flags;
};
