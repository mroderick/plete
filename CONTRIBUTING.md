# Contributing to Plete

There are several ways of contributing to Plete

* Look into [issues tagged `help-wanted`](https://github.com/mroderick/plete/issues?q=is%3Aopen+is%3Aissue+label%3A%22Help+wanted%22)
* Help [improve the documentation](https://github.com/mroderick/plete/tree/master) published
  at [the Plete documentation site](https://plete.dev). [Documentation issues](https://github.com/mroderick/plete/issues?q=is%3Aopen+is%3Aissue+label%3ADocumentation).
* Help someone understand and use Plete on [Stack Overflow](https://stackoverflow.com/questions/tagged/plete-js)
* Report an issue, please read instructions below
* Help with triage of the [issues](https://github.com/mroderick/plete/issues). The clearer they are, the more likely they are to be fixed soon.
* Contribute to the code base.

## Contributor Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## Reporting an issue

To save everyone time and make it much more likely for your issue to be understood, worked on and resolved quickly, it would help if you're mindful of [How to Report Bugs Effectively](http://www.chiark.greenend.org.uk/~sgtatham/bugs.html) when pressing the "Submit new issue" button.

As a minimum, please report the following:

* Which environment are you using?
  * Browser
  * OS
* Which version of Plete?
* How are you loading Plete?
* What other libraries are you using?
* What you expected to happen
* What actually happens
* Describe **with code** how to reproduce the fault

See [our issue templates](https://github.com/mroderick/plete/blob/master/.github/) for all details.

## Contributing to the code base

Pick [an issue](https://github.com/mroderick/plete/issues) to fix, or pitch
new features. To avoid wasting your time, please ask for feedback on feature
suggestions with [an issue](https://github.com/mroderick/plete/issues/new/choose).

Make sure you have read [GitHub's guide on forking](https://guides.github.com/activities/forking/). It explains the general contribution process and key concepts.

### Making a pull request

Please try to [write great commit messages](http://chris.beams.io/posts/git-commit/).

There are numerous benefits to great commit messages

* They allow Plete users to understand the consequences of updating to a newer version
* They help contributors understand what is going on with the codebase, allowing features and fixes to be developed faster
* They save maintainers time when compiling the changelog for a new release

If you're already a few commits in by the time you read this, you can still [change your commit messages](https://help.github.com/articles/changing-a-commit-message/).

Also, before making your pull request, consider if your commits make sense on their own (and potentially should be multiple pull requests) or if they can be squashed down to one commit (with a great message). There are no hard and fast rules about this, but being mindful of your readers greatly help you author good commits.

### Use EditorConfig

To save everyone some time, please use [EditorConfig](http://editorconfig.org), so your editor helps make
sure we all use the same encoding, indentation, line endings, etc.

### Installation

The Plete developer environment requires Node/NPM & Git . Please make sure you have
Node installed, and install the project dependencies:

    $ npm install

This will also install a pre-commit hook, that runs style validation on staged files.


### Linting and style

Plete uses [ESLint](http://eslint.org) to keep the codebase free of lint, and uses [Prettier](https://prettier.io) to keep consistent style.

If you are contributing to the Plete project, you'll probably want to configure your editors ([ESLint](https://eslint.org/docs/user-guide/integrations#editors), [Prettier](https://prettier.io/docs/en/editors.html)) to make editing code a more enjoyable experience.

The ESLint verification (which includes Prettier) will be run before unit tests in the CI environment. The build will fail if the source code does not pass the style check.


You can run the linter locally:

```
$ npm run lint
```

You can fix a lot lint and style violations automatically:

```
$ npm run lint -- --fix
```

To ensure consistent reporting of lint warnings, you should use the same versions of ESLint and Prettier as defined in `package.json` (which is what the CI servers use).

### Run the tests

The command below runs tests

    $ npm test

### Code Coverage

This repository requires 100%, line, branch and function coverage. For more information about code coverage please see [Wikipedia - Code Coverage](https://en.wikipedia.org/wiki/Code_coverage).

Running the command to run all tests with coverage checking, produces a coverage report in both [lcov](http://ltp.sourceforge.net/coverage/lcov.php) and html formats; as well as providing verbose command line output.

The command below runs tests with coverage

    $ npm run test-check-coverage

### Compiling a built version of the library

Build requires Node.

To build run

    $ node run build

