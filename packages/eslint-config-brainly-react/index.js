module.exports = {
  extends: [
    require.resolve('eslint-config-brainly'),
    require.resolve('./rules/react.js'),
    require.resolve('./rules/redux.js'),
    'prettier'
  ],
  plugins: [
    'react-hooks'
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error'
  }
};
