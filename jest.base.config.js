const path = require('path');

module.exports = {
  rootDir: path.join(__dirname, '..'),
  verbose: true,
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
