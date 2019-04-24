## ESLint configuration

This is a personal eslint configuration for Vue.js projects.

## Install

```bash
npm i @aszydelko/eslint-config-vue --save-dev
```

## Usage

This config is designed to work with the `extends` feature of `.eslintrc` files.
[Learn more](http://eslint.org/docs/developer-guide/shareable-configs)

Then, add this to your `.eslintrc` or `package.json` file:

```
{
  "extends": "@aszydelko/eslint-config-vue"
}
```

You can override settings from this config by adding them directly into your
`.eslintrc` or `package.json` file.

#### Commands

Recommended set of commands to put in `package.json` scripts:

```
  "lint:js": "eslint --ext .js,.vue .",
  "lint-autofix:js": "eslint --ext .js,.vue . --fix",
```

## License

MIT Copyright (c) Arkadiusz Szydełko
