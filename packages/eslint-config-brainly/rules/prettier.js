var prettierConfig = require('../prettier.config.js');
module.exports = {
  extends: ['prettier', 'prettier/flowtype'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', prettierConfig]
  }
};
