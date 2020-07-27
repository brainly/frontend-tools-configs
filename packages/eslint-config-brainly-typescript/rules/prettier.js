var prettierConfig = require('../prettier.config.js');
module.exports = {
  extends: ['prettier', 'prettier/@typescript-eslint'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', prettierConfig],
  },
};
