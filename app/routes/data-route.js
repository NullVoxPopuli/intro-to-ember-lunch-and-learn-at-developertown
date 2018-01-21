// import Ember from 'ember';
import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class extends Route {
  model() {
    return RSVP.hash({
      events: this.get('store').findAll('event')
    });
  }
}
