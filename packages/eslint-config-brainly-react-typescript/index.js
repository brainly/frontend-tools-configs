module.exports = {
  extends: [
    require.resolve('./rules/main.js'),
    require.resolve('./rules/prettier.js'),
    require.resolve('./rules/css-modules.js'),
    require.resolve('./rules/jest.js'),
    require.resolve('./rules/react.js'),
  ],
  rules: {},
};
