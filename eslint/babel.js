module.exports = {
  'rules': {
    // require a capital letter for constructors
    'new-cap': 'off',
    'babel/new-cap': 'error',

    // require or disallow padding inside curly braces
    'object-curly-spacing': 'off',
    'babel/object-curly-spacing': ['error', 'never'],

    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 'off',
    'babel/no-invalid-this': 'error',

    // require or disallow use of semicolons instead of ASI
    'semi': 'off',
    'babel/semi': 'error'
  }
};
