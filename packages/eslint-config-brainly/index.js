module.exports = {
  extends: [
    require.resolve('./rules/main.js'),
    require.resolve('./rules/babel.js'),
    require.resolve('./rules/flow.js'),
  ],
  rules: {}
};