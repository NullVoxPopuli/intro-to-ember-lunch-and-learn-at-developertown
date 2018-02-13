import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class extends Route {
  model() {
    return RSVP.hash({
      requests: this.get('store').findAll('request')
    });
  }
}
