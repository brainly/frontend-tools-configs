module.exports = {
  extends: [
    require.resolve('eslint-config-brainly'),
    require.resolve('./rules/react.js'),
    require.resolve('./rules/redux.js'),
    'prettier/react'
  ],
  rules: {}
};
