# plete

[![CircleCI](https://circleci.com/gh/mroderick/plete.svg?style=svg)](https://circleci.com/gh/mroderick/plete) [![codecov](https://codecov.io/gh/mroderick/plete/branch/master/graph/badge.svg?token=NrW3z56wP9)](https://codecov.io/gh/mroderick/plete)

A vanilla js autocomplete component that supports remote filtering.

```sh
npm install plete --save
```

## Objectives

- [ ] Good WAI-ARIA support
- [x] Support multiple input types: keyboard, mouse, touch
- [x] Support local and remove filtering (async function as datasource)
- [x] Custom rendering of elements
- [x] Excellent test coverage

## Compatibility

This project is aiming for wide compatibility in **modern** and **supported** browsers.

This means that **no versions of IE**, or legacy versions of Safari (before 10) are supported.

If you have to support legacy browsers in your project, you likely already have a transpiling setup and know how to use polyfills.

[`eslint-plugin-compat`][compat] is used to ensure contributors are aware when they introduce compatibility issues.

[compat]: https://github.com/amilajack/eslint-plugin-compat

## Examples

### Simple values

The very basic example allows the user to choose from simple string values.

```html
<!-- this is the input the user will type in -->
<input type="text" name="plete-country" />

<!-- this is where the user's choice will end up -->
<input type="hidden" name="country" />
```

```js
import Plete from "./dist/main-esm.js";

const input = document.querySelector("#input[name='plete-country'])";
const hidden = document.querySelector("#input[name='country'])";

const plete = new Plete({
  input: input,
  dataSrc: ["Denmark", "Germany", "Spain", "Sweden", "United Kingdom"],
  select: function(value) {
    hidden.textContent = value;
  }
});
```

### Complex values

The most likely use case, is that you will need to display more complex values as suggestions.

The schema for complex values is as follows: an `Object` with `id` and `label` properties (strings). Other properties are allowed but not used (unless you use them in a custom renderer).

```js
// example data item
const DNK = {
  // mandatory properties
  id: "DNK",
  label: "Denmark",

  // extra properties
  icon: "http://example.com/path/to/flag/icon"
};
```

```html
<!-- this is the input the user will type in -->
<input type="text" name="plete-country" />

<!-- this is where the user's choice will end up -->
<input type="hidden" name="country" />
```

```js
import Plete from "./dist/main-esm.js";

const input = document.querySelector("#input[name='plete-country'])";
const hidden = document.querySelector("#input[name='country'])";

const plete = new Plete({
  input: input,
  dataSrc: [
      { id: "BEL", label: "Belgium" },
      { id: "DNK", label: "Denmark" },
      { id: "GER", label: "Germany" },
      { id: "MCO", label: "Monaco" },
      { id: "SRB", label: "Serbia" },
      { id: "ESP", label: "Spain" },
      { id: "SWE", label: "Sweden" },
      { id: "GBR", label: "United Kingdom" },
      { id: "USA", label: "United States of America" }
  ],
  select: function(value) {
    hidden.textContent = value;
  }
});
```

### Remote data and filtering

You can use remote data and filtering by providing an [async function][asyncfn] as the `dataSrc` option.

```html
<!-- this is the input the user will type in -->
<input type="text" name="plete-country" />

<!-- this is where the user's choice will end up -->
<input type="hidden" name="country" />
```

```js
import Plete from "./dist/main-esm.js";

const input = document.querySelector("#input[name='plete-country'])";
const hidden = document.querySelector("#input[name='country'])";

const plete = new Plete({
  input: input,
  dataSrc: async function filterCountries(query) {
    const response = await fetch(`https://restcountries.eu/rest/v2/name/${query}`);
    const result = await response.json();

    // make sure we always return an Array
    if (!Array.isArray(result)) {
      return [];
    }

    // map the result into the supported format
    return result.map(function(v) {
      return {
        id: v.alpha3Code,
        label: v.name
      }
    });
  },
  select: function(value) {
    hidden.textContent = value;
  }
});
```

### Custom rendering of options

When you need custom rendering of options, you can supply a function as the `render` option.

`render` is expected to produce a string, which will be used inside the `plete-item` element (added using `.innerHTML`).

```html
<!-- this is the input the user will type in -->
<input type="text" name="plete-country" />

<!-- this is where the user's choice will end up -->
<input type="hidden" name="country" />
```

```js
import Plete from "./dist/main-esm.js";

const input = document.querySelector("#input[name='plete-country'])";
const hidden = document.querySelector("#input[name='country'])";

const plete = new Plete({
  input: input,
  dataSrc: [
      { id: "BEL", label: "Belgium" },
      { id: "DNK", label: "Denmark" },
      { id: "GER", label: "Germany" },
      { id: "MCO", label: "Monaco" },
      { id: "SRB", label: "Serbia" },
      { id: "ESP", label: "Spain" },
      { id: "SWE", label: "Sweden" },
      { id: "GBR", label: "United Kingdom" },
      { id: "USA", label: "United States of America" }
  ],
  // this function will be called for each value from `dataSrc` option
  render: function(item) {
    return `<b>${item.id}</b> ${item.label}`;
  },
  select: function(value) {
    hidden.textContent = value;
  }
});
```

## Options

| Option         | Default value   | Description                                                                       |
|----------------|-----------------|-----------------------------------------------------------------------------------|
| `dataSrc`      | `undefined`     | An array or async function with values                                            |
| `select`       | `undefined`     | A callback to call, when a value is selected                                      |
| `autoFirst`    | `true`          | (optional) When set, the first suggestion will be automatically highlighted       |
| `busy`         | `undefined`     | (optional) A callback to call before filtering                                    |
| `cssClass`     | `undefined`     | (optional) One or more CSS classes to add to the containing `plete-list` element  |
| `maxItems`     | `5`             | (optional) The number of suggestions to display                                   |
| `ready`        | `undefined`     | (optional) A callback to call after filtering                                     |
| `minChars`     | `3`             | (optional) The number of characters required before searching (when using remote) |
| `render`       | `undefined`     | (optional) A callback to render individual values                                 |

[asyncfn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
