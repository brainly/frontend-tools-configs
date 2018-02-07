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
    'flowtype/boolean-style': [
      'error',
      'boolean'
    ],
    'flowtype/define-flow-type': 'warn',
    'flowtype/delimiter-dangle': [
      'error',
      'never'
    ],
    'flowtype/generic-spacing': [
      'error',
      'never'
    ],
    'flowtype/no-primitive-constructor-types': 'error',
    'flowtype/no-types-missing-file-annotation': 'error',
    // maybe enable in the future:
    'flowtype/no-weak-types': 'off',
    'flowtype/object-type-delimiter': [
      'error',
      'comma'
    ],
    'flowtype/require-parameter-type': 'off',
    'flowtype/require-return-type': [
      'off'
    ],
    'flowtype/require-valid-file-annotation': 'off',
    'flowtype/semi': [
      'error',
      'always'
    ],
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
      '^([A-Z][a-z0-9]+)+Type$'
    ],
    'flowtype/union-intersection-spacing': [
      'error',
      'always'
    ],
    'flowtype/use-flow-type': 'warn'
  }
};
