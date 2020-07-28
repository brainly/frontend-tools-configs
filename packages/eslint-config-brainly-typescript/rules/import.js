module.exports = {
  rules: {
    'import/prefer-default-export': 0,
    'import/no-anonymous-default-export': 'error',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },
};
