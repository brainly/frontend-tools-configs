module.exports = {
  'plugins': [
    'flowtype'
  ],
  'settings': {
    'flowtype': {
      'onlyFilesWithFlowAnnotation': false
    }
  },
  'rules': {
    'flowtype/array-style-complex-type': [
      'error',
      'verbose'
    ],
    'flowtype/array-style-simple-type': [
      'error',
      'verbose'
    ],
    'flowtype/boolean-style': [
      'error',
      'boolean'
    ],
    'flowtype/define-flow-type': 'error',
    'flowtype/delimiter-dangle': [
      'error',
      'never'
    ],
    'flowtype/generic-spacing': [
      'error',
      'never'
    ],
    'flowtype/newline-after-flow-annotation': [
      'error',
      'always'
    ],
    'flowtype/no-dupe-keys': 'error',
    'flowtype/no-existential-type': 'off',
    'flowtype/no-flow-fix-me-comments': 'off',
    'flowtype/no-mutable-array': 'off',
    'flowtype/no-primitive-constructor-types': 'error',
    'flowtype/no-types-missing-file-annotation': 'error',
    'flowtype/no-unused-expressions': 'off',
    // maybe enable in the future:
    'flowtype/no-weak-types': 'off',
    'flowtype/object-type-delimiter': [
      'error',
      'comma'
    ],
    'flowtype/require-compound-type-alias': 'off',
    'flowtype/require-exact-type': 'off',
    'flowtype/require-parameter-type': 'off',
    'flowtype/require-return-type': 'off',
    'flowtype/require-types-at-top': 'off',
    'flowtype/require-valid-file-annotation': 'off',
    'flowtype/require-variable-type': 'off',
    'flowtype/semi': [
      'error',
      'always'
    ],
    'flowtype/sort-keys': 'off',
    'flowtype/space-after-type-colon': [
      'error',
      'always'
    ],
    'flowtype/space-before-generic-bracket': [
      'error',
      'never'
    ],
    'flowtype/space-before-type-colon': [
      'error',
      'never'
    ],
    'flowtype/type-id-match': [
      'error',
      '^([A-Z][a-z0-9]*)+Type$'
    ],
    'flowtype/type-import-style': [
      'error',
      'declaration'
    ],
    'flowtype/union-intersection-spacing': [
      'error',
      'always'
    ],
    'flowtype/use-flow-type': 'warn'
  }
};
