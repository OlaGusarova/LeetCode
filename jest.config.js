module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
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
      tsconfig: 'tsconfig.json'
    }]
  }
};