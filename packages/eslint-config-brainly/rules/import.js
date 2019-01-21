module.exports = {
  'plugins': ['import'],
  'rules': {
    // IMPORTS
    // If a default import is requested, this rule will report if there is no default export in the imported module
    'import/default': 'error',
    // Require a leading comment with a webpackChunkName
    'import/dynamic-import-chunkname': 'error',
    // Reports issues with exports, like repeated exports of names or defaults
    'import/export': 'error',
    // Enforces that all exports are declared at the bottom of the file
    'import/exports-last': 'off',
    // Ensure consistent use of file extension within the import path
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never'
    }],
    // This rule reports any imports that come after non-import statements
    'import/first': 'error',
    // Reports when named exports are not grouped together in a single export declaration
    'import/group-exports': 'off',
    // Forbid modules to have too many dependencies (import or require statements)
    'import/max-dependencies': "off",
    //Verifies that all named imports are part of the set of named exports in the referenced module
    'import/named': 'error',
    // Enforces names exist at the time they are dereferenced, when imported as a full namespace
    'import/namespace': 'error',
    // Enforces having one or more empty lines after the last top-level import statement or require call
    'import/newline-after-import': 'error',
    // Forbid import of modules using absolute paths
    'import/no-absolute-path': 'error',
    // Reports require([array], ...) and define([array], ...) function calls at the module scope
    'import/no-amd': 'error',
    // Reports if a module's default export is unnamed
    'import/no-anonymous-default-export': ['error', {
      'allowArray': false,
      'allowArrowFunction': false,
      'allowAnonymousClass': false,
      'allowAnonymousFunction': false,
      'allowLiteral': false,
      'allowObject': true
    }],
    // Reports require([string]) function calls
    'import/no-commonjs': 'off',
    // Ensures that there is no resolvable path back to this module via its dependencies
    'import/no-cycle': 'off',
    // Prohibit default exports
    'no-default-export': 'off',
    // Reports if a resolved path is imported more than once
    'import/no-duplicates': 'error',
    // Forbid require() calls with expressions
    'import/no-dynamic-require': 'off',
    // Forbid the import of external modules that are not declared in the package.json
    'import/no-extraneous-dependencies': 'off',
    // Use this rule to prevent importing the submodules of other modules
    'import/no-internal-modules': 'off',
    // Forbids the use of mutable exports with var or let
    'import/no-mutable-exports': 'error',
    // Reports use of an exported name as the locally imported name of a default export
    'import/no-named-as-default': 'error',
    // Reports use of an exported name as a property on the default export
    'import/no-named-as-default-member': 'error',
    // Reports use of a default export as a locally named import
    'import/no-named-default': 'error',
    // Prohibit named exports
    'import/no-named-export': 'off',
    // Reports if namespace import is used
    'import/no-namespace': 'off',
    // Forbid the use of Node.js builtin modules
    'import/no-nodejs-modules': 'off',
    // Use this rule to prevent imports to folders in relative parent paths
    'import/no-relative-parent-imports': 'off',
    // Restrict which files can be imported in a given folder
    'import/no-restricted-paths': 'off',
    // Forbid a module from importing itself
    'import/no-self-import': 'error',
    // Forbid unassigned imports
    'import/no-unassigned-import': 'off',
    // Ensures an imported module can be resolved to a module on the local filesystem
    'import/no-unresolved': 'off',
    // Use this rule to prevent unnecessary path segments in import and require statements
    'import/no-useless-path-segments': 'error',
    // Forbid Webpack loader syntax in imports
    'import/no-webpack-loader-syntax': 'off',
    // Enforce a convention in module import order
    'import/order': 'off', //turned off coz to much effort to change files, no autofix option
    // When there is only a single export from a module, prefer using default export over named export
    'import/prefer-default-export': 'off',
    // Warn if a module could be mistakenly parsed as a script by a consumer
    'import/unambiguous': 'off'
  }
};
