import Component from '@ember/component';
import { action, computed } from 'ember-decorators/object'

export default class ButtonCounter extends Component {
  number = 1;
  power = 2;

  @computed('number', 'power')
  squared(number, power) {
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
