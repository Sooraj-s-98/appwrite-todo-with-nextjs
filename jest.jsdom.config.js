const baseConfig = require('./jest.base.config');

module.exports = {
  ...baseConfig,
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.tsx'],
  setupTestFrameworkScriptFile: './setupTests.ts',
};
