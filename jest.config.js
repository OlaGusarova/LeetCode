module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/solutions'],
  testMatch: ['**/solutions/**/*.test.ts'],
  collectCoverageFrom: [
    'solutions/**/*.ts',
    '!**/*.test.ts',
    '!**/node_modules/**'
  ],
  coverageDirectory: 'coverage',
  verbose: true,
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    '^.+\\.ts$': ['ts-jest', {
      tsconfig: {
        allowJs: true,
        esModuleInterop: true,
        types: ['jest', 'node']
      }
    }]
  },
  moduleDirectories: ['node_modules', '<rootDir>']
};