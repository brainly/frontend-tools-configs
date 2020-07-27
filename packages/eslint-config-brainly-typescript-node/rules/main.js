module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2017, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  extends: ['../../eslint-config-brainly-typescript'],
};
