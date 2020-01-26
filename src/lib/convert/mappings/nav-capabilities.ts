const Capabilities = ['dme', 'tacan', 'voice', 'noSignal', 'dmeGlideslope', 'noBackCourse', 'glideslope', 'isLocaliser'];

export const navCapabilities = (values: number[]): { [key: string]: boolean } => {
  const capabilities: { [key: string]: boolean } = {};

  values.forEach((value, index) => {
    const capability: string = Capabilities[index];

    if (!capability) {
      return;
    }

    capabilities[capability] = !!value;
  });

  return capabilities;
};
