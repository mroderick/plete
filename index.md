---
layout: page-layout.njk
title: plete
---

# `plete`

[![CircleCI](https://circleci.com/gh/mroderick/plete.svg?style=svg)](https://circleci.com/gh/mroderick/plete) [![codecov](https://codecov.io/gh/mroderick/plete/branch/master/graph/badge.svg?token=NrW3z56wP9)](https://codecov.io/gh/mroderick/plete) ![npm](https://img.shields.io/npm/v/plete) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/plete)

A vanilla js autocomplete component that supports remote filtering.

It enhances an existing `<input type="text"/>` element and provides callbacks when busy, ready and selections are made.

{% include examples/big-demo.html %}

There are [more demos below](#demos)

## Features

* Good WAI-ARIA support
* Supports multiple input types: keyboard, mouse, touch
* Supports local and remote filtering (async function as datasource)
* Custom rendering of elements
* 100% test coverage
* BSD-3 License
* Zero dependencies

## Compatibility

This project is aiming for wide compatibility in [modern, evergreen browsers](https://www.techopedia.com/definition/31094/evergreen-browser).

Specifically, [`defaults, not safari <= 10, not ie <= 11, not IE_Mob <= 11`](https://browserl.ist/?q=defaults%2C+not+safari+%3C%3D+10%2C+not+ie+%3C%3D+11%2C+not+IE_Mob+%3C%3D+11).

If you need to support legacy browsers in your project, you likely already have a transpiling setup and know how to use polyfills.

## Installation

You can load `plete` straight from jsDelivr or install it locally via `npm`

### jsDelivr

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/plete@0.3.x/dist/plete.css" />

<!-- this loads script with a global Plete constructor, CJS and ESM versions exist in dist/-->
<script src="https://cdn.jsdelivr.net/npm/plete@0.3.x/dist/plete.js"></script>
```

### npm

```bash
npm install plete --save
```

The `dist/` folder contains all stylesheet and scripts, which you can include in your project.

## Usage

```html
<label>
  Country
  <!-- the input element to listen to events on -->
  <input type="text" name="country" />
</label>
```

```js
const plete = new Plete({
  // the input element to listen to events on
  input: document.querySelector("input[name='country']"),
  // an array of strings/objects or an async function
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
  // a callback to receive the chosen value
  select: function countrySelected(value) {
    console.log(`The user selected: ${value}`);
  }
});
````

## Options

### `input`

The `<input>` element to listen for events on

### `dataSrc`

An array or async function with values to use as options.

#### Array of strings

Providing an array of string values as `dataSrc` is only included for demo/prototyping purposes.

If you only need string values, you should consider using the [`<datalist>`][datalist] element instead of `plete`.

[datalist]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist

```js
const dataSrc = ["Denmark", "Germany", "Spain", "Sweden", "United Kingdom"];
```

#### Array of objects

When providing an array of objects, they should have the following properties:

| property | description |
|----------|-------------|
| `id`     | A string that identifies the chosen value |
| `label`  | A string to render to represent the value when rendered as an option |

```js
const dataSrc = [
  { id: "BEL", label: "Belgium" },
  { id: "DNK", label: "Denmark" },
  { id: "GER", label: "Germany" },
  { id: "MCO", label: "Monaco" },
  { id: "SRB", label: "Serbia" },
  { id: "ESP", label: "Spain" },
  { id: "SWE", label: "Sweden" },
  { id: "GBR", label: "United Kingdom" },
  { id: "USA", label: "United States of America" }
];
```

Extra properties are allowed, and can be used for <a href="#custom">custom rendering of options</a>.

#### async function

Using an async function as `dataSrc` allows us to do remote filtering and mapping the returned data into the format that `plete` understands (see section on objects above).

```js
const dataSrc = async function filterCountries(query) {
  const response = await fetch(`https://restcountries.eu/rest/v2/name/${query}`);
  if (!response.ok) {
    return [];
  }
  const result = await response.json();
  if (!Array.isArray(result)) {
    return [];
  }
  return result.map(function(v) {
    return {
      id: v.alpha3Code,
      label: v.name
    }
  });
}
```

### `select`

A callback to call with the `id` property of the selected value.

When `dataSrc` is an array of strings, this will be the chosen string.

```js
function countrySelected(value) {
  console.log(`The user selected: ${value}`);
}
```

### `autoFirst` (optional)

When set, the first suggestion will be automatically highlighted.

Default: `true`

### `busy` (optional)

A callback to call before filtering.

### `cssClass` (optional)

One or more CSS classes to add to the containing `<plete-list>` element

### `maxItems` (optional)

The number of suggestions to display.

Default: `5`

### `ready` (optional)

A callback to call after filtering.

### `minChars` (optional)

The number of characters required before searching (when using remote).

Default: `3`

### `render` (optional)

A callback to render individual values.

This can be used for enriching the rendering of individual values.

```js
render: function renderOption(item) {
  return `<b>${item.id}</b> ${item.label}`;
}
```

<h2 id="demos">Demos</h2>

### String values

The `dataSrc` option can be an array of string values.

```js
const dataSrc = ["Denmark", "Germany", "Spain", "Sweden", "United Kingdom"];
```

{% include examples/string-values.html %}

### Object values

```js
const dataSrc = [
  { id: "BEL", label: "Belgium" },
  { id: "DNK", label: "Denmark" },
  { id: "GER", label: "Germany" },
  { id: "MCO", label: "Monaco" },
  { id: "SRB", label: "Serbia" },
  { id: "ESP", label: "Spain" },
  { id: "SWE", label: "Sweden" },
  { id: "GBR", label: "United Kingdom" },
  { id: "USA", label: "United States of America" }
];
```

{% include examples/object-values.html %}

### Remote filtering

```js
const dataSrc = async function filterCountries(query) {
  const response = await fetch(`https://restcountries.eu/rest/v2/name/${query}`);
  if (!response.ok) {
    return [];
  }
  const result = await response.json();
  if (!Array.isArray(result)) {
    return [];
  }
  return result.map(function(v) {
    return {
      id: v.alpha3Code,
      label: v.name
    }
  });
}
```

{% include examples/remote-filtering.html %}


### Custom rendering of options

{% include examples/custom-rendering.html %}


## Styling

When `plete` is initialized the DOM is updated. The passed `<input>` element is wrapped in a `<plete>` element. This element is an invisible *inline* element, which provides the container necessary for WAI-ARIA support (see [WAI-ARIA Authoring Practices combobox section](https://www.w3.org/TR/wai-aria-practices-1.2/#combobox)).

You can customize the rendering by overriding styles for `<plete>, <plete-list>, <plete-item>` elements.

When the suggestions are visible, the DOM looks like this (with additional ARIA attrbutes).

```html
<plete>
  <input type="text" name="country" autocomplete="off" />
  <plete-list>
    <plete-item value="BEL">Belgium</plete-item>
    <plete-item value="DNK">Denmark</plete-item>
    <!-- ... --->
  </plete-list>
</plete>
```

### `autocomplete="off"`

In order to avoid collisions with browser built-in autocomplete, it is recommended to use `autocomplete="off"` on the `<input>` element that is used with `plete`.

```html
<input type="text" name="country" autocomplete="off" />
```

See: [MDN article about autocomplete attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
