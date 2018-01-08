# ember-intro

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-intro`
* `yarn install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `yarn lint:js`
* `yarn lint:js --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)



#### Sequence of commands to create this repo
```bash
# master version of ember-cli is needed for the new blueprint
npm install -g https://github.com/ember-cli/ember-cli.git
# create app named ember-intro using a specified blueprint, and using yarn instead of npm
ember new ember-intro --blueprint module-unification-app --yarn
# start the dev server
ember server
```

visit localhost:4200
remove/comment out welcome page

```bash
# super helpful library for reducing boilerplate
ember install ember-decorators \
  @ember-decorators/babel-transforms \
  ember-reactive-helpers \
  ember-cli-chai
# add
#   "parser": "babel-eslint",
# to eslint config
yarn add --dev babel-eslint
```
copy over / write button-counter component

edit routes file and add
some-route
  sub-route-a
  sub-route-b

- ember-concurrency for debounced searching
- deploy to something
https://github.com/ef4/ember-cli-deploy-git
