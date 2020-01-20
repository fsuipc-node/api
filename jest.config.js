module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsConfig: 'tests/tsconfig.spec.json',
    }
  },
  cacheDirectory: '.jest-cache',
  moduleNameMapper: {
    '@shared/(.*)': '<rootDir>/src/shared/$1',
    '@offsets/(.*)': '<rootDir>/src/lib/offsets/$1',
    '@offsets': '<rootDir>/src/lib/offsets/index.ts',
    '@mappings/(.*)': '<rootDir>/src/lib/convert/mappings/$1',
    '@convert/(.*)': '<rootDir>/src/lib/convert/$1',
  },
  collectCoverageFrom: [
    '**/*.ts',
    '!**/node_modules/**',
    '!**/*.d.ts',
    '!**/index.ts',
    '!**/types/**/*.ts',
  ],
};
