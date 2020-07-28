module.exports = {
  env: {
    jest: true,
    browser: true,
  },
  parserOptions: {
    jsx: true,
    useJSXTextNode: true,
  },
  rules: {
    'import/extensions': 0,
    'class-methods-use-this': 0,
  },
  extends: ['airbnb-typescript', '../../eslint-config-brainly-typescript'],
  plugins: ['css-modules', 'react-hooks'],
};
