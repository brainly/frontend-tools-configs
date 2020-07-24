module.exports = {
  env: {
    jest: true,
    browser: true,
  },
  parserOptions: {
    jsx: true,
    useJSXTextNode: true,
  },
  extends: ['airbnb-typescript', 'plugin:@typescript-eslint/recommended'],
  plugins: ['css-modules', '@typescript-eslint', 'react-hooks'],
  rules: {
    'no-confusing-arrow': 0,
    'no-shadow': 0,
    'import/prefer-default-export': 0,
    'consistent-return': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'no-console': [
      'error',
      {
        allow: ['error'],
      },
    ],
  },
};
