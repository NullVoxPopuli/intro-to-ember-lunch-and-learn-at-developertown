// import Ember from 'ember';
import Route from '@ember/routing/route';
import RSVP from 'rsvp';

// export default class extends Route {
//   store = Ember.inject.service('store');
//
//   model() {
//     return RSVP.hash({
//       events: this.get('store').findAll('event')
//     });
//   }
// }

export default Route.extend({
  // store: Ember.inject.service(),

  model() {
    return RSVP.hash({
      events: this.get('store').findAll('event')
    });
  }
})
