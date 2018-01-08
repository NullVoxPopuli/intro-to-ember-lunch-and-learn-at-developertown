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
