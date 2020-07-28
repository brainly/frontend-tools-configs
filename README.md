# Brainly frontend tools configs and docs

This project contains Brainly's coding style guide and a collection of settings
for ECMAScript / front-end related tools.

> ️⚠️ Since v17.0.0 this package should not be used (installed) directly. To
> upgrade - remove the dependency from your project and use the setup
> instructions below.

## Tools configs

See the package readmes for installation and usage instructions.

- [eslint-config-brainly](https://github.com/brainly/frontend-tools-configs/tree/master/packages/eslint-config-brainly) - base [ESLint](https://eslint.org/) config for all ES6+ code (with flow)
- [eslint-config-brainly-react](https://github.com/brainly/frontend-tools-configs/tree/master/packages/eslint-config-brainly-react) - ESLint config for our front-end projects using React
- [eslint-config-brainly-legacy](https://github.com/brainly/frontend-tools-configs/tree/master/packages/eslint-config-brainly-legacy) - ESLint config for legacy ES5 code
- [sass-lint-config-brainly](https://github.com/brainly/frontend-tools-configs/tree/master/packages/sass-lint-config-brainly) - config for [sass-lint](https://github.com/sasstools/sass-lint)
- [EditorConfig](./EditorConfig.md) - editor settings
- [eslint-config-brainly-typescript-react](https://github.com/brainly/frontend-tools-configs/tree/master/packages/eslint-config-brainly-typescript-react) - ESLint config for our front-end projects using React and TypeScript
- [eslint-config-brainly-typescript-node](https://github.com/brainly/frontend-tools-configs/tree/master/packages/eslint-config-brainly-typescript-node) - ESLint config for our front-end projects using Node and TypeScript
- [base-tsconfig-brainly-react](https://github.com/brainly/frontend-tools-configs/tree/master/packages/base-tsconfig-brainly-react) - tsconfig config for our front-end projects using React and TypeScript
- [base-tsconfig-brainly-node](https://github.com/brainly/frontend-tools-configs/tree/master/packages/base-tsconfig-brainly-node) - tsconfig config for our front-end projects using Node and TypeScript

### I'm setting up a project, what should I use?

- **Node.js** projects:
  [eslintrc](https://github.com/brainly/frontend-tools-configs/tree/master/packages/eslint-config-brainly),
  [editorconfig](./EditorConfig.md)
- **Front-end** projects:
  - with **React**:
    [eslintrc](https://github.com/brainly/frontend-tools-configs/tree/master/packages/eslint-config-brainly-react),
    [sasslintrc](https://github.com/brainly/frontend-tools-configs/tree/master/packages/sass-lint-config-brainly),
    [editorconfig](./EditorConfig.md)
  - with **React** and **Typescript**
    [eslintrc](https://github.com/brainly/frontend-tools-configs/tree/master/packages/eslint-config-brainly-typescript-react),
    [sasslintrc](https://github.com/brainly/frontend-tools-configs/tree/master/packages/sass-lint-config-brainly),
    [editorconfig](./EditorConfig.md)
  - without **React**:
    [eslintrc](https://github.com/brainly/frontend-tools-configs/tree/master/packages/eslint-config-brainly),
    [sasslintrc](https://github.com/brainly/frontend-tools-configs/tree/master/packages/sass-lint-config-brainly),
    [editorconfig](./EditorConfig.md)
- **legacy ES5 ☠️** :
  [eslintrc](https://github.com/brainly/frontend-tools-configs/tree/master/packages/eslint-config-brainly-legacy),
  [editorconfig](./EditorConfig.md),
  [psychiatrist](https://www.google.com/maps/search/psychiatrist+nearby)

# Docs

See the [docs/](docs/) for coding standard decisions we made over time.
