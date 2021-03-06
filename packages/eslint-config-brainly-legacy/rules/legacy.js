module.exports = {
  'env': {
    'browser': true,
    'node': true
  },
  'parserOptions': {
    'sourceType': 'script',
    'ecmaVersion': 5
  },
  'rules': {
    // POSSIBLE ERRORS
    // enforce “for” loop update clause moving the counter in the right direction.
    'for-direction': 'error',
    // enforce return statements in getters
    'getter-return': 'off',
    // disallow using an async function as a Promise executor
    'no-async-promise-executor': 'off',
    // disallow await inside of loops
    'no-await-in-loop': 'off',
    // disallow comparing against -0
    'no-compare-neg-zero': 'error',
    // disallow assignment in conditional expressions
    'no-cond-assign': 'off',
    // disallow use of console
    'no-console': 'off',
    // disallow use of constant expressions in conditions
    'no-constant-condition': 'error',
    // disallow control characters in regular expressions
    'no-control-regex': 'error',
    // disallow use of debugger
    'no-debugger': 'error',
    // disallow duplicate arguments in functions
    'no-dupe-args': 'error',
    // disallow duplicate keys when creating object literals
    'no-dupe-keys': 'error',
    // disallow a duplicate case label.
    'no-duplicate-case': 'error',
    // disallow empty statements
    'no-empty': 'error',
    // disallow the use of empty character classes in regular expressions
    'no-empty-character-class': 'error',
    // disallow assigning to the exception in a catch block
    'no-ex-assign': 'error',
    // disallow double-negation boolean casts in a boolean context
    'no-extra-boolean-cast': 'off',
    // disallow unnecessary parentheses
    'no-extra-parens': 'off',
    // disallow unnecessary semicolons
    'no-extra-semi': 'off',
    // disallow overwriting functions written as function declarations
    'no-func-assign': 'error',
    // disallow function or variable declarations in nested blocks
    'no-inner-declarations': 'error',
    // disallow invalid regular expression strings in the RegExp constructor
    'no-invalid-regexp': 'error',
    // disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': 'error',
    // disallow characters which are made with multiple code points in character class syntax
    'no-misleading-character-class': 'error',
    // disallow the use of object properties of the global object (Math and JSON) as functions
    'no-obj-calls': 'error',
    // disallow use of Object.prototypes builtins directly
    'no-prototype-builtins': 'off',
    // disallow multiple spaces in a regular expression literal
    'no-regex-spaces': 'error',
    // disallow sparse arrays
    'no-sparse-arrays': 'error',
    // disallow template literal placeholder syntax in regular strings
    'no-template-curly-in-string': 'error',
    // Avoid code that looks like two expressions but is actually one
    'no-unexpected-multiline': 'error',
    // disallow unreachable statements after a return, throw, continue, or break statement
    'no-unreachable': 'error',
    // disallow control flow statements in finally blocks
    'no-unsafe-finally': 'error',
    // disallow negating the left operand of relational operators
    'no-unsafe-negation': 'error',
    // disallow assignments that can lead to race conditions due to usage of await or yield
    'require-atomic-updates': 'error' ,
    // disallow comparisons with the value NaN
    'use-isnan': 'error',
    // ensure that the results of typeof are compared against a valid string
    'valid-typeof': 'error',

    // BEST PRACTIES
    // Enforces getter/setter pairs in objects
    'accessor-pairs': 'off',
    // Enforces return statements in callbacks of array methods
    'array-callback-return': 'error',
    // treat var statements as if they were block scoped
    'block-scoped-var': 'off',
    // enforce that class methods utilize this
    'class-methods-use-this': 'off',
    // specify the maximum cyclomatic complexity allowed in a program
    'complexity': 'off',
    // require return statements to either always or never specify values
    'consistent-return': 'off',
    // specify curly brace conventions for all control statements
    'curly': ['error', 'all'],
    // require default case in switch statements
    'default-case': 'error',
    // enforces consistent newlines before or after dots
    'dot-location': 'off',
    // encourages use of dot notation whenever possible
    'dot-notation': 'off',
    // require the use of === and !==
    'eqeqeq': 'off',
    // make sure for-in loops have an if statement
    'guard-for-in': 'error',
    // enforce a maximum number of classes per file
    'max-classes-per-file': ["error", 5],
    // disallow the use of alert, confirm, and prompt
    'no-alert': 'off',
    // disallow use of arguments.caller or arguments.callee
    'no-caller': 'error',
    // disallow lexical declarations in case clauses
    'no-case-declarations': 'error',
    // disallow division operators explicitly at beginning of regular expression
    'no-div-regex': 'off',
    // disallow else after a return in an if
    'no-else-return': 'off',
    // disallow empty functions
    'no-empty-function': 'off',
    // disallow use of empty destructuring patterns
    'no-empty-pattern': 'error',
    // disallow comparisons to null without a type-checking operator
    'no-eq-null': 'off',
    // disallow use of eval()
    'no-eval': 'error',
    // disallow adding to native types
    'no-extend-native': 'error',
    // disallow unnecessary function binding
    'no-extra-bind': 'off',
    // disallow unnecessary labels
    'no-extra-label': 'error',
    // disallow fallthrough of case statements
    'no-fallthrough': 'error',
    // disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': 'off',
    // disallow assignments to native objects or read-only global variables
    'no-global-assign': 'error',
    // disallow the type conversions with shorter notations
    'no-implicit-coercion': 'off',
    // disallow var and named function declarations in the global scope
    'no-implicit-globals': 'off',
    // disallow use of eval()-like methods
    'no-implied-eval': 'off',
    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 'error',
    // the above rule is ignored here and there, let's not repeat ourselves
    'babel/no-invalid-this': 'off',
    // disallow usage of __iterator__ property
    'no-iterator': 'off',
    // disallow use of labeled statements
    'no-labels': 'error',
    // disallow unnecessary nested blocks
    'no-lone-blocks': 'off',
    // disallow creation of functions within loops
    'no-loop-func': 'error',
    // disallow the use of magic numbers
    'no-magic-numbers': 'off',
    // disallow use of multiple spaces
    'no-multi-spaces': 'off',
    // disallow use of multiline strings
    'no-multi-str': 'error',
    // disallow new operators outside of assignments or comparisons
    'no-new': 'off',
    // disallow use of new operator for Function object
    'no-new-func': 'off',
    // disallows creating new instances of String,Number, and Boolean
    'no-new-wrappers': 'off',
    // disallow use of (old style) octal literals
    'no-octal': 'error',
    // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
    'no-octal-escape': 'off',
    // disallow reassignment of function parameters
    'no-param-reassign': 'off',
    // disallow usage of __proto__ property
    'no-proto': 'off',
    // disallow declaring the same variable more then once
    'no-redeclare': 'off',
    // disallow certain properties on certain objects
    'no-restricted-properties': 'off',
    // disallow use of assignment in return statement
    'no-return-assign': 'off',
    // disallows unnecessary return await
    'no-return-await': 'off',
    // disallow use of `javascript:` urls.
    'no-script-url': 'off',
    // disallow assignments where both sides are exactly the same
    'no-self-assign': 'error',
    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 'off',
    // disallow use of comma operator
    'no-sequences': 'off',
    // restrict what can be thrown as an exception
    'no-throw-literal': 'off',
    // disallow unmodified loop conditions
    'no-unmodified-loop-condition': 'off',
    // disallow usage of expressions in statement position
    'no-unused-expressions': 'off',
    // disallow unused labels
    'no-unused-labels': 'error',
    // disallow unnecessary .call() and .apply()
    'no-useless-call': 'off',
    // disallow unnecessary catch clauses
    'no-useless-catch': 'error',
    // disallow unnecessary concatenation of literals or template literals
    'no-useless-concat': 'off',
    // disallow unnecessary escape characters
    'no-useless-escape': 'off',
    // disallow return; statement with nothing after it is redundant
    'no-useless-return': 'off',
    // disallow use of void operator
    'no-void': 'off',
    // disallow usage of configurable warning terms in comments: e.g. todo
    'no-warning-comments': 'off',
    // disallow use of the with statement
    'no-with': 'error',
    // require using Error objects as Promise rejection reasons
    'prefer-promise-reject-errors': 'off',
    // require use of the second argument for parseInt()
    'radix': 'off',
     // disallow async functions which have no await expression
     'require-await': 'off',
     // enforce the use of u flag on RegExp
     'require-unicode-regexp': 'off',
    // requires to declare all vars on top of their containing scope
    'vars-on-top': 'off',
    // require immediate function invocation to be wrapped in parentheses
    'wrap-iife': 'off',
    // require or disallow Yoda conditions
    'yoda': 'off',

    // STRICT MODE
    // require that all functions are run in strict mode
    'strict': 'off',

    // VARIABLES
    // enforce or disallow variable initializations at definition
    'init-declarations': 'off',
    // disallow deletion of variables
    'no-delete-var': 'error',
    // disallow labels that share a name with a variable
    'no-label-var': 'off',
    // disallow specified global variables
    'no-restricted-globals': 'off',
    // disallow declaration of variables already declared in the outer scope
    'no-shadow': 'off',
    // disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 'off',
    // disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef': 'off',
    // disallow use of undefined when initializing variables
    'no-undef-init': 'off',
    // disallow use of undefined variable
    'no-undefined': 'off',
    // disallow declaration of variables that are not used in the code
    'no-unused-vars': 'off',
    // disallow use of variables before they are defined
    'no-use-before-define': 'off',

    // NODE.JS AND COMMONJS
    // enforce return after a callback
    'callback-return': 'off',
    // disallow require() outside of the top-level module scope
    'global-require': 'off',
    // enforces error handling in callbacks (node environment)
    'handle-callback-err': 'off',
    // disallow use of the Buffer() constructor
    'no-buffer-constructor': 'off',
    // disallow mixing regular variable and require declarations
    'no-mixed-requires': 'off',
    // disallow use of new operator with the require function
    'no-new-require': 'off',
    // disallow string concatenation with __dirname and __filename
    'no-path-concat': 'off',
    // disallow the use of process.env
    'no-process-env': 'off',
    // disallow process.exit()
    'no-process-exit': 'off',
    // restrict usage of specified node modules
    'no-restricted-modules': 'off',
    // disallow use of synchronous methods (off by default)
    'no-sync': 'off',

    // STYLISTIC ISSUES
    // enforce linebreaks after opening and before closing array brackets
    'array-bracket-newline': 'off',
    // enforce spacing inside array brackets
    'array-bracket-spacing': 'off',
    // enforce line breaks between array elements
    'array-element-newline': 'off',
    // disallow or enforce spaces inside of single line blocks
    'block-spacing': ['error', 'never'],
    // enforce one true brace style
    'brace-style': ['error', '1tbs', {'allowSingleLine': true}],
    // require camel case names
    'camelcase': ['error', {'properties': 'never'}],
    // enforce or disallow capitalization of the first letter of a comment
    'capitalized-comments': 'off',
    // disallow trailing commas in object literals
    'comma-dangle': 'off',
    // enforce spacing before and after comma
    'comma-spacing': 'off',
    // enforce one true comma style
    'comma-style': 'off',
    // require or disallow padding inside computed properties
    'computed-property-spacing': 'off',
    // enforces consistent naming when capturing the current execution context
    'consistent-this': 'off',
    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': 'off',
    // allow or disallow spacing between function identifiers and their invocations
    'func-call-spacing': ['error', 'never'],
    // require function names to match the name of the variable or property to which they are assigned
    'func-name-matching': 'error',
    // require function expressions to have a name
    'func-names': 'off',
    // enforces use of function declarations or expressions
    'func-style': 'off',
    // enforce consistent line breaks inside function parentheses
    'function-paren-newline': 'off',
    // disallow specified identifiers
    'id-blacklist': 'off',
    // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
    'id-length': 'off',
    // require identifiers to match the provided regular expression
    'id-match': 'off',
    // enforce the location of arrow function bodies
    'implicit-arrow-linebreak': 'off',
    // this option sets a specific tab width for your code
    'indent': ['error', 2, {'SwitchCase': 1}],
    // specify whether double or single quotes should be used in JSX attributes
    'jsx-quotes': 'off',
    // enforces spacing between keys and values in object literal properties
    'key-spacing': ['error', {'beforeColon': false, 'afterColon': true}],
    // enforce spacing before and after keywords
    'keyword-spacing': ['error', {'before': true, 'after': true}],
    // enforce position of line comments
    'line-comment-position': 'off',
    // disallow mixed "LF" and "CRLF" as linebreaks
    'linebreak-style': 'off',
    // enforces empty lines around comments
    'lines-around-comment': 'off',
    // require or disallow newlines around directives
    'lines-around-directive': ['error', 'always'],
    // specify the maximum depth that blocks can be nested
    'max-depth': 'off',
    // specify the maximum length of a line in your program
    'max-len': ['error', 120],
    // enforce a maximum number of lines per file
    'max-lines': 'off',
    // enforce a maximum number of line of code in a function
    'max-lines-per-function': 'off',
    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': 'off',
    // limits the number of parameters that can be used in the function declaration.
    'max-params': 'off',
    // specify the maximum number of statement allowed in a function
    'max-statements': 'off',
    // enforce a maximum number of statements allowed per line
    'max-statements-per-line': 'off',
    // enforce a particular style for multiline comments
    'multiline-comment-style': 'off',
    // enforce newlines between operands of ternary expressions
    'multiline-ternary': 'off',
    // require a capital letter for constructors
    'new-cap': 'error',
    // the above rule is ignored here and there, let's not repeat ourselves
    'babel/new-cap': 'off',
    // disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': 'off',
    // require a newline after each call in a method chain
    'newline-per-chained-call': 'off',
    // disallow use of the Array constructor
    'no-array-constructor': 'error',
    // disallow use of bitwise operators
    'no-bitwise': 'off',
    // disallow use of the continue statement
    'no-continue': 'off',
    // disallow comments inline after code
    'no-inline-comments': 'off',
    // disallow if as the only statement in an else block
    'no-lonely-if': 'off',
    // disallow mixed binary operators
    'no-mixed-operators': 'off',
    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'error',
    // disallow use of chained assignment expressions
    'no-multi-assign': 'off',
    // disallow multiple empty lines
    'no-multiple-empty-lines': 'off',
    // disallow negated conditions
    'no-negated-condition': 'off',
    // disallow nested ternary expressions
    'no-nested-ternary': 'off',
    // disallow use of the Object constructor
    'no-new-object': 'error',
    // disallow use of unary operators, ++ and --
    'no-plusplus': 'off',
    // disallow use of certain syntax in code
    'no-restricted-syntax': 'off',
    // disallow tabs in file
    'no-tabs': 'off',
    // disallow the use of ternary operators
    'no-ternary': 'off',
    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 'error',
    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 'off',
    // disallow the use of Boolean literals in conditional expressions
    'no-unneeded-ternary': 'off',
    // disallow whitespace before properties
    'no-whitespace-before-property': 'error',
    // enforce the location of single-line statements
    'nonblock-statement-body-position': 'off',
    // enforce consistent line breaks inside braces
    'object-curly-newline': 'off',
    // require or disallow padding inside curly braces
    'object-curly-spacing': ['error', 'never'],
    // enforce placing object properties on separate lines
    'object-property-newline': 'off',
    // allow just one var statement per function
    'one-var': 'off',
    // require or disallow newlines around var declarations
    'one-var-declaration-per-line': 'off',
    // require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': 'off',
    // enforce operators to be placed before or after line breaks
    'operator-linebreak': ['error', 'after'],
    // enforce padding within blocks
    'padded-blocks': 'off',
    // require or disallow padding lines between statements
    'padding-line-between-statements': 'off',
    // disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
    'prefer-object-spread': 'off',
    // require quotes around object literal property names
    'quote-props': 'off',
    // specify whether double or single quotes should be used
    'quotes': ['error', 'single'],
    // require or disallow use of semicolons instead of ASI
    'semi': 'error',
    // enforce spacing before and after semicolons
    'semi-spacing': 'off',
    // enforce location of semicolons
    'semi-style': 'off',
    // require object keys to be sorted
    'sort-keys': 'off',
    // sort variables within the same declaration block
    'sort-vars': 'off',
    // require or disallow space before blocks
    'space-before-blocks': ['error', 'always'],
    // require or disallow space before function opening parenthesis
    'space-before-function-paren': ['error', 'never'],
    // require or disallow spaces inside parentheses
    'space-in-parens': ['error', 'never'],
    // require spaces around operators
    'space-infix-ops': 'error',
    // require or disallow spaces before/after unary operators
    'space-unary-ops': 'off',
    // require or disallow a space immediately following the // or /* in a comment
    'spaced-comment': 'off',
    // enforce spacing around colons of switch statements
    'switch-colon-spacing': 'off',
    // disallow spacing between template tags and their literals
    'template-tag-spacing': 'off',
    // require or disallow Unicode byte order mark (BOM)
    'unicode-bom': ['error', 'never'],
    // require regex literals to be wrapped in parentheses
    'wrap-regex': 'off',

    // ECMAScript 6
    // require braces in arrow function body
    'arrow-body-style': 'off',
    // require parens in arrow function arguments
    'arrow-parens': 'off',
    // require space before/after arrow function's arrow
    'arrow-spacing': 'off',
    // verify super() callings in constructors
    'constructor-super': 'off',
    // enforce the spacing around the * in generator functions
    'generator-star-spacing': 'off',
    // disallow modifying variables of class declarations
    'no-class-assign': 'off',
    // disallow arrow functions where they could be confused with comparisons
    'no-confusing-arrow': 'off',
    // disallow modifying variables that are declared using const
    'no-const-assign': 'off',
    // disallow duplicate name in class members
    'no-dupe-class-members': 'off',
    // disallow duplicate module imports
    // we're using the smarter `import/no-duplicates` rule, this one does not handle type imports
    'no-duplicate-imports': 'off',
    // disallow symbol constructor
    'no-new-symbol': 'off',
    // disallow specified modules when loaded by import
    'no-restricted-imports': 'off',
    // disallow to use this/super before super() calling in constructors.
    'no-this-before-super': 'off',
    // disallow unnecessary computed property keys in object literals
    'no-useless-computed-key': 'off',
    // disallow unnecessary constructors
    'no-useless-constructor': 'off',
    // disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': 'off',
    // require let or const instead of var
    'no-var': 'off',
    // require method and property shorthand syntax for object literals
    'object-shorthand': 'off',
    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': 'off',
    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': 'off',
    // require destructuring from arrays and/or objects
    'prefer-destructuring': 'off',
    // disallow parseInt() in favor of binary, octal, and hexadecimal literals
    'prefer-numeric-literals': 'off',
    // require rest parameters instead of arguments
    'prefer-rest-params': 'off',
    // suggest using the spread operator instead of .apply()
    'prefer-spread': 'off',
    // suggest using template literals instead of strings concatenation
    'prefer-template': 'off',
    // disallow generator functions that do not have yield
    'require-yield': 'off',
    // enforce spacing between rest and spread operators and their expressions
    'rest-spread-spacing': 'off',
    // enforce sorted import declarations within modules
    'sort-imports': 'off',
    // require symbol descriptions
    'symbol-description': 'off',
    // require or disallow spacing around embedded expressions of template strings
    'template-curly-spacing': 'off',
    // require or disallow spacing around the * in yield* expressions
    'yield-star-spacing': 'off'
  }
};
