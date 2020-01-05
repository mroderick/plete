# plete

[![CircleCI](https://circleci.com/gh/mroderick/plete.svg?style=svg)](https://circleci.com/gh/mroderick/plete) [![codecov](https://codecov.io/gh/mroderick/plete/branch/master/graph/badge.svg?token=NrW3z56wP9)](https://codecov.io/gh/mroderick/plete) ![npm](https://img.shields.io/npm/v/plete)

A vanilla js autocomplete component that supports remote filtering.

```sh
npm install plete --save
```

## Objectives

- [x] Good WAI-ARIA support
- [x] Support multiple input types: keyboard, mouse, touch
- [x] Support local and remote filtering (async function as datasource)
- [x] Custom rendering of elements
- [x] Excellent test coverage
- [x] zero dependencies

## Compatibility

This project is aiming for wide compatibility in **modern** and **supported** browsers.

This means that **no versions of IE**, or legacy versions of Safari (before 10) are supported.

If you have to support legacy browsers in your project, you likely already have a transpiling setup and know how to use polyfills.

[`eslint-plugin-compat`][compat] is used to ensure contributors are aware when they introduce compatibility issues.

[compat]: https://github.com/amilajack/eslint-plugin-compat

## Documentation

Please see [plete.dev](https://plete.dev) for documentation.

If you'd like to contribute to the documentation, see [plete-docs](https://github.com/mroderick/plete-docs).
