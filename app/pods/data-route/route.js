import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class extends Route {
  model() {
    return RSVP.hash({
      requests: this.store.findAll('request')
    });
  }
}
