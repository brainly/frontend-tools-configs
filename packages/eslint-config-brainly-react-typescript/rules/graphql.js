module.exports = {
  plugins: ['graphql'],
  rules: {
    'graphql/template-strings': [
      'error',
      {
        env: 'literal',
        // literal .graphql files
      },
      {
        env: 'apollo',
        // inside tag  gql``
      },
    ],
    'graphql/named-operations': [
      'error',
      {
        env: 'literal',
        // literal .graphql files
      },
      {
        env: 'apollo',
        // inside tag  gql``
      },
    ],
  },
};
