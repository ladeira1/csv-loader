export default {
  preset: 'ts-jest',
  moduleNameMapper: {
    "\\.(scss|css|sass)$": "identity-obj-proxy"
  },
  testEnvironment: 'jest-environment-jsdom',
}