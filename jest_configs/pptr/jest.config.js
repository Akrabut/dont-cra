module.exports = {
  rootDir: '../../.',
  globalSetup: '<rootDir>/jest_configs/pptr/setup.js',
  globalTeardown: '<rootDir>/jest_configs/pptr/teardown.js',
  testEnvironment: '<rootDir>/jest_configs/pptr/puppeteer_environment.js',
  name: 'puppeteer',
  displayName: 'puppeteer',
  testMatch: [
    '<rootDir>/src/__tests__/*.pptr.*'
  ]
}