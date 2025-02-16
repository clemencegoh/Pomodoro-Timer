module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/src/__mocks__/styleMock.ts',
    '\\.svg$': '<rootDir>/src/__mocks__/svg.ts',
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['./src/test/setupTests.ts'],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
      'src/**/*.{ts,tsx}',
      '!src/storybook/stories/**/*.{ts, js,tsx}',
      '!**/node_modules/**',
      '!**/vendor/**',
      '!**/cypress/**',
  ],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  verbose: true,
  testTimeout: 10000,

  // fail fast - running the rest after 1 failed unit test is a waste of resources
  bail: true,
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  }
};