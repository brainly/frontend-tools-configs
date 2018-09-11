module.exports = {
  parser: 'flow',
  singleQuote: true,
  bracketSpacing: false,
  overrides: [
    {
      files: '*.graphql',
      options: {
        parser: 'graphql'
      }
    }
  ]
};
