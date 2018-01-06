import Route from '@ember/routing/route';
import RSVP from 'rsvp';
// import { service } from 'ember-decorators/service';
import { inject as service } from '@ember/service';


// export default class extends Route {
//   // @service store;
//   store = service();
//
//   model() {
//     debugger;
//     return RSVP.hash({
//       events: this.get('store').findAll('event')
//     });
//   }
// }


export default Route.extend({
  // store: service(),

  model: function(idk) {
    return RSVP.hash({
      events: this.get('store').findAll('event')
    });
  },
});
