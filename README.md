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

now walk through the generated files.

```bash
# (new shell)
# super helpful library for reducing boilerplate
ember install ember-decorators \
  @ember-decorators/babel-transforms \
  ember-reactive-helpers \
  ember-cli-chai \
  ember-concurrency \
  ember-concurrency-decorators \
  ember-cli-notifications \
  ember-load


# add
#   parser: "babel-eslint",
# to eslint config
yarn add --dev \
  babel-eslint \
  babel-plugin-transform-object-rest-spread
```


 - copy css
 - add button-counter to ui/components (component.js and template.hbs)



```js
import Component from '@ember/component';
import { action, computed } from 'ember-decorators/object'

export default class ButtonCounter extends Component {
  // babel-transform-class-properties
  // defines class properties in the constructor.
  // constructor-set properties override the values
  // passed via the handlebars invocation (set on the prototype).
  // legacy crap.
  //
  // NOTE: use legacy extends in demo
  number = this.number || 1;
  power = this.power || 2;

  @computed('number', 'power')
  result(number, power) {
    return Math.pow(number, power);
  }

  @action
  increment() {
    this.set('number', this.get('number') + 1)
  }

  @action
  decrement() {
    this.set('number', this.get('number') - 1)
  }
}
```

```hbs
<div class='centered'>
  <label>Base</label>
  {{input
    class='borderless'
    type='number'
    value=number
    onChange=(action (mut power))}}

  <br />

  <label>Power</label>
  {{input
    class='borderless'
    type='number'
    value=power
    onChange=(action (mut power))}}

  <br />

  <button onClick={{action 'increment'}}>
    Increment
  </button>

  <button onClick={{action 'decrement'}}>
    Decrement
  </button>

  <h2>
    {{number}}<sup>{{power}}</sup> = {{result}}
  </h2>

</div>
```

the open browser will will error (notice how the source mapping is correct...)
(restart ember server - notice page is still white)

add component render to routes/application/template.hbs
```hbs
{{button-counter}}
```

edit routes file and add
```js
this.route('data-route');
this.route('some-route', function() {
  this.route('sub-route-a');
  this.route('sub-route-b');
});
```



Copy Routes from This Project, because typing and time.
Copy data folder.


Testing
- tests/acceptance/navigation-test.js
- tests/integration/components/button-counter/component-test.js


- ember-concurrency for debounced searching
- deploy to something
https://github.com/ef4/ember-cli-deploy-git
