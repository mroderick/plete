# Changes

## 0.3.0

- [`c2e46ff`](https://github.com/mroderick/plete/commit/c2e46ff2bae36ba7edfb634b4d9ed71cfe188f1a)
  Add cancellation example to development file
- [`37015f1`](https://github.com/mroderick/plete/commit/37015f1fedbb27b073e4989c24da7a9bbf6c3557)
  Add support for cancellation
- [`4fb5ea9`](https://github.com/mroderick/plete/commit/4fb5ea9e472c070cb4fa4082da7e8e970cff86e9)
  Allow dataSrc to return either promise or object
    >
    > This will enables work to support cancellation of requests
    >
    > The object will have two properties: `promise` and `abort`.
    >
- [`6315b98`](https://github.com/mroderick/plete/commit/6315b98fe9c18d8f5a224a3e4e60c1d74960cbf4)
  Filter should not return a promise
    >
    > Filter should return the same type as the `dataSrc` function, so that
    > the `dataSrc` function can decide to use either a promise or an object
    > with a promise and an abort function
    >
- [`2f16aa3`](https://github.com/mroderick/plete/commit/2f16aa30639d4dc8c9a774eed077ea32f17cc973)
  Bump eslint-config-prettier from 6.7.0 to 6.9.0 (dependabot-preview[bot])
    >
    > Bumps [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) from 6.7.0 to 6.9.0.
    > - [Release notes](https://github.com/prettier/eslint-config-prettier/releases)
    > - [Changelog](https://github.com/prettier/eslint-config-prettier/blob/master/CHANGELOG.md)
    > - [Commits](https://github.com/prettier/eslint-config-prettier/commits/v6.9.0)
    >
    > Signed-off-by: dependabot-preview[bot] <support@dependabot.com>
- [`a09d722`](https://github.com/mroderick/plete/commit/a09d7223168823182dcbb48730f926664f17dc1c)
  Bump @testing-library/dom from 6.10.1 to 6.11.0 (dependabot-preview[bot])
    >
    > Bumps [@testing-library/dom](https://github.com/testing-library/dom-testing-library) from 6.10.1 to 6.11.0.
    > - [Release notes](https://github.com/testing-library/dom-testing-library/releases)
    > - [Changelog](https://github.com/testing-library/dom-testing-library/blob/master/CHANGELOG.md)
    > - [Commits](https://github.com/testing-library/dom-testing-library/compare/v6.10.1...v6.11.0)
    >
    > Signed-off-by: dependabot-preview[bot] <support@dependabot.com>
- [`546f851`](https://github.com/mroderick/plete/commit/546f8516b7473f6ce624998a617e375611e28aee)
  Bump eslint-plugin-testing-library from 1.3.4 to 1.4.1 (dependabot-preview[bot])
    >
    > Bumps [eslint-plugin-testing-library](https://github.com/Belco90/eslint-plugin-testing-library) from 1.3.4 to 1.4.1.
    > - [Release notes](https://github.com/Belco90/eslint-plugin-testing-library/releases)
    > - [Commits](https://github.com/Belco90/eslint-plugin-testing-library/compare/v1.3.4...v1.4.1)
    >
    > Signed-off-by: dependabot-preview[bot] <support@dependabot.com>
- [`077a933`](https://github.com/mroderick/plete/commit/077a933aba551aa0b3daa23547ebeeda8f66408a)
  Bump eslint-plugin-prettier from 3.1.1 to 3.1.2 (dependabot-preview[bot])
    >
    > Bumps [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) from 3.1.1 to 3.1.2.
    > - [Release notes](https://github.com/prettier/eslint-plugin-prettier/releases)
    > - [Changelog](https://github.com/prettier/eslint-plugin-prettier/blob/master/CHANGELOG.md)
    > - [Commits](https://github.com/prettier/eslint-plugin-prettier/compare/v3.1.1...v3.1.2)
    >
    > Signed-off-by: dependabot-preview[bot] <support@dependabot.com>
- [`2296a97`](https://github.com/mroderick/plete/commit/2296a973bb53999e4e063ad1b6c8b95e2e2cf19b)
  Bump husky from 4.0.7 to 4.0.10 (dependabot-preview[bot])
    >
    > Bumps [husky](https://github.com/typicode/husky) from 4.0.7 to 4.0.10.
    > - [Release notes](https://github.com/typicode/husky/releases)
    > - [Changelog](https://github.com/typicode/husky/blob/master/CHANGELOG.md)
    > - [Commits](https://github.com/typicode/husky/compare/v4.0.7...v4.0.10)
    >
    > Signed-off-by: dependabot-preview[bot] <support@dependabot.com>
- [`d1cc4bc`](https://github.com/mroderick/plete/commit/d1cc4bc3b9df562c718bf1c0434e4da75c0c5708)
  Rename test file
    >
    > This was from before the package was named
    >
- [`2cfd891`](https://github.com/mroderick/plete/commit/2cfd8915585e453a05f412c25b161021a211625a)
  Don't use eslint-plugin-compat for tests
    >
    > We're only running the tests in LTS Node, so don't need to test for
    > problems in legacy browsers for the test files.
    >
    > Source files will still be checked by eslint-plugin-compat
    >
- [`919e083`](https://github.com/mroderick/plete/commit/919e083a0d584fa5e2e76cb1cd333cc85aadecdb)
  Add basic unit test of suggest
- [`f6fe67f`](https://github.com/mroderick/plete/commit/f6fe67f0d85ec09b75901d6925963b9751d7c5bb)
  Add state-helper.js
    >
    > This is a very basic version of a helper for getting a state object for
    > tests
    >
- [`2f52a1d`](https://github.com/mroderick/plete/commit/2f52a1dd3765fd93b0c4f55aeb66a47823a0462b)
  Add proxyquire-helper.js
    >
    > This is a basic helper to make it easier to loading the default export
    > from modules using proxyquire.
    >
- [`6092813`](https://github.com/mroderick/plete/commit/60928131f7518eb796d1c02852d886e028c0aa29)
  Add proxyquire dependency
- [`2af604e`](https://github.com/mroderick/plete/commit/2af604e5c96f6194f0c534c8fe39064881476e27)
  Bump eslint-plugin-testing-library from 1.3.2 to 1.3.4 (dependabot-preview[bot])
    >
    > Bumps [eslint-plugin-testing-library](https://github.com/Belco90/eslint-plugin-testing-library) from 1.3.2 to 1.3.4.
    > - [Release notes](https://github.com/Belco90/eslint-plugin-testing-library/releases)
    > - [Commits](https://github.com/Belco90/eslint-plugin-testing-library/compare/v1.3.2...v1.3.4)
    >
    > Signed-off-by: dependabot-preview[bot] <support@dependabot.com>
- [`3f15bf4`](https://github.com/mroderick/plete/commit/3f15bf446e7301b1bb41967f81bd159260acb523)
  Bump husky from 3.1.0 to 4.0.7 (dependabot-preview[bot])
    >
    > Bumps [husky](https://github.com/typicode/husky) from 3.1.0 to 4.0.7.
    > - [Release notes](https://github.com/typicode/husky/releases)
    > - [Changelog](https://github.com/typicode/husky/blob/master/CHANGELOG.md)
    > - [Commits](https://github.com/typicode/husky/compare/v3.1.0...v4.0.7)
    >
    > Signed-off-by: dependabot-preview[bot] <support@dependabot.com>
- [`7ec48b4`](https://github.com/mroderick/plete/commit/7ec48b4fb36db6988cd7b99eaf818a2f2b0320f8)
  Run lint and test in parallel
- [`1b9bc1d`](https://github.com/mroderick/plete/commit/1b9bc1df480539ad200ea82ee80dbe80bc681d2c)
  Bump @studio/changes from 1.7.0 to 2.0.0 (dependabot-preview[bot])
    >
    > Bumps [@studio/changes](https://github.com/javascript-studio/studio-changes) from 1.7.0 to 2.0.0.
    > - [Release notes](https://github.com/javascript-studio/studio-changes/releases)
    > - [Changelog](https://github.com/javascript-studio/studio-changes/blob/master/CHANGES.md)
    > - [Commits](https://github.com/javascript-studio/studio-changes/compare/v1.7.0...v2.0.0)
    >
    > Signed-off-by: dependabot-preview[bot] <support@dependabot.com>
- [`8eff338`](https://github.com/mroderick/plete/commit/8eff338453947fb9acdf8d469f07b6c99a98aab1)
  Bump eslint-plugin-import from 2.18.2 to 2.20.0 (dependabot-preview[bot])
    >
    > Bumps [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) from 2.18.2 to 2.20.0.
    > - [Release notes](https://github.com/benmosher/eslint-plugin-import/releases)
    > - [Changelog](https://github.com/benmosher/eslint-plugin-import/blob/master/CHANGELOG.md)
    > - [Commits](https://github.com/benmosher/eslint-plugin-import/compare/v2.18.2...v2.20.0)
    >
    > Signed-off-by: dependabot-preview[bot] <support@dependabot.com>
- [`870f05d`](https://github.com/mroderick/plete/commit/870f05dc8a049722cadf9b3dddef8e219235404e)
  Bump @sinonjs/referee-sinon from 6.0.0 to 6.0.1 (dependabot-preview[bot])
    >
    > Bumps [@sinonjs/referee-sinon](https://github.com/sinonjs/referee-sinon) from 6.0.0 to 6.0.1.
    > - [Release notes](https://github.com/sinonjs/referee-sinon/releases)
    > - [Changelog](https://github.com/sinonjs/referee-sinon/blob/master/CHANGES.md)
    > - [Commits](https://github.com/sinonjs/referee-sinon/compare/v6.0.0...v6.0.1)
    >
    > Signed-off-by: dependabot-preview[bot] <support@dependabot.com>
- [`747ca1c`](https://github.com/mroderick/plete/commit/747ca1c73f24b2447c5fb2c5ff7815d0e44a7601)
  Bump http-server from 0.12.0 to 0.12.1 (dependabot-preview[bot])
    >
    > Bumps [http-server](https://github.com/http-party/http-server) from 0.12.0 to 0.12.1.
    > - [Release notes](https://github.com/http-party/http-server/releases)
    > - [Commits](https://github.com/http-party/http-server/compare/v0.12.0...v0.12.1)
    >
    > Signed-off-by: dependabot-preview[bot] <support@dependabot.com>
- [`e05374a`](https://github.com/mroderick/plete/commit/e05374ad5fe6414f519fcd4e826214afbb398298)
  Bump rollup from 1.27.11 to 1.29.0 (dependabot-preview[bot])
    >
    > Bumps [rollup](https://github.com/rollup/rollup) from 1.27.11 to 1.29.0.
    > - [Release notes](https://github.com/rollup/rollup/releases)
    > - [Changelog](https://github.com/rollup/rollup/blob/master/CHANGELOG.md)
    > - [Commits](https://github.com/rollup/rollup/compare/v1.27.11...v1.29.0)
    >
    > Signed-off-by: dependabot-preview[bot] <support@dependabot.com>
- [`5ecf13d`](https://github.com/mroderick/plete/commit/5ecf13d94fb0c959af2e96bf48015b8e4ec6662e)
  Bump rollup-plugin-terser from 5.1.3 to 5.2.0 (dependabot-preview[bot])
    >
    > Bumps [rollup-plugin-terser](https://github.com/TrySound/rollup-plugin-terser) from 5.1.3 to 5.2.0.
    > - [Release notes](https://github.com/TrySound/rollup-plugin-terser/releases)
    > - [Commits](https://github.com/TrySound/rollup-plugin-terser/compare/v5.1.3...v5.2.0)
    >
    > Signed-off-by: dependabot-preview[bot] <support@dependabot.com>
- [`77e3e2b`](https://github.com/mroderick/plete/commit/77e3e2b7441423c0b7b182d9bdb6c94fc9dfaa62)
  Bump eslint from 6.7.2 to 6.8.0 (dependabot-preview[bot])
    >
    > Bumps [eslint](https://github.com/eslint/eslint) from 6.7.2 to 6.8.0.
    > - [Release notes](https://github.com/eslint/eslint/releases)
    > - [Changelog](https://github.com/eslint/eslint/blob/master/CHANGELOG.md)
    > - [Commits](https://github.com/eslint/eslint/compare/v6.7.2...v6.8.0)
    >
    > Signed-off-by: dependabot-preview[bot] <support@dependabot.com>
- [`fe90dd2`](https://github.com/mroderick/plete/commit/fe90dd26c2713c346ae68c9b7351de50494db71a)
  Bump nyc from 14.1.1 to 15.0.0 (dependabot-preview[bot])
    >
    > Bumps [nyc](https://github.com/istanbuljs/nyc) from 14.1.1 to 15.0.0.
    > - [Release notes](https://github.com/istanbuljs/nyc/releases)
    > - [Changelog](https://github.com/istanbuljs/nyc/blob/master/CHANGELOG.md)
    > - [Commits](https://github.com/istanbuljs/nyc/compare/v14.1.1...v15.0.0)
    >
    > Signed-off-by: dependabot-preview[bot] <support@dependabot.com>
- [`399106b`](https://github.com/mroderick/plete/commit/399106b934c6d1c6bfc5287c22fdecc1a35365c5)
  Upgrade mocha to latest
- [`099d8c9`](https://github.com/mroderick/plete/commit/099d8c9c865ae617f18498e89fa938f33f3f51bd)
  Tidy changelog

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
