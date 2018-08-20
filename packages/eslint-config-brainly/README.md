# eslint-config-brainly

[![npm](https://img.shields.io/npm/v/eslint-config-brainly.svg)](https://www.npmjs.com/package/eslint-config-brainly)

Brainly's base
[shareable](https://eslint.org/docs/developer-guide/shareable-configs) ESLint
config. It contains ESLint rules for ES6+ and [flow](https://flow.org/) - our
standard setup for most of our current projects, both back-end and front-end.

> If you're setting up a **React** project use
> [eslint-config-brainly-react](https://github.com/brainly/frontend-tools-configs/tree/master/packages/eslint-config-brainly-react)
> instead.

> For legacy **ES5** code use
> [eslint-config-brainly-legacy](https://github.com/brainly/frontend-tools-configs/tree/master/packages/eslint-config-brainly-legacy).

## Installation and usage

Install the `eslint-config-brainly` package with `yarn`/`npm` and make sure that
the **peer dependencies** are installed. In most cases (unless you need to have
full control over the eslint / eslit plugins versions) you can just rely on this
command:

```sh
npx install-peerdeps --dev eslint-config-brainly
```

and extend the `"brainly"` setup in your `.eslintrc`:

```json
{
  "extends": "brainly"
}
```

## Prettier
Since `v2.0.0` this config enforces your project to use [`prettier`](https://prettier.io/). It includes [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier/) and [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier/) so you can just run `eslint` as usual and `prettier` will be used to reformat the code. 

If you need to have actual `.prettierrc` file in your project you should extend the [`prettier.config.js`](./prettier.config.js) from this package:
```js
// .prettierrc.js or prettier.config.js in your project
module.exports = require('eslint-config-brainly/prettier.config');
```

## More tools config

Looking for more of our tools configs? Check out [this
readme](https://github.com/brainly/frontend-tools-configs).

## License

MIT
