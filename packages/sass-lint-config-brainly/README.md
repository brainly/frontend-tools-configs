# sass-lint-config-brainly

[![npm](https://img.shields.io/npm/v/sass-lint-config-brainly.svg)](https://www.npmjs.com/package/sass-lint-config-brainly)

Brainly's config for [sass-lint](https://github.com/sasstools/sass-lint).

## Installation and usage

Install the `sass-lint-config-brainly` package with `yarn`/`npm`:

```sh
yarn add --dev sass-lint-config-brainly
```

and use the config when running `sass-lint`:

```sh
sass-lint --config `node -p 'require.resolve("sass-lint-config-brainly")'`
```

#### Accessing the file directly

Instead of using `require.resolve` you can also try and access the file directly
inside the `node_modules` directory (beware - this might not work depending on
directory structure, e.g. when using [yarn
workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)).

```sh
sass-lint --config node_modules/sass-lint-config-brainly/.sass-lint.yml
```

## More tools config

Looking for more of our tools configs? Check out [this
readme](https://github.com/brainly/frontend-tools-configs).

## License

MIT
