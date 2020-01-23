# Changes

## 0.3.1

- [`f557a0d`](https://github.com/mroderick/plete/commit/f557a0d5cfb249770e00165810df7cde0fe90da8)
  Fix invalid escaping in filter
    >
    > The fix applied in 23e0cea57c6484e9d1a148ed58e3644ccbc3ba29 ended up
    > breaking the filtering when `dataSrc` is an array of strings.
    >
    > Given ["Denmark", "Germany", "Spain", "Sweden", "United Kingdom"] it would not
    > return ["Denmark"] for a query of "Den".
    >
    > The solution is to use a battle hardened escaping function, from:
    >
    > https://stackoverflow.com/a/3561711
    >
- [`9d9fe17`](https://github.com/mroderick/plete/commit/9d9fe1781c22532832331c0fb93778e179e0f127)
  Remove unused file: europe.json
- [`ce97f00`](https://github.com/mroderick/plete/commit/ce97f007c291c5ab726b4608e244264bc934ce28)
  Remove cruft from changelog

_Released on 2020-01-23._

## 0.3.0

- [`37015f1`](https://github.com/mroderick/plete/commit/37015f1fedbb27b073e4989c24da7a9bbf6c3557)
  Add support for cancellation

_Released on 2020-01-21._

## 0.2.3

- [`23e0cea`](https://plete.dev/commit/23e0cea57c6484e9d1a148ed58e3644ccbc3ba29)
  Fix #6: escape input string on local filter

_Released on 2020-01-08._

## 0.2.2

- [`57eca5f`](https://plete.dev/commit/57eca5f89318183f3263e76042f98502fbf17279)
  Add keywords to package.json
    >
    > This should help people find it easier
    >
- [`b33c888`](https://plete.dev/commit/b33c888911207fe3e0035fd5743f21fcbb34f4ac)
  Fix typo in README

_Released on 2020-01-05._

## 0.2.1

- [`19baf0a`](https://plete.dev/commit/19baf0a87c6cbd6a2f692e564a8b342909e32b93)
  Add links to documentation site
- [`b18099c`](https://plete.dev/commit/b18099c7095c50ec3f42318e197dd8fa7cbdccfe)
  Fix broken test
    >
    > .classList is an object, not a string
    >

_Released on 2020-01-05._

## 0.2.0

- Add WAI-ARIA support
    >
    > This widget is considered a combobox and should use the rules for the
    > combobox role.
    >
    > See: https://www.w3.org/TR/wai-aria-1.2/#combobox

## 0.1.0

- Initial version
