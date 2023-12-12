module.exports = {
  bail: true,
  clearMocks: true,
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.spec.[jt]s?(x)'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
};