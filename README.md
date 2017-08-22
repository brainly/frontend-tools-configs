# Brainly frontend tools configs

This project is a collection of settings for frontend tools used in Brainly

- .editorconfig - settings for editors [editorconfig.org](http://editorconfig.org/)
- .sass-lint.yml - config for [scss linter](https://github.com/sasstools/sass-lint)
- .scss-lint.yml - config for [scss linter](https://github.com/brigade/scss-lint)

[Eslint sharable configs](http://eslint.org/docs/developer-guide/shareable-configs)
- eslint/main.js - config for [eslint.org](http://eslint.org/) with ES2017 enabled
- eslint/react.js - config for [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
- eslint/redux.js - config for [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) adjusted for [redux](https://github.com/reactjs/react-redux)
- eslint/legacy.js - config for [eslint.org](http://eslint.org/) with only ES5 and some legacy settings

Currently supported version: ESLint v4.5.0 

## Sample usage of eslint configs

Create `.eslintrc` in your project main directory.
Use extend option to include config files like:
```
{
  "extends": [
    "./node_modules/frontend-tools-configs/eslint/main.js",
    "./node_modules/frontend-tools-configs/eslint/react.js",
    "./node_modules/frontend-tools-configs/eslint/redux.js"]
}
```
