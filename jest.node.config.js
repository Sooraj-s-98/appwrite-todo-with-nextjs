const baseConfig = require('./jest.base.config');

module.exports = {
  ...baseConfig,
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
};
