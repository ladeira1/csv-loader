export default {
  preset: 'ts-jest',
  moduleNameMapper: {
    "\\.(scss|css|sass)$": "identity-obj-proxy",
    "\\.(csv)$": "<rootDir>/src/__mocks__/peopleDataMock.json"
  },
  testEnvironment: 'jest-environment-jsdom',
}