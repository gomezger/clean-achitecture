module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./src/test/config/test.setup.env.tsx'],
  setupFiles: ['./src/test/config/test.setup.tsx'],
  transformIgnorePatterns: ['node_modules/@react-navigation/native'],
};
