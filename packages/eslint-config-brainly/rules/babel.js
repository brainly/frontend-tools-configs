module.exports = {
  'plugins': ['babel'],
  'rules': {
    // require a capital letter for constructors
    'new-cap': 'off',
    'babel/new-cap': 'error',

    // doesn't complain about optional chaining (var foo = bar?.a_b;`)
    'camelcase': 'off',
    'babel/camelcase': ['error', {'properties': 'never'}],

    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 'off',
    'babel/no-invalid-this': 'error',

    // require or disallow padding inside curly braces
    'object-curly-spacing': 'off',
    'babel/object-curly-spacing': ['error', 'never'],

    // doesn't complain about JSX fragment shorthand syntax (<>foo</>;)
    'quotes': 'off',
    'babel/quotes': ['error', 'single'],

    // require or disallow use of semicolons instead of ASI
    'semi': 'off',
    'babel/semi': 'error',

    // doesn't fail when using do expressions or optional chaining (a?.b()).
    'no-unused-expressions': 'off',
    'babel/no-unused-expressions': 'off',

    // doesn't complain when used with BigInt (typeof BigInt(9007199254740991) === 'bigint').
    'valid-typeof': 'off',
    'babel/valid-typeof': 'error'
  }
};
