module.exports = {
  roots: ['<rootDir>'],
  testPathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/lib/templates/',
  ],
  testMatch: ['**/__tests__/**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
