module.exports = {
  extends: [
    require.resolve('./rules/main.js'),
    require.resolve('./rules/prettier.js'),
    require.resolve('./rules/jest.js'),
    require.resolve('./rules/import.js'),
  ],
  rules: {},
};
