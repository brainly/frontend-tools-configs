# eslint-config-brainly-react

[![npm](https://img.shields.io/npm/v/eslint-config-brainly-react.svg)](https://www.npmjs.com/package/eslint-config-brainly-react)

Brainly's [shareable](https://eslint.org/docs/developer-guide/shareable-configs)
ESLint config for front-end projects using React. It extends our [base
config](https://github.com/brainly/frontend-tools-configs/tree/master/packages/eslint-config-brainly).

> If you're setting up a non-react **ES6** project use
> [eslint-config-brainly](https://github.com/brainly/frontend-tools-configs/tree/master/packages/eslint-config-brainly).

> For legacy **ES5** code use
> [eslint-config-brainly-legacy](https://github.com/brainly/frontend-tools-configs/tree/master/packages/eslint-config-brainly-legacy).

## Installation and usage

Install the `eslint-config-brainly-react` package with `yarn`/`npm` and make
sure that the **peer dependencies** are installed. In most cases (unless you
need to have full control over the eslint / eslit plugins versions) you can just
rely on this command:

```sh
npx install-peerdeps --dev eslint-config-brainly-legacy
```

and extend the `"brainly-react"` setup in your `.eslintrc`:

```json
{
  "extends": "brainly-react"
}
```

## More tools config

Looking for more of our tools configs? Check out [this
readme](https://github.com/brainly/frontend-tools-configs).

## License

MIT
